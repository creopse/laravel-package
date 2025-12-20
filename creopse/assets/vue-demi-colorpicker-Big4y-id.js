import { i as Ee, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-CmLqe3wy.js";
import { u as Fe, a as he, o as qe, __tla as __tla_1 } from "./vueuse_core-DKs1Kb2a.js";
import { t as R } from "./tinycolor2-CTCHxbWk.js";
import { n as _e } from "./gradient-parser-BK3BEyw3.js";
import { C as f } from "./vue-types-DKiKY5UN.js";
import { V as te } from "./aesoper_normal-utils-C9gJ9fEa.js";
import { m as le } from "./lodash-es-DCTpQg3n.js";
import { t as ee, w as O, u as U, __tla as __tla_2 } from "./vueuse_shared-B0wwFjQU.js";
import { c as Ye } from "./popperjs_core-DC5wud4b.js";
let $o;
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
    await Ee("vue");
    var Ue = Object.defineProperty, je = (e, t, o)=>t in e ? Ue(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o, W = (e, t, o)=>(je(e, typeof t != "symbol" ? t + "" : t, o), o);
    const { defineComponent: z, ref: E, reactive: q, watch: Z, computed: K, openBlock: C, createElementBlock: w, normalizeClass: T, createElementVNode: d, normalizeStyle: I, Fragment: J, renderList: oe, getCurrentInstance: Qe, nextTick: Je, onMounted: Le, onBeforeUnmount: Ze, createCommentVNode: B, withDirectives: ne, vModelText: et, createTextVNode: Me, toDisplayString: re, resolveComponent: V, createBlock: M, createVNode: j, inject: Ke, vShow: ue, renderSlot: de, provide: tt, useSlots: ot, withCtx: we, resolveDynamicComponent: xe, mergeProps: Be, Teleport: at } = await Ee("vue"), P = (e)=>Math.round(e * 100) / 100;
    class A {
        constructor(t){
            W(this, "instance"), W(this, "alphaValue", 0), W(this, "redValue", 0), W(this, "greenValue", 0), W(this, "blueValue", 0), W(this, "hueValue", 0), W(this, "saturationValue", 0), W(this, "brightnessValue", 0), W(this, "hslSaturationValue", 0), W(this, "lightnessValue", 0), W(this, "initAlpha", ()=>{
                const o = this.instance.getAlpha();
                this.alphaValue = Math.min(1, o) * 100;
            }), W(this, "initLightness", ()=>{
                const { s: o, l: a } = this.instance.toHsl();
                this.hslSaturationValue = P(o), this.lightnessValue = P(a);
            }), W(this, "initRgb", ()=>{
                const { r: o, g: a, b: c } = this.instance.toRgb();
                this.redValue = P(o), this.greenValue = P(a), this.blueValue = P(c);
            }), W(this, "initHsb", ()=>{
                const { h: o, s: a, v: c } = this.instance.toHsv();
                this.hueValue = Math.min(360, Math.ceil(o)), this.saturationValue = P(a), this.brightnessValue = P(c);
            }), W(this, "toHexString", ()=>this.instance.toHexString()), W(this, "toRgbString", ()=>this.instance.toRgbString()), this.instance = R(t), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
        }
        toString(t) {
            return this.instance.toString(t);
        }
        get hex() {
            return this.instance.toHex();
        }
        set hex(t) {
            this.instance = R(t), this.initHsb(), this.initRgb(), this.initAlpha(), this.initLightness();
        }
        set hue(t) {
            this.saturation === 0 && this.brightness === 0 && (this.saturationValue = 1, this.brightnessValue = 1), this.instance = R({
                h: P(t),
                s: this.saturation,
                v: this.brightness,
                a: this.alphaValue / 100
            }), this.initRgb(), this.initLightness(), this.hueValue = P(t);
        }
        get hue() {
            return this.hueValue;
        }
        set saturation(t) {
            this.instance = R({
                h: this.hue,
                s: P(t),
                v: this.brightness,
                a: this.alphaValue / 100
            }), this.initRgb(), this.initLightness(), this.saturationValue = P(t);
        }
        get saturation() {
            return this.saturationValue;
        }
        set brightness(t) {
            this.instance = R({
                h: this.hue,
                s: this.saturation,
                v: P(t),
                a: this.alphaValue / 100
            }), this.initRgb(), this.initLightness(), this.brightnessValue = P(t);
        }
        get brightness() {
            return this.brightnessValue;
        }
        set lightness(t) {
            this.instance = R({
                h: this.hue,
                s: this.hslSaturationValue,
                l: P(t),
                a: this.alphaValue / 100
            }), this.initRgb(), this.initHsb(), this.lightnessValue = P(t);
        }
        get lightness() {
            return this.lightnessValue;
        }
        set red(t) {
            const o = this.instance.toRgb();
            this.instance = R({
                ...o,
                r: P(t),
                a: this.alphaValue / 100
            }), this.initHsb(), this.initLightness(), this.redValue = P(t);
        }
        get red() {
            return this.redValue;
        }
        set green(t) {
            const o = this.instance.toRgb();
            this.instance = R({
                ...o,
                g: P(t),
                a: this.alphaValue / 100
            }), this.initHsb(), this.initLightness(), this.greenValue = P(t);
        }
        get green() {
            return this.greenValue;
        }
        set blue(t) {
            const o = this.instance.toRgb();
            this.instance = R({
                ...o,
                b: P(t),
                a: this.alphaValue / 100
            }), this.initHsb(), this.initLightness(), this.blueValue = P(t);
        }
        get blue() {
            return this.blueValue;
        }
        set alpha(t) {
            this.instance.setAlpha(t / 100), this.alphaValue = t;
        }
        get alpha() {
            return this.alphaValue;
        }
        get RGB() {
            return [
                this.red,
                this.green,
                this.blue,
                parseFloat((this.alpha / 100).toFixed(2))
            ];
        }
        get HSB() {
            return [
                this.hue,
                this.saturation,
                this.brightness,
                parseFloat((this.alpha / 100).toFixed(2))
            ];
        }
        get HSL() {
            return [
                this.hue,
                this.hslSaturationValue,
                this.lightness,
                parseFloat((this.alpha / 100).toFixed(2))
            ];
        }
    }
    function He(e, t, o, a) {
        return `rgba(${[
            e,
            t,
            o,
            a / 100
        ].join(",")})`;
    }
    const ie = (e, t, o)=>t < o ? e < t ? t : e > o ? o : e : e < o ? o : e > t ? t : e, ge = "color-history", pe = 8, X = (e, t)=>{
        const o = e.__vccOpts || e;
        for (const [a, c] of t)o[a] = c;
        return o;
    }, nt = z({
        name: "Alpha",
        props: {
            color: f.instanceOf(A),
            size: f.oneOf([
                "small",
                "default"
            ]).def("default")
        },
        emits: [
            "change"
        ],
        setup (e, { emit: t }) {
            const o = E(null), a = E(null);
            let c = e.color || new A;
            const s = q({
                red: c.red,
                green: c.green,
                blue: c.blue,
                alpha: c.alpha
            });
            Z(()=>e.color, (g)=>{
                g && (c = g, le(s, {
                    red: g.red,
                    green: g.green,
                    blue: g.blue,
                    alpha: g.alpha
                }));
            }, {
                deep: !0
            });
            const i = K(()=>{
                const g = He(s.red, s.green, s.blue, 0), h = He(s.red, s.green, s.blue, 100);
                return {
                    background: `linear-gradient(to right, ${g} , ${h})`
                };
            }), n = ()=>{
                if (o.value && a.value) {
                    const g = s.alpha / 100, h = o.value.getBoundingClientRect(), k = a.value.offsetWidth;
                    return Math.round(g * (h.width - k) + k / 2);
                }
                return 0;
            }, u = K(()=>({
                    left: n() + "px",
                    top: 0
                })), m = (g)=>{
                g.target !== o.value && r(g);
            }, r = (g)=>{
                if (g.stopPropagation(), o.value && a.value) {
                    const h = o.value.getBoundingClientRect(), k = a.value.offsetWidth;
                    let y = g.clientX - h.left;
                    y = Math.max(k / 2, y), y = Math.min(y, h.width - k / 2);
                    const p = Math.round((y - k / 2) / (h.width - k) * 100);
                    c.alpha = p, s.alpha = p, t("change", p);
                }
            };
            return ee(()=>{
                const g = {
                    drag: (h)=>{
                        r(h);
                    },
                    end: (h)=>{
                        r(h);
                    }
                };
                o.value && a.value && te.triggerDragEvent(o.value, g);
            }), {
                barElement: o,
                cursorElement: a,
                getCursorStyle: u,
                getBackgroundStyle: i,
                onClickSider: m
            };
        }
    });
    function rt(e, t, o, a, c, s) {
        return C(), w("div", {
            class: T([
                "vc-alpha-slider",
                "transparent",
                {
                    "small-slider": e.size === "small"
                }
            ])
        }, [
            d("div", {
                ref: "barElement",
                class: "vc-alpha-slider__bar",
                style: I(e.getBackgroundStyle),
                onClick: t[0] || (t[0] = (...i)=>e.onClickSider && e.onClickSider(...i))
            }, [
                d("div", {
                    class: T([
                        "vc-alpha-slider__bar-pointer",
                        {
                            "small-bar": e.size === "small"
                        }
                    ]),
                    ref: "cursorElement",
                    style: I(e.getCursorStyle)
                }, [
                    ...t[1] || (t[1] = [
                        d("div", {
                            class: "vc-alpha-slider__bar-handle"
                        }, null, -1)
                    ])
                ], 6)
            ], 4)
        ], 2);
    }
    const ve = X(nt, [
        [
            "render",
            rt
        ],
        [
            "__scopeId",
            "data-v-18925ba6"
        ]
    ]), lt = [
        [
            "#fcc02e",
            "#f67c01",
            "#e64a19",
            "#d81b43",
            "#8e24aa",
            "#512da7",
            "#1f87e8",
            "#008781",
            "#05a045"
        ],
        [
            "#fed835",
            "#fb8c00",
            "#f5511e",
            "#eb1d4e",
            "#9c28b1",
            "#5d35b0",
            "#2097f3",
            "#029688",
            "#4cb050"
        ],
        [
            "#ffeb3c",
            "#ffa727",
            "#fe5722",
            "#eb4165",
            "#aa47bc",
            "#673bb7",
            "#42a5f6",
            "#26a59a",
            "#83c683"
        ],
        [
            "#fff176",
            "#ffb74e",
            "#ff8a66",
            "#f1627e",
            "#b968c7",
            "#7986cc",
            "#64b5f6",
            "#80cbc4",
            "#a5d6a7"
        ],
        [
            "#fff59c",
            "#ffcc80",
            "#ffab91",
            "#fb879e",
            "#cf93d9",
            "#9ea8db",
            "#90caf8",
            "#b2dfdc",
            "#c8e6ca"
        ],
        [
            "transparent",
            "#ffffff",
            "#dedede",
            "#a9a9a9",
            "#4b4b4b",
            "#353535",
            "#212121",
            "#000000",
            "advance"
        ]
    ], st = z({
        name: "Palette",
        emits: [
            "change"
        ],
        setup (e, { emit: t }) {
            return {
                palettes: lt,
                computedBgStyle: (o)=>o === "transparent" ? o : o === "advance" ? {} : {
                        background: R(o).toRgbString()
                    },
                onColorChange: (o)=>{
                    t("change", o);
                }
            };
        }
    }), it = {
        class: "vc-compact"
    }, ct = [
        "onClick"
    ];
    function ut(e, t, o, a, c, s) {
        return C(), w("div", it, [
            (C(!0), w(J, null, oe(e.palettes, (i, n)=>(C(), w("div", {
                    key: n,
                    class: "vc-compact__row"
                }, [
                    (C(!0), w(J, null, oe(i, (u, m)=>(C(), w("div", {
                            key: m,
                            class: "vc-compact__color-cube--wrap",
                            onClick: (r)=>e.onColorChange(u)
                        }, [
                            d("div", {
                                class: T([
                                    "vc-compact__color_cube",
                                    {
                                        advance: u === "advance",
                                        transparent: u === "transparent"
                                    }
                                ]),
                                style: I(e.computedBgStyle(u))
                            }, null, 6)
                        ], 8, ct))), 128))
                ]))), 128))
        ]);
    }
    const Ne = X(st, [
        [
            "render",
            ut
        ],
        [
            "__scopeId",
            "data-v-b969fd48"
        ]
    ]), dt = z({
        name: "Board",
        props: {
            color: f.instanceOf(A),
            round: f.bool.def(!1),
            hide: f.bool.def(!0)
        },
        emits: [
            "change"
        ],
        setup (e, { emit: t }) {
            var o, a, c;
            const s = Qe(), i = {
                h: ((o = e.color) == null ? void 0 : o.hue) || 0,
                s: 1,
                v: 1
            }, n = new A(i).toHexString(), u = q({
                hueColor: n,
                saturation: ((a = e.color) == null ? void 0 : a.saturation) || 0,
                brightness: ((c = e.color) == null ? void 0 : c.brightness) || 0
            }), m = E(0), r = E(0), g = E(), h = K(()=>({
                    top: m.value + "px",
                    left: r.value + "px"
                })), k = ()=>{
                if (s) {
                    const _ = s.vnode.el;
                    r.value = u.saturation * _?.clientWidth, m.value = (1 - u.brightness) * _?.clientHeight;
                }
            };
            let y = !1;
            const p = (_)=>{
                y = !0, x(_), document.addEventListener("mousemove", b), document.addEventListener("mouseup", v);
            }, b = (_)=>{
                y && x(_);
            }, v = ()=>{
                y = !1, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", v);
            }, x = (_)=>{
                if (s) {
                    const F = s.vnode.el, L = F?.getBoundingClientRect();
                    let N = _.clientX - L.left, Y = _.clientY - L.top;
                    N = ie(N, 0, L.width), Y = ie(Y, 0, L.height);
                    const Q = N / L.width, G = ie(-(Y / L.height) + 1, 0, 1);
                    r.value = N, m.value = Y, u.saturation = Q, u.brightness = G, t("change", Q, G);
                }
            };
            return ee(()=>{
                s && s.vnode.el && g.value && Je(()=>{
                    k();
                });
            }), O(()=>e.color, (_)=>{
                le(u, {
                    hueColor: new A({
                        h: _.hue,
                        s: 1,
                        v: 1
                    }).toHexString(),
                    saturation: _.saturation,
                    brightness: _.brightness
                }), k();
            }, {
                deep: !0
            }), Le(()=>{
                document.addEventListener("mouseup", v);
            }), Ze(()=>{
                document.removeEventListener("mouseup", v), document.removeEventListener("mousemove", b);
            }), {
                state: u,
                cursorElement: g,
                getCursorStyle: h,
                onClickBoard: p,
                onDrag: b,
                onDragEnd: v
            };
        }
    });
    function ht(e, t, o, a, c, s) {
        return C(), w("div", {
            ref: "boardElement",
            class: T([
                "vc-saturation",
                {
                    "vc-saturation__chrome": e.round,
                    "vc-saturation__hidden": e.hide
                }
            ]),
            style: I({
                backgroundColor: e.state.hueColor
            }),
            onMousedown: t[0] || (t[0] = (...i)=>e.onClickBoard && e.onClickBoard(...i))
        }, [
            t[2] || (t[2] = d("div", {
                class: "vc-saturation__white"
            }, null, -1)),
            t[3] || (t[3] = d("div", {
                class: "vc-saturation__black"
            }, null, -1)),
            d("div", {
                class: "vc-saturation__cursor",
                ref: "cursorElement",
                style: I(e.getCursorStyle)
            }, [
                ...t[1] || (t[1] = [
                    d("div", null, null, -1)
                ])
            ], 4)
        ], 38);
    }
    const Ce = X(dt, [
        [
            "render",
            ht
        ],
        [
            "__scopeId",
            "data-v-98115ef2"
        ]
    ]), gt = z({
        name: "Hue",
        props: {
            color: f.instanceOf(A),
            size: f.oneOf([
                "small",
                "default"
            ]).def("default")
        },
        emits: [
            "change"
        ],
        setup (e, { emit: t }) {
            const o = E(null), a = E(null);
            let c = e.color || new A;
            const s = q({
                hue: c.hue || 0
            });
            Z(()=>e.color, (r)=>{
                r && (c = r, le(s, {
                    hue: c.hue
                }));
            }, {
                deep: !0
            });
            const i = ()=>{
                if (o.value && a.value) {
                    const r = o.value.getBoundingClientRect(), g = a.value.offsetWidth;
                    return s.hue === 360 ? r.width - g / 2 : s.hue % 360 * (r.width - g) / 360 + g / 2;
                }
                return 0;
            }, n = K(()=>({
                    left: i() + "px",
                    top: 0
                })), u = (r)=>{
                r.target !== o.value && m(r);
            }, m = (r)=>{
                if (r.stopPropagation(), o.value && a.value) {
                    const g = o.value.getBoundingClientRect(), h = a.value.offsetWidth;
                    let k = r.clientX - g.left;
                    k = Math.min(k, g.width - h / 2), k = Math.max(h / 2, k);
                    const y = Math.round((k - h / 2) / (g.width - h) * 360);
                    c.hue = y, s.hue = y, t("change", y);
                }
            };
            return ee(()=>{
                const r = {
                    drag: (g)=>{
                        m(g);
                    },
                    end: (g)=>{
                        m(g);
                    }
                };
                o.value && a.value && te.triggerDragEvent(o.value, r);
            }), {
                barElement: o,
                cursorElement: a,
                getCursorStyle: n,
                onClickSider: u
            };
        }
    });
    function pt(e, t, o, a, c, s) {
        return C(), w("div", {
            class: T([
                "vc-hue-slider",
                {
                    "small-slider": e.size === "small"
                }
            ])
        }, [
            d("div", {
                ref: "barElement",
                class: "vc-hue-slider__bar",
                onClick: t[0] || (t[0] = (...i)=>e.onClickSider && e.onClickSider(...i))
            }, [
                d("div", {
                    class: T([
                        "vc-hue-slider__bar-pointer",
                        {
                            "small-bar": e.size === "small"
                        }
                    ]),
                    ref: "cursorElement",
                    style: I(e.getCursorStyle)
                }, [
                    ...t[1] || (t[1] = [
                        d("div", {
                            class: "vc-hue-slider__bar-handle"
                        }, null, -1)
                    ])
                ], 6)
            ], 512)
        ], 2);
    }
    const fe = X(gt, [
        [
            "render",
            pt
        ],
        [
            "__scopeId",
            "data-v-e1a08576"
        ]
    ]), vt = z({
        name: "Lightness",
        props: {
            color: f.instanceOf(A),
            size: f.oneOf([
                "small",
                "default"
            ]).def("default")
        },
        emits: [
            "change"
        ],
        setup (e, { emit: t }) {
            const o = E(null), a = E(null);
            let c = e.color || new A;
            const [s, i, n] = c.HSL, u = q({
                hue: s,
                saturation: i,
                lightness: n
            });
            Z(()=>e.color, (y)=>{
                if (y) {
                    c = y;
                    const [p, b, v] = c.HSL;
                    le(u, {
                        hue: p,
                        saturation: b,
                        lightness: v
                    });
                }
            }, {
                deep: !0
            });
            const m = K(()=>{
                const y = R({
                    h: u.hue,
                    s: u.saturation,
                    l: .8
                }).toPercentageRgbString(), p = R({
                    h: u.hue,
                    s: u.saturation,
                    l: .6
                }).toPercentageRgbString(), b = R({
                    h: u.hue,
                    s: u.saturation,
                    l: .4
                }).toPercentageRgbString(), v = R({
                    h: u.hue,
                    s: u.saturation,
                    l: .2
                }).toPercentageRgbString();
                return {
                    background: [
                        `linear-gradient(to right, rgb(255, 255, 255), ${y}, ${p}, ${b}, ${v}, rgb(0, 0, 0))`,
                        `-webkit-linear-gradient(left, rgb(255, 255, 255), ${y}, ${p}, ${b}, ${v}, rgb(0, 0, 0))`,
                        `-moz-linear-gradient(left, rgb(255, 255, 255), ${y}, ${p}, ${b}, ${v}, rgb(0, 0, 0))`,
                        `-ms-linear-gradient(left, rgb(255, 255, 255), ${y}, ${p}, ${b}, ${v}, rgb(0, 0, 0))`
                    ]
                };
            }), r = ()=>{
                if (o.value && a.value) {
                    const y = u.lightness, p = o.value.getBoundingClientRect(), b = a.value.offsetWidth;
                    return (1 - y) * (p.width - b) + b / 2;
                }
                return 0;
            }, g = K(()=>({
                    left: r() + "px",
                    top: 0
                })), h = (y)=>{
                y.target !== o.value && k(y);
            }, k = (y)=>{
                if (y.stopPropagation(), o.value && a.value) {
                    const p = o.value.getBoundingClientRect(), b = a.value.offsetWidth;
                    let v = y.clientX - p.left;
                    v = Math.max(b / 2, v), v = Math.min(v, p.width - b / 2);
                    const x = 1 - (v - b / 2) / (p.width - b);
                    c.lightness = x, t("change", x);
                }
            };
            return ee(()=>{
                const y = {
                    drag: (p)=>{
                        k(p);
                    },
                    end: (p)=>{
                        k(p);
                    }
                };
                o.value && a.value && te.triggerDragEvent(o.value, y);
            }), {
                barElement: o,
                cursorElement: a,
                getCursorStyle: g,
                getBackgroundStyle: m,
                onClickSider: h
            };
        }
    });
    function Ct(e, t, o, a, c, s) {
        return C(), w("div", {
            class: T([
                "vc-lightness-slider",
                {
                    "small-slider": e.size === "small"
                }
            ])
        }, [
            d("div", {
                ref: "barElement",
                class: "vc-lightness-slider__bar",
                style: I(e.getBackgroundStyle),
                onClick: t[0] || (t[0] = (...i)=>e.onClickSider && e.onClickSider(...i))
            }, [
                d("div", {
                    class: T([
                        "vc-lightness-slider__bar-pointer",
                        {
                            "small-bar": e.size === "small"
                        }
                    ]),
                    ref: "cursorElement",
                    style: I(e.getCursorStyle)
                }, [
                    ...t[1] || (t[1] = [
                        d("div", {
                            class: "vc-lightness-slider__bar-handle"
                        }, null, -1)
                    ])
                ], 6)
            ], 4)
        ], 2);
    }
    const $e = X(vt, [
        [
            "render",
            Ct
        ],
        [
            "__scopeId",
            "data-v-94a50a9e"
        ]
    ]), ft = z({
        name: "History",
        props: {
            colors: f.arrayOf(String).def(()=>[]),
            round: f.bool.def(!1)
        },
        emits: [
            "change"
        ],
        setup (e, { emit: t }) {
            return {
                onColorSelect: (o)=>{
                    t("change", o);
                }
            };
        }
    }), bt = {
        key: 0,
        class: "vc-colorPicker__record"
    }, yt = {
        class: "color-list"
    }, mt = [
        "onClick"
    ];
    function kt(e, t, o, a, c, s) {
        return e.colors && e.colors.length > 0 ? (C(), w("div", bt, [
            d("div", yt, [
                (C(!0), w(J, null, oe(e.colors, (i, n)=>(C(), w("div", {
                        key: n,
                        class: T([
                            "color-item",
                            "transparent",
                            {
                                "color-item__round": e.round
                            }
                        ]),
                        onClick: (u)=>e.onColorSelect(i)
                    }, [
                        d("div", {
                            class: "color-item__display",
                            style: I({
                                backgroundColor: i
                            })
                        }, null, 4)
                    ], 10, mt))), 128))
            ])
        ])) : B("", !0);
    }
    const be = X(ft, [
        [
            "render",
            kt
        ],
        [
            "__scopeId",
            "data-v-0f657238"
        ]
    ]), St = z({
        name: "Display",
        props: {
            color: f.instanceOf(A),
            disableAlpha: f.bool.def(!1)
        },
        emits: [
            "update:color",
            "change"
        ],
        setup (e, { emit: t }) {
            var o, a, c, s;
            const { copy: i, copied: n, isSupported: u } = Fe(), m = E("hex"), r = q({
                color: e.color,
                hex: (o = e.color) == null ? void 0 : o.hex,
                alpha: Math.round(((a = e.color) == null ? void 0 : a.alpha) || 100),
                rgba: (c = e.color) == null ? void 0 : c.RGB,
                previewBgColor: (s = e.color) == null ? void 0 : s.toRgbString()
            }), g = K(()=>({
                    background: r.previewBgColor
                })), h = ()=>{
                m.value = m.value === "rgba" ? "hex" : "rgba";
            }, k = U((v)=>{
                if (!v.target.value) return;
                let x = parseInt(v.target.value.replace("%", ""));
                x > 100 && (v.target.value = "100", x = 100), x < 0 && (v.target.value = "0", x = 0), isNaN(x) && (v.target.value = "100", x = 100), !isNaN(x) && r.color && (r.color.alpha = x), t("change", r.color);
            }, 300), y = U((v, x)=>{
                if (r.color) {
                    if (m.value === "hex") {
                        const _ = v.target.value.replace("#", "");
                        R(_).isValid() ? [
                            3,
                            4
                        ].includes(_.length) && (r.color.hex = _) : r.color.hex = "000000", t("change", r.color);
                    } else if (m.value === "rgba" && x === 3 && v.target.value.toString() === "0." && r.rgba) {
                        r.rgba[x] = v.target.value;
                        const [_, F, L, N] = r.rgba;
                        r.color.hex = R({
                            r: _,
                            g: F,
                            b: L
                        }).toHex(), r.color.alpha = Math.round(N * 100), t("change", r.color);
                    }
                }
            }, 100), p = U((v, x)=>{
                if (v.target.value) {
                    if (m.value === "hex") {
                        const _ = v.target.value.replace("#", "");
                        R(_).isValid() && r.color && [
                            6,
                            8
                        ].includes(_.length) && (r.color.hex = _);
                    } else if (x !== void 0 && r.rgba && r.color) {
                        if (v.target.value < 0 && (v.target.value = 0), x === 3 && ((v.target.value > 1 || isNaN(v.target.value)) && (v.target.value = 1), v.target.value.toString() === "0.")) return;
                        x < 3 && v.target.value > 255 && (v.target.value = 255), r.rgba[x] = v.target.value;
                        const [_, F, L, N] = r.rgba;
                        r.color.hex = R({
                            r: _,
                            g: F,
                            b: L
                        }).toHex(), r.color.alpha = Math.round(N * 100);
                    }
                    t("change", r.color);
                }
            }, 300), b = ()=>{
                if (u && r.color) {
                    const v = m.value === "hex" ? r.color.toString(r.color.alpha === 100 ? "hex6" : "hex8") : r.color.toRgbString();
                    i(v || "");
                }
            };
            return O(()=>e.color, (v)=>{
                v && (r.color = v, r.alpha = Math.round(r.color.alpha), r.hex = r.color.hex, r.rgba = r.color.RGB);
            }, {
                deep: !0
            }), O(()=>r.color, ()=>{
                r.color && (r.previewBgColor = r.color.toRgbString());
            }, {
                deep: !0
            }), {
                state: r,
                getBgColorStyle: g,
                inputType: m,
                copied: n,
                onInputTypeChange: h,
                onAlphaBlur: k,
                onInputChange: p,
                onBlurChange: y,
                onCopyColorStr: b
            };
        }
    }), _t = {
        class: "vc-display"
    }, wt = {
        class: "vc-current-color vc-transparent"
    }, xt = {
        key: 0,
        class: "copy-text"
    }, Bt = {
        key: 0,
        style: {
            display: "flex",
            flex: "1",
            gap: "4px",
            height: "100%"
        }
    }, Ht = {
        class: "vc-color-input"
    }, Rt = {
        key: 0,
        class: "vc-alpha-input"
    }, At = [
        "value"
    ], Pt = {
        key: 1,
        style: {
            display: "flex",
            flex: "1",
            gap: "4px",
            height: "100%"
        }
    }, Vt = [
        "value",
        "onInput",
        "onBlur"
    ];
    function Et(e, t, o, a, c, s) {
        return C(), w("div", _t, [
            d("div", wt, [
                d("div", {
                    class: "color-cube",
                    style: I(e.getBgColorStyle),
                    onClick: t[0] || (t[0] = (...i)=>e.onCopyColorStr && e.onCopyColorStr(...i))
                }, [
                    e.copied ? (C(), w("span", xt, "Copied!")) : B("", !0)
                ], 4)
            ]),
            e.inputType === "hex" ? (C(), w("div", Bt, [
                d("div", Ht, [
                    ne(d("input", {
                        "onUpdate:modelValue": t[1] || (t[1] = (i)=>e.state.hex = i),
                        maxlength: "8",
                        onInput: t[2] || (t[2] = (...i)=>e.onInputChange && e.onInputChange(...i)),
                        onBlur: t[3] || (t[3] = (...i)=>e.onBlurChange && e.onBlurChange(...i))
                    }, null, 544), [
                        [
                            et,
                            e.state.hex
                        ]
                    ])
                ]),
                e.disableAlpha ? B("", !0) : (C(), w("div", Rt, [
                    d("input", {
                        class: "vc-alpha-input__inner",
                        value: e.state.alpha,
                        onInput: t[4] || (t[4] = (...i)=>e.onAlphaBlur && e.onAlphaBlur(...i))
                    }, null, 40, At),
                    t[6] || (t[6] = Me("% ", -1))
                ]))
            ])) : e.state.rgba ? (C(), w("div", Pt, [
                (C(!0), w(J, null, oe(e.state.rgba, (i, n)=>(C(), w("div", {
                        class: "vc-color-input",
                        key: n
                    }, [
                        d("input", {
                            value: i,
                            onInput: (u)=>e.onInputChange(u, n),
                            onBlur: (u)=>e.onBlurChange(u, n)
                        }, null, 40, Vt)
                    ]))), 128))
            ])) : B("", !0),
            d("div", {
                class: "vc-input-toggle",
                onClick: t[5] || (t[5] = (...i)=>e.onInputTypeChange && e.onInputTypeChange(...i))
            }, re(e.inputType), 1)
        ]);
    }
    const ye = X(St, [
        [
            "render",
            Et
        ],
        [
            "__scopeId",
            "data-v-4fd84baa"
        ]
    ]), Lt = z({
        name: "FkColorPicker",
        components: {
            Display: ye,
            Alpha: ve,
            Palette: Ne,
            Board: Ce,
            Hue: fe,
            Lightness: $e,
            History: be
        },
        props: {
            color: f.instanceOf(A),
            disableHistory: f.bool.def(!1),
            roundHistory: f.bool.def(!1),
            disableAlpha: f.bool.def(!1)
        },
        emits: [
            "update:color",
            "change",
            "advanceChange"
        ],
        setup (e, { emit: t }) {
            const o = e.color || new A, a = q({
                color: o,
                hex: o.toHexString(),
                rgb: o.toRgbString()
            }), c = E(!1), s = K(()=>({
                    background: a.rgb
                })), i = ()=>{
                c.value = !1, t("advanceChange", !1);
            }, n = he(ge, [], {}), u = U(()=>{
                if (e.disableHistory) return;
                const p = a.color.toRgbString();
                if (n.value = n.value.filter((b)=>!R.equals(b, p)), !n.value.includes(p)) {
                    for(; n.value.length > pe;)n.value.pop();
                    n.value.unshift(p);
                }
            }, 500), m = (p)=>{
                p === "advance" ? (c.value = !0, t("advanceChange", !0)) : (a.color.hex = p, t("advanceChange", !1));
            }, r = (p)=>{
                a.color.alpha = p;
            }, g = (p)=>{
                a.color.hue = p;
            }, h = (p, b)=>{
                a.color.saturation = p, a.color.brightness = b;
            }, k = (p)=>{
                a.color.lightness = p;
            }, y = (p)=>{
                const b = p.target.value.replace("#", "");
                R(b).isValid() && (a.color.hex = b);
            };
            return O(()=>e.color, (p)=>{
                p && (a.color = p);
            }, {
                deep: !0
            }), O(()=>a.color, ()=>{
                a.hex = a.color.hex, a.rgb = a.color.toRgbString(), u(), t("update:color", a.color), t("change", a.color);
            }, {
                deep: !0
            }), {
                state: a,
                advancePanelShow: c,
                onBack: i,
                onCompactChange: m,
                onAlphaChange: r,
                onHueChange: g,
                onBoardChange: h,
                onLightChange: k,
                onInputChange: y,
                previewStyle: s,
                historyColors: n
            };
        }
    }), Mt = {
        class: "vc-fk-colorPicker"
    }, Kt = {
        class: "vc-fk-colorPicker__inner"
    }, Nt = {
        class: "vc-fk-colorPicker__header"
    };
    function $t(e, t, o, a, c, s) {
        const i = V("Palette"), n = V("Board"), u = V("Hue"), m = V("Lightness"), r = V("Alpha"), g = V("Display"), h = V("History");
        return C(), w("div", Mt, [
            d("div", Kt, [
                d("div", Nt, [
                    e.advancePanelShow ? (C(), w("span", {
                        key: 0,
                        style: {
                            cursor: "pointer"
                        },
                        onClick: t[0] || (t[0] = (...k)=>e.onBack && e.onBack(...k))
                    }, [
                        ...t[1] || (t[1] = [
                            d("div", {
                                class: "back"
                            }, null, -1)
                        ])
                    ])) : B("", !0)
                ]),
                e.advancePanelShow ? B("", !0) : (C(), M(i, {
                    key: 0,
                    onChange: e.onCompactChange
                }, null, 8, [
                    "onChange"
                ])),
                e.advancePanelShow ? (C(), M(n, {
                    key: 1,
                    color: e.state.color,
                    onChange: e.onBoardChange
                }, null, 8, [
                    "color",
                    "onChange"
                ])) : B("", !0),
                e.advancePanelShow ? (C(), M(u, {
                    key: 2,
                    color: e.state.color,
                    onChange: e.onHueChange
                }, null, 8, [
                    "color",
                    "onChange"
                ])) : B("", !0),
                e.advancePanelShow ? B("", !0) : (C(), M(m, {
                    key: 3,
                    color: e.state.color,
                    onChange: e.onLightChange
                }, null, 8, [
                    "color",
                    "onChange"
                ])),
                e.disableAlpha ? B("", !0) : (C(), M(r, {
                    key: 4,
                    color: e.state.color,
                    onChange: e.onAlphaChange
                }, null, 8, [
                    "color",
                    "onChange"
                ])),
                j(g, {
                    color: e.state.color,
                    "disable-alpha": e.disableAlpha
                }, null, 8, [
                    "color",
                    "disable-alpha"
                ]),
                e.disableHistory ? B("", !0) : (C(), M(h, {
                    key: 5,
                    round: e.roundHistory,
                    colors: e.historyColors,
                    onChange: e.onCompactChange
                }, null, 8, [
                    "round",
                    "colors",
                    "onChange"
                ]))
            ])
        ]);
    }
    const Re = X(Lt, [
        [
            "render",
            $t
        ],
        [
            "__scopeId",
            "data-v-48e3c224"
        ]
    ]), It = z({
        name: "ChromeColorPicker",
        components: {
            Display: ye,
            Alpha: ve,
            Board: Ce,
            Hue: fe,
            History: be
        },
        props: {
            color: f.instanceOf(A),
            disableHistory: f.bool.def(!1),
            roundHistory: f.bool.def(!1),
            disableAlpha: f.bool.def(!1)
        },
        emits: [
            "update:color",
            "change"
        ],
        setup (e, { emit: t }) {
            const o = e.color || new A, a = q({
                color: o,
                hex: o.toHexString(),
                rgb: o.toRgbString()
            }), c = K(()=>({
                    background: a.rgb
                })), s = he(ge, [], {}), i = U(()=>{
                if (e.disableHistory) return;
                const h = a.color.toRgbString();
                if (s.value = s.value.filter((k)=>!R.equals(k, h)), !s.value.includes(h)) {
                    for(; s.value.length > pe;)s.value.pop();
                    s.value.unshift(h);
                }
            }, 500), n = (h)=>{
                a.color.alpha = h;
            }, u = (h)=>{
                a.color.hue = h;
            }, m = (h)=>{
                h.hex !== void 0 && (a.color.hex = h.hex), h.alpha !== void 0 && (a.color.alpha = h.alpha);
            }, r = (h, k)=>{
                a.color.saturation = h, a.color.brightness = k;
            }, g = (h)=>{
                h !== "advance" && (a.color.hex = h);
            };
            return O(()=>e.color, (h)=>{
                h && (a.color = h);
            }, {
                deep: !0
            }), O(()=>a.color, ()=>{
                a.hex = a.color.hex, a.rgb = a.color.toRgbString(), i(), t("update:color", a.color), t("change", a.color);
            }, {
                deep: !0
            }), {
                state: a,
                previewStyle: c,
                historyColors: s,
                onAlphaChange: n,
                onHueChange: u,
                onBoardChange: r,
                onInputChange: m,
                onCompactChange: g
            };
        }
    }), Wt = {
        class: "vc-chrome-colorPicker"
    }, Ot = {
        class: "vc-chrome-colorPicker-body"
    }, Tt = {
        class: "chrome-controls"
    }, Dt = {
        class: "chrome-sliders"
    };
    function zt(e, t, o, a, c, s) {
        const i = V("Board"), n = V("Hue"), u = V("Alpha"), m = V("Display"), r = V("History");
        return C(), w("div", Wt, [
            j(i, {
                round: !0,
                hide: !1,
                color: e.state.color,
                onChange: e.onBoardChange
            }, null, 8, [
                "color",
                "onChange"
            ]),
            d("div", Ot, [
                d("div", Tt, [
                    d("div", Dt, [
                        j(n, {
                            size: "small",
                            color: e.state.color,
                            onChange: e.onHueChange
                        }, null, 8, [
                            "color",
                            "onChange"
                        ]),
                        e.disableAlpha ? B("", !0) : (C(), M(u, {
                            key: 0,
                            size: "small",
                            color: e.state.color,
                            onChange: e.onAlphaChange
                        }, null, 8, [
                            "color",
                            "onChange"
                        ]))
                    ])
                ]),
                j(m, {
                    color: e.state.color,
                    "disable-alpha": e.disableAlpha
                }, null, 8, [
                    "color",
                    "disable-alpha"
                ]),
                e.disableHistory ? B("", !0) : (C(), M(r, {
                    key: 0,
                    round: e.roundHistory,
                    colors: e.historyColors,
                    onChange: e.onCompactChange
                }, null, 8, [
                    "round",
                    "colors",
                    "onChange"
                ]))
            ])
        ]);
    }
    const Ae = X(It, [
        [
            "render",
            zt
        ],
        [
            "__scopeId",
            "data-v-2611d66c"
        ]
    ]), me = "Vue3ColorPickerProvider", Gt = (e, t)=>{
        const o = e.getBoundingClientRect(), a = o.left + o.width / 2, c = o.top + o.height / 2, s = Math.abs(a - t.clientX), i = Math.abs(c - t.clientY), n = Math.sqrt(Math.pow(s, 2) + Math.pow(i, 2)), u = i / n, m = Math.acos(u);
        let r = Math.floor(180 / (Math.PI / m));
        return t.clientX > a && t.clientY > c && (r = 180 - r), t.clientX == a && t.clientY > c && (r = 180), t.clientX > a && t.clientY == c && (r = 90), t.clientX < a && t.clientY > c && (r = 180 + r), t.clientX < a && t.clientY == c && (r = 270), t.clientX < a && t.clientY < c && (r = 360 - r), r;
    };
    let ce = !1;
    const Xt = (e, t)=>{
        const o = function(c) {
            var s;
            (s = t.drag) == null || s.call(t, c);
        }, a = function(c) {
            var s;
            document.removeEventListener("mousemove", o, !1), document.removeEventListener("mouseup", a, !1), document.onselectstart = null, document.ondragstart = null, ce = !1, (s = t.end) == null || s.call(t, c);
        };
        e && e.addEventListener("mousedown", (c)=>{
            var s;
            ce || (document.onselectstart = ()=>!1, document.ondragstart = ()=>!1, document.addEventListener("mousemove", o, !1), document.addEventListener("mouseup", a, !1), ce = !0, (s = t.start) == null || s.call(t, c));
        });
    }, Ft = {
        angle: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 16,
            validator: (e)=>e >= 16
        },
        borderWidth: {
            type: Number,
            default: 1,
            validator: (e)=>e >= 1
        },
        borderColor: {
            type: String,
            default: "#666"
        }
    }, qt = z({
        name: "Angle",
        props: Ft,
        emits: [
            "update:angle",
            "change"
        ],
        setup (e, { emit: t }) {
            const o = E(null), a = E(0);
            Z(()=>e.angle, (n)=>{
                a.value = n;
            });
            const c = ()=>{
                let n = Number(a.value);
                isNaN(n) || (n = n > 360 || n < 0 ? e.angle : n, a.value = n === 360 ? 0 : n, t("update:angle", a.value), t("change", a.value));
            }, s = K(()=>({
                    width: e.size + "px",
                    height: e.size + "px",
                    borderWidth: e.borderWidth + "px",
                    borderColor: e.borderColor,
                    transform: `rotate(${a.value}deg)`
                })), i = (n)=>{
                o.value && (a.value = Gt(o.value, n) % 360, c());
            };
            return Le(()=>{
                const n = {
                    drag: (u)=>{
                        i(u);
                    },
                    end: (u)=>{
                        i(u);
                    }
                };
                o.value && Xt(o.value, n);
            }), ()=>j("div", {
                    class: "bee-angle"
                }, [
                    j("div", {
                        class: "bee-angle__round",
                        ref: o,
                        style: s.value
                    }, null)
                ]);
        }
    }), Yt = z({
        name: "GradientColorPicker",
        components: {
            Angle: qt,
            Display: ye,
            Alpha: ve,
            Palette: Ne,
            Board: Ce,
            Hue: fe,
            Lightness: $e,
            History: be
        },
        props: {
            startColor: f.instanceOf(A).isRequired,
            endColor: f.instanceOf(A).isRequired,
            startColorStop: f.number.def(0),
            endColorStop: f.number.def(100),
            angle: f.number.def(0),
            type: f.oneOf([
                "linear",
                "radial"
            ]).def("linear"),
            disableHistory: f.bool.def(!1),
            roundHistory: f.bool.def(!1),
            disableAlpha: f.bool.def(!1),
            pickerType: f.oneOf([
                "fk",
                "chrome"
            ]).def("fk")
        },
        emits: [
            "update:startColor",
            "update:endColor",
            "update:angle",
            "update:startColorStop",
            "update:endColorStop",
            "startColorChange",
            "endColorChange",
            "advanceChange",
            "angleChange",
            "startColorStopChange",
            "endColorStopChange",
            "typeChange"
        ],
        setup (e, { emit: t }) {
            const o = q({
                startActive: !0,
                startColor: e.startColor,
                endColor: e.endColor,
                startColorStop: e.startColorStop,
                endColorStop: e.endColorStop,
                angle: e.angle,
                type: e.type,
                startColorRgba: e.startColor.toRgbString(),
                endColorRgba: e.endColor.toRgbString()
            }), a = Ke(me), c = E(e.pickerType === "chrome"), s = E(), i = E(), n = E();
            Z(()=>[
                    e.startColor,
                    e.endColor,
                    e.angle
                ], (l)=>{
                o.startColor = l[0], o.endColor = l[1], o.angle = l[2];
            }), Z(()=>e.type, (l)=>{
                o.type = l;
            });
            const u = K({
                get: ()=>o.startActive ? o.startColor : o.endColor,
                set: (l)=>{
                    if (o.startActive) {
                        o.startColor = l;
                        return;
                    }
                    o.endColor = l;
                }
            }), m = K(()=>{
                if (n.value && s.value) {
                    const l = o.startColorStop / 100, S = n.value.getBoundingClientRect(), H = s.value.offsetWidth;
                    return Math.round(l * (S.width - H) + H / 2);
                }
                return 0;
            }), r = K(()=>{
                if (n.value && i.value) {
                    const l = o.endColorStop / 100, S = n.value.getBoundingClientRect(), H = i.value.offsetWidth;
                    return Math.round(l * (S.width - H) + H / 2);
                }
                return 0;
            }), g = K(()=>{
                let l = `background: linear-gradient(${o.angle}deg, ${o.startColorRgba} ${o.startColorStop}%, ${o.endColorRgba} ${o.endColorStop}%)`;
                return o.type === "radial" && (l = `background: radial-gradient(circle, ${o.startColorRgba} ${o.startColorStop}%, ${o.endColorRgba} ${o.endColorStop}%)`), l;
            }), h = (l)=>{
                var S;
                if (o.startActive = !0, n.value && s.value) {
                    const H = (S = n.value) == null ? void 0 : S.getBoundingClientRect();
                    let $ = l.clientX - H.left;
                    $ = Math.max(s.value.offsetWidth / 2, $), $ = Math.min($, H.width - s.value.offsetWidth / 2), o.startColorStop = Math.round(($ - s.value.offsetWidth / 2) / (H.width - s.value.offsetWidth) * 100), t("update:startColorStop", o.startColorStop), t("startColorStopChange", o.startColorStop);
                }
            }, k = (l)=>{
                var S;
                if (o.startActive = !1, n.value && i.value) {
                    const H = (S = n.value) == null ? void 0 : S.getBoundingClientRect();
                    let $ = l.clientX - H.left;
                    $ = Math.max(i.value.offsetWidth / 2, $), $ = Math.min($, H.width - i.value.offsetWidth / 2), o.endColorStop = Math.round(($ - i.value.offsetWidth / 2) / (H.width - i.value.offsetWidth) * 100), t("update:endColorStop", o.endColorStop), t("endColorStopChange", o.endColorStop);
                }
            }, y = (l)=>{
                const S = l.target, H = parseInt(S.value.replace("°", ""));
                isNaN(H) || (o.angle = H % 360), t("update:angle", o.angle), t("angleChange", o.angle);
            }, p = (l)=>{
                o.angle = l, t("update:angle", o.angle), t("angleChange", o.angle);
            }, b = (l)=>{
                l === "advance" ? (c.value = !0, t("advanceChange", !0)) : (u.value.hex = l, t("advanceChange", !1)), N();
            }, v = (l)=>{
                u.value.alpha = l, N();
            }, x = (l)=>{
                u.value.hue = l, N();
            }, _ = (l, S)=>{
                u.value.saturation = l, u.value.brightness = S, N();
            }, F = (l)=>{
                u.value.lightness = l, N();
            }, L = ()=>{
                N();
            }, N = ()=>{
                o.startActive ? (t("update:startColor", o.startColor), t("startColorChange", o.startColor)) : (t("update:endColor", o.endColor), t("endColorChange", o.endColor));
            }, Y = ()=>{
                c.value = !1, t("advanceChange", !1);
            }, Q = ()=>{
                o.type = o.type === "linear" ? "radial" : "linear", t("typeChange", o.type);
            }, G = he(ge, [], {}), se = U(()=>{
                if (e.disableHistory) return;
                const l = u.value.toRgbString();
                if (G.value = G.value.filter((S)=>!R.equals(S, l)), !G.value.includes(l)) {
                    for(; G.value.length > pe;)G.value.pop();
                    G.value.unshift(l);
                }
            }, 500);
            return ee(()=>{
                i.value && s.value && (te.triggerDragEvent(i.value, {
                    drag: (l)=>{
                        k(l);
                    },
                    end: (l)=>{
                        k(l);
                    }
                }), te.triggerDragEvent(s.value, {
                    drag: (l)=>{
                        h(l);
                    },
                    end: (l)=>{
                        h(l);
                    }
                }));
            }), O(()=>o.startColor, (l)=>{
                o.startColorRgba = l.toRgbString();
            }, {
                deep: !0
            }), O(()=>o.endColor, (l)=>{
                o.endColorRgba = l.toRgbString();
            }, {
                deep: !0
            }), O(()=>u.value, ()=>{
                se();
            }, {
                deep: !0
            }), {
                startGradientRef: s,
                stopGradientRef: i,
                colorRangeRef: n,
                state: o,
                currentColor: u,
                getStartColorLeft: m,
                getEndColorLeft: r,
                gradientBg: g,
                advancePanelShow: c,
                onDegreeBlur: y,
                onCompactChange: b,
                onAlphaChange: v,
                onHueChange: x,
                onBoardChange: _,
                onLightChange: F,
                historyColors: G,
                onBack: Y,
                onDegreeChange: p,
                onDisplayChange: L,
                onTypeChange: Q,
                lang: a?.lang
            };
        }
    }), Ut = {
        class: "vc-gradient-picker"
    }, jt = {
        class: "vc-gradient-picker__header"
    }, Qt = {
        class: "vc-gradient__types"
    }, Jt = {
        class: "vc-gradient-wrap__types"
    }, Zt = {
        class: "vc-picker-degree-input vc-degree-input"
    }, eo = {
        class: "vc-degree-input__control"
    }, to = [
        "value"
    ], oo = {
        class: "vc-degree-input__panel"
    }, ao = {
        class: "vc-degree-input__disk"
    }, no = {
        class: "vc-gradient-picker__body"
    }, ro = {
        class: "vc-color-range",
        ref: "colorRangeRef"
    }, lo = {
        class: "vc-color-range__container"
    }, so = {
        class: "vc-gradient__stop__container"
    }, io = [
        "title"
    ], co = [
        "title"
    ];
    function uo(e, t, o, a, c, s) {
        var i, n;
        const u = V("Angle"), m = V("Board"), r = V("Hue"), g = V("Palette"), h = V("Lightness"), k = V("Alpha"), y = V("Display"), p = V("History");
        return C(), w("div", Ut, [
            d("div", jt, [
                d("div", null, [
                    ne(d("div", {
                        class: "back",
                        style: {
                            cursor: "pointer"
                        },
                        onClick: t[0] || (t[0] = (...b)=>e.onBack && e.onBack(...b))
                    }, null, 512), [
                        [
                            ue,
                            e.pickerType === "fk" && e.advancePanelShow
                        ]
                    ])
                ]),
                d("div", Qt, [
                    d("div", Jt, [
                        (C(), w(J, null, oe([
                            "linear",
                            "radial"
                        ], (b)=>d("div", {
                                class: T([
                                    "vc-gradient__type",
                                    {
                                        active: e.state.type === b
                                    }
                                ]),
                                key: b,
                                onClick: t[1] || (t[1] = (...v)=>e.onTypeChange && e.onTypeChange(...v))
                            }, re(e.lang ? e.lang[b] : b), 3)), 64))
                    ]),
                    ne(d("div", Zt, [
                        d("div", eo, [
                            d("input", {
                                value: e.state.angle,
                                onBlur: t[2] || (t[2] = (...b)=>e.onDegreeBlur && e.onDegreeBlur(...b))
                            }, null, 40, to),
                            t[4] || (t[4] = Me("deg ", -1))
                        ]),
                        d("div", oo, [
                            d("div", ao, [
                                j(u, {
                                    angle: e.state.angle,
                                    "onUpdate:angle": t[3] || (t[3] = (b)=>e.state.angle = b),
                                    size: 40,
                                    onChange: e.onDegreeChange
                                }, null, 8, [
                                    "angle",
                                    "onChange"
                                ])
                            ])
                        ])
                    ], 512), [
                        [
                            ue,
                            e.state.type === "linear"
                        ]
                    ])
                ])
            ]),
            d("div", no, [
                d("div", ro, [
                    d("div", lo, [
                        d("div", {
                            class: "vc-background",
                            style: I(e.gradientBg)
                        }, null, 4),
                        d("div", so, [
                            d("div", {
                                class: T([
                                    "vc-gradient__stop",
                                    {
                                        "vc-gradient__stop--current": e.state.startActive
                                    }
                                ]),
                                ref: "startGradientRef",
                                title: (i = e.lang) == null ? void 0 : i.start,
                                style: I({
                                    left: e.getStartColorLeft + "px",
                                    backgroundColor: e.state.startColorRgba
                                })
                            }, [
                                ...t[5] || (t[5] = [
                                    d("span", {
                                        class: "vc-gradient__stop--inner"
                                    }, null, -1)
                                ])
                            ], 14, io),
                            d("div", {
                                class: T([
                                    "vc-gradient__stop",
                                    {
                                        "vc-gradient__stop--current": !e.state.startActive
                                    }
                                ]),
                                ref: "stopGradientRef",
                                title: (n = e.lang) == null ? void 0 : n.end,
                                style: I({
                                    left: e.getEndColorLeft + "px",
                                    backgroundColor: e.state.endColorRgba
                                })
                            }, [
                                ...t[6] || (t[6] = [
                                    d("span", {
                                        class: "vc-gradient__stop--inner"
                                    }, null, -1)
                                ])
                            ], 14, co)
                        ])
                    ])
                ], 512)
            ]),
            e.advancePanelShow ? (C(), M(m, {
                key: 0,
                color: e.currentColor,
                onChange: e.onBoardChange
            }, null, 8, [
                "color",
                "onChange"
            ])) : B("", !0),
            e.advancePanelShow ? (C(), M(r, {
                key: 1,
                color: e.currentColor,
                onChange: e.onHueChange
            }, null, 8, [
                "color",
                "onChange"
            ])) : B("", !0),
            e.advancePanelShow ? B("", !0) : (C(), M(g, {
                key: 2,
                onChange: e.onCompactChange
            }, null, 8, [
                "onChange"
            ])),
            e.advancePanelShow ? B("", !0) : (C(), M(h, {
                key: 3,
                color: e.currentColor,
                onChange: e.onLightChange
            }, null, 8, [
                "color",
                "onChange"
            ])),
            e.disableAlpha ? B("", !0) : (C(), M(k, {
                key: 4,
                color: e.currentColor,
                onChange: e.onAlphaChange
            }, null, 8, [
                "color",
                "onChange"
            ])),
            j(y, {
                color: e.currentColor,
                "disable-alpha": e.disableAlpha,
                onChange: e.onDisplayChange
            }, null, 8, [
                "color",
                "disable-alpha",
                "onChange"
            ]),
            e.disableHistory ? B("", !0) : (C(), M(p, {
                key: 5,
                round: e.roundHistory,
                colors: e.historyColors,
                onChange: e.onCompactChange
            }, null, 8, [
                "round",
                "colors",
                "onChange"
            ]))
        ]);
    }
    const Pe = X(Yt, [
        [
            "render",
            uo
        ],
        [
            "__scopeId",
            "data-v-c4d6d6ea"
        ]
    ]), ho = z({
        name: "WrapContainer",
        props: {
            theme: f.oneOf([
                "white",
                "black"
            ]).def("white"),
            showTab: f.bool.def(!1),
            activeKey: f.oneOf([
                "pure",
                "gradient"
            ]).def("pure")
        },
        emits: [
            "update:activeKey",
            "change"
        ],
        setup (e, { emit: t }) {
            const o = q({
                activeKey: e.activeKey
            }), a = Ke(me), c = (s)=>{
                o.activeKey = s, t("update:activeKey", s), t("change", s);
            };
            return O(()=>e.activeKey, (s)=>{
                o.activeKey = s;
            }), {
                state: o,
                onActiveKeyChange: c,
                lang: a?.lang
            };
        }
    }), go = {
        class: "vc-colorpicker--container"
    }, po = {
        key: 0,
        class: "vc-colorpicker--tabs"
    }, vo = {
        class: "vc-colorpicker--tabs__inner"
    }, Co = {
        class: "vc-btn__content"
    }, fo = {
        class: "vc-btn__content"
    };
    function bo(e, t, o, a, c, s) {
        var i, n;
        return C(), w("div", {
            class: T([
                "vc-colorpicker",
                e.theme
            ])
        }, [
            d("div", go, [
                e.showTab ? (C(), w("div", po, [
                    d("div", vo, [
                        d("div", {
                            class: T([
                                "vc-colorpicker--tabs__btn",
                                {
                                    "vc-btn-active": e.state.activeKey === "pure"
                                }
                            ]),
                            onClick: t[0] || (t[0] = (u)=>e.onActiveKeyChange("pure"))
                        }, [
                            d("button", null, [
                                d("div", Co, re((i = e.lang) == null ? void 0 : i.pure), 1)
                            ])
                        ], 2),
                        d("div", {
                            class: T([
                                "vc-colorpicker--tabs__btn",
                                {
                                    "vc-btn-active": e.state.activeKey === "gradient"
                                }
                            ]),
                            onClick: t[1] || (t[1] = (u)=>e.onActiveKeyChange("gradient"))
                        }, [
                            d("button", null, [
                                d("div", fo, re((n = e.lang) == null ? void 0 : n.gradient), 1)
                            ])
                        ], 2),
                        d("div", {
                            class: "vc-colorpicker--tabs__bg",
                            style: I({
                                width: "50%",
                                left: `calc(${e.state.activeKey === "gradient" ? 50 : 0}%)`
                            })
                        }, null, 4)
                    ])
                ])) : B("", !0),
                de(e.$slots, "default", {}, void 0, !0)
            ])
        ], 2);
    }
    const yo = X(ho, [
        [
            "render",
            bo
        ],
        [
            "__scopeId",
            "data-v-0492277d"
        ]
    ]), mo = {
        start: "Start",
        end: "End",
        pure: "Pure",
        gradient: "Gradient",
        linear: "linear",
        radial: "radial"
    }, ko = {
        start: "开始",
        end: "结束",
        pure: "纯色",
        gradient: "渐变",
        linear: "线性",
        radial: "径向"
    }, So = {
        start: "Début",
        end: "Fin",
        pure: "Pur",
        gradient: "Dégradé",
        linear: "Linéaire",
        radial: "Radial"
    }, Ve = {
        en: mo,
        fr: So,
        "zh-cn": ko
    }, _o = {
        isWidget: f.bool.def(!1),
        pickerType: f.oneOf([
            "fk",
            "chrome"
        ]).def("fk"),
        shape: f.oneOf([
            "circle",
            "square"
        ]).def("square"),
        pureColor: {
            type: [
                String,
                Object
            ],
            default: ""
        },
        defaultPureColor: {
            type: [
                String,
                Object
            ],
            default: "#000000"
        },
        gradientColor: f.string.def("linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"),
        format: {
            type: String,
            default: "rgb"
        },
        disableAlpha: f.bool.def(!1),
        disableHistory: f.bool.def(!1),
        roundHistory: f.bool.def(!1),
        useType: f.oneOf([
            "pure",
            "gradient",
            "both"
        ]).def("pure"),
        activeKey: f.oneOf([
            "pure",
            "gradient"
        ]).def("pure"),
        lang: {
            type: String,
            default: "En"
        },
        zIndex: f.number.def(9999),
        pickerContainer: {
            type: [
                String,
                HTMLElement
            ],
            default: "body"
        },
        debounce: f.number.def(100),
        theme: f.oneOf([
            "white",
            "black"
        ]).def("white"),
        blurClose: f.bool.def(!1),
        defaultPopup: f.bool.def(!1)
    }, wo = z({
        name: "ColorPicker",
        components: {
            FkColorPicker: Re,
            ChromeColorPicker: Ae,
            GradientColorPicker: Pe,
            WrapContainer: yo
        },
        inheritAttrs: !1,
        props: _o,
        emits: [
            "update:pureColor",
            "pureColorChange",
            "update:gradientColor",
            "gradientColorChange",
            "update:activeKey",
            "activeKeyChange"
        ],
        setup (e, { emit: t }) {
            tt(me, {
                lang: K(()=>Ve[e.lang.toLowerCase()] || Ve.en)
            });
            const o = !!ot().extra, a = q({
                pureColor: e.pureColor || e.defaultPureColor,
                activeKey: e.useType === "gradient" ? "gradient" : e.activeKey,
                isAdvanceMode: !1
            }), c = new A("#000"), s = new A("#000"), i = new A(a.pureColor), n = q({
                startColor: c,
                endColor: s,
                startColorStop: 0,
                endColorStop: 100,
                angle: 0,
                type: "linear",
                gradientColor: e.gradientColor
            }), u = E(i), m = E(e.defaultPopup), r = E(null), g = E(null);
            let h = null;
            const k = K(()=>({
                    background: a.activeKey !== "gradient" ? R(a.pureColor).toRgbString() : n.gradientColor
                })), y = K(()=>a.activeKey === "gradient" ? Pe.name : e.pickerType === "fk" ? Re.name : Ae.name), p = (l)=>{
                a.isAdvanceMode = l;
            }, b = K(()=>{
                const l = {
                    disableAlpha: e.disableAlpha,
                    disableHistory: e.disableHistory,
                    roundHistory: e.roundHistory,
                    pickerType: e.pickerType
                };
                return a.activeKey === "gradient" ? {
                    ...l,
                    startColor: n.startColor,
                    endColor: n.endColor,
                    angle: n.angle,
                    type: n.type,
                    startColorStop: n.startColorStop,
                    endColorStop: n.endColorStop,
                    onStartColorChange: (S)=>{
                        n.startColor = S, L();
                    },
                    onEndColorChange: (S)=>{
                        n.endColor = S, L();
                    },
                    onStartColorStopChange: (S)=>{
                        n.startColorStop = S, L();
                    },
                    onEndColorStopChange: (S)=>{
                        n.endColorStop = S, L();
                    },
                    onAngleChange: (S)=>{
                        n.angle = S, L();
                    },
                    onTypeChange: (S)=>{
                        n.type = S, L();
                    },
                    onAdvanceChange: p
                } : {
                    ...l,
                    disableAlpha: e.disableAlpha,
                    disableHistory: e.disableHistory,
                    roundHistory: e.roundHistory,
                    color: u.value,
                    onChange: Q,
                    onAdvanceChange: p
                };
            }), v = ()=>{
                m.value = !0, h ? h.update() : Y();
            }, x = ()=>{
                m.value = !1;
            }, _ = U(()=>{
                !e.isWidget && e.blurClose && x();
            }, 100);
            qe(g, ()=>{
                x();
            });
            const F = ()=>{
                var l, S, H, $;
                try {
                    const [D] = _e.parse(n.gradientColor);
                    if (D && D.type.includes("gradient") && D.colorStops.length >= 2) {
                        const ke = D.colorStops[0], Se = D.colorStops[1];
                        n.startColorStop = Number((l = ke.length) == null ? void 0 : l.value) || 0, n.endColorStop = Number((S = Se.length) == null ? void 0 : S.value) || 0, D.type === "linear-gradient" && ((H = D.orientation) == null ? void 0 : H.type) === "angular" && (n.angle = Number(($ = D.orientation) == null ? void 0 : $.value) || 0), n.type = D.type.split("-")[0];
                        const [Ie, We, Oe, Te] = ke.value, [De, ze, Ge, Xe] = Se.value;
                        n.startColor = new A({
                            r: Number(Ie),
                            g: Number(We),
                            b: Number(Oe),
                            a: Number(Te)
                        }), n.endColor = new A({
                            r: Number(De),
                            g: Number(ze),
                            b: Number(Ge),
                            a: Number(Xe)
                        });
                    }
                } catch (D) {
                    console.log(`[Parse Color]: ${D}`);
                }
            }, L = U(()=>{
                const l = N();
                try {
                    n.gradientColor = _e.stringify(l), t("update:gradientColor", n.gradientColor), t("gradientColorChange", n.gradientColor);
                } catch (S) {
                    console.log(S);
                }
            }, e.debounce), N = ()=>{
                const l = [], S = n.startColor.RGB.map((D)=>D.toString()), H = n.endColor.RGB.map((D)=>D.toString()), $ = [
                    {
                        type: "rgba",
                        value: [
                            S[0],
                            S[1],
                            S[2],
                            S[3]
                        ],
                        length: {
                            value: n.startColorStop + "",
                            type: "%"
                        }
                    },
                    {
                        type: "rgba",
                        value: [
                            H[0],
                            H[1],
                            H[2],
                            H[3]
                        ],
                        length: {
                            value: n.endColorStop + "",
                            type: "%"
                        }
                    }
                ];
                return n.type === "linear" ? l.push({
                    type: "linear-gradient",
                    orientation: {
                        type: "angular",
                        value: n.angle + ""
                    },
                    colorStops: $
                }) : n.type === "radial" && l.push({
                    type: "radial-gradient",
                    orientation: [
                        {
                            type: "shape",
                            value: "circle"
                        }
                    ],
                    colorStops: $
                }), l;
            }, Y = ()=>{
                r.value && g.value && (h = Ye(r.value, g.value, {
                    placement: "auto",
                    modifiers: [
                        {
                            name: "offset",
                            options: {
                                offset: [
                                    0,
                                    8
                                ]
                            }
                        },
                        {
                            name: "flip",
                            options: {
                                allowedAutoPlacements: [
                                    "top",
                                    "bottom",
                                    "left",
                                    "right"
                                ],
                                rootBoundary: "viewport"
                            }
                        }
                    ]
                }));
            }, Q = (l)=>{
                u.value = l, a.pureColor = l.toString(e.format), G();
            }, G = U(()=>{
                t("update:pureColor", a.pureColor), t("pureColorChange", a.pureColor);
            }, e.debounce), se = (l)=>{
                a.activeKey = l, t("update:activeKey", l), t("activeKeyChange", l);
            };
            return ee(()=>{
                F(), h || Y();
            }), O(()=>e.gradientColor, (l)=>{
                l != n.gradientColor && (n.gradientColor = l);
            }), O(()=>n.gradientColor, ()=>{
                F();
            }), O(()=>e.activeKey, (l)=>{
                a.activeKey = l;
            }), O(()=>e.useType, (l)=>{
                a.activeKey !== "gradient" && l === "gradient" ? a.activeKey = "gradient" : a.activeKey = "pure";
            }), O(()=>e.pureColor, (l)=>{
                R.equals(l, a.pureColor) || (a.pureColor = l, u.value = new A(l));
            }, {
                deep: !0
            }), {
                colorCubeRef: r,
                pickerRef: g,
                showPicker: m,
                colorInstance: u,
                getBgColorStyle: k,
                getComponentName: y,
                getBindArgs: b,
                state: a,
                hasExtra: o,
                onColorChange: Q,
                onShowPicker: v,
                onActiveKeyChange: se,
                onAutoClose: _,
                props: e
            };
        }
    }), xo = {
        key: 0,
        class: "vc-color-extra"
    }, Bo = {
        key: 0,
        class: "vc-color-extra"
    };
    function Ho(e, t, o, a, c, s) {
        const i = V("WrapContainer");
        return C(), w(J, null, [
            e.isWidget ? (C(), M(i, {
                key: 0,
                "active-key": e.state.activeKey,
                "onUpdate:activeKey": t[0] || (t[0] = (n)=>e.state.activeKey = n),
                "show-tab": e.useType === "both",
                style: I({
                    zIndex: e.zIndex
                }),
                theme: e.theme,
                onChange: e.onActiveKeyChange
            }, {
                default: we(()=>[
                        (C(), M(xe(e.getComponentName), Be({
                            key: e.getComponentName
                        }, e.getBindArgs), null, 16)),
                        e.hasExtra ? (C(), w("div", xo, [
                            de(e.$slots, "extra", {}, void 0, !0)
                        ])) : B("", !0)
                    ]),
                _: 3
            }, 8, [
                "active-key",
                "show-tab",
                "style",
                "theme",
                "onChange"
            ])) : B("", !0),
            e.isWidget ? B("", !0) : (C(), w(J, {
                key: 1
            }, [
                d("div", {
                    class: T([
                        "vc-color-wrap transparent",
                        {
                            round: e.shape === "circle"
                        }
                    ]),
                    ref: "colorCubeRef"
                }, [
                    d("div", {
                        class: "current-color",
                        style: I(e.props.pureColor ? e.getBgColorStyle : `background: ${e.props.defaultPureColor}`),
                        onClick: t[1] || (t[1] = (...n)=>e.onShowPicker && e.onShowPicker(...n))
                    }, null, 4)
                ], 2),
                (C(), M(at, {
                    to: e.pickerContainer
                }, [
                    ne(d("div", {
                        ref: "pickerRef",
                        style: I({
                            zIndex: e.zIndex
                        }),
                        onMouseleave: t[3] || (t[3] = (...n)=>e.onAutoClose && e.onAutoClose(...n))
                    }, [
                        e.showPicker ? (C(), M(i, {
                            key: 0,
                            "show-tab": e.useType === "both" && !e.state.isAdvanceMode,
                            theme: e.theme,
                            "active-key": e.state.activeKey,
                            "onUpdate:activeKey": t[2] || (t[2] = (n)=>e.state.activeKey = n),
                            onChange: e.onActiveKeyChange
                        }, {
                            default: we(()=>[
                                    (C(), M(xe(e.getComponentName), Be({
                                        key: e.getComponentName
                                    }, e.getBindArgs), null, 16)),
                                    e.hasExtra ? (C(), w("div", Bo, [
                                        de(e.$slots, "extra", {}, void 0, !0)
                                    ])) : B("", !0)
                                ]),
                            _: 3
                        }, 8, [
                            "show-tab",
                            "theme",
                            "active-key",
                            "onChange"
                        ])) : B("", !0)
                    ], 36), [
                        [
                            ue,
                            e.showPicker
                        ]
                    ])
                ], 8, [
                    "to"
                ]))
            ], 64))
        ], 64);
    }
    let ae;
    ae = X(wo, [
        [
            "render",
            Ho
        ],
        [
            "__scopeId",
            "data-v-5f9d486c"
        ]
    ]);
    $o = {
        install: (e)=>{
            e.component(ae.name, ae), e.component("Vue3" + ae.name, ae);
        }
    };
});
export { $o as W, __tla };
