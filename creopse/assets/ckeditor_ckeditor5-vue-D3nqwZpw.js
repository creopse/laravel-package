import { s as I } from "./originjs_vite-plugin-federation-DDIHa9Ih.js";
import { i as O, a as j, u as T, g as U, b as K, c as L, d as B, e as N, l as M } from "./ckeditor_ckeditor5-integrations-common-Bz1Gquc2.js";
import { d as S } from "./lodash-es-Cmq2JFAj.js";
let de, oe, C, le;
let __tla = (async ()=>{
    const w = {}, g = {
        vue: {
            get: ()=>()=>d(new URL("__federation_shared_vue-DnR0Di-H.js", import.meta.url).href),
            import: !0
        },
        pinia: {
            get: ()=>()=>d(new URL("__federation_shared_pinia-DgyouPhH.js", import.meta.url).href),
            import: !0
        },
        react: {
            get: ()=>()=>d(new URL("__federation_shared_react-ChC52uSd.js", import.meta.url).href),
            import: !0
        },
        "react-dom": {
            get: ()=>()=>d(new URL("__federation_shared_react-dom-CqdHW4b_.js", import.meta.url).href),
            import: !0
        },
        zustand: {
            get: ()=>()=>d(new URL("__federation_shared_zustand-30ZsdF4n.js", import.meta.url).href),
            import: !0
        },
        ckeditor5: {
            get: ()=>()=>d(new URL("__federation_shared_ckeditor5-B2uFhOvH.js", import.meta.url).href),
            import: !0
        },
        "@ckeditor/ckeditor5-vue": {
            get: ()=>()=>d(new URL("__federation_shared_@ckeditor/ckeditor5-vue-BEiS1BWU.js", import.meta.url).href),
            import: !0
        }
    }, m = Object.create(null);
    C = async function(e, n = "default") {
        return m[e] ? new Promise((a)=>a(m[e])) : await P(e, n) || A(e);
    };
    async function d(e) {
        return w[e] ??= import(e).then(async (m)=>{
            await m.__tla;
            return m;
        }), w[e];
    }
    async function P(e, n) {
        let a = null;
        if (globalThis?.__federation_shared__?.[n]?.[e]) {
            const o = globalThis.__federation_shared__[n][e], u = g[e]?.requiredVersion;
            if (!!u) {
                const s = Object.keys(o).find((r)=>I(r, u));
                s && (a = await (await o[s].get())());
            } else {
                const s = Object.keys(o)[0];
                a = await (await o[s].get())();
            }
        }
        if (a) return V(a, e);
    }
    async function A(e) {
        if (g[e]?.import) {
            let n = await (await g[e].get())();
            return V(n, e);
        }
    }
    function V(e, n) {
        return typeof e.default == "function" ? (Object.keys(e).forEach((a)=>{
            a !== "default" && (e.default[a] = e[a]);
        }), m[n] = e.default, e.default) : (e.default && (e = Object.assign({}, e.default, e)), m[n] = e, e);
    }
    const y = await C("vue"), { version: q, defineComponent: x, useModel: F, ref: f, watch: E, onMounted: W, markRaw: z, onBeforeUnmount: Q, openBlock: G, createBlock: Y, resolveDynamicComponent: H, mergeModels: b, computed: J, watchEffect: X, shallowReadonly: _, toValue: Z } = await C("vue"), $ = N("vue", {
        version: "7.4.0",
        frameworkVersion: q
    });
    function ee(e) {
        return O(e.licenseKey) ? e : j(e, [
            $
        ]);
    }
    function te(e, n) {
        var a;
        if (k()) {
            const o = {
                ...e,
                roots: {
                    ...e.roots,
                    main: {
                        ...e.root,
                        ...(a = e.roots) == null ? void 0 : a.main,
                        initialData: n
                    }
                }
            };
            return delete o.root, delete o.initialData, o;
        }
        return {
            ...e,
            initialData: n
        };
    }
    function ne(e) {
        var n, a;
        return k() ? (a = (n = e.roots) == null ? void 0 : n.main) == null ? void 0 : a.initialData : e.initialData;
    }
    function k() {
        const e = U();
        return e ? !L(e.version) || K(e.version) || B(e.version).major >= 48 : !1;
    }
    let p, ae, re;
    p = "Lock from Vue integration (@ckeditor/ckeditor5-vue)";
    ae = 300;
    oe = x({
        name: "CKEditor",
        __name: "ckeditor",
        props: b({
            editor: {},
            config: {
                default: ()=>({})
            },
            tagName: {
                default: "div"
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            disableTwoWayDataBinding: {
                type: Boolean,
                default: !1
            }
        }, {
            modelValue: {
                type: String,
                default: ""
            },
            modelModifiers: {}
        }),
        emits: b([
            "ready",
            "destroy",
            "blur",
            "focus",
            "input",
            "update:modelValue"
        ], [
            "update:modelValue"
        ]),
        setup (e, { expose: n, emit: a }) {
            const o = F(e, "modelValue"), u = e, l = a, s = f(), r = f(), v = f();
            n({
                instance: r,
                lastEditorData: v
            }), E(o, (t)=>{
                r.value && t !== v.value && r.value.data.set(t);
            }), E(()=>u.disabled, (t)=>{
                t ? r.value.enableReadOnlyMode(p) : r.value.disableReadOnlyMode(p);
            });
            function D() {
                const t = window.CKEDITOR_VERSION;
                if (!t) return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
                const [i] = t.split(".").map(Number);
                i >= 42 || t.startsWith("0.0.0") || console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.");
            }
            function R(t) {
                const i = S((c)=>{
                    if (u.disableTwoWayDataBinding) return;
                    const h = v.value = t.data.get();
                    l("update:modelValue", h, c, t), l("input", h, c, t);
                }, ae, {
                    leading: !0
                });
                t.model.document.on("change:data", i), t.editing.view.document.on("focus", (c)=>{
                    l("focus", c, t);
                }), t.editing.view.document.on("blur", (c)=>{
                    l("blur", c, t);
                });
            }
            return D(), W(()=>{
                let t = ee(Object.assign({}, u.config));
                o.value && (t = te(t, o.value)), u.editor.create(s.value, t).then((i)=>{
                    r.value = z(i), R(i), o.value !== ne(t) && i.data.set(o.value), u.disabled && i.enableReadOnlyMode(p), l("ready", i);
                }).catch((i)=>{
                    console.error(i);
                });
            }), Q(()=>{
                r.value && (r.value.destroy(), r.value = void 0), l("destroy");
            }), (t, i)=>(G(), Y(H(e.tagName), {
                    ref_key: "element",
                    ref: s
                }, null, 512));
        }
    });
    re = (e)=>{
        const n = f(null), a = f(null), o = f(null), u = J(()=>n.value !== null);
        return X(async ()=>{
            const l = T();
            n.value = l, o.value = null, a.value = null;
            const s = ()=>n.value !== l;
            try {
                const r = await e();
                s() || (o.value = r);
            } catch (r) {
                console.error(r), s() || (a.value = r);
            } finally{
                s() || (n.value = null);
            }
        }), {
            loading: _(u),
            data: _(o),
            error: _(a)
        };
    };
    le = function(e) {
        return re(()=>M(Z(e)));
    };
    if (!y.version || !y.version.startsWith("3.")) throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");
    de = {
        install (e) {
            e.component("Ckeditor", oe);
        }
    };
})();
export { de as C, oe as _, C as i, le as u, __tla };
