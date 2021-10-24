/*! For license information please see Grammarly.js.LICENSE.txt */
var t,
    e,
    n,
    r,
    i = {
        57238: (t, e, n) => {
            var r = n(65747),
                i = "chrome-extension://__MSG_@@extension_id__/",
                o = "moz-extension://__MSG_@@extension_id__/",
                s = "safari-web-extension://__MSG_@@extension_id__/",
                a = self.GR_RESOURCE_ROOT || i,
                u = self.GR_RESOURCE_ROOT || o,
                c = self.GR_RESOURCE_ROOT || s;
            t.exports = {
                __css: r.toString().replace(new RegExp(i, "g"), a).replace(new RegExp(o, "g"), u).replace(new RegExp(s, "g"), c),
                ...r.locals
            }
        },
        3103: (t, e, n) => {
            function r(t) {
                const e = [];
                let n;
                for (; !(n = t.next()).done;)
                    e.push(n.value);
                return e
            }
            function i(t, e) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            function o(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
            n.d(e, {
                f: () => c
            });
            const s = function() {
                    const t = Object.prototype.toString;
                    return "[object Arguments]" === t.call(arguments) ? function(e) {
                        return "[object Arguments]" === t.call(e)
                    } : function(t) {
                        return i("callee", t)
                    }
                }(),
                a = function() {
                    const t = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        e = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                        n = function() {
                            return arguments.propertyIsEnumerable("length")
                        }(),
                        r = function(t, e) {
                            for (var n = 0; n < t.length;) {
                                if (t[n] === e)
                                    return !0;
                                n += 1
                            }
                            return !1
                        };
                    return "function" != typeof Object.keys || n ? function(o) {
                        if (Object(o) !== o)
                            return [];
                        let a,
                            u;
                        const c = [],
                            l = n && s(o);
                        for (a in o)
                            !i(a, o) || l && "length" === a || (c[c.length] = a);
                        if (t)
                            for (u = e.length - 1; u >= 0;)
                                a = e[u],
                                i(a, o) && !r(c, a) && (c[c.length] = a),
                                u -= 1;
                        return c
                    } : function(t) {
                        return Object(t) !== t ? [] : Object.keys(t)
                    }
                }();
            function u(t) {
                return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1)
            }
            function c(t, e, n=[], s=[]) {
                if (o(t, e))
                    return !0;
                if (u(t) !== u(e))
                    return !1;
                if (null == t || null == e)
                    return !1;
                if ("function" == typeof t.equals || "function" == typeof e.equals)
                    return "function" == typeof t.equals && t.equals(e) && "function" == typeof e.equals && e.equals(t);
                switch (u(t)) {
                case "Arguments":
                case "Array":
                case "Object":
                    if ("function" == typeof t.constructor && "Promise" === function(t) {
                        const e = String(t).match(/^function (\w*)/);
                        return null == e ? "" : e[1]
                    }(t.constructor))
                        return t === e;
                    break;
                case "Boolean":
                case "Number":
                case "String":
                    if (typeof t != typeof e || !o(t.valueOf(), e.valueOf()))
                        return !1;
                    break;
                case "Date":
                    if (!o(t.valueOf(), e.valueOf()))
                        return !1;
                    break;
                case "Error":
                    return t.name === e.name && t.message === e.message;
                case "RegExp":
                    if (t.source !== e.source || t.global !== e.global || t.ignoreCase !== e.ignoreCase || t.multiline !== e.multiline || t.sticky !== e.sticky || t.unicode !== e.unicode)
                        return !1;
                    break;
                case "Map":
                case "Set":
                    if (!c(r(t.entries()), r(e.entries()), n, s))
                        return !1;
                    break;
                case "Int8Array":
                case "Uint8Array":
                case "Uint8ClampedArray":
                case "Int16Array":
                case "Uint16Array":
                case "Int32Array":
                case "Uint32Array":
                case "Float32Array":
                case "Float64Array":
                case "ArrayBuffer":
                    break;
                default:
                    return !1
                }
                const l = a(t);
                if (l.length !== a(e).length)
                    return !1;
                let f = n.length - 1;
                for (; f >= 0;) {
                    if (n[f] === t)
                        return s[f] === e;
                    f -= 1
                }
                for (n.push(t), s.push(e), f = l.length - 1; f >= 0;) {
                    const r = l[f];
                    if (!i(r, e) || !c(e[r], t[r], n, s))
                        return !1;
                    f -= 1
                }
                return n.pop(), s.pop(), !0
            }
        },
        84837: (t, e, n) => {
            n.d(e, {
                cc: () => p,
                cn: () => g
            });
            var r,
                i = n(20817),
                o = n(87871),
                s = n(95300),
                a = n(14601),
                u = n(2844),
                c = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e)
                            e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e),
                    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                l = function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                        t += arguments[e].length;
                    var r = Array(t),
                        i = 0;
                    for (e = 0; e < n; e++)
                        for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++)
                            r[i] = o[s];
                    return r
                },
                f = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return c(e, t), e.prototype.view = function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        return void 0 !== t[0] ? "function" == typeof t[0] ? new b(this, t[0]) : "string" == typeof t[0] ? new b(this, i.Ri.compose.apply(i.Ri, t.map(i.Ri.key())).get) : new b(this, (function(e) {
                            return t[0].get(e)
                        })) : this
                    }, e
                }(s.X),
                d = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return c(e, t), e.prototype.set = function(t) {
                        this.modify((function() {
                            return t
                        }))
                    }, e.prototype.lens = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++)
                            e[n - 1] = arguments[n];
                        return new h(this, "function" == typeof t ? i.Ri.prop(t) : "string" == typeof t ? i.Ri.compose.apply(i.Ri, l([i.Ri.key(t)], e.map((function(t) {
                            return i.Ri.key(t)
                        })))) : t, o.f)
                    }, e
                }(f),
                p = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return c(e, t), e.prototype.get = function() {
                        return this.getValue()
                    }, e.prototype.modify = function(t) {
                        var e = this.getValue(),
                            n = t(e);
                        (0, o.f)(e, n) || this.next(n)
                    }, e.prototype.set = function(t) {
                        var e = this.getValue();
                        (0, o.f)(e, t) || this.next(t)
                    }, e
                }(d),
                h = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = o.f);
                        var i = t.call(this, void 0) || this;
                        return i._source = e, i._lens = n, i._eq = r, i._subscription = null, i._refCount = 0, i
                    }
                    return c(e, t), e.prototype.get = function() {
                        return this._subscription ? this.getValue() : this._lens.get(this._source.get())
                    }, e.prototype.modify = function(t) {
                        var e = this;
                        this._source.modify((function(n) {
                            return e._lens.modify(t, n)
                        }))
                    }, e.prototype.set = function(t) {
                        var e = this;
                        this._source.modify((function(n) {
                            return e._lens.set(t, n)
                        }))
                    }, e.prototype._onSourceValue = function(t) {
                        var e = this.getValue(),
                            n = this._lens.get(t);
                        this._eq(e, n) || this.next(n)
                    }, e.prototype._subscribe = function(e) {
                        var n = this;
                        this._subscription || (this._subscription = this._source.subscribe((function(t) {
                            return n._onSourceValue(t)
                        }))),
                        this._refCount++;
                        var r = new a.w((function() {
                            --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                        }));
                        return r.add(t.prototype._subscribe.call(this, e)), r
                    }, e.prototype.unsubscribe = function() {
                        this._subscription && (this._subscription.unsubscribe(), this._subscription = null),
                        this._refCount = 0,
                        t.prototype.unsubscribe.call(this)
                    }, e
                }(d),
                b = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = o.f);
                        var i = t.call(this, void 0) || this;
                        return i._source = e, i._getter = n, i._eq = r, i._subscription = null, i._refCount = 0, i
                    }
                    return c(e, t), e.prototype.get = function() {
                        return this._subscription ? this.getValue() : this._getter(this._source.get())
                    }, e.prototype._onSourceValue = function(t) {
                        var e = this.getValue(),
                            n = this._getter(t);
                        this._eq(e, n) || this.next(n)
                    }, e.prototype._subscribe = function(e) {
                        var n = this;
                        this._subscription || (this._subscription = this._source.subscribe((function(t) {
                            return n._onSourceValue(t)
                        }))),
                        this._refCount++;
                        var r = new a.w((function() {
                            --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                        }));
                        return r.add(t.prototype._subscribe.call(this, e)), r
                    }, e.prototype.unsubscribe = function() {
                        this._subscription && (this._subscription.unsubscribe(), this._subscription = null),
                        this._refCount = 0,
                        t.prototype.unsubscribe.call(this)
                    }, e
                }(f),
                g = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = o.f);
                        var i = t.call(this, void 0) || this;
                        return i._sources = e, i._combineFn = n, i._eq = r, i._subscription = null, i._refCount = 0, i
                    }
                    return c(e, t), e.prototype.get = function() {
                        return this._subscription ? this.getValue() : this._combineFn(this._sources.map((function(t) {
                            return t.get()
                        })))
                    }, e.prototype._onSourceValues = function(t) {
                        var e = this.getValue(),
                            n = this._combineFn(t);
                        this._eq(e, n) || this.next(n)
                    }, e.prototype._subscribe = function(e) {
                        var n = this;
                        this._subscription || (this._subscription = (0, u.aj)(this._sources).subscribe((function(t) {
                            return n._onSourceValues(t)
                        }))),
                        this._refCount++;
                        var r = new a.w((function() {
                            --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                        }));
                        return r.add(t.prototype._subscribe.call(this, e)), r
                    }, e.prototype.unsubscribe = function() {
                        this._subscription && (this._subscription.unsubscribe(), this._subscription = null),
                        this._refCount = 0,
                        t.prototype.unsubscribe.call(this)
                    }, e
                }(f)
        },
        38983: (t, e, n) => {
            n.d(e, {
                h: () => r
            });
            var r,
                i = n(95300),
                o = n(44586),
                s = n(14601),
                a = n(2834),
                u = n(38194),
                c = n(85985),
                l = n(84837);
            !function(t) {
                t.create = function(t) {
                    return new l.cc(t)
                },
                t.log = function(t, e) {
                    var n = function(t, e, n) {
                            return console.log("%c" + t, "color: " + e + "; font-weight: bold", n)
                        },
                        r = t.get();
                    return t.subscribe((function(t) {
                        "function" == typeof e ? e(r, t) : (console.group("UPDATE " + (e ? "TYPE: " + e + " " : "") + "@ " + (new Date).toTimeString()), n("prev state", "#9E9E9E", r), n("next state", "#4CAF50", t), console.groupEnd()),
                        r = t
                    })), t
                },
                t.combine = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return new l.cn(t.slice(void 0, -1), (function(e) {
                        return t[t.length - 1].apply(t, e)
                    }))
                },
                t.fromObservable = function(e) {
                    var n = new i.X(null),
                        r = e.pipe((0, a.b)((function(e) {
                            var r = n.value;
                            null === r ? n.next(t.create(e)) : r.set(e)
                        })), (0, u.B)());
                    return new o.y((function(t) {
                        var e = new s.w;
                        return e.add(n.pipe((0, c.h)((function(t) {
                            return !!t
                        }))).subscribe(t)), e.add(r.subscribe(void 0, (function(e) {
                            return t.error(e)
                        }), (function() {
                            return t.complete()
                        }))), e
                    }))
                }
            }(r || (r = {}))
        },
        87871: (t, e, n) => {
            function r(t) {
                for (var e, n = []; !(e = t.next()).done;)
                    n.push(e.value);
                return n
            }
            function i(t, e) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            function o(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
            n.d(e, {
                f: () => p
            });
            var s,
                a,
                u,
                c,
                l = function() {
                    var t = Object.prototype.toString;
                    return "[object Arguments]" === t.call(arguments) ? function(e) {
                        return "[object Arguments]" === t.call(e)
                    } : function(t) {
                        return i("callee", t)
                    }
                }(),
                f = (s = !{
                    toString: null
                }.propertyIsEnumerable("toString"), a = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], u = function() {
                    return arguments.propertyIsEnumerable("length")
                }(), c = function(t, e) {
                    for (var n = 0; n < t.length;) {
                        if (t[n] === e)
                            return !0;
                        n += 1
                    }
                    return !1
                }, "function" != typeof Object.keys || u ? function(t) {
                    if (Object(t) !== t)
                        return [];
                    var e,
                        n,
                        r = [],
                        o = u && l(t);
                    for (e in t)
                        !i(e, t) || o && "length" === e || (r[r.length] = e);
                    if (s)
                        for (n = a.length - 1; n >= 0;)
                            i(e = a[n], t) && !c(r, e) && (r[r.length] = e),
                            n -= 1;
                    return r
                } : function(t) {
                    return Object(t) !== t ? [] : Object.keys(t)
                });
            function d(t) {
                return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1)
            }
            function p(t, e, n, s) {
                if (void 0 === n && (n = []), void 0 === s && (s = []), o(t, e))
                    return !0;
                if (d(t) !== d(e))
                    return !1;
                if (null == t || null == e)
                    return !1;
                if ("function" == typeof t.equals || "function" == typeof e.equals)
                    return "function" == typeof t.equals && t.equals(e) && "function" == typeof e.equals && e.equals(t);
                switch (d(t)) {
                case "Arguments":
                case "Array":
                case "Object":
                    if ("function" == typeof t.constructor && "Promise" === (a = t.constructor, null == (u = String(a).match(/^function (\w*)/)) ? "" : u[1]))
                        return t === e;
                    break;
                case "Boolean":
                case "Number":
                case "String":
                    if (typeof t != typeof e || !o(t.valueOf(), e.valueOf()))
                        return !1;
                    break;
                case "Date":
                    if (!o(t.valueOf(), e.valueOf()))
                        return !1;
                    break;
                case "Error":
                    return t.name === e.name && t.message === e.message;
                case "RegExp":
                    if (t.source !== e.source || t.global !== e.global || t.ignoreCase !== e.ignoreCase || t.multiline !== e.multiline || t.sticky !== e.sticky || t.unicode !== e.unicode)
                        return !1;
                    break;
                case "Map":
                case "Set":
                    if (!p(r(t.entries()), r(e.entries()), n, s))
                        return !1;
                    break;
                case "Int8Array":
                case "Uint8Array":
                case "Uint8ClampedArray":
                case "Int16Array":
                case "Uint16Array":
                case "Int32Array":
                case "Uint32Array":
                case "Float32Array":
                case "Float64Array":
                case "ArrayBuffer":
                    break;
                default:
                    return !1
                }
                var a,
                    u,
                    c = f(t);
                if (c.length !== f(e).length)
                    return !1;
                for (var l = n.length - 1; l >= 0;) {
                    if (n[l] === t)
                        return s[l] === e;
                    l -= 1
                }
                for (n.push(t), s.push(e), l = c.length - 1; l >= 0;) {
                    var h = c[l];
                    if (!i(h, e) || !p(e[h], t[h], n, s))
                        return !1;
                    l -= 1
                }
                return n.pop(), s.pop(), !0
            }
        },
        26746: (t, e, n) => {
            function r(t, e) {
                return function(n, r) {
                    return e(n(t(r)), r)
                }
            }
            var i,
                o,
                s;
            n.d(e, {
                p1: () => o,
                Ri: () => s
            }),
            function(t) {
                t.optic = function(t, e) {
                    return {
                        get: t,
                        set: e,
                        modify: r(t, e)
                    }
                }
            }(i || (i = {})),
            function(t) {
                t.create = function t(e, n) {
                    return {
                        get: e,
                        set: n,
                        modify: r(e, n),
                        compose: function(r) {
                            return t((function(t) {
                                var n = e(t);
                                return void 0 !== n ? r.get(n) : void 0
                            }), (function(t, i) {
                                var o = e(i);
                                return void 0 !== o ? n(r.set(t, o), i) : i
                            }))
                        }
                    }
                }
            }(o || (o = {})),
            function(t) {
                function e(t, n) {
                    return {
                        get: t,
                        set: n,
                        modify: r(t, n),
                        compose: function(r) {
                            return e((function(e) {
                                return r.get(t(e))
                            }), (function(e, i) {
                                return n(r.set(e, t(i)), i)
                            }))
                        }
                    }
                }
                t.create = e,
                t.compose = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    if (0 === t.length)
                        throw new TypeError("Can not compose zero lenses. You probably want `Lens.identity`.");
                    if (1 === t.length)
                        return t[0];
                    var n = t[0];
                    return t.slice(1).forEach((function(t) {
                        n = n.compose(t)
                    })), n
                };
                var n = e((function(t) {
                    return t
                }), (function(t, e) {
                    return t
                }));
                t.identity = function() {
                    return n
                };
                var i = o.create((function(t) {}), (function(t, e) {
                    return e
                }));
                t.nothing = function() {
                    return i
                }
            }(s || (s = {}))
        },
        20817: (t, e, n) => {
            n.d(e, {
                Ri: () => r.Ri
            });
            var r = n(26746);
            n(20763)
        },
        20763: (t, e, n) => {
            var r = n(48540),
                i = n(87871),
                o = n(26746),
                s = new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "return\\s", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));
            new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "(\\$_\\$wf\\(\\d+\\);)?", "return\\s", "(\\$_\\$w\\(\\d+, \\d+\\),\\s)?", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));
            function a(t) {
                return function(t) {
                    var e = s,
                        n = t.match(e);
                    if (n && n[2])
                        return n[2].split(".");
                    throw new TypeError('Expected a property expression, got "' + t + '".\n\n      A property expression should be a referentially transparent (no side-effects),\n      single-expression "getter" function.\n\n      Correct example: "function (x) { return x.some }" or "x => x.some".\n      Incorrect example: "function (x) { var y = x.some; return y }" or "({some}) => some"')
                }(t.toString())
            }
            function u(t) {
                return void 0 === t ? function(t) {
                    return o.Ri.create((function(e) {
                        return e[t]
                    }), (function(e, n) {
                        return (0, r.Dt)(t, e, n)
                    }))
                } : o.Ri.create((function(e) {
                    return e[t]
                }), (function(e, n) {
                    return (0, r.Dt)(t, e, n)
                }))
            }
            var c = 0;
            o.Ri.key = u,
            o.Ri.prop = function(t) {
                var e = a(t);
                return r.z3 && function(t) {
                    if (c < 10) {
                        c++;
                        var e = "x." + t.join("."),
                            n = "'" + t.join("', '") + "'";
                        (0, r.Kp)("The property expression overload of Atom.lens and Lens.prop are deprecated and will be removed in next versions of Focal. Please use the key name overload for Atom.lens and Lens.key instead. You can convert your code by changing the calls:\n  a.lens(x => " + e + ") to a.lens(" + n + "),\n  Lens.prop((x: T) => " + e + ") to Lens.key<T>()(" + n + ").")
                    }
                }(e), o.Ri.compose.apply(o.Ri, e.map(u()))
            },
            o.Ri.index = function(t) {
                if (t < 0)
                    throw new TypeError(t + " is not a valid array index, expected >= 0");
                return o.p1.create((function(e) {
                    return e[t]
                }), (function(e, n) {
                    return n.length <= t ? n.concat(Array(t - n.length), [e]) : (0, i.f)(e, n[t]) ? n : n.slice(0, t).concat([e], n.slice(t + 1))
                }))
            },
            o.Ri.withDefault = function(t) {
                return o.Ri.replace(void 0, t)
            },
            o.Ri.replace = function(t, e) {
                return o.Ri.create((function(n) {
                    return (0, i.f)(n, t) ? e : n
                }), (0, r.t_)((function(n) {
                    return (0, i.f)(n, e) ? t : n
                })))
            },
            o.Ri.find = function(t) {
                return e = function(e) {
                    var n = (0, r.cx)(e, t);
                    return n < 0 ? o.Ri.nothing() : o.Ri.index(n)
                }, o.Ri.create((function(t) {
                    return e(t).get(t)
                }), (function(t, n) {
                    return e(n).set(t, n)
                }));
                var e
            }
        },
        48540: (t, e, n) => {
            n.d(e, {
                z3: () => i,
                Dt: () => o,
                t_: () => s,
                cx: () => a,
                Kp: () => u,
                _o: () => c
            });
            var r = n(87871),
                i = void 0 !== n(27061) && !1;
            function o(t, e, n) {
                if (t in n && (0, r.f)(e, n[t]))
                    return n;
                var i = {};
                for (var o in n)
                    i[o] = n[o];
                return i[t] = e, i
            }
            function s(t) {
                return function(e, n) {
                    return function(t, e) {
                        return (0, r.f)(t, e) ? e : t
                    }(t(e, n), n)
                }
            }
            function a(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (e(t[n]))
                        return n;
                return -1
            }
            function u(t) {
                "undefined" != typeof console && "function" == typeof console.error && console.error("[Focal]: " + t);
                try {
                    throw new Error(t)
                } catch (t) {}
            }
            function c(t) {
                return "string" == typeof t ? t : void 0 !== t.displayName ? t.displayName : void 0 !== t.name ? t.name : t.constructor && void 0 !== t.constructor.name ? t.constructor.name : void 0
            }
        },
        7837: (t, e, n) => {
            n.d(e, {
                Sx: () => s,
                CN: () => a,
                IG: () => u,
                _e: () => c,
                NX: () => l,
                Yf: () => f
            });
            var r = n(37896),
                i = n(54726),
                o = n(71176);
            function s(t) {
                o.Sx((e => {
                    if (e.name !== (0, i.$)())
                        return;
                    let n = e.message;
                    null != n.json && (n = JSON.parse(n.json)),
                    "message" === n.method && t({
                        event: n.event,
                        data: n.data
                    })
                }))
            }
            function a(t, e) {
                if (!self.safari || !self.safari.extension)
                    return;
                const n = document.URL,
                    s = {
                        page: {
                            id: o.Hr,
                            url: n,
                            isTop: self === self.top
                        },
                        url: n
                    },
                    a = JSON.stringify({
                        name: (0, i.$)(),
                        target: s,
                        message: {
                            callid: (0, r.M8)(),
                            method: "message",
                            params: {
                                event: t,
                                data: e
                            }
                        }
                    });
                o.dw("passToBgPage", {
                    json: a
                })
            }
            function u() {
                o.dw("beginOAuth", null)
            }
            function c(t) {
                o.dw("oauthExchange", {
                    redirectUrl: t
                })
            }
            function l(t) {
                o.dw("openSubscriptionDialog", {
                    placement: t
                })
            }
            function f() {
                o.dw("redirectClaimedUser", null)
            }
        },
        71176: (t, e, n) => {
            n.d(e, {
                Hr: () => r,
                Sx: () => a,
                dw: () => u
            });
            const r = (0, n(37896).M8)();
            const i = "exposedApi.",
                o = new class {
                    reportActive()
                    {
                        self === self.top && u("activePage", {
                            url: document.URL
                        })
                    }
                    reportTab(t)
                    {
                        u("reportTab", {
                            callId: t
                        })
                    }
                    reportNewFrame()
                    {
                        u("reportFrame", {})
                    }
                    reportFrame(t)
                    {
                        u("reportFrame", {
                            tabId: t
                        })
                    }
                    oauthError(t)
                    {
                        u(confirm("Oops! Looks like this login attempt failed.\nClick OK to try again.") ? "beginOAuth" : "closeLoginTab", null)
                    }
                }
                ;
            let s;
            function a(t) {
                if (null != s)
                    throw new Error("Duplicate registerAppMessageHandler() call");
                s = t
            }
            function u(t, e) {
                self.safari.extension.dispatchMessage(t, {
                    meta: {
                        srcPageId: r
                    },
                    data: e
                })
            }
            self.safari && self.safari.self && (self === self.top ? o.reportTab() : o.reportNewFrame(), self.safari.self.addEventListener("message", (t => {
                const e = t.name;
                if (e.startsWith(i)) {
                    const n = e.substring(i.length);
                    switch (n) {
                    case "reportActive":
                        o.reportActive();
                        break;
                    case "reportTab":
                        self === self.top && o.reportTab(t.message.callId);
                        break;
                    case "reportFrame":
                        o.reportFrame(t.message.tabId);
                        break;
                    case "oauthError":
                        o.oauthError(t.data && t.data.error || void 0);
                        break;
                    default:
                        throw new Error(`Unknown exposedApi method ${n}`)
                    }
                } else
                    null != s && s(t)
            })))
        },
        54726: (t, e, n) => {
            n.d(e, {
                $: () => o
            });
            var r = n(92783);
            let i;
            function o() {
                return i || (i = "forge-bridge" + (0, r.pB)()), i
            }
        },
        78323: (t, e, n) => {
            n.d(e, {
                vG: () => o,
                ix: () => s
            });
            const r = "grExtInstalled",
                i = "grExtDisabled";
            function o() {
                document.body.dataset[r] = ""
            }
            function s(t) {
                null === t && "next" === document.body.dataset[i] || (null === t ? delete document.body.dataset[i] : document.body.dataset[i] = t)
            }
        },
        77256: (t, e, n) => {
            n.d(e, {
                X: () => d,
                O: () => p
            });
            class r {
                constructor()
                {
                    this._storage = this._storage || {}
                }
                get _storage()
                {
                    return self.__CS_SHARE_STORAGE__
                }
                set _storage(t)
                {
                    self.__CS_SHARE_STORAGE__ = t
                }
                clean()
                {
                    this._storage = {}
                }
                set(t, e)
                {
                    this._storage[t] = e
                }
                get(t)
                {
                    return this._storage[t]
                }
                getOnce(t)
                {
                    const e = this._storage[t];
                    return this.remove(t), e
                }
                remove(t)
                {
                    delete this._storage[t]
                }
            }
            var i = n(82236),
                o = n(16162);
            class s extends i.X {
                constructor(t)
                {
                    super(new o.rr("cs-to-bg-rpc-1557421403805", t))
                }
            }
            var a = n(22128);
            class u extends a.H {
                constructor(t)
                {
                    super(new o.rr("cs-to-bg-rpc-1587687052565", t), new o.rr("cs-to-bg-observable-rpc-1587687052565", t))
                }
            }
            var c = n(22764),
                l = n(39354),
                f = n(64408);
            class d extends c.P {
                constructor(t)
                {
                    super({
                        browser: t.browser,
                        extensionType: t.extensionType,
                        context: "cs",
                        historyLoggerExtraArgs: {
                            downloadFileName: "grammarly-cs-logs.tsv",
                            onDownload: () => {
                                var t;
                                null === (t = this.bgRpc) || void 0 === t || t.api.downloadBackgroundPageLogs()
                            }
                        }
                    }),
                    this.browserApi = t.browserApi,
                    f.init(t.browserApi.message),
                    t.skipInitExtensionApi || (0, l.cg)(t.browserApi),
                    this.bgRpc = new s(f),
                    this.csShareStorage = new r,
                    this.capiBgRpc = new u(f)
                }
                static get isInited()
                {
                    return void 0 !== this._instance
                }
                static getInstance()
                {
                    if (void 0 === this._instance)
                        throw new Error("Env not inited yet");
                    return this._instance
                }
                static init(t)
                {
                    if (void 0 !== this._instance)
                        throw new Error("Env already inited");
                    const e = new d(t);
                    return this._instance = e, c.P.initShared(e), e.browserApi.message.start && e.browserApi.message.start(), e
                }
            }
            function p() {
                return d.getInstance()
            }
        },
        22679: (t, e, n) => {
            n.d(e, {
                op: () => r,
                lH: () => i,
                oJ: () => o,
                BJ: () => s,
                xA: () => a,
                wJ: () => u,
                Eq: () => c,
                U_: () => l,
                gk: () => f
            });
            const r = 2147483647,
                i = r - 1,
                o = r - 2,
                s = r - 3,
                a = r - 4,
                u = r - 5,
                c = r - 6,
                l = u,
                f = 1350
        },
        89407: (t, e, n) => {
            var r;
            n.d(e, {
                T: () => r
            }),
            function(t) {
                function e(t, e) {
                    try {
                        for (const n of Object.keys(e))
                            if (e[n] && e[n](t))
                                return n;
                        return null
                    } catch (t) {
                        return null
                    }
                }
                t.isSpecific = {
                    draftJs: t => !(!t.hasAttribute("contenteditable") || !t.querySelector('[data-contents="true"] > [data-editor], [data-block]')),
                    quill: t => t.classList.contains("ql-editor") || t.classList.contains("ql-container"),
                    redactor: t => t.className.indexOf("redactor") > -1,
                    prosemirror: t => t.hasAttribute("pm-container") || t.classList.contains("ProseMirror"),
                    scribe: t => t.className.indexOf("scribe") > -1,
                    trix: t => t.className.indexOf("trix") > -1,
                    "medium-editor": t => t.className.indexOf("medium-editor") > -1,
                    tinymce: t => {
                        if ("IFRAME" !== t.tagName)
                            return !1;
                        const e = t;
                        return e.id.indexOf("mce") > -1 || !!(e.contentDocument && e.contentDocument.querySelectorAll("#tinymce, .mce-content-body").length > 0)
                    },
                    ckeditor4: t => t.matches("iframe.cke_wysiwyg_frame") || t.classList.contains("cke_editable"),
                    ckeditor5: t => t.classList.contains("ck-editor__editable"),
                    slate: t => "true" === t.getAttribute("data-slate-editor"),
                    mobiledoc: t => t.classList.contains("__mobiledoc-editor")
                },
                t.isGeneric = {
                    contenteditable: t => {
                        const e = t.attributes.getNamedItem("contenteditable");
                        return !(!function(t) {
                            return !(t instanceof HTMLSelectElement)
                        }(t) || !e || "true" !== e.value && "" !== e.value && "plaintext-only" !== e.value)
                    },
                    textarea: t => "TEXTAREA" === t.tagName,
                    iframe: e => {
                        if ("IFRAME" === e.tagName) {
                            const n = e;
                            return !!(n.contentDocument && n.contentDocument.body && t.isGeneric.contenteditable(n.contentDocument.body))
                        }
                        return !1
                    },
                    iframeHost: e => {
                        if ("IFRAME" === e.tagName) {
                            const n = e;
                            return !(n.contentDocument && n.contentDocument.body && t.isGeneric.contenteditable(n.contentDocument.body))
                        }
                        return !1
                    }
                },
                t.get = function(n) {
                    return {
                        generic: e(n, t.isGeneric),
                        specific: e(n, t.isSpecific)
                    }
                }
            }(r || (r = {}))
        },
        56185: (t, e, n) => {
            n.d(e, {
                S: () => r
            });
            var r,
                i = n(49708),
                o = n(79692),
                s = n(77843),
                a = n(40151),
                u = n(18625),
                c = n(76974),
                l = n(24209),
                f = n(12126),
                d = n(8175),
                p = n(85321),
                h = n(77176),
                b = n(28043),
                g = n(80544),
                v = n(85985),
                y = n(94123),
                m = n(71032),
                _ = n(23063),
                w = n(93508),
                x = n(5817),
                E = n(74850);
            !function(t) {
                const e = E.Y.create("universal.cs.integration.observables"),
                    n = t => (0, i.R)(t, "focus", !0);
                function r(t) {
                    return t instanceof Element && t.shadowRoot && t.shadowRoot.activeElement ? r(t.shadowRoot.activeElement) : t
                }
                function S(t, e) {
                    return {
                        document: t,
                        frame: e
                    }
                }
                t.createFocusObservable = function(t, i, E=n) {
                    return function(t, n) {
                        const r = S(t),
                            i = (0, f.D)(t.getElementsByTagName("iframe")),
                            o = n.pipe((0, m.b)((t => Array.from(t.addedNodes))), (0, v.h)((t => "IFRAME" === t.nodeName)));
                        return i.pipe((0, y.z)(o), (0, v.h)((n => function(t, n) {
                            try {
                                const e = t.src;
                                if (e && "about:blank" !== e && !e.startsWith("javascript")) {
                                    return new URL(e, n.baseURI).origin === n.location.origin
                                }
                                return !0
                            } catch (t) {
                                return e.warn("Error converting iframe's src to url", t), !0
                            }
                        }(n, t))), (0, p.zg)((t => {
                            try {
                                return function(t) {
                                    const e = t.contentDocument;
                                    return e && "complete" === e.readyState
                                }(t) ? (0, c.of)(t) : (0, d.R)((e => t.addEventListener("load", e, !0)), (e => t.removeEventListener("load", e)), (() => t)).pipe((0, _.q)(1))
                            } catch (t) {
                                return e.warn("failed to receive iframes document", t), (0, c.of)(null)
                            }
                        })), (0, h.U)((t => {
                            try {
                                if (null !== t && null !== t.contentDocument)
                                    return S(t.contentDocument, t)
                            } catch (t) {
                                e.warn("failed to receive iframes document", t)
                            }
                            return null
                        })), (0, v.h)((t => null !== t))).pipe((0, w.O)(r))
                    }(t, i).pipe((0, p.zg)((t => function(t, e, n) {
                        const i = t.document,
                            o = (0, s.F)(x.E0),
                            f = t.frame ? (0, a.c)() : (0, u.P)((() => (0, c.of)(i.activeElement).pipe((0, v.h)((t => t && i.defaultView && i.defaultView.HTMLElement && t instanceof i.defaultView.HTMLElement))))),
                            d = e(i).pipe((0, h.U)((t => t.target))),
                            p = t.frame ? (0, a.c)() : (0, l.T)(o, n).pipe((0, v.h)((t => !!i.defaultView && "visible" === i.visibilityState && !!i.activeElement)), (0, h.U)((t => i.activeElement)), (0, b.x)()),
                            g = (0, l.T)(p, d).pipe((0, v.h)((t => i.defaultView && i.defaultView.HTMLElement && t instanceof i.defaultView.HTMLElement)), (0, h.U)((t => r(t))));
                        return f.pipe((0, y.z)(g), (0, b.x)())
                    }(t, E, i).pipe((0, h.U)((e => ({
                        element: e,
                        owner: t
                    })))))), (0, b.x)(), (0, g.QV)(o.E))
                },
                t.docInfo = S
            }(r || (r = {}))
        },
        6787: (t, e, n) => {
            n.d(e, {
                x: () => r
            });
            var r,
                i = n(99446),
                o = n(22534),
                s = n(90361);
            !function(t) {
                class e {
                    constructor()
                    {
                        this._integration = o.f3(o.CP)
                    }
                    updateState(t, e, n, r)
                    {
                        this._isActive = !i.q.isIntegrationEnable(r, t, e),
                        this._mode = i.q.isEnable(e, r) ? o.Uu.limited : o.Uu.full,
                        this._integration.activate(this._isActive, this._mode, !n)
                    }
                    setUserDisabled()
                    {
                        this._integration.activate(this._isActive, this._mode, !0)
                    }
                    dispose()
                    {
                        this._integration.remove()
                    }
                }
                const n = {
                    updateState: s.EI,
                    setUserDisabled: s.EI,
                    dispose: s.EI
                };
                t.init = function() {
                    return self !== self.parent || Boolean(document.querySelector(o.CP)) ? n : new e
                }
            }(r || (r = {}))
        },
        22534: (t, e, n) => {
            var r;
            n.d(e, {
                Uu: () => r,
                CP: () => i,
                f3: () => o
            }),
            function(t) {
                t.full = "full",
                t.limited = "limited"
            }(r || (r = {}));
            const i = "grammarly-desktop-integration";
            function o(t=i) {
                var e,
                    n;
                const r = document.createElement("style");
                r.textContent = "\n  div {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select:none;\n    user-select:none;\n  }\n\n  div:before {\n    content: attr(data-content);\n  }\n";
                const o = document.createElement("div");
                o.setAttribute("aria-label", "grammarly-integration"),
                o.setAttribute("tabindex", "-1");
                const s = document.createElement(t);
                return s.attachShadow({
                    mode: "open"
                }), s.setAttribute("data-grammarly-shadow-root", "true"), null === (e = s.shadowRoot) || void 0 === e || e.appendChild(r), null === (n = s.shadowRoot) || void 0 === n || n.appendChild(o), document.documentElement.appendChild(s), {
                    activate: (t, e, n) => {
                        const r = JSON.stringify(e ? {
                            mode: e,
                            isActive: t,
                            isUserDisabled: n
                        } : {
                            isActive: t
                        });
                        null == o || o.setAttribute("data-content", r)
                    },
                    remove: () => {
                        var t;
                        null === (t = null == s ? void 0 : s.parentNode) || void 0 === t || t.removeChild(s)
                    }
                }
            }
        },
        99446: (t, e, n) => {
            n.d(e, {
                q: () => r
            });
            var r,
                i = n(57271);
            !function(t) {
                function e(t, e) {
                    if (!t || !e)
                        return !0;
                    return !e.includes(t)
                }
                function n(t, e) {
                    var n;
                    return Boolean((null == e ? void 0 : e.isDesktopIntegrationEnabled) && (null === (n = t.llamaIntegration) || void 0 === n ? void 0 : n.enabled))
                }
                function r(t, n, r, o) {
                    var s,
                        a;
                    const u = o ? (0, i.KK)(o) : void 0,
                        c = t.isLlamaInstalled && (null === (s = n.llamaIntegration) || void 0 === s ? void 0 : s.enabled);
                    return e(u, null === (a = n.llamaIntegration) || void 0 === a ? void 0 : a.disabledByDomain) && (c || t.showDesktopIntegrationExtensionToggle || (null == r ? void 0 : r.desktopIntegrationExtensionSupport))
                }
                t.isEnable = n,
                t.showSettingPopupToggle = r,
                t.showGrayGButton = function(t, e, i, o) {
                    return r(t, e, i, o) && n(e, t)
                },
                t.isIntegrationEnable = function(t, r, i) {
                    var o;
                    return !(!t || !i) && (e(r, null === (o = i.llamaIntegration) || void 0 === o ? void 0 : o.disabledByDomain) && n(i, t))
                }
            }(r || (r = {}))
        },
        16162: (t, e, n) => {
            n.d(e, {
                rr: () => c,
                Lc: () => p,
                lM: () => h,
                OB: () => b,
                vQ: () => g
            });
            var r = n(44586),
                i = n(85985),
                o = n(77176),
                s = n(90361),
                a = n(64408),
                u = n(97757);
            class c {
                constructor(t, e, n=s.iy.create(), i=t)
                {
                    this._rpcMessageName = t,
                    this._message = e,
                    this._clientId = n,
                    this._inboundMessageName = i,
                    this.inbound = new r.y((t => {
                        const e = e => {
                            e.clientId === this._clientId && t.next(e.data)
                        };
                        return this._message.on(this._inboundMessageName, e), () => this._message.off(this._inboundMessageName, e)
                    })),
                    this.outbound = t => {
                        this._message.emitBackground(this._rpcMessageName, {
                            clientId: this._clientId,
                            data: t
                        })
                    }
                }
            }
            function l(t, e=s.iy.create()) {
                return {
                    inbound: (0, u.s)(t.inbound).pipe((0, i.h)((t => t.clientId === e)), (0, o.U)((t => t.data))),
                    outbound(n) {
                        t.outbound({
                            clientId: e,
                            data: n
                        })
                    }
                }
            }
            function f(t, e) {
                return {
                    inbound: t.inbound,
                    outbound(n) {
                        t.outbound({
                            connectionId: e,
                            data: n
                        })
                    }
                }
            }
            function d(t, e) {
                return {
                    inbound: new r.y((e => {
                        function n(t) {
                            e.next(t)
                        }
                        return a.on(t, n), () => a.off(t, n)
                    })),
                    outbound(t) {
                        a.emitBackground(e, t)
                    }
                }
            }
            function p(t, e=t + "-response") {
                return d(t, e)
            }
            function h(t, e, n=t + "-response") {
                return f(d(t + "-" + e, n), e)
            }
            function b(t, e=t + "-response") {
                return l(d(e, t))
            }
            function g(t, e, n=t + "-response") {
                return l(f(d(n + "-" + e, t), e))
            }
        },
        66319: (t, e, n) => {
            n.d(e, {
                x: () => r
            });
            var r,
                i = n(79692),
                o = n(44586),
                s = n(38194),
                a = n(80544),
                u = n(71032),
                c = n(77176);
            !function(t) {
                function e(t, e) {
                    return n(t, e).pipe((0, s.B)(), (0, a.QV)(i.E))
                }
                function n(t, e) {
                    return new o.y((n => {
                        const r = new MutationObserver((t => n.next(t)));
                        return r.observe(t, e), () => r.disconnect()
                    }))
                }
                t.create = e,
                t.createUnsafe = n,
                t.createFlattenHot = function(t, e) {
                    return n(t, e).pipe((0, u.b)((t => t)), (0, s.B)())
                },
                t.observeAttribute = function(t, n) {
                    return e(t, {
                        attributes: !0,
                        attributeFilter: [n],
                        subtree: !1,
                        childList: !1
                    }).pipe((0, c.U)((e => t.getAttribute(n))))
                },
                t.observeStyle = function(t) {
                    return e(t, {
                        attributes: !0,
                        attributeFilter: ["style"],
                        subtree: !1,
                        childList: !1
                    }).pipe((0, c.U)((e => t.style)))
                },
                t.observeChildList = function(t) {
                    return e(t, {
                        attributes: !1,
                        subtree: !1,
                        childList: !0
                    }).pipe((0, c.U)((e => t.childNodes)))
                }
            }(r || (r = {}))
        },
        28044: (t, e, n) => {
            n.d(e, {
                X: () => r
            });
            var r,
                i = n(90361),
                o = n(41373),
                s = n(68820);
            !function(t) {
                const e = "grammarly.com",
                    n = "qagr.io";
                t.create = function(t, r, a) {
                    const u = (t, e, n) => "prod" === a ? t : "qa" === a ? e : "dev" === a ? n : (0, i.vE)(a),
                        c = "https://127.0.0.1:8000",
                        l = u("https://f-log-extension.grammarly.io", c, c),
                        f = u("https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==", c, c),
                        d = u(e, n, n),
                        p = "https://chipmunk.grammarly.com",
                        h = u(p, p, p);
                    return {
                        url: s.F.create(t, "grammarly.com", l, f),
                        gnar: o.UA.create(t, r, d),
                        felog: o.Bo.create(t, r, a),
                        capi: o.JW.create(t, r),
                        chipmunk: o.fI.create(h),
                        extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4"
                    }
                }
            }(r || (r = {}))
        },
        59656: (t, e, n) => {
            n.d(e, {
                S: () => r
            });
            var r,
                i = n(90361),
                o = n(51281);
            !function(t) {
                t.create = function(t, e, n, r, i, o, s, a) {
                    const u = void 0 !== o && void 0 !== s ? o : "UNVERSIONED",
                        c = `${t}.${e}.${n}`;
                    return {
                        version: c,
                        fullVersion: `${c}-${[r, ["prod" !== i ? i : null, u !== r ? u : null].filter((t => !!t)).join(".")].filter((t => "" !== t)).join("/")}`,
                        commitHash: s,
                        gitBranch: o,
                        manifestVersion: a
                    }
                },
                t.getManifestVersion = function(t, e, n) {
                    switch (t) {
                    case "safariAppExtension":
                        switch (e) {
                        case "bg":
                        case "popup":
                            return n.safari.extension.displayVersion;
                        default:
                            return
                        }
                    case "chromiumWebExtension":
                        return n.chrome.runtime.getManifest().version;
                    case "firefoxWebExtension":
                        return o.Ud.runtime.getManifest().version;
                    case "safariWebExtension":
                    case "safariIOSWebExtension":
                        return o.a1.runtime.getManifest().version;
                    default:
                        return (0, i.vE)(t)
                    }
                }
            }(r || (r = {}))
        },
        38232: (t, e, n) => {
            n.d(e, {
                Li: () => r,
                _K: () => i,
                x2: () => s
            });
            var r,
                i,
                o,
                s,
                a = n(90361);
            !function(t) {
                t.create = function(t) {
                    return (0, a.cq)(["chrome", "safari", "firefox", "edge"], t)
                },
                t.isValidTargetBrowser = function(t) {
                    return ["chrome", "safari", "firefox", "edge"].includes(t)
                },
                t.detect = function(t) {
                    return t.chrome && /google/i.test(t.navigator.vendor) ? t.navigator.appVersion.indexOf("Edg") > -1 ? "edge" : "chrome" : -1 !== t.navigator.userAgent.indexOf("Firefox") ? "firefox" : /^((?!chrome).)*safari/i.test(t.navigator.userAgent) ? "safari" : void 0
                }
            }(r || (r = {})),
            function(t) {
                t.create = function(t) {
                    return (0, a.cq)(["dev", "prod", "qa"], t)
                }
            }(i || (i = {})),
            function(t) {
                t.create = function(t) {
                    return (0, a.cq)(["chromiumWebExtension", "firefoxWebExtension", "safariAppExtension", "safariWebExtension", "safariIOSWebExtension"], t)
                }
            }(o || (o = {})),
            function(t) {
                t.create = function(t, e, n, r) {
                    return {
                        browser: t,
                        extensionType: e,
                        env: n,
                        context: r
                    }
                }
            }(s || (s = {}))
        },
        75668: (t, e, n) => {
            n.d(e, {
                Rd: () => a,
                pM: () => u
            });
            var r = n(90361),
                i = n(82573);
            const o = new r.xB((() => {
                throw new Error("Global config not initialized")
            }));
            let s = () => o.get();
            function a() {
                return s()
            }
            function u(t, e, n, r, s) {
                const a = i.e.create(t, e, n, r, s);
                return o.init(a), self.GR_CFG = o.get(), a
            }
        },
        82573: (t, e, n) => {
            n.d(e, {
                y: () => r,
                e: () => i
            });
            var r,
                i,
                o = n(90361),
                s = n(28044),
                a = n(59656),
                u = n(38232),
                c = n(65035);
            !function(t) {
                function e(t, e, n, r, i, o, s) {
                    return {
                        env: t,
                        major_number: e,
                        build_number: n,
                        release_number: r,
                        git_branch: i,
                        git_commit: o,
                        manifest_version: s
                    }
                }
                t.create = e,
                t.fromBrowserify = function() {
                    return e("prod", "9", "40", "0", "UNVERSIONED", "UNVERSIONED", "2")
                }
            }(r || (r = {})),
            function(t) {
                t.getTargetEnv = function(t) {
                    if (!t.env)
                        throw new Error("processEnv.env is null or undefined");
                    const e = u._K.create(t.env);
                    if (!e)
                        throw new Error(`Invalid processEnv.env: ${t.env}`);
                    return e
                },
                t.create = function(t, e, n, r, i) {
                    const l = [r.major_number, r.build_number, r.release_number].map(o.wU);
                    let f;
                    if (3 === l.length && l.every((t => void 0 !== t)))
                        f = l;
                    else {
                        let t;
                        try {
                            t = a.S.getManifestVersion(e, n, self)
                        } catch (t) {}
                        const r = (t || "").split(".").map(o.wU);
                        f = 3 === r.length && r.every((t => void 0 !== t)) ? r : [0, 0, 0]
                    }
                    const [d, p, h] = f;
                    return {
                        buildInfo: a.S.create(d, p, h, t, i, r.git_branch, r.git_commit, r.manifest_version),
                        bundleInfo: u.x2.create(t, e, i, n),
                        appConfig: s.X.create(t, e, i),
                        systemInfo: c.mx.create(self)
                    }
                }
            }(i || (i = {}))
        },
        41373: (t, e, n) => {
            n.d(e, {
                UA: () => r,
                Bo: () => i,
                JW: () => o,
                fI: () => s
            });
            var r,
                i,
                o,
                s,
                a = n(88848);
            !function(t) {
                const e = {
                    chromiumWebExtension: "chromeExt",
                    firefoxWebExtension: "firefoxExt",
                    safariAppExtension: "safariExt",
                    safariWebExtension: "safariWebExt",
                    safariIOSWebExtension: "safariIOSExt"
                };
                function n(t, n) {
                    return "edge" === t ? "chromiumEdgeExt" : e[n]
                }
                t.getAppName = n,
                t.create = function(t, e, r) {
                    return {
                        appName: (0, a.Cq)(n(t, e), "gnar app name"),
                        url: `https://gnar.${r}`,
                        domain: `.${r}`,
                        sendEmailInfoTracking: !0,
                        sendFluidExperimentData: !1
                    }
                }
            }(r || (r = {})),
            function(t) {
                const e = {
                    chromiumWebExtension: "extensionChrome",
                    firefoxWebExtension: "extensionFirefox",
                    safariAppExtension: "extensionSafari",
                    safariWebExtension: "extensionSafariWeb",
                    safariIOSWebExtension: "extensionSafariIOS"
                };
                t.create = function(t, n, r) {
                    return {
                        appName: "edge" === t ? "extensionEdge" : (0, a.Cq)(e[n], "felog app name"),
                        sendUsageMetrics: !0,
                        sendPerfMetricsType: "dev" === r ? "local" : Math.random() <= .01 ? "send" : "off"
                    }
                }
            }(i || (i = {})),
            function(t) {
                const e = {
                    chromiumWebExtension: "extension_chrome",
                    firefoxWebExtension: "extension_firefox",
                    safariAppExtension: "extension_safari",
                    safariWebExtension: "safariWebExtension",
                    safariIOSWebExtension: "safariWebExtension"
                };
                t.create = (t, n) => ({
                    appName: "edge" === t ? "extension_chromium_edge" : (0, a.Cq)(e[n], "capi app name")
                })
            }(o || (o = {})),
            function(t) {
                t.create = function(t) {
                    return {
                        urls: {
                            fetchMessages: `${t}/api/v1/messages`,
                            acknowledgeMessage: `${t}/api/v1/messages/acknowledge`,
                            dismissMessage: `${t}/api/v1/messages/dismiss`
                        }
                    }
                }
            }(s || (s = {}))
        },
        65035: (t, e, n) => {
            n.d(e, {
                mx: () => o
            });
            var r,
                i,
                o,
                s = n(38232);
            !function(t) {
                t.create = function(t) {
                    return {
                        type: s.Li.detect(t) || "other"
                    }
                }
            }(r || (r = {})),
            function(t) {
                t.create = function(t) {
                    return {
                        isWindows: -1 !== t.navigator.appVersion.indexOf("Win"),
                        isMac: -1 !== t.navigator.appVersion.indexOf("Mac"),
                        isChromeOS: -1 !== t.navigator.appVersion.indexOf("CrOS")
                    }
                }
            }(i || (i = {})),
            function(t) {
                t.create = function(t) {
                    return {
                        browser: r.create(t),
                        os: i.create(t)
                    }
                }
            }(o || (o = {}))
        },
        68820: (t, e, n) => {
            n.d(e, {
                F: () => r
            });
            var r,
                i = n(37869);
            !function(t) {
                t.create = function(t, e, n, r) {
                    const o = "safari" === t ? "disableAppsPromotion=true" : "";
                    function s(t) {
                        const n = `https://${t}.${e}`;
                        return (t="", e="") => {
                            const r = i.lM([o, e], "&");
                            return i.lM([n + t, r], "?")
                        }
                    }
                    const a = s("www"),
                        u = s("app"),
                        c = s("account"),
                        l = s("redirect"),
                        f = `https://data.${e}`,
                        d = `https://auth.${e}/v3`,
                        p = `wss://capi.${e}/freews`,
                        h = `https://goldengate.${e}/snippets/v1/snippets`,
                        b = `https://goldengate.${e}/client-controls`;
                    return {
                        accountSubscription: c("/subscription"),
                        accountSubscriptionChangePlan: c("/subscription", "popup=switchToAnnualOffer"),
                        accountSubscriptionAddBillingInfo: c("/admin/subscription", "popup=add_billing_info"),
                        adminAccountSubscription: c("/admin/subscription"),
                        accountAdminSubscriptionAddBillingInfoToUngatedTrial: c("/admin/subscription", "popup=ungated_trial"),
                        app: u(),
                        appPersonalDictionary: c("/customize"),
                        capi: p,
                        capiGDocs: `wss://capi.${e}/gdocs`,
                        dapiMimic: `${f}/api/mimic`,
                        dapiProps: `${f}/api/props/v2`,
                        dapiFindProps: `${f}/api/props/v2/find`,
                        editorDictionary: u("/profile/dictionary"),
                        dictionary: `https://capi.${e}/api/defs`,
                        docs: u("/docs"),
                        docsApi: `https://dox.${e}/documents`,
                        newDoc: u("/docs/new"),
                        userOrAnonymous: `${d}/user/oranonymous`,
                        userData: `${d}/user/userdata`,
                        authSignin: `${d}/api/login`,
                        authSignup: `${d}/api/signup`,
                        authExchange: `${d}/api/unified-login/code/exchange`,
                        authLogout: `${d}/logout`,
                        signin: a("/signin"),
                        signup: a("/signup"),
                        fbSignin: a("/signin", "fromExtensionFb=true"),
                        fbSignup: a("/signup", "fromExtensionFb=true"),
                        googleSignin: a("/signin", "fromExtensionGoogle=true"),
                        googleSignup: a("/signup", "fromExtensionGoogle=true"),
                        resetPassword: a("/resetpassword"),
                        newFelog: n,
                        sumoLogic: r,
                        welcomeC: a("/extension-success"),
                        afterInstall: a("/after_install_page/"),
                        upgrade: a("/upgrade"),
                        planComparison: a("/plans"),
                        businessEHomepage: a("/business/e"),
                        businessPricing: a("/business/pricing"),
                        uninstall: a("/extension-uninstall"),
                        terms: a("/terms"),
                        policy: a("/privacy-policy"),
                        californiaPolicy: a("/privacy-policy#for-california-users"),
                        extensionSuccess: a("/extension-success"),
                        firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
                        dynamicConfigUrl: "https://d27xxe7juh1us6.cloudfront.net/dynamicConfig.json",
                        pageConfigUrl: "https://d27xxe7juh1us6.cloudfront.net/browserplugin/config.json",
                        grammarlyDomain: e,
                        grammarlyProtocol: "https:",
                        redirect: l("/redirect"),
                        snippetsApi: h,
                        snippetsNew: c("/admin/snippets", "action=create"),
                        snippetsAdmin: c("/admin/snippets"),
                        snippetsSettings: c("/customize/snippets"),
                        clientControlsApi: b,
                        suggestionsSettings: c("/customize/suggestions"),
                        allSettings: c(),
                        brandTones: c("/admin/brand-tones"),
                        grammarlyIdeasSelf: u("/ideas/grow/self"),
                        grammarlyIdeasPeer: u("/ideas/grow/peer"),
                        grammarlyIdeasSales: u("/ideas/sales"),
                        iOSApp: "grammarly://home"
                    }
                }
            }(r || (r = {}))
        },
        22764: (t, e, n) => {
            n.d(e, {
                P: () => l,
                O: () => f
            });
            var r = n(75668),
                i = n(82573),
                o = n(24945),
                s = n(84416),
                a = n(69219),
                u = n(52403),
                c = n(38983);
            class l {
                constructor(t, e=c.h.create(!1))
                {
                    this._enableHistoryLoggerInProd = e,
                    this.enableHistoryLoggerInProd = () => {
                        this._enableHistoryLoggerInProd.get() || this._enableHistoryLoggerInProd.set(!0)
                    };
                    const n = t.testArgs,
                        l = n && n.processEnv ? n.processEnv : i.y.fromBrowserify(),
                        f = i.e.getTargetEnv(l),
                        d = "prod" !== f || "cs" !== t.context,
                        p = {
                            create: n => new s.x(n, {
                                writer: new u.n,
                                filterFn: d ? t => !0 : (0, a.x)(o.i.ERROR)
                            }, Object.assign(Object.assign({}, t.historyLoggerExtraArgs), {
                                enabledInProd: e
                            }))
                        },
                        h = (0, r.pM)(t.browser, t.extensionType, t.context, l, f);
                    this.config = h,
                    this.logger = p
                }
                static getInstance()
                {
                    if (void 0 === this._instanceShared)
                        throw new Error("Env not inited yet");
                    return this._instanceShared
                }
                static initShared(t)
                {
                    if (void 0 !== this._instanceShared)
                        throw new Error("Env already inited");
                    this._instanceShared = t
                }
            }
            function f() {
                return l.getInstance()
            }
        },
        51281: (t, e, n) => {
            n.d(e, {
                Ud: () => i,
                a1: () => o
            });
            var r = n(90361);
            const i = (0, r.DV)((() => browser), (() => self.browser)),
                o = (0, r.DV)((() => browser), (() => self.browser));
            self.chrome = self.chrome
        },
        39354: (t, e, n) => {
            n.d(e, {
                cg: () => o,
                P4: () => s,
                GO: () => a
            });
            var r = n(88848);
            const i = n(74850).Y.create("extension-api");
            function o(t) {
                self.extensionContentScriptApi && i.warn("Content Script Extension Api init called more than once"),
                self.extensionContentScriptApi = self.extensionContentScriptApi || t
            }
            function s() {
                return (0, r.Cq)(self.extensionContentScriptApi, "content script extension api was not initialized")
            }
            function a() {
                return (0, r.Cq)(self.extensionBackgroundPageApi, "background page extension api was not initialized")
            }
        },
        44577: (t, e, n) => {
            function r(t) {
                const e = {},
                    n = t || {};
                return n.emit = function(t, n) {
                    t = r(t);
                    const i = e[t];
                    if (!i)
                        return;
                    const o = i.concat();
                    for (let t = 0; t < o.length; t++)
                        o[t](n)
                }, n.emitArgs = function(t) {
                    t = r(t);
                    const n = e[t],
                        i = [].slice.call(arguments, 1);
                    if (!n)
                        return;
                    const o = n.concat();
                    for (let t = 0; t < o.length; t++)
                        o[t].apply(null, i)
                }, n.on = function(t, i) {
                    return t = r(t), e[t] = e[t] || [], e[t].push(i), {
                        un: function() {
                            n.un(t, i)
                        }
                    }
                }, n.off = n.un = function(t, n) {
                    t = r(t);
                    const i = e[t];
                    if (!i)
                        return;
                    const o = i.indexOf(n);
                    o > -1 && (i.splice(o, 1), i.length > 0 || delete e[t])
                }, n.one = function(t, e) {
                    const r = n.on(t, ((...t) => {
                        r.un(),
                        e.apply(null, t)
                    }))
                }, n.delegate = function(t, e, i) {
                    e = r(e),
                    n.on(e, (function(n) {
                        t.emit(i || e, n)
                    }))
                }, n;
                function r(t) {
                    return "string" != typeof t ? t.join(" ") : t
                }
            }
            n.d(e, {
                u: () => r
            })
        },
        87587: (t, e, n) => {
            n.d(e, {
                bm: () => i,
                Qw: () => o,
                WD: () => s,
                Wy: () => a,
                HW: () => u
            });
            const r = "data-enable-grammarly";
            const i = ["data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "disabled"],
                o = ["pm-container", {
                    name: "class",
                    value: "ProseMirror"
                }, "data-synchrony", {
                    name: "data-gramm",
                    value: "false"
                }, {
                    name: r,
                    value: "false"
                }, {
                    name: "aria-label",
                    value: "Search Facebook"
                }],
                s = [...i, ...o],
                a = {
                    name: r,
                    value: "true"
                },
                u = ["changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix", "llama-action"]
        },
        5872: (t, e, n) => {
            n.d(e, {
                pv: () => i,
                og: () => o,
                Jt: () => s,
                k3: () => a,
                Ne: () => u,
                Ku: () => c,
                on: () => l,
                cs: () => d,
                rR: () => p
            });
            var r = n(58028);
            function i(t, e) {
                return !(!t || void 0 === t.className) && t.classList.contains(e)
            }
            function o(t, e, n) {
                e ? function(t, e) {
                    if (t) {
                        if (-1 === e.indexOf(" "))
                            return t.classList.add(e);
                        {
                            const n = e.split(" ");
                            for (let e = 0; e < n.length; e++)
                                t.classList.add(n[e])
                        }
                    }
                }(t, n) : function(t, e) {
                    if (t && t.classList)
                        t.classList.remove(e)
                }(t, n)
            }
            function s(t, e) {
                let n = t.parentNode;
                for (; null !== n;) {
                    if (c(n, e))
                        return n;
                    n = n.parentNode
                }
                return !1
            }
            function a(t) {
                let e = t.parentNode;
                for (; null !== e;) {
                    if (u(e))
                        return e;
                    e = e.parentNode
                }
                return !1
            }
            function u(t) {
                return "true" === t.contentEditable || "plaintext-only" === t.contentEditable
            }
            function c(t, e) {
                if (!t)
                    return !1;
                const n = t.matches || t.msMatchesSelector || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector;
                return !!n && n.apply(t, [e])
            }
            function l(t, e=null, n) {
                return this.addEventListener(t, e, n), {
                    off: () => f.apply(this, [t, e, n])
                }
            }
            function f(t, e, n) {
                this.removeEventListener(t, e || null, n)
            }
            function d(...t) {
                return t.reduce(((t, e) => t.concat((0, r.Kn)(e) ? Object.keys(e).filter((t => e[t])) : e)), []).filter((t => Boolean(t))).join(" ")
            }
            function p(t=document) {
                if (void 0 === t.body.style.transform) {
                    if (void 0 !== t.body.style.WebkitTransform)
                        return "WebkitTransform";
                    if (void 0 !== t.body.style.MozTransform)
                        return "MozTransform"
                }
                return "transform"
            }
        },
        26273: (t, e, n) => {
            n.d(e, {
                o: () => i,
                E: () => o
            });
            const r = (0, n(37896).M8)();
            function i(t, e, n, o, s=!1) {
                if (null == t)
                    return;
                const a = t;
                if ("string" != typeof e)
                    return Object.keys(e).forEach((t => {
                        e[t] && i(a, t, e[t], o)
                    }));
                {
                    if (!n)
                        return;
                    const t = a[r] || [];
                    return a[r] = t, o ? (a[r] = t.filter((t => !(t.event === e && t.cb === n))), a.removeEventListener(e, n, s)) : (t.push({
                        event: e,
                        cb: n
                    }), a.addEventListener(e, n, s)), {
                        el: a,
                        event: e,
                        cb: n,
                        bubble: s
                    }
                }
            }
            function o(t, e, n, s) {
                const a = t;
                e || null == a[r] ? i(a, e, n, !0, s) : a[r].forEach((t => o(a, t.event, t.cb, t.bubble)))
            }
        },
        97049: (t, e, n) => {
            n.d(e, {
                G: () => c
            });
            var r = n(87587),
                i = n(5872),
                o = n(64408),
                s = n(92783);
            const a = n(74850).Y.create("lib.external");
            function u(t) {
                const e = document.createElement("script");
                e.innerHTML = t,
                document.head.appendChild(e),
                e.parentNode && e.parentNode.removeChild(e)
            }
            function c() {
                u(`window.GR_EXTENSION_ID='${(0, s.pB)()}'`),
                u("\n    window.GR_EXTENSION_SEND = function(key, data) {\n      if (!key) throw new TypeError('cant be called without message')\n      var e = document.createEvent('CustomEvent')\n      e.initCustomEvent('external:' + key, true, true, data)\n      document.dispatchEvent(e)\n    }\n  ");
                const t = r.HW.map((t => {
                    const e = `external:${t}`;
                    return i.on.call(document, e, (({detail: t}) => {
                        a.trace("external event", {
                            event: e,
                            detail: t
                        }),
                        o.emitBackground(e, t)
                    }))
                }));
                return {
                    dispose: () => {
                        u("\n        delete window.GR_EXTENSION_ID\n        delete window.GR_EXTENSION_SEND\n      "),
                        t.forEach((t => t.off()))
                    }
                }
            }
        },
        57271: (t, e, n) => {
            n.d(e, {
                ge: () => s,
                KK: () => a,
                Qr: () => u,
                Lu: () => c
            });
            var r = n(92783),
                i = n(22352);
            const o = t => t.replace("www.", "");
            function s(t) {
                const e = t && t.ownerDocument || document,
                    n = e.location || e.defaultView.location;
                return n ? o(n.hostname) : ""
            }
            function a(t) {
                return (0, r.pZ)() && /^about:/.test(t) ? t : "" === t ? "" : o(new URL(t).hostname)
            }
            const u = () => i.bL.includes(s()),
                c = () => /\/document\//.test(l()) && "docs.google.com" === s();
            function l(t) {
                const e = t && t.ownerDocument || document,
                    n = e.location || e.defaultView.location;
                return n ? n.pathname + n.search : ""
            }
        },
        64408: (t, e, n) => {
            n.r(e),
            n.d(e, {
                initMessage: () => l,
                onBackgroundPortReconnect: () => h,
                emitError: () => b,
                init: () => g,
                one: () => v,
                on: () => y,
                off: () => m,
                emitTabs: () => _,
                emitTo: () => w,
                getTopFrameId: () => x,
                emitFocusedTab: () => E,
                emitBackground: () => S,
                promiseBackground: () => A
            });
            var r = n(44577),
                i = n(26273),
                o = n(92783),
                s = n(37896),
                a = n(90361),
                u = n(39354);
            let c;
            function l(t) {
                if (c)
                    return c;
                return c = t, t
            }
            function f() {
                return c || l(((0, o.FN)() ? (0, u.GO)() : (0, u.P4)()).message)
            }
            const d = (0, r.u)({}),
                p = {};
            function h(t) {
                const e = f();
                "content-script-message-api" === e.kind && e.onBackgroundPortReconnect && e.onBackgroundPortReconnect(t)
            }
            const b = (0, a.P2)(1e3, (t => d.emit("__bgerror", t)));
            function g(t) {
                l(t),
                self.document && (0, i.o)(self.document, "grammarly:offline", (() => b("proxy dead")), void 0)
            }
            function v(t, e) {
                y(t, (function n(...r) {
                    m(t, n),
                    e.apply(this, r)
                }))
            }
            function y(t, e) {
                if ("__bgerror" === t)
                    return void d.on("__bgerror", e);
                const n = p[t] = p[t] || [];
                if (n.push(e), 1 === n.length)
                    try {
                        f().listen(t, ((...t) => {
                            for (const e of n)
                                e(...t)
                        }))
                    } catch (t) {
                        b(t)
                    }
            }
            function m(t, e) {
                if ("__bgerror" === t)
                    return void d.off("__bgerror", e);
                const n = p[t];
                if (!n)
                    return;
                const r = n.indexOf(e);
                -1 !== r && n.splice(r, 1),
                0 === n.length && delete p[t]
            }
            function _(t) {
                try {
                    const e = f();
                    switch (e.kind) {
                    case "background-message-api":
                        e.broadcast(t, {});
                        break;
                    default:
                        throw new Error("emitTabs can be used only on background")
                    }
                } catch (t) {
                    b(t)
                }
            }
            function w(t, e, n={}, r=a.EI, i=a.EI, o) {
                try {
                    if (!t)
                        throw TypeError("emitTo can't be used without destination point");
                    const s = f();
                    switch (s.kind) {
                    case "background-message-api":
                        s.sendTo(t, e, n, r, i, o);
                        break;
                    default:
                        throw new Error("emitTo can be used only on background")
                    }
                } catch (t) {
                    b(t)
                }
            }
            function x() {
                const t = f();
                if ("background-message-api" === t.kind)
                    return t.topFrameId;
                throw new Error("topFrameId can only be retreived on background")
            }
            function E(t, e) {
                try {
                    f().toFocused(t, e)
                } catch (t) {
                    b(t)
                }
            }
            function S(t, e, n, r) {
                try {
                    const i = f();
                    switch (i.kind) {
                    case "content-script-message-api":
                        i.broadcastBackground(t, e, n, r);
                        break;
                    default:
                        throw new Error("emitBackground can be used only in content script")
                    }
                } catch (t) {
                    b(t)
                }
            }
            function A(t, e={}, n=1e4) {
                const r = new Promise(((n, r) => {
                    try {
                        const i = f();
                        switch (i.kind) {
                        case "content-script-message-api":
                            i.broadcastBackground(t, e, n, r);
                            break;
                        default:
                            throw new Error("promiseBackground can be used only on client scripts")
                        }
                    } catch (t) {
                        r(t),
                        b(t)
                    }
                }));
                return Promise.race([r, (0, s.gw)(n).then((() => {
                    throw new Error(`Request to bg page (${c}) rejected by timeout`)
                }))])
            }
        },
        92783: (t, e, n) => {
            n.d(e, {
                pB: () => i,
                pZ: () => o,
                i7: () => s,
                G6: () => a,
                n0: () => u,
                Am: () => c,
                kD: () => l,
                CB: () => f,
                ED: () => d,
                FN: () => p,
                qs: () => h,
                U8: () => b,
                bo: () => g,
                dU: () => v,
                Um: () => y,
                PO: () => m,
                jR: () => _,
                n_: () => w,
                MN: () => x,
                L6: () => E,
                $R: () => S
            });
            var r = n(75668);
            function i() {
                return r.Rd().appConfig.extensionId
            }
            function o() {
                return "firefox" === r.Rd().bundleInfo.browser
            }
            function s() {
                return "chrome" === r.Rd().bundleInfo.browser
            }
            function a() {
                return "safari" === r.Rd().bundleInfo.browser
            }
            function u() {
                return "safariAppExtension" === r.Rd().bundleInfo.extensionType
            }
            function c() {
                return "safariIOSWebExtension" === r.Rd().bundleInfo.extensionType
            }
            function l() {
                return "edge" === r.Rd().bundleInfo.browser
            }
            function f() {
                return s() || l()
            }
            function d() {
                return r.Rd().systemInfo.os.isWindows
            }
            function p() {
                return "bg" === r.Rd().bundleInfo.context
            }
            function h() {
                return r.Rd().bundleInfo.browser
            }
            function b() {
                return r.Rd().bundleInfo.extensionType
            }
            function g() {
                return r.Rd().buildInfo.version
            }
            function v() {
                return r.Rd().bundleInfo.env
            }
            function y() {
                return r.Rd().appConfig.url
            }
            function m() {
                return r.Rd().appConfig.felog.appName
            }
            function _() {
                return r.Rd().appConfig.gnar.appName
            }
            function w() {
                try {
                    return self.parent !== self
                } catch (t) {
                    return !0
                }
            }
            function x() {
                try {
                    return self.top === self
                } catch (t) {
                    return !1
                }
            }
            function E() {
                return "undefined" != typeof fetch
            }
            function S() {
                return `extension-${r.Rd().bundleInfo.browser}`
            }
        },
        22352: (t, e, n) => {
            n.d(e, {
                bL: () => i
            });
            n(92783);
            var r = n(5817);
            const i = ["facebook.com", "messenger.com", "work.fb.com", "business.facebook.com"],
                o = (0, r.LK)(10),
                s = ((0, r.LK)(5), o);
            (0, r.LK)(10),
            (0, r.LK)(60),
            (0, r.i4)(3),
            (0, r.an)(12),
            (0, r.an)(1),
            (0, r.an)(365)
        },
        36398: (t, e, n) => {
            n.d(e, {
                F: () => a,
                I: () => u
            });
            var r = n(87587),
                i = n(5872),
                o = n(26273);
            function s(t) {
                return t.getRangeAt(0).getBoundingClientRect()
            }
            function a(t, e) {
                const n = t.anchorNode;
                if (!n)
                    return !1;
                const o = r.bm.map((t => Array.isArray(t) ? `[${t[0]}="${t[1]}"]` : `[${t}]`)).join(","),
                    s = e.activeElement,
                    a = t.toString().trim(),
                    u = "TEXTAREA" !== n.tagName && "INPUT" !== n.tagName,
                    c = !s || "INPUT" !== s.tagName && "TEXTAREA" !== s.tagName,
                    l = !(0, i.Ne)(n),
                    f = !(0, i.Jt)(n, o) && !(0, i.Ku)(n, o),
                    d = !(0, i.Jt)(n, "[contenteditable=true],[contenteditable=plaintext-only]") && !(0, i.k3)(n);
                return !!(a && u && c && l && f && d)
            }
            class u {
                constructor(t, e, n)
                {
                    this._doc = t,
                    this._selectHandler = e,
                    this._deselectHandler = n,
                    this._select = !1,
                    this.release = () => (0, o.E)(this._doc, "click", this.check),
                    this.check = t => {
                        if (2 !== t.detail)
                            return void (this._select && (this._deselectHandler(), this._select = !1));
                        this._select = !0;
                        const e = this._doc.getSelection();
                        if (!a(e, this._doc))
                            return;
                        const n = e.anchorNode.textContent,
                            r = e.toString();
                        if (r.match(/[0-9_±!@#$%^&*:"|<>?~().,:}{’=']/))
                            return;
                        let i = {
                            v: r,
                            s: 0,
                            e: r.length
                        };
                        const o = e.getRangeAt(0);
                        if (o.ownerDocument = this._doc, e.anchorNode === e.focusNode) {
                            const t = e.anchorOffset;
                            i = function(t, e, n) {
                                if (!t)
                                    return null;
                                const r = t.split(/[.;!?]/g);
                                let i = 0,
                                    o = 0;
                                for (let t = 0; t < r.length; t++) {
                                    if (o = i + r[t].length, e >= i && n <= o)
                                        return {
                                            v: r[t],
                                            s: e - i,
                                            e: n - i
                                        };
                                    i = o + 1
                                }
                                return null
                            }(n, t, t + r.length)
                        }
                        null !== i && this._selectHandler({
                            data: {
                                v: i.v,
                                s: i.s,
                                e: i.e,
                                w: r
                            },
                            pos: s(e),
                            el: o,
                            event: t
                        })
                    },
                    (0, o.o)(t, "click", this.check)
                }
            }
        },
        32138: (t, e, n) => {
            n.d(e, {
                QN: () => u,
                bO: () => c,
                sC: () => d,
                $V: () => h,
                Xc: () => v,
                s7: () => y,
                RD: () => m,
                bG: () => _,
                it: () => w,
                uh: () => x,
                Z4: () => E,
                o2: () => S,
                NH: () => A,
                c: () => I,
                Yu: () => O,
                Y0: () => T,
                rv: () => k
            });
            var r = n(41373),
                i = n(92783),
                o = n(37896);
            const s = "%appName%",
                a = {
                    extensionSettingsToolbar: "%appName%SettingsToolbar",
                    gdocsSidebarCardList: "%appName%GDocsSidebarAssistantList",
                    assistantCardList: "%appName%AssistantList",
                    extensionSettingsAssistant: "%appName%AssistantSettings",
                    gdocsGoals: "%appName%AssistantGoals",
                    extensionBusinessUphookPopup: "gb%appName%UphookPopup",
                    gbExtensionSettingsToolbar: "gb%appName%SettingsToolbar",
                    gbExtensionSettingsAssistant: "gb%appName%AssistantSettings",
                    gdocsSidebarSuccessView: "%appName%GDocsSidebarAssistantSuccessView",
                    extensionGButton: "%appName%GButton"
                };
            function u(t, e) {
                return {
                    key: t,
                    value: e
                }
            }
            function c(t) {
                return a[t] ? a[t].replace(s, ((t, e) => {
                    const n = r.UA.getAppName((0, i.qs)(), (0, i.U8)());
                    return 0 === e ? n : (0, o.kC)(n)
                })) : t
            }
            function l(t, e) {
                return u(t, e)
            }
            function f(t) {
                return t.map((t => [t.key, t.value].map(encodeURIComponent).join("="))).join("&")
            }
            function d(t, e) {
                if (0 === e.length)
                    return t;
                const n = t.includes("?");
                return [t, f(e)].join(n ? "&" : "?")
            }
            function p(t) {
                const e = [];
                return void 0 !== t.medium && e.push(l("utm_medium", t.medium)), void 0 !== t.source && e.push(l("utm_source", t.source)), void 0 !== t.campaign && e.push(l("utm_campaign", c(t.campaign))), t.clickToRun && e.push(l("click_to_run", "true")), e
            }
            function h(t) {
                return p(t)
            }
            function b(t) {
                return p({
                    medium: "internal",
                    source: t
                })
            }
            const g = u("fromExtension", "" + !0);
            function v(t, e) {
                return d((0, i.Um)().signup, [...h({
                    medium: "internal",
                    source: t,
                    campaign: e
                }), g])
            }
            function y(t) {
                return d((0, i.Um)().signin, [...b(t || "signinHook"), g])
            }
            function m(t) {
                return d((0, i.Um)().fbSignup, b(t))
            }
            function _(t) {
                return d((0, i.Um)().googleSignup, b(t))
            }
            p({
                medium: "internal"
            })[0];
            function w(t, e) {
                return d((0, i.Um)().upgrade, h({
                    medium: "internal",
                    source: t,
                    campaign: e
                }))
            }
            function x(t) {
                return d((0, i.Um)().planComparison, [u("app_type", "extension"), u("browser", (0, i.qs)()), ...h({
                    medium: "internal",
                    source: "upHook",
                    campaign: t
                })])
            }
            const E = (t, e, n) => d(t, [u("app_type", "extension"), u("browser", (0, i.qs)()), ...n ? [u("domainCategory", n)] : [], ...h({
                medium: "internal",
                source: "upHook",
                campaign: e
            })]);
            function S() {
                return (0, i.Um)().accountSubscription
            }
            function A() {
                return (0, i.Um)().accountSubscriptionChangePlan
            }
            function I() {
                return (0, i.Um)().accountSubscriptionAddBillingInfo
            }
            function O() {
                return (0, i.Um)().accountAdminSubscriptionAddBillingInfoToUngatedTrial
            }
            function T() {
                return (0, i.Um)().adminAccountSubscription
            }
            function k() {
                return (0, i.Um)().redirect
            }
        },
        37896: (t, e, n) => {
            function r() {
                return self.chrome && self.chrome.runtime && self.chrome.runtime.lastError
            }
            function i() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            function o() {
                return i() + i() + "-" + i() + "-" + i() + "-" + i() + "-" + i() + i() + i()
            }
            function s() {}
            function a(t) {
                return new Promise((e => setTimeout(e, t)))
            }
            n.d(e, {
                s6: () => r,
                M8: () => o,
                _f: () => s,
                gw: () => a,
                p6: () => c,
                qH: () => l,
                Zk: () => f,
                rw: () => d,
                DG: () => p,
                kC: () => h
            });
            const u = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            function c(t) {
                if (!t)
                    return;
                const e = new Date(t);
                return "Invalid Date" !== e.toString() ? u[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear() : void 0
            }
            function l(t) {
                const e = function() {};
                return e.prototype = t(), e
            }
            function f(t, e=10) {
                setTimeout(t, e)
            }
            function d(t) {
                return t.which || t.charCode || t.keyCode || 0
            }
            const p = 27;
            function h(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
        },
        22128: (t, e, n) => {
            n.d(e, {
                H: () => f
            });
            var r = n(44586),
                i = n(85985),
                o = n(90361),
                s = n(96702),
                a = n(74850),
                u = n(58568),
                c = n(11264),
                l = n(97757);
            class f {
                constructor(t, e, n=a.Y.create(f.name), r)
                {
                    this._transport = t,
                    this._observableTransport = e,
                    this._log = n,
                    this._serverId = r,
                    this._calls = new Map,
                    this._subscribeRelatedCalls = new Map,
                    this._observables = new Map,
                    this._subscribers = new Map,
                    this._transportSubscription = (0, l.s)(this._transport.inbound).pipe((0, i.h)(u.ZQ)).subscribe((t => {
                        this._processResponse(t)
                    })),
                    this._observableTransportSubscription = (0, l.s)(this._observableTransport.inbound).pipe((0, i.h)(u.ZQ)).subscribe((t => {
                        this._processObservableMessage(t)
                    })),
                    this.api = new Proxy({}, {
                        get: (t, e) => "then" === e ? void 0 : (...t) => this._handleCall(e, t)
                    })
                }
                _processResponse(t)
                {
                    const e = this._calls.get(t.id);
                    if (e)
                        try {
                            if ("err" in t)
                                e.reject(t.err);
                            else if (u.JL.isObservableResult(t))
                                try {
                                    const n = new r.y((e => this._createSubscribeHandler(t.subscribableId, e)));
                                    this._observables.set(t.subscribableId, n),
                                    e.resolve(n)
                                } catch (e) {
                                    this._observables.delete(t.subscribableId)
                                }
                            else
                                e.resolve(this.transformResult(t.res))
                        } finally {
                            this._calls.delete(t.id)
                        }
                    else
                        this._log.warn(`received rpc call response for unregistered call ${t.id}`)
                }
                transformResult(t)
                {
                    return t
                }
                _processObservableMessage(t)
                {
                    if ("subscribed" in t) {
                        const e = this._subscribeRelatedCalls.get(t.id);
                        if (e)
                            try {
                                e.resolve()
                            } finally {
                                this._subscribeRelatedCalls.delete(t.id)
                            }
                        else
                            this._log.warn(`received rpc call subscribed response for unregistered subscribe call ${t.id}`)
                    } else if ("unsubscribed" in t) {
                        const e = this._subscribeRelatedCalls.get(t.id);
                        if (e)
                            try {
                                e.resolve()
                            } finally {
                                this._subscribeRelatedCalls.delete(t.id),
                                this._subscribers.delete(t.id)
                            }
                        else
                            this._log.warn(`received rpc call unsubscribed response for unregistered unsubscribe call ${t.id}`)
                    } else if ("next" in t)
                        try {
                            const e = this._subscribers.get(t.subscriptionId);
                            e ? e.subscriber.next(t.next) : this._log.warn(`received observable next message for unregistered subscription ${t.subscriptionId}`)
                        } catch (e) {
                            this._subscribers.delete(t.subscriptionId)
                        }
                    else if ("complete" in t)
                        try {
                            const e = this._subscribers.get(t.subscriptionId);
                            e ? (e.subscriber.complete(), this._subscribers.delete(t.subscriptionId)) : this._log.warn(`received observable complete for unregistered subscription ${t.subscriptionId}`)
                        } catch (e) {
                            this._subscribers.delete(t.subscriptionId)
                        }
                    else if ("err" in t)
                        try {
                            const e = this._subscribers.get(t.subscriptionId);
                            e ? e.subscriber.error(t.err) : this._log.warn(`received observable error for unregistered subscription  ${t.subscriptionId}`)
                        } finally {
                            this._subscribers.delete(t.subscriptionId)
                        }
                    else if ("subErr" in t) {
                        const e = this._subscribeRelatedCalls.get(t.id);
                        try {
                            const n = this._subscribers.get(t.id);
                            n ? n.subscriber.error(t.subErr) : this._log.warn(`received subscription error response for unregistered call ${t.id}`)
                        } finally {
                            e && (e.reject(t.subErr), this._subscribeRelatedCalls.delete(t.id)),
                            this._observables.delete(t.subscribableId),
                            this._subscribers.delete(t.id)
                        }
                    } else if ("ping" in t)
                        try {
                            this._observables.get(t.ping) ? this._observableTransport.outbound({
                                pong: t.ping
                            }) : this._log.warn(`received ping for unregistered observable ${t.ping}`)
                        } finally {
                            (0, o.EI)()
                        }
                }
                _handleCall(t, e)
                {
                    let n = o.iy.create();
                    for (; this._calls.has(n);)
                        n = o.iy.create();
                    const r = s.Ok.createCompletionSource();
                    this._calls.set(n, r);
                    const i = e.map((t => (0, c.R)(t) ? t.toJSON() : t));
                    return this._transport.outbound({
                        id: n,
                        method: t,
                        args: i,
                        serverId: this._serverId
                    }), r.promise
                }
                _createSubscribeHandler(t, e)
                {
                    let n = o.iy.create();
                    for (; this._subscribeRelatedCalls.has(n);)
                        n = o.iy.create();
                    const r = s.Ok.createCompletionSource();
                    return this._subscribeRelatedCalls.set(n, r), this._observableTransport.outbound({
                        id: n,
                        subscribableId: t,
                        action: "subscribe"
                    }), this._subscribers.set(n, {
                        subscribableId: t,
                        subscriber: e
                    }), () => {
                        this._handleUnsubscribe(n, t)
                    }
                }
                _handleUnsubscribe(t, e)
                {
                    let n = o.iy.create();
                    for (; this._subscribeRelatedCalls.has(n);)
                        n = o.iy.create();
                    const r = s.Ok.createCompletionSource();
                    return this._subscribeRelatedCalls.set(n, r), this._observableTransport.outbound({
                        id: n,
                        subscriptionId: t,
                        subscribableId: e,
                        action: "unsubscribe"
                    }), this._subscribers.delete(t), r.promise
                }
                dispose()
                {
                    for (const t of this._observables.keys())
                        this._observableTransport.outbound({
                            id: o.iy.create(),
                            subscribableId: t,
                            action: "dispose"
                        });
                    this._observables.clear(),
                    this._transportSubscription.unsubscribe(),
                    this._observableTransportSubscription.unsubscribe(),
                    this._calls.clear(),
                    this._subscribeRelatedCalls.clear()
                }
            }
        },
        82236: (t, e, n) => {
            n.d(e, {
                X: () => o
            });
            var r = n(90361),
                i = n(96702);
            class o {
                constructor(t, e)
                {
                    this._transport = t,
                    this._log = e,
                    this._calls = new Map,
                    this._sub = this._transport.inbound.subscribe((t => {
                        var e;
                        const n = this._calls.get(t.id);
                        if (n)
                            try {
                                "err" in t ? n.reject(t.err) : n.resolve(t.res)
                            } finally {
                                this._calls.delete(t.id)
                            }
                        else
                            null === (e = this._log) || void 0 === e || e.warn(`received rpc call response for unregistered call ${t.id}`)
                    })),
                    this.api = new Proxy({}, {
                        get: (t, e) => "then" === e ? void 0 : (...t) => this._handleCall(e, t)
                    })
                }
                _handleCall(t, e)
                {
                    let n = r.iy.create();
                    for (; this._calls.has(n);)
                        n = r.iy.create();
                    const o = i.Ok.createCompletionSource();
                    return this._calls.set(n, o), this._transport.outbound({
                        id: n,
                        method: t,
                        args: e
                    }), o.promise
                }
                dispose()
                {
                    this._sub.unsubscribe()
                }
            }
        },
        58568: (t, e, n) => {
            function r(t) {
                return "tunnel" === t.tag
            }
            function i(t) {
                return "tunnel" !== t.tag
            }
            function o(t) {
                return i(t.data)
            }
            function s(t) {
                return e => t(e.data)
            }
            var a;
            n.d(e, {
                hs: () => r,
                ZQ: () => i,
                uN: () => o,
                Mk: () => s,
                JL: () => a
            }),
            function(t) {
                t.isSubscribe = t => "action" in t.data && "subscribe" === t.data.action,
                t.isUnsubscribe = t => "action" in t.data && "unsubscribe" === t.data.action,
                t.isDispose = t => "action" in t.data && "dispose" === t.data.action,
                t.isPong = t => "pong" in t.data,
                t.isPing = t => "ping" in t.data,
                t.isObservableResult = t => "subscribableId" in t
            }(a || (a = {}))
        },
        11264: (t, e, n) => {
            n.d(e, {
                l: () => r,
                R: () => i
            });
            const r = Symbol();
            function i(t) {
                return Boolean(t) && t._tag === r
            }
        },
        70205: (t, e, n) => {
            n.d(e, {
                Vc: () => m,
                EY: () => T,
                QB: () => k
            });
            var r = n(69243),
                i = n(96594);
            const o = r.readonly(r.partial({
                    legacyStopWorkingDate: i.si
                }), "SafariAppExtensionMigrationDynamicConfig"),
                s = r.readonly(i.PE({
                    enableByBrowser: i.Hb
                }), "GmailSendEmailPopupDynamicConfig"),
                a = r.type({
                    domain: r.string,
                    matchSubdomains: r.boolean,
                    allowedOriginPatterns: r.union([r.array(r.string), r.undefined]),
                    disableByBrowser: i.jt(i.Hb)
                }, "IframeIntegrationDomainRule"),
                u = r.readonly(r.exact(r.type({
                    enableGeneric: i.Wc(r.boolean, !1),
                    enableByDomain: i.Wc(r.array(a), []),
                    enableByBrowser: i.Wc(i.Hb, {
                        chrome: !0,
                        edge: !0
                    })
                })), "IframeIntegrationDynamicConfig"),
                c = r.readonly(i.PE({
                    enableByBrowser: i.Hb
                }), "DraggableGButtonDynamicConfig"),
                l = r.readonly(i.PE({
                    disabled: r.boolean,
                    disabledInOutlook: r.boolean,
                    disabledInGmail: r.boolean,
                    bannedPhrases: r.array(r.array(r.union([r.string, r.null])))
                }), "AutocompleteDynamicConfig"),
                f = r.readonly(r.partial({
                    disabled: r.boolean,
                    useHeatmapCanvas: r.boolean,
                    onboardingEnabled: r.boolean
                }), "ReadersAttentionDynamicConfig"),
                d = r.readonly(r.type({
                    enableByBrowser: i.jt(i.Hb),
                    turnaroundTime: r.number
                }), "ProofitDynamicConfig"),
                p = r.readonly(r.partial({
                    enableByBrowser: i.Hb
                }), "SmartPhrasesDynamicConfig"),
                h = r.readonly(r.partial({
                    enableByBrowser: i.Hb
                }), "ToneAIDynamicConfig"),
                b = r.readonly(r.partial({
                    enableByBrowser: i.Hb
                }), "EthicalAIDynamicConfig"),
                g = r.readonly(r.partial({
                    enableByBrowser: i.Hb
                }), "ManakinExperimentDynamicConfig"),
                v = r.readonly(r.partial({
                    enableByBrowser: i.Hb
                }), "SentenceLevelBrandTonesDynamicConfig"),
                y = r.readonly(i.PE({
                    disabled: r.boolean,
                    disabledByDomainPattern: r.array(r.string)
                }), "GapTransformCardDynamicConfig"),
                m = r.readonly(r.partial({
                    enabled: r.boolean,
                    disabledByDomain: r.array(r.string)
                }), "LlamaIntegrationDynamicConfig"),
                _ = r.readonly(i.PE({
                    disabled: r.boolean,
                    bannedDict: r.array(r.string),
                    bannedCorrections: r.array(r.tuple([r.string, r.union([r.string, r.null])]))
                }), "AutocorrectDynamicConfig"),
                w = r.readonly(r.type({
                    enableCanvas: r.boolean,
                    highlightColors: r.array(r.string),
                    underlineColors: r.array(r.string)
                }), "GDocsCanvasConfigDynamicConfig"),
                x = r.readonly(r.partial({
                    disabled: r.boolean,
                    disableByBrowser: i.Hb,
                    disableByDomain: r.readonlyArray(r.string)
                }), "ShortenItDynamicConfig"),
                E = r.readonly(r.partial({
                    disabled: r.boolean,
                    disableByBrowser: i.Hb,
                    disableByDomain: r.readonlyArray(r.string)
                }), "AttentionScoreCardDynamicConfig"),
                S = r.readonly(r.partial({
                    disabled: r.boolean,
                    disableByBrowser: i.Hb,
                    disableByDomain: r.readonlyArray(r.string)
                }), "ConsistencyCardDynamicConfig"),
                A = r.readonly(r.partial({
                    enabled: r.boolean,
                    excludeClassNames: r.readonlyArray(r.string),
                    excludeSelectors: r.readonlyArray(r.string)
                }), "SlatejsDynamicConfig"),
                I = r.readonly(r.partial({
                    triggerURLs: r.readonlyArray(r.string)
                }), "DraftAIUpsellDynamicConfig"),
                O = r.exact(i.PE({
                    safariAppExtensionMigration: o,
                    newRichTextFieldsEnabled: r.boolean,
                    fluidDisabledForFirefox: r.boolean,
                    fluidDisabledForSafari: r.boolean,
                    autocomplete: l,
                    autocorrect: _,
                    gmailSendEmailPopup: s,
                    fullSentenceRewritesDisabled: r.boolean,
                    overrideKey: i.Wc(r.string, "dynamicConfigOverrideKey"),
                    iframeIntegration: u,
                    showExtensionConflictPopup: r.boolean,
                    readersAttention: f,
                    ungatingRenewalNotificationEnabled: r.boolean,
                    proofit: d,
                    refreshExperimentsInterval: r.number,
                    throttlePerformanceInterval: r.number,
                    quillJSCatchAllDisabled: r.boolean,
                    smartPhrases: p,
                    toneAI: h,
                    draggableGButton: c,
                    manakinExperiment: g,
                    sentenceLevelBrandTones: v,
                    requireAuthCookieAccess: r.boolean,
                    gapTransformCard: y,
                    llamaIntegration: m,
                    highlightsBlendingEnabled: r.boolean,
                    gDocsCanvasConfig: w,
                    shortenIt: x,
                    attentionScoreCard: E,
                    confidentialModeEnabled: r.boolean,
                    consistencyCard: S,
                    slatejs: A,
                    dlpEnabled: r.boolean,
                    draftAIUpsell: I,
                    ethicalAI: b
                })),
                T = {
                    safariAppExtensionMigration: "safariAppExtensionMigration_1558396627629",
                    newRichTextFieldsEnabled: "newRichTextFieldsEnabled_1567530773088",
                    fluidDisabledForFirefox: "fluidDisabledForFirefox_1567530773089",
                    fluidDisabledForSafari: "fluidDisabledForSafari_1567530773090",
                    autocorrect: "autocorrect_1579700246281",
                    autocomplete: "autocomplete_1591162228085",
                    gmailSendEmailPopup: "gmailSendEmailPopup_1588710046696",
                    fullSentenceRewritesDisabled: "fullSentenceRewritesDisabled_1595353312714",
                    iframeIntegration: "iframeIntegration_1593643390051",
                    overrideKey: "overrideKeyName_1596156512364",
                    showExtensionConflictPopup: "showExtensionConflictPopup_1597916739172",
                    readersAttention: "readersAttention_1597884313725",
                    ungatingRenewalNotificationEnabled: "ungatingRenewalNotificationEnabled_1599074790962",
                    proofit: "proofit_1600711036876",
                    refreshExperimentsInterval: "refreshExperimentsInterval_1601638971190",
                    throttlePerformanceInterval: "throttlePerformanceInterval_1603889683416",
                    quillJSCatchAllDisabled: "quillJSCatchAllDisabled_1606352678466",
                    smartPhrases: "smartPhrases_1610388437186",
                    toneAI: "toneAI_1622644675216",
                    draggableGButton: "draggableGButton_1610396074136",
                    manakinExperiment: "manakinExperiment_1614377586742",
                    sentenceLevelBrandTones: "sentenceLevelBrandTones_1614289097065",
                    requireAuthCookieAccess: "requireAuthCookieAccess_1614620202105",
                    gapTransformCard: "gapTransformCard_1618874880869",
                    llamaIntegration: "llamaIntegration_1620108441433",
                    highlightsBlendingEnabled: "highlightsBlendingEnabled_1620339604804",
                    gDocsCanvasConfig: "gDocsCanvasConfig_1621558551011",
                    shortenIt: "shortenIt_1622820878915",
                    attentionScoreCard: "attentionScoreCard_1627677830344",
                    confidentialModeEnabled: "confidentialModeEnabled_1622017526624",
                    consistencyCard: "consistencyCard_1623273583508",
                    slatejs: "slatejs_1624453574243",
                    dlpEnabled: "dlpEnabled_1623225997151",
                    draftAIUpsell: "draftAIUpsell_1627424945372",
                    ethicalAI: "ethicalAI_1627579461366"
                },
                k = r.readonly(r.intersection([i.ZB(O, T), r.exact(r.type({
                    version: r.string
                }))]), "DynamicConfigData")
        },
        90605: (t, e, n) => {
            n.d(e, {
                cS: () => o,
                Jx: () => s,
                Qc: () => a
            });
            var r = n(95195),
                i = n(70205);
            const o = {
                source: "local",
                version: "0",
                newRichTextFieldsEnabled: !0,
                fluidDisabledForFirefox: !1,
                fluidDisabledForSafari: !1,
                fullSentenceRewritesDisabled: !1,
                overrideKey: "dynamicConfigOverrideKey",
                ungatingRenewalNotificationEnabled: !1,
                quillJSCatchAllDisabled: !1
            };
            function s(t, e) {
                const n = t.decode(e);
                if ((0, r.isLeft)(n))
                    throw new Error("Can't parse " + n.left.map((t => t.message)).join("; "));
                return n.right
            }
            function a(t, e) {
                const n = s(i.QB, e);
                return Object.assign(Object.assign({}, n), {
                    source: t
                })
            }
        },
        4120: (t, e, n) => {
            var r,
                i;
            n.d(e, {
                FW: () => r,
                n5: () => i
            }),
            function(t) {
                t.anonymous = "anonymous",
                t.registered = "registered",
                t.premium = "premium"
            }(r || (r = {})),
            function(t) {
                function e(t) {
                    return !!t.institutionInfo
                }
                t.getType = function(t) {
                    return t.premium ? r.premium : t.anonymous ? r.anonymous : r.registered
                },
                t.getUserRole = function(t, e) {
                    var n;
                    return null === (n = t.roles) || void 0 === n ? void 0 : n.find((t => t.type === e))
                },
                t.isEdcBlocked = function(t) {
                    return !!t.edc && !t.edc.compliant
                },
                t.hasRole = function(t) {
                    return !!t.customFields && (void 0 !== t.customFields.frontend_role && "" !== t.customFields.frontend_role)
                },
                t.hasSoundFluentGoals = function(t) {
                    return !!t.customFields && (void 0 !== t.customFields.frontend_soundFluent && "" !== t.customFields.frontend_soundFluent)
                },
                t.hasPrimaryLanguage = function(t) {
                    return !!t.customFields && (void 0 !== t.customFields.frontend_primaryLanguage && "" !== t.customFields.frontend_primaryLanguage)
                },
                t.isBusinessAdmin = function(t) {
                    var e,
                        n;
                    const r = (null === (e = null == t ? void 0 : t.institutionInfo) || void 0 === e ? void 0 : e.organizationType) || "";
                    return Boolean(["BUSINESS", "NGO", "GOV"].includes(r) && (null === (n = null == t ? void 0 : t.institutionInfo) || void 0 === n ? void 0 : n.admin))
                },
                t.doesUserBelongToInstitution = function(t) {
                    return !!(null == t ? void 0 : t.institutionInfo)
                },
                t.doesUserBelongToEDUInstitution = function(t) {
                    var e;
                    return ["EDU"].includes((null === (e = null == t ? void 0 : t.institutionInfo) || void 0 === e ? void 0 : e.organizationType) || "")
                },
                t.doesUserBelongToWorkspace = function(t) {
                    var e;
                    return (null === (e = t.roles) || void 0 === e ? void 0 : e.map((t => t.type)).includes("WORKSPACE")) || !1
                },
                t.isClaimed = function(t) {
                    return t.groups.includes("claimed-invitation")
                },
                t.isGrammarlyEmployee = function(t) {
                    return t.email.endsWith("@grammarly.com")
                },
                t.isInstitutionUser = e,
                t.isConsumerUser = function(t) {
                    return !e(t)
                },
                t.defaultUser = {
                    anonymous: !0,
                    groups: [],
                    mimic: [],
                    id: "id",
                    premium: !1,
                    isTest: !1,
                    settings: {},
                    subscriptionFree: !1,
                    type: "anonymous",
                    email: "",
                    registrationDate: (new Date).toString(),
                    firstName: ""
                }
            }(i || (i = {}))
        },
        37869: (t, e, n) => {
            function r(t, e) {
                return [].concat(...e.map(t))
            }
            function i(t) {
                return [].concat(...t)
            }
            function o(t) {
                return [...new Set(t)]
            }
            function s(t, e) {
                return void 0 !== e ? Array.from(Array(e - t), ((e, n) => n + t)) : Array.from(Array(t), ((t, e) => e))
            }
            function a(t, e=((t, e) => t === e)) {
                if (0 === t.length)
                    return [];
                const n = [[t[0]]];
                for (let r = 1; r < t.length; r += 1) {
                    const i = n[n.length - 1][0],
                        o = t[r];
                    e(i, o) ? n[n.length - 1].push(o) : n.push([o])
                }
                return n
            }
            function u(t, e) {
                return t.filter((t => !!t)).join(e)
            }
            function c(t, e) {
                return t.sort(((t, n) => t[e] - n[e]))
            }
            n.d(e, {
                VS: () => r,
                xH: () => i,
                EB: () => o,
                w6: () => s,
                vM: () => a,
                lM: () => u,
                Bd: () => c
            })
        },
        88848: (t, e, n) => {
            n.d(e, {
                hu: () => i,
                Cq: () => o
            });
            class r extends Error {
                constructor(t)
                {
                    super(`Assertion failed: ${t ? "string" == typeof t ? t : t() : "(unnamed)"}`)
                }
            }
            function i(t, e) {
                if (!t)
                    throw new r(e)
            }
            function o(t, e) {
                if (null == t)
                    throw new r((() => e ? `Expected ${e} to be non-null` : "Expected non-null"));
                return t
            }
        },
        44618: (t, e, n) => {
            function r(t) {
                return new Proxy({}, {
                    get(e, n) {
                        const r = t[n];
                        return r && "function" == typeof r ? r.bind(t) : void 0
                    }
                })
            }
            n.d(e, {
                a: () => r
            })
        },
        24448: (t, e, n) => {
            n.d(e, {
                P: () => r
            });
            class r {
                constructor(t)
                {
                    if (this.capacity = t, this._start = 0, this._end = 0, this._isFull = !1, t <= 0)
                        throw new Error("Invalid capacity " + t);
                    this._buffer = new Array(t)
                }
                get size()
                {
                    return this._isFull ? this._buffer.length : (this._end - this._start + this._buffer.length) % this._buffer.length
                }
                get isEmpty()
                {
                    return 0 === this.size
                }
                get isFull()
                {
                    return this._isFull
                }
                get head()
                {
                    return this.isEmpty ? null : this._buffer[this._start]
                }
                get tail()
                {
                    return this.isEmpty ? null : this._buffer[0 === this._end ? this.capacity - 1 : this._end - 1]
                }
                enqueue(t)
                {
                    let e = null;
                    return this.isFull && (e = this._buffer[this._start], this._startInc()), this._buffer[this._end] = t, this._endInc(), this._start === this._end && (this._isFull = !0), e
                }
                dequeue()
                {
                    if (this.isEmpty)
                        return null;
                    const t = this._buffer[this._start];
                    return this._buffer[this._start] = null, this._startInc(), this._isFull = !1, t
                }
                delete(t)
                {
                    const e = this._buffer.indexOf(t);
                    if (e >= 0) {
                        if (e < this._end) {
                            for (let t = e; t < this._end - 1; t++)
                                this._buffer[t] = this._buffer[t + 1];
                            this._buffer[--this._end] = null
                        } else {
                            for (let t = this._start; t < e; t++)
                                this._buffer[t + 1] = this._buffer[t];
                            this._buffer[this._start] = null,
                            this._startInc()
                        }
                        return this._isFull = !1, !0
                    }
                    return !1
                }
                _startInc()
                {
                    this._start++,
                    this._start === this.capacity && (this._start = 0)
                }
                _endInc()
                {
                    this._end++,
                    this._end === this.capacity && (this._end = 0)
                }
                clear()
                {
                    this._buffer = new Array(this.capacity),
                    this._start = this._end = 0,
                    this._isFull = !1
                }
                toArray()
                {
                    let t;
                    if (this.isEmpty)
                        t = [];
                    else if (this._start < this._end)
                        t = this._buffer.slice(this._start, this._end);
                    else {
                        t = new Array(this.size);
                        let e = 0;
                        for (let n = this._start; n < this.capacity; ++n, ++e)
                            t[e] = this._buffer[n];
                        for (let n = 0; n < this._end; ++n, ++e)
                            t[e] = this._buffer[n]
                    }
                    return t
                }
            }
        },
        90361: (t, e, n) => {
            n.d(e, {
                fS: () => o,
                xB: () => s,
                cq: () => a,
                vE: () => c,
                wU: () => l,
                DV: () => f,
                EI: () => d,
                fQ: () => p,
                X0: () => h,
                Nf: () => b,
                hz: () => g,
                HO: () => v,
                P2: () => y,
                XD: () => m,
                Vo: () => w,
                iy: () => x,
                bc: () => E,
                hr: () => S
            });
            var r = n(3103),
                i = n(96702);
            const o = r.f;
            class s {
                constructor(t)
                {
                    this._getFallbackValue = t
                }
                init(t)
                {
                    if (void 0 !== this._value)
                        throw new Error("Global value already initialized.");
                    this._value = t
                }
                get()
                {
                    if (void 0 === this._value) {
                        if (void 0 === this._getFallbackValue)
                            throw new Error("Global value not initialized and no fallback value provided.");
                        this._value = this._getFallbackValue()
                    }
                    return this._value
                }
            }
            function a(t, e) {
                return t.some((t => t === e)) ? e : void 0
            }
            class u extends Error {
                constructor(t)
                {
                    super("Matching not exhaustive" + (t ? `: unexpected value ${t}` : ""))
                }
            }
            function c(t) {
                throw new u(t)
            }
            function l(t) {
                const e = parseInt(t, 10);
                return isNaN(e) ? void 0 : e
            }
            function f(t, e) {
                try {
                    return t()
                } catch (t) {
                    return e(t)
                }
            }
            function d() {}
            function p(t) {
                return !!t
            }
            function h(t) {
                return !t
            }
            function b(t) {
                return null != t
            }
            function g(t) {
                let e,
                    n = !1;
                return (...r) => (n || (n = !0, e = t(...r)), e)
            }
            function v(t, e) {
                const n = new Set;
                let r;
                return (...i) => {
                    const o = e(...i);
                    return n.has(o) || (n.add(o), r = t(...i)), r
                }
            }
            function y(t, e) {
                let n,
                    r,
                    o = !0;
                function s(t, n=[]) {
                    return o && (o = !1, r = i.Ok.createCompletionSource(), setTimeout((() => {
                        try {
                            r.resolve(e(...n))
                        } catch (t) {
                            r.reject(t)
                        } finally {
                            o = !0
                        }
                    }), t)), r.promise
                }
                return (...e) => {
                    const r = n;
                    return n = Date.now(), s(void 0 === r || n - r >= t ? 0 : t - (n - r), e)
                }
            }
            function m(t, e, n) {
                const r = n();
                return t > 0 ? r.catch((r => new Promise(((t, n) => setTimeout(t, e))).then((r => m(t - 1, e, n))))) : r
            }
            class _ {
                constructor(t)
                {
                    this._factory = t,
                    this._hasValue = !1
                }
                get hasValue()
                {
                    return this._hasValue
                }
                get()
                {
                    return this._hasValue || (this._value = this._factory(), this._hasValue = !0), this._value
                }
            }
            function w(t) {
                return new _(t)
            }
            var x;
            !function(t) {
                function e() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                }
                t.create = function() {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }(x || (x = {}));
            void 0 !== self.requestIdleCallback && self.requestIdleCallback;
            function E(...t) {
                return t
            }
            function S(t) {
                return t.replace(/[.*+?()\[\]{}^$\\\/]/g, "\\$&")
            }
        },
        96594: (t, e, n) => {
            n.d(e, {
                ZB: () => i,
                si: () => o,
                PE: () => s,
                jt: () => a,
                Wc: () => u,
                Hb: () => c
            });
            var r = n(69243);
            function i(t, e, n) {
                const i = {};
                for (const [t, n] of Object.entries(e))
                    i[n] = t;
                return new r.Type(null != n ? n : `mapped(${t.name})`, t.is, ((e, n) => {
                    if (!e || "object" != typeof e)
                        return t.validate(e, n);
                    const r = {};
                    for (const t in e)
                        t in i ? r[i[t]] = e[t] : r[t] = e[t];
                    return t.validate(r, n)
                }), (n => {
                    const r = t.encode(n);
                    if (!r)
                        return r;
                    const i = {};
                    for (const t in r)
                        t in e ? i[e[t]] = r[t] : i[t] = r[t];
                    return i
                }))
            }
            const o = new r.Type("ISODate", (t => t instanceof Date), ((t, e) => {
                if ("string" == typeof t) {
                    const e = new Date(t);
                    if (!isNaN(e.getTime()))
                        return (0, r.success)(e)
                }
                return (0, r.failure)(t, e)
            }), (t => t.toISOString()));
            function s(t, e) {
                const n = (0, r.partial)(t, e);
                return new r.PartialType(null != e ? e : `partialAsUndefined(${n.name})`, n.is, ((e, r) => {
                    if (!e || "object" != typeof e)
                        return n.validate(e, r);
                    const i = Object.assign({}, e);
                    for (const e in t)
                        e in i || (i[e] = void 0);
                    return n.validate(i, r)
                }), n.encode, t)
            }
            function a(t) {
                return (0, r.union)([t, r.undefined])
            }
            function u(t, e, n) {
                return new r.Type(null != n ? n : `withDefault(${t.name})`, t.is, ((n, i) => void 0 === n ? (0, r.success)(e) : t.validate(n, i)), t.encode)
            }
            const c = (0, r.partial)({
                chrome: r.boolean,
                edge: r.boolean,
                firefox: r.boolean,
                safari: r.boolean
            }, "SwitchByBrowser")
        },
        24945: (t, e, n) => {
            var r;
            n.d(e, {
                i: () => r,
                s: () => o
            }),
            function(t) {
                t.TRACE = "TRACE",
                t.DEBUG = "DEBUG",
                t.INFO = "INFO",
                t.WARN = "WARN",
                t.ERROR = "ERROR",
                t.FATAL = "FATAL"
            }(r || (r = {}));
            const i = {
                [r.TRACE]: 1,
                [r.DEBUG]: 2,
                [r.INFO]: 3,
                [r.WARN]: 4,
                [r.ERROR]: 5,
                [r.FATAL]: 6
            };
            function o(t) {
                return i[t] || 0
            }
        },
        84416: (t, e, n) => {
            n.d(e, {
                x: () => a
            });
            var r = n(92783),
                i = n(24448),
                o = n(22955);
            let s;
            class a extends o.rK {
                constructor(t, e, n)
                {
                    super(t),
                    this._config = e,
                    this._historyArgs = n,
                    this._historyEnabled = () => {
                        var t;
                        return Boolean("prod" !== (0, r.dU)() || (null === (t = this._historyArgs.enabledInProd) || void 0 === t ? void 0 : t.get()))
                    },
                    this._setupHistoryDownload = () => {
                        var t;
                        void 0 === s && (s = new i.P(null !== (t = this._historyArgs.maxEventsToStore) && void 0 !== t ? t : 1e3), self.GRDownloadReport = () => {
                            var t,
                                e,
                                n;
                            if (this._historyEnabled()) {
                                const r = t => {
                                        try {
                                            return JSON.stringify(t)
                                        } catch (e) {
                                            return `${t}`
                                        }
                                    },
                                    i = [["Level", "Logger", "Timestamp", "Message"].join("\t"), ...s.toArray().map((t => {
                                        const e = [t.level, t.loggerName, t.timestamp.toISOString(), t.message];
                                        return t.data && e.push(r(t.data)), t.exception && e.push(r(t.exception)), e.join("\t")
                                    }))].join("\n");
                                if (self.document) {
                                    const e = self.document.createElement("a");
                                    e.href = "data:application/octet-stream," + encodeURIComponent(i),
                                    e.target = "_blank",
                                    e.download = null !== (t = this._historyArgs.downloadFileName) && void 0 !== t ? t : "grammarly-logs.tsv",
                                    e.click()
                                }
                                null === (n = (e = this._historyArgs).onDownload) || void 0 === n || n.call(e)
                            }
                        })
                    },
                    this._setupHistoryDownload()
                }
                handleEvent(t)
                {
                    this._config.filterFn(t) && this._config.writer.write(t),
                    this._historyEnabled() && (null == s || s.enqueue(t))
                }
            }
        },
        74850: (t, e, n) => {
            n.d(e, {
                Y: () => r
            });
            var r,
                i = n(22955),
                o = n(22764);
            !function(t) {
                t.create = function(t) {
                    return new i.rl(t, (() => (0, o.O)().logger.create(t)))
                }
            }(r || (r = {}))
        },
        69219: (t, e, n) => {
            n.d(e, {
                x: () => i
            });
            var r = n(24945);
            const i = t => e => (0, r.s)(e.level) >= (0, r.s)(t)
        },
        52403: (t, e, n) => {
            n.d(e, {
                n: () => o
            });
            var r = n(44618),
                i = n(24945);
            class o {
                constructor()
                {
                    this._writeFunc = o._commonWriteFunc
                }
                write(t)
                {
                    try {
                        const e = [`grm ${t.level} 【${t.loggerName}】░░ ${t.message}`];
                        t.data && e.push(t.data),
                        t.exception && e.push(t.exception),
                        this._writeFunc[t.level].apply(null, e)
                    } catch (t) {}
                }
            }
            o._commonWriteFunc = function() {
                const {log: t, info: e, warn: n, error: o} = (0, r.a)(console);
                return {
                    [i.i.TRACE]: t,
                    [i.i.DEBUG]: t,
                    [i.i.INFO]: e,
                    [i.i.WARN]: n,
                    [i.i.ERROR]: o,
                    [i.i.FATAL]: o
                }
            }()
        },
        22955: (t, e, n) => {
            n.d(e, {
                rK: () => i,
                rl: () => o
            });
            var r = n(24945);
            class i {
                constructor(t)
                {
                    this.name = t,
                    this._isError = t => {
                        const e = t;
                        return e && (void 0 !== e.message && void 0 !== e.name || void 0 !== e.stack)
                    }
                }
                trace(t, e, n)
                {
                    this._logMessage(r.i.TRACE, t, e, n)
                }
                debug(t, e, n)
                {
                    this._logMessage(r.i.DEBUG, t, e, n)
                }
                info(t, e, n)
                {
                    this._logMessage(r.i.INFO, t, e, n)
                }
                warn(t, e, n)
                {
                    this._logMessage(r.i.WARN, t, e, n)
                }
                error(t, e, n)
                {
                    this._logMessage(r.i.ERROR, t, e, n)
                }
                fatal(t, e, n)
                {
                    this._logMessage(r.i.FATAL, t, e, n)
                }
                _logMessage(t, e, n, r)
                {
                    const i = {
                        level: t,
                        loggerName: this.name,
                        message: e,
                        timestamp: new Date
                    };
                    n && (this._isError(n) ? i.exception = n : i.data = n),
                    i.data = i.data || r,
                    this.handleEvent(i)
                }
            }
            class o {
                constructor(t, e)
                {
                    this.name = t,
                    this._createLogger = e
                }
                trace(t, e, n)
                {
                    void 0 === this._logger && (this._logger = this._createLogger(this.name)),
                    this._logger.trace(t, e, n)
                }
                debug(t, e, n)
                {
                    void 0 === this._logger && (this._logger = this._createLogger(this.name)),
                    this._logger.debug(t, e, n)
                }
                info(t, e, n)
                {
                    void 0 === this._logger && (this._logger = this._createLogger(this.name)),
                    this._logger.info(t, e, n)
                }
                warn(t, e, n)
                {
                    void 0 === this._logger && (this._logger = this._createLogger(this.name)),
                    this._logger.warn(t, e, n)
                }
                error(t, e, n)
                {
                    void 0 === this._logger && (this._logger = this._createLogger(this.name)),
                    this._logger.error(t, e, n)
                }
                fatal(t, e, n)
                {
                    void 0 === this._logger && (this._logger = this._createLogger(this.name)),
                    this._logger.fatal(t, e, n)
                }
            }
        },
        58028: (t, e, n) => {
            function r(t, e) {
                const n = {};
                return Object.keys(e).forEach((r => n[r] = t(r, e[r]))), n
            }
            function i(t, e) {
                const n = {};
                return Object.keys(e).forEach((r => {
                    t(r, e[r]) && (n[r] = e[r])
                })), n
            }
            function o(t) {
                return Object.keys(t).map((e => t[e]))
            }
            function s(t) {
                return Object.keys(t).map((e => [e, t[e]]))
            }
            function a(t) {
                const e = {};
                for (const [n, r] of t)
                    e[n] = r;
                return e
            }
            n.d(e, {
                UI: () => r,
                hX: () => i,
                VO: () => o,
                X: () => s,
                Ue: () => a,
                Kn: () => u,
                RH: () => c,
                vZ: () => l
            });
            const u = t => t === Object(t) && !Array.isArray(t),
                c = (t, ...e) => {
                    if (!e.length)
                        return t;
                    const n = t;
                    if (u(n)) {
                        const t = e.length;
                        for (let r = 0; r < t; r += 1) {
                            const t = e[r];
                            if (u(t))
                                for (const e in t)
                                    t.hasOwnProperty(e) && (u(t[e]) ? (n[e] && u(n[e]) || (n[e] = {}), c(n[e], t[e])) : Array.isArray(n[e]) && Array.isArray(t[e]) ? n[e] = Array.from(new Set(n[e].concat(t[e]))) : n[e] = Array.isArray(t[e]) ? Array.from(t[e]) : t[e])
                        }
                    }
                    return n
                };
            function l(t, e) {
                if (t === e)
                    return !0;
                if (f(t) || f(e))
                    return t === e;
                if (Object.keys(t).length !== Object.keys(e).length)
                    return !1;
                for (const n in t) {
                    if (!(n in e))
                        return !1;
                    if (!l(t[n], e[n]))
                        return !1
                }
                return !0
            }
            function f(t) {
                return t !== Object(t)
            }
        },
        96702: (t, e, n) => {
            n.d(e, {
                Ok: () => i,
                Wp: () => s,
                Fb: () => c
            });
            const r = function(t) {
                return new Promise((e => setTimeout(e, t)))
            };
            var i;
            function o(t) {
                return new Promise(((e, n) => Promise.resolve(t).then(n, e)))
            }
            function s(t) {
                return o(Promise.all([...t].map(o)))
            }
            !function(t) {
                function e(t) {
                    return new Promise(t)
                }
                t.create = e,
                t.createCompletionSource = function() {
                    let t,
                        e;
                    return {
                        promise: new Promise(((n, r) => {
                            t = n,
                            e = r
                        })),
                        resolve(e) {
                            t(e)
                        },
                        reject(t) {
                            e(t)
                        }
                    }
                },
                t.sync = function(t) {
                    return e(((e, n) => e(t())))
                },
                t.delay = r
            }(i || (i = {}));
            class a extends Error {}
            function u(t) {
                return new Promise(((e, n) => setTimeout((() => n(new a("Promise timed out."))), t)))
            }
            function c(t, e) {
                return Promise.race([u(t), e])
            }
        },
        97757: (t, e, n) => {
            n.d(e, {
                d: () => r,
                s: () => s
            });
            var r,
                i = n(44586),
                o = n(33665);
            function s(t) {
                return t instanceof i.y ? t : new i.y((e => t.subscribe(e)))
            }
            !function(t) {
                t.measure = t => e => new i.y((n => e.subscribe((e => t((() => n.next(e)))), (t => n.error(t)), (() => n.complete())))),
                t.using = (t, e) => (0, o.g)(t, e),
                t.doNothing = t => t
            }(r || (r = {}))
        },
        5817: (t, e, n) => {
            n.d(e, {
                E0: () => r,
                Z7: () => i,
                g0: () => a,
                iL: () => u,
                an: () => c,
                m9: () => l,
                LK: () => f,
                i4: () => d,
                Xd: () => p
            });
            const r = 1e3,
                i = 60 * r,
                o = 60 * i,
                s = 24 * o,
                a = 7 * s,
                u = 30 * s;
            function c(t) {
                return t * s
            }
            function l(t) {
                return t * r
            }
            function f(t) {
                return t * i
            }
            function d(t) {
                return t * o
            }
            function p(t) {
                return r / t
            }
        },
        65747: (t, e, n) => {
            var r = n(93476)((function(t) {
                return t[1]
            }));
            r.push([t.id, "._3Spqv-animatedUnderline{visibility:hidden;position:fixed;}._3Spqv-animatedUnderline:after{content:'';position:absolute;visibility:visible;height:3px;bottom:0;border-radius:10px;background:#488cc8;animation:_15P6d-showUnderline 1.3s ease forwards}._3Spqv-animatedUnderline._1jDIx-completeAnimation:after{animation:_15P6d-showUnderline .2s ease forwards}@keyframes _15P6d-showUnderline{0%{width:0%}100%{width:100%}}._28F_K-checkAnimatedUnderline{animation:_15P6d-showUnderline 2s ease forwards;}._28F_K-checkAnimatedUnderline._1jDIx-completeAnimation{animation:_15P6d-showUnderline .2s ease forwards}", ""]),
            r.locals = {
                animatedUnderline: "_3Spqv-animatedUnderline",
                showUnderline: "_15P6d-showUnderline",
                completeAnimation: "_1jDIx-completeAnimation",
                checkAnimatedUnderline: "_28F_K-checkAnimatedUnderline"
            },
            t.exports = r
        },
        93476: t => {
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var n = t(e);
                        return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                    })).join("")
                }, e.i = function(t, n, r) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    var i = {};
                    if (r)
                        for (var o = 0; o < this.length; o++) {
                            var s = this[o][0];
                            null != s && (i[s] = !0)
                        }
                    for (var a = 0; a < t.length; a++) {
                        var u = [].concat(t[a]);
                        r && i[u[0]] || (n && (u[2] ? u[2] = "".concat(n, " and ").concat(u[2]) : u[2] = n), e.push(u))
                    }
                }, e
            }
        },
        45241: (t, e, n) => {
            function r(t, e) {
                for (var n = e(t); "Left" === n._tag;)
                    n = e(n.left);
                return n.right
            }
            n.d(e, {
                _: () => r
            })
        },
        95195: (t, e, n) => {
            n.r(e),
            n.d(e, {
                isLeft: () => o,
                isRight: () => s,
                left: () => a,
                right: () => u,
                fromNullable: () => c,
                tryCatch: () => l,
                parseJSON: () => f,
                stringifyJSON: () => d,
                fromOption: () => p,
                fromPredicate: () => h,
                fold: () => b,
                getOrElseW: () => g,
                getOrElse: () => v,
                fromNullableK: () => y,
                chainNullableK: () => m,
                swap: () => _,
                orElse: () => w,
                filterOrElseW: () => x,
                filterOrElse: () => E,
                map: () => U,
                bimap: () => L,
                mapLeft: () => F,
                apW: () => B,
                ap: () => M,
                apFirst: () => V,
                apSecond: () => q,
                of: () => H,
                chainW: () => G,
                chain: () => $,
                chainFirstW: () => W,
                chainFirst: () => K,
                flatten: () => z,
                altW: () => Y,
                alt: () => J,
                extend: () => X,
                duplicate: () => Z,
                reduce: () => Q,
                foldMap: () => tt,
                reduceRight: () => et,
                traverse: () => nt,
                sequence: () => rt,
                throwError: () => it,
                URI: () => ot,
                getShow: () => st,
                getEq: () => at,
                getSemigroup: () => ut,
                getApplySemigroup: () => ct,
                getApplyMonoid: () => lt,
                getFilterable: () => ft,
                getWitherable: () => dt,
                getApplicativeValidation: () => pt,
                getAltValidation: () => ht,
                getValidation: () => bt,
                getValidationSemigroup: () => gt,
                Functor: () => vt,
                Applicative: () => yt,
                Monad: () => mt,
                Foldable: () => _t,
                Traversable: () => wt,
                Bifunctor: () => xt,
                Alt: () => Et,
                Extend: () => St,
                ChainRec: () => At,
                MonadThrow: () => It,
                getValidationMonoid: () => Ot,
                either: () => Tt,
                toError: () => kt,
                elem: () => Ct,
                exists: () => Rt,
                Do: () => Pt,
                bindTo: () => jt,
                bindW: () => Nt,
                bind: () => Dt,
                apSW: () => Ut,
                apS: () => Lt,
                traverseArrayWithIndex: () => Ft,
                traverseArray: () => Bt,
                sequenceArray: () => Mt
            });
            var r = n(45241),
                i = n(57050),
                o = function(t) {
                    return "Left" === t._tag
                },
                s = function(t) {
                    return "Right" === t._tag
                },
                a = function(t) {
                    return {
                        _tag: "Left",
                        left: t
                    }
                },
                u = function(t) {
                    return {
                        _tag: "Right",
                        right: t
                    }
                };
            function c(t) {
                return function(e) {
                    return null == e ? a(t) : u(e)
                }
            }
            function l(t, e) {
                try {
                    return u(t())
                } catch (t) {
                    return a(e(t))
                }
            }
            function f(t, e) {
                return l((function() {
                    return JSON.parse(t)
                }), e)
            }
            function d(t, e) {
                return l((function() {
                    return JSON.stringify(t)
                }), e)
            }
            var p = function(t) {
                    return function(e) {
                        return "None" === e._tag ? a(t()) : u(e.value)
                    }
                },
                h = function(t, e) {
                    return function(n) {
                        return t(n) ? u(n) : a(e(n))
                    }
                };
            function b(t, e) {
                return function(n) {
                    return o(n) ? t(n.left) : e(n.right)
                }
            }
            var g = function(t) {
                    return function(e) {
                        return o(e) ? t(e.left) : e.right
                    }
                },
                v = g;
            function y(t) {
                var e = c(t);
                return function(t) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                        return e(t.apply(void 0, n))
                    }
                }
            }
            function m(t) {
                var e = y(t);
                return function(t) {
                    return $(e(t))
                }
            }
            function _(t) {
                return o(t) ? u(t.left) : a(t.right)
            }
            function w(t) {
                return function(e) {
                    return o(e) ? t(e.left) : e
                }
            }
            var x = function(t, e) {
                    return G((function(n) {
                        return t(n) ? u(n) : a(e(n))
                    }))
                },
                E = x,
                S = function(t, e) {
                    return (0, i.pipe)(t, U(e))
                },
                A = function(t, e) {
                    return (0, i.pipe)(t, M(e))
                },
                I = function(t, e) {
                    return (0, i.pipe)(t, $(e))
                },
                O = function(t, e, n) {
                    return (0, i.pipe)(t, Q(e, n))
                },
                T = function(t) {
                    return function(e, n) {
                        var r = tt(t);
                        return (0, i.pipe)(e, r(n))
                    }
                },
                k = function(t, e, n) {
                    return (0, i.pipe)(t, et(e, n))
                },
                C = function(t) {
                    var e = nt(t);
                    return function(t, n) {
                        return (0, i.pipe)(t, e(n))
                    }
                },
                R = function(t, e, n) {
                    return (0, i.pipe)(t, L(e, n))
                },
                P = function(t, e) {
                    return (0, i.pipe)(t, F(e))
                },
                j = function(t, e) {
                    return (0, i.pipe)(t, J(e))
                },
                N = function(t, e) {
                    return (0, i.pipe)(t, X(e))
                },
                D = function(t, e) {
                    return (0, r._)(e(t), (function(t) {
                        return o(t) ? u(a(t.left)) : o(t.right) ? a(e(t.right.left)) : u(u(t.right.right))
                    }))
                },
                U = function(t) {
                    return function(e) {
                        return o(e) ? e : u(t(e.right))
                    }
                },
                L = function(t, e) {
                    return function(n) {
                        return o(n) ? a(t(n.left)) : u(e(n.right))
                    }
                },
                F = function(t) {
                    return function(e) {
                        return o(e) ? a(t(e.left)) : e
                    }
                },
                B = function(t) {
                    return function(e) {
                        return o(e) ? e : o(t) ? t : u(e.right(t.right))
                    }
                },
                M = B,
                V = function(t) {
                    return (0, i.flow)(U((function(t) {
                        return function() {
                            return t
                        }
                    })), M(t))
                },
                q = function(t) {
                    return (0, i.flow)(U((function() {
                        return function(t) {
                            return t
                        }
                    })), M(t))
                },
                H = u,
                G = function(t) {
                    return function(e) {
                        return o(e) ? e : t(e.right)
                    }
                },
                $ = G,
                W = function(t) {
                    return function(e) {
                        return (0, i.pipe)(e, G((function(e) {
                            return (0, i.pipe)(t(e), U((function() {
                                return e
                            })))
                        })))
                    }
                },
                K = W,
                z = $(i.identity),
                Y = function(t) {
                    return function(e) {
                        return o(e) ? t() : e
                    }
                },
                J = Y,
                X = function(t) {
                    return function(e) {
                        return o(e) ? e : u(t(e))
                    }
                },
                Z = X(i.identity),
                Q = function(t, e) {
                    return function(n) {
                        return o(n) ? t : e(t, n.right)
                    }
                },
                tt = function(t) {
                    return function(e) {
                        return function(n) {
                            return o(n) ? t.empty : e(n.right)
                        }
                    }
                },
                et = function(t, e) {
                    return function(n) {
                        return o(n) ? t : e(n.right, t)
                    }
                },
                nt = function(t) {
                    return function(e) {
                        return function(n) {
                            return o(n) ? t.of(a(n.left)) : t.map(e(n.right), u)
                        }
                    }
                },
                rt = function(t) {
                    return function(e) {
                        return o(e) ? t.of(a(e.left)) : t.map(e.right, u)
                    }
                },
                it = a,
                ot = "Either";
            function st(t, e) {
                return {
                    show: function(n) {
                        return o(n) ? "left(" + t.show(n.left) + ")" : "right(" + e.show(n.right) + ")"
                    }
                }
            }
            function at(t, e) {
                return {
                    equals: function(n, r) {
                        return n === r || (o(n) ? o(r) && t.equals(n.left, r.left) : s(r) && e.equals(n.right, r.right))
                    }
                }
            }
            function ut(t) {
                return {
                    concat: function(e, n) {
                        return o(n) ? e : o(e) ? n : u(t.concat(e.right, n.right))
                    }
                }
            }
            function ct(t) {
                return {
                    concat: function(e, n) {
                        return o(e) ? e : o(n) ? n : u(t.concat(e.right, n.right))
                    }
                }
            }
            function lt(t) {
                return {
                    concat: ct(t).concat,
                    empty: u(t.empty)
                }
            }
            function ft(t) {
                var e = a(t.empty);
                return {
                    URI: ot,
                    _E: void 0,
                    map: S,
                    compact: function(t) {
                        return o(t) ? t : "None" === t.right._tag ? e : u(t.right.value)
                    },
                    separate: function(t) {
                        return o(t) ? {
                            left: t,
                            right: t
                        } : o(t.right) ? {
                            left: u(t.right.left),
                            right: e
                        } : {
                            left: e,
                            right: u(t.right.right)
                        }
                    },
                    filter: function(t, n) {
                        return o(t) || n(t.right) ? t : e
                    },
                    filterMap: function(t, n) {
                        if (o(t))
                            return t;
                        var r = n(t.right);
                        return "None" === r._tag ? e : u(r.value)
                    },
                    partition: function(t, n) {
                        return o(t) ? {
                            left: t,
                            right: t
                        } : n(t.right) ? {
                            left: e,
                            right: u(t.right)
                        } : {
                            left: u(t.right),
                            right: e
                        }
                    },
                    partitionMap: function(t, n) {
                        if (o(t))
                            return {
                                left: t,
                                right: t
                            };
                        var r = n(t.right);
                        return o(r) ? {
                            left: u(r.left),
                            right: e
                        } : {
                            left: e,
                            right: u(r.right)
                        }
                    }
                }
            }
            function dt(t) {
                var e = ft(t);
                return {
                    URI: ot,
                    _E: void 0,
                    map: S,
                    compact: e.compact,
                    separate: e.separate,
                    filter: e.filter,
                    filterMap: e.filterMap,
                    partition: e.partition,
                    partitionMap: e.partitionMap,
                    traverse: C,
                    sequence: rt,
                    reduce: O,
                    foldMap: T,
                    reduceRight: k,
                    wither: function(t) {
                        var n = C(t);
                        return function(r, i) {
                            return t.map(n(r, i), e.compact)
                        }
                    },
                    wilt: function(t) {
                        var n = C(t);
                        return function(r, i) {
                            return t.map(n(r, i), e.separate)
                        }
                    }
                }
            }
            function pt(t) {
                return {
                    URI: ot,
                    _E: void 0,
                    map: S,
                    ap: function(e, n) {
                        return o(e) ? o(n) ? a(t.concat(e.left, n.left)) : e : o(n) ? n : u(e.right(n.right))
                    },
                    of: H
                }
            }
            function ht(t) {
                return {
                    URI: ot,
                    _E: void 0,
                    map: S,
                    alt: function(e, n) {
                        if (s(e))
                            return e;
                        var r = n();
                        return o(r) ? a(t.concat(e.left, r.left)) : r
                    }
                }
            }
            function bt(t) {
                var e = pt(t),
                    n = ht(t);
                return {
                    URI: ot,
                    _E: void 0,
                    map: S,
                    of: H,
                    chain: I,
                    bimap: R,
                    mapLeft: P,
                    reduce: O,
                    foldMap: T,
                    reduceRight: k,
                    extend: N,
                    traverse: C,
                    sequence: rt,
                    chainRec: D,
                    throwError: it,
                    ap: e.ap,
                    alt: n.alt
                }
            }
            function gt(t, e) {
                return {
                    concat: function(n, r) {
                        return o(n) ? o(r) ? a(t.concat(n.left, r.left)) : n : o(r) ? r : u(e.concat(n.right, r.right))
                    }
                }
            }
            var vt = {
                    URI: ot,
                    map: S
                },
                yt = {
                    URI: ot,
                    map: S,
                    ap: A,
                    of: H
                },
                mt = {
                    URI: ot,
                    map: S,
                    ap: A,
                    of: H,
                    chain: I
                },
                _t = {
                    URI: ot,
                    reduce: O,
                    foldMap: T,
                    reduceRight: k
                },
                wt = {
                    URI: ot,
                    map: S,
                    reduce: O,
                    foldMap: T,
                    reduceRight: k,
                    traverse: C,
                    sequence: rt
                },
                xt = {
                    URI: ot,
                    bimap: R,
                    mapLeft: P
                },
                Et = {
                    URI: ot,
                    map: S,
                    alt: j
                },
                St = {
                    URI: ot,
                    map: S,
                    extend: N
                },
                At = {
                    URI: ot,
                    map: S,
                    ap: A,
                    chain: I,
                    chainRec: D
                },
                It = {
                    URI: ot,
                    map: S,
                    ap: A,
                    of: H,
                    chain: I,
                    throwError: it
                };
            function Ot(t, e) {
                return {
                    concat: gt(t, e).concat,
                    empty: u(e.empty)
                }
            }
            var Tt = {
                URI: ot,
                map: S,
                of: H,
                ap: A,
                chain: I,
                reduce: O,
                foldMap: T,
                reduceRight: k,
                traverse: C,
                sequence: rt,
                bimap: R,
                mapLeft: P,
                alt: j,
                extend: N,
                chainRec: D,
                throwError: it
            };
            function kt(t) {
                return t instanceof Error ? t : new Error(String(t))
            }
            function Ct(t) {
                return function(e, n) {
                    return !o(n) && t.equals(e, n.right)
                }
            }
            function Rt(t) {
                return function(e) {
                    return !o(e) && t(e.right)
                }
            }
            var Pt = H({}),
                jt = function(t) {
                    return U((0, i.bindTo_)(t))
                },
                Nt = function(t, e) {
                    return G((function(n) {
                        return (0, i.pipe)(e(n), U((function(e) {
                            return (0, i.bind_)(n, t, e)
                        })))
                    }))
                },
                Dt = Nt,
                Ut = function(t, e) {
                    return (0, i.flow)(U((function(e) {
                        return function(n) {
                            return (0, i.bind_)(e, t, n)
                        }
                    })), B(e))
                },
                Lt = Ut,
                Ft = function(t) {
                    return function(e) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var i = t(r, e[r]);
                            if ("Left" === i._tag)
                                return i;
                            n.push(i.right)
                        }
                        return u(n)
                    }
                },
                Bt = function(t) {
                    return Ft((function(e, n) {
                        return t(n)
                    }))
                },
                Mt = Bt(i.identity)
        },
        57050: (t, e, n) => {
            function r(t) {
                return t
            }
            n.r(e),
            n.d(e, {
                identity: () => r,
                unsafeCoerce: () => i,
                not: () => o,
                constant: () => s,
                constTrue: () => a,
                constFalse: () => u,
                constNull: () => c,
                constUndefined: () => l,
                constVoid: () => f,
                flip: () => d,
                flow: () => p,
                tuple: () => h,
                increment: () => b,
                decrement: () => g,
                absurd: () => v,
                tupled: () => y,
                untupled: () => m,
                pipe: () => _,
                hole: () => w,
                bind_: () => x,
                bindTo_: () => E
            });
            var i = r;
            function o(t) {
                return function(e) {
                    return !t(e)
                }
            }
            function s(t) {
                return function() {
                    return t
                }
            }
            var a = s(!0),
                u = s(!1),
                c = s(null),
                l = s(void 0),
                f = l;
            function d(t) {
                return function(e, n) {
                    return t(n, e)
                }
            }
            function p(t, e, n, r, i, o, s, a, u) {
                switch (arguments.length) {
                case 1:
                    return t;
                case 2:
                    return function() {
                        return e(t.apply(this, arguments))
                    };
                case 3:
                    return function() {
                        return n(e(t.apply(this, arguments)))
                    };
                case 4:
                    return function() {
                        return r(n(e(t.apply(this, arguments))))
                    };
                case 5:
                    return function() {
                        return i(r(n(e(t.apply(this, arguments)))))
                    };
                case 6:
                    return function() {
                        return o(i(r(n(e(t.apply(this, arguments))))))
                    };
                case 7:
                    return function() {
                        return s(o(i(r(n(e(t.apply(this, arguments)))))))
                    };
                case 8:
                    return function() {
                        return a(s(o(i(r(n(e(t.apply(this, arguments))))))))
                    };
                case 9:
                    return function() {
                        return u(a(s(o(i(r(n(e(t.apply(this, arguments)))))))))
                    }
                }
            }
            function h() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return t
            }
            function b(t) {
                return t + 1
            }
            function g(t) {
                return t - 1
            }
            function v(t) {
                throw new Error("Called `absurd` function which should be uncallable")
            }
            function y(t) {
                return function(e) {
                    return t.apply(void 0, e)
                }
            }
            function m(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    return t(e)
                }
            }
            function _(t, e, n, r, i, o, s, a, u, c, l, f, d, p, h, b, g, v, y, m) {
                switch (arguments.length) {
                case 1:
                    return t;
                case 2:
                    return e(t);
                case 3:
                    return n(e(t));
                case 4:
                    return r(n(e(t)));
                case 5:
                    return i(r(n(e(t))));
                case 6:
                    return o(i(r(n(e(t)))));
                case 7:
                    return s(o(i(r(n(e(t))))));
                case 8:
                    return a(s(o(i(r(n(e(t)))))));
                case 9:
                    return u(a(s(o(i(r(n(e(t))))))));
                case 10:
                    return c(u(a(s(o(i(r(n(e(t)))))))));
                case 11:
                    return l(c(u(a(s(o(i(r(n(e(t))))))))));
                case 12:
                    return f(l(c(u(a(s(o(i(r(n(e(t)))))))))));
                case 13:
                    return d(f(l(c(u(a(s(o(i(r(n(e(t))))))))))));
                case 14:
                    return p(d(f(l(c(u(a(s(o(i(r(n(e(t)))))))))))));
                case 15:
                    return h(p(d(f(l(c(u(a(s(o(i(r(n(e(t))))))))))))));
                case 16:
                    return b(h(p(d(f(l(c(u(a(s(o(i(r(n(e(t)))))))))))))));
                case 17:
                    return g(b(h(p(d(f(l(c(u(a(s(o(i(r(n(e(t))))))))))))))));
                case 18:
                    return v(g(b(h(p(d(f(l(c(u(a(s(o(i(r(n(e(t)))))))))))))))));
                case 19:
                    return y(v(g(b(h(p(d(f(l(c(u(a(s(o(i(r(n(e(t))))))))))))))))));
                case 20:
                    return m(y(v(g(b(h(p(d(f(l(c(u(a(s(o(i(r(n(e(t)))))))))))))))))))
                }
            }
            var w = v,
                x = function(t, e, n) {
                    var r;
                    return Object.assign({}, t, ((r = {})[e] = n, r))
                },
                E = function(t) {
                    return function(e) {
                        var n;
                        return (n = {})[t] = e, n
                    }
                }
        },
        69243: (t, e, n) => {
            n.r(e),
            n.d(e, {
                failures: () => u,
                failure: () => c,
                success: () => l,
                Type: () => f,
                identity: () => d,
                getFunctionName: () => p,
                getContextEntry: () => h,
                appendContext: () => b,
                getDomainKeys: () => x,
                mergeAll: () => S,
                emptyTags: () => O,
                getTags: () => N,
                getIndex: () => D,
                NullType: () => U,
                nullType: () => L,
                UndefinedType: () => F,
                VoidType: () => M,
                voidType: () => V,
                UnknownType: () => q,
                unknown: () => H,
                StringType: () => G,
                string: () => $,
                NumberType: () => W,
                number: () => K,
                BigIntType: () => z,
                bigint: () => Y,
                BooleanType: () => J,
                boolean: () => X,
                AnyArrayType: () => Z,
                UnknownArray: () => Q,
                AnyDictionaryType: () => tt,
                UnknownRecord: () => et,
                null: () => L,
                undefined: () => B,
                void: () => V,
                LiteralType: () => nt,
                literal: () => rt,
                KeyofType: () => it,
                keyof: () => ot,
                RefinementType: () => st,
                brand: () => at,
                Int: () => ut,
                RecursiveType: () => ct,
                recursion: () => lt,
                ArrayType: () => ft,
                array: () => dt,
                InterfaceType: () => pt,
                type: () => ht,
                PartialType: () => bt,
                partial: () => gt,
                DictionaryType: () => vt,
                record: () => yt,
                UnionType: () => mt,
                union: () => _t,
                IntersectionType: () => wt,
                intersection: () => xt,
                TupleType: () => Et,
                tuple: () => St,
                ReadonlyType: () => At,
                readonly: () => It,
                ReadonlyArrayType: () => Ot,
                readonlyArray: () => Tt,
                strict: () => kt,
                ExactType: () => Ct,
                exact: () => Rt,
                FunctionType: () => Pt,
                Function: () => jt,
                TaggedUnionType: () => Nt,
                taggedUnion: () => Dt,
                Array: () => Q,
                interface: () => ht,
                getValidationError: () => Ut,
                getDefaultContext: () => Lt,
                NeverType: () => Ft,
                never: () => Bt,
                AnyType: () => Mt,
                any: () => Vt,
                Dictionary: () => qt,
                ObjectType: () => Ht,
                object: () => Gt,
                refinement: () => $t,
                Integer: () => Wt,
                dictionary: () => Kt,
                StrictType: () => zt,
                clean: () => Yt,
                alias: () => Jt
            });
            var r,
                i = n(95195),
                o = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e),
                    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                s = function() {
                    return (s = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n])
                                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                a = function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                        t += arguments[e].length;
                    var r = Array(t),
                        i = 0;
                    for (e = 0; e < n; e++)
                        for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++)
                            r[i] = o[s];
                    return r
                },
                u = i.left,
                c = function(t, e, n) {
                    return u([{
                        value: t,
                        context: e,
                        message: n
                    }])
                },
                l = i.right,
                f = function() {
                    function t(t, e, n, r) {
                        this.name = t,
                        this.is = e,
                        this.validate = n,
                        this.encode = r,
                        this.decode = this.decode.bind(this)
                    }
                    return t.prototype.pipe = function(e, n) {
                        var r = this;
                        return void 0 === n && (n = "pipe(" + this.name + ", " + e.name + ")"), new t(n, e.is, (function(t, n) {
                            var o = r.validate(t, n);
                            return (0, i.isLeft)(o) ? o : e.validate(o.right, n)
                        }), this.encode === d && e.encode === d ? d : function(t) {
                            return r.encode(e.encode(t))
                        })
                    }, t.prototype.asDecoder = function() {
                        return this
                    }, t.prototype.asEncoder = function() {
                        return this
                    }, t.prototype.decode = function(t) {
                        return this.validate(t, [{
                            key: "",
                            type: this,
                            actual: t
                        }])
                    }, t
                }(),
                d = function(t) {
                    return t
                };
            function p(t) {
                return t.displayName || t.name || "<function" + t.length + ">"
            }
            function h(t, e) {
                return {
                    key: t,
                    type: e
                }
            }
            function b(t, e, n, r) {
                for (var i = t.length, o = Array(i + 1), s = 0; s < i; s++)
                    o[s] = t[s];
                return o[i] = {
                    key: e,
                    type: n,
                    actual: r
                }, o
            }
            function g(t, e) {
                for (var n = e.length, r = 0; r < n; r++)
                    t.push(e[r])
            }
            var v = Object.prototype.hasOwnProperty;
            function y(t) {
                return Object.keys(t).map((function(e) {
                    return e + ": " + t[e].name
                })).join(", ")
            }
            function m(t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e].encode !== d)
                        return !1;
                return !0
            }
            function _(t) {
                return "{ " + y(t) + " }"
            }
            function w(t) {
                return "Partial<" + t + ">"
            }
            function x(t) {
                var e;
                if (C(t)) {
                    var n = t.value;
                    if ($.is(n))
                        return (e = {})[n] = null, e
                } else {
                    if ("KeyofType" === t._tag)
                        return t.keys;
                    if (P(t)) {
                        var r = t.types.map((function(t) {
                            return x(t)
                        }));
                        return r.some(B.is) ? void 0 : Object.assign.apply(Object, a([{}], r))
                    }
                }
            }
            function E(t) {
                return "(" + t.map((function(t) {
                    return t.name
                })).join(" | ") + ")"
            }
            function S(t, e) {
                for (var n = !0, r = !0, i = !et.is(t), o = 0, s = e; o < s.length; o++) {
                    (l = s[o]) !== t && (n = !1),
                    et.is(l) && (r = !1)
                }
                if (n)
                    return t;
                if (r)
                    return e[e.length - 1];
                for (var a = {}, u = 0, c = e; u < c.length; u++) {
                    var l = c[u];
                    for (var f in l)
                        a.hasOwnProperty(f) && !i && l[f] === t[f] || (a[f] = l[f])
                }
                return a
            }
            function A(t) {
                switch (t._tag) {
                case "RefinementType":
                case "ReadonlyType":
                    return A(t.type);
                case "InterfaceType":
                case "StrictType":
                case "PartialType":
                    return t.props;
                case "IntersectionType":
                    return t.types.reduce((function(t, e) {
                        return Object.assign(t, A(e))
                    }), {})
                }
            }
            function I(t, e) {
                for (var n = Object.getOwnPropertyNames(t), r = !1, i = {}, o = 0; o < n.length; o++) {
                    var s = n[o];
                    v.call(e, s) ? i[s] = t[s] : r = !0
                }
                return r ? i : t
            }
            var O = {};
            function T(t, e) {
                for (var n = [], r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    -1 !== e.indexOf(o) && n.push(o)
                }
                return n
            }
            function k(t) {
                return "AnyType" === t._tag
            }
            function C(t) {
                return "LiteralType" === t._tag
            }
            function R(t) {
                return "InterfaceType" === t._tag
            }
            function P(t) {
                return "UnionType" === t._tag
            }
            var j = [];
            function N(t) {
                if (-1 !== j.indexOf(t))
                    return O;
                if (R(t) || function(t) {
                    return "StrictType" === t._tag
                }(t)) {
                    var e = O;
                    for (var n in t.props) {
                        var r = t.props[n];
                        C(r) && (e === O && (e = {}), e[n] = [r.value])
                    }
                    return e
                }
                if (function(t) {
                    return "ExactType" === t._tag
                }(t) || function(t) {
                    return "RefinementType" === t._tag
                }(t))
                    return N(t.type);
                if (function(t) {
                    return "IntersectionType" === t._tag
                }(t))
                    return t.types.reduce((function(t, e) {
                        return function(t, e) {
                            if (t === O)
                                return e;
                            if (e === O)
                                return t;
                            var n = Object.assign({}, t);
                            for (var r in e)
                                if (t.hasOwnProperty(r)) {
                                    var i = T(t[r], e[r]);
                                    if (!(i.length > 0)) {
                                        n = O;
                                        break
                                    }
                                    n[r] = i
                                } else
                                    n[r] = e[r];
                            return n
                        }(t, N(e))
                    }), O);
                if (P(t))
                    return t.types.slice(1).reduce((function(t, e) {
                        return function(t, e) {
                            if (t === O || e === O)
                                return O;
                            var n = O;
                            for (var r in t)
                                e.hasOwnProperty(r) && 0 === T(t[r], e[r]).length && (n === O && (n = {}), n[r] = t[r].concat(e[r]));
                            return n
                        }(t, N(e))
                    }), N(t.types[0]));
                if (function(t) {
                    return "RecursiveType" === t._tag
                }(t)) {
                    j.push(t);
                    var i = N(t.type);
                    return j.pop(), i
                }
                return O
            }
            function D(t) {
                var e = N(t[0]),
                    n = Object.keys(e),
                    r = t.length,
                    i = function(n) {
                        for (var i = e[n].slice(), o = [e[n]], s = 1; s < r; s++) {
                            var a = N(t[s])[n];
                            if (void 0 === a)
                                return "continue-keys";
                            if (a.some((function(t) {
                                return -1 !== i.indexOf(t)
                            })))
                                return "continue-keys";
                            i.push.apply(i, a),
                            o.push(a)
                        }
                        return {
                            value: [n, o]
                        }
                    };
                t:
                for (var o = 0, s = n; o < s.length; o++) {
                    var a = i(s[o]);
                    if ("object" == typeof a)
                        return a.value;
                    switch (a) {
                    case "continue-keys":
                        continue t
                    }
                }
            }
            var U = function(t) {
                    function e() {
                        var e = t.call(this, "null", (function(t) {
                            return null === t
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "NullType", e
                    }
                    return o(e, t), e
                }(f),
                L = new U,
                F = function(t) {
                    function e() {
                        var e = t.call(this, "undefined", (function(t) {
                            return void 0 === t
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "UndefinedType", e
                    }
                    return o(e, t), e
                }(f),
                B = new F,
                M = function(t) {
                    function e() {
                        var e = t.call(this, "void", B.is, B.validate, d) || this;
                        return e._tag = "VoidType", e
                    }
                    return o(e, t), e
                }(f),
                V = new M,
                q = function(t) {
                    function e() {
                        var e = t.call(this, "unknown", (function(t) {
                            return !0
                        }), l, d) || this;
                        return e._tag = "UnknownType", e
                    }
                    return o(e, t), e
                }(f),
                H = new q,
                G = function(t) {
                    function e() {
                        var e = t.call(this, "string", (function(t) {
                            return "string" == typeof t
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "StringType", e
                    }
                    return o(e, t), e
                }(f),
                $ = new G,
                W = function(t) {
                    function e() {
                        var e = t.call(this, "number", (function(t) {
                            return "number" == typeof t
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "NumberType", e
                    }
                    return o(e, t), e
                }(f),
                K = new W,
                z = function(t) {
                    function e() {
                        var e = t.call(this, "bigint", (function(t) {
                            return "bigint" == typeof t
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "BigIntType", e
                    }
                    return o(e, t), e
                }(f),
                Y = new z,
                J = function(t) {
                    function e() {
                        var e = t.call(this, "boolean", (function(t) {
                            return "boolean" == typeof t
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "BooleanType", e
                    }
                    return o(e, t), e
                }(f),
                X = new J,
                Z = function(t) {
                    function e() {
                        var e = t.call(this, "UnknownArray", Array.isArray, (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "AnyArrayType", e
                    }
                    return o(e, t), e
                }(f),
                Q = new Z,
                tt = function(t) {
                    function e() {
                        var e = t.call(this, "UnknownRecord", (function(t) {
                            var e = Object.prototype.toString.call(t);
                            return "[object Object]" === e || "[object Window]" === e
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "AnyDictionaryType", e
                    }
                    return o(e, t), e
                }(f),
                et = new tt,
                nt = function(t) {
                    function e(e, n, r, i, o) {
                        var s = t.call(this, e, n, r, i) || this;
                        return s.value = o, s._tag = "LiteralType", s
                    }
                    return o(e, t), e
                }(f);
            function rt(t, e) {
                void 0 === e && (e = JSON.stringify(t));
                var n = function(e) {
                    return e === t
                };
                return new nt(e, n, (function(e, r) {
                    return n(e) ? l(t) : c(e, r)
                }), d, t)
            }
            var it = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.keys = o, s._tag = "KeyofType", s
                }
                return o(e, t), e
            }(f);
            function ot(t, e) {
                void 0 === e && (e = Object.keys(t).map((function(t) {
                    return JSON.stringify(t)
                })).join(" | "));
                var n = function(e) {
                    return $.is(e) && v.call(t, e)
                };
                return new it(e, n, (function(t, e) {
                    return n(t) ? l(t) : c(t, e)
                }), d, t)
            }
            var st = function(t) {
                function e(e, n, r, i, o, s) {
                    var a = t.call(this, e, n, r, i) || this;
                    return a.type = o, a.predicate = s, a._tag = "RefinementType", a
                }
                return o(e, t), e
            }(f);
            function at(t, e, n) {
                return $t(t, e, n)
            }
            var ut = at(K, (function(t) {
                    return Number.isInteger(t)
                }), "Int"),
                ct = function(t) {
                    function e(e, n, r, i, o) {
                        var s = t.call(this, e, n, r, i) || this;
                        return s.runDefinition = o, s._tag = "RecursiveType", s
                    }
                    return o(e, t), e
                }(f);
            function lt(t, e) {
                var n,
                    r = function() {
                        return n || ((n = e(i)).name = t), n
                    },
                    i = new ct(t, (function(t) {
                        return r().is(t)
                    }), (function(t, e) {
                        return r().validate(t, e)
                    }), (function(t) {
                        return r().encode(t)
                    }), r);
                return i
            }
            Object.defineProperty(ct.prototype, "type", {
                get: function() {
                    return this.runDefinition()
                },
                enumerable: !0,
                configurable: !0
            });
            var ft = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.type = o, s._tag = "ArrayType", s
                }
                return o(e, t), e
            }(f);
            function dt(t, e) {
                return void 0 === e && (e = "Array<" + t.name + ">"), new ft(e, (function(e) {
                    return Q.is(e) && e.every(t.is)
                }), (function(e, n) {
                    var r = Q.validate(e, n);
                    if ((0, i.isLeft)(r))
                        return r;
                    for (var o = r.right, s = o.length, a = o, c = [], f = 0; f < s; f++) {
                        var d = o[f],
                            p = t.validate(d, b(n, String(f), t, d));
                        if ((0, i.isLeft)(p))
                            g(c, p.left);
                        else {
                            var h = p.right;
                            h !== d && (a === o && (a = o.slice()), a[f] = h)
                        }
                    }
                    return c.length > 0 ? u(c) : l(a)
                }), t.encode === d ? d : function(e) {
                    return e.map(t.encode)
                }, t)
            }
            var pt = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.props = o, s._tag = "InterfaceType", s
                }
                return o(e, t), e
            }(f);
            function ht(t, e) {
                void 0 === e && (e = _(t));
                var n = Object.keys(t),
                    r = n.map((function(e) {
                        return t[e]
                    })),
                    o = n.length;
                return new pt(e, (function(t) {
                    if (et.is(t)) {
                        for (var e = 0; e < o; e++) {
                            var i = n[e],
                                s = t[i];
                            if (void 0 === s && !v.call(t, i) || !r[e].is(s))
                                return !1
                        }
                        return !0
                    }
                    return !1
                }), (function(t, e) {
                    var a = et.validate(t, e);
                    if ((0, i.isLeft)(a))
                        return a;
                    for (var c = a.right, f = c, d = [], p = 0; p < o; p++) {
                        var h = n[p],
                            y = f[h],
                            m = r[p],
                            _ = m.validate(y, b(e, h, m, y));
                        if ((0, i.isLeft)(_))
                            g(d, _.left);
                        else {
                            var w = _.right;
                            (w !== y || void 0 === w && !v.call(f, h)) && (f === c && (f = s({}, c)), f[h] = w)
                        }
                    }
                    return d.length > 0 ? u(d) : l(f)
                }), m(r) ? d : function(t) {
                    for (var e = s({}, t), i = 0; i < o; i++) {
                        var a = n[i],
                            u = r[i].encode;
                        u !== d && (e[a] = u(t[a]))
                    }
                    return e
                }, t)
            }
            var bt = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.props = o, s._tag = "PartialType", s
                }
                return o(e, t), e
            }(f);
            function gt(t, e) {
                void 0 === e && (e = w(_(t)));
                var n = Object.keys(t),
                    r = n.map((function(e) {
                        return t[e]
                    })),
                    o = n.length;
                return new bt(e, (function(e) {
                    if (et.is(e)) {
                        for (var r = 0; r < o; r++) {
                            var i = n[r],
                                s = e[i];
                            if (void 0 !== s && !t[i].is(s))
                                return !1
                        }
                        return !0
                    }
                    return !1
                }), (function(e, r) {
                    var a = et.validate(e, r);
                    if ((0, i.isLeft)(a))
                        return a;
                    for (var c = a.right, f = c, d = [], p = 0; p < o; p++) {
                        var h = n[p],
                            v = f[h],
                            y = t[h],
                            m = y.validate(v, b(r, h, y, v));
                        if ((0, i.isLeft)(m))
                            void 0 !== v && g(d, m.left);
                        else {
                            var _ = m.right;
                            _ !== v && (f === c && (f = s({}, c)), f[h] = _)
                        }
                    }
                    return d.length > 0 ? u(d) : l(f)
                }), m(r) ? d : function(t) {
                    for (var e = s({}, t), i = 0; i < o; i++) {
                        var a = n[i],
                            u = t[a];
                        void 0 !== u && (e[a] = r[i].encode(u))
                    }
                    return e
                }, t)
            }
            var vt = function(t) {
                function e(e, n, r, i, o, s) {
                    var a = t.call(this, e, n, r, i) || this;
                    return a.domain = o, a.codomain = s, a._tag = "DictionaryType", a
                }
                return o(e, t), e
            }(f);
            function yt(t, e, n) {
                var r = x(t);
                return r ? function(t, e, n, r) {
                    void 0 === r && (r = "{ [K in " + e.name + "]: " + n.name + " }");
                    var o = t.length;
                    return new vt(r, (function(e) {
                        return et.is(e) && t.every((function(t) {
                                return n.is(e[t])
                            }))
                    }), (function(e, r) {
                        var s = et.validate(e, r);
                        if ((0, i.isLeft)(s))
                            return s;
                        for (var a = s.right, c = {}, f = [], d = !1, p = 0; p < o; p++) {
                            var h = t[p],
                                v = a[h],
                                y = n.validate(v, b(r, h, n, v));
                            if ((0, i.isLeft)(y))
                                g(f, y.left);
                            else {
                                var m = y.right;
                                d = d || m !== v,
                                c[h] = m
                            }
                        }
                        return f.length > 0 ? u(f) : l(d || Object.keys(a).length !== o ? c : a)
                    }), n.encode === d ? d : function(e) {
                        for (var r = {}, i = 0; i < o; i++) {
                            var s = t[i];
                            r[s] = n.encode(e[s])
                        }
                        return r
                    }, e, n)
                }(Object.keys(r), t, e, n) : function(t, e, n) {
                    return void 0 === n && (n = "{ [K in " + t.name + "]: " + e.name + " }"), new vt(n, (function(n) {
                        return et.is(n) ? Object.keys(n).every((function(r) {
                            return t.is(r) && e.is(n[r])
                        })) : k(e) && Array.isArray(n)
                    }), (function(n, r) {
                        if (et.is(n)) {
                            for (var o = {}, s = [], a = Object.keys(n), f = a.length, d = !1, p = 0; p < f; p++) {
                                var h = a[p],
                                    v = n[h],
                                    y = t.validate(h, b(r, h, t, h));
                                if ((0, i.isLeft)(y))
                                    g(s, y.left);
                                else {
                                    var m = y.right;
                                    d = d || m !== h,
                                    h = m;
                                    var _ = e.validate(v, b(r, h, e, v));
                                    if ((0, i.isLeft)(_))
                                        g(s, _.left);
                                    else {
                                        var w = _.right;
                                        d = d || w !== v,
                                        o[h] = w
                                    }
                                }
                            }
                            return s.length > 0 ? u(s) : l(d ? o : n)
                        }
                        return k(e) && Array.isArray(n) ? l(n) : c(n, r)
                    }), t.encode === d && e.encode === d ? d : function(n) {
                        for (var r = {}, i = Object.keys(n), o = i.length, s = 0; s < o; s++) {
                            var a = i[s];
                            r[String(t.encode(a))] = e.encode(n[a])
                        }
                        return r
                    }, t, e)
                }(t, e, n)
            }
            var mt = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.types = o, s._tag = "UnionType", s
                }
                return o(e, t), e
            }(f);
            function _t(t, e) {
                void 0 === e && (e = E(t));
                var n = D(t);
                if (void 0 !== n && t.length > 0) {
                    var r = n[0],
                        o = n[1],
                        s = o.length,
                        a = function(t) {
                            for (var e = 0; e < s; e++)
                                if (-1 !== o[e].indexOf(t))
                                    return e
                        };
                    return new Nt(e, (function(e) {
                        if (et.is(e)) {
                            var n = a(e[r]);
                            return void 0 !== n && t[n].is(e)
                        }
                        return !1
                    }), (function(e, n) {
                        var o = et.validate(e, n);
                        if ((0, i.isLeft)(o))
                            return o;
                        var s = o.right,
                            u = a(s[r]);
                        if (void 0 === u)
                            return c(e, n);
                        var l = t[u];
                        return l.validate(s, b(n, String(u), l, s))
                    }), m(t) ? d : function(n) {
                        var i = a(n[r]);
                        if (void 0 === i)
                            throw new Error("no codec found to encode value in union codec " + e);
                        return t[i].encode(n)
                    }, t, r)
                }
                return new mt(e, (function(e) {
                    return t.some((function(t) {
                        return t.is(e)
                    }))
                }), (function(e, n) {
                    for (var r = [], o = 0; o < t.length; o++) {
                        var s = t[o],
                            a = s.validate(e, b(n, String(o), s, e));
                        if (!(0, i.isLeft)(a))
                            return l(a.right);
                        g(r, a.left)
                    }
                    return u(r)
                }), m(t) ? d : function(n) {
                    for (var r = 0, i = t; r < i.length; r++) {
                        var o = i[r];
                        if (o.is(n))
                            return o.encode(n)
                    }
                    throw new Error("no codec found to encode value in union type " + e)
                }, t)
            }
            var wt = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.types = o, s._tag = "IntersectionType", s
                }
                return o(e, t), e
            }(f);
            function xt(t, e) {
                void 0 === e && (e = "(" + t.map((function(t) {
                    return t.name
                })).join(" & ") + ")");
                var n = t.length;
                return new wt(e, (function(e) {
                    return t.every((function(t) {
                        return t.is(e)
                    }))
                }), 0 === t.length ? l : function(e, r) {
                    for (var o = [], s = [], a = 0; a < n; a++) {
                        var c = t[a],
                            f = c.validate(e, b(r, String(a), c, e));
                        (0, i.isLeft)(f) ? g(s, f.left) : o.push(f.right)
                    }
                    return s.length > 0 ? u(s) : l(S(e, o))
                }, 0 === t.length ? d : function(e) {
                    return S(e, t.map((function(t) {
                        return t.encode(e)
                    })))
                }, t)
            }
            var Et = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.types = o, s._tag = "TupleType", s
                }
                return o(e, t), e
            }(f);
            function St(t, e) {
                void 0 === e && (e = "[" + t.map((function(t) {
                    return t.name
                })).join(", ") + "]");
                var n = t.length;
                return new Et(e, (function(e) {
                    return Q.is(e) && e.length === n && t.every((function(t, n) {
                            return t.is(e[n])
                        }))
                }), (function(e, r) {
                    var o = Q.validate(e, r);
                    if ((0, i.isLeft)(o))
                        return o;
                    for (var s = o.right, a = s.length > n ? s.slice(0, n) : s, c = [], f = 0; f < n; f++) {
                        var d = s[f],
                            p = t[f],
                            h = p.validate(d, b(r, String(f), p, d));
                        if ((0, i.isLeft)(h))
                            g(c, h.left);
                        else {
                            var v = h.right;
                            v !== d && (a === s && (a = s.slice()), a[f] = v)
                        }
                    }
                    return c.length > 0 ? u(c) : l(a)
                }), m(t) ? d : function(e) {
                    return t.map((function(t, n) {
                        return t.encode(e[n])
                    }))
                }, t)
            }
            var At = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.type = o, s._tag = "ReadonlyType", s
                }
                return o(e, t), e
            }(f);
            function It(t, e) {
                return void 0 === e && (e = "Readonly<" + t.name + ">"), new At(e, t.is, t.validate, t.encode, t)
            }
            var Ot = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e, n, r, i) || this;
                    return s.type = o, s._tag = "ReadonlyArrayType", s
                }
                return o(e, t), e
            }(f);
            function Tt(t, e) {
                void 0 === e && (e = "ReadonlyArray<" + t.name + ">");
                var n = dt(t);
                return new Ot(e, n.is, n.validate, n.encode, t)
            }
            var kt = function(t, e) {
                    return Rt(ht(t), e)
                },
                Ct = function(t) {
                    function e(e, n, r, i, o) {
                        var s = t.call(this, e, n, r, i) || this;
                        return s.type = o, s._tag = "ExactType", s
                    }
                    return o(e, t), e
                }(f);
            function Rt(t, e) {
                void 0 === e && (e = function(t) {
                    return R(t) ? "{| " + y(t.props) + " |}" : function(t) {
                        return "PartialType" === t._tag
                    }(t) ? w("{| " + y(t.props) + " |}") : "Exact<" + t.name + ">"
                }(t));
                var n = A(t);
                return new Ct(e, t.is, (function(e, r) {
                    var o = et.validate(e, r);
                    if ((0, i.isLeft)(o))
                        return o;
                    var s = t.validate(e, r);
                    return (0, i.isLeft)(s) ? s : (0, i.right)(I(s.right, n))
                }), (function(e) {
                    return t.encode(I(e, n))
                }), t)
            }
            var Pt = function(t) {
                    function e() {
                        var e = t.call(this, "Function", (function(t) {
                            return "function" == typeof t
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "FunctionType", e
                    }
                    return o(e, t), e
                }(f),
                jt = new Pt,
                Nt = function(t) {
                    function e(e, n, r, i, o, s) {
                        var a = t.call(this, e, n, r, i, o) || this;
                        return a.tag = s, a
                    }
                    return o(e, t), e
                }(mt),
                Dt = function(t, e, n) {
                    void 0 === n && (n = E(e));
                    var r = _t(e, n);
                    return r instanceof Nt ? r : (console.warn("[io-ts] Cannot build a tagged union for " + n + ", returning a de-optimized union"), new Nt(n, r.is, r.validate, r.encode, e, t))
                },
                Ut = function(t, e) {
                    return {
                        value: t,
                        context: e
                    }
                },
                Lt = function(t) {
                    return [{
                        key: "",
                        type: t
                    }]
                },
                Ft = function(t) {
                    function e() {
                        var e = t.call(this, "never", (function(t) {
                            return !1
                        }), (function(t, e) {
                            return c(t, e)
                        }), (function() {
                            throw new Error("cannot encode never")
                        })) || this;
                        return e._tag = "NeverType", e
                    }
                    return o(e, t), e
                }(f),
                Bt = new Ft,
                Mt = function(t) {
                    function e() {
                        var e = t.call(this, "any", (function(t) {
                            return !0
                        }), l, d) || this;
                        return e._tag = "AnyType", e
                    }
                    return o(e, t), e
                }(f),
                Vt = new Mt,
                qt = et,
                Ht = function(t) {
                    function e() {
                        var e = t.call(this, "object", (function(t) {
                            return null !== t && "object" == typeof t
                        }), (function(t, n) {
                            return e.is(t) ? l(t) : c(t, n)
                        }), d) || this;
                        return e._tag = "ObjectType", e
                    }
                    return o(e, t), e
                }(f),
                Gt = new Ht;
            function $t(t, e, n) {
                return void 0 === n && (n = "(" + t.name + " | " + p(e) + ")"), new st(n, (function(n) {
                    return t.is(n) && e(n)
                }), (function(n, r) {
                    var o = t.validate(n, r);
                    if ((0, i.isLeft)(o))
                        return o;
                    var s = o.right;
                    return e(s) ? l(s) : c(s, r)
                }), t.encode, t, e)
            }
            var Wt = $t(K, Number.isInteger, "Integer"),
                Kt = yt,
                zt = function(t) {
                    function e(e, n, r, i, o) {
                        var s = t.call(this, e, n, r, i) || this;
                        return s.props = o, s._tag = "StrictType", s
                    }
                    return o(e, t), e
                }(f);
            function Yt(t) {
                return t
            }
            function Jt(t) {
                return function() {
                    return t
                }
            }
        },
        52961: t => {
            t.exports = {
                animatedUnderline: "_24bLp",
                showUnderline: "jF640",
                completeAnimation: "gNDOL"
            }
        },
        27061: t => {
            var e,
                n,
                r = t.exports = {};
            function i() {
                throw new Error("setTimeout has not been defined")
            }
            function o() {
                throw new Error("clearTimeout has not been defined")
            }
            function s(t) {
                if (e === setTimeout)
                    return setTimeout(t, 0);
                if ((e === i || !e) && setTimeout)
                    return e = setTimeout, setTimeout(t, 0);
                try {
                    return e(t, 0)
                } catch (n) {
                    try {
                        return e.call(null, t, 0)
                    } catch (n) {
                        return e.call(this, t, 0)
                    }
                }
            }
            !function() {
                try {
                    e = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    e = i
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    n = o
                }
            }();
            var a,
                u = [],
                c = !1,
                l = -1;
            function f() {
                c && a && (c = !1, a.length ? u = a.concat(u) : l = -1, u.length && d())
            }
            function d() {
                if (!c) {
                    var t = s(f);
                    c = !0;
                    for (var e = u.length; e;) {
                        for (a = u, u = []; ++l < e;)
                            a && a[l].run();
                        l = -1,
                        e = u.length
                    }
                    a = null,
                    c = !1,
                    function(t) {
                        if (n === clearTimeout)
                            return clearTimeout(t);
                        if ((n === o || !n) && clearTimeout)
                            return n = clearTimeout, clearTimeout(t);
                        try {
                            n(t)
                        } catch (e) {
                            try {
                                return n.call(null, t)
                            } catch (e) {
                                return n.call(this, t)
                            }
                        }
                    }(t)
                }
            }
            function p(t, e) {
                this.fun = t,
                this.array = e
            }
            function h() {}
            r.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                u.push(new p(t, e)),
                1 !== u.length || c || s(d)
            },
            p.prototype.run = function() {
                this.fun.apply(null, this.array)
            },
            r.title = "browser",
            r.browser = !0,
            r.env = {},
            r.argv = [],
            r.version = "",
            r.versions = {},
            r.on = h,
            r.addListener = h,
            r.once = h,
            r.off = h,
            r.removeListener = h,
            r.removeAllListeners = h,
            r.emit = h,
            r.prependListener = h,
            r.prependOnceListener = h,
            r.listeners = function(t) {
                return []
            },
            r.binding = function(t) {
                throw new Error("process.binding is not supported")
            },
            r.cwd = function() {
                return "/"
            },
            r.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            },
            r.umask = function() {
                return 0
            }
        },
        95300: (t, e, n) => {
            n.d(e, {
                X: () => s
            });
            var r = n(59312),
                i = n(32952),
                o = n(82987),
                s = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._value = e, n
                    }
                    return r.__extends(e, t), Object.defineProperty(e.prototype, "value", {
                        get: function() {
                            return this.getValue()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype._subscribe = function(e) {
                        var n = t.prototype._subscribe.call(this, e);
                        return n && !n.closed && e.next(this._value), n
                    }, e.prototype.getValue = function() {
                        if (this.hasError)
                            throw this.thrownError;
                        if (this.closed)
                            throw new o.N;
                        return this._value
                    }, e.prototype.next = function(e) {
                        t.prototype.next.call(this, this._value = e)
                    }, e
                }(i.xQ)
        },
        7882: (t, e, n) => {
            n.d(e, {
                d: () => i
            });
            var r = n(59312),
                i = function(t) {
                    function e(e, n, r) {
                        var i = t.call(this) || this;
                        return i.parent = e, i.outerValue = n, i.outerIndex = r, i.index = 0, i
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t, this),
                        this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(this),
                        this.unsubscribe()
                    }, e
                }(n(98036).L)
        },
        12834: (t, e, n) => {
            n.d(e, {
                P: () => a
            });
            var r,
                i = n(40151),
                o = n(76974),
                s = n(91402);
            r || (r = {});
            var a = function() {
                function t(t, e, n) {
                    this.kind = t,
                    this.value = e,
                    this.error = n,
                    this.hasValue = "N" === t
                }
                return t.prototype.observe = function(t) {
                    switch (this.kind) {
                    case "N":
                        return t.next && t.next(this.value);
                    case "E":
                        return t.error && t.error(this.error);
                    case "C":
                        return t.complete && t.complete()
                    }
                }, t.prototype.do = function(t, e, n) {
                    switch (this.kind) {
                    case "N":
                        return t && t(this.value);
                    case "E":
                        return e && e(this.error);
                    case "C":
                        return n && n()
                    }
                }, t.prototype.accept = function(t, e, n) {
                    return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
                }, t.prototype.toObservable = function() {
                    switch (this.kind) {
                    case "N":
                        return (0, o.of)(this.value);
                    case "E":
                        return (0, s._)(this.error);
                    case "C":
                        return (0, i.c)()
                    }
                    throw new Error("unexpected notification kind value")
                }, t.createNext = function(e) {
                    return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
                }, t.createError = function(e) {
                    return new t("E", void 0, e)
                }, t.createComplete = function() {
                    return t.completeNotification
                }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
            }()
        },
        44586: (t, e, n) => {
            n.d(e, {
                y: () => u
            });
            var r = n(51106),
                i = n(85063),
                o = n(58569),
                s = n(87072),
                a = n(79910),
                u = function() {
                    function t(t) {
                        this._isScalar = !1,
                        t && (this._subscribe = t)
                    }
                    return t.prototype.lift = function(e) {
                        var n = new t;
                        return n.source = this, n.operator = e, n
                    }, t.prototype.subscribe = function(t, e, n) {
                        var r = this.operator,
                            o = (0, i.Y)(t, e, n);
                        if (r ? o.add(r.call(o, this.source)) : o.add(this.source || a.v.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), a.v.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown))
                            throw o.syncErrorValue;
                        return o
                    }, t.prototype._trySubscribe = function(t) {
                        try {
                            return this._subscribe(t)
                        } catch (e) {
                            a.v.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                            (0, r._)(t) ? t.error(e) : console.warn(e)
                        }
                    }, t.prototype.forEach = function(t, e) {
                        var n = this;
                        return new (e = c(e))((function(e, r) {
                            var i;
                            i = n.subscribe((function(e) {
                                try {
                                    t(e)
                                } catch (t) {
                                    r(t),
                                    i && i.unsubscribe()
                                }
                            }), r, e)
                        }))
                    }, t.prototype._subscribe = function(t) {
                        var e = this.source;
                        return e && e.subscribe(t)
                    }, t.prototype[o.L] = function() {
                        return this
                    }, t.prototype.pipe = function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        return 0 === t.length ? this : (0, s.U)(t)(this)
                    }, t.prototype.toPromise = function(t) {
                        var e = this;
                        return new (t = c(t))((function(t, n) {
                            var r;
                            e.subscribe((function(t) {
                                return r = t
                            }), (function(t) {
                                return n(t)
                            }), (function() {
                                return t(r)
                            }))
                        }))
                    }, t.create = function(e) {
                        return new t(e)
                    }, t
                }();
            function c(t) {
                if (t || (t = a.v.Promise || Promise), !t)
                    throw new Error("no Promise impl found");
                return t
            }
        },
        76535: (t, e, n) => {
            n.d(e, {
                c: () => o
            });
            var r = n(79910),
                i = n(94224),
                o = {
                    closed: !0,
                    next: function(t) {},
                    error: function(t) {
                        if (r.v.useDeprecatedSynchronousErrorHandling)
                            throw t;
                        (0, i.z)(t)
                    },
                    complete: function() {}
                }
        },
        57655: (t, e, n) => {
            n.d(e, {
                L: () => i
            });
            var r = n(59312),
                i = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r.__extends(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                        this.destination.next(e)
                    }, e.prototype.notifyError = function(t, e) {
                        this.destination.error(t)
                    }, e.prototype.notifyComplete = function(t) {
                        this.destination.complete()
                    }, e
                }(n(98036).L)
        },
        75302: (t, e, n) => {
            n.d(e, {
                b: () => r
            });
            var r = function() {
                function t(e, n) {
                    void 0 === n && (n = t.now),
                    this.SchedulerAction = e,
                    this.now = n
                }
                return t.prototype.schedule = function(t, e, n) {
                    return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
                }, t.now = function() {
                    return Date.now()
                }, t
            }()
        },
        32952: (t, e, n) => {
            n.d(e, {
                Yc: () => l,
                xQ: () => f
            });
            var r = n(59312),
                i = n(44586),
                o = n(98036),
                s = n(14601),
                a = n(82987),
                u = n(51715),
                c = n(42545),
                l = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.destination = e, n
                    }
                    return r.__extends(e, t), e
                }(o.L),
                f = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                    }
                    return r.__extends(e, t), e.prototype[c.b] = function() {
                        return new l(this)
                    }, e.prototype.lift = function(t) {
                        var e = new d(this, this);
                        return e.operator = t, e
                    }, e.prototype.next = function(t) {
                        if (this.closed)
                            throw new a.N;
                        if (!this.isStopped)
                            for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++)
                                r[i].next(t)
                    }, e.prototype.error = function(t) {
                        if (this.closed)
                            throw new a.N;
                        this.hasError = !0,
                        this.thrownError = t,
                        this.isStopped = !0;
                        for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++)
                            r[i].error(t);
                        this.observers.length = 0
                    }, e.prototype.complete = function() {
                        if (this.closed)
                            throw new a.N;
                        this.isStopped = !0;
                        for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++)
                            n[r].complete();
                        this.observers.length = 0
                    }, e.prototype.unsubscribe = function() {
                        this.isStopped = !0,
                        this.closed = !0,
                        this.observers = null
                    }, e.prototype._trySubscribe = function(e) {
                        if (this.closed)
                            throw new a.N;
                        return t.prototype._trySubscribe.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        if (this.closed)
                            throw new a.N;
                        return this.hasError ? (t.error(this.thrownError), s.w.EMPTY) : this.isStopped ? (t.complete(), s.w.EMPTY) : (this.observers.push(t), new u.W(this, t))
                    }, e.prototype.asObservable = function() {
                        var t = new i.y;
                        return t.source = this, t
                    }, e.create = function(t, e) {
                        return new d(t, e)
                    }, e
                }(i.y),
                d = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.destination = e, r.source = n, r
                    }
                    return r.__extends(e, t), e.prototype.next = function(t) {
                        var e = this.destination;
                        e && e.next && e.next(t)
                    }, e.prototype.error = function(t) {
                        var e = this.destination;
                        e && e.error && this.destination.error(t)
                    }, e.prototype.complete = function() {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, e.prototype._subscribe = function(t) {
                        return this.source ? this.source.subscribe(t) : s.w.EMPTY
                    }, e
                }(f)
        },
        51715: (t, e, n) => {
            n.d(e, {
                W: () => i
            });
            var r = n(59312),
                i = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.subject = e, r.subscriber = n, r.closed = !1, r
                    }
                    return r.__extends(e, t), e.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                e = t.observers;
                            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                                var n = e.indexOf(this.subscriber);
                                -1 !== n && e.splice(n, 1)
                            }
                        }
                    }, e
                }(n(14601).w)
        },
        98036: (t, e, n) => {
            n.d(e, {
                L: () => l
            });
            var r = n(59312),
                i = n(55427),
                o = n(76535),
                s = n(14601),
                a = n(42545),
                u = n(79910),
                c = n(94224),
                l = function(t) {
                    function e(n, r, i) {
                        var s = t.call(this) || this;
                        switch (s.syncErrorValue = null, s.syncErrorThrown = !1, s.syncErrorThrowable = !1, s.isStopped = !1, arguments.length) {
                        case 0:
                            s.destination = o.c;
                            break;
                        case 1:
                            if (!n) {
                                s.destination = o.c;
                                break
                            }
                            if ("object" == typeof n) {
                                n instanceof e ? (s.syncErrorThrowable = n.syncErrorThrowable, s.destination = n, n.add(s)) : (s.syncErrorThrowable = !0, s.destination = new f(s, n));
                                break
                            }
                        default:
                            s.syncErrorThrowable = !0,
                            s.destination = new f(s, n, r, i)
                        }
                        return s
                    }
                    return r.__extends(e, t), e.prototype[a.b] = function() {
                        return this
                    }, e.create = function(t, n, r) {
                        var i = new e(t, n, r);
                        return i.syncErrorThrowable = !1, i
                    }, e.prototype.next = function(t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function(t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function(t) {
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        this.destination.error(t),
                        this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.destination.complete(),
                        this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                    }, e
                }(s.w),
                f = function(t) {
                    function e(e, n, r, s) {
                        var a,
                            u = t.call(this) || this;
                        u._parentSubscriber = e;
                        var c = u;
                        return (0, i.m)(n) ? a = n : n && (a = n.next, r = n.error, s = n.complete, n !== o.c && (c = Object.create(n), (0, i.m)(c.unsubscribe) && u.add(c.unsubscribe.bind(c)), c.unsubscribe = u.unsubscribe.bind(u))), u._context = c, u._next = a, u._error = r, u._complete = s, u
                    }
                    return r.__extends(e, t), e.prototype.next = function(t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            u.v.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, e.prototype.error = function(t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                n = u.v.useDeprecatedSynchronousErrorHandling;
                            if (this._error)
                                n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (e.syncErrorThrowable)
                                n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : (0, c.z)(t),
                                this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n)
                                    throw t;
                                (0, c.z)(t)
                            }
                        }
                    }, e.prototype.complete = function() {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var n = function() {
                                    return t._complete.call(t._context)
                                };
                                u.v.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else
                                this.unsubscribe()
                        }
                    }, e.prototype.__tryOrUnsub = function(t, e) {
                        try {
                            t.call(this._context, e)
                        } catch (t) {
                            if (this.unsubscribe(), u.v.useDeprecatedSynchronousErrorHandling)
                                throw t;
                            (0, c.z)(t)
                        }
                    }, e.prototype.__tryOrSetError = function(t, e, n) {
                        if (!u.v.useDeprecatedSynchronousErrorHandling)
                            throw new Error("bad call");
                        try {
                            e.call(this._context, n)
                        } catch (e) {
                            return u.v.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : ((0, c.z)(e), !0)
                        }
                        return !1
                    }, e.prototype._unsubscribe = function() {
                        var t = this._parentSubscriber;
                        this._context = null,
                        this._parentSubscriber = null,
                        t.unsubscribe()
                    }, e
                }(l)
        },
        14601: (t, e, n) => {
            n.d(e, {
                w: () => a
            });
            var r = n(17733),
                i = n(79582),
                o = n(55427),
                s = n(28558),
                a = function() {
                    function t(t) {
                        this.closed = !1,
                        this._parentOrParents = null,
                        this._subscriptions = null,
                        t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                    }
                    var e;
                    return t.prototype.unsubscribe = function() {
                        var e;
                        if (!this.closed) {
                            var n = this,
                                a = n._parentOrParents,
                                c = n._ctorUnsubscribe,
                                l = n._unsubscribe,
                                f = n._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, a instanceof t)
                                a.remove(this);
                            else if (null !== a)
                                for (var d = 0; d < a.length; ++d) {
                                    a[d].remove(this)
                                }
                            if ((0, o.m)(l)) {
                                c && (this._unsubscribe = void 0);
                                try {
                                    l.call(this)
                                } catch (t) {
                                    e = t instanceof s.B ? u(t.errors) : [t]
                                }
                            }
                            if ((0, r.k)(f)) {
                                d = -1;
                                for (var p = f.length; ++d < p;) {
                                    var h = f[d];
                                    if ((0, i.K)(h))
                                        try {
                                            h.unsubscribe()
                                        } catch (t) {
                                            e = e || [],
                                            t instanceof s.B ? e = e.concat(u(t.errors)) : e.push(t)
                                        }
                                }
                            }
                            if (e)
                                throw new s.B(e)
                        }
                    }, t.prototype.add = function(e) {
                        var n = e;
                        if (!e)
                            return t.EMPTY;
                        switch (typeof e) {
                        case "function":
                            n = new t(e);
                        case "object":
                            if (n === this || n.closed || "function" != typeof n.unsubscribe)
                                return n;
                            if (this.closed)
                                return n.unsubscribe(), n;
                            if (!(n instanceof t)) {
                                var r = n;
                                (n = new t)._subscriptions = [r]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        var i = n._parentOrParents;
                        if (null === i)
                            n._parentOrParents = this;
                        else if (i instanceof t) {
                            if (i === this)
                                return n;
                            n._parentOrParents = [i, this]
                        } else {
                            if (-1 !== i.indexOf(this))
                                return n;
                            i.push(this)
                        }
                        var o = this._subscriptions;
                        return null === o ? this._subscriptions = [n] : o.push(n), n
                    }, t.prototype.remove = function(t) {
                        var e = this._subscriptions;
                        if (e) {
                            var n = e.indexOf(t);
                            -1 !== n && e.splice(n, 1)
                        }
                    }, t.EMPTY = ((e = new t).closed = !0, e), t
                }();
            function u(t) {
                return t.reduce((function(t, e) {
                    return t.concat(e instanceof s.B ? e.errors : e)
                }), [])
            }
        },
        79910: (t, e, n) => {
            n.d(e, {
                v: () => i
            });
            var r = !1,
                i = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        t && (new Error).stack;
                        r = t
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return r
                    }
                }
        },
        46601: (t, e, n) => {
            n.d(e, {
                IY: () => a,
                Ds: () => u,
                ft: () => c
            });
            var r = n(59312),
                i = n(98036),
                o = n(44586),
                s = n(35316),
                a = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.parent = e, n
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(t)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t),
                        this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(),
                        this.unsubscribe()
                    }, e
                }(i.L),
                u = (i.L, function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r.__extends(e, t), e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyError = function(t) {
                        this.destination.error(t)
                    }, e.prototype.notifyComplete = function() {
                        this.destination.complete()
                    }, e
                }(i.L));
            i.L;
            function c(t, e) {
                if (!e.closed)
                    return t instanceof o.y ? t.subscribe(e) : (0, s.s)(t)(e)
            }
        },
        68571: (t, e, n) => {
            n.d(e, {
                N: () => l
            });
            var r = n(59312),
                i = n(32952),
                o = n(44586),
                s = n(98036),
                a = n(14601),
                u = n(95343),
                c = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
                    }
                    return r.__extends(e, t), e.prototype._subscribe = function(t) {
                        return this.getSubject().subscribe(t)
                    }, e.prototype.getSubject = function() {
                        var t = this._subject;
                        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }, e.prototype.connect = function() {
                        var t = this._connection;
                        return t || (this._isComplete = !1, (t = this._connection = new a.w).add(this.source.subscribe(new f(this.getSubject(), this))), t.closed && (this._connection = null, t = a.w.EMPTY)), t
                    }, e.prototype.refCount = function() {
                        return (0, u.x)()(this)
                    }, e
                }(o.y),
                l = function() {
                    var t = c.prototype;
                    return {
                        operator: {
                            value: null
                        },
                        _refCount: {
                            value: 0,
                            writable: !0
                        },
                        _subject: {
                            value: null,
                            writable: !0
                        },
                        _connection: {
                            value: null,
                            writable: !0
                        },
                        _subscribe: {
                            value: t._subscribe
                        },
                        _isComplete: {
                            value: t._isComplete,
                            writable: !0
                        },
                        getSubject: {
                            value: t.getSubject
                        },
                        connect: {
                            value: t.connect
                        },
                        refCount: {
                            value: t.refCount
                        }
                    }
                }(),
                f = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return r.__extends(e, t), e.prototype._error = function(e) {
                        this._unsubscribe(),
                        t.prototype._error.call(this, e)
                    }, e.prototype._complete = function() {
                        this.connectable._isComplete = !0,
                        this._unsubscribe(),
                        t.prototype._complete.call(this)
                    }, e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._connection;
                            t._refCount = 0,
                            t._subject = null,
                            t._connection = null,
                            e && e.unsubscribe()
                        }
                    }, e
                }(i.Yc);
            s.L
        },
        2844: (t, e, n) => {
            n.d(e, {
                aj: () => l,
                Ms: () => f
            });
            var r = n(59312),
                i = n(67827),
                o = n(17733),
                s = n(57655),
                a = n(72500),
                u = n(81967),
                c = {};
            function l() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = void 0,
                    r = void 0;
                return (0, i.K)(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && (0, o.k)(t[0]) && (t = t[0]), (0, u.n)(t, r).lift(new f(n))
            }
            var f = function() {
                    function t(t) {
                        this.resultSelector = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new d(t, this.resultSelector))
                    }, t
                }(),
                d = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        this.values.push(c),
                        this.observables.push(t)
                    }, e.prototype._complete = function() {
                        var t = this.observables,
                            e = t.length;
                        if (0 === e)
                            this.destination.complete();
                        else {
                            this.active = e,
                            this.toRespond = e;
                            for (var n = 0; n < e; n++) {
                                var r = t[n];
                                this.add((0, a.D)(this, r, void 0, n))
                            }
                        }
                    }, e.prototype.notifyComplete = function(t) {
                        0 == (this.active -= 1) && this.destination.complete()
                    }, e.prototype.notifyNext = function(t, e, n) {
                        var r = this.values,
                            i = r[n],
                            o = this.toRespond ? i === c ? --this.toRespond : this.toRespond : 0;
                        r[n] = e,
                        0 === o && (this.resultSelector ? this._tryResultSelector(r) : this.destination.next(r.slice()))
                    }, e.prototype._tryResultSelector = function(t) {
                        var e;
                        try {
                            e = this.resultSelector.apply(this, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(e)
                    }, e
                }(s.L)
        },
        95399: (t, e, n) => {
            n.d(e, {
                z: () => o
            });
            var r = n(76974),
                i = n(44212);
            function o() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return (0, i.u)()(r.of.apply(void 0, t))
            }
        },
        18625: (t, e, n) => {
            n.d(e, {
                P: () => s
            });
            var r = n(44586),
                i = n(12126),
                o = n(40151);
            function s(t) {
                return new r.y((function(e) {
                    var n;
                    try {
                        n = t()
                    } catch (t) {
                        return void e.error(t)
                    }
                    return (n ? (0, i.D)(n) : (0, o.c)()).subscribe(e)
                }))
            }
        },
        40151: (t, e, n) => {
            n.d(e, {
                E: () => i,
                c: () => o
            });
            var r = n(44586),
                i = new r.y((function(t) {
                    return t.complete()
                }));
            function o(t) {
                return t ? function(t) {
                    return new r.y((function(e) {
                        return t.schedule((function() {
                            return e.complete()
                        }))
                    }))
                }(t) : i
            }
        },
        12126: (t, e, n) => {
            n.d(e, {
                D: () => s
            });
            var r = n(44586),
                i = n(35316),
                o = n(40663);
            function s(t, e) {
                return e ? (0, o.x)(t, e) : t instanceof r.y ? t : new r.y((0, i.s)(t))
            }
        },
        81967: (t, e, n) => {
            n.d(e, {
                n: () => s
            });
            var r = n(44586),
                i = n(84464),
                o = n(11315);
            function s(t, e) {
                return e ? (0, o.r)(t, e) : new r.y((0, i.V)(t))
            }
        },
        49708: (t, e, n) => {
            n.d(e, {
                R: () => a
            });
            var r = n(44586),
                i = n(17733),
                o = n(55427),
                s = n(77176);
            function a(t, e, n, c) {
                return (0, o.m)(n) && (c = n, n = void 0), c ? a(t, e, n).pipe((0, s.U)((function(t) {
                    return (0, i.k)(t) ? c.apply(void 0, t) : c(t)
                }))) : new r.y((function(r) {
                    u(t, e, (function(t) {
                        arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(t)
                    }), r, n)
                }))
            }
            function u(t, e, n, r, i) {
                var o;
                if (function(t) {
                    return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                }(t)) {
                    var s = t;
                    t.addEventListener(e, n, i),
                    o = function() {
                        return s.removeEventListener(e, n, i)
                    }
                } else if (function(t) {
                    return t && "function" == typeof t.on && "function" == typeof t.off
                }(t)) {
                    var a = t;
                    t.on(e, n),
                    o = function() {
                        return a.off(e, n)
                    }
                } else if (function(t) {
                    return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                }(t)) {
                    var c = t;
                    t.addListener(e, n),
                    o = function() {
                        return c.removeListener(e, n)
                    }
                } else {
                    if (!t || !t.length)
                        throw new TypeError("Invalid event target");
                    for (var l = 0, f = t.length; l < f; l++)
                        u(t[l], e, n, r, i)
                }
                r.add(o)
            }
        },
        8175: (t, e, n) => {
            n.d(e, {
                R: () => a
            });
            var r = n(44586),
                i = n(17733),
                o = n(55427),
                s = n(77176);
            function a(t, e, n) {
                return n ? a(t, e).pipe((0, s.U)((function(t) {
                    return (0, i.k)(t) ? n.apply(void 0, t) : n(t)
                }))) : new r.y((function(n) {
                    var r,
                        i = function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e] = arguments[e];
                            return n.next(1 === t.length ? t[0] : t)
                        };
                    try {
                        r = t(i)
                    } catch (t) {
                        return void n.error(t)
                    }
                    if ((0, o.m)(e))
                        return function() {
                            return e(i, r)
                        }
                }))
            }
        },
        77843: (t, e, n) => {
            n.d(e, {
                F: () => s
            });
            var r = n(44586),
                i = n(82506),
                o = n(44362);
            function s(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = i.P), (!(0, o.k)(t) || t < 0) && (t = 0), e && "function" == typeof e.schedule || (e = i.P), new r.y((function(n) {
                    return n.add(e.schedule(a, t, {
                        subscriber: n,
                        counter: 0,
                        period: t
                    })), n
                }))
            }
            function a(t) {
                var e = t.subscriber,
                    n = t.counter,
                    r = t.period;
                e.next(n),
                this.schedule({
                    subscriber: e,
                    counter: n + 1,
                    period: r
                }, r)
            }
        },
        24209: (t, e, n) => {
            n.d(e, {
                T: () => a
            });
            var r = n(44586),
                i = n(67827),
                o = n(68425),
                s = n(81967);
            function a() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = Number.POSITIVE_INFINITY,
                    a = null,
                    u = t[t.length - 1];
                return (0, i.K)(u) ? (a = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof u && (n = t.pop()), null === a && 1 === t.length && t[0] instanceof r.y ? t[0] : (0, o.J)(n)((0, s.n)(t, a))
            }
        },
        76974: (t, e, n) => {
            n.d(e, {
                of: () => s
            });
            var r = n(67827),
                i = n(81967),
                o = n(11315);
            function s() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = t[t.length - 1];
                return (0, r.K)(n) ? (t.pop(), (0, o.r)(t, n)) : (0, i.n)(t)
            }
        },
        91402: (t, e, n) => {
            n.d(e, {
                _: () => i
            });
            var r = n(44586);
            function i(t, e) {
                return e ? new r.y((function(n) {
                    return e.schedule(o, 0, {
                        error: t,
                        subscriber: n
                    })
                })) : new r.y((function(e) {
                    return e.error(t)
                }))
            }
            function o(t) {
                var e = t.error;
                t.subscriber.error(e)
            }
        },
        33665: (t, e, n) => {
            n.d(e, {
                g: () => s
            });
            var r = n(44586),
                i = n(12126),
                o = n(40151);
            function s(t, e) {
                return new r.y((function(n) {
                    var r,
                        s;
                    try {
                        r = t()
                    } catch (t) {
                        return void n.error(t)
                    }
                    try {
                        s = e(r)
                    } catch (t) {
                        return void n.error(t)
                    }
                    var a = (s ? (0, i.D)(s) : o.E).subscribe(n);
                    return function() {
                        a.unsubscribe(),
                        r && r.unsubscribe()
                    }
                }))
            }
        },
        94123: (t, e, n) => {
            n.d(e, {
                z: () => i
            });
            var r = n(95399);
            function i() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return function(e) {
                    return e.lift.call(r.z.apply(void 0, [e].concat(t)))
                }
            }
        },
        44212: (t, e, n) => {
            n.d(e, {
                u: () => i
            });
            var r = n(68425);
            function i() {
                return (0, r.J)(1)
            }
        },
        71032: (t, e, n) => {
            n.d(e, {
                b: () => i
            });
            var r = n(85321);
            function i(t, e) {
                return (0, r.zg)(t, e, 1)
            }
        },
        78674: (t, e, n) => {
            n.d(e, {
                b: () => s
            });
            var r = n(59312),
                i = n(98036),
                o = n(82506);
            function s(t, e) {
                return void 0 === e && (e = o.P), function(n) {
                    return n.lift(new a(t, e))
                }
            }
            var a = function() {
                    function t(t, e) {
                        this.dueTime = t,
                        this.scheduler = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new u(t, this.dueTime, this.scheduler))
                    }, t
                }(),
                u = function(t) {
                    function e(e, n, r) {
                        var i = t.call(this, e) || this;
                        return i.dueTime = n, i.scheduler = r, i.debouncedSubscription = null, i.lastValue = null, i.hasValue = !1, i
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        this.clearDebounce(),
                        this.lastValue = t,
                        this.hasValue = !0,
                        this.add(this.debouncedSubscription = this.scheduler.schedule(c, this.dueTime, this))
                    }, e.prototype._complete = function() {
                        this.debouncedNext(),
                        this.destination.complete()
                    }, e.prototype.debouncedNext = function() {
                        if (this.clearDebounce(), this.hasValue) {
                            var t = this.lastValue;
                            this.lastValue = null,
                            this.hasValue = !1,
                            this.destination.next(t)
                        }
                    }, e.prototype.clearDebounce = function() {
                        var t = this.debouncedSubscription;
                        null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
                    }, e
                }(i.L);
            function c(t) {
                t.debouncedNext()
            }
        },
        31524: (t, e, n) => {
            n.d(e, {
                d: () => o
            });
            var r = n(59312),
                i = n(98036);
            function o(t) {
                return void 0 === t && (t = null), function(e) {
                    return e.lift(new s(t))
                }
            }
            var s = function() {
                    function t(t) {
                        this.defaultValue = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.defaultValue))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.defaultValue = n, r.isEmpty = !0, r
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        this.isEmpty = !1,
                        this.destination.next(t)
                    }, e.prototype._complete = function() {
                        this.isEmpty && this.destination.next(this.defaultValue),
                        this.destination.complete()
                    }, e
                }(i.L)
        },
        28043: (t, e, n) => {
            n.d(e, {
                x: () => o
            });
            var r = n(59312),
                i = n(98036);
            function o(t, e) {
                return function(n) {
                    return n.lift(new s(t, e))
                }
            }
            var s = function() {
                    function t(t, e) {
                        this.compare = t,
                        this.keySelector = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.compare, this.keySelector))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, r) {
                        var i = t.call(this, e) || this;
                        return i.keySelector = r, i.hasKey = !1, "function" == typeof n && (i.compare = n), i
                    }
                    return r.__extends(e, t), e.prototype.compare = function(t, e) {
                        return t === e
                    }, e.prototype._next = function(t) {
                        var e;
                        try {
                            var n = this.keySelector;
                            e = n ? n(t) : t
                        } catch (t) {
                            return this.destination.error(t)
                        }
                        var r = !1;
                        if (this.hasKey)
                            try {
                                r = (0, this.compare)(this.key, e)
                            } catch (t) {
                                return this.destination.error(t)
                            }
                        else
                            this.hasKey = !0;
                        r || (this.key = e, this.destination.next(t))
                    }, e
                }(i.L)
        },
        85985: (t, e, n) => {
            n.d(e, {
                h: () => o
            });
            var r = n(59312),
                i = n(98036);
            function o(t, e) {
                return function(n) {
                    return n.lift(new s(t, e))
                }
            }
            var s = function() {
                    function t(t, e) {
                        this.predicate = t,
                        this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.predicate, this.thisArg))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, r) {
                        var i = t.call(this, e) || this;
                        return i.predicate = n, i.thisArg = r, i.count = 0, i
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        e && this.destination.next(t)
                    }, e
                }(i.L)
        },
        50628: (t, e, n) => {
            n.d(e, {
                P: () => c
            });
            var r = n(33346),
                i = n(85985),
                o = n(23063),
                s = n(31524),
                a = n(4750),
                u = n(49524);
            function c(t, e) {
                var n = arguments.length >= 2;
                return function(c) {
                    return c.pipe(t ? (0, i.h)((function(e, n) {
                        return t(e, n, c)
                    })) : u.y, (0, o.q)(1), n ? (0, s.d)(e) : (0, a.T)((function() {
                        return new r.K
                    })))
                }
            }
        },
        77176: (t, e, n) => {
            n.d(e, {
                U: () => o
            });
            var r = n(59312),
                i = n(98036);
            function o(t, e) {
                return function(n) {
                    if ("function" != typeof t)
                        throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new s(t, e))
                }
            }
            var s = function() {
                    function t(t, e) {
                        this.project = t,
                        this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.project, this.thisArg))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, r) {
                        var i = t.call(this, e) || this;
                        return i.project = n, i.count = 0, i.thisArg = r || i, i
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.project.call(this.thisArg, t, this.count++)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(e)
                    }, e
                }(i.L)
        },
        17343: (t, e, n) => {
            n.d(e, {
                h: () => o
            });
            var r = n(59312),
                i = n(98036);
            function o(t) {
                return function(e) {
                    return e.lift(new s(t))
                }
            }
            var s = function() {
                    function t(t) {
                        this.value = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.value))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.value = n, r
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        this.destination.next(this.value)
                    }, e
                }(i.L)
        },
        68425: (t, e, n) => {
            n.d(e, {
                J: () => o
            });
            var r = n(85321),
                i = n(49524);
            function o(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), (0, r.zg)(i.y, t)
            }
        },
        85321: (t, e, n) => {
            n.d(e, {
                zg: () => a,
                VS: () => l
            });
            var r = n(59312),
                i = n(77176),
                o = n(12126),
                s = n(46601);
            function a(t, e, n) {
                return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(r) {
                    return r.pipe(a((function(n, r) {
                        return (0, o.D)(t(n, r)).pipe((0, i.U)((function(t, i) {
                            return e(n, t, r, i)
                        })))
                    }), n))
                } : ("number" == typeof e && (n = e), function(e) {
                    return e.lift(new u(t, n))
                })
            }
            var u = function() {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY),
                        this.project = t,
                        this.concurrent = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.project, this.concurrent))
                    }, t
                }(),
                c = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var i = t.call(this, e) || this;
                        return i.project = n, i.concurrent = r, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                    }, e.prototype._tryNext = function(t) {
                        var e,
                            n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.active++,
                        this._innerSub(e)
                    }, e.prototype._innerSub = function(t) {
                        var e = new s.IY(this),
                            n = this.destination;
                        n.add(e);
                        var r = (0, s.ft)(t, e);
                        r !== e && n.add(r)
                    }, e.prototype._complete = function() {
                        this.hasCompleted = !0,
                        0 === this.active && 0 === this.buffer.length && this.destination.complete(),
                        this.unsubscribe()
                    }, e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyComplete = function() {
                        var t = this.buffer;
                        this.active--,
                        t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, e
                }(s.Ds),
                l = a
        },
        24755: (t, e, n) => {
            n.d(e, {
                O: () => i
            });
            var r = n(68571);
            function i(t, e) {
                return function(n) {
                    var i;
                    if (i = "function" == typeof t ? t : function() {
                        return t
                    }, "function" == typeof e)
                        return n.lift(new o(i, e));
                    var s = Object.create(n, r.N);
                    return s.source = n, s.subjectFactory = i, s
                }
            }
            var o = function() {
                function t(t, e) {
                    this.subjectFactory = t,
                    this.selector = e
                }
                return t.prototype.call = function(t, e) {
                    var n = this.selector,
                        r = this.subjectFactory(),
                        i = n(r).subscribe(t);
                    return i.add(e.subscribe(r)), i
                }, t
            }()
        },
        80544: (t, e, n) => {
            n.d(e, {
                QV: () => s,
                ht: () => u
            });
            var r = n(59312),
                i = n(98036),
                o = n(12834);
            function s(t, e) {
                return void 0 === e && (e = 0), function(n) {
                    return n.lift(new a(t, e))
                }
            }
            var a = function() {
                    function t(t, e) {
                        void 0 === e && (e = 0),
                        this.scheduler = t,
                        this.delay = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new u(t, this.scheduler, this.delay))
                    }, t
                }(),
                u = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = 0);
                        var i = t.call(this, e) || this;
                        return i.scheduler = n, i.delay = r, i
                    }
                    return r.__extends(e, t), e.dispatch = function(t) {
                        var e = t.notification,
                            n = t.destination;
                        e.observe(n),
                        this.unsubscribe()
                    }, e.prototype.scheduleMessage = function(t) {
                        this.destination.add(this.scheduler.schedule(e.dispatch, this.delay, new c(t, this.destination)))
                    }, e.prototype._next = function(t) {
                        this.scheduleMessage(o.P.createNext(t))
                    }, e.prototype._error = function(t) {
                        this.scheduleMessage(o.P.createError(t)),
                        this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.scheduleMessage(o.P.createComplete()),
                        this.unsubscribe()
                    }, e
                }(i.L),
                c = function() {
                    return function(t, e) {
                        this.notification = t,
                        this.destination = e
                    }
                }()
        },
        95343: (t, e, n) => {
            n.d(e, {
                x: () => o
            });
            var r = n(59312),
                i = n(98036);
            function o() {
                return function(t) {
                    return t.lift(new s(t))
                }
            }
            var s = function() {
                    function t(t) {
                        this.connectable = t
                    }
                    return t.prototype.call = function(t, e) {
                        var n = this.connectable;
                        n._refCount++;
                        var r = new a(t, n),
                            i = e.subscribe(r);
                        return r.closed || (r.connection = n.connect()), i
                    }, t
                }(),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return r.__extends(e, t), e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._refCount;
                            if (e <= 0)
                                this.connection = null;
                            else if (t._refCount = e - 1, e > 1)
                                this.connection = null;
                            else {
                                var n = this.connection,
                                    r = t._connection;
                                this.connection = null,
                                !r || n && r !== n || r.unsubscribe()
                            }
                        } else
                            this.connection = null
                    }, e
                }(i.L)
        },
        38194: (t, e, n) => {
            n.d(e, {
                B: () => a
            });
            var r = n(24755),
                i = n(95343),
                o = n(32952);
            function s() {
                return new o.xQ
            }
            function a() {
                return function(t) {
                    return (0, i.x)()((0, r.O)(s)(t))
                }
            }
        },
        93508: (t, e, n) => {
            n.d(e, {
                O: () => o
            });
            var r = n(95399),
                i = n(67827);
            function o() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = t[t.length - 1];
                return (0, i.K)(n) ? (t.pop(), function(e) {
                    return (0, r.z)(t, e, n)
                }) : function(e) {
                    return (0, r.z)(t, e)
                }
            }
        },
        66310: (t, e, n) => {
            n.d(e, {
                w: () => a
            });
            var r = n(59312),
                i = n(77176),
                o = n(12126),
                s = n(46601);
            function a(t, e) {
                return "function" == typeof e ? function(n) {
                    return n.pipe(a((function(n, r) {
                        return (0, o.D)(t(n, r)).pipe((0, i.U)((function(t, i) {
                            return e(n, t, r, i)
                        })))
                    })))
                } : function(e) {
                    return e.lift(new u(t))
                }
            }
            var u = function() {
                    function t(t) {
                        this.project = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.project))
                    }, t
                }(),
                c = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.project = n, r.index = 0, r
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        var e,
                            n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this._innerSub(e)
                    }, e.prototype._innerSub = function(t) {
                        var e = this.innerSubscription;
                        e && e.unsubscribe();
                        var n = new s.IY(this),
                            r = this.destination;
                        r.add(n),
                        this.innerSubscription = (0, s.ft)(t, n),
                        this.innerSubscription !== n && r.add(this.innerSubscription)
                    }, e.prototype._complete = function() {
                        var e = this.innerSubscription;
                        e && !e.closed || t.prototype._complete.call(this),
                        this.unsubscribe()
                    }, e.prototype._unsubscribe = function() {
                        this.innerSubscription = void 0
                    }, e.prototype.notifyComplete = function() {
                        this.innerSubscription = void 0,
                        this.isStopped && t.prototype._complete.call(this)
                    }, e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e
                }(s.Ds)
        },
        23063: (t, e, n) => {
            n.d(e, {
                q: () => a
            });
            var r = n(59312),
                i = n(98036),
                o = n(2270),
                s = n(40151);
            function a(t) {
                return function(e) {
                    return 0 === t ? (0, s.c)() : e.lift(new u(t))
                }
            }
            var u = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0)
                            throw new o.W
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.total))
                    }, t
                }(),
                c = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.count = 0, r
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        var e = this.total,
                            n = ++this.count;
                        n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                    }, e
                }(i.L)
        },
        2834: (t, e, n) => {
            n.d(e, {
                b: () => a
            });
            var r = n(59312),
                i = n(98036),
                o = n(25656),
                s = n(55427);
            function a(t, e, n) {
                return function(r) {
                    return r.lift(new u(t, e, n))
                }
            }
            var u = function() {
                    function t(t, e, n) {
                        this.nextOrObserver = t,
                        this.error = e,
                        this.complete = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.nextOrObserver, this.error, this.complete))
                    }, t
                }(),
                c = function(t) {
                    function e(e, n, r, i) {
                        var a = t.call(this, e) || this;
                        return a._tapNext = o.Z, a._tapError = o.Z, a._tapComplete = o.Z, a._tapError = r || o.Z, a._tapComplete = i || o.Z, (0, s.m)(n) ? (a._context = a, a._tapNext = n) : n && (a._context = n, a._tapNext = n.next || o.Z, a._tapError = n.error || o.Z, a._tapComplete = n.complete || o.Z), a
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        try {
                            this._tapNext.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        try {
                            this._tapError.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.error(t)
                    }, e.prototype._complete = function() {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        return this.destination.complete()
                    }, e
                }(i.L)
        },
        4750: (t, e, n) => {
            n.d(e, {
                T: () => s
            });
            var r = n(59312),
                i = n(33346),
                o = n(98036);
            function s(t) {
                return void 0 === t && (t = c), function(e) {
                    return e.lift(new a(t))
                }
            }
            var a = function() {
                    function t(t) {
                        this.errorFactory = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new u(t, this.errorFactory))
                    }, t
                }(),
                u = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.errorFactory = n, r.hasValue = !1, r
                    }
                    return r.__extends(e, t), e.prototype._next = function(t) {
                        this.hasValue = !0,
                        this.destination.next(t)
                    }, e.prototype._complete = function() {
                        if (this.hasValue)
                            return this.destination.complete();
                        var t = void 0;
                        try {
                            t = this.errorFactory()
                        } catch (e) {
                            t = e
                        }
                        this.destination.error(t)
                    }, e
                }(o.L);
            function c() {
                return new i.K
            }
        },
        11315: (t, e, n) => {
            n.d(e, {
                r: () => o
            });
            var r = n(44586),
                i = n(14601);
            function o(t, e) {
                return new r.y((function(n) {
                    var r = new i.w,
                        o = 0;
                    return r.add(e.schedule((function() {
                        o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
                    }))), r
                }))
            }
        },
        37895: (t, e, n) => {
            n.d(e, {
                Q: () => s
            });
            var r = n(44586),
                i = n(14601),
                o = n(85451);
            function s(t, e) {
                if (!t)
                    throw new Error("Iterable cannot be null");
                return new r.y((function(n) {
                    var r,
                        s = new i.w;
                    return s.add((function() {
                        r && "function" == typeof r.return && r.return()
                    })), s.add(e.schedule((function() {
                        r = t[o.hZ](),
                        s.add(e.schedule((function() {
                            if (!n.closed) {
                                var t,
                                    e;
                                try {
                                    var i = r.next();
                                    t = i.value,
                                    e = i.done
                                } catch (t) {
                                    return void n.error(t)
                                }
                                e ? n.complete() : (n.next(t), this.schedule())
                            }
                        })))
                    }))), s
                }))
            }
        },
        36958: (t, e, n) => {
            n.d(e, {
                l: () => s
            });
            var r = n(44586),
                i = n(14601),
                o = n(58569);
            function s(t, e) {
                return new r.y((function(n) {
                    var r = new i.w;
                    return r.add(e.schedule((function() {
                        var i = t[o.L]();
                        r.add(i.subscribe({
                            next: function(t) {
                                r.add(e.schedule((function() {
                                    return n.next(t)
                                })))
                            },
                            error: function(t) {
                                r.add(e.schedule((function() {
                                    return n.error(t)
                                })))
                            },
                            complete: function() {
                                r.add(e.schedule((function() {
                                    return n.complete()
                                })))
                            }
                        }))
                    }))), r
                }))
            }
        },
        48318: (t, e, n) => {
            n.d(e, {
                c: () => o
            });
            var r = n(44586),
                i = n(14601);
            function o(t, e) {
                return new r.y((function(n) {
                    var r = new i.w;
                    return r.add(e.schedule((function() {
                        return t.then((function(t) {
                            r.add(e.schedule((function() {
                                n.next(t),
                                r.add(e.schedule((function() {
                                    return n.complete()
                                })))
                            })))
                        }), (function(t) {
                            r.add(e.schedule((function() {
                                return n.error(t)
                            })))
                        }))
                    }))), r
                }))
            }
        },
        40663: (t, e, n) => {
            n.d(e, {
                x: () => f
            });
            var r = n(36958),
                i = n(48318),
                o = n(11315),
                s = n(37895),
                a = n(21),
                u = n(93595),
                c = n(20542),
                l = n(64249);
            function f(t, e) {
                if (null != t) {
                    if ((0, a.c)(t))
                        return (0, r.l)(t, e);
                    if ((0, u.t)(t))
                        return (0, i.c)(t, e);
                    if ((0, c.z)(t))
                        return (0, o.r)(t, e);
                    if ((0, l.T)(t) || "string" == typeof t)
                        return (0, s.Q)(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }
        },
        6482: (t, e, n) => {
            n.d(e, {
                a: () => i
            });
            var r = n(59312),
                i = function(t) {
                    function e(e, n) {
                        return t.call(this) || this
                    }
                    return r.__extends(e, t), e.prototype.schedule = function(t, e) {
                        return void 0 === e && (e = 0), this
                    }, e
                }(n(14601).w)
        },
        8379: (t, e, n) => {
            n.d(e, {
                t: () => o
            });
            var r = n(59312),
                i = n(17605),
                o = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e, n) || this;
                        return r.scheduler = e, r.work = n, r
                    }
                    return r.__extends(e, t), e.prototype.requestAsyncId = function(e, n, r) {
                        return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = i.H.setImmediate(e.flush.bind(e, null))))
                    }, e.prototype.recycleAsyncId = function(e, n, r) {
                        if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0)
                            return t.prototype.recycleAsyncId.call(this, e, n, r);
                        0 === e.actions.length && (i.H.clearImmediate(n), e.scheduled = void 0)
                    }, e
                }(n(49917).o)
        },
        14132: (t, e, n) => {
            n.d(e, {
                E: () => i
            });
            var r = n(59312),
                i = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r.__extends(e, t), e.prototype.flush = function(t) {
                        this.active = !0,
                        this.scheduled = void 0;
                        var e,
                            n = this.actions,
                            r = -1,
                            i = n.length;
                        t = t || n.shift();
                        do {
                            if (e = t.execute(t.state, t.delay))
                                break
                        } while (++r < i && (t = n.shift()));
                        if (this.active = !1, e) {
                            for (; ++r < i && (t = n.shift());)
                                t.unsubscribe();
                            throw e
                        }
                    }, e
                }(n(68258).v)
        },
        49917: (t, e, n) => {
            n.d(e, {
                o: () => i
            });
            var r = n(59312),
                i = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e, n) || this;
                        return r.scheduler = e, r.work = n, r.pending = !1, r
                    }
                    return r.__extends(e, t), e.prototype.schedule = function(t, e) {
                        if (void 0 === e && (e = 0), this.closed)
                            return this;
                        this.state = t;
                        var n = this.id,
                            r = this.scheduler;
                        return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
                    }, e.prototype.requestAsyncId = function(t, e, n) {
                        return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
                    }, e.prototype.recycleAsyncId = function(t, e, n) {
                        if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending)
                            return e;
                        clearInterval(e)
                    }, e.prototype.execute = function(t, e) {
                        if (this.closed)
                            return new Error("executing a cancelled action");
                        this.pending = !1;
                        var n = this._execute(t, e);
                        if (n)
                            return n;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }, e.prototype._execute = function(t, e) {
                        var n = !1,
                            r = void 0;
                        try {
                            this.work(t)
                        } catch (t) {
                            n = !0,
                            r = !!t && t || new Error(t)
                        }
                        if (n)
                            return this.unsubscribe(), r
                    }, e.prototype._unsubscribe = function() {
                        var t = this.id,
                            e = this.scheduler,
                            n = e.actions,
                            r = n.indexOf(this);
                        this.work = null,
                        this.state = null,
                        this.pending = !1,
                        this.scheduler = null,
                        -1 !== r && n.splice(r, 1),
                        null != t && (this.id = this.recycleAsyncId(e, t, null)),
                        this.delay = null
                    }, e
                }(n(6482).a)
        },
        68258: (t, e, n) => {
            n.d(e, {
                v: () => o
            });
            var r = n(59312),
                i = n(75302),
                o = function(t) {
                    function e(n, r) {
                        void 0 === r && (r = i.b.now);
                        var o = t.call(this, n, (function() {
                            return e.delegate && e.delegate !== o ? e.delegate.now() : r()
                        })) || this;
                        return o.actions = [], o.active = !1, o.scheduled = void 0, o
                    }
                    return r.__extends(e, t), e.prototype.schedule = function(n, r, i) {
                        return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, i) : t.prototype.schedule.call(this, n, r, i)
                    }, e.prototype.flush = function(t) {
                        var e = this.actions;
                        if (this.active)
                            e.push(t);
                        else {
                            var n;
                            this.active = !0;
                            do {
                                if (n = t.execute(t.state, t.delay))
                                    break
                            } while (t = e.shift());
                            if (this.active = !1, n) {
                                for (; t = e.shift();)
                                    t.unsubscribe();
                                throw n
                            }
                        }
                    }, e
                }(i.b)
        },
        79692: (t, e, n) => {
            n.d(e, {
                E: () => i,
                e: () => o
            });
            var r = n(8379),
                i = new (n(14132).E)(r.t),
                o = i
        },
        82506: (t, e, n) => {
            n.d(e, {
                z: () => i,
                P: () => o
            });
            var r = n(49917),
                i = new (n(68258).v)(r.o),
                o = i
        },
        85451: (t, e, n) => {
            function r() {
                return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }
            n.d(e, {
                hZ: () => i
            });
            var i = r()
        },
        58569: (t, e, n) => {
            n.d(e, {
                L: () => r
            });
            var r = function() {
                return "function" == typeof Symbol && Symbol.observable || "@@observable"
            }()
        },
        42545: (t, e, n) => {
            n.d(e, {
                b: () => r
            });
            var r = function() {
                return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
            }()
        },
        2270: (t, e, n) => {
            n.d(e, {
                W: () => r
            });
            var r = function() {
                function t() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }()
        },
        33346: (t, e, n) => {
            n.d(e, {
                K: () => r
            });
            var r = function() {
                function t() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }()
        },
        17605: (t, e, n) => {
            n.d(e, {
                H: () => a
            });
            var r = 1,
                i = function() {
                    return Promise.resolve()
                }(),
                o = {};
            function s(t) {
                return t in o && (delete o[t], !0)
            }
            var a = {
                setImmediate: function(t) {
                    var e = r++;
                    return o[e] = !0, i.then((function() {
                        return s(e) && t()
                    })), e
                },
                clearImmediate: function(t) {
                    s(t)
                }
            }
        },
        82987: (t, e, n) => {
            n.d(e, {
                N: () => r
            });
            var r = function() {
                function t() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }()
        },
        28558: (t, e, n) => {
            n.d(e, {
                B: () => r
            });
            var r = function() {
                function t(t) {
                    return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                        return e + 1 + ") " + t.toString()
                    })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
                }
                return t.prototype = Object.create(Error.prototype), t
            }()
        },
        51106: (t, e, n) => {
            n.d(e, {
                _: () => i
            });
            var r = n(98036);
            function i(t) {
                for (; t;) {
                    var e = t,
                        n = e.closed,
                        i = e.destination,
                        o = e.isStopped;
                    if (n || o)
                        return !1;
                    t = i && i instanceof r.L ? i : null
                }
                return !0
            }
        },
        94224: (t, e, n) => {
            function r(t) {
                setTimeout((function() {
                    throw t
                }), 0)
            }
            n.d(e, {
                z: () => r
            })
        },
        49524: (t, e, n) => {
            function r(t) {
                return t
            }
            n.d(e, {
                y: () => r
            })
        },
        17733: (t, e, n) => {
            n.d(e, {
                k: () => r
            });
            var r = function() {
                return Array.isArray || function(t) {
                        return t && "number" == typeof t.length
                    }
            }()
        },
        20542: (t, e, n) => {
            n.d(e, {
                z: () => r
            });
            var r = function(t) {
                return t && "number" == typeof t.length && "function" != typeof t
            }
        },
        55427: (t, e, n) => {
            function r(t) {
                return "function" == typeof t
            }
            n.d(e, {
                m: () => r
            })
        },
        21: (t, e, n) => {
            n.d(e, {
                c: () => i
            });
            var r = n(58569);
            function i(t) {
                return t && "function" == typeof t[r.L]
            }
        },
        64249: (t, e, n) => {
            n.d(e, {
                T: () => i
            });
            var r = n(85451);
            function i(t) {
                return t && "function" == typeof t[r.hZ]
            }
        },
        44362: (t, e, n) => {
            n.d(e, {
                k: () => i
            });
            var r = n(17733);
            function i(t) {
                return !(0, r.k)(t) && t - parseFloat(t) + 1 >= 0
            }
        },
        79582: (t, e, n) => {
            function r(t) {
                return null !== t && "object" == typeof t
            }
            n.d(e, {
                K: () => r
            })
        },
        93595: (t, e, n) => {
            function r(t) {
                return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
            }
            n.d(e, {
                t: () => r
            })
        },
        67827: (t, e, n) => {
            function r(t) {
                return t && "function" == typeof t.schedule
            }
            n.d(e, {
                K: () => r
            })
        },
        25656: (t, e, n) => {
            function r() {}
            n.d(e, {
                Z: () => r
            })
        },
        87072: (t, e, n) => {
            n.d(e, {
                z: () => i,
                U: () => o
            });
            var r = n(49524);
            function i() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return o(t)
            }
            function o(t) {
                return 0 === t.length ? r.y : 1 === t.length ? t[0] : function(e) {
                    return t.reduce((function(t, e) {
                        return e(t)
                    }), e)
                }
            }
        },
        35316: (t, e, n) => {
            n.d(e, {
                s: () => d
            });
            var r = n(84464),
                i = n(6703),
                o = n(30001),
                s = n(9949),
                a = n(20542),
                u = n(93595),
                c = n(79582),
                l = n(85451),
                f = n(58569),
                d = function(t) {
                    if (t && "function" == typeof t[f.L])
                        return (0, s.h)(t);
                    if ((0, a.z)(t))
                        return (0, r.V)(t);
                    if ((0, u.t)(t))
                        return (0, i.A)(t);
                    if (t && "function" == typeof t[l.hZ])
                        return (0, o.u)(t);
                    var e = (0, c.K)(t) ? "an invalid object" : "'" + t + "'";
                    throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
                }
        },
        84464: (t, e, n) => {
            n.d(e, {
                V: () => r
            });
            var r = function(t) {
                return function(e) {
                    for (var n = 0, r = t.length; n < r && !e.closed; n++)
                        e.next(t[n]);
                    e.complete()
                }
            }
        },
        30001: (t, e, n) => {
            n.d(e, {
                u: () => i
            });
            var r = n(85451),
                i = function(t) {
                    return function(e) {
                        for (var n = t[r.hZ]();;) {
                            var i = void 0;
                            try {
                                i = n.next()
                            } catch (t) {
                                return e.error(t), e
                            }
                            if (i.done) {
                                e.complete();
                                break
                            }
                            if (e.next(i.value), e.closed)
                                break
                        }
                        return "function" == typeof n.return && e.add((function() {
                            n.return && n.return()
                        })), e
                    }
                }
        },
        9949: (t, e, n) => {
            n.d(e, {
                h: () => i
            });
            var r = n(58569),
                i = function(t) {
                    return function(e) {
                        var n = t[r.L]();
                        if ("function" != typeof n.subscribe)
                            throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return n.subscribe(e)
                    }
                }
        },
        6703: (t, e, n) => {
            n.d(e, {
                A: () => i
            });
            var r = n(94224),
                i = function(t) {
                    return function(e) {
                        return t.then((function(t) {
                            e.closed || (e.next(t), e.complete())
                        }), (function(t) {
                            return e.error(t)
                        })).then(null, r.z), e
                    }
                }
        },
        72500: (t, e, n) => {
            n.d(e, {
                D: () => s
            });
            var r = n(7882),
                i = n(35316),
                o = n(44586);
            function s(t, e, n, s, a) {
                if (void 0 === a && (a = new r.d(t, n, s)), !a.closed)
                    return e instanceof o.y ? e.subscribe(a) : (0, i.s)(e)(a)
            }
        },
        85063: (t, e, n) => {
            n.d(e, {
                Y: () => s
            });
            var r = n(98036),
                i = n(42545),
                o = n(76535);
            function s(t, e, n) {
                if (t) {
                    if (t instanceof r.L)
                        return t;
                    if (t[i.b])
                        return t[i.b]()
                }
                return t || e || n ? new r.L(t, e, n) : new r.L(o.c)
            }
        },
        59312: (t, e, n) => {
            n.r(e),
            n.d(e, {
                __extends: () => i,
                __assign: () => o,
                __rest: () => s,
                __decorate: () => a,
                __param: () => u,
                __metadata: () => c,
                __awaiter: () => l,
                __generator: () => f,
                __createBinding: () => d,
                __exportStar: () => p,
                __values: () => h,
                __read: () => b,
                __spread: () => g,
                __spreadArrays: () => v,
                __spreadArray: () => y,
                __await: () => m,
                __asyncGenerator: () => _,
                __asyncDelegator: () => w,
                __asyncValues: () => x,
                __makeTemplateObject: () => E,
                __importStar: () => A,
                __importDefault: () => I,
                __classPrivateFieldGet: () => O,
                __classPrivateFieldSet: () => T
            });
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
            };
            function i(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                function n() {
                    this.constructor = t
                }
                r(t, e),
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var o = function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n])
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };
            function s(t, e) {
                var n = {};
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                        e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                }
                return n
            }
            function a(t, e, n, r) {
                var i,
                    o = arguments.length,
                    s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    s = Reflect.decorate(t, e, n, r);
                else
                    for (var a = t.length - 1; a >= 0; a--)
                        (i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                return o > 3 && s && Object.defineProperty(e, n, s), s
            }
            function u(t, e) {
                return function(n, r) {
                    e(n, r, t)
                }
            }
            function c(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(t, e)
            }
            function l(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            u(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            u(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function u(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    u((r = r.apply(t, e || [])).next())
                }))
            }
            function f(t, e) {
                var n,
                    r,
                    i,
                    o,
                    s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0])
                                throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(),
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2],
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(),
                                        s.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            var d = Object.create ? function(t, e, n, r) {
                void 0 === r && (r = n),
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function() {
                        return e[n]
                    }
                })
            } : function(t, e, n, r) {
                void 0 === r && (r = n),
                t[r] = e[n]
            };
            function p(t, e) {
                for (var n in t)
                    "default" === n || Object.prototype.hasOwnProperty.call(e, n) || d(e, t, n)
            }
            function h(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n)
                    return n.call(t);
                if (t && "number" == typeof t.length)
                    return {
                        next: function() {
                            return t && r >= t.length && (t = void 0), {
                                value: t && t[r++],
                                done: !t
                            }
                        }
                    };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            function b(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n)
                    return t;
                var r,
                    i,
                    o = n.call(t),
                    s = [];
                try {
                    for (; (void 0 === e || e-- > 0) && !(r = o.next()).done;)
                        s.push(r.value)
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return s
            }
            function g() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t = t.concat(b(arguments[e]));
                return t
            }
            function v() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                    t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++)
                        r[i] = o[s];
                return r
            }
            function y(t, e) {
                for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
                    t[i] = e[n];
                return t
            }
            function m(t) {
                return this instanceof m ? (this.v = t, this) : new m(t)
            }
            function _(t, e, n) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var r,
                    i = n.apply(t, e || []),
                    o = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;
                function s(t) {
                    i[t] && (r[t] = function(e) {
                        return new Promise((function(n, r) {
                            o.push([t, e, n, r]) > 1 || a(t, e)
                        }))
                    })
                }
                function a(t, e) {
                    try {
                        (n = i[t](e)).value instanceof m ? Promise.resolve(n.value.v).then(u, c) : l(o[0][2], n)
                    } catch (t) {
                        l(o[0][3], t)
                    }
                    var n
                }
                function u(t) {
                    a("next", t)
                }
                function c(t) {
                    a("throw", t)
                }
                function l(t, e) {
                    t(e),
                    o.shift(),
                    o.length && a(o[0][0], o[0][1])
                }
            }
            function w(t) {
                var e,
                    n;
                return e = {}, r("next"), r("throw", (function(t) {
                    throw t
                })), r("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;
                function r(r, i) {
                    e[r] = t[r] ? function(e) {
                        return (n = !n) ? {
                            value: m(t[r](e)),
                            done: "return" === r
                        } : i ? i(e) : e
                    } : i
                }
            }
            function x(t) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var e,
                    n = t[Symbol.asyncIterator];
                return n ? n.call(t) : (t = h(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);
                function r(n) {
                    e[n] = t[n] && function(e) {
                        return new Promise((function(r, i) {
                            (function(t, e, n, r) {
                                Promise.resolve(r).then((function(e) {
                                    t({
                                        value: e,
                                        done: n
                                    })
                                }), e)
                            })(r, i, (e = t[n](e)).done, e.value)
                        }))
                    }
                }
            }
            function E(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }
            var S = Object.create ? function(t, e) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                })
            } : function(t, e) {
                t.default = e
            };
            function A(t) {
                if (t && t.__esModule)
                    return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && d(e, t, n);
                return S(e, t), e
            }
            function I(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function O(t, e) {
                if (!e.has(t))
                    throw new TypeError("attempted to get private field on non-instance");
                return e.get(t)
            }
            function T(t, e, n) {
                if (!e.has(t))
                    throw new TypeError("attempted to set private field on non-instance");
                return e.set(t, n), n
            }
        }
    },
    o = {};
function s(t) {
    if (o[t])
        return o[t].exports;
    var e = o[t] = {
        id: t,
        loaded: !1,
        exports: {}
    };
    return i[t].call(e.exports, e, e.exports, s), e.loaded = !0, e.exports
}
s.m = i,
s.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return s.d(e, {
        a: e
    }), e
},
s.d = (t, e) => {
    for (var n in e)
        s.o(e, n) && !s.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
},
s.f = {},
s.e = t => Promise.all(Object.keys(s.f).reduce(((e, n) => (s.f[n](t, e), e)), [])),
s.u = t => 1821 === t ? "1821.vendors.chunk.js" : 8056 === t ? "8056.vendors.chunk.js" : 7046 === t ? "7046.vendors.chunk.js" : 3846 === t ? "3846.vendors.chunk.js" : 8489 === t ? "8489.vendors.chunk.js" : 5214 === t ? "5214.vendors.chunk.js" : 2846 === t ? "2846.vendors.chunk.js" : 1105 === t ? "1105.vendors.chunk.js" : {
    420: "gdocsFreeTrialPopup",
    609: "mainCS",
    1090: "iframeHost",
    1530: "unifiedFunnelLoginReminderPopup",
    1599: "notification",
    1778: "chipmunkGButtonCalloutPopup",
    1833: "employeeOnlyDraftAIUpsell",
    2064: "dunningMessagePopup",
    2108: "preSendEmailPremiumPopup",
    2378: "simpleMessagePopup",
    2826: "brandTonesActivationUphook",
    3025: "sentenceLevelBrandTones",
    3041: "anonymousPromotionPopup",
    3516: "oauthExchange",
    3587: "extensionConflictPopup",
    4100: "proofit",
    4104: "bulkAccept",
    4254: "dataControlPopup",
    4560: "anonymousPaywallPopup",
    4628: "gdocsFeedbackUI",
    5457: "premiumChangePlanPopup",
    5547: "smartPhrases",
    6332: "accountMigrationNotificationPopup",
    6371: "businessUphookPopup",
    6413: "autocomplete",
    6450: "unsupportedPopupDialog",
    7026: "onboardingPopup",
    7206: "emogenieReportFeedback",
    7249: "gdocsExpandedViewUnavailable",
    7272: "shortenIt",
    7485: "claimedUserPopup",
    7717: "snippets",
    7725: "toneAI",
    7749: "emogeniePopup",
    8391: "onboardingDialog",
    8600: "loginReminderPopup",
    8721: "assistant",
    8762: "autocorrect",
    9822: "disablePopup",
    9923: "readersAttention"
}[t] + ".common.chunk.js",
s.miniCssF = t => "../css/" + {
    420: "gdocsFreeTrialPopup",
    609: "mainCS",
    1090: "iframeHost",
    1530: "unifiedFunnelLoginReminderPopup",
    1599: "notification",
    1778: "chipmunkGButtonCalloutPopup",
    1833: "employeeOnlyDraftAIUpsell",
    2064: "dunningMessagePopup",
    2108: "preSendEmailPremiumPopup",
    2378: "simpleMessagePopup",
    2826: "brandTonesActivationUphook",
    3041: "anonymousPromotionPopup",
    3587: "extensionConflictPopup",
    4100: "proofit",
    4104: "bulkAccept",
    4254: "dataControlPopup",
    4560: "anonymousPaywallPopup",
    4628: "gdocsFeedbackUI",
    5457: "premiumChangePlanPopup",
    5547: "smartPhrases",
    6332: "accountMigrationNotificationPopup",
    6371: "businessUphookPopup",
    6413: "autocomplete",
    6450: "unsupportedPopupDialog",
    7026: "onboardingPopup",
    7249: "gdocsExpandedViewUnavailable",
    7272: "shortenIt",
    7485: "claimedUserPopup",
    7717: "snippets",
    8391: "onboardingDialog",
    8600: "loginReminderPopup",
    8721: "assistant",
    8762: "autocorrect",
    9822: "disablePopup",
    9923: "readersAttention"
}[t] + ".styles.css",
s.g = function() {
    if ("object" == typeof globalThis)
        return globalThis;
    try {
        return this || new Function("return this")()
    } catch (t) {
        if ("object" == typeof window)
            return window
    }
}(),
s.hmd = t => ((t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
    enumerable: !0,
    set: () => {
        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
    }
}), t),
s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
t = {},
s.l = (e, n, r, i) => {
    if (t[e])
        t[e].push(n);
    else {
        var o,
            s;
        if (void 0 !== r)
            for (var a = document.getElementsByTagName("script"), u = 0; u < a.length; u++) {
                var c = a[u];
                if (c.getAttribute("src") == e) {
                    o = c;
                    break
                }
            }
        if (!o) {
            s = !0;
            var l = e,
                f = (i = r.replace("chunk-", ""), function(n) {
                    var r = {
                            type: n,
                            target: {
                                src: l
                            }
                        },
                        i = t[e];
                    delete t[e],
                    i && i.forEach((t => t(r)))
                });
            return t[e] = [n], import(l).then((() => f("load"))).catch((() => {
                var t = 0,
                    e = setInterval((() => {
                        var n = window.webpackChunk,
                            r = Array.isArray(n) && n.some((t => Array.isArray(t) && Array.isArray(t[0]) && t[0].includes(i)));
                        r || t > 12e4 ? (clearInterval(e), f(r ? "load" : "missing")) : t += 100
                    }), 100)
            }))
        }
        t[e] = [n];
        var d = (n, r) => {
                o.onerror = o.onload = null,
                clearTimeout(p);
                var i = t[e];
                if (delete t[e], o.parentNode && o.parentNode.removeChild(o), i && i.forEach((t => t(r))), n)
                    return n(r)
            },
            p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
        o.onerror = d.bind(null, o.onerror),
        o.onload = d.bind(null, o.onload),
        s && document.head.appendChild(o)
    }
},
s.r = t => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }),
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
},
s.nmd = t => (t.paths = [], t.children || (t.children = []), t),
s.j = 1388,
s.p = "/src/js/",
s.p = (e = s.p, s.p && s.p.includes("://") ? e : safari.extension.baseURI + e.substring(e.lastIndexOf("/") + 1)),
n = t => new Promise(((e, n) => {
    var r = s.miniCssF(t),
        i = s.p + r;
    if (((t, e) => {
        for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
            var i = (s = n[r]).getAttribute("data-href") || s.getAttribute("href");
            if ("stylesheet" === s.rel && (i === t || i === e))
                return s
        }
        var o = document.getElementsByTagName("style");
        for (r = 0; r < o.length; r++) {
            var s;
            if ((i = (s = o[r]).getAttribute("data-href")) === t || i === e)
                return s
        }
    })(r, i))
        return e();
    ((t, e, n, r) => {
        var i = document.createElement("link");
        i.rel = "stylesheet",
        i.type = "text/css",
        i.onerror = i.onload = o => {
            if (i.onerror = i.onload = null, "load" === o.type)
                n();
            else {
                var s = o && ("load" === o.type ? "missing" : o.type),
                    a = o && o.target && o.target.href || e,
                    u = new Error("Loading CSS chunk " + t + " failed.\n(" + a + ")");
                u.code = "CSS_CHUNK_LOAD_FAILED",
                u.type = s,
                u.request = a,
                i.parentNode.removeChild(i),
                r(u)
            }
        },
        i.href = e,
        function(t) {
            t.dispatchEvent(new Event("load"))
        }(i)
    })(t, i, e, n)
})),
r = {
    1388: 0
},
s.f.miniCss = (t, e) => {
    r[t] ? e.push(r[t]) : 0 !== r[t] && {
        420: 1,
        609: 1,
        1090: 1,
        1530: 1,
        1599: 1,
        1778: 1,
        1833: 1,
        2064: 1,
        2108: 1,
        2378: 1,
        2826: 1,
        3041: 1,
        3587: 1,
        4100: 1,
        4104: 1,
        4254: 1,
        4560: 1,
        4628: 1,
        5457: 1,
        5547: 1,
        6332: 1,
        6371: 1,
        6413: 1,
        6450: 1,
        7026: 1,
        7249: 1,
        7272: 1,
        7485: 1,
        7717: 1,
        8391: 1,
        8600: 1,
        8721: 1,
        8762: 1,
        9822: 1,
        9923: 1
    }[t] && e.push(r[t] = n(t).then((() => {
        r[t] = 0
    }), (e => {
        throw delete r[t], e
    })))
},
(() => {
    var t = {
        1388: 0
    };
    s.f.j = (e, n) => {
        var r = s.o(t, e) ? t[e] : void 0;
        if (0 !== r)
            if (r)
                n.push(r[2]);
            else {
                var i = new Promise(((n, i) => {
                    r = t[e] = [n, i]
                }));
                n.push(r[2] = i);
                var o = s.p + s.u(e),
                    a = new Error;
                s.l(o, (n => {
                    if (s.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                        var i = n && ("load" === n.type ? "missing" : n.type),
                            o = n && n.target && n.target.src;
                        a.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")",
                        a.name = "ChunkLoadError",
                        a.type = i,
                        a.request = o,
                        r[1](a)
                    }
                }), "chunk-" + e, e)
            }
    };
    var e = (e, n) => {
            for (var r, i, [o, a, u] = n, c = 0, l = []; c < o.length; c++)
                i = o[c],
                s.o(t, i) && t[i] && l.push(t[i][0]),
                t[i] = 0;
            for (r in a)
                s.o(a, r) && (s.m[r] = a[r]);
            for (u && u(s), e && e(n); l.length;)
                l.shift()()
        },
        n = self.webpackChunk = self.webpackChunk || [];
    n.forEach(e.bind(null, 0)),
    n.push = e.bind(null, n.push.bind(n))
})(),
(() => {
    s(51281);
    var t = s(32138),
        e = s(7837),
        n = s(96702);
    class r {
        constructor(t)
        {
            this._logger = t,
            this._listeners = {},
            this._queue = {}
        }
        fire(t, e, n)
        {
            const r = this._listeners[t] || [];
            r.length ? r.forEach((t => t(e, n))) : (this._queue[t] = this._queue[t] || [], this._queue[t].push({
                data: e,
                sender: n
            }))
        }
        unlisten(t, e)
        {
            const n = this._listeners[t] || [],
                r = n.indexOf(e);
            -1 !== r && (1 === n.length ? delete this._listeners[t] : n.splice(r, 1))
        }
        listenOnce(t, e)
        {
            const n = (r, i) => {
                this.unlisten(t, n),
                e(r, i)
            };
            this.listen(t, n)
        }
        listen(t, e)
        {
            this._listeners[t] = this._listeners[t] || [],
            -1 === this._listeners[t].indexOf(e) && this._listeners[t].push(e);
            const n = this._queue[t] || [];
            for (const t of n)
                try {
                    e(t.data, t.sender)
                } catch (t) {
                    this._logger.error("Exception during proccesing queued events", t)
                }
            delete this._queue[t]
        }
    }
    var i = s(37896),
        o = s(74850);
    const a = o.Y.create("extension-api.message.safari-content");
    class u {
        constructor(t=!0)
        {
            this.kind = "content-script-message-api",
            this._messageHelper = new r(a),
            this._isStarted = !1,
            self.top !== self && t || (0, e.Sx)((t => {
                this._messageHelper.fire(t.event, t.data)
            }))
        }
        start()
        {
            if (this._isStarted)
                throw new Error("SafariContentScriptMessageImpl is already started");
            this._isStarted = !0;
            const t = () => {
                this.broadcastBackground("tab-connected")
            };
            document.hidden ? c(document, "visibilitychange", t) : "loading" === document.readyState ? c(document, "DOMContentLoaded", t) : t()
        }
        listen(t, n)
        {
            this._messageHelper.listen("broadcast", (r => {
                null !== t && t !== r.type || n(r.content, (t => {
                    r.id && (0, e.CN)(r.id, t)
                }))
            }))
        }
        broadcastBackground(t, e, n)
        {
            this._sendToBackground("broadcast-background", t, e, n)
        }
        toFocused(t, e)
        {
            return n.Ok.create((n => {
                this._sendToBackground("toFocussed", t, e),
                n()
            }))
        }
        _sendToBackground(t, n, r, o)
        {
            const s = (0, i.M8)();
            o && this._messageHelper.listenOnce(s, ((t, e) => o(t))),
            (0, e.CN)(t, {
                type: n,
                content: r,
                id: s
            })
        }
    }
    function c(t, e, n) {
        t.addEventListener(e, (function r() {
            t.removeEventListener(e, r),
            n()
        }))
    }
    var l = s(32952);
    class f {
        constructor(t)
        {
            this._message = t,
            this.changes = new l.xQ,
            t.listen("pref-change", (t => {
                this.changes.next(t)
            }))
        }
        get(t)
        {
            return n.Ok.create((e => {
                this._message.broadcastBackground("pref-get", t, e)
            }))
        }
        set(t)
        {
            return n.Ok.create((e => {
                this._message.broadcastBackground("pref-set", t, e)
            }))
        }
        getAll()
        {
            return n.Ok.create((t => {
                this._message.broadcastBackground("pref-get-all", void 0, ((...e) => {
                    t(e[0])
                }))
            }))
        }
        remove(t)
        {
            return n.Ok.create((e => {
                this._message.broadcastBackground("pref-remove", t, e)
            }))
        }
        removeAll()
        {
            return n.Ok.create((t => {
                this._message.broadcastBackground("pref-remove-all", t)
            }))
        }
    }
    const d = "https://www.grammarly.com",
        p = "/signin",
        h = "/api/apple";
    var b = s(64408),
        g = s(49708),
        v = s(77843),
        y = s(2844),
        m = s(85985),
        _ = s(50628),
        w = s(17343),
        x = s(93508),
        E = s(28043),
        S = s(77176);
    var A = s(77256),
        I = s(22679),
        O = s(89407),
        T = s(56185),
        k = s(99446),
        C = s(6787),
        R = s(66319),
        P = s(52961),
        j = s(97049),
        N = s(57271),
        D = s(36398),
        U = s(12126),
        L = s(78674),
        F = s(66310),
        B = s(4120),
        M = s(90605),
        V = s(70205),
        q = s(90361),
        H = s(5817),
        G = s(58028);
    const $ = (t, e) => {
        const n = {
            getAll: async () => await r.getAll(),
            get: async t => await r.get(t),
            view: () => {
                throw new Error("not_implemented")
            },
            patch: async t => await r.set(t),
            changes: (r = t.browserApi.preferences).changes
        };
        var r;
        const i = (0, y.aj)((0, U.D)(n.changes).pipe((0, x.O)(null), (0, L.b)(200), (0, F.w)((() => n.getAll()))), (0, U.D)((0, q.XD)(5, H.Xd(2), (() => t.bgRpc.api.getPageConfig(e, self.location.href))).catch((t => null))).pipe((0, x.O)(null)), ((t, n) => {
            var r,
                i,
                o,
                s,
                a,
                u;
            const c = null !== (i = null === (r = t.extensionSettings) || void 0 === r ? void 0 : r[e]) && void 0 !== i ? i : {},
                l = (null === (o = null == c ? void 0 : c.enabled) || void 0 === o || o) && (null === (s = null == n ? void 0 : n.enabled) || void 0 === s || s);
            return {
                user: null !== (a = t.user) && void 0 !== a ? a : B.n5.defaultUser,
                settings: t.extensionSettings,
                dynamicConfig: (0, G.RH)(t.dynamicConfig ? {
                    llamaIntegration: (0, M.Jx)(V.Vc, t.dynamicConfig[V.EY.llamaIntegration])
                } : {}, null !== (u = t.dynamicConfigOverrideKey) && void 0 !== u ? u : {}),
                enabled: l
            }
        }));
        return {
            storeLite: n,
            viewStoreLite: i
        }
    };
    var W,
        K,
        z,
        Y = s(57238),
        J = s(78323);
    class X {
        constructor(t, e)
        {
            this._csShareStorage = t,
            this._loadContentScript = e,
            this._pageEnable = !0,
            this._enabledDefs = !1,
            this._isAnonymous = !0,
            this._wasLoaded = !1,
            this._isDesktopIntegrationEnable = !1,
            this._mutations = R.x.createFlattenHot(self.document, {
                childList: !0,
                subtree: !0
            }),
            this._textFieldsObservable = T.S.createFocusObservable(self.document, this._mutations),
            this._subs = [this._textFieldsObservable.subscribe((t => {
                const e = t.owner.frame || t.element,
                    n = O.T.get(e);
                this._pageEnable && (n.generic || n.specific) && this.load()
            })), X.clickObserver.subscribe((t => {
                2 === t.detail && this._enabledDefs && this._pageEnable && !this._isAnonymous && K.isValid() && (this._csShareStorage.set("extensionDictionaryEvent", t), this._subs.push(K.animation()), this.load())
            }))]
        }
        load()
        {
            this._wasLoaded && !this._isDesktopIntegrationEnable || (this._wasLoaded = !0, z.callExecuteContentScript(), this.dispose(), this._loadContentScript())
        }
        dispose()
        {
            this._subs.forEach((t => t.unsubscribe()))
        }
        updateState(t, e, n, r)
        {
            this._isDesktopIntegrationEnable = r,
            !this._pageEnable && e && this.load(),
            this._isAnonymous = t,
            this._pageEnable = e,
            this._enabledDefs = n,
            (0, J.ix)(this._pageEnable ? null : "forever")
        }
    }
    !function(t) {
        t.clickObserver = (0, g.R)(self.document, "click", !0),
        t.start = async function(e, n=!0, r) {
            z.checkScriptInitStart();
            const i = (0, N.ge)(),
                o = A.X.init(Object.assign(Object.assign({}, e), {
                    skipInitExtensionApi: n
                })),
                s = new t(o.csShareStorage, null != r ? r : o.bgRpc.api.loadContentScript),
                a = C.x.init(),
                u = W.init(o.config, i),
                {viewStoreLite: c} = $(o, i),
                l = c.subscribe((t => {
                    var e,
                        n,
                        r,
                        o;
                    const u = null === (e = t.settings) || void 0 === e ? void 0 : e.common;
                    s.updateState(null === (r = null === (n = t.user) || void 0 === n ? void 0 : n.anonymous) || void 0 === r || r, t.enabled, null !== (o = null == u ? void 0 : u.enabledDefs) && void 0 !== o && o, k.q.isIntegrationEnable(u, i, t.dynamicConfig)),
                    a.updateState(i, t.dynamicConfig, t.enabled, u)
                })),
                f = [s, u, a];
            (0, b.one)("contentScript-disconnected", (() => {
                l.unsubscribe(),
                o.csShareStorage.clean(),
                f.forEach((t => t && t.dispose()))
            })),
            (0, b.one)("disable-on-tab", (() => {
                a.setUserDisabled()
            })),
            z.checkScriptInitEnd(o.bgRpc),
            (t => {
                if (self.location.href.includes("grammarly.com/extension-success")) {
                    const e = document.getElementById("click-to-run");
                    e && (e.onclick = () => {
                        var e,
                            n;
                        confirm("Always allow Grammarly to run on every website") ? (t.api.enableClickToRunOnAllWebsites(), null === (e = document.getElementById("click-to-run-success")) || void 0 === e || e.click()) : null === (n = document.getElementById("click-to-run-fail")) || void 0 === n || n.click()
                    })
                }
            })(o.bgRpc)
        }
    }(X || (X = {})),
    function(t) {
        t.init = function(t, e) {
            const n = [];
            return function(t) {
                (0, v.F)(10).pipe((0, m.h)((() => !!document.body)), (0, _.P)()).subscribe((() => {
                    document.body.dataset.newGrCSCheckLoaded = t.buildInfo.version,
                    (0, J.vG)()
                }))
            }(t), self.location.protocol === t.appConfig.url.grammarlyProtocol && e.match(`^([a-z\\-0-9]+\\.)*${t.appConfig.url.grammarlyDomain}$`) && n.push((0, j.G)()), {
                dispose: () => {
                    n.forEach((t => t.dispose()))
                }
            }
        }
    }(W || (W = {})),
    function(t) {
        const e = "important";
        function n(t) {
            return t + "px"
        }
        t.isValid = function() {
            const t = self.document.getSelection();
            return !(!t || t.toString().match(/[0-9_±!@#$%^&*:"|<>?~().,:}{’='-/ /]/)) && (0, D.F)(t, self.document)
        },
        t.animation = function() {
            const t = document.createElement("div"),
                r = t.attachShadow({
                    mode: "open"
                }),
                i = document.createElement("style");
            i.innerHTML = Y.__css,
            r.appendChild(i);
            const o = self.document.getSelection().getRangeAt(0).getBoundingClientRect(),
                s = document.createElement("div");
            s.style.setProperty("top", n(o.top), e),
            s.style.setProperty("left", n(o.left), e),
            s.style.setProperty("height", n(o.height), e),
            s.style.setProperty("max-width", n(o.width), e),
            s.style.setProperty("z-index", I.U_.toString(), e),
            s.classList.add(Y.animatedUnderline, Y.checkAnimatedUnderline),
            r.appendChild(s),
            document.body.appendChild(t);
            const a = (0, v.F)(10),
                u = (0, y.aj)(X.clickObserver.pipe((0, _.P)(), (0, w.h)(!1), (0, x.O)(!0), (0, E.x)()), a.pipe((0, S.U)((() => {
                    const t = "." + P.completeAnimation;
                    if (document.querySelector(t))
                        return !0;
                    const e = Array.from(document.querySelectorAll("grammarly-extension"));
                    for (const n of e)
                        if (n.shadowRoot && n.shadowRoot.querySelector(t))
                            return !0;
                    return !1
                })), (0, x.O)(!1), (0, E.x)())).pipe((0, m.h)((([t, e]) => !t || e)), (0, E.x)()).subscribe(c);
            return {
                unsubscribe: c
            };
            function c() {
                u.unsubscribe(),
                t.remove()
            }
        }
    }(K || (K = {})),
    function(t) {
        const e = Date.now(),
            n = t => self.performance.mark("@grammarly-extension:" + t);
        t.callExecuteContentScript = () => n("callExecuteContentScript"),
        t.checkScriptInitEnd = t => {
            const r = Math.random() < .01;
            if (n("checkScriptInitEnd"), t.api.feMetricsLogRate("checkScriptInitialized"), r) {
                const t = Date.now();
                (0, b.emitBackground)("tracking-call", {
                    msg: "tracking/RPC",
                    data: ["sendFelogEvent", {
                        ex_csInitPerf: {
                            domain: self.location.host,
                            initTime: t - e,
                            pageLoadTime: t - self.performance.timing.responseEnd
                        },
                        hideUserInfo: !0,
                        level: "INFO",
                        logger: "checkScript.initialized"
                    }]
                })
            }
        },
        t.checkScriptInitStart = () => n("checkScriptInitStart")
    }(z || (z = {}));
    const Z = {
        browser: "safari",
        extensionType: "safariAppExtension",
        browserApi: new class {
            constructor(n=!0)
            {
                this._dontInitInIFrames = n,
                this.message = new u(this._dontInitInIFrames),
                this.baseUri = safari.extension.baseURI,
                this.getUrl = t => safari.extension.baseURI + t.substring(t.lastIndexOf("/") + 1),
                this.openSubscriptionDialog = n => {
                    n.isAnonymousUser ? (0, e.IG)() : (0, e.NX)(n.forceUtmCampaign ? (0, t.bO)(n.forceUtmCampaign) : "unknownPlacement")
                },
                this.preferences = new f(this.message),
                this.i18n = {
                    detectLanguage: t => new Promise((e => this.message.broadcastBackground("detect-language", {
                        text: t
                    }, (t => e({
                        isReliable: !!t,
                        languages: t ? [{
                            language: t.toLowerCase(),
                            percentage: 100
                        }] : []
                    }))))),
                    getUILanguage: () => navigator.language.toLowerCase(),
                    getAcceptLanguages: () => Promise.resolve([this.i18n.getUILanguage()])
                }
            }
            beginOAuth()
            {
                (0, e.IG)()
            }
            redirectClaimedUser()
            {
                (0, e.Yf)()
            }
        }
        (!1)
    };
    X.start(Z, !1, (async () => {
        const t = o.Y.create("safariApp.dynamicInit");
        try {
            const {defaultGetPageIntegrationRules: e, start: n} = await Promise.all([s.e(1821), s.e(8056), s.e(609)]).then(s.bind(s, 30812));
            n(Z, e),
            t.info("load main cs success")
        } catch (e) {
            t.error("load main cs error", e)
        }
    })),
    (document.location.origin === d && document.location.pathname === p || document.location.origin === d && document.location.pathname === h) && s.e(3516).then(s.bind(s, 3432)).then((({initOAuthExchange: t}) => t()))
})();

