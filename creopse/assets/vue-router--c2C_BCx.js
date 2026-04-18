import { i as ye, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-B0QwtcEH.js";
let An, In, xn, Gn, bn, Pn;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const { inject: Fe } = await ye("vue"), F = typeof document < "u";
    function Ke(e) {
        return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
    }
    function lt(e) {
        return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ke(e.default);
    }
    const O = Object.assign;
    function he(e, t) {
        const n = {};
        for(const r in t){
            const o = t[r];
            n[r] = B(o) ? o.map(e) : e(o);
        }
        return n;
    }
    const X = ()=>{}, B = Array.isArray;
    function Se(e, t) {
        const n = {};
        for(const r in e)n[r] = r in t ? t[r] : e[r];
        return n;
    }
    let w = (function(e) {
        return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
    })({});
    const We = Symbol("");
    w.MATCHER_NOT_FOUND + "", w.NAVIGATION_GUARD_REDIRECT + "", w.NAVIGATION_ABORTED + "", w.NAVIGATION_CANCELLED + "", w.NAVIGATION_DUPLICATED + "";
    function K(e, t) {
        return O(new Error, {
            type: e,
            [We]: !0
        }, t);
    }
    function V(e, t) {
        return e instanceof Error && We in e && (t == null || !!(e.type & t));
    }
    const ft = [
        "params",
        "query",
        "hash"
    ];
    function ht(e) {
        if (typeof e == "string") return e;
        if (e.path != null) return e.path;
        const t = {};
        for (const n of ft)n in e && (t[n] = e[n]);
        return JSON.stringify(t, null, 2);
    }
    const Qe = Symbol(""), be = Symbol(""), oe = Symbol(""), Ne = Symbol(""), ve = Symbol("");
    In = function() {
        return Fe(oe);
    };
    Pn = function(e) {
        return Fe(Ne);
    };
    const { getCurrentInstance: wn, inject: dt, onActivated: pt, onDeactivated: mt, onUnmounted: gt, watch: Sn } = await ye("vue"), ze = /#/g, vt = /&/g, Rt = /\//g, Et = /=/g, At = /\?/g, Ye = /\+/g, yt = /%5B/g, Nt = /%5D/g, Je = /%5E/g, Ot = /%60/g, Xe = /%7B/g, Ct = /%7C/g, Ze = /%7D/g, _t = /%20/g;
    function Oe(e) {
        return e == null ? "" : encodeURI("" + e).replace(Ct, "|").replace(yt, "[").replace(Nt, "]");
    }
    function It(e) {
        return Oe(e).replace(Xe, "{").replace(Ze, "}").replace(Je, "^");
    }
    function Re(e) {
        return Oe(e).replace(Ye, "%2B").replace(_t, "+").replace(ze, "%23").replace(vt, "%26").replace(Ot, "`").replace(Xe, "{").replace(Ze, "}").replace(Je, "^");
    }
    function Pt(e) {
        return Re(e).replace(Et, "%3D");
    }
    function wt(e) {
        return Oe(e).replace(ze, "%23").replace(At, "%3F");
    }
    function St(e) {
        return wt(e).replace(Rt, "%2F");
    }
    function ee(e) {
        if (e == null) return null;
        try {
            return decodeURIComponent("" + e);
        } catch  {}
        return "" + e;
    }
    const bt = /\/$/, Tt = (e)=>e.replace(bt, "");
    function de(e, t, n = "/") {
        let r, o = {}, l = "", h = "";
        const g = t.indexOf("#");
        let i = t.indexOf("?");
        return i = g >= 0 && i > g ? -1 : i, i >= 0 && (r = t.slice(0, i), l = t.slice(i, g > 0 ? g : t.length), o = e(l.slice(1))), g >= 0 && (r = r || t.slice(0, g), h = t.slice(g, t.length)), r = kt(r ?? t, n), {
            fullPath: r + l + h,
            path: r,
            query: o,
            hash: ee(h)
        };
    }
    function Dt(e, t) {
        const n = t.query ? e(t.query) : "";
        return t.path + (n && "?") + n + (t.hash || "");
    }
    function Te(e, t) {
        return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
    }
    function xt(e, t, n) {
        const r = t.matched.length - 1, o = n.matched.length - 1;
        return r > -1 && r === o && W(t.matched[r], n.matched[o]) && et(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
    }
    function W(e, t) {
        return (e.aliasOf || e) === (t.aliasOf || t);
    }
    function et(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for(var n in e)if (!Gt(e[n], t[n])) return !1;
        return !0;
    }
    function Gt(e, t) {
        return B(e) ? De(e, t) : B(t) ? De(t, e) : (e && e.valueOf()) === (t && t.valueOf());
    }
    function De(e, t) {
        return B(t) ? e.length === t.length && e.every((n, r)=>n === t[r]) : e.length === 1 && e[0] === t;
    }
    function kt(e, t) {
        if (e.startsWith("/")) return e;
        if (!e) return t;
        const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
        (o === ".." || o === ".") && r.push("");
        let l = n.length - 1, h, g;
        for(h = 0; h < r.length; h++)if (g = r[h], g !== ".") if (g === "..") l > 1 && l--;
        else break;
        return n.slice(0, l).join("/") + "/" + r.slice(h).join("/");
    }
    const M = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    };
    let Ee = (function(e) {
        return e.pop = "pop", e.push = "push", e;
    })({}), pe = (function(e) {
        return e.back = "back", e.forward = "forward", e.unknown = "", e;
    })({});
    function Bt(e) {
        if (!e) if (F) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
        } else e = "/";
        return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Tt(e);
    }
    const Lt = /^[^#]+#/;
    function Vt(e, t) {
        return e.replace(Lt, "#") + t;
    }
    function $t(e, t) {
        const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
        return {
            behavior: t.behavior,
            left: r.left - n.left - (t.left || 0),
            top: r.top - n.top - (t.top || 0)
        };
    }
    const se = ()=>({
            left: window.scrollX,
            top: window.scrollY
        });
    function Mt(e) {
        let t;
        if ("el" in e) {
            const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
            if (!o) return;
            t = $t(o, e);
        } else t = e;
        "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
    }
    function xe(e, t) {
        return (history.state ? history.state.position - t : -1) + e;
    }
    const Ae = new Map;
    function Ut(e, t) {
        Ae.set(e, t);
    }
    function Ht(e) {
        const t = Ae.get(e);
        return Ae.delete(e), t;
    }
    function jt(e) {
        return typeof e == "string" || e && typeof e == "object";
    }
    function tt(e) {
        return typeof e == "string" || typeof e == "symbol";
    }
    function qt(e) {
        const t = {};
        if (e === "" || e === "?") return t;
        const n = (e[0] === "?" ? e.slice(1) : e).split("&");
        for(let r = 0; r < n.length; ++r){
            const o = n[r].replace(Ye, " "), l = o.indexOf("="), h = ee(l < 0 ? o : o.slice(0, l)), g = l < 0 ? null : ee(o.slice(l + 1));
            if (h in t) {
                let i = t[h];
                B(i) || (i = t[h] = [
                    i
                ]), i.push(g);
            } else t[h] = g;
        }
        return t;
    }
    function Ge(e) {
        let t = "";
        for(let n in e){
            const r = e[n];
            if (n = Pt(n), r == null) {
                r !== void 0 && (t += (t.length ? "&" : "") + n);
                continue;
            }
            (B(r) ? r.map((o)=>o && Re(o)) : [
                r && Re(r)
            ]).forEach((o)=>{
                o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
            });
        }
        return t;
    }
    function Ft(e) {
        const t = {};
        for(const n in e){
            const r = e[n];
            r !== void 0 && (t[n] = B(r) ? r.map((o)=>o == null ? null : "" + o) : r == null ? r : "" + r);
        }
        return t;
    }
    function J() {
        let e = [];
        function t(r) {
            return e.push(r), ()=>{
                const o = e.indexOf(r);
                o > -1 && e.splice(o, 1);
            };
        }
        function n() {
            e = [];
        }
        return {
            add: t,
            list: ()=>e.slice(),
            reset: n
        };
    }
    function Kt(e, t, n) {
        const r = e.value;
        if (!r) return;
        let o = r;
        const l = ()=>{
            o[t].delete(n);
        };
        gt(l), mt(l), pt(()=>{
            const h = e.value;
            h && (o = h), o[t].add(n);
        }), o[t].add(n);
    }
    bn = function(e) {
        Kt(dt(Qe, {}), "leaveGuards", e);
    };
    function U(e, t, n, r, o, l = (h)=>h()) {
        const h = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
        return ()=>new Promise((g, i)=>{
                const f = (c)=>{
                    c === !1 ? i(K(w.NAVIGATION_ABORTED, {
                        from: n,
                        to: t
                    })) : c instanceof Error ? i(c) : jt(c) ? i(K(w.NAVIGATION_GUARD_REDIRECT, {
                        from: t,
                        to: c
                    })) : (h && r.enterCallbacks[o] === h && typeof c == "function" && h.push(c), g());
                }, d = l(()=>e.call(r && r.instances[o], t, n, f));
                let a = Promise.resolve(d);
                e.length < 3 && (a = a.then(f)), a.catch((c)=>i(c));
            });
    }
    function me(e, t, n, r, o = (l)=>l()) {
        const l = [];
        for (const h of e)for(const g in h.components){
            let i = h.components[g];
            if (!(t !== "beforeRouteEnter" && !h.instances[g])) if (Ke(i)) {
                const f = (i.__vccOpts || i)[t];
                f && l.push(U(f, n, r, h, g, o));
            } else {
                let f = i();
                l.push(()=>f.then((d)=>{
                        if (!d) throw new Error(`Couldn't resolve component "${g}" at "${h.path}"`);
                        const a = lt(d) ? d.default : d;
                        h.mods[g] = d, h.components[g] = a;
                        const c = (a.__vccOpts || a)[t];
                        return c && U(c, n, r, h, g, o)();
                    }));
            }
        }
        return l;
    }
    function Wt(e, t) {
        const n = [], r = [], o = [], l = Math.max(t.matched.length, e.matched.length);
        for(let h = 0; h < l; h++){
            const g = t.matched[h];
            g && (e.matched.find((f)=>W(f, g)) ? r.push(g) : n.push(g));
            const i = e.matched[h];
            i && (t.matched.find((f)=>W(f, i)) || o.push(i));
        }
        return [
            n,
            r,
            o
        ];
    }
    const { computed: L, defineComponent: nt, getCurrentInstance: Tn, h: rt, inject: te, nextTick: Qt, provide: ge, reactive: zt, ref: Yt, shallowReactive: Jt, shallowRef: Xt, unref: Z, watch: Zt, watchEffect: Dn } = await ye("vue");
    let en = ()=>location.protocol + "//" + location.host;
    function ot(e, t) {
        const { pathname: n, search: r, hash: o } = t, l = e.indexOf("#");
        if (l > -1) {
            let h = o.includes(e.slice(l)) ? e.slice(l).length : 1, g = o.slice(h);
            return g[0] !== "/" && (g = "/" + g), Te(g, "");
        }
        return Te(n, e) + r + o;
    }
    function tn(e, t, n, r) {
        let o = [], l = [], h = null;
        const g = ({ state: c })=>{
            const u = ot(e, location), N = n.value, C = t.value;
            let I = 0;
            if (c) {
                if (n.value = u, t.value = c, h && h === N) {
                    h = null;
                    return;
                }
                I = C ? c.position - C.position : 0;
            } else r(u);
            o.forEach((P)=>{
                P(n.value, N, {
                    delta: I,
                    type: Ee.pop,
                    direction: I ? I > 0 ? pe.forward : pe.back : pe.unknown
                });
            });
        };
        function i() {
            h = n.value;
        }
        function f(c) {
            o.push(c);
            const u = ()=>{
                const N = o.indexOf(c);
                N > -1 && o.splice(N, 1);
            };
            return l.push(u), u;
        }
        function d() {
            if (document.visibilityState === "hidden") {
                const { history: c } = window;
                if (!c.state) return;
                c.replaceState(O({}, c.state, {
                    scroll: se()
                }), "");
            }
        }
        function a() {
            for (const c of l)c();
            l = [], window.removeEventListener("popstate", g), window.removeEventListener("pagehide", d), document.removeEventListener("visibilitychange", d);
        }
        return window.addEventListener("popstate", g), window.addEventListener("pagehide", d), document.addEventListener("visibilitychange", d), {
            pauseListeners: i,
            listen: f,
            destroy: a
        };
    }
    function ke(e, t, n, r = !1, o = !1) {
        return {
            back: e,
            current: t,
            forward: n,
            replaced: r,
            position: window.history.length,
            scroll: o ? se() : null
        };
    }
    function nn(e) {
        const { history: t, location: n } = window, r = {
            value: ot(e, n)
        }, o = {
            value: t.state
        };
        o.value || l(r.value, {
            back: null,
            current: r.value,
            forward: null,
            position: t.length - 1,
            replaced: !0,
            scroll: null
        }, !0);
        function l(i, f, d) {
            const a = e.indexOf("#"), c = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + i : en() + e + i;
            try {
                t[d ? "replaceState" : "pushState"](f, "", c), o.value = f;
            } catch (u) {
                console.error(u), n[d ? "replace" : "assign"](c);
            }
        }
        function h(i, f) {
            l(i, O({}, t.state, ke(o.value.back, i, o.value.forward, !0), f, {
                position: o.value.position
            }), !0), r.value = i;
        }
        function g(i, f) {
            const d = O({}, o.value, t.state, {
                forward: i,
                scroll: se()
            });
            l(d.current, d, !0), l(i, O({}, ke(r.value, i, null), {
                position: d.position + 1
            }, f), !1), r.value = i;
        }
        return {
            location: r,
            state: o,
            push: g,
            replace: h
        };
    }
    xn = function(e) {
        e = Bt(e);
        const t = nn(e), n = tn(e, t.state, t.location, t.replace);
        function r(l, h = !0) {
            h || n.pauseListeners(), history.go(l);
        }
        const o = O({
            location: "",
            base: e,
            go: r,
            createHref: Vt.bind(null, e)
        }, t, n);
        return Object.defineProperty(o, "location", {
            enumerable: !0,
            get: ()=>t.location.value
        }), Object.defineProperty(o, "state", {
            enumerable: !0,
            get: ()=>t.state.value
        }), o;
    };
    let j = (function(e) {
        return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
    })({});
    var T = (function(e) {
        return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
    })(T || {});
    const rn = {
        type: j.Static,
        value: ""
    }, on = /[a-zA-Z0-9_]/;
    function sn(e) {
        if (!e) return [
            []
        ];
        if (e === "/") return [
            [
                rn
            ]
        ];
        if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
        function t(u) {
            throw new Error(`ERR (${n})/"${f}": ${u}`);
        }
        let n = T.Static, r = n;
        const o = [];
        let l;
        function h() {
            l && o.push(l), l = [];
        }
        let g = 0, i, f = "", d = "";
        function a() {
            f && (n === T.Static ? l.push({
                type: j.Static,
                value: f
            }) : n === T.Param || n === T.ParamRegExp || n === T.ParamRegExpEnd ? (l.length > 1 && (i === "*" || i === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), l.push({
                type: j.Param,
                value: f,
                regexp: d,
                repeatable: i === "*" || i === "+",
                optional: i === "*" || i === "?"
            })) : t("Invalid state to consume buffer"), f = "");
        }
        function c() {
            f += i;
        }
        for(; g < e.length;){
            if (i = e[g++], i === "\\" && n !== T.ParamRegExp) {
                r = n, n = T.EscapeNext;
                continue;
            }
            switch(n){
                case T.Static:
                    i === "/" ? (f && a(), h()) : i === ":" ? (a(), n = T.Param) : c();
                    break;
                case T.EscapeNext:
                    c(), n = r;
                    break;
                case T.Param:
                    i === "(" ? n = T.ParamRegExp : on.test(i) ? c() : (a(), n = T.Static, i !== "*" && i !== "?" && i !== "+" && g--);
                    break;
                case T.ParamRegExp:
                    i === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + i : n = T.ParamRegExpEnd : d += i;
                    break;
                case T.ParamRegExpEnd:
                    a(), n = T.Static, i !== "*" && i !== "?" && i !== "+" && g--, d = "";
                    break;
                default:
                    t("Unknown state");
                    break;
            }
        }
        return n === T.ParamRegExp && t(`Unfinished custom RegExp for param "${f}"`), a(), h(), o;
    }
    const Be = "[^/]+?", an = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    };
    var D = (function(e) {
        return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
    })(D || {});
    const cn = /[.+*?^${}()[\]/\\]/g;
    function un(e, t) {
        const n = O({}, an, t), r = [];
        let o = n.start ? "^" : "";
        const l = [];
        for (const f of e){
            const d = f.length ? [] : [
                D.Root
            ];
            n.strict && !f.length && (o += "/");
            for(let a = 0; a < f.length; a++){
                const c = f[a];
                let u = D.Segment + (n.sensitive ? D.BonusCaseSensitive : 0);
                if (c.type === j.Static) a || (o += "/"), o += c.value.replace(cn, "\\$&"), u += D.Static;
                else if (c.type === j.Param) {
                    const { value: N, repeatable: C, optional: I, regexp: P } = c;
                    l.push({
                        name: N,
                        repeatable: C,
                        optional: I
                    });
                    const y = P || Be;
                    if (y !== Be) {
                        u += D.BonusCustomRegExp;
                        try {
                            new RegExp(`(${y})`);
                        } catch (k) {
                            throw new Error(`Invalid custom RegExp for param "${N}" (${y}): ` + k.message);
                        }
                    }
                    let _ = C ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
                    a || (_ = I && f.length < 2 ? `(?:/${_})` : "/" + _), I && (_ += "?"), o += _, u += D.Dynamic, I && (u += D.BonusOptional), C && (u += D.BonusRepeatable), y === ".*" && (u += D.BonusWildcard);
                }
                d.push(u);
            }
            r.push(d);
        }
        if (n.strict && n.end) {
            const f = r.length - 1;
            r[f][r[f].length - 1] += D.BonusStrict;
        }
        n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
        const h = new RegExp(o, n.sensitive ? "" : "i");
        function g(f) {
            const d = f.match(h), a = {};
            if (!d) return null;
            for(let c = 1; c < d.length; c++){
                const u = d[c] || "", N = l[c - 1];
                a[N.name] = u && N.repeatable ? u.split("/") : u;
            }
            return a;
        }
        function i(f) {
            let d = "", a = !1;
            for (const c of e){
                (!a || !d.endsWith("/")) && (d += "/"), a = !1;
                for (const u of c)if (u.type === j.Static) d += u.value;
                else if (u.type === j.Param) {
                    const { value: N, repeatable: C, optional: I } = u, P = N in f ? f[N] : "";
                    if (B(P) && !C) throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);
                    const y = B(P) ? P.join("/") : P;
                    if (!y) if (I) c.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : a = !0);
                    else throw new Error(`Missing required param "${N}"`);
                    d += y;
                }
            }
            return d || "/";
        }
        return {
            re: h,
            score: r,
            keys: l,
            parse: g,
            stringify: i
        };
    }
    function ln(e, t) {
        let n = 0;
        for(; n < e.length && n < t.length;){
            const r = t[n] - e[n];
            if (r) return r;
            n++;
        }
        return e.length < t.length ? e.length === 1 && e[0] === D.Static + D.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === D.Static + D.Segment ? 1 : -1 : 0;
    }
    function st(e, t) {
        let n = 0;
        const r = e.score, o = t.score;
        for(; n < r.length && n < o.length;){
            const l = ln(r[n], o[n]);
            if (l) return l;
            n++;
        }
        if (Math.abs(o.length - r.length) === 1) {
            if (Le(r)) return 1;
            if (Le(o)) return -1;
        }
        return o.length - r.length;
    }
    function Le(e) {
        const t = e[e.length - 1];
        return e.length > 0 && t[t.length - 1] < 0;
    }
    const fn = {
        strict: !1,
        end: !0,
        sensitive: !1
    };
    function hn(e, t, n) {
        const r = un(sn(e.path), n), o = O(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
        return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
    }
    function dn(e, t) {
        const n = [], r = new Map;
        t = Se(fn, t);
        function o(a) {
            return r.get(a);
        }
        function l(a, c, u) {
            const N = !u, C = $e(a);
            C.aliasOf = u && u.record;
            const I = Se(t, a), P = [
                C
            ];
            if ("alias" in a) {
                const k = typeof a.alias == "string" ? [
                    a.alias
                ] : a.alias;
                for (const H of k)P.push($e(O({}, C, {
                    components: u ? u.record.components : C.components,
                    path: H,
                    aliasOf: u ? u.record : C
                })));
            }
            let y, _;
            for (const k of P){
                const { path: H } = k;
                if (c && H[0] !== "/") {
                    const $ = c.record.path, G = $[$.length - 1] === "/" ? "" : "/";
                    k.path = c.record.path + (H && G + H);
                }
                if (y = hn(k, c, I), u ? u.alias.push(y) : (_ = _ || y, _ !== y && _.alias.push(y), N && a.name && !Me(y) && h(a.name)), it(y) && i(y), C.children) {
                    const $ = C.children;
                    for(let G = 0; G < $.length; G++)l($[G], y, u && u.children[G]);
                }
                u = u || y;
            }
            return _ ? ()=>{
                h(_);
            } : X;
        }
        function h(a) {
            if (tt(a)) {
                const c = r.get(a);
                c && (r.delete(a), n.splice(n.indexOf(c), 1), c.children.forEach(h), c.alias.forEach(h));
            } else {
                const c = n.indexOf(a);
                c > -1 && (n.splice(c, 1), a.record.name && r.delete(a.record.name), a.children.forEach(h), a.alias.forEach(h));
            }
        }
        function g() {
            return n;
        }
        function i(a) {
            const c = gn(a, n);
            n.splice(c, 0, a), a.record.name && !Me(a) && r.set(a.record.name, a);
        }
        function f(a, c) {
            let u, N = {}, C, I;
            if ("name" in a && a.name) {
                if (u = r.get(a.name), !u) throw K(w.MATCHER_NOT_FOUND, {
                    location: a
                });
                I = u.record.name, N = O(Ve(c.params, u.keys.filter((_)=>!_.optional).concat(u.parent ? u.parent.keys.filter((_)=>_.optional) : []).map((_)=>_.name)), a.params && Ve(a.params, u.keys.map((_)=>_.name))), C = u.stringify(N);
            } else if (a.path != null) C = a.path, u = n.find((_)=>_.re.test(C)), u && (N = u.parse(C), I = u.record.name);
            else {
                if (u = c.name ? r.get(c.name) : n.find((_)=>_.re.test(c.path)), !u) throw K(w.MATCHER_NOT_FOUND, {
                    location: a,
                    currentLocation: c
                });
                I = u.record.name, N = O({}, c.params, a.params), C = u.stringify(N);
            }
            const P = [];
            let y = u;
            for(; y;)P.unshift(y.record), y = y.parent;
            return {
                name: I,
                path: C,
                params: N,
                matched: P,
                meta: mn(P)
            };
        }
        e.forEach((a)=>l(a));
        function d() {
            n.length = 0, r.clear();
        }
        return {
            addRoute: l,
            resolve: f,
            removeRoute: h,
            clearRoutes: d,
            getRoutes: g,
            getRecordMatcher: o
        };
    }
    function Ve(e, t) {
        const n = {};
        for (const r of t)r in e && (n[r] = e[r]);
        return n;
    }
    function $e(e) {
        const t = {
            path: e.path,
            redirect: e.redirect,
            name: e.name,
            meta: e.meta || {},
            aliasOf: e.aliasOf,
            beforeEnter: e.beforeEnter,
            props: pn(e),
            children: e.children || [],
            instances: {},
            leaveGuards: new Set,
            updateGuards: new Set,
            enterCallbacks: {},
            components: "components" in e ? e.components || null : e.component && {
                default: e.component
            }
        };
        return Object.defineProperty(t, "mods", {
            value: {}
        }), t;
    }
    function pn(e) {
        const t = {}, n = e.props || !1;
        if ("component" in e) t.default = n;
        else for(const r in e.components)t[r] = typeof n == "object" ? n[r] : n;
        return t;
    }
    function Me(e) {
        for(; e;){
            if (e.record.aliasOf) return !0;
            e = e.parent;
        }
        return !1;
    }
    function mn(e) {
        return e.reduce((t, n)=>O(t, n.meta), {});
    }
    function gn(e, t) {
        let n = 0, r = t.length;
        for(; n !== r;){
            const l = n + r >> 1;
            st(e, t[l]) < 0 ? r = l : n = l + 1;
        }
        const o = vn(e);
        return o && (r = t.lastIndexOf(o, r - 1)), r;
    }
    function vn(e) {
        let t = e;
        for(; t = t.parent;)if (it(t) && st(e, t) === 0) return t;
    }
    function it({ record: e }) {
        return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
    }
    function Ue(e) {
        const t = te(oe), n = te(Ne), r = L(()=>{
            const i = Z(e.to);
            return t.resolve(i);
        }), o = L(()=>{
            const { matched: i } = r.value, { length: f } = i, d = i[f - 1], a = n.matched;
            if (!d || !a.length) return -1;
            const c = a.findIndex(W.bind(null, d));
            if (c > -1) return c;
            const u = He(i[f - 2]);
            return f > 1 && He(d) === u && a[a.length - 1].path !== u ? a.findIndex(W.bind(null, i[f - 2])) : c;
        }), l = L(()=>o.value > -1 && Nn(n.params, r.value.params)), h = L(()=>o.value > -1 && o.value === n.matched.length - 1 && et(n.params, r.value.params));
        function g(i = {}) {
            if (yn(i)) {
                const f = t[Z(e.replace) ? "replace" : "push"](Z(e.to)).catch(X);
                return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(()=>f), f;
            }
            return Promise.resolve();
        }
        return {
            route: r,
            href: L(()=>r.value.href),
            isActive: l,
            isExactActive: h,
            navigate: g
        };
    }
    function Rn(e) {
        return e.length === 1 ? e[0] : e;
    }
    let En;
    En = nt({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [
                    String,
                    Object
                ],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            },
            viewTransition: Boolean
        },
        useLink: Ue,
        setup (e, { slots: t }) {
            const n = zt(Ue(e)), { options: r } = te(oe), o = L(()=>({
                    [je(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [je(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return ()=>{
                const l = t.default && Rn(t.default(n));
                return e.custom ? l : rt("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: o.value
                }, l);
            };
        }
    });
    An = En;
    function yn(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                const t = e.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(t)) return;
            }
            return e.preventDefault && e.preventDefault(), !0;
        }
    }
    function Nn(e, t) {
        for(const n in t){
            const r = t[n], o = e[n];
            if (typeof r == "string") {
                if (r !== o) return !1;
            } else if (!B(o) || o.length !== r.length || r.some((l, h)=>l.valueOf() !== o[h].valueOf())) return !1;
        }
        return !0;
    }
    function He(e) {
        return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
    }
    const je = (e, t, n)=>e ?? t ?? n, On = nt({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup (e, { attrs: t, slots: n }) {
            const r = te(ve), o = L(()=>e.route || r.value), l = te(be, 0), h = L(()=>{
                let f = Z(l);
                const { matched: d } = o.value;
                let a;
                for(; (a = d[f]) && !a.components;)f++;
                return f;
            }), g = L(()=>o.value.matched[h.value]);
            ge(be, L(()=>h.value + 1)), ge(Qe, g), ge(ve, o);
            const i = Yt();
            return Zt(()=>[
                    i.value,
                    g.value,
                    e.name
                ], ([f, d, a], [c, u, N])=>{
                d && (d.instances[a] = f, u && u !== d && f && f === c && (d.leaveGuards.size || (d.leaveGuards = u.leaveGuards), d.updateGuards.size || (d.updateGuards = u.updateGuards))), f && d && (!u || !W(d, u) || !c) && (d.enterCallbacks[a] || []).forEach((C)=>C(f));
            }, {
                flush: "post"
            }), ()=>{
                const f = o.value, d = e.name, a = g.value, c = a && a.components[d];
                if (!c) return qe(n.default, {
                    Component: c,
                    route: f
                });
                const u = a.props[d], N = u ? u === !0 ? f.params : typeof u == "function" ? u(f) : u : null, I = rt(c, O({}, N, t, {
                    onVnodeUnmounted: (P)=>{
                        P.component.isUnmounted && (a.instances[d] = null);
                    },
                    ref: i
                }));
                return qe(n.default, {
                    Component: I,
                    route: f
                }) || I;
            };
        }
    });
    function qe(e, t) {
        if (!e) return null;
        const n = e(t);
        return n.length === 1 ? n[0] : n;
    }
    const Cn = On;
    Gn = function(e) {
        const t = dn(e.routes, e), n = e.parseQuery || qt, r = e.stringifyQuery || Ge, o = e.history, l = J(), h = J(), g = J(), i = Xt(M);
        let f = M;
        F && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
        const d = he.bind(null, (s)=>"" + s), a = he.bind(null, St), c = he.bind(null, ee);
        function u(s, m) {
            let p, v;
            return tt(s) ? (p = t.getRecordMatcher(s), v = m) : v = s, t.addRoute(v, p);
        }
        function N(s) {
            const m = t.getRecordMatcher(s);
            m && t.removeRoute(m);
        }
        function C() {
            return t.getRoutes().map((s)=>s.record);
        }
        function I(s) {
            return !!t.getRecordMatcher(s);
        }
        function P(s, m) {
            if (m = O({}, m || i.value), typeof s == "string") {
                const R = de(n, s, m.path), b = t.resolve({
                    path: R.path
                }, m), Y = o.createHref(R.fullPath);
                return O(R, b, {
                    params: c(b.params),
                    hash: ee(R.hash),
                    redirectedFrom: void 0,
                    href: Y
                });
            }
            let p;
            if (s.path != null) p = O({}, s, {
                path: de(n, s.path, m.path).path
            });
            else {
                const R = O({}, s.params);
                for(const b in R)R[b] == null && delete R[b];
                p = O({}, s, {
                    params: a(R)
                }), m.params = a(m.params);
            }
            const v = t.resolve(p, m), A = s.hash || "";
            v.params = d(c(v.params));
            const S = Dt(r, O({}, s, {
                hash: It(A),
                path: v.path
            })), E = o.createHref(S);
            return O({
                fullPath: S,
                hash: A,
                query: r === Ge ? Ft(s.query) : s.query || {}
            }, v, {
                redirectedFrom: void 0,
                href: E
            });
        }
        function y(s) {
            return typeof s == "string" ? de(n, s, i.value.path) : O({}, s);
        }
        function _(s, m) {
            if (f !== s) return K(w.NAVIGATION_CANCELLED, {
                from: m,
                to: s
            });
        }
        function k(s) {
            return G(s);
        }
        function H(s) {
            return k(O(y(s), {
                replace: !0
            }));
        }
        function $(s, m) {
            const p = s.matched[s.matched.length - 1];
            if (p && p.redirect) {
                const { redirect: v } = p;
                let A = typeof v == "function" ? v(s, m) : v;
                return typeof A == "string" && (A = A.includes("?") || A.includes("#") ? A = y(A) : {
                    path: A
                }, A.params = {}), O({
                    query: s.query,
                    hash: s.hash,
                    params: A.path != null ? {} : s.params
                }, A);
            }
        }
        function G(s, m) {
            const p = f = P(s), v = i.value, A = s.state, S = s.force, E = s.replace === !0, R = $(p, v);
            if (R) return G(O(y(R), {
                state: typeof R == "object" ? O({}, A, R.state) : A,
                force: S,
                replace: E
            }), m || p);
            const b = p;
            b.redirectedFrom = m;
            let Y;
            return !S && xt(r, v, p) && (Y = K(w.NAVIGATION_DUPLICATED, {
                to: b,
                from: v
            }), we(v, v, !0, !1)), (Y ? Promise.resolve(Y) : Ce(b, v)).catch((x)=>V(x) ? V(x, w.NAVIGATION_GUARD_REDIRECT) ? x : ue(x) : ce(x, b, v)).then((x)=>{
                if (x) {
                    if (V(x, w.NAVIGATION_GUARD_REDIRECT)) return G(O({
                        replace: E
                    }, y(x.to), {
                        state: typeof x.to == "object" ? O({}, A, x.to.state) : A,
                        force: S
                    }), m || b);
                } else x = Ie(b, v, !0, E, A);
                return _e(b, v, x), x;
            });
        }
        function at(s, m) {
            const p = _(s, m);
            return p ? Promise.reject(p) : Promise.resolve();
        }
        function ie(s) {
            const m = re.values().next().value;
            return m && typeof m.runWithContext == "function" ? m.runWithContext(s) : s();
        }
        function Ce(s, m) {
            let p;
            const [v, A, S] = Wt(s, m);
            p = me(v.reverse(), "beforeRouteLeave", s, m);
            for (const R of v)R.leaveGuards.forEach((b)=>{
                p.push(U(b, s, m));
            });
            const E = at.bind(null, s, m);
            return p.push(E), q(p).then(()=>{
                p = [];
                for (const R of l.list())p.push(U(R, s, m));
                return p.push(E), q(p);
            }).then(()=>{
                p = me(A, "beforeRouteUpdate", s, m);
                for (const R of A)R.updateGuards.forEach((b)=>{
                    p.push(U(b, s, m));
                });
                return p.push(E), q(p);
            }).then(()=>{
                p = [];
                for (const R of S)if (R.beforeEnter) if (B(R.beforeEnter)) for (const b of R.beforeEnter)p.push(U(b, s, m));
                else p.push(U(R.beforeEnter, s, m));
                return p.push(E), q(p);
            }).then(()=>(s.matched.forEach((R)=>R.enterCallbacks = {}), p = me(S, "beforeRouteEnter", s, m, ie), p.push(E), q(p))).then(()=>{
                p = [];
                for (const R of h.list())p.push(U(R, s, m));
                return p.push(E), q(p);
            }).catch((R)=>V(R, w.NAVIGATION_CANCELLED) ? R : Promise.reject(R));
        }
        function _e(s, m, p) {
            g.list().forEach((v)=>ie(()=>v(s, m, p)));
        }
        function Ie(s, m, p, v, A) {
            const S = _(s, m);
            if (S) return S;
            const E = m === M, R = F ? history.state : {};
            p && (v || E ? o.replace(s.fullPath, O({
                scroll: E && R && R.scroll
            }, A)) : o.push(s.fullPath, A)), i.value = s, we(s, m, p, E), ue();
        }
        let Q;
        function ct() {
            Q || (Q = o.listen((s, m, p)=>{
                if (!z.listening) return;
                const v = P(s), A = $(v, z.currentRoute.value);
                if (A) {
                    G(O(A, {
                        replace: !0,
                        force: !0
                    }), v).catch(X);
                    return;
                }
                f = v;
                const S = i.value;
                F && Ut(xe(S.fullPath, p.delta), se()), Ce(v, S).catch((E)=>V(E, w.NAVIGATION_ABORTED | w.NAVIGATION_CANCELLED) ? E : V(E, w.NAVIGATION_GUARD_REDIRECT) ? (G(O(y(E.to), {
                        force: !0
                    }), v).then((R)=>{
                        V(R, w.NAVIGATION_ABORTED | w.NAVIGATION_DUPLICATED) && !p.delta && p.type === Ee.pop && o.go(-1, !1);
                    }).catch(X), Promise.reject()) : (p.delta && o.go(-p.delta, !1), ce(E, v, S))).then((E)=>{
                    E = E || Ie(v, S, !1), E && (p.delta && !V(E, w.NAVIGATION_CANCELLED) ? o.go(-p.delta, !1) : p.type === Ee.pop && V(E, w.NAVIGATION_ABORTED | w.NAVIGATION_DUPLICATED) && o.go(-1, !1)), _e(v, S, E);
                }).catch(X);
            }));
        }
        let ae = J(), Pe = J(), ne;
        function ce(s, m, p) {
            ue(s);
            const v = Pe.list();
            return v.length ? v.forEach((A)=>A(s, m, p)) : console.error(s), Promise.reject(s);
        }
        function ut() {
            return ne && i.value !== M ? Promise.resolve() : new Promise((s, m)=>{
                ae.add([
                    s,
                    m
                ]);
            });
        }
        function ue(s) {
            return ne || (ne = !s, ct(), ae.list().forEach(([m, p])=>s ? p(s) : m()), ae.reset()), s;
        }
        function we(s, m, p, v) {
            const { scrollBehavior: A } = e;
            if (!F || !A) return Promise.resolve();
            const S = !p && Ht(xe(s.fullPath, 0)) || (v || !p) && history.state && history.state.scroll || null;
            return Qt().then(()=>A(s, m, S)).then((E)=>E && Mt(E)).catch((E)=>ce(E, s, m));
        }
        const le = (s)=>o.go(s);
        let fe;
        const re = new Set, z = {
            currentRoute: i,
            listening: !0,
            addRoute: u,
            removeRoute: N,
            clearRoutes: t.clearRoutes,
            hasRoute: I,
            getRoutes: C,
            resolve: P,
            options: e,
            push: k,
            replace: H,
            go: le,
            back: ()=>le(-1),
            forward: ()=>le(1),
            beforeEach: l.add,
            beforeResolve: h.add,
            afterEach: g.add,
            onError: Pe.add,
            isReady: ut,
            install (s) {
                s.component("RouterLink", An), s.component("RouterView", Cn), s.config.globalProperties.$router = z, Object.defineProperty(s.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: ()=>Z(i)
                }), F && !fe && i.value === M && (fe = !0, k(o.location).catch((v)=>{}));
                const m = {};
                for(const v in M)Object.defineProperty(m, v, {
                    get: ()=>i.value[v],
                    enumerable: !0
                });
                s.provide(oe, z), s.provide(Ne, Jt(m)), s.provide(ve, i);
                const p = s.unmount;
                re.add(s), s.unmount = function() {
                    re.delete(s), re.size < 1 && (f = M, Q && Q(), Q = null, i.value = M, fe = !1, ne = !1), p();
                };
            }
        };
        function q(s) {
            return s.reduce((m, p)=>m.then(()=>ie(p)), Promise.resolve());
        }
        return z;
    };
});
export { An as R, In as a, xn as b, Gn as c, bn as o, Pn as u, __tla };
