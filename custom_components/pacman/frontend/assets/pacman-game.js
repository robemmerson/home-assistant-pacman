/* pacman-game.js — Self-contained HTML5 Canvas Pac-Man
 * API: window.PacMan(canvas) → { stop() }
 */
(function () {
  "use strict";

  window.PacMan = function PacMan(canvas) {
    // ── Directions ──────────────────────────────────────────────────────
    var UP = 0,
      RIGHT = 1,
      DOWN = 2,
      LEFT = 3;
    var DX = [0, 1, 0, -1];
    var DY = [-1, 0, 1, 0];

    // ── Tile types ───────────────────────────────────────────────────────
    var WALL = 0,
      DOT = 1,
      ENERGIZER = 2,
      EMPTY = 3,
      DOOR = 4;

    // ── Ghost modes ───────────────────────────────────────────────────────
    var G_SCATTER = 0,
      G_CHASE = 1,
      G_FRIGHT = 2,
      G_EATEN = 3,
      G_HOUSE = 4,
      G_LEAVING = 5;

    // ── Maze (28 × 31) ───────────────────────────────────────────────────
    // # wall  . dot  o energizer  - ghost door  (space) empty
    var MAZE_STR = [
      "############################",
      "#............##............#",
      "#.####.#####.##.#####.####.#",
      "#o####.#####.##.#####.####o#",
      "#.####.#####.##.#####.####.#",
      "#..........................#",
      "#.####.##.########.##.####.#",
      "#.####.##.########.##.####.#",
      "#......##....##....##......#",
      "######.#####    #####.######",
      "######.#####    #####.######",
      "######.##          ##.######",
      "######.## ###--### ##.######",
      "######.## #      # ##.######",
      "      .## #      # ##.      ",
      "######.## #      # ##.######",
      "######.## ######## ##.######",
      "######.##          ##.######",
      "#......##....##....##......#",
      "######.##          ##.######",
      "#............##............#",
      "#.####.#####.##.#####.####.#",
      "#.####.#####.##.#####.####.#",
      "#o..##................##..o#",
      "###.##.##.########.##.##.###",
      "###.##.##.########.##.##.###",
      "#......##....##....##......#",
      "#.##########.##.##########.#",
      "#.##########.##.##########.#",
      "#..........................#",
      "############################",
    ];

    var COLS = 28,
      ROWS = 31;
    var SCORE_ROWS = 3,
      INFO_ROWS = 2;
    var GAME_ROWS = ROWS + SCORE_ROWS + INFO_ROWS; // 36

    // Mode schedule [scatter, chase, ...] in frames at 60fps
    var MODE_SCHED = [
      7 * 60,
      20 * 60,
      7 * 60,
      20 * 60,
      5 * 60,
      20 * 60,
      5 * 60,
      999999,
    ];
    var FRIGHT_DUR = 6 * 60;
    var FRIGHT_FLASH = 2 * 60; // flash during last 2s

    // Ghost scatter corner targets [col, row]
    var SCATTER_TGT = [
      [25, 0],
      [2, 0],
      [27, 30],
      [0, 30],
    ];
    // Ghost colors
    var GHOST_CLR = ["#ff0000", "#ffb8ff", "#00ffff", "#ffb852"];

    // ── Maze helpers ─────────────────────────────────────────────────────
    var baseMaze, maze;

    function parseMaze(strs) {
      return strs.map(function (s) {
        var row = [];
        for (var c = 0; c < COLS; c++) {
          var ch = s[c] || " ";
          row.push(
            ch === "#"
              ? WALL
              : ch === "."
                ? DOT
                : ch === "o"
                  ? ENERGIZER
                  : ch === "-"
                    ? DOOR
                    : EMPTY
          );
        }
        return row;
      });
    }

    function copyMaze(m) {
      return m.map(function (r) {
        return r.slice();
      });
    }

    function countDots(m) {
      var n = 0;
      for (var r = 0; r < ROWS; r++)
        for (var c = 0; c < COLS; c++)
          if (m[r][c] === DOT || m[r][c] === ENERGIZER) n++;
      return n;
    }

    function tileAt(c, r) {
      if (r < 0 || r >= ROWS) return EMPTY;
      c = ((c % COLS) + COLS) % COLS;
      return maze[r][c];
    }

    function setTile(c, r, v) {
      if (r < 0 || r >= ROWS) return;
      c = ((c % COLS) + COLS) % COLS;
      maze[r][c] = v;
    }

    // Can entity pass through tile at (c, r)?
    // ghosts can pass the DOOR (except when frightened/eaten)
    function canPass(c, r, isGhost, isFright) {
      var t = tileAt(c, r);
      if (t === WALL) return false;
      if (t === DOOR) return isGhost && !isFright;
      return true;
    }

    // ── Canvas / rendering ────────────────────────────────────────────────
    var ctx = canvas.getContext("2d");
    var TILE, OX, OY;

    function resize() {
      // Fit to canvas keeping aspect ratio
      var tw = Math.floor(canvas.width / COLS);
      var th = Math.floor(canvas.height / GAME_ROWS);
      TILE = Math.max(4, Math.min(tw, th));
      OX = Math.floor((canvas.width - COLS * TILE) / 2);
      OY =
        Math.floor((canvas.height - GAME_ROWS * TILE) / 2) + SCORE_ROWS * TILE;
    }

    // Map (col, row) to pixel centre of the tile in game coordinates
    function px(col) {
      return OX + col * TILE;
    }

    function py(row) {
      return OY + row * TILE;
    }

    // ── Input ─────────────────────────────────────────────────────────────
    var wantDir = RIGHT;

    function onKey(e) {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          wantDir = UP;
          e.preventDefault();
          break;
        case "ArrowRight":
        case "d":
        case "D":
          wantDir = RIGHT;
          e.preventDefault();
          break;
        case "ArrowDown":
        case "s":
        case "S":
          wantDir = DOWN;
          e.preventDefault();
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          wantDir = LEFT;
          e.preventDefault();
          break;
      }
    }

    document.addEventListener("keydown", onKey);

    // Touch / swipe support
    var touchStartX = 0,
      touchStartY = 0;

    function onTouchStart(e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }

    function onTouchEnd(e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy)) {
        wantDir = dx > 0 ? RIGHT : LEFT;
      } else {
        wantDir = dy > 0 ? DOWN : UP;
      }
    }

    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd, { passive: true });

    // ── Audio ─────────────────────────────────────────────────────────────
    var audioCtx;

    function beep(freq, dur, vol, type) {
      try {
        if (!audioCtx)
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = type || "square";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(vol || 0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          audioCtx.currentTime + dur
        );
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + dur);
      } catch (ex) {
        /* no audio context */
      }
    }

    var wakaToggle = false;

    function wakaSound() {
      beep(wakaToggle ? 240 : 200, 0.05, 0.06);
      wakaToggle = !wakaToggle;
    }

    function energizerSound() {
      beep(550, 0.25, 0.15);
      setTimeout(function () {
        beep(700, 0.15, 0.15);
      }, 120);
    }

    function eatGhostSound() {
      beep(880, 0.1, 0.2);
      setTimeout(function () {
        beep(660, 0.1, 0.2);
      }, 100);
    }

    function deathSound() {
      var freqs = [480, 440, 400, 360, 320, 280, 240, 200, 160, 120];
      for (var i = 0; i < freqs.length; i++) {
        (function (f, delay) {
          setTimeout(function () {
            beep(f, 0.09, 0.15);
          }, delay);
        })(freqs[i], i * 80);
      }
    }

    function levelSound() {
      var notes = [300, 400, 500, 600, 500, 400, 300];
      for (var i = 0; i < notes.length; i++) {
        (function (f, delay) {
          setTimeout(function () {
            beep(f, 0.12, 0.15);
          }, delay);
        })(notes[i], i * 100);
      }
    }

    // ── Game state ────────────────────────────────────────────────────────
    var score,
      hiScore = 0,
      lives,
      dotsEaten,
      totalDots,
      level;
    // states: 'ready' 'playing' 'dying' 'nextlevel' 'gameover' 'attract'
    var gameState, stateTimer;
    var frightenTimer, modeTimer, modePhase;
    var ghostCombo, frameCount;
    var pac, ghosts;
    var bonusFruit, bonusTimer, bonusScore;
    var flashTimer; // for level-complete flash

    // Fruit score values per level
    var FRUIT_SCORES = [100, 300, 500, 700, 1000, 2000, 3000, 5000];

    // Nearest tile-center to a fractional position
    // Tile centres: 0.5, 1.5, 2.5 ...
    function nearestCenter(p) {
      return Math.floor(p + 0.5) - 0.5 + 0.5;
      // Simplify: Math.floor(p) + 0.5
    }

    // Actually the nearest center:
    // centers at 0.5, 1.5, ...
    // For p=0.3: floor(0.3)=0, so center=0.5. dist=0.2. Next center=1.5, dist=1.2. Correct: 0.5
    // For p=0.7: center=0.5 (dist 0.2) or 1.5 (dist 0.8) → 0.5. But wait: floor(0.7)=0, center=0.5 ✓
    // For p=1.2: floor(1.2)=1, center=1.5 ✓
    // For p=0.9: center=0.5 (dist 0.4) or 1.5 (dist 0.6) → 0.5. floor(0.9)=0, center=0.5 ✓
    // For p=1.0: floor(1.0)=1, center=1.5. But center 0.5 is closer! dist to 0.5=0.5, dist to 1.5=0.5. Tie.
    // Real nearestCenter needs rounding:
    function nc(p) {
      return Math.round(p - 0.5) + 0.5;
    }

    // ── Entities ──────────────────────────────────────────────────────────
    function makePac() {
      return {
        col: 13.5,
        row: 23.5,
        dir: LEFT,
        mouth: 0.0,
        mouthDir: 1,
        alive: true,
        deathFrame: 0,
      };
    }

    function makePacSpeed() {
      return Math.min(0.12 + (level - 1) * 0.005, 0.18);
    }

    function makeGhostSpeed(mode) {
      if (mode === G_EATEN) return 0.25;
      if (mode === G_FRIGHT) return Math.max(0.06, 0.09 - (level - 1) * 0.003);
      return Math.min(0.11 + (level - 1) * 0.004, 0.17);
    }

    function makeGhost(i) {
      var startCols = [13.5, 13.5, 11.5, 15.5];
      var startRows = [11.5, 13.5, 13.5, 13.5];
      var dotsLeave = [0, 0, 30, 60];
      return {
        i: i,
        col: startCols[i],
        row: startRows[i],
        dir: i === 0 ? LEFT : UP,
        mode: i === 0 ? G_SCATTER : G_HOUSE,
        prevMode: G_SCATTER,
        dotsToLeave: dotsLeave[i],
        leavePhase: 0,
      };
    }

    // ── Initialization ───────────────────────────────────────────────────
    function initGame() {
      baseMaze = parseMaze(MAZE_STR);
      score = 0;
      lives = 3;
      level = 1;
      startLevel();
    }

    function startLevel() {
      maze = copyMaze(baseMaze);
      totalDots = countDots(maze);
      dotsEaten = 0;
      modePhase = 0;
      modeTimer = MODE_SCHED[0];
      frightenTimer = 0;
      ghostCombo = 0;
      frameCount = 0;
      pac = makePac();
      ghosts = [0, 1, 2, 3].map(makeGhost);
      wantDir = LEFT;
      bonusFruit = false;
      bonusTimer = 0;
      flashTimer = 0;
      gameState = "ready";
      stateTimer = 3 * 60;
    }

    function restartRound() {
      modePhase = 0;
      modeTimer = MODE_SCHED[0];
      frightenTimer = 0;
      ghostCombo = 0;
      pac = makePac();
      ghosts = [0, 1, 2, 3].map(makeGhost);
      wantDir = LEFT;
      gameState = "ready";
      stateTimer = 2 * 60;
    }

    // ── Movement ──────────────────────────────────────────────────────────

    // Move an entity (pac or ghost) by speed in tiles.
    // Returns whether movement actually happened (for sound triggers).
    // Entity: { col, row, dir, ... }
    function moveEntity(e, speed, isGhost, isFright) {
      var col = e.col,
        row = e.row,
        dir = e.dir;

      // Snap to centre if within turn threshold
      var centerCol = nc(col);
      var centerRow = nc(row);
      var distC = Math.abs(col - centerCol);
      var distR = Math.abs(row - centerRow);
      var threshold = speed + 0.02;

      if (distC < threshold && distR < threshold) {
        // At a tile centre — can we turn?
        var tileC = Math.round(centerCol - 0.5); // integer tile index
        var tileR = Math.round(centerRow - 0.5);

        if (!isGhost) {
          // Pac-Man: try wanted direction
          if (wantDir !== dir) {
            var nc2 = tileC + DX[wantDir];
            var nr2 = tileR + DY[wantDir];
            if (canPass(nc2, nr2, false, false)) {
              e.col = centerCol;
              e.row = centerRow;
              e.dir = wantDir;
              dir = wantDir;
              col = centerCol;
              row = centerRow;
            }
          }
        } else {
          // Ghost: pick best direction toward target (no reversing)
          ghostChooseDir(e, tileC, tileR, isFright);
          dir = e.dir;
        }
      }

      // Move in current direction
      var nextCol = e.col + DX[dir] * speed;
      var nextRow = e.row + DY[dir] * speed;

      // Wrap tunnel (row 14, columns 0-5 and 22-27)
      if (nextCol < 0) nextCol += COLS;
      if (nextCol >= COLS) nextCol -= COLS;

      // Wall check: look at the tile the leading edge would enter
      var checkC = Math.floor(nextCol + DX[dir] * 0.4);
      var checkR = Math.floor(nextRow + DY[dir] * 0.4);
      checkC = ((checkC % COLS) + COLS) % COLS;

      if (!canPass(checkC, checkR, isGhost, isFright)) {
        // Stop at current centre
        e.col = nc(e.col);
        e.row = nc(e.row);
      } else {
        e.col = nextCol;
        e.row = nextRow;
      }
    }

    // Ghost direction decision at tile centre (tileC, tileR)
    function ghostChooseDir(g, tileC, tileR, isFright) {
      var oppDir = (g.dir + 2) % 4;

      if (g.mode === G_HOUSE || g.mode === G_LEAVING) return; // handled separately

      if (isFright) {
        // Random direction, not reverse
        var dirs = [];
        for (var d = 0; d < 4; d++) {
          if (d === oppDir) continue;
          if (canPass(tileC + DX[d], tileR + DY[d], true, true)) dirs.push(d);
        }
        if (dirs.length > 0)
          g.dir = dirs[Math.floor(Math.random() * dirs.length)];
        return;
      }

      if (g.mode === G_EATEN) {
        // Head back to ghost house door (col 13-14, row 12)
        var target = { col: 13.5, row: 12.5 };
        bestDir(g, tileC, tileR, target.col, target.row, true, false);
        return;
      }

      var tx, ty;
      if (g.mode === G_SCATTER) {
        tx = SCATTER_TGT[g.i][0];
        ty = SCATTER_TGT[g.i][1];
      } else {
        // G_CHASE
        tx = pac.col;
        ty = pac.row;
        if (g.i === 1) {
          // Pinky: 4 tiles ahead of pac
          tx = pac.col + DX[pac.dir] * 4;
          ty = pac.row + DY[pac.dir] * 4;
        } else if (g.i === 2) {
          // Inky: use Blinky + Pac offset
          var blinky = ghosts[0];
          var pivot_col = pac.col + DX[pac.dir] * 2;
          var pivot_row = pac.row + DY[pac.dir] * 2;
          tx = pivot_col + (pivot_col - blinky.col);
          ty = pivot_row + (pivot_row - blinky.row);
        } else if (g.i === 3) {
          // Clyde: scatter if close to pac
          var dist = Math.hypot(g.col - pac.col, g.row - pac.row);
          if (dist < 8) {
            tx = SCATTER_TGT[3][0];
            ty = SCATTER_TGT[3][1];
          }
        }
      }

      bestDir(g, tileC, tileR, tx, ty, true, false);
    }

    function bestDir(g, tileC, tileR, tx, ty, isGhost, isFright) {
      var oppDir = (g.dir + 2) % 4;
      var bestD = -1,
        bestDist = Infinity;

      // Preference order: UP, LEFT, DOWN, RIGHT (classic Pac-Man tie-breaking)
      var order = [UP, LEFT, DOWN, RIGHT];
      for (var oi = 0; oi < order.length; oi++) {
        var d = order[oi];
        if (d === oppDir) continue;
        var nc3 = tileC + DX[d];
        var nr3 = tileR + DY[d];
        if (!canPass(nc3, nr3, isGhost, isFright)) continue;
        var dist = Math.hypot(nc3 - tx, nr3 - ty);
        if (dist < bestDist) {
          bestDist = dist;
          bestD = d;
        }
      }

      if (bestD !== -1) g.dir = bestD;
    }

    // Handle ghost leaving the house
    function updateGhostHouse(g) {
      if (g.mode === G_HOUSE) {
        // Bob up and down in house
        if (g.leavePhase === undefined) g.leavePhase = 0;
        g.leavePhase = (g.leavePhase + 0.05) % (Math.PI * 2);
        g.row = 13.5 + Math.sin(g.leavePhase) * 0.5;
        // Check if allowed to leave
        if (dotsEaten >= g.dotsToLeave) {
          g.mode = G_LEAVING;
        }
        return;
      }

      if (g.mode === G_LEAVING) {
        // Move to centre of house (col 13.5)
        var spd = 0.05;
        if (Math.abs(g.col - 13.5) > spd) {
          g.col += g.col < 13.5 ? spd : -spd;
        } else {
          g.col = 13.5;
          // Move up to exit
          g.row -= spd;
          if (g.row <= 11.5) {
            g.row = 11.5;
            g.mode = frightenTimer > 0 ? G_FRIGHT : G_SCATTER;
            g.dir = LEFT;
          }
        }
      }
    }

    // When ghost is eaten, re-enter house
    function updateEatenGhost(g) {
      if (g.mode !== G_EATEN) return;
      // When reaching the door area, enter house
      if (Math.abs(g.col - 13.5) < 0.15 && Math.abs(g.row - 12.5) < 0.2) {
        g.col = 13.5;
        g.row = 13.5;
        g.mode = G_LEAVING;
        g.dir = UP;
      }
    }

    // ── Update ────────────────────────────────────────────────────────────
    function update() {
      frameCount++;

      if (gameState === "ready") {
        if (--stateTimer <= 0) gameState = "playing";
        return;
      }

      if (gameState === "dying") {
        stateTimer--;
        pac.deathFrame = Math.min(18, Math.floor((60 - stateTimer) / 3));
        if (stateTimer <= 0) {
          if (--lives <= 0) {
            gameState = "gameover";
            stateTimer = 4 * 60;
          } else {
            restartRound();
          }
        }
        return;
      }

      if (gameState === "nextlevel") {
        stateTimer--;
        flashTimer = Math.floor(stateTimer / 8) % 2;
        if (stateTimer <= 0) {
          level++;
          startLevel();
        }
        return;
      }

      if (gameState === "gameover") {
        if (--stateTimer <= 0) {
          // Reset to attract / ready
          score = 0;
          lives = 3;
          level = 1;
          startLevel();
        }
        return;
      }

      if (gameState !== "playing") return;

      // ── Mode timer (scatter/chase) ──
      if (frightenTimer > 0) {
        frightenTimer--;
        if (frightenTimer === 0) {
          // End fright
          for (var gi = 0; gi < 4; gi++) {
            if (ghosts[gi].mode === G_FRIGHT)
              ghosts[gi].mode = ghosts[gi].prevMode;
          }
          ghostCombo = 0;
        }
      } else {
        modeTimer--;
        if (modeTimer <= 0) {
          modePhase = Math.min(modePhase + 1, MODE_SCHED.length - 1);
          modeTimer = MODE_SCHED[modePhase];
          var newMode = modePhase % 2 === 0 ? G_SCATTER : G_CHASE;
          for (var gi2 = 0; gi2 < 4; gi2++) {
            var gh = ghosts[gi2];
            if (gh.mode === G_SCATTER || gh.mode === G_CHASE) {
              gh.mode = newMode;
              gh.dir = (gh.dir + 2) % 4; // reverse on mode switch
            }
          }
        }
      }

      // ── Move Pac-Man ──
      var pacSpd = makePacSpeed();
      moveEntity(pac, pacSpd, false, false);

      // ── Pac-Man mouth animation ──
      pac.mouth += 0.15 * pac.mouthDir;
      if (pac.mouth >= 0.35 || pac.mouth <= 0) pac.mouthDir *= -1;

      // ── Move ghosts ──
      for (var gi3 = 0; gi3 < 4; gi3++) {
        var g = ghosts[gi3];
        if (g.mode === G_HOUSE || g.mode === G_LEAVING) {
          updateGhostHouse(g);
        } else if (g.mode === G_EATEN) {
          var gSpd = makeGhostSpeed(G_EATEN);
          moveEntity(g, gSpd, true, false);
          updateEatenGhost(g);
        } else {
          var isFright = g.mode === G_FRIGHT;
          var gSpd2 = makeGhostSpeed(isFright ? G_FRIGHT : G_CHASE);
          // Slow in tunnel
          if (g.row >= 13.8 && g.row <= 14.2 && (g.col < 6 || g.col > 22))
            gSpd2 *= 0.5;
          moveEntity(g, gSpd2, true, isFright);
        }
      }

      // ── Dot / energizer collision ──
      var pc = Math.round(pac.col - 0.5);
      var pr = Math.round(pac.row - 0.5);
      var tile = tileAt(pc, pr);

      if (tile === DOT) {
        setTile(pc, pr, EMPTY);
        score += 10;
        dotsEaten++;
        wakaSound();
        // Bonus fruit appears at 70 and 170 dots
        if (dotsEaten === 70 || dotsEaten === 170) {
          bonusFruit = true;
          bonusTimer = 9 * 60;
        }
        // Elroy-like speed for Blinky when few dots remain
        if (totalDots - dotsEaten <= 20) {
          if (ghosts[0].mode === G_SCATTER || ghosts[0].mode === G_CHASE)
            ghosts[0].mode = G_CHASE;
        }
        if (dotsEaten >= totalDots) {
          levelSound();
          gameState = "nextlevel";
          stateTimer = 4 * 60;
          flashTimer = 0;
        }
      } else if (tile === ENERGIZER) {
        setTile(pc, pr, EMPTY);
        score += 50;
        dotsEaten++;
        energizerSound();
        frightenTimer = FRIGHT_DUR + Math.max(0, (4 - level) * 60);
        ghostCombo = 0;
        for (var gi4 = 0; gi4 < 4; gi4++) {
          var gf = ghosts[gi4];
          if (gf.mode === G_SCATTER || gf.mode === G_CHASE) {
            gf.prevMode = gf.mode;
            gf.mode = G_FRIGHT;
            gf.dir = (gf.dir + 2) % 4;
          }
        }
        if (dotsEaten >= totalDots) {
          levelSound();
          gameState = "nextlevel";
          stateTimer = 4 * 60;
        }
      }

      // ── Bonus fruit collision ──
      if (bonusFruit && bonusTimer > 0) {
        bonusTimer--;
        if (bonusTimer <= 0) bonusFruit = false;
        if (Math.abs(pac.col - 13.5) < 0.5 && Math.abs(pac.row - 17.5) < 0.5) {
          var fIdx = Math.min(level - 1, FRUIT_SCORES.length - 1);
          score += FRUIT_SCORES[fIdx];
          bonusFruit = false;
          bonusTimer = 0;
          beep(700, 0.3, 0.2);
        }
      }

      // ── Ghost collision ──
      for (var gi5 = 0; gi5 < 4; gi5++) {
        var gh2 = ghosts[gi5];
        var dist = Math.hypot(pac.col - gh2.col, pac.row - gh2.row);
        if (dist < 0.7) {
          if (gh2.mode === G_FRIGHT) {
            // Eat ghost
            ghostCombo++;
            var pts = 200 * Math.pow(2, ghostCombo - 1);
            score += pts;
            eatGhostSound();
            gh2.mode = G_EATEN;
            gh2.dir = (gh2.dir + 2) % 4;
          } else if (
            gh2.mode !== G_EATEN &&
            gh2.mode !== G_HOUSE &&
            gh2.mode !== G_LEAVING
          ) {
            // Pac-Man dies
            pac.alive = false;
            deathSound();
            gameState = "dying";
            stateTimer = 60;
            for (var gi6 = 0; gi6 < 4; gi6++) ghosts[gi6].mode = G_HOUSE;
          }
        }
      }

      if (score > hiScore) hiScore = score;
    }

    // ── Rendering ─────────────────────────────────────────────────────────

    function render() {
      resize();
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawHUD();
      drawMaze();
      drawBonusFruit();

      if (gameState === "dying") {
        drawGhosts();
        drawPacDeath();
      } else {
        drawGhosts();
        if (pac.alive) drawPac();
      }

      drawOverlay();
    }

    function drawHUD() {
      var scoreY = OY - SCORE_ROWS * TILE + TILE;
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold " + Math.floor(TILE * 0.75) + "px monospace";
      ctx.textAlign = "left";
      ctx.fillText("SCORE", OX + 2, scoreY);
      ctx.fillStyle = "#ffff00";
      ctx.fillText(score, OX + 2, scoreY + TILE * 0.9);

      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("HI-SCORE", OX + (COLS * TILE) / 2, scoreY);
      ctx.fillStyle = "#ffff00";
      ctx.fillText(hiScore, OX + (COLS * TILE) / 2, scoreY + TILE * 0.9);

      // Lives
      var infoY = OY + ROWS * TILE + TILE * 0.5;
      for (var i = 0; i < lives; i++) {
        drawPacIcon(OX + TILE * 1.5 + i * TILE * 1.5, infoY, TILE * 0.45);
      }

      // Level indicator dots
      var maxFruit = Math.min(level, 7);
      for (var j = 0; j < maxFruit; j++) {
        ctx.beginPath();
        ctx.arc(
          OX + COLS * TILE - TILE * 0.8 - j * TILE * 0.9,
          infoY,
          TILE * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "#ffb852";
        ctx.fill();
      }
    }

    function drawPacIcon(x, y, r) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, r, 0.3, Math.PI * 2 - 0.3);
      ctx.closePath();
      ctx.fillStyle = "#ffff00";
      ctx.fill();
    }

    function drawMaze() {
      for (var r = 0; r < ROWS; r++) {
        for (var c = 0; c < COLS; c++) {
          var tile = maze[r][c];
          var x = OX + c * TILE;
          var y = OY + r * TILE;

          if (tile === WALL) {
            drawWallTile(c, r, x, y);
          } else if (tile === DOOR) {
            ctx.fillStyle = "#ffb8ff";
            ctx.fillRect(x + 1, y + TILE / 2 - 1, TILE - 2, 2);
          } else if (tile === DOT) {
            ctx.beginPath();
            ctx.arc(
              x + TILE / 2,
              y + TILE / 2,
              Math.max(1.5, TILE * 0.1),
              0,
              Math.PI * 2
            );
            ctx.fillStyle = "#ffb8ae";
            ctx.fill();
          } else if (tile === ENERGIZER) {
            // Blink every 15 frames
            if (Math.floor(frameCount / 15) % 2 === 0) {
              ctx.beginPath();
              ctx.arc(
                x + TILE / 2,
                y + TILE / 2,
                Math.max(3, TILE * 0.28),
                0,
                Math.PI * 2
              );
              ctx.fillStyle = "#ffb8ae";
              ctx.fill();
            }
          }
        }
      }
    }

    // Draw a wall tile with classic blue colour and inner highlight
    function drawWallTile(c, r, x, y) {
      // For nextlevel flash
      var col = gameState === "nextlevel" && flashTimer ? "#ffffff" : "#1a1aff";
      var highlight =
        gameState === "nextlevel" && flashTimer ? "#ffffff" : "#3030ff";
      ctx.fillStyle = col;
      ctx.fillRect(x, y, TILE, TILE);

      // Simple inner arc to create the classic rounded wall look
      ctx.strokeStyle = highlight;
      ctx.lineWidth = Math.max(1, TILE / 8);
      var h = TILE / 3;
      var neighbors = {
        up: tileAt(c, r - 1) === WALL,
        down: tileAt(c, r + 1) === WALL,
        left: tileAt(c - 1, r) === WALL,
        right: tileAt(c + 1, r) === WALL,
      };

      // Draw inner highlight edges for non-wall neighbors
      ctx.beginPath();
      if (!neighbors.up) {
        ctx.moveTo(x, y + h);
        ctx.lineTo(x + TILE, y + h);
      }
      if (!neighbors.down) {
        ctx.moveTo(x, y + TILE - h);
        ctx.lineTo(x + TILE, y + TILE - h);
      }
      if (!neighbors.left) {
        ctx.moveTo(x + h, y);
        ctx.lineTo(x + h, y + TILE);
      }
      if (!neighbors.right) {
        ctx.moveTo(x + TILE - h, y);
        ctx.lineTo(x + TILE - h, y + TILE);
      }
      ctx.stroke();
    }

    function drawBonusFruit() {
      if (!bonusFruit || bonusTimer <= 0) return;
      var x = OX + 13.5 * TILE;
      var y = OY + 17.5 * TILE;
      var r = TILE * 0.4;
      // Simple cherry-like fruit
      ctx.beginPath();
      ctx.arc(x - r * 0.4, y + r * 0.3, r * 0.55, 0, Math.PI * 2);
      ctx.fillStyle = "#ff0044";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + r * 0.4, y + r * 0.3, r * 0.55, 0, Math.PI * 2);
      ctx.fill();
      // Stems
      ctx.strokeStyle = "#00cc00";
      ctx.lineWidth = Math.max(1, TILE / 10);
      ctx.beginPath();
      ctx.moveTo(x - r * 0.4, y - r * 0.25);
      ctx.quadraticCurveTo(x, y - r * 1.2, x, y - r * 0.8);
      ctx.moveTo(x + r * 0.4, y - r * 0.25);
      ctx.quadraticCurveTo(x, y - r * 1.2, x, y - r * 0.8);
      ctx.stroke();
    }

    function drawPac() {
      var x = px(pac.col);
      var y = py(pac.row);
      var r = TILE * 0.45;
      var mouthAngle = pac.mouth * Math.PI;

      // Facing angle: RIGHT=0, DOWN=π/2, LEFT=π, UP=3π/2
      var baseAngle = [-Math.PI / 2, 0, Math.PI / 2, Math.PI][pac.dir];

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(
        x,
        y,
        r,
        baseAngle + mouthAngle,
        baseAngle + Math.PI * 2 - mouthAngle
      );
      ctx.closePath();
      ctx.fillStyle = "#ffff00";
      ctx.fill();
    }

    function drawPacDeath() {
      if (!pac.deathFrame) return;
      var x = px(pac.col);
      var y = py(pac.row);
      var r = TILE * 0.45;
      var progress = pac.deathFrame / 18; // 0..1

      // Shrink from full to half-circle opening up
      var startAngle = (-Math.PI / 2) * progress;
      var span = Math.PI * (2 - progress * 2);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, r * (1 - progress * 0.6), startAngle, startAngle + span);
      ctx.closePath();
      ctx.fillStyle = "#ffff00";
      ctx.fill();
    }

    function drawGhosts() {
      for (var i = 0; i < 4; i++) {
        drawGhost(ghosts[i]);
      }
    }

    function drawGhost(g) {
      if (g.mode === G_HOUSE) {
        // Still draw them inside house
      }
      var x = px(g.col);
      var y = py(g.row);
      var r = TILE * 0.45;

      var color;
      if (g.mode === G_EATEN) {
        // Only draw eyes
        drawGhostEyes(x, y, r, g.dir);
        return;
      } else if (g.mode === G_FRIGHT) {
        // Flashing when frightenTimer low
        if (
          frightenTimer < FRIGHT_FLASH &&
          Math.floor(frightenTimer / 10) % 2 === 0
        ) {
          color = "#ffffff";
        } else {
          color = "#0000d8";
        }
      } else {
        color = GHOST_CLR[g.i];
      }

      // Ghost body
      ctx.beginPath();
      ctx.arc(x, y - r * 0.1, r, Math.PI, 0);
      // Wavy bottom
      var waveY = y + r * 0.9;
      var nWaves = 3;
      var waveW = (r * 2) / nWaves;
      ctx.lineTo(x + r, waveY);
      for (var w = 0; w < nWaves; w++) {
        var wx1 = x + r - (w + 0.5) * waveW;
        var wx2 = x + r - (w + 1) * waveW;
        ctx.quadraticCurveTo(
          wx1,
          waveY + (w % 2 === 0 ? r * 0.3 : -r * 0.1),
          wx2,
          waveY
        );
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      if (g.mode !== G_FRIGHT) {
        drawGhostEyes(x, y, r, g.dir);
      } else {
        // Frightened face
        ctx.fillStyle = "#ffb8ff";
        // Simple wavy mouth
        ctx.beginPath();
        ctx.moveTo(x - r * 0.35, y + r * 0.3);
        ctx.quadraticCurveTo(x - r * 0.15, y + r * 0.1, x, y + r * 0.3);
        ctx.quadraticCurveTo(
          x + r * 0.15,
          y + r * 0.5,
          x + r * 0.35,
          y + r * 0.3
        );
        ctx.stroke();
        // Eyes
        ctx.fillStyle = "#ffb8ff";
        ctx.beginPath();
        ctx.arc(x - r * 0.25, y, r * 0.1, 0, Math.PI * 2);
        ctx.arc(x + r * 0.25, y, r * 0.1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawGhostEyes(x, y, r, dir) {
      var eyeOffX = r * 0.28;
      var eyeOffY = -r * 0.15;
      var eyeR = r * 0.2;
      var pupilR = r * 0.12;

      // Pupil offset based on direction
      var pDX = DX[dir] * eyeR * 0.6;
      var pDY = DY[dir] * eyeR * 0.6;

      for (var side = -1; side <= 1; side += 2) {
        var ex = x + side * eyeOffX;
        var ey = y + eyeOffY;
        ctx.beginPath();
        ctx.arc(ex, ey, eyeR, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ex + pDX, ey + pDY, pupilR, 0, Math.PI * 2);
        ctx.fillStyle = "#0000cc";
        ctx.fill();
      }
    }

    function drawOverlay() {
      var cx = OX + (COLS * TILE) / 2;
      var cy = OY + (ROWS * TILE) / 2;

      if (gameState === "ready") {
        ctx.fillStyle = "#ffff00";
        ctx.font = "bold " + Math.floor(TILE) + "px monospace";
        ctx.textAlign = "center";
        ctx.fillText("READY!", cx, cy + TILE);
      } else if (gameState === "gameover") {
        ctx.fillStyle = "#ff0000";
        ctx.font = "bold " + Math.floor(TILE) + "px monospace";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", cx, cy);
      }
    }

    // ── Game loop ─────────────────────────────────────────────────────────
    var stopped = false;
    var rafId;
    var lastTime = 0;
    var accumulator = 0;
    var STEP = 1000 / 60; // 60fps target

    function loop(timestamp) {
      if (stopped) return;
      rafId = requestAnimationFrame(loop);

      var elapsed = timestamp - lastTime;
      lastTime = timestamp;
      if (elapsed > 100) elapsed = 100; // cap on tab-switch

      accumulator += elapsed;
      while (accumulator >= STEP) {
        update();
        accumulator -= STEP;
      }

      render();
    }

    // ── Start ─────────────────────────────────────────────────────────────
    baseMaze = parseMaze(MAZE_STR);
    initGame();
    canvas.setAttribute("tabindex", "0");
    canvas.focus();
    rafId = requestAnimationFrame(function (t) {
      lastTime = t;
      loop(t);
    });

    // ── Public API ────────────────────────────────────────────────────────
    function stop() {
      stopped = true;
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("keydown", onKey);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchend", onTouchEnd);
      if (audioCtx) {
        try {
          audioCtx.close();
        } catch (ex) {
          /* ignore */
        }
      }
    }

    return { stop: stop };
  };
})();
