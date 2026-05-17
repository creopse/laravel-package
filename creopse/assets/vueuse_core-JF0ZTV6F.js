import { i as X, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-Wj_7cvB0.js";
import { t as j, n as _, a as Z, p as D, i as G, b as B, c as ee, d as te, e as ne, f as oe, g as ie, h as re, __tla as __tla_1 } from "./vueuse_shared-Din2_mCu.js";
let Je, Ue, De, ge, Le, je;
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
    const { Fragment: Te, TransitionGroup: Me, computed: A, customRef: Oe, defineComponent: We, getCurrentInstance: se, getCurrentScope: Ne, h: Ae, hasInjectionContext: ae, inject: Pe, isReadonly: ze, isRef: Ve, markRaw: _e, nextTick: ue, onBeforeUpdate: $e, onMounted: le, onUpdated: ke, reactive: Be, readonly: Fe, ref: ce, shallowReactive: He, shallowReadonly: L, shallowRef: x, toRaw: de, toValue: R, unref: fe, watch: F, watchEffect: pe } = await X("vue"), M = G ? window : void 0, Q = G ? window.navigator : void 0;
    function O(e) {
        var t;
        const i = R(e);
        return (t = i?.$el) !== null && t !== void 0 ? t : i;
    }
    function W(...e) {
        const t = (o, a, s, u)=>(o.addEventListener(a, s, u), ()=>o.removeEventListener(a, s, u)), i = A(()=>{
            const o = B(R(e[0])).filter((a)=>a != null);
            return o.every((a)=>typeof a != "string") ? o : void 0;
        });
        return ee(()=>{
            var o, a;
            return [
                (o = (a = i.value) === null || a === void 0 ? void 0 : a.map((s)=>O(s))) !== null && o !== void 0 ? o : [
                    M
                ].filter((s)=>s != null),
                B(R(i.value ? e[1] : e[0])),
                B(fe(i.value ? e[2] : e[1])),
                R(i.value ? e[3] : e[2])
            ];
        }, ([o, a, s, u], c, v)=>{
            if (!o?.length || !a?.length || !s?.length) return;
            const d = re(u) ? {
                ...u
            } : u, f = o.flatMap((n)=>a.flatMap((w)=>s.map((m)=>t(n, w, m, d))));
            v(()=>{
                f.forEach((n)=>n());
            });
        }, {
            flush: "post"
        });
    }
    Le = function(e, t, i = {}) {
        const { window: o = M, ignore: a = [], capture: s = !0, detectIframe: u = !1, controls: c = !1 } = i;
        if (!o) return c ? {
            stop: _,
            cancel: _,
            trigger: _
        } : _;
        let v = !0;
        const d = (r)=>R(a).some((p)=>{
                if (typeof p == "string") return Array.from(o.document.querySelectorAll(p)).some((g)=>g === r.target || r.composedPath().includes(g));
                {
                    const g = O(p);
                    return g && (r.target === g || r.composedPath().includes(g));
                }
            });
        function f(r) {
            const p = R(r);
            return p && p.$.subTree.shapeFlag === 16;
        }
        function n(r, p) {
            const g = R(r), I = g.$.subTree && g.$.subTree.children;
            return I == null || !Array.isArray(I) ? !1 : I.some((N)=>N.el === p.target || p.composedPath().includes(N.el));
        }
        const w = (r)=>{
            const p = O(e);
            if (r.target != null && !(!(p instanceof Element) && f(e) && n(e, r)) && !(!p || p === r.target || r.composedPath().includes(p))) {
                if ("detail" in r && r.detail === 0 && (v = !d(r)), !v) {
                    v = !0;
                    return;
                }
                t(r);
            }
        };
        let m = !1;
        const S = [
            W(o, "click", (r)=>{
                m || (m = !0, setTimeout(()=>{
                    m = !1;
                }, 0), w(r));
            }, {
                passive: !0,
                capture: s
            }),
            W(o, "pointerdown", (r)=>{
                const p = O(e);
                v = !d(r) && !!(p && !r.composedPath().includes(p));
            }, {
                passive: !0
            }),
            u && W(o, "blur", (r)=>{
                setTimeout(()=>{
                    const p = O(e);
                    let g = o.document.activeElement;
                    for(; g?.shadowRoot;)g = g.shadowRoot.activeElement;
                    g?.tagName === "IFRAME" && !p?.contains(o.document.activeElement) && t(r);
                }, 0);
            }, {
                passive: !0
            })
        ].filter(Boolean), E = ()=>S.forEach((r)=>r());
        return c ? {
            stop: E,
            cancel: ()=>{
                v = !1;
            },
            trigger: (r)=>{
                v = !0, w(r), v = !1;
            }
        } : E;
    };
    function ve() {
        const e = x(!1), t = se();
        return t && le(()=>{
            e.value = !0;
        }, t), e;
    }
    function H(e) {
        const t = ve();
        return A(()=>(t.value, !!e()));
    }
    const me = Symbol("vueuse-ssr-width");
    function he() {
        const e = ae() ? ne(me, null) : null;
        return typeof e == "number" ? e : void 0;
    }
    ge = function(e, t = {}) {
        const { window: i = M, ssrWidth: o = he() } = t, a = H(()=>i && "matchMedia" in i && typeof i.matchMedia == "function"), s = x(typeof o == "number"), u = x(), c = x(!1), v = (d)=>{
            c.value = d.matches;
        };
        return pe(()=>{
            if (s.value) {
                s.value = !a.value, c.value = R(e).split(",").some((d)=>{
                    const f = d.includes("not all"), n = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), w = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                    let m = !!(n || w);
                    return n && m && (m = o >= D(n[1])), w && m && (m = o <= D(w[1])), f ? !m : m;
                });
                return;
            }
            a.value && (u.value = i.matchMedia(R(e)), c.value = u.value.matches);
        }), W(u, "change", v, {
            passive: !0
        }), A(()=>c.value);
    };
    function J(e, t = {}) {
        const { controls: i = !1, navigator: o = Q } = t, a = H(()=>o && "permissions" in o), s = x(), u = typeof e == "string" ? {
            name: e
        } : e, c = x(), v = ()=>{
            var f, n;
            c.value = (f = (n = s.value) === null || n === void 0 ? void 0 : n.state) !== null && f !== void 0 ? f : "prompt";
        };
        W(s, "change", v, {
            passive: !0
        });
        const d = oe(async ()=>{
            if (a.value) {
                if (!s.value) try {
                    s.value = await o.permissions.query(u);
                } catch  {
                    s.value = void 0;
                } finally{
                    v();
                }
                if (i) return de(s.value);
            }
        });
        return d(), i ? {
            state: c,
            isSupported: a,
            query: d
        } : c;
    }
    je = function(e = {}) {
        const { navigator: t = Q, read: i = !1, source: o, copiedDuring: a = 1500, legacy: s = !1 } = e, u = H(()=>t && "clipboard" in t), c = J("clipboard-read"), v = J("clipboard-write"), d = A(()=>u.value || s), f = x(""), n = x(!1), w = x(!1), m = Z(()=>n.value = !1, a, {
            immediate: !1
        });
        let S = 0;
        async function E() {
            let y = !(u.value && N(c.value));
            if (!y) try {
                f.value = await t.clipboard.readText();
            } catch  {
                y = !0;
            }
            y && (f.value = I());
        }
        d.value && i && W([
            "copy",
            "cut"
        ], E, {
            passive: !0
        });
        async function r(y) {
            const h = y ?? R(o);
            if (d.value && h != null) {
                w.value = !0;
                let C = !(u.value && N(v.value));
                if (!C) try {
                    const P = p(h);
                    await t.clipboard.write([
                        P
                    ]);
                } catch  {
                    C = !0;
                }
                if (C) if (typeof h == "string") f.value = h, g(h);
                else {
                    const P = ++S, z = await h();
                    z != null && P === S && (f.value = z, g(z));
                }
                n.value = !0, m.start(), w.value = !1;
            }
        }
        function p(y) {
            return typeof y == "string" ? (f.value = y, new ClipboardItem({
                "text/plain": y
            })) : new ClipboardItem({
                "text/plain": y().then((h = "")=>(f.value = h, new Blob([
                        h
                    ], {
                        type: "text/plain"
                    })))
            });
        }
        function g(y) {
            const h = document.createElement("textarea");
            h.value = y, h.style.position = "absolute", h.style.opacity = "0", h.setAttribute("readonly", ""), document.body.appendChild(h), h.select(), document.execCommand("copy"), h.remove();
        }
        function I() {
            var y, h, C;
            return (y = (h = document) === null || h === void 0 || (C = h.getSelection) === null || C === void 0 || (C = C.call(h)) === null || C === void 0 ? void 0 : C.toString()) !== null && y !== void 0 ? y : "";
        }
        function N(y) {
            return y === "granted" || y === "prompt";
        }
        return {
            copyPending: L(w),
            isSupported: d,
            text: L(f),
            copied: L(n),
            copy: r
        };
    };
    const $ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, k = "__vueuse_ssr_handlers__", ye = we();
    function we() {
        return k in $ || ($[k] = $[k] || {}), $[k];
    }
    function be(e, t) {
        return ye[e] || t;
    }
    function Se(e) {
        return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
    }
    const Ee = {
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
    }, U = "vueuse-storage";
    function xe(e, t, i, o = {}) {
        var a;
        const { flush: s = "pre", deep: u = !0, listenToStorageChanges: c = !0, writeDefaults: v = !0, mergeDefaults: d = !1, shallow: f, window: n = M, eventFilter: w, onError: m = (l)=>{
            console.error(l);
        }, initOnMounted: S } = o, E = (f ? x : ce)(typeof t == "function" ? t() : t), r = A(()=>R(e));
        if (!i) try {
            i = be("getDefaultStorage", ()=>M?.localStorage)();
        } catch (l) {
            m(l);
        }
        if (!i) return E;
        const p = R(t), g = Se(p), I = (a = o.serializer) !== null && a !== void 0 ? a : Ee[g], { pause: N, resume: y } = ie(E, (l)=>Y(l), {
            flush: s,
            deep: u,
            eventFilter: w
        });
        F(r, ()=>V(), {
            flush: s
        });
        let h = !1;
        const C = (l)=>{
            S && !h || V(l);
        }, P = (l)=>{
            S && !h || q(l);
        };
        n && c && (i instanceof Storage ? W(n, "storage", C, {
            passive: !0
        }) : W(n, U, P)), S ? j(()=>{
            h = !0, V();
        }) : V();
        function z(l, b) {
            if (n) {
                const T = {
                    key: r.value,
                    oldValue: l,
                    newValue: b,
                    storageArea: i
                };
                n.dispatchEvent(i instanceof Storage ? new StorageEvent("storage", T) : new CustomEvent(U, {
                    detail: T
                }));
            }
        }
        function Y(l) {
            try {
                const b = i.getItem(r.value);
                if (l == null) z(b, null), i.removeItem(r.value);
                else {
                    const T = I.write(l);
                    b !== T && (i.setItem(r.value, T), z(b, T));
                }
            } catch (b) {
                m(b);
            }
        }
        function K(l) {
            const b = l ? l.newValue : i.getItem(r.value);
            if (b == null) return v && p != null && i.setItem(r.value, I.write(p)), p;
            if (!l && d) {
                const T = I.read(b);
                return typeof d == "function" ? d(T, p) : g === "object" && !Array.isArray(T) ? {
                    ...p,
                    ...T
                } : T;
            } else return typeof b != "string" ? b : I.read(b);
        }
        function V(l) {
            if (!(l && l.storageArea !== i)) {
                if (l && l.key == null) {
                    E.value = p;
                    return;
                }
                if (!(l && l.key !== r.value)) {
                    N();
                    try {
                        const b = I.write(E.value);
                        (l === void 0 || l?.newValue !== b) && (E.value = K(l));
                    } catch (b) {
                        m(b);
                    } finally{
                        l ? ue(y) : y();
                    }
                }
            }
        }
        function q(l) {
            V(l.detail);
        }
        return E;
    }
    function Re(e, t, i = {}) {
        const { window: o = M, ...a } = i;
        let s;
        const u = H(()=>o && "ResizeObserver" in o), c = ()=>{
            s && (s.disconnect(), s = void 0);
        }, v = F(A(()=>{
            const f = R(e);
            return Array.isArray(f) ? f.map((n)=>O(n)) : [
                O(f)
            ];
        }), (f)=>{
            if (c(), u.value && o) {
                s = new ResizeObserver(t);
                for (const n of f)n && s.observe(n, a);
            }
        }, {
            immediate: !0,
            flush: "post"
        }), d = ()=>{
            c(), v();
        };
        return te(d), {
            isSupported: u,
            stop: d
        };
    }
    De = function(e, t = {
        width: 0,
        height: 0
    }, i = {}) {
        const { window: o = M, box: a = "content-box" } = i, s = A(()=>{
            var n;
            return (n = O(e)) === null || n === void 0 || (n = n.namespaceURI) === null || n === void 0 ? void 0 : n.includes("svg");
        }), u = x(t.width), c = x(t.height), { stop: v } = Re(e, ([n])=>{
            const w = a === "border-box" ? n.borderBoxSize : a === "content-box" ? n.contentBoxSize : n.devicePixelContentBoxSize;
            if (o && s.value) {
                const m = O(e);
                if (m) {
                    const S = m.getBoundingClientRect();
                    u.value = S.width, c.value = S.height;
                }
            } else if (w) {
                const m = B(w);
                u.value = m.reduce((S, { inlineSize: E })=>S + E, 0), c.value = m.reduce((S, { blockSize: E })=>S + E, 0);
            } else u.value = n.contentRect.width, c.value = n.contentRect.height;
        }, i);
        j(()=>{
            const n = O(e);
            n && (u.value = "offsetWidth" in n ? n.offsetWidth : t.width, c.value = "offsetHeight" in n ? n.offsetHeight : t.height);
        });
        const d = F(()=>O(e), (n)=>{
            u.value = n ? t.width : 0, c.value = n ? t.height : 0;
        });
        function f() {
            v(), d();
        }
        return {
            width: u,
            height: c,
            stop: f
        };
    };
    Je = function(e, t, i = {}) {
        const { window: o = M } = i;
        return xe(e, t, o?.localStorage, i);
    };
    Ue = function(e = {}) {
        const { window: t = M, initialWidth: i = Number.POSITIVE_INFINITY, initialHeight: o = Number.POSITIVE_INFINITY, listenOrientation: a = !0, includeScrollbar: s = !0, type: u = "inner" } = e, c = x(i), v = x(o), d = ()=>{
            if (t) if (u === "outer") c.value = t.outerWidth, v.value = t.outerHeight;
            else if (u === "visual" && t.visualViewport) {
                const { width: n, height: w, scale: m } = t.visualViewport;
                c.value = Math.round(n * m), v.value = Math.round(w * m);
            } else s ? (c.value = t.innerWidth, v.value = t.innerHeight) : (c.value = t.document.documentElement.clientWidth, v.value = t.document.documentElement.clientHeight);
        };
        d(), j(d);
        const f = {
            passive: !0
        };
        return W("resize", d, f), t && u === "visual" && t.visualViewport && W(t.visualViewport, "resize", d, f), a && F(ge("(orientation: portrait)"), ()=>d()), {
            width: c,
            height: v
        };
    };
});
export { Je as a, Ue as b, De as c, ge as d, Le as o, je as u, __tla };
