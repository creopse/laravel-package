import { i as ct, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-DgnAsHGQ.js";
let $a;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    let U, L, h, w, ce, X, O, y, Ge, j, J, I, B, Ee, de, dt, Be, Me, pt, gt, vt, mt, Ce, ie, ht, ft, bt, we, yt, Ct, wt, kt, Mt, xt, Vt, $t, It, Lt, Nt, St, Et, Bt, Dt, Ht, Tt, _t, Xt, Yt, Rt, Ot, Ut, Pt, At, qt, Ft, Gt, Wt, Y, Zt, zt, Kt, jt, Jt, Qt, ea, ke, re, ta, Se, Ae, qe, Fe, aa, la, na, ra, oa, ua, sa, ia, ca, da, pa, ga, va, ma, ha, fa, ba, ya, Ca, wa, ka, Ma, xa;
    ({ defineComponent: U, ref: L, openBlock: h, createElementBlock: w, createTextVNode: ce, toDisplayString: X, normalizeClass: O, createElementVNode: y, Fragment: Ge, withDirectives: j, vShow: J, createCommentVNode: I, createBlock: B, createStaticVNode: Ee, inject: de, withModifiers: dt, watch: Be, unref: Me, computed: pt, onBeforeMount: gt, renderList: vt, normalizeStyle: mt, reactive: Ce, provide: ie, onMounted: ht, nextTick: ft, onBeforeUnmount: bt, createVNode: we, renderSlot: yt } = await ct("vue"));
    Ct = {
        key: 1,
        width: "16",
        height: "16",
        viewBox: "-12 -4 32 32",
        xmlns: "http://www.w3.org/2000/svg"
    };
    wt = U({
        __name: "ColorInputMenu",
        props: {
            iconClass: {
                default: "",
                type: String
            },
            inputType: {
                default: "RGB",
                type: String
            }
        },
        emits: [
            "onChangeInputName"
        ],
        setup (l, { emit: d }) {
            const o = L(l.inputType), r = [
                "CMYK",
                "HSL",
                "HSV",
                "RGB"
            ], u = d, i = ()=>{
                const g = r.findIndex((b)=>b == o.value), m = r[g + 1] ? r[g + 1] : r[0];
                o.value = m, u("onChangeInputName", m);
            };
            return (g, m)=>(h(), w("button", {
                    type: "button",
                    class: "cp-btn",
                    onClick: i
                }, [
                    ce(X(o.value) + " ", 1),
                    l.iconClass ? (h(), w("i", {
                        key: 0,
                        class: O(l.iconClass)
                    }, null, 2)) : (h(), w("svg", Ct, [
                        ...m[0] || (m[0] = [
                            y("path", {
                                d: "M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                            }, null, -1)
                        ])
                    ]))
                ]));
        }
    });
    kt = {
        class: "ck-cp-menu"
    };
    Mt = {
        class: "ck-cp-controller-bar",
        style: {
            display: "flex",
            "justify-content": "end",
            position: "relative",
            "flex-grow": "1"
        }
    };
    xt = {
        key: 1,
        width: "16",
        height: "16",
        viewBox: "-12 -4 32 32",
        xmlns: "http://www.w3.org/2000/svg"
    };
    Vt = {
        key: 1,
        width: "16",
        height: "16",
        viewBox: "-12 -4 32 32",
        xmlns: "http://www.w3.org/2000/svg"
    };
    $t = {
        key: 1,
        width: "15",
        height: "28",
        viewBox: "0 -3 36 36",
        xmlns: "http://www.w3.org/2000/svg"
    };
    It = {
        key: 0,
        class: "ck-cp-linear-angle-container"
    };
    Lt = {
        class: "ck-gradient-set-label",
        style: {
            "margin-top": "0"
        }
    };
    Nt = [
        "value"
    ];
    St = {
        key: 1,
        class: "ck-cp-linear-angle-container"
    };
    Et = {
        class: "ck-gradient-set-label",
        style: {
            "margin-top": "0"
        }
    };
    Bt = [
        "value"
    ];
    Dt = {
        class: "ck-gradient-set-label"
    };
    Ht = [
        "value"
    ];
    Tt = U({
        __name: "PickerMenu",
        props: {
            mode: {
                default: "gradient",
                type: String
            },
            inputType: {
                default: "RGB",
                type: String
            },
            gradientType: {
                default: "linear",
                type: String
            },
            showInputMenu: {
                default: !0,
                type: Boolean
            },
            showPickerMode: {
                default: !0,
                type: Boolean
            },
            angle: {
                default: 90,
                type: Number
            },
            percentageX: {
                default: 50,
                type: Number
            },
            percentageY: {
                default: 50,
                type: Number
            },
            local: {
                default: {},
                type: Object
            },
            iconClasses: {
                default: {
                    ruler: "",
                    eyeDroper: "",
                    arrowDown: "",
                    save: "",
                    delete: ""
                },
                type: Object
            }
        },
        emits: [
            "onPickerChangeMode",
            "onChangeMode",
            "onChangeInputType",
            "onDeleteColor",
            "onClickEyeDropper",
            "update:angle",
            "update:percentageX",
            "update:percentageY",
            "onInput"
        ],
        setup (l, { emit: d }) {
            const o = l, r = L(!1), u = d, i = (n, p)=>{
                switch(p){
                    case "angle":
                        u("update:angle", parseInt(n.target.value)), u("onInput");
                        break;
                    case "percentageX":
                        u("update:percentageX", parseInt(n.target.value)), u("onInput");
                        break;
                    case "percentageY":
                        u("update:percentageY", parseInt(n.target.value)), u("onInput");
                        break;
                }
            }, g = (n)=>{
                u("onChangeInputType", n);
            }, m = ()=>{
                u("onChangeMode", o.gradientType == "linear" ? "radial" : "linear");
            }, b = ()=>{
                u("onPickerChangeMode", o.mode == "gradient" ? "solid" : "gradient");
            };
            return (n, p)=>(h(), w(Ge, null, [
                    y("div", kt, [
                        y("div", Mt, [
                            l.showPickerMode ? (h(), w("button", {
                                key: 0,
                                type: "button",
                                class: "cp-btn",
                                onClick: b,
                                style: {
                                    "margin-bottom": "var(--margin-top)"
                                }
                            }, [
                                j(y("span", null, X(l.local.gradient ? l.local.gradient : "Gradient"), 513), [
                                    [
                                        J,
                                        l.mode == "gradient"
                                    ]
                                ]),
                                j(y("span", null, X(l.local.solid ? l.local.solid : "Solid"), 513), [
                                    [
                                        J,
                                        l.mode == "solid"
                                    ]
                                ]),
                                l.iconClasses.arrowDown ? (h(), w("i", {
                                    key: 0,
                                    class: O(l.iconClasses.arrowDown)
                                }, null, 2)) : (h(), w("svg", xt, [
                                    ...p[4] || (p[4] = [
                                        y("path", {
                                            d: "M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                        }, null, -1)
                                    ])
                                ]))
                            ])) : I("", !0),
                            l.mode == "gradient" ? (h(), w("button", {
                                key: 1,
                                type: "button",
                                class: "cp-btn",
                                style: {
                                    "margin-bottom": "var(--margin-top)"
                                },
                                onClick: m
                            }, [
                                j(y("span", null, X(l.local.linear ? l.local.linear : "Linear"), 513), [
                                    [
                                        J,
                                        l.gradientType == "linear"
                                    ]
                                ]),
                                j(y("span", null, X(l.local.radial ? l.local.radial : "Radial"), 513), [
                                    [
                                        J,
                                        l.gradientType == "radial"
                                    ]
                                ]),
                                l.iconClasses.arrowDown ? (h(), w("i", {
                                    key: 0,
                                    class: O(l.iconClasses.arrowDown)
                                }, null, 2)) : (h(), w("svg", Vt, [
                                    ...p[5] || (p[5] = [
                                        y("path", {
                                            d: "M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                        }, null, -1)
                                    ])
                                ]))
                            ])) : I("", !0),
                            l.showInputMenu ? (h(), B(wt, {
                                key: 2,
                                style: {
                                    "margin-bottom": "var(--margin-top)"
                                },
                                iconClass: l.iconClasses.arrowDown,
                                inputType: l.inputType,
                                onOnChangeInputName: g
                            }, null, 8, [
                                "iconClass",
                                "inputType"
                            ])) : I("", !0),
                            l.mode == "gradient" ? (h(), w("button", {
                                key: 3,
                                type: "button",
                                class: "cp-btn",
                                style: {
                                    "margin-bottom": "var(--margin-top)"
                                },
                                onClick: p[0] || (p[0] = (f)=>r.value = !r.value)
                            }, [
                                l.iconClasses.ruler ? (h(), w("i", {
                                    key: 0,
                                    class: O(l.iconClasses.ruler)
                                }, null, 2)) : (h(), w("svg", $t, [
                                    ...p[6] || (p[6] = [
                                        Ee('<path d="M29.333 9.667h-8c-0.547 0-1-0.453-1-1s0.453-1 1-1h8c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M8 9.667h-5.333c-0.547 0-1-0.453-1-1s0.453-1 1-1h5.333c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M13.333 14.333c-3.12 0-5.667-2.547-5.667-5.667s2.547-5.667 5.667-5.667c3.12 0 5.667 2.547 5.667 5.667s-2.547 5.667-5.667 5.667zM13.333 5c-2.027 0-3.667 1.64-3.667 3.667s1.64 3.667 3.667 3.667c2.027 0 3.667-1.64 3.667-3.667s-1.64-3.667-3.667-3.667z"></path><path d="M29.333 24.333h-5.333c-0.547 0-1-0.453-1-1s0.453-1 1-1h5.333c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M10.667 24.333h-8c-0.547 0-1-0.453-1-1s0.453-1 1-1h8c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M18.667 29c-3.12 0-5.667-2.547-5.667-5.667s2.547-5.667 5.667-5.667c3.12 0 5.667 2.547 5.667 5.667s-2.547 5.667-5.667 5.667zM18.667 19.667c-2.027 0-3.667 1.64-3.667 3.667s1.64 3.667 3.667 3.667c2.027 0 3.667-1.64 3.667-3.667s-1.64-3.667-3.667-3.667z"></path>', 6)
                                    ])
                                ]))
                            ])) : I("", !0)
                        ])
                    ]),
                    l.mode == "gradient" ? j((h(), w("div", It, [
                        y("div", null, [
                            y("p", Lt, [
                                ce(X(l.local.angle ? l.local.angle : "Angle") + " ", 1),
                                y("span", null, X(l.angle) + "°", 1)
                            ]),
                            y("input", {
                                type: "range",
                                min: "0",
                                max: "360",
                                value: l.angle,
                                onInput: p[1] || (p[1] = (f)=>i(f, "angle"))
                            }, null, 40, Nt)
                        ])
                    ], 512)), [
                        [
                            J,
                            l.gradientType == "linear" && r.value
                        ]
                    ]) : I("", !0),
                    l.mode == "gradient" && r.value ? j((h(), w("div", St, [
                        y("div", null, [
                            y("p", Et, [
                                ce(X(l.local.positionX ? l.local.positionX : "Position X") + " ", 1),
                                y("span", null, X(l.percentageX) + "%", 1)
                            ]),
                            y("input", {
                                type: "range",
                                min: "0",
                                max: "100",
                                value: l.percentageX,
                                onInput: p[2] || (p[2] = (f)=>i(f, "percentageX"))
                            }, null, 40, Bt)
                        ]),
                        y("div", null, [
                            y("p", Dt, [
                                ce(X(l.local.positionY ? l.local.positionY : "Position Y") + " ", 1),
                                y("span", null, X(l.percentageY) + "%", 1)
                            ]),
                            y("input", {
                                type: "range",
                                min: "0",
                                max: "100",
                                value: l.percentageY,
                                onInput: p[3] || (p[3] = (f)=>i(f, "percentageY"))
                            }, null, 40, Ht)
                        ])
                    ], 512)), [
                        [
                            J,
                            l.gradientType == "radial"
                        ]
                    ]) : I("", !0)
                ], 64));
        }
    });
    _t = 300;
    Xt = U({
        __name: "GradientBar",
        emits: [
            "onAddColor",
            "onMouseDown"
        ],
        setup (l, { emit: d }) {
            const o = de("gradientBar"), r = d, u = (m)=>{
                m.preventDefault();
            };
            let i = 0;
            const g = (m)=>{
                m.preventDefault();
                const b = new Date().getTime(), n = b - i;
                n < _t && n > 0 && r("onAddColor", m), i = b;
            };
            return (m, b)=>(h(), w("div", {
                    class: "gradient-bar",
                    onMousedown: b[1] || (b[1] = (n)=>m.$emit("onMouseDown", n)),
                    onTouchstart: b[2] || (b[2] = (n)=>m.$emit("onMouseDown", n)),
                    onDragstart: u
                }, [
                    y("div", {
                        ref_key: "gradientBar",
                        ref: o,
                        class: "gradient-container",
                        onDblclick: b[0] || (b[0] = (n)=>m.$emit("onAddColor", n)),
                        onTouchstart: dt(g, [
                            "self"
                        ])
                    }, null, 544)
                ], 32));
        }
    });
    Yt = U({
        __name: "PickerWrap",
        emits: [
            "onEventStart"
        ],
        setup (l) {
            const d = de("canvas"), o = de("pickerWrap"), r = de("pickerPointer"), u = (i)=>{
                i.preventDefault();
            };
            return (i, g)=>(h(), w("div", {
                    ref_key: "pickerWrap",
                    ref: o,
                    class: "cp-picker-wrap",
                    onMousedown: g[0] || (g[0] = (m)=>i.$emit("onEventStart", m)),
                    onTouchstart: g[1] || (g[1] = (m)=>{
                        m.preventDefault(), i.$emit("onEventStart", m);
                    }),
                    onDragstart: u
                }, [
                    y("canvas", {
                        ref_key: "canvas",
                        ref: d,
                        class: "colour-area"
                    }, null, 512),
                    g[2] || (g[2] = y("div", {
                        class: "colour-area-mask"
                    }, null, -1)),
                    y("div", {
                        ref_key: "pickerPointer",
                        ref: r,
                        class: "colour-area-point-circle"
                    }, null, 512)
                ], 544));
        }
    });
    Rt = {
        class: "picker-hue"
    };
    Ot = [
        "value"
    ];
    Ut = U({
        __name: "PickerHue",
        props: {
            modelValue: {
                default: 0,
                type: Number
            }
        },
        emits: [
            "update:modelValue",
            "onInput",
            "onChange"
        ],
        setup (l, { emit: d }) {
            const o = d, r = (u)=>{
                o("update:modelValue", parseFloat(u.target.value)), o("onInput", u);
            };
            return (u, i)=>(h(), w("div", Rt, [
                    y("input", {
                        value: l.modelValue,
                        class: "picker-hue-range-slider",
                        type: "range",
                        min: "0",
                        max: "360",
                        step: "0.1",
                        onInput: r,
                        onChange: i[0] || (i[0] = (g)=>u.$emit("onChange", g))
                    }, null, 40, Ot)
                ]));
        }
    });
    Pt = {
        class: "opacity-bar"
    };
    At = [
        "value"
    ];
    qt = U({
        __name: "OpacityBar",
        props: {
            modelValue: {
                default: 0,
                type: Number
            }
        },
        emits: [
            "update:modelValue",
            "onInput"
        ],
        setup (l, { emit: d }) {
            const o = de("opacitySlider"), r = d, u = (i)=>{
                r("update:modelValue", parseInt(i.target.value)), r("onInput", i);
            };
            return (i, g)=>(h(), w("div", Pt, [
                    y("input", {
                        ref_key: "opacitySlider",
                        ref: o,
                        value: l.modelValue,
                        class: "opacity_slider",
                        type: "range",
                        min: "0",
                        max: "100",
                        onInput: u
                    }, null, 40, At)
                ]));
        }
    });
    Ft = {
        class: "ck-cp-input-content"
    };
    Gt = {
        class: "ck-cp-input-label"
    };
    Wt = [
        "min",
        "max",
        "value"
    ];
    Y = U({
        __name: "InputNumber",
        props: {
            label: {
                default: "",
                type: String
            },
            modelValue: {
                default: 0,
                type: Number
            },
            min: {
                default: 0,
                type: Number
            },
            max: {
                default: 100,
                type: Number
            }
        },
        emits: [
            "update:modelValue"
        ],
        setup (l, { emit: d }) {
            const o = l, r = d, u = L(o.modelValue);
            Be(()=>o.modelValue, (n, p)=>{
                n !== p && (u.value = n);
            }, {
                immediate: !0
            });
            const i = (n)=>{
                const p = (D)=>{
                    u.value = D, r("update:modelValue", D);
                }, f = n.target.value;
                if (!f) return p(o.modelValue);
                if (parseInt(f) > o.max) return p(o.max);
                r("update:modelValue", parseInt(f));
            }, g = (n)=>{
                u.value = n.target.value;
            }, m = (n)=>{
                if ([
                    "KeyE",
                    "Equal",
                    "Equal",
                    "Backslash",
                    "Slash",
                    "NumpadDecimal",
                    "NumpadAdd"
                ].includes(n.code)) return n.preventDefault();
                n.code === "Enter" && i(n);
            }, b = i;
            return (n, p)=>(h(), w("div", Ft, [
                    y("span", Gt, X(l.label), 1),
                    y("input", {
                        type: "number",
                        min: l.min,
                        max: l.max,
                        value: u.value,
                        onInput: g,
                        onKeydown: m,
                        onFocusout: p[0] || (p[0] = (...f)=>Me(b) && Me(b)(...f))
                    }, null, 40, Wt)
                ]));
        }
    });
    Zt = {
        class: "ck-cp-input-content color-hex"
    };
    zt = [
        "value"
    ];
    Kt = U({
        __name: "InputHex",
        props: {
            modelValue: {}
        },
        emits: [
            "update:modelValue"
        ],
        setup (l, { emit: d }) {
            const o = l, r = d, u = L(""), i = (n)=>{
                const p = n.target.value;
                u.value = p, u.value = `#${p.replace(/#/g, "")}`;
            }, g = (n)=>{
                const p = n.target.value;
                if (p === o.modelValue) return;
                if (!/^#[0-9a-fA-F]+$/.test(p)) {
                    u.value = o.modelValue;
                    return;
                }
                let f = p.replace(/#/g, "");
                switch(f.length){
                    case 0:
                        f = o.modelValue.replace("#", "");
                        break;
                    case 1:
                    case 2:
                        f = f.repeat(3);
                        break;
                    case 4:
                    case 5:
                        f = f.slice(0, 3);
                        break;
                    case 3:
                    case 6:
                        break;
                    default:
                        f = f.slice(0, 6);
                }
                u.value = `#${f.toUpperCase()}`, r("update:modelValue", u.value);
            }, m = (n)=>{
                n.code === "Enter" && g(n);
            }, b = g;
            return Be(()=>o.modelValue, (n, p)=>{
                n !== p && (u.value = n);
            }, {
                immediate: !0
            }), (n, p)=>(h(), w("div", Zt, [
                    p[1] || (p[1] = y("span", {
                        class: "ck-cp-input-label"
                    }, "HEX", -1)),
                    y("input", {
                        type: "text",
                        value: u.value,
                        onInput: i,
                        onKeydown: m,
                        onFocusout: p[0] || (p[0] = (...f)=>Me(b) && Me(b)(...f))
                    }, null, 40, zt)
                ]));
        }
    });
    jt = (l)=>{
        const d = /^rgb\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*)\)$/i;
        if (!d.test(l)) return null;
        const o = d.exec(l);
        if (!o) return null;
        const r = parseInt(o[1].trim(), 10), u = parseInt(o[2].trim(), 10), i = parseInt(o[3].trim(), 10);
        return {
            r,
            g: u,
            b: i
        };
    };
    Jt = (l)=>{
        const d = /^rgba?\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*),(\s*[\d.]+\s*)\)$/i;
        if (!d.test(l)) return null;
        const o = d.exec(l);
        if (!o) return null;
        const r = parseInt(o[1].trim(), 10), u = parseInt(o[2].trim(), 10), i = parseInt(o[3].trim(), 10), g = parseFloat(o[4].trim());
        return {
            r,
            g: u,
            b: i,
            a: g
        };
    };
    Qt = (l)=>{
        const d = /^#?([a-f\d]{8})$/i;
        if (!d.test(l)) return null;
        const o = d.exec(l);
        if (!o) return null;
        const r = o[1], u = r.substring(6, 8), i = parseInt(r.substring(0, 2), 16), g = parseInt(r.substring(2, 4), 16), m = parseInt(r.substring(4, 6), 16), b = parseInt(u, 16) / 255;
        return {
            r: i,
            g,
            b: m,
            a: b
        };
    };
    ea = (l, d, o, r)=>{
        function u(n) {
            const p = n.toString(16);
            return p.length === 1 ? "0" + p : p;
        }
        const i = u(Math.round(l)), g = u(Math.round(d)), m = u(Math.round(o)), b = u(Math.round(r * 255));
        return `#${i}${g}${m}${b}`;
    };
    ke = (l)=>{
        try {
            let d = l.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (i, g, m, b)=>"#" + g + g + m + m + b + b).substring(1).match(/.{2}/g)?.map((i)=>parseInt(i, 16)), o = d?.[0], r = d?.[1], u = d?.[2];
            return Number.isNaN(o) || Number.isNaN(r) || Number.isNaN(u) || o === void 0 || r === void 0 || u === void 0 ? null : {
                r: o,
                g: r,
                b: u
            };
        } catch  {
            return null;
        }
    };
    re = (l, d, o)=>{
        l = l / 255, d = d / 255, o = o / 255;
        const r = Math.max(l, d, o), u = Math.min(l, d, o);
        let i;
        return r === l ? i = (d - o) / (r - u) : r === d ? i = 2 + (o - l) / (r - u) : i = 4 + (l - d) / (r - u), i *= 60, i < 0 && (i += 360), Number.isNaN(i) && (i = 0), i;
    };
    ta = (l, d, o)=>{
        d = d / 100, o = o / 100;
        let r, u, i, g = [];
        return r = (1 - Math.abs(2 * o - 1)) * d, u = r * (1 - Math.abs(l / 60 % 2 - 1)), i = o - r / 2, l >= 0 && l < 60 && (g = [
            r,
            u,
            0
        ]), l >= 60 && l < 120 && (g = [
            u,
            r,
            0
        ]), l >= 120 && l < 180 && (g = [
            0,
            r,
            u
        ]), l >= 180 && l < 240 && (g = [
            0,
            u,
            r
        ]), l >= 240 && l < 300 && (g = [
            u,
            0,
            r
        ]), l >= 300 && l <= 360 && (g = [
            r,
            0,
            u
        ]), g.map((m)=>Math.round(255 * (m + i)));
    };
    Se = (l, d, o)=>"#" + (16777216 + (o | d << 8 | l << 16)).toString(16).slice(1);
    Ae = (l, d, o)=>{
        let r = ta(l, d, o);
        return {
            rgb: r,
            hexA: Se(r[0], r[1], r[2])
        };
    };
    qe = (l, d, o)=>{
        const r = l / 255, u = d / 255, i = o / 255, g = Math.max(r, u, i), m = Math.min(r, u, i), b = (g + m) / 2;
        if (g === m) return {
            h: 0,
            s: 0,
            l: b
        };
        const n = g - m, p = b < .5 ? n / (g + m) : n / (2 - g - m);
        let f;
        switch(g){
            case r:
                f = (u - i) / n;
                break;
            case u:
                f = 2 + (i - r) / n;
                break;
            default:
                f = 4 + (r - u) / n;
                break;
        }
        return f *= 60, f < 0 && (f += 360), {
            h: f,
            s: p,
            l: b
        };
    };
    Fe = (l, d, o)=>{
        l = l % 360 / 360, d = Math.min(1, Math.max(0, d)), o = Math.min(1, Math.max(0, o));
        let r, u, i;
        if (d === 0) r = u = i = o;
        else {
            const g = (n, p, f)=>(f < 0 && (f += 1), f > 1 && (f -= 1), f < .16666666666666666 ? n + (p - n) * 6 * f : f < .5 ? p : f < .6666666666666666 ? n + (p - n) * (.6666666666666666 - f) * 6 : n), m = o < .5 ? o * (1 + d) : o + d - o * d, b = 2 * o - m;
            r = g(b, m, l + 1 / 3), u = g(b, m, l), i = g(b, m, l - 1 / 3);
        }
        return r = Math.round(r * 255), u = Math.round(u * 255), i = Math.round(i * 255), {
            r,
            g: u,
            b: i
        };
    };
    aa = (l, d, o)=>{
        let r = 0, u = 0, i = 0;
        const g = l / 60, m = o * d, b = m * (1 - Math.abs(g % 2 - 1)), n = o - m;
        switch(Math.floor(g) % 6){
            case 0:
                r = m, u = b, i = 0;
                break;
            case 1:
                r = b, u = m, i = 0;
                break;
            case 2:
                r = 0, u = m, i = b;
                break;
            case 3:
                r = 0, u = b, i = m;
                break;
            case 4:
                r = b, u = 0, i = m;
                break;
            case 5:
                r = m, u = 0, i = b;
                break;
        }
        return {
            r: Math.round((r + n) * 255),
            g: Math.round((u + n) * 255),
            b: Math.round((i + n) * 255)
        };
    };
    la = (l, d, o)=>{
        l /= 255, d /= 255, o /= 255;
        const r = Math.max(l, d, o), u = Math.min(l, d, o);
        let i, g, m = r;
        const b = r - u;
        if (r !== 0) g = b / r;
        else return {
            h: 0,
            s: 0,
            v: 0
        };
        return b === 0 ? i = 0 : r === l ? i = 60 * ((d - o) / b % 6) : r === d ? i = 60 * ((o - l) / b + 2) : i = 60 * ((l - d) / b + 4), i < 0 && (i += 360), {
            h: Math.round(i),
            s: Math.round(g * 100) / 100,
            v: Math.round(m * 100) / 100
        };
    };
    na = (l, d, o)=>{
        const r = (2 - d) * o / 2, u = r && r < 1 ? d * o / (r < .5 ? r * 2 : 2 - r * 2) : d;
        return {
            h: l,
            s: u,
            l: r
        };
    };
    ra = (l, d, o, r)=>{
        const u = Math.round(255 * (1 - l) * (1 - r)), i = Math.round(255 * (1 - d) * (1 - r)), g = Math.round(255 * (1 - o) * (1 - r));
        return {
            r: Math.min(255, Math.max(0, u)),
            g: Math.min(255, Math.max(0, i)),
            b: Math.min(255, Math.max(0, g))
        };
    };
    oa = (l, d, o)=>{
        l = l / 255, d = d / 255, o = o / 255;
        const r = 1 - Math.max(l, d, o), u = (1 - l - r) / (1 - r), i = (1 - d - r) / (1 - r), g = (1 - o - r) / (1 - r);
        return {
            c: isNaN(u) ? 0 : u,
            m: isNaN(i) ? 0 : i,
            y: isNaN(g) ? 0 : g,
            k: isNaN(r) ? 0 : r
        };
    };
    ua = {
        class: "ck-cp-local-color-conatiner"
    };
    sa = {
        class: "ck-cp-color-list-label"
    };
    ia = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    };
    ca = {
        key: 1,
        width: "32",
        height: "14",
        viewBox: "5 -5 32 32",
        xmlns: "http://www.w3.org/2000/svg"
    };
    da = {
        key: 1,
        width: "18",
        height: "18",
        viewBox: "-2 -2 30 30",
        xmlns: "http://www.w3.org/2000/svg"
    };
    pa = {
        class: "ck-cp-color-list"
    };
    ga = [
        "onClick"
    ];
    va = {
        key: 1,
        width: "25",
        height: "25",
        viewBox: "2 2 20 20",
        xmlns: "http://www.w3.org/2000/svg"
    };
    ma = U({
        __name: "HistoryColorList",
        props: {
            colorListCount: {
                default: 10,
                type: Number
            },
            hexVal: {
                default: "",
                type: String
            },
            title: {
                default: "",
                type: String
            },
            iconClasses: {
                default: {
                    ruler: "",
                    eyeDroper: "",
                    arrowDown: "",
                    save: "",
                    delete: ""
                },
                type: Object
            }
        },
        emits: [
            "color-item-click"
        ],
        setup (l, { emit: d }) {
            const o = l, r = d, u = L([]), i = pt(()=>u.value.some((n)=>n.selected == !0)), g = ()=>{
                if (!u.value.find((n)=>n.color === o.hexVal)) {
                    const n = u.value.find((p)=>p.selected == !0);
                    if (n) n.color = o.hexVal;
                    else {
                        u.value.length === o.colorListCount && u.value.pop();
                        let p = o.hexVal;
                        u.value.unshift({
                            color: p,
                            selected: !1
                        });
                    }
                    localStorage.setItem("ck-cp-local-color-list", JSON.stringify(u.value.map((p)=>p.color)));
                }
            }, m = ()=>{
                u.value = u.value.filter((n)=>n.selected == !1), localStorage.setItem("ck-cp-local-color-list", JSON.stringify(u.value.map((n)=>n.color)));
            }, b = (n)=>{
                u.value.forEach((p)=>{
                    p.color === n ? p.selected = !p.selected : p.selected = !1;
                }), r("color-item-click", n);
            };
            return gt(()=>{
                let n = localStorage.getItem("ck-cp-local-color-list");
                if (n) {
                    let p = JSON.parse(n);
                    u.value = p.map((f)=>({
                            color: f,
                            selected: !1
                        }));
                }
            }), (n, p)=>(h(), w("div", ua, [
                    y("div", sa, [
                        y("div", ia, [
                            ce(X(l.title ? l.title : "Color Palette") + " ", 1),
                            l.iconClasses.arrowDown ? (h(), w("i", {
                                key: 0,
                                class: O(l.iconClasses.arrowDown)
                            }, null, 2)) : (h(), w("svg", ca, [
                                ...p[0] || (p[0] = [
                                    y("path", {
                                        d: "M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                    }, null, -1)
                                ])
                            ]))
                        ]),
                        i.value ? (h(), w("button", {
                            key: 0,
                            type: "button",
                            class: "cp-main-btn",
                            onClick: m,
                            style: {
                                width: "17.33px",
                                height: "17.33px"
                            }
                        }, [
                            l.iconClasses.delete ? (h(), w("i", {
                                key: 0,
                                class: O(l.iconClasses.delete)
                            }, null, 2)) : (h(), w("svg", da, [
                                ...p[1] || (p[1] = [
                                    Ee('<path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z"></path><path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z"></path><path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z"></path><path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"></path><path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"></path>', 5)
                                ])
                            ]))
                        ])) : I("", !0)
                    ]),
                    y("div", pa, [
                        (h(!0), w(Ge, null, vt(u.value, (f)=>(h(), w("div", {
                                key: `color-${f.color}`,
                                class: O([
                                    "ck-cp-color-item",
                                    f.selected ? "ck-select" : ""
                                ]),
                                style: mt({
                                    backgroundColor: f.color
                                }),
                                onClick: (D)=>b(f.color)
                            }, null, 14, ga))), 128)),
                        y("button", {
                            type: "button",
                            class: "cp-btn-save-color",
                            onClick: g
                        }, [
                            l.iconClasses.save ? (h(), w("i", {
                                key: 0,
                                class: O(l.iconClasses.save)
                            }, null, 2)) : (h(), w("svg", va, [
                                ...p[2] || (p[2] = [
                                    y("path", {
                                        d: "M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                                    }, null, -1),
                                    y("path", {
                                        d: "M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                                    }, null, -1)
                                ])
                            ]))
                        ])
                    ])
                ]));
        }
    });
    ha = [
        "cp-theme"
    ];
    fa = {
        key: 0,
        style: {
            display: "flex",
            "align-items": "center",
            gap: "8px",
            "margin-top": "calc(var(--margin-top) * 1.35)",
            padding: "var(--padding)"
        }
    };
    ba = {
        key: 1,
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    };
    ya = {
        style: {
            display: "flex",
            "align-items": "center",
            gap: "8px",
            "margin-top": "calc(var(--margin-top) * 1.35)",
            padding: "var(--padding)"
        }
    };
    Ca = {
        key: 1,
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "3 2 28 28"
    };
    wa = {
        style: {
            "flex-grow": "1",
            display: "flex",
            "flex-direction": "column",
            gap: "calc(var(--margin-top) * 1.85)"
        }
    };
    ka = {
        id: "ck-cp-target-background"
    };
    Ma = {
        key: 1,
        class: "ck-cp-input-container"
    };
    xa = {
        key: 3,
        class: "ck-cp-buttons"
    };
    $a = U({
        __name: "Vue3ColorPicker",
        props: {
            modelValue: {
                default: "",
                type: String
            },
            mode: {
                default: "gradient",
                type: String
            },
            type: {
                default: "HEX8",
                type: String
            },
            inputType: {
                default: "RGB",
                type: String
            },
            theme: {
                default: "light",
                type: String
            },
            colorListCount: {
                default: 15,
                type: Number
            },
            showColorList: {
                default: !0,
                type: Boolean
            },
            showEyeDrop: {
                default: !0,
                type: Boolean
            },
            showPickerMode: {
                default: !0,
                type: Boolean
            },
            showAlpha: {
                default: !0,
                type: Boolean
            },
            showInputMenu: {
                default: !0,
                type: Boolean
            },
            showInputSet: {
                default: !0,
                type: Boolean
            },
            disabled: {
                default: !1,
                type: Boolean
            },
            gradientMode: {
                default: "linear",
                type: String
            },
            local: {
                default: {
                    angle: "",
                    positionX: "",
                    positionY: "",
                    solid: "",
                    gradient: "",
                    linear: "",
                    radial: "",
                    colorPalette: "",
                    btnSaveLabel: "Save",
                    btnCancelLabel: "Cancel"
                },
                type: Object
            },
            iconClasses: {
                default: {
                    linear: "",
                    radial: "",
                    ruler: "",
                    eyeDroper: "",
                    inputMenu: "",
                    save: "",
                    delete: ""
                },
                type: Object
            },
            showButtons: {
                type: Boolean,
                default: !1
            }
        },
        emits: [
            "update:modelValue",
            "onChange",
            "onSave",
            "onCancel"
        ],
        setup (l, { emit: d }) {
            const o = l, r = L(null), u = d, i = L(o.mode), g = L(o.modelValue), m = L(o.modelValue), b = (e)=>{
                g.value = e, u("onChange", e), o.showButtons || (m.value = e, u("update:modelValue", e));
            }, n = L([
                {
                    id: 1,
                    r: 68,
                    g: 71,
                    b: 119,
                    a: 100,
                    percent: 0,
                    hue: 0,
                    select: !0
                },
                {
                    id: 2,
                    r: 0,
                    g: 0,
                    b: 255,
                    a: 100,
                    percent: 100,
                    hue: 0,
                    select: !1
                }
            ]), p = L(!1), f = L(o.gradientMode), D = Ce({
                angle: 90,
                percentageX: 50,
                percentageY: 50
            }), q = L(""), N = L(o.inputType), oe = L(!1), De = L(), pe = L(), W = L(), _ = L(), $ = L(), H = Ce({
                h: 0,
                s: 0,
                l: 0
            }), E = Ce({
                h: 0,
                s: 0,
                v: 0
            }), S = Ce({
                c: 0,
                m: 0,
                y: 0,
                k: 0
            });
            ie("gradientBar", pe), ie("canvas", W), ie("pickerWrap", _), ie("pickerPointer", $), ie("opacitySlider", De);
            let Q = 0, ee = 0, He = 0, Te = 0, te = 0, ae = 0, P = null, ue = null, xe = 0;
            const We = (e)=>{
                if (!_.value || !$.value) return;
                const t = "TouchEvent" in window && e instanceof TouchEvent, { clientX: a, clientY: s } = t ? e.touches[0] : e;
                te = _.value.offsetHeight - $.value.offsetHeight, ae = _.value.offsetWidth - $.value.offsetWidth, He = a - e.target.getBoundingClientRect().left, Te = s - e.target.getBoundingClientRect().top, Q = He - $.value.offsetWidth / 2, ee = Te - $.value.offsetHeight / 2, $.value.style.left = `${Q}px`, $.value.style.top = `${ee}px`, Ve(!1), ne(), t ? (window.addEventListener("touchmove", ge), window.addEventListener("touchend", ve)) : (window.addEventListener("mousemove", ge), window.addEventListener("mouseup", ve));
            }, ge = (e)=>{
                e.preventDefault();
                const t = "TouchEvent" in window && e instanceof TouchEvent, { clientX: a, clientY: s } = t ? e.touches[0] : e, c = _.value.getBoundingClientRect(), v = a - c.left - $.value.offsetWidth / 2, C = s - c.top - $.value.offsetHeight / 2;
                v >= 0 && v <= ae ? (Q = v, $.value.style.left = `${v}px`) : 0 > v ? (Q = 0, $.value.style.left = "0px") : v > ae && (Q = ae, $.value.style.left = `${ae}px`), C >= 0 && C <= te ? (ee = C, $.value.style.top = `${C}px`) : 0 > C ? (ee = 0, $.value.style.top = "0px") : C > te && (ee = te, $.value.style.top = `${te}px`), Ve(!1), ne();
            }, ve = (e)=>{
                "TouchEvent" in window && e instanceof TouchEvent ? (window.removeEventListener("touchmove", ge), window.removeEventListener("touchend", ve)) : (window.removeEventListener("mousemove", ge), window.removeEventListener("mouseup", ve));
            }, Ve = (e)=>{
                if (!e) {
                    let t = Ze();
                    const a = Fe(F.value, t.s, t.l);
                    if (a) {
                        if (oe.value) {
                            let s = n.value.find((c)=>c.select == !0);
                            s && (s.r = a.r, s.g = a.g, s.b = a.b);
                        }
                        R(), T();
                    }
                }
            }, F = L(0), $e = async (e)=>{
                const { rgb: t } = Ae(F.value, 100, 50);
                Ye(t), setTimeout(()=>{
                    Ve(e), ne();
                }, 0);
            }, Ze = ()=>{
                let e = {
                    s: 0,
                    l: 0
                }, t = _.value.offsetWidth - $.value.offsetWidth, a = _.value.offsetHeight - $.value.offsetHeight, s = parseInt($.value.style.left), c = 1 - parseInt($.value.style.top) / a, v = s / t;
                return e.l = c / 2 * (2 - v), e.s = c * v / (1 - Math.abs(2 * e.l - 1)), Number.isNaN(e.s) && (e.s = e.l), e.l = e.l > 1 ? 1 : e.l, e.s = e.s > 1 ? 1 : e.s, e;
            }, ze = (e)=>{
                const t = n.value.find((k)=>k.select == !0);
                if (!t || !_.value || !$.value) return null;
                const { l: a, s } = qe(t.r, t.g, t.b);
                let c = a, v = s;
                Number.isNaN(v) && (v = c);
                const C = e?.rightLine ?? _.value.offsetWidth - $.value.offsetWidth, x = e?.bottomLine ?? _.value.offsetHeight - $.value.offsetHeight;
                if (C <= 0 || x <= 0) return null;
                const [M, V] = 2 * c - 1 < 0 ? [
                    C * 2 * v / (1 + v),
                    x * (1 - c * (1 + v))
                ] : [
                    -C * 2 * (c - 1) * v / (c + v - c * v),
                    x * (c - 1) * (v - 1)
                ];
                return {
                    x: M,
                    y: V
                };
            }, Z = ()=>{
                if (!_.value || !$.value) return;
                const e = _.value.offsetWidth - $.value.offsetWidth, t = _.value.offsetHeight - $.value.offsetHeight;
                if (e <= 0 || t <= 0) {
                    xe < 5 && P === null && (xe += 1, P = requestAnimationFrame(()=>{
                        P = null, Z();
                    }));
                    return;
                }
                xe = 0, P !== null && (cancelAnimationFrame(P), P = null);
                const a = ze({
                    rightLine: e,
                    bottomLine: t
                });
                if (!a) return;
                const s = Math.min(Math.max(a.x, 0), e), c = Math.min(Math.max(a.y, 0), t);
                $.value.style.left = `${s}px`, $.value.style.top = `${c}px`, Q = s, ee = c, ae = e, te = t;
            }, Ke = ()=>{
                const e = n.value.find((t)=>t.select == !0);
                e && (e.hue = F.value);
            }, le = L(100), je = (e)=>{
                if (o.showAlpha) {
                    const t = e.target, a = n.value.find((s)=>s.select == !0);
                    a && (a.a = parseInt(t.value), T());
                }
            }, Je = (e)=>{
                const t = r.value?.querySelector(".gradient-handle-content")?.getBoundingClientRect();
                return e === 0 ? "0px" : e === 100 && t ? `${(pe.value?.offsetWidth || 0) - (t.width || 0)}px` : `${(pe.value?.offsetWidth || 0) * (e / 100) - (t?.width || 0) / 2}px`;
            };
            let z = null, K = null;
            const Qe = (e)=>{
                const t = e.target.offsetParent;
                if (t?.id?.includes("clr-gb-")) {
                    const a = t.id.replace("clr-gb-", "");
                    K = t;
                    const s = n.value.find((c)=>c.select == !0);
                    if (s && s.id != a) {
                        r.value?.querySelector(".gradient-handle.select")?.classList.remove("select"), t.classList.add("select");
                        const c = n.value.findIndex((v)=>v.select == !0);
                        for(let v = 0; v < n.value.length; v++){
                            const C = n.value[v];
                            if (C.id == a) {
                                c != -1 && (n.value[c].select = !1), n.value[v].select = !0, le.value = C.a, G(C.r, C.g, C.b, C.hue, !0), R(), ne();
                                break;
                            }
                        }
                    }
                    "TouchEvent" in window && e instanceof TouchEvent ? (window.addEventListener("touchmove", he), window.addEventListener("touchend", me)) : (window.addEventListener("mousemove", he), window.addEventListener("mouseup", me));
                }
            }, me = (e)=>{
                "TouchEvent" in window && e instanceof TouchEvent ? (window.removeEventListener("touchmove", he), window.removeEventListener("touchend", me)) : (window.removeEventListener("mousemove", he), window.removeEventListener("mouseup", me));
            }, he = (e)=>{
                e.preventDefault();
                const t = "TouchEvent" in window && e instanceof TouchEvent ? e.touches[0].clientX : e.clientX, a = r.value?.querySelector(".gradient-handle-content")?.getBoundingClientRect(), s = z?.getBoundingClientRect(), c = s?.width - a?.width;
                let v = t - (s?.left || 0) - (a?.width || 0) / 2;
                if (v < 0 ? v = 0 : v > c && (v = c), K) {
                    K.style.left = `${v}px`;
                    const C = parseFloat((v / (s?.width - a?.width) * 100).toFixed(0)), x = n.value.find((M)=>M.id == K?.id.replace("clr-gb-", ""));
                    x && (x.percent = C), T();
                }
            }, et = (e)=>{
                const t = "TouchEvent" in window && e instanceof TouchEvent, a = z?.getBoundingClientRect();
                let s;
                t ? s = Math.round((e.touches[0].clientX - (a?.left || 0)) / (a?.width || 1) * 100) : s = Math.round((e.clientX - (a?.left || 0)) / (a?.width || 1) * 100);
                const c = n.value.findIndex((x)=>x.select == !0), v = n.value[c], C = {
                    id: Date.now(),
                    r: v.r,
                    g: v.g,
                    b: v.b,
                    a: v.a,
                    percent: s,
                    hue: v.hue,
                    select: !0
                };
                n.value[c].select = !1, r.value?.querySelector(".gradient-handle.select")?.classList.remove("select"), n.value = [
                    ...n.value,
                    C
                ], Xe(C), K = r.value?.querySelector(`#clr-gb-${C.id}`), T();
            }, _e = (e)=>{
                if (e.r == 0 && e.g == 0 && e.b == 0 || e.r == 255 && e.g == 255 && e.b == 255) return !0;
                {
                    const t = W.value.getContext("2d", {
                        willReadFrequently: !0
                    }), a = W.value.width, s = W.value.height, c = t.getImageData(0, 0, a, s).data, v = e.r, C = e.g, x = e.b;
                    for(let M = 0; M < s; M++)for(let V = 0; V < a; V++){
                        const k = (M * a + V) * 4, A = c[k], st = c[k + 1], it = c[k + 2];
                        if (A === v && st === C && it === x) return !0;
                    }
                    return !1;
                }
            }, G = (e, t, a, s, c)=>{
                setTimeout(()=>{
                    _e({
                        r: e,
                        g: t,
                        b: a
                    }) || (F.value = s, $e(c)), Z();
                }, 0);
            }, tt = ()=>{
                n.value.forEach((t)=>Xe(t)), at();
                const e = n.value[0];
                F.value = e.hue, $e(!0), Z(), R(), T();
            }, Xe = (e)=>{
                if (i.value == "gradient") {
                    let t = document.createElement("div");
                    t.id = `clr-gb-${e.id}`, t.classList.add("gradient-handle"), t.style.left = Je(e.percent);
                    let a = document.createElement("div");
                    a.classList.add("gradient-handle-content"), e.select == !0 && t.classList.add("select"), t.appendChild(a), z && z.appendChild(t);
                }
            }, Ye = (e)=>{
                const t = W.value.getContext("2d", {
                    willReadFrequently: !0
                }), a = W.value.width, s = W.value.height;
                t.fillStyle = `rgb(${e[0]},${e[1]},${e[2]})`, t.fillRect(0, 0, a, s);
                let c = t.createLinearGradient(0, 0, a - 12, 0);
                c.addColorStop(0, "rgb(255,255,255)"), c.addColorStop(1, "rgba(255,255,255,0)"), t.fillStyle = c, t.fillRect(0, 0, a, s);
                let v = t.createLinearGradient(0, 0, 0, s);
                v.addColorStop(0, "rgba(0,0,0,0)"), v.addColorStop(1, "rgb(0,0,0)"), t.fillStyle = v, t.fillRect(0, 0, a, s);
            }, R = ()=>{
                if (o.showAlpha) {
                    let e = n.value.find((t)=>t.select == !0);
                    e && (De.value.style.background = ` linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(${e.r}, ${e.g}, ${e.b}, 100) 97%)`);
                }
            }, T = ()=>{
                if (i.value == "gradient") {
                    n.value.sort((s, c)=>s.percent - c.percent);
                    let e = "linear-gradient(90deg, ", t;
                    if (f.value == "linear") {
                        t = `linear-gradient(${D.angle}deg, `;
                        for(let s = 0; s < n.value.length; s++){
                            const { r: c, g: v, b: C, a: x, percent: M } = n.value[s];
                            n.value.length - 1 == s ? (e = e + `rgba(${c},${v},${C},${x / 100}) ${M}%)`, t = t + `rgba(${c},${v},${C},${x / 100}) ${M}%)`) : (e = e + `rgba(${c},${v},${C},${x / 100}) ${M}%, `, t = t + `rgba(${c},${v},${C},${x / 100}) ${M}%, `);
                        }
                    } else {
                        t = `radial-gradient(circle at ${D.percentageX}% ${D.percentageY}%, `;
                        for(let s = 0; s < n.value.length; s++){
                            const { r: c, g: v, b: C, a: x, percent: M } = n.value[s];
                            n.value.length - 1 == s ? (e = e + `rgba(${c},${v},${C},${x / 100}) ${M}%)`, t = t + `rgba(${c},${v},${C},${x / 100}) ${M}%)`) : (e = e + `rgba(${c},${v},${C},${x / 100}) ${M}%, `, t = t + `rgba(${c},${v},${C},${x / 100}) ${M}%, `);
                        }
                    }
                    pe.value.style.backgroundImage = e;
                    let a = r.value?.querySelector("#ck-cp-target-background");
                    a && (a.style.backgroundImage = t, oe.value && b(a.style.backgroundImage));
                } else {
                    const { r: e, g: t, b: a, a: s } = n.value[0];
                    let c = "";
                    switch(o.type){
                        case "HEX8":
                            c = ea(e, t, a, s / 100);
                            break;
                        case "RGBA":
                            c = `rgba(${e},${t},${a},${s / 100})`;
                            break;
                        case "RGB":
                            c = `rgb(${e},${t},${a})`;
                            break;
                        case "HEX":
                            c = Se(e, t, a);
                            break;
                    }
                    oe.value && b(c);
                }
            }, at = ()=>{
                n.value.forEach((e)=>{
                    e.hue = re(e.r, e.g, e.b);
                });
            }, lt = (e)=>{
                f.value = e, T();
            }, Re = ()=>{
                if (n.value.length > 2) {
                    const e = n.value.findIndex((t)=>t.select == !0);
                    if (e !== -1) {
                        const t = n.value[e].id;
                        n.value.splice(e, 1), r.value?.querySelector(`#clr-gb-${t}`)?.remove();
                        const a = n.value[0];
                        a && (a.select = !0, K = r.value?.querySelector(`#clr-gb-${a.id}`), K?.classList.add("select"), G(a.r, a.g, a.b, a.hue, !1), ne(), T());
                    }
                }
            }, Ie = ()=>{
                const e = r.value?.querySelector("#cp-btn-eyedropper");
                e?.classList.add("active"), new EyeDropper().open().then((t)=>{
                    const { sRGBHex: a } = t, s = n.value.find((v)=>v.select == !0), c = ke(a);
                    if (c) {
                        const v = re(c.r, c.g, c.b);
                        if (s && (s.hue = v, s.r = c.r, s.g = c.g, s.b = c.b), !_e(c)) {
                            F.value = v;
                            const { rgb: C } = Ae(v, 100, 50);
                            Ye(C);
                        }
                        Z(), ne(), R(), T(), e?.classList.remove("active");
                    }
                }).catch(()=>{
                    e?.classList.remove("active");
                });
            }, fe = (e, t)=>{
                if (t != "a") {
                    const a = n.value.find((s)=>s.select == !0);
                    if (a) {
                        const s = re(a.r, a.g, a.b);
                        a.hue = s, G(a.r, a.g, a.b, a.hue, !0), T(), R();
                    }
                } else le.value = e, T(), R();
            }, Le = ()=>{
                const e = n.value.find((t)=>t.select == !0);
                if (e && !Number.isNaN(H.h) && !Number.isNaN(H.s) && !Number.isNaN(H.l)) {
                    const { r: t, g: a, b: s } = Fe(H.h, H.s / 100, H.l / 100);
                    e.hue = H.h, e.r = t, e.g = a, e.b = s, G(e.r, e.g, e.b, e.hue, !0), T(), R();
                }
            }, Ne = ()=>{
                const e = n.value.find((t)=>t.select == !0);
                if (e && !Number.isNaN(E.h) && !Number.isNaN(E.s) && !Number.isNaN(E.v)) {
                    const { r: t, g: a, b: s } = aa(E.h, E.s / 100, E.v / 100), { h: c } = na(E.h, E.s / 100, E.v / 100);
                    e.hue = c, e.r = t, e.g = a, e.b = s, G(e.r, e.g, e.b, e.hue, !0), T(), R();
                }
            }, be = ()=>{
                const e = n.value.find((t)=>t.select == !0);
                if (e && !Number.isNaN(S.c) && !Number.isNaN(S.m) && !Number.isNaN(S.y) && !Number.isNaN(S.k)) {
                    const { r: t, g: a, b: s } = ra(S.c / 100, S.m / 100, S.y / 100, S.k / 100), c = re(t, a, s);
                    e.hue = c, e.r = t, e.g = a, e.b = s, G(e.r, e.g, e.b, e.hue, !0), T(), R();
                }
            }, nt = ()=>{
                if (q.value) {
                    const e = ke(q.value);
                    if (e) {
                        const t = re(e.r, e.g, e.b), a = n.value.find((s)=>s.select == !0);
                        a && (a.r = e.r, a.g = e.g, a.b = e.b, a.hue = t, G(e.r, e.g, e.b, a.hue, !0), T(), R(), se(N.value));
                    }
                }
            }, ne = ()=>{
                const e = n.value.find((t)=>t.select == !0);
                e && (q.value = Se(e.r, e.g, e.b).toUpperCase()), se(N.value);
            }, rt = (e)=>{
                q.value = e;
                let t = ke(q.value);
                if (t) {
                    const a = re(t.r, t.g, t.b), s = n.value.find((c)=>c.select == !0);
                    s && (s.r = t.r, s.g = t.g, s.b = t.b, s.hue = a, G(t.r, t.g, t.b, s.hue, !0), T(), R());
                }
            };
            window.EyeDropper && (p.value = !0);
            const ot = (e = "")=>{
                if (i.value == "gradient") {
                    let t = e ? e.includes("linear-gradient") ? "linear" : "radial" : o.gradientMode, a = [];
                    if (f.value = t, t == "linear") {
                        let s = /^linear-gradient\((.*)\)$/, c = e.replace(";", "").trim().match(s), v = /,\s*(?![^()]*\))/;
                        if (e.includes("deg") || (D.angle = 180), c) {
                            let C = c[1].split(v);
                            for(let x = 0; x < C.length; x++){
                                const M = C[x];
                                let V = {
                                    id: x,
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 100,
                                    percent: 100,
                                    hue: 0,
                                    select: !1
                                };
                                if (M.includes("deg")) D.angle = parseInt(M.replace("deg", ""));
                                else if (M.includes("rgba")) {
                                    let k = M.trim().replace(/rgba|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                                    k = k.filter((A)=>A.trim() !== ""), V.r = parseInt(k[0]), V.g = parseInt(k[1]), V.b = parseInt(k[2]), V.a = parseFloat(k[3]) * 100, V.percent = parseInt(k[4]), a.push(V);
                                } else if (M.includes("rgb")) {
                                    let k = M.trim().replace(/rgb|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                                    k = k.filter((A)=>A.trim() !== ""), V.r = parseInt(k[0]), V.g = parseInt(k[1]), V.b = parseInt(k[2]), V.percent = parseInt(k[3]), a.push(V);
                                }
                            }
                        }
                    } else {
                        let s = /^radial-gradient\((.*)\)$/, c = e.replace(";", "").trim().match(s), v = /,\s*(?![^()]*\))/;
                        if (c) {
                            let C = c[1].split(v);
                            for(let x = 0; x < C.length; x++){
                                const M = C[x];
                                let V = {
                                    id: x,
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 100,
                                    percent: 100,
                                    hue: 0,
                                    select: !1
                                };
                                if (M.includes("circle at")) {
                                    let k = M.replace("circle at ", "").replace(" ", "").replace(/%/g, " ").trim().split(" ");
                                    D.percentageX = parseInt(k[0]), D.percentageY = parseInt(k[1]);
                                } else if (M.includes("rgba")) {
                                    let k = M.replace(/rgba|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                                    k = k.filter((A)=>A.trim() !== ""), V.r = parseInt(k[0]), V.g = parseInt(k[1]), V.b = parseInt(k[2]), V.a = parseFloat(k[3]) * 100, V.percent = parseInt(k[4]), a.push(V);
                                } else if (M.includes("rgb")) {
                                    let k = M.replace(/rgb|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                                    k = k.filter((A)=>A.trim() !== ""), V.r = parseInt(k[0]), V.g = parseInt(k[1]), V.b = parseInt(k[2]), V.percent = parseInt(k[3]), a.push(V);
                                }
                            }
                        }
                    }
                    a.length > 1 && (n.value = a, n.value[0].select = !0, le.value = n.value[0].a);
                } else if (e) {
                    let t = {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    };
                    if (e.includes("#")) if (e.length >= 8) t = Qt(e);
                    else {
                        let a = ke(e);
                        a ? (t.a = 1, t.r = a.r, t.g = a.g, t.b = a.b) : t = null;
                    }
                    else if (e.includes("rgb")) if (e.includes("rgba")) t = Jt(e);
                    else {
                        let a = jt(e);
                        a ? (t.a = 1, t.r = a.r, t.g = a.g, t.b = a.b) : t = null;
                    }
                    t && (n.value[0].r = t.r, n.value[0].b = t.b, n.value[0].g = t.g, n.value[0].a = parseInt((t.a * 100).toFixed(0)), le.value = n.value[0].a, n.value[0].hue = 0);
                }
            }, se = (e)=>{
                const t = n.value.find((a)=>a.select == !0);
                if (t) {
                    switch(e){
                        case "RGB":
                            break;
                        case "HSL":
                            {
                                const { h: a, s, l: c } = qe(t.r, t.g, t.b);
                                H.h = Math.round(a), H.s = Math.round(s * 100), H.l = Math.round(c * 100);
                                break;
                            }
                        case "HSV":
                            {
                                const { h: a, s, v: c } = la(t.r, t.g, t.b);
                                E.h = Math.round(a), E.s = Math.round(s * 100), E.v = Math.round(c * 100);
                                break;
                            }
                        case "CMYK":
                            {
                                const { c: a, m: s, y: c, k: v } = oa(t.r, t.g, t.b);
                                S.c = Math.round(a * 100), S.m = Math.round(s * 100), S.y = Math.round(c * 100), S.k = Math.round(v * 100);
                            }
                            break;
                    }
                    N.value = e;
                }
            }, ut = (e)=>{
                i.value = e, setTimeout(()=>{
                    i.value == "gradient" && (z = r.value?.querySelector(".gradient-bar")), ye(o.modelValue), se(N.value);
                }, 0);
            }, ye = (e)=>{
                e && ot(e), tt();
            }, Oe = ()=>{
                m.value = g.value, u("update:modelValue", m.value), u("onSave", m.value);
            }, Ue = ()=>{
                n.value.forEach((e)=>{
                    z?.querySelector(`#clr-gb-${e.id}`)?.remove();
                });
            }, Pe = ()=>{
                g.value = m.value, Ue(), ye(g.value), u("onCancel", g.value);
            };
            return Be(()=>o.modelValue, (e, t)=>{
                e !== t && e !== m.value && (Ue(), ye(e), Z());
            }), ((e)=>{
                e && (e.includes("linear-gradient") || e.includes("radial-gradient") ? i.value = "gradient" : i.value = "solid");
            })(o.modelValue), ht(()=>{
                ft(()=>{
                    i.value == "gradient" && (z = r.value?.querySelector(".gradient-bar")), typeof ResizeObserver < "u" && _.value && (ue?.disconnect(), ue = new ResizeObserver(()=>{
                        Z();
                    }), ue.observe(_.value)), ye(o.modelValue), se(N.value), oe.value = !0, Z();
                });
            }), bt(()=>{
                P !== null && (cancelAnimationFrame(P), P = null), ue?.disconnect(), ue = null;
            }), (e, t)=>(h(), w("div", {
                    class: O([
                        "ck-cp-container",
                        l.disabled ? "ck-cp-disabled " : ""
                    ]),
                    ref_key: "pickerTemplateRef",
                    ref: r,
                    "cp-theme": l.theme
                }, [
                    we(Tt, {
                        angle: D.angle,
                        "onUpdate:angle": t[0] || (t[0] = (a)=>D.angle = a),
                        percentageX: D.percentageX,
                        "onUpdate:percentageX": t[1] || (t[1] = (a)=>D.percentageX = a),
                        percentageY: D.percentageY,
                        "onUpdate:percentageY": t[2] || (t[2] = (a)=>D.percentageY = a),
                        local: l.local,
                        iconClasses: l.iconClasses,
                        inputType: N.value,
                        mode: i.value,
                        showInputMenu: l.showInputMenu,
                        gradientType: f.value,
                        showPickerMode: l.showPickerMode,
                        onOnChangeMode: lt,
                        onOnInput: T,
                        onOnClickEyeDropper: Ie,
                        onOnDeleteColor: Re,
                        onOnChangeInputType: se,
                        onOnPickerChangeMode: ut
                    }, null, 8, [
                        "angle",
                        "percentageX",
                        "percentageY",
                        "local",
                        "iconClasses",
                        "inputType",
                        "mode",
                        "showInputMenu",
                        "gradientType",
                        "showPickerMode"
                    ]),
                    we(Yt, {
                        onOnEventStart: We
                    }),
                    i.value == "gradient" ? (h(), w("div", fa, [
                        y("button", {
                            type: "button",
                            class: "cp-main-btn",
                            onClick: Re
                        }, [
                            l.iconClasses.delete ? (h(), w("i", {
                                key: 0,
                                class: O(l.iconClasses.delete)
                            }, null, 2)) : (h(), w("svg", ba, [
                                ...t[25] || (t[25] = [
                                    Ee('<path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z"></path><path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z"></path><path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z"></path><path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"></path><path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"></path>', 5)
                                ])
                            ]))
                        ]),
                        we(Xt, {
                            onOnAddColor: et,
                            onOnMouseDown: Qe
                        })
                    ])) : I("", !0),
                    y("div", ya, [
                        p.value && l.showEyeDrop ? (h(), w("button", {
                            key: 0,
                            type: "button",
                            id: "cp-btn-eyedropper",
                            class: "cp-main-btn",
                            onClick: Ie
                        }, [
                            l.iconClasses.eyeDroper ? (h(), w("i", {
                                key: 0,
                                class: O(l.iconClasses.eyeDroper)
                            }, null, 2)) : (h(), w("svg", Ca, [
                                ...t[26] || (t[26] = [
                                    y("path", {
                                        d: "M27.014 2.891l-0.058-0.058c-1.106-1.11-2.911-1.11-4.022 0l-2.515 2.515-0.072-0.072c-0.603-0.603-1.584-0.603-2.216 0.024-0.599 0.603-0.599 1.584 0 2.187l0.072 0.072-8.034 8.039c-1.135 1.13-1.878 2.617-2.1 4.2l-1.217 1.453c-0.483 0.483-0.483 1.265 0 1.743 0.241 0.246 0.565 0.367 0.883 0.367 0.304 0 0.608-0.111 0.826-0.338l1.487-1.241c1.584-0.227 3.071-0.97 4.205-2.1l8.034-8.039 0.072 0.072c0.299 0.299 0.69 0.449 1.086 0.449 0.401 0 0.811-0.159 1.13-0.478 0.29-0.29 0.449-0.676 0.449-1.091s-0.159-0.801-0.449-1.096l-0.072-0.068 2.515-2.515c1.106-1.11 1.106-2.916-0.005-4.027zM13.568 18.997c-1.014 1.014-2.356 1.671-3.78 1.844-0.092 0.014-0.179 0.048-0.251 0.111l-1.622 1.361c-0.106 0.106-0.275 0.106-0.381 0-0.101-0.106-0.101-0.275 0.029-0.41l1.337-1.593c0.058-0.072 0.097-0.159 0.106-0.251 0.174-1.424 0.83-2.766 1.844-3.78l8.039-8.034 2.718 2.718-8.039 8.034z"
                                    }, null, -1),
                                    y("path", {
                                        d: "M5.804 24.979c-0.275 0.328-1.651 2.023-1.651 2.998 0 1.115 0.908 2.023 2.018 2.023 1.115 0 2.023-0.908 2.023-2.023 0-0.975-1.376-2.67-1.651-2.998-0.183-0.222-0.555-0.222-0.739 0z"
                                    }, null, -1)
                                ])
                            ]))
                        ])) : I("", !0),
                        y("div", wa, [
                            we(Ut, {
                                modelValue: F.value,
                                "onUpdate:modelValue": t[3] || (t[3] = (a)=>F.value = a),
                                showEyeDrop: l.showEyeDrop,
                                isEyeDropperUsing: p.value,
                                onOnInput: t[4] || (t[4] = (a)=>$e(!1)),
                                onOnChange: Ke,
                                onOnClickEyeDropper: Ie
                            }, null, 8, [
                                "modelValue",
                                "showEyeDrop",
                                "isEyeDropperUsing"
                            ]),
                            l.showAlpha ? (h(), B(qt, {
                                key: 0,
                                modelValue: le.value,
                                "onUpdate:modelValue": t[5] || (t[5] = (a)=>le.value = a),
                                onOnInput: je
                            }, null, 8, [
                                "modelValue"
                            ])) : I("", !0)
                        ])
                    ]),
                    j(y("div", ka, null, 512), [
                        [
                            J,
                            !1
                        ]
                    ]),
                    oe.value && l.showInputSet ? (h(), w("div", Ma, [
                        N.value !== "CMYK" ? (h(), B(Kt, {
                            key: 0,
                            modelValue: q.value,
                            "onUpdate:modelValue": [
                                t[6] || (t[6] = (a)=>q.value = a),
                                nt
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "RGB" ? (h(), B(Y, {
                            key: 1,
                            label: "R",
                            min: 0,
                            max: 255,
                            modelValue: n.value.find((a)=>a.select == !0).r,
                            "onUpdate:modelValue": [
                                t[7] || (t[7] = (a)=>n.value.find((s)=>s.select == !0).r = a),
                                t[8] || (t[8] = (a)=>fe(a, "r"))
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "RGB" ? (h(), B(Y, {
                            key: 2,
                            label: "G",
                            min: 0,
                            max: 255,
                            modelValue: n.value.find((a)=>a.select == !0).g,
                            "onUpdate:modelValue": [
                                t[9] || (t[9] = (a)=>n.value.find((s)=>s.select == !0).g = a),
                                t[10] || (t[10] = (a)=>fe(a, "g"))
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "RGB" ? (h(), B(Y, {
                            key: 3,
                            label: "B",
                            min: 0,
                            max: 255,
                            modelValue: n.value.find((a)=>a.select == !0).b,
                            "onUpdate:modelValue": [
                                t[11] || (t[11] = (a)=>n.value.find((s)=>s.select == !0).b = a),
                                t[12] || (t[12] = (a)=>fe(a, "b"))
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "HSL" ? (h(), B(Y, {
                            key: 4,
                            label: "H",
                            min: 0,
                            max: 360,
                            modelValue: H.h,
                            "onUpdate:modelValue": [
                                t[13] || (t[13] = (a)=>H.h = a),
                                Le
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "HSL" ? (h(), B(Y, {
                            key: 5,
                            label: "S",
                            min: 0,
                            max: 100,
                            modelValue: H.s,
                            "onUpdate:modelValue": [
                                t[14] || (t[14] = (a)=>H.s = a),
                                Le
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "HSL" ? (h(), B(Y, {
                            key: 6,
                            label: "L",
                            min: 0,
                            max: 100,
                            modelValue: H.l,
                            "onUpdate:modelValue": [
                                t[15] || (t[15] = (a)=>H.l = a),
                                Le
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "HSV" ? (h(), B(Y, {
                            key: 7,
                            label: "H",
                            min: 0,
                            max: 360,
                            modelValue: E.h,
                            "onUpdate:modelValue": [
                                t[16] || (t[16] = (a)=>E.h = a),
                                Ne
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "HSV" ? (h(), B(Y, {
                            key: 8,
                            label: "S",
                            min: 0,
                            max: 100,
                            modelValue: E.s,
                            "onUpdate:modelValue": [
                                t[17] || (t[17] = (a)=>E.s = a),
                                Ne
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "HSV" ? (h(), B(Y, {
                            key: 9,
                            label: "V",
                            min: 0,
                            max: 100,
                            modelValue: E.v,
                            "onUpdate:modelValue": [
                                t[18] || (t[18] = (a)=>E.v = a),
                                Ne
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "CMYK" ? (h(), B(Y, {
                            key: 10,
                            label: "C",
                            min: 0,
                            max: 100,
                            modelValue: S.c,
                            "onUpdate:modelValue": [
                                t[19] || (t[19] = (a)=>S.c = a),
                                be
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "CMYK" ? (h(), B(Y, {
                            key: 11,
                            label: "M",
                            min: 0,
                            max: 100,
                            modelValue: S.m,
                            "onUpdate:modelValue": [
                                t[20] || (t[20] = (a)=>S.m = a),
                                be
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "CMYK" ? (h(), B(Y, {
                            key: 12,
                            label: "Y",
                            min: 0,
                            max: 100,
                            modelValue: S.y,
                            "onUpdate:modelValue": [
                                t[21] || (t[21] = (a)=>S.y = a),
                                be
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        N.value == "CMYK" ? (h(), B(Y, {
                            key: 13,
                            label: "K",
                            min: 0,
                            max: 100,
                            modelValue: S.k,
                            "onUpdate:modelValue": [
                                t[22] || (t[22] = (a)=>S.k = a),
                                be
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0),
                        l.showAlpha ? (h(), B(Y, {
                            key: 14,
                            label: "A",
                            min: 0,
                            max: 100,
                            style: {
                                "margin-right": "2px"
                            },
                            modelValue: n.value.find((a)=>a.select == !0).a,
                            "onUpdate:modelValue": [
                                t[23] || (t[23] = (a)=>n.value.find((s)=>s.select == !0).a = a),
                                t[24] || (t[24] = (a)=>fe(a, "a"))
                            ]
                        }, null, 8, [
                            "modelValue"
                        ])) : I("", !0)
                    ])) : I("", !0),
                    l.showColorList ? (h(), B(ma, {
                        key: 2,
                        "color-list-count": l.colorListCount,
                        "hex-val": q.value,
                        onColorItemClick: rt,
                        iconClasses: l.iconClasses,
                        title: l.local.colorPalette
                    }, null, 8, [
                        "color-list-count",
                        "hex-val",
                        "iconClasses",
                        "title"
                    ])) : I("", !0),
                    l.showButtons ? (h(), w("div", xa, [
                        yt(e.$slots, "buttons", {
                            save: Oe,
                            cancel: Pe
                        }, ()=>[
                                y("button", {
                                    class: "ck-cp-buttons__button ck-cp-buttons__button--save",
                                    type: "button",
                                    onClick: Oe
                                }, X(l.local.btnSaveLabel), 1),
                                y("button", {
                                    class: "ck-cp-buttons__button ck-cp-buttons__button--cancel",
                                    type: "button",
                                    onClick: Pe
                                }, X(l.local.btnCancelLabel), 1)
                            ])
                    ])) : I("", !0)
                ], 10, ha));
        }
    });
});
export { $a as I, __tla };
