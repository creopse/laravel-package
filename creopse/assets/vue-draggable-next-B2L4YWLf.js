import { i as Ut, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-CmLqe3wy.js";
let Yn;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const { defineComponent: qt, ref: me, computed: Kt, getCurrentInstance: Zt, onMounted: Qt, h: nt, resolveComponent: Jt, nextTick: ot } = await Ut("vue");
    function en() {
        return typeof window < "u" ? window.console : global.console;
    }
    const tn = en();
    function nn(t) {
        const e = Object.create(null);
        return function(o) {
            return e[o] || (e[o] = t(o));
        };
    }
    const on = /-(\w)/g, St = nn((t)=>t.replace(on, (e, n)=>n ? n.toUpperCase() : ""));
    function it(t) {
        t.parentElement !== null && t.parentElement.removeChild(t);
    }
    function Tt(t, e, n) {
        const o = n === 0 ? t.children[0] : t.children[n - 1].nextSibling;
        t.insertBefore(e, o);
    }
    function Ct(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(i) {
                return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function oe(t) {
        for(var e = 1; e < arguments.length; e++){
            var n = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Ct(Object(n), !0).forEach(function(o) {
                rn(t, o, n[o]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach(function(o) {
                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
            });
        }
        return t;
    }
    function He(t) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? He = function(e) {
            return typeof e;
        } : He = function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, He(t);
    }
    function rn(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    function re() {
        return re = Object.assign || function(t) {
            for(var e = 1; e < arguments.length; e++){
                var n = arguments[e];
                for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
        }, re.apply(this, arguments);
    }
    function an(t, e) {
        if (t == null) return {};
        var n = {}, o = Object.keys(t), i, r;
        for(r = 0; r < o.length; r++)i = o[r], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
        return n;
    }
    function ln(t, e) {
        if (t == null) return {};
        var n = an(t, e), o, i;
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            for(i = 0; i < r.length; i++)o = r[i], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
        }
        return n;
    }
    var sn = "1.14.0";
    function ie(t) {
        if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t);
    }
    var ae = ie(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Xe = ie(/Edge/i), Ot = ie(/firefox/i), Ae = ie(/safari/i) && !ie(/chrome/i) && !ie(/android/i), Lt = ie(/iP(ad|od|hone)/i), un = ie(/chrome/i) && ie(/android/i), Rt = {
        capture: !1,
        passive: !1
    };
    function D(t, e, n) {
        t.addEventListener(e, n, !ae && Rt);
    }
    function _(t, e, n) {
        t.removeEventListener(e, n, !ae && Rt);
    }
    function ze(t, e) {
        if (e) {
            if (e[0] === ">" && (e = e.substring(1)), t) try {
                if (t.matches) return t.matches(e);
                if (t.msMatchesSelector) return t.msMatchesSelector(e);
                if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
            } catch  {
                return !1;
            }
            return !1;
        }
    }
    function cn(t) {
        return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
    }
    function te(t, e, n, o) {
        if (t) {
            n = n || document;
            do {
                if (e != null && (e[0] === ">" ? t.parentNode === n && ze(t, e) : ze(t, e)) || o && t === n) return t;
                if (t === n) break;
            }while (t = cn(t));
        }
        return null;
    }
    var It = /\s+/g;
    function H(t, e, n) {
        if (t && e) if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var o = (" " + t.className + " ").replace(It, " ").replace(" " + e + " ", " ");
            t.className = (o + (n ? " " + e : "")).replace(It, " ");
        }
    }
    function g(t, e, n) {
        var o = t && t.style;
        if (o) {
            if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
            !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), o[e] = n + (typeof n == "string" ? "" : "px");
        }
    }
    function Se(t, e) {
        var n = "";
        if (typeof t == "string") n = t;
        else do {
            var o = g(t, "transform");
            o && o !== "none" && (n = o + " " + n);
        }while (!e && (t = t.parentNode));
        var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
        return i && new i(n);
    }
    function Yt(t, e, n) {
        if (t) {
            var o = t.getElementsByTagName(e), i = 0, r = o.length;
            if (n) for(; i < r; i++)n(o[i], i);
            return o;
        }
        return [];
    }
    function ne() {
        var t = document.scrollingElement;
        return t || document.documentElement;
    }
    function P(t, e, n, o, i) {
        if (!(!t.getBoundingClientRect && t !== window)) {
            var r, a, l, s, u, h, d;
            if (t !== window && t.parentNode && t !== ne() ? (r = t.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, u = r.right, h = r.height, d = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, h = window.innerHeight, d = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !ae)) do if (i && i.getBoundingClientRect && (g(i, "transform") !== "none" || n && g(i, "position") !== "static")) {
                var v = i.getBoundingClientRect();
                a -= v.top + parseInt(g(i, "border-top-width")), l -= v.left + parseInt(g(i, "border-left-width")), s = a + r.height, u = l + r.width;
                break;
            }
            while (i = i.parentNode);
            if (o && t !== window) {
                var S = Se(i || t), w = S && S.a, E = S && S.d;
                S && (a /= E, l /= w, d /= w, h /= E, s = a + h, u = l + d);
            }
            return {
                top: a,
                left: l,
                bottom: s,
                right: u,
                width: d,
                height: h
            };
        }
    }
    function xt(t, e, n) {
        for(var o = pe(t, !0), i = P(t)[e]; o;){
            var r = P(o)[n], a = void 0;
            if (a = i >= r, !a) return o;
            if (o === ne()) break;
            o = pe(o, !1);
        }
        return !1;
    }
    function Te(t, e, n, o) {
        for(var i = 0, r = 0, a = t.children; r < a.length;){
            if (a[r].style.display !== "none" && a[r] !== m.ghost && (o || a[r] !== m.dragged) && te(a[r], n.draggable, t, !1)) {
                if (i === e) return a[r];
                i++;
            }
            r++;
        }
        return null;
    }
    function Et(t, e) {
        for(var n = t.lastElementChild; n && (n === m.ghost || g(n, "display") === "none" || e && !ze(n, e));)n = n.previousElementSibling;
        return n || null;
    }
    function V(t, e) {
        var n = 0;
        if (!t || !t.parentNode) return -1;
        for(; t = t.previousElementSibling;)t.nodeName.toUpperCase() !== "TEMPLATE" && t !== m.clone && (!e || ze(t, e)) && n++;
        return n;
    }
    function At(t) {
        var e = 0, n = 0, o = ne();
        if (t) do {
            var i = Se(t), r = i.a, a = i.d;
            e += t.scrollLeft * r, n += t.scrollTop * a;
        }while (t !== o && (t = t.parentNode));
        return [
            e,
            n
        ];
    }
    function dn(t, e) {
        for(var n in t)if (t.hasOwnProperty(n)) {
            for(var o in e)if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
        }
        return -1;
    }
    function pe(t, e) {
        if (!t || !t.getBoundingClientRect) return ne();
        var n = t, o = !1;
        do if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var i = g(n);
            if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return ne();
                if (o || e) return n;
                o = !0;
            }
        }
        while (n = n.parentNode);
        return ne();
    }
    function fn(t, e) {
        if (t && e) for(var n in e)e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }
    function rt(t, e) {
        return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
    }
    var Pe;
    function kt(t, e) {
        return function() {
            if (!Pe) {
                var n = arguments, o = this;
                n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), Pe = setTimeout(function() {
                    Pe = void 0;
                }, e);
            }
        };
    }
    function hn() {
        clearTimeout(Pe), Pe = void 0;
    }
    function Bt(t, e, n) {
        t.scrollLeft += e, t.scrollTop += n;
    }
    function jt(t) {
        var e = window.Polymer, n = window.jQuery || window.Zepto;
        return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
    }
    var W = "Sortable" + new Date().getTime();
    function pn() {
        var t = [], e;
        return {
            captureAnimationState: function() {
                if (t = [], !!this.options.animation) {
                    var o = [].slice.call(this.el.children);
                    o.forEach(function(i) {
                        if (!(g(i, "display") === "none" || i === m.ghost)) {
                            t.push({
                                target: i,
                                rect: P(i)
                            });
                            var r = oe({}, t[t.length - 1].rect);
                            if (i.thisAnimationDuration) {
                                var a = Se(i, !0);
                                a && (r.top -= a.f, r.left -= a.e);
                            }
                            i.fromRect = r;
                        }
                    });
                }
            },
            addAnimationState: function(o) {
                t.push(o);
            },
            removeAnimationState: function(o) {
                t.splice(dn(t, {
                    target: o
                }), 1);
            },
            animateAll: function(o) {
                var i = this;
                if (!this.options.animation) {
                    clearTimeout(e), typeof o == "function" && o();
                    return;
                }
                var r = !1, a = 0;
                t.forEach(function(l) {
                    var s = 0, u = l.target, h = u.fromRect, d = P(u), v = u.prevFromRect, S = u.prevToRect, w = l.rect, E = Se(u, !0);
                    E && (d.top -= E.f, d.left -= E.e), u.toRect = d, u.thisAnimationDuration && rt(v, d) && !rt(h, d) && (w.top - d.top) / (w.left - d.left) === (h.top - d.top) / (h.left - d.left) && (s = mn(w, v, S, i.options)), rt(d, h) || (u.prevFromRect = h, u.prevToRect = d, s || (s = i.options.animation), i.animate(u, w, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
                        u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
                    }, s), u.thisAnimationDuration = s);
                }), clearTimeout(e), r ? e = setTimeout(function() {
                    typeof o == "function" && o();
                }, a) : typeof o == "function" && o(), t = [];
            },
            animate: function(o, i, r, a) {
                if (a) {
                    g(o, "transition", ""), g(o, "transform", "");
                    var l = Se(this.el), s = l && l.a, u = l && l.d, h = (i.left - r.left) / (s || 1), d = (i.top - r.top) / (u || 1);
                    o.animatingX = !!h, o.animatingY = !!d, g(o, "transform", "translate3d(" + h + "px," + d + "px,0)"), this.forRepaintDummy = gn(o), g(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), g(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
                        g(o, "transition", ""), g(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
                    }, a);
                }
            }
        };
    }
    function gn(t) {
        return t.offsetWidth;
    }
    function mn(t, e, n, o) {
        return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation;
    }
    var we = [], at = {
        initializeByDefault: !0
    }, Le = {
        mount: function(e) {
            for(var n in at)at.hasOwnProperty(n) && !(n in e) && (e[n] = at[n]);
            we.forEach(function(o) {
                if (o.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
            }), we.push(e);
        },
        pluginEvent: function(e, n, o) {
            var i = this;
            this.eventCanceled = !1, o.cancel = function() {
                i.eventCanceled = !0;
            };
            var r = e + "Global";
            we.forEach(function(a) {
                n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](oe({
                    sortable: n
                }, o)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](oe({
                    sortable: n
                }, o)));
            });
        },
        initializePlugins: function(e, n, o, i) {
            we.forEach(function(l) {
                var s = l.pluginName;
                if (!(!e.options[s] && !l.initializeByDefault)) {
                    var u = new l(e, n, e.options);
                    u.sortable = e, u.options = e.options, e[s] = u, re(o, u.defaults);
                }
            });
            for(var r in e.options)if (e.options.hasOwnProperty(r)) {
                var a = this.modifyOption(e, r, e.options[r]);
                typeof a < "u" && (e.options[r] = a);
            }
        },
        getEventProperties: function(e, n) {
            var o = {};
            return we.forEach(function(i) {
                typeof i.eventProperties == "function" && re(o, i.eventProperties.call(n[i.pluginName], e));
            }), o;
        },
        modifyOption: function(e, n, o) {
            var i;
            return we.forEach(function(r) {
                e[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (i = r.optionListeners[n].call(e[r.pluginName], o));
            }), i;
        }
    };
    function vn(t) {
        var e = t.sortable, n = t.rootEl, o = t.name, i = t.targetEl, r = t.cloneEl, a = t.toEl, l = t.fromEl, s = t.oldIndex, u = t.newIndex, h = t.oldDraggableIndex, d = t.newDraggableIndex, v = t.originalEvent, S = t.putSortable, w = t.extraEventProperties;
        if (e = e || n && n[W], !!e) {
            var E, N = e.options, $ = "on" + o.charAt(0).toUpperCase() + o.substr(1);
            window.CustomEvent && !ae && !Xe ? E = new CustomEvent(o, {
                bubbles: !0,
                cancelable: !0
            }) : (E = document.createEvent("Event"), E.initEvent(o, !0, !0)), E.to = a || n, E.from = l || n, E.item = i || n, E.clone = r, E.oldIndex = s, E.newIndex = u, E.oldDraggableIndex = h, E.newDraggableIndex = d, E.originalEvent = v, E.pullMode = S ? S.lastPutMode : void 0;
            var I = oe(oe({}, w), Le.getEventProperties(o, e));
            for(var R in I)E[R] = I[R];
            n && n.dispatchEvent(E), N[$] && N[$].call(e, E);
        }
    }
    var bn = [
        "evt"
    ], j = function(e, n) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = o.evt, r = ln(o, bn);
        Le.pluginEvent.bind(m)(e, n, oe({
            dragEl: c,
            parentEl: C,
            ghostEl: b,
            rootEl: T,
            nextEl: ye,
            lastDownEl: Ge,
            cloneEl: O,
            cloneHidden: he,
            dragStarted: Oe,
            putSortable: F,
            activeSortable: m.active,
            originalEvent: i,
            oldIndex: De,
            oldDraggableIndex: Ne,
            newIndex: G,
            newDraggableIndex: fe,
            hideGhostForTarget: $t,
            unhideGhostForTarget: Vt,
            cloneNowHidden: function() {
                he = !0;
            },
            cloneNowShown: function() {
                he = !1;
            },
            dispatchSortableEvent: function(l) {
                Y({
                    sortable: n,
                    name: l,
                    originalEvent: i
                });
            }
        }, r));
    };
    function Y(t) {
        vn(oe({
            putSortable: F,
            cloneEl: O,
            targetEl: c,
            rootEl: T,
            oldIndex: De,
            oldDraggableIndex: Ne,
            newIndex: G,
            newDraggableIndex: fe
        }, t));
    }
    var c, C, b, T, ye, Ge, O, he, De, G, Ne, fe, Ye, F, _e = !1, Ue = !1, qe = [], ve, K, lt, st, Pt, Nt, Oe, Ee, Me, Fe = !1, ke = !1, We, L, ut = [], gt = !1, Ke = [], Qe = typeof document < "u", Be = Lt, Mt = Xe || ae ? "cssFloat" : "float", yn = Qe && !un && !Lt && "draggable" in document.createElement("div"), Ht = (function() {
        if (Qe) {
            if (ae) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
        }
    })(), Gt = function(e, n) {
        var o = g(e), i = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), r = Te(e, 0, n), a = Te(e, 1, n), l = r && g(r), s = a && g(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + P(r).width, h = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + P(a).width;
        if (o.display === "flex") return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (o.display === "grid") return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (r && l.float && l.float !== "none") {
            var d = l.float === "left" ? "left" : "right";
            return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
        }
        return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= i && o[Mt] === "none" || a && o[Mt] === "none" && u + h > i) ? "vertical" : "horizontal";
    }, wn = function(e, n, o) {
        var i = o ? e.left : e.top, r = o ? e.right : e.bottom, a = o ? e.width : e.height, l = o ? n.left : n.top, s = o ? n.right : n.bottom, u = o ? n.width : n.height;
        return i === l || r === s || i + a / 2 === l + u / 2;
    }, En = function(e, n) {
        var o;
        return qe.some(function(i) {
            var r = i[W].options.emptyInsertThreshold;
            if (!(!r || Et(i))) {
                var a = P(i), l = e >= a.left - r && e <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
                if (l && s) return o = i;
            }
        }), o;
    }, Wt = function(e) {
        function n(r, a) {
            return function(l, s, u, h) {
                var d = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
                if (r == null && (a || d)) return !0;
                if (r == null || r === !1) return !1;
                if (a && r === "clone") return r;
                if (typeof r == "function") return n(r(l, s, u, h), a)(l, s, u, h);
                var v = (a ? l : s).options.group.name;
                return r === !0 || typeof r == "string" && r === v || r.join && r.indexOf(v) > -1;
            };
        }
        var o = {}, i = e.group;
        (!i || He(i) != "object") && (i = {
            name: i
        }), o.name = i.name, o.checkPull = n(i.pull, !0), o.checkPut = n(i.put), o.revertClone = i.revertClone, e.group = o;
    }, $t = function() {
        !Ht && b && g(b, "display", "none");
    }, Vt = function() {
        !Ht && b && g(b, "display", "");
    };
    Qe && document.addEventListener("click", function(t) {
        if (Ue) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Ue = !1, !1;
    }, !0);
    var be = function(e) {
        if (c) {
            e = e.touches ? e.touches[0] : e;
            var n = En(e.clientX, e.clientY);
            if (n) {
                var o = {};
                for(var i in e)e.hasOwnProperty(i) && (o[i] = e[i]);
                o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[W]._onDragOver(o);
            }
        }
    }, _n = function(e) {
        c && c.parentNode[W]._isOutsideThisEl(e.target);
    };
    function m(t, e) {
        if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
        this.el = t, this.options = e = re({}, e), t[W] = this;
        var n = {
            group: null,
            sort: !0,
            disabled: !1,
            store: null,
            handle: null,
            draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
            swapThreshold: 1,
            invertSwap: !1,
            invertedSwapThreshold: null,
            removeCloneOnHide: !0,
            direction: function() {
                return Gt(t, this.options);
            },
            ghostClass: "sortable-ghost",
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            ignore: "a, img",
            filter: null,
            preventOnFilter: !0,
            animation: 0,
            easing: null,
            setData: function(a, l) {
                a.setData("Text", l.textContent);
            },
            dropBubble: !1,
            dragoverBubble: !1,
            dataIdAttr: "data-id",
            delay: 0,
            delayOnTouchOnly: !1,
            touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
            forceFallback: !1,
            fallbackClass: "sortable-fallback",
            fallbackOnBody: !1,
            fallbackTolerance: 0,
            fallbackOffset: {
                x: 0,
                y: 0
            },
            supportPointer: m.supportPointer !== !1 && "PointerEvent" in window && !Ae,
            emptyInsertThreshold: 5
        };
        Le.initializePlugins(this, t, n);
        for(var o in n)!(o in e) && (e[o] = n[o]);
        Wt(e);
        for(var i in this)i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
        this.nativeDraggable = e.forceFallback ? !1 : yn, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? D(t, "pointerdown", this._onTapStart) : (D(t, "mousedown", this._onTapStart), D(t, "touchstart", this._onTapStart)), this.nativeDraggable && (D(t, "dragover", this), D(t, "dragenter", this)), qe.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), re(this, pn());
    }
    m.prototype = {
        constructor: m,
        _isOutsideThisEl: function(e) {
            !this.el.contains(e) && e !== this.el && (Ee = null);
        },
        _getDirection: function(e, n) {
            return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
        },
        _onTapStart: function(e) {
            if (e.cancelable) {
                var n = this, o = this.el, i = this.options, r = i.preventOnFilter, a = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (l || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, h = i.filter;
                if (An(o), !c && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ae && s && s.tagName.toUpperCase() === "SELECT") && (s = te(s, i.draggable, o, !1), !(s && s.animated) && Ge !== s)) {
                    if (De = V(s), Ne = V(s, i.draggable), typeof h == "function") {
                        if (h.call(this, e, s, this)) {
                            Y({
                                sortable: n,
                                rootEl: u,
                                name: "filter",
                                targetEl: s,
                                toEl: o,
                                fromEl: o
                            }), j("filter", n, {
                                evt: e
                            }), r && e.cancelable && e.preventDefault();
                            return;
                        }
                    } else if (h && (h = h.split(",").some(function(d) {
                        if (d = te(u, d.trim(), o, !1), d) return Y({
                            sortable: n,
                            rootEl: d,
                            name: "filter",
                            targetEl: s,
                            fromEl: o,
                            toEl: o
                        }), j("filter", n, {
                            evt: e
                        }), !0;
                    }), h)) {
                        r && e.cancelable && e.preventDefault();
                        return;
                    }
                    i.handle && !te(u, i.handle, o, !1) || this._prepareDragStart(e, l, s);
                }
            }
        },
        _prepareDragStart: function(e, n, o) {
            var i = this, r = i.el, a = i.options, l = r.ownerDocument, s;
            if (o && !c && o.parentNode === r) {
                var u = P(o);
                if (T = r, c = o, C = c.parentNode, ye = c.nextSibling, Ge = o, Ye = a.group, m.dragged = c, ve = {
                    target: c,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, Pt = ve.clientX - u.left, Nt = ve.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, c.style["will-change"] = "all", s = function() {
                    if (j("delayEnded", i, {
                        evt: e
                    }), m.eventCanceled) {
                        i._onDrop();
                        return;
                    }
                    i._disableDelayedDragEvents(), !Ot && i.nativeDraggable && (c.draggable = !0), i._triggerDragStart(e, n), Y({
                        sortable: i,
                        name: "choose",
                        originalEvent: e
                    }), H(c, a.chosenClass, !0);
                }, a.ignore.split(",").forEach(function(h) {
                    Yt(c, h.trim(), ct);
                }), D(l, "dragover", be), D(l, "mousemove", be), D(l, "touchmove", be), D(l, "mouseup", i._onDrop), D(l, "touchend", i._onDrop), D(l, "touchcancel", i._onDrop), Ot && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), j("delayStart", this, {
                    evt: e
                }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Xe || ae))) {
                    if (m.eventCanceled) {
                        this._onDrop();
                        return;
                    }
                    D(l, "mouseup", i._disableDelayedDrag), D(l, "touchend", i._disableDelayedDrag), D(l, "touchcancel", i._disableDelayedDrag), D(l, "mousemove", i._delayedDragTouchMoveHandler), D(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && D(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
                } else s();
            }
        },
        _delayedDragTouchMoveHandler: function(e) {
            var n = e.touches ? e.touches[0] : e;
            Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
        },
        _disableDelayedDrag: function() {
            c && ct(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
        },
        _disableDelayedDragEvents: function() {
            var e = this.el.ownerDocument;
            _(e, "mouseup", this._disableDelayedDrag), _(e, "touchend", this._disableDelayedDrag), _(e, "touchcancel", this._disableDelayedDrag), _(e, "mousemove", this._delayedDragTouchMoveHandler), _(e, "touchmove", this._delayedDragTouchMoveHandler), _(e, "pointermove", this._delayedDragTouchMoveHandler);
        },
        _triggerDragStart: function(e, n) {
            n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? D(document, "pointermove", this._onTouchMove) : n ? D(document, "touchmove", this._onTouchMove) : D(document, "mousemove", this._onTouchMove) : (D(c, "dragend", this), D(T, "dragstart", this._onDragStart));
            try {
                document.selection ? $e(function() {
                    document.selection.empty();
                }) : window.getSelection().removeAllRanges();
            } catch  {}
        },
        _dragStarted: function(e, n) {
            if (_e = !1, T && c) {
                j("dragStarted", this, {
                    evt: n
                }), this.nativeDraggable && D(document, "dragover", _n);
                var o = this.options;
                !e && H(c, o.dragClass, !1), H(c, o.ghostClass, !0), m.active = this, e && this._appendGhost(), Y({
                    sortable: this,
                    name: "start",
                    originalEvent: n
                });
            } else this._nulling();
        },
        _emulateDragOver: function() {
            if (K) {
                this._lastX = K.clientX, this._lastY = K.clientY, $t();
                for(var e = document.elementFromPoint(K.clientX, K.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(K.clientX, K.clientY), e !== n);)n = e;
                if (c.parentNode[W]._isOutsideThisEl(e), n) do {
                    if (n[W]) {
                        var o = void 0;
                        if (o = n[W]._onDragOver({
                            clientX: K.clientX,
                            clientY: K.clientY,
                            target: e,
                            rootEl: n
                        }), o && !this.options.dragoverBubble) break;
                    }
                    e = n;
                }while (n = n.parentNode);
                Vt();
            }
        },
        _onTouchMove: function(e) {
            if (ve) {
                var n = this.options, o = n.fallbackTolerance, i = n.fallbackOffset, r = e.touches ? e.touches[0] : e, a = b && Se(b, !0), l = b && a && a.a, s = b && a && a.d, u = Be && L && At(L), h = (r.clientX - ve.clientX + i.x) / (l || 1) + (u ? u[0] - ut[0] : 0) / (l || 1), d = (r.clientY - ve.clientY + i.y) / (s || 1) + (u ? u[1] - ut[1] : 0) / (s || 1);
                if (!m.active && !_e) {
                    if (o && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < o) return;
                    this._onDragStart(e, !0);
                }
                if (b) {
                    a ? (a.e += h - (lt || 0), a.f += d - (st || 0)) : a = {
                        a: 1,
                        b: 0,
                        c: 0,
                        d: 1,
                        e: h,
                        f: d
                    };
                    var v = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
                    g(b, "webkitTransform", v), g(b, "mozTransform", v), g(b, "msTransform", v), g(b, "transform", v), lt = h, st = d, K = r;
                }
                e.cancelable && e.preventDefault();
            }
        },
        _appendGhost: function() {
            if (!b) {
                var e = this.options.fallbackOnBody ? document.body : T, n = P(c, !0, Be, !0, e), o = this.options;
                if (Be) {
                    for(L = e; g(L, "position") === "static" && g(L, "transform") === "none" && L !== document;)L = L.parentNode;
                    L !== document.body && L !== document.documentElement ? (L === document && (L = ne()), n.top += L.scrollTop, n.left += L.scrollLeft) : L = ne(), ut = At(L);
                }
                b = c.cloneNode(!0), H(b, o.ghostClass, !1), H(b, o.fallbackClass, !0), H(b, o.dragClass, !0), g(b, "transition", ""), g(b, "transform", ""), g(b, "box-sizing", "border-box"), g(b, "margin", 0), g(b, "top", n.top), g(b, "left", n.left), g(b, "width", n.width), g(b, "height", n.height), g(b, "opacity", "0.8"), g(b, "position", Be ? "absolute" : "fixed"), g(b, "zIndex", "100000"), g(b, "pointerEvents", "none"), m.ghost = b, e.appendChild(b), g(b, "transform-origin", Pt / parseInt(b.style.width) * 100 + "% " + Nt / parseInt(b.style.height) * 100 + "%");
            }
        },
        _onDragStart: function(e, n) {
            var o = this, i = e.dataTransfer, r = o.options;
            if (j("dragStart", this, {
                evt: e
            }), m.eventCanceled) {
                this._onDrop();
                return;
            }
            j("setupClone", this), m.eventCanceled || (O = jt(c), O.draggable = !1, O.style["will-change"] = "", this._hideClone(), H(O, this.options.chosenClass, !1), m.clone = O), o.cloneId = $e(function() {
                j("clone", o), !m.eventCanceled && (o.options.removeCloneOnHide || T.insertBefore(O, c), o._hideClone(), Y({
                    sortable: o,
                    name: "clone"
                }));
            }), !n && H(c, r.dragClass, !0), n ? (Ue = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (_(document, "mouseup", o._onDrop), _(document, "touchend", o._onDrop), _(document, "touchcancel", o._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(o, i, c)), D(document, "drop", o), g(c, "transform", "translateZ(0)")), _e = !0, o._dragStartId = $e(o._dragStarted.bind(o, n, e)), D(document, "selectstart", o), Oe = !0, Ae && g(document.body, "user-select", "none");
        },
        _onDragOver: function(e) {
            var n = this.el, o = e.target, i, r, a, l = this.options, s = l.group, u = m.active, h = Ye === s, d = l.sort, v = F || u, S, w = this, E = !1;
            if (gt) return;
            function N(de, Je) {
                j(de, w, oe({
                    evt: e,
                    isOwner: h,
                    axis: S ? "vertical" : "horizontal",
                    revert: a,
                    dragRect: i,
                    targetRect: r,
                    canSort: d,
                    fromSortable: v,
                    target: o,
                    completed: I,
                    onMove: function(Ce, et) {
                        return je(T, n, c, i, Ce, P(Ce), e, et);
                    },
                    changed: R
                }, Je));
            }
            function $() {
                N("dragOverAnimationCapture"), w.captureAnimationState(), w !== v && v.captureAnimationState();
            }
            function I(de) {
                return N("dragOverCompleted", {
                    insertion: de
                }), de && (h ? u._hideClone() : u._showClone(w), w !== v && (H(c, F ? F.options.ghostClass : u.options.ghostClass, !1), H(c, l.ghostClass, !0)), F !== w && w !== m.active ? F = w : w === m.active && F && (F = null), v === w && (w._ignoreWhileAnimating = o), w.animateAll(function() {
                    N("dragOverAnimationComplete"), w._ignoreWhileAnimating = null;
                }), w !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (o === c && !c.animated || o === n && !o.animated) && (Ee = null), !l.dragoverBubble && !e.rootEl && o !== document && (c.parentNode[W]._isOutsideThisEl(e.target), !de && be(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), E = !0;
            }
            function R() {
                G = V(c), fe = V(c, l.draggable), Y({
                    sortable: w,
                    name: "change",
                    toEl: n,
                    newIndex: G,
                    newDraggableIndex: fe,
                    originalEvent: e
                });
            }
            if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), o = te(o, l.draggable, n, !0), N("dragOver"), m.eventCanceled) return E;
            if (c.contains(e.target) || o.animated && o.animatingX && o.animatingY || w._ignoreWhileAnimating === o) return I(!1);
            if (Ue = !1, u && !l.disabled && (h ? d || (a = C !== T) : F === this || (this.lastPutMode = Ye.checkPull(this, u, c, e)) && s.checkPut(this, u, c, e))) {
                if (S = this._getDirection(e, o) === "vertical", i = P(c), N("dragOverValid"), m.eventCanceled) return E;
                if (a) return C = T, $(), this._hideClone(), N("revert"), m.eventCanceled || (ye ? T.insertBefore(c, ye) : T.appendChild(c)), I(!0);
                var k = Et(n, l.draggable);
                if (!k || Cn(e, S, this) && !k.animated) {
                    if (k === c) return I(!1);
                    if (k && n === e.target && (o = k), o && (r = P(o)), je(T, n, c, i, o, r, e, !!o) !== !1) return $(), n.appendChild(c), C = n, R(), I(!0);
                } else if (k && Tn(e, S, this)) {
                    var Z = Te(n, 0, l, !0);
                    if (Z === c) return I(!1);
                    if (o = Z, r = P(o), je(T, n, c, i, o, r, e, !1) !== !1) return $(), n.insertBefore(c, Z), C = n, R(), I(!0);
                } else if (o.parentNode === n) {
                    r = P(o);
                    var B = 0, Q, le = c.parentNode !== n, X = !wn(c.animated && c.toRect || i, o.animated && o.toRect || r, S), se = S ? "top" : "left", z = xt(o, "top", "top") || xt(c, "top", "top"), ue = z ? z.scrollTop : void 0;
                    Ee !== o && (Q = r[se], Fe = !1, ke = !X && l.invertSwap || le), B = On(e, o, r, S, X ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, ke, Ee === o);
                    var U;
                    if (B !== 0) {
                        var J = V(c);
                        do J -= B, U = C.children[J];
                        while (U && (g(U, "display") === "none" || U === b));
                    }
                    if (B === 0 || U === o) return I(!1);
                    Ee = o, Me = B;
                    var ce = o.nextElementSibling, q = !1;
                    q = B === 1;
                    var ge = je(T, n, c, i, o, r, e, q);
                    if (ge !== !1) return (ge === 1 || ge === -1) && (q = ge === 1), gt = !0, setTimeout(Sn, 30), $(), q && !ce ? n.appendChild(c) : o.parentNode.insertBefore(c, q ? ce : o), z && Bt(z, 0, ue - z.scrollTop), C = c.parentNode, Q !== void 0 && !ke && (We = Math.abs(Q - P(o)[se])), R(), I(!0);
                }
                if (n.contains(c)) return I(!1);
            }
            return !1;
        },
        _ignoreWhileAnimating: null,
        _offMoveEvents: function() {
            _(document, "mousemove", this._onTouchMove), _(document, "touchmove", this._onTouchMove), _(document, "pointermove", this._onTouchMove), _(document, "dragover", be), _(document, "mousemove", be), _(document, "touchmove", be);
        },
        _offUpEvents: function() {
            var e = this.el.ownerDocument;
            _(e, "mouseup", this._onDrop), _(e, "touchend", this._onDrop), _(e, "pointerup", this._onDrop), _(e, "touchcancel", this._onDrop), _(document, "selectstart", this);
        },
        _onDrop: function(e) {
            var n = this.el, o = this.options;
            if (G = V(c), fe = V(c, o.draggable), j("drop", this, {
                evt: e
            }), C = c && c.parentNode, G = V(c), fe = V(c, o.draggable), m.eventCanceled) {
                this._nulling();
                return;
            }
            _e = !1, ke = !1, Fe = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), mt(this.cloneId), mt(this._dragStartId), this.nativeDraggable && (_(document, "drop", this), _(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ae && g(document.body, "user-select", ""), g(c, "transform", ""), e && (Oe && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()), b && b.parentNode && b.parentNode.removeChild(b), (T === C || F && F.lastPutMode !== "clone") && O && O.parentNode && O.parentNode.removeChild(O), c && (this.nativeDraggable && _(c, "dragend", this), ct(c), c.style["will-change"] = "", Oe && !_e && H(c, F ? F.options.ghostClass : this.options.ghostClass, !1), H(c, this.options.chosenClass, !1), Y({
                sortable: this,
                name: "unchoose",
                toEl: C,
                newIndex: null,
                newDraggableIndex: null,
                originalEvent: e
            }), T !== C ? (G >= 0 && (Y({
                rootEl: C,
                name: "add",
                toEl: C,
                fromEl: T,
                originalEvent: e
            }), Y({
                sortable: this,
                name: "remove",
                toEl: C,
                originalEvent: e
            }), Y({
                rootEl: C,
                name: "sort",
                toEl: C,
                fromEl: T,
                originalEvent: e
            }), Y({
                sortable: this,
                name: "sort",
                toEl: C,
                originalEvent: e
            })), F && F.save()) : G !== De && G >= 0 && (Y({
                sortable: this,
                name: "update",
                toEl: C,
                originalEvent: e
            }), Y({
                sortable: this,
                name: "sort",
                toEl: C,
                originalEvent: e
            })), m.active && ((G == null || G === -1) && (G = De, fe = Ne), Y({
                sortable: this,
                name: "end",
                toEl: C,
                originalEvent: e
            }), this.save()))), this._nulling();
        },
        _nulling: function() {
            j("nulling", this), T = c = C = b = ye = O = Ge = he = ve = K = Oe = G = fe = De = Ne = Ee = Me = F = Ye = m.dragged = m.ghost = m.clone = m.active = null, Ke.forEach(function(e) {
                e.checked = !0;
            }), Ke.length = lt = st = 0;
        },
        handleEvent: function(e) {
            switch(e.type){
                case "drop":
                case "dragend":
                    this._onDrop(e);
                    break;
                case "dragenter":
                case "dragover":
                    c && (this._onDragOver(e), Dn(e));
                    break;
                case "selectstart":
                    e.preventDefault();
                    break;
            }
        },
        toArray: function() {
            for(var e = [], n, o = this.el.children, i = 0, r = o.length, a = this.options; i < r; i++)n = o[i], te(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || xn(n));
            return e;
        },
        sort: function(e, n) {
            var o = {}, i = this.el;
            this.toArray().forEach(function(r, a) {
                var l = i.children[a];
                te(l, this.options.draggable, i, !1) && (o[r] = l);
            }, this), n && this.captureAnimationState(), e.forEach(function(r) {
                o[r] && (i.removeChild(o[r]), i.appendChild(o[r]));
            }), n && this.animateAll();
        },
        save: function() {
            var e = this.options.store;
            e && e.set && e.set(this);
        },
        closest: function(e, n) {
            return te(e, n || this.options.draggable, this.el, !1);
        },
        option: function(e, n) {
            var o = this.options;
            if (n === void 0) return o[e];
            var i = Le.modifyOption(this, e, n);
            typeof i < "u" ? o[e] = i : o[e] = n, e === "group" && Wt(o);
        },
        destroy: function() {
            j("destroy", this);
            var e = this.el;
            e[W] = null, _(e, "mousedown", this._onTapStart), _(e, "touchstart", this._onTapStart), _(e, "pointerdown", this._onTapStart), this.nativeDraggable && (_(e, "dragover", this), _(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
                n.removeAttribute("draggable");
            }), this._onDrop(), this._disableDelayedDragEvents(), qe.splice(qe.indexOf(this.el), 1), this.el = e = null;
        },
        _hideClone: function() {
            if (!he) {
                if (j("hideClone", this), m.eventCanceled) return;
                g(O, "display", "none"), this.options.removeCloneOnHide && O.parentNode && O.parentNode.removeChild(O), he = !0;
            }
        },
        _showClone: function(e) {
            if (e.lastPutMode !== "clone") {
                this._hideClone();
                return;
            }
            if (he) {
                if (j("showClone", this), m.eventCanceled) return;
                c.parentNode == T && !this.options.group.revertClone ? T.insertBefore(O, c) : ye ? T.insertBefore(O, ye) : T.appendChild(O), this.options.group.revertClone && this.animate(c, O), g(O, "display", ""), he = !1;
            }
        }
    };
    function Dn(t) {
        t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
    }
    function je(t, e, n, o, i, r, a, l) {
        var s, u = t[W], h = u.options.onMove, d;
        return window.CustomEvent && !ae && !Xe ? s = new CustomEvent("move", {
            bubbles: !0,
            cancelable: !0
        }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || P(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), h && (d = h.call(u, s, a)), d;
    }
    function ct(t) {
        t.draggable = !1;
    }
    function Sn() {
        gt = !1;
    }
    function Tn(t, e, n) {
        var o = P(Te(n.el, 0, n.options, !0)), i = 10;
        return e ? t.clientX < o.left - i || t.clientY < o.top && t.clientX < o.right : t.clientY < o.top - i || t.clientY < o.bottom && t.clientX < o.left;
    }
    function Cn(t, e, n) {
        var o = P(Et(n.el, n.options.draggable)), i = 10;
        return e ? t.clientX > o.right + i || t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left : t.clientX > o.right && t.clientY > o.top || t.clientX <= o.right && t.clientY > o.bottom + i;
    }
    function On(t, e, n, o, i, r, a, l) {
        var s = o ? t.clientY : t.clientX, u = o ? n.height : n.width, h = o ? n.top : n.left, d = o ? n.bottom : n.right, v = !1;
        if (!a) {
            if (l && We < u * i) {
                if (!Fe && (Me === 1 ? s > h + u * r / 2 : s < d - u * r / 2) && (Fe = !0), Fe) v = !0;
                else if (Me === 1 ? s < h + We : s > d - We) return -Me;
            } else if (s > h + u * (1 - i) / 2 && s < d - u * (1 - i) / 2) return In(e);
        }
        return v = v || a, v && (s < h + u * r / 2 || s > d - u * r / 2) ? s > h + u / 2 ? 1 : -1 : 0;
    }
    function In(t) {
        return V(c) < V(t) ? 1 : -1;
    }
    function xn(t) {
        for(var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;)o += e.charCodeAt(n);
        return o.toString(36);
    }
    function An(t) {
        Ke.length = 0;
        for(var e = t.getElementsByTagName("input"), n = e.length; n--;){
            var o = e[n];
            o.checked && Ke.push(o);
        }
    }
    function $e(t) {
        return setTimeout(t, 0);
    }
    function mt(t) {
        return clearTimeout(t);
    }
    Qe && D(document, "touchmove", function(t) {
        (m.active || _e) && t.cancelable && t.preventDefault();
    });
    m.utils = {
        on: D,
        off: _,
        css: g,
        find: Yt,
        is: function(e, n) {
            return !!te(e, n, e, !1);
        },
        extend: fn,
        throttle: kt,
        closest: te,
        toggleClass: H,
        clone: jt,
        index: V,
        nextTick: $e,
        cancelNextTick: mt,
        detectDirection: Gt,
        getChild: Te
    };
    m.get = function(t) {
        return t[W];
    };
    m.mount = function() {
        for(var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n];
        e[0].constructor === Array && (e = e[0]), e.forEach(function(o) {
            if (!o.prototype || !o.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
            o.utils && (m.utils = oe(oe({}, m.utils), o.utils)), Le.mount(o);
        });
    };
    m.create = function(t, e) {
        return new m(t, e);
    };
    m.version = sn;
    var A = [], Ie, vt, bt = !1, dt, ft, Ze, xe;
    function Pn() {
        function t() {
            this.defaults = {
                scroll: !0,
                forceAutoScrollFallback: !1,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: !0
            };
            for(var e in this)e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
        }
        return t.prototype = {
            dragStarted: function(n) {
                var o = n.originalEvent;
                this.sortable.nativeDraggable ? D(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? D(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? D(document, "touchmove", this._handleFallbackAutoScroll) : D(document, "mousemove", this._handleFallbackAutoScroll);
            },
            dragOverCompleted: function(n) {
                var o = n.originalEvent;
                !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
            },
            drop: function() {
                this.sortable.nativeDraggable ? _(document, "dragover", this._handleAutoScroll) : (_(document, "pointermove", this._handleFallbackAutoScroll), _(document, "touchmove", this._handleFallbackAutoScroll), _(document, "mousemove", this._handleFallbackAutoScroll)), Ft(), Ve(), hn();
            },
            nulling: function() {
                Ze = vt = Ie = bt = xe = dt = ft = null, A.length = 0;
            },
            _handleFallbackAutoScroll: function(n) {
                this._handleAutoScroll(n, !0);
            },
            _handleAutoScroll: function(n, o) {
                var i = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(r, a);
                if (Ze = n, o || this.options.forceAutoScrollFallback || Xe || ae || Ae) {
                    ht(n, this.options, l, o);
                    var s = pe(l, !0);
                    bt && (!xe || r !== dt || a !== ft) && (xe && Ft(), xe = setInterval(function() {
                        var u = pe(document.elementFromPoint(r, a), !0);
                        u !== s && (s = u, Ve()), ht(n, i.options, u, o);
                    }, 10), dt = r, ft = a);
                } else {
                    if (!this.options.bubbleScroll || pe(l, !0) === ne()) {
                        Ve();
                        return;
                    }
                    ht(n, this.options, pe(l, !1), !1);
                }
            }
        }, re(t, {
            pluginName: "scroll",
            initializeByDefault: !0
        });
    }
    function Ve() {
        A.forEach(function(t) {
            clearInterval(t.pid);
        }), A = [];
    }
    function Ft() {
        clearInterval(xe);
    }
    var ht = kt(function(t, e, n, o) {
        if (e.scroll) {
            var i = (t.touches ? t.touches[0] : t).clientX, r = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, l = e.scrollSpeed, s = ne(), u = !1, h;
            vt !== n && (vt = n, Ve(), Ie = e.scroll, h = e.scrollFn, Ie === !0 && (Ie = pe(n, !0)));
            var d = 0, v = Ie;
            do {
                var S = v, w = P(S), E = w.top, N = w.bottom, $ = w.left, I = w.right, R = w.width, k = w.height, Z = void 0, B = void 0, Q = S.scrollWidth, le = S.scrollHeight, X = g(S), se = S.scrollLeft, z = S.scrollTop;
                S === s ? (Z = R < Q && (X.overflowX === "auto" || X.overflowX === "scroll" || X.overflowX === "visible"), B = k < le && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflowY === "visible")) : (Z = R < Q && (X.overflowX === "auto" || X.overflowX === "scroll"), B = k < le && (X.overflowY === "auto" || X.overflowY === "scroll"));
                var ue = Z && (Math.abs(I - i) <= a && se + R < Q) - (Math.abs($ - i) <= a && !!se), U = B && (Math.abs(N - r) <= a && z + k < le) - (Math.abs(E - r) <= a && !!z);
                if (!A[d]) for(var J = 0; J <= d; J++)A[J] || (A[J] = {});
                (A[d].vx != ue || A[d].vy != U || A[d].el !== S) && (A[d].el = S, A[d].vx = ue, A[d].vy = U, clearInterval(A[d].pid), (ue != 0 || U != 0) && (u = !0, A[d].pid = setInterval(function() {
                    o && this.layer === 0 && m.active._onTouchMove(Ze);
                    var ce = A[this.layer].vy ? A[this.layer].vy * l : 0, q = A[this.layer].vx ? A[this.layer].vx * l : 0;
                    typeof h == "function" && h.call(m.dragged.parentNode[W], q, ce, t, Ze, A[this.layer].el) !== "continue" || Bt(A[this.layer].el, q, ce);
                }.bind({
                    layer: d
                }), 24))), d++;
            }while (e.bubbleScroll && v !== s && (v = pe(v, !1)));
            bt = u;
        }
    }, 30), zt = function(e) {
        var n = e.originalEvent, o = e.putSortable, i = e.dragEl, r = e.activeSortable, a = e.dispatchSortableEvent, l = e.hideGhostForTarget, s = e.unhideGhostForTarget;
        if (n) {
            var u = o || r;
            l();
            var h = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(h.clientX, h.clientY);
            s(), u && !u.el.contains(d) && (a("spill"), this.onSpill({
                dragEl: i,
                putSortable: o
            }));
        }
    };
    function _t() {}
    _t.prototype = {
        startIndex: null,
        dragStart: function(e) {
            var n = e.oldDraggableIndex;
            this.startIndex = n;
        },
        onSpill: function(e) {
            var n = e.dragEl, o = e.putSortable;
            this.sortable.captureAnimationState(), o && o.captureAnimationState();
            var i = Te(this.sortable.el, this.startIndex, this.options);
            i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
        },
        drop: zt
    };
    re(_t, {
        pluginName: "revertOnSpill"
    });
    function Dt() {}
    Dt.prototype = {
        onSpill: function(e) {
            var n = e.dragEl, o = e.putSortable, i = o || this.sortable;
            i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
        },
        drop: zt
    };
    re(Dt, {
        pluginName: "removeOnSpill"
    });
    m.mount(new Pn);
    m.mount(Dt, _t);
    function Nn(t, e) {
        return Object.values(t).indexOf(e);
    }
    function Mn(t, e, n, o) {
        if (!t) return [];
        const i = Object.values(t), r = e.length - o;
        return [
            ...e
        ].map((l, s)=>s >= r ? i.length : i.indexOf(l));
    }
    function Fn(t) {
        return [
            "transition-group",
            "TransitionGroup"
        ].includes(t);
    }
    function Xt(t) {
        if (!t || t.length !== 1) return !1;
        const [{ type: e }] = t;
        return e ? Fn(e.name) : !1;
    }
    function Xn(t, e) {
        return e ? {
            ...e.props,
            ...e.attrs
        } : t;
    }
    const yt = [
        "Start",
        "Add",
        "Remove",
        "Update",
        "End"
    ], wt = [
        "Choose",
        "Unchoose",
        "Sort",
        "Filter",
        "Clone"
    ], Ln = [
        "Move",
        ...yt,
        ...wt
    ].map((t)=>"on" + t);
    let pt = null;
    Yn = qt({
        name: "VueDraggableNext",
        inheritAttrs: !1,
        props: {
            options: Object,
            list: {
                type: Array,
                required: !1,
                default: null
            },
            noTransitionOnDrag: {
                type: Boolean,
                default: !1
            },
            clone: {
                type: Function,
                default: (t)=>t
            },
            tag: {
                type: String,
                default: "div"
            },
            move: {
                type: Function,
                default: null
            },
            componentData: {
                type: Object,
                required: !1,
                default: null
            },
            component: {
                type: String,
                default: null
            },
            modelValue: {
                type: Array,
                required: !1,
                default: null
            }
        },
        emits: [
            "update:modelValue",
            "move",
            "change",
            ...yt.map((t)=>t.toLowerCase()),
            ...wt.map((t)=>t.toLowerCase())
        ],
        setup (t, { emit: e, slots: n, attrs: o }) {
            const i = me(!1), r = me(!1), a = me(0), l = me(0), s = me([]), u = me(null), h = me(null), d = Kt(()=>t.list ? t.list : t.modelValue), v = Zt();
            function S() {
                return t.component ? Jt(t.component) : t.tag;
            }
            function w(f) {
                if (h.value) for(const p in f){
                    const y = St(p);
                    Ln.indexOf(y) === -1 && h.value.option(y, f[p]);
                }
            }
            function E() {
                return v?.proxy?.$el.children || [];
            }
            async function N() {
                await ot(), s.value = Mn(E(), v?.proxy?.$el.children || [], i.value, l.value);
            }
            function $(f) {
                const p = Nn(E() || [], f);
                if (p === -1) return null;
                const y = d.value ? d.value[p] : null;
                return {
                    index: p,
                    element: y
                };
            }
            function I(f) {
                ot(()=>e("change", f));
            }
            function R(f) {
                if (t.list) {
                    f(t.list);
                    return;
                }
                const p = [
                    ...t.modelValue || []
                ];
                f(p), e("update:modelValue", p);
            }
            function k(...f) {
                R((y)=>y.splice(...f));
            }
            function Z(f, p) {
                R((M)=>M.splice(p, 0, M.splice(f, 1)[0]));
            }
            function B(f) {
                const p = s.value, y = p.length;
                return f > y - 1 ? y : p[f];
            }
            function Q() {
                return n.default && n.default()[0]?.component?.proxy || null;
            }
            function le(f) {
                if (!t.noTransitionOnDrag || !i.value) return;
                const p = E();
                p[f] && (p[f].data = null);
                const y = Q();
                y && (y.children = [], y.kept = void 0);
            }
            function X(f) {
                N(), u.value = $(f.item), u.value && (f.item._underlying_vm_ = t.clone(u.value.element), pt = f.item);
            }
            function se(f) {
                const p = f.item._underlying_vm_;
                if (p === void 0) return;
                it(f.item);
                const y = B(f.newIndex);
                k(y, 0, p), N(), I({
                    added: {
                        element: p,
                        newIndex: y
                    }
                });
            }
            function z(f) {
                if (Tt(v?.proxy?.$el, f.item, f.oldIndex), f.pullMode === "clone") {
                    it(f.clone);
                    return;
                }
                if (!u.value) return;
                const p = u.value.index;
                k(p, 1), le(p), I({
                    removed: {
                        element: u.value.element,
                        oldIndex: p
                    }
                });
            }
            function ue(f) {
                it(f.item), Tt(f.from, f.item, f.oldIndex);
                const p = u.value?.index, y = B(f.newIndex);
                Z(p, y), I({
                    moved: {
                        element: u.value?.element,
                        oldIndex: p,
                        newIndex: y
                    }
                });
            }
            function U(f, p) {
                Object.prototype.hasOwnProperty.call(f, p) && (f[p] += a.value);
            }
            function J(f) {
                return f.__draggable_component__;
            }
            function ce({ to: f, related: p }) {
                const y = J(f);
                if (!y) return {
                    component: y
                };
                const M = y.realList, x = {
                    list: M,
                    component: y
                };
                if (f !== p && M && y.getUnderlyingVm) {
                    const ee = y.getUnderlyingVm(p);
                    if (ee) return Object.assign(ee, x);
                }
                return x;
            }
            function q(f, p) {
                const y = [
                    ...p.to.children
                ].filter((tt)=>tt.style.display !== "none");
                if (y.length === 0) return 0;
                const M = y.indexOf(p.related), x = f.component.getVmIndex(M);
                return y.indexOf(pt) !== -1 || !p.willInsertAfter ? x : x + 1;
            }
            const ge = ()=>{
                const f = {};
                yt.forEach((x)=>{
                    f["on" + x] = Je(x);
                }), wt.forEach((x)=>{
                    f["on" + x] = de.bind(null, x);
                });
                const p = Object.keys(o).reduce((x, ee)=>(x[St(ee)] = o[ee], x), {}), y = Object.assign({}, p, f, {
                    onMove: (x, ee)=>Re(x, ee)
                });
                "draggable" in y || (y.draggable = ">*");
                const M = v?.proxy?.$el.nodeType === 1 ? v.proxy.$el : v?.proxy?.$el.parentElement || null;
                M && (h.value = new m(M, y), M.__draggable_component__ = v?.proxy, N());
            };
            function de(f, p) {
                ot(()=>e(f.toLowerCase(), p));
            }
            function Je(f) {
                return (p)=>{
                    if (d.value !== null) {
                        const y = "onDrag" + f, M = et[y];
                        M && M(p);
                    }
                    de(f, p);
                };
            }
            function Re(f, p) {
                const y = t.move;
                if (!y || !d.value) return !0;
                const M = ce(f), x = u.value, ee = q(M, f);
                x && Object.assign(x, {
                    futureIndex: ee
                });
                const tt = Object.assign({}, f, {
                    relatedContext: M,
                    draggedContext: x
                });
                return y(tt, p);
            }
            function Ce() {
                N(), pt = null;
            }
            const et = {
                onDragStart: X,
                onDragAdd: se,
                onDragRemove: z,
                onDragUpdate: ue,
                onDragMove: Re,
                onDragEnd: Ce
            };
            return Qt(()=>{
                ge();
            }), t.list !== null && t.modelValue !== null && tn.error("list props are mutually exclusive! Please set one."), {
                getTag: S,
                realList: d,
                visibleIndexes: s,
                noneFunctionalComponentMode: r,
                headerOffset: a,
                footerOffset: l,
                transitionMode: i,
                computeIndexes: N,
                updateOptions: w,
                getChildrenNodes: E,
                getUnderlyingVm: $,
                emitChanges: I,
                alterList: R,
                spliceList: k,
                updatePosition: Z,
                getVmIndex: B,
                getComponent: Q,
                resetTransitionData: le,
                onDragStart: X,
                onDragAdd: se,
                onDragRemove: z,
                onDragUpdate: ue,
                updateProperty: U,
                onDragMove: Re,
                onDragEnd: Ce,
                mounted: ge,
                context: u,
                sortableInstance: h,
                getRelatedContextFromMoveEvent: ce,
                getTargetedComponent: J,
                computeFutureIndex: q
            };
        },
        render () {
            const t = this.getTag(), e = Xn(this.$attrs, this.componentData);
            if (typeof t == "string") {
                const o = this.$slots.default && typeof this.$slots.default == "function" ? this.$slots.default() : null;
                return o ? (this.transitionMode = Xt(o), nt(t, e, o)) : nt(t, e, []);
            }
            const n = this.$slots.default ? {
                default: this.$slots.default
            } : {};
            if (this.$slots.default) {
                const o = typeof this.$slots.default == "function" ? this.$slots.default() : null;
                this.transitionMode = Xt(o || []);
            }
            return nt(t, e, n);
        }
    });
});
export { Yn as V, __tla };
