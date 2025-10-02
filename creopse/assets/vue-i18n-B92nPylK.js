import { i as Rt, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-CmLqe3wy.js";
import { e as S, v as M, k as Ve, n as pt, h as v, d as L, f as y, a as d, b as k, c as C, g as ge, i as X, x as Q, y as J, j as z, m as Y, l as K } from "./intlify_shared-Da_nV2Jq.js";
import { D as vt, u as w, c as Pt, a as Ee, b as Oe, i as q, A as Ft, s as Ct, g as St, N as Dt, f as Ue, d as Ie, C as yt, p as be, t as de, M as Te, e as Ne, h as Le, j as Re, n as pe, k as At, l as kt, m as Mt, r as ht, o as Vt, q as Ut, v as xt, w as wt, x as Wt, y as Yt } from "./intlify_core-base-B2UT9_fK.js";
import { c as Gt } from "./intlify_message-compiler-C6DahoL3.js";
let kn, ie;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const { createVNode: jt, Text: Ht, computed: W, watch: te, getCurrentInstance: se, ref: Bt, shallowRef: $t, Fragment: xe, defineComponent: oe, h: we, effectScope: Xt, inject: Jt, onMounted: Kt, onUnmounted: qt, onBeforeMount: An, isRef: Qt } = await Rt("vue"), zt = "9.14.5";
    function Zt() {
        typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (K().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (K().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (K().__INTLIFY_PROD_DEVTOOLS__ = !1);
    }
    const en = wt.__EXTEND_POINT__, D = Ve(en);
    D(), D(), D(), D(), D(), D(), D(), D(), D();
    const We = yt.__EXTEND_POINT__, N = Ve(We), R = {
        UNEXPECTED_RETURN_TYPE: We,
        INVALID_ARGUMENT: N(),
        MUST_BE_CALL_SETUP_TOP: N(),
        NOT_INSTALLED: N(),
        NOT_AVAILABLE_IN_LEGACY_MODE: N(),
        REQUIRED_VALUE: N(),
        INVALID_VALUE: N(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: N(),
        NOT_INSTALLED_WITH_PROVIDE: N(),
        UNEXPECTED_ERROR: N(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: N(),
        BRIDGE_SUPPORT_VUE_2_ONLY: N(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: N(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: N(),
        __EXTEND_POINT__: N()
    };
    function P(e, ...l) {
        return Gt(e, null, void 0);
    }
    const ne = M("__translateVNode"), ae = M("__datetimeParts"), re = M("__numberParts"), tn = M("__setPluralRules"), nn = M("__injectWithOption"), le = M("__dispose");
    function G(e) {
        if (!v(e) || q(e)) return e;
        for(const l in e)if (z(e, l)) if (!l.includes(".")) v(e[l]) && G(e[l]);
        else {
            const r = l.split("."), o = r.length - 1;
            let s = e, c = !1;
            for(let a = 0; a < o; a++){
                if (r[a] === "__proto__") throw new Error(`unsafe key: ${r[a]}`);
                if (r[a] in s || (s[r[a]] = L()), !v(s[r[a]])) {
                    c = !0;
                    break;
                }
                s = s[r[a]];
            }
            if (c || (q(s) ? Ft.includes(r[o]) || delete e[l] : (s[r[o]] = e[l], delete e[l])), !q(s)) {
                const a = s[r[o]];
                v(a) && G(a);
            }
        }
        return e;
    }
    function Ye(e, l) {
        const { messages: r, __i18n: o, messageResolver: s, flatJson: c } = l, a = C(r) ? r : k(o) ? L() : {
            [e]: L()
        };
        if (k(o) && o.forEach((i)=>{
            if ("locale" in i && "resource" in i) {
                const { locale: m, resource: _ } = i;
                m ? (a[m] = a[m] || L(), J(_, a[m])) : J(_, a);
            } else d(i) && J(JSON.parse(i), a);
        }), s == null && c) for(const i in a)z(a, i) && G(a[i]);
        return a;
    }
    function Ge(e) {
        return e.type;
    }
    function an(e, l, r) {
        let o = v(l.messages) ? l.messages : L();
        "__i18nGlobal" in r && (o = Ye(e.locale.value, {
            messages: o,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(o);
        s.length && s.forEach((c)=>{
            e.mergeLocaleMessage(c, o[c]);
        });
        {
            if (v(l.datetimeFormats)) {
                const c = Object.keys(l.datetimeFormats);
                c.length && c.forEach((a)=>{
                    e.mergeDateTimeFormat(a, l.datetimeFormats[a]);
                });
            }
            if (v(l.numberFormats)) {
                const c = Object.keys(l.numberFormats);
                c.length && c.forEach((a)=>{
                    e.mergeNumberFormat(a, l.numberFormats[a]);
                });
            }
        }
    }
    function ve(e) {
        return jt(Ht, null, e, 0);
    }
    const Pe = "__INTLIFY_META__", Fe = ()=>[], rn = ()=>!1;
    let Ce = 0;
    function Se(e) {
        return ((l, r, o, s)=>e(r, o, se() || void 0, s));
    }
    const ln = ()=>{
        const e = se();
        let l = null;
        return e && (l = Ge(e)[Pe]) ? {
            [Pe]: l
        } : null;
    };
    function je(e = {}, l) {
        const { __root: r, __injectWithOption: o } = e, s = r === void 0, c = e.flatJson, a = Q ? Bt : $t, i = !!e.translateExistCompatible;
        let m = y(e.inheritLocale) ? e.inheritLocale : !0;
        const _ = a(r && m ? r.locale.value : d(e.locale) ? e.locale : vt), O = a(r && m ? r.fallbackLocale.value : d(e.fallbackLocale) || k(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : _.value), f = a(Ye(_.value, e)), g = a(C(e.datetimeFormats) ? e.datetimeFormats : {
            [_.value]: {}
        }), b = a(C(e.numberFormats) ? e.numberFormats : {
            [_.value]: {}
        });
        let p = r ? r.missingWarn : y(e.missingWarn) || ge(e.missingWarn) ? e.missingWarn : !0, F = r ? r.fallbackWarn : y(e.fallbackWarn) || ge(e.fallbackWarn) ? e.fallbackWarn : !0, V = r ? r.fallbackRoot : y(e.fallbackRoot) ? e.fallbackRoot : !0, j = !!e.fallbackFormat, ue = X(e.missing) ? e.missing : null, H = X(e.missing) ? Se(e.missing) : null, x = X(e.postTranslation) ? e.postTranslation : null, Z = r ? r.warnHtmlMessage : y(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, ee = !!e.escapeParameter;
        const _e = r ? r.modifiers : C(e.modifiers) ? e.modifiers : {};
        let B = e.pluralRules || r && r.pluralRules, u;
        u = (()=>{
            s && Ie(null);
            const t = {
                version: zt,
                locale: _.value,
                fallbackLocale: O.value,
                messages: f.value,
                modifiers: _e,
                pluralRules: B,
                missing: H === null ? void 0 : H,
                missingWarn: p,
                fallbackWarn: F,
                fallbackFormat: j,
                unresolving: !0,
                postTranslation: x === null ? void 0 : x,
                warnHtmlMessage: Z,
                escapeParameter: ee,
                messageResolver: e.messageResolver,
                messageCompiler: e.messageCompiler,
                __meta: {
                    framework: "vue"
                }
            };
            t.datetimeFormats = g.value, t.numberFormats = b.value, t.__datetimeFormatters = C(u) ? u.__datetimeFormatters : void 0, t.__numberFormatters = C(u) ? u.__numberFormatters : void 0;
            const n = Pt(t);
            return s && Ie(n), n;
        })(), w(u, _.value, O.value);
        function $e() {
            return [
                _.value,
                O.value,
                f.value,
                g.value,
                b.value
            ];
        }
        const Xe = W({
            get: ()=>_.value,
            set: (t)=>{
                _.value = t, u.locale = _.value;
            }
        }), Je = W({
            get: ()=>O.value,
            set: (t)=>{
                O.value = t, u.fallbackLocale = O.value, w(u, _.value, t);
            }
        }), Ke = W(()=>f.value), qe = W(()=>g.value), Qe = W(()=>b.value);
        function ze() {
            return X(x) ? x : null;
        }
        function Ze(t) {
            x = t, u.postTranslation = t;
        }
        function et() {
            return ue;
        }
        function tt(t) {
            t !== null && (H = Se(t)), ue = t, u.missing = H;
        }
        const h = (t, n, E, I, A, $)=>{
            $e();
            let U;
            try {
                __INTLIFY_PROD_DEVTOOLS__ && Ct(ln()), s || (u.fallbackContext = r ? St() : void 0), U = t(u);
            } finally{
                __INTLIFY_PROD_DEVTOOLS__, s || (u.fallbackContext = void 0);
            }
            if (E !== "translate exists" && Y(U) && U === Dt || E === "translate exists" && !U) {
                const [Lt, Fn] = n();
                return r && V ? I(r) : A(Lt);
            } else {
                if ($(U)) return U;
                throw P(R.UNEXPECTED_RETURN_TYPE);
            }
        };
        function me(...t) {
            return h((n)=>Reflect.apply(de, null, [
                    n,
                    ...t
                ]), ()=>be(...t), "translate", (n)=>Reflect.apply(n.t, n, [
                    ...t
                ]), (n)=>n, (n)=>d(n));
        }
        function nt(...t) {
            const [n, E, I] = t;
            if (I && !v(I)) throw P(R.INVALID_ARGUMENT);
            return me(n, E, S({
                resolvedMessage: !0
            }, I || {}));
        }
        function at(...t) {
            return h((n)=>Reflect.apply(Le, null, [
                    n,
                    ...t
                ]), ()=>Ne(...t), "datetime format", (n)=>Reflect.apply(n.d, n, [
                    ...t
                ]), ()=>Te, (n)=>d(n));
        }
        function rt(...t) {
            return h((n)=>Reflect.apply(pe, null, [
                    n,
                    ...t
                ]), ()=>Re(...t), "number format", (n)=>Reflect.apply(n.n, n, [
                    ...t
                ]), ()=>Te, (n)=>d(n));
        }
        function lt(t) {
            return t.map((n)=>d(n) || Y(n) || y(n) ? ve(String(n)) : n);
        }
        const st = {
            normalize: lt,
            interpolate: (t)=>t,
            type: "vnode"
        };
        function ot(...t) {
            return h((n)=>{
                let E;
                const I = n;
                try {
                    I.processor = st, E = Reflect.apply(de, null, [
                        I,
                        ...t
                    ]);
                } finally{
                    I.processor = null;
                }
                return E;
            }, ()=>be(...t), "translate", (n)=>n[ne](...t), (n)=>[
                    ve(n)
                ], (n)=>k(n));
        }
        function ct(...t) {
            return h((n)=>Reflect.apply(pe, null, [
                    n,
                    ...t
                ]), ()=>Re(...t), "number format", (n)=>n[re](...t), Fe, (n)=>d(n) || k(n));
        }
        function it(...t) {
            return h((n)=>Reflect.apply(Le, null, [
                    n,
                    ...t
                ]), ()=>Ne(...t), "datetime format", (n)=>n[ae](...t), Fe, (n)=>d(n) || k(n));
        }
        function ut(t) {
            B = t, u.pluralRules = B;
        }
        function _t(t, n) {
            return h(()=>{
                if (!t) return !1;
                const E = d(n) ? n : _.value, I = fe(E), A = u.messageResolver(I, t);
                return i ? A != null : q(A) || At(A) || d(A);
            }, ()=>[
                    t
                ], "translate exists", (E)=>Reflect.apply(E.te, E, [
                    t,
                    n
                ]), rn, (E)=>y(E));
        }
        function mt(t) {
            let n = null;
            const E = Ue(u, O.value, _.value);
            for(let I = 0; I < E.length; I++){
                const A = f.value[E[I]] || {}, $ = u.messageResolver(A, t);
                if ($ != null) {
                    n = $;
                    break;
                }
            }
            return n;
        }
        function ft(t) {
            const n = mt(t);
            return n ?? (r ? r.tm(t) || {} : {});
        }
        function fe(t) {
            return f.value[t] || {};
        }
        function gt(t, n) {
            if (c) {
                const E = {
                    [t]: n
                };
                for(const I in E)z(E, I) && G(E[I]);
                n = E[t];
            }
            f.value[t] = n, u.messages = f.value;
        }
        function Et(t, n) {
            f.value[t] = f.value[t] || {};
            const E = {
                [t]: n
            };
            if (c) for(const I in E)z(E, I) && G(E[I]);
            n = E[t], J(n, f.value[t]), u.messages = f.value;
        }
        function Ot(t) {
            return g.value[t] || {};
        }
        function It(t, n) {
            g.value[t] = n, u.datetimeFormats = g.value, Ee(u, t, n);
        }
        function bt(t, n) {
            g.value[t] = S(g.value[t] || {}, n), u.datetimeFormats = g.value, Ee(u, t, n);
        }
        function dt(t) {
            return b.value[t] || {};
        }
        function Tt(t, n) {
            b.value[t] = n, u.numberFormats = b.value, Oe(u, t, n);
        }
        function Nt(t, n) {
            b.value[t] = S(b.value[t] || {}, n), u.numberFormats = b.value, Oe(u, t, n);
        }
        Ce++, r && Q && (te(r.locale, (t)=>{
            m && (_.value = t, u.locale = t, w(u, _.value, O.value));
        }), te(r.fallbackLocale, (t)=>{
            m && (O.value = t, u.fallbackLocale = t, w(u, _.value, O.value));
        }));
        const T = {
            id: Ce,
            locale: Xe,
            fallbackLocale: Je,
            get inheritLocale () {
                return m;
            },
            set inheritLocale (t){
                m = t, t && r && (_.value = r.locale.value, O.value = r.fallbackLocale.value, w(u, _.value, O.value));
            },
            get availableLocales () {
                return Object.keys(f.value).sort();
            },
            messages: Ke,
            get modifiers () {
                return _e;
            },
            get pluralRules () {
                return B || {};
            },
            get isGlobal () {
                return s;
            },
            get missingWarn () {
                return p;
            },
            set missingWarn (t){
                p = t, u.missingWarn = p;
            },
            get fallbackWarn () {
                return F;
            },
            set fallbackWarn (t){
                F = t, u.fallbackWarn = F;
            },
            get fallbackRoot () {
                return V;
            },
            set fallbackRoot (t){
                V = t;
            },
            get fallbackFormat () {
                return j;
            },
            set fallbackFormat (t){
                j = t, u.fallbackFormat = j;
            },
            get warnHtmlMessage () {
                return Z;
            },
            set warnHtmlMessage (t){
                Z = t, u.warnHtmlMessage = t;
            },
            get escapeParameter () {
                return ee;
            },
            set escapeParameter (t){
                ee = t, u.escapeParameter = t;
            },
            t: me,
            getLocaleMessage: fe,
            setLocaleMessage: gt,
            mergeLocaleMessage: Et,
            getPostTranslationHandler: ze,
            setPostTranslationHandler: Ze,
            getMissingHandler: et,
            setMissingHandler: tt,
            [tn]: ut
        };
        return T.datetimeFormats = qe, T.numberFormats = Qe, T.rt = nt, T.te = _t, T.tm = ft, T.d = at, T.n = rt, T.getDateTimeFormat = Ot, T.setDateTimeFormat = It, T.mergeDateTimeFormat = bt, T.getNumberFormat = dt, T.setNumberFormat = Tt, T.mergeNumberFormat = Nt, T[nn] = o, T[ne] = ot, T[ae] = it, T[re] = ct, T;
    }
    const ce = {
        tag: {
            type: [
                String,
                Object
            ]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: (e)=>e === "parent" || e === "global",
            default: "parent"
        },
        i18n: {
            type: Object
        }
    };
    function sn({ slots: e }, l) {
        return l.length === 1 && l[0] === "default" ? (e.default ? e.default() : []).reduce((o, s)=>[
                ...o,
                ...s.type === xe ? s.children : [
                    s
                ]
            ], []) : l.reduce((r, o)=>{
            const s = e[o];
            return s && (r[o] = s()), r;
        }, L());
    }
    function He(e) {
        return xe;
    }
    const on = oe({
        name: "i18n-t",
        props: S({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [
                    Number,
                    String
                ],
                validator: (e)=>Y(e) || !isNaN(e)
            }
        }, ce),
        setup (e, l) {
            const { slots: r, attrs: o } = l, s = e.i18n || ie({
                useScope: e.scope,
                __useComponent: !0
            });
            return ()=>{
                const c = Object.keys(r).filter((f)=>f !== "_"), a = L();
                e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = d(e.plural) ? +e.plural : e.plural);
                const i = sn(l, c), m = s[ne](e.keypath, i, a), _ = S(L(), o), O = d(e.tag) || v(e.tag) ? e.tag : He();
                return we(O, _, m);
            };
        }
    }), De = on;
    function cn(e) {
        return k(e) && !d(e[0]);
    }
    function Be(e, l, r, o) {
        const { slots: s, attrs: c } = l;
        return ()=>{
            const a = {
                part: !0
            };
            let i = L();
            e.locale && (a.locale = e.locale), d(e.format) ? a.key = e.format : v(e.format) && (d(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((g, b)=>r.includes(b) ? S(L(), g, {
                    [b]: e.format[b]
                }) : g, L()));
            const m = o(e.value, a, i);
            let _ = [
                a.key
            ];
            k(m) ? _ = m.map((g, b)=>{
                const p = s[g.type], F = p ? p({
                    [g.type]: g.value,
                    index: b,
                    parts: m
                }) : [
                    g.value
                ];
                return cn(F) && (F[0].key = `${g.type}-${b}`), F;
            }) : d(m) && (_ = [
                m
            ]);
            const O = S(L(), c), f = d(e.tag) || v(e.tag) ? e.tag : He();
            return we(f, O, _);
        };
    }
    const un = oe({
        name: "i18n-n",
        props: S({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, ce),
        setup (e, l) {
            const r = e.i18n || ie({
                useScope: e.scope,
                __useComponent: !0
            });
            return Be(e, l, kt, (...o)=>r[re](...o));
        }
    }), ye = un, _n = oe({
        name: "i18n-d",
        props: S({
            value: {
                type: [
                    Number,
                    Date
                ],
                required: !0
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, ce),
        setup (e, l) {
            const r = e.i18n || ie({
                useScope: e.scope,
                __useComponent: !0
            });
            return Be(e, l, Mt, (...o)=>r[ae](...o));
        }
    }), Ae = _n;
    function mn(e, l) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(l) || e.global;
        {
            const o = r.__getInstance(l);
            return o != null ? o.__composer : e.global.__composer;
        }
    }
    function fn(e) {
        const l = (a)=>{
            const { instance: i, modifiers: m, value: _ } = a;
            if (!i || !i.$) throw P(R.UNEXPECTED_ERROR);
            const O = mn(e, i.$), f = ke(_);
            return [
                Reflect.apply(O.t, O, [
                    ...Me(f)
                ]),
                O
            ];
        };
        return {
            created: (a, i)=>{
                const [m, _] = l(i);
                Q && e.global === _ && (a.__i18nWatcher = te(_.locale, ()=>{
                    i.instance && i.instance.$forceUpdate();
                })), a.__composer = _, a.textContent = m;
            },
            unmounted: (a)=>{
                Q && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
            },
            beforeUpdate: (a, { value: i })=>{
                if (a.__composer) {
                    const m = a.__composer, _ = ke(i);
                    a.textContent = Reflect.apply(m.t, m, [
                        ...Me(_)
                    ]);
                }
            },
            getSSRProps: (a)=>{
                const [i] = l(a);
                return {
                    textContent: i
                };
            }
        };
    }
    function ke(e) {
        if (d(e)) return {
            path: e
        };
        if (C(e)) {
            if (!("path" in e)) throw P(R.REQUIRED_VALUE, "path");
            return e;
        } else throw P(R.INVALID_VALUE);
    }
    function Me(e) {
        const { path: l, locale: r, args: o, choice: s, plural: c } = e, a = {}, i = o || {};
        return d(r) && (a.locale = r), Y(s) && (a.plural = s), Y(c) && (a.plural = c), [
            l,
            i,
            a
        ];
    }
    function gn(e, l, ...r) {
        const o = C(r[0]) ? r[0] : {}, s = !!o.useI18nComponentName;
        (y(o.globalInstall) ? o.globalInstall : !0) && ([
            s ? "i18n" : De.name,
            "I18nT"
        ].forEach((a)=>e.component(a, De)), [
            ye.name,
            "I18nN"
        ].forEach((a)=>e.component(a, ye)), [
            Ae.name,
            "I18nD"
        ].forEach((a)=>e.component(a, Ae))), e.directive("t", fn(l));
    }
    const En = M("global-vue-i18n");
    kn = function(e = {}, l) {
        const r = y(e.globalInjection) ? e.globalInjection : !0, o = !0, s = new Map, [c, a] = On(e), i = M("");
        function m(f) {
            return s.get(f) || null;
        }
        function _(f, g) {
            s.set(f, g);
        }
        function O(f) {
            s.delete(f);
        }
        {
            const f = {
                get mode () {
                    return "composition";
                },
                get allowComposition () {
                    return o;
                },
                async install (g, ...b) {
                    if (g.__VUE_I18N_SYMBOL__ = i, g.provide(g.__VUE_I18N_SYMBOL__, f), C(b[0])) {
                        const V = b[0];
                        f.__composerExtend = V.__composerExtend, f.__vueI18nExtend = V.__vueI18nExtend;
                    }
                    let p = null;
                    r && (p = pn(g, f.global)), gn(g, f, ...b);
                    const F = g.unmount;
                    g.unmount = ()=>{
                        p && p(), f.dispose(), F();
                    };
                },
                get global () {
                    return a;
                },
                dispose () {
                    c.stop();
                },
                __instances: s,
                __getInstance: m,
                __setInstance: _,
                __deleteInstance: O
            };
            return f;
        }
    };
    ie = function(e = {}) {
        const l = se();
        if (l == null) throw P(R.MUST_BE_CALL_SETUP_TOP);
        if (!l.isCE && l.appContext.app != null && !l.appContext.app.__VUE_I18N_SYMBOL__) throw P(R.NOT_INSTALLED);
        const r = In(l), o = dn(r), s = Ge(l), c = bn(e, s);
        if (c === "global") return an(o, e, s), o;
        if (c === "parent") {
            let m = Tn(r, l, e.__useComponent);
            return m == null && (m = o), m;
        }
        const a = r;
        let i = a.__getInstance(l);
        if (i == null) {
            const m = S({}, e);
            "__i18n" in s && (m.__i18n = s.__i18n), o && (m.__root = o), i = je(m), a.__composerExtend && (i[le] = a.__composerExtend(i)), Ln(a, l, i), a.__setInstance(l, i);
        }
        return i;
    };
    function On(e, l, r) {
        const o = Xt();
        {
            const s = o.run(()=>je(e));
            if (s == null) throw P(R.UNEXPECTED_ERROR);
            return [
                o,
                s
            ];
        }
    }
    function In(e) {
        {
            const l = Jt(e.isCE ? En : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!l) throw P(e.isCE ? R.NOT_INSTALLED_WITH_PROVIDE : R.UNEXPECTED_ERROR);
            return l;
        }
    }
    function bn(e, l) {
        return pt(e) ? "__i18n" in l ? "local" : "global" : e.useScope ? e.useScope : "local";
    }
    function dn(e) {
        return e.mode === "composition" ? e.global : e.global.__composer;
    }
    function Tn(e, l, r = !1) {
        let o = null;
        const s = l.root;
        let c = Nn(l, r);
        for(; c != null;){
            const a = e;
            if (e.mode === "composition" && (o = a.__getInstance(c)), o != null || s === c) break;
            c = c.parent;
        }
        return o;
    }
    function Nn(e, l = !1) {
        return e == null ? null : l && e.vnode.ctx || e.parent;
    }
    function Ln(e, l, r) {
        Kt(()=>{}, l), qt(()=>{
            const o = r;
            e.__deleteInstance(l);
            const s = o[le];
            s && (s(), delete o[le]);
        }, l);
    }
    const Rn = [
        "locale",
        "fallbackLocale",
        "availableLocales"
    ], he = [
        "t",
        "rt",
        "d",
        "n",
        "tm",
        "te"
    ];
    function pn(e, l) {
        const r = Object.create(null);
        return Rn.forEach((s)=>{
            const c = Object.getOwnPropertyDescriptor(l, s);
            if (!c) throw P(R.UNEXPECTED_ERROR);
            const a = Qt(c.value) ? {
                get () {
                    return c.value.value;
                },
                set (i) {
                    c.value.value = i;
                }
            } : {
                get () {
                    return c.get && c.get();
                }
            };
            Object.defineProperty(r, s, a);
        }), e.config.globalProperties.$i18n = r, he.forEach((s)=>{
            const c = Object.getOwnPropertyDescriptor(l, s);
            if (!c || !c.value) throw P(R.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${s}`, c);
        }), ()=>{
            delete e.config.globalProperties.$i18n, he.forEach((s)=>{
                delete e.config.globalProperties[`$${s}`];
            });
        };
    }
    Zt();
    __INTLIFY_JIT_COMPILATION__ && ht(Wt);
    Vt(Yt);
    Ut(Ue);
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const e = K();
        e.__INTLIFY__ = !0, xt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
    }
});
export { kn as c, ie as u, __tla };
