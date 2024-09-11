import { defineComponent as c, openBlock as a, createElementBlock as i, createElementVNode as l, renderSlot as _, normalizeClass as h, createCommentVNode as v, createBlock as m, unref as E, withModifiers as R, withCtx as $, createTextVNode as M, toDisplayString as p, createSlots as B, renderList as g, normalizeProps as I, guardReactiveProps as L, mergeModels as y, useModel as w, ref as b, withDirectives as Z, Fragment as S, vModelSelect as U, vModelDynamic as A, computed as O, createVNode as W, vModelCheckbox as j } from "vue";
var N = /* @__PURE__ */ ((n) => (n.None = "pos-none", n.Top = "pos-top", n.Bottom = "pos-bottom", n.Left = "pos-left", n.Right = "pos-right", n))(N || {});
const H = ["aria-label"], F = { class: "tooltip-container" }, G = { class: "tooltip-body" }, J = /* @__PURE__ */ c({
  __name: "ToolTip",
  props: {
    alt: { default: "" },
    position: { default: N.Bottom }
  },
  setup(n) {
    return (e, o) => (a(), i("div", {
      class: "tooltip",
      "aria-label": e.alt
    }, [
      l("div", F, [
        l("div", G, [
          _(e.$slots, "default", {}, void 0, !0)
        ]),
        (a(), i("svg", {
          class: h(["beak", e.position]),
          width: "28",
          height: "6",
          viewBox: "0 0 28 6",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, o[0] || (o[0] = [
          l("g", null, [
            l("path", {
              d: "M15.4142 4.58579C14.6332 5.36683 13.3668 5.36683 12.5858 4.58579L8 0L20 0L15.4142 4.58579Z",
              fill: "currentColor"
            })
          ], -1)
        ]), 2))
      ])
    ], 8, H));
  }
}), d = (n, e) => {
  const o = n.__vccOpts || n;
  for (const [s, r] of e)
    o[s] = r;
  return o;
}, K = /* @__PURE__ */ d(J, [["__scopeId", "data-v-4e716012"]]), P = {
  key: 0,
  class: "icon"
}, Q = { class: "text" }, X = /* @__PURE__ */ c({
  __name: "BaseButton",
  props: {
    type: { default: "secondary" },
    size: { default: "regular" },
    tooltip: { default: "" },
    forceTooltip: { type: Boolean, default: !1 }
  },
  setup(n) {
    return (e, o) => {
      var s;
      return a(), i("button", {
        class: h(["tbpro-button", { [e.type]: e.type, small: e.size === "small" }]),
        type: "button"
      }, [
        (s = e.$slots) != null && s.icon ? (a(), i("span", P, [
          _(e.$slots, "icon", {}, void 0, !0)
        ])) : v("", !0),
        l("span", Q, [
          _(e.$slots, "default", {}, void 0, !0)
        ]),
        e.tooltip ? (a(), m(K, {
          key: 1,
          class: h(["tooltip", { "display-tooltip": e.forceTooltip }]),
          position: E(N).Bottom,
          onClick: o[0] || (o[0] = R(() => {
          }, ["prevent"]))
        }, {
          default: $(() => [
            M(p(e.tooltip), 1)
          ]),
          _: 1
        }, 8, ["class", "position"])) : v("", !0)
      ], 2);
    };
  }
}), q = /* @__PURE__ */ d(X, [["__scopeId", "data-v-b9d9f518"]]), Y = /* @__PURE__ */ c({
  __name: "PrimaryButton",
  setup(n) {
    return (e, o) => (a(), m(q, { type: "primary" }, B({ _: 2 }, [
      g(e.$slots, (s, r) => ({
        name: r,
        fn: $((t) => [
          _(e.$slots, r, I(L(t)))
        ])
      }))
    ]), 1024));
  }
}), U1 = /* @__PURE__ */ c({
  __name: "SecondaryButton",
  setup(n) {
    return (e, o) => (a(), m(q, { type: "secondary" }, B({ _: 2 }, [
      g(e.$slots, (s, r) => ({
        name: r,
        fn: $((t) => [
          _(e.$slots, r, I(L(t)))
        ])
      }))
    ]), 1024));
  }
}), A1 = /* @__PURE__ */ c({
  __name: "LinkButton",
  setup(n) {
    return (e, o) => (a(), m(q, { type: "link" }, B({ _: 2 }, [
      g(e.$slots, (s, r) => ({
        name: r,
        fn: $((t) => [
          _(e.$slots, r, I(L(t)))
        ])
      }))
    ]), 1024));
  }
}), x = ["for"], e1 = { class: "label" }, t1 = {
  key: 0,
  class: "required"
}, o1 = ["id", "name", "required", "disabled"], s1 = ["value"], l1 = /* @__PURE__ */ c({
  __name: "SelectInput",
  props: /* @__PURE__ */ y({
    name: {},
    options: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ y(["submit"], ["update:modelValue"]),
  setup(n) {
    const e = w(n, "modelValue"), o = b(!1), s = b(""), r = (t) => {
      o.value = !0, s.value = t.target.validationMessage;
    };
    return (t, f) => (a(), i("label", {
      class: "wrapper",
      for: t.name
    }, [
      l("span", e1, [
        _(t.$slots, "default", {}, void 0, !0),
        t.required && (e.value === null || e.value === "") ? (a(), i("span", t1, "*")) : v("", !0)
      ]),
      Z(l("select", {
        class: "tbpro-select w-full rounded-md",
        "onUpdate:modelValue": f[0] || (f[0] = (C) => e.value = C),
        id: t.name,
        name: t.name,
        required: t.required,
        disabled: t.disabled,
        onInvalid: r
      }, [
        (a(!0), i(S, null, g(t.options, (C) => (a(), i("option", {
          value: C.value,
          key: C.value
        }, p(C.label), 9, s1))), 128))
      ], 40, o1), [
        [U, e.value]
      ]),
      l("span", {
        class: h([{ visible: o.value }, "help-label"])
      }, p(s.value), 3)
    ], 8, x));
  }
}), O1 = /* @__PURE__ */ d(l1, [["__scopeId", "data-v-4d2c6857"]]), a1 = ["for"], n1 = { class: "label" }, r1 = {
  key: 0,
  class: "required"
}, i1 = ["type", "id", "name", "disabled", "placeholder", "required"], c1 = {
  key: 0,
  class: "help-label invalid"
}, u1 = {
  key: 1,
  class: "help-label"
}, d1 = {
  key: 2,
  class: "help-label"
}, C1 = /* @__PURE__ */ c({
  __name: "TextInput",
  props: /* @__PURE__ */ y({
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
  emits: /* @__PURE__ */ y(["submit"], ["update:modelValue"]),
  setup(n, { expose: e }) {
    const o = w(n, "modelValue"), s = b(!1), r = b(""), t = b(!1), f = b(null);
    e({ focus: () => {
      f.value && f.value.focus();
    } });
    const k = (u) => {
      s.value = !0, t.value = !0, r.value = u.target.validationMessage;
    }, V = () => {
      t.value = !0;
    };
    return (u, T) => {
      var z;
      return a(), i("label", {
        class: "wrapper",
        for: u.name
      }, [
        l("span", n1, [
          _(u.$slots, "default", {}, void 0, !0),
          u.required && ((z = o.value) == null ? void 0 : z.length) === 0 ? (a(), i("span", r1, "*")) : v("", !0)
        ]),
        Z(l("input", {
          class: h(["tbpro-input", { dirty: t.value }]),
          "onUpdate:modelValue": T[0] || (T[0] = (D) => o.value = D),
          type: u.type,
          id: u.name,
          name: u.name,
          disabled: u.disabled,
          placeholder: u.placeholder,
          required: u.required,
          onInvalid: k,
          onChange: V,
          ref_key: "inputRef",
          ref: f
        }, null, 42, i1), [
          [A, o.value]
        ]),
        s.value ? (a(), i("span", c1, p(r.value), 1)) : u.help ? (a(), i("span", u1, p(u.help), 1)) : (a(), i("span", d1))
      ], 8, a1);
    };
  }
}), W1 = /* @__PURE__ */ d(C1, [["__scopeId", "data-v-29d85784"]]), p1 = ["onClick"], _1 = /* @__PURE__ */ c({
  __name: "BubbleSelect",
  props: /* @__PURE__ */ y({
    options: {}
  }, {
    modelValue: { default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(n) {
    const e = w(n, "modelValue"), o = (s) => {
      e.value.indexOf(s.value) > -1 ? e.value = e.value.filter((t) => s.value !== t) : e.value = [
        ...e.value,
        s.value
      ], e.value.sort();
    };
    return (s, r) => (a(), i("ul", null, [
      (a(!0), i(S, null, g(s.options, (t) => (a(), i("li", {
        key: t.value
      }, [
        l("button", {
          class: h({ selected: e.value.indexOf(t.value) > -1 }),
          type: "button",
          onClick: () => o(t)
        }, p(t.label), 11, p1)
      ]))), 128))
    ]));
  }
}), j1 = /* @__PURE__ */ d(_1, [["__scopeId", "data-v-d9b2490e"]]), f1 = { class: "wrapper" }, v1 = { class: "header" }, m1 = { class: "text-wrapper" }, h1 = { class: "title" }, b1 = { class: "selected" }, y1 = { class: "rows" }, g1 = ["onUpdate:modelValue"], $1 = /* @__PURE__ */ c({
  __name: "SyncCard",
  props: /* @__PURE__ */ y({
    title: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(n) {
    const e = w(n, "modelValue"), o = O(() => e.value.filter((t) => t.checked).length), s = () => {
      e.value = e.value.map((t) => ({
        ...t,
        checked: !0
      }));
    }, r = (t) => t;
    return (t, f) => (a(), i("div", f1, [
      l("div", v1, [
        _(t.$slots, "icon", {}, void 0, !0),
        l("div", m1, [
          l("div", h1, p(t.title), 1),
          l("div", b1, p(r("ftue.itemsSelected", { count: o.value })), 1)
        ]),
        W(Y, {
          class: "select-all",
          size: "small",
          onClick: s,
          title: r("ftue.selectAllCalendars")
        }, {
          default: $(() => [
            M(p(r("ftue.selectAll")), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ]),
      l("ul", y1, [
        (a(!0), i(S, null, g(e.value, (C, k) => (a(), i("li", {
          class: "row",
          key: C.key
        }, [
          l("label", null, [
            Z(l("input", {
              type: "checkbox",
              "onUpdate:modelValue": (V) => e.value[k].checked = V
            }, null, 8, g1), [
              [j, e.value[k].checked]
            ]),
            M(" " + p(C.label), 1)
          ])
        ]))), 128))
      ])
    ]));
  }
}), H1 = /* @__PURE__ */ d($1, [["__scopeId", "data-v-68237470"]]), k1 = ["aria-label"], w1 = /* @__PURE__ */ c({
  __name: "NoticeInfoIcon",
  setup(n) {
    const e = (o) => o;
    return (o, s) => (a(), i("svg", {
      class: "tbpro-notice-icon",
      "aria-label": e("icons.info"),
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, s[0] || (s[0] = [
      l("g", { id: "icon" }, [
        l("path", {
          id: "path293",
          opacity: "0.2",
          d: "M14.5 7.5C14.5 9.35652 13.7625 11.137 12.4497 12.4498C11.137 13.7625 9.35652 14.5 7.5 14.5C5.64348 14.5 3.86301 13.7625 2.55025 12.4498C1.2375 11.137 0.5 9.35652 0.5 7.5C0.5 5.64348 1.2375 3.86299 2.55025 2.55023C3.86301 1.23748 5.64348 0.5 7.5 0.5C9.35652 0.5 11.137 1.23748 12.4497 2.55023C13.7625 3.86299 14.5 5.64348 14.5 7.5Z",
          fill: "currentColor"
        }),
        l("path", {
          id: "path1012",
          d: "M7.5 0C3.36381 0 0 3.36379 0 7.5C0 11.6362 3.36381 15 7.5 15C11.6362 15 15 11.6362 15 7.5C15 3.36379 11.6362 0 7.5 0ZM7.5 1C7.60617 1 7.71232 1.00281 7.81836 1.00781C7.92535 1.01281 8.03117 1.02105 8.13672 1.03125C8.2429 1.04155 8.34852 1.05501 8.45312 1.07031C11.2847 1.48435 13.5157 3.71533 13.9297 6.54688C13.945 6.65148 13.9585 6.7571 13.9688 6.86328C13.979 6.96883 13.9871 7.07465 13.9922 7.18164C13.9974 7.28768 14 7.39383 14 7.5C14 7.81456 13.9766 8.12339 13.9336 8.42578C13.8895 8.73576 13.8225 9.03794 13.7363 9.33203C13.5605 9.93216 13.3012 10.4957 12.9707 11.0098L12.9688 11.0137L12.9648 11.0195C12.798 11.278 12.6129 11.5243 12.4121 11.7559C12.2809 11.9071 12.1444 12.0529 12 12.1914V12.168C11.6942 12.4699 11.3592 12.7408 11 12.9766V12.9785C10.7453 13.1413 10.4784 13.2853 10.2012 13.4121C9.92155 13.54 9.63134 13.6485 9.33203 13.7363C9.03821 13.8225 8.73544 13.8894 8.42578 13.9336C8.12342 13.9767 7.81454 14 7.5 14C7.18546 14 6.87658 13.9767 6.57422 13.9336C6.26456 13.8894 5.96179 13.8225 5.66797 13.7363C5.36871 13.648 5.07845 13.54 4.79883 13.4121C4.52169 13.2843 4.25468 13.1413 4 12.9785V12.9766C3.64076 12.7408 3.30578 12.4699 3 12.168V12.1914C2.85556 12.0529 2.71907 11.9071 2.58789 11.7559C2.38709 11.5243 2.202 11.278 2.03516 11.0195L2.0293 11.0098C1.69881 10.4967 1.43949 9.93216 1.26367 9.33203C1.17751 9.03794 1.11052 8.73576 1.06641 8.42578C1.02337 8.12339 1 7.81456 1 7.5C1 7.18575 1.02352 6.87643 1.06641 6.57422C1.20042 5.62989 1.53798 4.75361 2.03125 3.98633C2.53528 3.20232 3.20232 2.53528 3.98633 2.03125C4.7536 1.53797 5.62989 1.20042 6.57422 1.06641C6.87643 1.02351 7.18575 1 7.5 1ZM7.5 4C7.36739 4 7.24021 4.05266 7.14645 4.14642C7.05268 4.24019 7 4.36739 7 4.5C7 4.63261 7.05268 4.75981 7.14645 4.85358C7.24021 4.94734 7.36739 5 7.5 5C7.63261 5 7.75979 4.94734 7.85355 4.85358C7.94732 4.75981 8 4.63261 8 4.5C8 4.36739 7.94732 4.24019 7.85355 4.14642C7.75979 4.05266 7.63261 4 7.5 4ZM7.5 6C7.36739 6 7.24021 6.05266 7.14645 6.14642C7.05268 6.24019 7 6.36739 7 6.5V10.5C7 10.6326 7.05268 10.7598 7.14645 10.8536C7.24021 10.9473 7.36739 11 7.5 11C7.63261 11 7.75979 10.9473 7.85355 10.8536C7.94732 10.7598 8 10.6326 8 10.5V6.5C8 6.36739 7.94732 6.24019 7.85355 6.14642C7.75979 6.05266 7.63261 6 7.5 6Z",
          fill: "currentColor"
        })
      ], -1)
    ]), 8, k1));
  }
}), V1 = /* @__PURE__ */ d(w1, [["__scopeId", "data-v-b08e5496"]]), M1 = ["aria-label"], B1 = /* @__PURE__ */ c({
  __name: "NoticeSuccessIcon",
  setup(n) {
    const e = (o) => o;
    return (o, s) => (a(), i("svg", {
      class: "tbpro-success-icon",
      "aria-label": e("icons.success"),
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, s[0] || (s[0] = [
      l("g", { id: "icon" }, [
        l("path", {
          id: "path293",
          opacity: "0.2",
          d: "M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5C0 5.51088 0.790176 3.6032 2.1967 2.19668C3.60322 0.790154 5.51088 0 7.5 0C9.48912 0 11.3968 0.790154 12.8033 2.19668C14.2098 3.6032 15 5.51088 15 7.5Z",
          fill: "none",
          class: "tbpro-icon-background"
        }),
        l("path", {
          id: "path1012",
          d: "M7.5 0C3.3638 0 0 3.36379 0 7.5C0 11.6362 3.3638 15 7.5 15C11.6362 15 15 11.6362 15 7.5C15 3.36379 11.6362 0 7.5 0ZM7.5 1C7.60617 1 7.71232 1.00261 7.81836 1.00781C7.92535 1.01293 8.03117 1.02104 8.13672 1.03125C8.2429 1.04152 8.34852 1.05502 8.45312 1.07031C11.2847 1.48435 13.5157 3.7153 13.9297 6.54688C13.945 6.65148 13.9585 6.7571 13.9688 6.86328C13.979 6.96883 13.9871 7.07465 13.9922 7.18164C13.9974 7.28768 14 7.39383 14 7.5C14 7.81456 13.9766 8.12339 13.9336 8.42578C13.8895 8.73576 13.8225 9.03794 13.7363 9.33203C13.5605 9.93216 13.3012 10.4957 12.9707 11.0098C12.9701 11.0111 12.9694 11.0124 12.9688 11.0137C12.9675 11.0157 12.9661 11.0176 12.9648 11.0195C12.798 11.278 12.6129 11.5243 12.4121 11.7559C12.2809 11.9071 12.1444 12.0529 12 12.1914V12.168C11.6942 12.4699 11.3592 12.7408 11 12.9766V12.9785C10.7453 13.1413 10.4784 13.2853 10.2012 13.4121C9.92155 13.54 9.63134 13.6485 9.33203 13.7363C9.03821 13.8225 8.73544 13.8894 8.42578 13.9336C8.12342 13.9767 7.81454 14 7.5 14C7.18546 14 6.87658 13.9767 6.57422 13.9336C6.26456 13.8894 5.96179 13.8225 5.66797 13.7363C5.36866 13.6485 5.07845 13.54 4.79883 13.4121C4.52158 13.2853 4.25469 13.1413 4 12.9785V12.9766C3.64076 12.7408 3.30579 12.4699 3 12.168V12.1914C2.85556 12.0529 2.71907 11.9071 2.58789 11.7559C2.38709 11.5243 2.202 11.278 2.03516 11.0195C2.0332 11.0163 2.03125 11.013 2.0293 11.0098C1.69881 10.4957 1.43949 9.93216 1.26367 9.33203C1.17751 9.03794 1.11052 8.73576 1.06641 8.42578C1.02337 8.12339 1 7.81456 1 7.5C1 7.18575 1.02352 6.87643 1.06641 6.57422C1.20042 5.62989 1.53798 4.75361 2.03125 3.98633C2.53528 3.20232 3.20232 2.53528 3.98633 2.03125C4.75361 1.53797 5.62989 1.20042 6.57422 1.06641C6.87643 1.02352 7.18575 1 7.5 1ZM10.4668 5.00195C10.3345 5.01016 10.2108 5.07057 10.123 5.16992L6.93945 8.81055L4.8125 7.10938C4.76122 7.06831 4.70234 7.03771 4.63924 7.01941C4.57614 7.00111 4.51005 6.99543 4.44475 7.00269C4.37945 7.00994 4.31622 7.03 4.25867 7.06171C4.20112 7.09341 4.15039 7.13618 4.10938 7.1875C4.06831 7.23878 4.03775 7.29768 4.01945 7.36078C4.00115 7.42388 3.99546 7.48994 4.00272 7.55524C4.00997 7.62054 4.03003 7.68379 4.06173 7.74133C4.09344 7.79888 4.13618 7.84961 4.1875 7.89062L6.6875 9.89062C6.78805 9.97139 6.91592 10.0102 7.04439 9.9989C7.17287 9.98762 7.29202 9.92713 7.37695 9.83008L10.877 5.83008C10.9204 5.78064 10.9537 5.7231 10.9749 5.66077C10.9961 5.59843 11.0047 5.53249 11.0004 5.4668C10.996 5.4011 10.9787 5.33695 10.9495 5.27795C10.9203 5.21896 10.8797 5.16632 10.8301 5.12305C10.7805 5.07998 10.7228 5.04715 10.6605 5.02637C10.5982 5.00559 10.5323 4.99728 10.4668 5.00195Z",
          fill: "currentColor"
        })
      ], -1)
    ]), 8, M1));
  }
}), I1 = /* @__PURE__ */ d(B1, [["__scopeId", "data-v-2dfe8f22"]]), L1 = ["aria-label"], Z1 = /* @__PURE__ */ c({
  __name: "NoticeWarningIcon",
  setup(n) {
    const e = (o) => o;
    return (o, s) => (a(), i("svg", {
      class: "tbpro-warning-icon",
      "aria-label": e("icons.warning"),
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, s[0] || (s[0] = [
      l("g", { id: "icon" }, [
        l("path", {
          id: "path293",
          opacity: "0.2",
          d: "M14.5 7.5C14.5 9.35652 13.7625 11.137 12.4497 12.4498C11.137 13.7625 9.35652 14.5 7.5 14.5C5.64348 14.5 3.86301 13.7625 2.55025 12.4498C1.2375 11.137 0.5 9.35652 0.5 7.5C0.5 5.64348 1.2375 3.86299 2.55025 2.55023C3.86301 1.23748 5.64348 0.5 7.5 0.5C9.35652 0.5 11.137 1.23748 12.4497 2.55023C13.7625 3.86299 14.5 5.64348 14.5 7.5Z",
          fill: "currentColor"
        }),
        l("path", {
          id: "path1012",
          d: "M7.5 0C3.36381 0 0 3.36379 0 7.5C0 11.6362 3.36381 15 7.5 15C11.6362 15 15 11.6362 15 7.5C15 3.36379 11.6362 0 7.5 0ZM7.5 1C7.60617 1 7.71232 1.00281 7.81836 1.00781C7.92535 1.01281 8.03117 1.02105 8.13672 1.03125C8.2429 1.04155 8.34852 1.05501 8.45312 1.07031C11.2847 1.48435 13.5157 3.71533 13.9297 6.54688C13.945 6.65148 13.9585 6.7571 13.9688 6.86328C13.979 6.96883 13.9871 7.07465 13.9922 7.18164C13.9974 7.28768 14 7.39383 14 7.5C14 7.81456 13.9766 8.12339 13.9336 8.42578C13.8895 8.73576 13.8225 9.03794 13.7363 9.33203C13.5605 9.93216 13.3012 10.4957 12.9707 11.0098L12.9688 11.0137L12.9648 11.0195C12.798 11.278 12.6129 11.5243 12.4121 11.7559C12.2809 11.9071 12.1444 12.0529 12 12.1914V12.168C11.6942 12.4699 11.3592 12.7408 11 12.9766V12.9785C10.7453 13.1413 10.4784 13.2853 10.2012 13.4121C9.92155 13.54 9.63134 13.6485 9.33203 13.7363C9.03821 13.8225 8.73544 13.8894 8.42578 13.9336C8.12342 13.9767 7.81454 14 7.5 14C7.18546 14 6.87658 13.9767 6.57422 13.9336C6.26456 13.8894 5.96179 13.8225 5.66797 13.7363C5.36871 13.648 5.07845 13.54 4.79883 13.4121C4.52169 13.2843 4.25468 13.1413 4 12.9785V12.9766C3.64076 12.7408 3.30578 12.4699 3 12.168V12.1914C2.85556 12.0529 2.71907 11.9071 2.58789 11.7559C2.38709 11.5243 2.202 11.278 2.03516 11.0195L2.0293 11.0098C1.69881 10.4967 1.43949 9.93216 1.26367 9.33203C1.17751 9.03794 1.11052 8.73576 1.06641 8.42578C1.02337 8.12339 1 7.81456 1 7.5C1 7.18575 1.02352 6.87643 1.06641 6.57422C1.20042 5.62989 1.53798 4.75361 2.03125 3.98633C2.53528 3.20232 3.20232 2.53528 3.98633 2.03125C4.7536 1.53797 5.62989 1.20042 6.57422 1.06641C6.87643 1.02351 7.18575 1 7.5 1ZM7.5 4C7.36739 4 7.24021 4.05266 7.14645 4.14642C7.05268 4.24019 7 4.36739 7 4.5C7 4.63261 7.05268 4.75981 7.14645 4.85358C7.24021 4.94734 7.36739 5 7.5 5C7.63261 5 7.75979 4.94734 7.85355 4.85358C7.94732 4.75981 8 4.63261 8 4.5C8 4.36739 7.94732 4.24019 7.85355 4.14642C7.75979 4.05266 7.63261 4 7.5 4ZM7.5 6C7.36739 6 7.24021 6.05266 7.14645 6.14642C7.05268 6.24019 7 6.36739 7 6.5V10.5C7 10.6326 7.05268 10.7598 7.14645 10.8536C7.24021 10.9473 7.36739 11 7.5 11C7.63261 11 7.75979 10.9473 7.85355 10.8536C7.94732 10.7598 8 10.6326 8 10.5V6.5C8 6.36739 7.94732 6.24019 7.85355 6.14642C7.75979 6.05266 7.63261 6 7.5 6Z",
          fill: "currentColor"
        })
      ], -1)
    ]), 8, L1));
  }
}), S1 = /* @__PURE__ */ d(Z1, [["__scopeId", "data-v-52ecacca"]]), N1 = ["aria-label"], q1 = /* @__PURE__ */ c({
  __name: "NoticeCriticalIcon",
  setup(n) {
    const e = (o) => o;
    return (o, s) => (a(), i("svg", {
      "aria-label": e("icons.critical"),
      class: "tbpro-critical-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, s[0] || (s[0] = [
      l("path", {
        opacity: "0.2",
        d: "M8 1C7.34694 1.00095 6.778 1.45312 6.5 2L1.324 11.4609C1 12 1.00152 12.1118 1 12.5C1 13.3284 1.67157 14 2.5 14H13.5C14.3284 14 15 13.3284 15 12.5C15 12.106 15 12 14.668 11.4473L9.5 2C9.218 1.44727 8.65609 1.00005 8 1Z",
        fill: "none",
        class: "tbpro-icon-background"
      }, null, -1),
      l("path", {
        d: "M8 1C7.34694 1.00095 6.778 1.45312 6.5 2L1.324 11.4609C1 12 1.00152 12.1118 1 12.5C1 13.3284 1.67157 14 2.5 14H13.5C14.3284 14 15 13.3284 15 12.5C15 12.106 15 12 14.668 11.4473L9.5 2C9.218 1.44727 8.65609 1.00005 8 1Z",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, -1),
      l("path", {
        d: "M8 5V9",
        stroke: "currentColor",
        "stroke-linecap": "round"
      }, null, -1),
      l("path", {
        d: "M8.00001 11C8.00001 11 8.00001 11 8 11C8 11 8 11 8 11C8 11 8 11 8 11C8.00001 11 8.00001 11 8.00001 11Z",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, -1)
    ]), 8, N1));
  }
}), T1 = /* @__PURE__ */ d(q1, [["__scopeId", "data-v-ff648963"]]), z1 = { class: "icon" }, D1 = { class: "body" }, E1 = /* @__PURE__ */ c({
  __name: "NoticeBar",
  props: {
    type: { default: "info" }
  },
  setup(n) {
    const e = n, o = e.type === "info", s = e.type === "success;", r = e.type === "warning", t = e.type === "error";
    return (f, C) => (a(), i("div", {
      class: h([{
        error: t,
        info: o,
        warning: r,
        success: s
      }, "notice notice-bar"])
    }, [
      l("span", z1, [
        o ? (a(), m(V1, { key: 0 })) : v("", !0),
        s ? (a(), m(I1, { key: 1 })) : v("", !0),
        r ? (a(), m(S1, { key: 2 })) : v("", !0),
        t ? (a(), m(T1, { key: 3 })) : v("", !0)
      ]),
      l("span", D1, [
        _(f.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), F1 = /* @__PURE__ */ d(E1, [["__scopeId", "data-v-9884cc99"]]);
export {
  q as BaseButton,
  j1 as BubbleSelect,
  A1 as LinkButton,
  F1 as NoticeBar,
  Y as PrimaryButton,
  U1 as SecondaryButton,
  O1 as SelectInput,
  H1 as SyncCard,
  W1 as TextInput,
  K as ToolTip
};
