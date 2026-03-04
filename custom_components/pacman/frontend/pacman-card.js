var t, e, n, i, o, a, r, l, u, s, d, c;
function f(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(
      Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
    )
  );
}
function h(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    (e &&
      (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      n.push.apply(n, i));
  }
  return n;
}
function p(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? h(Object(n), !0).forEach(function (e) {
          v(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : h(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
  }
  return t;
}
function v(t, e, n) {
  return (
    (e = U(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function _(t, e, n, i) {
  var o = g(I(1 & i ? t.prototype : t), e, n);
  return 2 & i && "function" == typeof o
    ? function (t) {
        return o.apply(n, t);
      }
    : o;
}
function g() {
  return (
    (g =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, n) {
            var i = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = I(t)); );
              return t;
            })(t, e);
            if (i) {
              var o = Object.getOwnPropertyDescriptor(i, e);
              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
            }
          }),
    g.apply(null, arguments)
  );
}
function y(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return z(t);
    })(t) ||
    (function (t) {
      if (
        ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t["@@iterator"]
      )
        return Array.from(t);
    })(t) ||
    C(t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function m(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var n =
        null == t
          ? null
          : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
      if (null != n) {
        var i,
          o,
          a,
          r,
          l = [],
          u = !0,
          s = !1;
        try {
          if (((a = (n = n.call(t)).next), 0 === e)) {
            if (Object(n) !== n) return;
            u = !1;
          } else
            for (
              ;
              !(u = (i = a.call(n)).done) && (l.push(i.value), l.length !== e);
              u = !0
            );
        } catch (t) {
          ((s = !0), (o = t));
        } finally {
          try {
            if (!u && null != n.return && ((r = n.return()), Object(r) !== r))
              return;
          } finally {
            if (s) throw o;
          }
        }
        return l;
      }
    })(t, e) ||
    C(t, e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function b() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
    e,
    n = "function" == typeof Symbol ? Symbol : {},
    i = n.iterator || "@@iterator",
    o = n.toStringTag || "@@toStringTag";
  function a(n, i, o, a) {
    var u = i && i.prototype instanceof l ? i : l,
      s = Object.create(u.prototype);
    return (
      k(
        s,
        "_invoke",
        (function (n, i, o) {
          var a,
            l,
            u,
            s = 0,
            d = o || [],
            c = !1,
            f = {
              p: 0,
              n: 0,
              v: t,
              a: h,
              f: h.bind(t, 4),
              d: function (e, n) {
                return ((a = e), (l = 0), (u = t), (f.n = n), r);
              },
            };
          function h(n, i) {
            for (l = n, u = i, e = 0; !c && s && !o && e < d.length; e++) {
              var o,
                a = d[e],
                h = f.p,
                p = a[2];
              n > 3
                ? (o = p === i) &&
                  ((u = a[(l = a[4]) ? 5 : ((l = 3), 3)]), (a[4] = a[5] = t))
                : a[0] <= h &&
                  ((o = n < 2 && h < a[1])
                    ? ((l = 0), (f.v = i), (f.n = a[1]))
                    : h < p &&
                      (o = n < 3 || a[0] > i || i > p) &&
                      ((a[4] = n), (a[5] = i), (f.n = p), (l = 0)));
            }
            if (o || n > 1) return r;
            throw ((c = !0), i);
          }
          return function (o, d, p) {
            if (s > 1) throw TypeError("Generator is already running");
            for (
              c && 1 === d && h(d, p), l = d, u = p;
              (e = l < 2 ? t : u) || !c;
            ) {
              a ||
                (l
                  ? l < 3
                    ? (l > 1 && (f.n = -1), h(l, u))
                    : (f.n = u)
                  : (f.v = u));
              try {
                if (((s = 2), a)) {
                  if ((l || (o = "next"), (e = a[o]))) {
                    if (!(e = e.call(a, u)))
                      throw TypeError("iterator result is not an object");
                    if (!e.done) return e;
                    ((u = e.value), l < 2 && (l = 0));
                  } else
                    (1 === l && (e = a.return) && e.call(a),
                      l < 2 &&
                        ((u = TypeError(
                          "The iterator does not provide a '" + o + "' method"
                        )),
                        (l = 1)));
                  a = t;
                } else if ((e = (c = f.n < 0) ? u : n.call(i, f)) !== r) break;
              } catch (e) {
                ((a = t), (l = 1), (u = e));
              } finally {
                s = 1;
              }
            }
            return { value: e, done: c };
          };
        })(n, o, a),
        !0
      ),
      s
    );
  }
  var r = {};
  function l() {}
  function u() {}
  function s() {}
  e = Object.getPrototypeOf;
  var d = [][i]
      ? e(e([][i]()))
      : (k((e = {}), i, function () {
          return this;
        }),
        e),
    c = (s.prototype = l.prototype = Object.create(d));
  function f(t) {
    return (
      Object.setPrototypeOf
        ? Object.setPrototypeOf(t, s)
        : ((t.__proto__ = s), k(t, o, "GeneratorFunction")),
      (t.prototype = Object.create(c)),
      t
    );
  }
  return (
    (u.prototype = s),
    k(c, "constructor", s),
    k(s, "constructor", u),
    (u.displayName = "GeneratorFunction"),
    k(s, o, "GeneratorFunction"),
    k(c),
    k(c, o, "Generator"),
    k(c, i, function () {
      return this;
    }),
    k(c, "toString", function () {
      return "[object Generator]";
    }),
    (b = function () {
      return { w: a, m: f };
    })()
  );
}
function k(t, e, n, i) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch (t) {
    o = 0;
  }
  ((k = function (t, e, n, i) {
    function a(e, n) {
      k(t, e, function (t) {
        return this._invoke(e, n, t);
      });
    }
    e
      ? o
        ? o(t, e, { value: n, enumerable: !i, configurable: !i, writable: !i })
        : (t[e] = n)
      : (a("next", 0), a("throw", 1), a("return", 2));
  }),
    k(t, e, n, i));
}
function w(t, e, n, i, o, a, r) {
  try {
    var l = t[a](r),
      u = l.value;
  } catch (t) {
    return void n(t);
  }
  l.done ? e(u) : Promise.resolve(u).then(i, o);
}
function A(t) {
  return function () {
    var e = this,
      n = arguments;
    return new Promise(function (i, o) {
      var a = t.apply(e, n);
      function r(t) {
        w(a, i, o, r, l, "next", t);
      }
      function l(t) {
        w(a, i, o, r, l, "throw", t);
      }
      r(void 0);
    });
  };
}
function O(t, e, n) {
  return (
    (e = I(e)),
    (function (t, e) {
      if (e && ("object" == x(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return $(t);
    })(t, S() ? Reflect.construct(e, n || [], I(t).constructor) : e.apply(t, n))
  );
}
function $(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function E(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && j(t, e));
}
function T(t) {
  var e = "function" == typeof Map ? new Map() : void 0;
  return (
    (T = function (t) {
      if (
        null === t ||
        !(function (t) {
          try {
            return -1 !== Function.toString.call(t).indexOf("[native code]");
          } catch (e) {
            return "function" == typeof t;
          }
        })(t)
      )
        return t;
      if ("function" != typeof t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, n);
      }
      function n() {
        return (function (t, e, n) {
          if (S()) return Reflect.construct.apply(null, arguments);
          var i = [null];
          i.push.apply(i, e);
          var o = new (t.bind.apply(t, i))();
          return (n && j(o, n.prototype), o);
        })(t, arguments, I(this).constructor);
      }
      return (
        (n.prototype = Object.create(t.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        j(n, t)
      );
    }),
    T(t)
  );
}
function S() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (S = function () {
    return !!t;
  })();
}
function j(t, e) {
  return (
    (j = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return ((t.__proto__ = e), t);
        }),
    j(t, e)
  );
}
function I(t) {
  return (
    (I = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    I(t)
  );
}
function P(t, e) {
  var n =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!n) {
    if (
      Array.isArray(t) ||
      (n = C(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      n && (t = n);
      var i = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
        },
        e: function (t) {
          throw t;
        },
        f: o,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var a,
    r = !0,
    l = !1;
  return {
    s: function () {
      n = n.call(t);
    },
    n: function () {
      var t = n.next();
      return ((r = t.done), t);
    },
    e: function (t) {
      ((l = !0), (a = t));
    },
    f: function () {
      try {
        r || null == n.return || n.return();
      } finally {
        if (l) throw a;
      }
    },
  };
}
function C(t, e) {
  if (t) {
    if ("string" == typeof t) return z(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return (
      "Object" === n && t.constructor && (n = t.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(t)
        : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? z(t, e)
          : void 0
    );
  }
}
function z(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
  return i;
}
function D(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function M(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(t, U(i.key), i));
  }
}
function R(t, e, n) {
  return (
    e && M(t.prototype, e),
    n && M(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function U(t) {
  var e = (function (t, e) {
    if ("object" != x(t) || !t) return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 !== n) {
      var i = n.call(t, e || "default");
      if ("object" != x(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  })(t, "string");
  return "symbol" == x(e) ? e : e + "";
}
function x(t) {
  return (
    (x =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    x(t)
  );
}
var N = "pacman-card",
  H = "".concat(N, "-editor");
function V(t, e, n, i) {
  var o,
    a = arguments.length,
    r =
      a < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i;
  if (
    "object" === ("undefined" == typeof Reflect ? "undefined" : x(Reflect)) &&
    "function" == typeof Reflect.decorate
  )
    r = Reflect.decorate(t, e, n, i);
  else
    for (var l = t.length - 1; l >= 0; l--)
      (o = t[l]) && (r = (a < 3 ? o(r) : a > 3 ? o(e, n, r) : o(e, n)) || r);
  return (a > 3 && r && Object.defineProperty(e, n, r), r);
}
"function" == typeof SuppressedError && SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K = globalThis,
  L =
    K.ShadowRoot &&
    (void 0 === K.ShadyCSS || K.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  B = Symbol(),
  G = new WeakMap(),
  W = (function () {
    return R(
      function t(e, n, i) {
        if ((D(this, t), (this._$cssResult$ = !0), i !== B))
          throw Error(
            "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
          );
        ((this.cssText = e), (this.t = n));
      },
      [
        {
          key: "styleSheet",
          get: function () {
            var t = this.o,
              e = this.t;
            if (L && void 0 === t) {
              var n = void 0 !== e && 1 === e.length;
              (n && (t = G.get(e)),
                void 0 === t &&
                  ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
                  n && G.set(e, t)));
            }
            return t;
          },
        },
        {
          key: "toString",
          value: function () {
            return this.cssText;
          },
        },
      ]
    );
  })(),
  F = L
    ? function (t) {
        return t;
      }
    : function (t) {
        return t instanceof CSSStyleSheet
          ? (function (t) {
              var e,
                n = "",
                i = P(t.cssRules);
              try {
                for (i.s(); !(e = i.n()).done; ) {
                  n += e.value.cssText;
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              return (function (t) {
                return new W("string" == typeof t ? t : t + "", void 0, B);
              })(n);
            })(t)
          : t;
      },
  q = Object.is,
  J = Object.defineProperty,
  Z = Object.getOwnPropertyDescriptor,
  Y = Object.getOwnPropertyNames,
  Q = Object.getOwnPropertySymbols,
  X = Object.getPrototypeOf,
  tt = globalThis,
  et = tt.trustedTypes,
  nt = et ? et.emptyScript : "",
  it = tt.reactiveElementPolyfillSupport,
  ot = function (t, e) {
    return t;
  },
  at = {
    toAttribute: function (t, e) {
      switch (e) {
        case Boolean:
          t = t ? nt : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute: function (t, e) {
      var n = t;
      switch (e) {
        case Boolean:
          n = null !== t;
          break;
        case Number:
          n = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            n = JSON.parse(t);
          } catch (t) {
            n = null;
          }
      }
      return n;
    },
  },
  rt = function (t, e) {
    return !q(t, e);
  },
  lt = {
    attribute: !0,
    type: String,
    converter: at,
    reflect: !1,
    useDefault: !1,
    hasChanged: rt,
  };
((null !== (t = Symbol.metadata) && void 0 !== t) ||
  (Symbol.metadata = Symbol("metadata")),
  (null !== (e = tt.litPropertyMetadata) && void 0 !== e) ||
    (tt.litPropertyMetadata = new WeakMap()));
var ut = (function () {
  function t() {
    var e;
    return (
      D(this, t),
      ((e = O(this, t))._$Ep = void 0),
      (e.isUpdatePending = !1),
      (e.hasUpdated = !1),
      (e._$Em = null),
      e._$Ev(),
      e
    );
  }
  return (
    E(t, T(HTMLElement)),
    R(
      t,
      [
        {
          key: "_$Ev",
          value: function () {
            var t,
              e = this;
            ((this._$ES = new Promise(function (t) {
              return (e.enableUpdating = t);
            })),
              (this._$AL = new Map()),
              this._$E_(),
              this.requestUpdate(),
              null === (t = this.constructor.l) ||
                void 0 === t ||
                t.forEach(function (t) {
                  return t(e);
                }));
          },
        },
        {
          key: "addController",
          value: function (t) {
            var e, n;
            ((null !== (e = this._$EO) && void 0 !== e
              ? e
              : (this._$EO = new Set())
            ).add(t),
              void 0 !== this.renderRoot &&
                this.isConnected &&
                (null === (n = t.hostConnected) || void 0 === n || n.call(t)));
          },
        },
        {
          key: "removeController",
          value: function (t) {
            var e;
            null === (e = this._$EO) || void 0 === e || e.delete(t);
          },
        },
        {
          key: "_$E_",
          value: function () {
            var t,
              e = new Map(),
              n = P(this.constructor.elementProperties.keys());
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var i = t.value;
                this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
            e.size > 0 && (this._$Ep = e);
          },
        },
        {
          key: "createRenderRoot",
          value: function () {
            var t,
              e =
                null !== (t = this.shadowRoot) && void 0 !== t
                  ? t
                  : this.attachShadow(this.constructor.shadowRootOptions);
            return (
              (function (t, e) {
                if (L)
                  t.adoptedStyleSheets = e.map(function (t) {
                    return t instanceof CSSStyleSheet ? t : t.styleSheet;
                  });
                else {
                  var n,
                    i = P(e);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var o = n.value,
                        a = document.createElement("style"),
                        r = K.litNonce;
                      (void 0 !== r && a.setAttribute("nonce", r),
                        (a.textContent = o.cssText),
                        t.appendChild(a));
                    }
                  } catch (t) {
                    i.e(t);
                  } finally {
                    i.f();
                  }
                }
              })(e, this.constructor.elementStyles),
              e
            );
          },
        },
        {
          key: "connectedCallback",
          value: function () {
            var t, e;
            ((null !== (t = this.renderRoot) && void 0 !== t) ||
              (this.renderRoot = this.createRenderRoot()),
              this.enableUpdating(!0),
              null === (e = this._$EO) ||
                void 0 === e ||
                e.forEach(function (t) {
                  var e;
                  return null === (e = t.hostConnected) || void 0 === e
                    ? void 0
                    : e.call(t);
                }));
          },
        },
        { key: "enableUpdating", value: function (t) {} },
        {
          key: "disconnectedCallback",
          value: function () {
            var t;
            null === (t = this._$EO) ||
              void 0 === t ||
              t.forEach(function (t) {
                var e;
                return null === (e = t.hostDisconnected) || void 0 === e
                  ? void 0
                  : e.call(t);
              });
          },
        },
        {
          key: "attributeChangedCallback",
          value: function (t, e, n) {
            this._$AK(t, n);
          },
        },
        {
          key: "_$ET",
          value: function (t, e) {
            var n = this.constructor.elementProperties.get(t),
              i = this.constructor._$Eu(t, n);
            if (void 0 !== i && !0 === n.reflect) {
              var o,
                a = (
                  void 0 !==
                  (null === (o = n.converter) || void 0 === o
                    ? void 0
                    : o.toAttribute)
                    ? n.converter
                    : at
                ).toAttribute(e, n.type);
              ((this._$Em = t),
                null == a ? this.removeAttribute(i) : this.setAttribute(i, a),
                (this._$Em = null));
            }
          },
        },
        {
          key: "_$AK",
          value: function (t, e) {
            var n = this.constructor,
              i = n._$Eh.get(t);
            if (void 0 !== i && this._$Em !== i) {
              var o,
                a,
                r,
                l = n.getPropertyOptions(i),
                u =
                  "function" == typeof l.converter
                    ? { fromAttribute: l.converter }
                    : void 0 !==
                        (null === (o = l.converter) || void 0 === o
                          ? void 0
                          : o.fromAttribute)
                      ? l.converter
                      : at;
              this._$Em = i;
              var s = u.fromAttribute(e, l.type);
              ((this[i] =
                null !==
                  (a =
                    null != s
                      ? s
                      : null === (r = this._$Ej) || void 0 === r
                        ? void 0
                        : r.get(i)) && void 0 !== a
                  ? a
                  : s),
                (this._$Em = null));
            }
          },
        },
        {
          key: "requestUpdate",
          value: function (t, e, n) {
            var i =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o = arguments.length > 4 ? arguments[4] : void 0;
            if (void 0 !== t) {
              var a,
                r,
                l = this.constructor;
              if (
                (!1 === i && (o = this[t]),
                null != n || (n = l.getPropertyOptions(t)),
                !(
                  (null !== (a = n.hasChanged) && void 0 !== a ? a : rt)(
                    o,
                    e
                  ) ||
                  (n.useDefault &&
                    n.reflect &&
                    o ===
                      (null === (r = this._$Ej) || void 0 === r
                        ? void 0
                        : r.get(t)) &&
                    !this.hasAttribute(l._$Eu(t, n)))
                ))
              )
                return;
              this.C(t, e, n);
            }
            !1 === this.isUpdatePending && (this._$ES = this._$EP());
          },
        },
        {
          key: "C",
          value: function (t, e, n, i) {
            var o,
              a,
              r,
              l = n.useDefault,
              u = n.reflect,
              s = n.wrapped;
            (l &&
              !(
                null !== (o = this._$Ej) && void 0 !== o
                  ? o
                  : (this._$Ej = new Map())
              ).has(t) &&
              (this._$Ej.set(
                t,
                null !== (a = null != i ? i : e) && void 0 !== a ? a : this[t]
              ),
              !0 !== s || void 0 !== i)) ||
              (this._$AL.has(t) ||
                (this.hasUpdated || l || (e = void 0), this._$AL.set(t, e)),
              !0 === u &&
                this._$Em !== t &&
                (null !== (r = this._$Eq) && void 0 !== r
                  ? r
                  : (this._$Eq = new Set())
                ).add(t));
          },
        },
        {
          key: "_$EP",
          value:
            ((e = A(
              b().m(function t() {
                var e, n;
                return b().w(
                  function (t) {
                    for (;;)
                      switch ((t.p = t.n)) {
                        case 0:
                          return (
                            (this.isUpdatePending = !0),
                            (t.p = 1),
                            (t.n = 2),
                            this._$ES
                          );
                        case 2:
                          t.n = 4;
                          break;
                        case 3:
                          ((t.p = 3), (n = t.v), Promise.reject(n));
                        case 4:
                          if (null == (e = this.scheduleUpdate())) {
                            t.n = 5;
                            break;
                          }
                          return ((t.n = 5), e);
                        case 5:
                          return t.a(2, !this.isUpdatePending);
                      }
                  },
                  t,
                  this,
                  [[1, 3]]
                );
              })
            )),
            function () {
              return e.apply(this, arguments);
            }),
        },
        {
          key: "scheduleUpdate",
          value: function () {
            return this.performUpdate();
          },
        },
        {
          key: "performUpdate",
          value: function () {
            if (this.isUpdatePending) {
              if (!this.hasUpdated) {
                var t;
                if (
                  ((null !== (t = this.renderRoot) && void 0 !== t) ||
                    (this.renderRoot = this.createRenderRoot()),
                  this._$Ep)
                ) {
                  var e,
                    n = P(this._$Ep);
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      var i = m(e.value, 2),
                        o = i[0],
                        a = i[1];
                      this[o] = a;
                    }
                  } catch (t) {
                    n.e(t);
                  } finally {
                    n.f();
                  }
                  this._$Ep = void 0;
                }
                var r = this.constructor.elementProperties;
                if (r.size > 0) {
                  var l,
                    u = P(r);
                  try {
                    for (u.s(); !(l = u.n()).done; ) {
                      var s = m(l.value, 2),
                        d = s[0],
                        c = s[1],
                        f = c.wrapped,
                        h = this[d];
                      !0 !== f ||
                        this._$AL.has(d) ||
                        void 0 === h ||
                        this.C(d, void 0, c, h);
                    }
                  } catch (t) {
                    u.e(t);
                  } finally {
                    u.f();
                  }
                }
              }
              var p = !1,
                v = this._$AL;
              try {
                var _;
                (p = this.shouldUpdate(v))
                  ? (this.willUpdate(v),
                    null !== (_ = this._$EO) &&
                      void 0 !== _ &&
                      _.forEach(function (t) {
                        var e;
                        return null === (e = t.hostUpdate) || void 0 === e
                          ? void 0
                          : e.call(t);
                      }),
                    this.update(v))
                  : this._$EM();
              } catch (v) {
                throw ((p = !1), this._$EM(), v);
              }
              p && this._$AE(v);
            }
          },
        },
        { key: "willUpdate", value: function (t) {} },
        {
          key: "_$AE",
          value: function (t) {
            var e;
            (null !== (e = this._$EO) &&
              void 0 !== e &&
              e.forEach(function (t) {
                var e;
                return null === (e = t.hostUpdated) || void 0 === e
                  ? void 0
                  : e.call(t);
              }),
              this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
              this.updated(t));
          },
        },
        {
          key: "_$EM",
          value: function () {
            ((this._$AL = new Map()), (this.isUpdatePending = !1));
          },
        },
        {
          key: "updateComplete",
          get: function () {
            return this.getUpdateComplete();
          },
        },
        {
          key: "getUpdateComplete",
          value: function () {
            return this._$ES;
          },
        },
        {
          key: "shouldUpdate",
          value: function (t) {
            return !0;
          },
        },
        {
          key: "update",
          value: function (t) {
            var e = this;
            (this._$Eq &&
              (this._$Eq = this._$Eq.forEach(function (t) {
                return e._$ET(t, e[t]);
              })),
              this._$EM());
          },
        },
        { key: "updated", value: function (t) {} },
        { key: "firstUpdated", value: function (t) {} },
      ],
      [
        {
          key: "addInitializer",
          value: function (t) {
            var e;
            (this._$Ei(),
              (null !== (e = this.l) && void 0 !== e ? e : (this.l = [])).push(
                t
              ));
          },
        },
        {
          key: "observedAttributes",
          get: function () {
            return (this.finalize(), this._$Eh && y(this._$Eh.keys()));
          },
        },
        {
          key: "createProperty",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : lt;
            if (
              (e.state && (e.attribute = !1),
              this._$Ei(),
              this.prototype.hasOwnProperty(t) &&
                ((e = Object.create(e)).wrapped = !0),
              this.elementProperties.set(t, e),
              !e.noAccessor)
            ) {
              var n = Symbol(),
                i = this.getPropertyDescriptor(t, n, e);
              void 0 !== i && J(this.prototype, t, i);
            }
          },
        },
        {
          key: "getPropertyDescriptor",
          value: function (t, e, n) {
            var i,
              o =
                null !== (i = Z(this.prototype, t)) && void 0 !== i
                  ? i
                  : {
                      get: function () {
                        return this[e];
                      },
                      set: function (t) {
                        this[e] = t;
                      },
                    },
              a = o.get,
              r = o.set;
            return {
              get: a,
              set: function (e) {
                var i = null == a ? void 0 : a.call(this);
                (null != r && r.call(this, e), this.requestUpdate(t, i, n));
              },
              configurable: !0,
              enumerable: !0,
            };
          },
        },
        {
          key: "getPropertyOptions",
          value: function (t) {
            var e;
            return null !== (e = this.elementProperties.get(t)) && void 0 !== e
              ? e
              : lt;
          },
        },
        {
          key: "_$Ei",
          value: function () {
            if (!this.hasOwnProperty(ot("elementProperties"))) {
              var t = X(this);
              (t.finalize(),
                void 0 !== t.l && (this.l = y(t.l)),
                (this.elementProperties = new Map(t.elementProperties)));
            }
          },
        },
        {
          key: "finalize",
          value: function () {
            if (!this.hasOwnProperty(ot("finalized"))) {
              if (
                ((this.finalized = !0),
                this._$Ei(),
                this.hasOwnProperty(ot("properties")))
              ) {
                var t,
                  e = this.properties,
                  n = P([].concat(y(Y(e)), y(Q(e))));
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var i = t.value;
                    this.createProperty(i, e[i]);
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
              }
              var o = this[Symbol.metadata];
              if (null !== o) {
                var a = litPropertyMetadata.get(o);
                if (void 0 !== a) {
                  var r,
                    l = P(a);
                  try {
                    for (l.s(); !(r = l.n()).done; ) {
                      var u = m(r.value, 2),
                        s = u[0],
                        d = u[1];
                      this.elementProperties.set(s, d);
                    }
                  } catch (t) {
                    l.e(t);
                  } finally {
                    l.f();
                  }
                }
              }
              this._$Eh = new Map();
              var c,
                f = P(this.elementProperties);
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  var h = m(c.value, 2),
                    p = h[0],
                    v = h[1],
                    _ = this._$Eu(p, v);
                  void 0 !== _ && this._$Eh.set(_, p);
                }
              } catch (t) {
                f.e(t);
              } finally {
                f.f();
              }
              this.elementStyles = this.finalizeStyles(this.styles);
            }
          },
        },
        {
          key: "finalizeStyles",
          value: function (t) {
            var e = [];
            if (Array.isArray(t)) {
              var n,
                i = P(new Set(t.flat(1 / 0).reverse()));
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var o = n.value;
                  e.unshift(F(o));
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
            } else void 0 !== t && e.push(F(t));
            return e;
          },
        },
        {
          key: "_$Eu",
          value: function (t, e) {
            var n = e.attribute;
            return !1 === n
              ? void 0
              : "string" == typeof n
                ? n
                : "string" == typeof t
                  ? t.toLowerCase()
                  : void 0;
          },
        },
      ]
    )
  );
  var e;
})();
((ut.elementStyles = []),
  (ut.shadowRootOptions = { mode: "open" }),
  (ut[ot("elementProperties")] = new Map()),
  (ut[ot("finalized")] = new Map()),
  null != it && it({ ReactiveElement: ut }),
  (null !== (n = tt.reactiveElementVersions) && void 0 !== n
    ? n
    : (tt.reactiveElementVersions = [])
  ).push("2.1.2"));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st = globalThis,
  dt = function (t) {
    return t;
  },
  ct = st.trustedTypes,
  ft = ct
    ? ct.createPolicy("lit-html", {
        createHTML: function (t) {
          return t;
        },
      })
    : void 0,
  ht = "$lit$",
  pt = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
  vt = "?" + pt,
  _t = "<".concat(vt, ">"),
  gt = document,
  yt = function () {
    return gt.createComment("");
  },
  mt = function (t) {
    return null === t || ("object" != x(t) && "function" != typeof t);
  },
  bt = Array.isArray,
  kt = "[ \t\n\f\r]",
  wt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  At = /-->/g,
  Ot = />/g,
  $t = RegExp(
    ">|"
      .concat(kt, "(?:([^\\s\"'>=/]+)(")
      .concat(kt, "*=")
      .concat(kt, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),
    "g"
  ),
  Et = /'/g,
  Tt = /"/g,
  St = /^(?:script|style|textarea|title)$/i,
  jt = (function (t) {
    return function (e) {
      for (
        var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        i[o - 1] = arguments[o];
      return { _$litType$: t, strings: e, values: i };
    };
  })(1),
  It = Symbol.for("lit-noChange"),
  Pt = Symbol.for("lit-nothing"),
  Ct = new WeakMap(),
  zt = gt.createTreeWalker(gt, 129);
function Dt(t, e) {
  if (!bt(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== ft ? ft.createHTML(e) : e;
}
var Mt = function (t, e) {
    for (
      var n,
        i = t.length - 1,
        o = [],
        a = 2 === e ? "<svg>" : 3 === e ? "<math>" : "",
        r = wt,
        l = 0;
      l < i;
      l++
    ) {
      for (
        var u = t[l], s = void 0, d = void 0, c = -1, f = 0;
        f < u.length && ((r.lastIndex = f), null !== (d = r.exec(u)));
      )
        ((f = r.lastIndex),
          r === wt
            ? "!--" === d[1]
              ? (r = At)
              : void 0 !== d[1]
                ? (r = Ot)
                : void 0 !== d[2]
                  ? (St.test(d[2]) && (n = RegExp("</" + d[2], "g")), (r = $t))
                  : void 0 !== d[3] && (r = $t)
            : r === $t
              ? ">" === d[0]
                ? ((r = null != n ? n : wt), (c = -1))
                : void 0 === d[1]
                  ? (c = -2)
                  : ((c = r.lastIndex - d[2].length),
                    (s = d[1]),
                    (r = void 0 === d[3] ? $t : '"' === d[3] ? Tt : Et))
              : r === Tt || r === Et
                ? (r = $t)
                : r === At || r === Ot
                  ? (r = wt)
                  : ((r = $t), (n = void 0)));
      var h = r === $t && t[l + 1].startsWith("/>") ? " " : "";
      a +=
        r === wt
          ? u + _t
          : c >= 0
            ? (o.push(s), u.slice(0, c) + ht + u.slice(c) + pt + h)
            : u + pt + (-2 === c ? l : h);
    }
    return [
      Dt(
        t,
        a + (t[i] || "<?>") + (2 === e ? "</svg>" : 3 === e ? "</math>" : "")
      ),
      o,
    ];
  },
  Rt = (function () {
    return R(
      function t(e, n) {
        var i,
          o = e.strings,
          a = e._$litType$;
        (D(this, t), (this.parts = []));
        var r = 0,
          l = 0,
          u = o.length - 1,
          s = this.parts,
          d = m(Mt(o, a), 2),
          c = d[0],
          f = d[1];
        if (
          ((this.el = t.createElement(c, n)),
          (zt.currentNode = this.el.content),
          2 === a || 3 === a)
        ) {
          var h = this.el.content.firstChild;
          h.replaceWith.apply(h, y(h.childNodes));
        }
        for (; null !== (i = zt.nextNode()) && s.length < u; ) {
          if (1 === i.nodeType) {
            if (i.hasAttributes()) {
              var p,
                v = P(i.getAttributeNames());
              try {
                for (v.s(); !(p = v.n()).done; ) {
                  var _ = p.value;
                  if (_.endsWith(ht)) {
                    var g = f[l++],
                      b = i.getAttribute(_).split(pt),
                      k = /([.?@])?(.*)/.exec(g);
                    (s.push({
                      type: 1,
                      index: r,
                      name: k[2],
                      strings: b,
                      ctor:
                        "." === k[1]
                          ? Vt
                          : "?" === k[1]
                            ? Kt
                            : "@" === k[1]
                              ? Lt
                              : Ht,
                    }),
                      i.removeAttribute(_));
                  } else
                    _.startsWith(pt) &&
                      (s.push({ type: 6, index: r }), i.removeAttribute(_));
                }
              } catch (t) {
                v.e(t);
              } finally {
                v.f();
              }
            }
            if (St.test(i.tagName)) {
              var w = i.textContent.split(pt),
                A = w.length - 1;
              if (A > 0) {
                i.textContent = ct ? ct.emptyScript : "";
                for (var O = 0; O < A; O++)
                  (i.append(w[O], yt()),
                    zt.nextNode(),
                    s.push({ type: 2, index: ++r }));
                i.append(w[A], yt());
              }
            }
          } else if (8 === i.nodeType)
            if (i.data === vt) s.push({ type: 2, index: r });
            else
              for (var $ = -1; -1 !== ($ = i.data.indexOf(pt, $ + 1)); )
                (s.push({ type: 7, index: r }), ($ += pt.length - 1));
          r++;
        }
      },
      null,
      [
        {
          key: "createElement",
          value: function (t, e) {
            var n = gt.createElement("template");
            return ((n.innerHTML = t), n);
          },
        },
      ]
    );
  })();
function Ut(t, e) {
  var n,
    i,
    o,
    a,
    r,
    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
    u = arguments.length > 3 ? arguments[3] : void 0;
  if (e === It) return e;
  var s =
      void 0 !== u
        ? null === (n = l._$Co) || void 0 === n
          ? void 0
          : n[u]
        : l._$Cl,
    d = mt(e) ? void 0 : e._$litDirective$;
  return (
    (null === (i = s) || void 0 === i ? void 0 : i.constructor) !== d &&
      (null !== (o = s) &&
        void 0 !== o &&
        null !== (a = o._$AO) &&
        void 0 !== a &&
        a.call(o, !1),
      void 0 === d ? (s = void 0) : (s = new d(t))._$AT(t, l, u),
      void 0 !== u
        ? ((null !== (r = l._$Co) && void 0 !== r ? r : (l._$Co = []))[u] = s)
        : (l._$Cl = s)),
    void 0 !== s && (e = Ut(t, s._$AS(t, e.values), s, u)),
    e
  );
}
var xt = (function () {
    return R(
      function t(e, n) {
        (D(this, t),
          (this._$AV = []),
          (this._$AN = void 0),
          (this._$AD = e),
          (this._$AM = n));
      },
      [
        {
          key: "parentNode",
          get: function () {
            return this._$AM.parentNode;
          },
        },
        {
          key: "_$AU",
          get: function () {
            return this._$AM._$AU;
          },
        },
        {
          key: "u",
          value: function (t) {
            var e,
              n = this._$AD,
              i = n.el.content,
              o = n.parts,
              a = (
                null !== (e = null == t ? void 0 : t.creationScope) &&
                void 0 !== e
                  ? e
                  : gt
              ).importNode(i, !0);
            zt.currentNode = a;
            for (
              var r = zt.nextNode(), l = 0, u = 0, s = o[0];
              void 0 !== s;
            ) {
              var d;
              if (l === s.index) {
                var c = void 0;
                (2 === s.type
                  ? (c = new Nt(r, r.nextSibling, this, t))
                  : 1 === s.type
                    ? (c = new s.ctor(r, s.name, s.strings, this, t))
                    : 6 === s.type && (c = new Bt(r, this, t)),
                  this._$AV.push(c),
                  (s = o[++u]));
              }
              l !== (null === (d = s) || void 0 === d ? void 0 : d.index) &&
                ((r = zt.nextNode()), l++);
            }
            return ((zt.currentNode = gt), a);
          },
        },
        {
          key: "p",
          value: function (t) {
            var e,
              n = 0,
              i = P(this._$AV);
            try {
              for (i.s(); !(e = i.n()).done; ) {
                var o = e.value;
                (void 0 !== o &&
                  (void 0 !== o.strings
                    ? (o._$AI(t, o, n), (n += o.strings.length - 2))
                    : o._$AI(t[n])),
                  n++);
              }
            } catch (t) {
              i.e(t);
            } finally {
              i.f();
            }
          },
        },
      ]
    );
  })(),
  Nt = (function () {
    return R(
      function t(e, n, i, o) {
        var a;
        (D(this, t),
          (this.type = 2),
          (this._$AH = Pt),
          (this._$AN = void 0),
          (this._$AA = e),
          (this._$AB = n),
          (this._$AM = i),
          (this.options = o),
          (this._$Cv =
            null === (a = null == o ? void 0 : o.isConnected) ||
            void 0 === a ||
            a));
      },
      [
        {
          key: "_$AU",
          get: function () {
            var t, e;
            return null !==
              (t =
                null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
              void 0 !== t
              ? t
              : this._$Cv;
          },
        },
        {
          key: "parentNode",
          get: function () {
            var t,
              e = this._$AA.parentNode,
              n = this._$AM;
            return (
              void 0 !== n &&
                11 ===
                  (null === (t = e) || void 0 === t ? void 0 : t.nodeType) &&
                (e = n.parentNode),
              e
            );
          },
        },
        {
          key: "startNode",
          get: function () {
            return this._$AA;
          },
        },
        {
          key: "endNode",
          get: function () {
            return this._$AB;
          },
        },
        {
          key: "_$AI",
          value: function (t) {
            ((t = Ut(
              this,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this
            )),
              mt(t)
                ? t === Pt || null == t || "" === t
                  ? (this._$AH !== Pt && this._$AR(), (this._$AH = Pt))
                  : t !== this._$AH && t !== It && this._(t)
                : void 0 !== t._$litType$
                  ? this.$(t)
                  : void 0 !== t.nodeType
                    ? this.T(t)
                    : (function (t) {
                          return (
                            bt(t) ||
                            "function" ==
                              typeof (null == t ? void 0 : t[Symbol.iterator])
                          );
                        })(t)
                      ? this.k(t)
                      : this._(t));
          },
        },
        {
          key: "O",
          value: function (t) {
            return this._$AA.parentNode.insertBefore(t, this._$AB);
          },
        },
        {
          key: "T",
          value: function (t) {
            this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
          },
        },
        {
          key: "_",
          value: function (t) {
            (this._$AH !== Pt && mt(this._$AH)
              ? (this._$AA.nextSibling.data = t)
              : this.T(gt.createTextNode(t)),
              (this._$AH = t));
          },
        },
        {
          key: "$",
          value: function (t) {
            var e,
              n = t.values,
              i = t._$litType$,
              o =
                "number" == typeof i
                  ? this._$AC(t)
                  : (void 0 === i.el &&
                      (i.el = Rt.createElement(Dt(i.h, i.h[0]), this.options)),
                    i);
            if (
              (null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === o
            )
              this._$AH.p(n);
            else {
              var a = new xt(o, this),
                r = a.u(this.options);
              (a.p(n), this.T(r), (this._$AH = a));
            }
          },
        },
        {
          key: "_$AC",
          value: function (t) {
            var e = Ct.get(t.strings);
            return (void 0 === e && Ct.set(t.strings, (e = new Rt(t))), e);
          },
        },
        {
          key: "k",
          value: function (t) {
            bt(this._$AH) || ((this._$AH = []), this._$AR());
            var e,
              n,
              i = this._$AH,
              o = 0,
              a = P(t);
            try {
              for (a.s(); !(n = a.n()).done; ) {
                var r = n.value;
                (o === i.length
                  ? i.push(
                      (e = new _k(
                        this.O(yt()),
                        this.O(yt()),
                        this,
                        this.options
                      ))
                    )
                  : (e = i[o]),
                  e._$AI(r),
                  o++);
              }
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
            o < i.length &&
              (this._$AR(e && e._$AB.nextSibling, o), (i.length = o));
          },
        },
        {
          key: "_$AR",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this._$AA.nextSibling,
              e = arguments.length > 1 ? arguments[1] : void 0;
            for (
              null === (n = this._$AP) ||
              void 0 === n ||
              n.call(this, !1, !0, e);
              t !== this._$AB;
            ) {
              var n,
                i = dt(t).nextSibling;
              (dt(t).remove(), (t = i));
            }
          },
        },
        {
          key: "setConnected",
          value: function (t) {
            var e;
            void 0 === this._$AM &&
              ((this._$Cv = t),
              null === (e = this._$AP) || void 0 === e || e.call(this, t));
          },
        },
      ]
    );
  })(),
  Ht = (function () {
    return R(
      function t(e, n, i, o, a) {
        (D(this, t),
          (this.type = 1),
          (this._$AH = Pt),
          (this._$AN = void 0),
          (this.element = e),
          (this.name = n),
          (this._$AM = o),
          (this.options = a),
          i.length > 2 || "" !== i[0] || "" !== i[1]
            ? ((this._$AH = Array(i.length - 1).fill(new String())),
              (this.strings = i))
            : (this._$AH = Pt));
      },
      [
        {
          key: "tagName",
          get: function () {
            return this.element.tagName;
          },
        },
        {
          key: "_$AU",
          get: function () {
            return this._$AM._$AU;
          },
        },
        {
          key: "_$AI",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this,
              n = arguments.length > 2 ? arguments[2] : void 0,
              i = arguments.length > 3 ? arguments[3] : void 0,
              o = this.strings,
              a = !1;
            if (void 0 === o)
              ((t = Ut(this, t, e, 0)),
                (a = !mt(t) || (t !== this._$AH && t !== It)) &&
                  (this._$AH = t));
            else {
              var r,
                l,
                u = t;
              for (t = o[0], r = 0; r < o.length - 1; r++)
                ((l = Ut(this, u[n + r], e, r)) === It && (l = this._$AH[r]),
                  a || (a = !mt(l) || l !== this._$AH[r]),
                  l === Pt
                    ? (t = Pt)
                    : t !== Pt && (t += (null != l ? l : "") + o[r + 1]),
                  (this._$AH[r] = l));
            }
            a && !i && this.j(t);
          },
        },
        {
          key: "j",
          value: function (t) {
            t === Pt
              ? this.element.removeAttribute(this.name)
              : this.element.setAttribute(this.name, null != t ? t : "");
          },
        },
      ]
    );
  })(),
  Vt = (function () {
    function t() {
      var e;
      return (D(this, t), ((e = O(this, t, arguments)).type = 3), e);
    }
    return (
      E(t, Ht),
      R(t, [
        {
          key: "j",
          value: function (t) {
            this.element[this.name] = t === Pt ? void 0 : t;
          },
        },
      ])
    );
  })(),
  Kt = (function () {
    function t() {
      var e;
      return (D(this, t), ((e = O(this, t, arguments)).type = 4), e);
    }
    return (
      E(t, Ht),
      R(t, [
        {
          key: "j",
          value: function (t) {
            this.element.toggleAttribute(this.name, !!t && t !== Pt);
          },
        },
      ])
    );
  })(),
  Lt = (function () {
    function t(e, n, i, o, a) {
      var r;
      return (D(this, t), ((r = O(this, t, [e, n, i, o, a])).type = 5), r);
    }
    return (
      E(t, Ht),
      R(t, [
        {
          key: "_$AI",
          value: function (t) {
            var e;
            if (
              (t =
                null !==
                  (e = Ut(
                    this,
                    t,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this,
                    0
                  )) && void 0 !== e
                  ? e
                  : Pt) !== It
            ) {
              var n = this._$AH,
                i =
                  (t === Pt && n !== Pt) ||
                  t.capture !== n.capture ||
                  t.once !== n.once ||
                  t.passive !== n.passive,
                o = t !== Pt && (n === Pt || i);
              (i && this.element.removeEventListener(this.name, this, n),
                o && this.element.addEventListener(this.name, this, t),
                (this._$AH = t));
            }
          },
        },
        {
          key: "handleEvent",
          value: function (t) {
            var e, n;
            "function" == typeof this._$AH
              ? this._$AH.call(
                  null !==
                    (e =
                      null === (n = this.options) || void 0 === n
                        ? void 0
                        : n.host) && void 0 !== e
                    ? e
                    : this.element,
                  t
                )
              : this._$AH.handleEvent(t);
          },
        },
      ])
    );
  })(),
  Bt = (function () {
    return R(
      function t(e, n, i) {
        (D(this, t),
          (this.element = e),
          (this.type = 6),
          (this._$AN = void 0),
          (this._$AM = n),
          (this.options = i));
      },
      [
        {
          key: "_$AU",
          get: function () {
            return this._$AM._$AU;
          },
        },
        {
          key: "_$AI",
          value: function (t) {
            Ut(this, t);
          },
        },
      ]
    );
  })(),
  Gt = st.litHtmlPolyfillSupport;
(null != Gt && Gt(Rt, Nt),
  (null !== (i = st.litHtmlVersions) && void 0 !== i
    ? i
    : (st.litHtmlVersions = [])
  ).push("3.3.2"));
var Wt = globalThis,
  Ft = (function () {
    function t() {
      var e;
      return (
        D(this, t),
        ((e = O(this, t, arguments)).renderOptions = { host: $(e) }),
        (e._$Do = void 0),
        e
      );
    }
    return (
      E(t, ut),
      R(t, [
        {
          key: "createRenderRoot",
          value: function () {
            var e,
              n,
              i = _(t, "createRenderRoot", this, 3)([]);
            return (
              (null !== (n = (e = this.renderOptions).renderBefore) &&
                void 0 !== n) ||
                (e.renderBefore = i.firstChild),
              i
            );
          },
        },
        {
          key: "update",
          value: function (e) {
            var n = this.render();
            (this.hasUpdated ||
              (this.renderOptions.isConnected = this.isConnected),
              _(t, "update", this, 3)([e]),
              (this._$Do = (function (t, e, n) {
                var i,
                  o =
                    null !== (i = null == n ? void 0 : n.renderBefore) &&
                    void 0 !== i
                      ? i
                      : e,
                  a = o._$litPart$;
                if (void 0 === a) {
                  var r,
                    l =
                      null !== (r = null == n ? void 0 : n.renderBefore) &&
                      void 0 !== r
                        ? r
                        : null;
                  o._$litPart$ = a = new Nt(
                    e.insertBefore(yt(), l),
                    l,
                    void 0,
                    null != n ? n : {}
                  );
                }
                return (a._$AI(t), a);
              })(n, this.renderRoot, this.renderOptions)));
          },
        },
        {
          key: "connectedCallback",
          value: function () {
            var e;
            (_(t, "connectedCallback", this, 3)([]),
              null === (e = this._$Do) || void 0 === e || e.setConnected(!0));
          },
        },
        {
          key: "disconnectedCallback",
          value: function () {
            var e;
            (_(t, "disconnectedCallback", this, 3)([]),
              null === (e = this._$Do) || void 0 === e || e.setConnected(!1));
          },
        },
        {
          key: "render",
          value: function () {
            return It;
          },
        },
      ])
    );
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ((Ft._$litElement$ = !0),
  (Ft.finalized = !0),
  null === (o = Wt.litElementHydrateSupport) ||
    void 0 === o ||
    o.call(Wt, { LitElement: Ft }));
var qt = Wt.litElementPolyfillSupport;
(null == qt || qt({ LitElement: Ft }),
  (null !== (a = Wt.litElementVersions) && void 0 !== a
    ? a
    : (Wt.litElementVersions = [])
  ).push("4.2.2"));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Jt = function (t) {
    return function (e, n) {
      void 0 !== n
        ? n.addInitializer(function () {
            customElements.define(t, e);
          })
        : customElements.define(t, e);
    };
  },
  Zt = {
    attribute: !0,
    type: String,
    converter: at,
    reflect: !1,
    hasChanged: rt,
  },
  Yt = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
      e = arguments.length > 1 ? arguments[1] : void 0,
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = n.kind,
      o = n.metadata,
      a = globalThis.litPropertyMetadata.get(o);
    if (
      (void 0 === a && globalThis.litPropertyMetadata.set(o, (a = new Map())),
      "setter" === i && ((t = Object.create(t)).wrapped = !0),
      a.set(n.name, t),
      "accessor" === i)
    ) {
      var r = n.name;
      return {
        set: function (n) {
          var i = e.get.call(this);
          (e.set.call(this, n), this.requestUpdate(r, i, t, !0, n));
        },
        init: function (e) {
          return (void 0 !== e && this.C(r, void 0, t, e), e);
        },
      };
    }
    if ("setter" === i) {
      var l = n.name;
      return function (n) {
        var i = this[l];
        (e.call(this, n), this.requestUpdate(l, i, t, !0, n));
      };
    }
    throw Error("Unsupported decorator location: " + i);
  };
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function Qt(t) {
  return function (e, n) {
    return "object" == x(n)
      ? Yt(t, e, n)
      : (function (t, e, n) {
          var i = e.hasOwnProperty(n);
          return (
            e.constructor.createProperty(n, t),
            i ? Object.getOwnPropertyDescriptor(e, n) : void 0
          );
        })(t, e, n);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function Xt(t) {
  return Qt(p(p({}, t), {}, { state: !0, attribute: !1 }));
}
var te,
  ee,
  ne = "".concat("/pacman_static", "/bward-game/index.html");
((te = {
  type: N,
  name: "Pac-Man",
  description: "Play Pac-Man in your Home Assistant dashboard.",
}),
  ((ee = window).customCards = ee.customCards || []),
  ee.customCards.push(Object.assign(Object.assign({}, te), { preview: !0 })));
var ie = (function () {
  function t() {
    var e;
    return (
      D(this, t),
      ((e = O(this, t, arguments))._gameStarted = !1),
      (e._isFullscreen = !1),
      (e._gameRunning = !1),
      (e._boundBeforeUnload = e._stopPinging.bind(e)),
      (e._boundVisibilityChange = e._handleVisibilityChange.bind(e)),
      (e._boundFullscreenChange = e._handleFullscreenChange.bind(e)),
      e
    );
  }
  return (
    E(t, Ft),
    R(
      t,
      [
        {
          key: "setConfig",
          value: function (t) {
            this._config = Object.assign(Object.assign({}, t), {
              type: "custom:".concat(N),
            });
          },
        },
        {
          key: "getCardSize",
          value: function () {
            return 4;
          },
        },
        {
          key: "getGridOptions",
          value: function () {
            return { columns: 12, rows: 8, min_columns: 3, min_rows: 2 };
          },
        },
        {
          key: "connectedCallback",
          value: function () {
            (_(t, "connectedCallback", this, 3)([]),
              window.addEventListener("beforeunload", this._boundBeforeUnload),
              document.addEventListener(
                "visibilitychange",
                this._boundVisibilityChange
              ),
              document.addEventListener(
                "fullscreenchange",
                this._boundFullscreenChange
              ));
          },
        },
        {
          key: "disconnectedCallback",
          value: function () {
            (_(t, "disconnectedCallback", this, 3)([]),
              this._destroyGame(),
              window.removeEventListener(
                "beforeunload",
                this._boundBeforeUnload
              ),
              document.removeEventListener(
                "visibilitychange",
                this._boundVisibilityChange
              ),
              document.removeEventListener(
                "fullscreenchange",
                this._boundFullscreenChange
              ));
          },
        },
        {
          key: "firstUpdated",
          value: function () {
            var t;
            (null === (t = this._config) || void 0 === t
              ? void 0
              : t.auto_start) && this._startPacman();
          },
        },
        {
          key: "updated",
          value: function (e) {
            var n;
            (_(t, "updated", this, 3)([e]),
              e.has("_config") &&
                (null === (n = this._config) || void 0 === n
                  ? void 0
                  : n.auto_start) &&
                !this._gameRunning &&
                !this._gameStarted &&
                this._startPacman());
          },
        },
        {
          key: "render",
          value: function () {
            if (!this._config) return Pt;
            var t = "panel" !== this.layout && "grid" !== this.layout;
            return jt(
              r ||
                (r = f([
                  "\n      <ha-card .header=",
                  '>\n        <div\n          id="root"\n          style="',
                  '"\n          @keydown=',
                  "\n          @keyup=",
                  "\n          @keypress=",
                  '\n        >\n          <div id="game"></div>\n          ',
                  '\n          <button\n            id="fullscreen-btn"\n            @click=',
                  "\n            title=",
                  "\n          >\n            ",
                  "\n          </button>\n        </div>\n      </ha-card>\n    ",
                ])),
              this._config.title || Pt,
              t ? "padding-top: 75%" : "",
              this._trapKey,
              this._trapKey,
              this._trapKey,
              this._gameStarted
                ? Pt
                : jt(
                    l ||
                      (l = f([
                        '\n                <div id="overlay" @click=',
                        '>\n                  <div class="pac-logo">\n                    <svg\n                      viewBox="0 0 100 100"\n                      xmlns="http://www.w3.org/2000/svg"\n                    >\n                      <circle cx="50" cy="50" r="48" fill="#ffff00" />\n                      <polygon points="50,50 98,20 98,80" fill="#000" />\n                    </svg>\n                  </div>\n                  <p>Click to play</p>\n                </div>\n              ',
                      ])),
                    this._startPacman
                  ),
              this._toggleFullscreen,
              this._isFullscreen ? "Exit fullscreen" : "Fullscreen",
              this._isFullscreen
                ? jt(
                    u ||
                      (u = f([
                        '<svg\n                  viewBox="0 0 24 24"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"\n                  />\n                </svg>',
                      ]))
                  )
                : jt(
                    s ||
                      (s = f([
                        '<svg\n                  viewBox="0 0 24 24"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"\n                  />\n                </svg>',
                      ]))
                  )
            );
          },
        },
        {
          key: "_trapKey",
          value: function (t) {
            this._gameRunning && t.stopPropagation();
          },
        },
        {
          key: "_startPacman",
          value:
            ((i = A(
              b().m(function t() {
                var e, n;
                return b().w(
                  function (t) {
                    for (;;)
                      switch (t.n) {
                        case 0:
                          if (!this._gameRunning) {
                            t.n = 1;
                            break;
                          }
                          return t.a(2);
                        case 1:
                          return (
                            (this._gameRunning = !0),
                            (this._gameStarted = !0),
                            (t.n = 2),
                            this.updateComplete
                          );
                        case 2:
                          return (
                            (e = this.shadowRoot.getElementById("game")),
                            ((n = document.createElement("iframe")).src = ne),
                            (n.style.cssText =
                              "width:100%;height:100%;border:none;display:block;"),
                            (n.allow = "autoplay"),
                            e.appendChild(n),
                            (t.n = 3),
                            this._resolveEntryId()
                          );
                        case 3:
                          this._startPinging();
                        case 4:
                          return t.a(2);
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function () {
              return i.apply(this, arguments);
            }),
        },
        {
          key: "_destroyGame",
          value: function () {
            var t;
            this._stopPinging();
            var e =
              null === (t = this.shadowRoot) || void 0 === t
                ? void 0
                : t.getElementById("game");
            (e && (e.innerHTML = ""),
              (this._gameRunning = !1),
              (this._gameStarted = !1));
          },
        },
        {
          key: "_resolveEntryId",
          value:
            ((n = A(
              b().m(function t() {
                var e, n;
                return b().w(
                  function (t) {
                    for (;;)
                      switch ((t.p = t.n)) {
                        case 0:
                          if (!this._entryId && this.hass) {
                            t.n = 1;
                            break;
                          }
                          return t.a(2);
                        case 1:
                          return (
                            (t.p = 1),
                            (t.n = 2),
                            this.hass.callWS({ type: "config_entries/get" })
                          );
                        case 2:
                          ((e = t.v),
                            (n = e.find(function (t) {
                              return "pacman" === t.domain;
                            })),
                            n && (this._entryId = n.entry_id),
                            (t.n = 4));
                          break;
                        case 3:
                          ((t.p = 3), t.v);
                        case 4:
                          return t.a(2);
                      }
                  },
                  t,
                  this,
                  [[1, 3]]
                );
              })
            )),
            function () {
              return n.apply(this, arguments);
            }),
        },
        {
          key: "_startPinging",
          value: function () {
            var t = this;
            (this._stopPinging(),
              this._sendPing(),
              (this._pingInterval = setInterval(function () {
                return t._sendPing();
              }, 2e3)));
          },
        },
        {
          key: "_stopPinging",
          value: function () {
            (this._pingInterval &&
              (clearInterval(this._pingInterval),
              (this._pingInterval = void 0)),
              this._sendStop());
          },
        },
        {
          key: "_sendPing",
          value: function () {
            this.hass &&
              this._entryId &&
              this.hass
                .callWS({ type: "pacman/ping", entry_id: this._entryId })
                .catch(function () {});
          },
        },
        {
          key: "_sendStop",
          value: function () {
            this.hass &&
              this._entryId &&
              this.hass
                .callWS({ type: "pacman/stop", entry_id: this._entryId })
                .catch(function () {});
          },
        },
        {
          key: "_toggleFullscreen",
          value: function () {
            document.fullscreenElement
              ? document.exitFullscreen().catch(function () {})
              : this.requestFullscreen().catch(function () {});
          },
        },
        {
          key: "_handleFullscreenChange",
          value: function () {
            this._isFullscreen = document.fullscreenElement === this;
          },
        },
        {
          key: "_handleVisibilityChange",
          value: function () {
            this._gameRunning &&
              (document.hidden ? this._stopPinging() : this._startPinging());
          },
        },
      ],
      [
        {
          key: "getConfigElement",
          value:
            ((e = A(
              b().m(function t() {
                return b().w(function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return (
                          (t.n = 1),
                          Promise.resolve().then(function () {
                            return ta;
                          })
                        );
                      case 1:
                        return t.a(2, document.createElement(H));
                    }
                }, t);
              })
            )),
            function () {
              return e.apply(this, arguments);
            }),
        },
        {
          key: "getStubConfig",
          value: function () {
            return { auto_start: !1 };
          },
        },
        {
          key: "styles",
          get: function () {
            return (function (t) {
              for (
                var e = arguments.length,
                  n = new Array(e > 1 ? e - 1 : 0),
                  i = 1;
                i < e;
                i++
              )
                n[i - 1] = arguments[i];
              var o =
                1 === t.length
                  ? t[0]
                  : n.reduce(function (e, n, i) {
                      return (
                        e +
                        (function (t) {
                          if (!0 === t._$cssResult$) return t.cssText;
                          if ("number" == typeof t) return t;
                          throw Error(
                            "Value passed to 'css' function must be a 'css' function result: " +
                              t +
                              ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                          );
                        })(n) +
                        t[i + 1]
                      );
                    }, t[0]);
              return new W(o, t, B);
            })(
              d ||
                (d = f([
                  '\n      :host {\n        display: block;\n        height: 100%;\n      }\n      ha-card {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n      #root {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        background: #000;\n      }\n      #game {\n        position: absolute;\n        inset: 0;\n      }\n      #overlay {\n        position: absolute;\n        inset: 0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background-color: #000;\n        z-index: 100;\n        cursor: pointer;\n      }\n      .pac-logo {\n        width: 30%;\n        max-width: 120px;\n        min-width: 48px;\n        margin-bottom: 1em;\n        animation: chomp 0.4s ease-in-out infinite alternate;\n      }\n      .pac-logo svg {\n        width: 100%;\n        height: auto;\n      }\n      @keyframes chomp {\n        from {\n          clip-path: polygon(0 0, 100% 30%, 100% 70%, 0 100%);\n        }\n        to {\n          clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);\n        }\n      }\n      #overlay p {\n        color: #ffff00;\n        font-family: "Courier New", monospace;\n        font-size: 1.05em;\n        font-weight: bold;\n        letter-spacing: 0.15em;\n        text-transform: uppercase;\n        padding: 0.6em 1.6em;\n        background: rgba(0, 0, 0, 0.7);\n        border-radius: 8px;\n        animation: pulse-glow 2.5s ease-in-out infinite;\n      }\n      @keyframes pulse-glow {\n        0%,\n        100% {\n          box-shadow: 0 0 8px rgba(255, 255, 0, 0.3);\n        }\n        50% {\n          box-shadow:\n            0 0 20px rgba(255, 255, 0, 0.7),\n            0 0 40px rgba(255, 255, 0, 0.3);\n        }\n      }\n      #fullscreen-btn {\n        position: absolute;\n        bottom: 8px;\n        right: 8px;\n        z-index: 101;\n        background: rgba(0, 0, 0, 0.5);\n        border: 1px solid rgba(255, 255, 0, 0.4);\n        border-radius: 4px;\n        padding: 4px;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0.4;\n        transition: opacity 0.2s;\n      }\n      #fullscreen-btn:hover {\n        opacity: 1;\n      }\n      #fullscreen-btn svg {\n        width: 20px;\n        height: 20px;\n        fill: #ffff00;\n      }\n    ',
                ]))
            );
          },
        },
      ]
    )
  );
  var e, n, i;
})();
(V([Qt({ attribute: !1 })], ie.prototype, "hass", void 0),
  V([Qt({ attribute: !1 })], ie.prototype, "layout", void 0),
  V([Xt()], ie.prototype, "_config", void 0),
  V([Xt()], ie.prototype, "_gameStarted", void 0),
  V([Xt()], ie.prototype, "_isFullscreen", void 0),
  (ie = V([Jt(N)], ie)),
  console.info(
    "%c  PAC-MAN CARD  %c  ".concat("0.0.0", "  "),
    "color: black; background: #ffff00; font-weight: bold;",
    "color: #ffff00; background: black; font-weight: bold;"
  ));
var oe = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Klank",
        auto_start: "Outomatiese begin",
      },
    },
  },
  ae = { wakawaka: { title: "GODMODUS GEAKTIVEER" } },
  re = { editor: oe, dialog: ae },
  le = Object.freeze({ __proto__: null, default: re, dialog: ae, editor: oe }),
  ue = {
    card: {
      pacman: { title: "العنوان", sound: "الصوت", auto_start: "بدء تلقائي" },
    },
  },
  se = { wakawaka: { title: "وضع الإله مُفعَّل" } },
  de = { editor: ue, dialog: se },
  ce = Object.freeze({ __proto__: null, default: de, dialog: se, editor: ue }),
  fe = {
    card: {
      pacman: {
        title: "Заглавие",
        sound: "Звук",
        auto_start: "Автоматично стартиране",
      },
    },
  },
  he = { wakawaka: { title: "РЕЖИМ БОГ АКТИВИРАН" } },
  pe = { editor: fe, dialog: he },
  ve = Object.freeze({ __proto__: null, default: pe, dialog: he, editor: fe }),
  _e = {
    card: {
      pacman: {
        title: "শিরোনাম",
        sound: "শব্দ",
        auto_start: "স্বয়ংক্রিয় শুরু",
      },
    },
  },
  ge = { wakawaka: { title: "গড মোড সক্রিয়" } },
  ye = { editor: _e, dialog: ge },
  me = Object.freeze({ __proto__: null, default: ye, dialog: ge, editor: _e }),
  be = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  ke = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  we = { editor: be, dialog: ke },
  Ae = Object.freeze({ __proto__: null, default: we, dialog: ke, editor: be }),
  Oe = {
    card: {
      pacman: { title: "Títol", sound: "So", auto_start: "Inici automàtic" },
    },
  },
  $e = { wakawaka: { title: "MODE DÉU ACTIVAT" } },
  Ee = { editor: Oe, dialog: $e },
  Te = Object.freeze({ __proto__: null, default: Ee, dialog: $e, editor: Oe }),
  Se = {
    card: {
      pacman: {
        title: "Název",
        sound: "Zvuk",
        auto_start: "Automatické spuštění",
      },
    },
  },
  je = { wakawaka: { title: "REŽIM BOHA AKTIVOVÁN" } },
  Ie = { editor: Se, dialog: je },
  Pe = Object.freeze({ __proto__: null, default: Ie, dialog: je, editor: Se }),
  Ce = {
    card: {
      pacman: {
        title: "Teitl",
        sound: "Sain",
        auto_start: "Cychwyn awtomatig",
      },
    },
  },
  ze = { wakawaka: { title: "MODD DUW WEDI'I ACTIFADU" } },
  De = { editor: Ce, dialog: ze },
  Me = Object.freeze({ __proto__: null, default: De, dialog: ze, editor: Ce }),
  Re = {
    card: {
      pacman: { title: "Titel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  Ue = { wakawaka: { title: "GUDTILSTAND AKTIVERET" } },
  xe = { editor: Re, dialog: Ue },
  Ne = Object.freeze({ __proto__: null, default: xe, dialog: Ue, editor: Re }),
  He = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Ton",
        auto_start: "Automatischer Start",
      },
    },
  },
  Ve = { wakawaka: { title: "GOTTMODUS AKTIVIERT" } },
  Ke = { editor: He, dialog: Ve },
  Le = Object.freeze({ __proto__: null, default: Ke, dialog: Ve, editor: He }),
  Be = {
    card: {
      pacman: {
        title: "Τίτλος",
        sound: "Ήχος",
        auto_start: "Αυτόματη εκκίνηση",
      },
    },
  },
  Ge = { wakawaka: { title: "ΛΕΙΤΟΥΡΓΙΑ ΘΕΟΥ ΕΝΕΡΓΟΠΟΙΗΘΗΚΕ" } },
  We = { editor: Be, dialog: Ge },
  Fe = Object.freeze({ __proto__: null, default: We, dialog: Ge, editor: Be }),
  qe = { card: { pacman: { title: "Title", auto_start: "Auto start" } } },
  Je = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  Ze = { editor: qe, dialog: Je },
  Ye = Object.freeze({ __proto__: null, default: Ze, dialog: Je, editor: qe }),
  Qe = {
    card: {
      pacman: { title: "Title", sound: "Sound", auto_start: "Auto start" },
    },
  },
  Xe = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  tn = { editor: Qe, dialog: Xe },
  en = Object.freeze({ __proto__: null, default: tn, dialog: Xe, editor: Qe }),
  nn = {
    card: {
      pacman: {
        title: "Titolo",
        sound: "Sono",
        auto_start: "Aŭtomata komenco",
      },
    },
  },
  on = { wakawaka: { title: "DIA REĜIMO AKTIVIGITA" } },
  an = { editor: nn, dialog: on },
  rn = Object.freeze({ __proto__: null, default: an, dialog: on, editor: nn }),
  ln = {
    card: {
      pacman: {
        title: "Título",
        sound: "Sonido",
        auto_start: "Inicio automático",
      },
    },
  },
  un = { wakawaka: { title: "MODO DIOS ACTIVADO" } },
  sn = { editor: ln, dialog: un },
  dn = {
    card: {
      pacman: {
        title: "Título",
        sound: "Sonido",
        auto_start: "Inicio automático",
      },
    },
  },
  cn = { wakawaka: { title: "MODO DIOS ACTIVADO" } },
  fn = { editor: dn, dialog: cn },
  hn = {
    card: {
      pacman: {
        title: "Pealkiri",
        sound: "Heli",
        auto_start: "Automaatne käivitamine",
      },
    },
  },
  pn = { wakawaka: { title: "JUMALAREŽIIM AKTIVEERITUD" } },
  vn = { editor: hn, dialog: pn },
  _n = {
    card: {
      pacman: {
        title: "Izenburua",
        sound: "Soinua",
        auto_start: "Hasiera automatikoa",
      },
    },
  },
  gn = { wakawaka: { title: "JAINKO MODUA AKTIBATUTA" } },
  yn = { editor: _n, dialog: gn },
  mn = {
    card: {
      pacman: { title: "عنوان", sound: "صدا", auto_start: "شروع خودکار" },
    },
  },
  bn = { wakawaka: { title: "حالت خدا فعال شد" } },
  kn = { editor: mn, dialog: bn },
  wn = {
    card: {
      pacman: {
        title: "Otsikko",
        sound: "Ääni",
        auto_start: "Automaattinen käynnistys",
      },
    },
  },
  An = { wakawaka: { title: "JUMALATILA AKTIVOITU" } },
  On = { editor: wn, dialog: An },
  $n = {
    card: {
      pacman: {
        title: "Titre",
        sound: "Son",
        auto_start: "Démarrage automatique",
      },
    },
  },
  En = { wakawaka: { title: "MODE DIEU ACTIVÉ" } },
  Tn = { editor: $n, dialog: En },
  Sn = {
    card: {
      pacman: { title: "Titel", sound: "Lûd", auto_start: "Automatysk starte" },
    },
  },
  jn = { wakawaka: { title: "GODMODUS AKTIVEARRE" } },
  In = { editor: Sn, dialog: jn },
  Pn = {
    card: {
      pacman: {
        title: "Teideal",
        sound: "Fuaim",
        auto_start: "Tosaigh go huathoibríoch",
      },
    },
  },
  Cn = { wakawaka: { title: "MÓD DÉ GNÍOMHACHTAITHE" } },
  zn = { editor: Pn, dialog: Cn },
  Dn = {
    card: {
      pacman: {
        title: "Título",
        sound: "Son",
        auto_start: "Inicio automático",
      },
    },
  },
  Mn = { wakawaka: { title: "MODO DEUS ACTIVADO" } },
  Rn = { editor: Dn, dialog: Mn },
  Un = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Ton",
        auto_start: "Automatischer Start",
      },
    },
  },
  xn = { wakawaka: { title: "GOTTMODUS AKTIVIERT" } },
  Nn = { editor: Un, dialog: xn },
  Hn = {
    card: {
      pacman: { title: "כותרת", sound: "צליל", auto_start: "הפעלה אוטומטית" },
    },
  },
  Vn = { wakawaka: { title: "מצב אלוהים הופעל" } },
  Kn = { editor: Hn, dialog: Vn },
  Ln = {
    card: {
      pacman: {
        title: "शीर्षक",
        sound: "ध्वनि",
        auto_start: "स्वचालित प्रारंभ",
      },
    },
  },
  Bn = { wakawaka: { title: "गॉड मोड सक्रिय" } },
  Gn = { editor: Ln, dialog: Bn },
  Wn = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  Fn = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  qn = { editor: Wn, dialog: Fn },
  Jn = {
    card: {
      pacman: {
        title: "Cím",
        sound: "Hang",
        auto_start: "Automatikus indítás",
      },
    },
  },
  Zn = { wakawaka: { title: "ISTEN MÓD AKTIVÁLVA" } },
  Yn = { editor: Jn, dialog: Zn },
  Qn = {
    card: {
      pacman: {
        title: "Վերնագիր",
        sound: "Ձայն",
        auto_start: "Ինքնաադարձակ գործարկում",
      },
    },
  },
  Xn = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  ti = { editor: Qn, dialog: Xn },
  ei = {
    card: {
      pacman: { title: "Judul", sound: "Suara", auto_start: "Mulai otomatis" },
    },
  },
  ni = { wakawaka: { title: "MODE TUHAN DIAKTIFKAN" } },
  ii = { editor: ei, dialog: ni },
  oi = {
    card: {
      pacman: {
        title: "Titill",
        sound: "Hljóð",
        auto_start: "Sjálfvirk ræsing",
      },
    },
  },
  ai = { wakawaka: { title: "GUÐSTILLING VIRKJUÐ" } },
  ri = { editor: oi, dialog: ai },
  li = {
    card: {
      pacman: {
        title: "Titolo",
        sound: "Audio",
        auto_start: "Avvio automatico",
      },
    },
  },
  ui = { wakawaka: { title: "MODALITÀ DIO ATTIVATA" } },
  si = { editor: li, dialog: ui },
  di = {
    card: {
      pacman: { title: "タイトル", sound: "サウンド", auto_start: "自動開始" },
    },
  },
  ci = { wakawaka: { title: "ゴッドモード起動" } },
  fi = { editor: di, dialog: ci },
  hi = {
    card: {
      pacman: {
        title: "სათაური",
        sound: "ხმა",
        auto_start: "ავტომატური დაწყება",
      },
    },
  },
  pi = { wakawaka: { title: "ღვთის რეჟიმი გააქტიურებულია" } },
  vi = { editor: hi, dialog: pi },
  _i = {
    card: { pacman: { title: "제목", sound: "소리", auto_start: "자동 시작" } },
  },
  gi = { wakawaka: { title: "갓 모드 활성화" } },
  yi = { editor: _i, dialog: gi },
  mi = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Toun",
        auto_start: "Automatesche Start",
      },
    },
  },
  bi = { wakawaka: { title: "GOTTMODUS AKTIVÉIERT" } },
  ki = { editor: mi, dialog: bi },
  wi = {
    card: {
      pacman: {
        title: "Pavadinimas",
        sound: "Garsas",
        auto_start: "Automatinis paleidimas",
      },
    },
  },
  Ai = { wakawaka: { title: "DIEVO REŽIMAS AKTYVUOTAS" } },
  Oi = { editor: wi, dialog: Ai },
  $i = {
    card: {
      pacman: {
        title: "Nosaukums",
        sound: "Skaņa",
        auto_start: "Automātiskā palaišana",
      },
    },
  },
  Ei = { wakawaka: { title: "DIEVA REŽĪMS AKTIVIZĒTS" } },
  Ti = { editor: $i, dialog: Ei },
  Si = {
    card: {
      pacman: {
        title: "Наслов",
        sound: "Звук",
        auto_start: "Автоматско стартување",
      },
    },
  },
  ji = { wakawaka: { title: "РЕЖИМ НА БОГА АКТИВИРАН" } },
  Ii = { editor: Si, dialog: ji },
  Pi = {
    card: {
      pacman: {
        title: "ശീർഷകം",
        sound: "ശബ്ദം",
        auto_start: "യാന്ത്രിക ആരംഭം",
      },
    },
  },
  Ci = { wakawaka: { title: "ഗോഡ് മോഡ് സജീവമാക്കി" } },
  zi = { editor: Pi, dialog: Ci },
  Di = {
    card: {
      pacman: { title: "Tittel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  Mi = { wakawaka: { title: "GUDMODUS AKTIVERT" } },
  Ri = { editor: Di, dialog: Mi },
  Ui = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Geluid",
        auto_start: "Automatisch starten",
      },
    },
  },
  xi = { wakawaka: { title: "GODMODUS GEACTIVEERD" } },
  Ni = { editor: Ui, dialog: xi },
  Hi = {
    card: {
      pacman: { title: "Tittel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  Vi = { wakawaka: { title: "GUDMODUS AKTIVERT" } },
  Ki = { editor: Hi, dialog: Vi },
  Li = {
    card: {
      pacman: {
        title: "Tytuł",
        sound: "Dźwięk",
        auto_start: "Automatyczny start",
      },
    },
  },
  Bi = { wakawaka: { title: "TRYB BOGA AKTYWOWANY" } },
  Gi = { editor: Li, dialog: Bi },
  Wi = {
    card: {
      pacman: {
        title: "Título",
        sound: "Som",
        auto_start: "Início automático",
      },
    },
  },
  Fi = { wakawaka: { title: "MODO DEUS ATIVADO" } },
  qi = { editor: Wi, dialog: Fi },
  Ji = {
    card: {
      pacman: {
        title: "Título",
        sound: "Som",
        auto_start: "Início automático",
      },
    },
  },
  Zi = { wakawaka: { title: "MODO DEUS ATIVADO" } },
  Yi = { editor: Ji, dialog: Zi },
  Qi = {
    card: {
      pacman: {
        title: "Titlu",
        sound: "Sunet",
        auto_start: "Pornire automată",
      },
    },
  },
  Xi = { wakawaka: { title: "MODUL DIVIN ACTIVAT" } },
  to = { editor: Qi, dialog: Xi },
  eo = {
    card: {
      pacman: { title: "Заголовок", sound: "Звук", auto_start: "Автозапуск" },
    },
  },
  no = { wakawaka: { title: "РЕЖИМ БОГА АКТИВИРОВАН" } },
  io = { editor: eo, dialog: no },
  oo = {
    card: {
      pacman: {
        title: "Názov",
        sound: "Zvuk",
        auto_start: "Automatické spustenie",
      },
    },
  },
  ao = { wakawaka: { title: "REŽIM BOHA AKTIVOVANÝ" } },
  ro = { editor: oo, dialog: ao },
  lo = {
    card: {
      pacman: { title: "Naslov", sound: "Zvok", auto_start: "Samodejni zagon" },
    },
  },
  uo = { wakawaka: { title: "BOŽJI NAČIN AKTIVIRAN" } },
  so = { editor: lo, dialog: uo },
  co = {
    card: {
      pacman: { title: "Titulli", sound: "Tingulli", auto_start: "Auto start" },
    },
  },
  fo = { wakawaka: { title: "MODALITETI I ZOTIT I AKTIVIZUAR" } },
  ho = { editor: co, dialog: fo },
  po = {
    card: {
      pacman: {
        title: "Наслов",
        sound: "Звук",
        auto_start: "Аутоматско покретање",
      },
    },
  },
  vo = { wakawaka: { title: "БОЖЈИ РЕЖИМ АКТИВИРАН" } },
  _o = { editor: po, dialog: vo },
  go = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  yo = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  mo = { editor: go, dialog: yo },
  bo = {
    card: {
      pacman: { title: "Titel", sound: "Ljud", auto_start: "Automatisk start" },
    },
  },
  ko = { wakawaka: { title: "GUDLÄGE AKTIVERAT" } },
  wo = { editor: bo, dialog: ko },
  Ao = {
    card: {
      pacman: {
        title: "தலைப்பு",
        sound: "ஒலி",
        auto_start: "தானியங்கி தொடக்கம்",
      },
    },
  },
  Oo = { wakawaka: { title: "காட் மோட் செயல்படுத்தப்பட்டது" } },
  $o = { editor: Ao, dialog: Oo },
  Eo = {
    card: {
      pacman: { title: "శీర్షిక", sound: "ధ్వని", auto_start: "ఆటో ప్రారంభం" },
    },
  },
  To = { wakawaka: { title: "గాడ్ మోడ్ సక్రియం చేయబడింది" } },
  So = { editor: Eo, dialog: To },
  jo = {
    card: {
      pacman: { title: "ชื่อ", sound: "เสียง", auto_start: "เริ่มอัตโนมัติ" },
    },
  },
  Io = { wakawaka: { title: "เปิดโหมดพระเจ้าแล้ว" } },
  Po = { editor: jo, dialog: Io },
  Co = {
    card: {
      pacman: {
        title: "Başlık",
        sound: "Ses",
        auto_start: "Otomatik başlatma",
      },
    },
  },
  zo = { wakawaka: { title: "TANRI MODU ETKİNLEŞTİRİLDİ" } },
  Do = { editor: Co, dialog: zo },
  Mo = {
    card: {
      pacman: { title: "Заголовок", sound: "Звук", auto_start: "Автозапуск" },
    },
  },
  Ro = { wakawaka: { title: "РЕЖИМ БОГА АКТИВОВАНО" } },
  Uo = { editor: Mo, dialog: Ro },
  xo = {
    card: {
      pacman: { title: "عنوان", sound: "آواز", auto_start: "خودکار شروع" },
    },
  },
  No = { wakawaka: { title: "گاڈ موڈ فعال" } },
  Ho = { editor: xo, dialog: No },
  Vo = {
    card: {
      pacman: {
        title: "Tiêu đề",
        sound: "Âm thanh",
        auto_start: "Tự động bắt đầu",
      },
    },
  },
  Ko = { wakawaka: { title: "CHẾ ĐỘ THẦN ĐÃ KÍCH HOẠT" } },
  Lo = { editor: Vo, dialog: Ko },
  Bo = {
    card: { pacman: { title: "标题", sound: "声音", auto_start: "自动启动" } },
  },
  Go = { wakawaka: { title: "上帝模式已激活" } },
  Wo = { editor: Bo, dialog: Go },
  Fo = {
    card: { pacman: { title: "標題", sound: "聲音", auto_start: "自動啟動" } },
  },
  qo = { wakawaka: { title: "上帝模式已啟動" } },
  Jo = { editor: Fo, dialog: qo },
  Zo = {
    af: le,
    ar: ce,
    bg: ve,
    bn: me,
    bs: Ae,
    ca: Te,
    cs: Pe,
    cy: Me,
    da: Ne,
    de: Le,
    el: Fe,
    en: Ye,
    "en-GB": en,
    eo: rn,
    es: Object.freeze({ __proto__: null, default: sn, dialog: un, editor: ln }),
    "es-419": Object.freeze({
      __proto__: null,
      default: fn,
      dialog: cn,
      editor: dn,
    }),
    et: Object.freeze({ __proto__: null, default: vn, dialog: pn, editor: hn }),
    eu: Object.freeze({ __proto__: null, default: yn, dialog: gn, editor: _n }),
    fa: Object.freeze({ __proto__: null, default: kn, dialog: bn, editor: mn }),
    fi: Object.freeze({ __proto__: null, default: On, dialog: An, editor: wn }),
    fr: Object.freeze({ __proto__: null, default: Tn, dialog: En, editor: $n }),
    fy: Object.freeze({ __proto__: null, default: In, dialog: jn, editor: Sn }),
    ga: Object.freeze({ __proto__: null, default: zn, dialog: Cn, editor: Pn }),
    gl: Object.freeze({ __proto__: null, default: Rn, dialog: Mn, editor: Dn }),
    gsw: Object.freeze({
      __proto__: null,
      default: Nn,
      dialog: xn,
      editor: Un,
    }),
    he: Object.freeze({ __proto__: null, default: Kn, dialog: Vn, editor: Hn }),
    hi: Object.freeze({ __proto__: null, default: Gn, dialog: Bn, editor: Ln }),
    hr: Object.freeze({ __proto__: null, default: qn, dialog: Fn, editor: Wn }),
    hu: Object.freeze({ __proto__: null, default: Yn, dialog: Zn, editor: Jn }),
    hy: Object.freeze({ __proto__: null, default: ti, dialog: Xn, editor: Qn }),
    id: Object.freeze({ __proto__: null, default: ii, dialog: ni, editor: ei }),
    is: Object.freeze({ __proto__: null, default: ri, dialog: ai, editor: oi }),
    it: Object.freeze({ __proto__: null, default: si, dialog: ui, editor: li }),
    ja: Object.freeze({ __proto__: null, default: fi, dialog: ci, editor: di }),
    ka: Object.freeze({ __proto__: null, default: vi, dialog: pi, editor: hi }),
    ko: Object.freeze({ __proto__: null, default: yi, dialog: gi, editor: _i }),
    lb: Object.freeze({ __proto__: null, default: ki, dialog: bi, editor: mi }),
    lt: Object.freeze({ __proto__: null, default: Oi, dialog: Ai, editor: wi }),
    lv: Object.freeze({ __proto__: null, default: Ti, dialog: Ei, editor: $i }),
    mk: Object.freeze({ __proto__: null, default: Ii, dialog: ji, editor: Si }),
    ml: Object.freeze({ __proto__: null, default: zi, dialog: Ci, editor: Pi }),
    nb: Object.freeze({ __proto__: null, default: Ri, dialog: Mi, editor: Di }),
    nl: Object.freeze({ __proto__: null, default: Ni, dialog: xi, editor: Ui }),
    nn: Object.freeze({ __proto__: null, default: Ki, dialog: Vi, editor: Hi }),
    pl: Object.freeze({ __proto__: null, default: Gi, dialog: Bi, editor: Li }),
    pt: Object.freeze({ __proto__: null, default: qi, dialog: Fi, editor: Wi }),
    "pt-BR": Object.freeze({
      __proto__: null,
      default: Yi,
      dialog: Zi,
      editor: Ji,
    }),
    ro: Object.freeze({ __proto__: null, default: to, dialog: Xi, editor: Qi }),
    ru: Object.freeze({ __proto__: null, default: io, dialog: no, editor: eo }),
    sk: Object.freeze({ __proto__: null, default: ro, dialog: ao, editor: oo }),
    sl: Object.freeze({ __proto__: null, default: so, dialog: uo, editor: lo }),
    sq: Object.freeze({ __proto__: null, default: ho, dialog: fo, editor: co }),
    sr: Object.freeze({ __proto__: null, default: _o, dialog: vo, editor: po }),
    "sr-Latn": Object.freeze({
      __proto__: null,
      default: mo,
      dialog: yo,
      editor: go,
    }),
    sv: Object.freeze({ __proto__: null, default: wo, dialog: ko, editor: bo }),
    ta: Object.freeze({ __proto__: null, default: $o, dialog: Oo, editor: Ao }),
    te: Object.freeze({ __proto__: null, default: So, dialog: To, editor: Eo }),
    th: Object.freeze({ __proto__: null, default: Po, dialog: Io, editor: jo }),
    tr: Object.freeze({ __proto__: null, default: Do, dialog: zo, editor: Co }),
    uk: Object.freeze({ __proto__: null, default: Uo, dialog: Ro, editor: Mo }),
    ur: Object.freeze({ __proto__: null, default: Ho, dialog: No, editor: xo }),
    vi: Object.freeze({ __proto__: null, default: Lo, dialog: Ko, editor: Vo }),
    "zh-Hans": Object.freeze({
      __proto__: null,
      default: Wo,
      dialog: Go,
      editor: Bo,
    }),
    "zh-Hant": Object.freeze({
      __proto__: null,
      default: Jo,
      dialog: qo,
      editor: Fo,
    }),
  };
function Yo(t, e) {
  try {
    return t.split(".").reduce(function (t, e) {
      return t[e];
    }, Zo[e]);
  } catch (t) {
    return;
  }
}
var Qo = [
    { name: "title", selector: { text: {} } },
    { name: "auto_start", selector: { boolean: {} } },
  ],
  Xo = (function () {
    function t() {
      var e;
      return (
        D(this, t),
        ((e = O(this, t, arguments))._computeLabel = function (t) {
          var n;
          return ((n = e.hass),
          function (t) {
            var e,
              i,
              o = Yo(
                t,
                null !==
                  (i =
                    null === (e = null == n ? void 0 : n.locale) || void 0 === e
                      ? void 0
                      : e.language) && void 0 !== i
                  ? i
                  : "en"
              );
            return (o || (o = Yo(t, "en")), null != o ? o : t);
          })("editor.card.pacman.".concat(t.name));
        }),
        e
      );
    }
    return (
      E(t, Ft),
      R(t, [
        {
          key: "setConfig",
          value: function (t) {
            this._config = Object.assign({ auto_start: !1 }, t);
          },
        },
        {
          key: "_valueChanged",
          value: function (t) {
            var e = t.detail;
            this.dispatchEvent(
              new CustomEvent("config-changed", {
                detail: { config: e.value },
                bubbles: !0,
                composed: !0,
              })
            );
          },
        },
        {
          key: "render",
          value: function () {
            return this.hass && this._config
              ? jt(
                  c ||
                    (c = f([
                      "\n      <ha-form\n        .hass=",
                      "\n        .data=",
                      "\n        .schema=",
                      "\n        .computeLabel=",
                      "\n        @value-changed=",
                      "\n      ></ha-form>\n    ",
                    ])),
                  this.hass,
                  this._config,
                  Qo,
                  this._computeLabel,
                  this._valueChanged
                )
              : Pt;
          },
        },
      ])
    );
  })();
(V([Qt({ attribute: !1 })], Xo.prototype, "hass", void 0),
  V([Xt()], Xo.prototype, "_config", void 0),
  (Xo = V([Jt(H)], Xo)));
var ta = Object.freeze({
  __proto__: null,
  get PacmanCardEditor() {
    return Xo;
  },
});
