import { i as Ce, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-DffYi9GX.js";
import { D as vt, u as V, c as It, a as me, b as _e, i as G, A as Rt, s as Ot, g as Tt, N as Lt, f as Me, d as fe, C as Ft, p as ge, t as be, M as de, e as Ee, h as pe, j as ve, n as Ie, k as Nt, l as yt, m as St, r as kt, o as Pt, q as ht, v as Dt, w as Ct, x as Mt } from "./intlify_core-base-BX6SPR6Z.js";
import { e as y, u as h, m as At, h as T, d as R, f as k, a as d, b as F, c as N, g as Re, i as H, v as B, x as $, j as X, l as w, k as Q } from "./intlify_shared-B5SD7s-T.js";
import { c as Vt } from "./intlify_message-compiler-CgrDYL9A.js";
let Fn, se;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const q = await Ce("vue"), { createVNode: xt, Text: wt, computed: x, watch: z, ref: Ut, shallowRef: Wt, Fragment: Ae, defineComponent: ae, h: Ve, effectScope: jt, inject: Yt, onMounted: Ht, onUnmounted: Gt, isRef: $t } = await Ce("vue"), Bt = "11.2.8";
    function Xt() {
        typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Q().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Q().__INTLIFY_PROD_DEVTOOLS__ = !1);
    }
    const O = {
        UNEXPECTED_RETURN_TYPE: Ft,
        INVALID_ARGUMENT: 25,
        MUST_BE_CALL_SETUP_TOP: 26,
        NOT_INSTALLED: 27,
        REQUIRED_VALUE: 28,
        INVALID_VALUE: 29,
        NOT_INSTALLED_WITH_PROVIDE: 31,
        UNEXPECTED_ERROR: 32
    };
    function L(e, ...n) {
        return Vt(e, null, void 0);
    }
    const Z = h("__translateVNode"), ee = h("__datetimeParts"), te = h("__numberParts"), Kt = h("__setPluralRules"), Jt = h("__injectWithOption"), ne = h("__dispose");
    function U(e) {
        if (!T(e) || G(e)) return e;
        for(const n in e)if (X(e, n)) if (!n.includes(".")) T(e[n]) && U(e[n]);
        else {
            const s = n.split("."), l = s.length - 1;
            let c = e, u = !1;
            for(let r = 0; r < l; r++){
                if (s[r] === "__proto__") throw new Error(`unsafe key: ${s[r]}`);
                if (s[r] in c || (c[s[r]] = R()), !T(c[s[r]])) {
                    u = !0;
                    break;
                }
                c = c[s[r]];
            }
            if (u || (G(c) ? Rt.includes(s[l]) || delete e[n] : (c[s[l]] = e[n], delete e[n])), !G(c)) {
                const r = c[s[l]];
                T(r) && U(r);
            }
        }
        return e;
    }
    function xe(e, n) {
        const { messages: s, __i18n: l, messageResolver: c, flatJson: u } = n, r = N(s) ? s : F(l) ? R() : {
            [e]: R()
        };
        if (F(l) && l.forEach((o)=>{
            if ("locale" in o && "resource" in o) {
                const { locale: i, resource: m } = o;
                i ? (r[i] = r[i] || R(), $(m, r[i])) : $(m, r);
            } else d(o) && $(JSON.parse(o), r);
        }), c == null && u) for(const o in r)X(r, o) && U(r[o]);
        return r;
    }
    function we(e) {
        return e.type;
    }
    function qt(e, n, s) {
        let l = T(n.messages) ? n.messages : R();
        "__i18nGlobal" in s && (l = xe(e.locale.value, {
            messages: l,
            __i18n: s.__i18nGlobal
        }));
        const c = Object.keys(l);
        c.length && c.forEach((u)=>{
            e.mergeLocaleMessage(u, l[u]);
        });
        {
            if (T(n.datetimeFormats)) {
                const u = Object.keys(n.datetimeFormats);
                u.length && u.forEach((r)=>{
                    e.mergeDateTimeFormat(r, n.datetimeFormats[r]);
                });
            }
            if (T(n.numberFormats)) {
                const u = Object.keys(n.numberFormats);
                u.length && u.forEach((r)=>{
                    e.mergeNumberFormat(r, n.numberFormats[r]);
                });
            }
        }
    }
    function Oe(e) {
        return xt(wt, null, e, 0);
    }
    function re() {
        const e = "currentInstance";
        return e in q ? q[e] : q.getCurrentInstance();
    }
    const Te = "__INTLIFY_META__", Le = ()=>[], Qt = ()=>!1;
    let Fe = 0;
    function Ne(e) {
        return ((n, s, l, c)=>e(s, l, re() || void 0, c));
    }
    const zt = ()=>{
        const e = re();
        let n = null;
        return e && (n = we(e)[Te]) ? {
            [Te]: n
        } : null;
    };
    function Ue(e = {}) {
        const { __root: n, __injectWithOption: s } = e, l = n === void 0, c = e.flatJson, u = B ? Ut : Wt;
        let r = k(e.inheritLocale) ? e.inheritLocale : !0;
        const o = u(n && r ? n.locale.value : d(e.locale) ? e.locale : vt), i = u(n && r ? n.fallbackLocale.value : d(e.fallbackLocale) || F(e.fallbackLocale) || N(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value), m = u(xe(o.value, e)), f = u(N(e.datetimeFormats) ? e.datetimeFormats : {
            [o.value]: {}
        }), E = u(N(e.numberFormats) ? e.numberFormats : {
            [o.value]: {}
        });
        let v = n ? n.missingWarn : k(e.missingWarn) || Re(e.missingWarn) ? e.missingWarn : !0, I = n ? n.fallbackWarn : k(e.fallbackWarn) || Re(e.fallbackWarn) ? e.fallbackWarn : !0, S = n ? n.fallbackRoot : k(e.fallbackRoot) ? e.fallbackRoot : !0, P = !!e.fallbackFormat, oe = H(e.missing) ? e.missing : null, W = H(e.missing) ? Ne(e.missing) : null, A = H(e.postTranslation) ? e.postTranslation : null, K = n ? n.warnHtmlMessage : k(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, J = !!e.escapeParameter;
        const ce = n ? n.modifiers : N(e.modifiers) ? e.modifiers : {};
        let j = e.pluralRules || n && n.pluralRules, _;
        _ = (()=>{
            l && fe(null);
            const t = {
                version: Bt,
                locale: o.value,
                fallbackLocale: i.value,
                messages: m.value,
                modifiers: ce,
                pluralRules: j,
                missing: W === null ? void 0 : W,
                missingWarn: v,
                fallbackWarn: I,
                fallbackFormat: P,
                unresolving: !0,
                postTranslation: A === null ? void 0 : A,
                warnHtmlMessage: K,
                escapeParameter: J,
                messageResolver: e.messageResolver,
                messageCompiler: e.messageCompiler,
                __meta: {
                    framework: "vue"
                }
            };
            t.datetimeFormats = f.value, t.numberFormats = E.value, t.__datetimeFormatters = N(_) ? _.__datetimeFormatters : void 0, t.__numberFormatters = N(_) ? _.__numberFormatters : void 0;
            const a = It(t);
            return l && fe(a), a;
        })(), V(_, o.value, i.value);
        function Ye() {
            return [
                o.value,
                i.value,
                m.value,
                f.value,
                E.value
            ];
        }
        const He = x({
            get: ()=>o.value,
            set: (t)=>{
                _.locale = t, o.value = t;
            }
        }), Ge = x({
            get: ()=>i.value,
            set: (t)=>{
                _.fallbackLocale = t, i.value = t, V(_, o.value, t);
            }
        }), $e = x(()=>m.value), Be = x(()=>f.value), Xe = x(()=>E.value);
        function Ke() {
            return H(A) ? A : null;
        }
        function Je(t) {
            A = t, _.postTranslation = t;
        }
        function qe() {
            return oe;
        }
        function Qe(t) {
            t !== null && (W = Ne(t)), oe = t, _.missing = W;
        }
        const D = (t, a, g, b, C, Y)=>{
            Ye();
            let M;
            try {
                __INTLIFY_PROD_DEVTOOLS__ && Ot(zt()), l || (_.fallbackContext = n ? Tt() : void 0), M = t(_);
            } finally{
                __INTLIFY_PROD_DEVTOOLS__, l || (_.fallbackContext = void 0);
            }
            if (g !== "translate exists" && w(M) && M === Lt || g === "translate exists" && !M) {
                const [pt, In] = a();
                return n && S ? b(n) : C(pt);
            } else {
                if (Y(M)) return M;
                throw L(O.UNEXPECTED_RETURN_TYPE);
            }
        };
        function ue(...t) {
            return D((a)=>Reflect.apply(be, null, [
                    a,
                    ...t
                ]), ()=>ge(...t), "translate", (a)=>Reflect.apply(a.t, a, [
                    ...t
                ]), (a)=>a, (a)=>d(a));
        }
        function ze(...t) {
            const [a, g, b] = t;
            if (b && !T(b)) throw L(O.INVALID_ARGUMENT);
            return ue(a, g, y({
                resolvedMessage: !0
            }, b || {}));
        }
        function Ze(...t) {
            return D((a)=>Reflect.apply(pe, null, [
                    a,
                    ...t
                ]), ()=>Ee(...t), "datetime format", (a)=>Reflect.apply(a.d, a, [
                    ...t
                ]), ()=>de, (a)=>d(a) || F(a));
        }
        function et(...t) {
            return D((a)=>Reflect.apply(Ie, null, [
                    a,
                    ...t
                ]), ()=>ve(...t), "number format", (a)=>Reflect.apply(a.n, a, [
                    ...t
                ]), ()=>de, (a)=>d(a) || F(a));
        }
        function tt(t) {
            return t.map((a)=>d(a) || w(a) || k(a) ? Oe(String(a)) : a);
        }
        const nt = {
            normalize: tt,
            interpolate: (t)=>t,
            type: "vnode"
        };
        function at(...t) {
            return D((a)=>{
                let g;
                const b = a;
                try {
                    b.processor = nt, g = Reflect.apply(be, null, [
                        b,
                        ...t
                    ]);
                } finally{
                    b.processor = null;
                }
                return g;
            }, ()=>ge(...t), "translate", (a)=>a[Z](...t), (a)=>[
                    Oe(a)
                ], (a)=>F(a));
        }
        function rt(...t) {
            return D((a)=>Reflect.apply(Ie, null, [
                    a,
                    ...t
                ]), ()=>ve(...t), "number format", (a)=>a[te](...t), Le, (a)=>d(a) || F(a));
        }
        function lt(...t) {
            return D((a)=>Reflect.apply(pe, null, [
                    a,
                    ...t
                ]), ()=>Ee(...t), "datetime format", (a)=>a[ee](...t), Le, (a)=>d(a) || F(a));
        }
        function st(t) {
            j = t, _.pluralRules = j;
        }
        function ot(t, a) {
            return D(()=>{
                if (!t) return !1;
                const g = d(a) ? a : o.value, b = ie(g), C = _.messageResolver(b, t);
                return G(C) || Nt(C) || d(C);
            }, ()=>[
                    t
                ], "translate exists", (g)=>Reflect.apply(g.te, g, [
                    t,
                    a
                ]), Qt, (g)=>k(g));
        }
        function ct(t) {
            let a = null;
            const g = Me(_, i.value, o.value);
            for(let b = 0; b < g.length; b++){
                const C = m.value[g[b]] || {}, Y = _.messageResolver(C, t);
                if (Y != null) {
                    a = Y;
                    break;
                }
            }
            return a;
        }
        function ut(t) {
            const a = ct(t);
            return a ?? (n ? n.tm(t) || {} : {});
        }
        function ie(t) {
            return m.value[t] || {};
        }
        function it(t, a) {
            if (c) {
                const g = {
                    [t]: a
                };
                for(const b in g)X(g, b) && U(g[b]);
                a = g[t];
            }
            m.value[t] = a, _.messages = m.value;
        }
        function mt(t, a) {
            m.value[t] = m.value[t] || {};
            const g = {
                [t]: a
            };
            if (c) for(const b in g)X(g, b) && U(g[b]);
            a = g[t], $(a, m.value[t]), _.messages = m.value;
        }
        function _t(t) {
            return f.value[t] || {};
        }
        function ft(t, a) {
            f.value[t] = a, _.datetimeFormats = f.value, me(_, t, a);
        }
        function gt(t, a) {
            f.value[t] = y(f.value[t] || {}, a), _.datetimeFormats = f.value, me(_, t, a);
        }
        function bt(t) {
            return E.value[t] || {};
        }
        function dt(t, a) {
            E.value[t] = a, _.numberFormats = E.value, _e(_, t, a);
        }
        function Et(t, a) {
            E.value[t] = y(E.value[t] || {}, a), _.numberFormats = E.value, _e(_, t, a);
        }
        Fe++, n && B && (z(n.locale, (t)=>{
            r && (o.value = t, _.locale = t, V(_, o.value, i.value));
        }), z(n.fallbackLocale, (t)=>{
            r && (i.value = t, _.fallbackLocale = t, V(_, o.value, i.value));
        }));
        const p = {
            id: Fe,
            locale: He,
            fallbackLocale: Ge,
            get inheritLocale () {
                return r;
            },
            set inheritLocale (t){
                r = t, t && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, V(_, o.value, i.value));
            },
            get availableLocales () {
                return Object.keys(m.value).sort();
            },
            messages: $e,
            get modifiers () {
                return ce;
            },
            get pluralRules () {
                return j || {};
            },
            get isGlobal () {
                return l;
            },
            get missingWarn () {
                return v;
            },
            set missingWarn (t){
                v = t, _.missingWarn = v;
            },
            get fallbackWarn () {
                return I;
            },
            set fallbackWarn (t){
                I = t, _.fallbackWarn = I;
            },
            get fallbackRoot () {
                return S;
            },
            set fallbackRoot (t){
                S = t;
            },
            get fallbackFormat () {
                return P;
            },
            set fallbackFormat (t){
                P = t, _.fallbackFormat = P;
            },
            get warnHtmlMessage () {
                return K;
            },
            set warnHtmlMessage (t){
                K = t, _.warnHtmlMessage = t;
            },
            get escapeParameter () {
                return J;
            },
            set escapeParameter (t){
                J = t, _.escapeParameter = t;
            },
            t: ue,
            getLocaleMessage: ie,
            setLocaleMessage: it,
            mergeLocaleMessage: mt,
            getPostTranslationHandler: Ke,
            setPostTranslationHandler: Je,
            getMissingHandler: qe,
            setMissingHandler: Qe,
            [Kt]: st
        };
        return p.datetimeFormats = Be, p.numberFormats = Xe, p.rt = ze, p.te = ot, p.tm = ut, p.d = Ze, p.n = et, p.getDateTimeFormat = _t, p.setDateTimeFormat = ft, p.mergeDateTimeFormat = gt, p.getNumberFormat = bt, p.setNumberFormat = dt, p.mergeNumberFormat = Et, p[Jt] = s, p[Z] = at, p[ee] = lt, p[te] = rt, p;
    }
    const le = {
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
    function Zt({ slots: e }, n) {
        return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((l, c)=>[
                ...l,
                ...c.type === Ae ? c.children : [
                    c
                ]
            ], []) : n.reduce((s, l)=>{
            const c = e[l];
            return c && (s[l] = c()), s;
        }, R());
    }
    function We() {
        return Ae;
    }
    const en = ae({
        name: "i18n-t",
        props: y({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [
                    Number,
                    String
                ],
                validator: (e)=>w(e) || !isNaN(e)
            }
        }, le),
        setup (e, n) {
            const { slots: s, attrs: l } = n, c = e.i18n || se({
                useScope: e.scope,
                __useComponent: !0
            });
            return ()=>{
                const u = Object.keys(s).filter((E)=>E[0] !== "_"), r = R();
                e.locale && (r.locale = e.locale), e.plural !== void 0 && (r.plural = d(e.plural) ? +e.plural : e.plural);
                const o = Zt(n, u), i = c[Z](e.keypath, o, r), m = y(R(), l), f = d(e.tag) || T(e.tag) ? e.tag : We();
                return Ve(f, m, i);
            };
        }
    }), ye = en;
    function tn(e) {
        return F(e) && !d(e[0]);
    }
    function je(e, n, s, l) {
        const { slots: c, attrs: u } = n;
        return ()=>{
            const r = {
                part: !0
            };
            let o = R();
            e.locale && (r.locale = e.locale), d(e.format) ? r.key = e.format : T(e.format) && (d(e.format.key) && (r.key = e.format.key), o = Object.keys(e.format).reduce((v, I)=>s.includes(I) ? y(R(), v, {
                    [I]: e.format[I]
                }) : v, R()));
            const i = l(e.value, r, o);
            let m = [
                r.key
            ];
            F(i) ? m = i.map((v, I)=>{
                const S = c[v.type], P = S ? S({
                    [v.type]: v.value,
                    index: I,
                    parts: i
                }) : [
                    v.value
                ];
                return tn(P) && (P[0].key = `${v.type}-${I}`), P;
            }) : d(i) && (m = [
                i
            ]);
            const f = y(R(), u), E = d(e.tag) || T(e.tag) ? e.tag : We();
            return Ve(E, f, m);
        };
    }
    const nn = ae({
        name: "i18n-n",
        props: y({
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
        }, le),
        setup (e, n) {
            const s = e.i18n || se({
                useScope: e.scope,
                __useComponent: !0
            });
            return je(e, n, yt, (...l)=>s[te](...l));
        }
    }), Se = nn;
    function an(e, n) {
        const s = e;
        if (e.mode === "composition") return s.__getInstance(n) || e.global;
        {
            const l = s.__getInstance(n);
            return l != null ? l.__composer : e.global.__composer;
        }
    }
    function rn(e) {
        const n = (r)=>{
            const { instance: o, value: i } = r;
            if (!o || !o.$) throw L(O.UNEXPECTED_ERROR);
            const m = an(e, o.$), f = ke(i);
            return [
                Reflect.apply(m.t, m, [
                    ...Pe(f)
                ]),
                m
            ];
        };
        return {
            created: (r, o)=>{
                const [i, m] = n(o);
                B && e.global === m && (r.__i18nWatcher = z(m.locale, ()=>{
                    o.instance && o.instance.$forceUpdate();
                })), r.__composer = m, r.textContent = i;
            },
            unmounted: (r)=>{
                B && r.__i18nWatcher && (r.__i18nWatcher(), r.__i18nWatcher = void 0, delete r.__i18nWatcher), r.__composer && (r.__composer = void 0, delete r.__composer);
            },
            beforeUpdate: (r, { value: o })=>{
                if (r.__composer) {
                    const i = r.__composer, m = ke(o);
                    r.textContent = Reflect.apply(i.t, i, [
                        ...Pe(m)
                    ]);
                }
            },
            getSSRProps: (r)=>{
                const [o] = n(r);
                return {
                    textContent: o
                };
            }
        };
    }
    function ke(e) {
        if (d(e)) return {
            path: e
        };
        if (N(e)) {
            if (!("path" in e)) throw L(O.REQUIRED_VALUE, "path");
            return e;
        } else throw L(O.INVALID_VALUE);
    }
    function Pe(e) {
        const { path: n, locale: s, args: l, choice: c, plural: u } = e, r = {}, o = l || {};
        return d(s) && (r.locale = s), w(c) && (r.plural = c), w(u) && (r.plural = u), [
            n,
            o,
            r
        ];
    }
    function ln(e, n, ...s) {
        const l = N(s[0]) ? s[0] : {};
        (k(l.globalInstall) ? l.globalInstall : !0) && ([
            ye.name,
            "I18nT"
        ].forEach((u)=>e.component(u, ye)), [
            Se.name,
            "I18nN"
        ].forEach((u)=>e.component(u, Se)), [
            De.name,
            "I18nD"
        ].forEach((u)=>e.component(u, De))), e.directive("t", rn(n));
    }
    const sn = h("global-vue-i18n");
    Fn = function(e = {}) {
        const n = k(e.globalInjection) ? e.globalInjection : !0, s = new Map, [l, c] = on(e), u = h("");
        function r(f) {
            return s.get(f) || null;
        }
        function o(f, E) {
            s.set(f, E);
        }
        function i(f) {
            s.delete(f);
        }
        const m = {
            get mode () {
                return "composition";
            },
            async install (f, ...E) {
                if (f.__VUE_I18N_SYMBOL__ = u, f.provide(f.__VUE_I18N_SYMBOL__, m), N(E[0])) {
                    const S = E[0];
                    m.__composerExtend = S.__composerExtend, m.__vueI18nExtend = S.__vueI18nExtend;
                }
                let v = null;
                n && (v = dn(f, m.global)), ln(f, m, ...E);
                const I = f.unmount;
                f.unmount = ()=>{
                    v && v(), m.dispose(), I();
                };
            },
            get global () {
                return c;
            },
            dispose () {
                l.stop();
            },
            __instances: s,
            __getInstance: r,
            __setInstance: o,
            __deleteInstance: i
        };
        return m;
    };
    se = function(e = {}) {
        const n = re();
        if (n == null) throw L(O.MUST_BE_CALL_SETUP_TOP);
        if (!n.isCE && n.appContext.app != null && !n.appContext.app.__VUE_I18N_SYMBOL__) throw L(O.NOT_INSTALLED);
        const s = cn(n), l = mn(s), c = we(n), u = un(e, c);
        if (u === "global") return qt(l, e, c), l;
        if (u === "parent") {
            let i = _n(s, n, e.__useComponent);
            return i == null && (i = l), i;
        }
        const r = s;
        let o = r.__getInstance(n);
        if (o == null) {
            const i = y({}, e);
            "__i18n" in c && (i.__i18n = c.__i18n), l && (i.__root = l), o = Ue(i), r.__composerExtend && (o[ne] = r.__composerExtend(o)), gn(r, n, o), r.__setInstance(n, o);
        }
        return o;
    };
    function on(e, n) {
        const s = jt(), l = s.run(()=>Ue(e));
        if (l == null) throw L(O.UNEXPECTED_ERROR);
        return [
            s,
            l
        ];
    }
    function cn(e) {
        const n = Yt(e.isCE ? sn : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!n) throw L(e.isCE ? O.NOT_INSTALLED_WITH_PROVIDE : O.UNEXPECTED_ERROR);
        return n;
    }
    function un(e, n) {
        return At(e) ? "__i18n" in n ? "local" : "global" : e.useScope ? e.useScope : "local";
    }
    function mn(e) {
        return e.mode === "composition" ? e.global : e.global.__composer;
    }
    function _n(e, n, s = !1) {
        let l = null;
        const c = n.root;
        let u = fn(n, s);
        for(; u != null;){
            const r = e;
            if (e.mode === "composition" && (l = r.__getInstance(u)), l != null || c === u) break;
            u = u.parent;
        }
        return l;
    }
    function fn(e, n = !1) {
        return e == null ? null : n && e.vnode.ctx || e.parent;
    }
    function gn(e, n, s) {
        Ht(()=>{}, n), Gt(()=>{
            const l = s;
            e.__deleteInstance(n);
            const c = l[ne];
            c && (c(), delete l[ne]);
        }, n);
    }
    const bn = [
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
    function dn(e, n) {
        const s = Object.create(null);
        return bn.forEach((c)=>{
            const u = Object.getOwnPropertyDescriptor(n, c);
            if (!u) throw L(O.UNEXPECTED_ERROR);
            const r = $t(u.value) ? {
                get () {
                    return u.value.value;
                },
                set (o) {
                    u.value.value = o;
                }
            } : {
                get () {
                    return u.get && u.get();
                }
            };
            Object.defineProperty(s, c, r);
        }), e.config.globalProperties.$i18n = s, he.forEach((c)=>{
            const u = Object.getOwnPropertyDescriptor(n, c);
            if (!u || !u.value) throw L(O.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${c}`, u);
        }), ()=>{
            delete e.config.globalProperties.$i18n, he.forEach((c)=>{
                delete e.config.globalProperties[`$${c}`];
            });
        };
    }
    const En = ae({
        name: "i18n-d",
        props: y({
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
        }, le),
        setup (e, n) {
            const s = e.i18n || se({
                useScope: e.scope,
                __useComponent: !0
            });
            return je(e, n, St, (...l)=>s[ee](...l));
        }
    }), De = En;
    Xt();
    kt(Ct);
    Pt(Mt);
    ht(Me);
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const e = Q();
        e.__INTLIFY__ = !0, Dt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
    }
});
export { Fn as c, se as u, __tla };
