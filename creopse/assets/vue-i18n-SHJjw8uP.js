import { i as Ce, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-EkcE1Ky6.js";
import { D as vt, u as x, c as Rt, a as me, b as fe, i as $, A as It, s as Ot, g as Tt, N as Lt, f as Q, d as _e, C as Ft, p as ge, t as be, M as de, e as Ee, h as pe, j as ve, n as Re, k as Nt, l as yt, m as kt, r as St, o as ht, q as Dt, v as Pt, w as Ct, x as Mt } from "./intlify_core-base-gG9NE0v7.js";
import { e as k, u as P, m as At, h as L, d as O, f as h, a as d, b as N, c as y, g as Ie, i as Y, v as B, x as G, j as X, l as U, k as Me } from "./intlify_shared-Dm2CDzlq.js";
import { c as Vt } from "./intlify_message-compiler-Ca-YhmqV.js";
let Fn, se;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const q = await Ce("vue"), { createVNode: xt, Text: wt, computed: w, watch: z, ref: Ut, shallowRef: Wt, Fragment: Ae, defineComponent: ae, h: Ve, effectScope: jt, inject: Ht, onMounted: Yt, onUnmounted: $t, isRef: Gt } = await Ce("vue"), Bt = "11.3.0";
    function Xt() {
        typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Me().__INTLIFY_PROD_DEVTOOLS__ = !1);
    }
    const T = {
        UNEXPECTED_RETURN_TYPE: Ft,
        INVALID_ARGUMENT: 25,
        MUST_BE_CALL_SETUP_TOP: 26,
        NOT_INSTALLED: 27,
        REQUIRED_VALUE: 28,
        INVALID_VALUE: 29,
        NOT_INSTALLED_WITH_PROVIDE: 31,
        UNEXPECTED_ERROR: 32
    };
    function F(e, ...n) {
        return Vt(e, null, void 0);
    }
    const Z = P("__translateVNode"), ee = P("__datetimeParts"), te = P("__numberParts"), Kt = P("__setPluralRules"), Jt = P("__injectWithOption"), ne = P("__dispose");
    function W(e) {
        if (!L(e) || $(e)) return e;
        for(const n in e)if (X(e, n)) if (!n.includes(".")) L(e[n]) && W(e[n]);
        else {
            const s = n.split("."), l = s.length - 1;
            let c = e, u = !1;
            for(let r = 0; r < l; r++){
                if (s[r] === "__proto__") throw new Error(`unsafe key: ${s[r]}`);
                if (s[r] in c || (c[s[r]] = O()), !L(c[s[r]])) {
                    u = !0;
                    break;
                }
                c = c[s[r]];
            }
            if (u || ($(c) ? It.includes(s[l]) || delete e[n] : (c[s[l]] = e[n], delete e[n])), !$(c)) {
                const r = c[s[l]];
                L(r) && W(r);
            }
        }
        return e;
    }
    function xe(e, n) {
        const { messages: s, __i18n: l, messageResolver: c, flatJson: u } = n, r = y(s) ? s : N(l) ? O() : {
            [e]: O()
        };
        if (N(l) && l.forEach((o)=>{
            if ("locale" in o && "resource" in o) {
                const { locale: i, resource: f } = o;
                i ? (r[i] = r[i] || O(), G(f, r[i])) : G(f, r);
            } else d(o) && G(JSON.parse(o), r);
        }), c == null && u) for(const o in r)X(r, o) && W(r[o]);
        return r;
    }
    function we(e) {
        return e.type;
    }
    function qt(e, n, s) {
        let l = L(n.messages) ? n.messages : O();
        "__i18nGlobal" in s && (l = xe(e.locale.value, {
            messages: l,
            __i18n: s.__i18nGlobal
        }));
        const c = Object.keys(l);
        c.length && c.forEach((u)=>{
            e.mergeLocaleMessage(u, l[u]);
        });
        {
            if (L(n.datetimeFormats)) {
                const u = Object.keys(n.datetimeFormats);
                u.length && u.forEach((r)=>{
                    e.mergeDateTimeFormat(r, n.datetimeFormats[r]);
                });
            }
            if (L(n.numberFormats)) {
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
        let r = h(e.inheritLocale) ? e.inheritLocale : !0;
        const o = u(n && r ? n.locale.value : d(e.locale) ? e.locale : vt), i = u(n && r ? n.fallbackLocale.value : d(e.fallbackLocale) || N(e.fallbackLocale) || y(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value), f = u(xe(o.value, e)), _ = u(y(e.datetimeFormats) ? e.datetimeFormats : {
            [o.value]: {}
        }), E = u(y(e.numberFormats) ? e.numberFormats : {
            [o.value]: {}
        });
        let v = n ? n.missingWarn : h(e.missingWarn) || Ie(e.missingWarn) ? e.missingWarn : !0, R = n ? n.fallbackWarn : h(e.fallbackWarn) || Ie(e.fallbackWarn) ? e.fallbackWarn : !0, S = n ? n.fallbackRoot : h(e.fallbackRoot) ? e.fallbackRoot : !0, D = !!e.fallbackFormat, oe = Y(e.missing) ? e.missing : null, j = Y(e.missing) ? Ne(e.missing) : null, V = Y(e.postTranslation) ? e.postTranslation : null, K = n ? n.warnHtmlMessage : h(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, J = !!e.escapeParameter;
        const ce = n ? n.modifiers : y(e.modifiers) ? e.modifiers : {};
        let H = e.pluralRules || n && n.pluralRules, m;
        m = (()=>{
            l && _e(null);
            const t = {
                version: Bt,
                locale: o.value,
                fallbackLocale: i.value,
                messages: f.value,
                modifiers: ce,
                pluralRules: H,
                missing: j === null ? void 0 : j,
                missingWarn: v,
                fallbackWarn: R,
                fallbackFormat: D,
                unresolving: !0,
                postTranslation: V === null ? void 0 : V,
                warnHtmlMessage: K,
                escapeParameter: J,
                messageResolver: e.messageResolver,
                messageCompiler: e.messageCompiler,
                __meta: {
                    framework: "vue"
                }
            };
            t.datetimeFormats = _.value, t.numberFormats = E.value, t.__datetimeFormatters = y(m) ? m.__datetimeFormatters : void 0, t.__numberFormatters = y(m) ? m.__numberFormatters : void 0;
            const a = Rt(t);
            return l && _e(a), a;
        })(), x(m, o.value, i.value);
        function He() {
            return [
                o.value,
                i.value,
                f.value,
                _.value,
                E.value
            ];
        }
        const Ye = w({
            get: ()=>o.value,
            set: (t)=>{
                m.locale = t, o.value = t;
            }
        }), $e = w({
            get: ()=>i.value,
            set: (t)=>{
                m.fallbackLocale = t, i.value = t, x(m, o.value, t);
            }
        }), Ge = w(()=>f.value), Be = w(()=>_.value), Xe = w(()=>E.value);
        function Ke() {
            return Y(V) ? V : null;
        }
        function Je(t) {
            V = t, m.postTranslation = t;
        }
        function qe() {
            return oe;
        }
        function Qe(t) {
            t !== null && (j = Ne(t)), oe = t, m.missing = j;
        }
        const C = (t, a, g, b, M, A)=>{
            He();
            let I;
            try {
                __INTLIFY_PROD_DEVTOOLS__ && Ot(zt()), l || (m.fallbackContext = n ? Tt() : void 0), I = t(m);
            } finally{
                __INTLIFY_PROD_DEVTOOLS__, l || (m.fallbackContext = void 0);
            }
            if (g !== "translate exists" && U(I) && I === Lt || g === "translate exists" && !I) {
                const [pt, Rn] = a();
                return n && S ? b(n) : M(pt);
            } else {
                if (A(I)) return I;
                throw F(T.UNEXPECTED_RETURN_TYPE);
            }
        };
        function ue(...t) {
            return C((a)=>Reflect.apply(be, null, [
                    a,
                    ...t
                ]), ()=>ge(...t), "translate", (a)=>Reflect.apply(a.t, a, [
                    ...t
                ]), (a)=>a, (a)=>d(a));
        }
        function ze(...t) {
            const [a, g, b] = t;
            if (b && !L(b)) throw F(T.INVALID_ARGUMENT);
            return ue(a, g, k({
                resolvedMessage: !0
            }, b || {}));
        }
        function Ze(...t) {
            return C((a)=>Reflect.apply(pe, null, [
                    a,
                    ...t
                ]), ()=>Ee(...t), "datetime format", (a)=>Reflect.apply(a.d, a, [
                    ...t
                ]), ()=>de, (a)=>d(a) || N(a));
        }
        function et(...t) {
            return C((a)=>Reflect.apply(Re, null, [
                    a,
                    ...t
                ]), ()=>ve(...t), "number format", (a)=>Reflect.apply(a.n, a, [
                    ...t
                ]), ()=>de, (a)=>d(a) || N(a));
        }
        function tt(t) {
            return t.map((a)=>d(a) || U(a) || h(a) ? Oe(String(a)) : a);
        }
        const nt = {
            normalize: tt,
            interpolate: (t)=>t,
            type: "vnode"
        };
        function at(...t) {
            return C((a)=>{
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
                ], (a)=>N(a));
        }
        function rt(...t) {
            return C((a)=>Reflect.apply(Re, null, [
                    a,
                    ...t
                ]), ()=>ve(...t), "number format", (a)=>a[te](...t), Le, (a)=>d(a) || N(a));
        }
        function lt(...t) {
            return C((a)=>Reflect.apply(pe, null, [
                    a,
                    ...t
                ]), ()=>Ee(...t), "datetime format", (a)=>a[ee](...t), Le, (a)=>d(a) || N(a));
        }
        function st(t) {
            H = t, m.pluralRules = H;
        }
        function ot(t, a) {
            return C(()=>{
                if (!t) return !1;
                const g = d(a) ? a : o.value, b = d(a) ? [
                    g
                ] : Q(m, i.value, g);
                for(let M = 0; M < b.length; M++){
                    const A = ie(b[M]);
                    let I = m.messageResolver(A, t);
                    if (I === null && (I = A[t]), $(I) || Nt(I) || d(I)) return !0;
                }
                return !1;
            }, ()=>[
                    t
                ], "translate exists", (g)=>Reflect.apply(g.te, g, [
                    t,
                    a
                ]), Qt, (g)=>h(g));
        }
        function ct(t) {
            let a = null;
            const g = Q(m, i.value, o.value);
            for(let b = 0; b < g.length; b++){
                const M = f.value[g[b]] || {}, A = m.messageResolver(M, t);
                if (A != null) {
                    a = A;
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
            return f.value[t] || {};
        }
        function it(t, a) {
            if (c) {
                const g = {
                    [t]: a
                };
                for(const b in g)X(g, b) && W(g[b]);
                a = g[t];
            }
            f.value[t] = a, m.messages = f.value;
        }
        function mt(t, a) {
            f.value[t] = f.value[t] || {};
            const g = {
                [t]: a
            };
            if (c) for(const b in g)X(g, b) && W(g[b]);
            a = g[t], G(a, f.value[t]), m.messages = f.value;
        }
        function ft(t) {
            return _.value[t] || {};
        }
        function _t(t, a) {
            _.value[t] = a, m.datetimeFormats = _.value, me(m, t, a);
        }
        function gt(t, a) {
            _.value[t] = k(_.value[t] || {}, a), m.datetimeFormats = _.value, me(m, t, a);
        }
        function bt(t) {
            return E.value[t] || {};
        }
        function dt(t, a) {
            E.value[t] = a, m.numberFormats = E.value, fe(m, t, a);
        }
        function Et(t, a) {
            E.value[t] = k(E.value[t] || {}, a), m.numberFormats = E.value, fe(m, t, a);
        }
        Fe++, n && B && (z(n.locale, (t)=>{
            r && (o.value = t, m.locale = t, x(m, o.value, i.value));
        }), z(n.fallbackLocale, (t)=>{
            r && (i.value = t, m.fallbackLocale = t, x(m, o.value, i.value));
        }));
        const p = {
            id: Fe,
            locale: Ye,
            fallbackLocale: $e,
            get inheritLocale () {
                return r;
            },
            set inheritLocale (t){
                r = t, t && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, x(m, o.value, i.value));
            },
            get availableLocales () {
                return Object.keys(f.value).sort();
            },
            messages: Ge,
            get modifiers () {
                return ce;
            },
            get pluralRules () {
                return H || {};
            },
            get isGlobal () {
                return l;
            },
            get missingWarn () {
                return v;
            },
            set missingWarn (t){
                v = t, m.missingWarn = v;
            },
            get fallbackWarn () {
                return R;
            },
            set fallbackWarn (t){
                R = t, m.fallbackWarn = R;
            },
            get fallbackRoot () {
                return S;
            },
            set fallbackRoot (t){
                S = t;
            },
            get fallbackFormat () {
                return D;
            },
            set fallbackFormat (t){
                D = t, m.fallbackFormat = D;
            },
            get warnHtmlMessage () {
                return K;
            },
            set warnHtmlMessage (t){
                K = t, m.warnHtmlMessage = t;
            },
            get escapeParameter () {
                return J;
            },
            set escapeParameter (t){
                J = t, m.escapeParameter = t;
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
        return p.datetimeFormats = Be, p.numberFormats = Xe, p.rt = ze, p.te = ot, p.tm = ut, p.d = Ze, p.n = et, p.getDateTimeFormat = ft, p.setDateTimeFormat = _t, p.mergeDateTimeFormat = gt, p.getNumberFormat = bt, p.setNumberFormat = dt, p.mergeNumberFormat = Et, p[Jt] = s, p[Z] = at, p[ee] = lt, p[te] = rt, p;
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
        }, O());
    }
    function We() {
        return Ae;
    }
    const en = ae({
        name: "i18n-t",
        props: k({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [
                    Number,
                    String
                ],
                validator: (e)=>U(e) || !isNaN(e)
            }
        }, le),
        setup (e, n) {
            const { slots: s, attrs: l } = n, c = e.i18n || se({
                useScope: e.scope,
                __useComponent: !0
            });
            return ()=>{
                const u = Object.keys(s).filter((E)=>E[0] !== "_"), r = O();
                e.locale && (r.locale = e.locale), e.plural !== void 0 && (r.plural = d(e.plural) ? +e.plural : e.plural);
                const o = Zt(n, u), i = c[Z](e.keypath, o, r), f = k(O(), l), _ = d(e.tag) || L(e.tag) ? e.tag : We();
                return Ve(_, f, i);
            };
        }
    }), ye = en;
    function tn(e) {
        return N(e) && !d(e[0]);
    }
    function je(e, n, s, l) {
        const { slots: c, attrs: u } = n;
        return ()=>{
            const r = {
                part: !0
            };
            let o = O();
            e.locale && (r.locale = e.locale), d(e.format) ? r.key = e.format : L(e.format) && (d(e.format.key) && (r.key = e.format.key), o = Object.keys(e.format).reduce((v, R)=>s.includes(R) ? k(O(), v, {
                    [R]: e.format[R]
                }) : v, O()));
            const i = l(e.value, r, o);
            let f = [
                r.key
            ];
            N(i) ? f = i.map((v, R)=>{
                const S = c[v.type], D = S ? S({
                    [v.type]: v.value,
                    index: R,
                    parts: i
                }) : [
                    v.value
                ];
                return tn(D) && (D[0].key = `${v.type}-${R}`), D;
            }) : d(i) && (f = [
                i
            ]);
            const _ = k(O(), u), E = d(e.tag) || L(e.tag) ? e.tag : We();
            return Ve(E, _, f);
        };
    }
    const nn = ae({
        name: "i18n-n",
        props: k({
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
    }), ke = nn;
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
            if (!o || !o.$) throw F(T.UNEXPECTED_ERROR);
            const f = an(e, o.$), _ = Se(i);
            return [
                Reflect.apply(f.t, f, [
                    ...he(_)
                ]),
                f
            ];
        };
        return {
            created: (r, o)=>{
                const [i, f] = n(o);
                B && (r.__i18nWatcher = z(f.locale, ()=>{
                    o.instance && o.instance.$forceUpdate();
                })), r.__composer = f, r.textContent = i;
            },
            unmounted: (r)=>{
                B && r.__i18nWatcher && (r.__i18nWatcher(), r.__i18nWatcher = void 0, delete r.__i18nWatcher), r.__composer && (r.__composer = void 0, delete r.__composer);
            },
            beforeUpdate: (r, { value: o })=>{
                if (r.__composer) {
                    const i = r.__composer, f = Se(o);
                    r.textContent = Reflect.apply(i.t, i, [
                        ...he(f)
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
    function Se(e) {
        if (d(e)) return {
            path: e
        };
        if (y(e)) {
            if (!("path" in e)) throw F(T.REQUIRED_VALUE, "path");
            return e;
        } else throw F(T.INVALID_VALUE);
    }
    function he(e) {
        const { path: n, locale: s, args: l, choice: c, plural: u } = e, r = {}, o = l || {};
        return d(s) && (r.locale = s), U(c) && (r.plural = c), U(u) && (r.plural = u), [
            n,
            o,
            r
        ];
    }
    function ln(e, n, ...s) {
        const l = y(s[0]) ? s[0] : {};
        (!h(l.globalInstall) || l.globalInstall) && ([
            ye.name,
            "I18nT"
        ].forEach((u)=>e.component(u, ye)), [
            ke.name,
            "I18nN"
        ].forEach((u)=>e.component(u, ke)), [
            Pe.name,
            "I18nD"
        ].forEach((u)=>e.component(u, Pe))), e.directive("t", rn(n));
    }
    const sn = P("global-vue-i18n");
    Fn = function(e = {}) {
        const n = h(e.globalInjection) ? e.globalInjection : !0, s = new Map, [l, c] = on(e), u = P("");
        function r(_) {
            return s.get(_) || null;
        }
        function o(_, E) {
            s.set(_, E);
        }
        function i(_) {
            s.delete(_);
        }
        const f = {
            get mode () {
                return "composition";
            },
            async install (_, ...E) {
                if (_.__VUE_I18N_SYMBOL__ = u, _.provide(_.__VUE_I18N_SYMBOL__, f), y(E[0])) {
                    const S = E[0];
                    f.__composerExtend = S.__composerExtend, f.__vueI18nExtend = S.__vueI18nExtend;
                }
                let v = null;
                n && (v = dn(_, f.global)), ln(_, f, ...E);
                const R = _.unmount;
                _.unmount = ()=>{
                    v && v(), f.dispose(), R();
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
        return f;
    };
    se = function(e = {}) {
        const n = re();
        if (n == null) throw F(T.MUST_BE_CALL_SETUP_TOP);
        if (!n.isCE && n.appContext.app != null && !n.appContext.app.__VUE_I18N_SYMBOL__) throw F(T.NOT_INSTALLED);
        const s = cn(n), l = mn(s), c = we(n), u = un(e, c);
        if (u === "global") return qt(l, e, c), l;
        if (u === "parent") {
            let i = fn(s, n, e.__useComponent);
            return i == null && (i = l), i;
        }
        const r = s;
        let o = r.__getInstance(n);
        if (o == null) {
            const i = k({}, e);
            "__i18n" in c && (i.__i18n = c.__i18n), l && (i.__root = l), o = Ue(i), r.__composerExtend && (o[ne] = r.__composerExtend(o)), gn(r, n, o), r.__setInstance(n, o);
        }
        return o;
    };
    function on(e, n) {
        const s = jt(), l = s.run(()=>Ue(e));
        if (l == null) throw F(T.UNEXPECTED_ERROR);
        return [
            s,
            l
        ];
    }
    function cn(e) {
        const n = Ht(e.isCE ? sn : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!n) throw F(e.isCE ? T.NOT_INSTALLED_WITH_PROVIDE : T.UNEXPECTED_ERROR);
        return n;
    }
    function un(e, n) {
        return At(e) ? "__i18n" in n ? "local" : "global" : e.useScope ? e.useScope : "local";
    }
    function mn(e) {
        return e.mode === "composition" ? e.global : e.global.__composer;
    }
    function fn(e, n, s = !1) {
        let l = null;
        const c = n.root;
        let u = _n(n, s);
        for(; u != null;){
            const r = e;
            if (e.mode === "composition" && (l = r.__getInstance(u)), l != null || c === u) break;
            u = u.parent;
        }
        return l;
    }
    function _n(e, n = !1) {
        return e == null ? null : n && e.vnode.ctx || e.parent;
    }
    function gn(e, n, s) {
        Yt(()=>{}, n), $t(()=>{
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
    ], De = [
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
            if (!u) throw F(T.UNEXPECTED_ERROR);
            const r = Gt(u.value) ? {
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
        }), e.config.globalProperties.$i18n = s, De.forEach((c)=>{
            const u = Object.getOwnPropertyDescriptor(n, c);
            if (!u || !u.value) throw F(T.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${c}`, u);
        }), ()=>{
            delete e.config.globalProperties.$i18n, De.forEach((c)=>{
                delete e.config.globalProperties[`$${c}`];
            });
        };
    }
    const En = ae({
        name: "i18n-d",
        props: k({
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
            return je(e, n, kt, (...l)=>s[ee](...l));
        }
    }), Pe = En;
    Xt();
    St(Ct);
    ht(Mt);
    Dt(Q);
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const e = Me();
        e.__INTLIFY__ = !0, Pt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
    }
});
export { Fn as c, se as u, __tla };
