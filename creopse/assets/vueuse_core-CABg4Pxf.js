import { i as _, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-CL8_UXFj.js";
import { t as H, n as O, u as j, p as L, i as k, a as V, w as U, b as G, c as Q, d as Y, e as q, __tla as __tla_1 } from "./vueuse_shared-DNH6gdLu.js";
let Te, Ce, ie, Ee, We;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })()
]).then(async ()=>{
    const { Fragment: ae, TransitionGroup: re, computed: C, customRef: ce, defineComponent: de, getCurrentInstance: D, getCurrentScope: fe, h: ve, hasInjectionContext: J, inject: pe, isReadonly: me, isRef: he, markRaw: ge, nextTick: we, onBeforeUpdate: ye, onMounted: K, onUpdated: be, reactive: Se, readonly: xe, ref: Ie, shallowReactive: Re, shallowReadonly: B, shallowRef: y, toRaw: X, toValue: x, unref: Z, watch: z, watchEffect: ee } = await _("vue"), T = k ? window : void 0, F = k ? window.navigator : void 0;
    function S(o) {
        var t;
        const c = x(o);
        return (t = c?.$el) !== null && t !== void 0 ? t : c;
    }
    function E(...o) {
        const t = (n, s, i, u)=>(n.addEventListener(s, i, u), ()=>n.removeEventListener(s, i, u)), c = C(()=>{
            const n = V(x(o[0])).filter((s)=>s != null);
            return n.every((s)=>typeof s != "string") ? n : void 0;
        });
        return U(()=>{
            var n, s;
            return [
                (n = (s = c.value) === null || s === void 0 ? void 0 : s.map((i)=>S(i))) !== null && n !== void 0 ? n : [
                    T
                ].filter((i)=>i != null),
                V(x(c.value ? o[1] : o[0])),
                V(Z(c.value ? o[2] : o[1])),
                x(c.value ? o[3] : o[2])
            ];
        }, ([n, s, i, u], l, f)=>{
            if (!n?.length || !s?.length || !i?.length) return;
            const d = q(u) ? {
                ...u
            } : u, r = n.flatMap((e)=>s.flatMap((w)=>i.map((v)=>t(e, w, v, d))));
            f(()=>{
                r.forEach((e)=>e());
            });
        }, {
            flush: "post"
        });
    }
    Ee = function(o, t, c = {}) {
        const { window: n = T, ignore: s = [], capture: i = !0, detectIframe: u = !1, controls: l = !1 } = c;
        if (!n) return l ? {
            stop: O,
            cancel: O,
            trigger: O
        } : O;
        let f = !0;
        const d = (a)=>x(s).some((p)=>{
                if (typeof p == "string") return Array.from(n.document.querySelectorAll(p)).some((h)=>h === a.target || a.composedPath().includes(h));
                {
                    const h = S(p);
                    return h && (a.target === h || a.composedPath().includes(h));
                }
            });
        function r(a) {
            const p = x(a);
            return p && p.$.subTree.shapeFlag === 16;
        }
        function e(a, p) {
            const h = x(a), W = h.$.subTree && h.$.subTree.children;
            return W == null || !Array.isArray(W) ? !1 : W.some((M)=>M.el === p.target || p.composedPath().includes(M.el));
        }
        const w = (a)=>{
            const p = S(o);
            if (a.target != null && !(!(p instanceof Element) && r(o) && e(o, a)) && !(!p || p === a.target || a.composedPath().includes(p))) {
                if ("detail" in a && a.detail === 0 && (f = !d(a)), !f) {
                    f = !0;
                    return;
                }
                t(a);
            }
        };
        let v = !1;
        const b = [
            E(n, "click", (a)=>{
                v || (v = !0, setTimeout(()=>{
                    v = !1;
                }, 0), w(a));
            }, {
                passive: !0,
                capture: i
            }),
            E(n, "pointerdown", (a)=>{
                const p = S(o);
                f = !d(a) && !!(p && !a.composedPath().includes(p));
            }, {
                passive: !0
            }),
            u && E(n, "blur", (a)=>{
                setTimeout(()=>{
                    const p = S(o);
                    let h = n.document.activeElement;
                    for(; h?.shadowRoot;)h = h.shadowRoot.activeElement;
                    h?.tagName === "IFRAME" && !p?.contains(n.document.activeElement) && t(a);
                }, 0);
            }, {
                passive: !0
            })
        ].filter(Boolean), R = ()=>b.forEach((a)=>a());
        return l ? {
            stop: R,
            cancel: ()=>{
                f = !1;
            },
            trigger: (a)=>{
                f = !0, w(a), f = !1;
            }
        } : R;
    };
    function te() {
        const o = y(!1), t = D();
        return t && K(()=>{
            o.value = !0;
        }, t), o;
    }
    function $(o) {
        const t = te();
        return C(()=>(t.value, !!o()));
    }
    const oe = Symbol("vueuse-ssr-width");
    function ne() {
        const o = J() ? Q(oe, null) : null;
        return typeof o == "number" ? o : void 0;
    }
    ie = function(o, t = {}) {
        const { window: c = T, ssrWidth: n = ne() } = t, s = $(()=>c && "matchMedia" in c && typeof c.matchMedia == "function"), i = y(typeof n == "number"), u = y(), l = y(!1), f = (d)=>{
            l.value = d.matches;
        };
        return ee(()=>{
            if (i.value) {
                i.value = !s.value, l.value = x(o).split(",").some((d)=>{
                    const r = d.includes("not all"), e = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), w = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                    let v = !!(e || w);
                    return e && v && (v = n >= L(e[1])), w && v && (v = n <= L(w[1])), r ? !v : v;
                });
                return;
            }
            s.value && (u.value = c.matchMedia(x(o)), l.value = u.value.matches);
        }), E(u, "change", f, {
            passive: !0
        }), C(()=>l.value);
    };
    function N(o, t = {}) {
        const { controls: c = !1, navigator: n = F } = t, s = $(()=>n && "permissions" in n), i = y(), u = typeof o == "string" ? {
            name: o
        } : o, l = y(), f = ()=>{
            var r, e;
            l.value = (r = (e = i.value) === null || e === void 0 ? void 0 : e.state) !== null && r !== void 0 ? r : "prompt";
        };
        E(i, "change", f, {
            passive: !0
        });
        const d = Y(async ()=>{
            if (s.value) {
                if (!i.value) try {
                    i.value = await n.permissions.query(u);
                } catch  {
                    i.value = void 0;
                } finally{
                    f();
                }
                if (c) return X(i.value);
            }
        });
        return d(), c ? {
            state: l,
            isSupported: s,
            query: d
        } : l;
    }
    Ce = function(o = {}) {
        const { navigator: t = F, read: c = !1, source: n, copiedDuring: s = 1500, legacy: i = !1 } = o, u = $(()=>t && "clipboard" in t), l = N("clipboard-read"), f = N("clipboard-write"), d = C(()=>u.value || i), r = y(""), e = y(!1), w = y(!1), v = j(()=>e.value = !1, s, {
            immediate: !1
        });
        let b = 0;
        async function R() {
            let g = !(u.value && M(l.value));
            if (!g) try {
                r.value = await t.clipboard.readText();
            } catch  {
                g = !0;
            }
            g && (r.value = W());
        }
        d.value && c && E([
            "copy",
            "cut"
        ], R, {
            passive: !0
        });
        async function a(g) {
            const m = g ?? x(n);
            if (d.value && m != null) {
                w.value = !0;
                let I = !(u.value && M(f.value));
                if (!I) try {
                    const P = p(m);
                    await t.clipboard.write([
                        P
                    ]);
                } catch  {
                    I = !0;
                }
                if (I) if (typeof m == "string") r.value = m, h(m);
                else {
                    const P = ++b, A = await m();
                    A != null && P === b && (r.value = A, h(A));
                }
                e.value = !0, v.start(), w.value = !1;
            }
        }
        function p(g) {
            return typeof g == "string" ? (r.value = g, new ClipboardItem({
                "text/plain": g
            })) : new ClipboardItem({
                "text/plain": g().then((m = "")=>(r.value = m, new Blob([
                        m
                    ], {
                        type: "text/plain"
                    })))
            });
        }
        function h(g) {
            const m = document.createElement("textarea");
            m.value = g, m.style.position = "absolute", m.style.opacity = "0", m.setAttribute("readonly", ""), document.body.appendChild(m), m.select(), document.execCommand("copy"), m.remove();
        }
        function W() {
            var g, m, I;
            return (g = (m = document) === null || m === void 0 || (I = m.getSelection) === null || I === void 0 || (I = I.call(m)) === null || I === void 0 ? void 0 : I.toString()) !== null && g !== void 0 ? g : "";
        }
        function M(g) {
            return g === "granted" || g === "prompt";
        }
        return {
            copyPending: B(w),
            isSupported: d,
            text: B(r),
            copied: B(e),
            copy: a
        };
    };
    function se(o, t, c = {}) {
        const { window: n = T, ...s } = c;
        let i;
        const u = $(()=>n && "ResizeObserver" in n), l = ()=>{
            i && (i.disconnect(), i = void 0);
        }, f = z(C(()=>{
            const r = x(o);
            return Array.isArray(r) ? r.map((e)=>S(e)) : [
                S(r)
            ];
        }), (r)=>{
            if (l(), u.value && n) {
                i = new ResizeObserver(t);
                for (const e of r)e && i.observe(e, s);
            }
        }, {
            immediate: !0,
            flush: "post"
        }), d = ()=>{
            l(), f();
        };
        return G(d), {
            isSupported: u,
            stop: d
        };
    }
    Te = function(o, t = {
        width: 0,
        height: 0
    }, c = {}) {
        const { window: n = T, box: s = "content-box" } = c, i = C(()=>{
            var e;
            return (e = S(o)) === null || e === void 0 || (e = e.namespaceURI) === null || e === void 0 ? void 0 : e.includes("svg");
        }), u = y(t.width), l = y(t.height), { stop: f } = se(o, ([e])=>{
            const w = s === "border-box" ? e.borderBoxSize : s === "content-box" ? e.contentBoxSize : e.devicePixelContentBoxSize;
            if (n && i.value) {
                const v = S(o);
                if (v) {
                    const b = v.getBoundingClientRect();
                    u.value = b.width, l.value = b.height;
                }
            } else if (w) {
                const v = V(w);
                u.value = v.reduce((b, { inlineSize: R })=>b + R, 0), l.value = v.reduce((b, { blockSize: R })=>b + R, 0);
            } else u.value = e.contentRect.width, l.value = e.contentRect.height;
        }, c);
        H(()=>{
            const e = S(o);
            e && (u.value = "offsetWidth" in e ? e.offsetWidth : t.width, l.value = "offsetHeight" in e ? e.offsetHeight : t.height);
        });
        const d = z(()=>S(o), (e)=>{
            u.value = e ? t.width : 0, l.value = e ? t.height : 0;
        });
        function r() {
            f(), d();
        }
        return {
            width: u,
            height: l,
            stop: r
        };
    };
    We = function(o = {}) {
        const { window: t = T, initialWidth: c = Number.POSITIVE_INFINITY, initialHeight: n = Number.POSITIVE_INFINITY, listenOrientation: s = !0, includeScrollbar: i = !0, type: u = "inner" } = o, l = y(c), f = y(n), d = ()=>{
            if (t) if (u === "outer") l.value = t.outerWidth, f.value = t.outerHeight;
            else if (u === "visual" && t.visualViewport) {
                const { width: e, height: w, scale: v } = t.visualViewport;
                l.value = Math.round(e * v), f.value = Math.round(w * v);
            } else i ? (l.value = t.innerWidth, f.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, f.value = t.document.documentElement.clientHeight);
        };
        d(), H(d);
        const r = {
            passive: !0
        };
        return E("resize", d, r), t && u === "visual" && t.visualViewport && E(t.visualViewport, "resize", d, r), s && z(ie("(orientation: portrait)"), ()=>d()), {
            width: l,
            height: f
        };
    };
});
export { Te as a, Ce as b, ie as c, Ee as o, We as u, __tla };
