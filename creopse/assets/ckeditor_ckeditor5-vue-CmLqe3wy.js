import { s as k } from "./originjs_vite-plugin-federation-DDIHa9Ih.js";
import { i as j, a as T, c as C } from "./ckeditor_ckeditor5-integrations-common-ZttWYWgN.js";
import { d as D } from "./lodash-es-DCTpQg3n.js";
let Z, E;
let __tla = (async ()=>{
    const h = {}, g = {
        vue: {
            get: ()=>()=>c(new URL("__federation_shared_vue-DsvjpCcB.js", import.meta.url).href),
            import: !0
        },
        pinia: {
            get: ()=>()=>c(new URL("__federation_shared_pinia-Bx-sOvfJ.js", import.meta.url).href),
            import: !0
        },
        react: {
            get: ()=>()=>c(new URL("__federation_shared_react-BRnFeiqf.js", import.meta.url).href),
            import: !0
        },
        "react-dom": {
            get: ()=>()=>c(new URL("__federation_shared_react-dom-Bbi4WoS7.js", import.meta.url).href),
            import: !0
        },
        zustand: {
            get: ()=>()=>c(new URL("__federation_shared_zustand-Dn3A-m2-.js", import.meta.url).href),
            import: !0
        }
    }, f = Object.create(null);
    E = async function(e, i = "default") {
        return f[e] ? new Promise((n)=>n(f[e])) : await I(e, i) || U(e);
    };
    async function c(e) {
        return h[e] ??= import(e).then(async (m)=>{
            await m.__tla;
            return m;
        }), h[e];
    }
    async function I(e, i) {
        let n = null;
        if (globalThis?.__federation_shared__?.[i]?.[e]) {
            const r = globalThis.__federation_shared__[i][e], s = g[e]?.requiredVersion;
            if (!!s) {
                const l = Object.keys(r).find((a)=>k(a, s));
                l && (n = await (await r[l].get())());
            } else {
                const l = Object.keys(r)[0];
                n = await (await r[l].get())();
            }
        }
        if (n) return V(n, e);
    }
    async function U(e) {
        if (g[e]?.import) {
            let i = await (await g[e].get())();
            return V(i, e);
        }
    }
    function V(e, i) {
        return typeof e.default == "function" ? (Object.keys(e).forEach((n)=>{
            n !== "default" && (e.default[n] = e[n]);
        }), f[i] = e.default, e.default) : (e.default && (e = Object.assign({}, e.default, e)), f[i] = e, e);
    }
    const w = await E("vue"), { version: K, defineComponent: N, mergeModels: y, useModel: L, ref: p, watch: b, onMounted: B, markRaw: M, onBeforeUnmount: P, openBlock: q, createBlock: S, resolveDynamicComponent: W, computed: H, watchEffect: J, shallowReadonly: Q, toValue: X } = await E("vue");
    const A = C("vue", {
        version: "7.3.0",
        frameworkVersion: K
    });
    function F(e) {
        return j(e.licenseKey) ? e : T(e, [
            A
        ]);
    }
    let _, x;
    _ = "Lock from Vue integration (@ckeditor/ckeditor5-vue)";
    x = 300;
    Z = N({
        name: "CKEditor",
        __name: "ckeditor",
        props: y({
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
        emits: y([
            "ready",
            "destroy",
            "blur",
            "focus",
            "input",
            "update:modelValue"
        ], [
            "update:modelValue"
        ]),
        setup (e, { expose: i, emit: n }) {
            const r = L(e, "modelValue"), s = e, u = n, l = p(), a = p(), m = p();
            i({
                instance: a,
                lastEditorData: m
            }), b(r, (t)=>{
                a.value && t !== m.value && a.value.data.set(t);
            }), b(()=>s.disabled, (t)=>{
                t ? a.value.enableReadOnlyMode(_) : a.value.disableReadOnlyMode(_);
            });
            function R() {
                const t = window.CKEDITOR_VERSION;
                if (!t) return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
                const [o] = t.split(".").map(Number);
                o >= 42 || t.startsWith("0.0.0") || console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.");
            }
            function O(t) {
                const o = D((d)=>{
                    if (s.disableTwoWayDataBinding) return;
                    const v = m.value = t.data.get();
                    u("update:modelValue", v, d, t), u("input", v, d, t);
                }, x, {
                    leading: !0
                });
                t.model.document.on("change:data", o), t.editing.view.document.on("focus", (d)=>{
                    u("focus", d, t);
                }), t.editing.view.document.on("blur", (d)=>{
                    u("blur", d, t);
                });
            }
            return R(), B(()=>{
                const t = F(Object.assign({}, s.config));
                r.value && (t.initialData = r.value), s.editor.create(l.value, t).then((o)=>{
                    a.value = M(o), O(o), r.value !== t.initialData && o.data.set(r.value), s.disabled && o.enableReadOnlyMode(_), u("ready", o);
                }).catch((o)=>{
                    console.error(o);
                });
            }), P(()=>{
                a.value && (a.value.destroy(), a.value = void 0), u("destroy");
            }), (t, o)=>(q(), S(W(t.tagName), {
                    ref_key: "element",
                    ref: l
                }, null, 512));
        }
    });
    if (!w.version || !w.version.startsWith("3.")) throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");
})();
export { Z as _, E as i, __tla };
