import { i as g, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-DBWdj2o5.js";
let ne, F, Y, ee, Z, oe, O, p, te, re, ie, ae;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const { computed: L, customRef: B, effectScope: E, getCurrentInstance: v, getCurrentScope: w, hasInjectionContext: R, inject: S, isReactive: G, isRef: N, nextTick: T, onBeforeMount: U, onBeforeUnmount: V, onMounted: j, onScopeDispose: C, onUnmounted: $, provide: q, reactive: z, readonly: H, ref: P, shallowReadonly: b, shallowRef: x, toRef: J, toRefs: K, toValue: f, unref: Q, watch: h, watchEffect: X } = await g("vue");
    F = function(e, t) {
        return w() ? (C(e, t), !0) : !1;
    };
    let m;
    m = new WeakMap;
    Y = (...e)=>{
        var t;
        const o = e[0], n = (t = v()) === null || t === void 0 ? void 0 : t.proxy, r = n ?? w();
        if (r == null && !R()) throw new Error("injectLocal must be called in setup");
        return r && m.has(r) && o in m.get(r) ? m.get(r)[o] : S(...e);
    };
    O = typeof window < "u" && typeof document < "u";
    typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
    let W;
    W = Object.prototype.toString;
    Z = (e)=>W.call(e) === "[object Object]";
    p = ()=>{};
    function k(e, t) {
        function o(...n) {
            return new Promise((r, i)=>{
                Promise.resolve(e(()=>t.apply(this, n), {
                    fn: t,
                    thisArg: this,
                    args: n
                })).then(r).catch(i);
            });
        }
        return o;
    }
    function D(e, t = {}) {
        let o, n, r = p;
        const i = (c)=>{
            clearTimeout(c), r(), r = p;
        };
        let a;
        return (c)=>{
            const s = f(e), u = f(t.maxWait);
            return o && i(o), s <= 0 || u !== void 0 && u <= 0 ? (n && (i(n), n = void 0), Promise.resolve(c())) : new Promise((d, y)=>{
                r = t.rejectOnCancel ? y : d, a = c, u && !n && (n = setTimeout(()=>{
                    o && i(o), n = void 0, d(a());
                }, u)), o = setTimeout(()=>{
                    n && i(n), n = void 0, d(c());
                }, s);
            });
        };
    }
    ee = function(e) {
        let t;
        function o() {
            return t || (t = e()), t;
        }
        return o.reset = async ()=>{
            const n = t;
            t = void 0, n && await n;
        }, o;
    };
    te = function(e) {
        return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
    };
    ne = function(e) {
        return Array.isArray(e) ? e : [
            e
        ];
    };
    function I(e) {
        return v();
    }
    function M(e, t = 200, o = {}) {
        return k(D(t, o), e);
    }
    function A(e, t = 200, o = {}) {
        const n = P(f(e)), r = M(()=>{
            n.value = e.value;
        }, t, o);
        return h(e, ()=>r()), b(n);
    }
    oe = A;
    re = function(e, t = !0, o) {
        I() ? j(e, o) : t ? e() : T(e);
    };
    ie = function(e, t, o = {}) {
        const { immediate: n = !0, immediateCallback: r = !1 } = o, i = x(!1);
        let a;
        function l() {
            a && (clearTimeout(a), a = void 0);
        }
        function c() {
            i.value = !1, l();
        }
        function s(...u) {
            r && e(), l(), i.value = !0, a = setTimeout(()=>{
                i.value = !1, a = void 0, e(...u);
            }, f(t));
        }
        return n && (i.value = !0, O && s()), F(c), {
            isPending: b(i),
            start: s,
            stop: c
        };
    };
    ae = function(e, t, o) {
        return h(e, t, {
            ...o,
            immediate: !0
        });
    };
});
export { ne as a, F as b, Y as c, ee as d, Z as e, oe as f, O as i, p as n, te as p, re as t, ie as u, ae as w, __tla };
