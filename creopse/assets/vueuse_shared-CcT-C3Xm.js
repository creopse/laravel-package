import { __tla as __tla_0 } from "./vue-demi-colorpicker-CNsKiPpa.js";
import { w as d, n as w, aa as T, O as F } from "./vue_runtime-core-PUhyuCwm.js";
import { r as p, c as v, u as O, j as P, o as S } from "./vue_reactivity-h59Zk7w_.js";
let R, E, f, L, V, z, j, g, m, q, B, _, H;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    j = function(e) {
        return P() ? (S(e), !0) : !1;
    };
    f = function(e) {
        return typeof e == "function" ? e() : O(e);
    };
    g = typeof window < "u" && typeof document < "u";
    typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
    let A;
    A = Object.prototype.toString;
    L = (e)=>A.call(e) === "[object Object]";
    m = ()=>{};
    R = x();
    function x() {
        var e, t;
        return g && ((e = window?.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
    }
    function b(e, t) {
        function i(...n) {
            return new Promise((o, r)=>{
                Promise.resolve(e(()=>t.apply(this, n), {
                    fn: t,
                    thisArg: this,
                    args: n
                })).then(o).catch(r);
            });
        }
        return i;
    }
    const h = (e)=>e();
    function C(e, t = {}) {
        let i, n, o = m;
        const r = (u)=>{
            clearTimeout(u), o(), o = m;
        };
        return (u)=>{
            const a = f(e), c = f(t.maxWait);
            return i && r(i), a <= 0 || c !== void 0 && c <= 0 ? (n && (r(n), n = null), Promise.resolve(u())) : new Promise((l, y)=>{
                o = t.rejectOnCancel ? y : l, c && !n && (n = setTimeout(()=>{
                    i && r(i), n = null, l(u());
                }, c)), i = setTimeout(()=>{
                    n && r(n), n = null, l(u());
                }, a);
            });
        };
    }
    function D(e = h) {
        const t = p(!0);
        function i() {
            t.value = !1;
        }
        function n() {
            t.value = !0;
        }
        const o = (...r)=>{
            t.value && e(...r);
        };
        return {
            isActive: v(t),
            pause: i,
            resume: n,
            eventFilter: o
        };
    }
    V = function(e) {
        let t;
        function i() {
            return t || (t = e()), t;
        }
        return i.reset = async ()=>{
            const n = t;
            t = void 0, n && await n;
        }, i;
    };
    function W(e) {
        return F();
    }
    _ = function(e, t = 200, i = {}) {
        return b(C(t, i), e);
    };
    q = function(e, t = 200, i = {}) {
        const n = p(e.value), o = _(()=>{
            n.value = e.value;
        }, t, i);
        return d(e, ()=>o()), n;
    };
    function I(e, t, i = {}) {
        const { eventFilter: n = h, ...o } = i;
        return d(e, b(n, t), o);
    }
    z = function(e, t, i = {}) {
        const { eventFilter: n, ...o } = i, { eventFilter: r, pause: s, resume: u, isActive: a } = D(n);
        return {
            stop: I(e, t, {
                ...o,
                eventFilter: r
            }),
            pause: s,
            resume: u,
            isActive: a
        };
    };
    B = function(e, t = !0, i) {
        W() ? T(e, i) : t ? e() : w(e);
    };
    E = function(e, t, i = {}) {
        const { immediate: n = !0 } = i, o = p(!1);
        let r = null;
        function s() {
            r && (clearTimeout(r), r = null);
        }
        function u() {
            o.value = !1, s();
        }
        function a(...c) {
            s(), o.value = !0, r = setTimeout(()=>{
                o.value = !1, r = null, e(...c);
            }, f(t));
        }
        return n && (o.value = !0, g && a()), j(u), {
            isPending: v(o),
            start: a,
            stop: u
        };
    };
    H = function(e, t, i) {
        const n = d(e, (o, r, s)=>{
            o && (i?.once && w(()=>n()), t(o, r, s));
        }, {
            ...i,
            once: !1
        });
        return n;
    };
});
export { R as a, E as b, f as c, L as d, V as e, z as f, j as g, g as i, m as n, q as r, B as t, _ as u, H as w, __tla };
