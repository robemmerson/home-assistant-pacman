var t, e, n, i, o, a, r, l, u, s, d, c, f;
function h(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(
      Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
    )
  );
}
function p(t, e) {
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
function v(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? p(Object(n), !0).forEach(function (e) {
          _(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : p(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
  }
  return t;
}
function _(t, e, n) {
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
function g(t, e, n, i) {
  var o = y(P(1 & i ? t.prototype : t), e, n);
  return 2 & i && "function" == typeof o
    ? function (t) {
        return o.apply(n, t);
      }
    : o;
}
function y() {
  return (
    (y =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, n) {
            var i = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = P(t)); );
              return t;
            })(t, e);
            if (i) {
              var o = Object.getOwnPropertyDescriptor(i, e);
              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
            }
          }),
    y.apply(null, arguments)
  );
}
function m(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return M(t);
    })(t) ||
    (function (t) {
      if (
        ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t["@@iterator"]
      )
        return Array.from(t);
    })(t) ||
    z(t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function b(t, e) {
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
    z(t, e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function k() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
    e,
    n = "function" == typeof Symbol ? Symbol : {},
    i = n.iterator || "@@iterator",
    o = n.toStringTag || "@@toStringTag";
  function a(n, i, o, a) {
    var u = i && i.prototype instanceof l ? i : l,
      s = Object.create(u.prototype);
    return (
      w(
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
      : (w((e = {}), i, function () {
          return this;
        }),
        e),
    c = (s.prototype = l.prototype = Object.create(d));
  function f(t) {
    return (
      Object.setPrototypeOf
        ? Object.setPrototypeOf(t, s)
        : ((t.__proto__ = s), w(t, o, "GeneratorFunction")),
      (t.prototype = Object.create(c)),
      t
    );
  }
  return (
    (u.prototype = s),
    w(c, "constructor", s),
    w(s, "constructor", u),
    (u.displayName = "GeneratorFunction"),
    w(s, o, "GeneratorFunction"),
    w(c),
    w(c, o, "Generator"),
    w(c, i, function () {
      return this;
    }),
    w(c, "toString", function () {
      return "[object Generator]";
    }),
    (k = function () {
      return { w: a, m: f };
    })()
  );
}
function w(t, e, n, i) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch (t) {
    o = 0;
  }
  ((w = function (t, e, n, i) {
    function a(e, n) {
      w(t, e, function (t) {
        return this._invoke(e, n, t);
      });
    }
    e
      ? o
        ? o(t, e, { value: n, enumerable: !i, configurable: !i, writable: !i })
        : (t[e] = n)
      : (a("next", 0), a("throw", 1), a("return", 2));
  }),
    w(t, e, n, i));
}
function A(t, e, n, i, o, a, r) {
  try {
    var l = t[a](r),
      u = l.value;
  } catch (t) {
    return void n(t);
  }
  l.done ? e(u) : Promise.resolve(u).then(i, o);
}
function O(t) {
  return function () {
    var e = this,
      n = arguments;
    return new Promise(function (i, o) {
      var a = t.apply(e, n);
      function r(t) {
        A(a, i, o, r, l, "next", t);
      }
      function l(t) {
        A(a, i, o, r, l, "throw", t);
      }
      r(void 0);
    });
  };
}
function $(t, e, n) {
  return (
    (e = P(e)),
    (function (t, e) {
      if (e && ("object" == N(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return E(t);
    })(t, j() ? Reflect.construct(e, n || [], P(t).constructor) : e.apply(t, n))
  );
}
function E(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function T(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && I(t, e));
}
function S(t) {
  var e = "function" == typeof Map ? new Map() : void 0;
  return (
    (S = function (t) {
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
          if (j()) return Reflect.construct.apply(null, arguments);
          var i = [null];
          i.push.apply(i, e);
          var o = new (t.bind.apply(t, i))();
          return (n && I(o, n.prototype), o);
        })(t, arguments, P(this).constructor);
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
        I(n, t)
      );
    }),
    S(t)
  );
}
function j() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (j = function () {
    return !!t;
  })();
}
function I(t, e) {
  return (
    (I = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return ((t.__proto__ = e), t);
        }),
    I(t, e)
  );
}
function P(t) {
  return (
    (P = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    P(t)
  );
}
function C(t, e) {
  var n =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!n) {
    if (
      Array.isArray(t) ||
      (n = z(t)) ||
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
function z(t, e) {
  if (t) {
    if ("string" == typeof t) return M(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return (
      "Object" === n && t.constructor && (n = t.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(t)
        : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? M(t, e)
          : void 0
    );
  }
}
function M(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
  return i;
}
function x(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function D(t, e) {
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
    e && D(t.prototype, e),
    n && D(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function U(t) {
  var e = (function (t, e) {
    if ("object" != N(t) || !t) return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 !== n) {
      var i = n.call(t, e || "default");
      if ("object" != N(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  })(t, "string");
  return "symbol" == N(e) ? e : e + "";
}
function N(t) {
  return (
    (N =
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
    N(t)
  );
}
var H = "pacman-card",
  V = "".concat(H, "-editor");
function K(t, e, n, i) {
  var o,
    a = arguments.length,
    r =
      a < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i;
  if (
    "object" === ("undefined" == typeof Reflect ? "undefined" : N(Reflect)) &&
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
var L = globalThis,
  B =
    L.ShadowRoot &&
    (void 0 === L.ShadyCSS || L.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  G = Symbol(),
  F = new WeakMap(),
  W = (function () {
    return R(
      function t(e, n, i) {
        if ((x(this, t), (this._$cssResult$ = !0), i !== G))
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
            if (B && void 0 === t) {
              var n = void 0 !== e && 1 === e.length;
              (n && (t = F.get(e)),
                void 0 === t &&
                  ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
                  n && F.set(e, t)));
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
  q = B
    ? function (t) {
        return t;
      }
    : function (t) {
        return t instanceof CSSStyleSheet
          ? (function (t) {
              var e,
                n = "",
                i = C(t.cssRules);
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
                return new W("string" == typeof t ? t : t + "", void 0, G);
              })(n);
            })(t)
          : t;
      },
  J = Object.is,
  Z = Object.defineProperty,
  Y = Object.getOwnPropertyDescriptor,
  Q = Object.getOwnPropertyNames,
  X = Object.getOwnPropertySymbols,
  tt = Object.getPrototypeOf,
  et = globalThis,
  nt = et.trustedTypes,
  it = nt ? nt.emptyScript : "",
  ot = et.reactiveElementPolyfillSupport,
  at = function (t, e) {
    return t;
  },
  rt = {
    toAttribute: function (t, e) {
      switch (e) {
        case Boolean:
          t = t ? it : null;
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
  lt = function (t, e) {
    return !J(t, e);
  },
  ut = {
    attribute: !0,
    type: String,
    converter: rt,
    reflect: !1,
    useDefault: !1,
    hasChanged: lt,
  };
((null !== (t = Symbol.metadata) && void 0 !== t) ||
  (Symbol.metadata = Symbol("metadata")),
  (null !== (e = et.litPropertyMetadata) && void 0 !== e) ||
    (et.litPropertyMetadata = new WeakMap()));
var st = (function () {
  function t() {
    var e;
    return (
      x(this, t),
      ((e = $(this, t))._$Ep = void 0),
      (e.isUpdatePending = !1),
      (e.hasUpdated = !1),
      (e._$Em = null),
      e._$Ev(),
      e
    );
  }
  return (
    T(t, S(HTMLElement)),
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
              n = C(this.constructor.elementProperties.keys());
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
                if (B)
                  t.adoptedStyleSheets = e.map(function (t) {
                    return t instanceof CSSStyleSheet ? t : t.styleSheet;
                  });
                else {
                  var n,
                    i = C(e);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var o = n.value,
                        a = document.createElement("style"),
                        r = L.litNonce;
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
                    : rt
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
                      : rt;
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
                  (null !== (a = n.hasChanged) && void 0 !== a ? a : lt)(
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
            ((e = O(
              k().m(function t() {
                var e, n;
                return k().w(
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
                    n = C(this._$Ep);
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      var i = b(e.value, 2),
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
                    u = C(r);
                  try {
                    for (u.s(); !(l = u.n()).done; ) {
                      var s = b(l.value, 2),
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
            return (this.finalize(), this._$Eh && m(this._$Eh.keys()));
          },
        },
        {
          key: "createProperty",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ut;
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
              void 0 !== i && Z(this.prototype, t, i);
            }
          },
        },
        {
          key: "getPropertyDescriptor",
          value: function (t, e, n) {
            var i,
              o =
                null !== (i = Y(this.prototype, t)) && void 0 !== i
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
              : ut;
          },
        },
        {
          key: "_$Ei",
          value: function () {
            if (!this.hasOwnProperty(at("elementProperties"))) {
              var t = tt(this);
              (t.finalize(),
                void 0 !== t.l && (this.l = m(t.l)),
                (this.elementProperties = new Map(t.elementProperties)));
            }
          },
        },
        {
          key: "finalize",
          value: function () {
            if (!this.hasOwnProperty(at("finalized"))) {
              if (
                ((this.finalized = !0),
                this._$Ei(),
                this.hasOwnProperty(at("properties")))
              ) {
                var t,
                  e = this.properties,
                  n = C([].concat(m(Q(e)), m(X(e))));
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
                    l = C(a);
                  try {
                    for (l.s(); !(r = l.n()).done; ) {
                      var u = b(r.value, 2),
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
                f = C(this.elementProperties);
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  var h = b(c.value, 2),
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
                i = C(new Set(t.flat(1 / 0).reverse()));
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var o = n.value;
                  e.unshift(q(o));
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
            } else void 0 !== t && e.push(q(t));
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
((st.elementStyles = []),
  (st.shadowRootOptions = { mode: "open" }),
  (st[at("elementProperties")] = new Map()),
  (st[at("finalized")] = new Map()),
  null != ot && ot({ ReactiveElement: st }),
  (null !== (n = et.reactiveElementVersions) && void 0 !== n
    ? n
    : (et.reactiveElementVersions = [])
  ).push("2.1.2"));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var dt = globalThis,
  ct = function (t) {
    return t;
  },
  ft = dt.trustedTypes,
  ht = ft
    ? ft.createPolicy("lit-html", {
        createHTML: function (t) {
          return t;
        },
      })
    : void 0,
  pt = "$lit$",
  vt = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
  _t = "?" + vt,
  gt = "<".concat(_t, ">"),
  yt = document,
  mt = function () {
    return yt.createComment("");
  },
  bt = function (t) {
    return null === t || ("object" != N(t) && "function" != typeof t);
  },
  kt = Array.isArray,
  wt = "[ \t\n\f\r]",
  At = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Ot = /-->/g,
  $t = />/g,
  Et = RegExp(
    ">|"
      .concat(wt, "(?:([^\\s\"'>=/]+)(")
      .concat(wt, "*=")
      .concat(wt, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),
    "g"
  ),
  Tt = /'/g,
  St = /"/g,
  jt = /^(?:script|style|textarea|title)$/i,
  It = (function (t) {
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
  Pt = Symbol.for("lit-noChange"),
  Ct = Symbol.for("lit-nothing"),
  zt = new WeakMap(),
  Mt = yt.createTreeWalker(yt, 129);
function xt(t, e) {
  if (!kt(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== ht ? ht.createHTML(e) : e;
}
var Dt = function (t, e) {
    for (
      var n,
        i = t.length - 1,
        o = [],
        a = 2 === e ? "<svg>" : 3 === e ? "<math>" : "",
        r = At,
        l = 0;
      l < i;
      l++
    ) {
      for (
        var u = t[l], s = void 0, d = void 0, c = -1, f = 0;
        f < u.length && ((r.lastIndex = f), null !== (d = r.exec(u)));
      )
        ((f = r.lastIndex),
          r === At
            ? "!--" === d[1]
              ? (r = Ot)
              : void 0 !== d[1]
                ? (r = $t)
                : void 0 !== d[2]
                  ? (jt.test(d[2]) && (n = RegExp("</" + d[2], "g")), (r = Et))
                  : void 0 !== d[3] && (r = Et)
            : r === Et
              ? ">" === d[0]
                ? ((r = null != n ? n : At), (c = -1))
                : void 0 === d[1]
                  ? (c = -2)
                  : ((c = r.lastIndex - d[2].length),
                    (s = d[1]),
                    (r = void 0 === d[3] ? Et : '"' === d[3] ? St : Tt))
              : r === St || r === Tt
                ? (r = Et)
                : r === Ot || r === $t
                  ? (r = At)
                  : ((r = Et), (n = void 0)));
      var h = r === Et && t[l + 1].startsWith("/>") ? " " : "";
      a +=
        r === At
          ? u + gt
          : c >= 0
            ? (o.push(s), u.slice(0, c) + pt + u.slice(c) + vt + h)
            : u + vt + (-2 === c ? l : h);
    }
    return [
      xt(
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
        (x(this, t), (this.parts = []));
        var r = 0,
          l = 0,
          u = o.length - 1,
          s = this.parts,
          d = b(Dt(o, a), 2),
          c = d[0],
          f = d[1];
        if (
          ((this.el = t.createElement(c, n)),
          (Mt.currentNode = this.el.content),
          2 === a || 3 === a)
        ) {
          var h = this.el.content.firstChild;
          h.replaceWith.apply(h, m(h.childNodes));
        }
        for (; null !== (i = Mt.nextNode()) && s.length < u; ) {
          if (1 === i.nodeType) {
            if (i.hasAttributes()) {
              var p,
                v = C(i.getAttributeNames());
              try {
                for (v.s(); !(p = v.n()).done; ) {
                  var _ = p.value;
                  if (_.endsWith(pt)) {
                    var g = f[l++],
                      y = i.getAttribute(_).split(vt),
                      k = /([.?@])?(.*)/.exec(g);
                    (s.push({
                      type: 1,
                      index: r,
                      name: k[2],
                      strings: y,
                      ctor:
                        "." === k[1]
                          ? Kt
                          : "?" === k[1]
                            ? Lt
                            : "@" === k[1]
                              ? Bt
                              : Vt,
                    }),
                      i.removeAttribute(_));
                  } else
                    _.startsWith(vt) &&
                      (s.push({ type: 6, index: r }), i.removeAttribute(_));
                }
              } catch (t) {
                v.e(t);
              } finally {
                v.f();
              }
            }
            if (jt.test(i.tagName)) {
              var w = i.textContent.split(vt),
                A = w.length - 1;
              if (A > 0) {
                i.textContent = ft ? ft.emptyScript : "";
                for (var O = 0; O < A; O++)
                  (i.append(w[O], mt()),
                    Mt.nextNode(),
                    s.push({ type: 2, index: ++r }));
                i.append(w[A], mt());
              }
            }
          } else if (8 === i.nodeType)
            if (i.data === _t) s.push({ type: 2, index: r });
            else
              for (var $ = -1; -1 !== ($ = i.data.indexOf(vt, $ + 1)); )
                (s.push({ type: 7, index: r }), ($ += vt.length - 1));
          r++;
        }
      },
      null,
      [
        {
          key: "createElement",
          value: function (t, e) {
            var n = yt.createElement("template");
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
  if (e === Pt) return e;
  var s =
      void 0 !== u
        ? null === (n = l._$Co) || void 0 === n
          ? void 0
          : n[u]
        : l._$Cl,
    d = bt(e) ? void 0 : e._$litDirective$;
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
var Nt = (function () {
    return R(
      function t(e, n) {
        (x(this, t),
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
                  : yt
              ).importNode(i, !0);
            Mt.currentNode = a;
            for (
              var r = Mt.nextNode(), l = 0, u = 0, s = o[0];
              void 0 !== s;
            ) {
              var d;
              if (l === s.index) {
                var c = void 0;
                (2 === s.type
                  ? (c = new Ht(r, r.nextSibling, this, t))
                  : 1 === s.type
                    ? (c = new s.ctor(r, s.name, s.strings, this, t))
                    : 6 === s.type && (c = new Gt(r, this, t)),
                  this._$AV.push(c),
                  (s = o[++u]));
              }
              l !== (null === (d = s) || void 0 === d ? void 0 : d.index) &&
                ((r = Mt.nextNode()), l++);
            }
            return ((Mt.currentNode = yt), a);
          },
        },
        {
          key: "p",
          value: function (t) {
            var e,
              n = 0,
              i = C(this._$AV);
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
  Ht = (function () {
    return R(
      function t(e, n, i, o) {
        var a;
        (x(this, t),
          (this.type = 2),
          (this._$AH = Ct),
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
              bt(t)
                ? t === Ct || null == t || "" === t
                  ? (this._$AH !== Ct && this._$AR(), (this._$AH = Ct))
                  : t !== this._$AH && t !== Pt && this._(t)
                : void 0 !== t._$litType$
                  ? this.$(t)
                  : void 0 !== t.nodeType
                    ? this.T(t)
                    : (function (t) {
                          return (
                            kt(t) ||
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
            (this._$AH !== Ct && bt(this._$AH)
              ? (this._$AA.nextSibling.data = t)
              : this.T(yt.createTextNode(t)),
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
                      (i.el = Rt.createElement(xt(i.h, i.h[0]), this.options)),
                    i);
            if (
              (null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === o
            )
              this._$AH.p(n);
            else {
              var a = new Nt(o, this),
                r = a.u(this.options);
              (a.p(n), this.T(r), (this._$AH = a));
            }
          },
        },
        {
          key: "_$AC",
          value: function (t) {
            var e = zt.get(t.strings);
            return (void 0 === e && zt.set(t.strings, (e = new Rt(t))), e);
          },
        },
        {
          key: "k",
          value: function (t) {
            kt(this._$AH) || ((this._$AH = []), this._$AR());
            var e,
              n,
              i = this._$AH,
              o = 0,
              a = C(t);
            try {
              for (a.s(); !(n = a.n()).done; ) {
                var r = n.value;
                (o === i.length
                  ? i.push(
                      (e = new _k(
                        this.O(mt()),
                        this.O(mt()),
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
                i = ct(t).nextSibling;
              (ct(t).remove(), (t = i));
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
  Vt = (function () {
    return R(
      function t(e, n, i, o, a) {
        (x(this, t),
          (this.type = 1),
          (this._$AH = Ct),
          (this._$AN = void 0),
          (this.element = e),
          (this.name = n),
          (this._$AM = o),
          (this.options = a),
          i.length > 2 || "" !== i[0] || "" !== i[1]
            ? ((this._$AH = Array(i.length - 1).fill(new String())),
              (this.strings = i))
            : (this._$AH = Ct));
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
                (a = !bt(t) || (t !== this._$AH && t !== Pt)) &&
                  (this._$AH = t));
            else {
              var r,
                l,
                u = t;
              for (t = o[0], r = 0; r < o.length - 1; r++)
                ((l = Ut(this, u[n + r], e, r)) === Pt && (l = this._$AH[r]),
                  a || (a = !bt(l) || l !== this._$AH[r]),
                  l === Ct
                    ? (t = Ct)
                    : t !== Ct && (t += (null != l ? l : "") + o[r + 1]),
                  (this._$AH[r] = l));
            }
            a && !i && this.j(t);
          },
        },
        {
          key: "j",
          value: function (t) {
            t === Ct
              ? this.element.removeAttribute(this.name)
              : this.element.setAttribute(this.name, null != t ? t : "");
          },
        },
      ]
    );
  })(),
  Kt = (function () {
    function t() {
      var e;
      return (x(this, t), ((e = $(this, t, arguments)).type = 3), e);
    }
    return (
      T(t, Vt),
      R(t, [
        {
          key: "j",
          value: function (t) {
            this.element[this.name] = t === Ct ? void 0 : t;
          },
        },
      ])
    );
  })(),
  Lt = (function () {
    function t() {
      var e;
      return (x(this, t), ((e = $(this, t, arguments)).type = 4), e);
    }
    return (
      T(t, Vt),
      R(t, [
        {
          key: "j",
          value: function (t) {
            this.element.toggleAttribute(this.name, !!t && t !== Ct);
          },
        },
      ])
    );
  })(),
  Bt = (function () {
    function t(e, n, i, o, a) {
      var r;
      return (x(this, t), ((r = $(this, t, [e, n, i, o, a])).type = 5), r);
    }
    return (
      T(t, Vt),
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
                  : Ct) !== Pt
            ) {
              var n = this._$AH,
                i =
                  (t === Ct && n !== Ct) ||
                  t.capture !== n.capture ||
                  t.once !== n.once ||
                  t.passive !== n.passive,
                o = t !== Ct && (n === Ct || i);
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
  Gt = (function () {
    return R(
      function t(e, n, i) {
        (x(this, t),
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
  Ft = dt.litHtmlPolyfillSupport;
(null != Ft && Ft(Rt, Ht),
  (null !== (i = dt.litHtmlVersions) && void 0 !== i
    ? i
    : (dt.litHtmlVersions = [])
  ).push("3.3.2"));
var Wt = globalThis,
  qt = (function () {
    function t() {
      var e;
      return (
        x(this, t),
        ((e = $(this, t, arguments)).renderOptions = { host: E(e) }),
        (e._$Do = void 0),
        e
      );
    }
    return (
      T(t, st),
      R(t, [
        {
          key: "createRenderRoot",
          value: function () {
            var e,
              n,
              i = g(t, "createRenderRoot", this, 3)([]);
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
              g(t, "update", this, 3)([e]),
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
                  o._$litPart$ = a = new Ht(
                    e.insertBefore(mt(), l),
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
            (g(t, "connectedCallback", this, 3)([]),
              null === (e = this._$Do) || void 0 === e || e.setConnected(!0));
          },
        },
        {
          key: "disconnectedCallback",
          value: function () {
            var e;
            (g(t, "disconnectedCallback", this, 3)([]),
              null === (e = this._$Do) || void 0 === e || e.setConnected(!1));
          },
        },
        {
          key: "render",
          value: function () {
            return Pt;
          },
        },
      ])
    );
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ((qt._$litElement$ = !0),
  (qt.finalized = !0),
  null === (o = Wt.litElementHydrateSupport) ||
    void 0 === o ||
    o.call(Wt, { LitElement: qt }));
var Jt = Wt.litElementPolyfillSupport;
(null == Jt || Jt({ LitElement: qt }),
  (null !== (a = Wt.litElementVersions) && void 0 !== a
    ? a
    : (Wt.litElementVersions = [])
  ).push("4.2.2"));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Zt = function (t) {
    return function (e, n) {
      void 0 !== n
        ? n.addInitializer(function () {
            customElements.define(t, e);
          })
        : customElements.define(t, e);
    };
  },
  Yt = {
    attribute: !0,
    type: String,
    converter: rt,
    reflect: !1,
    hasChanged: lt,
  },
  Qt = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yt,
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
 */ function Xt(t) {
  return function (e, n) {
    return "object" == N(n)
      ? Qt(t, e, n)
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
 */ function te(t) {
  return Xt(v(v({}, t), {}, { state: !0, attribute: !1 }));
}
var ee,
  ne,
  ie = "".concat("/pacman_static", "/assets"),
  oe = null;
function ae() {
  return (
    oe ||
    (oe =
      "PacMan" in window
        ? Promise.resolve()
        : new Promise(function (t, e) {
            var n = document.createElement("script");
            ((n.src = "".concat(ie, "/pacman-game.js")),
              (n.onload = function () {
                return t();
              }),
              (n.onerror = function () {
                return e(new Error("Failed to load Pac-Man"));
              }),
              document.head.appendChild(n));
          }))
  );
}
((ee = {
  type: H,
  name: "Pac-Man",
  description: "Play Pac-Man in your Home Assistant dashboard.",
}),
  ((ne = window).customCards = ne.customCards || []),
  ne.customCards.push(Object.assign(Object.assign({}, ee), { preview: !0 })));
var re = (function () {
  function t() {
    var e;
    return (
      x(this, t),
      ((e = $(this, t, arguments))._gameStarted = !1),
      (e._loading = !1),
      (e._isFullscreen = !1),
      (e._gameRunning = !1),
      (e._boundBeforeUnload = e._stopPinging.bind(e)),
      (e._boundVisibilityChange = e._handleVisibilityChange.bind(e)),
      (e._boundFullscreenChange = e._handleFullscreenChange.bind(e)),
      e
    );
  }
  return (
    T(t, qt),
    R(
      t,
      [
        {
          key: "setConfig",
          value: function (t) {
            this._config = Object.assign(Object.assign({}, t), {
              type: "custom:".concat(H),
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
            (g(t, "connectedCallback", this, 3)([]),
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
            (g(t, "disconnectedCallback", this, 3)([]),
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
            (g(t, "updated", this, 3)([e]),
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
            if (!this._config) return Ct;
            var t = "panel" !== this.layout && "grid" !== this.layout;
            return It(
              r ||
                (r = h([
                  "\n      <ha-card .header=",
                  '>\n        <div\n          id="root"\n          style="',
                  '"\n          @keydown=',
                  "\n          @keyup=",
                  "\n          @keypress=",
                  '\n        >\n          <div id="game"></div>\n          ',
                  '\n          <button\n            id="fullscreen-btn"\n            @click=',
                  "\n            title=",
                  "\n          >\n            ",
                  "\n          </button>\n          ",
                  "\n        </div>\n      </ha-card>\n    ",
                ])),
              this._config.title || Ct,
              t ? "padding-top: 75%" : "",
              this._trapKey,
              this._trapKey,
              this._trapKey,
              this._gameStarted
                ? Ct
                : It(
                    l ||
                      (l = h([
                        '\n                <div id="overlay" @click=',
                        '>\n                  <div class="pac-logo">\n                    <svg\n                      viewBox="0 0 100 100"\n                      xmlns="http://www.w3.org/2000/svg"\n                    >\n                      <circle cx="50" cy="50" r="48" fill="#ffff00" />\n                      <polygon points="50,50 98,20 98,80" fill="#000" />\n                    </svg>\n                  </div>\n                  <p>Click to play</p>\n                </div>\n              ',
                      ])),
                    this._startPacman
                  ),
              this._toggleFullscreen,
              this._isFullscreen ? "Exit fullscreen" : "Fullscreen",
              this._isFullscreen
                ? It(
                    u ||
                      (u = h([
                        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                  <path\n                    d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"\n                  />\n                </svg>',
                      ]))
                  )
                : It(
                    s ||
                      (s = h([
                        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                  <path\n                    d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"\n                  />\n                </svg>',
                      ]))
                  ),
              this._loading
                ? It(
                    d ||
                      (d = h([
                        '\n                <div id="loading">\n                  <div class="spinner"></div>\n                  <p>Loading Pac-Man...</p>\n                </div>\n              ',
                      ]))
                  )
                : Ct
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
            ((i = O(
              k().m(function t() {
                var e, n, i;
                return k().w(
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
                            (this._loading = !0),
                            (t.n = 2),
                            this.updateComplete
                          );
                        case 2:
                          return ((t.n = 3), ae());
                        case 3:
                          return (
                            (e = this.shadowRoot.getElementById("game")),
                            ((n = document.createElement("canvas")).id =
                              "pacman-canvas"),
                            (n.style.width = "100%"),
                            (n.style.height = "100%"),
                            e.appendChild(n),
                            (i = e.getBoundingClientRect()),
                            (n.width = Math.max(i.width || 400, 200)),
                            (n.height = Math.max(i.height || 300, 150)),
                            (this._loading = !1),
                            (this._commandInterface = window.PacMan(n)),
                            n.focus(),
                            (t.n = 4),
                            this._resolveEntryId()
                          );
                        case 4:
                          this._startPinging();
                        case 5:
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
            if ((this._stopPinging(), this._commandInterface)) {
              try {
                this._commandInterface.stop();
              } catch (t) {}
              this._commandInterface = void 0;
            }
            var e =
              null === (t = this.shadowRoot) || void 0 === t
                ? void 0
                : t.getElementById("game");
            (e && (e.innerHTML = ""),
              (this._gameRunning = !1),
              (this._gameStarted = !1),
              (this._loading = !1));
          },
        },
        {
          key: "_resolveEntryId",
          value:
            ((n = O(
              k().m(function t() {
                var e, n;
                return k().w(
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
            ((e = O(
              k().m(function t() {
                return k().w(function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return (
                          (t.n = 1),
                          Promise.resolve().then(function () {
                            return ia;
                          })
                        );
                      case 1:
                        return t.a(2, document.createElement(V));
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
              return new W(o, t, G);
            })(
              c ||
                (c = h([
                  '\n      :host {\n        display: block;\n        height: 100%;\n      }\n      ha-card {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n      #root {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        background: #000;\n      }\n      #game {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n      #game canvas {\n        width: 100% !important;\n        height: 100% !important;\n        display: block;\n      }\n      #overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background-color: #000;\n        z-index: 100;\n        cursor: pointer;\n      }\n      .pac-logo {\n        width: 30%;\n        max-width: 120px;\n        min-width: 48px;\n        margin-bottom: 1em;\n        animation: chomp 0.4s ease-in-out infinite alternate;\n      }\n      .pac-logo svg {\n        width: 100%;\n        height: auto;\n      }\n      @keyframes chomp {\n        from {\n          clip-path: polygon(0 0, 100% 30%, 100% 70%, 0 100%);\n        }\n        to {\n          clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);\n        }\n      }\n      #overlay p {\n        color: #ffff00;\n        font-family: "Courier New", monospace;\n        font-size: 1.05em;\n        font-weight: bold;\n        letter-spacing: 0.15em;\n        text-transform: uppercase;\n        padding: 0.6em 1.6em;\n        background: rgba(0, 0, 0, 0.7);\n        border-radius: 8px;\n        animation: pulse-glow 2.5s ease-in-out infinite;\n      }\n      @keyframes pulse-glow {\n        0%,\n        100% {\n          box-shadow: 0 0 8px rgba(255, 255, 0, 0.3);\n        }\n        50% {\n          box-shadow:\n            0 0 20px rgba(255, 255, 0, 0.7),\n            0 0 40px rgba(255, 255, 0, 0.3);\n        }\n      }\n      #loading {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: #000;\n        z-index: 99;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        font-family: "Courier New", monospace;\n      }\n      #loading p {\n        color: #ffff00;\n        font-size: 1.5em;\n        margin-top: 1em;\n      }\n      .spinner {\n        width: 50px;\n        height: 50px;\n        border: 4px solid #333;\n        border-top: 4px solid #ffff00;\n        border-radius: 50%;\n        animation: spin 1s linear infinite;\n      }\n      @keyframes spin {\n        to {\n          transform: rotate(360deg);\n        }\n      }\n      #fullscreen-btn {\n        position: absolute;\n        bottom: 8px;\n        right: 8px;\n        z-index: 101;\n        background: rgba(0, 0, 0, 0.5);\n        border: 1px solid rgba(255, 255, 0, 0.4);\n        border-radius: 4px;\n        padding: 4px;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0.4;\n        transition: opacity 0.2s;\n      }\n      #fullscreen-btn:hover {\n        opacity: 1;\n      }\n      #fullscreen-btn svg {\n        width: 20px;\n        height: 20px;\n        fill: #ffff00;\n      }\n    ',
                ]))
            );
          },
        },
      ]
    )
  );
  var e, n, i;
})();
(K([Xt({ attribute: !1 })], re.prototype, "hass", void 0),
  K([Xt({ attribute: !1 })], re.prototype, "layout", void 0),
  K([te()], re.prototype, "_config", void 0),
  K([te()], re.prototype, "_gameStarted", void 0),
  K([te()], re.prototype, "_loading", void 0),
  K([te()], re.prototype, "_isFullscreen", void 0),
  (re = K([Zt(H)], re)),
  console.info(
    "%c  PAC-MAN CARD  %c  ".concat("0.0.0", "  "),
    "color: black; background: #ffff00; font-weight: bold;",
    "color: #ffff00; background: black; font-weight: bold;"
  ));
var le = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Klank",
        auto_start: "Outomatiese begin",
      },
    },
  },
  ue = { wakawaka: { title: "GODMODUS GEAKTIVEER" } },
  se = { editor: le, dialog: ue },
  de = Object.freeze({ __proto__: null, default: se, dialog: ue, editor: le }),
  ce = {
    card: {
      pacman: { title: "العنوان", sound: "الصوت", auto_start: "بدء تلقائي" },
    },
  },
  fe = { wakawaka: { title: "وضع الإله مُفعَّل" } },
  he = { editor: ce, dialog: fe },
  pe = Object.freeze({ __proto__: null, default: he, dialog: fe, editor: ce }),
  ve = {
    card: {
      pacman: {
        title: "Заглавие",
        sound: "Звук",
        auto_start: "Автоматично стартиране",
      },
    },
  },
  _e = { wakawaka: { title: "РЕЖИМ БОГ АКТИВИРАН" } },
  ge = { editor: ve, dialog: _e },
  ye = Object.freeze({ __proto__: null, default: ge, dialog: _e, editor: ve }),
  me = {
    card: {
      pacman: {
        title: "শিরোনাম",
        sound: "শব্দ",
        auto_start: "স্বয়ংক্রিয় শুরু",
      },
    },
  },
  be = { wakawaka: { title: "গড মোড সক্রিয়" } },
  ke = { editor: me, dialog: be },
  we = Object.freeze({ __proto__: null, default: ke, dialog: be, editor: me }),
  Ae = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  Oe = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  $e = { editor: Ae, dialog: Oe },
  Ee = Object.freeze({ __proto__: null, default: $e, dialog: Oe, editor: Ae }),
  Te = {
    card: {
      pacman: { title: "Títol", sound: "So", auto_start: "Inici automàtic" },
    },
  },
  Se = { wakawaka: { title: "MODE DÉU ACTIVAT" } },
  je = { editor: Te, dialog: Se },
  Ie = Object.freeze({ __proto__: null, default: je, dialog: Se, editor: Te }),
  Pe = {
    card: {
      pacman: {
        title: "Název",
        sound: "Zvuk",
        auto_start: "Automatické spuštění",
      },
    },
  },
  Ce = { wakawaka: { title: "REŽIM BOHA AKTIVOVÁN" } },
  ze = { editor: Pe, dialog: Ce },
  Me = Object.freeze({ __proto__: null, default: ze, dialog: Ce, editor: Pe }),
  xe = {
    card: {
      pacman: {
        title: "Teitl",
        sound: "Sain",
        auto_start: "Cychwyn awtomatig",
      },
    },
  },
  De = { wakawaka: { title: "MODD DUW WEDI'I ACTIFADU" } },
  Re = { editor: xe, dialog: De },
  Ue = Object.freeze({ __proto__: null, default: Re, dialog: De, editor: xe }),
  Ne = {
    card: {
      pacman: { title: "Titel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  He = { wakawaka: { title: "GUDTILSTAND AKTIVERET" } },
  Ve = { editor: Ne, dialog: He },
  Ke = Object.freeze({ __proto__: null, default: Ve, dialog: He, editor: Ne }),
  Le = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Ton",
        auto_start: "Automatischer Start",
      },
    },
  },
  Be = { wakawaka: { title: "GOTTMODUS AKTIVIERT" } },
  Ge = { editor: Le, dialog: Be },
  Fe = Object.freeze({ __proto__: null, default: Ge, dialog: Be, editor: Le }),
  We = {
    card: {
      pacman: {
        title: "Τίτλος",
        sound: "Ήχος",
        auto_start: "Αυτόματη εκκίνηση",
      },
    },
  },
  qe = { wakawaka: { title: "ΛΕΙΤΟΥΡΓΙΑ ΘΕΟΥ ΕΝΕΡΓΟΠΟΙΗΘΗΚΕ" } },
  Je = { editor: We, dialog: qe },
  Ze = Object.freeze({ __proto__: null, default: Je, dialog: qe, editor: We }),
  Ye = { card: { pacman: { title: "Title", auto_start: "Auto start" } } },
  Qe = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  Xe = { editor: Ye, dialog: Qe },
  tn = Object.freeze({ __proto__: null, default: Xe, dialog: Qe, editor: Ye }),
  en = {
    card: {
      pacman: { title: "Title", sound: "Sound", auto_start: "Auto start" },
    },
  },
  nn = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  on = { editor: en, dialog: nn },
  an = Object.freeze({ __proto__: null, default: on, dialog: nn, editor: en }),
  rn = {
    card: {
      pacman: {
        title: "Titolo",
        sound: "Sono",
        auto_start: "Aŭtomata komenco",
      },
    },
  },
  ln = { wakawaka: { title: "DIA REĜIMO AKTIVIGITA" } },
  un = { editor: rn, dialog: ln },
  sn = Object.freeze({ __proto__: null, default: un, dialog: ln, editor: rn }),
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
        title: "Título",
        sound: "Sonido",
        auto_start: "Inicio automático",
      },
    },
  },
  pn = { wakawaka: { title: "MODO DIOS ACTIVADO" } },
  vn = { editor: hn, dialog: pn },
  _n = {
    card: {
      pacman: {
        title: "Pealkiri",
        sound: "Heli",
        auto_start: "Automaatne käivitamine",
      },
    },
  },
  gn = { wakawaka: { title: "JUMALAREŽIIM AKTIVEERITUD" } },
  yn = { editor: _n, dialog: gn },
  mn = {
    card: {
      pacman: {
        title: "Izenburua",
        sound: "Soinua",
        auto_start: "Hasiera automatikoa",
      },
    },
  },
  bn = { wakawaka: { title: "JAINKO MODUA AKTIBATUTA" } },
  kn = { editor: mn, dialog: bn },
  wn = {
    card: {
      pacman: { title: "عنوان", sound: "صدا", auto_start: "شروع خودکار" },
    },
  },
  An = { wakawaka: { title: "حالت خدا فعال شد" } },
  On = { editor: wn, dialog: An },
  $n = {
    card: {
      pacman: {
        title: "Otsikko",
        sound: "Ääni",
        auto_start: "Automaattinen käynnistys",
      },
    },
  },
  En = { wakawaka: { title: "JUMALATILA AKTIVOITU" } },
  Tn = { editor: $n, dialog: En },
  Sn = {
    card: {
      pacman: {
        title: "Titre",
        sound: "Son",
        auto_start: "Démarrage automatique",
      },
    },
  },
  jn = { wakawaka: { title: "MODE DIEU ACTIVÉ" } },
  In = { editor: Sn, dialog: jn },
  Pn = {
    card: {
      pacman: { title: "Titel", sound: "Lûd", auto_start: "Automatysk starte" },
    },
  },
  Cn = { wakawaka: { title: "GODMODUS AKTIVEARRE" } },
  zn = { editor: Pn, dialog: Cn },
  Mn = {
    card: {
      pacman: {
        title: "Teideal",
        sound: "Fuaim",
        auto_start: "Tosaigh go huathoibríoch",
      },
    },
  },
  xn = { wakawaka: { title: "MÓD DÉ GNÍOMHACHTAITHE" } },
  Dn = { editor: Mn, dialog: xn },
  Rn = {
    card: {
      pacman: {
        title: "Título",
        sound: "Son",
        auto_start: "Inicio automático",
      },
    },
  },
  Un = { wakawaka: { title: "MODO DEUS ACTIVADO" } },
  Nn = { editor: Rn, dialog: Un },
  Hn = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Ton",
        auto_start: "Automatischer Start",
      },
    },
  },
  Vn = { wakawaka: { title: "GOTTMODUS AKTIVIERT" } },
  Kn = { editor: Hn, dialog: Vn },
  Ln = {
    card: {
      pacman: { title: "כותרת", sound: "צליל", auto_start: "הפעלה אוטומטית" },
    },
  },
  Bn = { wakawaka: { title: "מצב אלוהים הופעל" } },
  Gn = { editor: Ln, dialog: Bn },
  Fn = {
    card: {
      pacman: {
        title: "शीर्षक",
        sound: "ध्वनि",
        auto_start: "स्वचालित प्रारंभ",
      },
    },
  },
  Wn = { wakawaka: { title: "गॉड मोड सक्रिय" } },
  qn = { editor: Fn, dialog: Wn },
  Jn = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  Zn = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  Yn = { editor: Jn, dialog: Zn },
  Qn = {
    card: {
      pacman: {
        title: "Cím",
        sound: "Hang",
        auto_start: "Automatikus indítás",
      },
    },
  },
  Xn = { wakawaka: { title: "ISTEN MÓD AKTIVÁLVA" } },
  ti = { editor: Qn, dialog: Xn },
  ei = {
    card: {
      pacman: {
        title: "Վերնագիր",
        sound: "Ձայն",
        auto_start: "Ինքնաադարձակ գործարկում",
      },
    },
  },
  ni = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  ii = { editor: ei, dialog: ni },
  oi = {
    card: {
      pacman: { title: "Judul", sound: "Suara", auto_start: "Mulai otomatis" },
    },
  },
  ai = { wakawaka: { title: "MODE TUHAN DIAKTIFKAN" } },
  ri = { editor: oi, dialog: ai },
  li = {
    card: {
      pacman: {
        title: "Titill",
        sound: "Hljóð",
        auto_start: "Sjálfvirk ræsing",
      },
    },
  },
  ui = { wakawaka: { title: "GUÐSTILLING VIRKJUÐ" } },
  si = { editor: li, dialog: ui },
  di = {
    card: {
      pacman: {
        title: "Titolo",
        sound: "Audio",
        auto_start: "Avvio automatico",
      },
    },
  },
  ci = { wakawaka: { title: "MODALITÀ DIO ATTIVATA" } },
  fi = { editor: di, dialog: ci },
  hi = {
    card: {
      pacman: { title: "タイトル", sound: "サウンド", auto_start: "自動開始" },
    },
  },
  pi = { wakawaka: { title: "ゴッドモード起動" } },
  vi = { editor: hi, dialog: pi },
  _i = {
    card: {
      pacman: {
        title: "სათაური",
        sound: "ხმა",
        auto_start: "ავტომატური დაწყება",
      },
    },
  },
  gi = { wakawaka: { title: "ღვთის რეჟიმი გააქტიურებულია" } },
  yi = { editor: _i, dialog: gi },
  mi = {
    card: { pacman: { title: "제목", sound: "소리", auto_start: "자동 시작" } },
  },
  bi = { wakawaka: { title: "갓 모드 활성화" } },
  ki = { editor: mi, dialog: bi },
  wi = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Toun",
        auto_start: "Automatesche Start",
      },
    },
  },
  Ai = { wakawaka: { title: "GOTTMODUS AKTIVÉIERT" } },
  Oi = { editor: wi, dialog: Ai },
  $i = {
    card: {
      pacman: {
        title: "Pavadinimas",
        sound: "Garsas",
        auto_start: "Automatinis paleidimas",
      },
    },
  },
  Ei = { wakawaka: { title: "DIEVO REŽIMAS AKTYVUOTAS" } },
  Ti = { editor: $i, dialog: Ei },
  Si = {
    card: {
      pacman: {
        title: "Nosaukums",
        sound: "Skaņa",
        auto_start: "Automātiskā palaišana",
      },
    },
  },
  ji = { wakawaka: { title: "DIEVA REŽĪMS AKTIVIZĒTS" } },
  Ii = { editor: Si, dialog: ji },
  Pi = {
    card: {
      pacman: {
        title: "Наслов",
        sound: "Звук",
        auto_start: "Автоматско стартување",
      },
    },
  },
  Ci = { wakawaka: { title: "РЕЖИМ НА БОГА АКТИВИРАН" } },
  zi = { editor: Pi, dialog: Ci },
  Mi = {
    card: {
      pacman: {
        title: "ശീർഷകം",
        sound: "ശബ്ദം",
        auto_start: "യാന്ത്രിക ആരംഭം",
      },
    },
  },
  xi = { wakawaka: { title: "ഗോഡ് മോഡ് സജീവമാക്കി" } },
  Di = { editor: Mi, dialog: xi },
  Ri = {
    card: {
      pacman: { title: "Tittel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  Ui = { wakawaka: { title: "GUDMODUS AKTIVERT" } },
  Ni = { editor: Ri, dialog: Ui },
  Hi = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Geluid",
        auto_start: "Automatisch starten",
      },
    },
  },
  Vi = { wakawaka: { title: "GODMODUS GEACTIVEERD" } },
  Ki = { editor: Hi, dialog: Vi },
  Li = {
    card: {
      pacman: { title: "Tittel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  Bi = { wakawaka: { title: "GUDMODUS AKTIVERT" } },
  Gi = { editor: Li, dialog: Bi },
  Fi = {
    card: {
      pacman: {
        title: "Tytuł",
        sound: "Dźwięk",
        auto_start: "Automatyczny start",
      },
    },
  },
  Wi = { wakawaka: { title: "TRYB BOGA AKTYWOWANY" } },
  qi = { editor: Fi, dialog: Wi },
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
        title: "Título",
        sound: "Som",
        auto_start: "Início automático",
      },
    },
  },
  Xi = { wakawaka: { title: "MODO DEUS ATIVADO" } },
  to = { editor: Qi, dialog: Xi },
  eo = {
    card: {
      pacman: {
        title: "Titlu",
        sound: "Sunet",
        auto_start: "Pornire automată",
      },
    },
  },
  no = { wakawaka: { title: "MODUL DIVIN ACTIVAT" } },
  io = { editor: eo, dialog: no },
  oo = {
    card: {
      pacman: { title: "Заголовок", sound: "Звук", auto_start: "Автозапуск" },
    },
  },
  ao = { wakawaka: { title: "РЕЖИМ БОГА АКТИВИРОВАН" } },
  ro = { editor: oo, dialog: ao },
  lo = {
    card: {
      pacman: {
        title: "Názov",
        sound: "Zvuk",
        auto_start: "Automatické spustenie",
      },
    },
  },
  uo = { wakawaka: { title: "REŽIM BOHA AKTIVOVANÝ" } },
  so = { editor: lo, dialog: uo },
  co = {
    card: {
      pacman: { title: "Naslov", sound: "Zvok", auto_start: "Samodejni zagon" },
    },
  },
  fo = { wakawaka: { title: "BOŽJI NAČIN AKTIVIRAN" } },
  ho = { editor: co, dialog: fo },
  po = {
    card: {
      pacman: { title: "Titulli", sound: "Tingulli", auto_start: "Auto start" },
    },
  },
  vo = { wakawaka: { title: "MODALITETI I ZOTIT I AKTIVIZUAR" } },
  _o = { editor: po, dialog: vo },
  go = {
    card: {
      pacman: {
        title: "Наслов",
        sound: "Звук",
        auto_start: "Аутоматско покретање",
      },
    },
  },
  yo = { wakawaka: { title: "БОЖЈИ РЕЖИМ АКТИВИРАН" } },
  mo = { editor: go, dialog: yo },
  bo = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  ko = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  wo = { editor: bo, dialog: ko },
  Ao = {
    card: {
      pacman: { title: "Titel", sound: "Ljud", auto_start: "Automatisk start" },
    },
  },
  Oo = { wakawaka: { title: "GUDLÄGE AKTIVERAT" } },
  $o = { editor: Ao, dialog: Oo },
  Eo = {
    card: {
      pacman: {
        title: "தலைப்பு",
        sound: "ஒலி",
        auto_start: "தானியங்கி தொடக்கம்",
      },
    },
  },
  To = { wakawaka: { title: "காட் மோட் செயல்படுத்தப்பட்டது" } },
  So = { editor: Eo, dialog: To },
  jo = {
    card: {
      pacman: { title: "శీర్షిక", sound: "ధ్వని", auto_start: "ఆటో ప్రారంభం" },
    },
  },
  Io = { wakawaka: { title: "గాడ్ మోడ్ సక్రియం చేయబడింది" } },
  Po = { editor: jo, dialog: Io },
  Co = {
    card: {
      pacman: { title: "ชื่อ", sound: "เสียง", auto_start: "เริ่มอัตโนมัติ" },
    },
  },
  zo = { wakawaka: { title: "เปิดโหมดพระเจ้าแล้ว" } },
  Mo = { editor: Co, dialog: zo },
  xo = {
    card: {
      pacman: {
        title: "Başlık",
        sound: "Ses",
        auto_start: "Otomatik başlatma",
      },
    },
  },
  Do = { wakawaka: { title: "TANRI MODU ETKİNLEŞTİRİLDİ" } },
  Ro = { editor: xo, dialog: Do },
  Uo = {
    card: {
      pacman: { title: "Заголовок", sound: "Звук", auto_start: "Автозапуск" },
    },
  },
  No = { wakawaka: { title: "РЕЖИМ БОГА АКТИВОВАНО" } },
  Ho = { editor: Uo, dialog: No },
  Vo = {
    card: {
      pacman: { title: "عنوان", sound: "آواز", auto_start: "خودکار شروع" },
    },
  },
  Ko = { wakawaka: { title: "گاڈ موڈ فعال" } },
  Lo = { editor: Vo, dialog: Ko },
  Bo = {
    card: {
      pacman: {
        title: "Tiêu đề",
        sound: "Âm thanh",
        auto_start: "Tự động bắt đầu",
      },
    },
  },
  Go = { wakawaka: { title: "CHẾ ĐỘ THẦN ĐÃ KÍCH HOẠT" } },
  Fo = { editor: Bo, dialog: Go },
  Wo = {
    card: { pacman: { title: "标题", sound: "声音", auto_start: "自动启动" } },
  },
  qo = { wakawaka: { title: "上帝模式已激活" } },
  Jo = { editor: Wo, dialog: qo },
  Zo = {
    card: { pacman: { title: "標題", sound: "聲音", auto_start: "自動啟動" } },
  },
  Yo = { wakawaka: { title: "上帝模式已啟動" } },
  Qo = { editor: Zo, dialog: Yo },
  Xo = {
    af: de,
    ar: pe,
    bg: ye,
    bn: we,
    bs: Ee,
    ca: Ie,
    cs: Me,
    cy: Ue,
    da: Ke,
    de: Fe,
    el: Ze,
    en: tn,
    "en-GB": an,
    eo: sn,
    es: Object.freeze({ __proto__: null, default: fn, dialog: cn, editor: dn }),
    "es-419": Object.freeze({
      __proto__: null,
      default: vn,
      dialog: pn,
      editor: hn,
    }),
    et: Object.freeze({ __proto__: null, default: yn, dialog: gn, editor: _n }),
    eu: Object.freeze({ __proto__: null, default: kn, dialog: bn, editor: mn }),
    fa: Object.freeze({ __proto__: null, default: On, dialog: An, editor: wn }),
    fi: Object.freeze({ __proto__: null, default: Tn, dialog: En, editor: $n }),
    fr: Object.freeze({ __proto__: null, default: In, dialog: jn, editor: Sn }),
    fy: Object.freeze({ __proto__: null, default: zn, dialog: Cn, editor: Pn }),
    ga: Object.freeze({ __proto__: null, default: Dn, dialog: xn, editor: Mn }),
    gl: Object.freeze({ __proto__: null, default: Nn, dialog: Un, editor: Rn }),
    gsw: Object.freeze({
      __proto__: null,
      default: Kn,
      dialog: Vn,
      editor: Hn,
    }),
    he: Object.freeze({ __proto__: null, default: Gn, dialog: Bn, editor: Ln }),
    hi: Object.freeze({ __proto__: null, default: qn, dialog: Wn, editor: Fn }),
    hr: Object.freeze({ __proto__: null, default: Yn, dialog: Zn, editor: Jn }),
    hu: Object.freeze({ __proto__: null, default: ti, dialog: Xn, editor: Qn }),
    hy: Object.freeze({ __proto__: null, default: ii, dialog: ni, editor: ei }),
    id: Object.freeze({ __proto__: null, default: ri, dialog: ai, editor: oi }),
    is: Object.freeze({ __proto__: null, default: si, dialog: ui, editor: li }),
    it: Object.freeze({ __proto__: null, default: fi, dialog: ci, editor: di }),
    ja: Object.freeze({ __proto__: null, default: vi, dialog: pi, editor: hi }),
    ka: Object.freeze({ __proto__: null, default: yi, dialog: gi, editor: _i }),
    ko: Object.freeze({ __proto__: null, default: ki, dialog: bi, editor: mi }),
    lb: Object.freeze({ __proto__: null, default: Oi, dialog: Ai, editor: wi }),
    lt: Object.freeze({ __proto__: null, default: Ti, dialog: Ei, editor: $i }),
    lv: Object.freeze({ __proto__: null, default: Ii, dialog: ji, editor: Si }),
    mk: Object.freeze({ __proto__: null, default: zi, dialog: Ci, editor: Pi }),
    ml: Object.freeze({ __proto__: null, default: Di, dialog: xi, editor: Mi }),
    nb: Object.freeze({ __proto__: null, default: Ni, dialog: Ui, editor: Ri }),
    nl: Object.freeze({ __proto__: null, default: Ki, dialog: Vi, editor: Hi }),
    nn: Object.freeze({ __proto__: null, default: Gi, dialog: Bi, editor: Li }),
    pl: Object.freeze({ __proto__: null, default: qi, dialog: Wi, editor: Fi }),
    pt: Object.freeze({ __proto__: null, default: Yi, dialog: Zi, editor: Ji }),
    "pt-BR": Object.freeze({
      __proto__: null,
      default: to,
      dialog: Xi,
      editor: Qi,
    }),
    ro: Object.freeze({ __proto__: null, default: io, dialog: no, editor: eo }),
    ru: Object.freeze({ __proto__: null, default: ro, dialog: ao, editor: oo }),
    sk: Object.freeze({ __proto__: null, default: so, dialog: uo, editor: lo }),
    sl: Object.freeze({ __proto__: null, default: ho, dialog: fo, editor: co }),
    sq: Object.freeze({ __proto__: null, default: _o, dialog: vo, editor: po }),
    sr: Object.freeze({ __proto__: null, default: mo, dialog: yo, editor: go }),
    "sr-Latn": Object.freeze({
      __proto__: null,
      default: wo,
      dialog: ko,
      editor: bo,
    }),
    sv: Object.freeze({ __proto__: null, default: $o, dialog: Oo, editor: Ao }),
    ta: Object.freeze({ __proto__: null, default: So, dialog: To, editor: Eo }),
    te: Object.freeze({ __proto__: null, default: Po, dialog: Io, editor: jo }),
    th: Object.freeze({ __proto__: null, default: Mo, dialog: zo, editor: Co }),
    tr: Object.freeze({ __proto__: null, default: Ro, dialog: Do, editor: xo }),
    uk: Object.freeze({ __proto__: null, default: Ho, dialog: No, editor: Uo }),
    ur: Object.freeze({ __proto__: null, default: Lo, dialog: Ko, editor: Vo }),
    vi: Object.freeze({ __proto__: null, default: Fo, dialog: Go, editor: Bo }),
    "zh-Hans": Object.freeze({
      __proto__: null,
      default: Jo,
      dialog: qo,
      editor: Wo,
    }),
    "zh-Hant": Object.freeze({
      __proto__: null,
      default: Qo,
      dialog: Yo,
      editor: Zo,
    }),
  };
function ta(t, e) {
  try {
    return t.split(".").reduce(function (t, e) {
      return t[e];
    }, Xo[e]);
  } catch (t) {
    return;
  }
}
var ea = [
    { name: "title", selector: { text: {} } },
    { name: "auto_start", selector: { boolean: {} } },
  ],
  na = (function () {
    function t() {
      var e;
      return (
        x(this, t),
        ((e = $(this, t, arguments))._computeLabel = function (t) {
          var n;
          return ((n = e.hass),
          function (t) {
            var e,
              i,
              o = ta(
                t,
                null !==
                  (i =
                    null === (e = null == n ? void 0 : n.locale) || void 0 === e
                      ? void 0
                      : e.language) && void 0 !== i
                  ? i
                  : "en"
              );
            return (o || (o = ta(t, "en")), null != o ? o : t);
          })("editor.card.pacman.".concat(t.name));
        }),
        e
      );
    }
    return (
      T(t, qt),
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
              ? It(
                  f ||
                    (f = h([
                      "\n      <ha-form\n        .hass=",
                      "\n        .data=",
                      "\n        .schema=",
                      "\n        .computeLabel=",
                      "\n        @value-changed=",
                      "\n      ></ha-form>\n    ",
                    ])),
                  this.hass,
                  this._config,
                  ea,
                  this._computeLabel,
                  this._valueChanged
                )
              : Ct;
          },
        },
      ])
    );
  })();
(K([Xt({ attribute: !1 })], na.prototype, "hass", void 0),
  K([te()], na.prototype, "_config", void 0),
  (na = K([Zt(V)], na)));
var ia = Object.freeze({
  __proto__: null,
  get PacmanCardEditor() {
    return na;
  },
});
