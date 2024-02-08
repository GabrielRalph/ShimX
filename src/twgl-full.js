let r = (function() {
    return function(e) {
        var r = {};
        function t(n) {
            if (r[n])
                return r[n].exports;
            var o = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
        }
        return t.m = e,
        t.c = r,
        t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
            })
        }
        ,
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        t.t = function(e, r) {
            if (1 & r && (e = t(e)),
            8 & r)
                return e;
            if (4 & r && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (t.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }),
            2 & r && "string" != typeof e)
                for (var o in e)
                    t.d(n, o, function(r) {
                        return e[r]
                    }
                    .bind(null, o));
            return n
        }
        ,
        t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(r, "a", r),
            r
        }
        ,
        t.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }
        ,
        t.p = "",
        t(t.s = 8)
    }([function(e, r, t) {
        "use strict";
        r.__esModule = !0,
        r.copyExistingProperties = function(e, r) {
            Object.keys(r).forEach((function(t) {
                r.hasOwnProperty(t) && e.hasOwnProperty(t) && (r[t] = e[t])
            }
            ))
        }
        ,
        r.copyNamedProperties = function(e, r, t) {
            e.forEach((function(e) {
                var n = r[e];
                void 0 !== n && (t[e] = n)
            }
            ))
        }
        ,
        r.error = function() {
            var e;
            (e = console).error.apply(e, arguments)
        }
        ,
        r.warn = function() {
            var e;
            (e = console).warn.apply(e, arguments)
        }
        ,
        r.isBuffer = function(e, r) {
            return "undefined" != typeof WebGLBuffer && r instanceof WebGLBuffer
        }
        ,
        r.isRenderbuffer = function(e, r) {
            return "undefined" != typeof WebGLRenderbuffer && r instanceof WebGLRenderbuffer
        }
        ,
        r.isShader = function(e, r) {
            return "undefined" != typeof WebGLShader && r instanceof WebGLShader
        }
        ,
        r.isTexture = function(e, r) {
            return "undefined" != typeof WebGLTexture && r instanceof WebGLTexture
        }
        ,
        r.isSampler = function(e, r) {
            return "undefined" != typeof WebGLSampler && r instanceof WebGLSampler
        }
    }
    , function(e, r, t) {
        "use strict";
        r.__esModule = !0,
        r.getGLTypeForTypedArray = function(e) {
            if (e instanceof Int8Array)
                return n;
            if (e instanceof Uint8Array)
                return o;
            if (e instanceof Uint8ClampedArray)
                return o;
            if (e instanceof Int16Array)
                return u;
            if (e instanceof Uint16Array)
                return i;
            if (e instanceof Int32Array)
                return a;
            if (e instanceof Uint32Array)
                return f;
            if (e instanceof Float32Array)
                return c;
            throw new Error("unsupported typed array type")
        }
        ,
        r.getGLTypeForTypedArrayType = function(e) {
            if (e === Int8Array)
                return n;
            if (e === Uint8Array)
                return o;
            if (e === Uint8ClampedArray)
                return o;
            if (e === Int16Array)
                return u;
            if (e === Uint16Array)
                return i;
            if (e === Int32Array)
                return a;
            if (e === Uint32Array)
                return f;
            if (e === Float32Array)
                return c;
            throw new Error("unsupported typed array type")
        }
        ,
        r.getTypedArrayTypeForGLType = function(e) {
            var r = l[e];
            if (!r)
                throw new Error("unknown gl type");
            return r
        }
        ,
        r.isArrayBuffer = void 0;
        var n = 5120
          , o = 5121
          , u = 5122
          , i = 5123
          , a = 5124
          , f = 5125
          , c = 5126
          , l = {}
          , s = l;
        s[n] = Int8Array,
        s[5121] = Uint8Array,
        s[5122] = Int16Array,
        s[5123] = Uint16Array,
        s[a] = Int32Array,
        s[5125] = Uint32Array,
        s[5126] = Float32Array,
        s[32819] = Uint16Array,
        s[32820] = Uint16Array,
        s[33635] = Uint16Array,
        s[5131] = Uint16Array,
        s[33640] = Uint32Array,
        s[35899] = Uint32Array,
        s[35902] = Uint32Array,
        s[36269] = Uint32Array,
        s[34042] = Uint32Array;
        var v = "undefined" != typeof SharedArrayBuffer ? function(e) {
            return e && e.buffer && (e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer)
        }
        : function(e) {
            return e && e.buffer && e.buffer instanceof ArrayBuffer
        }
        ;
        r.isArrayBuffer = v
    }
    , function(e, r, t) {
        "use strict";
        r.__esModule = !0,
        r.add = function(e, r, t) {
            return (t = t || new n(3))[0] = e[0] + r[0],
            t[1] = e[1] + r[1],
            t[2] = e[2] + r[2],
            t
        }
        ,
        r.copy = function(e, r) {
            return (r = r || new n(3))[0] = e[0],
            r[1] = e[1],
            r[2] = e[2],
            r
        }
        ,
        r.create = function(e, r, t) {
            var o = new n(3);
            e && (o[0] = e);
            r && (o[1] = r);
            t && (o[2] = t);
            return o
        }
        ,
        r.cross = function(e, r, t) {
            t = t || new n(3);
            var o = e[2] * r[0] - e[0] * r[2]
              , u = e[0] * r[1] - e[1] * r[0];
            return t[0] = e[1] * r[2] - e[2] * r[1],
            t[1] = o,
            t[2] = u,
            t
        }
        ,
        r.distance = function(e, r) {
            var t = e[0] - r[0]
              , n = e[1] - r[1]
              , o = e[2] - r[2];
            return Math.sqrt(t * t + n * n + o * o)
        }
        ,
        r.distanceSq = function(e, r) {
            var t = e[0] - r[0]
              , n = e[1] - r[1]
              , o = e[2] - r[2];
            return t * t + n * n + o * o
        }
        ,
        r.divide = function(e, r, t) {
            return (t = t || new n(3))[0] = e[0] / r[0],
            t[1] = e[1] / r[1],
            t[2] = e[2] / r[2],
            t
        }
        ,
        r.divScalar = function(e, r, t) {
            return (t = t || new n(3))[0] = e[0] / r,
            t[1] = e[1] / r,
            t[2] = e[2] / r,
            t
        }
        ,
        r.dot = function(e, r) {
            return e[0] * r[0] + e[1] * r[1] + e[2] * r[2]
        }
        ,
        r.lerp = function(e, r, t, o) {
            return (o = o || new n(3))[0] = e[0] + t * (r[0] - e[0]),
            o[1] = e[1] + t * (r[1] - e[1]),
            o[2] = e[2] + t * (r[2] - e[2]),
            o
        }
        ,
        r.lerpV = function(e, r, t, o) {
            return (o = o || new n(3))[0] = e[0] + t[0] * (r[0] - e[0]),
            o[1] = e[1] + t[1] * (r[1] - e[1]),
            o[2] = e[2] + t[2] * (r[2] - e[2]),
            o
        }
        ,
        r.length = function(e) {
            return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
        }
        ,
        r.lengthSq = function(e) {
            return e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
        }
        ,
        r.max = function(e, r, t) {
            return (t = t || new n(3))[0] = Math.max(e[0], r[0]),
            t[1] = Math.max(e[1], r[1]),
            t[2] = Math.max(e[2], r[2]),
            t
        }
        ,
        r.min = function(e, r, t) {
            return (t = t || new n(3))[0] = Math.min(e[0], r[0]),
            t[1] = Math.min(e[1], r[1]),
            t[2] = Math.min(e[2], r[2]),
            t
        }
        ,
        r.mulScalar = function(e, r, t) {
            return (t = t || new n(3))[0] = e[0] * r,
            t[1] = e[1] * r,
            t[2] = e[2] * r,
            t
        }
        ,
        r.multiply = function(e, r, t) {
            return (t = t || new n(3))[0] = e[0] * r[0],
            t[1] = e[1] * r[1],
            t[2] = e[2] * r[2],
            t
        }
        ,
        r.negate = function(e, r) {
            return (r = r || new n(3))[0] = -e[0],
            r[1] = -e[1],
            r[2] = -e[2],
            r
        }
        ,
        r.normalize = function(e, r) {
            r = r || new n(3);
            var t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
              , o = Math.sqrt(t);
            o > 1e-5 ? (r[0] = e[0] / o,
            r[1] = e[1] / o,
            r[2] = e[2] / o) : (r[0] = 0,
            r[1] = 0,
            r[2] = 0);
            return r
        }
        ,
        r.setDefaultType = function(e) {
            var r = n;
            return n = e,
            r
        }
        ,
        r.subtract = function(e, r, t) {
            return (t = t || new n(3))[0] = e[0] - r[0],
            t[1] = e[1] - r[1],
            t[2] = e[2] - r[2],
            t
        }
        ;
        var n = Float32Array
    }
    , function(e, r, t) {
        "use strict";
        r.__esModule = !0,
        r.isWebGL1 = function(e) {
            return !e.texStorage2D
        }
        ,
        r.isWebGL2 = function(e) {
            return !!e.texStorage2D
        }
        ,
        r.glEnumToString = void 0;
        var n, o, u = (n = {},
        o = {},
        function(e, r) {
            return function(e) {
                var r = e.constructor.name;
                if (!n[r]) {
                    for (var t in e)
                        if ("number" == typeof e[t]) {
                            var u = o[e[t]];
                            o[e[t]] = u ? "".concat(u, " | ").concat(t) : t
                        }
                    n[r] = !0
                }
            }(e),
            o[r] || ("number" == typeof r ? "0x".concat(r.toString(16)) : r)
        }
        );
        r.glEnumToString = u
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0,
        r.createAttributeSetters = ye,
        r.createProgram = K,
        r.createProgramAsync = function(e, r) {
            for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++)
                n[o - 2] = arguments[o];
            return new Promise((function(t, o) {
                var u = N.apply(void 0, n);
                u.callback = function(e, r) {
                    e ? o(e) : t(r)
                }
                ,
                K(e, r, u)
            }
            ))
        }
        ,
        r.createProgramFromScripts = function(e, r, t, n, o) {
            for (var u = N(t, n, o), i = [], a = 0; a < r.length; ++a) {
                var f = J(e, r[a], e[H[a]], u);
                if (!f)
                    return null;
                i.push(f)
            }
            return K(e, i, u)
        }
        ,
        r.createProgramFromSources = Q,
        r.createProgramInfo = de,
        r.createProgramInfoAsync = function(e, r) {
            for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++)
                n[o - 2] = arguments[o];
            return new Promise((function(t, o) {
                var u = N.apply(void 0, n);
                u.callback = function(e, r) {
                    e ? o(e) : t(r)
                }
                ,
                de(e, r, u)
            }
            ))
        }
        ,
        r.createProgramInfoFromProgram = me,
        r.createUniformSetters = ne,
        r.createUniformBlockSpecFromProgram = ie,
        r.createUniformBlockInfoFromProgram = fe,
        r.createUniformBlockInfo = function(e, r, t) {
            return fe(e, r.program, r.uniformBlockSpec, t)
        }
        ,
        r.createTransformFeedback = function(e, r, t) {
            var n = e.createTransformFeedback();
            return e.bindTransformFeedback(36386, n),
            e.useProgram(r.program),
            ue(e, r, t),
            e.bindTransformFeedback(36386, null),
            n
        }
        ,
        r.createTransformFeedbackInfo = oe,
        r.bindTransformFeedbackInfo = ue,
        r.setAttributes = be,
        r.setBuffersAndAttributes = function(e, r, t) {
            t.vertexArrayObject ? e.bindVertexArray(t.vertexArrayObject) : (be(r.attribSetters || r, t.attribs),
            t.indices && e.bindBuffer(34963, t.indices))
        }
        ,
        r.setUniforms = se,
        r.setUniformBlock = function(e, r, t) {
            ce(e, r, t) && e.bufferData(d, t.array, 35048)
        }
        ,
        r.setBlockUniforms = function(e, r) {
            var t = e.setters;
            for (var n in r) {
                var o = t[n];
                if (o) {
                    var u = r[n];
                    o(u)
                }
            }
        }
        ,
        r.bindUniformBlock = ce,
        r.setUniformsAndBindTextures = void 0;
        var o = a(t(3))
          , u = a(t(0));
        function i() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }
            ,
            e
        }
        function a(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = i();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = e[u]
                }
            return t.default = e,
            r && r.set(e, t),
            t
        }
        function f(e, r, t, n, o, u, i) {
            try {
                var a = e[u](i)
                  , f = a.value
            } catch (e) {
                return void t(e)
            }
            a.done ? r(f) : Promise.resolve(f).then(n, o)
        }
        function c(e) {
            return function() {
                var r = this
                  , t = arguments;
                return new Promise((function(n, o) {
                    var u = e.apply(r, t);
                    function i(e) {
                        f(u, n, o, i, a, "next", e)
                    }
                    function a(e) {
                        f(u, n, o, i, a, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        function l(e) {
            return function(e) {
                if (Array.isArray(e))
                    return s(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, r) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return s(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return s(e, r)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
                n[t] = e[t];
            return n
        }
        var v = u.error
          , y = u.warn;
        function b(e) {
            return "undefined" != typeof document && document.getElementById ? document.getElementById(e) : null
        }
        var m = 33984
          , p = 34962
          , d = 35345
          , w = 5126
          , x = 5124
          , h = 5125
          , F = 3553
          , E = 34067
          , A = 32879
          , j = 35866
          , O = {};
        function _(e, r) {
            return O[r].bindPoint
        }
        function S(e, r) {
            return function(t) {
                e.uniform1i(r, t)
            }
        }
        function M(e, r) {
            return function(t) {
                e.uniform1iv(r, t)
            }
        }
        function R(e, r) {
            return function(t) {
                e.uniform2iv(r, t)
            }
        }
        function P(e, r) {
            return function(t) {
                e.uniform3iv(r, t)
            }
        }
        function g(e, r) {
            return function(t) {
                e.uniform4iv(r, t)
            }
        }
        function T(e, r, t, n) {
            var i = _(0, r);
            return o.isWebGL2(e) ? function(r) {
                var o, a;
                u.isTexture(e, r) ? (o = r,
                a = null) : (o = r.texture,
                a = r.sampler),
                e.uniform1i(n, t),
                e.activeTexture(m + t),
                e.bindTexture(i, o),
                e.bindSampler(t, a)
            }
            : function(r) {
                e.uniform1i(n, t),
                e.activeTexture(m + t),
                e.bindTexture(i, r)
            }
        }
        function z(e, r, t, n, i) {
            for (var a = _(0, r), f = new Int32Array(i), c = 0; c < i; ++c)
                f[c] = t + c;
            return o.isWebGL2(e) ? function(r) {
                e.uniform1iv(n, f),
                r.forEach((function(r, n) {
                    var o, i;
                    e.activeTexture(m + f[n]),
                    u.isTexture(e, r) ? (o = r,
                    i = null) : (o = r.texture,
                    i = r.sampler),
                    e.bindSampler(t, i),
                    e.bindTexture(a, o)
                }
                ))
            }
            : function(r) {
                e.uniform1iv(n, f),
                r.forEach((function(r, t) {
                    e.activeTexture(m + f[t]),
                    e.bindTexture(a, r)
                }
                ))
            }
        }
        function U(e, r) {
            return function(t) {
                if (t.value)
                    switch (e.disableVertexAttribArray(r),
                    t.value.length) {
                    case 4:
                        e.vertexAttrib4fv(r, t.value);
                        break;
                    case 3:
                        e.vertexAttrib3fv(r, t.value);
                        break;
                    case 2:
                        e.vertexAttrib2fv(r, t.value);
                        break;
                    case 1:
                        e.vertexAttrib1fv(r, t.value);
                        break;
                    default:
                        throw new Error("the length of a float constant value must be between 1 and 4!")
                    }
                else
                    e.bindBuffer(p, t.buffer),
                    e.enableVertexAttribArray(r),
                    e.vertexAttribPointer(r, t.numComponents || t.size, t.type || w, t.normalize || !1, t.stride || 0, t.offset || 0),
                    void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor)
            }
        }
        function C(e, r) {
            return function(t) {
                if (t.value) {
                    if (e.disableVertexAttribArray(r),
                    4 !== t.value.length)
                        throw new Error("The length of an integer constant value must be 4!");
                    e.vertexAttrib4iv(r, t.value)
                } else
                    e.bindBuffer(p, t.buffer),
                    e.enableVertexAttribArray(r),
                    e.vertexAttribIPointer(r, t.numComponents || t.size, t.type || x, t.stride || 0, t.offset || 0),
                    void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor)
            }
        }
        function k(e, r) {
            return function(t) {
                if (t.value) {
                    if (e.disableVertexAttribArray(r),
                    4 !== t.value.length)
                        throw new Error("The length of an unsigned integer constant value must be 4!");
                    e.vertexAttrib4uiv(r, t.value)
                } else
                    e.bindBuffer(p, t.buffer),
                    e.enableVertexAttribArray(r),
                    e.vertexAttribIPointer(r, t.numComponents || t.size, t.type || h, t.stride || 0, t.offset || 0),
                    void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor)
            }
        }
        function W(e, r, t) {
            var n = t.size
              , o = t.count;
            return function(t) {
                e.bindBuffer(p, t.buffer);
                for (var u = t.size || t.numComponents || n, i = u / o, a = t.type || w, f = O[a].size * u, c = t.normalize || !1, l = t.offset || 0, s = f / o, v = 0; v < o; ++v)
                    e.enableVertexAttribArray(r + v),
                    e.vertexAttribPointer(r + v, i, a, c, f, l + s * v),
                    void 0 !== t.divisor && e.vertexAttribDivisor(r + v, t.divisor)
            }
        }
        O[5126] = {
            Type: Float32Array,
            size: 4,
            setter: function(e, r) {
                return function(t) {
                    e.uniform1f(r, t)
                }
            },
            arraySetter: function(e, r) {
                return function(t) {
                    e.uniform1fv(r, t)
                }
            }
        },
        O[35664] = {
            Type: Float32Array,
            size: 8,
            setter: function(e, r) {
                return function(t) {
                    e.uniform2fv(r, t)
                }
            },
            cols: 2
        },
        O[35665] = {
            Type: Float32Array,
            size: 12,
            setter: function(e, r) {
                return function(t) {
                    e.uniform3fv(r, t)
                }
            },
            cols: 3
        },
        O[35666] = {
            Type: Float32Array,
            size: 16,
            setter: function(e, r) {
                return function(t) {
                    e.uniform4fv(r, t)
                }
            },
            cols: 4
        },
        O[x] = {
            Type: Int32Array,
            size: 4,
            setter: S,
            arraySetter: M
        },
        O[35667] = {
            Type: Int32Array,
            size: 8,
            setter: R,
            cols: 2
        },
        O[35668] = {
            Type: Int32Array,
            size: 12,
            setter: P,
            cols: 3
        },
        O[35669] = {
            Type: Int32Array,
            size: 16,
            setter: g,
            cols: 4
        },
        O[5125] = {
            Type: Uint32Array,
            size: 4,
            setter: function(e, r) {
                return function(t) {
                    e.uniform1ui(r, t)
                }
            },
            arraySetter: function(e, r) {
                return function(t) {
                    e.uniform1uiv(r, t)
                }
            }
        },
        O[36294] = {
            Type: Uint32Array,
            size: 8,
            setter: function(e, r) {
                return function(t) {
                    e.uniform2uiv(r, t)
                }
            },
            cols: 2
        },
        O[36295] = {
            Type: Uint32Array,
            size: 12,
            setter: function(e, r) {
                return function(t) {
                    e.uniform3uiv(r, t)
                }
            },
            cols: 3
        },
        O[36296] = {
            Type: Uint32Array,
            size: 16,
            setter: function(e, r) {
                return function(t) {
                    e.uniform4uiv(r, t)
                }
            },
            cols: 4
        },
        O[35670] = {
            Type: Uint32Array,
            size: 4,
            setter: S,
            arraySetter: M
        },
        O[35671] = {
            Type: Uint32Array,
            size: 8,
            setter: R,
            cols: 2
        },
        O[35672] = {
            Type: Uint32Array,
            size: 12,
            setter: P,
            cols: 3
        },
        O[35673] = {
            Type: Uint32Array,
            size: 16,
            setter: g,
            cols: 4
        },
        O[35674] = {
            Type: Float32Array,
            size: 32,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix2fv(r, !1, t)
                }
            },
            rows: 2,
            cols: 2
        },
        O[35675] = {
            Type: Float32Array,
            size: 48,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix3fv(r, !1, t)
                }
            },
            rows: 3,
            cols: 3
        },
        O[35676] = {
            Type: Float32Array,
            size: 64,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix4fv(r, !1, t)
                }
            },
            rows: 4,
            cols: 4
        },
        O[35685] = {
            Type: Float32Array,
            size: 32,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix2x3fv(r, !1, t)
                }
            },
            rows: 2,
            cols: 3
        },
        O[35686] = {
            Type: Float32Array,
            size: 32,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix2x4fv(r, !1, t)
                }
            },
            rows: 2,
            cols: 4
        },
        O[35687] = {
            Type: Float32Array,
            size: 48,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix3x2fv(r, !1, t)
                }
            },
            rows: 3,
            cols: 2
        },
        O[35688] = {
            Type: Float32Array,
            size: 48,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix3x4fv(r, !1, t)
                }
            },
            rows: 3,
            cols: 4
        },
        O[35689] = {
            Type: Float32Array,
            size: 64,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix4x2fv(r, !1, t)
                }
            },
            rows: 4,
            cols: 2
        },
        O[35690] = {
            Type: Float32Array,
            size: 64,
            setter: function(e, r) {
                return function(t) {
                    e.uniformMatrix4x3fv(r, !1, t)
                }
            },
            rows: 4,
            cols: 3
        },
        O[35678] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: F
        },
        O[35680] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: E
        },
        O[35679] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: A
        },
        O[35682] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: F
        },
        O[36289] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: j
        },
        O[36292] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: j
        },
        O[36293] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: E
        },
        O[36298] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: F
        },
        O[36299] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: A
        },
        O[36300] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: E
        },
        O[36303] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: j
        },
        O[36306] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: F
        },
        O[36307] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: A
        },
        O[36308] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: E
        },
        O[36311] = {
            Type: null,
            size: 0,
            setter: T,
            arraySetter: z,
            bindPoint: j
        };
        var I = {};
        I[5126] = {
            size: 4,
            setter: U
        },
        I[35664] = {
            size: 8,
            setter: U
        },
        I[35665] = {
            size: 12,
            setter: U
        },
        I[35666] = {
            size: 16,
            setter: U
        },
        I[x] = {
            size: 4,
            setter: C
        },
        I[35667] = {
            size: 8,
            setter: C
        },
        I[35668] = {
            size: 12,
            setter: C
        },
        I[35669] = {
            size: 16,
            setter: C
        },
        I[5125] = {
            size: 4,
            setter: k
        },
        I[36294] = {
            size: 8,
            setter: k
        },
        I[36295] = {
            size: 12,
            setter: k
        },
        I[36296] = {
            size: 16,
            setter: k
        },
        I[35670] = {
            size: 4,
            setter: C
        },
        I[35671] = {
            size: 8,
            setter: C
        },
        I[35672] = {
            size: 12,
            setter: C
        },
        I[35673] = {
            size: 16,
            setter: C
        },
        I[35674] = {
            size: 4,
            setter: W,
            count: 2
        },
        I[35675] = {
            size: 9,
            setter: W,
            count: 3
        },
        I[35676] = {
            size: 16,
            setter: W,
            count: 4
        };
        var B = /ERROR:\s*\d+:(\d+)/gi;
        var L = /^[ \t]*\n/;
        function G(e) {
            var r = 0;
            return L.test(e) && (r = 1,
            e = e.replace(L, "")),
            {
                lineOffset: r,
                shaderSource: e
            }
        }
        function X(e, r) {
            return e.errorCallback(r),
            e.callback && setTimeout((function() {
                e.callback("".concat(r, "\n").concat(e.errors.join("\n")))
            }
            )),
            null
        }
        function D(e, r, t, n) {
            var u = e.createShader(t);
            return e.shaderSource(u, G(r).shaderSource),
            e.compileShader(u),
            n.callback || function(e, r, t, n) {
                n = n || v;
                var u = e.getShaderParameter(t, 35713);
                if (!u) {
                    var i = e.getShaderInfoLog(t)
                      , a = G(e.getShaderSource(t))
                      , f = a.lineOffset
                      , c = a.shaderSource;
                    n("".concat(function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                          , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                          , n = l(r.matchAll(B))
                          , o = new Map(n.map((function(e, t) {
                            var o = parseInt(e[1])
                              , u = n[t + 1]
                              , i = u ? u.index : r.length;
                            return [o - 1, r.substring(e.index, i)]
                        }
                        )));
                        return e.split("\n").map((function(e, r) {
                            var n = o.get(r);
                            return "".concat(r + 1 + t, ": ").concat(e).concat(n ? "\n\n^^^ ".concat(n) : "")
                        }
                        )).join("\n")
                    }(c, i, f), "\nError compiling ").concat(o.glEnumToString(e, r), ": ").concat(i))
                }
                return u
            }(e, t, u, n.errorCallback) ? u : (e.deleteShader(u),
            null)
        }
        function N(e, r, t) {
            var n, o, u;
            if ("function" == typeof r && (t = r,
            r = void 0),
            "function" == typeof e)
                t = e,
                e = void 0;
            else if (e && !Array.isArray(e)) {
                if (e.errorCallback && e.errors)
                    return e;
                var i = e;
                t = i.errorCallback,
                e = i.attribLocations,
                n = i.transformFeedbackVaryings,
                o = i.transformFeedbackMode,
                u = i.callback
            }
            var a = t || v
              , f = []
              , c = {
                errorCallback: function(e) {
                    f.push(e);
                    for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                        t[n - 1] = arguments[n];
                    a.apply(void 0, [e].concat(t))
                },
                transformFeedbackVaryings: n,
                transformFeedbackMode: o,
                callback: u,
                errors: f
            };
            if (e) {
                var l = {};
                Array.isArray(e) ? e.forEach((function(e, t) {
                    l[e] = r ? r[t] : t
                }
                )) : l = e,
                c.attribLocations = l
            }
            return c
        }
        var H = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
        function q(e, r) {
            return r.indexOf("frag") >= 0 ? 35632 : r.indexOf("vert") >= 0 ? 35633 : void 0
        }
        function V(e, r) {
            r.forEach((function(r) {
                e.deleteShader(r)
            }
            ))
        }
        var Y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return new Promise((function(r) {
                return setTimeout(r, e)
            }
            ))
        };
        function K(e, r, t, n, o) {
            for (var i = N(t, n, o), a = [], f = [], c = 0; c < r.length; ++c) {
                var l = r[c];
                if ("string" == typeof l) {
                    var s = b(l)
                      , v = s ? s.text : l
                      , y = e[H[c]];
                    s && s.type && (y = q(0, s.type) || y),
                    l = D(e, v, y, i),
                    f.push(l)
                }
                u.isShader(e, l) && a.push(l)
            }
            if (a.length !== r.length)
                return V(e, f),
                X(i, "not enough shaders for program");
            var m = e.createProgram();
            a.forEach((function(r) {
                e.attachShader(m, r)
            }
            )),
            i.attribLocations && Object.keys(i.attribLocations).forEach((function(r) {
                e.bindAttribLocation(m, i.attribLocations[r], r)
            }
            ));
            var p = i.transformFeedbackVaryings;
            return p && (p.attribs && (p = p.attribs),
            Array.isArray(p) || (p = Object.keys(p)),
            e.transformFeedbackVaryings(m, p, i.transformFeedbackMode || 35981)),
            e.linkProgram(m),
            i.callback ? (function(e, r, t) {
                $.apply(this, arguments)
            }(e, m, i),
            null) : Z(e, m, i.errorCallback) ? m : (e.deleteProgram(m),
            V(e, f),
            null)
        }
        function $() {
            return ($ = c(regeneratorRuntime.mark((function e(r, t, n) {
                var o, u, i, a, f;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            o = r.getExtension("KHR_parallel_shader_compile"),
                            u = o ? function(e, r) {
                                return e.getProgramParameter(r, o.COMPLETION_STATUS_KHR)
                            }
                            : function() {
                                return !0
                            }
                            ,
                            i = 0;
                        case 3:
                            return e.next = 5,
                            Y(i);
                        case 5:
                            i = 1e3 / 60;
                        case 6:
                            if (!u(r, t)) {
                                e.next = 3;
                                break
                            }
                        case 7:
                            a = Z(r, t, n.errorCallback),
                            f = a ? void 0 : n.errors.join("\n"),
                            a || ((n.errorCallback || v)(f),
                            r.deleteProgram(t),
                            t = null),
                            n.callback(f, t);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Z(e, r, t) {
            t = t || v;
            var n = e.getProgramParameter(r, 35714);
            if (!n) {
                var o = e.getProgramInfoLog(r);
                t("Error in program linking: ".concat(o))
            }
            return n
        }
        function J(e, r, t, n) {
            var o, u = b(r);
            if (!u)
                return X(n, "unknown script element: ".concat(r));
            o = u.text;
            var i = t || q(0, u.type);
            return i ? D(e, o, i, n) : X(n, "unknown shader type")
        }
        function Q(e, r, t, n, o) {
            for (var u = N(t, n, o), i = [], a = 0; a < r.length; ++a) {
                var f = D(e, r[a], e[H[a]], u);
                if (!u.callback && !f)
                    return null;
                i.push(f)
            }
            return K(e, i, u)
        }
        function ee(e) {
            var r = e.name;
            return r.startsWith("gl_") || r.startsWith("webgl_")
        }
        var re = /(\.|\[|]|\w+)/g;
        function te(e, r, t, n) {
            for (var o, u = e.split(re).filter((function(e) {
                return "" !== e
            }
            )), i = 0, a = ""; ; ) {
                var f = u[i++];
                a += f;
                var c = (o = f[0]) >= "0" && o <= "9"
                  , l = c ? parseInt(f) : f;
                if (c && (a += u[i++]),
                i === u.length) {
                    t[l] = r;
                    break
                }
                var s = u[i++]
                  , v = "[" === s
                  , y = t[l] || (v ? [] : {});
                t[l] = y,
                t = y,
                n[a] = n[a] || function(e) {
                    return function(r) {
                        le(e, r)
                    }
                }(y),
                a += s
            }
        }
        function ne(e, r) {
            var t = 0;
            function n(r, n, o) {
                var u, i = n.name.endsWith("[0]"), a = n.type, f = O[a];
                if (!f)
                    throw new Error("unknown type: 0x".concat(a.toString(16)));
                if (f.bindPoint) {
                    var c = t;
                    t += n.size,
                    u = i ? f.arraySetter(e, a, c, o, n.size) : f.setter(e, a, c, o, n.size)
                } else
                    u = f.arraySetter && i ? f.arraySetter(e, o) : f.setter(e, o);
                return u.location = o,
                u
            }
            for (var o = {}, u = {}, i = e.getProgramParameter(r, 35718), a = 0; a < i; ++a) {
                var f = e.getActiveUniform(r, a);
                if (!ee(f)) {
                    var c = f.name;
                    c.endsWith("[0]") && (c = c.substr(0, c.length - 3));
                    var l = e.getUniformLocation(r, f.name);
                    if (l) {
                        var s = n(0, f, l);
                        o[c] = s,
                        te(c, s, u, o)
                    }
                }
            }
            return o
        }
        function oe(e, r) {
            for (var t = {}, n = e.getProgramParameter(r, 35971), o = 0; o < n; ++o) {
                var u = e.getTransformFeedbackVarying(r, o);
                t[u.name] = {
                    index: o,
                    type: u.type,
                    size: u.size
                }
            }
            return t
        }
        function ue(e, r, t) {
            for (var n in r.transformFeedbackInfo && (r = r.transformFeedbackInfo),
            t.attribs && (t = t.attribs),
            t) {
                var o = r[n];
                if (o) {
                    var u = t[n];
                    u.offset ? e.bindBufferRange(35982, o.index, u.buffer, u.offset, u.size) : e.bindBufferBase(35982, o.index, u.buffer)
                }
            }
        }
        function ie(e, r) {
            for (var t = e.getProgramParameter(r, 35718), n = [], o = [], u = 0; u < t; ++u) {
                o.push(u),
                n.push({});
                var i = e.getActiveUniform(r, u);
                n[u].name = i.name
            }
            [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach((function(t) {
                var u = t[0]
                  , i = t[1];
                e.getActiveUniforms(r, o, e[u]).forEach((function(e, r) {
                    n[r][i] = e
                }
                ))
            }
            ));
            for (var a = {}, f = e.getProgramParameter(r, 35382), c = 0; c < f; ++c) {
                var l = e.getActiveUniformBlockName(r, c)
                  , s = {
                    index: e.getUniformBlockIndex(r, l),
                    usedByVertexShader: e.getActiveUniformBlockParameter(r, c, 35396),
                    usedByFragmentShader: e.getActiveUniformBlockParameter(r, c, 35398),
                    size: e.getActiveUniformBlockParameter(r, c, 35392),
                    uniformIndices: e.getActiveUniformBlockParameter(r, c, 35395)
                };
                s.used = s.usedByVertexShader || s.usedByFragmentShader,
                a[l] = s
            }
            return {
                blockSpecs: a,
                uniformData: n
            }
        }
        var ae = /\[\d+\]\.$/;
        function fe(e, r, t, n) {
            var o = t.blockSpecs
              , u = t.uniformData
              , i = o[n];
            if (!i)
                return y("no uniform block object named:", n),
                {
                    name: n,
                    uniforms: {}
                };
            var a = new ArrayBuffer(i.size)
              , f = e.createBuffer()
              , c = i.index;
            e.bindBuffer(d, f),
            e.uniformBlockBinding(r, i.index, c);
            var l = n + ".";
            ae.test(l) && (l = l.replace(ae, "."));
            var s = {}
              , v = {}
              , b = {};
            return i.uniformIndices.forEach((function(e) {
                var r = u[e]
                  , t = r.name;
                t.startsWith(l) && (t = t.substr(l.length));
                var n = t.endsWith("[0]");
                n && (t = t.substr(0, t.length - 3));
                var o, i = O[r.type], f = i.Type, c = n ? ((i.size + ((o = 16) - 1)) / o | 0) * o * r.size : i.size * r.size, y = new f(a,r.offset,c / f.BYTES_PER_ELEMENT);
                s[t] = y;
                var m = function(e, r, t, n) {
                    if (r || t) {
                        n = n || 1;
                        var o = e.length / 4;
                        return function(r) {
                            for (var t = 0, u = 0, i = 0; i < o; ++i) {
                                for (var a = 0; a < n; ++a)
                                    e[t++] = r[u++];
                                t += 4 - n
                            }
                        }
                    }
                    return function(r) {
                        r.length ? e.set(r) : e[0] = r
                    }
                }(y, n, i.rows, i.cols);
                v[t] = m,
                te(t, m, b, v)
            }
            )),
            {
                name: n,
                array: a,
                asFloat: new Float32Array(a),
                buffer: f,
                uniforms: s,
                setters: v
            }
        }
        function ce(e, r, t) {
            var n = (r.uniformBlockSpec || r).blockSpecs[t.name];
            if (n) {
                var o = n.index;
                return e.bindBufferRange(d, o, t.buffer, t.offset || 0, t.array.byteLength),
                !0
            }
            return !1
        }
        function le(e, r) {
            for (var t in r) {
                var n = e[t];
                "function" == typeof n ? n(r[t]) : le(e[t], r[t])
            }
        }
        function se(e) {
            for (var r = e.uniformSetters || e, t = arguments.length <= 1 ? 0 : arguments.length - 1, n = 0; n < t; ++n) {
                var o = n + 1 < 1 || arguments.length <= n + 1 ? void 0 : arguments[n + 1];
                if (Array.isArray(o))
                    for (var u = o.length, i = 0; i < u; ++i)
                        se(r, o[i]);
                else
                    for (var a in o) {
                        var f = r[a];
                        f && f(o[a])
                    }
            }
        }
        var ve = se;
        function ye(e, r) {
            for (var t = {}, n = e.getProgramParameter(r, 35721), o = 0; o < n; ++o) {
                var u = e.getActiveAttrib(r, o);
                if (!ee(u)) {
                    var i = e.getAttribLocation(r, u.name)
                      , a = I[u.type]
                      , f = a.setter(e, i, a);
                    f.location = i,
                    t[u.name] = f
                }
            }
            return t
        }
        function be(e, r) {
            for (var t in r) {
                var n = e[t];
                n && n(r[t])
            }
        }
        function me(e, r) {
            var t = {
                program: r,
                uniformSetters: ne(e, r),
                attribSetters: ye(e, r)
            };
            return o.isWebGL2(e) && (t.uniformBlockSpec = ie(e, r),
            t.transformFeedbackInfo = oe(e, r)),
            t
        }
        r.setUniformsAndBindTextures = ve;
        var pe = /\s|{|}|;/;
        function de(e, r, t, n, o) {
            var u = N(t, n, o)
              , i = [];
            if (r = r.map((function(e) {
                if (!pe.test(e)) {
                    var r = b(e);
                    if (r)
                        e = r.text;
                    else {
                        var t = "no element with id: ".concat(e);
                        u.errorCallback(t),
                        i.push(t)
                    }
                }
                return e
            }
            )),
            i.length)
                return X(u, "");
            var a = u.callback;
            a && (u.callback = function(r, t) {
                var n;
                r || (n = me(e, t)),
                a(r, n)
            }
            );
            var f = Q(e, r, u);
            return f ? me(e, f) : null
        }
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0,
        r.axisRotate = function(e, r, t, n) {
            n = n || new c(16);
            var o = r[0]
              , u = r[1]
              , i = r[2]
              , a = Math.sqrt(o * o + u * u + i * i)
              , f = (o /= a) * o
              , l = (u /= a) * u
              , s = (i /= a) * i
              , v = Math.cos(t)
              , y = Math.sin(t)
              , b = 1 - v
              , m = f + (1 - f) * v
              , p = o * u * b + i * y
              , d = o * i * b - u * y
              , w = o * u * b - i * y
              , x = l + (1 - l) * v
              , h = u * i * b + o * y
              , F = o * i * b + u * y
              , E = u * i * b - o * y
              , A = s + (1 - s) * v
              , j = e[0]
              , O = e[1]
              , _ = e[2]
              , S = e[3]
              , M = e[4]
              , R = e[5]
              , P = e[6]
              , g = e[7]
              , T = e[8]
              , z = e[9]
              , U = e[10]
              , C = e[11];
            n[0] = m * j + p * M + d * T,
            n[1] = m * O + p * R + d * z,
            n[2] = m * _ + p * P + d * U,
            n[3] = m * S + p * g + d * C,
            n[4] = w * j + x * M + h * T,
            n[5] = w * O + x * R + h * z,
            n[6] = w * _ + x * P + h * U,
            n[7] = w * S + x * g + h * C,
            n[8] = F * j + E * M + A * T,
            n[9] = F * O + E * R + A * z,
            n[10] = F * _ + E * P + A * U,
            n[11] = F * S + E * g + A * C,
            e !== n && (n[12] = e[12],
            n[13] = e[13],
            n[14] = e[14],
            n[15] = e[15]);
            return n
        }
        ,
        r.axisRotation = function(e, r, t) {
            t = t || new c(16);
            var n = e[0]
              , o = e[1]
              , u = e[2]
              , i = Math.sqrt(n * n + o * o + u * u)
              , a = (n /= i) * n
              , f = (o /= i) * o
              , l = (u /= i) * u
              , s = Math.cos(r)
              , v = Math.sin(r)
              , y = 1 - s;
            return t[0] = a + (1 - a) * s,
            t[1] = n * o * y + u * v,
            t[2] = n * u * y - o * v,
            t[3] = 0,
            t[4] = n * o * y - u * v,
            t[5] = f + (1 - f) * s,
            t[6] = o * u * y + n * v,
            t[7] = 0,
            t[8] = n * u * y + o * v,
            t[9] = o * u * y - n * v,
            t[10] = l + (1 - l) * s,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            t
        }
        ,
        r.copy = l,
        r.create = function() {
            return new c(16).fill(0)
        }
        ,
        r.frustum = function(e, r, t, n, o, u, i) {
            i = i || new c(16);
            var a = r - e
              , f = n - t
              , l = o - u;
            return i[0] = 2 * o / a,
            i[1] = 0,
            i[2] = 0,
            i[3] = 0,
            i[4] = 0,
            i[5] = 2 * o / f,
            i[6] = 0,
            i[7] = 0,
            i[8] = (e + r) / a,
            i[9] = (n + t) / f,
            i[10] = u / l,
            i[11] = -1,
            i[12] = 0,
            i[13] = 0,
            i[14] = o * u / l,
            i[15] = 0,
            i
        }
        ,
        r.getAxis = function(e, r, t) {
            t = t || o.create();
            var n = 4 * r;
            return t[0] = e[n + 0],
            t[1] = e[n + 1],
            t[2] = e[n + 2],
            t
        }
        ,
        r.getTranslation = function(e, r) {
            return (r = r || o.create())[0] = e[12],
            r[1] = e[13],
            r[2] = e[14],
            r
        }
        ,
        r.identity = s,
        r.inverse = v,
        r.lookAt = function(e, r, t, n) {
            return n = n || new c(16),
            i = i || o.create(),
            a = a || o.create(),
            f = f || o.create(),
            o.normalize(o.subtract(e, r, f), f),
            o.normalize(o.cross(t, f, i), i),
            o.normalize(o.cross(f, i, a), a),
            n[0] = i[0],
            n[1] = i[1],
            n[2] = i[2],
            n[3] = 0,
            n[4] = a[0],
            n[5] = a[1],
            n[6] = a[2],
            n[7] = 0,
            n[8] = f[0],
            n[9] = f[1],
            n[10] = f[2],
            n[11] = 0,
            n[12] = e[0],
            n[13] = e[1],
            n[14] = e[2],
            n[15] = 1,
            n
        }
        ,
        r.multiply = function(e, r, t) {
            t = t || new c(16);
            var n = e[0]
              , o = e[1]
              , u = e[2]
              , i = e[3]
              , a = e[4]
              , f = e[5]
              , l = e[6]
              , s = e[7]
              , v = e[8]
              , y = e[9]
              , b = e[10]
              , m = e[11]
              , p = e[12]
              , d = e[13]
              , w = e[14]
              , x = e[15]
              , h = r[0]
              , F = r[1]
              , E = r[2]
              , A = r[3]
              , j = r[4]
              , O = r[5]
              , _ = r[6]
              , S = r[7]
              , M = r[8]
              , R = r[9]
              , P = r[10]
              , g = r[11]
              , T = r[12]
              , z = r[13]
              , U = r[14]
              , C = r[15];
            return t[0] = n * h + a * F + v * E + p * A,
            t[1] = o * h + f * F + y * E + d * A,
            t[2] = u * h + l * F + b * E + w * A,
            t[3] = i * h + s * F + m * E + x * A,
            t[4] = n * j + a * O + v * _ + p * S,
            t[5] = o * j + f * O + y * _ + d * S,
            t[6] = u * j + l * O + b * _ + w * S,
            t[7] = i * j + s * O + m * _ + x * S,
            t[8] = n * M + a * R + v * P + p * g,
            t[9] = o * M + f * R + y * P + d * g,
            t[10] = u * M + l * R + b * P + w * g,
            t[11] = i * M + s * R + m * P + x * g,
            t[12] = n * T + a * z + v * U + p * C,
            t[13] = o * T + f * z + y * U + d * C,
            t[14] = u * T + l * z + b * U + w * C,
            t[15] = i * T + s * z + m * U + x * C,
            t
        }
        ,
        r.negate = function(e, r) {
            return (r = r || new c(16))[0] = -e[0],
            r[1] = -e[1],
            r[2] = -e[2],
            r[3] = -e[3],
            r[4] = -e[4],
            r[5] = -e[5],
            r[6] = -e[6],
            r[7] = -e[7],
            r[8] = -e[8],
            r[9] = -e[9],
            r[10] = -e[10],
            r[11] = -e[11],
            r[12] = -e[12],
            r[13] = -e[13],
            r[14] = -e[14],
            r[15] = -e[15],
            r
        }
        ,
        r.ortho = function(e, r, t, n, o, u, i) {
            return (i = i || new c(16))[0] = 2 / (r - e),
            i[1] = 0,
            i[2] = 0,
            i[3] = 0,
            i[4] = 0,
            i[5] = 2 / (n - t),
            i[6] = 0,
            i[7] = 0,
            i[8] = 0,
            i[9] = 0,
            i[10] = 2 / (o - u),
            i[11] = 0,
            i[12] = (r + e) / (e - r),
            i[13] = (n + t) / (t - n),
            i[14] = (u + o) / (o - u),
            i[15] = 1,
            i
        }
        ,
        r.perspective = function(e, r, t, n, o) {
            o = o || new c(16);
            var u = Math.tan(.5 * Math.PI - .5 * e)
              , i = 1 / (t - n);
            return o[0] = u / r,
            o[1] = 0,
            o[2] = 0,
            o[3] = 0,
            o[4] = 0,
            o[5] = u,
            o[6] = 0,
            o[7] = 0,
            o[8] = 0,
            o[9] = 0,
            o[10] = (t + n) * i,
            o[11] = -1,
            o[12] = 0,
            o[13] = 0,
            o[14] = t * n * i * 2,
            o[15] = 0,
            o
        }
        ,
        r.rotateX = function(e, r, t) {
            t = t || new c(16);
            var n = e[4]
              , o = e[5]
              , u = e[6]
              , i = e[7]
              , a = e[8]
              , f = e[9]
              , l = e[10]
              , s = e[11]
              , v = Math.cos(r)
              , y = Math.sin(r);
            t[4] = v * n + y * a,
            t[5] = v * o + y * f,
            t[6] = v * u + y * l,
            t[7] = v * i + y * s,
            t[8] = v * a - y * n,
            t[9] = v * f - y * o,
            t[10] = v * l - y * u,
            t[11] = v * s - y * i,
            e !== t && (t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t[12] = e[12],
            t[13] = e[13],
            t[14] = e[14],
            t[15] = e[15]);
            return t
        }
        ,
        r.rotateY = function(e, r, t) {
            t = t || new c(16);
            var n = e[0]
              , o = e[1]
              , u = e[2]
              , i = e[3]
              , a = e[8]
              , f = e[9]
              , l = e[10]
              , s = e[11]
              , v = Math.cos(r)
              , y = Math.sin(r);
            t[0] = v * n - y * a,
            t[1] = v * o - y * f,
            t[2] = v * u - y * l,
            t[3] = v * i - y * s,
            t[8] = v * a + y * n,
            t[9] = v * f + y * o,
            t[10] = v * l + y * u,
            t[11] = v * s + y * i,
            e !== t && (t[4] = e[4],
            t[5] = e[5],
            t[6] = e[6],
            t[7] = e[7],
            t[12] = e[12],
            t[13] = e[13],
            t[14] = e[14],
            t[15] = e[15]);
            return t
        }
        ,
        r.rotateZ = function(e, r, t) {
            t = t || new c(16);
            var n = e[0]
              , o = e[1]
              , u = e[2]
              , i = e[3]
              , a = e[4]
              , f = e[5]
              , l = e[6]
              , s = e[7]
              , v = Math.cos(r)
              , y = Math.sin(r);
            t[0] = v * n + y * a,
            t[1] = v * o + y * f,
            t[2] = v * u + y * l,
            t[3] = v * i + y * s,
            t[4] = v * a - y * n,
            t[5] = v * f - y * o,
            t[6] = v * l - y * u,
            t[7] = v * s - y * i,
            e !== t && (t[8] = e[8],
            t[9] = e[9],
            t[10] = e[10],
            t[11] = e[11],
            t[12] = e[12],
            t[13] = e[13],
            t[14] = e[14],
            t[15] = e[15]);
            return t
        }
        ,
        r.rotationX = function(e, r) {
            r = r || new c(16);
            var t = Math.cos(e)
              , n = Math.sin(e);
            return r[0] = 1,
            r[1] = 0,
            r[2] = 0,
            r[3] = 0,
            r[4] = 0,
            r[5] = t,
            r[6] = n,
            r[7] = 0,
            r[8] = 0,
            r[9] = -n,
            r[10] = t,
            r[11] = 0,
            r[12] = 0,
            r[13] = 0,
            r[14] = 0,
            r[15] = 1,
            r
        }
        ,
        r.rotationY = function(e, r) {
            r = r || new c(16);
            var t = Math.cos(e)
              , n = Math.sin(e);
            return r[0] = t,
            r[1] = 0,
            r[2] = -n,
            r[3] = 0,
            r[4] = 0,
            r[5] = 1,
            r[6] = 0,
            r[7] = 0,
            r[8] = n,
            r[9] = 0,
            r[10] = t,
            r[11] = 0,
            r[12] = 0,
            r[13] = 0,
            r[14] = 0,
            r[15] = 1,
            r
        }
        ,
        r.rotationZ = function(e, r) {
            r = r || new c(16);
            var t = Math.cos(e)
              , n = Math.sin(e);
            return r[0] = t,
            r[1] = n,
            r[2] = 0,
            r[3] = 0,
            r[4] = -n,
            r[5] = t,
            r[6] = 0,
            r[7] = 0,
            r[8] = 0,
            r[9] = 0,
            r[10] = 1,
            r[11] = 0,
            r[12] = 0,
            r[13] = 0,
            r[14] = 0,
            r[15] = 1,
            r
        }
        ,
        r.scale = function(e, r, t) {
            t = t || new c(16);
            var n = r[0]
              , o = r[1]
              , u = r[2];
            t[0] = n * e[0],
            t[1] = n * e[1],
            t[2] = n * e[2],
            t[3] = n * e[3],
            t[4] = o * e[4],
            t[5] = o * e[5],
            t[6] = o * e[6],
            t[7] = o * e[7],
            t[8] = u * e[8],
            t[9] = u * e[9],
            t[10] = u * e[10],
            t[11] = u * e[11],
            e !== t && (t[12] = e[12],
            t[13] = e[13],
            t[14] = e[14],
            t[15] = e[15]);
            return t
        }
        ,
        r.scaling = function(e, r) {
            return (r = r || new c(16))[0] = e[0],
            r[1] = 0,
            r[2] = 0,
            r[3] = 0,
            r[4] = 0,
            r[5] = e[1],
            r[6] = 0,
            r[7] = 0,
            r[8] = 0,
            r[9] = 0,
            r[10] = e[2],
            r[11] = 0,
            r[12] = 0,
            r[13] = 0,
            r[14] = 0,
            r[15] = 1,
            r
        }
        ,
        r.setAxis = function(e, r, t, n) {
            n !== e && (n = l(e, n));
            var o = 4 * t;
            return n[o + 0] = r[0],
            n[o + 1] = r[1],
            n[o + 2] = r[2],
            n
        }
        ,
        r.setDefaultType = function(e) {
            var r = c;
            return c = e,
            r
        }
        ,
        r.setTranslation = function(e, r, t) {
            t = t || s(),
            e !== t && (t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t[4] = e[4],
            t[5] = e[5],
            t[6] = e[6],
            t[7] = e[7],
            t[8] = e[8],
            t[9] = e[9],
            t[10] = e[10],
            t[11] = e[11]);
            return t[12] = r[0],
            t[13] = r[1],
            t[14] = r[2],
            t[15] = 1,
            t
        }
        ,
        r.transformDirection = function(e, r, t) {
            t = t || o.create();
            var n = r[0]
              , u = r[1]
              , i = r[2];
            return t[0] = n * e[0] + u * e[4] + i * e[8],
            t[1] = n * e[1] + u * e[5] + i * e[9],
            t[2] = n * e[2] + u * e[6] + i * e[10],
            t
        }
        ,
        r.transformNormal = function(e, r, t) {
            t = t || o.create();
            var n = v(e)
              , u = r[0]
              , i = r[1]
              , a = r[2];
            return t[0] = u * n[0] + i * n[1] + a * n[2],
            t[1] = u * n[4] + i * n[5] + a * n[6],
            t[2] = u * n[8] + i * n[9] + a * n[10],
            t
        }
        ,
        r.transformPoint = function(e, r, t) {
            t = t || o.create();
            var n = r[0]
              , u = r[1]
              , i = r[2]
              , a = n * e[3] + u * e[7] + i * e[11] + e[15];
            return t[0] = (n * e[0] + u * e[4] + i * e[8] + e[12]) / a,
            t[1] = (n * e[1] + u * e[5] + i * e[9] + e[13]) / a,
            t[2] = (n * e[2] + u * e[6] + i * e[10] + e[14]) / a,
            t
        }
        ,
        r.translate = function(e, r, t) {
            t = t || new c(16);
            var n = r[0]
              , o = r[1]
              , u = r[2]
              , i = e[0]
              , a = e[1]
              , f = e[2]
              , l = e[3]
              , s = e[4]
              , v = e[5]
              , y = e[6]
              , b = e[7]
              , m = e[8]
              , p = e[9]
              , d = e[10]
              , w = e[11]
              , x = e[12]
              , h = e[13]
              , F = e[14]
              , E = e[15];
            e !== t && (t[0] = i,
            t[1] = a,
            t[2] = f,
            t[3] = l,
            t[4] = s,
            t[5] = v,
            t[6] = y,
            t[7] = b,
            t[8] = m,
            t[9] = p,
            t[10] = d,
            t[11] = w);
            return t[12] = i * n + s * o + m * u + x,
            t[13] = a * n + v * o + p * u + h,
            t[14] = f * n + y * o + d * u + F,
            t[15] = l * n + b * o + w * u + E,
            t
        }
        ,
        r.translation = function(e, r) {
            return (r = r || new c(16))[0] = 1,
            r[1] = 0,
            r[2] = 0,
            r[3] = 0,
            r[4] = 0,
            r[5] = 1,
            r[6] = 0,
            r[7] = 0,
            r[8] = 0,
            r[9] = 0,
            r[10] = 1,
            r[11] = 0,
            r[12] = e[0],
            r[13] = e[1],
            r[14] = e[2],
            r[15] = 1,
            r
        }
        ,
        r.transpose = function(e, r) {
            if ((r = r || new c(16)) === e) {
                var t;
                return t = e[1],
                e[1] = e[4],
                e[4] = t,
                t = e[2],
                e[2] = e[8],
                e[8] = t,
                t = e[3],
                e[3] = e[12],
                e[12] = t,
                t = e[6],
                e[6] = e[9],
                e[9] = t,
                t = e[7],
                e[7] = e[13],
                e[13] = t,
                t = e[11],
                e[11] = e[14],
                e[14] = t,
                r
            }
            var n = e[0]
              , o = e[1]
              , u = e[2]
              , i = e[3]
              , a = e[4]
              , f = e[5]
              , l = e[6]
              , s = e[7]
              , v = e[8]
              , y = e[9]
              , b = e[10]
              , m = e[11]
              , p = e[12]
              , d = e[13]
              , w = e[14]
              , x = e[15];
            return r[0] = n,
            r[1] = a,
            r[2] = v,
            r[3] = p,
            r[4] = o,
            r[5] = f,
            r[6] = y,
            r[7] = d,
            r[8] = u,
            r[9] = l,
            r[10] = b,
            r[11] = w,
            r[12] = i,
            r[13] = s,
            r[14] = m,
            r[15] = x,
            r
        }
        ;
        var o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = u();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, i, a) : t[i] = e[i]
                }
            t.default = e,
            r && r.set(e, t);
            return t
        }(t(2));
        function u() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        var i, a, f, c = Float32Array;
        function l(e, r) {
            return (r = r || new c(16))[0] = e[0],
            r[1] = e[1],
            r[2] = e[2],
            r[3] = e[3],
            r[4] = e[4],
            r[5] = e[5],
            r[6] = e[6],
            r[7] = e[7],
            r[8] = e[8],
            r[9] = e[9],
            r[10] = e[10],
            r[11] = e[11],
            r[12] = e[12],
            r[13] = e[13],
            r[14] = e[14],
            r[15] = e[15],
            r
        }
        function s(e) {
            return (e = e || new c(16))[0] = 1,
            e[1] = 0,
            e[2] = 0,
            e[3] = 0,
            e[4] = 0,
            e[5] = 1,
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = 1,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            e
        }
        function v(e, r) {
            r = r || new c(16);
            var t = e[0]
              , n = e[1]
              , o = e[2]
              , u = e[3]
              , i = e[4]
              , a = e[5]
              , f = e[6]
              , l = e[7]
              , s = e[8]
              , v = e[9]
              , y = e[10]
              , b = e[11]
              , m = e[12]
              , p = e[13]
              , d = e[14]
              , w = e[15]
              , x = y * w
              , h = d * b
              , F = f * w
              , E = d * l
              , A = f * b
              , j = y * l
              , O = o * w
              , _ = d * u
              , S = o * b
              , M = y * u
              , R = o * l
              , P = f * u
              , g = s * p
              , T = m * v
              , z = i * p
              , U = m * a
              , C = i * v
              , k = s * a
              , W = t * p
              , I = m * n
              , B = t * v
              , L = s * n
              , G = t * a
              , X = i * n
              , D = x * a + E * v + A * p - (h * a + F * v + j * p)
              , N = h * n + O * v + M * p - (x * n + _ * v + S * p)
              , H = F * n + _ * a + R * p - (E * n + O * a + P * p)
              , q = j * n + S * a + P * v - (A * n + M * a + R * v)
              , V = 1 / (t * D + i * N + s * H + m * q);
            return r[0] = V * D,
            r[1] = V * N,
            r[2] = V * H,
            r[3] = V * q,
            r[4] = V * (h * i + F * s + j * m - (x * i + E * s + A * m)),
            r[5] = V * (x * t + _ * s + S * m - (h * t + O * s + M * m)),
            r[6] = V * (E * t + O * i + P * m - (F * t + _ * i + R * m)),
            r[7] = V * (A * t + M * i + R * s - (j * t + S * i + P * s)),
            r[8] = V * (g * l + U * b + C * w - (T * l + z * b + k * w)),
            r[9] = V * (T * u + W * b + L * w - (g * u + I * b + B * w)),
            r[10] = V * (z * u + I * l + G * w - (U * u + W * l + X * w)),
            r[11] = V * (k * u + B * l + X * b - (C * u + L * l + G * b)),
            r[12] = V * (z * y + k * d + T * f - (C * d + g * f + U * y)),
            r[13] = V * (B * d + g * o + I * y - (W * y + L * d + T * o)),
            r[14] = V * (W * f + X * d + U * o - (G * d + z * o + I * f)),
            r[15] = V * (G * y + C * o + L * f - (B * f + X * y + k * o)),
            r
        }
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0,
        r.createAttribsFromArrays = x,
        r.createBuffersFromArrays = function(e, r) {
            var t = {};
            Object.keys(r).forEach((function(n) {
                t[n] = F(e, r[n], n)
            }
            )),
            r.indices ? (t.numElements = r.indices.length,
            t.elementType = o.getGLTypeForTypedArray(w(r.indices), "indices")) : t.numElements = function(e) {
                var r, t;
                for (t = 0; t < h.length && !((r = h[t])in e); ++t)
                    ;
                t === h.length && (r = Object.keys(e)[0]);
                var n = e[r]
                  , o = y(n).length;
                if (void 0 === o)
                    return 1;
                var u = d(n, r)
                  , i = o / u;
                if (o % u > 0)
                    throw new Error("numComponents ".concat(u, " not correct for length ").concat(o));
                return i
            }(r);
            return t
        }
        ,
        r.createBufferFromArray = F,
        r.createBufferFromTypedArray = s,
        r.createBufferInfoFromArrays = function(e, r, t) {
            var n = x(e, r)
              , u = Object.assign({}, t || {});
            u.attribs = Object.assign({}, t ? t.attribs : {}, n);
            var i = r.indices;
            if (i) {
                var a = w(i, "indices");
                u.indices = s(e, a, 34963),
                u.numElements = a.length,
                u.elementType = o.getGLTypeForTypedArray(a)
            } else
                u.numElements || (u.numElements = function(e, r) {
                    var t, n;
                    for (n = 0; n < h.length && !((t = h[n])in r) && !((t = c.attribPrefix + t)in r); ++n)
                        ;
                    n === h.length && (t = Object.keys(r)[0]);
                    var o = r[t];
                    if (!o.buffer)
                        return 1;
                    e.bindBuffer(f, o.buffer);
                    var u = e.getBufferParameter(f, 34660);
                    e.bindBuffer(f, null);
                    var i = (v = o.type,
                    5120 === v || 5121 === v ? 1 : 5122 === v || 5123 === v ? 2 : 5124 === v || 5125 === v || 5126 === v ? 4 : 0)
                      , a = u / i
                      , l = o.numComponents || o.size
                      , s = a / l;
                    var v;
                    if (s % 1 != 0)
                        throw new Error("numComponents ".concat(l, " not correct for length ").concat(length));
                    return s
                }(e, u.attribs));
            return u
        }
        ,
        r.setAttribInfoBufferFromArray = function(e, r, t, n) {
            t = w(t),
            void 0 !== n ? (e.bindBuffer(f, r.buffer),
            e.bufferSubData(f, n, t)) : l(e, f, r.buffer, t, r.drawType)
        }
        ,
        r.setAttributePrefix = function(e) {
            c.attribPrefix = e
        }
        ,
        r.setAttributeDefaults_ = function(e) {
            u.copyExistingProperties(e, c)
        }
        ,
        r.getNumComponents_ = d,
        r.getArray_ = y;
        var o = a(t(1))
          , u = a(t(0));
        function i() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }
            ,
            e
        }
        function a(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = i();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = e[u]
                }
            return t.default = e,
            r && r.set(e, t),
            t
        }
        var f = 34962
          , c = {
            attribPrefix: ""
        };
        function l(e, r, t, n, o) {
            e.bindBuffer(r, t),
            e.bufferData(r, n, o || 35044)
        }
        function s(e, r, t, n) {
            if (u.isBuffer(e, r))
                return r;
            t = t || f;
            var o = e.createBuffer();
            return l(e, t, o, r, n),
            o
        }
        function v(e) {
            return "indices" === e
        }
        function y(e) {
            return e.length ? e : e.data
        }
        var b = /coord|texture/i
          , m = /color|colour/i;
        function p(e, r) {
            var t;
            if (r % (t = b.test(e) ? 2 : m.test(e) ? 4 : 3) > 0)
                throw new Error("Can not guess numComponents for attribute '".concat(e, "'. Tried ").concat(t, " but ").concat(r, " values is not evenly divisible by ").concat(t, ". You should specify it."));
            return t
        }
        function d(e, r) {
            return e.numComponents || e.size || p(r, y(e).length)
        }
        function w(e, r) {
            if (o.isArrayBuffer(e))
                return e;
            if (o.isArrayBuffer(e.data))
                return e.data;
            Array.isArray(e) && (e = {
                data: e
            });
            var t = e.type;
            return t || (t = v(r) ? Uint16Array : Float32Array),
            new t(e.data)
        }
        function x(e, r) {
            var t = {};
            return Object.keys(r).forEach((function(n) {
                if (!v(n)) {
                    var u = r[n]
                      , i = u.attrib || u.name || u.attribName || c.attribPrefix + n;
                    if (u.value) {
                        if (!Array.isArray(u.value) && !o.isArrayBuffer(u.value))
                            throw new Error("array.value is not array or typedarray");
                        t[i] = {
                            value: u.value
                        }
                    } else {
                        var a, l, y, b;
                        if (u.buffer && u.buffer instanceof WebGLBuffer)
                            a = u.buffer,
                            b = u.numComponents || u.size,
                            l = u.type,
                            y = u.normalize;
                        else if ("number" == typeof u || "number" == typeof u.data) {
                            var m = u.data || u
                              , x = u.type || Float32Array
                              , h = m * x.BYTES_PER_ELEMENT;
                            l = o.getGLTypeForTypedArrayType(x),
                            y = void 0 !== u.normalize ? u.normalize : (E = x) === Int8Array || E === Uint8Array,
                            b = u.numComponents || u.size || p(n, m),
                            a = e.createBuffer(),
                            e.bindBuffer(f, a),
                            e.bufferData(f, h, u.drawType || 35044)
                        } else {
                            var F = w(u, n);
                            a = s(e, F, void 0, u.drawType),
                            l = o.getGLTypeForTypedArray(F),
                            y = void 0 !== u.normalize ? u.normalize : function(e) {
                                return e instanceof Int8Array || e instanceof Uint8Array
                            }(F),
                            b = d(u, n)
                        }
                        t[i] = {
                            buffer: a,
                            numComponents: b,
                            type: l,
                            normalize: y,
                            stride: u.stride || 0,
                            offset: u.offset || 0,
                            divisor: void 0 === u.divisor ? void 0 : u.divisor,
                            drawType: u.drawType
                        }
                    }
                }
                var E
            }
            )),
            e.bindBuffer(f, null),
            t
        }
        var h = ["position", "positions", "a_position"];
        function F(e, r, t) {
            var n = "indices" === t ? 34963 : f;
            return s(e, w(r, t), n)
        }
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0,
        r.setTextureDefaults_ = function(e) {
            i.copyExistingProperties(e, s),
            e.textureColor && oe(e.textureColor)
        }
        ,
        r.createSampler = le,
        r.createSamplers = function(e, r) {
            var t = {};
            return Object.keys(r).forEach((function(n) {
                t[n] = le(e, r[n])
            }
            )),
            t
        }
        ,
        r.setSamplerParameters = ce,
        r.createTexture = _e,
        r.setEmptyTexture = Oe,
        r.setTextureFromArray = je,
        r.loadTextureFromUrl = Fe,
        r.setTextureFromElement = me,
        r.setTextureFilteringForSize = se,
        r.setTextureParameters = fe,
        r.setDefaultTextureColor = oe,
        r.createTextures = function(e, r, t) {
            t = t || pe;
            var n = 0
              , o = []
              , u = {}
              , i = {};
            function a() {
                0 === n && setTimeout((function() {
                    t(o.length ? o : void 0, u, i)
                }
                ), 0)
            }
            return Object.keys(r).forEach((function(t) {
                var f, c, l = r[t];
                ("string" == typeof (c = l.src) || Array.isArray(c) && "string" == typeof c[0]) && (f = function(e, r, u) {
                    i[t] = u,
                    --n,
                    e && o.push(e),
                    a()
                }
                ,
                ++n),
                u[t] = _e(e, l, f)
            }
            )),
            a(),
            u
        }
        ,
        r.resizeTexture = function(e, r, t, n, o, u) {
            n = n || t.width,
            o = o || t.height,
            u = u || t.depth;
            var i = t.target || E;
            e.bindTexture(i, r);
            var a, f = t.level || 0, c = t.internalFormat || t.format || p, l = J(c), s = t.format || l.format, y = t.src;
            a = y && (v(y) || Array.isArray(y) && "number" == typeof y[0]) ? t.type || te(e, y, l.type) : t.type || l.type;
            if (i === A)
                for (var b = 0; b < 6; ++b)
                    e.texImage2D(_ + b, f, c, n, o, 0, s, a, null);
            else
                i === j || i === O ? e.texImage3D(i, f, c, n, o, u, 0, s, a, null) : e.texImage2D(i, f, c, n, o, 0, s, a, null)
        }
        ,
        r.canGenerateMipmap = ee,
        r.canFilter = re,
        r.getNumComponentsForFormat = function(e) {
            var r = Y[e];
            if (!r)
                throw "unknown format: " + e;
            return r.u
        }
        ,
        r.getBytesPerElementForInternalFormat = Z,
        r.getFormatAndTypeForInternalFormat = J;
        var o = f(t(3))
          , u = f(t(1))
          , i = f(t(0));
        function a() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return a = function() {
                return e
            }
            ,
            e
        }
        function f(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = a();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u]
                }
            return t.default = e,
            r && r.set(e, t),
            t
        }
        var c, l, s = {
            textureColor: new Uint8Array([128, 192, 255, 255]),
            textureOptions: {},
            crossOrigin: void 0
        }, v = u.isArrayBuffer, y = function() {
            return c = c || ("undefined" != typeof document && document.createElement ? document.createElement("canvas").getContext("2d") : null)
        }, b = 6406, m = 6407, p = 6408, d = 6409, w = 6410, x = 6402, h = 34041, F = 33071, E = 3553, A = 34067, j = 32879, O = 35866, _ = 34069, S = 10241, M = 10240, R = 10242, P = 10243, g = 3317, T = 5120, z = 5121, U = 5122, C = 5123, k = 5124, W = 5125, I = 5126, B = 5131, L = 36193, G = 33640, X = 33319, D = 33320, N = 6403, H = 36244, q = 36248, V = 36249, Y = {}, K = Y;
        function $(e) {
            if (!l) {
                var r = {};
                r[6406] = {
                    v: b,
                    h: !0,
                    F: !0,
                    A: [1, 2, 2, 4],
                    type: [z, B, L, I]
                },
                r[6409] = {
                    v: d,
                    h: !0,
                    F: !0,
                    A: [1, 2, 2, 4],
                    type: [z, B, L, I]
                },
                r[6410] = {
                    v: w,
                    h: !0,
                    F: !0,
                    A: [2, 4, 4, 8],
                    type: [z, B, L, I]
                },
                r[m] = {
                    v: m,
                    h: !0,
                    F: !0,
                    A: [3, 6, 6, 12, 2],
                    type: [z, B, L, I, 33635]
                },
                r[p] = {
                    v: p,
                    h: !0,
                    F: !0,
                    A: [4, 8, 8, 16, 2, 2],
                    type: [z, B, L, I, 32819, 32820]
                },
                r[6402] = {
                    v: x,
                    h: !0,
                    F: !1,
                    A: [2, 4],
                    type: [W, C]
                },
                r[33321] = {
                    v: N,
                    h: !0,
                    F: !0,
                    A: [1],
                    type: [z]
                },
                r[36756] = {
                    v: N,
                    h: !1,
                    F: !0,
                    A: [1],
                    type: [T]
                },
                r[33325] = {
                    v: N,
                    h: !1,
                    F: !0,
                    A: [4, 2],
                    type: [I, B]
                },
                r[33326] = {
                    v: N,
                    h: !1,
                    F: !1,
                    A: [4],
                    type: [I]
                },
                r[33330] = {
                    v: H,
                    h: !0,
                    F: !1,
                    A: [1],
                    type: [z]
                },
                r[33329] = {
                    v: H,
                    h: !0,
                    F: !1,
                    A: [1],
                    type: [T]
                },
                r[33332] = {
                    v: H,
                    h: !0,
                    F: !1,
                    A: [2],
                    type: [C]
                },
                r[33331] = {
                    v: H,
                    h: !0,
                    F: !1,
                    A: [2],
                    type: [U]
                },
                r[33334] = {
                    v: H,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [W]
                },
                r[33333] = {
                    v: H,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [k]
                },
                r[33323] = {
                    v: X,
                    h: !0,
                    F: !0,
                    A: [2],
                    type: [z]
                },
                r[36757] = {
                    v: X,
                    h: !1,
                    F: !0,
                    A: [2],
                    type: [T]
                },
                r[33327] = {
                    v: X,
                    h: !1,
                    F: !0,
                    A: [8, 4],
                    type: [I, B]
                },
                r[33328] = {
                    v: X,
                    h: !1,
                    F: !1,
                    A: [8],
                    type: [I]
                },
                r[33336] = {
                    v: D,
                    h: !0,
                    F: !1,
                    A: [2],
                    type: [z]
                },
                r[33335] = {
                    v: D,
                    h: !0,
                    F: !1,
                    A: [2],
                    type: [T]
                },
                r[33338] = {
                    v: D,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [C]
                },
                r[33337] = {
                    v: D,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [U]
                },
                r[33340] = {
                    v: D,
                    h: !0,
                    F: !1,
                    A: [8],
                    type: [W]
                },
                r[33339] = {
                    v: D,
                    h: !0,
                    F: !1,
                    A: [8],
                    type: [k]
                },
                r[32849] = {
                    v: m,
                    h: !0,
                    F: !0,
                    A: [3],
                    type: [z]
                },
                r[35905] = {
                    v: m,
                    h: !1,
                    F: !0,
                    A: [3],
                    type: [z]
                },
                r[36194] = {
                    v: m,
                    h: !0,
                    F: !0,
                    A: [3, 2],
                    type: [z, 33635]
                },
                r[36758] = {
                    v: m,
                    h: !1,
                    F: !0,
                    A: [3],
                    type: [T]
                },
                r[35898] = {
                    v: m,
                    h: !1,
                    F: !0,
                    A: [12, 6, 4],
                    type: [I, B, 35899]
                },
                r[35901] = {
                    v: m,
                    h: !1,
                    F: !0,
                    A: [12, 6, 4],
                    type: [I, B, 35902]
                },
                r[34843] = {
                    v: m,
                    h: !1,
                    F: !0,
                    A: [12, 6],
                    type: [I, B]
                },
                r[34837] = {
                    v: m,
                    h: !1,
                    F: !1,
                    A: [12],
                    type: [I]
                },
                r[36221] = {
                    v: q,
                    h: !1,
                    F: !1,
                    A: [3],
                    type: [z]
                },
                r[36239] = {
                    v: q,
                    h: !1,
                    F: !1,
                    A: [3],
                    type: [T]
                },
                r[36215] = {
                    v: q,
                    h: !1,
                    F: !1,
                    A: [6],
                    type: [C]
                },
                r[36233] = {
                    v: q,
                    h: !1,
                    F: !1,
                    A: [6],
                    type: [U]
                },
                r[36209] = {
                    v: q,
                    h: !1,
                    F: !1,
                    A: [12],
                    type: [W]
                },
                r[36227] = {
                    v: q,
                    h: !1,
                    F: !1,
                    A: [12],
                    type: [k]
                },
                r[32856] = {
                    v: p,
                    h: !0,
                    F: !0,
                    A: [4],
                    type: [z]
                },
                r[35907] = {
                    v: p,
                    h: !0,
                    F: !0,
                    A: [4],
                    type: [z]
                },
                r[36759] = {
                    v: p,
                    h: !1,
                    F: !0,
                    A: [4],
                    type: [T]
                },
                r[32855] = {
                    v: p,
                    h: !0,
                    F: !0,
                    A: [4, 2, 4],
                    type: [z, 32820, G]
                },
                r[32854] = {
                    v: p,
                    h: !0,
                    F: !0,
                    A: [4, 2],
                    type: [z, 32819]
                },
                r[32857] = {
                    v: p,
                    h: !0,
                    F: !0,
                    A: [4],
                    type: [G]
                },
                r[34842] = {
                    v: p,
                    h: !1,
                    F: !0,
                    A: [16, 8],
                    type: [I, B]
                },
                r[34836] = {
                    v: p,
                    h: !1,
                    F: !1,
                    A: [16],
                    type: [I]
                },
                r[36220] = {
                    v: V,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [z]
                },
                r[36238] = {
                    v: V,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [T]
                },
                r[36975] = {
                    v: V,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [G]
                },
                r[36214] = {
                    v: V,
                    h: !0,
                    F: !1,
                    A: [8],
                    type: [C]
                },
                r[36232] = {
                    v: V,
                    h: !0,
                    F: !1,
                    A: [8],
                    type: [U]
                },
                r[36226] = {
                    v: V,
                    h: !0,
                    F: !1,
                    A: [16],
                    type: [k]
                },
                r[36208] = {
                    v: V,
                    h: !0,
                    F: !1,
                    A: [16],
                    type: [W]
                },
                r[33189] = {
                    v: x,
                    h: !0,
                    F: !1,
                    A: [2, 4],
                    type: [C, W]
                },
                r[33190] = {
                    v: x,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [W]
                },
                r[36012] = {
                    v: x,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [I]
                },
                r[35056] = {
                    v: h,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [34042]
                },
                r[36013] = {
                    v: h,
                    h: !0,
                    F: !1,
                    A: [4],
                    type: [36269]
                },
                Object.keys(r).forEach((function(e) {
                    var t = r[e];
                    t.bytesPerElementMap = {},
                    t.A.forEach((function(e, r) {
                        var n = t.type[r];
                        t.bytesPerElementMap[n] = e
                    }
                    ))
                }
                )),
                l = r
            }
            return l[e]
        }
        function Z(e, r) {
            var t = $(e);
            if (!t)
                throw "unknown internal format";
            var n = t.bytesPerElementMap[r];
            if (void 0 === n)
                throw "unknown internal format";
            return n
        }
        function J(e) {
            var r = $(e);
            if (!r)
                throw "unknown internal format";
            return {
                format: r.v,
                type: r.type[0]
            }
        }
        function Q(e) {
            return 0 == (e & e - 1)
        }
        function ee(e, r, t, n) {
            if (!o.isWebGL2(e))
                return Q(r) && Q(t);
            var u = $(n);
            if (!u)
                throw "unknown internal format";
            return u.h && u.F
        }
        function re(e) {
            var r = $(e);
            if (!r)
                throw "unknown internal format";
            return r.F
        }
        function te(e, r, t) {
            return v(r) ? u.getGLTypeForTypedArray(r) : t || z
        }
        function ne(e, r, t, n, o) {
            if (o % 1 != 0)
                throw "can't guess dimensions";
            if (t || n) {
                if (n) {
                    if (!t && (t = o / n) % 1)
                        throw "can't guess dimensions"
                } else if ((n = o / t) % 1)
                    throw "can't guess dimensions"
            } else {
                var u = Math.sqrt(o / (r === A ? 6 : 1));
                u % 1 == 0 ? (t = u,
                n = u) : (t = o,
                n = 1)
            }
            return {
                width: t,
                height: n
            }
        }
        function oe(e) {
            s.textureColor = new Uint8Array([255 * e[0], 255 * e[1], 255 * e[2], 255 * e[3]])
        }
        function ue(e, r) {
            void 0 !== r.colorspaceConversion && e.pixelStorei(37443, r.colorspaceConversion),
            void 0 !== r.premultiplyAlpha && e.pixelStorei(37441, r.premultiplyAlpha),
            void 0 !== r.flipY && e.pixelStorei(37440, r.flipY)
        }
        function ie(e) {
            e.pixelStorei(g, 4),
            o.isWebGL2(e) && (e.pixelStorei(3314, 0),
            e.pixelStorei(32878, 0),
            e.pixelStorei(3316, 0),
            e.pixelStorei(3315, 0),
            e.pixelStorei(32877, 0))
        }
        function ae(e, r, t, n) {
            n.minMag && (t.call(e, r, S, n.minMag),
            t.call(e, r, M, n.minMag)),
            n.min && t.call(e, r, S, n.min),
            n.mag && t.call(e, r, M, n.mag),
            n.wrap && (t.call(e, r, R, n.wrap),
            t.call(e, r, P, n.wrap),
            (r === j || i.isSampler(e, r)) && t.call(e, r, 32882, n.wrap)),
            n.wrapR && t.call(e, r, 32882, n.wrapR),
            n.wrapS && t.call(e, r, R, n.wrapS),
            n.wrapT && t.call(e, r, P, n.wrapT),
            n.minLod && t.call(e, r, 33082, n.minLod),
            n.maxLod && t.call(e, r, 33083, n.maxLod),
            n.baseLevel && t.call(e, r, 33084, n.baseLevel),
            n.maxLevel && t.call(e, r, 33085, n.maxLevel)
        }
        function fe(e, r, t) {
            var n = t.target || E;
            e.bindTexture(n, r),
            ae(e, n, e.texParameteri, t)
        }
        function ce(e, r, t) {
            ae(e, r, e.samplerParameteri, t)
        }
        function le(e, r) {
            var t = e.createSampler();
            return ce(e, t, r),
            t
        }
        function se(e, r, t, n, o, u) {
            t = t || s.textureOptions,
            u = u || p;
            var i = t.target || E;
            if (n = n || t.width,
            o = o || t.height,
            e.bindTexture(i, r),
            ee(e, n, o, u))
                e.generateMipmap(i);
            else {
                var a = re(u) ? 9729 : 9728;
                e.texParameteri(i, S, a),
                e.texParameteri(i, M, a),
                e.texParameteri(i, R, F),
                e.texParameteri(i, P, F)
            }
        }
        function ve(e) {
            return !0 === e.auto || void 0 === e.auto && void 0 === e.level
        }
        function ye(e, r) {
            return (r = r || {}).cubeFaceOrder || [_, 34070, 34071, 34072, 34073, 34074]
        }
        function be(e, r) {
            var t = ye(0, r).map((function(e, r) {
                return {
                    face: e,
                    ndx: r
                }
            }
            ));
            return t.sort((function(e, r) {
                return e.face - r.face
            }
            )),
            t
        }
        function me(e, r, t, n) {
            var o = (n = n || s.textureOptions).target || E
              , u = n.level || 0
              , i = t.width
              , a = t.height
              , f = n.internalFormat || n.format || p
              , c = J(f)
              , l = n.format || c.format
              , v = n.type || c.type;
            if (ue(e, n),
            e.bindTexture(o, r),
            o === A) {
                var b, m, d = t.width, w = t.height;
                if (d / 6 === w)
                    b = w,
                    m = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
                else if (w / 6 === d)
                    b = d,
                    m = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
                else if (d / 3 == w / 2)
                    b = d / 3,
                    m = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
                else {
                    if (d / 2 != w / 3)
                        throw "can't figure out cube map from element: " + (t.src ? t.src : t.nodeName);
                    b = d / 2,
                    m = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]
                }
                var x = y();
                x ? (x.canvas.width = b,
                x.canvas.height = b,
                i = b,
                a = b,
                be(0, n).forEach((function(r) {
                    var n = m[2 * r.ndx + 0] * b
                      , o = m[2 * r.ndx + 1] * b;
                    x.drawImage(t, n, o, b, b, 0, 0, b, b),
                    e.texImage2D(r.face, u, f, l, v, x.canvas)
                }
                )),
                x.canvas.width = 1,
                x.canvas.height = 1) : "undefined" != typeof createImageBitmap && (i = b,
                a = b,
                be(0, n).forEach((function(c) {
                    var s = m[2 * c.ndx + 0] * b
                      , y = m[2 * c.ndx + 1] * b;
                    e.texImage2D(c.face, u, f, b, b, 0, l, v, null),
                    createImageBitmap(t, s, y, b, b, {
                        premultiplyAlpha: "none",
                        colorSpaceConversion: "none"
                    }).then((function(t) {
                        ue(e, n),
                        e.bindTexture(o, r),
                        e.texImage2D(c.face, u, f, l, v, t),
                        ve(n) && se(e, r, n, i, a, f)
                    }
                    ))
                }
                )))
            } else if (o === j || o === O) {
                var h = Math.min(t.width, t.height)
                  , F = Math.max(t.width, t.height)
                  , _ = F / h;
                if (_ % 1 != 0)
                    throw "can not compute 3D dimensions of element";
                var S = t.width === F ? 1 : 0
                  , M = t.height === F ? 1 : 0;
                e.pixelStorei(g, 1),
                e.pixelStorei(3314, t.width),
                e.pixelStorei(32878, 0),
                e.pixelStorei(32877, 0),
                e.texImage3D(o, u, f, h, h, h, 0, l, v, null);
                for (var R = 0; R < _; ++R) {
                    var P = R * h * S
                      , T = R * h * M;
                    e.pixelStorei(3316, P),
                    e.pixelStorei(3315, T),
                    e.texSubImage3D(o, u, 0, 0, R, h, h, 1, l, v, t)
                }
                ie(e)
            } else
                e.texImage2D(o, u, f, l, v, t);
            ve(n) && se(e, r, n, i, a, f),
            fe(e, r, n)
        }
        function pe() {}
        function de(e, r) {
            return void 0 !== r || function(e) {
                if ("undefined" != typeof document) {
                    var r = document.createElement("a");
                    return r.href = e,
                    r.hostname === location.hostname && r.port === location.port && r.protocol === location.protocol
                }
                var t = new URL(location.href).origin;
                return new URL(e,location.href).origin === t
            }(e) ? r : "anonymous"
        }
        function we(e) {
            return "undefined" != typeof ImageBitmap && e instanceof ImageBitmap || "undefined" != typeof ImageData && e instanceof ImageData || "undefined" != typeof HTMLElement && e instanceof HTMLElement
        }
        function xe(e, r, t) {
            return we(e) ? (setTimeout((function() {
                t(null, e)
            }
            )),
            e) : function(e, r, t) {
                var n;
                if (t = t || pe,
                r = void 0 !== r ? r : s.crossOrigin,
                r = de(e, r),
                "undefined" != typeof Image) {
                    n = new Image,
                    void 0 !== r && (n.crossOrigin = r);
                    var o = function() {
                        n.removeEventListener("error", u),
                        n.removeEventListener("load", a),
                        n = null
                    }
                      , u = function() {
                        var r = "couldn't load image: " + e;
                        i.error(r),
                        t(r, n),
                        o()
                    }
                      , a = function() {
                        t(null, n),
                        o()
                    };
                    return n.addEventListener("error", u),
                    n.addEventListener("load", a),
                    n.src = e,
                    n
                }
                if ("undefined" != typeof ImageBitmap) {
                    var f, c, l = function() {
                        t(f, c)
                    }, v = {};
                    r && (v.mode = "cors"),
                    fetch(e, v).then((function(e) {
                        if (!e.ok)
                            throw e;
                        return e.blob()
                    }
                    )).then((function(e) {
                        return createImageBitmap(e, {
                            premultiplyAlpha: "none",
                            colorSpaceConversion: "none"
                        })
                    }
                    )).then((function(e) {
                        c = e,
                        setTimeout(l)
                    }
                    )).catch((function(e) {
                        f = e,
                        setTimeout(l)
                    }
                    )),
                    n = null
                }
                return n
            }(e, r, t)
        }
        function he(e, r, t) {
            var n = (t = t || s.textureOptions).target || E;
            if (e.bindTexture(n, r),
            !1 !== t.color) {
                var o = function(e) {
                    return e = e || s.textureColor,
                    v(e) ? e : new Uint8Array([255 * e[0], 255 * e[1], 255 * e[2], 255 * e[3]])
                }(t.color);
                if (n === A)
                    for (var u = 0; u < 6; ++u)
                        e.texImage2D(_ + u, 0, p, 1, 1, 0, p, z, o);
                else
                    n === j || n === O ? e.texImage3D(n, 0, p, 1, 1, 1, 0, p, z, o) : e.texImage2D(n, 0, p, 1, 1, 0, p, z, o)
            }
        }
        function Fe(e, r, t, n) {
            return n = n || pe,
            t = t || s.textureOptions,
            he(e, r, t),
            xe((t = Object.assign({}, t)).src, t.crossOrigin, (function(o, u) {
                o ? n(o, r, u) : (me(e, r, u, t),
                n(null, r, u))
            }
            ))
        }
        function Ee(e, r, t, n) {
            n = n || pe;
            var o = t.src;
            if (6 !== o.length)
                throw "there must be 6 urls for a cubemap";
            var u = t.level || 0
              , i = t.internalFormat || t.format || p
              , a = J(i)
              , f = t.format || a.format
              , c = t.type || z
              , l = t.target || E;
            if (l !== A)
                throw "target must be TEXTURE_CUBE_MAP";
            he(e, r, t),
            t = Object.assign({}, t);
            var s, v = 6, y = [], b = ye(0, t);
            s = o.map((function(o, a) {
                return xe(o, t.crossOrigin, (m = b[a],
                function(o, a) {
                    --v,
                    o ? y.push(o) : a.width !== a.height ? y.push("cubemap face img is not a square: " + a.src) : (ue(e, t),
                    e.bindTexture(l, r),
                    5 === v ? ye().forEach((function(r) {
                        e.texImage2D(r, u, i, f, c, a)
                    }
                    )) : e.texImage2D(m, u, i, f, c, a),
                    ve(t) && e.generateMipmap(l)),
                    0 === v && n(y.length ? y : void 0, r, s)
                }
                ));
                var m
            }
            ))
        }
        function Ae(e, r, t, n) {
            n = n || pe;
            var o = t.src
              , u = t.internalFormat || t.format || p
              , i = J(u)
              , a = t.format || i.format
              , f = t.type || z
              , c = t.target || O;
            if (c !== j && c !== O)
                throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
            he(e, r, t),
            t = Object.assign({}, t);
            var l, s = o.length, v = [], b = t.level || 0, m = t.width, d = t.height, w = o.length, x = !0;
            l = o.map((function(o, i) {
                return xe(o, t.crossOrigin, (p = i,
                function(o, i) {
                    if (--s,
                    o)
                        v.push(o);
                    else {
                        if (ue(e, t),
                        e.bindTexture(c, r),
                        x) {
                            x = !1,
                            m = t.width || i.width,
                            d = t.height || i.height,
                            e.texImage3D(c, b, u, m, d, w, 0, a, f, null);
                            for (var h = 0; h < w; ++h)
                                e.texSubImage3D(c, b, 0, 0, h, m, d, 1, a, f, i)
                        } else {
                            var F, E = i;
                            i.width === m && i.height === d || (E = (F = y()).canvas,
                            F.canvas.width = m,
                            F.canvas.height = d,
                            F.drawImage(i, 0, 0, m, d)),
                            e.texSubImage3D(c, b, 0, 0, p, m, d, 1, a, f, E),
                            F && E === F.canvas && (F.canvas.width = 0,
                            F.canvas.height = 0)
                        }
                        ve(t) && e.generateMipmap(c)
                    }
                    0 === s && n(v.length ? v : void 0, r, l)
                }
                ));
                var p
            }
            ))
        }
        function je(e, r, t, n) {
            var i = (n = n || s.textureOptions).target || E;
            e.bindTexture(i, r);
            var a = n.width
              , f = n.height
              , c = n.depth
              , l = n.level || 0
              , y = n.internalFormat || n.format || p
              , b = J(y)
              , m = n.format || b.format
              , d = n.type || te(0, t, b.type);
            if (v(t))
                t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
            else {
                var w = u.getTypedArrayTypeForGLType(d);
                t = new w(t)
            }
            var x, h = Z(y, d), F = t.byteLength / h;
            if (F % 1)
                throw "length wrong size for format: " + o.glEnumToString(e, m);
            if (i === j || i === O)
                if (a || f || c)
                    !a || f && c ? !f || a && c ? (x = ne(0, i, a, f, F / c),
                    a = x.width,
                    f = x.height) : (x = ne(0, i, a, c, F / f),
                    a = x.width,
                    c = x.height) : (x = ne(0, i, f, c, F / a),
                    f = x.width,
                    c = x.height);
                else {
                    var _ = Math.cbrt(F);
                    if (_ % 1 != 0)
                        throw "can't guess cube size of array of numElements: " + F;
                    a = _,
                    f = _,
                    c = _
                }
            else
                x = ne(0, i, a, f, F),
                a = x.width,
                f = x.height;
            if (ie(e),
            e.pixelStorei(g, n.unpackAlignment || 1),
            ue(e, n),
            i === A) {
                var S = F / 6 * (h / t.BYTES_PER_ELEMENT);
                be(0, n).forEach((function(r) {
                    var n = S * r.ndx
                      , o = t.subarray(n, n + S);
                    e.texImage2D(r.face, l, y, a, f, 0, m, d, o)
                }
                ))
            } else
                i === j || i === O ? e.texImage3D(i, l, y, a, f, c, 0, m, d, t) : e.texImage2D(i, l, y, a, f, 0, m, d, t);
            return {
                width: a,
                height: f,
                depth: c,
                type: d
            }
        }
        function Oe(e, r, t) {
            var n = t.target || E;
            e.bindTexture(n, r);
            var o = t.level || 0
              , u = t.internalFormat || t.format || p
              , i = J(u)
              , a = t.format || i.format
              , f = t.type || i.type;
            if (ue(e, t),
            n === A)
                for (var c = 0; c < 6; ++c)
                    e.texImage2D(_ + c, o, u, t.width, t.height, 0, a, f, null);
            else
                n === j || n === O ? e.texImage3D(n, o, u, t.width, t.height, t.depth, 0, a, f, null) : e.texImage2D(n, o, u, t.width, t.height, 0, a, f, null)
        }
        function _e(e, r, t) {
            t = t || pe,
            r = r || s.textureOptions;
            var n = e.createTexture()
              , o = r.target || E
              , u = r.width || 1
              , i = r.height || 1
              , a = r.internalFormat || p;
            e.bindTexture(o, n),
            o === A && (e.texParameteri(o, R, F),
            e.texParameteri(o, P, F));
            var f = r.src;
            if (f)
                if ("function" == typeof f && (f = f(e, r)),
                "string" == typeof f)
                    Fe(e, n, r, t);
                else if (v(f) || Array.isArray(f) && ("number" == typeof f[0] || Array.isArray(f[0]) || v(f[0]))) {
                    var c = je(e, n, f, r);
                    u = c.width,
                    i = c.height
                } else
                    Array.isArray(f) && ("string" == typeof f[0] || we(f[0])) ? o === A ? Ee(e, n, r, t) : Ae(e, n, r, t) : (me(e, n, f, r),
                    u = f.width,
                    i = f.height);
            else
                Oe(e, n, r);
            return ve(r) && se(e, n, r, u, i, a),
            fe(e, n, r),
            n
        }
        K[6406] = {
            u: 1
        },
        K[6409] = {
            u: 1
        },
        K[6410] = {
            u: 2
        },
        K[m] = {
            u: 3
        },
        K[p] = {
            u: 4
        },
        K[N] = {
            u: 1
        },
        K[36244] = {
            u: 1
        },
        K[X] = {
            u: 2
        },
        K[33320] = {
            u: 2
        },
        K[m] = {
            u: 3
        },
        K[36248] = {
            u: 3
        },
        K[p] = {
            u: 4
        },
        K[36249] = {
            u: 4
        },
        K[6402] = {
            u: 1
        },
        K[34041] = {
            u: 2
        }
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0;
        var o = {
            m4: !0,
            v3: !0,
            primitives: !0
        };
        r.primitives = r.v3 = r.m4 = void 0;
        var u = l(t(5));
        r.m4 = u;
        var i = l(t(2));
        r.v3 = i;
        var a = l(t(9));
        r.primitives = a;
        var f = t(10);
        function c() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = c();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u]
                }
            return t.default = e,
            r && r.set(e, t),
            t
        }
        Object.keys(f).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = f[e]))
        }
        ))
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0,
        r.create3DFVertices = R,
        r.createAugmentedTypedArray = b,
        r.createCubeVertices = _,
        r.createPlaneVertices = A,
        r.createSphereVertices = j,
        r.createTruncatedConeVertices = S,
        r.createXYQuadVertices = E,
        r.createCrescentVertices = P,
        r.createCylinderVertices = g,
        r.createTorusVertices = T,
        r.createDiscVertices = z,
        r.deindexVertices = function(e) {
            var r = e.indices
              , t = {}
              , n = r.length;
            return Object.keys(e).filter(m).forEach((function(o) {
                for (var u = e[o], i = u.numComponents, a = b(i, n, u.constructor), f = 0; f < n; ++f)
                    for (var c = r[f] * i, l = 0; l < i; ++l)
                        a.push(u[c + l]);
                t[o] = a
            }
            )),
            t
        }
        ,
        r.flattenNormals = function(e) {
            if (e.indices)
                throw new Error("can not flatten normals of indexed vertices. deindex them first");
            for (var r = e.normal, t = r.length, n = 0; n < t; n += 9) {
                var o = r[n + 0]
                  , u = r[n + 1]
                  , i = r[n + 2]
                  , a = r[n + 3]
                  , f = r[n + 4]
                  , c = r[n + 5]
                  , l = r[n + 6]
                  , s = r[n + 7]
                  , v = r[n + 8]
                  , y = o + a + l
                  , b = u + f + s
                  , m = i + c + v
                  , p = Math.sqrt(y * y + b * b + m * m);
                y /= p,
                b /= p,
                m /= p,
                r[n + 0] = y,
                r[n + 1] = b,
                r[n + 2] = m,
                r[n + 3] = y,
                r[n + 4] = b,
                r[n + 5] = m,
                r[n + 6] = y,
                r[n + 7] = b,
                r[n + 8] = m
            }
            return e
        }
        ,
        r.makeRandomVertexColors = function(e, r) {
            r = r || {};
            var t = e.position.numElements
              , n = b(4, t, Uint8Array)
              , o = r.rand || function(e, r) {
                return r < 3 ? (t = 256,
                Math.random() * t | 0) : 255;
                var t
            }
            ;
            if (e.color = n,
            e.indices)
                for (var u = 0; u < t; ++u)
                    n.push(o(u, 0), o(u, 1), o(u, 2), o(u, 3));
            else
                for (var i = r.vertsPerColor || 3, a = t / i, f = 0; f < a; ++f)
                    for (var c = [o(f, 0), o(f, 1), o(f, 2), o(f, 3)], l = 0; l < i; ++l)
                        n.push(c);
            return e
        }
        ,
        r.reorientDirections = w,
        r.reorientNormals = x,
        r.reorientPositions = h,
        r.reorientVertices = F,
        r.concatVertices = function(e) {
            for (var r, t = {}, n = function(n) {
                var o = e[n];
                Object.keys(o).forEach((function(e) {
                    t[e] || (t[e] = []),
                    r || "indices" === e || (r = e);
                    var n = o[e]
                      , u = v(n, e)
                      , i = s(n).length / u;
                    t[e].push(i)
                }
                ))
            }, o = 0; o < e.length; ++o)
                n(o);
            var u = t[r]
              , i = {};
            return Object.keys(t).forEach((function(r) {
                var t = function(r) {
                    for (var t, n = 0, o = 0; o < e.length; ++o) {
                        var u = e[o][r];
                        n += s(u).length,
                        t && !u.data || (t = u)
                    }
                    return {
                        length: n,
                        spec: t
                    }
                }(r)
                  , n = I(t.spec, t.length);
                !function(r, t, n) {
                    for (var o = 0, u = 0, i = 0; i < e.length; ++i) {
                        var a = e[i][r]
                          , f = s(a);
                        "indices" === r ? (W(f, n, u, o),
                        o += t[i]) : W(f, n, u),
                        u += f.length
                    }
                }(r, u, s(n)),
                i[r] = n
            }
            )),
            i
        }
        ,
        r.duplicateVertices = function(e) {
            var r = {};
            return Object.keys(e).forEach((function(t) {
                var n = e[t]
                  , o = s(n)
                  , u = I(n, o.length);
                W(o, s(u), 0),
                r[t] = u
            }
            )),
            r
        }
        ,
        r.createDiscBuffers = r.createDiscBufferInfo = r.createTorusBuffers = r.createTorusBufferInfo = r.createCylinderBuffers = r.createCylinderBufferInfo = r.createCrescentBuffers = r.createCrescentBufferInfo = r.createCresentVertices = r.createCresentBuffers = r.createCresentBufferInfo = r.createXYQuadBuffers = r.createXYQuadBufferInfo = r.createTruncatedConeBuffers = r.createTruncatedConeBufferInfo = r.createSphereBuffers = r.createSphereBufferInfo = r.createPlaneBuffers = r.createPlaneBufferInfo = r.createCubeBuffers = r.createCubeBufferInfo = r.create3DFBuffers = r.create3DFBufferInfo = void 0;
        var o = l(t(6))
          , u = l(t(0))
          , i = l(t(1))
          , a = l(t(5))
          , f = l(t(2));
        function c() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = c();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u]
                }
            return t.default = e,
            r && r.set(e, t),
            t
        }
        var s = o.getArray_
          , v = o.getNumComponents_;
        function y(e, r) {
            var t = 0;
            return e.push = function() {
                for (var r = 0; r < arguments.length; ++r) {
                    var n = arguments[r];
                    if (n instanceof Array || i.isArrayBuffer(n))
                        for (var o = 0; o < n.length; ++o)
                            e[t++] = n[o];
                    else
                        e[t++] = n
                }
            }
            ,
            e.reset = function(e) {
                t = e || 0
            }
            ,
            e.numComponents = r,
            Object.defineProperty(e, "numElements", {
                get: function() {
                    return this.length / this.numComponents | 0
                }
            }),
            e
        }
        function b(e, r, t) {
            return y(new (t || Float32Array)(e * r), e)
        }
        function m(e) {
            return "indices" !== e
        }
        function p(e, r, t) {
            for (var n = e.length, o = new Float32Array(3), u = 0; u < n; u += 3)
                t(r, [e[u], e[u + 1], e[u + 2]], o),
                e[u] = o[0],
                e[u + 1] = o[1],
                e[u + 2] = o[2]
        }
        function d(e, r, t) {
            t = t || f.create();
            var n = r[0]
              , o = r[1]
              , u = r[2];
            return t[0] = n * e[0] + o * e[1] + u * e[2],
            t[1] = n * e[4] + o * e[5] + u * e[6],
            t[2] = n * e[8] + o * e[9] + u * e[10],
            t
        }
        function w(e, r) {
            return p(e, r, a.transformDirection),
            e
        }
        function x(e, r) {
            return p(e, a.inverse(r), d),
            e
        }
        function h(e, r) {
            return p(e, r, a.transformPoint),
            e
        }
        function F(e, r) {
            return Object.keys(e).forEach((function(t) {
                var n = e[t];
                t.indexOf("pos") >= 0 ? h(n, r) : t.indexOf("tan") >= 0 || t.indexOf("binorm") >= 0 ? w(n, r) : t.indexOf("norm") >= 0 && x(n, r)
            }
            )),
            e
        }
        function E(e, r, t) {
            return e = e || 2,
            {
                position: {
                    numComponents: 2,
                    data: [(r = r || 0) + -1 * (e *= .5), (t = t || 0) + -1 * e, r + 1 * e, t + -1 * e, r + -1 * e, t + 1 * e, r + 1 * e, t + 1 * e]
                },
                normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
                indices: [0, 1, 2, 2, 1, 3]
            }
        }
        function A(e, r, t, n, o) {
            e = e || 1,
            r = r || 1,
            t = t || 1,
            n = n || 1,
            o = o || a.identity();
            for (var u = (t + 1) * (n + 1), i = b(3, u), f = b(3, u), c = b(2, u), l = 0; l <= n; l++)
                for (var s = 0; s <= t; s++) {
                    var v = s / t
                      , y = l / n;
                    i.push(e * v - .5 * e, 0, r * y - .5 * r),
                    f.push(0, 1, 0),
                    c.push(v, y)
                }
            for (var m = t + 1, p = b(3, t * n * 2, Uint16Array), d = 0; d < n; d++)
                for (var w = 0; w < t; w++)
                    p.push((d + 0) * m + w, (d + 1) * m + w, (d + 0) * m + w + 1),
                    p.push((d + 1) * m + w, (d + 1) * m + w + 1, (d + 0) * m + w + 1);
            return F({
                position: i,
                normal: f,
                texcoord: c,
                indices: p
            }, o)
        }
        function j(e, r, t, n, o, u, i) {
            if (r <= 0 || t <= 0)
                throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
            n = n || 0,
            u = u || 0;
            for (var a = (o = o || Math.PI) - n, f = (i = i || 2 * Math.PI) - u, c = (r + 1) * (t + 1), l = b(3, c), s = b(3, c), v = b(2, c), y = 0; y <= t; y++)
                for (var m = 0; m <= r; m++) {
                    var p = m / r
                      , d = y / t
                      , w = f * p + u
                      , x = a * d + n
                      , h = Math.sin(w)
                      , F = Math.cos(w)
                      , E = Math.sin(x)
                      , A = F * E
                      , j = Math.cos(x)
                      , O = h * E;
                    l.push(e * A, e * j, e * O),
                    s.push(A, j, O),
                    v.push(1 - p, d)
                }
            for (var _ = r + 1, S = b(3, r * t * 2, Uint16Array), M = 0; M < r; M++)
                for (var R = 0; R < t; R++)
                    S.push((R + 0) * _ + M, (R + 0) * _ + M + 1, (R + 1) * _ + M),
                    S.push((R + 1) * _ + M, (R + 0) * _ + M + 1, (R + 1) * _ + M + 1);
            return {
                position: l,
                normal: s,
                texcoord: v,
                indices: S
            }
        }
        var O = [[3, 7, 5, 1], [6, 2, 0, 4], [6, 7, 3, 2], [0, 1, 5, 4], [7, 6, 4, 5], [2, 3, 1, 0]];
        function _(e) {
            for (var r = (e = e || 1) / 2, t = [[-r, -r, -r], [+r, -r, -r], [-r, +r, -r], [+r, +r, -r], [-r, -r, +r], [+r, -r, +r], [-r, +r, +r], [+r, +r, +r]], n = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], o = [[1, 0], [0, 0], [0, 1], [1, 1]], u = b(3, 24), i = b(3, 24), a = b(2, 24), f = b(3, 12, Uint16Array), c = 0; c < 6; ++c) {
                for (var l = O[c], s = 0; s < 4; ++s) {
                    var v = t[l[s]]
                      , y = n[c]
                      , m = o[s];
                    u.push(v),
                    i.push(y),
                    a.push(m)
                }
                var p = 4 * c;
                f.push(p + 0, p + 1, p + 2),
                f.push(p + 0, p + 2, p + 3)
            }
            return {
                position: u,
                normal: i,
                texcoord: a,
                indices: f
            }
        }
        function S(e, r, t, n, o, u, i) {
            if (n < 3)
                throw new Error("radialSubdivisions must be 3 or greater");
            if (o < 1)
                throw new Error("verticalSubdivisions must be 1 or greater");
            for (var a = void 0 === u || u, f = void 0 === i || i, c = (a ? 2 : 0) + (f ? 2 : 0), l = (n + 1) * (o + 1 + c), s = b(3, l), v = b(3, l), y = b(2, l), m = b(3, n * (o + c / 2) * 2, Uint16Array), p = n + 1, d = Math.atan2(e - r, t), w = Math.cos(d), x = Math.sin(d), h = o + (f ? 2 : 0), F = a ? -2 : 0; F <= h; ++F) {
                var E = F / o
                  , A = t * E
                  , j = void 0;
                F < 0 ? (A = 0,
                E = 1,
                j = e) : F > o ? (A = t,
                E = 1,
                j = r) : j = e + F / o * (r - e),
                -2 !== F && F !== o + 2 || (j = 0,
                E = 0),
                A -= t / 2;
                for (var O = 0; O < p; ++O) {
                    var _ = Math.sin(O * Math.PI * 2 / n)
                      , S = Math.cos(O * Math.PI * 2 / n);
                    s.push(_ * j, A, S * j),
                    F < 0 ? v.push(0, -1, 0) : F > o ? v.push(0, 1, 0) : 0 === j ? v.push(0, 0, 0) : v.push(_ * w, x, S * w),
                    y.push(O / n, 1 - E)
                }
            }
            for (var M = 0; M < o + c; ++M)
                if (!(1 === M && a || M === o + c - 2 && f))
                    for (var R = 0; R < n; ++R)
                        m.push(p * (M + 0) + 0 + R, p * (M + 0) + 1 + R, p * (M + 1) + 1 + R),
                        m.push(p * (M + 0) + 0 + R, p * (M + 1) + 1 + R, p * (M + 1) + 0 + R);
            return {
                position: s,
                normal: v,
                texcoord: y,
                indices: m
            }
        }
        function M(e, r) {
            r = r || [];
            for (var t = [], n = 0; n < e.length; n += 4) {
                var o = e[n]
                  , u = e.slice(n + 1, n + 4);
                u.push.apply(u, r);
                for (var i = 0; i < o; ++i)
                    t.push.apply(t, u)
            }
            return t
        }
        function R() {
            var e = [0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, 30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, 100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0]
              , r = M([18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, -1, 0, 0])
              , t = M([18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200, 70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70, 210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160, 160, 220], [255])
              , n = e.length / 3
              , o = {
                position: b(3, n),
                texcoord: b(2, n),
                normal: b(3, n),
                color: b(4, n, Uint8Array),
                indices: b(3, n / 3, Uint16Array)
            };
            o.position.push(e),
            o.texcoord.push([.22, .19, .22, .79, .34, .19, .22, .79, .34, .79, .34, .19, .34, .19, .34, .31, .62, .19, .34, .31, .62, .31, .62, .19, .34, .43, .34, .55, .49, .43, .34, .55, .49, .55, .49, .43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0]),
            o.normal.push(r),
            o.color.push(t);
            for (var u = 0; u < n; ++u)
                o.indices.push(u);
            return o
        }
        function P(e, r, t, n, o, u, i) {
            if (o <= 0)
                throw new Error("subdivisionDown must be > 0");
            var a = (i = i || 1) - (u = u || 0)
              , c = 2 * (o + 1) * 4
              , l = b(3, c)
              , s = b(3, c)
              , v = b(2, c);
            function y(e, r, t) {
                return e + (r - e) * t
            }
            function m(r, t, i, c, b, m) {
                for (var p = 0; p <= o; p++) {
                    var d = t / 1
                      , w = p / o
                      , x = 2 * (d - .5)
                      , h = (u + w * a) * Math.PI
                      , F = Math.sin(h)
                      , E = Math.cos(h)
                      , A = y(e, r, F)
                      , j = x * n
                      , O = E * e
                      , _ = F * A;
                    l.push(j, O, _);
                    var S = f.add(f.multiply([0, F, E], i), c);
                    s.push(S),
                    v.push(d * b + m, w)
                }
            }
            for (var p = 0; p < 2; p++) {
                var d = 2 * (p / 1 - .5);
                m(r, p, [1, 1, 1], [0, 0, 0], 1, 0),
                m(r, p, [0, 0, 0], [d, 0, 0], 0, 0),
                m(t, p, [1, 1, 1], [0, 0, 0], 1, 0),
                m(t, p, [0, 0, 0], [d, 0, 0], 0, 1)
            }
            var w = b(3, 2 * o * 4, Uint16Array);
            function x(e, r) {
                for (var t = 0; t < o; ++t)
                    w.push(e + t + 0, e + t + 1, r + t + 0),
                    w.push(e + t + 1, r + t + 1, r + t + 0)
            }
            var h = o + 1;
            return x(0 * h, 4 * h),
            x(5 * h, 7 * h),
            x(6 * h, 2 * h),
            x(3 * h, 1 * h),
            {
                position: l,
                normal: s,
                texcoord: v,
                indices: w
            }
        }
        function g(e, r, t, n, o, u) {
            return S(e, e, r, t, n, o, u)
        }
        function T(e, r, t, n, o, u) {
            if (t < 3)
                throw new Error("radialSubdivisions must be 3 or greater");
            if (n < 3)
                throw new Error("verticalSubdivisions must be 3 or greater");
            o = o || 0;
            for (var i = (u = u || 2 * Math.PI) - o, a = t + 1, f = n + 1, c = a * f, l = b(3, c), s = b(3, c), v = b(2, c), y = b(3, t * n * 2, Uint16Array), m = 0; m < f; ++m)
                for (var p = m / n, d = p * Math.PI * 2, w = Math.sin(d), x = e + w * r, h = Math.cos(d), F = h * r, E = 0; E < a; ++E) {
                    var A = E / t
                      , j = o + A * i
                      , O = Math.sin(j)
                      , _ = Math.cos(j)
                      , S = O * x
                      , M = _ * x
                      , R = O * w
                      , P = _ * w;
                    l.push(S, F, M),
                    s.push(R, h, P),
                    v.push(A, 1 - p)
                }
            for (var g = 0; g < n; ++g)
                for (var T = 0; T < t; ++T) {
                    var z = 1 + T
                      , U = 1 + g;
                    y.push(a * g + T, a * U + T, a * g + z),
                    y.push(a * U + T, a * U + z, a * g + z)
                }
            return {
                position: l,
                normal: s,
                texcoord: v,
                indices: y
            }
        }
        function z(e, r, t, n, o) {
            if (r < 3)
                throw new Error("divisions must be at least 3");
            o = o || 1,
            n = n || 0;
            for (var u = (r + 1) * ((t = t || 1) + 1), i = b(3, u), a = b(3, u), f = b(2, u), c = b(3, t * r * 2, Uint16Array), l = 0, s = e - n, v = r + 1, y = 0; y <= t; ++y) {
                for (var m = n + s * Math.pow(y / t, o), p = 0; p <= r; ++p) {
                    var d = 2 * Math.PI * p / r
                      , w = m * Math.cos(d)
                      , x = m * Math.sin(d);
                    if (i.push(w, 0, x),
                    a.push(0, 1, 0),
                    f.push(1 - p / r, y / t),
                    y > 0 && p !== r) {
                        var h = l + (p + 1)
                          , F = l + p
                          , E = l + p - v
                          , A = l + (p + 1) - v;
                        c.push(h, F, E),
                        c.push(h, E, A)
                    }
                }
                l += r + 1
            }
            return {
                position: i,
                normal: a,
                texcoord: f,
                indices: c
            }
        }
        function U(e) {
            return function(r) {
                var t = e.apply(this, Array.prototype.slice.call(arguments, 1));
                return o.createBuffersFromArrays(r, t)
            }
        }
        function C(e) {
            return function(r) {
                var t = e.apply(null, Array.prototype.slice.call(arguments, 1));
                return o.createBufferInfoFromArrays(r, t)
            }
        }
        var k = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];
        function W(e, r, t, n) {
            n = n || 0;
            for (var o = e.length, u = 0; u < o; ++u)
                r[t + u] = e[u] + n
        }
        function I(e, r) {
            var t = s(e)
              , n = new t.constructor(r)
              , o = n;
            return t.numComponents && t.numElements && y(n, t.numComponents),
            e.data && (o = {
                data: n
            },
            u.copyNamedProperties(k, e, o)),
            o
        }
        var B = C(R);
        r.create3DFBufferInfo = B;
        var L = U(R);
        r.create3DFBuffers = L;
        var G = C(_);
        r.createCubeBufferInfo = G;
        var X = U(_);
        r.createCubeBuffers = X;
        var D = C(A);
        r.createPlaneBufferInfo = D;
        var N = U(A);
        r.createPlaneBuffers = N;
        var H = C(j);
        r.createSphereBufferInfo = H;
        var q = U(j);
        r.createSphereBuffers = q;
        var V = C(S);
        r.createTruncatedConeBufferInfo = V;
        var Y = U(S);
        r.createTruncatedConeBuffers = Y;
        var K = C(E);
        r.createXYQuadBufferInfo = K;
        var $ = U(E);
        r.createXYQuadBuffers = $;
        var Z = C(P);
        r.createCrescentBufferInfo = Z;
        var J = U(P);
        r.createCrescentBuffers = J;
        var Q = C(g);
        r.createCylinderBufferInfo = Q;
        var ee = U(g);
        r.createCylinderBuffers = ee;
        var re = C(T);
        r.createTorusBufferInfo = re;
        var te = U(T);
        r.createTorusBuffers = te;
        var ne = C(z);
        r.createDiscBufferInfo = ne;
        var oe = U(z);
        r.createDiscBuffers = oe;
        var ue = Z;
        r.createCresentBufferInfo = ue;
        var ie = J;
        r.createCresentBuffers = ie;
        var ae = P;
        r.createCresentVertices = ae
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0;
        var o = {
            addExtensionsToContext: !0,
            getContext: !0,
            getWebGLContext: !0,
            resizeCanvasToDisplaySize: !0,
            setDefaults: !0,
            attributes: !0,
            textures: !0,
            utils: !0,
            draw: !0,
            framebuffers: !0,
            programs: !0,
            typedarrays: !0,
            vertexArrays: !0
        };
        r.addExtensionsToContext = h,
        r.getContext = function(e, r) {
            return function(e, r) {
                for (var t = ["webgl2", "webgl", "experimental-webgl"], n = null, o = 0; o < t.length; ++o)
                    if (n = e.getContext(t[o], r)) {
                        p.addExtensionsToContext && h(n);
                        break
                    }
                return n
            }(e, r)
        }
        ,
        r.getWebGLContext = function(e, r) {
            return function(e, r) {
                for (var t = ["webgl", "experimental-webgl"], n = null, o = 0; o < t.length; ++o)
                    if (n = e.getContext(t[o], r)) {
                        p.addExtensionsToContext && h(n);
                        break
                    }
                return n
            }(e, r)
        }
        ,
        r.resizeCanvasToDisplaySize = function(e, r) {
            r = r || 1,
            r = Math.max(0, r);
            var t = e.clientWidth * r | 0
              , n = e.clientHeight * r | 0;
            if (e.width !== t || e.height !== n)
                return e.width = t,
                e.height = n,
                !0;
            return !1
        }
        ,
        r.setDefaults = function(e) {
            a.copyExistingProperties(e, p),
            u.setAttributeDefaults_(e),
            i.setTextureDefaults_(e)
        }
        ,
        r.vertexArrays = r.typedarrays = r.programs = r.framebuffers = r.draw = r.utils = r.textures = r.attributes = void 0;
        var u = m(t(6));
        r.attributes = u,
        Object.keys(u).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = u[e]))
        }
        ));
        var i = m(t(7));
        r.textures = i,
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = i[e]))
        }
        ));
        var a = m(t(0))
          , f = m(t(3));
        r.utils = f,
        Object.keys(f).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = f[e]))
        }
        ));
        var c = m(t(11));
        r.draw = c,
        Object.keys(c).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = c[e]))
        }
        ));
        var l = m(t(12));
        r.framebuffers = l,
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = l[e]))
        }
        ));
        var s = m(t(4));
        r.programs = s,
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = s[e]))
        }
        ));
        var v = m(t(1));
        r.typedarrays = v,
        Object.keys(v).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = v[e]))
        }
        ));
        var y = m(t(13));
        function b() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return b = function() {
                return e
            }
            ,
            e
        }
        function m(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = b();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u]
                }
            return t.default = e,
            r && r.set(e, t),
            t
        }
        r.vertexArrays = y,
        Object.keys(y).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || (r[e] = y[e]))
        }
        ));
        var p = {
            addExtensionsToContext: !0
        };
        var d = /^(.*?)_/;
        function w(e, r) {
            f.glEnumToString(e, 0);
            var t = e.getExtension(r);
            if (t) {
                var n = {}
                  , o = d.exec(r)[1]
                  , u = "_" + o;
                for (var i in t) {
                    var c = t[i]
                      , l = "function" == typeof c
                      , s = l ? o : u
                      , v = i;
                    i.endsWith(s) && (v = i.substring(0, i.length - s.length)),
                    void 0 !== e[v] ? l || e[v] === c || a.warn(v, e[v], c, i) : l ? e[v] = function(e) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }(c) : (e[v] = c,
                    n[v] = c)
                }
                n.constructor = {
                    name: t.constructor.name
                },
                f.glEnumToString(n, 0)
            }
            return t
        }
        var x = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_float", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_disjoint_timer_query_webgl2", "EXT_frag_depth", "EXT_sRGB", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_atc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_depth_texture", "WEBGL_draw_buffers"];
        function h(e) {
            for (var r = 0; r < x.length; ++r)
                w(e, x[r])
        }
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0,
        r.drawBufferInfo = i,
        r.drawObjectList = function(e, r) {
            var t = null
              , n = null;
            r.forEach((function(r) {
                if (!1 !== r.active) {
                    var u = r.programInfo
                      , a = r.vertexArrayInfo || r.bufferInfo
                      , f = !1
                      , c = void 0 === r.type ? 4 : r.type;
                    u !== t && (t = u,
                    e.useProgram(u.program),
                    f = !0),
                    (f || a !== n) && (n && n.vertexArrayObject && !a.vertexArrayObject && e.bindVertexArray(null),
                    n = a,
                    o.setBuffersAndAttributes(e, u, a)),
                    o.setUniforms(u, r.uniforms),
                    i(e, a, c, r.count, r.offset, r.instanceCount)
                }
            }
            )),
            n && n.vertexArrayObject && e.bindVertexArray(null)
        }
        ;
        var o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = u();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, i, a) : t[i] = e[i]
                }
            t.default = e,
            r && r.set(e, t);
            return t
        }(t(4));
        function u() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function i(e, r, t, n, o, u) {
            t = void 0 === t ? 4 : t;
            var i = r.indices
              , a = r.elementType
              , f = void 0 === n ? r.numElements : n;
            o = void 0 === o ? 0 : o,
            a || i ? void 0 !== u ? e.drawElementsInstanced(t, f, void 0 === a ? 5123 : r.elementType, o, u) : e.drawElements(t, f, void 0 === a ? 5123 : r.elementType, o) : void 0 !== u ? e.drawArraysInstanced(t, o, f, u) : e.drawArrays(t, o, f)
        }
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0,
        r.bindFramebufferInfo = function(e, r, t) {
            t = t || 36160,
            r ? (e.bindFramebuffer(t, r.framebuffer),
            e.viewport(0, 0, r.width, r.height)) : (e.bindFramebuffer(t, null),
            e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight))
        }
        ,
        r.createFramebufferInfo = function(e, r, t, n) {
            var i = 36160
              , a = e.createFramebuffer();
            e.bindFramebuffer(i, a),
            t = t || e.drawingBufferWidth,
            n = n || e.drawingBufferHeight;
            var c = []
              , s = {
                framebuffer: a,
                attachments: [],
                width: t,
                height: n
            };
            (r = r || m).forEach((function(r, a) {
                var v = r.attachment
                  , m = r.samples
                  , w = r.format
                  , x = r.attachmentPoint || function(e, r) {
                    return p[e] || p[r]
                }(w, r.internalFormat);
                if (x || (x = l + a),
                function(e) {
                    return e >= l && e < 36096
                }(x) && c.push(x),
                !v)
                    if (void 0 !== m || function(e) {
                        return d[e]
                    }(w))
                        v = e.createRenderbuffer(),
                        e.bindRenderbuffer(f, v),
                        m > 1 ? e.renderbufferStorageMultisample(f, m, w, t, n) : e.renderbufferStorage(f, w, t, n);
                    else {
                        var h = Object.assign({}, r);
                        h.width = t,
                        h.height = n,
                        void 0 === h.auto && (h.auto = !1,
                        h.min = h.min || h.minMag || b,
                        h.mag = h.mag || h.minMag || b,
                        h.wrapS = h.wrapS || h.wrap || y,
                        h.wrapT = h.wrapT || h.wrap || y),
                        v = o.createTexture(e, h)
                    }
                if (u.isRenderbuffer(e, v))
                    e.framebufferRenderbuffer(i, x, f, v);
                else {
                    if (!u.isTexture(e, v))
                        throw new Error("unknown attachment type");
                    void 0 !== r.layer ? e.framebufferTextureLayer(i, x, v, r.level || 0, r.layer) : e.framebufferTexture2D(i, x, r.target || 3553, v, r.level || 0)
                }
                s.attachments.push(v)
            }
            )),
            e.drawBuffers && e.drawBuffers(c);
            return s
        }
        ,
        r.resizeFramebufferInfo = function(e, r, t, n, i) {
            n = n || e.drawingBufferWidth,
            i = i || e.drawingBufferHeight,
            r.width = n,
            r.height = i,
            (t = t || m).forEach((function(t, a) {
                var c = r.attachments[a]
                  , l = t.format
                  , s = t.samples;
                if (void 0 !== s || u.isRenderbuffer(e, c))
                    e.bindRenderbuffer(f, c),
                    s > 1 ? e.renderbufferStorageMultisample(f, s, l, n, i) : e.renderbufferStorage(f, l, n, i);
                else {
                    if (!u.isTexture(e, c))
                        throw new Error("unknown attachment type");
                    o.resizeTexture(e, c, t, n, i)
                }
            }
            ))
        }
        ;
        var o = a(t(7))
          , u = a(t(0));
        function i() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }
            ,
            e
        }
        function a(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = i();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = e[u]
                }
            return t.default = e,
            r && r.set(e, t),
            t
        }
        var f = 36161
          , c = 34041
          , l = 36064
          , s = 36096
          , v = 33306
          , y = 33071
          , b = 9729
          , m = [{
            format: 6408,
            type: 5121,
            min: b,
            wrap: y
        }, {
            format: c
        }]
          , p = {};
        p[34041] = v,
        p[6401] = 36128,
        p[36168] = 36128,
        p[6402] = s,
        p[33189] = s,
        p[33190] = s,
        p[36012] = s,
        p[35056] = v,
        p[36013] = v;
        var d = {};
        d[32854] = !0,
        d[32855] = !0,
        d[36194] = !0,
        d[34041] = !0,
        d[33189] = !0,
        d[6401] = !0,
        d[36168] = !0
    }
    , function(e, r, t) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        r.__esModule = !0,
        r.createVertexArrayInfo = function(e, r, t) {
            var n = e.createVertexArray();
            e.bindVertexArray(n),
            r.length || (r = [r]);
            return r.forEach((function(r) {
                o.setBuffersAndAttributes(e, r, t)
            }
            )),
            e.bindVertexArray(null),
            {
                numElements: t.numElements,
                elementType: t.elementType,
                vertexArrayObject: n
            }
        }
        ,
        r.createVAOAndSetAttributes = i,
        r.createVAOFromBufferInfo = function(e, r, t) {
            return i(e, r.attribSetters || r, t.attribs, t.indices)
        }
        ;
        var o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== n(e) && "function" != typeof e)
                return {
                    default: e
                };
            var r = u();
            if (r && r.has(e))
                return r.get(e);
            var t = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, i, a) : t[i] = e[i]
                }
            t.default = e,
            r && r.set(e, t);
            return t
        }(t(4));
        function u() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function i(e, r, t, n) {
            var u = e.createVertexArray();
            return e.bindVertexArray(u),
            o.setAttributes(r, t),
            n && e.bindBuffer(34963, n),
            e.bindVertexArray(null),
            u
        }
    }
    ])
}
);
let twgl = r();
export {twgl}
