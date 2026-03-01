var t, e, n, i, a, o, r, l, u, s, d;
function c(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(
      Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
    )
  );
}
function f(t, e) {
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
function h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? f(Object(n), !0).forEach(function (e) {
          p(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : f(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
  }
  return t;
}
function p(t, e, n) {
  return (
    (e = R(e)) in t
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
  var a = v(j(1 & i ? t.prototype : t), e, n);
  return 2 & i && "function" == typeof a
    ? function (t) {
        return a.apply(n, t);
      }
    : a;
}
function v() {
  return (
    (v =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, n) {
            var i = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = j(t)); );
              return t;
            })(t, e);
            if (i) {
              var a = Object.getOwnPropertyDescriptor(i, e);
              return a.get ? a.get.call(arguments.length < 3 ? t : n) : a.value;
            }
          }),
    v.apply(null, arguments)
  );
}
function g(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return C(t);
    })(t) ||
    (function (t) {
      if (
        ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t["@@iterator"]
      )
        return Array.from(t);
    })(t) ||
    P(t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function y(t, e) {
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
          a,
          o,
          r,
          l = [],
          u = !0,
          s = !1;
        try {
          if (((o = (n = n.call(t)).next), 0 === e)) {
            if (Object(n) !== n) return;
            u = !1;
          } else
            for (
              ;
              !(u = (i = o.call(n)).done) && (l.push(i.value), l.length !== e);
              u = !0
            );
        } catch (t) {
          ((s = !0), (a = t));
        } finally {
          try {
            if (!u && null != n.return && ((r = n.return()), Object(r) !== r))
              return;
          } finally {
            if (s) throw a;
          }
        }
        return l;
      }
    })(t, e) ||
    P(t, e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function m() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
    e,
    n = "function" == typeof Symbol ? Symbol : {},
    i = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, i, a, o) {
    var u = i && i.prototype instanceof l ? i : l,
      s = Object.create(u.prototype);
    return (
      b(
        s,
        "_invoke",
        (function (n, i, a) {
          var o,
            l,
            u,
            s = 0,
            d = a || [],
            c = !1,
            f = {
              p: 0,
              n: 0,
              v: t,
              a: h,
              f: h.bind(t, 4),
              d: function (e, n) {
                return ((o = e), (l = 0), (u = t), (f.n = n), r);
              },
            };
          function h(n, i) {
            for (l = n, u = i, e = 0; !c && s && !a && e < d.length; e++) {
              var a,
                o = d[e],
                h = f.p,
                p = o[2];
              n > 3
                ? (a = p === i) &&
                  ((u = o[(l = o[4]) ? 5 : ((l = 3), 3)]), (o[4] = o[5] = t))
                : o[0] <= h &&
                  ((a = n < 2 && h < o[1])
                    ? ((l = 0), (f.v = i), (f.n = o[1]))
                    : h < p &&
                      (a = n < 3 || o[0] > i || i > p) &&
                      ((o[4] = n), (o[5] = i), (f.n = p), (l = 0)));
            }
            if (a || n > 1) return r;
            throw ((c = !0), i);
          }
          return function (a, d, p) {
            if (s > 1) throw TypeError("Generator is already running");
            for (
              c && 1 === d && h(d, p), l = d, u = p;
              (e = l < 2 ? t : u) || !c;
            ) {
              o ||
                (l
                  ? l < 3
                    ? (l > 1 && (f.n = -1), h(l, u))
                    : (f.n = u)
                  : (f.v = u));
              try {
                if (((s = 2), o)) {
                  if ((l || (a = "next"), (e = o[a]))) {
                    if (!(e = e.call(o, u)))
                      throw TypeError("iterator result is not an object");
                    if (!e.done) return e;
                    ((u = e.value), l < 2 && (l = 0));
                  } else
                    (1 === l && (e = o.return) && e.call(o),
                      l < 2 &&
                        ((u = TypeError(
                          "The iterator does not provide a '" + a + "' method"
                        )),
                        (l = 1)));
                  o = t;
                } else if ((e = (c = f.n < 0) ? u : n.call(i, f)) !== r) break;
              } catch (e) {
                ((o = t), (l = 1), (u = e));
              } finally {
                s = 1;
              }
            }
            return { value: e, done: c };
          };
        })(n, a, o),
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
      : (b((e = {}), i, function () {
          return this;
        }),
        e),
    c = (s.prototype = l.prototype = Object.create(d));
  function f(t) {
    return (
      Object.setPrototypeOf
        ? Object.setPrototypeOf(t, s)
        : ((t.__proto__ = s), b(t, a, "GeneratorFunction")),
      (t.prototype = Object.create(c)),
      t
    );
  }
  return (
    (u.prototype = s),
    b(c, "constructor", s),
    b(s, "constructor", u),
    (u.displayName = "GeneratorFunction"),
    b(s, a, "GeneratorFunction"),
    b(c),
    b(c, a, "Generator"),
    b(c, i, function () {
      return this;
    }),
    b(c, "toString", function () {
      return "[object Generator]";
    }),
    (m = function () {
      return { w: o, m: f };
    })()
  );
}
function b(t, e, n, i) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (t) {
    a = 0;
  }
  ((b = function (t, e, n, i) {
    function o(e, n) {
      b(t, e, function (t) {
        return this._invoke(e, n, t);
      });
    }
    e
      ? a
        ? a(t, e, { value: n, enumerable: !i, configurable: !i, writable: !i })
        : (t[e] = n)
      : (o("next", 0), o("throw", 1), o("return", 2));
  }),
    b(t, e, n, i));
}
function k(t, e, n, i, a, o, r) {
  try {
    var l = t[o](r),
      u = l.value;
  } catch (t) {
    return void n(t);
  }
  l.done ? e(u) : Promise.resolve(u).then(i, a);
}
function w(t) {
  return function () {
    var e = this,
      n = arguments;
    return new Promise(function (i, a) {
      var o = t.apply(e, n);
      function r(t) {
        k(o, i, a, r, l, "next", t);
      }
      function l(t) {
        k(o, i, a, r, l, "throw", t);
      }
      r(void 0);
    });
  };
}
function A(t, e, n) {
  return (
    (e = j(e)),
    (function (t, e) {
      if (e && ("object" == U(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return O(t);
    })(t, T() ? Reflect.construct(e, n || [], j(t).constructor) : e.apply(t, n))
  );
}
function O(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function $(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && S(t, e));
}
function E(t) {
  var e = "function" == typeof Map ? new Map() : void 0;
  return (
    (E = function (t) {
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
          if (T()) return Reflect.construct.apply(null, arguments);
          var i = [null];
          i.push.apply(i, e);
          var a = new (t.bind.apply(t, i))();
          return (n && S(a, n.prototype), a);
        })(t, arguments, j(this).constructor);
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
        S(n, t)
      );
    }),
    E(t)
  );
}
function T() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (T = function () {
    return !!t;
  })();
}
function S(t, e) {
  return (
    (S = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return ((t.__proto__ = e), t);
        }),
    S(t, e)
  );
}
function j(t) {
  return (
    (j = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    j(t)
  );
}
function I(t, e) {
  var n =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!n) {
    if (
      Array.isArray(t) ||
      (n = P(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      n && (t = n);
      var i = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
        },
        e: function (t) {
          throw t;
        },
        f: a,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var o,
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
      ((l = !0), (o = t));
    },
    f: function () {
      try {
        r || null == n.return || n.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function P(t, e) {
  if (t) {
    if ("string" == typeof t) return C(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return (
      "Object" === n && t.constructor && (n = t.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(t)
        : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? C(t, e)
          : void 0
    );
  }
}
function C(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
  return i;
}
function z(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function M(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(t, R(i.key), i));
  }
}
function D(t, e, n) {
  return (
    e && M(t.prototype, e),
    n && M(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function R(t) {
  var e = (function (t, e) {
    if ("object" != U(t) || !t) return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 !== n) {
      var i = n.call(t, e || "default");
      if ("object" != U(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  })(t, "string");
  return "symbol" == U(e) ? e : e + "";
}
function U(t) {
  return (
    (U =
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
    U(t)
  );
}
var x = "pacman-card",
  N = "".concat(x, "-editor");
function H(t, e, n, i) {
  var a,
    o = arguments.length,
    r =
      o < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i;
  if (
    "object" === ("undefined" == typeof Reflect ? "undefined" : U(Reflect)) &&
    "function" == typeof Reflect.decorate
  )
    r = Reflect.decorate(t, e, n, i);
  else
    for (var l = t.length - 1; l >= 0; l--)
      (a = t[l]) && (r = (o < 3 ? a(r) : o > 3 ? a(e, n, r) : a(e, n)) || r);
  return (o > 3 && r && Object.defineProperty(e, n, r), r);
}
"function" == typeof SuppressedError && SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V = globalThis,
  K =
    V.ShadowRoot &&
    (void 0 === V.ShadyCSS || V.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  L = Symbol(),
  B = new WeakMap(),
  G = (function () {
    return D(
      function t(e, n, i) {
        if ((z(this, t), (this._$cssResult$ = !0), i !== L))
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
            if (K && void 0 === t) {
              var n = void 0 !== e && 1 === e.length;
              (n && (t = B.get(e)),
                void 0 === t &&
                  ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
                  n && B.set(e, t)));
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
  W = K
    ? function (t) {
        return t;
      }
    : function (t) {
        return t instanceof CSSStyleSheet
          ? (function (t) {
              var e,
                n = "",
                i = I(t.cssRules);
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
                return new G("string" == typeof t ? t : t + "", void 0, L);
              })(n);
            })(t)
          : t;
      },
  q = Object.is,
  J = Object.defineProperty,
  Z = Object.getOwnPropertyDescriptor,
  F = Object.getOwnPropertyNames,
  Y = Object.getOwnPropertySymbols,
  Q = Object.getPrototypeOf,
  X = globalThis,
  tt = X.trustedTypes,
  et = tt ? tt.emptyScript : "",
  nt = X.reactiveElementPolyfillSupport,
  it = function (t, e) {
    return t;
  },
  at = {
    toAttribute: function (t, e) {
      switch (e) {
        case Boolean:
          t = t ? et : null;
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
  ot = function (t, e) {
    return !q(t, e);
  },
  rt = {
    attribute: !0,
    type: String,
    converter: at,
    reflect: !1,
    useDefault: !1,
    hasChanged: ot,
  };
((null !== (t = Symbol.metadata) && void 0 !== t) ||
  (Symbol.metadata = Symbol("metadata")),
  (null !== (e = X.litPropertyMetadata) && void 0 !== e) ||
    (X.litPropertyMetadata = new WeakMap()));
var lt = (function () {
  function t() {
    var e;
    return (
      z(this, t),
      ((e = A(this, t))._$Ep = void 0),
      (e.isUpdatePending = !1),
      (e.hasUpdated = !1),
      (e._$Em = null),
      e._$Ev(),
      e
    );
  }
  return (
    $(t, E(HTMLElement)),
    D(
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
              n = I(this.constructor.elementProperties.keys());
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
                if (K)
                  t.adoptedStyleSheets = e.map(function (t) {
                    return t instanceof CSSStyleSheet ? t : t.styleSheet;
                  });
                else {
                  var n,
                    i = I(e);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var a = n.value,
                        o = document.createElement("style"),
                        r = V.litNonce;
                      (void 0 !== r && o.setAttribute("nonce", r),
                        (o.textContent = a.cssText),
                        t.appendChild(o));
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
              var a,
                o = (
                  void 0 !==
                  (null === (a = n.converter) || void 0 === a
                    ? void 0
                    : a.toAttribute)
                    ? n.converter
                    : at
                ).toAttribute(e, n.type);
              ((this._$Em = t),
                null == o ? this.removeAttribute(i) : this.setAttribute(i, o),
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
              var a,
                o,
                r,
                l = n.getPropertyOptions(i),
                u =
                  "function" == typeof l.converter
                    ? { fromAttribute: l.converter }
                    : void 0 !==
                        (null === (a = l.converter) || void 0 === a
                          ? void 0
                          : a.fromAttribute)
                      ? l.converter
                      : at;
              this._$Em = i;
              var s = u.fromAttribute(e, l.type);
              ((this[i] =
                null !==
                  (o =
                    null != s
                      ? s
                      : null === (r = this._$Ej) || void 0 === r
                        ? void 0
                        : r.get(i)) && void 0 !== o
                  ? o
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
              a = arguments.length > 4 ? arguments[4] : void 0;
            if (void 0 !== t) {
              var o,
                r,
                l = this.constructor;
              if (
                (!1 === i && (a = this[t]),
                null != n || (n = l.getPropertyOptions(t)),
                !(
                  (null !== (o = n.hasChanged) && void 0 !== o ? o : ot)(
                    a,
                    e
                  ) ||
                  (n.useDefault &&
                    n.reflect &&
                    a ===
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
            var a,
              o,
              r,
              l = n.useDefault,
              u = n.reflect,
              s = n.wrapped;
            (l &&
              !(
                null !== (a = this._$Ej) && void 0 !== a
                  ? a
                  : (this._$Ej = new Map())
              ).has(t) &&
              (this._$Ej.set(
                t,
                null !== (o = null != i ? i : e) && void 0 !== o ? o : this[t]
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
            ((e = w(
              m().m(function t() {
                var e, n;
                return m().w(
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
                    n = I(this._$Ep);
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      var i = y(e.value, 2),
                        a = i[0],
                        o = i[1];
                      this[a] = o;
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
                    u = I(r);
                  try {
                    for (u.s(); !(l = u.n()).done; ) {
                      var s = y(l.value, 2),
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
                _ = this._$AL;
              try {
                var v;
                (p = this.shouldUpdate(_))
                  ? (this.willUpdate(_),
                    null !== (v = this._$EO) &&
                      void 0 !== v &&
                      v.forEach(function (t) {
                        var e;
                        return null === (e = t.hostUpdate) || void 0 === e
                          ? void 0
                          : e.call(t);
                      }),
                    this.update(_))
                  : this._$EM();
              } catch (_) {
                throw ((p = !1), this._$EM(), _);
              }
              p && this._$AE(_);
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
            return (this.finalize(), this._$Eh && g(this._$Eh.keys()));
          },
        },
        {
          key: "createProperty",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : rt;
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
              a =
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
              o = a.get,
              r = a.set;
            return {
              get: o,
              set: function (e) {
                var i = null == o ? void 0 : o.call(this);
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
              : rt;
          },
        },
        {
          key: "_$Ei",
          value: function () {
            if (!this.hasOwnProperty(it("elementProperties"))) {
              var t = Q(this);
              (t.finalize(),
                void 0 !== t.l && (this.l = g(t.l)),
                (this.elementProperties = new Map(t.elementProperties)));
            }
          },
        },
        {
          key: "finalize",
          value: function () {
            if (!this.hasOwnProperty(it("finalized"))) {
              if (
                ((this.finalized = !0),
                this._$Ei(),
                this.hasOwnProperty(it("properties")))
              ) {
                var t,
                  e = this.properties,
                  n = I([].concat(g(F(e)), g(Y(e))));
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
              var a = this[Symbol.metadata];
              if (null !== a) {
                var o = litPropertyMetadata.get(a);
                if (void 0 !== o) {
                  var r,
                    l = I(o);
                  try {
                    for (l.s(); !(r = l.n()).done; ) {
                      var u = y(r.value, 2),
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
                f = I(this.elementProperties);
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  var h = y(c.value, 2),
                    p = h[0],
                    _ = h[1],
                    v = this._$Eu(p, _);
                  void 0 !== v && this._$Eh.set(v, p);
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
                i = I(new Set(t.flat(1 / 0).reverse()));
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var a = n.value;
                  e.unshift(W(a));
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
            } else void 0 !== t && e.push(W(t));
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
((lt.elementStyles = []),
  (lt.shadowRootOptions = { mode: "open" }),
  (lt[it("elementProperties")] = new Map()),
  (lt[it("finalized")] = new Map()),
  null != nt && nt({ ReactiveElement: lt }),
  (null !== (n = X.reactiveElementVersions) && void 0 !== n
    ? n
    : (X.reactiveElementVersions = [])
  ).push("2.1.2"));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ut = globalThis,
  st = function (t) {
    return t;
  },
  dt = ut.trustedTypes,
  ct = dt
    ? dt.createPolicy("lit-html", {
        createHTML: function (t) {
          return t;
        },
      })
    : void 0,
  ft = "$lit$",
  ht = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
  pt = "?" + ht,
  _t = "<".concat(pt, ">"),
  vt = document,
  gt = function () {
    return vt.createComment("");
  },
  yt = function (t) {
    return null === t || ("object" != U(t) && "function" != typeof t);
  },
  mt = Array.isArray,
  bt = "[ \t\n\f\r]",
  kt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  wt = /-->/g,
  At = />/g,
  Ot = RegExp(
    ">|"
      .concat(bt, "(?:([^\\s\"'>=/]+)(")
      .concat(bt, "*=")
      .concat(bt, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),
    "g"
  ),
  $t = /'/g,
  Et = /"/g,
  Tt = /^(?:script|style|textarea|title)$/i,
  St = (function (t) {
    return function (e) {
      for (
        var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1;
        a < n;
        a++
      )
        i[a - 1] = arguments[a];
      return { _$litType$: t, strings: e, values: i };
    };
  })(1),
  jt = Symbol.for("lit-noChange"),
  It = Symbol.for("lit-nothing"),
  Pt = new WeakMap(),
  Ct = vt.createTreeWalker(vt, 129);
function zt(t, e) {
  if (!mt(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== ct ? ct.createHTML(e) : e;
}
var Mt = function (t, e) {
    for (
      var n,
        i = t.length - 1,
        a = [],
        o = 2 === e ? "<svg>" : 3 === e ? "<math>" : "",
        r = kt,
        l = 0;
      l < i;
      l++
    ) {
      for (
        var u = t[l], s = void 0, d = void 0, c = -1, f = 0;
        f < u.length && ((r.lastIndex = f), null !== (d = r.exec(u)));
      )
        ((f = r.lastIndex),
          r === kt
            ? "!--" === d[1]
              ? (r = wt)
              : void 0 !== d[1]
                ? (r = At)
                : void 0 !== d[2]
                  ? (Tt.test(d[2]) && (n = RegExp("</" + d[2], "g")), (r = Ot))
                  : void 0 !== d[3] && (r = Ot)
            : r === Ot
              ? ">" === d[0]
                ? ((r = null != n ? n : kt), (c = -1))
                : void 0 === d[1]
                  ? (c = -2)
                  : ((c = r.lastIndex - d[2].length),
                    (s = d[1]),
                    (r = void 0 === d[3] ? Ot : '"' === d[3] ? Et : $t))
              : r === Et || r === $t
                ? (r = Ot)
                : r === wt || r === At
                  ? (r = kt)
                  : ((r = Ot), (n = void 0)));
      var h = r === Ot && t[l + 1].startsWith("/>") ? " " : "";
      o +=
        r === kt
          ? u + _t
          : c >= 0
            ? (a.push(s), u.slice(0, c) + ft + u.slice(c) + ht + h)
            : u + ht + (-2 === c ? l : h);
    }
    return [
      zt(
        t,
        o + (t[i] || "<?>") + (2 === e ? "</svg>" : 3 === e ? "</math>" : "")
      ),
      a,
    ];
  },
  Dt = (function () {
    return D(
      function t(e, n) {
        var i,
          a = e.strings,
          o = e._$litType$;
        (z(this, t), (this.parts = []));
        var r = 0,
          l = 0,
          u = a.length - 1,
          s = this.parts,
          d = y(Mt(a, o), 2),
          c = d[0],
          f = d[1];
        if (
          ((this.el = t.createElement(c, n)),
          (Ct.currentNode = this.el.content),
          2 === o || 3 === o)
        ) {
          var h = this.el.content.firstChild;
          h.replaceWith.apply(h, g(h.childNodes));
        }
        for (; null !== (i = Ct.nextNode()) && s.length < u; ) {
          if (1 === i.nodeType) {
            if (i.hasAttributes()) {
              var p,
                _ = I(i.getAttributeNames());
              try {
                for (_.s(); !(p = _.n()).done; ) {
                  var v = p.value;
                  if (v.endsWith(ft)) {
                    var m = f[l++],
                      b = i.getAttribute(v).split(ht),
                      k = /([.?@])?(.*)/.exec(m);
                    (s.push({
                      type: 1,
                      index: r,
                      name: k[2],
                      strings: b,
                      ctor:
                        "." === k[1]
                          ? Ht
                          : "?" === k[1]
                            ? Vt
                            : "@" === k[1]
                              ? Kt
                              : Nt,
                    }),
                      i.removeAttribute(v));
                  } else
                    v.startsWith(ht) &&
                      (s.push({ type: 6, index: r }), i.removeAttribute(v));
                }
              } catch (t) {
                _.e(t);
              } finally {
                _.f();
              }
            }
            if (Tt.test(i.tagName)) {
              var w = i.textContent.split(ht),
                A = w.length - 1;
              if (A > 0) {
                i.textContent = dt ? dt.emptyScript : "";
                for (var O = 0; O < A; O++)
                  (i.append(w[O], gt()),
                    Ct.nextNode(),
                    s.push({ type: 2, index: ++r }));
                i.append(w[A], gt());
              }
            }
          } else if (8 === i.nodeType)
            if (i.data === pt) s.push({ type: 2, index: r });
            else
              for (var $ = -1; -1 !== ($ = i.data.indexOf(ht, $ + 1)); )
                (s.push({ type: 7, index: r }), ($ += ht.length - 1));
          r++;
        }
      },
      null,
      [
        {
          key: "createElement",
          value: function (t, e) {
            var n = vt.createElement("template");
            return ((n.innerHTML = t), n);
          },
        },
      ]
    );
  })();
function Rt(t, e) {
  var n,
    i,
    a,
    o,
    r,
    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
    u = arguments.length > 3 ? arguments[3] : void 0;
  if (e === jt) return e;
  var s =
      void 0 !== u
        ? null === (n = l._$Co) || void 0 === n
          ? void 0
          : n[u]
        : l._$Cl,
    d = yt(e) ? void 0 : e._$litDirective$;
  return (
    (null === (i = s) || void 0 === i ? void 0 : i.constructor) !== d &&
      (null !== (a = s) &&
        void 0 !== a &&
        null !== (o = a._$AO) &&
        void 0 !== o &&
        o.call(a, !1),
      void 0 === d ? (s = void 0) : (s = new d(t))._$AT(t, l, u),
      void 0 !== u
        ? ((null !== (r = l._$Co) && void 0 !== r ? r : (l._$Co = []))[u] = s)
        : (l._$Cl = s)),
    void 0 !== s && (e = Rt(t, s._$AS(t, e.values), s, u)),
    e
  );
}
var Ut = (function () {
    return D(
      function t(e, n) {
        (z(this, t),
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
              a = n.parts,
              o = (
                null !== (e = null == t ? void 0 : t.creationScope) &&
                void 0 !== e
                  ? e
                  : vt
              ).importNode(i, !0);
            Ct.currentNode = o;
            for (
              var r = Ct.nextNode(), l = 0, u = 0, s = a[0];
              void 0 !== s;
            ) {
              var d;
              if (l === s.index) {
                var c = void 0;
                (2 === s.type
                  ? (c = new xt(r, r.nextSibling, this, t))
                  : 1 === s.type
                    ? (c = new s.ctor(r, s.name, s.strings, this, t))
                    : 6 === s.type && (c = new Lt(r, this, t)),
                  this._$AV.push(c),
                  (s = a[++u]));
              }
              l !== (null === (d = s) || void 0 === d ? void 0 : d.index) &&
                ((r = Ct.nextNode()), l++);
            }
            return ((Ct.currentNode = vt), o);
          },
        },
        {
          key: "p",
          value: function (t) {
            var e,
              n = 0,
              i = I(this._$AV);
            try {
              for (i.s(); !(e = i.n()).done; ) {
                var a = e.value;
                (void 0 !== a &&
                  (void 0 !== a.strings
                    ? (a._$AI(t, a, n), (n += a.strings.length - 2))
                    : a._$AI(t[n])),
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
  xt = (function () {
    return D(
      function t(e, n, i, a) {
        var o;
        (z(this, t),
          (this.type = 2),
          (this._$AH = It),
          (this._$AN = void 0),
          (this._$AA = e),
          (this._$AB = n),
          (this._$AM = i),
          (this.options = a),
          (this._$Cv =
            null === (o = null == a ? void 0 : a.isConnected) ||
            void 0 === o ||
            o));
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
            ((t = Rt(
              this,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this
            )),
              yt(t)
                ? t === It || null == t || "" === t
                  ? (this._$AH !== It && this._$AR(), (this._$AH = It))
                  : t !== this._$AH && t !== jt && this._(t)
                : void 0 !== t._$litType$
                  ? this.$(t)
                  : void 0 !== t.nodeType
                    ? this.T(t)
                    : (function (t) {
                          return (
                            mt(t) ||
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
            (this._$AH !== It && yt(this._$AH)
              ? (this._$AA.nextSibling.data = t)
              : this.T(vt.createTextNode(t)),
              (this._$AH = t));
          },
        },
        {
          key: "$",
          value: function (t) {
            var e,
              n = t.values,
              i = t._$litType$,
              a =
                "number" == typeof i
                  ? this._$AC(t)
                  : (void 0 === i.el &&
                      (i.el = Dt.createElement(zt(i.h, i.h[0]), this.options)),
                    i);
            if (
              (null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === a
            )
              this._$AH.p(n);
            else {
              var o = new Ut(a, this),
                r = o.u(this.options);
              (o.p(n), this.T(r), (this._$AH = o));
            }
          },
        },
        {
          key: "_$AC",
          value: function (t) {
            var e = Pt.get(t.strings);
            return (void 0 === e && Pt.set(t.strings, (e = new Dt(t))), e);
          },
        },
        {
          key: "k",
          value: function (t) {
            mt(this._$AH) || ((this._$AH = []), this._$AR());
            var e,
              n,
              i = this._$AH,
              a = 0,
              o = I(t);
            try {
              for (o.s(); !(n = o.n()).done; ) {
                var r = n.value;
                (a === i.length
                  ? i.push(
                      (e = new _k(
                        this.O(gt()),
                        this.O(gt()),
                        this,
                        this.options
                      ))
                    )
                  : (e = i[a]),
                  e._$AI(r),
                  a++);
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
            a < i.length &&
              (this._$AR(e && e._$AB.nextSibling, a), (i.length = a));
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
                i = st(t).nextSibling;
              (st(t).remove(), (t = i));
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
  Nt = (function () {
    return D(
      function t(e, n, i, a, o) {
        (z(this, t),
          (this.type = 1),
          (this._$AH = It),
          (this._$AN = void 0),
          (this.element = e),
          (this.name = n),
          (this._$AM = a),
          (this.options = o),
          i.length > 2 || "" !== i[0] || "" !== i[1]
            ? ((this._$AH = Array(i.length - 1).fill(new String())),
              (this.strings = i))
            : (this._$AH = It));
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
              a = this.strings,
              o = !1;
            if (void 0 === a)
              ((t = Rt(this, t, e, 0)),
                (o = !yt(t) || (t !== this._$AH && t !== jt)) &&
                  (this._$AH = t));
            else {
              var r,
                l,
                u = t;
              for (t = a[0], r = 0; r < a.length - 1; r++)
                ((l = Rt(this, u[n + r], e, r)) === jt && (l = this._$AH[r]),
                  o || (o = !yt(l) || l !== this._$AH[r]),
                  l === It
                    ? (t = It)
                    : t !== It && (t += (null != l ? l : "") + a[r + 1]),
                  (this._$AH[r] = l));
            }
            o && !i && this.j(t);
          },
        },
        {
          key: "j",
          value: function (t) {
            t === It
              ? this.element.removeAttribute(this.name)
              : this.element.setAttribute(this.name, null != t ? t : "");
          },
        },
      ]
    );
  })(),
  Ht = (function () {
    function t() {
      var e;
      return (z(this, t), ((e = A(this, t, arguments)).type = 3), e);
    }
    return (
      $(t, Nt),
      D(t, [
        {
          key: "j",
          value: function (t) {
            this.element[this.name] = t === It ? void 0 : t;
          },
        },
      ])
    );
  })(),
  Vt = (function () {
    function t() {
      var e;
      return (z(this, t), ((e = A(this, t, arguments)).type = 4), e);
    }
    return (
      $(t, Nt),
      D(t, [
        {
          key: "j",
          value: function (t) {
            this.element.toggleAttribute(this.name, !!t && t !== It);
          },
        },
      ])
    );
  })(),
  Kt = (function () {
    function t(e, n, i, a, o) {
      var r;
      return (z(this, t), ((r = A(this, t, [e, n, i, a, o])).type = 5), r);
    }
    return (
      $(t, Nt),
      D(t, [
        {
          key: "_$AI",
          value: function (t) {
            var e;
            if (
              (t =
                null !==
                  (e = Rt(
                    this,
                    t,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this,
                    0
                  )) && void 0 !== e
                  ? e
                  : It) !== jt
            ) {
              var n = this._$AH,
                i =
                  (t === It && n !== It) ||
                  t.capture !== n.capture ||
                  t.once !== n.once ||
                  t.passive !== n.passive,
                a = t !== It && (n === It || i);
              (i && this.element.removeEventListener(this.name, this, n),
                a && this.element.addEventListener(this.name, this, t),
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
  Lt = (function () {
    return D(
      function t(e, n, i) {
        (z(this, t),
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
            Rt(this, t);
          },
        },
      ]
    );
  })(),
  Bt = ut.litHtmlPolyfillSupport;
(null != Bt && Bt(Dt, xt),
  (null !== (i = ut.litHtmlVersions) && void 0 !== i
    ? i
    : (ut.litHtmlVersions = [])
  ).push("3.3.2"));
var Gt = globalThis,
  Wt = (function () {
    function t() {
      var e;
      return (
        z(this, t),
        ((e = A(this, t, arguments)).renderOptions = { host: O(e) }),
        (e._$Do = void 0),
        e
      );
    }
    return (
      $(t, lt),
      D(t, [
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
                  a =
                    null !== (i = null == n ? void 0 : n.renderBefore) &&
                    void 0 !== i
                      ? i
                      : e,
                  o = a._$litPart$;
                if (void 0 === o) {
                  var r,
                    l =
                      null !== (r = null == n ? void 0 : n.renderBefore) &&
                      void 0 !== r
                        ? r
                        : null;
                  a._$litPart$ = o = new xt(
                    e.insertBefore(gt(), l),
                    l,
                    void 0,
                    null != n ? n : {}
                  );
                }
                return (o._$AI(t), o);
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
            return jt;
          },
        },
      ])
    );
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ((Wt._$litElement$ = !0),
  (Wt.finalized = !0),
  null === (a = Gt.litElementHydrateSupport) ||
    void 0 === a ||
    a.call(Gt, { LitElement: Wt }));
var qt = Gt.litElementPolyfillSupport;
(null == qt || qt({ LitElement: Wt }),
  (null !== (o = Gt.litElementVersions) && void 0 !== o
    ? o
    : (Gt.litElementVersions = [])
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
    hasChanged: ot,
  },
  Ft = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
      e = arguments.length > 1 ? arguments[1] : void 0,
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = n.kind,
      a = n.metadata,
      o = globalThis.litPropertyMetadata.get(a);
    if (
      (void 0 === o && globalThis.litPropertyMetadata.set(a, (o = new Map())),
      "setter" === i && ((t = Object.create(t)).wrapped = !0),
      o.set(n.name, t),
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
 */ function Yt(t) {
  return function (e, n) {
    return "object" == U(n)
      ? Ft(t, e, n)
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
 */ function Qt(t) {
  return Yt(h(h({}, t), {}, { state: !0, attribute: !1 }));
}
var Xt,
  te,
  ee = "".concat("/pacman_static", "/assets"),
  ne = null;
function ie() {
  return (
    ne ||
    (ne =
      "PacMan" in window
        ? Promise.resolve()
        : new Promise(function (t, e) {
            var n = document.createElement("script");
            ((n.src = "".concat(ee, "/pacman-game.js")),
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
((Xt = {
  type: x,
  name: "Pac-Man",
  description: "Play Pac-Man in your Home Assistant dashboard.",
}),
  ((te = window).customCards = te.customCards || []),
  te.customCards.push(Object.assign(Object.assign({}, Xt), { preview: !0 })));
var ae = (function () {
  function t() {
    var e;
    return (
      z(this, t),
      ((e = A(this, t, arguments))._gameStarted = !1),
      (e._loading = !1),
      (e._gameRunning = !1),
      (e._boundBeforeUnload = e._stopPinging.bind(e)),
      (e._boundVisibilityChange = e._handleVisibilityChange.bind(e)),
      e
    );
  }
  return (
    $(t, Wt),
    D(
      t,
      [
        {
          key: "setConfig",
          value: function (t) {
            this._config = Object.assign(Object.assign({}, t), {
              type: "custom:".concat(x),
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
          value: function (t) {
            var e,
              n =
                null !== (e = null == t ? void 0 : t.columns) && void 0 !== e
                  ? e
                  : 12;
            return {
              columns: 12,
              rows: Math.max(2, Math.round((5 * n) / 12)),
              min_columns: 3,
              min_rows: 2,
            };
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
            if (!this._config) return It;
            var t = "panel" !== this.layout && "grid" !== this.layout;
            return St(
              r ||
                (r = c([
                  "\n      <ha-card .header=",
                  '>\n        <div\n          id="root"\n          style="',
                  '"\n          @keydown=',
                  "\n          @keyup=",
                  "\n          @keypress=",
                  '\n        >\n          <div id="game"></div>\n          ',
                  "\n          ",
                  "\n        </div>\n      </ha-card>\n    ",
                ])),
              this._config.title || It,
              t ? "padding-top: 75%" : "",
              this._trapKey,
              this._trapKey,
              this._trapKey,
              this._gameStarted
                ? It
                : St(
                    l ||
                      (l = c([
                        '\n                <div id="overlay" @click=',
                        '>\n                  <div class="pac-logo">\n                    <svg\n                      viewBox="0 0 100 100"\n                      xmlns="http://www.w3.org/2000/svg"\n                    >\n                      <circle cx="50" cy="50" r="48" fill="#ffff00" />\n                      <polygon points="50,50 98,20 98,80" fill="#000" />\n                    </svg>\n                  </div>\n                  <p>Click to play</p>\n                </div>\n              ',
                      ])),
                    this._startPacman
                  ),
              this._loading
                ? St(
                    u ||
                      (u = c([
                        '\n                <div id="loading">\n                  <div class="spinner"></div>\n                  <p>Loading Pac-Man...</p>\n                </div>\n              ',
                      ]))
                  )
                : It
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
            ((i = w(
              m().m(function t() {
                var e, n, i;
                return m().w(
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
                          return ((t.n = 3), ie());
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
            ((n = w(
              m().m(function t() {
                var e, n;
                return m().w(
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
            ((e = w(
              m().m(function t() {
                return m().w(function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return (
                          (t.n = 1),
                          Promise.resolve().then(function () {
                            return to;
                          })
                        );
                      case 1:
                        return t.a(2, document.createElement(N));
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
              var a =
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
              return new G(a, t, L);
            })(
              s ||
                (s = c([
                  '\n      :host {\n        display: block;\n        height: 100%;\n      }\n      ha-card {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n      #root {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        background: #000;\n      }\n      #game {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n      #game canvas {\n        width: 100% !important;\n        height: 100% !important;\n        display: block;\n      }\n      #overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background-color: #000;\n        z-index: 100;\n        cursor: pointer;\n      }\n      .pac-logo {\n        width: 30%;\n        max-width: 120px;\n        min-width: 48px;\n        margin-bottom: 1em;\n        animation: chomp 0.4s ease-in-out infinite alternate;\n      }\n      .pac-logo svg {\n        width: 100%;\n        height: auto;\n      }\n      @keyframes chomp {\n        from {\n          clip-path: polygon(0 0, 100% 30%, 100% 70%, 0 100%);\n        }\n        to {\n          clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);\n        }\n      }\n      #overlay p {\n        color: #ffff00;\n        font-family: "Courier New", monospace;\n        font-size: 1.05em;\n        font-weight: bold;\n        letter-spacing: 0.15em;\n        text-transform: uppercase;\n        padding: 0.6em 1.6em;\n        background: rgba(0, 0, 0, 0.7);\n        border-radius: 8px;\n        animation: pulse-glow 2.5s ease-in-out infinite;\n      }\n      @keyframes pulse-glow {\n        0%,\n        100% {\n          box-shadow: 0 0 8px rgba(255, 255, 0, 0.3);\n        }\n        50% {\n          box-shadow:\n            0 0 20px rgba(255, 255, 0, 0.7),\n            0 0 40px rgba(255, 255, 0, 0.3);\n        }\n      }\n      #loading {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: #000;\n        z-index: 99;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        font-family: "Courier New", monospace;\n      }\n      #loading p {\n        color: #ffff00;\n        font-size: 1.5em;\n        margin-top: 1em;\n      }\n      .spinner {\n        width: 50px;\n        height: 50px;\n        border: 4px solid #333;\n        border-top: 4px solid #ffff00;\n        border-radius: 50%;\n        animation: spin 1s linear infinite;\n      }\n      @keyframes spin {\n        to {\n          transform: rotate(360deg);\n        }\n      }\n    ',
                ]))
            );
          },
        },
      ]
    )
  );
  var e, n, i;
})();
(H([Yt({ attribute: !1 })], ae.prototype, "hass", void 0),
  H([Yt({ attribute: !1 })], ae.prototype, "layout", void 0),
  H([Qt()], ae.prototype, "_config", void 0),
  H([Qt()], ae.prototype, "_gameStarted", void 0),
  H([Qt()], ae.prototype, "_loading", void 0),
  (ae = H([Jt(x)], ae)),
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
  re = { wakawaka: { title: "GODMODUS GEAKTIVEER" } },
  le = { editor: oe, dialog: re },
  ue = Object.freeze({ __proto__: null, default: le, dialog: re, editor: oe }),
  se = {
    card: {
      pacman: { title: "العنوان", sound: "الصوت", auto_start: "بدء تلقائي" },
    },
  },
  de = { wakawaka: { title: "وضع الإله مُفعَّل" } },
  ce = { editor: se, dialog: de },
  fe = Object.freeze({ __proto__: null, default: ce, dialog: de, editor: se }),
  he = {
    card: {
      pacman: {
        title: "Заглавие",
        sound: "Звук",
        auto_start: "Автоматично стартиране",
      },
    },
  },
  pe = { wakawaka: { title: "РЕЖИМ БОГ АКТИВИРАН" } },
  _e = { editor: he, dialog: pe },
  ve = Object.freeze({ __proto__: null, default: _e, dialog: pe, editor: he }),
  ge = {
    card: {
      pacman: {
        title: "শিরোনাম",
        sound: "শব্দ",
        auto_start: "স্বয়ংক্রিয় শুরু",
      },
    },
  },
  ye = { wakawaka: { title: "গড মোড সক্রিয়" } },
  me = { editor: ge, dialog: ye },
  be = Object.freeze({ __proto__: null, default: me, dialog: ye, editor: ge }),
  ke = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  we = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  Ae = { editor: ke, dialog: we },
  Oe = Object.freeze({ __proto__: null, default: Ae, dialog: we, editor: ke }),
  $e = {
    card: {
      pacman: { title: "Títol", sound: "So", auto_start: "Inici automàtic" },
    },
  },
  Ee = { wakawaka: { title: "MODE DÉU ACTIVAT" } },
  Te = { editor: $e, dialog: Ee },
  Se = Object.freeze({ __proto__: null, default: Te, dialog: Ee, editor: $e }),
  je = {
    card: {
      pacman: {
        title: "Název",
        sound: "Zvuk",
        auto_start: "Automatické spuštění",
      },
    },
  },
  Ie = { wakawaka: { title: "REŽIM BOHA AKTIVOVÁN" } },
  Pe = { editor: je, dialog: Ie },
  Ce = Object.freeze({ __proto__: null, default: Pe, dialog: Ie, editor: je }),
  ze = {
    card: {
      pacman: {
        title: "Teitl",
        sound: "Sain",
        auto_start: "Cychwyn awtomatig",
      },
    },
  },
  Me = { wakawaka: { title: "MODD DUW WEDI'I ACTIFADU" } },
  De = { editor: ze, dialog: Me },
  Re = Object.freeze({ __proto__: null, default: De, dialog: Me, editor: ze }),
  Ue = {
    card: {
      pacman: { title: "Titel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  xe = { wakawaka: { title: "GUDTILSTAND AKTIVERET" } },
  Ne = { editor: Ue, dialog: xe },
  He = Object.freeze({ __proto__: null, default: Ne, dialog: xe, editor: Ue }),
  Ve = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Ton",
        auto_start: "Automatischer Start",
      },
    },
  },
  Ke = { wakawaka: { title: "GOTTMODUS AKTIVIERT" } },
  Le = { editor: Ve, dialog: Ke },
  Be = Object.freeze({ __proto__: null, default: Le, dialog: Ke, editor: Ve }),
  Ge = {
    card: {
      pacman: {
        title: "Τίτλος",
        sound: "Ήχος",
        auto_start: "Αυτόματη εκκίνηση",
      },
    },
  },
  We = { wakawaka: { title: "ΛΕΙΤΟΥΡΓΙΑ ΘΕΟΥ ΕΝΕΡΓΟΠΟΙΗΘΗΚΕ" } },
  qe = { editor: Ge, dialog: We },
  Je = Object.freeze({ __proto__: null, default: qe, dialog: We, editor: Ge }),
  Ze = { card: { pacman: { title: "Title", auto_start: "Auto start" } } },
  Fe = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  Ye = { editor: Ze, dialog: Fe },
  Qe = Object.freeze({ __proto__: null, default: Ye, dialog: Fe, editor: Ze }),
  Xe = {
    card: {
      pacman: { title: "Title", sound: "Sound", auto_start: "Auto start" },
    },
  },
  tn = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  en = { editor: Xe, dialog: tn },
  nn = Object.freeze({ __proto__: null, default: en, dialog: tn, editor: Xe }),
  an = {
    card: {
      pacman: {
        title: "Titolo",
        sound: "Sono",
        auto_start: "Aŭtomata komenco",
      },
    },
  },
  on = { wakawaka: { title: "DIA REĜIMO AKTIVIGITA" } },
  rn = { editor: an, dialog: on },
  ln = Object.freeze({ __proto__: null, default: rn, dialog: on, editor: an }),
  un = {
    card: {
      pacman: {
        title: "Título",
        sound: "Sonido",
        auto_start: "Inicio automático",
      },
    },
  },
  sn = { wakawaka: { title: "MODO DIOS ACTIVADO" } },
  dn = { editor: un, dialog: sn },
  cn = {
    card: {
      pacman: {
        title: "Título",
        sound: "Sonido",
        auto_start: "Inicio automático",
      },
    },
  },
  fn = { wakawaka: { title: "MODO DIOS ACTIVADO" } },
  hn = { editor: cn, dialog: fn },
  pn = {
    card: {
      pacman: {
        title: "Pealkiri",
        sound: "Heli",
        auto_start: "Automaatne käivitamine",
      },
    },
  },
  _n = { wakawaka: { title: "JUMALAREŽIIM AKTIVEERITUD" } },
  vn = { editor: pn, dialog: _n },
  gn = {
    card: {
      pacman: {
        title: "Izenburua",
        sound: "Soinua",
        auto_start: "Hasiera automatikoa",
      },
    },
  },
  yn = { wakawaka: { title: "JAINKO MODUA AKTIBATUTA" } },
  mn = { editor: gn, dialog: yn },
  bn = {
    card: {
      pacman: { title: "عنوان", sound: "صدا", auto_start: "شروع خودکار" },
    },
  },
  kn = { wakawaka: { title: "حالت خدا فعال شد" } },
  wn = { editor: bn, dialog: kn },
  An = {
    card: {
      pacman: {
        title: "Otsikko",
        sound: "Ääni",
        auto_start: "Automaattinen käynnistys",
      },
    },
  },
  On = { wakawaka: { title: "JUMALATILA AKTIVOITU" } },
  $n = { editor: An, dialog: On },
  En = {
    card: {
      pacman: {
        title: "Titre",
        sound: "Son",
        auto_start: "Démarrage automatique",
      },
    },
  },
  Tn = { wakawaka: { title: "MODE DIEU ACTIVÉ" } },
  Sn = { editor: En, dialog: Tn },
  jn = {
    card: {
      pacman: { title: "Titel", sound: "Lûd", auto_start: "Automatysk starte" },
    },
  },
  In = { wakawaka: { title: "GODMODUS AKTIVEARRE" } },
  Pn = { editor: jn, dialog: In },
  Cn = {
    card: {
      pacman: {
        title: "Teideal",
        sound: "Fuaim",
        auto_start: "Tosaigh go huathoibríoch",
      },
    },
  },
  zn = { wakawaka: { title: "MÓD DÉ GNÍOMHACHTAITHE" } },
  Mn = { editor: Cn, dialog: zn },
  Dn = {
    card: {
      pacman: {
        title: "Título",
        sound: "Son",
        auto_start: "Inicio automático",
      },
    },
  },
  Rn = { wakawaka: { title: "MODO DEUS ACTIVADO" } },
  Un = { editor: Dn, dialog: Rn },
  xn = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Ton",
        auto_start: "Automatischer Start",
      },
    },
  },
  Nn = { wakawaka: { title: "GOTTMODUS AKTIVIERT" } },
  Hn = { editor: xn, dialog: Nn },
  Vn = {
    card: {
      pacman: { title: "כותרת", sound: "צליל", auto_start: "הפעלה אוטומטית" },
    },
  },
  Kn = { wakawaka: { title: "מצב אלוהים הופעל" } },
  Ln = { editor: Vn, dialog: Kn },
  Bn = {
    card: {
      pacman: {
        title: "शीर्षक",
        sound: "ध्वनि",
        auto_start: "स्वचालित प्रारंभ",
      },
    },
  },
  Gn = { wakawaka: { title: "गॉड मोड सक्रिय" } },
  Wn = { editor: Bn, dialog: Gn },
  qn = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  Jn = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  Zn = { editor: qn, dialog: Jn },
  Fn = {
    card: {
      pacman: {
        title: "Cím",
        sound: "Hang",
        auto_start: "Automatikus indítás",
      },
    },
  },
  Yn = { wakawaka: { title: "ISTEN MÓD AKTIVÁLVA" } },
  Qn = { editor: Fn, dialog: Yn },
  Xn = {
    card: {
      pacman: {
        title: "Վերնագիր",
        sound: "Ձայն",
        auto_start: "Ինքնաադարձակ գործարկում",
      },
    },
  },
  ti = { wakawaka: { title: "WAKA WAKA WAKA!" } },
  ei = { editor: Xn, dialog: ti },
  ni = {
    card: {
      pacman: { title: "Judul", sound: "Suara", auto_start: "Mulai otomatis" },
    },
  },
  ii = { wakawaka: { title: "MODE TUHAN DIAKTIFKAN" } },
  ai = { editor: ni, dialog: ii },
  oi = {
    card: {
      pacman: {
        title: "Titill",
        sound: "Hljóð",
        auto_start: "Sjálfvirk ræsing",
      },
    },
  },
  ri = { wakawaka: { title: "GUÐSTILLING VIRKJUÐ" } },
  li = { editor: oi, dialog: ri },
  ui = {
    card: {
      pacman: {
        title: "Titolo",
        sound: "Audio",
        auto_start: "Avvio automatico",
      },
    },
  },
  si = { wakawaka: { title: "MODALITÀ DIO ATTIVATA" } },
  di = { editor: ui, dialog: si },
  ci = {
    card: {
      pacman: { title: "タイトル", sound: "サウンド", auto_start: "自動開始" },
    },
  },
  fi = { wakawaka: { title: "ゴッドモード起動" } },
  hi = { editor: ci, dialog: fi },
  pi = {
    card: {
      pacman: {
        title: "სათაური",
        sound: "ხმა",
        auto_start: "ავტომატური დაწყება",
      },
    },
  },
  _i = { wakawaka: { title: "ღვთის რეჟიმი გააქტიურებულია" } },
  vi = { editor: pi, dialog: _i },
  gi = {
    card: { pacman: { title: "제목", sound: "소리", auto_start: "자동 시작" } },
  },
  yi = { wakawaka: { title: "갓 모드 활성화" } },
  mi = { editor: gi, dialog: yi },
  bi = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Toun",
        auto_start: "Automatesche Start",
      },
    },
  },
  ki = { wakawaka: { title: "GOTTMODUS AKTIVÉIERT" } },
  wi = { editor: bi, dialog: ki },
  Ai = {
    card: {
      pacman: {
        title: "Pavadinimas",
        sound: "Garsas",
        auto_start: "Automatinis paleidimas",
      },
    },
  },
  Oi = { wakawaka: { title: "DIEVO REŽIMAS AKTYVUOTAS" } },
  $i = { editor: Ai, dialog: Oi },
  Ei = {
    card: {
      pacman: {
        title: "Nosaukums",
        sound: "Skaņa",
        auto_start: "Automātiskā palaišana",
      },
    },
  },
  Ti = { wakawaka: { title: "DIEVA REŽĪMS AKTIVIZĒTS" } },
  Si = { editor: Ei, dialog: Ti },
  ji = {
    card: {
      pacman: {
        title: "Наслов",
        sound: "Звук",
        auto_start: "Автоматско стартување",
      },
    },
  },
  Ii = { wakawaka: { title: "РЕЖИМ НА БОГА АКТИВИРАН" } },
  Pi = { editor: ji, dialog: Ii },
  Ci = {
    card: {
      pacman: {
        title: "ശീർഷകം",
        sound: "ശബ്ദം",
        auto_start: "യാന്ത്രിക ആരംഭം",
      },
    },
  },
  zi = { wakawaka: { title: "ഗോഡ് മോഡ് സജീവമാക്കി" } },
  Mi = { editor: Ci, dialog: zi },
  Di = {
    card: {
      pacman: { title: "Tittel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  Ri = { wakawaka: { title: "GUDMODUS AKTIVERT" } },
  Ui = { editor: Di, dialog: Ri },
  xi = {
    card: {
      pacman: {
        title: "Titel",
        sound: "Geluid",
        auto_start: "Automatisch starten",
      },
    },
  },
  Ni = { wakawaka: { title: "GODMODUS GEACTIVEERD" } },
  Hi = { editor: xi, dialog: Ni },
  Vi = {
    card: {
      pacman: { title: "Tittel", sound: "Lyd", auto_start: "Automatisk start" },
    },
  },
  Ki = { wakawaka: { title: "GUDMODUS AKTIVERT" } },
  Li = { editor: Vi, dialog: Ki },
  Bi = {
    card: {
      pacman: {
        title: "Tytuł",
        sound: "Dźwięk",
        auto_start: "Automatyczny start",
      },
    },
  },
  Gi = { wakawaka: { title: "TRYB BOGA AKTYWOWANY" } },
  Wi = { editor: Bi, dialog: Gi },
  qi = {
    card: {
      pacman: {
        title: "Título",
        sound: "Som",
        auto_start: "Início automático",
      },
    },
  },
  Ji = { wakawaka: { title: "MODO DEUS ATIVADO" } },
  Zi = { editor: qi, dialog: Ji },
  Fi = {
    card: {
      pacman: {
        title: "Título",
        sound: "Som",
        auto_start: "Início automático",
      },
    },
  },
  Yi = { wakawaka: { title: "MODO DEUS ATIVADO" } },
  Qi = { editor: Fi, dialog: Yi },
  Xi = {
    card: {
      pacman: {
        title: "Titlu",
        sound: "Sunet",
        auto_start: "Pornire automată",
      },
    },
  },
  ta = { wakawaka: { title: "MODUL DIVIN ACTIVAT" } },
  ea = { editor: Xi, dialog: ta },
  na = {
    card: {
      pacman: { title: "Заголовок", sound: "Звук", auto_start: "Автозапуск" },
    },
  },
  ia = { wakawaka: { title: "РЕЖИМ БОГА АКТИВИРОВАН" } },
  aa = { editor: na, dialog: ia },
  oa = {
    card: {
      pacman: {
        title: "Názov",
        sound: "Zvuk",
        auto_start: "Automatické spustenie",
      },
    },
  },
  ra = { wakawaka: { title: "REŽIM BOHA AKTIVOVANÝ" } },
  la = { editor: oa, dialog: ra },
  ua = {
    card: {
      pacman: { title: "Naslov", sound: "Zvok", auto_start: "Samodejni zagon" },
    },
  },
  sa = { wakawaka: { title: "BOŽJI NAČIN AKTIVIRAN" } },
  da = { editor: ua, dialog: sa },
  ca = {
    card: {
      pacman: { title: "Titulli", sound: "Tingulli", auto_start: "Auto start" },
    },
  },
  fa = { wakawaka: { title: "MODALITETI I ZOTIT I AKTIVIZUAR" } },
  ha = { editor: ca, dialog: fa },
  pa = {
    card: {
      pacman: {
        title: "Наслов",
        sound: "Звук",
        auto_start: "Аутоматско покретање",
      },
    },
  },
  _a = { wakawaka: { title: "БОЖЈИ РЕЖИМ АКТИВИРАН" } },
  va = { editor: pa, dialog: _a },
  ga = {
    card: {
      pacman: {
        title: "Naslov",
        sound: "Zvuk",
        auto_start: "Automatsko pokretanje",
      },
    },
  },
  ya = { wakawaka: { title: "BOŽJI REŽIM AKTIVIRAN" } },
  ma = { editor: ga, dialog: ya },
  ba = {
    card: {
      pacman: { title: "Titel", sound: "Ljud", auto_start: "Automatisk start" },
    },
  },
  ka = { wakawaka: { title: "GUDLÄGE AKTIVERAT" } },
  wa = { editor: ba, dialog: ka },
  Aa = {
    card: {
      pacman: {
        title: "தலைப்பு",
        sound: "ஒலி",
        auto_start: "தானியங்கி தொடக்கம்",
      },
    },
  },
  Oa = { wakawaka: { title: "காட் மோட் செயல்படுத்தப்பட்டது" } },
  $a = { editor: Aa, dialog: Oa },
  Ea = {
    card: {
      pacman: { title: "శీర్షిక", sound: "ధ్వని", auto_start: "ఆటో ప్రారంభం" },
    },
  },
  Ta = { wakawaka: { title: "గాడ్ మోడ్ సక్రియం చేయబడింది" } },
  Sa = { editor: Ea, dialog: Ta },
  ja = {
    card: {
      pacman: { title: "ชื่อ", sound: "เสียง", auto_start: "เริ่มอัตโนมัติ" },
    },
  },
  Ia = { wakawaka: { title: "เปิดโหมดพระเจ้าแล้ว" } },
  Pa = { editor: ja, dialog: Ia },
  Ca = {
    card: {
      pacman: {
        title: "Başlık",
        sound: "Ses",
        auto_start: "Otomatik başlatma",
      },
    },
  },
  za = { wakawaka: { title: "TANRI MODU ETKİNLEŞTİRİLDİ" } },
  Ma = { editor: Ca, dialog: za },
  Da = {
    card: {
      pacman: { title: "Заголовок", sound: "Звук", auto_start: "Автозапуск" },
    },
  },
  Ra = { wakawaka: { title: "РЕЖИМ БОГА АКТИВОВАНО" } },
  Ua = { editor: Da, dialog: Ra },
  xa = {
    card: {
      pacman: { title: "عنوان", sound: "آواز", auto_start: "خودکار شروع" },
    },
  },
  Na = { wakawaka: { title: "گاڈ موڈ فعال" } },
  Ha = { editor: xa, dialog: Na },
  Va = {
    card: {
      pacman: {
        title: "Tiêu đề",
        sound: "Âm thanh",
        auto_start: "Tự động bắt đầu",
      },
    },
  },
  Ka = { wakawaka: { title: "CHẾ ĐỘ THẦN ĐÃ KÍCH HOẠT" } },
  La = { editor: Va, dialog: Ka },
  Ba = {
    card: { pacman: { title: "标题", sound: "声音", auto_start: "自动启动" } },
  },
  Ga = { wakawaka: { title: "上帝模式已激活" } },
  Wa = { editor: Ba, dialog: Ga },
  qa = {
    card: { pacman: { title: "標題", sound: "聲音", auto_start: "自動啟動" } },
  },
  Ja = { wakawaka: { title: "上帝模式已啟動" } },
  Za = { editor: qa, dialog: Ja },
  Fa = {
    af: ue,
    ar: fe,
    bg: ve,
    bn: be,
    bs: Oe,
    ca: Se,
    cs: Ce,
    cy: Re,
    da: He,
    de: Be,
    el: Je,
    en: Qe,
    "en-GB": nn,
    eo: ln,
    es: Object.freeze({ __proto__: null, default: dn, dialog: sn, editor: un }),
    "es-419": Object.freeze({
      __proto__: null,
      default: hn,
      dialog: fn,
      editor: cn,
    }),
    et: Object.freeze({ __proto__: null, default: vn, dialog: _n, editor: pn }),
    eu: Object.freeze({ __proto__: null, default: mn, dialog: yn, editor: gn }),
    fa: Object.freeze({ __proto__: null, default: wn, dialog: kn, editor: bn }),
    fi: Object.freeze({ __proto__: null, default: $n, dialog: On, editor: An }),
    fr: Object.freeze({ __proto__: null, default: Sn, dialog: Tn, editor: En }),
    fy: Object.freeze({ __proto__: null, default: Pn, dialog: In, editor: jn }),
    ga: Object.freeze({ __proto__: null, default: Mn, dialog: zn, editor: Cn }),
    gl: Object.freeze({ __proto__: null, default: Un, dialog: Rn, editor: Dn }),
    gsw: Object.freeze({
      __proto__: null,
      default: Hn,
      dialog: Nn,
      editor: xn,
    }),
    he: Object.freeze({ __proto__: null, default: Ln, dialog: Kn, editor: Vn }),
    hi: Object.freeze({ __proto__: null, default: Wn, dialog: Gn, editor: Bn }),
    hr: Object.freeze({ __proto__: null, default: Zn, dialog: Jn, editor: qn }),
    hu: Object.freeze({ __proto__: null, default: Qn, dialog: Yn, editor: Fn }),
    hy: Object.freeze({ __proto__: null, default: ei, dialog: ti, editor: Xn }),
    id: Object.freeze({ __proto__: null, default: ai, dialog: ii, editor: ni }),
    is: Object.freeze({ __proto__: null, default: li, dialog: ri, editor: oi }),
    it: Object.freeze({ __proto__: null, default: di, dialog: si, editor: ui }),
    ja: Object.freeze({ __proto__: null, default: hi, dialog: fi, editor: ci }),
    ka: Object.freeze({ __proto__: null, default: vi, dialog: _i, editor: pi }),
    ko: Object.freeze({ __proto__: null, default: mi, dialog: yi, editor: gi }),
    lb: Object.freeze({ __proto__: null, default: wi, dialog: ki, editor: bi }),
    lt: Object.freeze({ __proto__: null, default: $i, dialog: Oi, editor: Ai }),
    lv: Object.freeze({ __proto__: null, default: Si, dialog: Ti, editor: Ei }),
    mk: Object.freeze({ __proto__: null, default: Pi, dialog: Ii, editor: ji }),
    ml: Object.freeze({ __proto__: null, default: Mi, dialog: zi, editor: Ci }),
    nb: Object.freeze({ __proto__: null, default: Ui, dialog: Ri, editor: Di }),
    nl: Object.freeze({ __proto__: null, default: Hi, dialog: Ni, editor: xi }),
    nn: Object.freeze({ __proto__: null, default: Li, dialog: Ki, editor: Vi }),
    pl: Object.freeze({ __proto__: null, default: Wi, dialog: Gi, editor: Bi }),
    pt: Object.freeze({ __proto__: null, default: Zi, dialog: Ji, editor: qi }),
    "pt-BR": Object.freeze({
      __proto__: null,
      default: Qi,
      dialog: Yi,
      editor: Fi,
    }),
    ro: Object.freeze({ __proto__: null, default: ea, dialog: ta, editor: Xi }),
    ru: Object.freeze({ __proto__: null, default: aa, dialog: ia, editor: na }),
    sk: Object.freeze({ __proto__: null, default: la, dialog: ra, editor: oa }),
    sl: Object.freeze({ __proto__: null, default: da, dialog: sa, editor: ua }),
    sq: Object.freeze({ __proto__: null, default: ha, dialog: fa, editor: ca }),
    sr: Object.freeze({ __proto__: null, default: va, dialog: _a, editor: pa }),
    "sr-Latn": Object.freeze({
      __proto__: null,
      default: ma,
      dialog: ya,
      editor: ga,
    }),
    sv: Object.freeze({ __proto__: null, default: wa, dialog: ka, editor: ba }),
    ta: Object.freeze({ __proto__: null, default: $a, dialog: Oa, editor: Aa }),
    te: Object.freeze({ __proto__: null, default: Sa, dialog: Ta, editor: Ea }),
    th: Object.freeze({ __proto__: null, default: Pa, dialog: Ia, editor: ja }),
    tr: Object.freeze({ __proto__: null, default: Ma, dialog: za, editor: Ca }),
    uk: Object.freeze({ __proto__: null, default: Ua, dialog: Ra, editor: Da }),
    ur: Object.freeze({ __proto__: null, default: Ha, dialog: Na, editor: xa }),
    vi: Object.freeze({ __proto__: null, default: La, dialog: Ka, editor: Va }),
    "zh-Hans": Object.freeze({
      __proto__: null,
      default: Wa,
      dialog: Ga,
      editor: Ba,
    }),
    "zh-Hant": Object.freeze({
      __proto__: null,
      default: Za,
      dialog: Ja,
      editor: qa,
    }),
  };
function Ya(t, e) {
  try {
    return t.split(".").reduce(function (t, e) {
      return t[e];
    }, Fa[e]);
  } catch (t) {
    return;
  }
}
var Qa = [
    { name: "title", selector: { text: {} } },
    { name: "auto_start", selector: { boolean: {} } },
  ],
  Xa = (function () {
    function t() {
      var e;
      return (
        z(this, t),
        ((e = A(this, t, arguments))._computeLabel = function (t) {
          var n;
          return ((n = e.hass),
          function (t) {
            var e,
              i,
              a = Ya(
                t,
                null !==
                  (i =
                    null === (e = null == n ? void 0 : n.locale) || void 0 === e
                      ? void 0
                      : e.language) && void 0 !== i
                  ? i
                  : "en"
              );
            return (a || (a = Ya(t, "en")), null != a ? a : t);
          })("editor.card.pacman.".concat(t.name));
        }),
        e
      );
    }
    return (
      $(t, Wt),
      D(t, [
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
              ? St(
                  d ||
                    (d = c([
                      "\n      <ha-form\n        .hass=",
                      "\n        .data=",
                      "\n        .schema=",
                      "\n        .computeLabel=",
                      "\n        @value-changed=",
                      "\n      ></ha-form>\n    ",
                    ])),
                  this.hass,
                  this._config,
                  Qa,
                  this._computeLabel,
                  this._valueChanged
                )
              : It;
          },
        },
      ])
    );
  })();
(H([Yt({ attribute: !1 })], Xa.prototype, "hass", void 0),
  H([Qt()], Xa.prototype, "_config", void 0),
  (Xa = H([Jt(N)], Xa)));
var to = Object.freeze({
  __proto__: null,
  get PacmanCardEditor() {
    return Xa;
  },
});
