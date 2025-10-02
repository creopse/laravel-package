import { i as s, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-CmLqe3wy.js";
import { o as d, a as m } from "./evtd-CI_DDEu_.js";
let $e, he, ye, de, Me, pe, ve, be, ke, we, me;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const { ref: H, readonly: E, watch: L } = await s("vue");
    de = function(e) {
        const n = H(!!e.value);
        if (n.value) return E(n);
        const t = L(e, (a)=>{
            a && (n.value = !0, t());
        });
        return E(n);
    };
    const { computed: j, ref: q, watch: D } = await s("vue");
    me = function(e) {
        const n = j(e), t = q(n.value);
        return D(n, (a)=>{
            t.value = a;
        }), typeof e == "function" ? t : {
            __v_isRef: !0,
            get value () {
                return t.value;
            },
            set value (a){
                e.set(a);
            }
        };
    };
    const { getCurrentInstance: F } = await s("vue");
    function C() {
        return F() !== null;
    }
    const $ = typeof window < "u", { onMounted: R, onBeforeUnmount: V } = await s("vue");
    let w, h;
    const X = ()=>{
        var e, n;
        w = $ ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, h = !1, w !== void 0 ? w.then(()=>{
            h = !0;
        }) : h = !0;
    };
    X();
    we = function(e) {
        if (h) return;
        let n = !1;
        R(()=>{
            h || w?.then(()=>{
                n || e();
            });
        }), V(()=>{
            n = !0;
        });
    };
    const { ref: _, readonly: U, onBeforeMount: Y, onBeforeUnmount: K } = await s("vue"), p = _(null);
    function x(e) {
        if (e.clientX > 0 || e.clientY > 0) p.value = {
            x: e.clientX,
            y: e.clientY
        };
        else {
            const { target: n } = e;
            if (n instanceof Element) {
                const { left: t, top: a, width: i, height: o } = n.getBoundingClientRect();
                t > 0 || a > 0 ? p.value = {
                    x: t + i / 2,
                    y: a + o / 2
                } : p.value = {
                    x: 0,
                    y: 0
                };
            } else p.value = null;
        }
    }
    let k = 0, P = !0;
    ve = function() {
        if (!$) return U(_(null));
        k === 0 && d("click", document, x, !0);
        const e = ()=>{
            k += 1;
        };
        return P && (P = C()) ? (Y(e), K(()=>{
            k -= 1, k === 0 && m("click", document, x, !0);
        })) : e(), U(p);
    };
    const { onBeforeMount: Q, onBeforeUnmount: z, ref: g, readonly: T } = await s("vue"), A = g(void 0);
    let y = 0;
    function I() {
        A.value = Date.now();
    }
    let S = !0;
    pe = function(e) {
        if (!$) return T(g(!1));
        const n = g(!1);
        let t = null;
        function a() {
            t !== null && window.clearTimeout(t);
        }
        function i() {
            a(), n.value = !0, t = window.setTimeout(()=>{
                n.value = !1;
            }, e);
        }
        y === 0 && d("click", window, I, !0);
        const o = ()=>{
            y += 1, d("click", window, i, !0);
        };
        return S && (S = C()) ? (Q(o), z(()=>{
            y -= 1, y === 0 && m("click", window, I, !0), m("click", window, i, !0), a();
        })) : o(), T(n);
    };
    const { watch: G, computed: J } = await s("vue");
    he = function(e, n) {
        return G(e, (t)=>{
            t !== void 0 && (n.value = t);
        }), J(()=>e.value === void 0 ? n.value : e.value);
    };
    const { ref: O, onMounted: W, readonly: Z } = await s("vue");
    ke = function() {
        const e = O(!1);
        return W(()=>{
            e.value = !0;
        }), Z(e);
    };
    const { computed: N } = await s("vue");
    ye = function(e, n) {
        return N(()=>{
            for (const t of n)if (e[t] !== void 0) return e[t];
            return e[n[n.length - 1]];
        });
    };
    const ee = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
    $e = function() {
        return ee;
    };
    const { ref: ne, computed: B, onBeforeUnmount: te } = await s("vue"), oe = {
        xs: 0,
        s: 640,
        m: 1024,
        l: 1280,
        xl: 1536,
        "2xl": 1920
    };
    function ue(e) {
        return `(min-width: ${e}px)`;
    }
    const v = {};
    be = function(e = oe) {
        if (!$) return B(()=>[]);
        if (typeof window.matchMedia != "function") return B(()=>[]);
        const n = ne({}), t = Object.keys(e), a = (i, o)=>{
            i.matches ? n.value[o] = !0 : n.value[o] = !1;
        };
        return t.forEach((i)=>{
            const o = e[i];
            let r, f;
            v[o] === void 0 ? (r = window.matchMedia(ue(o)), r.addEventListener ? r.addEventListener("change", (u)=>{
                f.forEach((c)=>{
                    c(u, i);
                });
            }) : r.addListener && r.addListener((u)=>{
                f.forEach((c)=>{
                    c(u, i);
                });
            }), f = new Set, v[o] = {
                mql: r,
                cbs: f
            }) : (r = v[o].mql, f = v[o].cbs), f.add(a), r.matches && f.forEach((u)=>{
                u(r, i);
            });
        }), te(()=>{
            t.forEach((i)=>{
                const { cbs: o } = v[e[i]];
                o.has(a) && o.delete(a);
            });
        }), B(()=>{
            const { value: i } = n;
            return t.filter((o)=>i[o]);
        });
    };
    const { onBeforeMount: ae, onBeforeUnmount: ie, reactive: re, readonly: se, watch: fe } = await s("vue");
    Me = function(e = {}, n) {
        const t = re({
            ctrl: !1,
            command: !1,
            win: !1,
            shift: !1,
            tab: !1
        }), { keydown: a, keyup: i } = e, o = (u)=>{
            switch(u.key){
                case "Control":
                    t.ctrl = !0;
                    break;
                case "Meta":
                    t.command = !0, t.win = !0;
                    break;
                case "Shift":
                    t.shift = !0;
                    break;
                case "Tab":
                    t.tab = !0;
                    break;
            }
            a !== void 0 && Object.keys(a).forEach((c)=>{
                if (c !== u.key) return;
                const l = a[c];
                if (typeof l == "function") l(u);
                else {
                    const { stop: b = !1, prevent: M = !1 } = l;
                    b && u.stopPropagation(), M && u.preventDefault(), l.handler(u);
                }
            });
        }, r = (u)=>{
            switch(u.key){
                case "Control":
                    t.ctrl = !1;
                    break;
                case "Meta":
                    t.command = !1, t.win = !1;
                    break;
                case "Shift":
                    t.shift = !1;
                    break;
                case "Tab":
                    t.tab = !1;
                    break;
            }
            i !== void 0 && Object.keys(i).forEach((c)=>{
                if (c !== u.key) return;
                const l = i[c];
                if (typeof l == "function") l(u);
                else {
                    const { stop: b = !1, prevent: M = !1 } = l;
                    b && u.stopPropagation(), M && u.preventDefault(), l.handler(u);
                }
            });
        }, f = ()=>{
            (n === void 0 || n.value) && (d("keydown", document, o), d("keyup", document, r)), n !== void 0 && fe(n, (u)=>{
                u ? (d("keydown", document, o), d("keyup", document, r)) : (m("keydown", document, o), m("keyup", document, r));
            });
        };
        return C() ? (ae(f), ie(()=>{
            (n === void 0 || n.value) && (m("keydown", document, o), m("keyup", document, r));
        })) : f(), se(t);
    };
});
export { $e as a, he as b, ye as c, de as d, Me as e, pe as f, ve as g, be as h, ke as i, we as o, me as u, __tla };
