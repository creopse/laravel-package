import { s as Ke } from "./originjs_vite-plugin-federation-DDIHa9Ih.js";
import { g as Y, a as Fe, b as Se, c as $e, d as Pe, e as xe, i as ze, f as He, u as qe, h as Ye, l as Ge } from "./ckeditor_ckeditor5-integrations-common-AOKHkcZx.js";
import { d as ye } from "./lodash-es-i4An1HvX.js";
let mt, Ie, ue, Dt, Ut, Et, Re, jt;
let __tla = (async ()=>{
    const be = {}, ie = {
        vue: {
            get: ()=>()=>F(new URL("__federation_shared_vue-DnR0Di-H.js", import.meta.url).href),
            import: !0
        },
        pinia: {
            get: ()=>()=>F(new URL("__federation_shared_pinia-Dst4ETze.js", import.meta.url).href),
            import: !0
        },
        react: {
            get: ()=>()=>F(new URL("__federation_shared_react-Cf2-7iNb.js", import.meta.url).href),
            import: !0
        },
        "react-dom": {
            get: ()=>()=>F(new URL("__federation_shared_react-dom-BZFw873e.js", import.meta.url).href),
            import: !0
        },
        zustand: {
            get: ()=>()=>F(new URL("__federation_shared_zustand-8Hy1Or7u.js", import.meta.url).href),
            import: !0
        },
        ckeditor5: {
            get: ()=>()=>F(new URL("__federation_shared_ckeditor5-CUu4i9_-.js", import.meta.url).href),
            import: !0
        },
        "@ckeditor/ckeditor5-vue": {
            get: ()=>()=>F(new URL("__federation_shared_@ckeditor/ckeditor5-vue-BF2chI1O.js", import.meta.url).href),
            import: !0
        }
    }, G = Object.create(null);
    Re = async function(e, o = "default") {
        return G[e] ? new Promise((t)=>t(G[e])) : await Qe(e, o) || Je(e);
    };
    async function F(e) {
        return be[e] ??= import(e).then(async (m)=>{
            await m.__tla;
            return m;
        }), be[e];
    }
    async function Qe(e, o) {
        let t = null;
        if (globalThis?.__federation_shared__?.[o]?.[e]) {
            const n = globalThis.__federation_shared__[o][e], r = ie[e]?.requiredVersion;
            if (!!r) {
                const u = Object.keys(n).find((a)=>Ke(a, r));
                u && (t = await (await n[u].get())());
            } else {
                const u = Object.keys(n)[0];
                t = await (await n[u].get())();
            }
        }
        if (t) return _e(t, e);
    }
    async function Je(e) {
        if (ie[e]?.import) {
            let o = await (await ie[e].get())();
            return _e(o, e);
        }
    }
    function _e(e, o) {
        return typeof e.default == "function" ? (Object.keys(e).forEach((t)=>{
            t !== "default" && (e.default[t] = e[t]);
        }), G[o] = e.default, e.default) : (e.default && (e = Object.assign({}, e.default, e)), G[o] = e, e);
    }
    const ge = await Re("vue"), { Fragment: Xe, computed: P, createBlock: Z, createCommentVNode: Ze, createElementBlock: we, createVNode: Ee, defineComponent: H, getCurrentInstance: Ce, markRaw: Q, mergeModels: J, mergeProps: et, nextTick: tt, onBeforeUnmount: se, onMounted: De, openBlock: x, ref: y, renderList: ot, renderSlot: nt, resolveDynamicComponent: rt, shallowReadonly: re, toValue: E, unref: T, useModel: le, version: at, watch: S, watchEffect: ee } = await Re("vue");
    var it = Ye("vue", {
        version: "8.2.0",
        frameworkVersion: at
    });
    function ke(e) {
        return ze(e.licenseKey) ? e : He(e, [
            it
        ]);
    }
    function Ae(e) {
        var o, t, n;
        const r = (o = e.ui) === null || o === void 0 ? void 0 : o.element;
        r?.isConnected && r.remove();
        const i = (t = e.ui) === null || t === void 0 || (t = t.view) === null || t === void 0 || (t = t.body) === null || t === void 0 ? void 0 : t._bodyCollectionContainer;
        i?.isConnected && i.remove();
        const u = (n = e.editing) === null || n === void 0 ? void 0 : n.view;
        if (u) for (const a of u.domRoots.values())a instanceof HTMLElement && (a.removeAttribute("contenteditable"), a.removeAttribute("role"), a.removeAttribute("aria-label"), a.removeAttribute("aria-multiline"), a.removeAttribute("spellcheck"), a.classList.remove("ck", "ck-content", "ck-editor__editable", "ck-rounded-corners", "ck-editor__editable_inline", "ck-blurred", "ck-focused"));
    }
    var Oe = Symbol.for("vue-editor-watchdog");
    function Te(e, o, t) {
        return o ? e : lt(e, t);
    }
    function lt(e, o) {
        const { EditorWatchdog: t } = e;
        if (!t) return e;
        const n = new t(e, o);
        return n.setCreator(async (...r)=>{
            const i = await e.create(...r);
            return i[Oe] = n, i;
        }), {
            ...e,
            editorName: e.editorName,
            create: async (...r)=>(await n.create(...r), n.editor)
        };
    }
    function je(e) {
        var o;
        return (o = e[Oe]) !== null && o !== void 0 ? o : null;
    }
    function Ue(e, { isUnmounted: o, onError: t }) {
        const n = je(e);
        return n ? (n.on("error", (r, { error: i, causesRestart: u })=>{
            o() || t({
                error: i,
                causesRestart: u,
                watchdog: n,
                editor: n.editor
            });
        }), n) : null;
    }
    async function X(e) {
        const o = je(e);
        o ? await o.destroy() : await e.destroy();
    }
    function de() {
        const e = y(!1);
        return se(()=>{
            e.value = !0;
        }), e;
    }
    function ut(e, o) {
        S(e, (t)=>{
            if (!t) return;
            const { document: n } = t.editing.view;
            n.on("focus", (r)=>o("focus", r, t)), n.on("blur", (r)=>o("blur", r, t)), o("ready", t), t.once("destroy", ()=>{
                o("destroy", t);
            });
        }, {
            flush: "post"
        });
    }
    var st = 300;
    function dt({ disableTwoWayDataBinding: e, emit: o, instance: t, model: n }) {
        const r = y(), i = de();
        function u(a, f = null) {
            const c = r.value = a.data.get();
            o("update:modelValue", c, f, a), o("input", c, f, a);
        }
        return S(n, (a)=>{
            t.value && a !== r.value && t.value.data.set(a);
        }), S(t, (a, f, c)=>{
            if (!a) return;
            const h = ye((j)=>{
                E(e) || i.value || u(a, j);
            }, st, {
                leading: !0
            });
            a.model.document.on("change:data", h), a.once("destroy", ()=>{
                h.cancel();
            }), c(()=>{
                h.cancel();
            });
        }), {
            lastEditorData: r,
            assignEditorDataToModel: u
        };
    }
    var he = "Lock from Vue integration (@ckeditor/ckeditor5-vue)";
    function Be(e, o) {
        ee(()=>{
            const t = E(e), n = !!E(o);
            t && ct(t, n);
        }, {
            flush: "sync"
        });
    }
    function ct(e, o) {
        o ? e.enableReadOnlyMode(he) : e.disableReadOnlyMode(he);
    }
    function ft() {
        switch(xe("42.0.0")){
            case null:
                console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
                break;
            case -1:
                console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.");
                break;
        }
    }
    function Ve(e) {
        return !e.editorName || e.editorName === "ClassicEditor";
    }
    function vt({ Editor: e, config: o, defaultElementName: t }) {
        return P(()=>{
            const n = E(o);
            if (!Ve(E(e))) {
                var r, i, u;
                const a = (r = (i = n.roots) === null || i === void 0 || (i = i.main) === null || i === void 0 ? void 0 : i.element) !== null && r !== void 0 ? r : (u = n.root) === null || u === void 0 ? void 0 : u.element;
                if (a) return a;
            }
            return E(t);
        });
    }
    function Me(e) {
        if (typeof HTMLElement < "u" && e instanceof HTMLElement) throw new Error("An HTMLElement cannot be used as an editor element definition. Please pass a string or an object definition.");
        return typeof e != "object" || e === null ? {
            name: e
        } : e;
    }
    let We;
    We = H({
        __name: "DynamicElement",
        props: {
            definition: {
                default: null
            }
        },
        setup (e, { expose: o }) {
            const t = e, n = y();
            o({
                elementRef: n
            });
            const r = P(()=>{
                var i;
                return Me((i = t.definition) !== null && i !== void 0 ? i : "div");
            });
            return (i, u)=>(x(), Z(rt(r.value.name), et({
                    ref_key: "elementRef",
                    ref: n
                }, r.value.attributes, {
                    class: r.value.classes,
                    style: r.value.styles
                }), null, 16, [
                    "class",
                    "style"
                ]));
        }
    });
    mt = H({
        name: "CKEditor",
        __name: "Ckeditor",
        props: J({
            editor: {},
            config: {
                default: ()=>({})
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            disableTwoWayDataBinding: {
                type: Boolean,
                default: !1
            },
            watchdogConfig: {},
            disableWatchdog: {
                type: Boolean,
                default: !1
            },
            tagName: {
                default: "div"
            }
        }, {
            modelValue: {
                type: String,
                default: ""
            },
            modelModifiers: {}
        }),
        emits: J([
            "ready",
            "destroy",
            "blur",
            "focus",
            "input",
            "update:modelValue",
            "error"
        ], [
            "update:modelValue"
        ]),
        setup (e, { expose: o, emit: t }) {
            const n = le(e, "modelValue"), r = e, i = t, u = Ce(), a = ()=>{
                var C;
                return !!(!(u == null || (C = u.vnode.props) === null || C === void 0) && C.onError);
            }, f = y(), c = y(), h = de(), { lastEditorData: j, assignEditorDataToModel: U } = dt({
                disableTwoWayDataBinding: ()=>r.disableTwoWayDataBinding,
                model: n,
                emit: i,
                instance: c
            }), W = vt({
                Editor: ()=>r.editor,
                config: ()=>r.config,
                defaultElementName: ()=>r.tagName
            });
            return ft(), ut(c, i), Be(c, ()=>r.disabled), o({
                instance: c,
                lastEditorData: j
            }), De(async ()=>{
                const C = Y();
                let b = ke({
                    ...r.config
                }), p = n.value;
                n.value && (b = Fe(b, n.value, !0));
                const _ = Te(r.editor, r.disableWatchdog, r.watchdogConfig);
                try {
                    var I;
                    const A = (I = f.value) === null || I === void 0 ? void 0 : I.elementRef;
                    if (!A) throw new Error("Editor element is not available. Make sure the component is mounted.");
                    const K = await (C.elementConfigAttachment ? _.create(Se(_, A, b)) : _.create(A, b));
                    if (h.value) {
                        await X(K);
                        return;
                    }
                    n.value !== p && K.data.set(n.value);
                    const $ = Ue(K, {
                        isUnmounted: ()=>h.value,
                        onError: ({ error: L, watchdog: te, editor: oe, causesRestart: q })=>{
                            a() || console.error(L), i("error", L, {
                                phase: "runtime",
                                watchdog: te,
                                editor: oe,
                                causesRestart: q
                            });
                        }
                    });
                    $ && $.on("restart", ()=>{
                        try {
                            c.value && Ve(_) && Ae(c.value);
                        } catch (L) {
                            console.error(L);
                        }
                        h.value || (c.value = Q($.editor), U(c.value));
                    }), c.value = Q(K);
                } catch (A) {
                    if (h.value) return;
                    a() || console.error(A), i("error", A, {
                        phase: "initialization"
                    });
                }
            }), se(async ()=>{
                const C = c.value;
                C && (c.value = void 0, await X(C));
            }), (C, b)=>(x(), Z(We, {
                    ref_key: "editorElementRef",
                    ref: f,
                    definition: T(W)
                }, null, 8, [
                    "definition"
                ]));
        }
    });
    ue = H({
        name: "CkeditorElement",
        __name: "CkeditorElement",
        props: {
            editor: {
                default: null
            },
            element: {
                default: "toolbar"
            }
        },
        setup (e) {
            const o = e, t = y();
            return ee((n)=>{
                var r, i;
                const u = o.editor, a = t.value;
                if (!u || !a) return;
                const f = o.element === "menuBar" ? (r = u.ui.view.menuBarView) === null || r === void 0 ? void 0 : r.element : (i = u.ui.view.toolbar) === null || i === void 0 ? void 0 : i.element;
                f && (a.appendChild(f), n(()=>{
                    a.contains(f) && a.removeChild(f);
                }));
            }, {
                flush: "post"
            }), (n, r)=>(x(), we("div", {
                    ref_key: "uiRef",
                    ref: t
                }, null, 512));
        }
    });
    let bt;
    bt = "$rootEditableOptions";
    Ie = H({
        name: "CkeditorMultiRootEditable",
        __name: "MultiRootEditorEditable",
        props: {
            id: {
                default: void 0
            },
            rootName: {},
            editor: {
                default: null
            },
            editableOptions: {
                default: null
            }
        },
        setup (e) {
            const o = e, t = y(), n = P(()=>{
                var u, a;
                return (u = (a = o.editor) === null || a === void 0 ? void 0 : a.model.document.getRoot(o.rootName)) !== null && u !== void 0 ? u : null;
            }), r = P(()=>{
                var u;
                const a = n.value;
                return a ? {
                    ...(u = o.editableOptions) !== null && u !== void 0 ? u : a.getAttribute(bt)
                } : null;
            }), i = P(()=>{
                var u, a;
                const f = r.value;
                if (!f) return null;
                const c = Me((u = f.element) !== null && u !== void 0 ? u : {
                    name: "div"
                });
                return {
                    ...c,
                    attributes: {
                        ...c.attributes,
                        id: (a = o.id) !== null && a !== void 0 ? a : o.rootName
                    }
                };
            });
            return ee((u)=>{
                var a;
                const f = o.editor, c = n.value, h = r.value, j = (a = t.value) === null || a === void 0 ? void 0 : a.elementRef;
                if (!f || !c || !h || !j) return;
                f.ui.getEditableElement(o.rootName) && f.detachEditable(c);
                const U = f.ui.view.createEditable(o.rootName, j, h.label);
                U.isInlineRoot = !f.model.schema.checkChild(c, "$block"), f.ui.addEditable(U, h.placeholder), f.editing.view.forceRender(), u(()=>{
                    f.state !== "destroyed" && f.model.document.getRoot(o.rootName) === c && f.detachEditable(c);
                });
            }, {
                flush: "post"
            }), (u, a)=>i.value ? (x(), Z(We, {
                    key: 0,
                    ref_key: "editorElementRef",
                    ref: t,
                    definition: i.value
                }, null, 8, [
                    "definition"
                ])) : Ze("", !0);
        }
    });
    var gt = 300, ae = "The editor was destroyed before it became ready.";
    Et = function(e) {
        const o = de(), t = y(), n = y(V(E(e.data))), r = y(M(E(e.rootsAttributes), n.value)), i = y(Object.keys(n.value)), u = y(!1), a = y(), f = y();
        let c = [];
        Be(t, ()=>E(e.disabled)), S(()=>E(e.data), (l)=>{
            t.value && a.value && N(l, a.value) || $(V(l));
        }, {
            deep: !0
        }), S(()=>E(e.rootsAttributes), (l)=>{
            const d = z(l), m = M(l, n.value), s = t.value ? _t(r.value, m, n.value) : m, g = !!t.value && !N(s, d);
            if (t.value && f.value && N(s, f.value)) {
                g && (L(s), A(null, t.value));
                return;
            }
            L(s), g && A(null, t.value);
        }, {
            deep: !0
        }), S([
            n,
            r
        ], ()=>{
            const l = t.value;
            !l || !u.value || (u.value = !1, U(l));
        }, {
            deep: !0,
            flush: "post"
        }), S(t, async (l, d, m)=>{
            var s;
            if (!l) return;
            let g = !0;
            const v = l, O = v.model.document, R = v.editing.view.document, D = ye((w)=>{
                b(v, w);
            }, gt, {
                leading: !0
            }), k = (w)=>C(v, w, D), ce = (w, B)=>p(v, w, B), fe = (w, B)=>_(v, w, B), ve = (w)=>{
                var B;
                return (B = e.onFocus) === null || B === void 0 ? void 0 : B.call(e, w, v);
            }, me = (w)=>{
                var B;
                return (B = e.onBlur) === null || B === void 0 ? void 0 : B.call(e, w, v);
            }, Ne = ()=>{
                var w;
                D.cancel(), (w = e.onDestroy) === null || w === void 0 || w.call(e, v);
            };
            O.on("change:data", k), v.on("addRoot", ce), v.on("detachRoot", fe), R.on("focus", ve), R.on("blur", me), v.once("destroy", Ne), m(()=>{
                g = !1, O.off("change:data", k), v.off("addRoot", ce), v.off("detachRoot", fe), R.off("focus", ve), R.off("blur", me), D.cancel();
            }), await tt();
            !g || o.value || t.value !== v || ((s = e.onReady) === null || s === void 0 || s.call(e, v), Le(v));
        }, {
            flush: "post"
        }), De(h), se(async ()=>{
            const l = t.value;
            ne(new Error(ae)), l && (t.value = void 0, pe(l), await X(l));
        });
        async function h() {
            const l = V(n.value), d = z(r.value), m = Te(E(e.editor), !!E(e.disableWatchdog), E(e.watchdogConfig));
            try {
                const s = await j(m, l, d);
                if (o.value) {
                    ne(new Error(ae)), pe(s), await X(s);
                    return;
                }
                const g = Ue(s, {
                    isUnmounted: ()=>o.value,
                    onError: ({ error: v, watchdog: O, editor: R, causesRestart: D })=>{
                        K(v, {
                            phase: "runtime",
                            watchdog: O,
                            editor: R,
                            causesRestart: D
                        });
                    }
                });
                g && g.on("restart", ()=>{
                    try {
                        t.value && Ae(t.value);
                    } catch (O) {
                        console.error(O);
                    }
                    if (o.value || !g.editor) return;
                    const v = g.editor;
                    t.value = Q(v), W(v), I(null, v), A(null, v);
                }), t.value = Q(s), N(n.value, l) && N(r.value, d) || U(s), W(s);
            } catch (s) {
                ne(s);
                if (o.value) return;
                K(s, {
                    phase: "initialization"
                });
            }
        }
        async function j(l, d, m) {
            let s = $e(m, {
                ...E(e.config)
            });
            s = ke(s);
            const { initialData: g, ...v } = Pe(d, s), O = Y(), R = l;
            return await (O.elementConfigAttachment ? R.create({
                ...v,
                initialData: g
            }) : R.create(g, v));
        }
        function U(l) {
            const d = V(n.value), m = M(r.value, d), s = l.getFullData(), g = M(l.getRootsAttributes(), s), { addedKeys: v, removedKeys: O } = wt(s, d), R = Object.keys(d).filter((k)=>s[k] !== void 0 && s[k] !== d[k]), D = Object.keys(m).filter((k)=>s[k] !== void 0 && !N(g[k], m[k]));
            r.value = m, l.model.change((k)=>{
                ht(l, v, d, m), pt(l, O), R.length && yt(l, R, d), D.length && Rt(l, k, D, m);
            });
        }
        function W(l) {
            n.value = V(l.getFullData()), r.value = M(l.getRootsAttributes(), n.value), i.value = Object.keys(n.value);
        }
        function C(l, d, m) {
            var s;
            m(d), (s = e.onChange) === null || s === void 0 || s.call(e, d, l);
        }
        function b(l, d) {
            if (E(e.disableTwoWayDataBinding) || o.value) return;
            const m = V(l.getFullData()), s = M(l.getRootsAttributes(), m), g = !N(n.value, m), v = !N(r.value, s);
            n.value = m, r.value = s, i.value = Object.keys(m), a.value = V(m), f.value = z(s), g && I(d, l), v && A(d, l);
        }
        function p(l, d, m) {
            const s = m.rootName;
            E(e.disableTwoWayDataBinding) || (n.value = {
                ...n.value,
                [s]: l.getData({
                    rootName: s
                })
            }, r.value = M({
                ...r.value,
                [s]: l.getRootAttributes(s)
            }, n.value), I(d, l), A(d, l)), i.value = Ct([
                ...i.value,
                s
            ]);
        }
        function _(l, d, m) {
            const s = m.rootName;
            if (!E(e.disableTwoWayDataBinding)) {
                const g = {
                    ...n.value
                }, v = {
                    ...r.value
                };
                delete g[s], delete v[s], n.value = g, r.value = v, I(d, l), A(d, l);
            }
            i.value = i.value.filter((g)=>g !== s);
        }
        function I(l, d) {
            var m;
            a.value = V(n.value), (m = e.onUpdateData) === null || m === void 0 || m.call(e, V(n.value), l, d);
        }
        function A(l, d) {
            var m;
            f.value = z(r.value), (m = e.onUpdateRootsAttributes) === null || m === void 0 || m.call(e, z(r.value), l, d);
        }
        function K(l, d) {
            e.onError ? e.onError(l, d) : console.error(l);
        }
        function $(l) {
            u.value = !0, n.value = V(l), r.value = M(r.value, n.value), t.value || (i.value = Object.keys(n.value));
        }
        function L(l) {
            u.value = !0, r.value = M(l, n.value);
        }
        async function te({ name: l, data: d = "", attributes: m = {}, editableOptions: s, ...g }) {
            const v = await q(), O = Y();
            v.model.change(()=>{
                const R = {
                    ...m,
                    ...s && {
                        $rootEditableOptions: s
                    }
                };
                for (const k of Object.keys(R))v.registerRootAttribute(k);
                let D = {
                    isUndoable: !0,
                    ...g
                };
                O.rootsConfigEntry ? D = {
                    ...D,
                    initialData: d,
                    modelAttributes: R
                } : D = {
                    ...D,
                    data: d,
                    attributes: R
                }, v.addRoot(l, D);
            });
        }
        async function oe(l) {
            const d = await q();
            d.model.change(()=>{
                d.detachRoot(l, !0);
            });
        }
        function q() {
            return t.value ? Promise.resolve(t.value) : o.value ? Promise.reject(new Error(ae)) : new Promise((l, d)=>{
                c.push({
                    resolve: l,
                    reject: d
                });
            });
        }
        function Le(l) {
            c.forEach(({ resolve: d })=>d(l)), c = [];
        }
        function ne(l) {
            c.forEach(({ reject: d })=>d(l)), c = [];
        }
        return {
            instance: t,
            roots: i,
            data: n,
            rootsAttributes: r,
            setData: $,
            setRootsAttributes: L,
            addRoot: te,
            removeRoot: oe
        };
    };
    function ht(e, o, t, n) {
        const r = Y();
        for (const i of o){
            const u = {
                ...e.model.document.getRoot(i) && e.getRootAttributes(i),
                ...n[i]
            }, a = t[i];
            for (const c of Object.keys(u))e.registerRootAttribute(c);
            let f = {
                isUndoable: !0
            };
            r.rootsConfigEntry ? f = {
                ...f,
                initialData: a,
                modelAttributes: u
            } : f = {
                ...f,
                data: a,
                attributes: u
            }, e.addRoot(i, f);
        }
    }
    function pt(e, o) {
        for (const t of o)e.detachRoot(t, !0);
    }
    function yt(e, o, t) {
        const n = o.reduce((r, i)=>({
                ...r,
                [i]: t[i]
            }), Object.create(null));
        e.data.set(n, {
            suppressErrorInCollaboration: !0
        });
    }
    function Rt(e, o, t, n) {
        for (const r of t){
            const i = n[r];
            for (const a of Object.keys(i))e.registerRootAttribute(a);
            const u = e.model.document.getRoot(r);
            u && o.setAttributes(i, u);
        }
    }
    function pe(e) {
        const o = (t)=>{
            t.name && !e.editing.view.getDomRoot(t.name) && e.editing.view.attachDomRoot(document.createElement("div"), t.name);
        };
        Object.values(e.ui.view.editables).forEach(o);
    }
    function M(e, o) {
        const t = e ?? {};
        return Object.keys(o).reduce((n, r)=>(n[r] = {
                ...t[r]
            }, n), Object.create(null));
    }
    function _t(e, o, t) {
        return Object.keys(t).reduce((n, r)=>(n[r] = {
                ...e[r],
                ...o[r]
            }, n), Object.create(null));
    }
    function V(e) {
        return {
            ...e
        };
    }
    function z(e) {
        return Object.keys(e ?? {}).reduce((o, t)=>(o[t] = {
                ...e[t]
            }, o), Object.create(null));
    }
    function wt(e, o) {
        const t = Object.keys(e), n = Object.keys(o);
        return {
            addedKeys: n.filter((r)=>!t.includes(r)),
            removedKeys: t.filter((r)=>!n.includes(r))
        };
    }
    function N(e, o) {
        return JSON.stringify(e) === JSON.stringify(o);
    }
    function Ct(e) {
        return [
            ...new Set(e)
        ];
    }
    Dt = H({
        name: "CkeditorMultiRoot",
        __name: "CkeditorMultiRoot",
        props: J({
            editor: {},
            config: {
                default: ()=>({})
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            disableTwoWayDataBinding: {
                type: Boolean,
                default: !1
            },
            watchdogConfig: {},
            disableWatchdog: {
                type: Boolean,
                default: !1
            }
        }, {
            modelValue: {
                default: ()=>({})
            },
            modelModifiers: {},
            rootsAttributes: {
                default: ()=>({})
            },
            rootsAttributesModifiers: {}
        }),
        emits: J([
            "ready",
            "destroy",
            "blur",
            "focus",
            "input",
            "update:modelValue",
            "update:rootsAttributes",
            "error",
            "change"
        ], [
            "update:modelValue",
            "update:rootsAttributes"
        ]),
        setup (e, { expose: o, emit: t }) {
            const n = le(e, "modelValue"), r = le(e, "rootsAttributes"), i = e, u = t, a = Ce(), f = ()=>{
                var b;
                return !!(!(a == null || (b = a.vnode.props) === null || b === void 0) && b.onError);
            }, { instance: c, roots: h, data: j, rootsAttributes: U, addRoot: W, removeRoot: C } = Et({
                editor: ()=>i.editor,
                config: ()=>i.config,
                data: n,
                rootsAttributes: r,
                disabled: ()=>i.disabled,
                disableWatchdog: ()=>i.disableWatchdog,
                disableTwoWayDataBinding: ()=>i.disableTwoWayDataBinding,
                watchdogConfig: ()=>i.watchdogConfig,
                onReady: (b)=>u("ready", b),
                onDestroy: (b)=>u("destroy", b),
                onFocus: (b, p)=>u("focus", b, p),
                onBlur: (b, p)=>u("blur", b, p),
                onChange: (b, p)=>u("change", b, p),
                onUpdateData: (b, p, _)=>{
                    u("update:modelValue", b, p, _), u("input", b, p, _);
                },
                onUpdateRootsAttributes: (b, p, _)=>{
                    u("update:rootsAttributes", b, p, _);
                },
                onError: (b, p)=>{
                    f() || console.error(b), u("error", b, p);
                }
            });
            return o({
                instance: c,
                roots: h,
                data: j,
                rootsAttributes: U,
                addRoot: W,
                removeRoot: C
            }), (b, p)=>nt(b.$slots, "default", {
                    editor: T(c),
                    roots: T(h),
                    data: T(j),
                    attributes: T(U),
                    rootsAttributes: T(U),
                    addRoot: T(W),
                    removeRoot: T(C)
                }, ()=>[
                        Ee(ue, {
                            editor: T(c),
                            element: "menuBar"
                        }, null, 8, [
                            "editor"
                        ]),
                        Ee(ue, {
                            editor: T(c)
                        }, null, 8, [
                            "editor"
                        ]),
                        (x(!0), we(Xe, null, ot(T(h), (_)=>(x(), Z(Ie, {
                                id: _,
                                key: _,
                                "root-name": _,
                                editor: T(c)
                            }, null, 8, [
                                "id",
                                "root-name",
                                "editor"
                            ]))), 128))
                    ]);
        }
    });
    var kt = (e)=>{
        const o = y(null), t = y(null), n = y(null), r = P(()=>o.value !== null);
        return ee(async ()=>{
            const i = qe();
            o.value = i, n.value = null, t.value = null;
            const u = ()=>o.value !== i;
            try {
                const a = await e();
                u() || (n.value = a);
            } catch (a) {
                console.error(a), u() || (t.value = a);
            } finally{
                u() || (o.value = null);
            }
        }), {
            loading: re(r),
            data: re(n),
            error: re(t)
        };
    };
    jt = function(e) {
        return kt(()=>Ge(E(e)));
    };
    if (!ge.version || !ge.version.startsWith("3.")) throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");
    Ut = {
        install (e) {
            e.component("Ckeditor", mt), e.component("CkeditorElement", ue), e.component("CkeditorMultiRoot", Dt), e.component("CkeditorMultiRootEditable", Ie);
        }
    };
})();
export { mt as C, Ie as M, ue as a, Dt as b, Ut as c, Et as d, Re as i, jt as u, __tla };
