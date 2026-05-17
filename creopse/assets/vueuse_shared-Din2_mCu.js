import { i as j, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-Wj_7cvB0.js";
let fe, ce, le, D, ne, ie, ue, oe, I, ae, v, re, se, G, de;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const { computed: $, customRef: T, effectScope: q, getCurrentInstance: w, getCurrentScope: b, hasInjectionContext: P, inject: C, isReactive: z, isRef: H, nextTick: y, onBeforeMount: J, onBeforeUnmount: K, onMounted: O, onScopeDispose: A, onUnmounted: Q, provide: X, reactive: Y, readonly: W, ref: g, shallowReadonly: h, shallowRef: x, toRef: k, toRefs: Z, toValue: l, unref: ee, watch: d, watchEffect: te } = await j("vue");
    D = function(e, t) {
        return b() ? (A(e, t), !0) : !1;
    };
    let m;
    m = new WeakMap;
    ne = (...e)=>{
        var t;
        const o = e[0], n = (t = w()) === null || t === void 0 ? void 0 : t.proxy, i = n ?? b();
        if (i == null && !P()) throw new Error("injectLocal must be called in setup");
        return i && m.has(i) && o in m.get(i) ? m.get(i)[o] : C(...e);
    };
    I = typeof window < "u" && typeof document < "u";
    typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
    let M;
    M = Object.prototype.toString;
    oe = (e)=>M.call(e) === "[object Object]";
    v = ()=>{};
    function _(...e) {
        if (e.length !== 1) return k(...e);
        const t = e[0];
        return typeof t == "function" ? W(T(()=>({
                get: t,
                set: v
            }))) : g(t);
    }
    function F(e, t) {
        function o(...n) {
            return new Promise((i, r)=>{
                Promise.resolve(e(()=>t.apply(this, n), {
                    fn: t,
                    thisArg: this,
                    args: n
                })).then(i).catch(r);
            });
        }
        return o;
    }
    const S = (e)=>e();
    function L(e, t = {}) {
        let o, n, i = v;
        const r = (a)=>{
            clearTimeout(a), i(), i = v;
        };
        let c;
        return (a)=>{
            const s = l(e), f = l(t.maxWait);
            return o && r(o), s <= 0 || f !== void 0 && f <= 0 ? (n && (r(n), n = void 0), Promise.resolve(a())) : new Promise((p, R)=>{
                i = t.rejectOnCancel ? R : p, c = a, f && !n && (n = setTimeout(()=>{
                    o && r(o), n = void 0, p(c());
                }, f)), o = setTimeout(()=>{
                    n && r(n), n = void 0, p(a());
                }, s);
            });
        };
    }
    function B(e = S, t = {}) {
        const { initialState: o = "active" } = t, n = _(o === "active");
        function i() {
            n.value = !1;
        }
        function r() {
            n.value = !0;
        }
        const c = (...u)=>{
            n.value && e(...u);
        };
        return {
            isActive: h(n),
            pause: i,
            resume: r,
            eventFilter: c
        };
    }
    ie = function(e) {
        let t;
        function o() {
            return t || (t = e()), t;
        }
        return o.reset = async ()=>{
            const n = t;
            t = void 0, n && await n;
        }, o;
    };
    re = function(e) {
        return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
    };
    ce = function(e) {
        return Array.isArray(e) ? e : [
            e
        ];
    };
    function E(e) {
        return w();
    }
    G = function(e, t = 200, o = {}) {
        return F(L(t, o), e);
    };
    function N(e, t = 200, o = {}) {
        const n = g(l(e)), i = G(()=>{
            n.value = e.value;
        }, t, o);
        return d(e, ()=>i()), h(n);
    }
    ae = N;
    function U(e, t, o = {}) {
        const { eventFilter: n = S, ...i } = o;
        return d(e, F(n, t), i);
    }
    ue = function(e, t, o = {}) {
        const { eventFilter: n, initialState: i = "active", ...r } = o, { eventFilter: c, pause: u, resume: a, isActive: s } = B(n, {
            initialState: i
        });
        return {
            stop: U(e, t, {
                ...r,
                eventFilter: c
            }),
            pause: u,
            resume: a,
            isActive: s
        };
    };
    se = function(e, t = !0, o) {
        E() ? O(e, o) : t ? e() : y(e);
    };
    fe = function(e, t, o = {}) {
        const { immediate: n = !0, immediateCallback: i = !1 } = o, r = x(!1);
        let c;
        function u() {
            c && (clearTimeout(c), c = void 0);
        }
        function a() {
            r.value = !1, u();
        }
        function s(...f) {
            i && e(), u(), r.value = !0, c = setTimeout(()=>{
                r.value = !1, c = void 0, e(...f);
            }, l(t));
        }
        return n && (r.value = !0, I && s()), D(a), {
            isPending: h(r),
            start: s,
            stop: a
        };
    };
    le = function(e, t, o) {
        return d(e, t, {
            ...o,
            immediate: !0
        });
    };
    de = function(e, t, o) {
        const n = d(e, (i, r, c)=>{
            i && (o?.once && y(()=>n()), t(i, r, c));
        }, {
            ...o,
            once: !1
        });
        return n;
    };
});
export { fe as a, ce as b, le as c, D as d, ne as e, ie as f, ue as g, oe as h, I as i, ae as j, v as n, re as p, se as t, G as u, de as w, __tla };
