import { i as F, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-D9YIFk5Z.js";
import { a as J, o as fe } from "./evtd-CI_DDEu_.js";
import { i as Ae, d as pe, p as P, e as Ye, a as De } from "./seemly-C6YuW2_Q.js";
import { u as ee, __tla as __tla_1 } from "./css-render_vue3-ssr-CGC5bfGn.js";
import { d as je, u as U, o as Ne, i as Ue, __tla as __tla_2 } from "./vooks-BYkaJ1L1.js";
import { z as _e } from "./vdirs-DRH9Xvnd.js";
import { R as Pe } from "./juggle_resize-observer-BZ4M8-NE.js";
import { C as qe } from "./css-render-D_lzozyG.js";
let mn, xn, ht, Se, wn, bn, vn, yn, gn, Me;
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
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })()
]).then(async ()=>{
    const { Fragment: Ke, createTextVNode: Ge, Comment: Je } = await F("vue");
    function ce(n, e, t = "default") {
        const o = e[t];
        if (o === void 0) throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);
        return o();
    }
    function he(n, e = !0, t = []) {
        return n.forEach((o)=>{
            if (o !== null) {
                if (typeof o != "object") {
                    (typeof o == "string" || typeof o == "number") && t.push(Ge(String(o)));
                    return;
                }
                if (Array.isArray(o)) {
                    he(o, e, t);
                    return;
                }
                if (o.type === Ke) {
                    if (o.children === null) return;
                    Array.isArray(o.children) && he(o.children, e, t);
                } else o.type !== Je && t.push(o);
            }
        }), t;
    }
    function me(n, e, t = "default") {
        const o = e[t];
        if (o === void 0) throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);
        const r = he(o());
        if (r.length === 1) return r[0];
        throw new Error(`[vueuc/${n}]: slot[${t}] should have exactly one child.`);
    }
    let k = null;
    function Be() {
        if (k === null && (k = document.getElementById("v-binder-view-measurer"), k === null)) {
            k = document.createElement("div"), k.id = "v-binder-view-measurer";
            const { style: n } = k;
            n.position = "fixed", n.left = "0", n.right = "0", n.top = "0", n.bottom = "0", n.pointerEvents = "none", n.visibility = "hidden", document.body.appendChild(k);
        }
        return k.getBoundingClientRect();
    }
    function Qe(n, e) {
        const t = Be();
        return {
            top: e,
            left: n,
            height: 0,
            width: 0,
            right: t.width - n,
            bottom: t.height - e
        };
    }
    function re(n) {
        const e = n.getBoundingClientRect(), t = Be();
        return {
            left: e.left - t.left,
            top: e.top - t.top,
            bottom: t.height + t.top - e.bottom,
            right: t.width + t.left - e.right,
            width: e.width,
            height: e.height
        };
    }
    function Ze(n) {
        return n.nodeType === 9 ? null : n.parentNode;
    }
    function We(n) {
        if (n === null) return null;
        const e = Ze(n);
        if (e === null) return null;
        if (e.nodeType === 9) return document;
        if (e.nodeType === 1) {
            const { overflow: t, overflowX: o, overflowY: r } = getComputedStyle(e);
            if (/(auto|scroll|overlay)/.test(t + r + o)) return e;
        }
        return We(e);
    }
    let Re, et, tt, nt, ot, rt, it, lt, st;
    ({ defineComponent: Re, provide: et, ref: tt, inject: nt, getCurrentInstance: ot, onBeforeUnmount: rt } = await F("vue"));
    mn = Re({
        name: "Binder",
        props: {
            syncTargetWithParent: Boolean,
            syncTarget: {
                type: Boolean,
                default: !0
            }
        },
        setup (n) {
            var e;
            et("VBinder", (e = ot()) === null || e === void 0 ? void 0 : e.proxy);
            const t = nt("VBinder", null), o = tt(null), r = (i)=>{
                o.value = i, t && n.syncTargetWithParent && t.setTargetRef(i);
            };
            let u = [];
            const b = ()=>{
                let i = o.value;
                for(; i = We(i), i !== null;)u.push(i);
                for (const g of u)fe("scroll", g, x, !0);
            }, w = ()=>{
                for (const i of u)J("scroll", i, x, !0);
                u = [];
            }, l = new Set, h = (i)=>{
                l.size === 0 && b(), l.has(i) || l.add(i);
            }, p = (i)=>{
                l.has(i) && l.delete(i), l.size === 0 && w();
            }, x = ()=>{
                Ae(d);
            }, d = ()=>{
                l.forEach((i)=>i());
            }, f = new Set, m = (i)=>{
                f.size === 0 && fe("resize", window, a), f.has(i) || f.add(i);
            }, v = (i)=>{
                f.has(i) && f.delete(i), f.size === 0 && J("resize", window, a);
            }, a = ()=>{
                f.forEach((i)=>i());
            };
            return rt(()=>{
                J("resize", window, a), w();
            }), {
                targetRef: o,
                setTargetRef: r,
                addScrollListener: h,
                removeScrollListener: p,
                addResizeListener: m,
                removeResizeListener: v
            };
        },
        render () {
            return ce("binder", this.$slots);
        }
    });
    ({ defineComponent: it, inject: lt, withDirectives: st } = await F("vue"));
    vn = it({
        name: "Target",
        setup () {
            const { setTargetRef: n, syncTarget: e } = lt("VBinder");
            return {
                syncTarget: e,
                setTargetDirective: {
                    mounted: n,
                    updated: n
                }
            };
        },
        render () {
            const { syncTarget: n, setTargetDirective: e } = this;
            return n ? st(me("follower", this.$slots), [
                [
                    e
                ]
            ]) : me("follower", this.$slots);
        }
    });
    function ve(n, e) {
        console.error(`[vueuc/${n}]: ${e}`);
    }
    const { c: A } = qe(), te = "vueuc-style";
    function be(n) {
        return n & -n;
    }
    class ke {
        constructor(e, t){
            this.l = e, this.min = t;
            const o = new Array(e + 1);
            for(let r = 0; r < e + 1; ++r)o[r] = 0;
            this.ft = o;
        }
        add(e, t) {
            if (t === 0) return;
            const { l: o, ft: r } = this;
            for(e += 1; e <= o;)r[e] += t, e += be(e);
        }
        get(e) {
            return this.sum(e + 1) - this.sum(e);
        }
        sum(e) {
            if (e === void 0 && (e = this.l), e <= 0) return 0;
            const { ft: t, min: o, l: r } = this;
            if (e > r) throw new Error("[FinweckTree.sum]: `i` is larger than length.");
            let u = e * o;
            for(; e > 0;)u += t[e], e -= be(e);
            return u;
        }
        getBound(e) {
            let t = 0, o = this.l;
            for(; o > t;){
                const r = Math.floor((t + o) / 2), u = this.sum(r);
                if (u > e) {
                    o = r;
                    continue;
                } else if (u < e) {
                    if (t === r) return this.sum(t + 1) <= e ? t + 1 : r;
                    t = r;
                } else return r;
            }
            return t;
        }
    }
    function we(n) {
        return typeof n == "string" ? document.querySelector(n) : n();
    }
    let ut, at, dt, ft, ct, Q, ge, ie, pt, mt, vt, ye, xe;
    ({ Teleport: ut, h: at, toRef: dt, computed: ft, defineComponent: ct } = await F("vue"));
    ht = ct({
        name: "LazyTeleport",
        props: {
            to: {
                type: [
                    String,
                    Object
                ],
                default: void 0
            },
            disabled: Boolean,
            show: {
                type: Boolean,
                required: !0
            }
        },
        setup (n) {
            return {
                showTeleport: je(dt(n, "show")),
                mergedTo: ft(()=>{
                    const { to: e } = n;
                    return e ?? "body";
                })
            };
        },
        render () {
            return this.showTeleport ? this.disabled ? ce("lazy-teleport", this.$slots) : at(ut, {
                disabled: this.disabled,
                to: this.mergedTo
            }, ce("lazy-teleport", this.$slots)) : null;
        }
    });
    Q = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
    };
    ge = {
        start: "end",
        center: "center",
        end: "start"
    };
    ie = {
        top: "height",
        bottom: "height",
        left: "width",
        right: "width"
    };
    pt = {
        "bottom-start": "top left",
        bottom: "top center",
        "bottom-end": "top right",
        "top-start": "bottom left",
        top: "bottom center",
        "top-end": "bottom right",
        "right-start": "top left",
        right: "center left",
        "right-end": "bottom left",
        "left-start": "top right",
        left: "center right",
        "left-end": "bottom right"
    };
    mt = {
        "bottom-start": "bottom left",
        bottom: "bottom center",
        "bottom-end": "bottom right",
        "top-start": "top left",
        top: "top center",
        "top-end": "top right",
        "right-start": "top right",
        right: "center right",
        "right-end": "bottom right",
        "left-start": "top left",
        left: "center left",
        "left-end": "bottom left"
    };
    vt = {
        "bottom-start": "right",
        "bottom-end": "left",
        "top-start": "right",
        "top-end": "left",
        "right-start": "bottom",
        "right-end": "top",
        "left-start": "bottom",
        "left-end": "top"
    };
    ye = {
        top: !0,
        bottom: !1,
        left: !0,
        right: !1
    };
    xe = {
        top: "end",
        bottom: "start",
        left: "end",
        right: "start"
    };
    function bt(n, e, t, o, r, u) {
        if (!r || u) return {
            placement: n,
            top: 0,
            left: 0
        };
        const [b, w] = n.split("-");
        let l = w ?? "center", h = {
            top: 0,
            left: 0
        };
        const p = (f, m, v)=>{
            let a = 0, i = 0;
            const g = t[f] - e[m] - e[f];
            return g > 0 && o && (v ? i = ye[m] ? g : -g : a = ye[m] ? g : -g), {
                left: a,
                top: i
            };
        }, x = b === "left" || b === "right";
        if (l !== "center") {
            const f = vt[n], m = Q[f], v = ie[f];
            if (t[v] > e[v]) {
                if (e[f] + e[v] < t[v]) {
                    const a = (t[v] - e[v]) / 2;
                    e[f] < a || e[m] < a ? e[f] < e[m] ? (l = ge[w], h = p(v, m, x)) : h = p(v, f, x) : l = "center";
                }
            } else t[v] < e[v] && e[m] < 0 && e[f] > e[m] && (l = ge[w]);
        } else {
            const f = b === "bottom" || b === "top" ? "left" : "top", m = Q[f], v = ie[f], a = (t[v] - e[v]) / 2;
            (e[f] < a || e[m] < a) && (e[f] > e[m] ? (l = xe[f], h = p(v, f, x)) : (l = xe[m], h = p(v, m, x)));
        }
        let d = b;
        return e[b] < t[ie[b]] && e[b] < e[Q[b]] && (d = Q[b]), {
            placement: l !== "center" ? `${d}-${l}` : d,
            left: h.left,
            top: h.top
        };
    }
    function wt(n, e) {
        return e ? mt[n] : pt[n];
    }
    function gt(n, e, t, o, r, u) {
        if (u) switch(n){
            case "bottom-start":
                return {
                    top: `${Math.round(t.top - e.top + t.height)}px`,
                    left: `${Math.round(t.left - e.left)}px`,
                    transform: "translateY(-100%)"
                };
            case "bottom-end":
                return {
                    top: `${Math.round(t.top - e.top + t.height)}px`,
                    left: `${Math.round(t.left - e.left + t.width)}px`,
                    transform: "translateX(-100%) translateY(-100%)"
                };
            case "top-start":
                return {
                    top: `${Math.round(t.top - e.top)}px`,
                    left: `${Math.round(t.left - e.left)}px`,
                    transform: ""
                };
            case "top-end":
                return {
                    top: `${Math.round(t.top - e.top)}px`,
                    left: `${Math.round(t.left - e.left + t.width)}px`,
                    transform: "translateX(-100%)"
                };
            case "right-start":
                return {
                    top: `${Math.round(t.top - e.top)}px`,
                    left: `${Math.round(t.left - e.left + t.width)}px`,
                    transform: "translateX(-100%)"
                };
            case "right-end":
                return {
                    top: `${Math.round(t.top - e.top + t.height)}px`,
                    left: `${Math.round(t.left - e.left + t.width)}px`,
                    transform: "translateX(-100%) translateY(-100%)"
                };
            case "left-start":
                return {
                    top: `${Math.round(t.top - e.top)}px`,
                    left: `${Math.round(t.left - e.left)}px`,
                    transform: ""
                };
            case "left-end":
                return {
                    top: `${Math.round(t.top - e.top + t.height)}px`,
                    left: `${Math.round(t.left - e.left)}px`,
                    transform: "translateY(-100%)"
                };
            case "top":
                return {
                    top: `${Math.round(t.top - e.top)}px`,
                    left: `${Math.round(t.left - e.left + t.width / 2)}px`,
                    transform: "translateX(-50%)"
                };
            case "right":
                return {
                    top: `${Math.round(t.top - e.top + t.height / 2)}px`,
                    left: `${Math.round(t.left - e.left + t.width)}px`,
                    transform: "translateX(-100%) translateY(-50%)"
                };
            case "left":
                return {
                    top: `${Math.round(t.top - e.top + t.height / 2)}px`,
                    left: `${Math.round(t.left - e.left)}px`,
                    transform: "translateY(-50%)"
                };
            case "bottom":
            default:
                return {
                    top: `${Math.round(t.top - e.top + t.height)}px`,
                    left: `${Math.round(t.left - e.left + t.width / 2)}px`,
                    transform: "translateX(-50%) translateY(-100%)"
                };
        }
        switch(n){
            case "bottom-start":
                return {
                    top: `${Math.round(t.top - e.top + t.height + o)}px`,
                    left: `${Math.round(t.left - e.left + r)}px`,
                    transform: ""
                };
            case "bottom-end":
                return {
                    top: `${Math.round(t.top - e.top + t.height + o)}px`,
                    left: `${Math.round(t.left - e.left + t.width + r)}px`,
                    transform: "translateX(-100%)"
                };
            case "top-start":
                return {
                    top: `${Math.round(t.top - e.top + o)}px`,
                    left: `${Math.round(t.left - e.left + r)}px`,
                    transform: "translateY(-100%)"
                };
            case "top-end":
                return {
                    top: `${Math.round(t.top - e.top + o)}px`,
                    left: `${Math.round(t.left - e.left + t.width + r)}px`,
                    transform: "translateX(-100%) translateY(-100%)"
                };
            case "right-start":
                return {
                    top: `${Math.round(t.top - e.top + o)}px`,
                    left: `${Math.round(t.left - e.left + t.width + r)}px`,
                    transform: ""
                };
            case "right-end":
                return {
                    top: `${Math.round(t.top - e.top + t.height + o)}px`,
                    left: `${Math.round(t.left - e.left + t.width + r)}px`,
                    transform: "translateY(-100%)"
                };
            case "left-start":
                return {
                    top: `${Math.round(t.top - e.top + o)}px`,
                    left: `${Math.round(t.left - e.left + r)}px`,
                    transform: "translateX(-100%)"
                };
            case "left-end":
                return {
                    top: `${Math.round(t.top - e.top + t.height + o)}px`,
                    left: `${Math.round(t.left - e.left + r)}px`,
                    transform: "translateX(-100%) translateY(-100%)"
                };
            case "top":
                return {
                    top: `${Math.round(t.top - e.top + o)}px`,
                    left: `${Math.round(t.left - e.left + t.width / 2 + r)}px`,
                    transform: "translateY(-100%) translateX(-50%)"
                };
            case "right":
                return {
                    top: `${Math.round(t.top - e.top + t.height / 2 + o)}px`,
                    left: `${Math.round(t.left - e.left + t.width + r)}px`,
                    transform: "translateY(-50%)"
                };
            case "left":
                return {
                    top: `${Math.round(t.top - e.top + t.height / 2 + o)}px`,
                    left: `${Math.round(t.left - e.left + r)}px`,
                    transform: "translateY(-50%) translateX(-100%)"
                };
            case "bottom":
            default:
                return {
                    top: `${Math.round(t.top - e.top + t.height + o)}px`,
                    left: `${Math.round(t.left - e.left + t.width / 2 + r)}px`,
                    transform: "translateX(-50%)"
                };
        }
    }
    let le, yt, xt, $t, Z, se, $e, Mt, St, Tt, Ct;
    ({ h: le, defineComponent: yt, inject: xt, nextTick: $t, watch: Z, toRef: se, ref: $e, onMounted: Mt, onBeforeUnmount: St, withDirectives: Tt } = await F("vue"));
    Ct = A([
        A(".v-binder-follower-container", {
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            height: "0",
            pointerEvents: "none",
            zIndex: "auto"
        }),
        A(".v-binder-follower-content", {
            position: "absolute",
            zIndex: "auto"
        }, [
            A("> *", {
                pointerEvents: "all"
            })
        ])
    ]);
    bn = yt({
        name: "Follower",
        inheritAttrs: !1,
        props: {
            show: Boolean,
            enabled: {
                type: Boolean,
                default: void 0
            },
            placement: {
                type: String,
                default: "bottom"
            },
            syncTrigger: {
                type: Array,
                default: [
                    "resize",
                    "scroll"
                ]
            },
            to: [
                String,
                Object
            ],
            flip: {
                type: Boolean,
                default: !0
            },
            internalShift: Boolean,
            x: Number,
            y: Number,
            width: String,
            minWidth: String,
            containerClass: String,
            teleportDisabled: Boolean,
            zindexable: {
                type: Boolean,
                default: !0
            },
            zIndex: Number,
            overlap: Boolean
        },
        setup (n) {
            const e = xt("VBinder"), t = U(()=>n.enabled !== void 0 ? n.enabled : n.show), o = $e(null), r = $e(null), u = ()=>{
                const { syncTrigger: d } = n;
                d.includes("scroll") && e.addScrollListener(l), d.includes("resize") && e.addResizeListener(l);
            }, b = ()=>{
                e.removeScrollListener(l), e.removeResizeListener(l);
            };
            Mt(()=>{
                t.value && (l(), u());
            });
            const w = ee();
            Ct.mount({
                id: "vueuc/binder",
                head: !0,
                anchorMetaName: te,
                ssr: w
            }), St(()=>{
                b();
            }), Ne(()=>{
                t.value && l();
            });
            const l = ()=>{
                if (!t.value) return;
                const d = o.value;
                if (d === null) return;
                const f = e.targetRef, { x: m, y: v, overlap: a } = n, i = m !== void 0 && v !== void 0 ? Qe(m, v) : re(f);
                d.style.setProperty("--v-target-width", `${Math.round(i.width)}px`), d.style.setProperty("--v-target-height", `${Math.round(i.height)}px`);
                const { width: g, minWidth: $, placement: z, internalShift: Y, flip: O } = n;
                d.setAttribute("v-placement", z), a ? d.setAttribute("v-overlap", "") : d.removeAttribute("v-overlap");
                const { style: T } = d;
                g === "target" ? T.width = `${i.width}px` : g !== void 0 ? T.width = g : T.width = "", $ === "target" ? T.minWidth = `${i.width}px` : $ !== void 0 ? T.minWidth = $ : T.minWidth = "";
                const L = re(d), D = re(r.value), { left: V, top: j, placement: N } = bt(z, i, L, Y, O, a), s = wt(N, a), { left: c, top: y, transform: M } = gt(N, D, i, j, V, a);
                d.setAttribute("v-placement", N), d.style.setProperty("--v-offset-left", `${Math.round(V)}px`), d.style.setProperty("--v-offset-top", `${Math.round(j)}px`), d.style.transform = `translateX(${c}) translateY(${y}) ${M}`, d.style.setProperty("--v-transform-origin", s), d.style.transformOrigin = s;
            };
            Z(t, (d)=>{
                d ? (u(), h()) : b();
            });
            const h = ()=>{
                $t().then(l).catch((d)=>console.error(d));
            };
            [
                "placement",
                "x",
                "y",
                "internalShift",
                "flip",
                "width",
                "overlap",
                "minWidth"
            ].forEach((d)=>{
                Z(se(n, d), l);
            }), [
                "teleportDisabled"
            ].forEach((d)=>{
                Z(se(n, d), h);
            }), Z(se(n, "syncTrigger"), (d)=>{
                d.includes("resize") ? e.addResizeListener(l) : e.removeResizeListener(l), d.includes("scroll") ? e.addScrollListener(l) : e.removeScrollListener(l);
            });
            const p = Ue(), x = U(()=>{
                const { to: d } = n;
                if (d !== void 0) return d;
                p.value;
            });
            return {
                VBinder: e,
                mergedEnabled: t,
                offsetContainerRef: r,
                followerRef: o,
                mergedTo: x,
                syncPosition: l
            };
        },
        render () {
            return le(ht, {
                show: this.show,
                to: this.mergedTo,
                disabled: this.teleportDisabled
            }, {
                default: ()=>{
                    var n, e;
                    const t = le("div", {
                        class: [
                            "v-binder-follower-container",
                            this.containerClass
                        ],
                        ref: "offsetContainerRef"
                    }, [
                        le("div", {
                            class: "v-binder-follower-content",
                            ref: "followerRef"
                        }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n))
                    ]);
                    return this.zindexable ? Tt(t, [
                        [
                            _e,
                            {
                                enabled: this.mergedEnabled,
                                zIndex: this.zIndex
                            }
                        ]
                    ]) : t;
                }
            });
        }
    });
    class zt {
        constructor(){
            this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Pe)(this.handleResize), this.elHandlersMap = new Map;
        }
        handleResize(e) {
            for (const t of e){
                const o = this.elHandlersMap.get(t.target);
                o !== void 0 && o(t);
            }
        }
        registerHandler(e, t) {
            this.elHandlersMap.set(e, t), this.observer.observe(e);
        }
        unregisterHandler(e) {
            this.elHandlersMap.has(e) && (this.elHandlersMap.delete(e), this.observer.unobserve(e));
        }
    }
    let It, Et, Ft, At, Bt;
    Me = new zt;
    ({ defineComponent: It, renderSlot: Et, getCurrentInstance: Ft, onMounted: At, onBeforeUnmount: Bt } = await F("vue"));
    Se = It({
        name: "ResizeObserver",
        props: {
            onResize: Function
        },
        setup (n) {
            let e = !1;
            const t = Ft().proxy;
            function o(r) {
                const { onResize: u } = n;
                u !== void 0 && u(r);
            }
            At(()=>{
                const r = t.$el;
                if (r === void 0) {
                    ve("resize-observer", "$el does not exist.");
                    return;
                }
                if (r.nextElementSibling !== r.nextSibling && r.nodeType === 3 && r.nodeValue !== "") {
                    ve("resize-observer", "$el can not be observed (it may be a text node).");
                    return;
                }
                r.nextElementSibling !== null && (Me.registerHandler(r.nextElementSibling, o), e = !0);
            }), Bt(()=>{
                e && Me.unregisterHandler(t.$el.nextElementSibling);
            });
        },
        render () {
            return Et(this.$slots, "default");
        }
    });
    let R;
    function Wt() {
        return typeof document > "u" ? !1 : (R === void 0 && ("matchMedia" in window ? R = window.matchMedia("(pointer:coarse)").matches : R = !1), R);
    }
    let ue;
    function Te() {
        return typeof document > "u" ? 1 : (ue === void 0 && (ue = "chrome" in window ? window.devicePixelRatio : 1), ue);
    }
    const Oe = "VVirtualListXScroll", { computed: kt, provide: Ot, ref: Ce } = await F("vue");
    function Lt({ columnsRef: n, renderColRef: e, renderItemWithColsRef: t }) {
        const o = Ce(0), r = Ce(0), u = kt(()=>{
            const h = n.value;
            if (h.length === 0) return null;
            const p = new ke(h.length, 0);
            return h.forEach((x, d)=>{
                p.add(d, x.width);
            }), p;
        }), b = U(()=>{
            const h = u.value;
            return h !== null ? Math.max(h.getBound(r.value) - 1, 0) : 0;
        }), w = (h)=>{
            const p = u.value;
            return p !== null ? p.sum(h) : 0;
        }, l = U(()=>{
            const h = u.value;
            return h !== null ? Math.min(h.getBound(r.value + o.value) + 1, n.value.length - 1) : 0;
        });
        return Ot(Oe, {
            startIndexRef: b,
            endIndexRef: l,
            columnsRef: n,
            renderColRef: e,
            renderItemWithColsRef: t,
            getLeft: w
        }), {
            listWidthRef: o,
            scrollLeftRef: r
        };
    }
    let Vt, Ht, ze, Xt, q, Yt, K, Dt, X, jt, Nt, ae, Ut, _t, Pt, qt, Kt, Gt, Jt, Ie, Qt, Ee, Zt, B, Rt;
    ({ defineComponent: Vt, inject: Ht } = await F("vue"));
    ze = Vt({
        name: "VirtualListRow",
        props: {
            index: {
                type: Number,
                required: !0
            },
            item: {
                type: Object,
                required: !0
            }
        },
        setup () {
            const { startIndexRef: n, endIndexRef: e, columnsRef: t, getLeft: o, renderColRef: r, renderItemWithColsRef: u } = Ht(Oe);
            return {
                startIndex: n,
                endIndex: e,
                columns: t,
                renderCol: r,
                renderItemWithCols: u,
                getLeft: o
            };
        },
        render () {
            const { startIndex: n, endIndex: e, columns: t, renderCol: o, renderItemWithCols: r, getLeft: u, item: b } = this;
            if (r != null) return r({
                itemIndex: this.index,
                startColIndex: n,
                endColIndex: e,
                allColumns: t,
                item: b,
                getLeft: u
            });
            if (o != null) {
                const w = [];
                for(let l = n; l <= e; ++l){
                    const h = t[l];
                    w.push(o({
                        column: h,
                        left: u(l),
                        item: b
                    }));
                }
                return w;
            }
            return null;
        }
    });
    ({ mergeProps: Xt, computed: q, defineComponent: Yt, ref: K, onMounted: Dt, h: X, onActivated: jt, onDeactivated: Nt, toRef: ae } = await F("vue"));
    Ut = A(".v-vl", {
        maxHeight: "inherit",
        height: "100%",
        overflow: "auto",
        minWidth: "1px"
    }, [
        A("&:not(.v-vl--show-scrollbar)", {
            scrollbarWidth: "none"
        }, [
            A("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
                width: 0,
                height: 0,
                display: "none"
            })
        ])
    ]);
    wn = Yt({
        name: "VirtualList",
        inheritAttrs: !1,
        props: {
            showScrollbar: {
                type: Boolean,
                default: !0
            },
            columns: {
                type: Array,
                default: ()=>[]
            },
            renderCol: Function,
            renderItemWithCols: Function,
            items: {
                type: Array,
                default: ()=>[]
            },
            itemSize: {
                type: Number,
                required: !0
            },
            itemResizable: Boolean,
            itemsStyle: [
                String,
                Object
            ],
            visibleItemsTag: {
                type: [
                    String,
                    Object
                ],
                default: "div"
            },
            visibleItemsProps: Object,
            ignoreItemResize: Boolean,
            onScroll: Function,
            onWheel: Function,
            onResize: Function,
            defaultScrollKey: [
                Number,
                String
            ],
            defaultScrollIndex: Number,
            keyField: {
                type: String,
                default: "key"
            },
            paddingTop: {
                type: [
                    Number,
                    String
                ],
                default: 0
            },
            paddingBottom: {
                type: [
                    Number,
                    String
                ],
                default: 0
            }
        },
        setup (n) {
            const e = ee();
            Ut.mount({
                id: "vueuc/virtual-list",
                head: !0,
                anchorMetaName: te,
                ssr: e
            }), Dt(()=>{
                const { defaultScrollIndex: s, defaultScrollKey: c } = n;
                s != null ? a({
                    index: s
                }) : c != null && a({
                    key: c
                });
            });
            let t = !1, o = !1;
            jt(()=>{
                if (t = !1, !o) {
                    o = !0;
                    return;
                }
                a({
                    top: f.value,
                    left: b.value
                });
            }), Nt(()=>{
                t = !0, o || (o = !0);
            });
            const r = U(()=>{
                if (n.renderCol == null && n.renderItemWithCols == null || n.columns.length === 0) return;
                let s = 0;
                return n.columns.forEach((c)=>{
                    s += c.width;
                }), s;
            }), u = q(()=>{
                const s = new Map, { keyField: c } = n;
                return n.items.forEach((y, M)=>{
                    s.set(y[c], M);
                }), s;
            }), { scrollLeftRef: b, listWidthRef: w } = Lt({
                columnsRef: ae(n, "columns"),
                renderColRef: ae(n, "renderCol"),
                renderItemWithColsRef: ae(n, "renderItemWithCols")
            }), l = K(null), h = K(void 0), p = new Map, x = q(()=>{
                const { items: s, itemSize: c, keyField: y } = n, M = new ke(s.length, c);
                return s.forEach((C, I)=>{
                    const S = C[y], E = p.get(S);
                    E !== void 0 && M.add(I, E);
                }), M;
            }), d = K(0), f = K(0), m = U(()=>Math.max(x.value.getBound(f.value - pe(n.paddingTop)) - 1, 0)), v = q(()=>{
                const { value: s } = h;
                if (s === void 0) return [];
                const { items: c, itemSize: y } = n, M = m.value, C = Math.min(M + Math.ceil(s / y + 1), c.length - 1), I = [];
                for(let S = M; S <= C; ++S)I.push(c[S]);
                return I;
            }), a = (s, c)=>{
                if (typeof s == "number") {
                    z(s, c, "auto");
                    return;
                }
                const { left: y, top: M, index: C, key: I, position: S, behavior: E, debounce: W = !0 } = s;
                if (y !== void 0 || M !== void 0) z(y, M, E);
                else if (C !== void 0) $(C, E, W);
                else if (I !== void 0) {
                    const ne = u.value.get(I);
                    ne !== void 0 && $(ne, E, W);
                } else S === "bottom" ? z(0, Number.MAX_SAFE_INTEGER, E) : S === "top" && z(0, 0, E);
            };
            let i, g = null;
            function $(s, c, y) {
                const { value: M } = x, C = M.sum(s) + pe(n.paddingTop);
                if (!y) l.value.scrollTo({
                    left: 0,
                    top: C,
                    behavior: c
                });
                else {
                    i = s, g !== null && window.clearTimeout(g), g = window.setTimeout(()=>{
                        i = void 0, g = null;
                    }, 16);
                    const { scrollTop: I, offsetHeight: S } = l.value;
                    if (C > I) {
                        const E = M.get(s);
                        C + E <= I + S || l.value.scrollTo({
                            left: 0,
                            top: C + E - S,
                            behavior: c
                        });
                    } else l.value.scrollTo({
                        left: 0,
                        top: C,
                        behavior: c
                    });
                }
            }
            function z(s, c, y) {
                l.value.scrollTo({
                    left: s,
                    top: c,
                    behavior: y
                });
            }
            function Y(s, c) {
                var y, M, C;
                if (t || n.ignoreItemResize || N(c.target)) return;
                const { value: I } = x, S = u.value.get(s), E = I.get(S), W = (C = (M = (y = c.borderBoxSize) === null || y === void 0 ? void 0 : y[0]) === null || M === void 0 ? void 0 : M.blockSize) !== null && C !== void 0 ? C : c.contentRect.height;
                if (W === E) return;
                W - n.itemSize === 0 ? p.delete(s) : p.set(s, W - n.itemSize);
                const _ = W - E;
                if (_ === 0) return;
                I.add(S, _);
                const H = l.value;
                if (H != null) {
                    if (i === void 0) {
                        const oe = I.sum(S);
                        H.scrollTop > oe && H.scrollBy(0, _);
                    } else if (S < i) H.scrollBy(0, _);
                    else if (S === i) {
                        const oe = I.sum(S);
                        W + oe > H.scrollTop + H.offsetHeight && H.scrollBy(0, _);
                    }
                    j();
                }
                d.value++;
            }
            const O = !Wt();
            let T = !1;
            function L(s) {
                var c;
                (c = n.onScroll) === null || c === void 0 || c.call(n, s), (!O || !T) && j();
            }
            function D(s) {
                var c;
                if ((c = n.onWheel) === null || c === void 0 || c.call(n, s), O) {
                    const y = l.value;
                    if (y != null) {
                        if (s.deltaX === 0 && (y.scrollTop === 0 && s.deltaY <= 0 || y.scrollTop + y.offsetHeight >= y.scrollHeight && s.deltaY >= 0)) return;
                        s.preventDefault(), y.scrollTop += s.deltaY / Te(), y.scrollLeft += s.deltaX / Te(), j(), T = !0, Ae(()=>{
                            T = !1;
                        });
                    }
                }
            }
            function V(s) {
                if (t || N(s.target)) return;
                if (n.renderCol == null && n.renderItemWithCols == null) {
                    if (s.contentRect.height === h.value) return;
                } else if (s.contentRect.height === h.value && s.contentRect.width === w.value) return;
                h.value = s.contentRect.height, w.value = s.contentRect.width;
                const { onResize: c } = n;
                c !== void 0 && c(s);
            }
            function j() {
                const { value: s } = l;
                s != null && (f.value = s.scrollTop, b.value = s.scrollLeft);
            }
            function N(s) {
                let c = s;
                for(; c !== null;){
                    if (c.style.display === "none") return !0;
                    c = c.parentElement;
                }
                return !1;
            }
            return {
                listHeight: h,
                listStyle: {
                    overflow: "auto"
                },
                keyToIndex: u,
                itemsStyle: q(()=>{
                    const { itemResizable: s } = n, c = P(x.value.sum());
                    return d.value, [
                        n.itemsStyle,
                        {
                            boxSizing: "content-box",
                            width: P(r.value),
                            height: s ? "" : c,
                            minHeight: s ? c : "",
                            paddingTop: P(n.paddingTop),
                            paddingBottom: P(n.paddingBottom)
                        }
                    ];
                }),
                visibleItemsStyle: q(()=>(d.value, {
                        transform: `translateY(${P(x.value.sum(m.value))})`
                    })),
                viewportItems: v,
                listElRef: l,
                itemsElRef: K(null),
                scrollTo: a,
                handleListResize: V,
                handleListScroll: L,
                handleListWheel: D,
                handleItemResize: Y
            };
        },
        render () {
            const { itemResizable: n, keyField: e, keyToIndex: t, visibleItemsTag: o } = this;
            return X(Se, {
                onResize: this.handleListResize
            }, {
                default: ()=>{
                    var r, u;
                    return X("div", Xt(this.$attrs, {
                        class: [
                            "v-vl",
                            this.showScrollbar && "v-vl--show-scrollbar"
                        ],
                        onScroll: this.handleListScroll,
                        onWheel: this.handleListWheel,
                        ref: "listElRef"
                    }), [
                        this.items.length !== 0 ? X("div", {
                            ref: "itemsElRef",
                            class: "v-vl-items",
                            style: this.itemsStyle
                        }, [
                            X(o, Object.assign({
                                class: "v-vl-visible-items",
                                style: this.visibleItemsStyle
                            }, this.visibleItemsProps), {
                                default: ()=>{
                                    const { renderCol: b, renderItemWithCols: w } = this;
                                    return this.viewportItems.map((l)=>{
                                        const h = l[e], p = t.get(h), x = b != null ? X(ze, {
                                            index: p,
                                            item: l
                                        }) : void 0, d = w != null ? X(ze, {
                                            index: p,
                                            item: l
                                        }) : void 0, f = this.$slots.default({
                                            item: l,
                                            renderedCols: x,
                                            renderedItemWithCols: d,
                                            index: p
                                        })[0];
                                        return n ? X(Se, {
                                            key: h,
                                            onResize: (m)=>this.handleItemResize(h, m)
                                        }, {
                                            default: ()=>f
                                        }) : (f.key = h, f);
                                    });
                                }
                            })
                        ]) : (u = (r = this.$slots).empty) === null || u === void 0 ? void 0 : u.call(r)
                    ]);
                }
            });
        }
    });
    ({ defineComponent: _t, h: Pt, ref: qt } = await F("vue"));
    Kt = A(".v-x-scroll", {
        overflow: "auto",
        scrollbarWidth: "none"
    }, [
        A("&::-webkit-scrollbar", {
            width: 0,
            height: 0
        })
    ]);
    gn = _t({
        name: "XScroll",
        props: {
            disabled: Boolean,
            onScroll: Function
        },
        setup () {
            const n = qt(null);
            function e(r) {
                !(r.currentTarget.offsetWidth < r.currentTarget.scrollWidth) || r.deltaY === 0 || (r.currentTarget.scrollLeft += r.deltaY + r.deltaX, r.preventDefault());
            }
            const t = ee();
            return Kt.mount({
                id: "vueuc/x-scroll",
                head: !0,
                anchorMetaName: te,
                ssr: t
            }), Object.assign({
                selfRef: n,
                handleWheel: e
            }, {
                scrollTo (...r) {
                    var u;
                    (u = n.value) === null || u === void 0 || u.scrollTo(...r);
                }
            });
        },
        render () {
            return Pt("div", {
                ref: "selfRef",
                onScroll: this.onScroll,
                onWheel: this.disabled ? void 0 : this.handleWheel,
                class: "v-x-scroll"
            }, this.$slots);
        }
    });
    ({ defineComponent: Gt, renderSlot: Jt, h: Ie, onMounted: Qt, ref: Ee, nextTick: Zt } = await F("vue"));
    B = "v-hidden";
    Rt = A("[v-hidden]", {
        display: "none!important"
    });
    yn = Gt({
        name: "Overflow",
        props: {
            getCounter: Function,
            getTail: Function,
            updateCounter: Function,
            onUpdateCount: Function,
            onUpdateOverflow: Function
        },
        setup (n, { slots: e }) {
            const t = Ee(null), o = Ee(null);
            function r(b) {
                const { value: w } = t, { getCounter: l, getTail: h } = n;
                let p;
                if (l !== void 0 ? p = l() : p = o.value, !w || !p) return;
                p.hasAttribute(B) && p.removeAttribute(B);
                const { children: x } = w;
                if (b.showAllItemsBeforeCalculate) for (const $ of x)$.hasAttribute(B) && $.removeAttribute(B);
                const d = w.offsetWidth, f = [], m = e.tail ? h?.() : null;
                let v = m ? m.offsetWidth : 0, a = !1;
                const i = w.children.length - (e.tail ? 1 : 0);
                for(let $ = 0; $ < i - 1; ++$){
                    if ($ < 0) continue;
                    const z = x[$];
                    if (a) {
                        z.hasAttribute(B) || z.setAttribute(B, "");
                        continue;
                    } else z.hasAttribute(B) && z.removeAttribute(B);
                    const Y = z.offsetWidth;
                    if (v += Y, f[$] = Y, v > d) {
                        const { updateCounter: O } = n;
                        for(let T = $; T >= 0; --T){
                            const L = i - 1 - T;
                            O !== void 0 ? O(L) : p.textContent = `${L}`;
                            const D = p.offsetWidth;
                            if (v -= f[T], v + D <= d || T === 0) {
                                a = !0, $ = T - 1, m && ($ === -1 ? (m.style.maxWidth = `${d - D}px`, m.style.boxSizing = "border-box") : m.style.maxWidth = "");
                                const { onUpdateCount: V } = n;
                                V && V(L);
                                break;
                            }
                        }
                    }
                }
                const { onUpdateOverflow: g } = n;
                a ? g !== void 0 && g(!0) : (g !== void 0 && g(!1), p.setAttribute(B, ""));
            }
            const u = ee();
            return Rt.mount({
                id: "vueuc/overflow",
                head: !0,
                anchorMetaName: te,
                ssr: u
            }), Qt(()=>r({
                    showAllItemsBeforeCalculate: !1
                })), {
                selfRef: t,
                counterRef: o,
                sync: r
            };
        },
        render () {
            const { $slots: n } = this;
            return Zt(()=>this.sync({
                    showAllItemsBeforeCalculate: !1
                })), Ie("div", {
                class: "v-overflow",
                ref: "selfRef"
            }, [
                Jt(n, "default"),
                n.counter ? n.counter() : Ie("span", {
                    style: {
                        display: "inline-block"
                    },
                    ref: "counterRef"
                }),
                n.tail ? n.tail() : null
            ]);
        }
    });
    function Le(n) {
        return n instanceof HTMLElement;
    }
    function Ve(n) {
        for(let e = 0; e < n.childNodes.length; e++){
            const t = n.childNodes[e];
            if (Le(t) && (Xe(t) || Ve(t))) return !0;
        }
        return !1;
    }
    function He(n) {
        for(let e = n.childNodes.length - 1; e >= 0; e--){
            const t = n.childNodes[e];
            if (Le(t) && (Xe(t) || He(t))) return !0;
        }
        return !1;
    }
    function Xe(n) {
        if (!en(n)) return !1;
        try {
            n.focus({
                preventScroll: !0
            });
        } catch  {}
        return document.activeElement === n;
    }
    function en(n) {
        if (n.tabIndex > 0 || n.tabIndex === 0 && n.getAttribute("tabIndex") !== null) return !0;
        if (n.getAttribute("disabled")) return !1;
        switch(n.nodeName){
            case "A":
                return !!n.href && n.rel !== "ignore";
            case "INPUT":
                return n.type !== "hidden" && n.type !== "file";
            case "BUTTON":
            case "SELECT":
            case "TEXTAREA":
                return !0;
            default:
                return !1;
        }
    }
    const { h: de, defineComponent: tn, ref: Fe, Fragment: nn, onMounted: on, onBeforeUnmount: rn, watch: ln } = await F("vue");
    let G = [];
    xn = tn({
        name: "FocusTrap",
        props: {
            disabled: Boolean,
            active: Boolean,
            autoFocus: {
                type: Boolean,
                default: !0
            },
            onEsc: Function,
            initialFocusTo: String,
            finalFocusTo: String,
            returnFocusOnDeactivated: {
                type: Boolean,
                default: !0
            }
        },
        setup (n) {
            const e = Ye(), t = Fe(null), o = Fe(null);
            let r = !1, u = !1;
            const b = typeof document > "u" ? null : document.activeElement;
            function w() {
                return G[G.length - 1] === e;
            }
            function l(a) {
                var i;
                a.code === "Escape" && w() && ((i = n.onEsc) === null || i === void 0 || i.call(n, a));
            }
            on(()=>{
                ln(()=>n.active, (a)=>{
                    a ? (x(), fe("keydown", document, l)) : (J("keydown", document, l), r && d());
                }, {
                    immediate: !0
                });
            }), rn(()=>{
                J("keydown", document, l), r && d();
            });
            function h(a) {
                if (!u && w()) {
                    const i = p();
                    if (i === null || i.contains(De(a))) return;
                    f("first");
                }
            }
            function p() {
                const a = t.value;
                if (a === null) return null;
                let i = a;
                for(; i = i.nextSibling, !(i === null || i instanceof Element && i.tagName === "DIV"););
                return i;
            }
            function x() {
                var a;
                if (!n.disabled) {
                    if (G.push(e), n.autoFocus) {
                        const { initialFocusTo: i } = n;
                        i === void 0 ? f("first") : (a = we(i)) === null || a === void 0 || a.focus({
                            preventScroll: !0
                        });
                    }
                    r = !0, document.addEventListener("focus", h, !0);
                }
            }
            function d() {
                var a;
                if (n.disabled || (document.removeEventListener("focus", h, !0), G = G.filter((g)=>g !== e), w())) return;
                const { finalFocusTo: i } = n;
                i !== void 0 ? (a = we(i)) === null || a === void 0 || a.focus({
                    preventScroll: !0
                }) : n.returnFocusOnDeactivated && b instanceof HTMLElement && (u = !0, b.focus({
                    preventScroll: !0
                }), u = !1);
            }
            function f(a) {
                if (w() && n.active) {
                    const i = t.value, g = o.value;
                    if (i !== null && g !== null) {
                        const $ = p();
                        if ($ == null || $ === g) {
                            u = !0, i.focus({
                                preventScroll: !0
                            }), u = !1;
                            return;
                        }
                        u = !0;
                        const z = a === "first" ? Ve($) : He($);
                        u = !1, z || (u = !0, i.focus({
                            preventScroll: !0
                        }), u = !1);
                    }
                }
            }
            function m(a) {
                if (u) return;
                const i = p();
                i !== null && (a.relatedTarget !== null && i.contains(a.relatedTarget) ? f("last") : f("first"));
            }
            function v(a) {
                u || (a.relatedTarget !== null && a.relatedTarget === t.value ? f("last") : f("first"));
            }
            return {
                focusableStartRef: t,
                focusableEndRef: o,
                focusableStyle: "position: absolute; height: 0; width: 0;",
                handleStartFocus: m,
                handleEndFocus: v
            };
        },
        render () {
            const { default: n } = this.$slots;
            if (n === void 0) return null;
            if (this.disabled) return n();
            const { active: e, focusableStyle: t } = this;
            return de(nn, null, [
                de("div", {
                    "aria-hidden": "true",
                    tabindex: e ? "0" : "-1",
                    ref: "focusableStartRef",
                    style: t,
                    onFocus: this.handleStartFocus
                }),
                n(),
                de("div", {
                    "aria-hidden": "true",
                    style: t,
                    ref: "focusableEndRef",
                    tabindex: e ? "0" : "-1",
                    onFocus: this.handleEndFocus
                })
            ]);
        }
    });
});
export { mn as B, xn as F, ht as L, Se as V, wn as a, bn as b, vn as c, yn as d, gn as e, Me as r, __tla };
