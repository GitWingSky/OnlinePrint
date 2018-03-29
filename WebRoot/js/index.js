webpackJsonp([0], [, , function(e, t, n) {
	var r, i; /*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
	! function(t, n) {
		"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
			if(!e.document) throw new Error("jQuery requires a window with a document");
			return n(e)
		} : n(t)
	}("undefined" != typeof window ? window : this, function(a, o) {
		function s(e) {
			var t = "length" in e && e.length,
				n = ue.type(e);
			return "function" !== n && !ue.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
		}

		function l(e, t, n) {
			if(ue.isFunction(t)) return ue.grep(e, function(e, r) {
				return !!t.call(e, r, e) !== n
			});
			if(t.nodeType) return ue.grep(e, function(e) {
				return e === t !== n
			});
			if("string" == typeof t) {
				if(ge.test(t)) return ue.filter(t, e, n);
				t = ue.filter(t, e)
			}
			return ue.grep(e, function(e) {
				return ue.inArray(e, t) >= 0 !== n
			})
		}

		function u(e, t) {
			do {
				e = e[t]
			} while (e && 1 !== e.nodeType);
			return e
		}

		function d(e) {
			var t = Se[e] = {};
			return ue.each(e.match(Ce) || [], function(e, n) {
				t[n] = !0
			}), t
		}

		function c() {
			we.addEventListener ? (we.removeEventListener("DOMContentLoaded", p, !1), a.removeEventListener("load", p, !1)) : (we.detachEvent("onreadystatechange", p), a.detachEvent("onload", p))
		}

		function p() {
			(we.addEventListener || "load" === event.type || "complete" === we.readyState) && (c(), ue.ready())
		}

		function f(e, t, n) {
			if(void 0 === n && 1 === e.nodeType) {
				var r = "data-" + t.replace(Le, "-$1").toLowerCase();
				if("string" == typeof(n = e.getAttribute(r))) {
					try {
						n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Me.test(n) ? ue.parseJSON(n) : n)
					} catch(e) {}
					ue.data(e, t, n)
				} else n = void 0
			}
			return n
		}

		function h(e) {
			var t;
			for(t in e)
				if(("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
			return !0
		}

		function m(e, t, n, r) {
			if(ue.acceptData(e)) {
				var i, a, o = ue.expando,
					s = e.nodeType,
					l = s ? ue.cache : e,
					u = s ? e[o] : e[o] && o;
				if(u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[o] = Z.pop() || ue.guid++ : o), l[u] || (l[u] = s ? {} : {
					toJSON: ue.noop
				}), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = ue.extend(l[u], t) : l[u].data = ue.extend(l[u].data, t)), a = l[u], r || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[ue.camelCase(t)] = n), "string" == typeof t ? null == (i = a[t]) && (i = a[ue.camelCase(t)]) : i = a, i
			}
		}

		function v(e, t, n) {
			if(ue.acceptData(e)) {
				var r, i, a = e.nodeType,
					o = a ? ue.cache : e,
					s = a ? e[ue.expando] : ue.expando;
				if(o[s]) {
					if(t && (r = n ? o[s] : o[s].data)) {
						ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in r ? t = [t] : (t = ue.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
						for(; i--;) delete r[t[i]];
						if(n ? !h(r) : !ue.isEmptyObject(r)) return
					}(n || (delete o[s].data, h(o[s]))) && (a ? ue.cleanData([e], !0) : se.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
				}
			}
		}

		function g() {
			return !0
		}

		function y() {
			return !1
		}

		function w() {
			try {
				return we.activeElement
			} catch(e) {}
		}

		function x(e) {
			var t = _e.split("|"),
				n = e.createDocumentFragment();
			if(n.createElement)
				for(; t.length;) n.createElement(t.pop());
			return n
		}

		function b(e, t) {
			var n, r, i = 0,
				a = typeof e.getElementsByTagName !== Ne ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ne ? e.querySelectorAll(t || "*") : void 0;
			if(!a)
				for(a = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ue.nodeName(r, t) ? a.push(r) : ue.merge(a, b(r, t));
			return void 0 === t || t && ue.nodeName(e, t) ? ue.merge([e], a) : a
		}

		function T(e) {
			Ie.test(e.type) && (e.defaultChecked = e.checked)
		}

		function C(e, t) {
			return ue.nodeName(e, "table") && ue.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function S(e) {
			return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type, e
		}

		function E(e) {
			var t = Je.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function k(e, t) {
			for(var n, r = 0; null != (n = e[r]); r++) ue._data(n, "globalEval", !t || ue._data(t[r], "globalEval"))
		}

		function N(e, t) {
			if(1 === t.nodeType && ue.hasData(e)) {
				var n, r, i, a = ue._data(e),
					o = ue._data(t, a),
					s = a.events;
				if(s) {
					delete o.handle, o.events = {};
					for(n in s)
						for(r = 0, i = s[n].length; i > r; r++) ue.event.add(t, n, s[n][r])
				}
				o.data && (o.data = ue.extend({}, o.data))
			}
		}

		function M(e, t) {
			var n, r, i;
			if(1 === t.nodeType) {
				if(n = t.nodeName.toLowerCase(), !se.noCloneEvent && t[ue.expando]) {
					i = ue._data(t);
					for(r in i.events) ue.removeEvent(t, r, i.handle);
					t.removeAttribute(ue.expando)
				}
				"script" === n && t.text !== e.text ? (S(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), se.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ie.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
			}
		}

		function L(e, t) {
			var n, r = ue(t.createElement(e)).appendTo(t.body),
				i = a.getDefaultComputedStyle && (n = a.getDefaultComputedStyle(r[0])) ? n.display : ue.css(r[0], "display");
			return r.detach(), i
		}

		function D(e) {
			var t = we,
				n = rt[e];
			return n || (n = L(e, t), "none" !== n && n || (nt = (nt || ue("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (nt[0].contentWindow || nt[0].contentDocument).document, t.write(), t.close(), n = L(e, t), nt.detach()), rt[e] = n), n
		}

		function A(e, t) {
			return {
				get: function() {
					var n = e();
					if(null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function P(e, t) {
			if(t in e) return t;
			for(var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = vt.length; i--;)
				if((t = vt[i] + n) in e) return t;
			return r
		}

		function z(e, t) {
			for(var n, r, i, a = [], o = 0, s = e.length; s > o; o++) r = e[o], r.style && (a[o] = ue._data(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Pe(r) && (a[o] = ue._data(r, "olddisplay", D(r.nodeName)))) : (i = Pe(r), (n && "none" !== n || !i) && ue._data(r, "olddisplay", i ? n : ue.css(r, "display"))));
			for(o = 0; s > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
			return e
		}

		function I(e, t, n) {
			var r = pt.exec(t);
			return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
		}

		function j(e, t, n, r, i) {
			for(var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += ue.css(e, n + Ae[a], !0, i)), r ? ("content" === n && (o -= ue.css(e, "padding" + Ae[a], !0, i)), "margin" !== n && (o -= ue.css(e, "border" + Ae[a] + "Width", !0, i))) : (o += ue.css(e, "padding" + Ae[a], !0, i), "padding" !== n && (o += ue.css(e, "border" + Ae[a] + "Width", !0, i)));
			return o
		}

		function O(e, t, n) {
			var r = !0,
				i = "width" === t ? e.offsetWidth : e.offsetHeight,
				a = it(e),
				o = se.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, a);
			if(0 >= i || null == i) {
				if(i = at(e, t, a), (0 > i || null == i) && (i = e.style[t]), st.test(i)) return i;
				r = o && (se.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
			}
			return i + j(e, t, n || (o ? "border" : "content"), r, a) + "px"
		}

		function H(e, t, n, r, i) {
			return new H.prototype.init(e, t, n, r, i)
		}

		function B() {
			return setTimeout(function() {
				gt = void 0
			}), gt = ue.now()
		}

		function W(e, t) {
			var n, r = {
					height: e
				},
				i = 0;
			for(t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ae[i], r["margin" + n] = r["padding" + n] = e;
			return t && (r.opacity = r.width = e), r
		}

		function _(e, t, n) {
			for(var r, i = (Ct[t] || []).concat(Ct["*"]), a = 0, o = i.length; o > a; a++)
				if(r = i[a].call(n, t, e)) return r
		}

		function q(e, t, n) {
			var r, i, a, o, s, l, u, d = this,
				c = {},
				p = e.style,
				f = e.nodeType && Pe(e),
				h = ue._data(e, "fxshow");
			n.queue || (s = ue._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
				s.unqueued || l()
			}), s.unqueued++, d.always(function() {
				d.always(function() {
					s.unqueued--, ue.queue(e, "fx").length || s.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ue.css(e, "display"), "inline" === ("none" === u ? ue._data(e, "olddisplay") || D(e.nodeName) : u) && "none" === ue.css(e, "float") && (se.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", se.shrinkWrapBlocks() || d.always(function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for(r in t)
				if(i = t[r], wt.exec(i)) {
					if(delete t[r], a = a || "toggle" === i, i === (f ? "hide" : "show")) {
						if("show" !== i || !h || void 0 === h[r]) continue;
						f = !0
					}
					c[r] = h && h[r] || ue.style(e, r)
				} else u = void 0;
			if(ue.isEmptyObject(c)) "inline" === ("none" === u ? D(e.nodeName) : u) && (p.display = u);
			else {
				h ? "hidden" in h && (f = h.hidden) : h = ue._data(e, "fxshow", {}), a && (h.hidden = !f), f ? ue(e).show() : d.done(function() {
					ue(e).hide()
				}), d.done(function() {
					var t;
					ue._removeData(e, "fxshow");
					for(t in c) ue.style(e, t, c[t])
				});
				for(r in c) o = _(f ? h[r] : 0, r, d), r in h || (h[r] = o.start, f && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
			}
		}

		function F(e, t) {
			var n, r, i, a, o;
			for(n in e)
				if(r = ue.camelCase(n), i = t[r], a = e[n], ue.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (o = ue.cssHooks[r]) && "expand" in o) {
					a = o.expand(a), delete e[r];
					for(n in a) n in e || (e[n] = a[n], t[n] = i)
				} else t[r] = i
		}

		function R(e, t, n) {
			var r, i, a = 0,
				o = Tt.length,
				s = ue.Deferred().always(function() {
					delete l.elem
				}),
				l = function() {
					if(i) return !1;
					for(var t = gt || B(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, a = 1 - r, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(a);
					return s.notifyWith(e, [u, a, n]), 1 > a && l ? n : (s.resolveWith(e, [u]), !1)
				},
				u = s.promise({
					elem: e,
					props: ue.extend({}, t),
					opts: ue.extend(!0, {
						specialEasing: {}
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: gt || B(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var r = ue.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
						return u.tweens.push(r), r
					},
					stop: function(t) {
						var n = 0,
							r = t ? u.tweens.length : 0;
						if(i) return this;
						for(i = !0; r > n; n++) u.tweens[n].run(1);
						return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
					}
				}),
				d = u.props;
			for(F(d, u.opts.specialEasing); o > a; a++)
				if(r = Tt[a].call(u, e, d, u.opts)) return r;
			return ue.map(d, _, u), ue.isFunction(u.opts.start) && u.opts.start.call(e, u), ue.fx.timer(ue.extend(l, {
				elem: e,
				anim: u,
				queue: u.opts.queue
			})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
		}

		function G(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, i = 0,
					a = t.toLowerCase().match(Ce) || [];
				if(ue.isFunction(n))
					for(; r = a[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}

		function X(e, t, n, r) {
			function i(s) {
				var l;
				return a[s] = !0, ue.each(e[s] || [], function(e, s) {
					var u = s(t, n, r);
					return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
				}), l
			}
			var a = {},
				o = e === Vt;
			return i(t.dataTypes[0]) || !a["*"] && i("*")
		}

		function $(e, t) {
			var n, r, i = ue.ajaxSettings.flatOptions || {};
			for(r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
			return n && ue.extend(!0, e, n), e
		}

		function V(e, t, n) {
			for(var r, i, a, o, s = e.contents, l = e.dataTypes;
				"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if(i)
				for(o in s)
					if(s[o] && s[o].test(i)) {
						l.unshift(o);
						break
					}
			if(l[0] in n) a = l[0];
			else {
				for(o in n) {
					if(!l[0] || e.converters[o + " " + l[0]]) {
						a = o;
						break
					}
					r || (r = o)
				}
				a = a || r
			}
			return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
		}

		function Y(e, t, n, r) {
			var i, a, o, s, l, u = {},
				d = e.dataTypes.slice();
			if(d[1])
				for(o in e.converters) u[o.toLowerCase()] = e.converters[o];
			for(a = d.shift(); a;)
				if(e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
					if("*" === a) a = l;
					else if("*" !== l && l !== a) {
				if(!(o = u[l + " " + a] || u["* " + a]))
					for(i in u)
						if(s = i.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
							!0 === o ? o = u[i] : !0 !== u[i] && (a = s[0], d.unshift(s[1]));
							break
						}
				if(!0 !== o)
					if(o && e.throws) t = o(t);
					else try {
						t = o(t)
					} catch(e) {
						return {
							state: "parsererror",
							error: o ? e : "No conversion from " + l + " to " + a
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function U(e, t, n, r) {
			var i;
			if(ue.isArray(t)) ue.each(t, function(t, i) {
				n || Kt.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
			});
			else if(n || "object" !== ue.type(t)) r(e, t);
			else
				for(i in t) U(e + "[" + i + "]", t[i], n, r)
		}

		function K() {
			try {
				return new a.XMLHttpRequest
			} catch(e) {}
		}

		function J() {
			try {
				return new a.ActiveXObject("Microsoft.XMLHTTP")
			} catch(e) {}
		}

		function Q(e) {
			return ue.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
		}
		var Z = [],
			ee = Z.slice,
			te = Z.concat,
			ne = Z.push,
			re = Z.indexOf,
			ie = {},
			ae = ie.toString,
			oe = ie.hasOwnProperty,
			se = {},
			le = "1.11.3",
			ue = function(e, t) {
				return new ue.fn.init(e, t)
			},
			de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			ce = /^-ms-/,
			pe = /-([\da-z])/gi,
			fe = function(e, t) {
				return t.toUpperCase()
			};
		ue.fn = ue.prototype = {
			jquery: le,
			constructor: ue,
			selector: "",
			length: 0,
			toArray: function() {
				return ee.call(this)
			},
			get: function(e) {
				return null != e ? 0 > e ? this[e + this.length] : this[e] : ee.call(this)
			},
			pushStack: function(e) {
				var t = ue.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return ue.each(this, e, t)
			},
			map: function(e) {
				return this.pushStack(ue.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function() {
				return this.pushStack(ee.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: ne,
			sort: Z.sort,
			splice: Z.splice
		}, ue.extend = ue.fn.extend = function() {
			var e, t, n, r, i, a, o = arguments[0] || {},
				s = 1,
				l = arguments.length,
				u = !1;
			for("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || ue.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
				if(null != (i = arguments[s]))
					for(r in i) e = o[r], n = i[r], o !== n && (u && n && (ue.isPlainObject(n) || (t = ue.isArray(n))) ? (t ? (t = !1, a = e && ue.isArray(e) ? e : []) : a = e && ue.isPlainObject(e) ? e : {}, o[r] = ue.extend(u, a, n)) : void 0 !== n && (o[r] = n));
			return o
		}, ue.extend({
			expando: "jQuery" + (le + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return "function" === ue.type(e)
			},
			isArray: Array.isArray || function(e) {
				return "array" === ue.type(e)
			},
			isWindow: function(e) {
				return null != e && e == e.window
			},
			isNumeric: function(e) {
				return !ue.isArray(e) && e - parseFloat(e) + 1 >= 0
			},
			isEmptyObject: function(e) {
				var t;
				for(t in e) return !1;
				return !0
			},
			isPlainObject: function(e) {
				var t;
				if(!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;
				try {
					if(e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch(e) {
					return !1
				}
				if(se.ownLast)
					for(t in e) return oe.call(e, t);
				for(t in e);
				return void 0 === t || oe.call(e, t)
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[ae.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				e && ue.trim(e) && (a.execScript || function(e) {
					a.eval.call(a, e)
				})(e)
			},
			camelCase: function(e) {
				return e.replace(ce, "ms-").replace(pe, fe)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, n) {
				var r = 0,
					i = e.length,
					a = s(e);
				if(n) {
					if(a)
						for(; i > r && !1 !== t.apply(e[r], n); r++);
					else
						for(r in e)
							if(!1 === t.apply(e[r], n)) break
				} else if(a)
					for(; i > r && !1 !== t.call(e[r], r, e[r]); r++);
				else
					for(r in e)
						if(!1 === t.call(e[r], r, e[r])) break;
				return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(de, "")
			},
			makeArray: function(e, t) {
				var n = t || [];
				return null != e && (s(Object(e)) ? ue.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)), n
			},
			inArray: function(e, t, n) {
				var r;
				if(t) {
					if(re) return re.call(t, e, n);
					for(r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
						if(n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function(e, t) {
				for(var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
				if(n !== n)
					for(; void 0 !== t[r];) e[i++] = t[r++];
				return e.length = i, e
			},
			grep: function(e, t, n) {
				for(var r = [], i = 0, a = e.length, o = !n; a > i; i++) !t(e[i], i) !== o && r.push(e[i]);
				return r
			},
			map: function(e, t, n) {
				var r, i = 0,
					a = e.length,
					o = s(e),
					l = [];
				if(o)
					for(; a > i; i++) null != (r = t(e[i], i, n)) && l.push(r);
				else
					for(i in e) null != (r = t(e[i], i, n)) && l.push(r);
				return te.apply([], l)
			},
			guid: 1,
			proxy: function(e, t) {
				var n, r, i;
				return "string" == typeof t && (i = e[t], t = e, e = i), ue.isFunction(e) ? (n = ee.call(arguments, 2), r = function() {
					return e.apply(t || this, n.concat(ee.call(arguments)))
				}, r.guid = e.guid = e.guid || ue.guid++, r) : void 0
			},
			now: function() {
				return +new Date
			},
			support: se
		}), ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			ie["[object " + t + "]"] = t.toLowerCase()
		});
		var he = function(e) {
			function t(e, t, n, r) {
				var i, a, o, s, u, c, p, f, h, m;
				if((t ? t.ownerDocument || t : B) !== D && L(t), t = t || D, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
				if(!r && P) {
					if(11 !== s && (i = ve.exec(e)))
						if(o = i[1]) {
							if(9 === s) {
								if(!(a = t.getElementById(o)) || !a.parentNode) return n;
								if(a.id === o) return n.push(a), n
							} else if(t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && O(t, a) && a.id === o) return n.push(a), n
						} else {
							if(i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
							if((o = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
						}
					if(w.qsa && (!z || !z.test(e))) {
						if(f = p = H, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for(c = C(e), (p = t.getAttribute("id")) ? f = p.replace(ye, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = c.length; u--;) c[u] = f + d(c[u]);
							h = ge.test(e) && l(t.parentNode) || t, m = c.join(",")
						}
						if(m) try {
							return K.apply(n, h.querySelectorAll(m)), n
						} catch(e) {} finally {
							p || t.removeAttribute("id")
						}
					}
				}
				return E(e.replace(oe, "$1"), t, n, r)
			}

			function n() {
				function e(n, r) {
					return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
				}
				var t = [];
				return e
			}

			function r(e) {
				return e[H] = !0, e
			}

			function i(e) {
				var t = D.createElement("div");
				try {
					return !!e(t)
				} catch(e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function a(e, t) {
				for(var n = e.split("|"), r = e.length; r--;) x.attrHandle[n[r]] = t
			}

			function o(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
				if(r) return r;
				if(n)
					for(; n = n.nextSibling;)
						if(n === t) return -1;
				return e ? 1 : -1
			}

			function s(e) {
				return r(function(t) {
					return t = +t, r(function(n, r) {
						for(var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}

			function l(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}

			function u() {}

			function d(e) {
				for(var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
				return r
			}

			function c(e, t, n) {
				var r = t.dir,
					i = n && "parentNode" === r,
					a = _++;
				return t.first ? function(t, n, a) {
					for(; t = t[r];)
						if(1 === t.nodeType || i) return e(t, n, a)
				} : function(t, n, o) {
					var s, l, u = [W, a];
					if(o) {
						for(; t = t[r];)
							if((1 === t.nodeType || i) && e(t, n, o)) return !0
					} else
						for(; t = t[r];)
							if(1 === t.nodeType || i) {
								if(l = t[H] || (t[H] = {}), (s = l[r]) && s[0] === W && s[1] === a) return u[2] = s[2];
								if(l[r] = u, u[2] = e(t, n, o)) return !0
							}
				}
			}

			function p(e) {
				return e.length > 1 ? function(t, n, r) {
					for(var i = e.length; i--;)
						if(!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function f(e, n, r) {
				for(var i = 0, a = n.length; a > i; i++) t(e, n[i], r);
				return r
			}

			function h(e, t, n, r, i) {
				for(var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (!n || n(a, r, i)) && (o.push(a), u && t.push(s));
				return o
			}

			function m(e, t, n, i, a, o) {
				return i && !i[H] && (i = m(i)), a && !a[H] && (a = m(a, o)), r(function(r, o, s, l) {
					var u, d, c, p = [],
						m = [],
						v = o.length,
						g = r || f(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !r && t ? g : h(g, p, e, s, l),
						w = n ? a || (r ? e : v || i) ? [] : o : y;
					if(n && n(y, w, s, l), i)
						for(u = h(w, m), i(u, [], s, l), d = u.length; d--;)(c = u[d]) && (w[m[d]] = !(y[m[d]] = c));
					if(r) {
						if(a || e) {
							if(a) {
								for(u = [], d = w.length; d--;)(c = w[d]) && u.push(y[d] = c);
								a(null, w = [], u, l)
							}
							for(d = w.length; d--;)(c = w[d]) && (u = a ? Q(r, c) : p[d]) > -1 && (r[u] = !(o[u] = c))
						}
					} else w = h(w === o ? w.splice(v, w.length) : w), a ? a(null, o, w, l) : K.apply(o, w)
				})
			}

			function v(e) {
				for(var t, n, r, i = e.length, a = x.relative[e[0].type], o = a || x.relative[" "], s = a ? 1 : 0, l = c(function(e) {
						return e === t
					}, o, !0), u = c(function(e) {
						return Q(t, e) > -1
					}, o, !0), f = [function(e, n, r) {
						var i = !a && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
						return t = null, i
					}]; i > s; s++)
					if(n = x.relative[e[s].type]) f = [c(p(f), n)];
					else {
						if(n = x.filter[e[s].type].apply(null, e[s].matches), n[H]) {
							for(r = ++s; i > r && !x.relative[e[r].type]; r++);
							return m(s > 1 && p(f), s > 1 && d(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(oe, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e))
						}
						f.push(n)
					}
				return p(f)
			}

			function g(e, n) {
				var i = n.length > 0,
					a = e.length > 0,
					o = function(r, o, s, l, u) {
						var d, c, p, f = 0,
							m = "0",
							v = r && [],
							g = [],
							y = k,
							w = r || a && x.find.TAG("*", u),
							b = W += null == y ? 1 : Math.random() || .1,
							T = w.length;
						for(u && (k = o !== D && o); m !== T && null != (d = w[m]); m++) {
							if(a && d) {
								for(c = 0; p = e[c++];)
									if(p(d, o, s)) {
										l.push(d);
										break
									}
								u && (W = b)
							}
							i && ((d = !p && d) && f--, r && v.push(d))
						}
						if(f += m, i && m !== f) {
							for(c = 0; p = n[c++];) p(v, g, o, s);
							if(r) {
								if(f > 0)
									for(; m--;) v[m] || g[m] || (g[m] = Y.call(l));
								g = h(g)
							}
							K.apply(l, g), u && !r && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
						}
						return u && (W = b, k = y), v
					};
				return i ? r(o) : o
			}
			var y, w, x, b, T, C, S, E, k, N, M, L, D, A, P, z, I, j, O, H = "sizzle" + 1 * new Date,
				B = e.document,
				W = 0,
				_ = 0,
				q = n(),
				F = n(),
				R = n(),
				G = function(e, t) {
					return e === t && (M = !0), 0
				},
				X = 1 << 31,
				$ = {}.hasOwnProperty,
				V = [],
				Y = V.pop,
				U = V.push,
				K = V.push,
				J = V.slice,
				Q = function(e, t) {
					for(var n = 0, r = e.length; r > n; n++)
						if(e[n] === t) return n;
					return -1
				},
				Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ee = "[\\x20\\t\\r\\n\\f]",
				te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ne = te.replace("w", "w#"),
				re = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
				ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
				ae = new RegExp(ee + "+", "g"),
				oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
				se = new RegExp("^" + ee + "*," + ee + "*"),
				le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
				ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
				de = new RegExp(ie),
				ce = new RegExp("^" + ne + "$"),
				pe = {
					ID: new RegExp("^#(" + te + ")"),
					CLASS: new RegExp("^\\.(" + te + ")"),
					TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + re),
					PSEUDO: new RegExp("^" + ie),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + Z + ")$", "i"),
					needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
				},
				fe = /^(?:input|select|textarea|button)$/i,
				he = /^h\d$/i,
				me = /^[^{]+\{\s*\[native \w/,
				ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ge = /[+~]/,
				ye = /'|\\/g,
				we = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
				xe = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				be = function() {
					L()
				};
			try {
				K.apply(V = J.call(B.childNodes), B.childNodes), V[B.childNodes.length].nodeType
			} catch(e) {
				K = {
					apply: V.length ? function(e, t) {
						U.apply(e, J.call(t))
					} : function(e, t) {
						for(var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}
			w = t.support = {}, T = t.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, L = t.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : B;
				return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, A = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), P = !T(r), w.attributes = i(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), w.getElementsByTagName = i(function(e) {
					return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
				}), w.getElementsByClassName = me.test(r.getElementsByClassName), w.getById = i(function(e) {
					return A.appendChild(e).id = H, !r.getElementsByName || !r.getElementsByName(H).length
				}), w.getById ? (x.find.ID = function(e, t) {
					if(void 0 !== t.getElementById && P) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, x.filter.ID = function(e) {
					var t = e.replace(we, xe);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete x.find.ID, x.filter.ID = function(e) {
					var t = e.replace(we, xe);
					return function(e) {
						var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), x.find.TAG = w.getElementsByTagName ? function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						i = 0,
						a = t.getElementsByTagName(e);
					if("*" === e) {
						for(; n = a[i++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return a
				}, x.find.CLASS = w.getElementsByClassName && function(e, t) {
					return P ? t.getElementsByClassName(e) : void 0
				}, I = [], z = [], (w.qsa = me.test(r.querySelectorAll)) && (i(function(e) {
					A.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || z.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + H + "-]").length || z.push("~="), e.querySelectorAll(":checked").length || z.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || z.push(".#.+[+~]")
				}), i(function(e) {
					var t = r.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && z.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
				})), (w.matchesSelector = me.test(j = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function(e) {
					w.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), I.push("!=", ie)
				}), z = z.length && new RegExp(z.join("|")), I = I.length && new RegExp(I.join("|")), t = me.test(A.compareDocumentPosition), O = t || me.test(A.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if(t)
						for(; t = t.parentNode;)
							if(t === e) return !0;
					return !1
				}, G = t ? function(e, t) {
					if(e === t) return M = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === B && O(B, e) ? -1 : t === r || t.ownerDocument === B && O(B, t) ? 1 : N ? Q(N, e) - Q(N, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if(e === t) return M = !0, 0;
					var n, i = 0,
						a = e.parentNode,
						s = t.parentNode,
						l = [e],
						u = [t];
					if(!a || !s) return e === r ? -1 : t === r ? 1 : a ? -1 : s ? 1 : N ? Q(N, e) - Q(N, t) : 0;
					if(a === s) return o(e, t);
					for(n = e; n = n.parentNode;) l.unshift(n);
					for(n = t; n = n.parentNode;) u.unshift(n);
					for(; l[i] === u[i];) i++;
					return i ? o(l[i], u[i]) : l[i] === B ? -1 : u[i] === B ? 1 : 0
				}, r) : D
			}, t.matches = function(e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function(e, n) {
				if((e.ownerDocument || e) !== D && L(e), n = n.replace(ue, "='$1']"), !(!w.matchesSelector || !P || I && I.test(n) || z && z.test(n))) try {
					var r = j.call(e, n);
					if(r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch(e) {}
				return t(n, D, null, [e]).length > 0
			}, t.contains = function(e, t) {
				return(e.ownerDocument || e) !== D && L(e), O(e, t)
			}, t.attr = function(e, t) {
				(e.ownerDocument || e) !== D && L(e);
				var n = x.attrHandle[t.toLowerCase()],
					r = n && $.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
				return void 0 !== r ? r : w.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, t.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if(M = !w.detectDuplicates, N = !w.sortStable && e.slice(0), e.sort(G), M) {
					for(; t = e[i++];) t === e[i] && (r = n.push(i));
					for(; r--;) e.splice(n[r], 1)
				}
				return N = null, e
			}, b = t.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if(i) {
					if(1 === i || 9 === i || 11 === i) {
						if("string" == typeof e.textContent) return e.textContent;
						for(e = e.firstChild; e; e = e.nextSibling) n += b(e)
					} else if(3 === i || 4 === i) return e.nodeValue
				} else
					for(; t = e[r++];) n += b(t);
				return n
			}, x = t.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: pe,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(we, xe).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = q[e + " "];
						return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && q(e, function(e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, n, r) {
						return function(i) {
							var a = t.attr(i, e);
							return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (a === r || a.slice(0, r.length + 1) === r + "-"))
						}
					},
					CHILD: function(e, t, n, r, i) {
						var a = "nth" !== e.slice(0, 3),
							o = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var u, d, c, p, f, h, m = a !== o ? "nextSibling" : "previousSibling",
								v = t.parentNode,
								g = s && t.nodeName.toLowerCase(),
								y = !l && !s;
							if(v) {
								if(a) {
									for(; m;) {
										for(c = t; c = c[m];)
											if(s ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
										h = m = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if(h = [o ? v.firstChild : v.lastChild], o && y) {
									for(d = v[H] || (v[H] = {}), u = d[e] || [], f = u[0] === W && u[1], p = u[0] === W && u[2], c = f && v.childNodes[f]; c = ++f && c && c[m] || (p = f = 0) || h.pop();)
										if(1 === c.nodeType && ++p && c === t) {
											d[e] = [W, f, p];
											break
										}
								} else if(y && (u = (t[H] || (t[H] = {}))[e]) && u[0] === W) p = u[1];
								else
									for(;
										(c = ++f && c && c[m] || (p = f = 0) || h.pop()) && ((s ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++p || (y && ((c[H] || (c[H] = {}))[e] = [W, p]), c !== t)););
								return(p -= i) === r || p % r == 0 && p / r >= 0
							}
						}
					},
					PSEUDO: function(e, n) {
						var i, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return a[H] ? a(n) : a.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
							for(var r, i = a(e, n), o = i.length; o--;) r = Q(e, i[o]), e[r] = !(t[r] = i[o])
						}) : function(e) {
							return a(e, 0, i)
						}) : a
					}
				},
				pseudos: {
					not: r(function(e) {
						var t = [],
							n = [],
							i = S(e.replace(oe, "$1"));
						return i[H] ? r(function(e, t, n, r) {
							for(var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
						}) : function(e, r, a) {
							return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
						}
					}),
					has: r(function(e) {
						return function(n) {
							return t(e, n).length > 0
						}
					}),
					contains: r(function(e) {
						return e = e.replace(we, xe),
							function(t) {
								return(t.textContent || t.innerText || b(t)).indexOf(e) > -1
							}
					}),
					lang: r(function(e) {
						return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
							function(t) {
								var n;
								do {
									if(n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return(n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === A
					},
					focus: function(e) {
						return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return !1 === e.disabled
					},
					disabled: function(e) {
						return !0 === e.disabled
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for(e = e.firstChild; e; e = e.nextSibling)
							if(e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !x.pseudos.empty(e)
					},
					header: function(e) {
						return he.test(e.nodeName)
					},
					input: function(e) {
						return fe.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: s(function() {
						return [0]
					}),
					last: s(function(e, t) {
						return [t - 1]
					}),
					eq: s(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: s(function(e, t) {
						for(var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: s(function(e, t) {
						for(var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: s(function(e, t, n) {
						for(var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
						return e
					}),
					gt: s(function(e, t, n) {
						for(var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}, x.pseudos.nth = x.pseudos.eq;
			for(y in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) x.pseudos[y] = function(e) {
				return function(t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}(y);
			for(y in {
					submit: !0,
					reset: !0
				}) x.pseudos[y] = function(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return("input" === n || "button" === n) && t.type === e
				}
			}(y);
			return u.prototype = x.filters = x.pseudos, x.setFilters = new u, C = t.tokenize = function(e, n) {
				var r, i, a, o, s, l, u, d = F[e + " "];
				if(d) return n ? 0 : d.slice(0);
				for(s = e, l = [], u = x.preFilter; s;) {
					(!r || (i = se.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(a = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), a.push({
						value: r,
						type: i[0].replace(oe, " ")
					}), s = s.slice(r.length));
					for(o in x.filter) !(i = pe[o].exec(s)) || u[o] && !(i = u[o](i)) || (r = i.shift(), a.push({
						value: r,
						type: o,
						matches: i
					}), s = s.slice(r.length));
					if(!r) break
				}
				return n ? s.length : s ? t.error(e) : F(e, l).slice(0)
			}, S = t.compile = function(e, t) {
				var n, r = [],
					i = [],
					a = R[e + " "];
				if(!a) {
					for(t || (t = C(e)), n = t.length; n--;) a = v(t[n]), a[H] ? r.push(a) : i.push(a);
					a = R(e, g(i, r)), a.selector = e
				}
				return a
			}, E = t.select = function(e, t, n, r) {
				var i, a, o, s, u, c = "function" == typeof e && e,
					p = !r && C(e = c.selector || e);
				if(n = n || [], 1 === p.length) {
					if(a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === t.nodeType && P && x.relative[a[1].type]) {
						if(!(t = (x.find.ID(o.matches[0].replace(we, xe), t) || [])[0])) return n;
						c && (t = t.parentNode), e = e.slice(a.shift().value.length)
					}
					for(i = pe.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !x.relative[s = o.type]);)
						if((u = x.find[s]) && (r = u(o.matches[0].replace(we, xe), ge.test(a[0].type) && l(t.parentNode) || t))) {
							if(a.splice(i, 1), !(e = r.length && d(a))) return K.apply(n, r), n;
							break
						}
				}
				return(c || S(e, p))(r, t, !P, n, ge.test(e) && l(t.parentNode) || t), n
			}, w.sortStable = H.split("").sort(G).join("") === H, w.detectDuplicates = !!M, L(), w.sortDetached = i(function(e) {
				return 1 & e.compareDocumentPosition(D.createElement("div"))
			}), i(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || a("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), w.attributes && i(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || a("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), i(function(e) {
				return null == e.getAttribute("disabled")
			}) || a(Z, function(e, t, n) {
				var r;
				return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), t
		}(a);
		ue.find = he, ue.expr = he.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = he.uniqueSort, ue.text = he.getText, ue.isXMLDoc = he.isXML, ue.contains = he.contains;
		var me = ue.expr.match.needsContext,
			ve = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			ge = /^.[^:#\[\.,]*$/;
		ue.filter = function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ue.find.matchesSelector(r, e) ? [r] : [] : ue.find.matches(e, ue.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, ue.fn.extend({
			find: function(e) {
				var t, n = [],
					r = this,
					i = r.length;
				if("string" != typeof e) return this.pushStack(ue(e).filter(function() {
					for(t = 0; i > t; t++)
						if(ue.contains(r[t], this)) return !0
				}));
				for(t = 0; i > t; t++) ue.find(e, r[t], n);
				return n = this.pushStack(i > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
			},
			filter: function(e) {
				return this.pushStack(l(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(l(this, e || [], !0))
			},
			is: function(e) {
				return !!l(this, "string" == typeof e && me.test(e) ? ue(e) : e || [], !1).length
			}
		});
		var ye, we = a.document,
			xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
		(ue.fn.init = function(e, t) {
			var n, r;
			if(!e) return this;
			if("string" == typeof e) {
				if(!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : xe.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ye).find(e) : this.constructor(t).find(e);
				if(n[1]) {
					if(t = t instanceof ue ? t[0] : t, ue.merge(this, ue.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : we, !0)), ve.test(n[1]) && ue.isPlainObject(t))
						for(n in t) ue.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				if((r = we.getElementById(n[2])) && r.parentNode) {
					if(r.id !== n[2]) return ye.find(e);
					this.length = 1, this[0] = r
				}
				return this.context = we, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? void 0 !== ye.ready ? ye.ready(e) : e(ue) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this))
		}).prototype = ue.fn, ye = ue(we);
		var be = /^(?:parents|prev(?:Until|All))/,
			Te = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		ue.extend({
			dir: function(e, t, n) {
				for(var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ue(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
				return r
			},
			sibling: function(e, t) {
				for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		}), ue.fn.extend({
			has: function(e) {
				var t, n = ue(e, this),
					r = n.length;
				return this.filter(function() {
					for(t = 0; r > t; t++)
						if(ue.contains(this, n[t])) return !0
				})
			},
			closest: function(e, t) {
				for(var n, r = 0, i = this.length, a = [], o = me.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; i > r; r++)
					for(n = this[r]; n && n !== t; n = n.parentNode)
						if(n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
							a.push(n);
							break
						}
				return this.pushStack(a.length > 1 ? ue.unique(a) : a)
			},
			index: function(e) {
				return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(ue.unique(ue.merge(this.get(), ue(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), ue.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return ue.dir(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return ue.dir(e, "parentNode", n)
			},
			next: function(e) {
				return u(e, "nextSibling")
			},
			prev: function(e) {
				return u(e, "previousSibling")
			},
			nextAll: function(e) {
				return ue.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return ue.dir(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return ue.dir(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return ue.dir(e, "previousSibling", n)
			},
			siblings: function(e) {
				return ue.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return ue.sibling(e.firstChild)
			},
			contents: function(e) {
				return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
			}
		}, function(e, t) {
			ue.fn[e] = function(n, r) {
				var i = ue.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ue.filter(r, i)), this.length > 1 && (Te[e] || (i = ue.unique(i)), be.test(e) && (i = i.reverse())), this.pushStack(i)
			}
		});
		var Ce = /\S+/g,
			Se = {};
		ue.Callbacks = function(e) {
			e = "string" == typeof e ? Se[e] || d(e) : ue.extend({}, e);
			var t, n, r, i, a, o, s = [],
				l = !e.once && [],
				u = function(d) {
					for(n = e.memory && d, r = !0, a = o || 0, o = 0, i = s.length, t = !0; s && i > a; a++)
						if(!1 === s[a].apply(d[0], d[1]) && e.stopOnFalse) {
							n = !1;
							break
						}
					t = !1, s && (l ? l.length && u(l.shift()) : n ? s = [] : c.disable())
				},
				c = {
					add: function() {
						if(s) {
							var r = s.length;
							! function t(n) {
								ue.each(n, function(n, r) {
									var i = ue.type(r);
									"function" === i ? e.unique && c.has(r) || s.push(r) : r && r.length && "string" !== i && t(r)
								})
							}(arguments), t ? i = s.length : n && (o = r, u(n))
						}
						return this
					},
					remove: function() {
						return s && ue.each(arguments, function(e, n) {
							for(var r;
								(r = ue.inArray(n, s, r)) > -1;) s.splice(r, 1), t && (i >= r && i--, a >= r && a--)
						}), this
					},
					has: function(e) {
						return e ? ue.inArray(e, s) > -1 : !(!s || !s.length)
					},
					empty: function() {
						return s = [], i = 0, this
					},
					disable: function() {
						return s = l = n = void 0, this
					},
					disabled: function() {
						return !s
					},
					lock: function() {
						return l = void 0, n || c.disable(), this
					},
					locked: function() {
						return !l
					},
					fireWith: function(e, n) {
						return !s || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : u(n)), this
					},
					fire: function() {
						return c.fireWith(this, arguments), this
					},
					fired: function() {
						return !!r
					}
				};
			return c
		}, ue.extend({
			Deferred: function(e) {
				var t = [
						["resolve", "done", ue.Callbacks("once memory"), "resolved"],
						["reject", "fail", ue.Callbacks("once memory"), "rejected"],
						["notify", "progress", ue.Callbacks("memory")]
					],
					n = "pending",
					r = {
						state: function() {
							return n
						},
						always: function() {
							return i.done(arguments).fail(arguments), this
						},
						then: function() {
							var e = arguments;
							return ue.Deferred(function(n) {
								ue.each(t, function(t, a) {
									var o = ue.isFunction(e[t]) && e[t];
									i[a[1]](function() {
										var e = o && o.apply(this, arguments);
										e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? ue.extend(e, r) : r
						}
					},
					i = {};
				return r.pipe = r.then, ue.each(t, function(e, a) {
					var o = a[2],
						s = a[3];
					r[a[1]] = o.add, s && o.add(function() {
						n = s
					}, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function() {
						return i[a[0] + "With"](this === i ? r : this, arguments), this
					}, i[a[0] + "With"] = o.fireWith
				}), r.promise(i), e && e.call(i, i), i
			},
			when: function(e) {
				var t, n, r, i = 0,
					a = ee.call(arguments),
					o = a.length,
					s = 1 !== o || e && ue.isFunction(e.promise) ? o : 0,
					l = 1 === s ? e : ue.Deferred(),
					u = function(e, n, r) {
						return function(i) {
							n[e] = this, r[e] = arguments.length > 1 ? ee.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
						}
					};
				if(o > 1)
					for(t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) a[i] && ue.isFunction(a[i].promise) ? a[i].promise().done(u(i, r, a)).fail(l.reject).progress(u(i, n, t)) : --s;
				return s || l.resolveWith(r, a), l.promise()
			}
		});
		var Ee;
		ue.fn.ready = function(e) {
			return ue.ready.promise().done(e), this
		}, ue.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? ue.readyWait++ : ue.ready(!0)
			},
			ready: function(e) {
				if(!0 === e ? !--ue.readyWait : !ue.isReady) {
					if(!we.body) return setTimeout(ue.ready);
					ue.isReady = !0, !0 !== e && --ue.readyWait > 0 || (Ee.resolveWith(we, [ue]), ue.fn.triggerHandler && (ue(we).triggerHandler("ready"), ue(we).off("ready")))
				}
			}
		}), ue.ready.promise = function(e) {
			if(!Ee)
				if(Ee = ue.Deferred(), "complete" === we.readyState) setTimeout(ue.ready);
				else if(we.addEventListener) we.addEventListener("DOMContentLoaded", p, !1), a.addEventListener("load", p, !1);
			else {
				we.attachEvent("onreadystatechange", p), a.attachEvent("onload", p);
				var t = !1;
				try {
					t = null == a.frameElement && we.documentElement
				} catch(e) {}
				t && t.doScroll && function e() {
					if(!ue.isReady) {
						try {
							t.doScroll("left")
						} catch(t) {
							return setTimeout(e, 50)
						}
						c(), ue.ready()
					}
				}()
			}
			return Ee.promise(e)
		};
		var ke, Ne = "undefined";
		for(ke in ue(se)) break;
		se.ownLast = "0" !== ke, se.inlineBlockNeedsLayout = !1, ue(function() {
				var e, t, n, r;
				(n = we.getElementsByTagName("body")[0]) && n.style && (t = we.createElement("div"), r = we.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ne && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", se.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
			}),
			function() {
				var e = we.createElement("div");
				if(null == se.deleteExpando) {
					se.deleteExpando = !0;
					try {
						delete e.test
					} catch(e) {
						se.deleteExpando = !1
					}
				}
				e = null
			}(), ue.acceptData = function(e) {
				var t = ue.noData[(e.nodeName + " ").toLowerCase()],
					n = +e.nodeType || 1;
				return(1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
			};
		var Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Le = /([A-Z])/g;
		ue.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(e) {
				return !!(e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando]) && !h(e)
			},
			data: function(e, t, n) {
				return m(e, t, n)
			},
			removeData: function(e, t) {
				return v(e, t)
			},
			_data: function(e, t, n) {
				return m(e, t, n, !0)
			},
			_removeData: function(e, t) {
				return v(e, t, !0)
			}
		}), ue.fn.extend({
			data: function(e, t) {
				var n, r, i, a = this[0],
					o = a && a.attributes;
				if(void 0 === e) {
					if(this.length && (i = ue.data(a), 1 === a.nodeType && !ue._data(a, "parsedAttrs"))) {
						for(n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)), f(a, r, i[r])));
						ue._data(a, "parsedAttrs", !0)
					}
					return i
				}
				return "object" == typeof e ? this.each(function() {
					ue.data(this, e)
				}) : arguments.length > 1 ? this.each(function() {
					ue.data(this, e, t)
				}) : a ? f(a, e, ue.data(a, e)) : void 0
			},
			removeData: function(e) {
				return this.each(function() {
					ue.removeData(this, e)
				})
			}
		}), ue.extend({
			queue: function(e, t, n) {
				var r;
				return e ? (t = (t || "fx") + "queue", r = ue._data(e, t), n && (!r || ue.isArray(n) ? r = ue._data(e, t, ue.makeArray(n)) : r.push(n)), r || []) : void 0
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = ue.queue(e, t),
					r = n.length,
					i = n.shift(),
					a = ue._queueHooks(e, t),
					o = function() {
						ue.dequeue(e, t)
					};
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return ue._data(e, n) || ue._data(e, n, {
					empty: ue.Callbacks("once memory").add(function() {
						ue._removeData(e, t + "queue"), ue._removeData(e, n)
					})
				})
			}
		}), ue.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ue.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = ue.queue(this, e, t);
					ue._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ue.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					ue.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var n, r = 1,
					i = ue.Deferred(),
					a = this,
					o = this.length,
					s = function() {
						--r || i.resolveWith(a, [a])
					};
				for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = ue._data(a[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t)
			}
		});
		var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ae = ["Top", "Right", "Bottom", "Left"],
			Pe = function(e, t) {
				return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
			},
			ze = ue.access = function(e, t, n, r, i, a, o) {
				var s = 0,
					l = e.length,
					u = null == n;
				if("object" === ue.type(n)) {
					i = !0;
					for(s in n) ue.access(e, t, s, n[s], !0, a, o)
				} else if(void 0 !== r && (i = !0, ue.isFunction(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
						return u.call(ue(e), n)
					})), t))
					for(; l > s; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
				return i ? e : u ? t.call(e) : l ? t(e[0], n) : a
			},
			Ie = /^(?:checkbox|radio)$/i;
		! function() {
			var e = we.createElement("input"),
				t = we.createElement("div"),
				n = we.createDocumentFragment();
			if(t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", se.leadingWhitespace = 3 === t.firstChild.nodeType, se.tbody = !t.getElementsByTagName("tbody").length, se.htmlSerialize = !!t.getElementsByTagName("link").length, se.html5Clone = "<:nav></:nav>" !== we.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), se.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, se.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
					se.noCloneEvent = !1
				}), t.cloneNode(!0).click()), null == se.deleteExpando) {
				se.deleteExpando = !0;
				try {
					delete t.test
				} catch(e) {
					se.deleteExpando = !1
				}
			}
		}(),
		function() {
			var e, t, n = we.createElement("div");
			for(e in {
					submit: !0,
					change: !0,
					focusin: !0
				}) t = "on" + e, (se[e + "Bubbles"] = t in a) || (n.setAttribute(t, "t"), se[e + "Bubbles"] = !1 === n.attributes[t].expando);
			n = null
		}();
		var je = /^(?:input|select|textarea)$/i,
			Oe = /^key/,
			He = /^(?:mouse|pointer|contextmenu)|click/,
			Be = /^(?:focusinfocus|focusoutblur)$/,
			We = /^([^.]*)(?:\.(.+)|)$/;
		ue.event = {
			global: {},
			add: function(e, t, n, r, i) {
				var a, o, s, l, u, d, c, p, f, h, m, v = ue._data(e);
				if(v) {
					for(n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = ue.guid++), (o = v.events) || (o = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
							return typeof ue === Ne || e && ue.event.triggered === e.type ? void 0 : ue.event.dispatch.apply(d.elem, arguments)
						}, d.elem = e), t = (t || "").match(Ce) || [""], s = t.length; s--;) a = We.exec(t[s]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (u = ue.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, u = ue.event.special[f] || {}, c = ue.extend({
						type: f,
						origType: m,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && ue.expr.match.needsContext.test(i),
						namespace: h.join(".")
					}, l), (p = o[f]) || (p = o[f] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, h, d) || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ue.event.global[f] = !0);
					e = null
				}
			},
			remove: function(e, t, n, r, i) {
				var a, o, s, l, u, d, c, p, f, h, m, v = ue.hasData(e) && ue._data(e);
				if(v && (d = v.events)) {
					for(t = (t || "").match(Ce) || [""], u = t.length; u--;)
						if(s = We.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
							for(c = ue.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, p = d[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--;) o = p[a], !i && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (p.splice(a, 1), o.selector && p.delegateCount--, c.remove && c.remove.call(e, o));
							l && !p.length && (c.teardown && !1 !== c.teardown.call(e, h, v.handle) || ue.removeEvent(e, f, v.handle), delete d[f])
						} else
							for(f in d) ue.event.remove(e, f + t[u], n, r, !0);
					ue.isEmptyObject(d) && (delete v.handle, ue._removeData(e, "events"))
				}
			},
			trigger: function(e, t, n, r) {
				var i, o, s, l, u, d, c, p = [n || we],
					f = oe.call(e, "type") ? e.type : e,
					h = oe.call(e, "namespace") ? e.namespace.split(".") : [];
				if(s = d = n = n || we, 3 !== n.nodeType && 8 !== n.nodeType && !Be.test(f + ue.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), o = f.indexOf(":") < 0 && "on" + f, e = e[ue.expando] ? e : new ue.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ue.makeArray(t, [e]), u = ue.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
					if(!r && !u.noBubble && !ue.isWindow(n)) {
						for(l = u.delegateType || f, Be.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), d = s;
						d === (n.ownerDocument || we) && p.push(d.defaultView || d.parentWindow || a)
					}
					for(c = 0;
						(s = p[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? l : u.bindType || f, i = (ue._data(s, "events") || {})[e.type] && ue._data(s, "handle"), i && i.apply(s, t), (i = o && s[o]) && i.apply && ue.acceptData(s) && (e.result = i.apply(s, t), !1 === e.result && e.preventDefault());
					if(e.type = f, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(p.pop(), t)) && ue.acceptData(n) && o && n[f] && !ue.isWindow(n)) {
						d = n[o], d && (n[o] = null), ue.event.triggered = f;
						try {
							n[f]()
						} catch(e) {}
						ue.event.triggered = void 0, d && (n[o] = d)
					}
					return e.result
				}
			},
			dispatch: function(e) {
				e = ue.event.fix(e);
				var t, n, r, i, a, o = [],
					s = ee.call(arguments),
					l = (ue._data(this, "events") || {})[e.type] || [],
					u = ue.event.special[e.type] || {};
				if(s[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
					for(o = ue.event.handlers.call(this, e, l), t = 0;
						(i = o[t++]) && !e.isPropagationStopped();)
						for(e.currentTarget = i.elem, a = 0;
							(r = i.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (n = ((ue.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, e), e.result
				}
			},
			handlers: function(e, t) {
				var n, r, i, a, o = [],
					s = t.delegateCount,
					l = e.target;
				if(s && l.nodeType && (!e.button || "click" !== e.type))
					for(; l != this; l = l.parentNode || this)
						if(1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
							for(i = [], a = 0; s > a; a++) r = t[a], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ue(n, this).index(l) >= 0 : ue.find(n, this, null, [l]).length), i[n] && i.push(r);
							i.length && o.push({
								elem: l,
								handlers: i
							})
						}
				return s < t.length && o.push({
					elem: this,
					handlers: t.slice(s)
				}), o
			},
			fix: function(e) {
				if(e[ue.expando]) return e;
				var t, n, r, i = e.type,
					a = e,
					o = this.fixHooks[i];
				for(o || (this.fixHooks[i] = o = He.test(i) ? this.mouseHooks : Oe.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new ue.Event(a), t = r.length; t--;) n = r[t], e[n] = a[n];
				return e.target || (e.target = a.srcElement || we), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(e, t) {
					var n, r, i, a = t.button,
						o = t.fromElement;
					return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || we, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if(this !== w() && this.focus) try {
							return this.focus(), !1
						} catch(e) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === w() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
					},
					_default: function(e) {
						return ue.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function(e, t, n, r) {
				var i = ue.extend(new ue.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				r ? ue.event.trigger(i, null, t) : ue.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
			}
		}, ue.removeEvent = we.removeEventListener ? function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		} : function(e, t, n) {
			var r = "on" + t;
			e.detachEvent && (typeof e[r] === Ne && (e[r] = null), e.detachEvent(r, n))
		}, ue.Event = function(e, t) {
			return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? g : y) : this.type = e, t && ue.extend(this, t), this.timeStamp = e && e.timeStamp || ue.now(), void(this[ue.expando] = !0)) : new ue.Event(e, t)
		}, ue.Event.prototype = {
			isDefaultPrevented: y,
			isPropagationStopped: y,
			isImmediatePropagationStopped: y,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = g, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = g, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = g, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, ue.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			ue.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, r = this,
						i = e.relatedTarget,
						a = e.handleObj;
					return(!i || i !== r && !ue.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), se.submitBubbles || (ue.event.special.submit = {
			setup: function() {
				return !ue.nodeName(this, "form") && void ue.event.add(this, "click._submit keypress._submit", function(e) {
					var t = e.target,
						n = ue.nodeName(t, "input") || ue.nodeName(t, "button") ? t.form : void 0;
					n && !ue._data(n, "submitBubbles") && (ue.event.add(n, "submit._submit", function(e) {
						e._submit_bubble = !0
					}), ue._data(n, "submitBubbles", !0))
				})
			},
			postDispatch: function(e) {
				e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
			},
			teardown: function() {
				return !ue.nodeName(this, "form") && void ue.event.remove(this, "._submit")
			}
		}), se.changeBubbles || (ue.event.special.change = {
			setup: function() {
				return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function(e) {
					"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
				}), ue.event.add(this, "click._change", function(e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0)
				})), !1) : void ue.event.add(this, "beforeactivate._change", function(e) {
					var t = e.target;
					je.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
						!this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
					}), ue._data(t, "changeBubbles", !0))
				})
			},
			handle: function(e) {
				var t = e.target;
				return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
			},
			teardown: function() {
				return ue.event.remove(this, "._change"), !je.test(this.nodeName)
			}
		}), se.focusinBubbles || ue.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = function(e) {
				ue.event.simulate(t, e.target, ue.event.fix(e), !0)
			};
			ue.event.special[t] = {
				setup: function() {
					var r = this.ownerDocument || this,
						i = ue._data(r, t);
					i || r.addEventListener(e, n, !0), ue._data(r, t, (i || 0) + 1)
				},
				teardown: function() {
					var r = this.ownerDocument || this,
						i = ue._data(r, t) - 1;
					i ? ue._data(r, t, i) : (r.removeEventListener(e, n, !0), ue._removeData(r, t))
				}
			}
		}), ue.fn.extend({
			on: function(e, t, n, r, i) {
				var a, o;
				if("object" == typeof e) {
					"string" != typeof t && (n = n || t, t = void 0);
					for(a in e) this.on(a, t, n, e[a], i);
					return this
				}
				if(null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = y;
				else if(!r) return this;
				return 1 === i && (o = r, r = function(e) {
					return ue().off(e), o.apply(this, arguments)
				}, r.guid = o.guid || (o.guid = ue.guid++)), this.each(function() {
					ue.event.add(this, e, r, n, t)
				})
			},
			one: function(e, t, n, r) {
				return this.on(e, t, n, r, 1)
			},
			off: function(e, t, n) {
				var r, i;
				if(e && e.preventDefault && e.handleObj) return r = e.handleObj, ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if("object" == typeof e) {
					for(i in e) this.off(i, t, e[i]);
					return this
				}
				return(!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = y), this.each(function() {
					ue.event.remove(this, e, n, t)
				})
			},
			trigger: function(e, t) {
				return this.each(function() {
					ue.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				return n ? ue.event.trigger(e, t, n, !0) : void 0
			}
		});
		var _e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			qe = / jQuery\d+="(?:null|\d+)"/g,
			Fe = new RegExp("<(?:" + _e + ")[\\s/>]", "i"),
			Re = /^\s+/,
			Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Xe = /<([\w:]+)/,
			$e = /<tbody/i,
			Ve = /<|&#?\w+;/,
			Ye = /<(?:script|style|link)/i,
			Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ke = /^$|\/(?:java|ecma)script/i,
			Je = /^true\/(.*)/,
			Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Ze = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: se.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			et = x(we),
			tt = et.appendChild(we.createElement("div"));
		Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, ue.extend({
			clone: function(e, t, n) {
				var r, i, a, o, s, l = ue.contains(e.ownerDocument, e);
				if(se.html5Clone || ue.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(a = tt.firstChild)), !(se.noCloneEvent && se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
					for(r = b(a), s = b(e), o = 0; null != (i = s[o]); ++o) r[o] && M(i, r[o]);
				if(t)
					if(n)
						for(s = s || b(e), r = r || b(a), o = 0; null != (i = s[o]); o++) N(i, r[o]);
					else N(e, a);
				return r = b(a, "script"), r.length > 0 && k(r, !l && b(e, "script")), r = s = i = null, a
			},
			buildFragment: function(e, t, n, r) {
				for(var i, a, o, s, l, u, d, c = e.length, p = x(t), f = [], h = 0; c > h; h++)
					if((a = e[h]) || 0 === a)
						if("object" === ue.type(a)) ue.merge(f, a.nodeType ? [a] : a);
						else if(Ve.test(a)) {
					for(s = s || p.appendChild(t.createElement("div")), l = (Xe.exec(a) || ["", ""])[1].toLowerCase(), d = Ze[l] || Ze._default, s.innerHTML = d[1] + a.replace(Ge, "<$1></$2>") + d[2], i = d[0]; i--;) s = s.lastChild;
					if(!se.leadingWhitespace && Re.test(a) && f.push(t.createTextNode(Re.exec(a)[0])), !se.tbody)
						for(a = "table" !== l || $e.test(a) ? "<table>" !== d[1] || $e.test(a) ? 0 : s : s.firstChild, i = a && a.childNodes.length; i--;) ue.nodeName(u = a.childNodes[i], "tbody") && !u.childNodes.length && a.removeChild(u);
					for(ue.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
					s = p.lastChild
				} else f.push(t.createTextNode(a));
				for(s && p.removeChild(s), se.appendChecked || ue.grep(b(f, "input"), T), h = 0; a = f[h++];)
					if((!r || -1 === ue.inArray(a, r)) && (o = ue.contains(a.ownerDocument, a), s = b(p.appendChild(a), "script"), o && k(s), n))
						for(i = 0; a = s[i++];) Ke.test(a.type || "") && n.push(a);
				return s = null, p
			},
			cleanData: function(e, t) {
				for(var n, r, i, a, o = 0, s = ue.expando, l = ue.cache, u = se.deleteExpando, d = ue.event.special; null != (n = e[o]); o++)
					if((t || ue.acceptData(n)) && (i = n[s], a = i && l[i])) {
						if(a.events)
							for(r in a.events) d[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, a.handle);
						l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Ne ? n.removeAttribute(s) : n[s] = null, Z.push(i))
					}
			}
		}), ue.fn.extend({
			text: function(e) {
				return ze(this, function(e) {
					return void 0 === e ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || we).createTextNode(e))
				}, null, e, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(e) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						C(this, e).appendChild(e)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(e) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = C(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function(e, t) {
				for(var n, r = e ? ue.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ue.cleanData(b(n)), n.parentNode && (t && ue.contains(n.ownerDocument, n) && k(b(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function() {
				for(var e, t = 0; null != (e = this[t]); t++) {
					for(1 === e.nodeType && ue.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
					e.options && ue.nodeName(e, "select") && (e.options.length = 0)
				}
				return this
			},
			clone: function(e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function() {
					return ue.clone(this, e, t)
				})
			},
			html: function(e) {
				return ze(this, function(e) {
					var t = this[0] || {},
						n = 0,
						r = this.length;
					if(void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qe, "") : void 0;
					if(!("string" != typeof e || Ye.test(e) || !se.htmlSerialize && Fe.test(e) || !se.leadingWhitespace && Re.test(e) || Ze[(Xe.exec(e) || ["", ""])[1].toLowerCase()])) {
						e = e.replace(Ge, "<$1></$2>");
						try {
							for(; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ue.cleanData(b(t, !1)), t.innerHTML = e);
							t = 0
						} catch(e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = arguments[0];
				return this.domManip(arguments, function(t) {
					e = this.parentNode, ue.cleanData(b(this)), e && e.replaceChild(t, this)
				}), e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function(e) {
				return this.remove(e, !0)
			},
			domManip: function(e, t) {
				e = te.apply([], e);
				var n, r, i, a, o, s, l = 0,
					u = this.length,
					d = this,
					c = u - 1,
					p = e[0],
					f = ue.isFunction(p);
				if(f || u > 1 && "string" == typeof p && !se.checkClone && Ue.test(p)) return this.each(function(n) {
					var r = d.eq(n);
					f && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
				});
				if(u && (s = ue.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
					for(a = ue.map(b(s, "script"), S), i = a.length; u > l; l++) r = s, l !== c && (r = ue.clone(r, !0, !0), i && ue.merge(a, b(r, "script"))), t.call(this[l], r, l);
					if(i)
						for(o = a[a.length - 1].ownerDocument, ue.map(a, E), l = 0; i > l; l++) r = a[l], Ke.test(r.type || "") && !ue._data(r, "globalEval") && ue.contains(o, r) && (r.src ? ue._evalUrl && ue._evalUrl(r.src) : ue.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Qe, "")));
					s = n = null
				}
				return this
			}
		}), ue.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			ue.fn[e] = function(e) {
				for(var n, r = 0, i = [], a = ue(e), o = a.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0), ue(a[r])[t](n), ne.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var nt, rt = {};
		! function() {
			var e;
			se.shrinkWrapBlocks = function() {
				if(null != e) return e;
				e = !1;
				var t, n, r;
				return n = we.getElementsByTagName("body")[0], n && n.style ? (t = we.createElement("div"), r = we.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ne && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(we.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
			}
		}();
		var it, at, ot = /^margin/,
			st = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
			lt = /^(top|right|bottom|left)$/;
		a.getComputedStyle ? (it = function(e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : a.getComputedStyle(e, null)
		}, at = function(e, t, n) {
			var r, i, a, o, s = e.style;
			return n = n || it(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || ue.contains(e.ownerDocument, e) || (o = ue.style(e, t)), st.test(o) && ot.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 === o ? o : o + ""
		}) : we.documentElement.currentStyle && (it = function(e) {
			return e.currentStyle
		}, at = function(e, t, n) {
			var r, i, a, o, s = e.style;
			return n = n || it(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), st.test(o) && !lt.test(t) && (r = s.left, i = e.runtimeStyle, a = i && i.left, a && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = r, a && (i.left = a)), void 0 === o ? o : o + "" || "auto"
		}), ! function() {
			function e() {
				var e, t, n, r;
				(t = we.getElementsByTagName("body")[0]) && t.style && (e = we.createElement("div"), n = we.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = o = !1, l = !0, a.getComputedStyle && (i = "1%" !== (a.getComputedStyle(e, null) || {}).top, o = "4px" === (a.getComputedStyle(e, null) || {
					width: "4px"
				}).width, r = e.appendChild(we.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((a.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), t.removeChild(n))
			}
			var t, n, r, i, o, s, l;
			t = we.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], (n = r && r.style) && (n.cssText = "float:left;opacity:.5", se.opacity = "0.5" === n.opacity, se.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === t.style.backgroundClip, se.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, ue.extend(se, {
				reliableHiddenOffsets: function() {
					return null == s && e(), s
				},
				boxSizingReliable: function() {
					return null == o && e(), o
				},
				pixelPosition: function() {
					return null == i && e(), i
				},
				reliableMarginRight: function() {
					return null == l && e(), l
				}
			}))
		}(), ue.swap = function(e, t, n, r) {
			var i, a, o = {};
			for(a in t) o[a] = e.style[a], e.style[a] = t[a];
			i = n.apply(e, r || []);
			for(a in t) e.style[a] = o[a];
			return i
		};
		var ut = /alpha\([^)]*\)/i,
			dt = /opacity\s*=\s*([^)]*)/,
			ct = /^(none|table(?!-c[ea]).+)/,
			pt = new RegExp("^(" + De + ")(.*)$", "i"),
			ft = new RegExp("^([+-])=(" + De + ")", "i"),
			ht = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			mt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			vt = ["Webkit", "O", "Moz", "ms"];
		ue.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if(t) {
							var n = at(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				float: se.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(e, t, n, r) {
				if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i, a, o, s = ue.camelCase(t),
						l = e.style;
					if(t = ue.cssProps[s] || (ue.cssProps[s] = P(l, s)), o = ue.cssHooks[t] || ue.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : l[t];
					if(a = typeof n, "string" === a && (i = ft.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ue.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || ue.cssNumber[s] || (n += "px"), se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
						l[t] = n
					} catch(e) {}
				}
			},
			css: function(e, t, n, r) {
				var i, a, o, s = ue.camelCase(t);
				return t = ue.cssProps[s] || (ue.cssProps[s] = P(e.style, s)), o = ue.cssHooks[t] || ue.cssHooks[s], o && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = at(e, t, r)), "normal" === a && t in mt && (a = mt[t]), "" === n || n ? (i = parseFloat(a), !0 === n || ue.isNumeric(i) ? i || 0 : a) : a
			}
		}), ue.each(["height", "width"], function(e, t) {
			ue.cssHooks[t] = {
				get: function(e, n, r) {
					return n ? ct.test(ue.css(e, "display")) && 0 === e.offsetWidth ? ue.swap(e, ht, function() {
						return O(e, t, r)
					}) : O(e, t, r) : void 0
				},
				set: function(e, n, r) {
					var i = r && it(e);
					return I(e, n, r ? j(e, t, r, se.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, i), i) : 0)
				}
			}
		}), se.opacity || (ue.cssHooks.opacity = {
			get: function(e, t) {
				return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set: function(e, t) {
				var n = e.style,
					r = e.currentStyle,
					i = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					a = r && r.filter || n.filter || "";
				n.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(a.replace(ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ut.test(a) ? a.replace(ut, i) : a + " " + i)
			}
		}), ue.cssHooks.marginRight = A(se.reliableMarginRight, function(e, t) {
			return t ? ue.swap(e, {
				display: "inline-block"
			}, at, [e, "marginRight"]) : void 0
		}), ue.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			ue.cssHooks[e + t] = {
				expand: function(n) {
					for(var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ae[r] + t] = a[r] || a[r - 2] || a[0];
					return i
				}
			}, ot.test(e) || (ue.cssHooks[e + t].set = I)
		}), ue.fn.extend({
			css: function(e, t) {
				return ze(this, function(e, t, n) {
					var r, i, a = {},
						o = 0;
					if(ue.isArray(t)) {
						for(r = it(e), i = t.length; i > o; o++) a[t[o]] = ue.css(e, t[o], !1, r);
						return a
					}
					return void 0 !== n ? ue.style(e, t, n) : ue.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function() {
				return z(this, !0)
			},
			hide: function() {
				return z(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					Pe(this) ? ue(this).show() : ue(this).hide()
				})
			}
		}), ue.Tween = H, H.prototype = {
			constructor: H,
			init: function(e, t, n, r, i, a) {
				this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (ue.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = H.propHooks[this.prop];
				return e && e.get ? e.get(this) : H.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = H.propHooks[this.prop];
				return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
			}
		}, H.prototype.init.prototype = H.prototype, H.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
				},
				set: function(e) {
					ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, ue.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, ue.fx = H.prototype.init, ue.fx.step = {};
		var gt, yt, wt = /^(?:toggle|show|hide)$/,
			xt = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
			bt = /queueHooks$/,
			Tt = [q],
			Ct = {
				"*": [function(e, t) {
					var n = this.createTween(e, t),
						r = n.cur(),
						i = xt.exec(t),
						a = i && i[3] || (ue.cssNumber[e] ? "" : "px"),
						o = (ue.cssNumber[e] || "px" !== a && +r) && xt.exec(ue.css(n.elem, e)),
						s = 1,
						l = 20;
					if(o && o[3] !== a) {
						a = a || o[3], i = i || [], o = +r || 1;
						do {
							s = s || ".5", o /= s, ue.style(n.elem, e, o + a)
						} while (s !== (s = n.cur() / r) && 1 !== s && --l)
					}
					return i && (o = n.start = +o || +r || 0, n.unit = a, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
				}]
			};
		ue.Animation = ue.extend(R, {
				tweener: function(e, t) {
					ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
					for(var n, r = 0, i = e.length; i > r; r++) n = e[r], Ct[n] = Ct[n] || [], Ct[n].unshift(t)
				},
				prefilter: function(e, t) {
					t ? Tt.unshift(e) : Tt.push(e)
				}
			}), ue.speed = function(e, t, n) {
				var r = e && "object" == typeof e ? ue.extend({}, e) : {
					complete: n || !n && t || ue.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !ue.isFunction(t) && t
				};
				return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
					ue.isFunction(r.old) && r.old.call(this), r.queue && ue.dequeue(this, r.queue)
				}, r
			}, ue.fn.extend({
				fadeTo: function(e, t, n, r) {
					return this.filter(Pe).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, r)
				},
				animate: function(e, t, n, r) {
					var i = ue.isEmptyObject(e),
						a = ue.speed(t, n, r),
						o = function() {
							var t = R(this, ue.extend({}, e), a);
							(i || ue._data(this, "finish")) && t.stop(!0)
						};
					return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
				},
				stop: function(e, t, n) {
					var r = function(e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
						var t = !0,
							i = null != e && e + "queueHooks",
							a = ue.timers,
							o = ue._data(this);
						if(i) o[i] && o[i].stop && r(o[i]);
						else
							for(i in o) o[i] && o[i].stop && bt.test(i) && r(o[i]);
						for(i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
						(t || !n) && ue.dequeue(this, e)
					})
				},
				finish: function(e) {
					return !1 !== e && (e = e || "fx"), this.each(function() {
						var t, n = ue._data(this),
							r = n[e + "queue"],
							i = n[e + "queueHooks"],
							a = ue.timers,
							o = r ? r.length : 0;
						for(n.finish = !0, ue.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
						for(t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish
					})
				}
			}), ue.each(["toggle", "show", "hide"], function(e, t) {
				var n = ue.fn[t];
				ue.fn[t] = function(e, r, i) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
				}
			}), ue.each({
				slideDown: W("show"),
				slideUp: W("hide"),
				slideToggle: W("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(e, t) {
				ue.fn[e] = function(e, n, r) {
					return this.animate(t, e, n, r)
				}
			}), ue.timers = [], ue.fx.tick = function() {
				var e, t = ue.timers,
					n = 0;
				for(gt = ue.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
				t.length || ue.fx.stop(), gt = void 0
			}, ue.fx.timer = function(e) {
				ue.timers.push(e), e() ? ue.fx.start() : ue.timers.pop()
			}, ue.fx.interval = 13, ue.fx.start = function() {
				yt || (yt = setInterval(ue.fx.tick, ue.fx.interval))
			}, ue.fx.stop = function() {
				clearInterval(yt), yt = null
			}, ue.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, ue.fn.delay = function(e, t) {
				return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
					var r = setTimeout(t, e);
					n.stop = function() {
						clearTimeout(r)
					}
				})
			},
			function() {
				var e, t, n, r, i;
				t = we.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = we.createElement("select"), i = n.appendChild(we.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", se.getSetAttribute = "t" !== t.className, se.style = /top/.test(r.getAttribute("style")), se.hrefNormalized = "/a" === r.getAttribute("href"), se.checkOn = !!e.value, se.optSelected = i.selected, se.enctype = !!we.createElement("form").enctype, n.disabled = !0, se.optDisabled = !i.disabled, e = we.createElement("input"), e.setAttribute("value", ""), se.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), se.radioValue = "t" === e.value
			}();
		var St = /\r/g;
		ue.fn.extend({
			val: function(e) {
				var t, n, r, i = this[0];
				return arguments.length ? (r = ue.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, ue(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ue.isArray(i) && (i = ue.map(i, function(e) {
						return null == e ? "" : e + ""
					})), (t = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				})) : i ? (t = ue.valHooks[i.type] || ue.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)) : void 0
			}
		}), ue.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = ue.find.attr(e, "value");
						return null != t ? t : ue.trim(ue.text(e))
					}
				},
				select: {
					get: function(e) {
						for(var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, l = 0 > i ? s : a ? i : 0; s > l; l++)
							if(n = r[l], !(!n.selected && l !== i || (se.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ue.nodeName(n.parentNode, "optgroup"))) {
								if(t = ue(n).val(), a) return t;
								o.push(t)
							}
						return o
					},
					set: function(e, t) {
						for(var n, r, i = e.options, a = ue.makeArray(t), o = i.length; o--;)
							if(r = i[o], ue.inArray(ue.valHooks.option.get(r), a) >= 0) try {
								r.selected = n = !0
							} catch(e) {
								r.scrollHeight
							} else r.selected = !1;
						return n || (e.selectedIndex = -1), i
					}
				}
			}
		}), ue.each(["radio", "checkbox"], function() {
			ue.valHooks[this] = {
				set: function(e, t) {
					return ue.isArray(t) ? e.checked = ue.inArray(ue(e).val(), t) >= 0 : void 0
				}
			}, se.checkOn || (ue.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var Et, kt, Nt = ue.expr.attrHandle,
			Mt = /^(?:checked|selected)$/i,
			Lt = se.getSetAttribute,
			Dt = se.input;
		ue.fn.extend({
			attr: function(e, t) {
				return ze(this, ue.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					ue.removeAttr(this, e)
				})
			}
		}), ue.extend({
			attr: function(e, t, n) {
				var r, i, a = e.nodeType;
				if(e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Ne ? ue.prop(e, t, n) : (1 === a && ue.isXMLDoc(e) || (t = t.toLowerCase(), r = ue.attrHooks[t] || (ue.expr.match.bool.test(t) ? kt : Et)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ue.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ue.removeAttr(e, t))
			},
			removeAttr: function(e, t) {
				var n, r, i = 0,
					a = t && t.match(Ce);
				if(a && 1 === e.nodeType)
					for(; n = a[i++];) r = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? Dt && Lt || !Mt.test(n) ? e[r] = !1 : e[ue.camelCase("default-" + n)] = e[r] = !1 : ue.attr(e, n, ""), e.removeAttribute(Lt ? n : r)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if(!se.radioValue && "radio" === t && ue.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), kt = {
			set: function(e, t, n) {
				return !1 === t ? ue.removeAttr(e, n) : Dt && Lt || !Mt.test(n) ? e.setAttribute(!Lt && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = Nt[t] || ue.find.attr;
			Nt[t] = Dt && Lt || !Mt.test(t) ? function(e, t, r) {
				var i, a;
				return r || (a = Nt[t], Nt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Nt[t] = a), i
			} : function(e, t, n) {
				return n ? void 0 : e[ue.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), Dt && Lt || (ue.attrHooks.value = {
			set: function(e, t, n) {
				return ue.nodeName(e, "input") ? void(e.defaultValue = t) : Et && Et.set(e, t, n)
			}
		}), Lt || (Et = {
			set: function(e, t, n) {
				var r = e.getAttributeNode(n);
				return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
			}
		}, Nt.id = Nt.name = Nt.coords = function(e, t, n) {
			var r;
			return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
		}, ue.valHooks.button = {
			get: function(e, t) {
				var n = e.getAttributeNode(t);
				return n && n.specified ? n.value : void 0
			},
			set: Et.set
		}, ue.attrHooks.contenteditable = {
			set: function(e, t, n) {
				Et.set(e, "" !== t && t, n)
			}
		}, ue.each(["width", "height"], function(e, t) {
			ue.attrHooks[t] = {
				set: function(e, n) {
					return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
				}
			}
		})), se.style || (ue.attrHooks.style = {
			get: function(e) {
				return e.style.cssText || void 0
			},
			set: function(e, t) {
				return e.style.cssText = t + ""
			}
		});
		var At = /^(?:input|select|textarea|button|object)$/i,
			Pt = /^(?:a|area)$/i;
		ue.fn.extend({
			prop: function(e, t) {
				return ze(this, ue.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return e = ue.propFix[e] || e, this.each(function() {
					try {
						this[e] = void 0, delete this[e]
					} catch(e) {}
				})
			}
		}), ue.extend({
			propFix: {
				for: "htmlFor",
				class: "className"
			},
			prop: function(e, t, n) {
				var r, i, a, o = e.nodeType;
				if(e && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !ue.isXMLDoc(e), a && (t = ue.propFix[t] || t, i = ue.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var t = ue.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : At.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			}
		}), se.hrefNormalized || ue.each(["href", "src"], function(e, t) {
			ue.propHooks[t] = {
				get: function(e) {
					return e.getAttribute(t, 4)
				}
			}
		}), se.optSelected || (ue.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			}
		}), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			ue.propFix[this.toLowerCase()] = this
		}), se.enctype || (ue.propFix.enctype = "encoding");
		var zt = /[\t\r\n\f]/g;
		ue.fn.extend({
			addClass: function(e) {
				var t, n, r, i, a, o, s = 0,
					l = this.length,
					u = "string" == typeof e && e;
				if(ue.isFunction(e)) return this.each(function(t) {
					ue(this).addClass(e.call(this, t, this.className))
				});
				if(u)
					for(t = (e || "").match(Ce) || []; l > s; s++)
						if(n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(zt, " ") : " ")) {
							for(a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
							o = ue.trim(r), n.className !== o && (n.className = o)
						}
				return this
			},
			removeClass: function(e) {
				var t, n, r, i, a, o, s = 0,
					l = this.length,
					u = 0 === arguments.length || "string" == typeof e && e;
				if(ue.isFunction(e)) return this.each(function(t) {
					ue(this).removeClass(e.call(this, t, this.className))
				});
				if(u)
					for(t = (e || "").match(Ce) || []; l > s; s++)
						if(n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(zt, " ") : "")) {
							for(a = 0; i = t[a++];)
								for(; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
							o = e ? ue.trim(r) : "", n.className !== o && (n.className = o)
						}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ue.isFunction(e) ? function(n) {
					ue(this).toggleClass(e.call(this, n, this.className, t), t)
				} : function() {
					if("string" === n)
						for(var t, r = 0, i = ue(this), a = e.match(Ce) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
					else(n === Ne || "boolean" === n) && (this.className && ue._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ue._data(this, "__className__") || "")
				})
			},
			hasClass: function(e) {
				for(var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
					if(1 === this[n].nodeType && (" " + this[n].className + " ").replace(zt, " ").indexOf(t) >= 0) return !0;
				return !1
			}
		}), ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
			ue.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), ue.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		});
		var It = ue.now(),
			jt = /\?/,
			Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		ue.parseJSON = function(e) {
			if(a.JSON && a.JSON.parse) return a.JSON.parse(e + "");
			var t, n = null,
				r = ue.trim(e + "");
			return r && !ue.trim(r.replace(Ot, function(e, r, i, a) {
				return t && r && (n = 0), 0 === n ? e : (t = i || r, n += !a - !i, "")
			})) ? Function("return " + r)() : ue.error("Invalid JSON: " + e)
		}, ue.parseXML = function(e) {
			var t, n;
			if(!e || "string" != typeof e) return null;
			try {
				a.DOMParser ? (n = new DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
			} catch(e) {
				t = void 0
			}
			return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + e), t
		};
		var Ht, Bt, Wt = /#.*$/,
			_t = /([?&])_=[^&]*/,
			qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Rt = /^(?:GET|HEAD)$/,
			Gt = /^\/\//,
			Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			$t = {},
			Vt = {},
			Yt = "*/".concat("*");
		try {
			Bt = location.href
		} catch(e) {
			Bt = we.createElement("a"), Bt.href = "", Bt = Bt.href
		}
		Ht = Xt.exec(Bt.toLowerCase()) || [], ue.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Bt,
				type: "GET",
				isLocal: Ft.test(Ht[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Yt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": ue.parseJSON,
					"text xml": ue.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? $($(e, ue.ajaxSettings), t) : $(ue.ajaxSettings, e)
			},
			ajaxPrefilter: G($t),
			ajaxTransport: G(Vt),
			ajax: function(e, t) {
				function n(e, t, n, r) {
					var i, d, g, y, x, T = t;
					2 !== w && (w = 2, s && clearTimeout(s), u = void 0, o = r || "", b.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = V(c, b, n)), y = Y(c, y, b, i), i ? (c.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (ue.lastModified[a] = x), (x = b.getResponseHeader("etag")) && (ue.etag[a] = x)), 204 === e || "HEAD" === c.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, d = y.data, g = y.error, i = !g)) : (g = T, (e || !T) && (T = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || T) + "", i ? h.resolveWith(p, [d, T, b]) : h.rejectWith(p, [b, T, g]), b.statusCode(v), v = void 0, l && f.trigger(i ? "ajaxSuccess" : "ajaxError", [b, c, i ? d : g]), m.fireWith(p, [b, T]), l && (f.trigger("ajaxComplete", [b, c]), --ue.active || ue.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var r, i, a, o, s, l, u, d, c = ue.ajaxSetup({}, t),
					p = c.context || c,
					f = c.context && (p.nodeType || p.jquery) ? ue(p) : ue.event,
					h = ue.Deferred(),
					m = ue.Callbacks("once memory"),
					v = c.statusCode || {},
					g = {},
					y = {},
					w = 0,
					x = "canceled",
					b = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if(2 === w) {
								if(!d)
									for(d = {}; t = qt.exec(o);) d[t[1].toLowerCase()] = t[2];
								t = d[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === w ? o : null
						},
						setRequestHeader: function(e, t) {
							var n = e.toLowerCase();
							return w || (e = y[n] = y[n] || e, g[e] = t), this
						},
						overrideMimeType: function(e) {
							return w || (c.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if(e)
								if(2 > w)
									for(t in e) v[t] = [v[t], e[t]];
								else b.always(e[b.status]);
							return this
						},
						abort: function(e) {
							var t = e || x;
							return u && u.abort(t), n(0, t), this
						}
					};
				if(h.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, c.url = ((e || c.url || Bt) + "").replace(Wt, "").replace(Gt, Ht[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = ue.trim(c.dataType || "*").toLowerCase().match(Ce) || [""], null == c.crossDomain && (r = Xt.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === Ht[1] && r[2] === Ht[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ht[3] || ("http:" === Ht[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = ue.param(c.data, c.traditional)), X($t, c, t, b), 2 === w) return b;
				l = ue.event && c.global, l && 0 == ue.active++ && ue.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Rt.test(c.type), a = c.url, c.hasContent || (c.data && (a = c.url += (jt.test(a) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = _t.test(a) ? a.replace(_t, "$1_=" + It++) : a + (jt.test(a) ? "&" : "?") + "_=" + It++)), c.ifModified && (ue.lastModified[a] && b.setRequestHeader("If-Modified-Since", ue.lastModified[a]), ue.etag[a] && b.setRequestHeader("If-None-Match", ue.etag[a])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && b.setRequestHeader("Content-Type", c.contentType), b.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : c.accepts["*"]);
				for(i in c.headers) b.setRequestHeader(i, c.headers[i]);
				if(c.beforeSend && (!1 === c.beforeSend.call(p, b, c) || 2 === w)) return b.abort();
				x = "abort";
				for(i in {
						success: 1,
						error: 1,
						complete: 1
					}) b[i](c[i]);
				if(u = X(Vt, c, t, b)) {
					b.readyState = 1, l && f.trigger("ajaxSend", [b, c]), c.async && c.timeout > 0 && (s = setTimeout(function() {
						b.abort("timeout")
					}, c.timeout));
					try {
						w = 1, u.send(g, n)
					} catch(e) {
						if(!(2 > w)) throw e;
						n(-1, e)
					}
				} else n(-1, "No Transport");
				return b
			},
			getJSON: function(e, t, n) {
				return ue.get(e, t, n, "json")
			},
			getScript: function(e, t) {
				return ue.get(e, void 0, t, "script")
			}
		}), ue.each(["get", "post"], function(e, t) {
			ue[t] = function(e, n, r, i) {
				return ue.isFunction(n) && (i = i || r, r = n, n = void 0), ue.ajax({
					url: e,
					type: t,
					dataType: i,
					data: n,
					success: r
				})
			}
		}), ue._evalUrl = function(e) {
			return ue.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				throws: !0
			})
		}, ue.fn.extend({
			wrapAll: function(e) {
				if(ue.isFunction(e)) return this.each(function(t) {
					ue(this).wrapAll(e.call(this, t))
				});
				if(this[0]) {
					var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						for(var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
						return e
					}).append(this)
				}
				return this
			},
			wrapInner: function(e) {
				return this.each(ue.isFunction(e) ? function(t) {
					ue(this).wrapInner(e.call(this, t))
				} : function() {
					var t = ue(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = ue.isFunction(e);
				return this.each(function(n) {
					ue(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
				}).end()
			}
		}), ue.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !se.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ue.css(e, "display"))
		}, ue.expr.filters.visible = function(e) {
			return !ue.expr.filters.hidden(e)
		};
		var Ut = /%20/g,
			Kt = /\[\]$/,
			Jt = /\r?\n/g,
			Qt = /^(?:submit|button|image|reset|file)$/i,
			Zt = /^(?:input|select|textarea|keygen)/i;
		ue.param = function(e, t) {
			var n, r = [],
				i = function(e, t) {
					t = ue.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if(void 0 === t && (t = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function() {
				i(this.name, this.value)
			});
			else
				for(n in e) U(n, e[n], t, i);
			return r.join("&").replace(Ut, "+")
		}, ue.fn.extend({
			serialize: function() {
				return ue.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = ue.prop(this, "elements");
					return e ? ue.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !ue(this).is(":disabled") && Zt.test(this.nodeName) && !Qt.test(e) && (this.checked || !Ie.test(e))
				}).map(function(e, t) {
					var n = ue(this).val();
					return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(Jt, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Jt, "\r\n")
					}
				}).get()
			}
		}), ue.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || J()
		} : K;
		var en = 0,
			tn = {},
			nn = ue.ajaxSettings.xhr();
		a.attachEvent && a.attachEvent("onunload", function() {
			for(var e in tn) tn[e](void 0, !0)
		}), se.cors = !!nn && "withCredentials" in nn, (nn = se.ajax = !!nn) && ue.ajaxTransport(function(e) {
			if(!e.crossDomain || se.cors) {
				var t;
				return {
					send: function(n, r) {
						var i, a = e.xhr(),
							o = ++en;
						if(a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
							for(i in e.xhrFields) a[i] = e.xhrFields[i];
						e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
						for(i in n) void 0 !== n[i] && a.setRequestHeader(i, n[i] + "");
						a.send(e.hasContent && e.data || null), t = function(n, i) {
							var s, l, u;
							if(t && (i || 4 === a.readyState))
								if(delete tn[o], t = void 0, a.onreadystatechange = ue.noop, i) 4 !== a.readyState && a.abort();
								else {
									u = {}, s = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
									try {
										l = a.statusText
									} catch(e) {
										l = ""
									}
									s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
								}
							u && r(s, l, u, a.getAllResponseHeaders())
						}, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = tn[o] = t : t()
					},
					abort: function() {
						t && t(void 0, !0)
					}
				}
			}
		}), ue.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					return ue.globalEval(e), e
				}
			}
		}), ue.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
		}), ue.ajaxTransport("script", function(e) {
			if(e.crossDomain) {
				var t, n = we.head || ue("head")[0] || we.documentElement;
				return {
					send: function(r, i) {
						t = we.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
							(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
						}, n.insertBefore(t, n.firstChild)
					},
					abort: function() {
						t && t.onload(void 0, !0)
					}
				}
			}
		});
		var rn = [],
			an = /(=)\?(?=&|$)|\?\?/;
		ue.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = rn.pop() || ue.expando + "_" + It++;
				return this[e] = !0, e
			}
		}), ue.ajaxPrefilter("json jsonp", function(e, t, n) {
			var r, i, o, s = !1 !== e.jsonp && (an.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(e.data) && "data");
			return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ue.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(an, "$1" + r) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
				return o || ue.error(r + " was not called"), o[0]
			}, e.dataTypes[0] = "json", i = a[r], a[r] = function() {
				o = arguments
			}, n.always(function() {
				a[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, rn.push(r)), o && ue.isFunction(i) && i(o[0]), o = i = void 0
			}), "script") : void 0
		}), ue.parseHTML = function(e, t, n) {
			if(!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || we;
			var r = ve.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = ue.buildFragment([e], t, i), i && i.length && ue(i).remove(), ue.merge([], r.childNodes))
		};
		var on = ue.fn.load;
		ue.fn.load = function(e, t, n) {
			if("string" != typeof e && on) return on.apply(this, arguments);
			var r, i, a, o = this,
				s = e.indexOf(" ");
			return s >= 0 && (r = ue.trim(e.slice(s, e.length)), e = e.slice(0, s)), ue.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && ue.ajax({
				url: e,
				type: a,
				dataType: "html",
				data: t
			}).done(function(e) {
				i = arguments, o.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
			}).complete(n && function(e, t) {
				o.each(n, i || [e.responseText, t, e])
			}), this
		}, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			ue.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), ue.expr.filters.animated = function(e) {
			return ue.grep(ue.timers, function(t) {
				return e === t.elem
			}).length
		};
		var sn = a.document.documentElement;
		ue.offset = {
			setOffset: function(e, t, n) {
				var r, i, a, o, s, l, u, d = ue.css(e, "position"),
					c = ue(e),
					p = {};
				"static" === d && (e.style.position = "relative"), s = c.offset(), a = ue.css(e, "top"), l = ue.css(e, "left"), u = ("absolute" === d || "fixed" === d) && ue.inArray("auto", [a, l]) > -1, u ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), ue.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : c.css(p)
			}
		}, ue.fn.extend({
			offset: function(e) {
				if(arguments.length) return void 0 === e ? this : this.each(function(t) {
					ue.offset.setOffset(this, e, t)
				});
				var t, n, r = {
						top: 0,
						left: 0
					},
					i = this[0],
					a = i && i.ownerDocument;
				return a ? (t = a.documentElement, ue.contains(t, i) ? (typeof i.getBoundingClientRect !== Ne && (r = i.getBoundingClientRect()), n = Q(a), {
					top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
				}) : r) : void 0
			},
			position: function() {
				if(this[0]) {
					var e, t, n = {
							top: 0,
							left: 0
						},
						r = this[0];
					return "fixed" === ue.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (n = e.offset()), n.top += ue.css(e[0], "borderTopWidth", !0), n.left += ue.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - n.top - ue.css(r, "marginTop", !0),
						left: t.left - n.left - ue.css(r, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for(var e = this.offsetParent || sn; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position");) e = e.offsetParent;
					return e || sn
				})
			}
		}), ue.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, t) {
			var n = /Y/.test(t);
			ue.fn[e] = function(r) {
				return ze(this, function(e, r, i) {
					var a = Q(e);
					return void 0 === i ? a ? t in a ? a[t] : a.document.documentElement[r] : e[r] : void(a ? a.scrollTo(n ? ue(a).scrollLeft() : i, n ? i : ue(a).scrollTop()) : e[r] = i)
				}, e, r, arguments.length, null)
			}
		}), ue.each(["top", "left"], function(e, t) {
			ue.cssHooks[t] = A(se.pixelPosition, function(e, n) {
				return n ? (n = at(e, t), st.test(n) ? ue(e).position()[t] + "px" : n) : void 0
			})
		}), ue.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			ue.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, r) {
				ue.fn[r] = function(r, i) {
					var a = arguments.length && (n || "boolean" != typeof r),
						o = n || (!0 === r || !0 === i ? "margin" : "border");
					return ze(this, function(t, n, r) {
						var i;
						return ue.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ue.css(t, n, o) : ue.style(t, n, r, o)
					}, t, a ? r : void 0, a, null)
				}
			})
		}), ue.fn.size = function() {
			return this.length
		}, ue.fn.andSelf = ue.fn.addBack, n(4) && (r = [], void 0 !== (i = function() {
			return ue
		}.apply(t, r)) && (e.exports = i));
		var ln = a.jQuery,
			un = a.$;
		return ue.noConflict = function(e) {
			return a.$ === ue && (a.$ = un), e && a.jQuery === ue && (a.jQuery = ln), ue
		}, typeof o === Ne && (a.jQuery = a.$ = ue), ue
	})
}, function(e, t) {}, function(e, t) {
	(function(t) {
		e.exports = t
	}).call(t, {})
}, , function(e, t, n) {
	! function() {
		"use strict";
		window.Swiper = function(t, n) {
			function r() {
				return "horizontal" === f.params.direction
			}

			function i() {
				f.autoplayTimeoutId = setTimeout(function() {
					f.params.loop ? (f.fixLoop(), f._slideNext()) : f.isEnd ? n.autoplayStopOnLast ? f.stopAutoplay() : f._slideTo(0) : f._slideNext()
				}, f.params.autoplay)
			}

			function a(e, t) {
				var n = h(e.target);
				if(!n.is(t))
					if("string" == typeof t) n = n.parents(t);
					else if(t.nodeType) {
					var r;
					return n.parents().each(function(e, n) {
						n === t && (r = t)
					}), r ? t : void 0
				}
				return 0 === n.length ? void 0 : n[0]
			}

			function o(e, t) {
				t = t || {};
				var n = window.MutationObserver || window.WebkitMutationObserver,
					r = new n(function(e) {
						e.forEach(function(e) {
							f.onResize(), f.params.onObserverUpdate && f.params.onObserverUpdate(f, e)
						})
					});
				r.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), f.observers.push(r)
			}

			function s(e) {
				e.originalEvent && (e = e.originalEvent);
				var t = e.keyCode || e.charCode;
				if(!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
					if(37 === t || 39 === t || 38 === t || 40 === t) {
						var n = !1;
						if(f.container.parents(".swiper-slide").length > 0 && 0 === f.container.parents(".swiper-slide-active").length) return;
						for(var i = {
								left: window.pageXOffset,
								top: window.pageYOffset
							}, a = window.innerWidth, o = window.innerHeight, s = f.container.offset(), l = [
								[s.left, s.top],
								[s.left + f.width, s.top],
								[s.left, s.top + f.height],
								[s.left + f.width, s.top + f.height]
							], u = 0; u < l.length; u++) {
							var d = l[u];
							d[0] >= i.left && d[0] <= i.left + a && d[1] >= i.top && d[1] <= i.top + o && (n = !0)
						}
						if(!n) return
					}
					r() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 39 === t && f.slideNext(), 37 === t && f.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && f.slideNext(), 38 === t && f.slidePrev())
				}
			}

			function l(e) {
				e.originalEvent && (e = e.originalEvent);
				var t = f._wheelEvent,
					n = 0;
				if(e.detail) n = -e.detail;
				else if("mousewheel" === t)
					if(f.params.mousewheelForceToAxis)
						if(r()) {
							if(!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
							n = e.wheelDeltaX
						} else {
							if(!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
							n = e.wheelDeltaY
						}
				else n = e.wheelDelta;
				else if("DOMMouseScroll" === t) n = -e.detail;
				else if("wheel" === t)
					if(f.params.mousewheelForceToAxis)
						if(r()) {
							if(!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
							n = -e.deltaX
						} else {
							if(!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
							n = -e.deltaY
						}
				else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
				if(f.params.freeMode) {
					var i = f.getWrapperTranslate() + n;
					if(i > 0 && (i = 0), i < f.maxTranslate() && (i = f.maxTranslate()), f.setWrapperTransition(0), f.setWrapperTranslate(i), f.updateProgress(), f.updateActiveIndex(), 0 === i || i === f.maxTranslate()) return
				} else(new Date).getTime() - f._lastWheelScrollTime > 60 && (0 > n ? f.slideNext() : f.slidePrev()), f._lastWheelScrollTime = (new Date).getTime();
				return f.params.autoplay && f.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
			}

			function u(e, t) {
				e = h(e);
				var n, i, a, o, s;
				n = e.attr("data-swiper-parallax"), i = e.attr("data-swiper-parallax-x"), a = e.attr("data-swiper-parallax-y"), i || a || !n ? (i = i || "0", a = a || "0") : r() ? (i = n, a = "0") : (a = n, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * t + "%" : a * t + "px", o = i, s = a, e.transform("translate3d(" + o + ", " + s + ",0px)")
			}
			var d = {
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				autoplay: !1,
				autoplayDisableOnInteraction: !0,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				effect: "slide",
				coverflow: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				},
				cube: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				},
				fade: {
					crossFade: !1
				},
				parallax: !1,
				scrollbar: null,
				scrollbarHide: !0,
				keyboardControl: !1,
				mousewheelControl: !1,
				mousewheelForceToAxis: !1,
				hashnav: !1,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				centeredSlides: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				onlyExternal: !1,
				threshold: 0,
				touchMoveStopPropagation: !0,
				pagination: null,
				paginationClickable: !1,
				paginationHide: !1,
				paginationBulletRender: null,
				resistance: !0,
				resistanceRatio: .85,
				nextButton: null,
				prevButton: null,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				lazyLoading: !1,
				lazyLoadingInPrevNext: !1,
				lazyLoadingOnTransitionStart: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				control: void 0,
				controlInverse: !1,
				allowSwipeToPrev: !0,
				allowSwipeToNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				slideClass: "swiper-slide",
				slideActiveClass: "swiper-slide-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slidePrevClass: "swiper-slide-prev",
				wrapperClass: "swiper-wrapper",
				bulletClass: "swiper-pagination-bullet",
				bulletActiveClass: "swiper-pagination-bullet-active",
				buttonDisabledClass: "swiper-button-disabled",
				paginationHiddenClass: "swiper-pagination-hidden",
				observer: !1,
				observeParents: !1,
				runCallbacksOnInit: !0
			};
			n = n || {};
			for(var c in d)
				if(void 0 === n[c]) n[c] = d[c];
				else if("object" == typeof n[c])
				for(var p in d[c]) void 0 === n[c][p] && (n[c][p] = d[c][p]);
			var f = this;
			f.params = n;
			var h;
			if((h = void 0 === e ? window.Dom7 || window.Zepto || window.jQuery : e) && (f.container = h(t), 0 !== f.container.length)) {
				if(f.container.length > 1) return void f.container.each(function() {
					new Swiper(this, n)
				});
				f.container[0].swiper = f, f.container.data("swiper", f), f.container.addClass("swiper-container-" + f.params.direction), f.params.freeMode && f.container.addClass("swiper-container-free-mode"), (f.params.parallax || f.params.watchSlidesVisibility) && (f.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(f.params.effect) >= 0 && (f.support.transforms3d ? (f.params.watchSlidesProgress = !0, f.container.addClass("swiper-container-3d")) : f.params.effect = "slide"), "slide" !== f.params.effect && f.container.addClass("swiper-container-" + f.params.effect), "cube" === f.params.effect && (f.params.resistanceRatio = 0, f.params.slidesPerView = 1, f.params.slidesPerColumn = 1, f.params.slidesPerGroup = 1, f.params.centeredSlides = !1, f.params.spaceBetween = 0), "fade" === f.params.effect && (f.params.watchSlidesProgress = !0, f.params.spaceBetween = 0), f.params.grabCursor && f.support.touch && (f.params.grabCursor = !1), f.wrapper = f.container.children("." + f.params.wrapperClass), f.params.pagination && (f.paginationContainer = h(f.params.pagination), f.params.paginationClickable && f.paginationContainer.addClass("swiper-pagination-clickable")), f.rtl = r() && ("rtl" === f.container[0].dir.toLowerCase() || "rtl" === f.container.css("direction")), f.rtl && f.container.addClass("swiper-container-rtl"), f.rtl && (f.wrongRTL = "-webkit-box" === f.wrapper.css("display")), f.translate = 0, f.progress = 0, f.velocity = 0, f.lockSwipeToNext = function() {
					f.params.allowSwipeToNext = !1
				}, f.lockSwipeToPrev = function() {
					f.params.allowSwipeToPrev = !1
				}, f.lockSwipes = function() {
					f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !1
				}, f.unlockSwipeToNext = function() {
					f.params.allowSwipeToNext = !0
				}, f.unlockSwipeToPrev = function() {
					f.params.allowSwipeToPrev = !0
				}, f.unlockSwipes = function() {
					f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !0
				}, f.params.slidesPerColumn > 1 && f.container.addClass("swiper-container-multirow"), f.params.grabCursor && (f.container[0].style.cursor = "move", f.container[0].style.cursor = "-webkit-grab", f.container[0].style.cursor = "-moz-grab", f.container[0].style.cursor = "grab"), f.imagesToLoad = [], f.imagesLoaded = 0, f.loadImage = function(e, t, n, r) {
					function i() {
						r && r()
					}
					var a;
					e.complete && n ? i() : t ? (a = new Image, a.onload = i, a.onerror = i, a.src = t) : i()
				}, f.preloadImages = function() {
					function e() {
						void 0 !== f && null !== f && (void 0 !== f.imagesLoaded && f.imagesLoaded++, f.imagesLoaded === f.imagesToLoad.length && (f.params.updateOnImagesReady && f.update(), f.params.onImagesReady && f.params.onImagesReady(f)))
					}
					f.imagesToLoad = f.container.find("img");
					for(var t = 0; t < f.imagesToLoad.length; t++) f.loadImage(f.imagesToLoad[t], f.imagesToLoad[t].currentSrc || f.imagesToLoad[t].getAttribute("src"), !0, e)
				}, f.autoplayTimeoutId = void 0, f.autoplaying = !1, f.autoplayPaused = !1, f.startAutoplay = function() {
					return void 0 === f.autoplayTimeoutId && (!!f.params.autoplay && (!f.autoplaying && (f.autoplaying = !0, f.params.onAutoplayStart && f.params.onAutoplayStart(f), void i())))
				}, f.stopAutoplay = function() {
					f.autoplayTimeoutId && (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId), f.autoplaying = !1, f.autoplayTimeoutId = void 0, f.params.onAutoplayStop && f.params.onAutoplayStop(f))
				}, f.pauseAutoplay = function(e) {
					f.autoplayPaused || (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId), f.autoplayPaused = !0, 0 === e ? (f.autoplayPaused = !1, i()) : f.wrapper.transitionEnd(function() {
						f.autoplayPaused = !1, f.autoplaying ? i() : f.stopAutoplay()
					}))
				}, f.minTranslate = function() {
					return -f.snapGrid[0]
				}, f.maxTranslate = function() {
					return -f.snapGrid[f.snapGrid.length - 1]
				}, f.updateContainerSize = function() {
					f.width = f.container[0].clientWidth, f.height = f.container[0].clientHeight, f.size = r() ? f.width : f.height
				}, f.updateSlidesSize = function() {
					f.slides = f.wrapper.children("." + f.params.slideClass), f.snapGrid = [], f.slidesGrid = [], f.slidesSizesGrid = [];
					var e, t = f.params.spaceBetween,
						n = 0,
						i = 0,
						a = 0;
					"string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * f.size), f.virtualWidth = -t, f.slides.css(f.rtl ? {
						marginLeft: "",
						marginTop: ""
					} : {
						marginRight: "",
						marginBottom: ""
					});
					var o;
					f.params.slidesPerColumn > 1 && (o = Math.floor(f.slides.length / f.params.slidesPerColumn) === f.slides.length / f.params.slidesPerColumn ? f.slides.length : Math.ceil(f.slides.length / f.params.slidesPerColumn) * f.params.slidesPerColumn);
					var s;
					for(e = 0; e < f.slides.length; e++) {
						s = 0;
						var l = f.slides.eq(e);
						if(f.params.slidesPerColumn > 1) {
							var u, d, c, p, h = f.params.slidesPerColumn;
							"column" === f.params.slidesPerColumnFill ? (d = Math.floor(e / h), c = e - d * h, u = d + c * o / h, l.css({
								"-webkit-box-ordinal-group": u,
								"-moz-box-ordinal-group": u,
								"-ms-flex-order": u,
								"-webkit-order": u,
								order: u
							})) : (p = o / h, c = Math.floor(e / p), d = e - c * p), l.css({
								"margin-top": 0 !== c && f.params.spaceBetween && f.params.spaceBetween + "px"
							}).attr("data-swiper-column", d).attr("data-swiper-row", c)
						}
						"none" !== l.css("display") && ("auto" === f.params.slidesPerView ? s = r() ? l.outerWidth(!0) : l.outerHeight(!0) : (s = (f.size - (f.params.slidesPerView - 1) * t) / f.params.slidesPerView, r() ? f.slides[e].style.width = s + "px" : f.slides[e].style.height = s + "px"), f.slides[e].swiperSlideSize = s, f.slidesSizesGrid.push(s), f.params.centeredSlides ? (n = n + s / 2 + i / 2 + t, 0 === e && (n = n - f.size / 2 - t), Math.abs(n) < .001 && (n = 0), a % f.params.slidesPerGroup == 0 && f.snapGrid.push(n), f.slidesGrid.push(n)) : (a % f.params.slidesPerGroup == 0 && f.snapGrid.push(n), f.slidesGrid.push(n), n = n + s + t), f.virtualWidth += s + t, i = s, a++)
					}
					f.virtualWidth = Math.max(f.virtualWidth, f.size);
					var m;
					if(f.rtl && f.wrongRTL && ("slide" === f.params.effect || "coverflow" === f.params.effect) && f.wrapper.css({
							width: f.virtualWidth + f.params.spaceBetween + "px"
						}), f.params.slidesPerColumn > 1 && (f.virtualWidth = (s + f.params.spaceBetween) * o, f.virtualWidth = Math.ceil(f.virtualWidth / f.params.slidesPerColumn) - f.params.spaceBetween, f.wrapper.css({
							width: f.virtualWidth + f.params.spaceBetween + "px"
						}), f.params.centeredSlides)) {
						for(m = [], e = 0; e < f.snapGrid.length; e++) f.snapGrid[e] < f.virtualWidth + f.snapGrid[0] && m.push(f.snapGrid[e]);
						f.snapGrid = m
					}
					if(!f.params.centeredSlides) {
						for(m = [], e = 0; e < f.snapGrid.length; e++) f.snapGrid[e] <= f.virtualWidth - f.size && m.push(f.snapGrid[e]);
						f.snapGrid = m, Math.floor(f.virtualWidth - f.size) > Math.floor(f.snapGrid[f.snapGrid.length - 1]) && f.snapGrid.push(f.virtualWidth - f.size)
					}
					0 === f.snapGrid.length && (f.snapGrid = [0]), 0 !== f.params.spaceBetween && f.slides.css(r() ? f.rtl ? {
						marginLeft: t + "px"
					} : {
						marginRight: t + "px"
					} : {
						marginBottom: t + "px"
					}), f.params.watchSlidesProgress && f.updateSlidesOffset()
				}, f.updateSlidesOffset = function() {
					for(var e = 0; e < f.slides.length; e++) f.slides[e].swiperSlideOffset = r() ? f.slides[e].offsetLeft : f.slides[e].offsetTop
				}, f.updateSlidesProgress = function(e) {
					if(void 0 === e && (e = f.translate || 0), 0 !== f.slides.length) {
						void 0 === f.slides[0].swiperSlideOffset && f.updateSlidesOffset();
						var t = f.params.centeredSlides ? -e + f.size / 2 : -e;
						f.rtl && (t = f.params.centeredSlides ? e - f.size / 2 : e), f.container[0].getBoundingClientRect(), r(), r(), f.slides.removeClass(f.params.slideVisibleClass);
						for(var n = 0; n < f.slides.length; n++) {
							var i = f.slides[n],
								a = !0 === f.params.centeredSlides ? i.swiperSlideSize / 2 : 0,
								o = (t - i.swiperSlideOffset - a) / (i.swiperSlideSize + f.params.spaceBetween);
							if(f.params.watchSlidesVisibility) {
								var s = -(t - i.swiperSlideOffset - a),
									l = s + f.slidesSizesGrid[n];
								(s >= 0 && s < f.size || l > 0 && l <= f.size || 0 >= s && l >= f.size) && f.slides.eq(n).addClass(f.params.slideVisibleClass)
							}
							i.progress = f.rtl ? -o : o
						}
					}
				}, f.updateProgress = function(e) {
					void 0 === e && (e = f.translate || 0);
					var t = f.maxTranslate() - f.minTranslate();
					0 === t ? (f.progress = 0, f.isBeginning = f.isEnd = !0) : (f.progress = (e - f.minTranslate()) / t, f.isBeginning = f.progress <= 0, f.isEnd = f.progress >= 1), f.isBeginning && f.params.onReachBeginning && f.params.onReachBeginning(f), f.isEnd && f.params.onReachEnd && f.params.onReachEnd(f), f.params.watchSlidesProgress && f.updateSlidesProgress(e), f.params.onProgress && f.params.onProgress(f, f.progress)
				}, f.updateActiveIndex = function() {
					var e, t, n, r = f.rtl ? f.translate : -f.translate;
					for(t = 0; t < f.slidesGrid.length; t++) void 0 !== f.slidesGrid[t + 1] ? r >= f.slidesGrid[t] && r < f.slidesGrid[t + 1] - (f.slidesGrid[t + 1] - f.slidesGrid[t]) / 2 ? e = t : r >= f.slidesGrid[t] && r < f.slidesGrid[t + 1] && (e = t + 1) : r >= f.slidesGrid[t] && (e = t);
					(0 > e || void 0 === e) && (e = 0), n = Math.floor(e / f.params.slidesPerGroup), n >= f.snapGrid.length && (n = f.snapGrid.length - 1), e !== f.activeIndex && (f.snapIndex = n, f.previousIndex = f.activeIndex, f.activeIndex = e, f.updateClasses())
				}, f.updateClasses = function() {
					f.slides.removeClass(f.params.slideActiveClass + " " + f.params.slideNextClass + " " + f.params.slidePrevClass);
					var e = f.slides.eq(f.activeIndex);
					if(e.addClass(f.params.slideActiveClass), e.next("." + f.params.slideClass).addClass(f.params.slideNextClass), e.prev("." + f.params.slideClass).addClass(f.params.slidePrevClass), f.bullets && f.bullets.length > 0) {
						f.bullets.removeClass(f.params.bulletActiveClass);
						var t;
						f.params.loop ? (t = f.activeIndex - f.loopedSlides) > f.slides.length - 1 - 2 * f.loopedSlides && (t -= f.slides.length - 2 * f.loopedSlides) : t = void 0 !== f.snapIndex ? f.snapIndex : f.activeIndex || 0, f.bullets.eq(t).addClass(f.params.bulletActiveClass)
					}
					f.params.loop || (f.params.prevButton && (f.isBeginning ? h(f.params.prevButton).addClass(f.params.buttonDisabledClass) : h(f.params.prevButton).removeClass(f.params.buttonDisabledClass)), f.params.nextButton && (f.isEnd ? h(f.params.nextButton).addClass(f.params.buttonDisabledClass) : h(f.params.nextButton).removeClass(f.params.buttonDisabledClass)))
				}, f.updatePagination = function() {
					if(f.params.pagination && f.paginationContainer && f.paginationContainer.length > 0) {
						for(var e = "", t = f.params.loop ? f.slides.length - 2 * f.loopedSlides : f.snapGrid.length, n = 0; t > n; n++) e += f.params.paginationBulletRender ? f.params.paginationBulletRender(n, f.params.bulletClass) : '<span class="' + f.params.bulletClass + '"></span>';
						f.paginationContainer.html(e), f.bullets = f.paginationContainer.find("." + f.params.bulletClass)
					}
				}, f.update = function(e) {
					function t() {
						n = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate()), f.setWrapperTranslate(n), f.updateActiveIndex(), f.updateClasses()
					}
					if(f.updateContainerSize(), f.updateSlidesSize(), f.updateProgress(), f.updatePagination(), f.updateClasses(), f.params.scrollbar && f.scrollbar && f.scrollbar.set(), e) {
						var n;
						f.params.freeMode ? t() : ("auto" === f.params.slidesPerView && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0)) || t()
					}
				}, f.onResize = function() {
					if(f.updateContainerSize(), f.updateSlidesSize(), f.updateProgress(), ("auto" === f.params.slidesPerView || f.params.freeMode) && f.updatePagination(), f.params.scrollbar && f.scrollbar && f.scrollbar.set(), f.params.freeMode) {
						var e = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate());
						f.setWrapperTranslate(e), f.updateActiveIndex(), f.updateClasses()
					} else f.updateClasses(), "auto" === f.params.slidesPerView && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0)
				};
				var m = ["mousedown", "mousemove", "mouseup"];
				window.navigator.pointerEnabled ? m = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), f.touchEvents = {
					start: f.support.touch || !f.params.simulateTouch ? "touchstart" : m[0],
					move: f.support.touch || !f.params.simulateTouch ? "touchmove" : m[1],
					end: f.support.touch || !f.params.simulateTouch ? "touchend" : m[2]
				}, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === f.params.touchEventsTarget ? f.container : f.wrapper).addClass("swiper-wp8-" + f.params.direction), f.events = function(e) {
					var t = e ? "off" : "on",
						r = e ? "removeEventListener" : "addEventListener",
						i = "container" === f.params.touchEventsTarget ? f.container[0] : f.wrapper[0],
						a = f.support.touch ? i : document,
						o = !!f.params.nested;
					f.browser.ie ? (i[r](f.touchEvents.start, f.onTouchStart, !1), a[r](f.touchEvents.move, f.onTouchMove, o), a[r](f.touchEvents.end, f.onTouchEnd, !1)) : (f.support.touch && (i[r](f.touchEvents.start, f.onTouchStart, !1), i[r](f.touchEvents.move, f.onTouchMove, o), i[r](f.touchEvents.end, f.onTouchEnd, !1)), !n.simulateTouch || f.device.ios || f.device.android || (i[r]("mousedown", f.onTouchStart, !1), a[r]("mousemove", f.onTouchMove, o), a[r]("mouseup", f.onTouchEnd, !1))), window[r]("resize", f.onResize), f.params.nextButton && h(f.params.nextButton)[t]("click", f.onClickNext), f.params.prevButton && h(f.params.prevButton)[t]("click", f.onClickPrev), f.params.pagination && f.params.paginationClickable && h(f.paginationContainer)[t]("click", "." + f.params.bulletClass, f.onClickIndex), (f.params.preventClicks || f.params.preventClicksPropagation) && i[r]("click", f.preventClicks, !0)
				}, f.attachEvents = function() {
					f.events()
				}, f.detachEvents = function() {
					f.events(!0)
				}, f.allowClick = !0, f.preventClicks = function(e) {
					f.allowClick || (f.params.preventClicks && e.preventDefault(), f.params.preventClicksPropagation && (e.stopPropagation(), e.stopImmediatePropagation()))
				}, f.onClickNext = function(e) {
					e.preventDefault(), f.slideNext()
				}, f.onClickPrev = function(e) {
					e.preventDefault(), f.slidePrev()
				}, f.onClickIndex = function(e) {
					e.preventDefault();
					var t = h(this).index() * f.params.slidesPerGroup;
					f.params.loop && (t += f.loopedSlides), f.slideTo(t)
				}, f.updateClickedSlide = function(e) {
					var t = a(e, "." + f.params.slideClass);
					if(!t) return f.clickedSlide = void 0, void(f.clickedIndex = void 0);
					if(f.clickedSlide = t, f.clickedIndex = h(t).index(), f.params.slideToClickedSlide && void 0 !== f.clickedIndex && f.clickedIndex !== f.activeIndex) {
						var n, r = f.clickedIndex;
						if(f.params.loop)
							if(n = h(f.clickedSlide).attr("data-swiper-slide-index"), r > f.slides.length - f.params.slidesPerView) f.fixLoop(), r = f.wrapper.children("." + f.params.slideClass + '[data-swiper-slide-index="' + n + '"]').eq(0).index(), setTimeout(function() {
								f.slideTo(r)
							}, 0);
							else if(r < f.params.slidesPerView - 1) {
							f.fixLoop();
							var i = f.wrapper.children("." + f.params.slideClass + '[data-swiper-slide-index="' + n + '"]');
							r = i.eq(i.length - 1).index(), setTimeout(function() {
								f.slideTo(r)
							}, 0)
						} else f.slideTo(r);
						else f.slideTo(r)
					}
				};
				var v, g, y, w, x, b, T, C, S, E = "input, select, textarea, button",
					k = Date.now(),
					N = [];
				f.animating = !1, f.touches = {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				};
				var M;
				if(f.onTouchStart = function(e) {
						if(e.originalEvent && (e = e.originalEvent), (M = "touchstart" === e.type) || !("which" in e) || 3 !== e.which) {
							if(f.params.noSwiping && a(e, "." + f.params.noSwipingClass)) return void(f.allowClick = !0);
							if(!f.params.swipeHandler || a(e, f.params.swipeHandler)) {
								if(v = !0, g = !1, w = void 0, f.touches.startX = f.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touches.startY = f.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, y = Date.now(), f.allowClick = !0, f.updateContainerSize(), f.swipeDirection = void 0, f.params.threshold > 0 && (T = !1), "touchstart" !== e.type) {
									var t = !0;
									h(e.target).is(E) && (t = !1), document.activeElement && h(document.activeElement).is(E) && document.activeElement.blur(), t && e.preventDefault()
								}
								f.params.onTouchStart && f.params.onTouchStart(f, e)
							}
						}
					}, f.onTouchMove = function(e) {
						if(e.originalEvent && (e = e.originalEvent), !(M && "mousemove" === e.type || e.preventedByNestedSwiper)) {
							if(f.params.onlyExternal) return g = !0, void(f.allowClick = !1);
							if(M && document.activeElement && e.target === document.activeElement && h(e.target).is(E)) return g = !0, void(f.allowClick = !1);
							if(f.params.onTouchMove && f.params.onTouchMove(f, e), f.allowClick = !1, !(e.targetTouches && e.targetTouches.length > 1)) {
								if(f.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, void 0 === w) {
									var t = 180 * Math.atan2(Math.abs(f.touches.currentY - f.touches.startY), Math.abs(f.touches.currentX - f.touches.startX)) / Math.PI;
									w = r() ? t > f.params.touchAngle : 90 - t > f.params.touchAngle
								}
								if(w && f.params.onTouchMoveOpposite && f.params.onTouchMoveOpposite(f, e), v) {
									if(w) return void(v = !1);
									f.params.onSliderMove && f.params.onSliderMove(f, e), e.preventDefault(), f.params.touchMoveStopPropagation && !f.params.nested && e.stopPropagation(), g || (n.loop && f.fixLoop(), b = "cube" === f.params.effect ? (f.rtl ? -f.translate : f.translate) || 0 : f.getWrapperTranslate(), f.setWrapperTransition(0), f.animating && f.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), f.params.autoplay && f.autoplaying && (f.params.autoplayDisableOnInteraction ? f.stopAutoplay() : f.pauseAutoplay()), S = !1, f.params.grabCursor && (f.container[0].style.cursor = "move", f.container[0].style.cursor = "-webkit-grabbing", f.container[0].style.cursor = "-moz-grabbin", f.container[0].style.cursor = "grabbing")), g = !0;
									var i = f.touches.diff = r() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY;
									i *= f.params.touchRatio, f.rtl && (i = -i), f.swipeDirection = i > 0 ? "prev" : "next", x = i + b;
									var a = !0;
									if(i > 0 && x > f.minTranslate() ? (a = !1, f.params.resistance && (x = f.minTranslate() - 1 + Math.pow(-f.minTranslate() + b + i, f.params.resistanceRatio))) : 0 > i && x < f.maxTranslate() && (a = !1, f.params.resistance && (x = f.maxTranslate() + 1 - Math.pow(f.maxTranslate() - b - i, f.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !f.params.allowSwipeToNext && "next" === f.swipeDirection && b > x && (x = b), !f.params.allowSwipeToPrev && "prev" === f.swipeDirection && x > b && (x = b), f.params.followFinger) {
										if(f.params.threshold > 0) {
											if(!(Math.abs(i) > f.params.threshold || T)) return void(x = b);
											if(!T) return T = !0, f.touches.startX = f.touches.currentX, f.touches.startY = f.touches.currentY, x = b, void(f.touches.diff = r() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY)
										}(f.params.freeMode || f.params.watchSlidesProgress) && f.updateActiveIndex(), f.params.freeMode && (0 === N.length && N.push({
											position: f.touches[r() ? "startX" : "startY"],
											time: y
										}), N.push({
											position: f.touches[r() ? "currentX" : "currentY"],
											time: (new Date).getTime()
										})), f.updateProgress(x), f.setWrapperTranslate(x)
									}
								}
							}
						}
					}, f.onTouchEnd = function(e) {
						if(e.originalEvent && (e = e.originalEvent), f.params.onTouchEnd && f.params.onTouchEnd(f, e), v) {
							f.params.grabCursor && g && v && (f.container[0].style.cursor = "move", f.container[0].style.cursor = "-webkit-grab", f.container[0].style.cursor = "-moz-grab", f.container[0].style.cursor = "grab");
							var t = Date.now(),
								n = t - y;
							if(f.allowClick && (f.updateClickedSlide(e), f.params.onTap && f.params.onTap(f, e), 300 > n && t - k > 300 && (C && clearTimeout(C), C = setTimeout(function() {
									f && (f.params.paginationHide && f.paginationContainer.length > 0 && !h(e.target).hasClass(f.params.bulletClass) && f.paginationContainer.toggleClass(f.params.paginationHiddenClass), f.params.onClick && f.params.onClick(f, e))
								}, 300)), 300 > n && 300 > t - k && (C && clearTimeout(C), f.params.onDoubleTap && f.params.onDoubleTap(f, e))), k = Date.now(), setTimeout(function() {
									f && f.allowClick && (f.allowClick = !0)
								}, 0), !v || !g || !f.swipeDirection || 0 === f.touches.diff || x === b) return void(v = g = !1);
							v = g = !1;
							var r;
							if(r = f.params.followFinger ? f.rtl ? f.translate : -f.translate : -x, f.params.freeMode) {
								if(r < -f.minTranslate()) return void f.slideTo(f.activeIndex);
								if(r > -f.maxTranslate()) return void f.slideTo(f.slides.length - 1);
								if(f.params.freeModeMomentum) {
									if(N.length > 1) {
										var i = N.pop(),
											a = N.pop(),
											o = i.position - a.position,
											s = i.time - a.time;
										f.velocity = o / s, f.velocity = f.velocity / 2, Math.abs(f.velocity) < .02 && (f.velocity = 0), (s > 150 || (new Date).getTime() - i.time > 300) && (f.velocity = 0)
									} else f.velocity = 0;
									N.length = 0;
									var l = 1e3 * f.params.freeModeMomentumRatio,
										u = f.velocity * l,
										d = f.translate + u;
									f.rtl && (d = -d);
									var c, p = !1,
										m = 20 * Math.abs(f.velocity) * f.params.freeModeMomentumBounceRatio;
									d < f.maxTranslate() && (f.params.freeModeMomentumBounce ? (d + f.maxTranslate() < -m && (d = f.maxTranslate() - m), c = f.maxTranslate(), p = !0, S = !0) : d = f.maxTranslate()), d > f.minTranslate() && (f.params.freeModeMomentumBounce ? (d - f.minTranslate() > m && (d = f.minTranslate() + m), c = f.minTranslate(), p = !0, S = !0) : d = f.minTranslate()), 0 !== f.velocity && (l = Math.abs(f.rtl ? (-d - f.translate) / f.velocity : (d - f.translate) / f.velocity)), f.params.freeModeMomentumBounce && p ? (f.updateProgress(c), f.setWrapperTransition(l), f.setWrapperTranslate(d), f.onTransitionStart(), f.animating = !0, f.wrapper.transitionEnd(function() {
										S && (f.params.onMomentumBounce && f.params.onMomentumBounce(f), f.setWrapperTransition(f.params.speed), f.setWrapperTranslate(c), f.wrapper.transitionEnd(function() {
											f.onTransitionEnd()
										}))
									})) : f.velocity ? (f.updateProgress(d), f.setWrapperTransition(l), f.setWrapperTranslate(d), f.onTransitionStart(), f.animating || (f.animating = !0, f.wrapper.transitionEnd(function() {
										f.onTransitionEnd()
									}))) : f.updateProgress(d), f.updateActiveIndex()
								}
								return void((!f.params.freeModeMomentum || n >= f.params.longSwipesMs) && (f.updateProgress(), f.updateActiveIndex()))
							}
							var w, T = 0,
								E = f.slidesSizesGrid[0];
							for(w = 0; w < f.slidesGrid.length; w += f.params.slidesPerGroup) void 0 !== f.slidesGrid[w + f.params.slidesPerGroup] ? r >= f.slidesGrid[w] && r < f.slidesGrid[w + f.params.slidesPerGroup] && (T = w, E = f.slidesGrid[w + f.params.slidesPerGroup] - f.slidesGrid[w]) : r >= f.slidesGrid[w] && (T = w, E = f.slidesGrid[f.slidesGrid.length - 1] - f.slidesGrid[f.slidesGrid.length - 2]);
							var M = (r - f.slidesGrid[T]) / E;
							if(n > f.params.longSwipesMs) {
								if(!f.params.longSwipes) return void f.slideTo(f.activeIndex);
								"next" === f.swipeDirection && f.slideTo(M >= f.params.longSwipesRatio ? T + f.params.slidesPerGroup : T), "prev" === f.swipeDirection && f.slideTo(M > 1 - f.params.longSwipesRatio ? T + f.params.slidesPerGroup : T)
							} else {
								if(!f.params.shortSwipes) return void f.slideTo(f.activeIndex);
								"next" === f.swipeDirection && f.slideTo(T + f.params.slidesPerGroup), "prev" === f.swipeDirection && f.slideTo(T)
							}
						}
					}, f._slideTo = function(e, t) {
						return f.slideTo(e, t, !0, !0)
					}, f.slideTo = function(e, t, n, i) {
						void 0 === n && (n = !0), void 0 === e && (e = 0), 0 > e && (e = 0), f.snapIndex = Math.floor(e / f.params.slidesPerGroup), f.snapIndex >= f.snapGrid.length && (f.snapIndex = f.snapGrid.length - 1);
						var a = -f.snapGrid[f.snapIndex];
						f.params.autoplay && f.autoplaying && (i || !f.params.autoplayDisableOnInteraction ? f.pauseAutoplay(t) : f.stopAutoplay()), f.updateProgress(a);
						for(var o = 0; o < f.slidesGrid.length; o++) - a >= f.slidesGrid[o] && (e = o);
						return void 0 === t && (t = f.params.speed), f.previousIndex = f.activeIndex || 0, f.activeIndex = e, a === f.translate ? (f.updateClasses(), !1) : (f.onTransitionStart(n), r(), r(), 0 === t ? (f.setWrapperTransition(0), f.setWrapperTranslate(a), f.onTransitionEnd(n)) : (f.setWrapperTransition(t), f.setWrapperTranslate(a), f.animating || (f.animating = !0, f.wrapper.transitionEnd(function() {
							f.onTransitionEnd(n)
						}))), f.updateClasses(), !0)
					}, f.onTransitionStart = function(e) {
						void 0 === e && (e = !0), f.lazy && f.lazy.onTransitionStart(), e && (f.params.onTransitionStart && f.params.onTransitionStart(f), f.params.onSlideChangeStart && f.activeIndex !== f.previousIndex && f.params.onSlideChangeStart(f))
					}, f.onTransitionEnd = function(e) {
						f.animating = !1, f.setWrapperTransition(0), void 0 === e && (e = !0), f.lazy && f.lazy.onTransitionEnd(), e && (f.params.onTransitionEnd && f.params.onTransitionEnd(f), f.params.onSlideChangeEnd && f.activeIndex !== f.previousIndex && f.params.onSlideChangeEnd(f))
					}, f.slideNext = function(e, t, n) {
						return f.params.loop ? !f.animating && (f.fixLoop(), f.container[0].clientLeft, f.slideTo(f.activeIndex + f.params.slidesPerGroup, t, e, n)) : f.slideTo(f.activeIndex + f.params.slidesPerGroup, t, e, n)
					}, f._slideNext = function(e) {
						return f.slideNext(!0, e, !0)
					}, f.slidePrev = function(e, t, n) {
						return f.params.loop ? !f.animating && (f.fixLoop(), f.container[0].clientLeft, f.slideTo(f.activeIndex - 1, t, e, n)) : f.slideTo(f.activeIndex - 1, t, e, n)
					}, f._slidePrev = function(e) {
						return f.slidePrev(!0, e, !0)
					}, f.slideReset = function(e, t) {
						return f.slideTo(f.activeIndex, t, e)
					}, f.setWrapperTransition = function(e, t) {
						f.wrapper.transition(e), f.params.onSetTransition && f.params.onSetTransition(f, e), "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTransition(e), f.params.parallax && f.parallax && f.parallax.setTransition(e), f.params.scrollbar && f.scrollbar && f.scrollbar.setTransition(e), f.params.control && f.controller && f.controller.setTransition(e, t)
					}, f.setWrapperTranslate = function(e, t, n) {
						var i = 0,
							a = 0;
						r() ? i = f.rtl ? -e : e : a = e, f.wrapper.transform(f.support.transforms3d ? "translate3d(" + i + "px, " + a + "px, 0px)" : "translate(" + i + "px, " + a + "px)"), f.translate = r() ? i : a, t && f.updateActiveIndex(), "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTranslate(f.translate), f.params.parallax && f.parallax && f.parallax.setTranslate(f.translate), f.params.scrollbar && f.scrollbar && f.scrollbar.setTranslate(f.translate), f.params.control && f.controller && f.controller.setTranslate(f.translate, n), f.params.hashnav && f.hashnav && f.hashnav.setHash(), f.params.onSetTranslate && f.params.onSetTranslate(f, f.translate)
					}, f.getTranslate = function(e, t) {
						var n, r, i, a;
						return void 0 === t && (t = "x"), i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? a = new WebKitCSSMatrix("none" === i.webkitTransform ? "" : i.webkitTransform) : (a = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (r = window.WebKitCSSMatrix ? a.m41 : parseFloat(16 === n.length ? n[12] : n[4])), "y" === t && (r = window.WebKitCSSMatrix ? a.m42 : parseFloat(16 === n.length ? n[13] : n[5])), f.rtl && r && (r = -r), r || 0
					}, f.getWrapperTranslate = function(e) {
						return void 0 === e && (e = r() ? "x" : "y"), f.getTranslate(f.wrapper[0], e)
					}, f.observers = [], f.initObservers = function() {
						if(f.params.observeParents)
							for(var e = f.container.parents(), t = 0; t < e.length; t++) o(e[t]);
						o(f.container[0], {
							childList: !1
						}), o(f.wrapper[0], {
							attributes: !1
						})
					}, f.disconnectObservers = function() {
						for(var e = 0; e < f.observers.length; e++) f.observers[e].disconnect();
						f.observers = []
					}, f.createLoop = function() {
						f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass).remove();
						var e = f.wrapper.children("." + f.params.slideClass);
						f.loopedSlides = parseInt(f.params.loopedSlides || f.params.slidesPerView, 10), f.loopedSlides = f.loopedSlides + f.params.loopAdditionalSlides, f.loopedSlides > e.length && (f.loopedSlides = e.length);
						var t, n = [],
							r = [];
						for(e.each(function(t, i) {
								var a = h(this);
								t < f.loopedSlides && r.push(i), t < e.length && t >= e.length - f.loopedSlides && n.push(i), a.attr("data-swiper-slide-index", t)
							}), t = 0; t < r.length; t++) f.wrapper.append(h(r[t].cloneNode(!0)).addClass(f.params.slideDuplicateClass));
						for(t = n.length - 1; t >= 0; t--) f.wrapper.prepend(h(n[t].cloneNode(!0)).addClass(f.params.slideDuplicateClass))
					}, f.destroyLoop = function() {
						f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass).remove()
					}, f.fixLoop = function() {
						var e;
						f.activeIndex < f.loopedSlides ? (e = f.slides.length - 3 * f.loopedSlides + f.activeIndex, e += f.loopedSlides, f.slideTo(e, 0, !1, !0)) : ("auto" === f.params.slidesPerView && f.activeIndex >= 2 * f.loopedSlides || f.activeIndex > f.slides.length - 2 * f.params.slidesPerView) && (e = -f.slides.length + f.activeIndex + f.loopedSlides, e += f.loopedSlides, f.slideTo(e, 0, !1, !0))
					}, f.appendSlide = function(e) {
						if(f.params.loop && f.destroyLoop(), "object" == typeof e && e.length)
							for(var t = 0; t < e.length; t++) e[t] && f.wrapper.append(e[t]);
						else f.wrapper.append(e);
						f.params.loop && f.createLoop(), f.params.observer && f.support.observer || f.update(!0)
					}, f.prependSlide = function(e) {
						f.params.loop && f.destroyLoop();
						var t = f.activeIndex + 1;
						if("object" == typeof e && e.length) {
							for(var n = 0; n < e.length; n++) e[n] && f.wrapper.prepend(e[n]);
							t = f.activeIndex + e.length
						} else f.wrapper.prepend(e);
						f.params.loop && f.createLoop(), f.params.observer && f.support.observer || f.update(!0), f.slideTo(t, 0, !1)
					}, f.removeSlide = function(e) {
						f.params.loop && f.destroyLoop();
						var t, n = f.activeIndex;
						if("object" == typeof e && e.length) {
							for(var r = 0; r < e.length; r++) t = e[r], f.slides[t] && f.slides.eq(t).remove(), n > t && n--;
							n = Math.max(n, 0)
						} else t = e, f.slides[t] && f.slides.eq(t).remove(), n > t && n--, n = Math.max(n, 0);
						f.params.observer && f.support.observer || f.update(!0), f.slideTo(n, 0, !1)
					}, f.removeAllSlides = function() {
						for(var e = [], t = 0; t < f.slides.length; t++) e.push(t);
						f.removeSlide(e)
					}, f.effects = {
						fade: {
							setTranslate: function() {
								for(var e = 0; e < f.slides.length; e++) {
									var t = f.slides.eq(e),
										n = t[0].swiperSlideOffset,
										i = -n - f.translate,
										a = 0;
									r() || (a = i, i = 0);
									var o = f.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
									t.css({
										opacity: o
									}).transform("translate3d(" + i + "px, " + a + "px, 0px)")
								}
							},
							setTransition: function(e) {
								f.slides.transition(e)
							}
						},
						cube: {
							setTranslate: function() {
								var e, t = 0;
								f.params.cube.shadow && (r() ? (e = f.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = h('<div class="swiper-cube-shadow"></div>'), f.wrapper.append(e)), e.css({
									height: f.width + "px"
								})) : (e = f.container.find(".swiper-cube-shadow"), 0 === e.length && (e = h('<div class="swiper-cube-shadow"></div>'), f.container.append(e))));
								for(var n = 0; n < f.slides.length; n++) {
									var i = f.slides.eq(n),
										a = 90 * n,
										o = Math.floor(a / 360);
									f.rtl && (a = -a, o = Math.floor(-a / 360));
									var s = Math.max(Math.min(i[0].progress, 1), -1),
										l = 0,
										u = 0,
										d = 0;
									n % 4 == 0 ? (l = 4 * -o * f.size, d = 0) : (n - 1) % 4 == 0 ? (l = 0, d = 4 * -o * f.size) : (n - 2) % 4 == 0 ? (l = f.size + 4 * o * f.size, d = f.size) : (n - 3) % 4 == 0 && (l = -f.size, d = 3 * f.size + 4 * f.size * o), f.rtl && (l = -l), r() || (u = l, l = 0);
									var c = "rotateX(" + (r() ? 0 : -a) + "deg) rotateY(" + (r() ? a : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + d + "px)";
									if(1 >= s && s > -1 && (t = 90 * n + 90 * s, f.rtl && (t = 90 * -n - 90 * s)), i.transform(c), f.params.cube.slideShadows) {
										var p = i.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
											m = i.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
										0 === p.length && (p = h('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), i.append(p)), 0 === m.length && (m = h('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), i.append(m)), i[0].progress, p.length && (p[0].style.opacity = -i[0].progress), m.length && (m[0].style.opacity = i[0].progress)
									}
								}
								if(f.wrapper.css({
										"-webkit-transform-origin": "50% 50% -" + f.size / 2 + "px",
										"-moz-transform-origin": "50% 50% -" + f.size / 2 + "px",
										"-ms-transform-origin": "50% 50% -" + f.size / 2 + "px",
										"transform-origin": "50% 50% -" + f.size / 2 + "px"
									}), f.params.cube.shadow)
									if(r()) e.transform("translate3d(0px, " + (f.width / 2 + f.params.cube.shadowOffset) + "px, " + -f.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + f.params.cube.shadowScale + ")");
									else {
										var v = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
											g = 1.5 - (Math.sin(2 * v * Math.PI / 360) / 2 + Math.cos(2 * v * Math.PI / 360) / 2),
											y = f.params.cube.shadowScale,
											w = f.params.cube.shadowScale / g,
											x = f.params.cube.shadowOffset;
										e.transform("scale3d(" + y + ", 1, " + w + ") translate3d(0px, " + (f.height / 2 + x) + "px, " + -f.height / 2 / w + "px) rotateX(-90deg)")
									}
								var b = f.isSafari || f.isUiWebView ? -f.size / 2 : 0;
								f.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (r() ? 0 : t) + "deg) rotateY(" + (r() ? -t : 0) + "deg)")
							},
							setTransition: function(e) {
								f.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), f.params.cube.shadow && !r() && f.container.find(".swiper-cube-shadow").transition(e)
							}
						},
						coverflow: {
							setTranslate: function() {
								for(var e = f.translate, t = r() ? -e + f.width / 2 : -e + f.height / 2, n = r() ? f.params.coverflow.rotate : -f.params.coverflow.rotate, i = f.params.coverflow.depth, a = 0, o = f.slides.length; o > a; a++) {
									var s = f.slides.eq(a),
										l = f.slidesSizesGrid[a],
										u = s[0].swiperSlideOffset,
										d = (t - u - l / 2) / l * f.params.coverflow.modifier,
										c = r() ? n * d : 0,
										p = r() ? 0 : n * d,
										m = -i * Math.abs(d),
										v = r() ? 0 : f.params.coverflow.stretch * d,
										g = r() ? f.params.coverflow.stretch * d : 0;
									Math.abs(g) < .001 && (g = 0), Math.abs(v) < .001 && (v = 0), Math.abs(m) < .001 && (m = 0), Math.abs(c) < .001 && (c = 0), Math.abs(p) < .001 && (p = 0);
									var y = "translate3d(" + g + "px," + v + "px," + m + "px)  rotateX(" + p + "deg) rotateY(" + c + "deg)";
									if(s.transform(y), s[0].style.zIndex = 1 - Math.abs(Math.round(d)), f.params.coverflow.slideShadows) {
										var w = s.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
											x = s.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
										0 === w.length && (w = h('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), s.append(w)), 0 === x.length && (x = h('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), s.append(x)), w.length && (w[0].style.opacity = d > 0 ? d : 0), x.length && (x[0].style.opacity = -d > 0 ? -d : 0)
									}
								}
								if(window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
									f.wrapper.style.perspectiveOrigin = t + "px 50%"
								}
							},
							setTransition: function(e) {
								f.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
							}
						}
					}, f.lazy = {
						initialImageLoaded: !1,
						loadImageInSlide: function(e) {
							if(void 0 !== e && 0 !== f.slides.length) {
								var t = f.slides.eq(e),
									n = t.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
								0 !== n.length && n.each(function() {
									var e = h(this);
									e.addClass("swiper-lazy-loading");
									var n = e.attr("data-src");
									f.loadImage(e[0], n, !1, function() {
										e.attr("src", n), e.removeAttr("data-src"), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), t.find(".swiper-lazy-preloader, .preloader").remove(), f.params.onLazyImageLoaded && f.params.onLazyImageLoaded(f, t[0], e[0])
									}), f.params.onLazyImageLoad && f.params.onLazyImageLoad(f, t[0], e[0])
								})
							}
						},
						load: function() {
							if(f.params.watchSlidesVisibility) f.wrapper.children("." + f.params.slideVisibleClass).each(function() {
								f.lazy.loadImageInSlide(h(this).index())
							});
							else if(f.params.slidesPerView > 1)
								for(var e = f.activeIndex; e < f.activeIndex + f.params.slidesPerView; e++) f.slides[e] && f.lazy.loadImageInSlide(e);
							else f.lazy.loadImageInSlide(f.activeIndex);
							if(f.params.lazyLoadingInPrevNext) {
								var t = f.wrapper.children("." + f.params.slideNextClass);
								t.length > 0 && f.lazy.loadImageInSlide(t.index());
								var n = f.wrapper.children("." + f.params.slidePrevClass);
								n.length > 0 && f.loadImageInSlide(n.index())
							}
						},
						onTransitionStart: function() {
							f.params.lazyLoading && (f.params.lazyLoadingOnTransitionStart || !f.params.lazyLoadingOnTransitionStart && !f.lazy.initialImageLoaded) && (f.lazy.initialImageLoaded = !0, f.lazy.load())
						},
						onTransitionEnd: function() {
							f.params.lazyLoading && !f.params.lazyLoadingOnTransitionStart && f.lazy.load()
						}
					}, f.scrollbar = {
						set: function() {
							if(f.params.scrollbar) {
								var e = f.scrollbar;
								e.track = h(f.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = h('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = f.size / f.virtualWidth, e.moveDivider = e.divider * (e.trackSize / f.size), e.dragSize = e.trackSize * e.divider, r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", f.params.scrollbarHide && (e.track[0].style.opacity = 0)
							}
						},
						setTranslate: function() {
							if(f.params.scrollbar) {
								var e, t = f.scrollbar,
									n = (f.translate, t.dragSize);
								e = (t.trackSize - t.dragSize) * f.progress, f.rtl && r() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), r() ? (t.drag.transform("translate3d(" + e + "px, 0, 0)"), t.drag[0].style.width = n + "px") : (t.drag.transform("translate3d(0px, " + e + "px, 0)"), t.drag[0].style.height = n + "px"), f.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
									t.track[0].style.opacity = 0, t.track.transition(400)
								}, 1e3))
							}
						},
						setTransition: function(e) {
							f.params.scrollbar && f.scrollbar.drag.transition(e)
						}
					}, f.controller = {
						setTranslate: function(e, t) {
							var n, r, i = f.params.control;
							if(f.isArray(i))
								for(var a = 0; a < i.length; a++) i[a] !== t && i[a] instanceof Swiper && (e = i[a].rtl && "horizontal" === i[a].params.direction ? -f.translate : f.translate, n = (i[a].maxTranslate() - i[a].minTranslate()) / (f.maxTranslate() - f.minTranslate()), r = (e - f.minTranslate()) * n + i[a].minTranslate(), f.params.controlInverse && (r = i[a].maxTranslate() - r), i[a].updateProgress(r), i[a].setWrapperTranslate(r, !1, f), i[a].updateActiveIndex());
							else i instanceof Swiper && t !== i && (e = i.rtl && "horizontal" === i.params.direction ? -f.translate : f.translate, n = (i.maxTranslate() - i.minTranslate()) / (f.maxTranslate() - f.minTranslate()), r = (e - f.minTranslate()) * n + i.minTranslate(), f.params.controlInverse && (r = i.maxTranslate() - r), i.updateProgress(r), i.setWrapperTranslate(r, !1, f), i.updateActiveIndex())
						},
						setTransition: function(e, t) {
							var n = f.params.control;
							if(f.isArray(n))
								for(var r = 0; r < n.length; r++) n[r] !== t && n[r] instanceof Swiper && n[r].setWrapperTransition(e, f);
							else n instanceof Swiper && t !== n && n.setWrapperTransition(e, f)
						}
					}, f.hashnav = {
						init: function() {
							if(f.params.hashnav) {
								f.hashnav.initialized = !0;
								var e = document.location.hash.replace("#", "");
								if(e)
									for(var t = 0, n = f.slides.length; n > t; t++) {
										var r = f.slides.eq(t),
											i = r.attr("data-hash");
										if(i === e && !r.hasClass(f.params.slideDuplicateClass)) {
											var a = r.index();
											f.slideTo(a, 0, f.params.runCallbacksOnInit, !0)
										}
									}
							}
						},
						setHash: function() {
							f.hashnav.initialized && f.params.hashnav && (document.location.hash = f.slides.eq(f.activeIndex).attr("data-hash") || "")
						}
					}, f.disableKeyboardControl = function() {
						h(document).off("keydown", s)
					}, f.enableKeyboardControl = function() {
						h(document).on("keydown", s)
					}, f._wheelEvent = !1, f._lastWheelScrollTime = (new Date).getTime(), f.params.mousewheelControl) {
					if(void 0 !== document.onmousewheel && (f._wheelEvent = "mousewheel"), !f._wheelEvent) try {
						new WheelEvent("wheel"), f._wheelEvent = "wheel"
					} catch(e) {}
					f._wheelEvent || (f._wheelEvent = "DOMMouseScroll")
				}
				return f.disableMousewheelControl = function() {
					return !!f._wheelEvent && (f.container.off(f._wheelEvent, l), !0)
				}, f.enableMousewheelControl = function() {
					return !!f._wheelEvent && (f.container.on(f._wheelEvent, l), !0)
				}, f.parallax = {
					setTranslate: function() {
						f.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
							u(this, f.progress)
						}), f.slides.each(function() {
							var e = h(this);
							e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
								u(this, Math.min(Math.max(e[0].progress, -1), 1))
							})
						})
					},
					setTransition: function(e) {
						void 0 === e && (e = f.params.speed), f.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
							var t = h(this),
								n = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
							0 === e && (n = 0), t.transition(n)
						})
					}
				}, f.init = function() {
					f.params.loop && f.createLoop(), f.updateContainerSize(), f.updateSlidesSize(), f.updatePagination(), f.params.scrollbar && f.scrollbar && f.scrollbar.set(), "slide" !== f.params.effect && f.effects[f.params.effect] && (f.params.loop || f.updateProgress(), f.effects[f.params.effect].setTranslate()), f.params.loop ? f.slideTo(f.params.initialSlide + f.loopedSlides, 0, f.params.runCallbacksOnInit) : (f.slideTo(f.params.initialSlide, 0, f.params.runCallbacksOnInit), 0 === f.params.initialSlide && (f.parallax && f.params.parallax && f.parallax.setTranslate(), f.lazy && f.params.lazyLoading && f.lazy.load())), f.attachEvents(), f.params.observer && f.support.observer && f.initObservers(), f.params.preloadImages && !f.params.lazyLoading && f.preloadImages(), f.params.autoplay && f.startAutoplay(), f.params.keyboardControl && f.enableKeyboardControl && f.enableKeyboardControl(), f.params.mousewheelControl && f.enableMousewheelControl && f.enableMousewheelControl(), f.params.hashnav && f.hashnav && f.hashnav.init(), f.params.onInit && f.params.onInit(f)
				}, f.destroy = function(e) {
					f.detachEvents(), f.disconnectObservers(), f.params.keyboardControl && f.disableKeyboardControl && f.disableKeyboardControl(), f.params.mousewheelControl && f.disableMousewheelControl && f.disableMousewheelControl(), f.params.onDestroy && f.params.onDestroy(), !1 !== e && (f = null)
				}, f.init(), f
			}
		}, Swiper.prototype = {
			isSafari: function() {
				var e = navigator.userAgent.toLowerCase();
				return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
			}(),
			isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
			isArray: function(e) {
				return "[object Array]" === Object.prototype.toString.apply(e)
			},
			browser: {
				ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled
			},
			device: function() {
				var e = navigator.userAgent,
					t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
					n = e.match(/(iPad).*OS\s([\d_]+)/),
					r = (e.match(/(iPod)(.*OS\s([\d_]+))?/), !n && e.match(/(iPhone\sOS)\s([\d_]+)/));
				return {
					ios: n || r || n,
					android: t
				}
			}(),
			support: {
				touch: window.Modernizr && !0 === Modernizr.touch || function() {
					return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
				}(),
				transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
					var e = document.createElement("div").style;
					return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
				}(),
				flexbox: function() {
					for(var e = document.createElement("div").style, t = "WebkitBox msFlexbox MsFlexbox WebkitFlex MozBox flex".split(" "), n = 0; n < t.length; n++)
						if(t[n] in e) return !0
				}(),
				observer: function() {
					return "MutationObserver" in window || "WebkitMutationObserver" in window
				}()
			}
		};
		for(var e = (function() {
				var e = function(e) {
						var t = this,
							n = 0;
						for(n = 0; n < e.length; n++) t[n] = e[n];
						return t.length = e.length, this
					},
					t = function(t, n) {
						var r = [],
							i = 0;
						if(t && !n && t instanceof e) return t;
						if(t)
							if("string" == typeof t) {
								var a, o, s = t.trim();
								if(s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
									var l = "div";
									for(0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), (0 === s.indexOf("<td") || 0 === s.indexOf("<th")) && (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select"), o = document.createElement(l), o.innerHTML = t, i = 0; i < o.childNodes.length; i++) r.push(o.childNodes[i])
								} else
									for(a = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], i = 0; i < a.length; i++) a[i] && r.push(a[i])
							} else if(t.nodeType || t === window || t === document) r.push(t);
						else if(t.length > 0 && t[0].nodeType)
							for(i = 0; i < t.length; i++) r.push(t[i]);
						return new e(r)
					};
				return e.prototype = {
					addClass: function(e) {
						if(void 0 === e) return this;
						for(var t = e.split(" "), n = 0; n < t.length; n++)
							for(var r = 0; r < this.length; r++) this[r].classList.add(t[n]);
						return this
					},
					removeClass: function(e) {
						for(var t = e.split(" "), n = 0; n < t.length; n++)
							for(var r = 0; r < this.length; r++) this[r].classList.remove(t[n]);
						return this
					},
					hasClass: function(e) {
						return !!this[0] && this[0].classList.contains(e)
					},
					toggleClass: function(e) {
						for(var t = e.split(" "), n = 0; n < t.length; n++)
							for(var r = 0; r < this.length; r++) this[r].classList.toggle(t[n]);
						return this
					},
					attr: function(e, t) {
						if(1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
						for(var n = 0; n < this.length; n++)
							if(2 === arguments.length) this[n].setAttribute(e, t);
							else
								for(var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
						return this
					},
					removeAttr: function(e) {
						for(var t = 0; t < this.length; t++) this[t].removeAttribute(e)
					},
					data: function(e, t) {
						if(void 0 !== t) {
							for(var n = 0; n < this.length; n++) {
								var r = this[n];
								r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = t
							}
							return this
						}
						if(this[0]) {
							var i = this[0].getAttribute("data-" + e);
							return i || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
						}
					},
					transform: function(e) {
						for(var t = 0; t < this.length; t++) {
							var n = this[t].style;
							n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
						}
						return this
					},
					transition: function(e) {
						"string" != typeof e && (e += "ms");
						for(var t = 0; t < this.length; t++) {
							var n = this[t].style;
							n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
						}
						return this
					},
					on: function(e, n, r, i) {
						function a(e) {
							var i = e.target;
							if(t(i).is(n)) r.call(i, e);
							else
								for(var a = t(i).parents(), o = 0; o < a.length; o++) t(a[o]).is(n) && r.call(a[o], e)
						}
						var o, s, l = e.split(" ");
						for(o = 0; o < this.length; o++)
							if("function" == typeof n || !1 === n)
								for("function" == typeof n && (r = arguments[1], i = arguments[2] || !1), s = 0; s < l.length; s++) this[o].addEventListener(l[s], r, i);
							else
								for(s = 0; s < l.length; s++) this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []), this[o].dom7LiveListeners.push({
									listener: r,
									liveListener: a
								}), this[o].addEventListener(l[s], a, i);
						return this
					},
					off: function(e, t, n, r) {
						for(var i = e.split(" "), a = 0; a < i.length; a++)
							for(var o = 0; o < this.length; o++)
								if("function" == typeof t || !1 === t) "function" == typeof t && (n = arguments[1], r = arguments[2] || !1), this[o].removeEventListener(i[a], n, r);
								else if(this[o].dom7LiveListeners)
							for(var s = 0; s < this[o].dom7LiveListeners.length; s++) this[o].dom7LiveListeners[s].listener === n && this[o].removeEventListener(i[a], this[o].dom7LiveListeners[s].liveListener, r);
						return this
					},
					once: function(e, t, n, r) {
						function i(o) {
							n(o), a.off(e, t, i, r)
						}
						var a = this;
						"function" == typeof t && (t = !1, n = arguments[1], r = arguments[2]), a.on(e, t, i, r)
					},
					trigger: function(e, t) {
						for(var n = 0; n < this.length; n++) {
							var r;
							try {
								r = new CustomEvent(e, {
									detail: t,
									bubbles: !0,
									cancelable: !0
								})
							} catch(n) {
								r = document.createEvent("Event"), r.initEvent(e, !0, !0), r.detail = t
							}
							this[n].dispatchEvent(r)
						}
						return this
					},
					transitionEnd: function(e) {
						function t(a) {
							if(a.target === this)
								for(e.call(this, a), n = 0; n < r.length; n++) i.off(r[n], t)
						}
						var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
							i = this;
						if(e)
							for(n = 0; n < r.length; n++) i.on(r[n], t);
						return this
					},
					width: function() {
						return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
					},
					outerWidth: function(e) {
						return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
					},
					height: function() {
						return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
					},
					outerHeight: function(e) {
						return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
					},
					offset: function() {
						if(this.length > 0) {
							var e = this[0],
								t = e.getBoundingClientRect(),
								n = document.body,
								r = e.clientTop || n.clientTop || 0,
								i = e.clientLeft || n.clientLeft || 0,
								a = window.pageYOffset || e.scrollTop,
								o = window.pageXOffset || e.scrollLeft;
							return {
								top: t.top + a - r,
								left: t.left + o - i
							}
						}
						return null
					},
					css: function(e, t) {
						var n;
						if(1 === arguments.length) {
							if("string" != typeof e) {
								for(n = 0; n < this.length; n++)
									for(var r in e) this[n].style[r] = e[r];
								return this
							}
							if(this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
						}
						if(2 === arguments.length && "string" == typeof e) {
							for(n = 0; n < this.length; n++) this[n].style[e] = t;
							return this
						}
						return this
					},
					each: function(e) {
						for(var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
						return this
					},
					html: function(e) {
						if(void 0 === e) return this[0] ? this[0].innerHTML : void 0;
						for(var t = 0; t < this.length; t++) this[t].innerHTML = e;
						return this
					},
					is: function(n) {
						if(!this[0]) return !1;
						var r, i;
						if("string" == typeof n) {
							var a = this[0];
							if(a === document) return n === document;
							if(a === window) return n === window;
							if(a.matches) return a.matches(n);
							if(a.webkitMatchesSelector) return a.webkitMatchesSelector(n);
							if(a.mozMatchesSelector) return a.mozMatchesSelector(n);
							if(a.msMatchesSelector) return a.msMatchesSelector(n);
							for(r = t(n), i = 0; i < r.length; i++)
								if(r[i] === this[0]) return !0;
							return !1
						}
						if(n === document) return this[0] === document;
						if(n === window) return this[0] === window;
						if(n.nodeType || n instanceof e) {
							for(r = n.nodeType ? [n] : n, i = 0; i < r.length; i++)
								if(r[i] === this[0]) return !0;
							return !1
						}
						return !1
					},
					index: function() {
						if(this[0]) {
							for(var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
							return t
						}
					},
					eq: function(t) {
						if(void 0 === t) return this;
						var n, r = this.length;
						return t > r - 1 ? new e([]) : 0 > t ? (n = r + t, new e(0 > n ? [] : [this[n]])) : new e([this[t]])
					},
					append: function(t) {
						var n, r;
						for(n = 0; n < this.length; n++)
							if("string" == typeof t) {
								var i = document.createElement("div");
								for(i.innerHTML = t; i.firstChild;) this[n].appendChild(i.firstChild)
							} else if(t instanceof e)
							for(r = 0; r < t.length; r++) this[n].appendChild(t[r]);
						else this[n].appendChild(t);
						return this
					},
					prepend: function(t) {
						var n, r;
						for(n = 0; n < this.length; n++)
							if("string" == typeof t) {
								var i = document.createElement("div");
								for(i.innerHTML = t, r = i.childNodes.length - 1; r >= 0; r--) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
							} else if(t instanceof e)
							for(r = 0; r < t.length; r++) this[n].insertBefore(t[r], this[n].childNodes[0]);
						else this[n].insertBefore(t, this[n].childNodes[0]);
						return this
					},
					insertBefore: function(e) {
						for(var n = t(e), r = 0; r < this.length; r++)
							if(1 === n.length) n[0].parentNode.insertBefore(this[r], n[0]);
							else if(n.length > 1)
							for(var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i])
					},
					insertAfter: function(e) {
						for(var n = t(e), r = 0; r < this.length; r++)
							if(1 === n.length) n[0].parentNode.insertBefore(this[r], n[0].nextSibling);
							else if(n.length > 1)
							for(var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i].nextSibling)
					},
					next: function(n) {
						return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
					},
					nextAll: function(n) {
						var r = [],
							i = this[0];
						if(!i) return new e([]);
						for(; i.nextElementSibling;) {
							var a = i.nextElementSibling;
							n ? t(a).is(n) && r.push(a) : r.push(a), i = a
						}
						return new e(r)
					},
					prev: function(n) {
						return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
					},
					prevAll: function(n) {
						var r = [],
							i = this[0];
						if(!i) return new e([]);
						for(; i.previousElementSibling;) {
							var a = i.previousElementSibling;
							n ? t(a).is(n) && r.push(a) : r.push(a), i = a
						}
						return new e(r)
					},
					parent: function(e) {
						for(var n = [], r = 0; r < this.length; r++) e ? t(this[r].parentNode).is(e) && n.push(this[r].parentNode) : n.push(this[r].parentNode);
						return t(t.unique(n))
					},
					parents: function(e) {
						for(var n = [], r = 0; r < this.length; r++)
							for(var i = this[r].parentNode; i;) e ? t(i).is(e) && n.push(i) : n.push(i), i = i.parentNode;
						return t(t.unique(n))
					},
					find: function(t) {
						for(var n = [], r = 0; r < this.length; r++)
							for(var i = this[r].querySelectorAll(t), a = 0; a < i.length; a++) n.push(i[a]);
						return new e(n)
					},
					children: function(n) {
						for(var r = [], i = 0; i < this.length; i++)
							for(var a = this[i].childNodes, o = 0; o < a.length; o++) n ? 1 === a[o].nodeType && t(a[o]).is(n) && r.push(a[o]) : 1 === a[o].nodeType && r.push(a[o]);
						return new e(t.unique(r))
					},
					remove: function() {
						for(var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
						return this
					},
					add: function() {
						var e, n, r = this;
						for(e = 0; e < arguments.length; e++) {
							var i = t(arguments[e]);
							for(n = 0; n < i.length; n++) r[r.length] = i[n], r.length++
						}
						return r
					}
				}, t.fn = e.prototype, t.unique = function(e) {
					for(var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
					return t
				}, t
			}()), t = ["jQuery", "Zepto", "Dom7"], n = 0; n < t.length; n++) window[t[n]] && function(e) {
			e.fn.swiper = function(t) {
				var n;
				return e(this).each(function() {
					var e = new Swiper(this, t);
					n || (n = e)
				}), n
			}
		}(window[t[n]]);
		var r;
		(r = void 0 === e ? window.Dom7 || window.Zepto || window.jQuery : e) && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function(e) {
			function t(a) {
				if(a.target === this)
					for(e.call(this, a), n = 0; n < r.length; n++) i.off(r[n], t)
			}
			var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
				i = this;
			if(e)
				for(n = 0; n < r.length; n++) i.on(r[n], t);
			return this
		}), "transform" in r.fn || (r.fn.transform = function(e) {
			for(var t = 0; t < this.length; t++) {
				var n = this[t].style;
				n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
			}
			return this
		}), "transition" in r.fn || (r.fn.transition = function(e) {
			"string" != typeof e && (e += "ms");
			for(var t = 0; t < this.length; t++) {
				var n = this[t].style;
				n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
			}
			return this
		}))
	}(), e.exports = Swiper
}, , function(e, t) {}, function(e, t) {}, , , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(9),
		i = (n.n(r), n(1)),
		a = (n.n(i), n(8)),
		o = (n.n(a), n(3)),
		s = (n.n(o), n(6)),
		l = (n.n(s), n(2));
	 l("#toApp").on("click", function() {
		l("#myApp").show(), l("body").css("overflow", "hidden")
	}), l("#isSafari").on("click", function() {
		if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) return !!confirm("您的操作系统不支持exe文件确认下载吗?")
	}), l("#close").on("click", function() {
		l("#myApp").hide(), l("body").css("overflow", "scroll")
	}), l("#toWx").on("click", function() {
		l("#myWx").show(), l("body").css("overflow", "hidden")
	}), l("#wxClose").on("click", function() {
		l("#myWx").hide(), l("body").css("overflow", "scroll")
	}), l("#toAli").on("click", function() {
		l("#myAli").show(), l("body").css("overflow", "hidden")
	}), l("#aliClose").on("click", function() {
		l("#myAli").hide(), l("body").css("overflow", "scroll")
	}), l("#toLit").on("click", function() {
		l("#myLit").show(), l("body").css("overflow", "hidden")
	}), l("#litClose").on("click", function() {
		l("#myLit").hide(), l("body").css("overflow", "scroll")
	}), l("#toEmail").on("click", function() {
		l("#myEmail").show(), l("body").css("overflow", "hidden")
	}), l("#emClose").on("click", function() {
		l("#myEmail").hide(), l("body").css("overflow", "scroll")
	}), window.onload = function() {
		navigator.userAgent.indexOf("Safari") > -1 && (l("#myCloud").mouseenter(function() {
			l("#myCloud .mask").show()
		}), l("#myCloud").mouseleave(function() {
			l("#myCloud .mask").hide()
		}), l("#count").mouseenter(function() {
			l("#count .mask").show()
		}), l("#count").mouseleave(function() {
			l("#count .mask").hide()
		}));
		var e = new Swiper(".swiper-container1", {
				loop: !0,
				autoplay: 3e3,
				autoplayDisableOnInteraction: !0,
				autoHeight: !0,
				pagination: ".swiper-p1",
				paginationType: "fraction",
				paginationClickable: !0,
				prevButton: ".swiper-button-prev",
				nextButton: ".swiper-button-next",
				zoom: !0,
				zoomMin: 2
			}),
			t = (new Swiper(".swiper-container2", {
				loop: !0,
				autoplay: 3e3,
				autoplayDisableOnInteraction: !0,
				autoHeight: !0,
				pagination: ".swiper-p2",
				paginationType: "fraction",
				paginationClickable: !0
			}), document.getElementById("loop"));
		t.onmouseenter = function() {
			e.stopAutoplay()
		}, t.onmouseleave = function() {
			e.startAutoplay()
		}
	}
}], [14]);
//# sourceMappingURL=index.js.map