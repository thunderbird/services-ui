import { defineComponent as Q, openBlock as F, createElementBlock as G, createElementVNode as P, renderSlot as ce, normalizeClass as Se, createCommentVNode as le, createBlock as Ce, unref as de, withModifiers as Xn, withCtx as et, createTextVNode as Mt, toDisplayString as se, createSlots as Xt, renderList as Ge, normalizeProps as qt, guardReactiveProps as Jt, mergeModels as Ve, useModel as ct, ref as be, withDirectives as Zt, Fragment as tt, vModelSelect as Is, vModelDynamic as Os, h as qn, getCurrentInstance as Xe, effectScope as ys, inject as As, onMounted as Jn, onUnmounted as ks, computed as _e, watch as Ft, isRef as Ss, shallowRef as Ds, createVNode as Zn, Text as Ps, vModelCheckbox as Rs } from "vue";
var Qt = /* @__PURE__ */ ((e) => (e.None = "pos-none", e.Top = "pos-top", e.Bottom = "pos-bottom", e.Left = "pos-left", e.Right = "pos-right", e))(Qt || {});
const Ms = ["aria-label"], Fs = { class: "tooltip-container" }, ws = { class: "tooltip-body" }, Us = /* @__PURE__ */ Q({
  __name: "ToolTip",
  props: {
    alt: { default: "" },
    position: { default: Qt.Bottom }
  },
  setup(e) {
    return (t, n) => (F(), G("div", {
      class: "tooltip",
      "aria-label": t.alt
    }, [
      P("div", Fs, [
        P("div", ws, [
          ce(t.$slots, "default", {}, void 0, !0)
        ]),
        (F(), G("svg", {
          class: Se(["beak", t.position]),
          width: "28",
          height: "6",
          viewBox: "0 0 28 6",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, n[0] || (n[0] = [
          P("g", null, [
            P("path", {
              d: "M15.4142 4.58579C14.6332 5.36683 13.3668 5.36683 12.5858 4.58579L8 0L20 0L15.4142 4.58579Z",
              fill: "currentColor"
            })
          ], -1)
        ]), 2))
      ])
    ], 8, Ms));
  }
}), oe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Vs = /* @__PURE__ */ oe(Us, [["__scopeId", "data-v-4e716012"]]), $s = {
  key: 0,
  class: "icon"
}, Ws = { class: "text" }, Gs = /* @__PURE__ */ Q({
  __name: "BaseButton",
  props: {
    type: { default: "secondary" },
    size: { default: "regular" },
    tooltip: { default: "" },
    forceTooltip: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => {
      var s;
      return F(), G("button", {
        class: Se(["tbpro-button", { [t.type]: t.type, small: t.size === "small" }]),
        type: "button"
      }, [
        (s = t.$slots) != null && s.icon ? (F(), G("span", $s, [
          ce(t.$slots, "icon", {}, void 0, !0)
        ])) : le("", !0),
        P("span", Ws, [
          ce(t.$slots, "default", {}, void 0, !0)
        ]),
        t.tooltip ? (F(), Ce(Vs, {
          key: 1,
          class: Se(["tooltip", { "display-tooltip": t.forceTooltip }]),
          position: de(Qt).Bottom,
          onClick: n[0] || (n[0] = Xn(() => {
          }, ["prevent"]))
        }, {
          default: et(() => [
            Mt(se(t.tooltip), 1)
          ]),
          _: 1
        }, 8, ["class", "position"])) : le("", !0)
      ], 2);
    };
  }
}), zt = /* @__PURE__ */ oe(Gs, [["__scopeId", "data-v-b9d9f518"]]), Bs = /* @__PURE__ */ Q({
  __name: "PrimaryButton",
  setup(e) {
    return (t, n) => (F(), Ce(zt, { type: "primary" }, Xt({ _: 2 }, [
      Ge(t.$slots, (s, r) => ({
        name: r,
        fn: et((a) => [
          ce(t.$slots, r, qt(Jt(a)))
        ])
      }))
    ]), 1024));
  }
}), yo = /* @__PURE__ */ Q({
  __name: "SecondaryButton",
  setup(e) {
    return (t, n) => (F(), Ce(zt, { type: "secondary" }, Xt({ _: 2 }, [
      Ge(t.$slots, (s, r) => ({
        name: r,
        fn: et((a) => [
          ce(t.$slots, r, qt(Jt(a)))
        ])
      }))
    ]), 1024));
  }
}), Ao = /* @__PURE__ */ Q({
  __name: "LinkButton",
  setup(e) {
    return (t, n) => (F(), Ce(zt, { type: "link" }, Xt({ _: 2 }, [
      Ge(t.$slots, (s, r) => ({
        name: r,
        fn: et((a) => [
          ce(t.$slots, r, qt(Jt(a)))
        ])
      }))
    ]), 1024));
  }
}), xs = ["for"], Hs = { class: "label" }, Ys = {
  key: 0,
  class: "required"
}, Ks = ["id", "name", "required", "disabled"], js = ["value"], Xs = /* @__PURE__ */ Q({
  __name: "SelectInput",
  props: /* @__PURE__ */ Ve({
    name: {},
    options: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["submit"], ["update:modelValue"]),
  setup(e) {
    const t = ct(e, "modelValue"), n = be(!1), s = be(""), r = (a) => {
      n.value = !0, s.value = a.target.validationMessage;
    };
    return (a, l) => (F(), G("label", {
      class: "wrapper",
      for: a.name
    }, [
      P("span", Hs, [
        ce(a.$slots, "default", {}, void 0, !0),
        a.required && (t.value === null || t.value === "") ? (F(), G("span", Ys, "*")) : le("", !0)
      ]),
      Zt(P("select", {
        class: "tbpro-select w-full rounded-md",
        "onUpdate:modelValue": l[0] || (l[0] = (o) => t.value = o),
        id: a.name,
        name: a.name,
        required: a.required,
        disabled: a.disabled,
        onInvalid: r
      }, [
        (F(!0), G(tt, null, Ge(a.options, (o) => (F(), G("option", {
          value: o.value,
          key: o.value
        }, se(o.label), 9, js))), 128))
      ], 40, Ks), [
        [Is, t.value]
      ]),
      P("span", {
        class: Se([{ visible: n.value }, "help-label"])
      }, se(s.value), 3)
    ], 8, xs));
  }
}), ko = /* @__PURE__ */ oe(Xs, [["__scopeId", "data-v-c9125682"]]), qs = ["for"], Js = { class: "label" }, Zs = {
  key: 0,
  class: "required"
}, Qs = ["type", "id", "name", "disabled", "placeholder", "required"], zs = {
  key: 0,
  class: "help-label invalid"
}, er = {
  key: 1,
  class: "help-label"
}, tr = {
  key: 2,
  class: "help-label"
}, nr = /* @__PURE__ */ Q({
  __name: "TextInput",
  props: /* @__PURE__ */ Ve({
    name: {},
    help: { default: null },
    remoteError: { default: null },
    type: { default: "text" },
    placeholder: { default: "" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["submit"], ["update:modelValue"]),
  setup(e, { expose: t }) {
    const n = ct(e, "modelValue"), s = be(!1), r = be(""), a = be(!1), l = be(null);
    t({ focus: () => {
      l.value && l.value.focus();
    } });
    const u = (h) => {
      s.value = !0, a.value = !0, r.value = h.target.validationMessage;
    }, m = () => {
      a.value = !0;
    };
    return (h, C) => {
      var p;
      return F(), G("label", {
        class: "wrapper",
        for: h.name
      }, [
        P("span", Js, [
          ce(h.$slots, "default", {}, void 0, !0),
          h.required && ((p = n.value) == null ? void 0 : p.length) === 0 ? (F(), G("span", Zs, "*")) : le("", !0)
        ]),
        Zt(P("input", {
          class: Se(["tbpro-input", { dirty: a.value }]),
          "onUpdate:modelValue": C[0] || (C[0] = (O) => n.value = O),
          type: h.type,
          id: h.name,
          name: h.name,
          disabled: h.disabled,
          placeholder: h.placeholder,
          required: h.required,
          onInvalid: u,
          onChange: m,
          ref_key: "inputRef",
          ref: l
        }, null, 42, Qs), [
          [Os, n.value]
        ]),
        s.value ? (F(), G("span", zs, se(r.value), 1)) : h.help ? (F(), G("span", er, se(h.help), 1)) : (F(), G("span", tr))
      ], 8, qs);
    };
  }
}), So = /* @__PURE__ */ oe(nr, [["__scopeId", "data-v-0f8ba9f9"]]), sr = { class: "wrapper" }, rr = { class: "label" }, ar = {
  key: 0,
  class: "required"
}, lr = { class: "bubble-list" }, or = ["aria-pressed", "title", "onClick"], ir = /* @__PURE__ */ Q({
  __name: "BubbleSelect",
  props: /* @__PURE__ */ Ve({
    options: {},
    required: { type: Boolean, default: !1 }
  }, {
    modelValue: { default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ct(e, "modelValue"), n = (s) => {
      t.value.indexOf(s.value) > -1 ? t.value = t.value.filter((a) => s.value !== a) : t.value = [
        ...t.value,
        s.value
      ], t.value.sort();
    };
    return (s, r) => {
      var a;
      return F(), G("div", sr, [
        P("label", null, [
          P("span", rr, [
            ce(s.$slots, "default", {}, void 0, !0),
            s.required && ((a = t.value) == null ? void 0 : a.length) === 0 ? (F(), G("span", ar, "*")) : le("", !0)
          ])
        ]),
        P("ul", lr, [
          (F(!0), G(tt, null, Ge(s.options, (l) => (F(), G("li", {
            key: l.value
          }, [
            P("button", {
              class: Se(["tbpro-bubble", { selected: t.value.indexOf(l.value) > -1 }]),
              "aria-pressed": t.value.indexOf(l.value) > -1,
              title: l.fullLabel ?? l.value,
              type: "button",
              onClick: () => n(l)
            }, se(l.label), 11, or)
          ]))), 128))
        ])
      ]);
    };
  }
}), Do = /* @__PURE__ */ oe(ir, [["__scopeId", "data-v-e25d44da"]]);
/*!
  * shared v10.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const ue = typeof window < "u";
let re, De;
if (process.env.NODE_ENV !== "production") {
  const e = ue && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (re = (t) => {
    e.mark(t);
  }, De = (t, n, s) => {
    e.measure(t, n, s), e.clearMarks(n), e.clearMarks(s);
  });
}
const cr = /\{([0-9a-zA-Z]+)\}/g;
function ut(e, ...t) {
  return t.length === 1 && U(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(cr, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const me = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ur = (e, t, n) => fr({ l: e, k: t, s: n }), fr = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), J = (e) => typeof e == "number" && isFinite(e), _r = (e) => zn(e) === "[object Date]", $e = (e) => zn(e) === "[object RegExp]", ft = (e) => R(e) && Object.keys(e).length === 0, Z = Object.assign;
let dn;
const ke = () => dn || (dn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function mn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const dr = Object.prototype.hasOwnProperty;
function ot(e, t) {
  return dr.call(e, t);
}
const H = Array.isArray, x = (e) => typeof e == "function", L = (e) => typeof e == "string", w = (e) => typeof e == "boolean", U = (e) => e !== null && typeof e == "object", mr = (e) => U(e) && x(e.then) && x(e.catch), Qn = Object.prototype.toString, zn = (e) => Qn.call(e), R = (e) => {
  if (!U(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, pr = (e) => e == null ? "" : H(e) || R(e) && e.toString === Qn ? JSON.stringify(e, null, 2) : String(e);
function en(e, t = "") {
  return e.reduce((n, s, r) => r === 0 ? n + s : n + t + s, "");
}
const pn = 2;
function Er(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let r = 0;
  const a = [];
  for (let l = 0; l < s.length; l++)
    if (r += s[l].length + 1, r >= t) {
      for (let o = l - pn; o <= l + pn || n > r; o++) {
        if (o < 0 || o >= s.length)
          continue;
        const u = o + 1;
        a.push(`${u}${" ".repeat(3 - String(u).length)}|  ${s[o]}`);
        const m = s[o].length;
        if (o === l) {
          const h = t - (r - m) + 1, C = Math.max(1, n > r ? m - h : n - t);
          a.push("   |  " + " ".repeat(h) + "^".repeat(C));
        } else if (o > l) {
          if (n > r) {
            const h = Math.max(Math.min(n - r, m), 1);
            a.push("   |  " + "^".repeat(h));
          }
          r += m + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function Te(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const En = {};
function es(e) {
  En[e] || (En[e] = !0, Te(e));
}
function tn() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, s) {
      const r = e.get(n);
      r && r.push(s) || e.set(n, [s]);
    },
    off(n, s) {
      const r = e.get(n);
      r && r.splice(r.indexOf(s) >>> 0, 1);
    },
    emit(n, s) {
      (e.get(n) || []).slice().map((r) => r(s)), (e.get("*") || []).slice().map((r) => r(n, s));
    }
  };
}
const rt = (e) => !U(e) || H(e);
function lt(e, t) {
  if (rt(e) || rt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: r } = n.pop();
    Object.keys(s).forEach((a) => {
      rt(s[a]) || rt(r[a]) ? r[a] = s[a] : n.push({ src: s[a], des: r[a] });
    });
  }
}
/*!
  * message-compiler v10.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function gr(e, t, n) {
  return { line: e, column: t, offset: n };
}
function wt(e, t, n) {
  return { start: e, end: t };
}
const D = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
}, Nr = 17, hr = {
  // tokenizer error messages
  [D.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [D.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [D.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [D.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [D.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [D.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [D.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [D.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [D.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [D.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [D.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [D.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [D.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [D.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [D.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Be(e, t, n = {}) {
  const { domain: s, messages: r, args: a } = n, l = process.env.NODE_ENV !== "production" ? ut((r || hr)[e] || "", ...a || []) : e, o = new SyntaxError(String(l));
  return o.code = e, t && (o.location = t), o.domain = s, o;
}
function Cr(e) {
  throw e;
}
const br = /<\/?[\w\s="/.':;#-\/]+>/, vr = (e) => br.test(e), Ee = " ", Lr = "\r", ee = `
`, Tr = "\u2028", Ir = "\u2029";
function Or(e) {
  const t = e;
  let n = 0, s = 1, r = 1, a = 0;
  const l = (g) => t[g] === Lr && t[g + 1] === ee, o = (g) => t[g] === ee, u = (g) => t[g] === Ir, m = (g) => t[g] === Tr, h = (g) => l(g) || o(g) || u(g) || m(g), C = () => n, p = () => s, O = () => r, S = () => a, A = (g) => l(g) || u(g) || m(g) ? ee : t[g], y = () => A(n), f = () => A(n + a);
  function _() {
    return a = 0, h(n) && (s++, r = 0), l(n) && n++, n++, r++, t[n];
  }
  function v() {
    return l(n + a) && a++, a++, t[n + a];
  }
  function E() {
    n = 0, s = 1, r = 1, a = 0;
  }
  function T(g = 0) {
    a = g;
  }
  function I() {
    const g = n + a;
    for (; g !== n; )
      _();
    a = 0;
  }
  return {
    index: C,
    line: p,
    column: O,
    peekOffset: S,
    charAt: A,
    currentChar: y,
    currentPeek: f,
    next: _,
    peek: v,
    reset: E,
    resetPeek: T,
    skipToPeek: I
  };
}
const he = void 0, yr = ".", gn = "'", Ar = "tokenizer";
function kr(e, t = {}) {
  const n = t.location !== !1, s = Or(e), r = () => s.index(), a = () => gr(s.line(), s.column(), s.index()), l = a(), o = r(), u = {
    currentType: 13,
    offset: o,
    startLoc: l,
    endLoc: l,
    lastType: 13,
    lastOffset: o,
    lastStartLoc: l,
    lastEndLoc: l,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, m = () => u, { onError: h } = t;
  function C(i, c, N, ...k) {
    const Y = m();
    if (c.column += N, c.offset += N, h) {
      const K = n ? wt(Y.startLoc, c) : null, V = Be(i, K, {
        domain: Ar,
        args: k
      });
      h(V);
    }
  }
  function p(i, c, N) {
    i.endLoc = a(), i.currentType = c;
    const k = { type: c };
    return n && (k.loc = wt(i.startLoc, i.endLoc)), N != null && (k.value = N), k;
  }
  const O = (i) => p(
    i,
    13
    /* TokenTypes.EOF */
  );
  function S(i, c) {
    return i.currentChar() === c ? (i.next(), c) : (C(D.EXPECTED_TOKEN, a(), 0, c), "");
  }
  function A(i) {
    let c = "";
    for (; i.currentPeek() === Ee || i.currentPeek() === ee; )
      c += i.currentPeek(), i.peek();
    return c;
  }
  function y(i) {
    const c = A(i);
    return i.skipToPeek(), c;
  }
  function f(i) {
    if (i === he)
      return !1;
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c === 95;
  }
  function _(i) {
    if (i === he)
      return !1;
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function v(i, c) {
    const { currentType: N } = c;
    if (N !== 2)
      return !1;
    A(i);
    const k = f(i.currentPeek());
    return i.resetPeek(), k;
  }
  function E(i, c) {
    const { currentType: N } = c;
    if (N !== 2)
      return !1;
    A(i);
    const k = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), Y = _(k);
    return i.resetPeek(), Y;
  }
  function T(i, c) {
    const { currentType: N } = c;
    if (N !== 2)
      return !1;
    A(i);
    const k = i.currentPeek() === gn;
    return i.resetPeek(), k;
  }
  function I(i, c) {
    const { currentType: N } = c;
    if (N !== 7)
      return !1;
    A(i);
    const k = i.currentPeek() === ".";
    return i.resetPeek(), k;
  }
  function g(i, c) {
    const { currentType: N } = c;
    if (N !== 8)
      return !1;
    A(i);
    const k = f(i.currentPeek());
    return i.resetPeek(), k;
  }
  function M(i, c) {
    const { currentType: N } = c;
    if (!(N === 7 || N === 11))
      return !1;
    A(i);
    const k = i.currentPeek() === ":";
    return i.resetPeek(), k;
  }
  function $(i, c) {
    const { currentType: N } = c;
    if (N !== 9)
      return !1;
    const k = () => {
      const K = i.currentPeek();
      return K === "{" ? f(i.peek()) : K === "@" || K === "|" || K === ":" || K === "." || K === Ee || !K ? !1 : K === ee ? (i.peek(), k()) : ie(i, !1);
    }, Y = k();
    return i.resetPeek(), Y;
  }
  function X(i) {
    A(i);
    const c = i.currentPeek() === "|";
    return i.resetPeek(), c;
  }
  function ie(i, c = !0) {
    const N = (Y = !1, K = "") => {
      const V = i.currentPeek();
      return V === "{" || V === "@" || !V ? Y : V === "|" ? !(K === Ee || K === ee) : V === Ee ? (i.peek(), N(!0, Ee)) : V === ee ? (i.peek(), N(!0, ee)) : !0;
    }, k = N();
    return c && i.resetPeek(), k;
  }
  function q(i, c) {
    const N = i.currentChar();
    return N === he ? he : c(N) ? (i.next(), N) : null;
  }
  function Me(i) {
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c >= 48 && c <= 57 || // 0-9
    c === 95 || // _
    c === 36;
  }
  function pt(i) {
    return q(i, Me);
  }
  function Et(i) {
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c >= 48 && c <= 57 || // 0-9
    c === 95 || // _
    c === 36 || // $
    c === 45;
  }
  function gt(i) {
    return q(i, Et);
  }
  function Nt(i) {
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function ht(i) {
    return q(i, Nt);
  }
  function Ct(i) {
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57 || // 0-9
    c >= 65 && c <= 70 || // A-F
    c >= 97 && c <= 102;
  }
  function pe(i) {
    return q(i, Ct);
  }
  function xe(i) {
    let c = "", N = "";
    for (; c = ht(i); )
      N += c;
    return N;
  }
  function bt(i) {
    let c = "";
    for (; ; ) {
      const N = i.currentChar();
      if (N === "{" || N === "}" || N === "@" || N === "|" || !N)
        break;
      if (N === Ee || N === ee)
        if (ie(i))
          c += N, i.next();
        else {
          if (X(i))
            break;
          c += N, i.next();
        }
      else
        c += N, i.next();
    }
    return c;
  }
  function vt(i) {
    y(i);
    let c = "", N = "";
    for (; c = gt(i); )
      N += c;
    return i.currentChar() === he && C(D.UNTERMINATED_CLOSING_BRACE, a(), 0), N;
  }
  function Lt(i) {
    y(i);
    let c = "";
    return i.currentChar() === "-" ? (i.next(), c += `-${xe(i)}`) : c += xe(i), i.currentChar() === he && C(D.UNTERMINATED_CLOSING_BRACE, a(), 0), c;
  }
  function Tt(i) {
    return i !== gn && i !== ee;
  }
  function fn(i) {
    y(i), S(i, "'");
    let c = "", N = "";
    for (; c = q(i, Tt); )
      c === "\\" ? N += It(i) : N += c;
    const k = i.currentChar();
    return k === ee || k === he ? (C(D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), k === ee && (i.next(), S(i, "'")), N) : (S(i, "'"), N);
  }
  function It(i) {
    const c = i.currentChar();
    switch (c) {
      case "\\":
      case "'":
        return i.next(), `\\${c}`;
      case "u":
        return nt(i, c, 4);
      case "U":
        return nt(i, c, 6);
      default:
        return C(D.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, c), "";
    }
  }
  function nt(i, c, N) {
    S(i, c);
    let k = "";
    for (let Y = 0; Y < N; Y++) {
      const K = pe(i);
      if (!K) {
        C(D.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${c}${k}${i.currentChar()}`);
        break;
      }
      k += K;
    }
    return `\\${c}${k}`;
  }
  function Ot(i) {
    return i !== "{" && i !== "}" && i !== Ee && i !== ee;
  }
  function yt(i) {
    y(i);
    let c = "", N = "";
    for (; c = q(i, Ot); )
      N += c;
    return N;
  }
  function At(i) {
    let c = "", N = "";
    for (; c = pt(i); )
      N += c;
    return N;
  }
  function kt(i) {
    const c = (N) => {
      const k = i.currentChar();
      return k === "{" || k === "@" || k === "|" || k === "(" || k === ")" || !k || k === Ee ? N : (N += k, i.next(), c(N));
    };
    return c("");
  }
  function He(i) {
    y(i);
    const c = S(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return y(i), c;
  }
  function Ye(i, c) {
    let N = null;
    switch (i.currentChar()) {
      case "{":
        return c.braceNest >= 1 && C(D.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), i.next(), N = p(
          c,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(i), c.braceNest++, N;
      case "}":
        return c.braceNest > 0 && c.currentType === 2 && C(D.EMPTY_PLACEHOLDER, a(), 0), i.next(), N = p(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), c.braceNest--, c.braceNest > 0 && y(i), c.inLinked && c.braceNest === 0 && (c.inLinked = !1), N;
      case "@":
        return c.braceNest > 0 && C(D.UNTERMINATED_CLOSING_BRACE, a(), 0), N = Oe(i, c) || O(c), c.braceNest = 0, N;
      default: {
        let Y = !0, K = !0, V = !0;
        if (X(i))
          return c.braceNest > 0 && C(D.UNTERMINATED_CLOSING_BRACE, a(), 0), N = p(c, 1, He(i)), c.braceNest = 0, c.inLinked = !1, N;
        if (c.braceNest > 0 && (c.currentType === 4 || c.currentType === 5 || c.currentType === 6))
          return C(D.UNTERMINATED_CLOSING_BRACE, a(), 0), c.braceNest = 0, Ke(i, c);
        if (Y = v(i, c))
          return N = p(c, 4, vt(i)), y(i), N;
        if (K = E(i, c))
          return N = p(c, 5, Lt(i)), y(i), N;
        if (V = T(i, c))
          return N = p(c, 6, fn(i)), y(i), N;
        if (!Y && !K && !V)
          return N = p(c, 12, yt(i)), C(D.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, N.value), y(i), N;
        break;
      }
    }
    return N;
  }
  function Oe(i, c) {
    const { currentType: N } = c;
    let k = null;
    const Y = i.currentChar();
    switch ((N === 7 || N === 8 || N === 11 || N === 9) && (Y === ee || Y === Ee) && C(D.INVALID_LINKED_FORMAT, a(), 0), Y) {
      case "@":
        return i.next(), k = p(
          c,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), c.inLinked = !0, k;
      case ".":
        return y(i), i.next(), p(
          c,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(i), i.next(), p(
          c,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return X(i) ? (k = p(c, 1, He(i)), c.braceNest = 0, c.inLinked = !1, k) : I(i, c) || M(i, c) ? (y(i), Oe(i, c)) : g(i, c) ? (y(i), p(c, 11, At(i))) : $(i, c) ? (y(i), Y === "{" ? Ye(i, c) || k : p(c, 10, kt(i))) : (N === 7 && C(D.INVALID_LINKED_FORMAT, a(), 0), c.braceNest = 0, c.inLinked = !1, Ke(i, c));
    }
  }
  function Ke(i, c) {
    let N = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (c.braceNest > 0)
      return Ye(i, c) || O(c);
    if (c.inLinked)
      return Oe(i, c) || O(c);
    switch (i.currentChar()) {
      case "{":
        return Ye(i, c) || O(c);
      case "}":
        return C(D.UNBALANCED_CLOSING_BRACE, a(), 0), i.next(), p(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Oe(i, c) || O(c);
      default: {
        if (X(i))
          return N = p(c, 1, He(i)), c.braceNest = 0, c.inLinked = !1, N;
        if (ie(i))
          return p(c, 0, bt(i));
        break;
      }
    }
    return N;
  }
  function St() {
    const { currentType: i, offset: c, startLoc: N, endLoc: k } = u;
    return u.lastType = i, u.lastOffset = c, u.lastStartLoc = N, u.lastEndLoc = k, u.offset = r(), u.startLoc = a(), s.currentChar() === he ? p(
      u,
      13
      /* TokenTypes.EOF */
    ) : Ke(s, u);
  }
  return {
    nextToken: St,
    currentOffset: r,
    currentPosition: a,
    context: m
  };
}
const Sr = "parser", Dr = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Pr(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const s = parseInt(t || n, 16);
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�";
    }
  }
}
function Rr(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function s(f, _, v, E, ...T) {
    const I = f.currentPosition();
    if (I.offset += E, I.column += E, n) {
      const g = t ? wt(v, I) : null, M = Be(_, g, {
        domain: Sr,
        args: T
      });
      n(M);
    }
  }
  function r(f, _, v) {
    const E = { type: f };
    return t && (E.start = _, E.end = _, E.loc = { start: v, end: v }), E;
  }
  function a(f, _, v, E) {
    t && (f.end = _, f.loc && (f.loc.end = v));
  }
  function l(f, _) {
    const v = f.context(), E = r(3, v.offset, v.startLoc);
    return E.value = _, a(E, f.currentOffset(), f.currentPosition()), E;
  }
  function o(f, _) {
    const v = f.context(), { lastOffset: E, lastStartLoc: T } = v, I = r(5, E, T);
    return I.index = parseInt(_, 10), f.nextToken(), a(I, f.currentOffset(), f.currentPosition()), I;
  }
  function u(f, _) {
    const v = f.context(), { lastOffset: E, lastStartLoc: T } = v, I = r(4, E, T);
    return I.key = _, f.nextToken(), a(I, f.currentOffset(), f.currentPosition()), I;
  }
  function m(f, _) {
    const v = f.context(), { lastOffset: E, lastStartLoc: T } = v, I = r(9, E, T);
    return I.value = _.replace(Dr, Pr), f.nextToken(), a(I, f.currentOffset(), f.currentPosition()), I;
  }
  function h(f) {
    const _ = f.nextToken(), v = f.context(), { lastOffset: E, lastStartLoc: T } = v, I = r(8, E, T);
    return _.type !== 11 ? (s(f, D.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), I.value = "", a(I, E, T), {
      nextConsumeToken: _,
      node: I
    }) : (_.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, fe(_)), I.value = _.value || "", a(I, f.currentOffset(), f.currentPosition()), {
      node: I
    });
  }
  function C(f, _) {
    const v = f.context(), E = r(7, v.offset, v.startLoc);
    return E.value = _, a(E, f.currentOffset(), f.currentPosition()), E;
  }
  function p(f) {
    const _ = f.context(), v = r(6, _.offset, _.startLoc);
    let E = f.nextToken();
    if (E.type === 8) {
      const T = h(f);
      v.modifier = T.node, E = T.nextConsumeToken || f.nextToken();
    }
    switch (E.type !== 9 && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe(E)), E = f.nextToken(), E.type === 2 && (E = f.nextToken()), E.type) {
      case 10:
        E.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe(E)), v.key = C(f, E.value || "");
        break;
      case 4:
        E.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe(E)), v.key = u(f, E.value || "");
        break;
      case 5:
        E.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe(E)), v.key = o(f, E.value || "");
        break;
      case 6:
        E.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe(E)), v.key = m(f, E.value || "");
        break;
      default: {
        s(f, D.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const T = f.context(), I = r(7, T.offset, T.startLoc);
        return I.value = "", a(I, T.offset, T.startLoc), v.key = I, a(v, T.offset, T.startLoc), {
          nextConsumeToken: E,
          node: v
        };
      }
    }
    return a(v, f.currentOffset(), f.currentPosition()), {
      node: v
    };
  }
  function O(f) {
    const _ = f.context(), v = _.currentType === 1 ? f.currentOffset() : _.offset, E = _.currentType === 1 ? _.endLoc : _.startLoc, T = r(2, v, E);
    T.items = [];
    let I = null;
    do {
      const $ = I || f.nextToken();
      switch (I = null, $.type) {
        case 0:
          $.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe($)), T.items.push(l(f, $.value || ""));
          break;
        case 5:
          $.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe($)), T.items.push(o(f, $.value || ""));
          break;
        case 4:
          $.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe($)), T.items.push(u(f, $.value || ""));
          break;
        case 6:
          $.value == null && s(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, fe($)), T.items.push(m(f, $.value || ""));
          break;
        case 7: {
          const X = p(f);
          T.items.push(X.node), I = X.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 13 && _.currentType !== 1);
    const g = _.currentType === 1 ? _.lastOffset : f.currentOffset(), M = _.currentType === 1 ? _.lastEndLoc : f.currentPosition();
    return a(T, g, M), T;
  }
  function S(f, _, v, E) {
    const T = f.context();
    let I = E.items.length === 0;
    const g = r(1, _, v);
    g.cases = [], g.cases.push(E);
    do {
      const M = O(f);
      I || (I = M.items.length === 0), g.cases.push(M);
    } while (T.currentType !== 13);
    return I && s(f, D.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), a(g, f.currentOffset(), f.currentPosition()), g;
  }
  function A(f) {
    const _ = f.context(), { offset: v, startLoc: E } = _, T = O(f);
    return _.currentType === 13 ? T : S(f, v, E, T);
  }
  function y(f) {
    const _ = kr(f, Z({}, e)), v = _.context(), E = r(0, v.offset, v.startLoc);
    return t && E.loc && (E.loc.source = f), E.body = A(_), e.onCacheKey && (E.cacheKey = e.onCacheKey(f)), v.currentType !== 13 && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, f[v.offset] || ""), a(E, _.currentOffset(), _.currentPosition()), E;
  }
  return { parse: y };
}
function fe(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Mr(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Nn(e, t) {
  for (let n = 0; n < e.length; n++)
    nn(e[n], t);
}
function nn(e, t) {
  switch (e.type) {
    case 1:
      Nn(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Nn(e.items, t);
      break;
    case 6: {
      nn(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function Fr(e, t = {}) {
  const n = Mr(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && nn(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function wr(e) {
  const t = e.body;
  return t.type === 2 ? hn(t) : t.cases.forEach((n) => hn(n)), e;
}
function hn(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const s = e.items[n];
      if (!(s.type === 3 || s.type === 9) || s.value == null)
        break;
      t.push(s.value);
    }
    if (t.length === e.items.length) {
      e.static = en(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const Ur = "minifier";
function Ue(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ue(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        Ue(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        Ue(n[s]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      Ue(t.key), t.k = t.key, delete t.key, t.modifier && (Ue(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      if (process.env.NODE_ENV !== "production")
        throw Be(D.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: Ur,
          args: [e.type]
        });
  }
  delete e.type;
}
const Vr = "parser";
function $r(e, t) {
  const { sourceMap: n, filename: s, breakLineCode: r, needIndent: a } = t, l = t.location !== !1, o = {
    filename: s,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: a,
    indentLevel: 0
  };
  l && e.loc && (o.source = e.loc.source);
  const u = () => o;
  function m(y, f) {
    o.code += y;
  }
  function h(y, f = !0) {
    const _ = f ? r : "";
    m(a ? _ + "  ".repeat(y) : _);
  }
  function C(y = !0) {
    const f = ++o.indentLevel;
    y && h(f);
  }
  function p(y = !0) {
    const f = --o.indentLevel;
    y && h(f);
  }
  function O() {
    h(o.indentLevel);
  }
  return {
    context: u,
    push: m,
    indent: C,
    deindent: p,
    newline: O,
    helper: (y) => `_${y}`,
    needIndent: () => o.needIndent
  };
}
function Wr(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), We(e, t.key), t.modifier ? (e.push(", "), We(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Gr(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const r = t.items.length;
  for (let a = 0; a < r && (We(e, t.items[a]), a !== r - 1); a++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function Br(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const r = t.cases.length;
    for (let a = 0; a < r && (We(e, t.cases[a]), a !== r - 1); a++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function xr(e, t) {
  t.body ? We(e, t.body) : e.push("null");
}
function We(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      xr(e, t);
      break;
    case 1:
      Br(e, t);
      break;
    case 2:
      Gr(e, t);
      break;
    case 6:
      Wr(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw Be(D.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: Vr,
          args: [t.type]
        });
  }
}
const Hr = (e, t = {}) => {
  const n = L(t.mode) ? t.mode : "normal", s = L(t.filename) ? t.filename : "message.intl", r = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], u = $r(e, {
    mode: n,
    filename: s,
    sourceMap: r,
    breakLineCode: a,
    needIndent: l
  });
  u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(l), o.length > 0 && (u.push(`const { ${en(o.map((C) => `${C}: _${C}`), ", ")} } = ctx`), u.newline()), u.push("return "), We(u, e), u.deindent(l), u.push("}"), delete e.helpers;
  const { code: m, map: h } = u.context();
  return {
    ast: e,
    code: m,
    map: h ? h.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Yr(e, t = {}) {
  const n = Z({}, t), s = !!n.jit, r = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Rr(n).parse(e);
  return s ? (a && wr(o), r && Ue(o), { ast: o, code: "" }) : (Fr(o, n), Hr(o, n));
}
/*!
  * core-base v10.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Kr() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ke().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ke().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Dt(e) {
  return (n) => jr(n, e);
}
function jr(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const s = n, r = s.c || s.cases;
    return e.plural(r.reduce((a, l) => [
      ...a,
      Cn(e, l)
    ], []));
  } else
    return Cn(e, n);
}
function Cn(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = (t.i || t.items).reduce((r, a) => [...r, Ut(e, a)], []);
    return e.normalize(s);
  }
}
function Ut(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const s = t;
      return s.v || s.value;
    }
    case 9: {
      const s = t;
      return s.v || s.value;
    }
    case 4: {
      const s = t;
      return e.interpolate(e.named(s.k || s.key));
    }
    case 5: {
      const s = t;
      return e.interpolate(e.list(s.i != null ? s.i : s.index));
    }
    case 6: {
      const s = t, r = s.m || s.modifier;
      return e.linked(Ut(e, s.k || s.key), r ? Ut(e, r) : void 0, e.type);
    }
    case 7: {
      const s = t;
      return s.v || s.value;
    }
    case 8: {
      const s = t;
      return s.v || s.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const Xr = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function qr(e, t) {
  t && vr(e) && Te(ut(Xr, { source: e }));
}
const Jr = (e) => e;
let at = /* @__PURE__ */ Object.create(null);
const Le = (e) => U(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Zr(e, t = {}) {
  let n = !1;
  const s = t.onError || Cr;
  return t.onError = (r) => {
    n = !0, s(r);
  }, { ...Yr(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Qr(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && L(e)) {
    const n = w(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && qr(e, n);
    const r = (t.onCacheKey || Jr)(e), a = at[r];
    if (a)
      return a;
    const { ast: l, detectError: o } = Zr(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = Dt(l);
    return o ? u : at[r] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !Le(e))
      return Te(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const s = at[n];
      return s || (at[n] = Dt(e));
    } else
      return Dt(e);
  }
}
let qe = null;
function zr(e) {
  qe = e;
}
function ea(e, t, n) {
  qe && qe.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const ta = /* @__PURE__ */ na("function:translate");
function na(e) {
  return (t) => qe && qe.emit(e, t);
}
const z = {
  INVALID_ARGUMENT: Nr,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, sa = 24;
function ge(e) {
  return Be(e, null, process.env.NODE_ENV !== "production" ? { messages: ra } : void 0);
}
const ra = {
  [z.INVALID_ARGUMENT]: "Invalid arguments",
  [z.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [z.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [z.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [z.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [z.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [z.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function sn(e, t) {
  return t.locale != null ? bn(t.locale) : bn(e.locale);
}
let Pt;
function bn(e) {
  if (L(e))
    return e;
  if (x(e)) {
    if (e.resolvedOnce && Pt != null)
      return Pt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (mr(t))
        throw ge(z.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Pt = t;
    } else
      throw ge(z.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ge(z.NOT_SUPPORT_LOCALE_TYPE);
}
function aa(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...H(t) ? t : U(t) ? Object.keys(t) : L(t) ? [t] : [n]
  ])];
}
function ts(e, t, n) {
  const s = L(n) ? n : Je, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let a = r.__localeChainCache.get(s);
  if (!a) {
    a = [];
    let l = [n];
    for (; H(l); )
      l = vn(a, l, t);
    const o = H(t) || !R(t) ? t : t.default ? t.default : null;
    l = L(o) ? [o] : o, H(l) && vn(a, l, !1), r.__localeChainCache.set(s, a);
  }
  return a;
}
function vn(e, t, n) {
  let s = !0;
  for (let r = 0; r < t.length && w(s); r++) {
    const a = t[r];
    L(a) && (s = la(e, t[r], n));
  }
  return s;
}
function la(e, t, n) {
  let s;
  const r = t.split("-");
  do {
    const a = r.join("-");
    s = oa(e, a, n), r.splice(-1, 1);
  } while (r.length && s === !0);
  return s;
}
function oa(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (H(n) || R(n)) && n[r] && (s = n[r]);
  }
  return s;
}
const Ie = [];
Ie[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ie[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ie[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Ie[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Ie[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Ie[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Ie[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const ia = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ca(e) {
  return ia.test(e);
}
function ua(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function fa(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function _a(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : ca(t) ? ua(t) : "*" + t;
}
function da(e) {
  const t = [];
  let n = -1, s = 0, r = 0, a, l, o, u, m, h, C;
  const p = [];
  p[
    0
    /* Actions.APPEND */
  ] = () => {
    l === void 0 ? l = o : l += o;
  }, p[
    1
    /* Actions.PUSH */
  ] = () => {
    l !== void 0 && (t.push(l), l = void 0);
  }, p[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    p[
      0
      /* Actions.APPEND */
    ](), r++;
  }, p[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, s = 4, p[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, l === void 0 || (l = _a(l), l === !1))
        return !1;
      p[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function O() {
    const S = e[n + 1];
    if (s === 5 && S === "'" || s === 6 && S === '"')
      return n++, o = "\\" + S, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, a = e[n], !(a === "\\" && O())) {
      if (u = fa(a), C = Ie[s], m = C[u] || C.l || 8, m === 8 || (s = m[0], m[1] !== void 0 && (h = p[m[1]], h && (o = a, h() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const Ln = /* @__PURE__ */ new Map();
function ma(e, t) {
  return U(e) ? e[t] : null;
}
function pa(e, t) {
  if (!U(e))
    return null;
  let n = Ln.get(t);
  if (n || (n = da(t), n && Ln.set(t, n)), !n)
    return null;
  const s = n.length;
  let r = e, a = 0;
  for (; a < s; ) {
    const l = r[n[a]];
    if (l === void 0 || x(r))
      return null;
    r = l, a++;
  }
  return r;
}
const ne = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Ea = 8, ga = {
  [ne.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ne.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ne.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ne.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ne.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ne.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ne.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Pe(e, ...t) {
  return ut(ga[e], ...t);
}
const Na = "10.0.1", _t = -1, Je = "en-US", it = "", Tn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function ha() {
  return {
    upper: (e, t) => t === "text" && L(e) ? e.toUpperCase() : t === "vnode" && U(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && L(e) ? e.toLowerCase() : t === "vnode" && U(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && L(e) ? Tn(e) : t === "vnode" && U(e) && "__v_isVNode" in e ? Tn(e.children) : e
  };
}
let ns;
function Ca(e) {
  ns = e;
}
let ss;
function ba(e) {
  ss = e;
}
let rs;
function va(e) {
  rs = e;
}
let as = null;
const La = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  as = e;
}, Ta = /* @__NO_SIDE_EFFECTS__ */ () => as;
let ls = null;
const In = (e) => {
  ls = e;
}, Ia = () => ls;
let On = 0;
function Oa(e = {}) {
  const t = x(e.onWarn) ? e.onWarn : Te, n = L(e.version) ? e.version : Na, s = L(e.locale) || x(e.locale) ? e.locale : Je, r = x(s) ? Je : s, a = H(e.fallbackLocale) || R(e.fallbackLocale) || L(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, l = R(e.messages) ? e.messages : { [r]: {} }, o = R(e.datetimeFormats) ? e.datetimeFormats : { [r]: {} }, u = R(e.numberFormats) ? e.numberFormats : { [r]: {} }, m = Z({}, e.modifiers || {}, ha()), h = e.pluralRules || {}, C = x(e.missing) ? e.missing : null, p = w(e.missingWarn) || $e(e.missingWarn) ? e.missingWarn : !0, O = w(e.fallbackWarn) || $e(e.fallbackWarn) ? e.fallbackWarn : !0, S = !!e.fallbackFormat, A = !!e.unresolving, y = x(e.postTranslation) ? e.postTranslation : null, f = R(e.processor) ? e.processor : null, _ = w(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter, E = x(e.messageCompiler) ? e.messageCompiler : ns;
  process.env.NODE_ENV !== "production" && x(e.messageCompiler) && es(Pe(ne.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const T = x(e.messageResolver) ? e.messageResolver : ss || ma, I = x(e.localeFallbacker) ? e.localeFallbacker : rs || aa, g = U(e.fallbackContext) ? e.fallbackContext : void 0, M = e, $ = U(M.__datetimeFormatters) ? M.__datetimeFormatters : /* @__PURE__ */ new Map(), X = U(M.__numberFormatters) ? M.__numberFormatters : /* @__PURE__ */ new Map(), ie = U(M.__meta) ? M.__meta : {};
  On++;
  const q = {
    version: n,
    cid: On,
    locale: s,
    fallbackLocale: a,
    messages: l,
    modifiers: m,
    pluralRules: h,
    missing: C,
    missingWarn: p,
    fallbackWarn: O,
    fallbackFormat: S,
    unresolving: A,
    postTranslation: y,
    processor: f,
    warnHtmlMessage: _,
    escapeParameter: v,
    messageCompiler: E,
    messageResolver: T,
    localeFallbacker: I,
    fallbackContext: g,
    onWarn: t,
    __meta: ie
  };
  return q.datetimeFormats = o, q.numberFormats = u, q.__datetimeFormatters = $, q.__numberFormatters = X, process.env.NODE_ENV !== "production" && (q.__v_emitter = M.__v_emitter != null ? M.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && ea(q, n, ie), q;
}
function dt(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function os(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function rn(e, t, n, s, r) {
  const { missing: a, onWarn: l } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = e.__v_emitter;
    o && o.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (a !== null) {
    const o = a(e, n, t, r);
    return L(o) ? o : t;
  } else
    return process.env.NODE_ENV !== "production" && os(s, t) && l(Pe(ne.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function je(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function is(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function ya(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (is(e, t[s]))
      return !0;
  return !1;
}
const yn = typeof Intl < "u", cs = {
  dateTimeFormat: yn && typeof Intl.DateTimeFormat < "u",
  numberFormat: yn && typeof Intl.NumberFormat < "u"
};
function An(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: r, onWarn: a, localeFallbacker: l } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !cs.dateTimeFormat)
    return a(Pe(ne.CANNOT_FORMAT_DATE)), it;
  const [u, m, h, C] = Vt(...t), p = w(h.missingWarn) ? h.missingWarn : e.missingWarn, O = w(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, S = !!h.part, A = sn(e, h), y = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    A
  );
  if (!L(u) || u === "")
    return new Intl.DateTimeFormat(A, C).format(m);
  let f = {}, _, v = null, E = A, T = null;
  const I = "datetime format";
  for (let $ = 0; $ < y.length; $++) {
    if (_ = T = y[$], process.env.NODE_ENV !== "production" && A !== _ && dt(O, u) && a(Pe(ne.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: _
    })), process.env.NODE_ENV !== "production" && A !== _) {
      const X = e.__v_emitter;
      X && X.emit("fallback", {
        type: I,
        key: u,
        from: E,
        to: T,
        groupId: `${I}:${u}`
      });
    }
    if (f = n[_] || {}, v = f[u], R(v))
      break;
    rn(e, u, _, p, I), E = T;
  }
  if (!R(v) || !L(_))
    return s ? _t : u;
  let g = `${_}__${u}`;
  ft(C) || (g = `${g}__${JSON.stringify(C)}`);
  let M = o.get(g);
  return M || (M = new Intl.DateTimeFormat(_, Z({}, v, C)), o.set(g, M)), S ? M.formatToParts(m) : M.format(m);
}
const us = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Vt(...e) {
  const [t, n, s, r] = e, a = {};
  let l = {}, o;
  if (L(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw ge(z.INVALID_ISO_DATE_ARGUMENT);
    const m = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    o = new Date(m);
    try {
      o.toISOString();
    } catch {
      throw ge(z.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (_r(t)) {
    if (isNaN(t.getTime()))
      throw ge(z.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (J(t))
    o = t;
  else
    throw ge(z.INVALID_ARGUMENT);
  return L(n) ? a.key = n : R(n) && Object.keys(n).forEach((u) => {
    us.includes(u) ? l[u] = n[u] : a[u] = n[u];
  }), L(s) ? a.locale = s : R(s) && (l = s), R(r) && (l = r), [a.key || "", o, a, l];
}
function kn(e, t, n) {
  const s = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    s.__datetimeFormatters.has(a) && s.__datetimeFormatters.delete(a);
  }
}
function Sn(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: r, onWarn: a, localeFallbacker: l } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !cs.numberFormat)
    return a(Pe(ne.CANNOT_FORMAT_NUMBER)), it;
  const [u, m, h, C] = $t(...t), p = w(h.missingWarn) ? h.missingWarn : e.missingWarn, O = w(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, S = !!h.part, A = sn(e, h), y = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    A
  );
  if (!L(u) || u === "")
    return new Intl.NumberFormat(A, C).format(m);
  let f = {}, _, v = null, E = A, T = null;
  const I = "number format";
  for (let $ = 0; $ < y.length; $++) {
    if (_ = T = y[$], process.env.NODE_ENV !== "production" && A !== _ && dt(O, u) && a(Pe(ne.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: _
    })), process.env.NODE_ENV !== "production" && A !== _) {
      const X = e.__v_emitter;
      X && X.emit("fallback", {
        type: I,
        key: u,
        from: E,
        to: T,
        groupId: `${I}:${u}`
      });
    }
    if (f = n[_] || {}, v = f[u], R(v))
      break;
    rn(e, u, _, p, I), E = T;
  }
  if (!R(v) || !L(_))
    return s ? _t : u;
  let g = `${_}__${u}`;
  ft(C) || (g = `${g}__${JSON.stringify(C)}`);
  let M = o.get(g);
  return M || (M = new Intl.NumberFormat(_, Z({}, v, C)), o.set(g, M)), S ? M.formatToParts(m) : M.format(m);
}
const fs = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function $t(...e) {
  const [t, n, s, r] = e, a = {};
  let l = {};
  if (!J(t))
    throw ge(z.INVALID_ARGUMENT);
  const o = t;
  return L(n) ? a.key = n : R(n) && Object.keys(n).forEach((u) => {
    fs.includes(u) ? l[u] = n[u] : a[u] = n[u];
  }), L(s) ? a.locale = s : R(s) && (l = s), R(r) && (l = r), [a.key || "", o, a, l];
}
function Dn(e, t, n) {
  const s = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    s.__numberFormatters.has(a) && s.__numberFormatters.delete(a);
  }
}
const Aa = (e) => e, ka = (e) => "", Sa = "text", Da = (e) => e.length === 0 ? "" : en(e), Pa = pr;
function Pn(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ra(e) {
  const t = J(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (J(e.named.count) || J(e.named.n)) ? J(e.named.count) ? e.named.count : J(e.named.n) ? e.named.n : t : t;
}
function Ma(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Fa(e = {}) {
  const t = e.locale, n = Ra(e), s = U(e.pluralRules) && L(t) && x(e.pluralRules[t]) ? e.pluralRules[t] : Pn, r = U(e.pluralRules) && L(t) && x(e.pluralRules[t]) ? Pn : void 0, a = (f) => f[s(n, f.length, r)], l = e.list || [], o = (f) => l[f], u = e.named || {};
  J(e.pluralIndex) && Ma(n, u);
  const m = (f) => u[f];
  function h(f, _) {
    const v = x(e.messages) ? e.messages(f, !!_) : U(e.messages) ? e.messages[f] : !1;
    return v || (e.parent ? e.parent.message(f) : ka);
  }
  const C = (f) => e.modifiers ? e.modifiers[f] : Aa, p = R(e.processor) && x(e.processor.normalize) ? e.processor.normalize : Da, O = R(e.processor) && x(e.processor.interpolate) ? e.processor.interpolate : Pa, S = R(e.processor) && L(e.processor.type) ? e.processor.type : Sa, y = {
    list: o,
    named: m,
    plural: a,
    linked: (f, ..._) => {
      const [v, E] = _;
      let T = "text", I = "";
      _.length === 1 ? U(v) ? (I = v.modifier || I, T = v.type || T) : L(v) && (I = v || I) : _.length === 2 && (L(v) && (I = v || I), L(E) && (T = E || T));
      const g = h(f, !0)(y), M = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && H(g) && I ? g[0] : g
      );
      return I ? C(I)(M, T) : M;
    },
    message: h,
    type: S,
    interpolate: O,
    normalize: p,
    values: Z({}, l, u)
  };
  return y;
}
const Rn = () => "", ae = (e) => x(e);
function Mn(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: r, messageCompiler: a, fallbackLocale: l, messages: o } = e, [u, m] = Wt(...t), h = w(m.missingWarn) ? m.missingWarn : e.missingWarn, C = w(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, p = w(m.escapeParameter) ? m.escapeParameter : e.escapeParameter, O = !!m.resolvedMessage, S = L(m.default) || w(m.default) ? w(m.default) ? a ? u : () => u : m.default : n ? a ? u : () => u : null, A = n || S != null && (L(S) || x(S)), y = sn(e, m);
  p && wa(m);
  let [f, _, v] = O ? [
    u,
    y,
    o[y] || {}
  ] : _s(e, u, y, l, C, h), E = f, T = u;
  if (!O && !(L(E) || Le(E) || ae(E)) && A && (E = S, T = E), !O && (!(L(E) || Le(E) || ae(E)) || !L(_)))
    return r ? _t : u;
  if (process.env.NODE_ENV !== "production" && L(E) && e.messageCompiler == null)
    return Te(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let I = !1;
  const g = () => {
    I = !0;
  }, M = ae(E) ? E : ds(e, u, _, E, T, g);
  if (I)
    return E;
  const $ = Wa(e, _, v, m), X = Fa($), ie = Ua(e, M, X), q = s ? s(ie, u) : ie;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Me = {
      timestamp: Date.now(),
      key: L(u) ? u : ae(E) ? E.key : "",
      locale: _ || (ae(E) ? E.locale : ""),
      format: L(E) ? E : ae(E) ? E.source : "",
      message: q
    };
    Me.meta = Z({}, e.__meta, /* @__PURE__ */ Ta() || {}), ta(Me);
  }
  return q;
}
function wa(e) {
  H(e.list) ? e.list = e.list.map((t) => L(t) ? mn(t) : t) : U(e.named) && Object.keys(e.named).forEach((t) => {
    L(e.named[t]) && (e.named[t] = mn(e.named[t]));
  });
}
function _s(e, t, n, s, r, a) {
  const { messages: l, onWarn: o, messageResolver: u, localeFallbacker: m } = e, h = m(e, s, n);
  let C = {}, p, O = null, S = n, A = null;
  const y = "translate";
  for (let f = 0; f < h.length; f++) {
    if (p = A = h[f], process.env.NODE_ENV !== "production" && n !== p && !is(n, p) && dt(r, t) && o(Pe(ne.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && n !== p) {
      const T = e.__v_emitter;
      T && T.emit("fallback", {
        type: y,
        key: t,
        from: S,
        to: A,
        groupId: `${y}:${t}`
      });
    }
    C = l[p] || {};
    let _ = null, v, E;
    if (process.env.NODE_ENV !== "production" && ue && (_ = window.performance.now(), v = "intlify-message-resolve-start", E = "intlify-message-resolve-end", re && re(v)), (O = u(C, t)) === null && (O = C[t]), process.env.NODE_ENV !== "production" && ue) {
      const T = window.performance.now(), I = e.__v_emitter;
      I && _ && O && I.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: O,
        time: T - _,
        groupId: `${y}:${t}`
      }), v && E && re && De && (re(E), De("intlify message resolve", v, E));
    }
    if (L(O) || Le(O) || ae(O))
      break;
    if (!ya(p, h)) {
      const T = rn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        a,
        y
      );
      T !== t && (O = T);
    }
    S = A;
  }
  return [O, p, C];
}
function ds(e, t, n, s, r, a) {
  const { messageCompiler: l, warnHtmlMessage: o } = e;
  if (ae(s)) {
    const p = s;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (l == null) {
    const p = () => s;
    return p.locale = n, p.key = t, p;
  }
  let u = null, m, h;
  process.env.NODE_ENV !== "production" && ue && (u = window.performance.now(), m = "intlify-message-compilation-start", h = "intlify-message-compilation-end", re && re(m));
  const C = l(s, Va(e, n, r, s, o, a));
  if (process.env.NODE_ENV !== "production" && ue) {
    const p = window.performance.now(), O = e.__v_emitter;
    O && u && O.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: p - u,
      groupId: `translate:${t}`
    }), m && h && re && De && (re(h), De("intlify message compilation", m, h));
  }
  return C.locale = n, C.key = t, C.source = s, C;
}
function Ua(e, t, n) {
  let s = null, r, a;
  process.env.NODE_ENV !== "production" && ue && (s = window.performance.now(), r = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", re && re(r));
  const l = t(n);
  if (process.env.NODE_ENV !== "production" && ue) {
    const o = window.performance.now(), u = e.__v_emitter;
    u && s && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: l,
      time: o - s,
      groupId: `translate:${t.key}`
    }), r && a && re && De && (re(a), De("intlify message evaluation", r, a));
  }
  return l;
}
function Wt(...e) {
  const [t, n, s] = e, r = {};
  if (!L(t) && !J(t) && !ae(t) && !Le(t))
    throw ge(z.INVALID_ARGUMENT);
  const a = J(t) ? String(t) : (ae(t), t);
  return J(n) ? r.plural = n : L(n) ? r.default = n : R(n) && !ft(n) ? r.named = n : H(n) && (r.list = n), J(s) ? r.plural = s : L(s) ? r.default = s : R(s) && Z(r, s), [a, r];
}
function Va(e, t, n, s, r, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (l) => {
      if (a && a(l), process.env.NODE_ENV !== "production") {
        const o = $a(s), u = `Message compilation error: ${l.message}`, m = l.location && o && Er(o, l.location.start.offset, l.location.end.offset), h = e.__v_emitter;
        h && o && h.emit("compile-error", {
          message: o,
          error: l.message,
          start: l.location && l.location.start.offset,
          end: l.location && l.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(m ? `${u}
${m}` : u);
      } else
        throw l;
    },
    onCacheKey: (l) => ur(t, n, l)
  };
}
function $a(e) {
  if (L(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Wa(e, t, n, s) {
  const { modifiers: r, pluralRules: a, messageResolver: l, fallbackLocale: o, fallbackWarn: u, missingWarn: m, fallbackContext: h } = e, p = {
    locale: t,
    modifiers: r,
    pluralRules: a,
    messages: (O, S) => {
      let A = l(n, O);
      if (A == null && (h || S)) {
        const [, , y] = _s(
          h || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          O,
          t,
          o,
          u,
          m
        );
        A = l(y, O);
      }
      if (L(A) || Le(A)) {
        let y = !1;
        const _ = ds(e, O, t, A, O, () => {
          y = !0;
        });
        return y ? Rn : _;
      } else return ae(A) ? A : Rn;
    }
  };
  return e.processor && (p.processor = e.processor), s.list && (p.list = s.list), s.named && (p.named = s.named), J(s.plural) && (p.pluralIndex = s.plural), p;
}
Kr();
function Ga() {
  return ms().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ms() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Ba = typeof Proxy == "function", xa = "devtools-plugin:setup", Ha = "plugin:settings:set";
let we, Gt;
function Ya() {
  var e;
  return we !== void 0 || (typeof window < "u" && window.performance ? (we = !0, Gt = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (we = !0, Gt = globalThis.perf_hooks.performance) : we = !1), we;
}
function Ka() {
  return Ya() ? Gt.now() : Date.now();
}
class ja {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const l in t.settings) {
        const o = t.settings[l];
        s[l] = o.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, s);
    try {
      const l = localStorage.getItem(r), o = JSON.parse(l);
      Object.assign(a, o);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(l) {
        try {
          localStorage.setItem(r, JSON.stringify(l));
        } catch {
        }
        a = l;
      },
      now() {
        return Ka();
      }
    }, n && n.on(Ha, (l, o) => {
      l === this.plugin.id && this.fallbacks.setSettings(o);
    }), this.proxiedOn = new Proxy({}, {
      get: (l, o) => this.target ? this.target.on[o] : (...u) => {
        this.onQueue.push({
          method: o,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (l, o) => this.target ? this.target[o] : o === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(o) ? (...u) => (this.targetQueue.push({
        method: o,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[o](...u)) : (...u) => new Promise((m) => {
        this.targetQueue.push({
          method: o,
          args: u,
          resolve: m
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Xa(e, t) {
  const n = e, s = ms(), r = Ga(), a = Ba && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    r.emit(xa, e, t);
  else {
    const l = a ? new ja(n, r) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: l
    }), l && t(l.proxiedTarget);
  }
}
/*!
  * vue-i18n v10.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const qa = "10.0.1";
function Ja() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ke().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ke().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ke().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ke().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ve = {
  FALLBACK_TO_ROOT: Ea,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  DEPRECATE_TC: 11
}, Za = {
  [ve.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ve.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ve.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [ve.DEPRECATE_TC]: "'tc' and '$tc' has been deprecated in v10. Use 't' or '$t' instead. 'tc' and '$tc’ are going to remove in v11."
};
function mt(e, ...t) {
  return ut(Za[e], ...t);
}
const B = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: sa,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function te(e, ...t) {
  return Be(e, null, process.env.NODE_ENV !== "production" ? { messages: Qa, args: t } : void 0);
}
const Qa = {
  [B.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [B.INVALID_ARGUMENT]: "Invalid argument",
  [B.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [B.NOT_INSTALLED]: "Need to install with `app.use` function",
  [B.UNEXPECTED_ERROR]: "Unexpected error",
  [B.REQUIRED_VALUE]: "Required in value: {0}",
  [B.INVALID_VALUE]: "Invalid value",
  [B.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [B.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [B.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [B.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Bt = /* @__PURE__ */ me("__translateVNode"), xt = /* @__PURE__ */ me("__datetimeParts"), Ht = /* @__PURE__ */ me("__numberParts"), Re = /* @__PURE__ */ me("__enableEmitter"), Ze = /* @__PURE__ */ me("__disableEmitter"), ps = me("__setPluralRules"), Es = /* @__PURE__ */ me("__injectWithOption"), Yt = /* @__PURE__ */ me("__dispose");
function Qe(e) {
  if (!U(e))
    return e;
  for (const t in e)
    if (ot(e, t))
      if (!t.includes("."))
        U(e[t]) && Qe(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let r = e, a = !1;
        for (let l = 0; l < s; l++) {
          if (n[l] in r || (r[n[l]] = {}), !U(r[n[l]])) {
            process.env.NODE_ENV !== "production" && Te(mt(ve.IGNORE_OBJ_FLATTEN, {
              key: n[l]
            })), a = !0;
            break;
          }
          r = r[n[l]];
        }
        a || (r[n[s]] = e[t], delete e[t]), U(r[n[s]]) && Qe(r[n[s]]);
      }
  return e;
}
function an(e, t) {
  const { messages: n, __i18n: s, messageResolver: r, flatJson: a } = t, l = R(n) ? n : H(s) ? {} : { [e]: {} };
  if (H(s) && s.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: u, resource: m } = o;
      u ? (l[u] = l[u] || {}, lt(m, l[u])) : lt(m, l);
    } else
      L(o) && lt(JSON.parse(o), l);
  }), r == null && a)
    for (const o in l)
      ot(l, o) && Qe(l[o]);
  return l;
}
function gs(e) {
  return e.type;
}
function Ns(e, t, n) {
  let s = U(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (s = an(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(s);
  r.length && r.forEach((a) => {
    e.mergeLocaleMessage(a, s[a]);
  });
  {
    if (U(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((l) => {
        e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
      });
    }
    if (U(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((l) => {
        e.mergeNumberFormat(l, t.numberFormats[l]);
      });
    }
  }
}
function Fn(e) {
  return Zn(Ps, null, e, 0);
}
const wn = "__INTLIFY_META__", Un = () => [], za = () => !1;
let Vn = 0;
function $n(e) {
  return (t, n, s, r) => e(n, s, Xe() || void 0, r);
}
const el = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Xe();
  let t = null;
  return e && (t = gs(e)[wn]) ? { [wn]: t } : null;
};
function ln(e = {}) {
  const { __root: t, __injectWithOption: n } = e, s = t === void 0, r = e.flatJson, a = ue ? be : Ds;
  let l = w(e.inheritLocale) ? e.inheritLocale : !0;
  const o = a(
    // prettier-ignore
    t && l ? t.locale.value : L(e.locale) ? e.locale : Je
  ), u = a(
    // prettier-ignore
    t && l ? t.fallbackLocale.value : L(e.fallbackLocale) || H(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), m = a(an(o.value, e)), h = a(R(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), C = a(R(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let p = t ? t.missingWarn : w(e.missingWarn) || $e(e.missingWarn) ? e.missingWarn : !0, O = t ? t.fallbackWarn : w(e.fallbackWarn) || $e(e.fallbackWarn) ? e.fallbackWarn : !0, S = t ? t.fallbackRoot : w(e.fallbackRoot) ? e.fallbackRoot : !0, A = !!e.fallbackFormat, y = x(e.missing) ? e.missing : null, f = x(e.missing) ? $n(e.missing) : null, _ = x(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : w(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const T = t ? t.modifiers : R(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, g;
  g = (() => {
    s && In(null);
    const d = {
      version: qa,
      locale: o.value,
      fallbackLocale: u.value,
      messages: m.value,
      modifiers: T,
      pluralRules: I,
      missing: f === null ? void 0 : f,
      missingWarn: p,
      fallbackWarn: O,
      fallbackFormat: A,
      unresolving: !0,
      postTranslation: _ === null ? void 0 : _,
      warnHtmlMessage: v,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    d.datetimeFormats = h.value, d.numberFormats = C.value, d.__datetimeFormatters = R(g) ? g.__datetimeFormatters : void 0, d.__numberFormatters = R(g) ? g.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (d.__v_emitter = R(g) ? g.__v_emitter : void 0);
    const b = Oa(d);
    return s && In(b), b;
  })(), je(g, o.value, u.value);
  function $() {
    return [
      o.value,
      u.value,
      m.value,
      h.value,
      C.value
    ];
  }
  const X = _e({
    get: () => o.value,
    set: (d) => {
      o.value = d, g.locale = o.value;
    }
  }), ie = _e({
    get: () => u.value,
    set: (d) => {
      u.value = d, g.fallbackLocale = u.value, je(g, o.value, d);
    }
  }), q = _e(() => m.value), Me = /* @__PURE__ */ _e(() => h.value), pt = /* @__PURE__ */ _e(() => C.value);
  function Et() {
    return x(_) ? _ : null;
  }
  function gt(d) {
    _ = d, g.postTranslation = d;
  }
  function Nt() {
    return y;
  }
  function ht(d) {
    d !== null && (f = $n(d)), y = d, g.missing = f;
  }
  function Ct(d, b) {
    return d !== "translate" || !b.resolvedMessage;
  }
  const pe = (d, b, W, j, ye, st) => {
    $();
    let Fe;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (g.fallbackContext = t ? Ia() : void 0), Fe = d(g);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (g.fallbackContext = void 0);
    }
    if (W !== "translate exists" && // for not `te` (e.g `t`)
    J(Fe) && Fe === _t || W === "translate exists" && !Fe) {
      const [Ae, Ts] = b();
      if (process.env.NODE_ENV !== "production" && t && L(Ae) && Ct(W, Ts) && (S && (dt(O, Ae) || os(p, Ae)) && Te(mt(ve.FALLBACK_TO_ROOT, {
        key: Ae,
        type: W
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: _n } = g;
        _n && S && _n.emit("fallback", {
          type: W,
          key: Ae,
          to: "global",
          groupId: `${W}:${Ae}`
        });
      }
      return t && S ? j(t) : ye(Ae);
    } else {
      if (st(Fe))
        return Fe;
      throw te(B.UNEXPECTED_RETURN_TYPE);
    }
  };
  function xe(...d) {
    return pe((b) => Reflect.apply(Mn, null, [b, ...d]), () => Wt(...d), "translate", (b) => Reflect.apply(b.t, b, [...d]), (b) => b, (b) => L(b));
  }
  function bt(...d) {
    const [b, W, j] = d;
    if (j && !U(j))
      throw te(B.INVALID_ARGUMENT);
    return xe(b, W, Z({ resolvedMessage: !0 }, j || {}));
  }
  function vt(...d) {
    return pe((b) => Reflect.apply(An, null, [b, ...d]), () => Vt(...d), "datetime format", (b) => Reflect.apply(b.d, b, [...d]), () => it, (b) => L(b));
  }
  function Lt(...d) {
    return pe((b) => Reflect.apply(Sn, null, [b, ...d]), () => $t(...d), "number format", (b) => Reflect.apply(b.n, b, [...d]), () => it, (b) => L(b));
  }
  function Tt(d) {
    return d.map((b) => L(b) || J(b) || w(b) ? Fn(String(b)) : b);
  }
  const It = {
    normalize: Tt,
    interpolate: (d) => d,
    type: "vnode"
  };
  function nt(...d) {
    return pe((b) => {
      let W;
      const j = b;
      try {
        j.processor = It, W = Reflect.apply(Mn, null, [j, ...d]);
      } finally {
        j.processor = null;
      }
      return W;
    }, () => Wt(...d), "translate", (b) => b[Bt](...d), (b) => [Fn(b)], (b) => H(b));
  }
  function Ot(...d) {
    return pe((b) => Reflect.apply(Sn, null, [b, ...d]), () => $t(...d), "number format", (b) => b[Ht](...d), Un, (b) => L(b) || H(b));
  }
  function yt(...d) {
    return pe((b) => Reflect.apply(An, null, [b, ...d]), () => Vt(...d), "datetime format", (b) => b[xt](...d), Un, (b) => L(b) || H(b));
  }
  function At(d) {
    I = d, g.pluralRules = I;
  }
  function kt(d, b) {
    return pe(() => {
      if (!d)
        return !1;
      const W = L(b) ? b : o.value, j = Oe(W), ye = g.messageResolver(j, d);
      return Le(ye) || ae(ye) || L(ye);
    }, () => [d], "translate exists", (W) => Reflect.apply(W.te, W, [d, b]), za, (W) => w(W));
  }
  function He(d) {
    let b = null;
    const W = ts(g, u.value, o.value);
    for (let j = 0; j < W.length; j++) {
      const ye = m.value[W[j]] || {}, st = g.messageResolver(ye, d);
      if (st != null) {
        b = st;
        break;
      }
    }
    return b;
  }
  function Ye(d) {
    const b = He(d);
    return b ?? (t ? t.tm(d) || {} : {});
  }
  function Oe(d) {
    return m.value[d] || {};
  }
  function Ke(d, b) {
    if (r) {
      const W = { [d]: b };
      for (const j in W)
        ot(W, j) && Qe(W[j]);
      b = W[d];
    }
    m.value[d] = b, g.messages = m.value;
  }
  function St(d, b) {
    m.value[d] = m.value[d] || {};
    const W = { [d]: b };
    if (r)
      for (const j in W)
        ot(W, j) && Qe(W[j]);
    b = W[d], lt(b, m.value[d]), g.messages = m.value;
  }
  function i(d) {
    return h.value[d] || {};
  }
  function c(d, b) {
    h.value[d] = b, g.datetimeFormats = h.value, kn(g, d, b);
  }
  function N(d, b) {
    h.value[d] = Z(h.value[d] || {}, b), g.datetimeFormats = h.value, kn(g, d, b);
  }
  function k(d) {
    return C.value[d] || {};
  }
  function Y(d, b) {
    C.value[d] = b, g.numberFormats = C.value, Dn(g, d, b);
  }
  function K(d, b) {
    C.value[d] = Z(C.value[d] || {}, b), g.numberFormats = C.value, Dn(g, d, b);
  }
  Vn++, t && ue && (Ft(t.locale, (d) => {
    l && (o.value = d, g.locale = d, je(g, o.value, u.value));
  }), Ft(t.fallbackLocale, (d) => {
    l && (u.value = d, g.fallbackLocale = d, je(g, o.value, u.value));
  }));
  const V = {
    id: Vn,
    locale: X,
    fallbackLocale: ie,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(d) {
      l = d, d && t && (o.value = t.locale.value, u.value = t.fallbackLocale.value, je(g, o.value, u.value));
    },
    get availableLocales() {
      return Object.keys(m.value).sort();
    },
    messages: q,
    get modifiers() {
      return T;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(d) {
      p = d, g.missingWarn = p;
    },
    get fallbackWarn() {
      return O;
    },
    set fallbackWarn(d) {
      O = d, g.fallbackWarn = O;
    },
    get fallbackRoot() {
      return S;
    },
    set fallbackRoot(d) {
      S = d;
    },
    get fallbackFormat() {
      return A;
    },
    set fallbackFormat(d) {
      A = d, g.fallbackFormat = A;
    },
    get warnHtmlMessage() {
      return v;
    },
    set warnHtmlMessage(d) {
      v = d, g.warnHtmlMessage = d;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(d) {
      E = d, g.escapeParameter = d;
    },
    t: xe,
    getLocaleMessage: Oe,
    setLocaleMessage: Ke,
    mergeLocaleMessage: St,
    getPostTranslationHandler: Et,
    setPostTranslationHandler: gt,
    getMissingHandler: Nt,
    setMissingHandler: ht,
    [ps]: At
  };
  return V.datetimeFormats = Me, V.numberFormats = pt, V.rt = bt, V.te = kt, V.tm = Ye, V.d = vt, V.n = Lt, V.getDateTimeFormat = i, V.setDateTimeFormat = c, V.mergeDateTimeFormat = N, V.getNumberFormat = k, V.setNumberFormat = Y, V.mergeNumberFormat = K, V[Es] = n, V[Bt] = nt, V[xt] = yt, V[Ht] = Ot, process.env.NODE_ENV !== "production" && (V[Re] = (d) => {
    g.__v_emitter = d;
  }, V[Ze] = () => {
    g.__v_emitter = void 0;
  }), V;
}
const hs = "vue-i18n: composer properties", Rt = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
  "vue-i18n-resource-inspector": "Vue I18n DevTools",
  "vue-i18n-timeline": "Vue I18n"
}, tl = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, nl = {
  "vue-i18n-timeline": 16764185
};
let Kt;
async function sl(e, t) {
  return new Promise((n, s) => {
    try {
      Xa({
        id: "vue-devtools-plugin-vue-i18n",
        label: Rt["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [hs],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (r) => {
        Kt = r, r.on.visitComponentTree(({ componentInstance: l, treeNode: o }) => {
          rl(l, o, t);
        }), r.on.inspectComponent(({ componentInstance: l, instanceData: o }) => {
          l.vnode.el && l.vnode.el.__VUE_I18N__ && o && (t.mode === "legacy" ? l.vnode.el.__VUE_I18N__ !== t.global.__composer && Wn(o, l.vnode.el.__VUE_I18N__) : Wn(o, l.vnode.el.__VUE_I18N__));
        }), r.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Rt["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: tl["vue-i18n-resource-inspector"]
        }), r.on.getInspectorTree((l) => {
          l.app === e && l.inspectorId === "vue-i18n-resource-inspector" && cl(l, t);
        });
        const a = /* @__PURE__ */ new Map();
        r.on.getInspectorState(async (l) => {
          if (l.app === e && l.inspectorId === "vue-i18n-resource-inspector")
            if (r.unhighlightElement(), fl(l, t), l.nodeId === "global") {
              if (!a.has(l.app)) {
                const [o] = await r.getComponentInstances(l.app);
                a.set(l.app, o);
              }
              r.highlightElement(a.get(l.app));
            } else {
              const o = ul(l.nodeId, t);
              o && r.highlightElement(o);
            }
        }), r.on.editInspectorState((l) => {
          l.app === e && l.inspectorId === "vue-i18n-resource-inspector" && dl(l, t);
        }), r.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Rt["vue-i18n-timeline"],
          color: nl["vue-i18n-timeline"]
        }), n(!0);
      });
    } catch (r) {
      console.error(r), s(!1);
    }
  });
}
function Cs(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function rl(e, t, n) {
  const s = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== s) {
    const r = {
      label: `i18n (${Cs(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(r);
  }
}
function Wn(e, t) {
  const n = hs;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: on(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function on(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const s = e[n];
    x(s) && "source" in s ? t[n] = il(s) : Le(s) && s.loc && s.loc.source ? t[n] = s.loc.source : U(s) ? t[n] = on(s) : t[n] = s;
  }), t;
}
const al = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function ll(e) {
  return e.replace(/[<>"&]/g, ol);
}
function ol(e) {
  return al[e] || e;
}
function il(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${ll(e.source)}")` : "(?)"}`
    }
  };
}
function cl(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [s, r] of t.__instances) {
    const a = t.mode === "composition" ? r : r.__composer;
    n !== a && e.rootNodes.push({
      id: a.id.toString(),
      label: `${Cs(s)} Scope`
    });
  }
}
function ul(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [s, r] of t.__instances.entries())
      if (r.id.toString() === e) {
        n = s;
        break;
      }
  }
  return n;
}
function bs(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((s) => s.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function fl(e, t) {
  const n = bs(e.nodeId, t);
  return n && (e.state = _l(n)), null;
}
function _l(e) {
  const t = {}, n = "Locale related info", s = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = s;
  const r = "Locale messages info", a = [
    {
      type: r,
      key: "messages",
      editable: !1,
      value: on(e.messages.value)
    }
  ];
  t[r] = a;
  {
    const l = "Datetime formats info", o = [
      {
        type: l,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[l] = o;
    const u = "Datetime formats info", m = [
      {
        type: u,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[u] = m;
  }
  return t;
}
function ze(e, t) {
  if (Kt) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Kt.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function dl(e, t) {
  const n = bs(e.nodeId, t);
  if (n) {
    const [s] = e.path;
    s === "locale" && L(e.state.value) ? n.locale.value = e.state.value : s === "fallbackLocale" && (L(e.state.value) || H(e.state.value) || U(e.state.value)) ? n.fallbackLocale.value = e.state.value : s === "inheritLocale" && w(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function ml(e) {
  const t = L(e.locale) ? e.locale : Je, n = L(e.fallbackLocale) || H(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, s = x(e.missing) ? e.missing : void 0, r = w(e.silentTranslationWarn) || $e(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, a = w(e.silentFallbackWarn) || $e(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, l = w(e.fallbackRoot) ? e.fallbackRoot : !0, o = !!e.formatFallbackMessages, u = R(e.modifiers) ? e.modifiers : {}, m = e.pluralizationRules, h = x(e.postTranslation) ? e.postTranslation : void 0, C = L(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, p = !!e.escapeParameterHtml, O = w(e.sync) ? e.sync : !0;
  let S = e.messages;
  if (R(e.sharedMessages)) {
    const T = e.sharedMessages;
    S = Object.keys(T).reduce((g, M) => {
      const $ = g[M] || (g[M] = {});
      return Z($, T[M]), g;
    }, S || {});
  }
  const { __i18n: A, __root: y, __injectWithOption: f } = e, _ = e.datetimeFormats, v = e.numberFormats, E = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: S,
    flatJson: E,
    datetimeFormats: _,
    numberFormats: v,
    missing: s,
    missingWarn: r,
    fallbackWarn: a,
    fallbackRoot: l,
    fallbackFormat: o,
    modifiers: u,
    pluralRules: m,
    postTranslation: h,
    warnHtmlMessage: C,
    escapeParameter: p,
    messageResolver: e.messageResolver,
    inheritLocale: O,
    __i18n: A,
    __root: y,
    __injectWithOption: f
  };
}
function jt(e = {}) {
  const t = ln(ml(e)), { __extender: n } = e, s = {
    // id
    id: t.id,
    // locale
    get locale() {
      return t.locale.value;
    },
    set locale(r) {
      t.locale.value = r;
    },
    // fallbackLocale
    get fallbackLocale() {
      return t.fallbackLocale.value;
    },
    set fallbackLocale(r) {
      t.fallbackLocale.value = r;
    },
    // messages
    get messages() {
      return t.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return t.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return t.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return t.availableLocales;
    },
    // missing
    get missing() {
      return t.getMissingHandler();
    },
    set missing(r) {
      t.setMissingHandler(r);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return w(t.missingWarn) ? !t.missingWarn : t.missingWarn;
    },
    set silentTranslationWarn(r) {
      t.missingWarn = w(r) ? !r : r;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return w(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
    },
    set silentFallbackWarn(r) {
      t.fallbackWarn = w(r) ? !r : r;
    },
    // modifiers
    get modifiers() {
      return t.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return t.fallbackFormat;
    },
    set formatFallbackMessages(r) {
      t.fallbackFormat = r;
    },
    // postTranslation
    get postTranslation() {
      return t.getPostTranslationHandler();
    },
    set postTranslation(r) {
      t.setPostTranslationHandler(r);
    },
    // sync
    get sync() {
      return t.inheritLocale;
    },
    set sync(r) {
      t.inheritLocale = r;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return t.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(r) {
      t.warnHtmlMessage = r !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return t.escapeParameter;
    },
    set escapeParameterHtml(r) {
      t.escapeParameter = r;
    },
    // pluralizationRules
    get pluralizationRules() {
      return t.pluralRules || {};
    },
    // for internal
    __composer: t,
    // t
    t(...r) {
      return Reflect.apply(t.t, t, [...r]);
    },
    // rt
    rt(...r) {
      return Reflect.apply(t.rt, t, [...r]);
    },
    // tc
    tc(...r) {
      const [a, l, o] = r, u = { plural: 1 };
      let m = null, h = null;
      if (process.env.NODE_ENV !== "production" && es(mt(ve.DEPRECATE_TC)), !L(a))
        throw te(B.INVALID_ARGUMENT);
      const C = a;
      return L(l) ? u.locale = l : J(l) ? u.plural = l : H(l) ? m = l : R(l) && (h = l), L(o) ? u.locale = o : H(o) ? m = o : R(o) && (h = o), Reflect.apply(t.t, t, [
        C,
        m || h || {},
        u
      ]);
    },
    // te
    te(r, a) {
      return t.te(r, a);
    },
    // tm
    tm(r) {
      return t.tm(r);
    },
    // getLocaleMessage
    getLocaleMessage(r) {
      return t.getLocaleMessage(r);
    },
    // setLocaleMessage
    setLocaleMessage(r, a) {
      t.setLocaleMessage(r, a);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(r, a) {
      t.mergeLocaleMessage(r, a);
    },
    // d
    d(...r) {
      return Reflect.apply(t.d, t, [...r]);
    },
    // getDateTimeFormat
    getDateTimeFormat(r) {
      return t.getDateTimeFormat(r);
    },
    // setDateTimeFormat
    setDateTimeFormat(r, a) {
      t.setDateTimeFormat(r, a);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(r, a) {
      t.mergeDateTimeFormat(r, a);
    },
    // n
    n(...r) {
      return Reflect.apply(t.n, t, [...r]);
    },
    // getNumberFormat
    getNumberFormat(r) {
      return t.getNumberFormat(r);
    },
    // setNumberFormat
    setNumberFormat(r, a) {
      t.setNumberFormat(r, a);
    },
    // mergeNumberFormat
    mergeNumberFormat(r, a) {
      t.mergeNumberFormat(r, a);
    }
  };
  return s.__extender = n, process.env.NODE_ENV !== "production" && (s.__enableEmitter = (r) => {
    const a = t;
    a[Re] && a[Re](r);
  }, s.__disableEmitter = () => {
    const r = t;
    r[Ze] && r[Ze]();
  }), s;
}
function pl(e, t, n) {
  return {
    beforeCreate() {
      const s = Xe();
      if (!s)
        throw te(B.UNEXPECTED_ERROR);
      const r = this.$options;
      if (r.i18n) {
        const a = r.i18n;
        if (r.__i18n && (a.__i18n = r.__i18n), a.__root = t, this === this.$root)
          this.$i18n = Gn(e, a);
        else {
          a.__injectWithOption = !0, a.__extender = n.__vueI18nExtend, this.$i18n = jt(a);
          const l = this.$i18n;
          l.__extender && (l.__disposer = l.__extender(this.$i18n));
        }
      } else if (r.__i18n)
        if (this === this.$root)
          this.$i18n = Gn(e, r);
        else {
          this.$i18n = jt({
            __i18n: r.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      r.__i18nGlobal && Ns(t, r, r), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, l) => this.$i18n.te(a, l), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = (a) => this.$i18n.tm(a), n.__setInstance(s, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const s = this.$i18n;
        this.$el.__VUE_I18N__ = s.__composer;
        const r = this.__v_emitter = tn();
        s.__enableEmitter && s.__enableEmitter(r), r.on("*", ze);
      }
    },
    unmounted() {
      const s = Xe();
      if (!s)
        throw te(B.UNEXPECTED_ERROR);
      const r = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", ze), delete this.__v_emitter), this.$i18n && (r.__disableEmitter && r.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__disposer && (r.__disposer(), delete r.__disposer, delete r.__extender), n.__deleteInstance(s), delete this.$i18n;
    }
  };
}
function Gn(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[ps](t.pluralizationRules || e.pluralizationRules);
  const n = an(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((s) => e.mergeLocaleMessage(s, n[s])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((s) => e.mergeDateTimeFormat(s, t.datetimeFormats[s])), t.numberFormats && Object.keys(t.numberFormats).forEach((s) => e.mergeNumberFormat(s, t.numberFormats[s])), e;
}
const cn = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function El({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, r) => [
    ...s,
    // prettier-ignore
    ...r.type === tt ? r.children : [r]
  ], []) : t.reduce((n, s) => {
    const r = e[s];
    return r && (n[s] = r()), n;
  }, {});
}
function vs() {
  return tt;
}
const gl = /* @__PURE__ */ Q({
  /* eslint-disable */
  name: "i18n-t",
  props: Z({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => J(e) || !isNaN(e)
    }
  }, cn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: s } = t, r = e.i18n || un({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const a = Object.keys(n).filter((C) => C !== "_"), l = {};
      e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = L(e.plural) ? +e.plural : e.plural);
      const o = El(t, a), u = r[Bt](e.keypath, o, l), m = Z({}, s), h = L(e.tag) || U(e.tag) ? e.tag : vs();
      return qn(h, m, u);
    };
  }
}), Bn = gl;
function Nl(e) {
  return H(e) && !L(e[0]);
}
function Ls(e, t, n, s) {
  const { slots: r, attrs: a } = t;
  return () => {
    const l = { part: !0 };
    let o = {};
    e.locale && (l.locale = e.locale), L(e.format) ? l.key = e.format : U(e.format) && (L(e.format.key) && (l.key = e.format.key), o = Object.keys(e.format).reduce((p, O) => n.includes(O) ? Z({}, p, { [O]: e.format[O] }) : p, {}));
    const u = s(e.value, l, o);
    let m = [l.key];
    H(u) ? m = u.map((p, O) => {
      const S = r[p.type], A = S ? S({ [p.type]: p.value, index: O, parts: u }) : [p.value];
      return Nl(A) && (A[0].key = `${p.type}-${O}`), A;
    }) : L(u) && (m = [u]);
    const h = Z({}, a), C = L(e.tag) || U(e.tag) ? e.tag : vs();
    return qn(C, h, m);
  };
}
const hl = /* @__PURE__ */ Q({
  /* eslint-disable */
  name: "i18n-n",
  props: Z({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, cn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || un({
      useScope: e.scope,
      __useComponent: !0
    });
    return Ls(e, t, fs, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ht](...s)
    ));
  }
}), xn = hl, Cl = /* @__PURE__ */ Q({
  /* eslint-disable */
  name: "i18n-d",
  props: Z({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, cn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || un({
      useScope: e.scope,
      __useComponent: !0
    });
    return Ls(e, t, us, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[xt](...s)
    ));
  }
}), Hn = Cl;
function bl(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const s = n.__getInstance(t);
    return s != null ? s.__composer : e.global.__composer;
  }
}
function vl(e) {
  const t = (l) => {
    const { instance: o, value: u } = l;
    if (!o || !o.$)
      throw te(B.UNEXPECTED_ERROR);
    const m = bl(e, o.$), h = Yn(u);
    return [
      Reflect.apply(m.t, m, [...Kn(h)]),
      m
    ];
  };
  return {
    created: (l, o) => {
      const [u, m] = t(o);
      ue && e.global === m && (l.__i18nWatcher = Ft(m.locale, () => {
        o.instance && o.instance.$forceUpdate();
      })), l.__composer = m, l.textContent = u;
    },
    unmounted: (l) => {
      ue && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer);
    },
    beforeUpdate: (l, { value: o }) => {
      if (l.__composer) {
        const u = l.__composer, m = Yn(o);
        l.textContent = Reflect.apply(u.t, u, [
          ...Kn(m)
        ]);
      }
    },
    getSSRProps: (l) => {
      const [o] = t(l);
      return { textContent: o };
    }
  };
}
function Yn(e) {
  if (L(e))
    return { path: e };
  if (R(e)) {
    if (!("path" in e))
      throw te(B.REQUIRED_VALUE, "path");
    return e;
  } else
    throw te(B.INVALID_VALUE);
}
function Kn(e) {
  const { path: t, locale: n, args: s, choice: r, plural: a } = e, l = {}, o = s || {};
  return L(n) && (l.locale = n), J(r) && (l.plural = r), J(a) && (l.plural = a), [t, o, l];
}
function Ll(e, t, ...n) {
  const s = R(n[0]) ? n[0] : {};
  (w(s.globalInstall) ? s.globalInstall : !0) && ([Bn.name, "I18nT"].forEach((a) => e.component(a, Bn)), [xn.name, "I18nN"].forEach((a) => e.component(a, xn)), [Hn.name, "I18nD"].forEach((a) => e.component(a, Hn))), e.directive("t", vl(t));
}
const Tl = /* @__PURE__ */ me("global-vue-i18n");
function Il(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && w(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, s = w(e.globalInjection) ? e.globalInjection : !0, r = /* @__PURE__ */ new Map(), [a, l] = Ol(e, n), o = /* @__PURE__ */ me(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  function u(p) {
    return r.get(p) || null;
  }
  function m(p, O) {
    r.set(p, O);
  }
  function h(p) {
    r.delete(p);
  }
  const C = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
    },
    // install plugin
    async install(p, ...O) {
      if (process.env.NODE_ENV !== "production" && (p.__VUE_I18N__ = C), p.__VUE_I18N_SYMBOL__ = o, p.provide(p.__VUE_I18N_SYMBOL__, C), R(O[0])) {
        const y = O[0];
        C.__composerExtend = y.__composerExtend, C.__vueI18nExtend = y.__vueI18nExtend;
      }
      let S = null;
      !n && s && (S = Ml(p, C.global)), __VUE_I18N_FULL_INSTALL__ && Ll(p, C, ...O), __VUE_I18N_LEGACY_API__ && n && p.mixin(pl(l, l.__composer, C));
      const A = p.unmount;
      if (p.unmount = () => {
        S && S(), C.dispose(), A();
      }, process.env.NODE_ENV !== "production") {
        if (!await sl(p, C))
          throw te(B.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
        const f = tn();
        if (n) {
          const _ = l;
          _.__enableEmitter && _.__enableEmitter(f);
        } else {
          const _ = l;
          _[Re] && _[Re](f);
        }
        f.on("*", ze);
      }
    },
    // global accessor
    get global() {
      return l;
    },
    dispose() {
      a.stop();
    },
    // @internal
    __instances: r,
    // @internal
    __getInstance: u,
    // @internal
    __setInstance: m,
    // @internal
    __deleteInstance: h
  };
  return C;
}
function un(e = {}) {
  const t = Xe();
  if (t == null)
    throw te(B.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw te(B.NOT_INSTALLED);
  const n = yl(t), s = kl(n), r = gs(t), a = Al(e, r);
  if (a === "global")
    return Ns(s, e, r), s;
  if (a === "parent") {
    let u = Sl(n, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && Te(mt(ve.NOT_FOUND_PARENT_SCOPE)), u = s), u;
  }
  const l = n;
  let o = l.__getInstance(t);
  if (o == null) {
    const u = Z({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), s && (u.__root = s), o = ln(u), l.__composerExtend && (o[Yt] = l.__composerExtend(o)), Pl(l, t, o), l.__setInstance(t, o);
  }
  return o;
}
function Ol(e, t, n) {
  const s = ys(), r = __VUE_I18N_LEGACY_API__ && t ? s.run(() => jt(e)) : s.run(() => ln(e));
  if (r == null)
    throw te(B.UNEXPECTED_ERROR);
  return [s, r];
}
function yl(e) {
  const t = As(e.isCE ? Tl : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw te(e.isCE ? B.NOT_INSTALLED_WITH_PROVIDE : B.UNEXPECTED_ERROR);
  return t;
}
function Al(e, t) {
  return ft(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function kl(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Sl(e, t, n = !1) {
  let s = null;
  const r = t.root;
  let a = Dl(t, n);
  for (; a != null; ) {
    const l = e;
    if (e.mode === "composition")
      s = l.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = l.__getInstance(a);
      o != null && (s = o.__composer, n && s && !s[Es] && (s = null));
    }
    if (s != null || r === a)
      break;
    a = a.parent;
  }
  return s;
}
function Dl(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Pl(e, t, n) {
  let s = null;
  Jn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, s = tn();
      const r = n;
      r[Re] && r[Re](s), s.on("*", ze);
    }
  }, t), ks(() => {
    const r = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (s && s.off("*", ze), r[Ze] && r[Ze](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const a = r[Yt];
    a && (a(), delete r[Yt]);
  }, t);
}
const Rl = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], jn = ["t", "rt", "d", "n", "tm", "te"];
function Ml(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Rl.forEach((r) => {
    const a = Object.getOwnPropertyDescriptor(t, r);
    if (!a)
      throw te(B.UNEXPECTED_ERROR);
    const l = Ss(a.value) ? {
      get() {
        return a.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        a.value.value = o;
      }
    } : {
      get() {
        return a.get && a.get();
      }
    };
    Object.defineProperty(n, r, l);
  }), e.config.globalProperties.$i18n = n, jn.forEach((r) => {
    const a = Object.getOwnPropertyDescriptor(t, r);
    if (!a || !a.value)
      throw te(B.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${r}`, a);
  }), () => {
    delete e.config.globalProperties.$i18n, jn.forEach((r) => {
      delete e.config.globalProperties[`$${r}`];
    });
  };
}
Ja();
Ca(Qr);
ba(pa);
va(ts);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = ke();
  e.__INTLIFY__ = !0, zr(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Fl = {
  copyLink: "Link kopieren"
}, wl = {
  calendar: "Kalender",
  critical: "Kritisch",
  info: "Information",
  success: "Erfolg",
  warning: "Warnung"
}, Ul = {
  itemsSelected: "{count} ausgewählt",
  selectAll: "Alle auswählen",
  selectAllCalendars: "Alle Kalender auswählen"
}, Vl = {
  off: "Aus",
  on: "An"
}, $l = {
  copyIcon: Fl,
  icons: wl,
  syncCard: Ul,
  switchToggle: Vl
}, Wl = {
  copyLink: "Copy link"
}, Gl = {
  calendar: "Calendar",
  critical: "Critical",
  info: "Information",
  success: "Success",
  warning: "Warning"
}, Bl = {
  itemsSelected: "{count} Selected",
  selectAll: "Select All",
  selectAllCalendars: "Select All Calendars"
}, xl = {
  off: "Off",
  on: "On"
}, Hl = {
  copyIcon: Wl,
  icons: Gl,
  syncCard: Bl,
  switchToggle: xl
}, Yl = {
  de: $l,
  // German
  en: Hl
  // English
}, Kl = (localStorage == null ? void 0 : localStorage.getItem("locale")) ?? navigator.language.split("-")[0], jl = Il({
  legacy: !1,
  globalInjection: !0,
  locale: Kl,
  fallbackLocale: "en",
  messages: Yl
}), Xl = jl.global, Ne = Xl.t, ql = { class: "wrapper" }, Jl = { class: "header" }, Zl = { class: "text-wrapper" }, Ql = { class: "title" }, zl = { class: "selected" }, eo = { class: "rows" }, to = ["onUpdate:modelValue"], no = /* @__PURE__ */ Q({
  __name: "SyncCard",
  props: /* @__PURE__ */ Ve({
    title: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ct(e, "modelValue"), n = _e(() => t.value.filter((r) => r.checked).length), s = () => {
      t.value = t.value.map((r) => ({
        ...r,
        checked: !0
      }));
    };
    return (r, a) => (F(), G("div", ql, [
      P("div", Jl, [
        ce(r.$slots, "icon", {}, void 0, !0),
        P("div", Zl, [
          P("div", Ql, se(r.title), 1),
          P("div", zl, se(de(Ne)("syncCard.itemsSelected", { count: n.value })), 1)
        ]),
        Zn(Bs, {
          class: "select-all",
          size: "small",
          onClick: s,
          title: de(Ne)("syncCard.selectAllCalendars")
        }, {
          default: et(() => [
            Mt(se(de(Ne)("syncCard.selectAll")), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ]),
      P("ul", eo, [
        (F(!0), G(tt, null, Ge(t.value, (l, o) => (F(), G("li", {
          class: "row",
          key: l.key
        }, [
          P("label", null, [
            Zt(P("input", {
              class: "tbpro-checkbox",
              type: "checkbox",
              "onUpdate:modelValue": (u) => t.value[o].checked = u
            }, null, 8, to), [
              [Rs, t.value[o].checked]
            ]),
            Mt(" " + se(l.label), 1)
          ])
        ]))), 128))
      ])
    ]));
  }
}), Po = /* @__PURE__ */ oe(no, [["__scopeId", "data-v-8e5ae72f"]]), so = { key: 0 }, ro = { class: "toggle-container" }, ao = {
  key: 0,
  class: "toggle-label"
}, lo = { class: "toggle" }, oo = ["name", "checked", "disabled"], io = {
  key: 1,
  class: "toggle-label"
}, co = /* @__PURE__ */ Q({
  __name: "SwitchToggle",
  props: {
    name: {},
    active: { type: Boolean },
    disabled: { type: Boolean },
    label: {},
    noLegend: { type: Boolean }
  },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const n = t, s = e, r = be(!1);
    Jn(() => {
      r.value = s.active;
    });
    const a = () => {
      s.disabled || (r.value = !r.value, n("changed", r.value));
    };
    return (l, o) => (F(), G("div", {
      class: "component-container",
      onClick: Xn(a, ["prevent"])
    }, [
      l.label ? (F(), G("div", so, se(l.label), 1)) : le("", !0),
      P("div", ro, [
        l.noLegend ? le("", !0) : (F(), G("div", ao, se(de(Ne)("switchToggle.off")), 1)),
        P("div", lo, [
          P("input", {
            class: "toggle-input",
            type: "checkbox",
            name: l.name,
            checked: r.value,
            disabled: l.disabled
          }, null, 8, oo),
          o[0] || (o[0] = P("div", { class: "toggle-handle" }, null, -1))
        ]),
        l.noLegend ? le("", !0) : (F(), G("div", io, se(de(Ne)("switchToggle.on")), 1))
      ])
    ]));
  }
}), Ro = /* @__PURE__ */ oe(co, [["__scopeId", "data-v-f6cff58b"]]), uo = ["aria-label"], fo = /* @__PURE__ */ Q({
  __name: "NoticeInfoIcon",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      class: "tbpro-notice-icon",
      "aria-label": de(Ne)("icons.info"),
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n[0] || (n[0] = [
      P("g", { id: "icon" }, [
        P("path", {
          id: "path293",
          opacity: "0.2",
          d: "M14.5 7.5C14.5 9.35652 13.7625 11.137 12.4497 12.4498C11.137 13.7625 9.35652 14.5 7.5 14.5C5.64348 14.5 3.86301 13.7625 2.55025 12.4498C1.2375 11.137 0.5 9.35652 0.5 7.5C0.5 5.64348 1.2375 3.86299 2.55025 2.55023C3.86301 1.23748 5.64348 0.5 7.5 0.5C9.35652 0.5 11.137 1.23748 12.4497 2.55023C13.7625 3.86299 14.5 5.64348 14.5 7.5Z",
          fill: "currentColor"
        }),
        P("path", {
          id: "path1012",
          d: "M7.5 0C3.36381 0 0 3.36379 0 7.5C0 11.6362 3.36381 15 7.5 15C11.6362 15 15 11.6362 15 7.5C15 3.36379 11.6362 0 7.5 0ZM7.5 1C7.60617 1 7.71232 1.00281 7.81836 1.00781C7.92535 1.01281 8.03117 1.02105 8.13672 1.03125C8.2429 1.04155 8.34852 1.05501 8.45312 1.07031C11.2847 1.48435 13.5157 3.71533 13.9297 6.54688C13.945 6.65148 13.9585 6.7571 13.9688 6.86328C13.979 6.96883 13.9871 7.07465 13.9922 7.18164C13.9974 7.28768 14 7.39383 14 7.5C14 7.81456 13.9766 8.12339 13.9336 8.42578C13.8895 8.73576 13.8225 9.03794 13.7363 9.33203C13.5605 9.93216 13.3012 10.4957 12.9707 11.0098L12.9688 11.0137L12.9648 11.0195C12.798 11.278 12.6129 11.5243 12.4121 11.7559C12.2809 11.9071 12.1444 12.0529 12 12.1914V12.168C11.6942 12.4699 11.3592 12.7408 11 12.9766V12.9785C10.7453 13.1413 10.4784 13.2853 10.2012 13.4121C9.92155 13.54 9.63134 13.6485 9.33203 13.7363C9.03821 13.8225 8.73544 13.8894 8.42578 13.9336C8.12342 13.9767 7.81454 14 7.5 14C7.18546 14 6.87658 13.9767 6.57422 13.9336C6.26456 13.8894 5.96179 13.8225 5.66797 13.7363C5.36871 13.648 5.07845 13.54 4.79883 13.4121C4.52169 13.2843 4.25468 13.1413 4 12.9785V12.9766C3.64076 12.7408 3.30578 12.4699 3 12.168V12.1914C2.85556 12.0529 2.71907 11.9071 2.58789 11.7559C2.38709 11.5243 2.202 11.278 2.03516 11.0195L2.0293 11.0098C1.69881 10.4967 1.43949 9.93216 1.26367 9.33203C1.17751 9.03794 1.11052 8.73576 1.06641 8.42578C1.02337 8.12339 1 7.81456 1 7.5C1 7.18575 1.02352 6.87643 1.06641 6.57422C1.20042 5.62989 1.53798 4.75361 2.03125 3.98633C2.53528 3.20232 3.20232 2.53528 3.98633 2.03125C4.7536 1.53797 5.62989 1.20042 6.57422 1.06641C6.87643 1.02351 7.18575 1 7.5 1ZM7.5 4C7.36739 4 7.24021 4.05266 7.14645 4.14642C7.05268 4.24019 7 4.36739 7 4.5C7 4.63261 7.05268 4.75981 7.14645 4.85358C7.24021 4.94734 7.36739 5 7.5 5C7.63261 5 7.75979 4.94734 7.85355 4.85358C7.94732 4.75981 8 4.63261 8 4.5C8 4.36739 7.94732 4.24019 7.85355 4.14642C7.75979 4.05266 7.63261 4 7.5 4ZM7.5 6C7.36739 6 7.24021 6.05266 7.14645 6.14642C7.05268 6.24019 7 6.36739 7 6.5V10.5C7 10.6326 7.05268 10.7598 7.14645 10.8536C7.24021 10.9473 7.36739 11 7.5 11C7.63261 11 7.75979 10.9473 7.85355 10.8536C7.94732 10.7598 8 10.6326 8 10.5V6.5C8 6.36739 7.94732 6.24019 7.85355 6.14642C7.75979 6.05266 7.63261 6 7.5 6Z",
          fill: "currentColor"
        })
      ], -1)
    ]), 8, uo));
  }
}), _o = /* @__PURE__ */ oe(fo, [["__scopeId", "data-v-326dc06b"]]), mo = ["aria-label"], po = /* @__PURE__ */ Q({
  __name: "NoticeSuccessIcon",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      class: "tbpro-success-icon",
      "aria-label": de(Ne)("icons.success"),
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n[0] || (n[0] = [
      P("g", { id: "icon" }, [
        P("path", {
          id: "path293",
          opacity: "0.2",
          d: "M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5C0 5.51088 0.790176 3.6032 2.1967 2.19668C3.60322 0.790154 5.51088 0 7.5 0C9.48912 0 11.3968 0.790154 12.8033 2.19668C14.2098 3.6032 15 5.51088 15 7.5Z",
          fill: "none",
          class: "tbpro-icon-background"
        }),
        P("path", {
          id: "path1012",
          d: "M7.5 0C3.3638 0 0 3.36379 0 7.5C0 11.6362 3.3638 15 7.5 15C11.6362 15 15 11.6362 15 7.5C15 3.36379 11.6362 0 7.5 0ZM7.5 1C7.60617 1 7.71232 1.00261 7.81836 1.00781C7.92535 1.01293 8.03117 1.02104 8.13672 1.03125C8.2429 1.04152 8.34852 1.05502 8.45312 1.07031C11.2847 1.48435 13.5157 3.7153 13.9297 6.54688C13.945 6.65148 13.9585 6.7571 13.9688 6.86328C13.979 6.96883 13.9871 7.07465 13.9922 7.18164C13.9974 7.28768 14 7.39383 14 7.5C14 7.81456 13.9766 8.12339 13.9336 8.42578C13.8895 8.73576 13.8225 9.03794 13.7363 9.33203C13.5605 9.93216 13.3012 10.4957 12.9707 11.0098C12.9701 11.0111 12.9694 11.0124 12.9688 11.0137C12.9675 11.0157 12.9661 11.0176 12.9648 11.0195C12.798 11.278 12.6129 11.5243 12.4121 11.7559C12.2809 11.9071 12.1444 12.0529 12 12.1914V12.168C11.6942 12.4699 11.3592 12.7408 11 12.9766V12.9785C10.7453 13.1413 10.4784 13.2853 10.2012 13.4121C9.92155 13.54 9.63134 13.6485 9.33203 13.7363C9.03821 13.8225 8.73544 13.8894 8.42578 13.9336C8.12342 13.9767 7.81454 14 7.5 14C7.18546 14 6.87658 13.9767 6.57422 13.9336C6.26456 13.8894 5.96179 13.8225 5.66797 13.7363C5.36866 13.6485 5.07845 13.54 4.79883 13.4121C4.52158 13.2853 4.25469 13.1413 4 12.9785V12.9766C3.64076 12.7408 3.30579 12.4699 3 12.168V12.1914C2.85556 12.0529 2.71907 11.9071 2.58789 11.7559C2.38709 11.5243 2.202 11.278 2.03516 11.0195C2.0332 11.0163 2.03125 11.013 2.0293 11.0098C1.69881 10.4957 1.43949 9.93216 1.26367 9.33203C1.17751 9.03794 1.11052 8.73576 1.06641 8.42578C1.02337 8.12339 1 7.81456 1 7.5C1 7.18575 1.02352 6.87643 1.06641 6.57422C1.20042 5.62989 1.53798 4.75361 2.03125 3.98633C2.53528 3.20232 3.20232 2.53528 3.98633 2.03125C4.75361 1.53797 5.62989 1.20042 6.57422 1.06641C6.87643 1.02352 7.18575 1 7.5 1ZM10.4668 5.00195C10.3345 5.01016 10.2108 5.07057 10.123 5.16992L6.93945 8.81055L4.8125 7.10938C4.76122 7.06831 4.70234 7.03771 4.63924 7.01941C4.57614 7.00111 4.51005 6.99543 4.44475 7.00269C4.37945 7.00994 4.31622 7.03 4.25867 7.06171C4.20112 7.09341 4.15039 7.13618 4.10938 7.1875C4.06831 7.23878 4.03775 7.29768 4.01945 7.36078C4.00115 7.42388 3.99546 7.48994 4.00272 7.55524C4.00997 7.62054 4.03003 7.68379 4.06173 7.74133C4.09344 7.79888 4.13618 7.84961 4.1875 7.89062L6.6875 9.89062C6.78805 9.97139 6.91592 10.0102 7.04439 9.9989C7.17287 9.98762 7.29202 9.92713 7.37695 9.83008L10.877 5.83008C10.9204 5.78064 10.9537 5.7231 10.9749 5.66077C10.9961 5.59843 11.0047 5.53249 11.0004 5.4668C10.996 5.4011 10.9787 5.33695 10.9495 5.27795C10.9203 5.21896 10.8797 5.16632 10.8301 5.12305C10.7805 5.07998 10.7228 5.04715 10.6605 5.02637C10.5982 5.00559 10.5323 4.99728 10.4668 5.00195Z",
          fill: "currentColor"
        })
      ], -1)
    ]), 8, mo));
  }
}), Eo = /* @__PURE__ */ oe(po, [["__scopeId", "data-v-818680bc"]]), go = ["aria-label"], No = /* @__PURE__ */ Q({
  __name: "NoticeWarningIcon",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      class: "tbpro-warning-icon",
      "aria-label": de(Ne)("icons.warning"),
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n[0] || (n[0] = [
      P("g", { id: "icon" }, [
        P("path", {
          id: "path293",
          opacity: "0.2",
          d: "M14.5 7.5C14.5 9.35652 13.7625 11.137 12.4497 12.4498C11.137 13.7625 9.35652 14.5 7.5 14.5C5.64348 14.5 3.86301 13.7625 2.55025 12.4498C1.2375 11.137 0.5 9.35652 0.5 7.5C0.5 5.64348 1.2375 3.86299 2.55025 2.55023C3.86301 1.23748 5.64348 0.5 7.5 0.5C9.35652 0.5 11.137 1.23748 12.4497 2.55023C13.7625 3.86299 14.5 5.64348 14.5 7.5Z",
          fill: "currentColor"
        }),
        P("path", {
          id: "path1012",
          d: "M7.5 0C3.36381 0 0 3.36379 0 7.5C0 11.6362 3.36381 15 7.5 15C11.6362 15 15 11.6362 15 7.5C15 3.36379 11.6362 0 7.5 0ZM7.5 1C7.60617 1 7.71232 1.00281 7.81836 1.00781C7.92535 1.01281 8.03117 1.02105 8.13672 1.03125C8.2429 1.04155 8.34852 1.05501 8.45312 1.07031C11.2847 1.48435 13.5157 3.71533 13.9297 6.54688C13.945 6.65148 13.9585 6.7571 13.9688 6.86328C13.979 6.96883 13.9871 7.07465 13.9922 7.18164C13.9974 7.28768 14 7.39383 14 7.5C14 7.81456 13.9766 8.12339 13.9336 8.42578C13.8895 8.73576 13.8225 9.03794 13.7363 9.33203C13.5605 9.93216 13.3012 10.4957 12.9707 11.0098L12.9688 11.0137L12.9648 11.0195C12.798 11.278 12.6129 11.5243 12.4121 11.7559C12.2809 11.9071 12.1444 12.0529 12 12.1914V12.168C11.6942 12.4699 11.3592 12.7408 11 12.9766V12.9785C10.7453 13.1413 10.4784 13.2853 10.2012 13.4121C9.92155 13.54 9.63134 13.6485 9.33203 13.7363C9.03821 13.8225 8.73544 13.8894 8.42578 13.9336C8.12342 13.9767 7.81454 14 7.5 14C7.18546 14 6.87658 13.9767 6.57422 13.9336C6.26456 13.8894 5.96179 13.8225 5.66797 13.7363C5.36871 13.648 5.07845 13.54 4.79883 13.4121C4.52169 13.2843 4.25468 13.1413 4 12.9785V12.9766C3.64076 12.7408 3.30578 12.4699 3 12.168V12.1914C2.85556 12.0529 2.71907 11.9071 2.58789 11.7559C2.38709 11.5243 2.202 11.278 2.03516 11.0195L2.0293 11.0098C1.69881 10.4967 1.43949 9.93216 1.26367 9.33203C1.17751 9.03794 1.11052 8.73576 1.06641 8.42578C1.02337 8.12339 1 7.81456 1 7.5C1 7.18575 1.02352 6.87643 1.06641 6.57422C1.20042 5.62989 1.53798 4.75361 2.03125 3.98633C2.53528 3.20232 3.20232 2.53528 3.98633 2.03125C4.7536 1.53797 5.62989 1.20042 6.57422 1.06641C6.87643 1.02351 7.18575 1 7.5 1ZM7.5 4C7.36739 4 7.24021 4.05266 7.14645 4.14642C7.05268 4.24019 7 4.36739 7 4.5C7 4.63261 7.05268 4.75981 7.14645 4.85358C7.24021 4.94734 7.36739 5 7.5 5C7.63261 5 7.75979 4.94734 7.85355 4.85358C7.94732 4.75981 8 4.63261 8 4.5C8 4.36739 7.94732 4.24019 7.85355 4.14642C7.75979 4.05266 7.63261 4 7.5 4ZM7.5 6C7.36739 6 7.24021 6.05266 7.14645 6.14642C7.05268 6.24019 7 6.36739 7 6.5V10.5C7 10.6326 7.05268 10.7598 7.14645 10.8536C7.24021 10.9473 7.36739 11 7.5 11C7.63261 11 7.75979 10.9473 7.85355 10.8536C7.94732 10.7598 8 10.6326 8 10.5V6.5C8 6.36739 7.94732 6.24019 7.85355 6.14642C7.75979 6.05266 7.63261 6 7.5 6Z",
          fill: "currentColor"
        })
      ], -1)
    ]), 8, go));
  }
}), ho = /* @__PURE__ */ oe(No, [["__scopeId", "data-v-8776ef7d"]]), Co = ["aria-label"], bo = /* @__PURE__ */ Q({
  __name: "NoticeCriticalIcon",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      "aria-label": de(Ne)("icons.critical"),
      class: "tbpro-critical-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n[0] || (n[0] = [
      P("path", {
        opacity: "0.2",
        d: "M8 1C7.34694 1.00095 6.778 1.45312 6.5 2L1.324 11.4609C1 12 1.00152 12.1118 1 12.5C1 13.3284 1.67157 14 2.5 14H13.5C14.3284 14 15 13.3284 15 12.5C15 12.106 15 12 14.668 11.4473L9.5 2C9.218 1.44727 8.65609 1.00005 8 1Z",
        fill: "none",
        class: "tbpro-icon-background"
      }, null, -1),
      P("path", {
        d: "M8 1C7.34694 1.00095 6.778 1.45312 6.5 2L1.324 11.4609C1 12 1.00152 12.1118 1 12.5C1 13.3284 1.67157 14 2.5 14H13.5C14.3284 14 15 13.3284 15 12.5C15 12.106 15 12 14.668 11.4473L9.5 2C9.218 1.44727 8.65609 1.00005 8 1Z",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, -1),
      P("path", {
        d: "M8 5V9",
        stroke: "currentColor",
        "stroke-linecap": "round"
      }, null, -1),
      P("path", {
        d: "M8.00001 11C8.00001 11 8.00001 11 8 11C8 11 8 11 8 11C8 11 8 11 8 11C8.00001 11 8.00001 11 8.00001 11Z",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, -1)
    ]), 8, Co));
  }
}), vo = /* @__PURE__ */ oe(bo, [["__scopeId", "data-v-18c4b7c4"]]), Lo = { class: "icon" }, To = { class: "body" }, Io = /* @__PURE__ */ Q({
  __name: "NoticeBar",
  props: {
    type: { default: "info" }
  },
  setup(e) {
    const t = e, n = _e(() => t.type === "info"), s = _e(() => t.type === "success"), r = _e(() => t.type === "warning"), a = _e(() => t.type === "error");
    return (l, o) => (F(), G("div", {
      class: Se([{
        error: a.value,
        info: n.value,
        warning: r.value,
        success: s.value
      }, "notice notice-bar"])
    }, [
      P("span", Lo, [
        n.value ? (F(), Ce(_o, { key: 0 })) : le("", !0),
        s.value ? (F(), Ce(Eo, { key: 1 })) : le("", !0),
        r.value ? (F(), Ce(ho, { key: 2 })) : le("", !0),
        a.value ? (F(), Ce(vo, { key: 3 })) : le("", !0)
      ]),
      P("span", To, [
        ce(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Mo = /* @__PURE__ */ oe(Io, [["__scopeId", "data-v-b6beceff"]]);
export {
  zt as BaseButton,
  Do as BubbleSelect,
  Ao as LinkButton,
  Mo as NoticeBar,
  Bs as PrimaryButton,
  yo as SecondaryButton,
  ko as SelectInput,
  Ro as SwitchToggle,
  Po as SyncCard,
  So as TextInput,
  Vs as ToolTip
};
