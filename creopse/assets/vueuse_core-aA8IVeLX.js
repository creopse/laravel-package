import { i as j, n as T, a as Y, t as P, b as $, c as I, d as G, e as K, f as U, g as V, __tla as __tla_0 } from "./vueuse_shared-x2l23lLx.js";
import { __tla as __tla_1 } from "./vue-demi-colorpicker-I3jxdRIm.js";
import { r as S, d as X } from "./vue_reactivity-BQ3ZeWNI.js";
import { aJ as Z, c as L, w as R, n as ee, aa as te, O as ne } from "./vue_runtime-core-Dg0D__bv.js";
let ye, re, ge, be, ve, we;
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
    function b(e) {
        var t;
        const n = I(e);
        return (t = n?.$el) != null ? t : n;
    }
    const A = j ? window : void 0, D = j ? window.navigator : void 0;
    function _(...e) {
        let t, n, i, a;
        if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, i, a] = e, t = A) : [t, n, i, a] = e, !t) return T;
        Array.isArray(n) || (n = [
            n
        ]), Array.isArray(i) || (i = [
            i
        ]);
        const c = [], u = ()=>{
            c.forEach((h)=>h()), c.length = 0;
        }, s = (h, o, r, l)=>(h.addEventListener(o, r, l), ()=>h.removeEventListener(o, r, l)), p = R(()=>[
                b(t),
                I(a)
            ], ([h, o])=>{
            if (u(), !h) return;
            const r = G(o) ? {
                ...o
            } : o;
            c.push(...n.flatMap((l)=>i.map((f)=>s(h, l, f, r))));
        }, {
            immediate: !0,
            flush: "post"
        }), m = ()=>{
            p(), u();
        };
        return V(m), m;
    }
    let F = !1;
    ve = function(e, t, n = {}) {
        const { window: i = A, ignore: a = [], capture: c = !0, detectIframe: u = !1 } = n;
        if (!i) return T;
        Y && !F && (F = !0, Array.from(i.document.body.children).forEach((r)=>r.addEventListener("click", T)), i.document.documentElement.addEventListener("click", T));
        let s = !0;
        const p = (r)=>a.some((l)=>{
                if (typeof l == "string") return Array.from(i.document.querySelectorAll(l)).some((f)=>f === r.target || r.composedPath().includes(f));
                {
                    const f = b(l);
                    return f && (r.target === f || r.composedPath().includes(f));
                }
            }), h = [
            _(i, "click", (r)=>{
                const l = b(e);
                if (!(!l || l === r.target || r.composedPath().includes(l))) {
                    if (r.detail === 0 && (s = !p(r)), !s) {
                        s = !0;
                        return;
                    }
                    t(r);
                }
            }, {
                passive: !0,
                capture: c
            }),
            _(i, "pointerdown", (r)=>{
                const l = b(e);
                s = !p(r) && !!(l && !r.composedPath().includes(l));
            }, {
                passive: !0
            }),
            u && _(i, "blur", (r)=>{
                setTimeout(()=>{
                    var l;
                    const f = b(e);
                    ((l = i.document.activeElement) == null ? void 0 : l.tagName) === "IFRAME" && !f?.contains(i.document.activeElement) && t(r);
                }, 0);
            })
        ].filter(Boolean);
        return ()=>h.forEach((r)=>r());
    };
    function oe() {
        const e = S(!1), t = ne();
        return t && te(()=>{
            e.value = !0;
        }, t), e;
    }
    function z(e) {
        const t = oe();
        return L(()=>(t.value, !!e()));
    }
    re = function(e, t = {}) {
        const { window: n = A } = t, i = z(()=>n && "matchMedia" in n && typeof n.matchMedia == "function");
        let a;
        const c = S(!1), u = (m)=>{
            c.value = m.matches;
        }, s = ()=>{
            a && ("removeEventListener" in a ? a.removeEventListener("change", u) : a.removeListener(u));
        }, p = Z(()=>{
            i.value && (s(), a = n.matchMedia(I(e)), "addEventListener" in a ? a.addEventListener("change", u) : a.addListener(u), c.value = a.matches);
        });
        return V(()=>{
            p(), s(), a = void 0;
        }), c;
    };
    function H(e, t = {}) {
        const { controls: n = !1, navigator: i = D } = t, a = z(()=>i && "permissions" in i);
        let c;
        const u = typeof e == "string" ? {
            name: e
        } : e, s = S(), p = ()=>{
            c && (s.value = c.state);
        }, m = K(async ()=>{
            if (a.value) {
                if (!c) try {
                    c = await i.permissions.query(u), _(c, "change", p), p();
                } catch  {
                    s.value = "prompt";
                }
                return c;
            }
        });
        return m(), n ? {
            state: s,
            isSupported: a,
            query: m
        } : s;
    }
    we = function(e = {}) {
        const { navigator: t = D, read: n = !1, source: i, copiedDuring: a = 1500, legacy: c = !1 } = e, u = z(()=>t && "clipboard" in t), s = H("clipboard-read"), p = H("clipboard-write"), m = L(()=>u.value || c), h = S(""), o = S(!1), r = $(()=>o.value = !1, a);
        function l() {
            u.value && N(s.value) ? t.clipboard.readText().then((v)=>{
                h.value = v;
            }) : h.value = E();
        }
        m.value && n && _([
            "copy",
            "cut"
        ], l);
        async function f(v = I(i)) {
            m.value && v != null && (u.value && N(p.value) ? await t.clipboard.writeText(v) : g(v), h.value = v, o.value = !0, r.start());
        }
        function g(v) {
            const y = document.createElement("textarea");
            y.value = v ?? "", y.style.position = "absolute", y.style.opacity = "0", document.body.appendChild(y), y.select(), document.execCommand("copy"), y.remove();
        }
        function E() {
            var v, y, x;
            return (x = (y = (v = document?.getSelection) == null ? void 0 : v.call(document)) == null ? void 0 : y.toString()) != null ? x : "";
        }
        function N(v) {
            return v === "granted" || v === "prompt";
        }
        return {
            isSupported: m,
            text: h,
            copied: o,
            copy: f
        };
    };
    const W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, M = "__vueuse_ssr_handlers__", ie = se();
    function se() {
        return M in W || (W[M] = W[M] || {}), W[M];
    }
    function ae(e, t) {
        return ie[e] || t;
    }
    function ue(e) {
        return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
    }
    const ce = {
        boolean: {
            read: (e)=>e === "true",
            write: (e)=>String(e)
        },
        object: {
            read: (e)=>JSON.parse(e),
            write: (e)=>JSON.stringify(e)
        },
        number: {
            read: (e)=>Number.parseFloat(e),
            write: (e)=>String(e)
        },
        any: {
            read: (e)=>e,
            write: (e)=>String(e)
        },
        string: {
            read: (e)=>e,
            write: (e)=>String(e)
        },
        map: {
            read: (e)=>new Map(JSON.parse(e)),
            write: (e)=>JSON.stringify(Array.from(e.entries()))
        },
        set: {
            read: (e)=>new Set(JSON.parse(e)),
            write: (e)=>JSON.stringify(Array.from(e))
        },
        date: {
            read: (e)=>new Date(e),
            write: (e)=>e.toISOString()
        }
    }, J = "vueuse-storage";
    function le(e, t, n, i = {}) {
        var a;
        const { flush: c = "pre", deep: u = !0, listenToStorageChanges: s = !0, writeDefaults: p = !0, mergeDefaults: m = !1, shallow: h, window: o = A, eventFilter: r, onError: l = (d)=>{
            console.error(d);
        }, initOnMounted: f } = i, g = (h ? X : S)(typeof t == "function" ? t() : t);
        if (!n) try {
            n = ae("getDefaultStorage", ()=>{
                var d;
                return (d = A) == null ? void 0 : d.localStorage;
            })();
        } catch (d) {
            l(d);
        }
        if (!n) return g;
        const E = I(t), N = ue(E), v = (a = i.serializer) != null ? a : ce[N], { pause: y, resume: x } = U(g, ()=>q(g.value), {
            flush: c,
            deep: u,
            eventFilter: r
        });
        o && s && P(()=>{
            _(o, "storage", C), _(o, J, Q), f && C();
        }), f || C();
        function B(d, w) {
            o && o.dispatchEvent(new CustomEvent(J, {
                detail: {
                    key: e,
                    oldValue: d,
                    newValue: w,
                    storageArea: n
                }
            }));
        }
        function q(d) {
            try {
                const w = n.getItem(e);
                if (d == null) B(w, null), n.removeItem(e);
                else {
                    const O = v.write(d);
                    w !== O && (n.setItem(e, O), B(w, O));
                }
            } catch (w) {
                l(w);
            }
        }
        function k(d) {
            const w = d ? d.newValue : n.getItem(e);
            if (w == null) return p && E != null && n.setItem(e, v.write(E)), E;
            if (!d && m) {
                const O = v.read(w);
                return typeof m == "function" ? m(O, E) : N === "object" && !Array.isArray(O) ? {
                    ...E,
                    ...O
                } : O;
            } else return typeof w != "string" ? w : v.read(w);
        }
        function C(d) {
            if (!(d && d.storageArea !== n)) {
                if (d && d.key == null) {
                    g.value = E;
                    return;
                }
                if (!(d && d.key !== e)) {
                    y();
                    try {
                        d?.newValue !== v.write(g.value) && (g.value = k(d));
                    } catch (w) {
                        l(w);
                    } finally{
                        d ? ee(x) : x();
                    }
                }
            }
        }
        function Q(d) {
            C(d.detail);
        }
        return g;
    }
    function de(e, t, n = {}) {
        const { window: i = A, ...a } = n;
        let c;
        const u = z(()=>i && "ResizeObserver" in i), s = ()=>{
            c && (c.disconnect(), c = void 0);
        }, p = L(()=>Array.isArray(e) ? e.map((o)=>b(o)) : [
                b(e)
            ]), m = R(p, (o)=>{
            if (s(), u.value && i) {
                c = new ResizeObserver(t);
                for (const r of o)r && c.observe(r, a);
            }
        }, {
            immediate: !0,
            flush: "post"
        }), h = ()=>{
            s(), m();
        };
        return V(h), {
            isSupported: u,
            stop: h
        };
    }
    ge = function(e, t = {
        width: 0,
        height: 0
    }, n = {}) {
        const { window: i = A, box: a = "content-box" } = n, c = L(()=>{
            var o, r;
            return (r = (o = b(e)) == null ? void 0 : o.namespaceURI) == null ? void 0 : r.includes("svg");
        }), u = S(t.width), s = S(t.height), { stop: p } = de(e, ([o])=>{
            const r = a === "border-box" ? o.borderBoxSize : a === "content-box" ? o.contentBoxSize : o.devicePixelContentBoxSize;
            if (i && c.value) {
                const l = b(e);
                if (l) {
                    const f = l.getBoundingClientRect();
                    u.value = f.width, s.value = f.height;
                }
            } else if (r) {
                const l = Array.isArray(r) ? r : [
                    r
                ];
                u.value = l.reduce((f, { inlineSize: g })=>f + g, 0), s.value = l.reduce((f, { blockSize: g })=>f + g, 0);
            } else u.value = o.contentRect.width, s.value = o.contentRect.height;
        }, n);
        P(()=>{
            const o = b(e);
            o && (u.value = "offsetWidth" in o ? o.offsetWidth : t.width, s.value = "offsetHeight" in o ? o.offsetHeight : t.height);
        });
        const m = R(()=>b(e), (o)=>{
            u.value = o ? t.width : 0, s.value = o ? t.height : 0;
        });
        function h() {
            p(), m();
        }
        return {
            width: u,
            height: s,
            stop: h
        };
    };
    ye = function(e, t, n = {}) {
        const { window: i = A } = n;
        return le(e, t, i?.localStorage, n);
    };
    be = function(e = {}) {
        const { window: t = A, initialWidth: n = Number.POSITIVE_INFINITY, initialHeight: i = Number.POSITIVE_INFINITY, listenOrientation: a = !0, includeScrollbar: c = !0 } = e, u = S(n), s = S(i), p = ()=>{
            t && (c ? (u.value = t.innerWidth, s.value = t.innerHeight) : (u.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight));
        };
        if (p(), P(p), _("resize", p, {
            passive: !0
        }), a) {
            const m = re("(orientation: portrait)");
            R(m, ()=>p());
        }
        return {
            width: u,
            height: s
        };
    };
});
export { ye as a, re as b, ge as c, be as d, ve as o, we as u, __tla };
