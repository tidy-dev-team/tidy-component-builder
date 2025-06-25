(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function d(n2, l3) {
    for (var u3 in l3) n2[u3] = l3[u3];
    return n2;
  }
  function g(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l3, u3, t3) {
    var i3, r3, o3, e3 = {};
    for (o3 in u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : e3[o3] = u3[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return m(l3, e3, i3, r3, null);
  }
  function m(n2, t3, i3, r3, o3) {
    var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function b() {
    return { current: null };
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function S(n2, l3) {
    if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) return u3.__e;
    return "function" == typeof n2.type ? S(n2) : null;
  }
  function C(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
  }
  function $() {
    for (var n2, u3, t3, r3, o3, f3, c3, s3 = 1; i.length; ) i.length > s3 && i.sort(e), n2 = i.shift(), s3 = i.length, n2.__d && (t3 = void 0, o3 = (r3 = (u3 = n2).__v).__e, f3 = [], c3 = [], u3.__P && ((t3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(t3), O(u3.__P, t3, r3, u3.__n, u3.__P.namespaceURI, 32 & r3.__u ? [o3] : null, f3, null == o3 ? S(r3) : o3, !!(32 & r3.__u), c3), t3.__v = r3.__v, t3.__.__k[t3.__i] = t3, z(f3, t3, c3), t3.__e != o3 && C(t3)));
    $.__r = 0;
  }
  function I(n2, l3, u3, t3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, y3, w4, d3, g4, _3 = t3 && t3.__k || v, m3 = l3.length;
    for (f3 = P(u3, l3, _3, f3, m3), a3 = 0; a3 < m3; a3++) null != (y3 = u3.__k[a3]) && (h3 = -1 == y3.__i ? p : _3[y3.__i] || p, y3.__i = a3, g4 = O(n2, y3, h3, i3, r3, o3, e3, f3, c3, s3), w4 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && q(h3.ref, null, y3), s3.push(y3.ref, y3.__c || w4, y3)), null == d3 && null != w4 && (d3 = w4), 4 & y3.__u || h3.__k === y3.__k ? f3 = A(y3, f3, n2) : "function" == typeof y3.type && void 0 !== g4 ? f3 = g4 : w4 && (f3 = w4.nextSibling), y3.__u &= -7);
    return u3.__e = d3, f3;
  }
  function P(n2, l3, u3, t3, i3) {
    var r3, o3, e3, f3, c3, s3 = u3.length, a3 = s3, h3 = 0;
    for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f3 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : w(o3) ? m(k, { children: o3 }, null, null, null) : null == o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = L(o3, u3, f3, a3)) && (a3--, (e3 = u3[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
    if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u3[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = S(e3)), B(e3, e3));
    return t3;
  }
  function A(n2, l3, u3) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++) t3[i3] && (t3[i3].__ = n2, l3 = A(t3[i3], l3, u3));
      return l3;
    }
    n2.__e != l3 && (l3 && n2.type && !u3.contains(l3) && (l3 = S(n2)), u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function H(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (w(n2) ? n2.some(function(n3) {
      H(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function L(n2, l3, u3, t3) {
    var i3, r3, o3 = n2.key, e3 = n2.type, f3 = l3[u3];
    if (null === f3 && null == n2.key || f3 && o3 == f3.key && e3 == f3.type && 0 == (2 & f3.__u)) return u3;
    if (t3 > (null != f3 && 0 == (2 & f3.__u) ? 1 : 0)) for (i3 = u3 - 1, r3 = u3 + 1; i3 >= 0 || r3 < l3.length; ) {
      if (i3 >= 0) {
        if ((f3 = l3[i3]) && 0 == (2 & f3.__u) && o3 == f3.key && e3 == f3.type) return i3;
        i3--;
      }
      if (r3 < l3.length) {
        if ((f3 = l3[r3]) && 0 == (2 & f3.__u) && o3 == f3.key && e3 == f3.type) return r3;
        r3++;
      }
    }
    return -1;
  }
  function T(n2, l3, u3) {
    "-" == l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || y.test(l3) ? u3 : u3 + "px";
  }
  function j(n2, l3, u3, t3, i3) {
    var r3, o3;
    n: if ("style" == l3) if ("string" == typeof u3) n2.style.cssText = u3;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u3 && l3 in u3 || T(n2.style, l3, "");
      if (u3) for (l3 in u3) t3 && u3[l3] == t3[l3] || T(n2.style, l3, u3[l3]);
    }
    else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u3 ? "" : u3;
        break n;
      } catch (n3) {
      }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
    }
  }
  function F(n2) {
    return function(u3) {
      if (this.l) {
        var t3 = this.l[u3.type + n2];
        if (null == u3.t) u3.t = c++;
        else if (u3.t < t3.u) return;
        return t3(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n2, u3, t3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, p3, v3, y3, _3, m3, b2, S2, C4, M3, $3, P4, A4, H3, L3, T4, j4 = u3.type;
    if (null != u3.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n: if ("function" == typeof j4) try {
      if (b2 = u3.props, S2 = "prototype" in j4 && j4.prototype.render, C4 = (a3 = j4.contextType) && i3[a3.__c], M3 = a3 ? C4 ? C4.props.value : a3.__ : i3, t3.__c ? m3 = (h3 = u3.__c = t3.__c).__ = h3.__E : (S2 ? u3.__c = h3 = new j4(b2, M3) : (u3.__c = h3 = new x(b2, M3), h3.constructor = j4, h3.render = D), C4 && C4.sub(h3), h3.props = b2, h3.state || (h3.state = {}), h3.context = M3, h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, j4.getDerivedStateFromProps(b2, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u3, p3) S2 && null == j4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (S2 && null == j4.getDerivedStateFromProps && b2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b2, M3), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b2, h3.__s, M3) || u3.__v == t3.__v) {
          for (u3.__v != t3.__v && (h3.props = b2, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), $3 = 0; $3 < h3._sb.length; $3++) h3.__h.push(h3._sb[$3]);
          h3._sb = [], h3.__h.length && e3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(b2, h3.__s, M3), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v3, y3, _3);
        });
      }
      if (h3.context = M3, h3.props = b2, h3.__P = n2, h3.__e = false, P4 = l.__r, A4 = 0, S2) {
        for (h3.state = h3.__s, h3.__d = false, P4 && P4(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++) h3.__h.push(h3._sb[H3]);
        h3._sb = [];
      } else do {
        h3.__d = false, P4 && P4(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++A4 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(v3, y3)), L3 = a3, null != a3 && a3.type === k && null == a3.key && (L3 = N(a3.props.children)), f3 = I(n2, w(L3) ? L3 : [L3], u3, t3, i3, r3, o3, e3, f3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u3.__v = null, c3 || null != o3) if (n3.then) {
        for (u3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
        o3[o3.indexOf(f3)] = null, u3.__e = f3;
      } else for (T4 = o3.length; T4--; ) g(o3[T4]);
      else u3.__e = t3.__e, u3.__k = t3.__k;
      l.__e(n3, u3, t3);
    }
    else null == o3 && u3.__v == t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : f3 = u3.__e = V(t3.__e, u3, t3, i3, r3, o3, e3, c3, s3);
    return (a3 = l.diffed) && a3(u3), 128 & u3.__u ? void 0 : f3;
  }
  function z(n2, u3, t3) {
    for (var i3 = 0; i3 < t3.length; i3++) q(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w(n2) ? n2.map(N) : d({}, n2);
  }
  function V(u3, t3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, v3, y3, d3, _3, m3, b2 = i3.props, k4 = t3.props, x4 = t3.type;
    if ("svg" == x4 ? o3 = "http://www.w3.org/2000/svg" : "math" == x4 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a3 = 0; a3 < e3.length; a3++) if ((d3 = e3[a3]) && "setAttribute" in d3 == !!x4 && (x4 ? d3.localName == x4 : 3 == d3.nodeType)) {
        u3 = d3, e3[a3] = null;
        break;
      }
    }
    if (null == u3) {
      if (null == x4) return document.createTextNode(k4);
      u3 = document.createElementNS(o3, x4, k4.is && k4), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
    }
    if (null == x4) b2 === k4 || c3 && u3.data == k4 || (u3.data = k4);
    else {
      if (e3 = e3 && n.call(u3.childNodes), b2 = i3.props || p, !c3 && null != e3) for (b2 = {}, a3 = 0; a3 < u3.attributes.length; a3++) b2[(d3 = u3.attributes[a3]).name] = d3.value;
      for (a3 in b2) if (d3 = b2[a3], "children" == a3) ;
      else if ("dangerouslySetInnerHTML" == a3) v3 = d3;
      else if (!(a3 in k4)) {
        if ("value" == a3 && "defaultValue" in k4 || "checked" == a3 && "defaultChecked" in k4) continue;
        j(u3, a3, null, d3, o3);
      }
      for (a3 in k4) d3 = k4[a3], "children" == a3 ? y3 = d3 : "dangerouslySetInnerHTML" == a3 ? h3 = d3 : "value" == a3 ? _3 = d3 : "checked" == a3 ? m3 = d3 : c3 && "function" != typeof d3 || b2[a3] === d3 || j(u3, a3, d3, b2[a3], o3);
      if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t3.__k = [];
      else if (v3 && (u3.innerHTML = ""), I("template" == t3.type ? u3.content : u3, w(y3) ? y3 : [y3], t3, i3, r3, "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : o3, e3, f3, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
      c3 || (a3 = "value", "progress" == x4 && null == _3 ? u3.removeAttribute("value") : null != _3 && (_3 !== u3[a3] || "progress" == x4 && !_3 || "option" == x4 && _3 != b2[a3]) && j(u3, a3, _3, b2[a3], o3), a3 = "checked", null != m3 && m3 != u3[a3] && j(u3, a3, m3, b2[a3], o3));
    }
    return u3;
  }
  function q(n2, u3, t3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
      } else n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function B(n2, u3, t3) {
    var i3, r3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || q(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && B(i3[r3], u3, t3 || "function" != typeof n2.type);
    t3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function D(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function E(u3, t3, i3) {
    var r3, o3, e3, f3;
    t3 == document && (t3 = document.documentElement), l.__ && l.__(u3, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f3 = [], O(t3, u3 = (!r3 && i3 || t3).__k = _(k, null, [u3]), o3 || p, p, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f3), z(e3, u3, f3);
  }
  function G(n2, l3) {
    E(n2, l3, G);
  }
  function J(l3, u3, t3) {
    var i3, r3, o3, e3, f3 = d({}, l3.props);
    for (o3 in l3.type && l3.type.defaultProps && (e3 = l3.type.defaultProps), u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : f3[o3] = void 0 === u3[o3] && null != e3 ? e3[o3] : u3[o3];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), m(l3.type, f3, i3 || l3.key, r3 || l3.ref, null);
  }
  function K(n2) {
    function l3(n3) {
      var u3, t3;
      return this.getChildContext || (u3 = /* @__PURE__ */ new Set(), (t3 = {})[l3.__c] = this, this.getChildContext = function() {
        return t3;
      }, this.componentWillUnmount = function() {
        u3 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value != n4.value && u3.forEach(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        u3.add(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u3 && u3.delete(n4), l4 && l4.call(n4);
        };
      }), n3.children;
    }
    return l3.__c = "__cC" + h++, l3.__ = n2, l3.Provider = l3.__l = (l3.Consumer = function(n3, l4) {
      return n3.children(l4);
    }).contextType = l3, l3;
  }
  var n, l, u, t, i, r, o, e, f, c, s, a, h, p, v, y, w;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      p = {};
      v = [];
      y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      w = Array.isArray;
      n = v.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
          if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
        } catch (l4) {
          n2 = l4;
        }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && null == n2.constructor;
      }, x.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
      }, x.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
      }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function p2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
  }
  function d2(n2) {
    return o2 = 1, h2(D2, n2);
  }
  function h2(n2, u3, i3) {
    var o3 = p2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.__f)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i4 = o3.__c.props !== n3;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), c3 && c3.call(this, n3, t3, r3) || i4;
      };
      r2.__f = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function y2(n2, u3) {
    var i3 = p2(t2++, 3);
    !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.u = u3, r2.__H.__h.push(i3));
  }
  function _2(n2, u3) {
    var i3 = p2(t2++, 4);
    !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.u = u3, r2.__h.push(i3));
  }
  function A2(n2) {
    return o2 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function F2(n2, t3, r3) {
    o2 = 6, _2(function() {
      if ("function" == typeof n2) {
        var r4 = n2(t3());
        return function() {
          n2(null), r4 && "function" == typeof r4 && r4();
        };
      }
      if (n2) return n2.current = t3(), function() {
        return n2.current = null;
      };
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function T2(n2, r3) {
    var u3 = p2(t2++, 7);
    return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
  }
  function q2(n2, t3) {
    return o2 = 8, T2(function() {
      return n2;
    }, t3);
  }
  function x2(n2) {
    var u3 = r2.context[n2.__c], i3 = p2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function P2(n2, t3) {
    c2.useDebugValue && c2.useDebugValue(t3 ? t3(n2) : n2);
  }
  function g2() {
    var n2 = p2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; ) u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 35);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m2 = c2.unmount;
      s2 = c2.__;
      c2.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, c2.__ = function(n2, t3) {
        n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
      }, c2.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
        })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n2) {
        v2 && v2(n2);
        var t3 = n2.__c;
        t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
          n3.u && (n3.__H = n3.u), n3.u = void 0;
        })), u2 = r2 = null;
      }, c2.__c = function(n2, t3) {
        t3.some(function(n3) {
          try {
            n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
              return !n4.__ || B2(n4);
            });
          } catch (r3) {
            t3.some(function(n4) {
              n4.__h && (n4.__h = []);
            }), t3 = [], c2.__e(r3, n3.__v);
          }
        }), l2 && l2(n2, t3);
      }, c2.unmount = function(n2) {
        m2 && m2(n2);
        var t3, r3 = n2.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
          try {
            z2(n3);
          } catch (n4) {
            t3 = n4;
          }
        }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3) n2[e3] = t3[e3];
    return n2;
  }
  function E2(n2, t3) {
    for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
    for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
    return false;
  }
  function C3(n2, t3) {
    var e3 = t3(), r3 = d2({ t: { __: e3, u: t3 } }), u3 = r3[0].t, o3 = r3[1];
    return _2(function() {
      u3.__ = e3, u3.u = t3, x3(u3) && o3({ t: u3 });
    }, [n2, e3, t3]), y2(function() {
      return x3(u3) && o3({ t: u3 }), n2(function() {
        x3(u3) && o3({ t: u3 });
      });
    }, [n2]), e3;
  }
  function x3(n2) {
    var t3, e3, r3 = n2.u, u3 = n2.__;
    try {
      var o3 = r3();
      return !((t3 = u3) === (e3 = o3) && (0 !== t3 || 1 / t3 == 1 / e3) || t3 != t3 && e3 != e3);
    } catch (n3) {
      return true;
    }
  }
  function R(n2) {
    n2();
  }
  function w3(n2) {
    return n2;
  }
  function k3() {
    return [false, R];
  }
  function N2(n2, t3) {
    this.props = n2, this.context = t3;
  }
  function M2(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : E2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, _(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  function D3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = A3, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function V2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c.__e = true, n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return V2(n3, t3, e3);
    })), n2;
  }
  function W(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return W(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function P3() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function j3(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function z3(n2) {
    var e3, r3, u3;
    function o3(o4) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3) throw u3;
      if (!r3) throw e3;
      return _(r3, o4);
    }
    return o3.displayName = "Lazy", o3.__f = true, o3;
  }
  function B3() {
    this.i = null, this.l = null;
  }
  function Z(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function Y(n2) {
    var e3 = this, r3 = n2.h;
    if (e3.componentWillUnmount = function() {
      E(null, e3.v), e3.v = null, e3.h = null;
    }, e3.h && e3.h !== r3 && e3.componentWillUnmount(), !e3.v) {
      for (var u3 = e3.__v; null !== u3 && !u3.__m && null !== u3.__; ) u3 = u3.__;
      e3.h = r3, e3.v = { nodeType: 1, parentNode: r3, childNodes: [], __k: { __m: u3.__m }, contains: function() {
        return true;
      }, insertBefore: function(n3, t3) {
        this.childNodes.push(n3), e3.h.insertBefore(n3, t3);
      }, removeChild: function(n3) {
        this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.h.removeChild(n3);
      } };
    }
    E(_(Z, { context: e3.context }, n2.__v), e3.v);
  }
  function $2(n2, e3) {
    var r3 = _(Y, { __v: n2, h: e3 });
    return r3.containerInfo = e3, r3;
  }
  function nn(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), E(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function tn(n2, t3, e3) {
    return G(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function rn() {
  }
  function un() {
    return this.cancelBubble;
  }
  function on() {
    return this.defaultPrevented;
  }
  function dn(n2) {
    return _.bind(null, n2);
  }
  function mn(n2) {
    return !!n2 && n2.$$typeof === q3;
  }
  function pn(n2) {
    return mn(n2) && n2.type === k;
  }
  function yn(n2) {
    return !!n2 && !!n2.displayName && ("string" == typeof n2.displayName || n2.displayName instanceof String) && n2.displayName.startsWith("Memo(");
  }
  function _n(n2) {
    return mn(n2) ? J.apply(null, arguments) : n2;
  }
  function bn(n2) {
    return !!n2.__k && (E(null, n2), true);
  }
  function Sn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  var I2, T3, A3, L2, O2, F3, U, H2, q3, G2, J2, K2, Q, X, en, ln, cn, fn, an, sn, hn, gn, En, Cn, xn, Rn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      I2 = _2;
      (N2.prototype = new x()).isPureReactComponent = true, N2.prototype.shouldComponentUpdate = function(n2, t3) {
        return E2(this.props, n2) || E2(this.state, t3);
      };
      T3 = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T3 && T3(n2);
      };
      A3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      L2 = function(n2, t3) {
        return null == n2 ? null : H(H(n2).map(t3));
      };
      O2 = { map: L2, forEach: L2, count: function(n2) {
        return n2 ? H(n2).length : 0;
      }, only: function(n2) {
        var t3 = H(n2);
        if (1 !== t3.length) throw "Children.only";
        return t3[0];
      }, toArray: H };
      F3 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; ) if ((u3 = o3.__c) && u3.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        F3(n2, t3, e3, r3);
      };
      U = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), U && U(n2);
      }, (P3.prototype = new x()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.o && (r3.o = []), r3.o.push(e3);
        var u3 = j3(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = W(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.o.pop(); ) t4.forceUpdate();
          }
        };
        r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, P3.prototype.componentWillUnmount = function() {
        this.o = [];
      }, P3.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
            this.__v.__k[0] = V2(this.__b, r3, o3.__O = o3.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && _(k, null, n2.fallback);
        return i3 && (i3.__u &= -33), [_(k, null, e3.__a ? null : n2.children), i3];
      };
      H2 = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.l.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e3 = n2.i; e3; ) {
          for (; e3.length > 3; ) e3.pop()();
          if (e3[1] < e3[0]) break;
          n2.i = e3 = e3[2];
        }
      };
      (B3.prototype = new x()).__a = function(n2) {
        var t3 = this, e3 = j3(t3.__v), r3 = t3.l.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), H2(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, B3.prototype.render = function(n2) {
        this.i = null, this.l = /* @__PURE__ */ new Map();
        var t3 = H(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; ) this.l.set(t3[e3], this.i = [1, 0, this.i]);
        return n2.children;
      }, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
        var n2 = this;
        this.l.forEach(function(t3, e3) {
          H2(n2, e3, t3);
        });
      };
      q3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      K2 = /[A-Z0-9]/g;
      Q = "undefined" != typeof document;
      X = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(x.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      en = l.event;
      l.event = function(n2) {
        return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
      };
      cn = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      fn = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {}, o3 = -1 === e3.indexOf("-");
          for (var i3 in t3) {
            var l3 = t3[i3];
            if (!("value" === i3 && "defaultValue" in t3 && null == l3 || Q && "children" === i3 && "noscript" === e3 || "class" === i3 || "className" === i3)) {
              var c3 = i3.toLowerCase();
              "defaultValue" === i3 && "value" in t3 && null == t3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : "translate" === c3 && "no" === l3 ? l3 = false : "o" === c3[0] && "n" === c3[1] ? "ondoubleclick" === c3 ? i3 = "ondblclick" : "onchange" !== c3 || "input" !== e3 && "textarea" !== e3 || X(t3.type) ? "onfocus" === c3 ? i3 = "onfocusin" : "onblur" === c3 ? i3 = "onfocusout" : J2.test(i3) && (i3 = c3) : c3 = i3 = "oninput" : o3 && G2.test(i3) ? i3 = i3.replace(K2, "-$&").toLowerCase() : null === l3 && (l3 = void 0), "oninput" === c3 && u3[i3 = c3] && (i3 = "oninputCapture"), u3[i3] = l3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", cn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = q3, fn && fn(n2);
      };
      an = l.__r;
      l.__r = function(n2) {
        an && an(n2), ln = n2.__c;
      };
      sn = l.diffed;
      l.diffed = function(n2) {
        sn && sn(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), ln = null;
      };
      hn = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return ln.__n[n2.__c].props.value;
      }, useCallback: q2, useContext: x2, useDebugValue: P2, useDeferredValue: w3, useEffect: y2, useId: g2, useImperativeHandle: F2, useInsertionEffect: I2, useLayoutEffect: _2, useMemo: T2, useReducer: h2, useRef: A2, useState: d2, useSyncExternalStore: C3, useTransition: k3 } } };
      gn = function(n2, t3) {
        return n2(t3);
      };
      En = function(n2, t3) {
        return n2(t3);
      };
      Cn = k;
      xn = mn;
      Rn = { useState: d2, useId: g2, useReducer: h2, useEffect: y2, useLayoutEffect: _2, useInsertionEffect: I2, useTransition: k3, useDeferredValue: w3, useSyncExternalStore: C3, startTransition: R, useRef: A2, useImperativeHandle: F2, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "18.3.1", Children: O2, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $2, createElement: _, createContext: K, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: mn, isElement: xn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N2, memo: M2, forwardRef: D3, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P3, SuspenseList: B3, lazy: z3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js
  function createComponent(fn2) {
    return D3(fn2);
  }
  var init_create_component = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js"() {
      init_compat_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js
  function noop() {
  }
  var init_no_op = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(svg) {
    return createComponent(function(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return _("div", __spreadProps(__spreadValues({}, rest), { style: {
        color: typeof color === "undefined" ? "currentColor" : `var(--figma-color-icon-${color})`
      } }), svg);
    });
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_create_component();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-check-16.js
  var IconCheck16;
  var init_icon_check_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-check-16.js"() {
      init_preact_module();
      init_create_icon();
      IconCheck16 = createIcon(_(
        "svg",
        { fill: "none", height: "16", viewBox: "0 0 16 16", width: "16", xmlns: "http://www.w3.org/2000/svg" },
        _("path", { "clip-rule": "evenodd", d: "M11.7773 4.084c.2298.15317.2919.46361.1387.69337L7.91603 10.7774a.5002.5002 0 0 1-.36676.2202.5003.5003 0 0 1-.40282-.144l-3-3.00002c-.19527-.19527-.19527-.51185 0-.70711.19526-.19526.51184-.19526.7071 0L7.42229 9.7152 11.084 4.22267c.1532-.22976.4636-.29185.6933-.13867", fill: "currentColor", "fill-rule": "evenodd" })
      ));
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/f86eee3e-638a-4ba0-8bd4-7b3c76b8ff6e/menu.module.js
  var menu_module_default;
  var init_menu_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/f86eee3e-638a-4ba0-8bd4-7b3c76b8ff6e/menu.module.js"() {
      if (document.getElementById("089f38b024") === null) {
        const element = document.createElement("style");
        element.id = "089f38b024";
        element.textContent = `._menu_1f0pn_1 {
  position: absolute;
  z-index: var(--z-index-2);
  left: 0;
  min-width: 100%;
  padding: var(--space-8);
  border-radius: var(--border-radius-12);
  background-color: var(--color-bg-menu);
  box-shadow: var(--box-shadow-menu);
  color: var(--figma-color-text-onbrand);
  font-size: var(--font-size-12);
  overflow-y: auto;
}
._menu_1f0pn_1::-webkit-scrollbar {
  display: none;
}
._menu_1f0pn_1:empty {
  display: none;
}

._hidden_1f0pn_21 {
  position: fixed;
  pointer-events: none;
  visibility: hidden;
}

@media screen and (-webkit-min-device-pixel-ratio: 1.5),
  screen and (min-resolution: 1.5dppx) {
  ._menu_1f0pn_1 {
    -webkit-font-smoothing: antialiased;
  }
}

._optionHeader_1f0pn_34,
._optionValue_1f0pn_35 {
  overflow: hidden;
  padding: var(--space-4) var(--space-12) var(--space-4) var(--space-28);
  text-overflow: ellipsis;
  white-space: nowrap;
}

._optionHeader_1f0pn_34 {
  color: rgba(255, 255, 255, 0.7); /* FIXME */
  font-size: var(--font-size-12);
}

._optionValue_1f0pn_35 {
  position: relative;
  border-radius: var(--border-radius-4);
}
._optionValueSelected_1f0pn_51 {
  background-color: var(--figma-color-bg-brand);
}
._optionValueDisabled_1f0pn_54 {
  color: rgba(255, 255, 255, 0.4); /* FIXME */
}

._optionSeparator_1f0pn_58 {
  width: 100%;
  height: 1px;
  margin: var(--space-extra-small) 0;
  background-color: #444444; /* FIXME */
}

._input_1f0pn_65 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

._checkIcon_1f0pn_76 {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY3NzL21lbnUubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsT0FBTztFQUNQLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMsc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7SUFDRSxtQ0FBbUM7RUFDckM7QUFDRjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsc0VBQXNFO0VBQ3RFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0IsRUFBRSxVQUFVO0VBQzNDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsK0JBQStCLEVBQUUsVUFBVTtBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLHlCQUF5QixFQUFFLFVBQVU7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jc3MvbWVudS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMik7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtOCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1tZW51KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1tZW51KTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25icmFuZCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTEyKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWVudTplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSksXG4gIHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxLjVkcHB4KSB7XG4gIC5tZW51IHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxufVxuXG4ub3B0aW9uSGVhZGVyLFxuLm9wdGlvblZhbHVlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtNCkgdmFyKC0tc3BhY2UtMTIpIHZhcigtLXNwYWNlLTQpIHZhcigtLXNwYWNlLTI4KTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5vcHRpb25IZWFkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOyAvKiBGSVhNRSAqL1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xMik7XG59XG5cbi5vcHRpb25WYWx1ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy00KTtcbn1cbi5vcHRpb25WYWx1ZVNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctYnJhbmQpO1xufVxuLm9wdGlvblZhbHVlRGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAvKiBGSVhNRSAqL1xufVxuXG4ub3B0aW9uU2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0OyAvKiBGSVhNRSAqL1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGVja0ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogdmFyKC0tc3BhY2UtNCk7XG4gIGxlZnQ6IHZhcigtLXNwYWNlLTQpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      menu_module_default = { "menu": "_menu_1f0pn_1", "hidden": "_hidden_1f0pn_21", "optionHeader": "_optionHeader_1f0pn_34", "optionValue": "_optionValue_1f0pn_35", "optionValueSelected": "_optionValueSelected_1f0pn_51", "optionValueDisabled": "_optionValueDisabled_1f0pn_54", "optionSeparator": "_optionSeparator_1f0pn_58", "input": "_input_1f0pn_65", "checkIcon": "_checkIcon_1f0pn_76" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js
  function useMouseDownOutside(options) {
    const { ref, onMouseDownOutside } = options;
    y2(function() {
      function handleBlur() {
        onMouseDownOutside();
      }
      function handleMouseDown(event) {
        const element = getCurrentFromRef(ref);
        if (element === event.target || element.contains(event.target)) {
          return;
        }
        onMouseDownOutside();
      }
      window.addEventListener("blur", handleBlur);
      window.addEventListener("mousedown", handleMouseDown);
      return function() {
        window.removeEventListener("blur", handleBlur);
        window.removeEventListener("mousedown", handleMouseDown);
      };
    }, [ref, onMouseDownOutside]);
  }
  var init_use_mouse_down_outside = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js
  function useScrollableMenu(options) {
    const { itemIdDataAttributeName, menuElementRef, selectedId, setSelectedId } = options;
    const getItemElements = q2(function() {
      return Array.from(getCurrentFromRef(menuElementRef).querySelectorAll(`[${itemIdDataAttributeName}]`)).filter(function(element) {
        return element.hasAttribute("disabled") === false;
      });
    }, [itemIdDataAttributeName, menuElementRef]);
    const findIndexByItemId = q2(function(id) {
      if (id === null) {
        return -1;
      }
      const index = getItemElements().findIndex(function(element) {
        return element.getAttribute(itemIdDataAttributeName) === id;
      });
      if (index === -1) {
        throw new Error("`index` is `-1`");
      }
      return index;
    }, [getItemElements, itemIdDataAttributeName]);
    const updateScrollPosition = q2(function(id) {
      const itemElements = getItemElements();
      const index = findIndexByItemId(id);
      const selectedElement = itemElements[index];
      const selectedElementOffsetTop = selectedElement.getBoundingClientRect().top;
      const menuElement = getCurrentFromRef(menuElementRef);
      const menuElementOffsetTop = menuElement.getBoundingClientRect().top;
      if (selectedElementOffsetTop < menuElementOffsetTop) {
        selectedElement.scrollIntoView();
        return;
      }
      const offsetBottom = selectedElementOffsetTop + selectedElement.offsetHeight;
      if (offsetBottom > menuElementOffsetTop + menuElement.offsetHeight) {
        selectedElement.scrollIntoView();
      }
    }, [findIndexByItemId, getItemElements, menuElementRef]);
    const handleScrollableMenuKeyDown = q2(function(event) {
      const key = event.key;
      if (key === "ArrowDown" || key === "ArrowUp") {
        const itemElements = getItemElements();
        const index = findIndexByItemId(selectedId);
        let newIndex;
        if (key === "ArrowDown") {
          newIndex = index === -1 || index === itemElements.length - 1 ? 0 : index + 1;
        } else {
          newIndex = index === -1 || index === 0 ? itemElements.length - 1 : index - 1;
        }
        const selectedElement = itemElements[newIndex];
        const newSelectedId = selectedElement.getAttribute(itemIdDataAttributeName);
        setSelectedId(newSelectedId);
        updateScrollPosition(newSelectedId);
      }
    }, [
      getItemElements,
      findIndexByItemId,
      itemIdDataAttributeName,
      setSelectedId,
      selectedId,
      updateScrollPosition
    ]);
    const handleScrollableMenuItemMouseMove = q2(function(event) {
      const id = event.currentTarget.getAttribute(itemIdDataAttributeName);
      if (id !== selectedId) {
        setSelectedId(id);
      }
    }, [itemIdDataAttributeName, selectedId, setSelectedId]);
    return {
      handleScrollableMenuItemMouseMove,
      handleScrollableMenuKeyDown
    };
  }
  var init_use_scrollable_menu = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-chevron-down-16.js
  var IconChevronDown16;
  var init_icon_chevron_down_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-chevron-down-16.js"() {
      init_preact_module();
      init_create_icon();
      IconChevronDown16 = createIcon(_(
        "svg",
        { fill: "none", height: "16", viewBox: "0 0 16 16", width: "16", xmlns: "http://www.w3.org/2000/svg" },
        _("path", { "clip-rule": "evenodd", d: "M10.4751 7.47486c.1953-.19526.1953-.51184 0-.70711-.1953-.19526-.51184-.19526-.7071 0L8.00023 8.53552 6.23246 6.76775c-.19526-.19526-.51184-.19526-.70711 0-.19526.19527-.19526.51185 0 .70711l2.12133 2.12132.35355.35355.35355-.35355z", fill: "currentColor", "fill-rule": "evenodd" })
      ));
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/private/constants.js
  var INVALID_ID, VIEWPORT_MARGIN, ITEM_ID_DATA_ATTRIBUTE_NAME;
  var init_constants = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/private/constants.js"() {
      INVALID_ID = null;
      VIEWPORT_MARGIN = 12;
      ITEM_ID_DATA_ATTRIBUTE_NAME = "data-item-id";
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/20e8ebb4-0e05-4f25-841b-1fceba32a037/dropdown.module.js
  var dropdown_module_default;
  var init_dropdown_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/20e8ebb4-0e05-4f25-841b-1fceba32a037/dropdown.module.js"() {
      if (document.getElementById("7fdbf717e5") === null) {
        const element = document.createElement("style");
        element.id = "7fdbf717e5";
        element.textContent = `._dropdown_i81qm_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  width: 100%;
  min-width: 0; /* See https://css-tricks.com/flexbox-truncated-text/ */
  height: var(--space-24);
  align-items: center;
  border: var(--border-width-1) solid var(--figma-color-border);
  border-radius: var(--border-radius-4);
  color: var(--figma-color-text);
}

._dropdown_i81qm_1:not(._disabled_i81qm_14):focus-visible {
  border-color: var(--figma-color-border-selected);
}
._dropdown_i81qm_1:not(._disabled_i81qm_14):focus-within {
  z-index: var(--z-index-2); /* stack \`.dropdown\` over its sibling elements */
  outline: 0;
}

._disabled_i81qm_14,
._disabled_i81qm_14 * {
  cursor: not-allowed;
}

._menu_i81qm_27 {
  position: fixed;
}

._icon_i81qm_31 {
  position: absolute;
  top: 50%;
  left: var(--space-12);
  color: var(--figma-color-icon-secondary);
  pointer-events: none;
  text-align: center;
  transform: translate(-50%, -50%);
}
._disabled_i81qm_14 ._icon_i81qm_31 {
  color: var(--figma-color-icon-disabled);
}

._empty_i81qm_44,
._placeholder_i81qm_45,
._value_i81qm_46 {
  flex-grow: 1;
}

._value_i81qm_46,
._placeholder_i81qm_45 {
  overflow: hidden;
  padding-left: calc(var(--space-8) - var(--border-width-1));
  text-overflow: ellipsis;
  white-space: nowrap;
}
._hasIcon_i81qm_57 ._value_i81qm_46,
._hasIcon_i81qm_57 ._placeholder_i81qm_45 {
  padding-left: calc(var(--space-24) - var(--border-width-1));
}
._placeholder_i81qm_45 {
  color: var(--figma-color-text-tertiary);
}

._disabled_i81qm_14 ._value_i81qm_46 {
  color: var(--figma-color-text-disabled);
}

._chevronIcon_i81qm_69 {
  padding-right: var(--space-4);
  color: var(--figma-color-icon);
}
._disabled_i81qm_14 ._chevronIcon_i81qm_69 {
  color: var(--figma-color-icon-disabled);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVksRUFBRSx1REFBdUQ7RUFDckUsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2REFBNkQ7RUFDN0QscUNBQXFDO0VBQ3JDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UseUJBQXlCLEVBQUUsZ0RBQWdEO0VBQzNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsd0NBQXdDO0VBQ3hDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsMERBQTBEO0VBQzFELHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSwyREFBMkQ7QUFDN0Q7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVDQUF1QztBQUN6QyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMDsgLyogU2VlIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZmxleGJveC10cnVuY2F0ZWQtdGV4dC8gKi9cbiAgaGVpZ2h0OiB2YXIoLS1zcGFjZS0yNCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXdpZHRoLTEpIHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtNCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cblxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmZvY3VzLXZpc2libGUge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1zZWxlY3RlZCk7XG59XG4uZHJvcGRvd246bm90KC5kaXNhYmxlZCk6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTsgLyogc3RhY2sgYC5kcm9wZG93bmAgb3ZlciBpdHMgc2libGluZyBlbGVtZW50cyAqL1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZGlzYWJsZWQsXG4uZGlzYWJsZWQgKiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IHZhcigtLXNwYWNlLTEyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tc2Vjb25kYXJ5KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZGlzYWJsZWQgLmljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1kaXNhYmxlZCk7XG59XG5cbi5lbXB0eSxcbi5wbGFjZWhvbGRlcixcbi52YWx1ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnZhbHVlLFxuLnBsYWNlaG9sZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXNwYWNlLTgpIC0gdmFyKC0tYm9yZGVyLXdpZHRoLTEpKTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGFzSWNvbiAudmFsdWUsXG4uaGFzSWNvbiAucGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tc3BhY2UtMjQpIC0gdmFyKC0tYm9yZGVyLXdpZHRoLTEpKTtcbn1cbi5wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcbn1cblxuLmRpc2FibGVkIC52YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbn1cblxuLmNoZXZyb25JY29uIHtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2UtNCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcbn1cbi5kaXNhYmxlZCAuY2hldnJvbkljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1kaXNhYmxlZCk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      dropdown_module_default = { "dropdown": "_dropdown_i81qm_1", "disabled": "_disabled_i81qm_14", "menu": "_menu_i81qm_27", "icon": "_icon_i81qm_31", "empty": "_empty_i81qm_44", "placeholder": "_placeholder_i81qm_45", "value": "_value_i81qm_46", "hasIcon": "_hasIcon_i81qm_57", "chevronIcon": "_chevronIcon_i81qm_69" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/update-menu-element-layout.js
  function updateMenuElementLayout(rootElement, menuElement, selectedId) {
    const rootElementBoundingClientRect = rootElement.getBoundingClientRect();
    const rootWidth = rootElement.offsetWidth;
    const rootHeight = rootElement.offsetHeight;
    const rootLeft = rootElementBoundingClientRect.left;
    const rootTop = rootElementBoundingClientRect.top;
    menuElement.style.minWidth = `${rootWidth}px`;
    const menuElementMaxWidth = window.innerWidth - 2 * VIEWPORT_MARGIN;
    menuElement.style.maxWidth = `${menuElementMaxWidth}px`;
    const menuElementMaxHeight = window.innerHeight - 2 * VIEWPORT_MARGIN;
    menuElement.style.maxHeight = `${menuElementMaxHeight}px`;
    const menuWidth = menuElement.offsetWidth;
    const menuHeight = menuElement.offsetHeight;
    const menuScrollHeight = menuElement.scrollHeight;
    const menuPaddingTop = parseInt(window.getComputedStyle(menuElement).paddingTop, 10);
    const labelElement = getSelectedLabelElement(menuElement, selectedId);
    const left = computeLeft({
      menuWidth,
      rootLeft
    });
    menuElement.style.left = `${left}px`;
    const top = computeTop({
      menuHeight,
      rootTop,
      selectedTop: labelElement.offsetTop
    });
    menuElement.style.top = `${top}px`;
    const isScrollable = menuScrollHeight > menuHeight;
    if (isScrollable === false) {
      return;
    }
    menuElement.scrollTop = computeScrollTop({
      menuHeight,
      menuPaddingTop,
      menuScrollHeight,
      rootHeight,
      rootTop,
      selectedTop: labelElement.offsetTop
    });
  }
  function getSelectedLabelElement(menuElement, selectedId) {
    const inputElement = menuElement.querySelector(selectedId === INVALID_ID ? `[${ITEM_ID_DATA_ATTRIBUTE_NAME}]` : `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
    if (inputElement === null) {
      throw new Error("`inputElement` is `null`");
    }
    const labelElement = inputElement.parentElement;
    if (labelElement === null) {
      throw new Error("`labelElement` is `null`");
    }
    return labelElement;
  }
  function computeLeft(options) {
    const { menuWidth, rootLeft } = options;
    if (rootLeft <= VIEWPORT_MARGIN) {
      return VIEWPORT_MARGIN;
    }
    const viewportWidth = window.innerWidth;
    if (rootLeft + menuWidth > viewportWidth - VIEWPORT_MARGIN) {
      return viewportWidth - VIEWPORT_MARGIN - menuWidth;
    }
    return rootLeft;
  }
  function computeTop(options) {
    const { menuHeight, rootTop, selectedTop } = options;
    const viewportHeight = window.innerHeight;
    if (rootTop <= VIEWPORT_MARGIN || menuHeight === viewportHeight - 2 * VIEWPORT_MARGIN) {
      return VIEWPORT_MARGIN;
    }
    const top = rootTop - selectedTop;
    const minimumTop = VIEWPORT_MARGIN;
    const maximumTop = viewportHeight - VIEWPORT_MARGIN - menuHeight;
    return restrictToRange(top, minimumTop, maximumTop);
  }
  function computeScrollTop(options) {
    const { menuHeight, menuPaddingTop, menuScrollHeight, rootHeight, rootTop, selectedTop } = options;
    const restrictedRootTop = restrictToRange(rootTop, VIEWPORT_MARGIN, window.innerHeight - VIEWPORT_MARGIN - rootHeight + menuPaddingTop / 2);
    const scrollTop = selectedTop - (restrictedRootTop - VIEWPORT_MARGIN);
    const minimumScrollTop = 0;
    const maximumScrollTop = menuScrollHeight - menuHeight;
    return restrictToRange(scrollTop, minimumScrollTop, maximumScrollTop);
  }
  function restrictToRange(number, minimum, maximum) {
    return Math.min(Math.max(number, minimum), maximum);
  }
  var init_update_menu_element_layout = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/update-menu-element-layout.js"() {
      init_constants();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js
  function getDropdownOptionValue(option) {
    if (typeof option !== "string") {
      if ("text" in option) {
        return option.text;
      }
      if ("value" in option) {
        return option.value;
      }
    }
    throw new Error("Invariant violation");
  }
  function findOptionIndexByValue(options, value) {
    if (value === null) {
      return -1;
    }
    let index = 0;
    for (const option of options) {
      if (typeof option !== "string" && "value" in option && option.value === value) {
        return index;
      }
      index += 1;
    }
    return -1;
  }
  var Dropdown;
  var init_dropdown = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js"() {
      init_preact_module();
      init_compat_module();
      init_hooks_module();
      init_menu_module();
      init_use_mouse_down_outside();
      init_use_scrollable_menu();
      init_icon_check_16();
      init_icon_chevron_down_16();
      init_create_class_name();
      init_create_component();
      init_get_current_from_ref();
      init_no_op();
      init_constants();
      init_dropdown_module();
      init_update_menu_element_layout();
      Dropdown = createComponent(function(_a, ref) {
        var _b = _a, { disabled = false, icon, onChange = noop, onKeyDown = noop, onMouseDown = noop, onValueChange = noop, options, placeholder, propagateEscapeKeyDown = true, value } = _b, rest = __objRest(_b, ["disabled", "icon", "onChange", "onKeyDown", "onMouseDown", "onValueChange", "options", "placeholder", "propagateEscapeKeyDown", "value"]);
        if (typeof icon === "string" && icon.length !== 1) {
          throw new Error(`String \`icon\` must be a single character: "${icon}"`);
        }
        const rootElementRef = A2(null);
        const menuElementRef = A2(null);
        const [isMenuVisible, setIsMenuVisible] = d2(false);
        const index = findOptionIndexByValue(options, value);
        if (value !== null && index === -1) {
          throw new Error(`Invalid \`value\`: ${value}`);
        }
        const [selectedId, setSelectedId] = d2(index === -1 ? INVALID_ID : `${index}`);
        const children = typeof options[index] === "undefined" ? "" : getDropdownOptionValue(options[index]);
        const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } = useScrollableMenu({
          itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
          menuElementRef,
          selectedId,
          setSelectedId
        });
        const triggerRootBlur = q2(function() {
          getCurrentFromRef(rootElementRef).blur();
        }, []);
        const triggerRootFocus = q2(function() {
          getCurrentFromRef(rootElementRef).focus();
        }, []);
        const triggerMenuUpdateLayout = q2(function(selectedId2) {
          const rootElement = getCurrentFromRef(rootElementRef);
          const menuElement = getCurrentFromRef(menuElementRef);
          updateMenuElementLayout(rootElement, menuElement, selectedId2);
        }, []);
        const triggerMenuHide = q2(function() {
          setIsMenuVisible(false);
          setSelectedId(INVALID_ID);
        }, []);
        const triggerMenuShow = q2(function() {
          if (isMenuVisible === true) {
            return;
          }
          setIsMenuVisible(true);
          if (value === null) {
            triggerMenuUpdateLayout(selectedId);
            return;
          }
          const index2 = findOptionIndexByValue(options, value);
          if (index2 === -1) {
            throw new Error(`Invalid \`value\`: ${value}`);
          }
          const newSelectedId = `${index2}`;
          setSelectedId(newSelectedId);
          triggerMenuUpdateLayout(newSelectedId);
        }, [isMenuVisible, options, selectedId, triggerMenuUpdateLayout, value]);
        const handleRootKeyDown = q2(function(event) {
          onKeyDown(event);
          const key = event.key;
          if (key === "ArrowUp" || key === "ArrowDown") {
            event.preventDefault();
            if (isMenuVisible === false) {
              triggerMenuShow();
              return;
            }
            handleScrollableMenuKeyDown(event);
            return;
          }
          if (key === "Escape") {
            event.preventDefault();
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            if (isMenuVisible === true) {
              triggerMenuHide();
              return;
            }
            triggerRootBlur();
            return;
          }
          if (key === "Enter") {
            event.preventDefault();
            if (isMenuVisible === false) {
              triggerMenuShow();
              return;
            }
            if (selectedId !== INVALID_ID) {
              const selectedElement = getCurrentFromRef(menuElementRef).querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
              if (selectedElement === null) {
                throw new Error("`selectedElement` is `null`");
              }
              selectedElement.checked = true;
              const changeEvent = new window.Event("change", {
                bubbles: true,
                cancelable: true
              });
              selectedElement.dispatchEvent(changeEvent);
            }
            triggerMenuHide();
            return;
          }
          if (key === "Tab") {
            triggerMenuHide();
            return;
          }
        }, [
          handleScrollableMenuKeyDown,
          isMenuVisible,
          onKeyDown,
          propagateEscapeKeyDown,
          selectedId,
          triggerMenuHide,
          triggerMenuShow,
          triggerRootBlur
        ]);
        const handleRootMouseDown = q2(function(event) {
          onMouseDown(event);
          if (isMenuVisible === false) {
            triggerMenuShow();
          }
        }, [isMenuVisible, onMouseDown, triggerMenuShow]);
        const handleMenuMouseDown = q2(function(event) {
          event.stopPropagation();
        }, []);
        const handleOptionChange = q2(function(event) {
          onChange(event);
          const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
          if (id === null) {
            throw new Error("`id` is `null`");
          }
          const optionValue = options[parseInt(id, 10)];
          const newValue = optionValue.value;
          onValueChange(newValue);
          triggerRootFocus();
          triggerMenuHide();
        }, [onChange, onValueChange, options, triggerMenuHide, triggerRootFocus]);
        const handleSelectedOptionClick = q2(function() {
          triggerRootFocus();
          triggerMenuHide();
        }, [triggerMenuHide, triggerRootFocus]);
        const handleMouseDownOutside = q2(function() {
          if (isMenuVisible === false) {
            return;
          }
          triggerMenuHide();
          triggerRootBlur();
        }, [isMenuVisible, triggerRootBlur, triggerMenuHide]);
        useMouseDownOutside({
          onMouseDownOutside: handleMouseDownOutside,
          ref: rootElementRef
        });
        y2(function() {
          function handleWindowScroll() {
            if (isMenuVisible === false) {
              return;
            }
            triggerRootFocus();
            triggerMenuHide();
          }
          window.addEventListener("scroll", handleWindowScroll);
          return function() {
            window.removeEventListener("scroll", handleWindowScroll);
          };
        }, [isMenuVisible, triggerMenuHide, triggerRootFocus]);
        const refCallback = q2(function(rootElement) {
          rootElementRef.current = rootElement;
          if (ref === null) {
            return;
          }
          if (typeof ref === "function") {
            ref(rootElement);
            return;
          }
          ref.current = rootElement;
        }, [ref, rootElementRef]);
        return _(
          "div",
          __spreadProps(__spreadValues({}, rest), { ref: refCallback, class: createClassName([
            dropdown_module_default.dropdown,
            typeof icon !== "undefined" ? dropdown_module_default.hasIcon : null,
            disabled === true ? dropdown_module_default.disabled : null
          ]), onKeyDown: disabled === true ? void 0 : handleRootKeyDown, onMouseDown: handleRootMouseDown, tabIndex: 0 }),
          typeof icon === "undefined" ? null : _("div", { class: dropdown_module_default.icon }, icon),
          value === null ? _("div", { class: createClassName([
            dropdown_module_default.value,
            dropdown_module_default.placeholder
          ]) }, placeholder) : _("div", { class: dropdown_module_default.value }, children),
          _(
            "div",
            { class: dropdown_module_default.chevronIcon },
            _(IconChevronDown16, null)
          ),
          $2(_("div", { ref: menuElementRef, class: createClassName([
            menu_module_default.menu,
            dropdown_module_default.menu,
            disabled === true || isMenuVisible === false ? menu_module_default.hidden : null
          ]), onMouseDown: handleMenuMouseDown }, options.map(function(option, index2) {
            if (typeof option === "string") {
              return _("hr", { key: index2, class: menu_module_default.optionSeparator });
            }
            if ("header" in option) {
              return _("h1", { key: index2, class: menu_module_default.optionHeader }, option.header);
            }
            return _(
              "label",
              { key: index2, class: createClassName([
                menu_module_default.optionValue,
                option.disabled === true ? menu_module_default.optionValueDisabled : null,
                option.disabled !== true && `${index2}` === selectedId ? menu_module_default.optionValueSelected : null
              ]) },
              _("input", { checked: value === option.value, class: menu_module_default.input, disabled: option.disabled === true, onChange: value === option.value ? void 0 : handleOptionChange, onClick: value === option.value ? handleSelectedOptionClick : void 0, onMouseMove: handleScrollableMenuItemMouseMove, tabIndex: -1, type: "radio", value: `${option.value}`, [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index2}` }),
              option.value === value ? _(
                "div",
                { class: menu_module_default.checkIcon },
                _(IconCheck16, null)
              ) : null,
              typeof option.text === "undefined" ? option.value : option.text
            );
          })), document.body)
        );
      });
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    let invoked = false;
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
        invoked = true;
      }
    }
    if (invoked === false) {
      throw new Error(`No event handler with name \`${name}\``);
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function(args) {
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = args;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const args = event.data.pluginMessage;
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = event.data.pluginMessage;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/c9577c12-69da-469b-9d90-ec3d25572baa/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/c9577c12-69da-469b-9d90-ec3d25572baa/container.module.js"() {
      if (document.getElementById("3cdc062de4") === null) {
        const element = document.createElement("style");
        element.id = "3cdc062de4";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  var Container;
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_create_component();
      init_container_module();
      Container = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { ref, class: container_module_default[space] }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/7dc65cd6-229c-43c0-867b-2b33d95a0937/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/7dc65cd6-229c-43c0-867b-2b33d95a0937/vertical-space.module.js"() {
      if (document.getElementById("c14b9dfed2") === null) {
        const element = document.createElement("style");
        element.id = "c14b9dfed2";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  var VerticalSpace;
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_create_component();
      init_vertical_space_module();
      VerticalSpace = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { ref, class: vertical_space_module_default[space] }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/0b846fc9-76a9-4b78-a04b-85a227d55051/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/0b846fc9-76a9-4b78-a04b-85a227d55051/base.js"() {
      if (document.getElementById("3efd11a513") === null) {
        const element = document.createElement("style");
        element.id = "3efd11a513";
        element.textContent = `:root {
  --border-width-1: 1px;
  --border-width-4: 4px;
  --border-radius-2: 2px;
  --border-radius-4: 4px;
  --border-radius-6: 6px;
  --border-radius-12: 12px;
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu:
    0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15),
    inset 0 0 0 0.5px #000000, 0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal:
    0 2px 14px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(0, 0, 0, 0.2);
  --box-shadow-range-slider:
    0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 8px 0 rgba(0, 0, 0, 0.1),
    0 0 0.5px 0 rgba(0, 0, 0, 0.18), inset 0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --color-bg-menu: #1e1e1e;
  --color-bg-overlay: rgba(0, 0, 0, 0.5);
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code:
    SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  --opacity-30: 0.3;
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  --space-0: 0;
  --space-4: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-28: 28px;
  --space-32: 32px;
  --transition-duration-100: 0.1s;
  --transition-duration-300: 0.3s;
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      E(_(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_dropdown();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // src/componentData/checkboxData.ts
  var checkboxData;
  var init_checkboxData = __esm({
    "src/componentData/checkboxData.ts"() {
      "use strict";
      checkboxData = {
        size: "m",
        isLabel: true,
        label: "Checkbox"
      };
    }
  });

  // src/componentData.ts
  var components;
  var init_componentData = __esm({
    "src/componentData.ts"() {
      "use strict";
      init_checkboxData();
      components = {
        Checkbox: checkboxData,
        RadioButtons: {}
      };
    }
  });

  // node_modules/jotai/esm/vanilla/internals.mjs
  var import_meta, isSelfAtom, hasInitialValue, isActuallyWritableAtom, isAtomStateInitialized, returnAtomValue, promiseStateMap, isPendingPromise, abortPromise, registerAbortHandler, isPromiseLike, addPendingPromiseToDependency, setAtomStateValueOrPromise, getMountedOrPendingDependents, createStoreHook, createStoreHookForAtoms, initializeStoreHooks, BUILDING_BLOCKS, buildStore, INTERNAL_buildStoreRev1, INTERNAL_initializeStoreHooks, INTERNAL_registerAbortHandler;
  var init_internals = __esm({
    "node_modules/jotai/esm/vanilla/internals.mjs"() {
      import_meta = {};
      isSelfAtom = (atom2, a3) => atom2.unstable_is ? atom2.unstable_is(a3) : a3 === atom2;
      hasInitialValue = (atom2) => "init" in atom2;
      isActuallyWritableAtom = (atom2) => !!atom2.write;
      isAtomStateInitialized = (atomState) => "v" in atomState || "e" in atomState;
      returnAtomValue = (atomState) => {
        if ("e" in atomState) {
          throw atomState.e;
        }
        if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && !("v" in atomState)) {
          throw new Error("[Bug] atom state is not initialized");
        }
        return atomState.v;
      };
      promiseStateMap = /* @__PURE__ */ new WeakMap();
      isPendingPromise = (value) => {
        var _a;
        return isPromiseLike(value) && !!((_a = promiseStateMap.get(value)) == null ? void 0 : _a[0]);
      };
      abortPromise = (promise) => {
        const promiseState = promiseStateMap.get(promise);
        if (promiseState == null ? void 0 : promiseState[0]) {
          promiseState[0] = false;
          promiseState[1].forEach((fn2) => fn2());
        }
      };
      registerAbortHandler = (promise, abortHandler) => {
        let promiseState = promiseStateMap.get(promise);
        if (!promiseState) {
          promiseState = [true, /* @__PURE__ */ new Set()];
          promiseStateMap.set(promise, promiseState);
          const settle = () => {
            promiseState[0] = false;
          };
          promise.then(settle, settle);
        }
        promiseState[1].add(abortHandler);
      };
      isPromiseLike = (p3) => typeof (p3 == null ? void 0 : p3.then) === "function";
      addPendingPromiseToDependency = (atom2, promise, dependencyAtomState) => {
        if (!dependencyAtomState.p.has(atom2)) {
          dependencyAtomState.p.add(atom2);
          promise.then(
            () => {
              dependencyAtomState.p.delete(atom2);
            },
            () => {
              dependencyAtomState.p.delete(atom2);
            }
          );
        }
      };
      setAtomStateValueOrPromise = (atom2, valueOrPromise, ensureAtomState) => {
        const atomState = ensureAtomState(atom2);
        const hasPrevValue = "v" in atomState;
        const prevValue = atomState.v;
        if (isPromiseLike(valueOrPromise)) {
          for (const a3 of atomState.d.keys()) {
            addPendingPromiseToDependency(atom2, valueOrPromise, ensureAtomState(a3));
          }
        }
        atomState.v = valueOrPromise;
        delete atomState.e;
        if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
          ++atomState.n;
          if (isPromiseLike(prevValue)) {
            abortPromise(prevValue);
          }
        }
      };
      getMountedOrPendingDependents = (atom2, atomState, mountedMap) => {
        var _a;
        const dependents = /* @__PURE__ */ new Set();
        for (const a3 of ((_a = mountedMap.get(atom2)) == null ? void 0 : _a.t) || []) {
          if (mountedMap.has(a3)) {
            dependents.add(a3);
          }
        }
        for (const atomWithPendingPromise of atomState.p) {
          dependents.add(atomWithPendingPromise);
        }
        return dependents;
      };
      createStoreHook = () => {
        const callbacks = /* @__PURE__ */ new Set();
        const notify = () => {
          callbacks.forEach((fn2) => fn2());
        };
        notify.add = (fn2) => {
          callbacks.add(fn2);
          return () => {
            callbacks.delete(fn2);
          };
        };
        return notify;
      };
      createStoreHookForAtoms = () => {
        const all = {};
        const callbacks = /* @__PURE__ */ new WeakMap();
        const notify = (atom2) => {
          var _a, _b;
          (_a = callbacks.get(all)) == null ? void 0 : _a.forEach((fn2) => fn2(atom2));
          (_b = callbacks.get(atom2)) == null ? void 0 : _b.forEach((fn2) => fn2());
        };
        notify.add = (atom2, fn2) => {
          const key = atom2 || all;
          const fns = (callbacks.has(key) ? callbacks : callbacks.set(key, /* @__PURE__ */ new Set())).get(key);
          fns.add(fn2);
          return () => {
            fns == null ? void 0 : fns.delete(fn2);
            if (!fns.size) {
              callbacks.delete(key);
            }
          };
        };
        return notify;
      };
      initializeStoreHooks = (storeHooks) => {
        storeHooks.c || (storeHooks.c = createStoreHookForAtoms());
        storeHooks.m || (storeHooks.m = createStoreHookForAtoms());
        storeHooks.u || (storeHooks.u = createStoreHookForAtoms());
        storeHooks.f || (storeHooks.f = createStoreHook());
        return storeHooks;
      };
      BUILDING_BLOCKS = Symbol();
      buildStore = (atomStateMap = /* @__PURE__ */ new WeakMap(), mountedMap = /* @__PURE__ */ new WeakMap(), invalidatedAtoms = /* @__PURE__ */ new WeakMap(), changedAtoms = /* @__PURE__ */ new Set(), mountCallbacks = /* @__PURE__ */ new Set(), unmountCallbacks = /* @__PURE__ */ new Set(), storeHooks = {}, atomRead = (atom2, ...params) => atom2.read(...params), atomWrite = (atom2, ...params) => atom2.write(...params), atomOnInit = (atom2, store) => {
        var _a;
        return (_a = atom2.unstable_onInit) == null ? void 0 : _a.call(atom2, store);
      }, atomOnMount = (atom2, setAtom) => {
        var _a;
        return (_a = atom2.onMount) == null ? void 0 : _a.call(atom2, setAtom);
      }, ...buildingBlockFunctions) => {
        const ensureAtomState = buildingBlockFunctions[0] || ((atom2) => {
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && !atom2) {
            throw new Error("Atom is undefined or null");
          }
          let atomState = atomStateMap.get(atom2);
          if (!atomState) {
            atomState = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 };
            atomStateMap.set(atom2, atomState);
            atomOnInit == null ? void 0 : atomOnInit(atom2, store);
          }
          return atomState;
        });
        const flushCallbacks = buildingBlockFunctions[1] || (() => {
          const errors = [];
          const call = (fn2) => {
            try {
              fn2();
            } catch (e3) {
              errors.push(e3);
            }
          };
          do {
            if (storeHooks.f) {
              call(storeHooks.f);
            }
            const callbacks = /* @__PURE__ */ new Set();
            const add = callbacks.add.bind(callbacks);
            changedAtoms.forEach((atom2) => {
              var _a;
              return (_a = mountedMap.get(atom2)) == null ? void 0 : _a.l.forEach(add);
            });
            changedAtoms.clear();
            unmountCallbacks.forEach(add);
            unmountCallbacks.clear();
            mountCallbacks.forEach(add);
            mountCallbacks.clear();
            callbacks.forEach(call);
            if (changedAtoms.size) {
              recomputeInvalidatedAtoms();
            }
          } while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size);
          if (errors.length) {
            throw new AggregateError(errors);
          }
        });
        const recomputeInvalidatedAtoms = buildingBlockFunctions[2] || (() => {
          const topSortedReversed = [];
          const visiting = /* @__PURE__ */ new WeakSet();
          const visited = /* @__PURE__ */ new WeakSet();
          const stack = Array.from(changedAtoms);
          while (stack.length) {
            const a3 = stack[stack.length - 1];
            const aState = ensureAtomState(a3);
            if (visited.has(a3)) {
              stack.pop();
              continue;
            }
            if (visiting.has(a3)) {
              if (invalidatedAtoms.get(a3) === aState.n) {
                topSortedReversed.push([a3, aState]);
              } else if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && invalidatedAtoms.has(a3)) {
                throw new Error("[Bug] invalidated atom exists");
              }
              visited.add(a3);
              stack.pop();
              continue;
            }
            visiting.add(a3);
            for (const d3 of getMountedOrPendingDependents(a3, aState, mountedMap)) {
              if (!visiting.has(d3)) {
                stack.push(d3);
              }
            }
          }
          for (let i3 = topSortedReversed.length - 1; i3 >= 0; --i3) {
            const [a3, aState] = topSortedReversed[i3];
            let hasChangedDeps = false;
            for (const dep of aState.d.keys()) {
              if (dep !== a3 && changedAtoms.has(dep)) {
                hasChangedDeps = true;
                break;
              }
            }
            if (hasChangedDeps) {
              readAtomState(a3);
              mountDependencies(a3);
            }
            invalidatedAtoms.delete(a3);
          }
        });
        const readAtomState = buildingBlockFunctions[3] || ((atom2) => {
          var _a;
          const atomState = ensureAtomState(atom2);
          if (isAtomStateInitialized(atomState)) {
            if (mountedMap.has(atom2) && invalidatedAtoms.get(atom2) !== atomState.n) {
              return atomState;
            }
            if (Array.from(atomState.d).every(
              ([a3, n2]) => (
                // Recursively, read the atom state of the dependency, and
                // check if the atom epoch number is unchanged
                readAtomState(a3).n === n2
              )
            )) {
              return atomState;
            }
          }
          atomState.d.clear();
          let isSync = true;
          const mountDependenciesIfAsync = () => {
            if (mountedMap.has(atom2)) {
              mountDependencies(atom2);
              recomputeInvalidatedAtoms();
              flushCallbacks();
            }
          };
          const getter = (a3) => {
            var _a2;
            if (isSelfAtom(atom2, a3)) {
              const aState2 = ensureAtomState(a3);
              if (!isAtomStateInitialized(aState2)) {
                if (hasInitialValue(a3)) {
                  setAtomStateValueOrPromise(a3, a3.init, ensureAtomState);
                } else {
                  throw new Error("no atom init");
                }
              }
              return returnAtomValue(aState2);
            }
            const aState = readAtomState(a3);
            try {
              return returnAtomValue(aState);
            } finally {
              atomState.d.set(a3, aState.n);
              if (isPendingPromise(atomState.v)) {
                addPendingPromiseToDependency(atom2, atomState.v, aState);
              }
              (_a2 = mountedMap.get(a3)) == null ? void 0 : _a2.t.add(atom2);
              if (!isSync) {
                mountDependenciesIfAsync();
              }
            }
          };
          let controller;
          let setSelf;
          const options = {
            get signal() {
              if (!controller) {
                controller = new AbortController();
              }
              return controller.signal;
            },
            get setSelf() {
              if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom2)) {
                console.warn("setSelf function cannot be used with read-only atom");
              }
              if (!setSelf && isActuallyWritableAtom(atom2)) {
                setSelf = (...args) => {
                  if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && isSync) {
                    console.warn("setSelf function cannot be called in sync");
                  }
                  if (!isSync) {
                    try {
                      return writeAtomState(atom2, ...args);
                    } finally {
                      recomputeInvalidatedAtoms();
                      flushCallbacks();
                    }
                  }
                };
              }
              return setSelf;
            }
          };
          const prevEpochNumber = atomState.n;
          try {
            const valueOrPromise = atomRead(atom2, getter, options);
            setAtomStateValueOrPromise(atom2, valueOrPromise, ensureAtomState);
            if (isPromiseLike(valueOrPromise)) {
              registerAbortHandler(valueOrPromise, () => controller == null ? void 0 : controller.abort());
              valueOrPromise.then(
                mountDependenciesIfAsync,
                mountDependenciesIfAsync
              );
            }
            return atomState;
          } catch (error) {
            delete atomState.v;
            atomState.e = error;
            ++atomState.n;
            return atomState;
          } finally {
            isSync = false;
            if (prevEpochNumber !== atomState.n && invalidatedAtoms.get(atom2) === prevEpochNumber) {
              invalidatedAtoms.set(atom2, atomState.n);
              changedAtoms.add(atom2);
              (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, atom2);
            }
          }
        });
        const invalidateDependents = buildingBlockFunctions[4] || ((atom2) => {
          const stack = [atom2];
          while (stack.length) {
            const a3 = stack.pop();
            const aState = ensureAtomState(a3);
            for (const d3 of getMountedOrPendingDependents(a3, aState, mountedMap)) {
              const dState = ensureAtomState(d3);
              invalidatedAtoms.set(d3, dState.n);
              stack.push(d3);
            }
          }
        });
        const writeAtomState = buildingBlockFunctions[5] || ((atom2, ...args) => {
          let isSync = true;
          const getter = (a3) => returnAtomValue(readAtomState(a3));
          const setter = (a3, ...args2) => {
            var _a;
            const aState = ensureAtomState(a3);
            try {
              if (isSelfAtom(atom2, a3)) {
                if (!hasInitialValue(a3)) {
                  throw new Error("atom not writable");
                }
                const prevEpochNumber = aState.n;
                const v3 = args2[0];
                setAtomStateValueOrPromise(a3, v3, ensureAtomState);
                mountDependencies(a3);
                if (prevEpochNumber !== aState.n) {
                  changedAtoms.add(a3);
                  (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a3);
                  invalidateDependents(a3);
                }
                return void 0;
              } else {
                return writeAtomState(a3, ...args2);
              }
            } finally {
              if (!isSync) {
                recomputeInvalidatedAtoms();
                flushCallbacks();
              }
            }
          };
          try {
            return atomWrite(atom2, getter, setter, ...args);
          } finally {
            isSync = false;
          }
        });
        const mountDependencies = buildingBlockFunctions[6] || ((atom2) => {
          var _a;
          const atomState = ensureAtomState(atom2);
          const mounted = mountedMap.get(atom2);
          if (mounted && !isPendingPromise(atomState.v)) {
            for (const [a3, n2] of atomState.d) {
              if (!mounted.d.has(a3)) {
                const aState = ensureAtomState(a3);
                const aMounted = mountAtom(a3);
                aMounted.t.add(atom2);
                mounted.d.add(a3);
                if (n2 !== aState.n) {
                  changedAtoms.add(a3);
                  (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a3);
                  invalidateDependents(a3);
                }
              }
            }
            for (const a3 of mounted.d || []) {
              if (!atomState.d.has(a3)) {
                mounted.d.delete(a3);
                const aMounted = unmountAtom(a3);
                aMounted == null ? void 0 : aMounted.t.delete(atom2);
              }
            }
          }
        });
        const mountAtom = buildingBlockFunctions[7] || ((atom2) => {
          var _a;
          const atomState = ensureAtomState(atom2);
          let mounted = mountedMap.get(atom2);
          if (!mounted) {
            readAtomState(atom2);
            for (const a3 of atomState.d.keys()) {
              const aMounted = mountAtom(a3);
              aMounted.t.add(atom2);
            }
            mounted = {
              l: /* @__PURE__ */ new Set(),
              d: new Set(atomState.d.keys()),
              t: /* @__PURE__ */ new Set()
            };
            mountedMap.set(atom2, mounted);
            (_a = storeHooks.m) == null ? void 0 : _a.call(storeHooks, atom2);
            if (isActuallyWritableAtom(atom2)) {
              const processOnMount = () => {
                let isSync = true;
                const setAtom = (...args) => {
                  try {
                    return writeAtomState(atom2, ...args);
                  } finally {
                    if (!isSync) {
                      recomputeInvalidatedAtoms();
                      flushCallbacks();
                    }
                  }
                };
                try {
                  const onUnmount = atomOnMount(atom2, setAtom);
                  if (onUnmount) {
                    mounted.u = () => {
                      isSync = true;
                      try {
                        onUnmount();
                      } finally {
                        isSync = false;
                      }
                    };
                  }
                } finally {
                  isSync = false;
                }
              };
              mountCallbacks.add(processOnMount);
            }
          }
          return mounted;
        });
        const unmountAtom = buildingBlockFunctions[8] || ((atom2) => {
          var _a;
          const atomState = ensureAtomState(atom2);
          let mounted = mountedMap.get(atom2);
          if (mounted && !mounted.l.size && !Array.from(mounted.t).some((a3) => {
            var _a2;
            return (_a2 = mountedMap.get(a3)) == null ? void 0 : _a2.d.has(atom2);
          })) {
            if (mounted.u) {
              unmountCallbacks.add(mounted.u);
            }
            mounted = void 0;
            mountedMap.delete(atom2);
            (_a = storeHooks.u) == null ? void 0 : _a.call(storeHooks, atom2);
            for (const a3 of atomState.d.keys()) {
              const aMounted = unmountAtom(a3);
              aMounted == null ? void 0 : aMounted.t.delete(atom2);
            }
            return void 0;
          }
          return mounted;
        });
        const buildingBlocks = [
          // store state
          atomStateMap,
          mountedMap,
          invalidatedAtoms,
          changedAtoms,
          mountCallbacks,
          unmountCallbacks,
          storeHooks,
          // atom interceptors
          atomRead,
          atomWrite,
          atomOnInit,
          atomOnMount,
          // building-block functions
          ensureAtomState,
          flushCallbacks,
          recomputeInvalidatedAtoms,
          readAtomState,
          invalidateDependents,
          writeAtomState,
          mountDependencies,
          mountAtom,
          unmountAtom
        ];
        const store = {
          get: (atom2) => returnAtomValue(readAtomState(atom2)),
          set: (atom2, ...args) => {
            try {
              return writeAtomState(atom2, ...args);
            } finally {
              recomputeInvalidatedAtoms();
              flushCallbacks();
            }
          },
          sub: (atom2, listener) => {
            const mounted = mountAtom(atom2);
            const listeners = mounted.l;
            listeners.add(listener);
            flushCallbacks();
            return () => {
              listeners.delete(listener);
              unmountAtom(atom2);
              flushCallbacks();
            };
          }
        };
        Object.defineProperty(store, BUILDING_BLOCKS, { value: buildingBlocks });
        return store;
      };
      INTERNAL_buildStoreRev1 = buildStore;
      INTERNAL_initializeStoreHooks = initializeStoreHooks;
      INTERNAL_registerAbortHandler = registerAbortHandler;
    }
  });

  // node_modules/jotai/esm/vanilla.mjs
  function atom(read, write) {
    const key = `atom${++keyCount}`;
    const config = {
      toString() {
        return (import_meta2.env ? import_meta2.env.MODE : void 0) !== "production" && this.debugLabel ? key + ":" + this.debugLabel : key;
      }
    };
    if (typeof read === "function") {
      config.read = read;
    } else {
      config.init = read;
      config.read = defaultRead;
      config.write = defaultWrite;
    }
    if (write) {
      config.write = write;
    }
    return config;
  }
  function defaultRead(get) {
    return get(this);
  }
  function defaultWrite(get, set, arg) {
    return set(
      this,
      typeof arg === "function" ? arg(get(this)) : arg
    );
  }
  function createStore() {
    if (overiddenCreateStore) {
      return overiddenCreateStore();
    }
    if ((import_meta2.env ? import_meta2.env.MODE : void 0) !== "production") {
      return createDevStoreRev4();
    }
    return INTERNAL_buildStoreRev1();
  }
  function getDefaultStore() {
    if (!defaultStore) {
      defaultStore = createStore();
      if ((import_meta2.env ? import_meta2.env.MODE : void 0) !== "production") {
        globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
        if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
          console.warn(
            "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
          );
        }
      }
    }
    return defaultStore;
  }
  var import_meta2, keyCount, createDevStoreRev4, overiddenCreateStore, defaultStore;
  var init_vanilla = __esm({
    "node_modules/jotai/esm/vanilla.mjs"() {
      init_internals();
      import_meta2 = {};
      keyCount = 0;
      createDevStoreRev4 = () => {
        let inRestoreAtom = 0;
        const storeHooks = INTERNAL_initializeStoreHooks({});
        const atomStateMap = /* @__PURE__ */ new WeakMap();
        const mountedAtoms = /* @__PURE__ */ new WeakMap();
        const store = INTERNAL_buildStoreRev1(
          atomStateMap,
          mountedAtoms,
          void 0,
          void 0,
          void 0,
          void 0,
          storeHooks,
          void 0,
          (atom2, get, set, ...args) => {
            if (inRestoreAtom) {
              return set(atom2, ...args);
            }
            return atom2.write(get, set, ...args);
          }
        );
        const debugMountedAtoms = /* @__PURE__ */ new Set();
        storeHooks.m.add(void 0, (atom2) => {
          debugMountedAtoms.add(atom2);
          const atomState = atomStateMap.get(atom2);
          atomState.m = mountedAtoms.get(atom2);
        });
        storeHooks.u.add(void 0, (atom2) => {
          debugMountedAtoms.delete(atom2);
          const atomState = atomStateMap.get(atom2);
          delete atomState.m;
        });
        const devStore = {
          // store dev methods (these are tentative and subject to change without notice)
          dev4_get_internal_weak_map: () => {
            console.log("Deprecated: Use devstore from the devtools library");
            return atomStateMap;
          },
          dev4_get_mounted_atoms: () => debugMountedAtoms,
          dev4_restore_atoms: (values) => {
            const restoreAtom = {
              read: () => null,
              write: (_get, set) => {
                ++inRestoreAtom;
                try {
                  for (const [atom2, value] of values) {
                    if ("init" in atom2) {
                      set(atom2, value);
                    }
                  }
                } finally {
                  --inRestoreAtom;
                }
              }
            };
            store.set(restoreAtom);
          }
        };
        return Object.assign(store, devStore);
      };
    }
  });

  // node_modules/jotai/esm/react.mjs
  function useStore(options) {
    const store = x2(StoreContext);
    return (options == null ? void 0 : options.store) || store || getDefaultStore();
  }
  function useAtomValue(atom2, options) {
    const { delay, unstable_promiseStatus: promiseStatus = !Rn.use } = options || {};
    const store = useStore(options);
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = h2(
      (prev) => {
        const nextValue = store.get(atom2);
        if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom2) {
          return prev;
        }
        return [nextValue, store, atom2];
      },
      void 0,
      () => [store.get(atom2), store, atom2]
    );
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom2) {
      rerender();
      value = store.get(atom2);
    }
    y2(() => {
      const unsub = store.sub(atom2, () => {
        if (promiseStatus) {
          try {
            const value2 = store.get(atom2);
            if (isPromiseLike2(value2)) {
              attachPromiseStatus(
                createContinuablePromise(value2, () => store.get(atom2))
              );
            }
          } catch (e3) {
          }
        }
        if (typeof delay === "number") {
          setTimeout(rerender, delay);
          return;
        }
        rerender();
      });
      rerender();
      return unsub;
    }, [store, atom2, delay, promiseStatus]);
    P2(value);
    if (isPromiseLike2(value)) {
      const promise = createContinuablePromise(value, () => store.get(atom2));
      if (promiseStatus) {
        attachPromiseStatus(promise);
      }
      return use(promise);
    }
    return value;
  }
  function useSetAtom(atom2, options) {
    const store = useStore(options);
    const setAtom = q2(
      (...args) => {
        if ((import_meta3.env ? import_meta3.env.MODE : void 0) !== "production" && !("write" in atom2)) {
          throw new Error("not writable atom");
        }
        return store.set(atom2, ...args);
      },
      [store, atom2]
    );
    return setAtom;
  }
  function useAtom(atom2, options) {
    return [
      useAtomValue(atom2, options),
      // We do wrong type assertion here, which results in throwing an error.
      useSetAtom(atom2, options)
    ];
  }
  var import_meta3, StoreContext, isPromiseLike2, attachPromiseStatus, use, continuablePromiseMap, createContinuablePromise;
  var init_react = __esm({
    "node_modules/jotai/esm/react.mjs"() {
      "use client";
      init_compat_module();
      init_vanilla();
      init_internals();
      import_meta3 = {};
      StoreContext = K(
        void 0
      );
      isPromiseLike2 = (x4) => typeof (x4 == null ? void 0 : x4.then) === "function";
      attachPromiseStatus = (promise) => {
        if (!promise.status) {
          promise.status = "pending";
          promise.then(
            (v3) => {
              promise.status = "fulfilled";
              promise.value = v3;
            },
            (e3) => {
              promise.status = "rejected";
              promise.reason = e3;
            }
          );
        }
      };
      use = Rn.use || // A shim for older React versions
      ((promise) => {
        if (promise.status === "pending") {
          throw promise;
        } else if (promise.status === "fulfilled") {
          return promise.value;
        } else if (promise.status === "rejected") {
          throw promise.reason;
        } else {
          attachPromiseStatus(promise);
          throw promise;
        }
      });
      continuablePromiseMap = /* @__PURE__ */ new WeakMap();
      createContinuablePromise = (promise, getValue) => {
        let continuablePromise = continuablePromiseMap.get(promise);
        if (!continuablePromise) {
          continuablePromise = new Promise((resolve, reject) => {
            let curr = promise;
            const onFulfilled = (me) => (v3) => {
              if (curr === me) {
                resolve(v3);
              }
            };
            const onRejected = (me) => (e3) => {
              if (curr === me) {
                reject(e3);
              }
            };
            const onAbort = () => {
              try {
                const nextValue = getValue();
                if (isPromiseLike2(nextValue)) {
                  continuablePromiseMap.set(nextValue, continuablePromise);
                  curr = nextValue;
                  nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
                  INTERNAL_registerAbortHandler(nextValue, onAbort);
                } else {
                  resolve(nextValue);
                }
              } catch (e3) {
                reject(e3);
              }
            };
            promise.then(onFulfilled(promise), onRejected(promise));
            INTERNAL_registerAbortHandler(promise, onAbort);
          });
          continuablePromiseMap.set(promise, continuablePromise);
        }
        return continuablePromise;
      };
    }
  });

  // node_modules/jotai/esm/index.mjs
  var init_esm = __esm({
    "node_modules/jotai/esm/index.mjs"() {
      init_vanilla();
      init_react();
    }
  });

  // src/state/atoms.ts
  var initializedSelectedComponentAtom, availableComponentsAtom, selectedComponentAtom;
  var init_atoms = __esm({
    "src/state/atoms.ts"() {
      "use strict";
      init_esm();
      initializedSelectedComponentAtom = atom(null);
      availableComponentsAtom = atom([]);
      selectedComponentAtom = atom((get) => {
        return get(initializedSelectedComponentAtom);
      });
    }
  });

  // src/ui components/Dropdown.tsx
  function DropdownComponent({ components: components2 }) {
    const dropdownOptions = createDropdownOptions(components2);
    const [value, setValue] = useAtom(initializedSelectedComponentAtom);
    const [, setAvailableComponents] = useAtom(availableComponentsAtom);
    y2(() => {
      setAvailableComponents(components2);
    }, [components2]);
    function handleChange(event) {
      const newValue = event.currentTarget.value;
      console.log(newValue);
      setValue(newValue);
    }
    return /* @__PURE__ */ _(Dropdown, { onChange: handleChange, options: dropdownOptions, value });
  }
  function createDropdownOptions(strings) {
    return strings.map((str) => ({ value: str }));
  }
  var init_Dropdown = __esm({
    "src/ui components/Dropdown.tsx"() {
      "use strict";
      init_preact_module();
      init_esm();
      init_hooks_module();
      init_lib2();
      init_atoms();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [count, setCount] = d2(5);
    const [countString, setCountString] = d2("5");
    const handleCreateRectanglesButtonClick = q2(
      function() {
        if (count !== null) {
          emit("CREATE_RECTANGLES", count);
        }
      },
      [count]
    );
    const handleCloseButtonClick = q2(function() {
      emit("CLOSE");
    }, []);
    return /* @__PURE__ */ _(Container, { space: "medium" }, /* @__PURE__ */ _(VerticalSpace, { space: "small" }), /* @__PURE__ */ _(DropdownComponent, { components: Object.keys(components) }), /* @__PURE__ */ _(VerticalSpace, { space: "small" }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_componentData();
      init_Dropdown();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
