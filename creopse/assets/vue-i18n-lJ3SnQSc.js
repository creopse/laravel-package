import { i as Ve, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-CYs-LgKv.js";
import { D as vt, u as U, c as Ot, a as fe, b as ge, i as B, A as Rt, s as Tt, g as Lt, N as Nt, f as ee, d as de, C as Ft, p as be, t as Ee, M as pe, e as Ie, h as ve, j as Oe, n as Re, k as St, l as yt, m as kt, r as ht, o as Ct, q as Pt, v as Dt, w as At, x as Mt } from "./intlify_core-base-GKvVGjKr.js";
import { e as S, u as C, m as Vt, h as R, d as N, f as h, a as E, b as y, c as k, g as Te, i as $, v as K, x as X, j as J, l as j, k as xe } from "./intlify_shared-CSESVZPA.js";
import { c as xt } from "./intlify_message-compiler-BcgTmAug.js";
let Sn, ue;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const Z = await Ve("vue"), { createVNode: wt, Text: Ut, computed: W, watch: te, ref: Wt, shallowRef: jt, Fragment: we, defineComponent: se, h: q, getCurrentScope: Yt, onScopeDispose: Ht, effectScope: Gt, inject: $t, onMounted: Bt, onUnmounted: Xt, isRef: Kt } = await Ve("vue"), Jt = "11.4.5";
    function qt() {
        typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xe().__INTLIFY_PROD_DEVTOOLS__ = !1);
    }
    const T = {
        UNEXPECTED_RETURN_TYPE: Ft,
        INVALID_ARGUMENT: 25,
        MUST_BE_CALL_SETUP_TOP: 26,
        NOT_INSTALLED: 27,
        REQUIRED_VALUE: 28,
        INVALID_VALUE: 29,
        NOT_INSTALLED_WITH_PROVIDE: 31,
        UNEXPECTED_ERROR: 32,
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
    };
    function F(e, ...n) {
        return xt(e, null, void 0);
    }
    const ne = C("__translateVNode"), ae = C("__datetimeParts"), re = C("__numberParts"), Qt = C("__setPluralRules"), zt = C("__injectWithOption"), x = C("__dispose");
    function Y(e) {
        if (!R(e) || B(e)) return e;
        for(const n in e)if (J(e, n)) if (!n.includes(".")) R(e[n]) && Y(e[n]);
        else {
            const l = n.split("."), s = l.length - 1;
            let u = e, c = !1;
            for(let r = 0; r < s; r++){
                if (l[r] === "__proto__") throw new Error(`unsafe key: ${l[r]}`);
                if (l[r] in u || (u[l[r]] = N()), !R(u[l[r]])) {
                    c = !0;
                    break;
                }
                u = u[l[r]];
            }
            if (c || (B(u) ? Rt.includes(l[s]) || delete e[n] : (u[l[s]] = e[n], delete e[n])), !B(u)) {
                const r = u[l[s]];
                R(r) && Y(r);
            }
        }
        return e;
    }
    function Ue(e, n) {
        const { messages: l, __i18n: s, messageResolver: u, flatJson: c } = n, r = k(l) ? l : y(s) ? N() : {
            [e]: N()
        };
        if (y(s) && s.forEach((o)=>{
            if ("locale" in o && "resource" in o) {
                const { locale: m, resource: i } = o;
                m ? (r[m] = r[m] || N(), X(i, r[m])) : X(i, r);
            } else E(o) && X(JSON.parse(o), r);
        }), u == null && c) for(const o in r)J(r, o) && Y(r[o]);
        return r;
    }
    function We(e) {
        return e.type;
    }
    function Zt(e, n, l) {
        let s = R(n.messages) ? n.messages : N();
        "__i18nGlobal" in l && (s = Ue(e.locale.value, {
            messages: s,
            __i18n: l.__i18nGlobal
        }));
        const u = Object.keys(s);
        u.length && u.forEach((c)=>{
            e.mergeLocaleMessage(c, s[c]);
        });
        {
            if (R(n.datetimeFormats)) {
                const c = Object.keys(n.datetimeFormats);
                c.length && c.forEach((r)=>{
                    e.mergeDateTimeFormat(r, n.datetimeFormats[r]);
                });
            }
            if (R(n.numberFormats)) {
                const c = Object.keys(n.numberFormats);
                c.length && c.forEach((r)=>{
                    e.mergeNumberFormat(r, n.numberFormats[r]);
                });
            }
        }
    }
    function Le(e) {
        return wt(Ut, null, e, 0);
    }
    function oe() {
        const e = "currentInstance";
        return e in Z ? Z[e] : Z.getCurrentInstance();
    }
    const Ne = "__INTLIFY_META__", Fe = ()=>[], en = ()=>!1;
    let Se = 0;
    function ye(e) {
        return ((n, l, s, u)=>e(l, s, oe() || void 0, u));
    }
    const tn = ()=>{
        const e = oe();
        let n = null;
        return e && (n = We(e)[Ne]) ? {
            [Ne]: n
        } : null;
    };
    function le(e = {}) {
        const { __root: n, __injectWithOption: l } = e, s = n === void 0, u = e.flatJson, c = K ? Wt : jt;
        let r = h(e.inheritLocale) ? e.inheritLocale : !0;
        const o = c(n && r ? n.locale.value : E(e.locale) ? e.locale : vt), m = c(n && r ? n.fallbackLocale.value : E(e.fallbackLocale) || y(e.fallbackLocale) || k(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value), i = c(Ue(o.value, e)), f = c(k(e.datetimeFormats) ? e.datetimeFormats : {
            [o.value]: {}
        }), g = c(k(e.numberFormats) ? e.numberFormats : {
            [o.value]: {}
        });
        let v = n ? n.missingWarn : h(e.missingWarn) || Te(e.missingWarn) ? e.missingWarn : !0, p = n ? n.fallbackWarn : h(e.fallbackWarn) || Te(e.fallbackWarn) ? e.fallbackWarn : !0, O = n ? n.fallbackRoot : h(e.fallbackRoot) ? e.fallbackRoot : !0, P = !!e.fallbackFormat, V = $(e.missing) ? e.missing : null, H = $(e.missing) ? ye(e.missing) : null, w = $(e.postTranslation) ? e.postTranslation : null, Q = n ? n.warnHtmlMessage : h(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, z = !!e.escapeParameter;
        const ie = n ? n.modifiers : k(e.modifiers) ? e.modifiers : {};
        let G = e.pluralRules || n && n.pluralRules, _;
        _ = (()=>{
            s && de(null);
            const t = {
                version: Jt,
                locale: o.value,
                fallbackLocale: m.value,
                messages: i.value,
                modifiers: ie,
                pluralRules: G,
                missing: H === null ? void 0 : H,
                missingWarn: v,
                fallbackWarn: p,
                fallbackFormat: P,
                unresolving: !0,
                postTranslation: w === null ? void 0 : w,
                warnHtmlMessage: Q,
                escapeParameter: z,
                messageResolver: e.messageResolver,
                messageCompiler: e.messageCompiler,
                __meta: {
                    framework: "vue"
                }
            };
            t.datetimeFormats = f.value, t.numberFormats = g.value, t.__datetimeFormatters = k(_) ? _.__datetimeFormatters : void 0, t.__numberFormatters = k(_) ? _.__numberFormatters : void 0;
            const a = Ot(t);
            return s && de(a), a;
        })(), U(_, o.value, m.value);
        function He() {
            return [
                o.value,
                m.value,
                i.value,
                f.value,
                g.value
            ];
        }
        const Ge = W({
            get: ()=>o.value,
            set: (t)=>{
                _.locale = t, o.value = t;
            }
        }), $e = W({
            get: ()=>m.value,
            set: (t)=>{
                _.fallbackLocale = t, m.value = t, U(_, o.value, t);
            }
        }), Be = W(()=>i.value), Xe = W(()=>f.value), Ke = W(()=>g.value);
        function Je() {
            return $(w) ? w : null;
        }
        function qe(t) {
            w = t, _.postTranslation = t;
        }
        function Qe() {
            return V;
        }
        function ze(t) {
            t !== null && (H = ye(t)), V = t, _.missing = H;
        }
        const D = (t, a, d, b, A, M)=>{
            He();
            let L;
            try {
                __INTLIFY_PROD_DEVTOOLS__ && Tt(tn()), s || (_.fallbackContext = n ? Lt() : void 0), L = t(_);
            } finally{
                __INTLIFY_PROD_DEVTOOLS__, s || (_.fallbackContext = void 0);
            }
            if (d !== "translate exists" && j(L) && L === Nt || d === "translate exists" && !L) {
                const [It, Rn] = a();
                return n && O ? b(n) : A(It);
            } else {
                if (M(L)) return L;
                throw F(T.UNEXPECTED_RETURN_TYPE);
            }
        };
        function me(...t) {
            return D((a)=>Reflect.apply(Ee, null, [
                    a,
                    ...t
                ]), ()=>be(...t), "translate", (a)=>Reflect.apply(a.t, a, [
                    ...t
                ]), (a)=>a, (a)=>E(a));
        }
        function Ze(...t) {
            const [a, d, b] = t;
            if (b && !R(b)) throw F(T.INVALID_ARGUMENT);
            return me(a, d, S({
                resolvedMessage: !0
            }, b || {}));
        }
        function et(...t) {
            return D((a)=>Reflect.apply(ve, null, [
                    a,
                    ...t
                ]), ()=>Ie(...t), "datetime format", (a)=>Reflect.apply(a.d, a, [
                    ...t
                ]), ()=>pe, (a)=>E(a) || y(a));
        }
        function tt(...t) {
            return D((a)=>Reflect.apply(Re, null, [
                    a,
                    ...t
                ]), ()=>Oe(...t), "number format", (a)=>Reflect.apply(a.n, a, [
                    ...t
                ]), ()=>pe, (a)=>E(a) || y(a));
        }
        function nt(t) {
            return t.map((a)=>E(a) || j(a) || h(a) ? Le(String(a)) : a);
        }
        const at = {
            normalize: nt,
            interpolate: (t)=>t,
            type: "vnode"
        };
        function rt(...t) {
            return D((a)=>{
                let d;
                const b = a;
                try {
                    b.processor = at, d = Reflect.apply(Ee, null, [
                        b,
                        ...t
                    ]);
                } finally{
                    b.processor = null;
                }
                return d;
            }, ()=>be(...t), "translate", (a)=>a[ne](...t), (a)=>[
                    Le(a)
                ], (a)=>y(a));
        }
        function lt(...t) {
            return D((a)=>Reflect.apply(Re, null, [
                    a,
                    ...t
                ]), ()=>Oe(...t), "number format", (a)=>a[re](...t), Fe, (a)=>E(a) || y(a));
        }
        function st(...t) {
            return D((a)=>Reflect.apply(ve, null, [
                    a,
                    ...t
                ]), ()=>Ie(...t), "datetime format", (a)=>a[ae](...t), Fe, (a)=>E(a) || y(a));
        }
        function ot(t) {
            G = t, _.pluralRules = G;
        }
        function ct(t, a) {
            return D(()=>{
                if (!t) return !1;
                const d = E(a) ? a : o.value, b = E(a) ? [
                    d
                ] : ee(_, m.value, d);
                for(let A = 0; A < b.length; A++){
                    const M = _e(b[A]);
                    let L = _.messageResolver(M, t);
                    if (L === null && (L = M[t]), B(L) || St(L) || E(L)) return !0;
                }
                return !1;
            }, ()=>[
                    t
                ], "translate exists", (d)=>Reflect.apply(d.te, d, [
                    t,
                    a
                ]), en, (d)=>h(d));
        }
        function ut(t) {
            let a = null;
            const d = ee(_, m.value, o.value);
            for(let b = 0; b < d.length; b++){
                const A = i.value[d[b]] || {}, M = _.messageResolver(A, t);
                if (M != null) {
                    a = M;
                    break;
                }
            }
            return a;
        }
        function it(t) {
            const a = ut(t);
            return a ?? (n ? n.tm(t) || {} : {});
        }
        function _e(t) {
            return i.value[t] || {};
        }
        function mt(t, a) {
            if (u) {
                const d = {
                    [t]: a
                };
                for(const b in d)J(d, b) && Y(d[b]);
                a = d[t];
            }
            i.value[t] = a, _.messages = i.value;
        }
        function _t(t, a) {
            i.value[t] = i.value[t] || {};
            const d = {
                [t]: a
            };
            if (u) for(const b in d)J(d, b) && Y(d[b]);
            a = d[t], X(a, i.value[t]), _.messages = i.value;
        }
        function ft(t) {
            return f.value[t] || {};
        }
        function gt(t, a) {
            f.value[t] = a, _.datetimeFormats = f.value, fe(_, t, a);
        }
        function dt(t, a) {
            f.value[t] = S(f.value[t] || {}, a), _.datetimeFormats = f.value, fe(_, t, a);
        }
        function bt(t) {
            return g.value[t] || {};
        }
        function Et(t, a) {
            g.value[t] = a, _.numberFormats = g.value, ge(_, t, a);
        }
        function pt(t, a) {
            g.value[t] = S(g.value[t] || {}, a), _.numberFormats = g.value, ge(_, t, a);
        }
        Se++, n && K && (te(n.locale, (t)=>{
            r && (o.value = t, _.locale = t, U(_, o.value, m.value));
        }), te(n.fallbackLocale, (t)=>{
            r && (m.value = t, _.fallbackLocale = t, U(_, o.value, m.value));
        }));
        const I = {
            id: Se,
            locale: Ge,
            fallbackLocale: $e,
            get inheritLocale () {
                return r;
            },
            set inheritLocale (t){
                r = t, t && n && (o.value = n.locale.value, m.value = n.fallbackLocale.value, U(_, o.value, m.value));
            },
            get availableLocales () {
                return Object.keys(i.value).sort();
            },
            messages: Be,
            get modifiers () {
                return ie;
            },
            get pluralRules () {
                return G || {};
            },
            get isGlobal () {
                return s;
            },
            get missingWarn () {
                return v;
            },
            set missingWarn (t){
                v = t, _.missingWarn = v;
            },
            get fallbackWarn () {
                return p;
            },
            set fallbackWarn (t){
                p = t, _.fallbackWarn = p;
            },
            get fallbackRoot () {
                return O;
            },
            set fallbackRoot (t){
                O = t;
            },
            get fallbackFormat () {
                return P;
            },
            set fallbackFormat (t){
                P = t, _.fallbackFormat = P;
            },
            get warnHtmlMessage () {
                return Q;
            },
            set warnHtmlMessage (t){
                Q = t, _.warnHtmlMessage = t;
            },
            get escapeParameter () {
                return z;
            },
            set escapeParameter (t){
                z = t, _.escapeParameter = t;
            },
            t: me,
            getLocaleMessage: _e,
            setLocaleMessage: mt,
            mergeLocaleMessage: _t,
            getPostTranslationHandler: Je,
            setPostTranslationHandler: qe,
            getMissingHandler: Qe,
            setMissingHandler: ze,
            [Qt]: ot
        };
        return I.datetimeFormats = Xe, I.numberFormats = Ke, I.rt = Ze, I.te = ct, I.tm = it, I.d = et, I.n = tt, I.getDateTimeFormat = ft, I.setDateTimeFormat = gt, I.mergeDateTimeFormat = dt, I.getNumberFormat = bt, I.setNumberFormat = Et, I.mergeNumberFormat = pt, I[zt] = l, I[ne] = rt, I[ae] = st, I[re] = lt, I;
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
    function nn({ slots: e }, n) {
        return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((s, u)=>[
                ...s,
                ...u.type === we ? u.children : [
                    u
                ]
            ], []) : n.reduce((l, s)=>{
            const u = e[s];
            return u && (l[s] = u()), l;
        }, N());
    }
    function je() {
        return we;
    }
    const an = se({
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
                validator: (e)=>j(e) || !isNaN(e)
            }
        }, ce),
        setup (e, n) {
            const { slots: l, attrs: s } = n, u = e.i18n || ue({
                useScope: e.scope,
                __useComponent: !0
            });
            return ()=>{
                const c = ()=>{
                    const m = Object.keys(l).filter((g)=>g[0] !== "_"), i = N();
                    e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = E(e.plural) ? +e.plural : e.plural);
                    const f = nn(n, m);
                    return u[ne](e.keypath, f, i);
                }, r = S(N(), s), o = E(e.tag) || R(e.tag) ? e.tag : je();
                return R(o) ? q(o, r, {
                    default: c
                }) : q(o, r, c());
            };
        }
    }), ke = an;
    function rn(e) {
        return y(e) && !E(e[0]);
    }
    function Ye(e, n, l, s) {
        const { slots: u, attrs: c } = n;
        return ()=>{
            const r = ()=>{
                const i = {
                    part: !0
                };
                let f = N();
                e.locale && (i.locale = e.locale), E(e.format) ? i.key = e.format : R(e.format) && (E(e.format.key) && (i.key = e.format.key), f = Object.keys(e.format).reduce((p, O)=>l.includes(O) ? S(N(), p, {
                        [O]: e.format[O]
                    }) : p, N()));
                const g = s(e.value, i, f);
                let v = [
                    i.key
                ];
                return y(g) ? v = g.map((p, O)=>{
                    const P = u[p.type], V = P ? P({
                        [p.type]: p.value,
                        index: O,
                        parts: g
                    }) : [
                        p.value
                    ];
                    return rn(V) && (V[0].key = `${p.type}-${O}`), V;
                }) : E(g) && (v = [
                    g
                ]), v;
            }, o = S(N(), c), m = E(e.tag) || R(e.tag) ? e.tag : je();
            return R(m) ? q(m, o, {
                default: r
            }) : q(m, o, r());
        };
    }
    const ln = se({
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
        setup (e, n) {
            const l = e.i18n || ue({
                useScope: e.scope,
                __useComponent: !0
            });
            return Ye(e, n, yt, (...s)=>l[re](...s));
        }
    }), he = ln;
    function sn(e, n) {
        const l = e;
        if (e.mode === "composition") return l.__getInstance(n) || e.global;
        {
            const s = l.__getInstance(n);
            return s != null ? s.__composer : e.global.__composer;
        }
    }
    function on(e) {
        const n = (r)=>{
            const { instance: o, value: m } = r;
            if (!o || !o.$) throw F(T.UNEXPECTED_ERROR);
            const i = sn(e, o.$), f = Ce(m);
            return [
                Reflect.apply(i.t, i, [
                    ...Pe(f)
                ]),
                i
            ];
        };
        return {
            created: (r, o)=>{
                const [m, i] = n(o);
                K && (r.__i18nWatcher = te(i.locale, ()=>{
                    o.instance && o.instance.$forceUpdate();
                })), r.__composer = i, r.textContent = m;
            },
            unmounted: (r)=>{
                K && r.__i18nWatcher && (r.__i18nWatcher(), r.__i18nWatcher = void 0, delete r.__i18nWatcher), r.__composer && (r.__composer = void 0, delete r.__composer);
            },
            beforeUpdate: (r, { value: o })=>{
                if (r.__composer) {
                    const m = r.__composer, i = Ce(o);
                    r.textContent = Reflect.apply(m.t, m, [
                        ...Pe(i)
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
    function Ce(e) {
        if (E(e)) return {
            path: e
        };
        if (k(e)) {
            if (!("path" in e)) throw F(T.REQUIRED_VALUE, "path");
            return e;
        } else throw F(T.INVALID_VALUE);
    }
    function Pe(e) {
        const { path: n, locale: l, args: s, choice: u, plural: c } = e, r = {}, o = s || {};
        return E(l) && (r.locale = l), j(u) && (r.plural = u), j(c) && (r.plural = c), [
            n,
            o,
            r
        ];
    }
    function cn(e, n, ...l) {
        const s = k(l[0]) ? l[0] : {};
        (!h(s.globalInstall) || s.globalInstall) && ([
            ke.name,
            "I18nT"
        ].forEach((c)=>e.component(c, ke)), [
            he.name,
            "I18nN"
        ].forEach((c)=>e.component(c, he)), [
            Me.name,
            "I18nD"
        ].forEach((c)=>e.component(c, Me))), e.directive("t", on(n));
    }
    const un = C("global-vue-i18n");
    Sn = function(e = {}) {
        const n = h(e.globalInjection) ? e.globalInjection : !0, l = new Map, [s, u] = mn(e), c = C("");
        function r(f) {
            return l.get(f) || null;
        }
        function o(f, g) {
            l.set(f, g);
        }
        function m(f) {
            l.delete(f);
        }
        const i = {
            get mode () {
                return "composition";
            },
            async install (f, ...g) {
                if (f.__VUE_I18N_SYMBOL__ = c, f.provide(f.__VUE_I18N_SYMBOL__, i), k(g[0])) {
                    const O = g[0];
                    i.__composerExtend = O.__composerExtend, i.__vueI18nExtend = O.__vueI18nExtend;
                }
                let v = null;
                n && (v = pn(f, i.global)), cn(f, i, ...g);
                const p = f.unmount;
                f.unmount = ()=>{
                    v && v(), i.dispose(), p();
                };
            },
            get global () {
                return u;
            },
            dispose () {
                s.stop();
            },
            __instances: l,
            __getInstance: r,
            __setInstance: o,
            __deleteInstance: m
        };
        return i;
    };
    ue = function(e = {}) {
        const n = oe();
        if (n == null) throw F(T.MUST_BE_CALL_SETUP_TOP);
        if (!n.isCE && n.appContext.app != null && !n.appContext.app.__VUE_I18N_SYMBOL__) throw F(T.NOT_INSTALLED);
        const l = _n(n), s = gn(l), u = We(n), c = fn(e, u);
        if (c === "global") return Zt(s, e, u), s;
        if (c === "parent") {
            let m = De(l, n, e.__useComponent);
            return m == null && (m = s), m;
        }
        if (c === "isolated") {
            if (l.mode !== "composition") throw F(T.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const m = l, i = S({}, e), f = De(l, n);
            i.__root = f || s;
            const g = le(i);
            return m.__composerExtend && (g[x] = m.__composerExtend(g)), Yt() && Ht(()=>{
                const p = g[x];
                p && (p(), delete g[x]);
            }), g;
        }
        const r = l;
        let o = r.__getInstance(n);
        if (o == null) {
            const m = S({}, e);
            "__i18n" in u && (m.__i18n = u.__i18n), s && (m.__root = s), o = le(m), r.__composerExtend && (o[x] = r.__composerExtend(o)), bn(r, n, o), r.__setInstance(n, o);
        }
        return o;
    };
    function mn(e, n) {
        const l = Gt(), s = l.run(()=>le(e));
        if (s == null) throw F(T.UNEXPECTED_ERROR);
        return [
            l,
            s
        ];
    }
    function _n(e) {
        const n = $t(e.isCE ? un : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!n) throw F(e.isCE ? T.NOT_INSTALLED_WITH_PROVIDE : T.UNEXPECTED_ERROR);
        return n;
    }
    function fn(e, n) {
        return Vt(e) ? "__i18n" in n ? "local" : "global" : e.useScope ? e.useScope : "local";
    }
    function gn(e) {
        return e.mode === "composition" ? e.global : e.global.__composer;
    }
    function De(e, n, l = !1) {
        let s = null;
        const u = n.root;
        let c = dn(n, l);
        for(; c != null;){
            const r = e;
            if (e.mode === "composition" && (s = r.__getInstance(c)), s != null || u === c) break;
            c = c.parent;
        }
        return s;
    }
    function dn(e, n = !1) {
        return e == null ? null : n && e.vnode.ctx || e.parent;
    }
    function bn(e, n, l) {
        Bt(()=>{}, n), Xt(()=>{
            const s = l;
            e.__deleteInstance(n);
            const u = s[x];
            u && (u(), delete s[x]);
        }, n);
    }
    const En = [
        "locale",
        "fallbackLocale",
        "availableLocales"
    ], Ae = [
        "t",
        "rt",
        "d",
        "n",
        "tm",
        "te"
    ];
    function pn(e, n) {
        const l = Object.create(null);
        return En.forEach((u)=>{
            const c = Object.getOwnPropertyDescriptor(n, u);
            if (!c) throw F(T.UNEXPECTED_ERROR);
            const r = Kt(c.value) ? {
                get () {
                    return c.value.value;
                },
                set (o) {
                    c.value.value = o;
                }
            } : {
                get () {
                    return c.get && c.get();
                }
            };
            Object.defineProperty(l, u, r);
        }), e.config.globalProperties.$i18n = l, Ae.forEach((u)=>{
            const c = Object.getOwnPropertyDescriptor(n, u);
            if (!c || !c.value) throw F(T.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${u}`, c);
        }), ()=>{
            delete e.config.globalProperties.$i18n, Ae.forEach((u)=>{
                delete e.config.globalProperties[`$${u}`];
            });
        };
    }
    const In = se({
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
        setup (e, n) {
            const l = e.i18n || ue({
                useScope: e.scope,
                __useComponent: !0
            });
            return Ye(e, n, kt, (...s)=>l[ae](...s));
        }
    }), Me = In;
    qt();
    ht(At);
    Ct(Mt);
    Pt(ee);
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const e = xe();
        e.__INTLIFY__ = !0, Dt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
    }
});
export { Sn as c, ue as u, __tla };
