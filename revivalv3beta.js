// ==UserScript==
// @name        Revival v3(Beta)
// @version     v2.72
// @description Privat
// @author      FZ
// @match       *://moomoo.io/*
// @match       *://sandbox.moomoo.io/*
// @icon        https://sandbox.moomoo.io/img/icons/crown.png
// @require
// @require
// @require
// @grant       none
// ==/UserScript==



var moomooVer = $('#linksContainer2 .menuLink').html(),
    hideSelectors = ['#mobileDownloadButtonContainer',
                     '#followText',
                     '#smallLinks',
                     '#linksContainer1',
                     '#twitterFollow',
                     '#youtubeFollow',
                     '#cdm-zone-02',
                     '#youtuberOf',
                     '#downloadButtonContainer',
                     '#promoImg',
                     '.menuHeader',
                     '.menuLink',
                     '.menuHeader:nth-child(5)',
                     '.menuHeader:nth-child(6)',
                     '.menuText',
                     '#adCard',
                     '#promoImgHolder',
                     ],

    css = '#rightCardHolder {display: block!important}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

for ( let i = 0; i < hideSelectors.length; i++ ) {
    $(hideSelectors[i]).hide();
}

head.appendChild(style);
$('#linksContainer2').html('<a href="./docs/versions.txt" target="_blank" class="menuLink">' + moomooVer + '</a>');

// document.getElementById('promoImgHolder').innerHTML = '</iframe><iframe width="420px" height="236.25px" src="https://www.youtube-nocookie.com/embed/GPATUFiWoTI" frameborder="0" allowfullscreen></iframe>';
// document.getElementById('adCard').innerHTML = '<iframe width="420px" height="236.25px" src="https://www.youtube-nocookie.com/embed/D3_2AIOEnZQ" frameborder="0" allowfullscreen></iframe>';
// document.getElementById('downloadButtonContainer').innerHTML = '</iframe><iframe width="420px" height="236.25px" src="http://icecast3.play.cz/evropa2-128.mp3"></iframe>';

// document.getElementById("gameUI").style.backgroundImage = "url('')";
// document.getElementById("mainMenu").style.backgroundImage = "url('')";
document.getElementById('enterGame').innerHTML = 'Enter Game';
document.getElementById('enterGame').style.color = 'White';
document.getElementById('loadingText').innerHTML = 'Revival v3';
document.getElementById('nameInput').placeholder = "mod";
document.getElementById('diedText').innerHTML = 'It ok, Just Try Again!';
document.getElementById('gameName').innerHTML = 'revival v3';
document.getElementById("leaderboard").append ('');
document.getElementById("leaderboard").style.color = "#8ecc51";

setInterval(() => {
    setTimeout(() => {
        document.getElementById("gameName").innerHTML = "Revival v3"
        setTimeout(() => {
            document.getElementById("gameName").innerHTML = "Mod"
            setTimeout(() => {
                document.getElementById("gameName").innerHTML = "Revivla v3"
                setTimeout(() => {
                    document.getElementById("gameName").innerHTML = "Mod"
                    setTimeout(() => {
                        document.getElementById("gameName").innerHTML = "Revival v3"
                        setTimeout(() => {
                            document.getElementById("gameName").innerHTML = "Mod"
                            setTimeout(() => {
                                document.getElementById("gameName").innerHTML = "Revival v3"
                                setTimeout(() => {
                                    document.getElementById("gameName").innerHTML = "Mod"
                                    setTimeout(() => {
                                        document.getElementById("gameName").innerHTML = "Revival v3"
                                        setTimeout(() => {
                                            document.getElementById("gameName").innerHTML = "Mod"
                                            setTimeout(() => {
                                                document.getElementById("gameName").innerHTML = "Revival v3"
                                                setTimeout(() => {
                                                       document.getElementById("gameName").innerHTML = "Mod"
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
setInterval(() => {
    setTimeout(() => {
        document.getElementById('chatBox').placeholder = "Enter";
        setTimeout(() => {
            document.getElementById('chatBox').placeholder = "Message";
            setTimeout(() => {
                document.getElementById('chatBox').placeholder = "Enter";
                setTimeout(() => {
                    document.getElementById('chatBox').placeholder = "Message";
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}, 500)
$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'center',
                    'background-color': 'rgba(255, 255, 255)',
                    '-moz-box-shadow': '0px 0px rgba(255, 255, 55, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px'});

$('#menuContainer').css({'white-space': 'normal'});

$('#nativeResolution').css({'cursor': 'pointer'});

$('#playMusic').css({'cursor': 'pointer'});

$('#guideCard').css({'overflow-y': 'hidden',
                     'margin-top': 'auto',
                     'margin-bottom': '30px'});

$('#serverSelect').css({'margin-bottom': '30.75px'});

$('#skinColorHolder').css({'margin-bottom': '30.75px'});

$('.settingRadio').css({'margin-bottom': '30.75px'});

$('#partyButton').css({'right': '70%',
                       'left': '10%',
                       'text-align': 'center',
                       'bottom': '48px',
                       'font-size': '24px',
                       'top': 'unset'});

$('#joinPartyButton').css({'right': '10%',
                           'left': '70%',
                           'text-align': 'center',
                           'bottom': '48px',
                           'font-size': '24px',
                           'top': 'unset'});

$('#linksContainer2').css({'-webkit-border-radius': '0px 0 0 0',
                           '-moz-border-radius': '0px 0 0 0',
                           'border-radius': '0px 0 0 0',
                           'right': '44%',
                           'left': '44%',
                           'background-color': 'rgba(0, 0, 0, 0.74)',
                           'text-align': 'center',
                           'bottom': '12px'});

$('#gameName').css({'color': 'white',
                    'text-shadow': '0 1px 0 rgba(255, 255, 255, 0), 0 2px 0 rgba(255, 255, 255, 0), 0 3px 0 rgba(255, 255, 255, 0), 0 4px 0 rgba(255, 255, 255, 0), 0 5px 0 rgba(255, 255, 255, 0), 0 6px 0 rgba(255, 255, 255, 0), 0 7px 0 rgba(255, 255, 255, 0), 0 8px 0 rgba(255, 255, 255, 0), 0 9px 0 rgba(255, 255, 255, 0)',
                    'text-align': 'center',
                    'font-size': '156px',
                    'margin-bottom': '-30px'});

$('#loadingText').css({'color': 'white',
                       'background-color': 'rgba(0, 0, 0, 0.74)',
                       'padding': '8px',
                       'right': '150%',
                       'left': '150%',
                       'margin-top': '40px'});

$('.ytLink').css({'color': 'white',
                  'padding': '8px',
                  'background-color': 'rgba(235, 255, 0, 0.74)'});

$('.menuLink').css({'color': 'white'});

$('#nameInput').css({'border-radius': '0px',
                     '-moz-border-radius': '0px',
                     '-webkit-border-radius': '0px',
                     'border': 'hidden'});

$('#serverSelect').css({'cursor': 'pointer',
                        'color': 'white',
                        'background-color': 'white',
                        'border': 'hidden',
                        'font-size': '20px'});

$('.menuButton').css({'border-radius': '0px',
                      '-moz-border-radius': '0px',
                      '-webkit-border-radius': '0px'});

$('#promoImgHolder').css({'position': 'absolute',
                          'bottom': '-7%',
                          'left': '20px',
                          'width': '420px',
                          'height': '236.25px',
                          'padding-bottom': '18px',
                          'margin-top': '0px'});

$('#adCard').css({'position': 'absolute',
                  'bottom': '-7%',
                  'right': '20px',
                  'width': '420px',
                  'height': '236.25px',
                  'padding-bottom': '18px'});

$('#mapDisplay').css({'-webkit-border-radius': '0px',
                      '-moz-border-radius': '0px',
                      'border-radius': '0px'});

$('.menuHeader').css({'color': '#fff'});

$('#killCounter').css({'color': '#fff'});

$('#diedText').css({'background-color': 'clear'});

$('#gameCanvas').css({'background-color': 'clear'});

$('#allianceButton').css({'color': 'white'});

$('#storeButton').css({'color': 'white'});

$('#chatButton').css({'color': 'white'});

$('.gameButton').css({'-webkit-border-radius': '0px 0 0 0',
                      '-moz-border-radius': '0px 0 0 0',
                      'border-radius': '0px 0 0 0',
                      'background-color': 'rgba(0, 0, 0, 0.4)'});

$('.uiElement, .resourceDisplay').css({'-webkit-border-radius': '0px',
                                       '-moz-border-radius': '0px',
                                       'border-radius': '0px',
                                       'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#chatBox').css({'-webkit-border-radius': '0px',
                   '-moz-border-radius': '0px',
                   'border-radius': '0px',
                   'background-color': 'rgba(0, 0, 0, 0.4)',
                   'text-align': 'center'});

$('#foodDisplay').css({'color': 'white'});

$('#woodDisplay').css({'color': 'white'});

$('#stoneDisplay').css({'color': 'white'});

$('#scoreDisplay').css({'color': 'white'});

$('#leaderboard').css({'-webkit-border-radius': '0px',
                       '-moz-border-radius': '0px',
                       'border-radius': '0px',
                       'background-color': 'rgb((255,240,245))',
                       'text-align': 'center'});

$('#ageText').css({'color': '#fff'});

$('#ageBar').css({'-webkit-border-radius': '0px',
                  '-moz-border-radius': '0px',
                  'border-radius': '0px',
                  'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#ageBarBody').css({'-webkit-border-radius': '0px',
                      '-moz-border-radius': '0px',
                      'border-radius': '0px',
                      'background-color': '#fff'});

$('.storeTab').css({'-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#storeHolder').css({'-webkit-border-radius': '0px',
                       '-moz-border-radius': '0px',
                       'border-radius': '0px',
                       'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#allianceHolder').css({'-webkit-border-radius': '0px',
                          '-moz-border-radius': '0px',
                          'border-radius': '0px',
                          'background-color': 'rgba(0, 0, 0, 0.4)'});

$('.actionBarItem').css({'-webkit-border-radius': '0px',
                         'border-radius': '0px',
                         'background-color': 'rgba(0, 0, 0, 0.4)'});


var myElement = document.querySelector('#nameInput');
myElement.style.backgroundColor = "#808080";
myElement.style.color = "white";

var myElement = document.querySelector('#enterGame');
myElement.style.backgroundColor = "clear";
myElement.style.color = "white";


document.title = "revival v3"
var tick = 0;
/*let newPingDisplay = document.createElement("div");
newPingDisplay = document.getElementById("pingDisplay");
newPingDisplay.style.top = "20px";
newPingDisplay.style.fontSize = "15px";
newPingDisplay.style.display = "block";
document.body.append(newPingDisplay);*/
window.onbeforeunload = null;
! function () {
    "use strict";
    setInterval(() => {
        document.getElementById("onetrust-consent-sdk") && "complete" == document.readyState && document.getElementById("onetrust-consent-sdk").remove()
    }, 100)
}();
!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(i, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 21)
}([function(e, t, n) {
    var i = t.global = n(25)
      , r = t.hasBuffer = i && !!i.isBuffer
      , s = t.hasArrayBuffer = "undefined" != typeof ArrayBuffer
      , a = t.isArray = n(5);
    t.isArrayBuffer = s ? function(e) {
        return e instanceof ArrayBuffer || p(e)
    }
    : m;
    var o = t.isBuffer = r ? i.isBuffer : m
      , c = t.isView = s ? ArrayBuffer.isView || y("ArrayBuffer", "buffer") : m;
    t.alloc = d,
    t.concat = function(e, n) {
        n || (n = 0,
        Array.prototype.forEach.call(e, (function(e) {
            n += e.length
        }
        )));
        var i = this !== t && this || e[0]
          , r = d.call(i, n)
          , s = 0;
        return Array.prototype.forEach.call(e, (function(e) {
            s += f.copy.call(e, r, s)
        }
        )),
        r
    }
    ,
    t.from = function(e) {
        return "string" == typeof e ? function(e) {
            var t = 3 * e.length
              , n = d.call(this, t)
              , i = f.write.call(n, e);
            return t !== i && (n = f.slice.call(n, 0, i)),
            n
        }
        .call(this, e) : g(this).from(e)
    }
    ;
    var l = t.Array = n(28)
      , h = t.Buffer = n(29)
      , u = t.Uint8Array = n(30)
      , f = t.prototype = n(6);
    function d(e) {
        return g(this).alloc(e)
    }
    var p = y("ArrayBuffer");
    function g(e) {
        return o(e) ? h : c(e) ? u : a(e) ? l : r ? h : s ? u : l
    }
    function m() {
        return !1
    }
    function y(e, t) {
        return e = "[object " + e + "]",
        function(n) {
            return null != n && {}.toString.call(t ? n[t] : n) === e
        }
    }
}
, function(e, t, n) {
    var i = n(5);
    t.createCodec = o,
    t.install = function(e) {
        for (var t in e)
            s.prototype[t] = a(s.prototype[t], e[t])
    }
    ,
    t.filter = function(e) {
        return i(e) ? function(e) {
            return e = e.slice(),
            function(n) {
                return e.reduce(t, n)
            }
            ;
            function t(e, t) {
                return t(e)
            }
        }(e) : e
    }
    ;
    var r = n(0);
    function s(e) {
        if (!(this instanceof s))
            return new s(e);
        this.options = e,
        this.init()
    }
    function a(e, t) {
        return e && t ? function() {
            return e.apply(this, arguments),
            t.apply(this, arguments)
        }
        : e || t
    }
    function o(e) {
        return new s(e)
    }
    s.prototype.init = function() {
        var e = this.options;
        return e && e.uint8array && (this.bufferish = r.Uint8Array),
        this
    }
    ,
    t.preset = o({
        preset: !0
    })
}
, function(e, t, n) {
    var i = n(3).ExtBuffer
      , r = n(32)
      , s = n(33)
      , a = n(1);
    function o() {
        var e = this.options;
        return this.encode = function(e) {
            var t = s.getWriteType(e);
            return function(e, n) {
                var i = t[typeof n];
                if (!i)
                    throw new Error('Unsupported type "' + typeof n + '": ' + n);
                i(e, n)
            }
        }(e),
        e && e.preset && r.setExtPackers(this),
        this
    }
    a.install({
        addExtPacker: function(e, t, n) {
            n = a.filter(n);
            var r = t.name;
            r && "Object" !== r ? (this.extPackers || (this.extPackers = {}))[r] = s : (this.extEncoderList || (this.extEncoderList = [])).unshift([t, s]);
            function s(t) {
                return n && (t = n(t)),
                new i(t,e)
            }
        },
        getExtPacker: function(e) {
            var t = this.extPackers || (this.extPackers = {})
              , n = e.constructor
              , i = n && n.name && t[n.name];
            if (i)
                return i;
            for (var r = this.extEncoderList || (this.extEncoderList = []), s = r.length, a = 0; a < s; a++) {
                var o = r[a];
                if (n === o[0])
                    return o[1]
            }
        },
        init: o
    }),
    t.preset = o.call(a.preset)
}
, function(e, t, n) {
    t.ExtBuffer = function e(t, n) {
        if (!(this instanceof e))
            return new e(t,n);
        this.buffer = i.from(t),
        this.type = n
    }
    ;
    var i = n(0)
}
, function(e, t) {
    t.read = function(e, t, n, i, r) {
        var s, a, o = 8 * r - i - 1, c = (1 << o) - 1, l = c >> 1, h = -7, u = n ? r - 1 : 0, f = n ? -1 : 1, d = e[t + u];
        for (u += f,
        s = d & (1 << -h) - 1,
        d >>= -h,
        h += o; h > 0; s = 256 * s + e[t + u],
        u += f,
        h -= 8)
            ;
        for (a = s & (1 << -h) - 1,
        s >>= -h,
        h += i; h > 0; a = 256 * a + e[t + u],
        u += f,
        h -= 8)
            ;
        if (0 === s)
            s = 1 - l;
        else {
            if (s === c)
                return a ? NaN : 1 / 0 * (d ? -1 : 1);
            a += Math.pow(2, i),
            s -= l
        }
        return (d ? -1 : 1) * a * Math.pow(2, s - i)
    }
    ,
    t.write = function(e, t, n, i, r, s) {
        var a, o, c, l = 8 * s - r - 1, h = (1 << l) - 1, u = h >> 1, f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : s - 1, p = i ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0,
        a = h) : (a = Math.floor(Math.log(t) / Math.LN2),
        t * (c = Math.pow(2, -a)) < 1 && (a--,
        c *= 2),
        (t += a + u >= 1 ? f / c : f * Math.pow(2, 1 - u)) * c >= 2 && (a++,
        c /= 2),
        a + u >= h ? (o = 0,
        a = h) : a + u >= 1 ? (o = (t * c - 1) * Math.pow(2, r),
        a += u) : (o = t * Math.pow(2, u - 1) * Math.pow(2, r),
        a = 0)); r >= 8; e[n + d] = 255 & o,
        d += p,
        o /= 256,
        r -= 8)
            ;
        for (a = a << r | o,
        l += r; l > 0; e[n + d] = 255 & a,
        d += p,
        a /= 256,
        l -= 8)
            ;
        e[n + d - p] |= 128 * g
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}
, function(e, t, n) {
    var i = n(31);
    t.copy = c,
    t.slice = l,
    t.toString = function(e, t, n) {
        return (!a && r.isBuffer(this) ? this.toString : i.toString).apply(this, arguments)
    }
    ,
    t.write = function(e) {
        return function() {
            return (this[e] || i[e]).apply(this, arguments)
        }
    }("write");
    var r = n(0)
      , s = r.global
      , a = r.hasBuffer && "TYPED_ARRAY_SUPPORT"in s
      , o = a && !s.TYPED_ARRAY_SUPPORT;
    function c(e, t, n, s) {
        var a = r.isBuffer(this)
          , c = r.isBuffer(e);
        if (a && c)
            return this.copy(e, t, n, s);
        if (o || a || c || !r.isView(this) || !r.isView(e))
            return i.copy.call(this, e, t, n, s);
        var h = n || null != s ? l.call(this, n, s) : this;
        return e.set(h, t),
        h.length
    }
    function l(e, t) {
        var n = this.slice || !o && this.subarray;
        if (n)
            return n.call(this, e, t);
        var i = r.alloc.call(this, t - e);
        return c.call(this, i, 0, e, t),
        i
    }
}
, function(e, t, n) {
    (function(e) {
        !function(t) {
            var n, i = "undefined", r = i !== typeof e && e, s = i !== typeof Uint8Array && Uint8Array, a = i !== typeof ArrayBuffer && ArrayBuffer, o = [0, 0, 0, 0, 0, 0, 0, 0], c = Array.isArray || function(e) {
                return !!e && "[object Array]" == Object.prototype.toString.call(e)
            }
            , l = 4294967296;
            function h(e, c, h) {
                var b = c ? 0 : 4
                  , x = c ? 4 : 0
                  , S = c ? 0 : 3
                  , T = c ? 1 : 2
                  , I = c ? 2 : 1
                  , E = c ? 3 : 0
                  , M = c ? y : v
                  , A = c ? k : w
                  , P = O.prototype
                  , B = "is" + e
                  , C = "_" + B;
                return P.buffer = void 0,
                P.offset = 0,
                P[C] = !0,
                P.toNumber = R,
                P.toString = function(e) {
                    var t = this.buffer
                      , n = this.offset
                      , i = _(t, n + b)
                      , r = _(t, n + x)
                      , s = ""
                      , a = !h && 2147483648 & i;
                    for (a && (i = ~i,
                    r = l - r),
                    e = e || 10; ; ) {
                        var o = i % e * l + r;
                        if (i = Math.floor(i / e),
                        r = Math.floor(o / e),
                        s = (o % e).toString(e) + s,
                        !i && !r)
                            break
                    }
                    return a && (s = "-" + s),
                    s
                }
                ,
                P.toJSON = R,
                P.toArray = u,
                r && (P.toBuffer = f),
                s && (P.toArrayBuffer = d),
                O[B] = function(e) {
                    return !(!e || !e[C])
                }
                ,
                t[e] = O,
                O;
                function O(e, t, r, c) {
                    return this instanceof O ? function(e, t, r, c, h) {
                        if (s && a && (t instanceof a && (t = new s(t)),
                        c instanceof a && (c = new s(c))),
                        t || r || c || n) {
                            if (!p(t, r))
                                h = r,
                                c = t,
                                r = 0,
                                t = new (n || Array)(8);
                            e.buffer = t,
                            e.offset = r |= 0,
                            i !== typeof c && ("string" == typeof c ? function(e, t, n, i) {
                                var r = 0
                                  , s = n.length
                                  , a = 0
                                  , o = 0;
                                "-" === n[0] && r++;
                                for (var c = r; r < s; ) {
                                    var h = parseInt(n[r++], i);
                                    if (!(h >= 0))
                                        break;
                                    o = o * i + h,
                                    a = a * i + Math.floor(o / l),
                                    o %= l
                                }
                                c && (a = ~a,
                                o ? o = l - o : a++),
                                j(e, t + b, a),
                                j(e, t + x, o)
                            }(t, r, c, h || 10) : p(c, h) ? g(t, r, c, h) : "number" == typeof h ? (j(t, r + b, c),
                            j(t, r + x, h)) : c > 0 ? M(t, r, c) : c < 0 ? A(t, r, c) : g(t, r, o, 0))
                        } else
                            e.buffer = m(o, 0)
                    }(this, e, t, r, c) : new O(e,t,r,c)
                }
                function R() {
                    var e = this.buffer
                      , t = this.offset
                      , n = _(e, t + b)
                      , i = _(e, t + x);
                    return h || (n |= 0),
                    n ? n * l + i : i
                }
                function j(e, t, n) {
                    e[t + E] = 255 & n,
                    n >>= 8,
                    e[t + I] = 255 & n,
                    n >>= 8,
                    e[t + T] = 255 & n,
                    n >>= 8,
                    e[t + S] = 255 & n
                }
                function _(e, t) {
                    return 16777216 * e[t + S] + (e[t + T] << 16) + (e[t + I] << 8) + e[t + E]
                }
            }
            function u(e) {
                var t = this.buffer
                  , i = this.offset;
                return n = null,
                !1 !== e && 0 === i && 8 === t.length && c(t) ? t : m(t, i)
            }
            function f(t) {
                var i = this.buffer
                  , s = this.offset;
                if (n = r,
                !1 !== t && 0 === s && 8 === i.length && e.isBuffer(i))
                    return i;
                var a = new r(8);
                return g(a, 0, i, s),
                a
            }
            function d(e) {
                var t = this.buffer
                  , i = this.offset
                  , r = t.buffer;
                if (n = s,
                !1 !== e && 0 === i && r instanceof a && 8 === r.byteLength)
                    return r;
                var o = new s(8);
                return g(o, 0, t, i),
                o.buffer
            }
            function p(e, t) {
                var n = e && e.length;
                return t |= 0,
                n && t + 8 <= n && "string" != typeof e[t]
            }
            function g(e, t, n, i) {
                t |= 0,
                i |= 0;
                for (var r = 0; r < 8; r++)
                    e[t++] = 255 & n[i++]
            }
            function m(e, t) {
                return Array.prototype.slice.call(e, t, t + 8)
            }
            function y(e, t, n) {
                for (var i = t + 8; i > t; )
                    e[--i] = 255 & n,
                    n /= 256
            }
            function k(e, t, n) {
                var i = t + 8;
                for (n++; i > t; )
                    e[--i] = 255 & -n ^ 255,
                    n /= 256
            }
            function v(e, t, n) {
                for (var i = t + 8; t < i; )
                    e[t++] = 255 & n,
                    n /= 256
            }
            function w(e, t, n) {
                var i = t + 8;
                for (n++; t < i; )
                    e[t++] = 255 & -n ^ 255,
                    n /= 256
            }
            h("Uint64BE", !0, !0),
            h("Int64BE", !0, !1),
            h("Uint64LE", !1, !0),
            h("Int64LE", !1, !1)
        }("string" != typeof t.nodeName ? t : this || {})
    }
    ).call(this, n(11).Buffer)
}
, function(e, t, n) {
    var i = n(3).ExtBuffer
      , r = n(35)
      , s = n(17).readUint8
      , a = n(36)
      , o = n(1);
    function c() {
        var e = this.options;
        return this.decode = function(e) {
            var t = a.getReadToken(e);
            return function(e) {
                var n = s(e)
                  , i = t[n];
                if (!i)
                    throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) : n));
                return i(e)
            }
        }(e),
        e && e.preset && r.setExtUnpackers(this),
        this
    }
    o.install({
        addExtUnpacker: function(e, t) {
            (this.extUnpackers || (this.extUnpackers = []))[e] = o.filter(t)
        },
        getExtUnpacker: function(e) {
            return (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
                return new i(t,e)
            }
        },
        init: c
    }),
    t.preset = c.call(o.preset)
}
, function(e, t, n) {
    t.encode = function(e, t) {
        var n = new i(t);
        return n.write(e),
        n.read()
    }
    ;
    var i = n(10).EncodeBuffer
}
, function(e, t, n) {
    t.EncodeBuffer = r;
    var i = n(2).preset;
    function r(e) {
        if (!(this instanceof r))
            return new r(e);
        if (e && (this.options = e,
        e.codec)) {
            var t = this.codec = e.codec;
            t.bufferish && (this.bufferish = t.bufferish)
        }
    }
    n(14).FlexEncoder.mixin(r.prototype),
    r.prototype.codec = i,
    r.prototype.write = function(e) {
        this.codec.encode(this, e)
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
        var i = n(26)
          , r = n(4)
          , s = n(27);
        function a() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function o(e, t) {
            if (a() < t)
                throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)),
            e.length = t),
            e
        }
        function c(e, t, n) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
                return new c(e,t,n);
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return u(this, e)
            }
            return l(this, e, t, n)
        }
        function l(e, t, n, i) {
            if ("number" == typeof t)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, i) {
                if (t.byteLength,
                n < 0 || t.byteLength < n)
                    throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (i || 0))
                    throw new RangeError("'length' is out of bounds");
                return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t,n) : new Uint8Array(t,n,i),
                c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = f(e, t),
                e
            }(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"),
                !c.isEncoding(n))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | p(t, n)
                  , r = (e = o(e, i)).write(t, n);
                return r !== i && (e = e.slice(0, r)),
                e
            }(e, t, n) : function(e, t) {
                if (c.isBuffer(t)) {
                    var n = 0 | d(t.length);
                    return 0 === (e = o(e, n)).length || t.copy(e, 0, 0, n),
                    e
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                        return "number" != typeof t.length || function(e) {
                            return e != e
                        }(t.length) ? o(e, 0) : f(e, t);
                    if ("Buffer" === t.type && s(t.data))
                        return f(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }
        function h(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be a number');
            if (e < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function u(e, t) {
            if (h(t),
            e = o(e, t < 0 ? 0 : 0 | d(t)),
            !c.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n)
                    e[n] = 0;
            return e
        }
        function f(e, t) {
            var n = t.length < 0 ? 0 : 0 | d(t.length);
            e = o(e, n);
            for (var i = 0; i < n; i += 1)
                e[i] = 255 & t[i];
            return e
        }
        function d(e) {
            if (e >= a())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | e
        }
        function p(e, t) {
            if (c.isBuffer(e))
                return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n)
                return 0;
            for (var i = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return z(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return H(e).length;
                default:
                    if (i)
                        return z(e).length;
                    t = ("" + t).toLowerCase(),
                    i = !0
                }
        }
        function g(e, t, n) {
            var i = e[t];
            e[t] = e[n],
            e[n] = i
        }
        function m(e, t, n, i, r) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof n ? (i = n,
            n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
            n = +n,
            isNaN(n) && (n = r ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length) {
                if (r)
                    return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!r)
                    return -1;
                n = 0
            }
            if ("string" == typeof t && (t = c.from(t, i)),
            c.isBuffer(t))
                return 0 === t.length ? -1 : y(e, t, n, i, r);
            if ("number" == typeof t)
                return t &= 255,
                c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, i, r);
            throw new TypeError("val must be string, number or Buffer")
        }
        function y(e, t, n, i, r) {
            var s, a = 1, o = e.length, c = t.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                a = 2,
                o /= 2,
                c /= 2,
                n /= 2
            }
            function l(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (r) {
                var h = -1;
                for (s = n; s < o; s++)
                    if (l(e, s) === l(t, -1 === h ? 0 : s - h)) {
                        if (-1 === h && (h = s),
                        s - h + 1 === c)
                            return h * a
                    } else
                        -1 !== h && (s -= s - h),
                        h = -1
            } else
                for (n + c > o && (n = o - c),
                s = n; s >= 0; s--) {
                    for (var u = !0, f = 0; f < c; f++)
                        if (l(e, s + f) !== l(t, f)) {
                            u = !1;
                            break
                        }
                    if (u)
                        return s
                }
            return -1
        }
        function k(e, t, n, i) {
            n = Number(n) || 0;
            var r = e.length - n;
            i ? (i = Number(i)) > r && (i = r) : i = r;
            var s = t.length;
            if (s % 2 != 0)
                throw new TypeError("Invalid hex string");
            i > s / 2 && (i = s / 2);
            for (var a = 0; a < i; ++a) {
                var o = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(o))
                    return a;
                e[n + a] = o
            }
            return a
        }
        function v(e, t, n, i) {
            return V(z(t, e.length - n), e, n, i)
        }
        function w(e, t, n, i) {
            return V(function(e) {
                for (var t = [], n = 0; n < e.length; ++n)
                    t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, i)
        }
        function b(e, t, n, i) {
            return w(e, t, n, i)
        }
        function x(e, t, n, i) {
            return V(H(t), e, n, i)
        }
        function S(e, t, n, i) {
            return V(function(e, t) {
                for (var n, i, r, s = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                    i = (n = e.charCodeAt(a)) >> 8,
                    r = n % 256,
                    s.push(r),
                    s.push(i);
                return s
            }(t, e.length - n), e, n, i)
        }
        function T(e, t, n) {
            return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
        }
        function I(e, t, n) {
            n = Math.min(e.length, n);
            for (var i = [], r = t; r < n; ) {
                var s, a, o, c, l = e[r], h = null, u = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                if (r + u <= n)
                    switch (u) {
                    case 1:
                        l < 128 && (h = l);
                        break;
                    case 2:
                        128 == (192 & (s = e[r + 1])) && (c = (31 & l) << 6 | 63 & s) > 127 && (h = c);
                        break;
                    case 3:
                        s = e[r + 1],
                        a = e[r + 2],
                        128 == (192 & s) && 128 == (192 & a) && (c = (15 & l) << 12 | (63 & s) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (h = c);
                        break;
                    case 4:
                        s = e[r + 1],
                        a = e[r + 2],
                        o = e[r + 3],
                        128 == (192 & s) && 128 == (192 & a) && 128 == (192 & o) && (c = (15 & l) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & o) > 65535 && c < 1114112 && (h = c)
                    }
                null === h ? (h = 65533,
                u = 1) : h > 65535 && (h -= 65536,
                i.push(h >>> 10 & 1023 | 55296),
                h = 56320 | 1023 & h),
                i.push(h),
                r += u
            }
            return function(e) {
                var t = e.length;
                if (t <= E)
                    return String.fromCharCode.apply(String, e);
                for (var n = "", i = 0; i < t; )
                    n += String.fromCharCode.apply(String, e.slice(i, i += E));
                return n
            }(i)
        }
        t.Buffer = c,
        t.SlowBuffer = function(e) {
            return +e != e && (e = 0),
            c.alloc(+e)
        }
        ,
        t.INSPECT_MAX_BYTES = 50,
        c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(),
        t.kMaxLength = a(),
        c.poolSize = 8192,
        c._augment = function(e) {
            return e.__proto__ = c.prototype,
            e
        }
        ,
        c.from = function(e, t, n) {
            return l(null, e, t, n)
        }
        ,
        c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype,
        c.__proto__ = Uint8Array,
        "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
            value: null,
            configurable: !0
        })),
        c.alloc = function(e, t, n) {
            return function(e, t, n, i) {
                return h(t),
                t <= 0 ? o(e, t) : void 0 !== n ? "string" == typeof i ? o(e, t).fill(n, i) : o(e, t).fill(n) : o(e, t)
            }(null, e, t, n)
        }
        ,
        c.allocUnsafe = function(e) {
            return u(null, e)
        }
        ,
        c.allocUnsafeSlow = function(e) {
            return u(null, e)
        }
        ,
        c.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }
        ,
        c.compare = function(e, t) {
            if (!c.isBuffer(e) || !c.isBuffer(t))
                throw new TypeError("Arguments must be Buffers");
            if (e === t)
                return 0;
            for (var n = e.length, i = t.length, r = 0, s = Math.min(n, i); r < s; ++r)
                if (e[r] !== t[r]) {
                    n = e[r],
                    i = t[r];
                    break
                }
            return n < i ? -1 : i < n ? 1 : 0
        }
        ,
        c.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        c.concat = function(e, t) {
            if (!s(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return c.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0,
                n = 0; n < e.length; ++n)
                    t += e[n].length;
            var i = c.allocUnsafe(t)
              , r = 0;
            for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (!c.isBuffer(a))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(i, r),
                r += a.length
            }
            return i
        }
        ,
        c.byteLength = p,
        c.prototype._isBuffer = !0,
        c.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                g(this, t, t + 1);
            return this
        }
        ,
        c.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                g(this, t, t + 3),
                g(this, t + 1, t + 2);
            return this
        }
        ,
        c.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                g(this, t, t + 7),
                g(this, t + 1, t + 6),
                g(this, t + 2, t + 5),
                g(this, t + 3, t + 4);
            return this
        }
        ,
        c.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : function(e, t, n) {
                var i = !1;
                if ((void 0 === t || t < 0) && (t = 0),
                t > this.length)
                    return "";
                if ((void 0 === n || n > this.length) && (n = this.length),
                n <= 0)
                    return "";
                if ((n >>>= 0) <= (t >>>= 0))
                    return "";
                for (e || (e = "utf8"); ; )
                    switch (e) {
                    case "hex":
                        return P(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return I(this, t, n);
                    case "ascii":
                        return M(this, t, n);
                    case "latin1":
                    case "binary":
                        return A(this, t, n);
                    case "base64":
                        return T(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return B(this, t, n);
                    default:
                        if (i)
                            throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(),
                        i = !0
                    }
            }
            .apply(this, arguments)
        }
        ,
        c.prototype.equals = function(e) {
            if (!c.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === c.compare(this, e)
        }
        ,
        c.prototype.inspect = function() {
            var e = ""
              , n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
            this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
        }
        ,
        c.prototype.compare = function(e, t, n, i, r) {
            if (!c.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === i && (i = 0),
            void 0 === r && (r = this.length),
            t < 0 || n > e.length || i < 0 || r > this.length)
                throw new RangeError("out of range index");
            if (i >= r && t >= n)
                return 0;
            if (i >= r)
                return -1;
            if (t >= n)
                return 1;
            if (this === e)
                return 0;
            for (var s = (r >>>= 0) - (i >>>= 0), a = (n >>>= 0) - (t >>>= 0), o = Math.min(s, a), l = this.slice(i, r), h = e.slice(t, n), u = 0; u < o; ++u)
                if (l[u] !== h[u]) {
                    s = l[u],
                    a = h[u];
                    break
                }
            return s < a ? -1 : a < s ? 1 : 0
        }
        ,
        c.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }
        ,
        c.prototype.indexOf = function(e, t, n) {
            return m(this, e, t, n, !0)
        }
        ,
        c.prototype.lastIndexOf = function(e, t, n) {
            return m(this, e, t, n, !1)
        }
        ,
        c.prototype.write = function(e, t, n, i) {
            if (void 0 === t)
                i = "utf8",
                n = this.length,
                t = 0;
            else if (void 0 === n && "string" == typeof t)
                i = t,
                n = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0,
                isFinite(n) ? (n |= 0,
                void 0 === i && (i = "utf8")) : (i = n,
                n = void 0)
            }
            var r = this.length - t;
            if ((void 0 === n || n > r) && (n = r),
            e.length > 0 && (n < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var s = !1; ; )
                switch (i) {
                case "hex":
                    return k(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return v(this, e, t, n);
                case "ascii":
                    return w(this, e, t, n);
                case "latin1":
                case "binary":
                    return b(this, e, t, n);
                case "base64":
                    return x(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return S(this, e, t, n);
                default:
                    if (s)
                        throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(),
                    s = !0
                }
        }
        ,
        c.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var E = 4096;
        function M(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; r < n; ++r)
                i += String.fromCharCode(127 & e[r]);
            return i
        }
        function A(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; r < n; ++r)
                i += String.fromCharCode(e[r]);
            return i
        }
        function P(e, t, n) {
            var i = e.length;
            (!t || t < 0) && (t = 0),
            (!n || n < 0 || n > i) && (n = i);
            for (var r = "", s = t; s < n; ++s)
                r += F(e[s]);
            return r
        }
        function B(e, t, n) {
            for (var i = e.slice(t, n), r = "", s = 0; s < i.length; s += 2)
                r += String.fromCharCode(i[s] + 256 * i[s + 1]);
            return r
        }
        function C(e, t, n) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > n)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function O(e, t, n, i, r, s) {
            if (!c.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > r || t < s)
                throw new RangeError('"value" argument is out of bounds');
            if (n + i > e.length)
                throw new RangeError("Index out of range")
        }
        function R(e, t, n, i) {
            t < 0 && (t = 65535 + t + 1);
            for (var r = 0, s = Math.min(e.length - n, 2); r < s; ++r)
                e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
        }
        function j(e, t, n, i) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var r = 0, s = Math.min(e.length - n, 4); r < s; ++r)
                e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
        }
        function _(e, t, n, i, r, s) {
            if (n + i > e.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("Index out of range")
        }
        function U(e, t, n, i, s) {
            return s || _(e, 0, n, 4),
            r.write(e, t, n, i, 23, 4),
            n + 4
        }
        function D(e, t, n, i, s) {
            return s || _(e, 0, n, 8),
            r.write(e, t, n, i, 52, 8),
            n + 8
        }
        c.prototype.slice = function(e, t) {
            var n, i = this.length;
            if ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
            (t = void 0 === t ? i : ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
            t < e && (t = e),
            c.TYPED_ARRAY_SUPPORT)
                (n = this.subarray(e, t)).__proto__ = c.prototype;
            else {
                var r = t - e;
                n = new c(r,void 0);
                for (var s = 0; s < r; ++s)
                    n[s] = this[s + e]
            }
            return n
        }
        ,
        c.prototype.readUIntLE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || C(e, t, this.length);
            for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256); )
                i += this[e + s] * r;
            return i
        }
        ,
        c.prototype.readUIntBE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || C(e, t, this.length);
            for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); )
                i += this[e + --t] * r;
            return i
        }
        ,
        c.prototype.readUInt8 = function(e, t) {
            return t || C(e, 1, this.length),
            this[e]
        }
        ,
        c.prototype.readUInt16LE = function(e, t) {
            return t || C(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        c.prototype.readUInt16BE = function(e, t) {
            return t || C(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        c.prototype.readUInt32LE = function(e, t) {
            return t || C(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        c.prototype.readUInt32BE = function(e, t) {
            return t || C(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        c.prototype.readIntLE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || C(e, t, this.length);
            for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256); )
                i += this[e + s] * r;
            return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)),
            i
        }
        ,
        c.prototype.readIntBE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || C(e, t, this.length);
            for (var i = t, r = 1, s = this[e + --i]; i > 0 && (r *= 256); )
                s += this[e + --i] * r;
            return s >= (r *= 128) && (s -= Math.pow(2, 8 * t)),
            s
        }
        ,
        c.prototype.readInt8 = function(e, t) {
            return t || C(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        c.prototype.readInt16LE = function(e, t) {
            t || C(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        c.prototype.readInt16BE = function(e, t) {
            t || C(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        c.prototype.readInt32LE = function(e, t) {
            return t || C(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        c.prototype.readInt32BE = function(e, t) {
            return t || C(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        c.prototype.readFloatLE = function(e, t) {
            return t || C(e, 4, this.length),
            r.read(this, e, !0, 23, 4)
        }
        ,
        c.prototype.readFloatBE = function(e, t) {
            return t || C(e, 4, this.length),
            r.read(this, e, !1, 23, 4)
        }
        ,
        c.prototype.readDoubleLE = function(e, t) {
            return t || C(e, 8, this.length),
            r.read(this, e, !0, 52, 8)
        }
        ,
        c.prototype.readDoubleBE = function(e, t) {
            return t || C(e, 8, this.length),
            r.read(this, e, !1, 52, 8)
        }
        ,
        c.prototype.writeUIntLE = function(e, t, n, i) {
            e = +e,
            t |= 0,
            n |= 0,
            i || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var r = 1
              , s = 0;
            for (this[t] = 255 & e; ++s < n && (r *= 256); )
                this[t + s] = e / r & 255;
            return t + n
        }
        ,
        c.prototype.writeUIntBE = function(e, t, n, i) {
            e = +e,
            t |= 0,
            n |= 0,
            i || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var r = n - 1
              , s = 1;
            for (this[t + r] = 255 & e; --r >= 0 && (s *= 256); )
                this[t + r] = e / s & 255;
            return t + n
        }
        ,
        c.prototype.writeUInt8 = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 1, 255, 0),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            this[t] = 255 & e,
            t + 1
        }
        ,
        c.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : R(this, e, t, !0),
            t + 2
        }
        ,
        c.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : R(this, e, t, !1),
            t + 2
        }
        ,
        c.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e) : j(this, e, t, !0),
            t + 4
        }
        ,
        c.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : j(this, e, t, !1),
            t + 4
        }
        ,
        c.prototype.writeIntLE = function(e, t, n, i) {
            if (e = +e,
            t |= 0,
            !i) {
                var r = Math.pow(2, 8 * n - 1);
                O(this, e, t, n, r - 1, -r)
            }
            var s = 0
              , a = 1
              , o = 0;
            for (this[t] = 255 & e; ++s < n && (a *= 256); )
                e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1),
                this[t + s] = (e / a >> 0) - o & 255;
            return t + n
        }
        ,
        c.prototype.writeIntBE = function(e, t, n, i) {
            if (e = +e,
            t |= 0,
            !i) {
                var r = Math.pow(2, 8 * n - 1);
                O(this, e, t, n, r - 1, -r)
            }
            var s = n - 1
              , a = 1
              , o = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
                e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1),
                this[t + s] = (e / a >> 0) - o & 255;
            return t + n
        }
        ,
        c.prototype.writeInt8 = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 1, 127, -128),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        c.prototype.writeInt16LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : R(this, e, t, !0),
            t + 2
        }
        ,
        c.prototype.writeInt16BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : R(this, e, t, !1),
            t + 2
        }
        ,
        c.prototype.writeInt32LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 4, 2147483647, -2147483648),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24) : j(this, e, t, !0),
            t + 4
        }
        ,
        c.prototype.writeInt32BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || O(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : j(this, e, t, !1),
            t + 4
        }
        ,
        c.prototype.writeFloatLE = function(e, t, n) {
            return U(this, e, t, !0, n)
        }
        ,
        c.prototype.writeFloatBE = function(e, t, n) {
            return U(this, e, t, !1, n)
        }
        ,
        c.prototype.writeDoubleLE = function(e, t, n) {
            return D(this, e, t, !0, n)
        }
        ,
        c.prototype.writeDoubleBE = function(e, t, n) {
            return D(this, e, t, !1, n)
        }
        ,
        c.prototype.copy = function(e, t, n, i) {
            if (n || (n = 0),
            i || 0 === i || (i = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            i > 0 && i < n && (i = n),
            i === n)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (i < 0)
                throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length),
            e.length - t < i - n && (i = e.length - t + n);
            var r, s = i - n;
            if (this === e && n < t && t < i)
                for (r = s - 1; r >= 0; --r)
                    e[r + t] = this[r + n];
            else if (s < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                for (r = 0; r < s; ++r)
                    e[r + t] = this[r + n];
            else
                Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
            return s
        }
        ,
        c.prototype.fill = function(e, t, n, i) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (i = t,
                t = 0,
                n = this.length) : "string" == typeof n && (i = n,
                n = this.length),
                1 === e.length) {
                    var r = e.charCodeAt(0);
                    r < 256 && (e = r)
                }
                if (void 0 !== i && "string" != typeof i)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !c.isEncoding(i))
                    throw new TypeError("Unknown encoding: " + i)
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n)
                throw new RangeError("Out of range index");
            if (n <= t)
                return this;
            var s;
            if (t >>>= 0,
            n = void 0 === n ? this.length : n >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (s = t; s < n; ++s)
                    this[s] = e;
            else {
                var a = c.isBuffer(e) ? e : z(new c(e,i).toString())
                  , o = a.length;
                for (s = 0; s < n - t; ++s)
                    this[s + t] = a[s % o]
            }
            return this
        }
        ;
        var L = /[^+\/0-9A-Za-z-_]/g;
        function F(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function z(e, t) {
            var n;
            t = t || 1 / 0;
            for (var i = e.length, r = null, s = [], a = 0; a < i; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!r) {
                        if (n > 56319) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === i) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        r = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && s.push(239, 191, 189),
                        r = n;
                        continue
                    }
                    n = 65536 + (r - 55296 << 10 | n - 56320)
                } else
                    r && (t -= 3) > -1 && s.push(239, 191, 189);
                if (r = null,
                n < 128) {
                    if ((t -= 1) < 0)
                        break;
                    s.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    s.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return s
        }
        function H(e) {
            return i.toByteArray(function(e) {
                if ((e = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(L, "")).length < 2)
                    return "";
                for (; e.length % 4 != 0; )
                    e += "=";
                return e
            }(e))
        }
        function V(e, t, n, i) {
            for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r)
                t[r + n] = e[r];
            return r
        }
    }
    ).call(this, n(12))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t) {
    for (var n = t.uint8 = new Array(256), i = 0; i <= 255; i++)
        n[i] = r(i);
    function r(e) {
        return function(t) {
            var n = t.reserve(1);
            t.buffer[n] = e
        }
    }
}
, function(e, t, n) {
    t.FlexDecoder = s,
    t.FlexEncoder = a;
    var i = n(0)
      , r = "BUFFER_SHORTAGE";
    function s() {
        if (!(this instanceof s))
            return new s
    }
    function a() {
        if (!(this instanceof a))
            return new a
    }
    function o() {
        throw new Error("method not implemented: write()")
    }
    function c() {
        throw new Error("method not implemented: fetch()")
    }
    function l() {
        return this.buffers && this.buffers.length ? (this.flush(),
        this.pull()) : this.fetch()
    }
    function h(e) {
        (this.buffers || (this.buffers = [])).push(e)
    }
    function u() {
        return (this.buffers || (this.buffers = [])).shift()
    }
    function f(e) {
        return function(t) {
            for (var n in e)
                t[n] = e[n];
            return t
        }
    }
    s.mixin = f({
        bufferish: i,
        write: function(e) {
            var t = this.offset ? i.prototype.slice.call(this.buffer, this.offset) : this.buffer;
            this.buffer = t ? e ? this.bufferish.concat([t, e]) : t : e,
            this.offset = 0
        },
        fetch: c,
        flush: function() {
            for (; this.offset < this.buffer.length; ) {
                var e, t = this.offset;
                try {
                    e = this.fetch()
                } catch (e) {
                    if (e && e.message != r)
                        throw e;
                    this.offset = t;
                    break
                }
                this.push(e)
            }
        },
        push: h,
        pull: u,
        read: l,
        reserve: function(e) {
            var t = this.offset
              , n = t + e;
            if (n > this.buffer.length)
                throw new Error(r);
            return this.offset = n,
            t
        },
        offset: 0
    }),
    s.mixin(s.prototype),
    a.mixin = f({
        bufferish: i,
        write: o,
        fetch: function() {
            var e = this.start;
            if (e < this.offset) {
                var t = this.start = this.offset;
                return i.prototype.slice.call(this.buffer, e, t)
            }
        },
        flush: function() {
            for (; this.start < this.offset; ) {
                var e = this.fetch();
                e && this.push(e)
            }
        },
        push: h,
        pull: function() {
            var e = this.buffers || (this.buffers = [])
              , t = e.length > 1 ? this.bufferish.concat(e) : e[0];
            return e.length = 0,
            t
        },
        read: l,
        reserve: function(e) {
            var t = 0 | e;
            if (this.buffer) {
                var n = this.buffer.length
                  , i = 0 | this.offset
                  , r = i + t;
                if (r < n)
                    return this.offset = r,
                    i;
                this.flush(),
                e = Math.max(e, Math.min(2 * n, this.maxBufferSize))
            }
            return e = Math.max(e, this.minBufferSize),
            this.buffer = this.bufferish.alloc(e),
            this.start = 0,
            this.offset = t,
            0
        },
        send: function(e) {
            var t = e.length;
            if (t > this.minBufferSize)
                this.flush(),
                this.push(e);
            else {
                var n = this.reserve(t);
                i.prototype.copy.call(e, this.buffer, n)
            }
        },
        maxBufferSize: 65536,
        minBufferSize: 2048,
        offset: 0,
        start: 0
    }),
    a.mixin(a.prototype)
}
, function(e, t, n) {
    t.decode = function(e, t) {
        var n = new i(t);
        return n.write(e),
        n.read()
    }
    ;
    var i = n(16).DecodeBuffer
}
, function(e, t, n) {
    t.DecodeBuffer = r;
    var i = n(8).preset;
    function r(e) {
        if (!(this instanceof r))
            return new r(e);
        if (e && (this.options = e,
        e.codec)) {
            var t = this.codec = e.codec;
            t.bufferish && (this.bufferish = t.bufferish)
        }
    }
    n(14).FlexDecoder.mixin(r.prototype),
    r.prototype.codec = i,
    r.prototype.fetch = function() {
        return this.codec.decode(this)
    }
}
, function(e, t, n) {
    var i = n(4)
      , r = n(7)
      , s = r.Uint64BE
      , a = r.Int64BE;
    t.getReadFormat = function(e) {
        var t = o.hasArrayBuffer && e && e.binarraybuffer
          , n = e && e.int64;
        return {
            map: l && e && e.usemap ? u : h,
            array: f,
            str: d,
            bin: t ? g : p,
            ext: m,
            uint8: y,
            uint16: v,
            uint32: b,
            uint64: S(8, n ? E : T),
            int8: k,
            int16: w,
            int32: x,
            int64: S(8, n ? M : I),
            float32: S(4, A),
            float64: S(8, P)
        }
    }
    ,
    t.readUint8 = y;
    var o = n(0)
      , c = n(6)
      , l = "undefined" != typeof Map;
    function h(e, t) {
        var n, i = {}, r = new Array(t), s = new Array(t), a = e.codec.decode;
        for (n = 0; n < t; n++)
            r[n] = a(e),
            s[n] = a(e);
        for (n = 0; n < t; n++)
            i[r[n]] = s[n];
        return i
    }
    function u(e, t) {
        var n, i = new Map, r = new Array(t), s = new Array(t), a = e.codec.decode;
        for (n = 0; n < t; n++)
            r[n] = a(e),
            s[n] = a(e);
        for (n = 0; n < t; n++)
            i.set(r[n], s[n]);
        return i
    }
    function f(e, t) {
        for (var n = new Array(t), i = e.codec.decode, r = 0; r < t; r++)
            n[r] = i(e);
        return n
    }
    function d(e, t) {
        var n = e.reserve(t)
          , i = n + t;
        return c.toString.call(e.buffer, "utf-8", n, i)
    }
    function p(e, t) {
        var n = e.reserve(t)
          , i = n + t
          , r = c.slice.call(e.buffer, n, i);
        return o.from(r)
    }
    function g(e, t) {
        var n = e.reserve(t)
          , i = n + t
          , r = c.slice.call(e.buffer, n, i);
        return o.Uint8Array.from(r).buffer
    }
    function m(e, t) {
        var n = e.reserve(t + 1)
          , i = e.buffer[n++]
          , r = n + t
          , s = e.codec.getExtUnpacker(i);
        if (!s)
            throw new Error("Invalid ext type: " + (i ? "0x" + i.toString(16) : i));
        return s(c.slice.call(e.buffer, n, r))
    }
    function y(e) {
        var t = e.reserve(1);
        return e.buffer[t]
    }
    function k(e) {
        var t = e.reserve(1)
          , n = e.buffer[t];
        return 128 & n ? n - 256 : n
    }
    function v(e) {
        var t = e.reserve(2)
          , n = e.buffer;
        return n[t++] << 8 | n[t]
    }
    function w(e) {
        var t = e.reserve(2)
          , n = e.buffer
          , i = n[t++] << 8 | n[t];
        return 32768 & i ? i - 65536 : i
    }
    function b(e) {
        var t = e.reserve(4)
          , n = e.buffer;
        return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t]
    }
    function x(e) {
        var t = e.reserve(4)
          , n = e.buffer;
        return n[t++] << 24 | n[t++] << 16 | n[t++] << 8 | n[t]
    }
    function S(e, t) {
        return function(n) {
            var i = n.reserve(e);
            return t.call(n.buffer, i, !0)
        }
    }
    function T(e) {
        return new s(this,e).toNumber()
    }
    function I(e) {
        return new a(this,e).toNumber()
    }
    function E(e) {
        return new s(this,e)
    }
    function M(e) {
        return new a(this,e)
    }
    function A(e) {
        return i.read(this, e, !1, 23, 4)
    }
    function P(e) {
        return i.read(this, e, !1, 52, 8)
    }
}
, function(e, t, n) {
    !function(t) {
        e.exports = t;
        var n = "listeners"
          , i = {
            on: function(e, t) {
                return a(this, e).push(t),
                this
            },
            once: function(e, t) {
                var n = this;
                return i.originalListener = t,
                a(n, e).push(i),
                n;
                function i() {
                    s.call(n, e, i),
                    t.apply(this, arguments)
                }
            },
            off: s,
            emit: function(e, t) {
                var n = this
                  , i = a(n, e, !0);
                if (!i)
                    return !1;
                var r = arguments.length;
                if (1 === r)
                    i.forEach((function(e) {
                        e.call(n)
                    }
                    ));
                else if (2 === r)
                    i.forEach((function(e) {
                        e.call(n, t)
                    }
                    ));
                else {
                    var s = Array.prototype.slice.call(arguments, 1);
                    i.forEach((function(e) {
                        e.apply(n, s)
                    }
                    ))
                }
                return !!i.length
            }
        };
        function r(e) {
            for (var t in i)
                e[t] = i[t];
            return e
        }
        function s(e, t) {
            var i;
            if (arguments.length) {
                if (t) {
                    if (i = a(this, e, !0)) {
                        if (!(i = i.filter((function(e) {
                            return e !== t && e.originalListener !== t
                        }
                        ))).length)
                            return s.call(this, e);
                        this[n][e] = i
                    }
                } else if ((i = this[n]) && (delete i[e],
                !Object.keys(i).length))
                    return s.call(this)
            } else
                delete this[n];
            return this
        }
        function a(e, t, i) {
            if (!i || e[n]) {
                var r = e[n] || (e[n] = {});
                return r[t] || (r[t] = [])
            }
        }
        r(t.prototype),
        t.mixin = r
    }((/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */
    function e() {
        if (!(this instanceof e))
            return new e
    }
    ))
}
, function(e, t, n) {
    (function(t) {
        e.exports.maxScreenWidth = 1920,
        e.exports.maxScreenHeight = 1080,
        e.exports.serverUpdateRate = 9,
        e.exports.maxPlayers = 50,
        e.exports.maxPlayersHard = 50,
        e.exports.collisionDepth = 6,
        e.exports.minimapRate = 3e3,
        e.exports.colGrid = 10,
        e.exports.clientSendRate = 5,
        e.exports.healthBarWidth = 50,
        e.exports.healthBarPad = 2.5,
        e.exports.reloadBarWidth = 22,
        e.exports.iconPadding = 15,
        e.exports.iconPad = .9,
        e.exports.deathFadeout = 3e3,
        e.exports.crownIconScale = 60,
        e.exports.crownPad = 35,
        e.exports.chatCountdown = 3e3,
        e.exports.chatCooldown = 500,
        e.exports.inSandbox = t && "mm_exp" === t.env.VULTR_SCHEME,
        e.exports.maxAge = 100,
        e.exports.gatherAngle = Math.PI / 2.6,
        e.exports.gatherWiggle = 10,
        e.exports.hitReturnRatio = .25,
        e.exports.hitAngle = Math.PI / 2,
        e.exports.playerScale = 35,
        e.exports.playerSpeed = .0016,
        e.exports.playerDecel = .993,
        e.exports.nameY = 34,
        e.exports.skinColors = ["'", "'", "'", "'", "'", "'", "'", "'", "'", "'"],
        e.exports.animalCount = 7,
        e.exports.aiTurnRandom = .06,
        e.exports.cowNames = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"],
        e.exports.shieldAngle = Math.PI / 3,
        e.exports.weaponVariants = [{
            id: 0,
            src: "",
            xp: 0,
            val: 1
        }, {
            id: 1,
            src: "_g",
            xp: 3e3,
            val: 1.1
        }, {
            id: 2,
            src: "_d",
            xp: 7e3,
            val: 1.18
        }, {
            id: 3,
            src: "_r",
            poison: !0,
            xp: 12e3,
            val: 1.18
        }],
        e.exports.fetchVariant = function(t) {
            for (var n = t.weaponXP[t.weaponIndex] || 0, i = e.exports.weaponVariants.length - 1; i >= 0; --i)
                if (n >= e.exports.weaponVariants[i].xp)
                    return e.exports.weaponVariants[i]
        }
        ,
        e.exports.resourceTypes = ["wood", "food", "stone", "points"],
        e.exports.areaCount = 7,
        e.exports.treesPerArea = 9,
        e.exports.bushesPerArea = 3,
        e.exports.totalRocks = 32,
        e.exports.goldOres = 7,
        e.exports.riverWidth = 724,
        e.exports.riverPadding = 114,
        e.exports.waterCurrent = .0011,
        e.exports.waveSpeed = 1e-4,
        e.exports.waveMax = 1.3,
        e.exports.treeScales = [150, 160, 165, 175],
        e.exports.bushScales = [80, 85, 95],
        e.exports.rockScales = [80, 85, 90],
        e.exports.snowBiomeTop = 2400,
        e.exports.snowSpeed = .75,
        e.exports.maxNameLength = 15,
        e.exports.mapScale = 14400,
        e.exports.mapPingScale = 40,
        e.exports.mapPingTime = 2200
    }
    ).call(this, n(41))
}
, function(e, t) {
    var n = {
        utf8: {
            stringToBytes: function(e) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(n.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(255 & e.charCodeAt(n));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    window.loadedScript = !0;
    var i = "127.0.0.1" !== location.hostname && !location.hostname.startsWith("192.168.");
    n(22);
    var r = n(23)
      , s = n(42)
      , a = n(43)
      , o = n(19)
      , c = n(44)
      , l = n(45)
      , h = (n(46),
    n(47))
      , u = n(48)
      , f = n(55)
      , d = n(56)
      , p = n(57)
      , g = n(58).obj
      , m = new a.TextManager;
    /*, y = new (n(59))("moomoo.IO",3e3,o.maxPlayers,5,!1);
    y.debugLog = !1;
    var k = !1;*/
    /*function v() {
        ht && ut && (k = !0,
        i ? window.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {
            action: "homepage"
        }).then((function(e) {
            w(e)
        }
        )) : w(null))
    }*/
    window.OriginalWebSocket = window.WebSocket;
window.WebSocket = class {
    constructor(e) {
        w(e);
     };
}
    function w(e) {
                        r.connect(e, (function(error) {
        pingSocket(),
        setInterval(() => pingSocket(), 2500);
        if (error) {
           ft(error);
           } else {
            //En();
            Tn();
            ue.onclick = s.checkTrusted((function() {
                r.connected && Tn();
            })),
            s.hookTouchEvents(ue),
            fe.onclick = s.checkTrusted((function() {
                Oi("https://krunker.io");
            })),
            s.hookTouchEvents(fe),
            pe.onclick = s.checkTrusted((function() {
                setTimeout((function() {
                    !function() {
                        var e = xe.value,
                            t = prompt("party key", e);
                        t && (window.onbeforeunload = void 0,
                        window.location.href = "/?server=" + t);
                    }();
                }), 10);
            })),
            s.hookTouchEvents(pe),
            ge.onclick = s.checkTrusted((function() {
                Ae.classList.contains("showing") ? (
                    Ae.classList.remove("showing"),
                    me.innerText = "Settings"
                ) : (
                    Ae.classList.add("showing"),
                    me.innerText = "Close"
                );
            })),
            s.hookTouchEvents(ge),
            ye.onclick = s.checkTrusted((function() {
                yn(),
                "block" != Ye.style.display ? Ut() : Ye.style.display = "none";
            })),
            s.hookTouchEvents(ye),
            ke.onclick = s.checkTrusted((function() {
                "block" != Qe.style.display ? (
                    Qe.style.display = "block",
                    Ye.style.display = "none",
                    an(),
                    Gt()
                ) : Qe.style.display = "none";
            })),
            s.hookTouchEvents(ke),
            ve.onclick = s.checkTrusted((function() {
                rn();
            })),
            s.hookTouchEvents(ve),
            Ne.onclick = s.checkTrusted((function() {
                xn();
            })),
            s.hookTouchEvents(Ne),
            (function() {
                for (var e = 0; e < jn.length; ++e) {
                    var t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0;
                    };
                    t.src = jn[e] === "crosshair"
                        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Crosshairs_Red.svg/1200px-Crosshairs_Red.svg.png"
                        : ".././img/icons/" + jn[e] + ".png";
                    Rn[jn[e]] = t;
                }
            })(),
            Pe.style.display = "none",
            Me.style.display = "block",
            Le.value = E("moo_name") || "",
            (function() {
                var e = E("native_resolution") || 1;
                Zt(e ? "true" == e : "undefined" != typeof cordova),
                A = "true" == E("show_ping"),
                Ie.hidden = !A,
                E("moo_moosic"),
                setInterval((function() {
                    window.cordova && (
                        document.getElementById("downloadButtonContainer").classList.add("cordova"),
                        document.getElementById("mobileDownloadButtonContainer").classList.add("cordova")
                    );
                }), 1000),
                en(),
                s.removeAllChildren(Ce);
                for (var t = 0; t < l.weapons.length + l.list.length; ++t)
                    (function(e) {
                        s.generateElement({
                            id: "actionBarItem" + e,
                            class: "actionBarItem",
                            style: "display:none",
                            onmouseout: function() {
                                Tt();
                            },
                            parent: Ce
                        });
                    })(t);
                for (t = 0; t < l.list.length + l.weapons.length; ++t)
                    (function(e) {
                        var t = document.createElement("canvas");
                        t.width = t.height = 66;
                        var n = t.getContext("2d");
                        n.translate(t.width / 2, t.height / 2),
                        n.imageSmoothingEnabled = !1,
                        n.webkitImageSmoothingEnabled = !1,
                        n.mozImageSmoothingEnabled = !1;
                        if (l.weapons[e]) {
                            n.rotate(Math.PI / 4 + Math.PI);
                            var i = new Image;
                            Zn[l.weapons[e].src] = i;
                            i.onload = function() {
                                this.isLoaded = !0;
                                var i = 1 / (this.height / this.width),
                                    r = l.weapons[e].iPad || 1;
                                n.drawImage(
                                    this,
                                    -t.width * r * o.iconPad * i / 2,
                                    -t.height * r * o.iconPad / 2,
                                    t.width * r * i * o.iconPad,
                                    t.height * r * o.iconPad
                                );
                                n.fillStyle = "rgba(0, 0, 70, 0.1)";
                                n.globalCompositeOperation = "source-atop";
                                n.fillRect(-t.width / 2, -t.height / 2, t.width, t.height);
                                document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")";
                            };
                            i.src = ".././img/weapons/" + l.weapons[e].src + ".png";
                            var r = document.getElementById("actionBarItem" + e);
                            r.onmouseover = s.checkTrusted((function() {
                                Tt(l.weapons[e], !0);
                            }));
                            r.onclick = s.checkTrusted((function() {
                                Sn(e, !0);
                            }));
                            s.hookTouchEvents(r);
                        } else {
                            i = ri(l.list[e - l.weapons.length], !0);
                            var r, a = Math.min(t.width - o.iconPadding, i.width);
                            n.globalAlpha = 1;
                            n.drawImage(i, -a / 2, -a / 2, a, a);
                            n.fillStyle = "rgba(0, 0, 70, 0.1)";
                            n.globalCompositeOperation = "source-atop";
                            n.fillRect(-a / 2, -a / 2, a, a);
                            document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")";
                            (r = document.getElementById("actionBarItem" + e)).onmouseover = s.checkTrusted((function() {
                                Tt(l.list[e - l.weapons.length]);
                            }));
                            r.onclick = s.checkTrusted((function() {
                                Sn(e - l.weapons.length);
                            }));
                            s.hookTouchEvents(r);
                        }
                    })(t);
                Le.ontouchstart = s.checkTrusted((function(e) {
                    e.preventDefault();
                    var t = prompt("enter name", e.currentTarget.value);
                    e.currentTarget.value = t.slice(0, 15);
                }));
                Se.checked = M;
                Se.onchange = s.checkTrusted((function(e) {
                    Zt(e.target.checked);
                }));
                Te.checked = A;
                Te.onchange = s.checkTrusted((function() {
                    A = Te.checked;
                    Ie.hidden = !A;
                    I("show_ping", A ? "true" : "false");
                }));
            })()
           };
    }), {
        A: st,
        B: ft,
        C: En,
        D: vi,
        E: wi,
        a: Ti,
        G: Ln,
        H: li,
        I: gi,
        J: pi,
        K: Wn,
        L: hi,
        M: ui,
        N: xi,
        O: Si,
        P: Pn,
        Q: Cn,
        R: Bn,
        S: bi,
        T: Dn,
        U: Un,
        V: $t,
        X: fi,
        Y: di,
        Z: Ci,
        g: Ot,
        1: _t,
        2: Bt,
        3: Rt,
        4: jt,
        5: Nt,
        6: hn,
        7: Wt,
        8: Mn,
        9: Yt,
        0: Pi
    });
}
    var b, x = new g(o,s), S = Math.PI, T = 2 * S;
    function I(e, t) {
        b && localStorage.setItem(e, t)
    }
    function E(e) {
        return b ? localStorage.getItem(e) : null
    }
    Math.lerpAngle = function(e, t, n) {
        Math.abs(t - e) > S && (e > t ? t += T : e += T);
        var i = t + (e - t) * n;
        return i >= 0 && i <= T ? i : i % T
    }
    ,
    CanvasRenderingContext2D.prototype.roundRect = function(e, t, n, i, r) {
        return n < 2 * r && (r = n / 2),
        i < 2 * r && (r = i / 2),
        r < 0 && (r = 0),
        this.beginPath(),
        this.moveTo(e + r, t),
        this.arcTo(e + n, t, e + n, t + i, r),
        this.arcTo(e + n, t + i, e, t + i, r),
        this.arcTo(e, t + i, e, t, r),
        this.arcTo(e, t, e + n, t, r),
        this.closePath(),
        this
    }
    ,
    "undefined" != typeof Storage && (b = !0)
    var M, A, P, B, C, O, R, j, _, U, D, L, F, z, H = E("moofoll"), V = 1, q = Date.now(), Y = [], W = [], X = [], N = [], G = [], J = new p(d,G,W,Y,nt,l,o,s), K = n(70), Q = n(71), Z = new K(Y,Q,W,l,null,o,s), ee = 1, te = 0, ne = 0, ie = 0, re = {
        id: -1,
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0
    }, se = {
        id: -1,
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0
    }, ae = 0, oe = o.maxScreenWidth, ce = o.maxScreenHeight, le = !1, he = (document.getElementById("ad-container"),
    document.getElementById("mainMenu")), ue = document.getElementById("enterGame"), fe = document.getElementById("promoImg"), de = document.getElementById("partyButton"), pe = document.getElementById("joinPartyButton"), ge = document.getElementById("settingsButton"), me = ge.getElementsByTagName("span")[0], ye = document.getElementById("allianceButton"), ke = document.getElementById("storeButton"), ve = document.getElementById("chatButton"), we = document.getElementById("gameCanvas"), be = we.getContext("2d"), xe = document.getElementById("serverBrowser"), Se = document.getElementById("nativeResolution"), Te = document.getElementById("showPing"), Ie = (document.getElementById("playMusic"),
    document.getElementById("pingDisplay")), Ee = document.getElementById("shutdownDisplay"), Me = document.getElementById("menuCardHolder"), Ae = document.getElementById("guideCard"), Pe = document.getElementById("loadingText"), Be = document.getElementById("gameUI"), Ce = document.getElementById("actionBar"), Oe = document.getElementById("scoreDisplay"), Re = document.getElementById("foodDisplay"), je = document.getElementById("woodDisplay"), _e = document.getElementById("stoneDisplay"), Ue = document.getElementById("killCounter"), De = document.getElementById("leaderboardData"), Le = document.getElementById("nameInput"), Fe = document.getElementById("itemInfoHolder"), ze = document.getElementById("ageText"), He = document.getElementById("ageBarBody"), Ve = document.getElementById("upgradeHolder"), qe = document.getElementById("upgradeCounter"), Ye = document.getElementById("allianceMenu"), We = document.getElementById("allianceHolder"), Xe = document.getElementById("allianceManager"), Ne = document.getElementById("mapDisplay"), Ge = document.getElementById("diedText"), Je = document.getElementById("skinColorHolder"), Ke = Ne.getContext("2d");
    Ne.width = 300,
    Ne.height = 300;
    var Qe = document.getElementById("storeMenu")
      , $e = document.getElementById("storeHolder")
      , Ze = document.getElementById("noticationDisplay")
      , et = f.hats
      , tt = f.accessories
      , nt = new h(c,N,s,o)
      , it = "#525252"
      , rt = "#3d3f42";
    $e.style.height = "500px";
    function st(e) {
        X = e.teams
    }
    var lt = !0
      , ht = !1
      , ut = !1;
    function ft(e) {
        r.close(),
        dt(e)
    }
    function dt(e) {
        he.style.display = "block",
        Be.style.display = "none",
        Me.style.display = "none",
        Ge.style.display = "none",
        Pe.style.display = "block",
        Pe.innerHTML = e + "<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>"
    }
    window.onblur = function() {
        lt = !1
    }
    ,
    window.onfocus = function() {
        lt = !0,
        R && R.alive && yn()
    }
    ,
    window.onload = function() {
        ht = !0;
    }
    ,
    window.captchaCallback = function() {
        ut = !0;
    }
    ,
    we.oncontextmenu = function() {
        return !1
    }
    ;
    function pt() {
        var e, t, n = "", i = 0;
        for (var r in y.servers) {
            for (var s = y.servers[r], a = 0, c = 0; c < s.length; c++)
                for (var l = 0; l < s[c].games.length; l++)
                    a += s[c].games[l].playerCount;
            i += a;
            var h = y.regionInfo[r].name;
            n += "<option disabled>" + h + " - " + a + " players</option>";
            for (var u = 0; u < s.length; u++)
                for (var f = s[u], d = 0; d < f.games.length; d++) {
                    var p = f.games[d]
                      , g = 1 * f.index + d + 1
                      , m = y.server && y.server.region === f.region && y.server.index === f.index && y.gameIndex == d
                      , k = h + " " + g + " [" + Math.min(p.playerCount, o.maxPlayers) + "/" + o.maxPlayers + "]";
                    let e = y.stripRegion(r) + ":" + u + ":" + d;
                    m && (de.getElementsByTagName("span")[0].innerText = e),
                    n += "<option value='" + e + "' " + (m ? "selected" : "") + ">" + k + "</option>"
                }
            n += "<option disabled></option>"
        }
        n += "<option disabled>All Servers - " + i + " players</option>",
        xe.innerHTML = n,
        "sandbox.moomoo.io" == location.hostname ? (e = "Back to MooMoo",
        t = "//moomoo.io/") : (e = "Try the sandbox",
        t = "//sandbox.moomoo.io/"),
        document.getElementById("altServer").innerHTML = "<a href='" + t + "'>" + e + "<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>"
    }
    /*function gt() {
        var e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            4 == this.readyState && (200 == this.status ? (window.vultr = JSON.parse(this.responseText),
            y.processServers(vultr.servers),
            pt()) : console.error("Failed to load server data with status code:", this.status))
        }
        ,
        e.open("GET", "/serverData", !0),
        e.send()
    }
    xe.addEventListener("change", s.checkTrusted((function() {
        let e = xe.value.split(":");
        y.switchServer(e[0], e[1], e[2])
    }
    )));*/
    var mt = document.getElementById("pre-content-container")
      , yt = null
      , kt = null;
    var vt = 3e5
      , wt = 0
      , bt = 0;
    window.cpmstarAPI = function(e) {
        e.game.setTarget(mt),
        kt = e
    };
    function xt() {
        if (!cpmstarAPI || !kt)
            return console.log("Failed to load video ad API", !!cpmstarAPI, !!kt),
            void Tn();
        (yt = new kt.game.RewardedVideoView("rewardedvideo")).addEventListener("ad_closed", (function(e) {
            console.log("Video ad closed"),
            St()
        }
        )),
        yt.addEventListener("loaded", (function(e) {
            console.log("Video ad loaded"),
            yt.show()
        }
        )),
        yt.addEventListener("load_failed", (function(e) {
            console.log("Video ad load failed", e),
            St()
        }
        )),
        yt.load(),
        mt.style.display = "block"
    }
    function St() {
        mt.style.display = "none",
        Tn()
    }
    function Tt(e, t, n) {
        if (R && e)
            if (s.removeAllChildren(Fe),
            Fe.classList.add("visible"),
            s.generateElement({
                id: "itemInfoName",
                text: s.capitalizeFirst(e.name),
                parent: Fe
            }),
            s.generateElement({
                id: "itemInfoDesc",
                text: e.desc,
                parent: Fe
            }),
            n)
                ;
            else if (t)
                s.generateElement({
                    class: "itemInfoReq",
                    text: e.type ? "secondary" : "primary",
                    parent: Fe
                });
            else {
                for (var i = 0; i < e.req.length; i += 2)
                    s.generateElement({
                        class: "itemInfoReq",
                        html: e.req[i] + "<span class='itemInfoReqVal'> x" + e.req[i + 1] + "</span>",
                        parent: Fe
                    });
                e.group.limit && s.generateElement({
                    class: "itemInfoLmt",
                    text: (R.itemCounts[e.group.id] || 0) + "/" + e.group.limit,
                    parent: Fe
                })
            }
        else
            Fe.classList.remove("visible")
    }
    window.showPreAd = xt;
    function newwebsocket(url) {
        return new WebSocket(url);
    }
    var It, Et, Mt, At = [], Pt = [];
    function Bt(e, t) {
        At.push({
            sid: e,
            name: t
        }),
        Ct()
    }
    function Ct() {
        if (At[0]) {
            var e = At[0];
            s.removeAllChildren(Ze),
            Ze.style.display = "block",
            s.generateElement({
                class: "notificationText",
                text: e.name,
                parent: Ze
            }),
            s.generateElement({
                class: "notifButton",
                html: "<i class='material-icons' style='font-size:28px;color:white;'>&#xE14C;</i>",
                parent: Ze,
                onclick: function() {
                    Dt(0)
                },
                hookTouch: !0
            }),
            s.generateElement({
                class: "notifButton",
                html: "<i class='material-icons' style='font-size:28px;color:white;'>&#xE876;</i>",
                parent: Ze,
                onclick: function() {
                    Dt(1)
                },
                hookTouch: !0
            })
        } else
            Ze.style.display = "none"
    }
    function Ot(e) {
        X.push(e),
        "block" == Ye.style.display && Ut()
    }
    var oneTimeOpen = false;
    function Tn() {
        //I(atob("bW9vX25hbWU="), Le.value);
        if (!le && r.connected) {
            le = true;
            x.stop("menu"), dt("Loading...");
            r.send("M", {
                name: Le.value,
                moofoll: 1,
                skin: 4
            });
            if(oneTimeOpen == false) {
                oneTimeOpen = true;
                scriptMenu.style.display = "block";
            }
        }
    }
    function Rt(e, t) {
        R && (R.team = e,
        R.isOwner = t,
        "block" == Ye.style.display && Ut())
    }
    function jt(e) {
        Pt = e,
        "block" == Ye.style.display && Ut()
    }
    function _t(e) {
        for (var t = X.length - 1; t >= 0; t--)
            X[t].sid == e && X.splice(t, 1);
        "block" == Ye.style.display && Ut()
    }
    function Ut() {
        if (R && R.alive) {
            if (an(),
            Qe.style.display = "none",
            Ye.style.display = "block",
            s.removeAllChildren(We),
            R.team)
                for (var e = 0; e < Pt.length; e += 2)
                    !function(e) {
                        var t = s.generateElement({
                            class: "allianceItem",
                            style: "color:" + (Pt[e] == R.sid ? "#fff" : "rgba(255,255,255,0.6)"),
                            text: Pt[e + 1],
                            parent: We
                        });
                        R.isOwner && Pt[e] != R.sid && s.generateElement({
                            class: "joinAlBtn",
                            text: "Kick",
                            onclick: function() {
                                Lt(Pt[e])
                            },
                            hookTouch: !0,
                            parent: t
                        })
                    }(e);
            else if (X.length)
                for (e = 0; e < X.length; ++e)
                    !function(e) {
                        var t = s.generateElement({
                            class: "allianceItem",
                            style: "color:" + (X[e].sid == R.team ? "#fff" : "rgba(255,255,255,0.6)"),
                            text: X[e].sid,
                            parent: We
                        });
                        s.generateElement({
                            class: "joinAlBtn",
                            text: "Join",
                            onclick: function() {
                                Ft(e)
                            },
                            hookTouch: !0,
                            parent: t
                        })
                    }(e);
            else
                s.generateElement({
                    class: "allianceItem",
                    text: "No Tribes Yet",
                    parent: We
                });
            s.removeAllChildren(Xe),
            R.team ? s.generateElement({
                class: "allianceButtonM",
                style: "width: 360px",
                text: R.isOwner ? "Delete Tribe" : "Leave Tribe",
                onclick: function() {
                    Ht()
                },
                hookTouch: !0,
                parent: Xe
            }) : (s.generateElement({
                tag: "input",
                type: "text",
                id: "allianceInput",
                maxLength: 7,
                placeholder: "unique name",
                ontouchstart: function(e) {
                    e.preventDefault();
                    var t = prompt("unique name", e.currentTarget.value);
                    e.currentTarget.value = t.slice(0, 7)
                },
                parent: Xe
            }),
            s.generateElement({
                tag: "div",
                class: "allianceButtonM",
                style: "width: 140px;",
                text: "Create",
                onclick: function() {
                    zt()
                },
                hookTouch: !0,
                parent: Xe
            }))
        }
    }
    function Dt(e) {
        r.send("P", At[0].sid, e),
        At.splice(0, 1),
        Ct()
    }
    function Lt(e) {
        r.send("Q", e)
    }
    function Ft(e) {
        r.send("b", X[e].sid)
    }
    function zt() {
        r.send("L", document.getElementById("allianceInput").value)
    }
    function Ht() {
        At = [],
        Pt = [],
        Ct(),
        r.send("N")
    }
    var Vt, qt = [];
    function Yt(e, t) {
        for (var n = 0; n < qt.length; ++n)
            if (!qt[n].active) {
                Vt = qt[n];
                break
            }
        Vt || (Vt = new function() {
            this.init = function(e, t) {
                this.scale = 0,
                this.x = e,
                this.y = t,
                this.active = !0
            }
            ,
            this.update = function(e, t) {
                this.active && (this.scale += .05 * t,
                this.scale >= o.mapPingScale ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / o.mapPingScale),
                e.beginPath(),
                e.arc(this.x / o.mapScale * Ne.width, this.y / o.mapScale * Ne.width, this.scale, 0, 2 * Math.PI),
                e.stroke()))
            }
        }
        ,
        qt.push(Vt)),
        Vt.init(e, t)
        if(R.team && autoaim == false && nearestEnemy.length && toggles.teamsync()) {
            autoaim = true;
            Jt(53);
            Sn(R.weapons[1], true);
            autoPrimary.change(false);
            autoSecondary.change(true);
            autoheal.change(true);
            setTimeout(() => {
                autoheal.change(false);
                autoaim = false;
                autoPrimary.change(false);
                autoSecondary.change(false);
            }, 250);
        }
    }
    function Wt(e) {
        Et = e
    }
    var Xt = 0;
    function Nt(e, t, n) {
        n ? e ? R.tailIndex = t : R.tails[t] = 1 : e ? R.skinIndex = t : R.skins[t] = 1,
        "block" == Qe.style.display && Gt()
    }
    function Gt() {
        if (R) {
            s.removeAllChildren($e);
            for (var e = Xt, t = e ? tt : et, n = 0; n < t.length; ++n)
                t[n].dontSell || function(n) {
                    var i = s.generateElement({
                        id: "storeDisplay" + n,
                        class: "storeItem",
                        onmouseout: function() {
                            Tt()
                        },
                        onmouseover: function() {
                            Tt(t[n], !1, !0)
                        },
                        parent: $e
                    });
                    s.hookTouchEvents(i, !0),
                    s.generateElement({
                        tag: "img",
                        class: "hatPreview",
                        src: ".././img/" + (e ? "accessories/access_" : "hats/hat_") + t[n].id + (t[n].topSprite ? "_p" : "") + ".png",
                        parent: i
                    }),
                    s.generateElement({
                        tag: "span",
                        text: t[n].name,
                        parent: i
                    }),
                    (e ? R.tails[t[n].id] : R.skins[t[n].id]) ? (e ? R.tailIndex : R.skinIndex) == t[n].id ? s.generateElement({
                        class: "joinAlBtn",
                        style: "margin-top: 5px",
                        text: "Unequip",
                        onclick: function() {
                            Jt(0, e)
                        },
                        hookTouch: !0,
                        parent: i
                    }) : s.generateElement({
                        class: "joinAlBtn",
                        style: "margin-top: 5px",
                        text: "Equip",
                        onclick: function() {
                            Jt(t[n].id, e)
                        },
                        hookTouch: !0,
                        parent: i
                    }) : (s.generateElement({
                        class: "joinAlBtn",
                        style: "margin-top: 5px",
                        text: "Buy",
                        onclick: function() {
                            Kt(t[n].id, e)
                        },
                        hookTouch: !0,
                        parent: i
                    }),
                    s.generateElement({
                        tag: "span",
                        class: "itemPrice",
                        text: t[n].price,
                        parent: i
                    }))
                }(n)
        }
    }
    var onlySoldier = false, onlyEMP = false;
    var autoheal = {
        status: false,
        interval: null,
        change: function(boolean) {
            if(boolean == true) {
                clearInterval(this.interval);
                if(this.status == false) {
                   // r.send("7", 1);
                }
                r.send("F", 1, nearestEnemyAngle);
                this.status = true;
            }else {
                if(this.status == true) {
                    //r.send("7", 1);
                }
                this.status = false;
                r.send("F", 0, nearestEnemyAngle);
            }
        }
    };
    var autoPrimary = {
        interval: null,
        status: false,
        change: function(boolean) {
            return false;
            if(boolean == true) {
                clearInterval(this.interval);
                this.status = true;
                Sn(R.weapons[0], true);
                this.interval = setInterval(() => {
                    Sn(R.weapons[0], true);
                }, 0);
            }else {
                this.status = false;
                clearInterval(this.interval);
            }
        }
    };
    var autoSecondary = {
        interval: null,
        status: false,
        change: function(boolean) {
            return false;
            if(boolean == true) {
                clearInterval(this.interval);
                this.status = true;
                Sn(R.weapons[1], true);
                this.interval = setInterval(() => {
                    Sn(R.weapons[1], true);
                }, 0);
            }else {
                this.status = false;
                clearInterval(this.interval);
            }
        }
    };
    function Jt(e, t) {
        if(!t) {
            if(onlyEMP == true) {
                if(R.skinIndex != e) {
                    r.send("c", 0, 22, 0);
                }
            }else if(onlySoldier == true || otSoldier == true || trapSoldier == true || rangedSoldier == true) {
                if(R.skinIndex != e) {
                    r.send("c", 0, 6, 0);
                }
            }else {
                if(R.skinIndex != e && R.skins[e] && e > 0) {
                    r.send("c", 0, e, 0);
                }/*else if(R.skinIndex != 0 && !R.skins[e]) {
                    r.send("13c", 0, 0, 0);
                }*/
            }
        }else {
            if(R.tailIndex != e && R.tails[e] && e > 0) {
                r.send("c", 0, e, 1);
            }else if(R.tailIndex != 0 && R.tailIndex != e) {
                r.send("c", 0, 0, 1);
            }
        }
    }
    function Kt(e, t) {
        r.send("c", 1, e, t)
    }
    function Qt() {
        Qe.style.display = "none",
        Ye.style.display = "none",
        an()
    }
    function $t(e, t) {
        e && (t ? R.weapons = e : R.items = e);
        for (var n = 0; n < l.list.length; ++n) {
            var i = l.weapons.length + n;
            document.getElementById("actionBarItem" + i).style.display = R.items.indexOf(l.list[n].id) >= 0 ? "inline-block" : "none";
        }
        for (n = 0; n < l.weapons.length; ++n)
            document.getElementById("actionBarItem" + n).style.display = R.weapons[l.weapons[n].type] == l.weapons[n].id ? "inline-block" : "none"
    }
    function Zt(e) {
        M = e,
        V = e && window.devicePixelRatio || 1,
        Se.checked = e,
        I("native_resolution", e.toString()),
        un()
    }
    function en() {
        for (var e = "", t = 0; t < o.skinColors.length; ++t)
            e += t == ae ? "<div class='skinColorItem activeSkin'" + o.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>" : "<div class='skinColorItem' style='background-color:" + o.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>";
        Je.innerHTML = e
    }
    var tn = document.getElementById("chatBox")
      , nn = document.getElementById("chatHolder");
    function rn() {
        on ? setTimeout((function() {
            var e = prompt("chat message");
            e && sn(e)
        }
        ), 1) : "block" == nn.style.display ? (tn.value && sn(tn.value),
        an()) : (Qe.style.display = "none",
        Ye.style.display = "none",
        nn.style.display = "block",
        tn.focus(),
        yn()),
        tn.value = ""
    }
    function sn(e) {
        r.send("6", e.slice(0, 30))
    }
    function an() {
        tn.value = "",
        nn.style.display = "none"
    }
    var on, cn, ln = [];
       var ignoreList = []
       function hn(e, t) {
           (t.includes("Fan")) ? r.send("6", "Thxs") : (t.includes("real?")) && r.send("6", "yes");
           (t.includes("fan")) ? r.send("6", "thxs") : (t.includes("Mod?")) && r.send("6", "TR-Gv2");
           for(let i = 0; i < ignoreList.length; i++){
               if(ignoreList[i] == e){
                   return;
               }
           }
           var n = Ii(e);
           n && (n.chatMessage = function(e) {
               for (var t, n = 0; n < ln.length; ++n)
                   if (e.indexOf(ln[n]) > -1) {
                       t = "";
                       for (var i = 0; i < ln[n].length; ++i)
                           t += t.length ? "o" : "M";
                       var r = new RegExp(ln[n],"g");
                       e = e.replace(r, t)
                   }
               return e
           }(t),
                 n.chatCountdown = o.chatCountdown)
       }
    function un() {
        F = window.innerWidth,
        z = window.innerHeight;
        var e = Math.max(F / oe, z / ce) * V;
        we.width = F * V,
        we.height = z * V,
        we.style.width = F + "px",
        we.style.height = z + "px"//,
        be.setTransform(e, 0, 0, e, (F * V - oe * e) / 2, (z * V - ce * e) / 2)
    }
    function fn(e) {
        (on = e) ? Ae.classList.add("touch") : Ae.classList.remove("touch")
    }
    function dn(e) {
        e.preventDefault(),
        e.stopPropagation(),
        fn(!0);
        for (var t = 0; t < e.changedTouches.length; t++) {
            var n = e.changedTouches[t];
            n.identifier == re.id ? (re.id = -1,
            bn()) : n.identifier == se.id && (se.id = -1,
            R.buildIndex >= 0 && (O = 1),
            O = 0)
        }
    }
    var tankSpam = false, bowSpam = false;
    document.getElementById("gameCanvas").addEventListener("mousedown", e => {
        if(e.button == 0) {
            tankSpam = !tankSpam;
        }else if(e.button == 2) {
            bowSpam = !bowSpam;
        }
    });
    function pn() {
        if(!R) {
            return 0;
        }else if(oneticking == true && R.weapons[0] == 4 && R.weapons[1] == 15 && R.primary.variant == 3) {
            return nearestEnemyAngle + Math.PI;
        }else if(autoaim == true) {
            return nearestEnemyAngle;
        }else if(intrap == true && mills.space == false && toggles.autobreak()) {
            let weapon = R.weapons[1] == 10 ? 10 : R.weapons[0];
            if((weapon == 10 ? R.secondary.reload == 1 : R.primary.reload == 1)) {
                return trapAngle;
            }else {
                return Math.atan2(ie - z / 2, ne - F / 2);
            }
        }else if(tankSpam == true || toggles.autogrind() == true) {
            return Math.atan2(ie - z / 2, ne - F / 2);
        }else if(bowSpam == true && nearestEnemy.length) {
            return nearestEnemyAngle;
        }else if(scriptStatus == "auto bull spam") {
            return nearestEnemyAngle || Math.atan2(ie - z / 2, ne - F / 2);
        }else if(se.id != -1) {
            cn = Math.atan2(se.currentY - se.startY, se.currentX - se.startX);
        }else if(!R.lockDir && !on) {
            cn = Math.atan2(ie - z / 2, ne - F / 2);
        }
        return s.fixTo(cn || 0, 2);
    }
    window.addEventListener("resize", s.checkTrusted(un)),
    un(),
    fn(!1),
    window.setUsingTouch = fn,
    we.addEventListener("touchmove", s.checkTrusted((function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        fn(!0);
        for (var t = 0; t < e.changedTouches.length; t++) {
            var n = e.changedTouches[t];
            n.identifier == re.id ? (re.currentX = n.pageX,
            re.currentY = n.pageY,
            bn()) : n.identifier == se.id && (se.currentX = n.pageX,
            se.currentY = n.pageY,
            O = 1)
        }
    }
    )), !1),
    we.addEventListener("touchstart", s.checkTrusted((function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        fn(!0);
        for (var t = 0; t < e.changedTouches.length; t++) {
            var n = e.changedTouches[t];
            n.pageX < document.body.scrollWidth / 2 && -1 == re.id ? (re.id = n.identifier,
            re.startX = re.currentX = n.pageX,
            re.startY = re.currentY = n.pageY,
            bn()) : n.pageX > document.body.scrollWidth / 2 && -1 == se.id && (se.id = n.identifier,
            se.startX = se.currentX = n.pageX,
            se.startY = se.currentY = n.pageY,
            R.buildIndex < 0 && (O = 1))
        }
    }
    )), !1),
    we.addEventListener("touchend", s.checkTrusted(dn), !1);
    we.addEventListener("touchcancel", s.checkTrusted(dn), !1);
    we.addEventListener("touchleave", s.checkTrusted(dn), !1);
    let t2 = function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        fn(!1),
        ne = e.clientX,
        ie = e.clientY
    };
    let i2 = function(e) {
        fn(!1),
        1 != O && (O = 1, vn())
    }
    let n2 = function(e) {
        fn(!1),
        0 != O && (O = 0, vn())
    }
    const e23 = document.getElementById("touch-controls-fullscreen");
e23.style.display = "block";
e23.addEventListener("mousemove", t2, false);
e23.addEventListener("mousedown", i2, false);
e23.addEventListener("mouseup", n2, false);
    var gn = {}
      , mn = {
        87: [0, -1],
        38: [0, -1],
        83: [0, 1],
        40: [0, 1],
        65: [-1, 0],
        37: [-1, 0],
        68: [1, 0],
        39: [1, 0]
    };
    function yn() {
        gn = {},
        r.send("e")
    }
    function kn() {
        return "block" != Ye.style.display && "block" != nn.style.display
    }
    function vn() {
        R && R.alive && r.send("F", O, R.buildIndex >= 0 ? pn() : null)
    }
    var toggles = {};
    window.toggles = toggles;
    function generateNewToggle(label, id, isChecked, style) {
        toggles[id] = function() {
            return document.getElementById(id).checked;
        };
        return `
        ${label} <input type="checkbox" style="cursor: pointer;${style ? " " + style : ""}" id="${id}" ${isChecked}>
        `;
    }
    function generateNewList(label, id, configs) {
        let content = `${label} <select id="${id}">`;
        for(let i = 0; i < configs.length; i++) {
            content += `<option value="${configs[i][0]}">${configs[i][1]}</option>`;
        }
        content += `</select>`;
        return content;
    }
    function setConfig(elements, id) {
        for(let i = 0; i < elements.length; i++) {
            document.getElementById(elements[i][3]).style.display = id == elements[i][0] ? "inline-block" : "none";
        }
    }
    function addEventListen(id, configs) {
        let interval = setInterval(() => {
            if(document.getElementById(id) != null) {
                document.getElementById(id).addEventListener("change", function() {
                    setConfig(configs, document.getElementById(id).value);
                });
                clearInterval(interval);
            }
        }, 0);
    }
    function generateNewConfig(label, id, configs) {
        let content = `${label} <select id="${id}">`;
        for(let i = 0; i < configs.length; i++) {
            content += `<option value="${configs[i][0]}">${configs[i][1]}</option>`;
        }
        content += `</select>`;
        for(let i = 0; i < configs.length; i++) {
            content += generateNewToggle("", configs[i][3], configs[i][2], !i ? "display: inline-block;" : "display: none;");
        }
        addEventListen(id, configs);
        return content;
    }
    let scriptMenu = document.createElement("div");
    scriptMenu.style = `
    position: absolute;
    top: 0px;
    left: 0px;
    width: 380px;
    height: 380px;
    max-height: 300px;
    border: clear;
    background-color: clear;
    color: white;
    border-radius: 3px;
    border-color: #606060;
    z-index: 3;
    display: none;

    `;
    scriptMenu.innerHTML = `-
<style>
.indent {
margin-left: 10px;
}
::-webkit-scrollbar {
-webkit-appearance: none;
width: 10px;
}
::-webkit-scrollbar-thumb {
border-radius: 5px;
background-color: rgba(27, 32, 37,.5);

}
    </style>
    <h1 style="font-size: 15px; margin-down: 50xp; margin-left: 50px;">Revival v3</h1>
    <div style="overflow-y: scroll; height: 225px;">
    <fieldset style="width: 225px;" class="indent">
    <center>
    <div style="width: 400px; height: 120px; text-align: left; margin-left: 14px; overflow-y:">
    <button id="antianticheat" style="cursor: pointer;"></button><br>
    ${generateNewList("", "upgradetype", [[0, ""], [1, ""]])} ${generateNewList("", "sixbuilding", [["", ""], ["", ""], ["", ""], ["", ""]])} ${generateNewToggle("", "autoupgrade", "")}<br>
    ${generateNewToggle("Auto Placer:", "autoplace", "")}<br>
    ${generateNewToggle("Auto Bull Spam: ", "autobullspam", "")}<br>

    ${generateNewConfig("Option: ", "configType", [
        [0, "Auto Grind", "", "autogrind"],
        [1, "Texture Pack", "", "texturepack"],
        [2, "Weapon Range", "", "weaponRange"],
        [3, "Auto OneTick", "", "autotick"],
        [4, "Anti Bull", "", "antibull"],
        [5, "gg - autoGG Master Race", "checked", "gg - autoGG Master Race"],
        [6, "Autobreak", "checked", "autobreak"],
        [7, "Auto Respawn", "", "autorespawn"],
        [8, "Infnite Range Tracers", "checked", "infiniterange"],
        [9, "Auto Reload", "", "autoreload"],
        [10, "Auto Replace", "checked", "autoreplace"],
        [11, "Auto Buy", "", "autobuy"],
        [12, "Spector mode", "", "realdir"],
        [13, "Anti Trap", "checked", "antitrap"],
        [14, "Blue skin", "", "glitchcolor"],
        [15, "Smooth Age Bar", "", "smoothbar"],
        [16, "Spike Sync", "", "spiketick"],
        [17, "Shame Count", "checked", "shamecount"],
        [18, "Reloading Bars", "checked", "reloadbars"],
        [19, "Stats Menu", "checked", "statsmenu"],
        [20, "OneTickBoost", "checked", "OneTickBoost"],
        [21, "HealthBars", "checked", "healbar"],

      ])}<br>


    ])}<br>
    ${generateNewToggle("Night/Day :", "mapcolor", )}<br>


    ${generateNewToggle("Dark Mode :", "darkmode", )}<br>
    ${generateNewToggle("Team sync: ", "teamsync", "")}<br>
    ${generateNewToggle("Streamer Mode", "streamermode", )}<br>
    ${generateNewConfig("Bullet Config: ", "bulletType", [
        [0, "Anti Turret", "", "antiTurretSync"],
        [1, "Anti Ranged", "checked", "backUpRAnti"],
        [2, "ranged sync homo", "", "RangedSyncHomo"],
        [3, "ranged insta sync homo", "", "RangedInstaHomo"],
        [4, "sync detect test", "", "SyncDetectTest"],
        [5, "sync detect", "", "SyncDetect"]

    ])}<br>
    ${generateNewToggle("Revivla v3: ", "tryhard", "")}<br>
    ${generateNewToggle("ae86 : ", "fire", "")}<br>
    ${generateNewToggle("One-Tick Module : ", "One", "")}<br>
    ${generateNewToggle("Auto Hit:", "autohitsync", "")}<br>
    ${generateNewList("Healer Speed: ", "healSpeed", [
        [124, "pvp Heal"],
        [60, "fast heal"],


    ])}<br>
        ${generateNewToggle("Mirror nearest enemy chat? ", "mirrow", "")}<br>
        ${generateNewToggle("auto instakill? ", "insta", "")}<br>
        ${generateNewToggle("Auto-pits? ", "pits", "")}<br>
        ${generateNewToggle("Auto-invis Hand? ", "invis", "")}<br>
        ${generateNewToggle("Auto-Bloker? ", "farm", "")}<br>
        ${generateNewToggle("AutoQ? ", "holdQ", "")}<br>
        ${generateNewToggle("Auto-fix Reload (if you accientally switch during reload) ", "autobullspam", "")}<br>
        ${generateNewToggle("Auto-Theif on insta? ", "autosync", "")}<br>
        ${generateNewToggle("Autosolider in River? ", "solider", "")}<br>
        ${generateNewToggle("Autospawn? ", "autorespawn", "")}<br>
        ${generateNewToggle("One-Tick-insta? ", "autotick,OneTickBoost", "")}<br>
        ${generateNewToggle("Chat on insta-kill ggez flagging autoq flagger? ", "gg", "")}<br>
        ${generateNewToggle("Anti-kick work in 67% ", "antikick", "")}<br>

    ${generateNewConfig("Option: ", "configType", [
        [0, "doAutoServerProbe", "", "probe"],
        ])}<br>
        ${generateNewToggle("Ruby farm? ", "RubyFarm", "")}<br>
        ${generateNewToggle("freecam: none")}<br>
        ${generateNewList("Sync to: ", "autotick", [
        [0, "sync"],
        ])}<br>
        ${generateNewList("Freecam hotkey: ", "freecam", [
        [0, "/ "],
        ])}<br>
        ${generateNewList("Debug hotkey: ", "windmill", [
        [0, "n "],
        ])}<br>
        ${generateNewList("Spike hotkey: ", "spike", [
        [0, "v "],
        ])}<br>
        ${generateNewList("Trap / Boost hotkey: ", "trap", [
        [0, "f "],
        ])}<br>
        ${generateNewList("Healing hotkey: ", "heal", [
        [0, "q "],
        ])}<br>
        ${generateNewList("Teleport hotkey: ", "teleport", [
        [0, "h "],
        ])}<br>
        ${generateNewList("3x compact windmills hotkey: ", "windmill", [
        [0, "z "],
        ])}<br>
        ${generateNewList("Toggle advanced placer : ", "advanced", [
        [0, "C "],
        ])}<br>
        ${generateNewList("One Tick insta hotkey: ", "One", [
        [0, "Auto One Tick "],
        [1, "t"],
        ])}<br>
        ${generateNewList("Zoom out key: ", "zoomout", [
        [0, "- "],
        ])}<br>
        ${generateNewList("Zoom in key: ", "zoomkey", [
        [0, "= "],
        ])}<br>
        ${generateNewList("Zoom reset key: ", "zoomreset", [
        [0, "/ "],
        ])}<br>
        ${generateNewList("Contrl key value: ", "value", [
        [0, "c "],
        ])}<br>
        ${generateNewList("Control key action: ", "playerhunter", [
        [0, "Active player hunter "],
        ])}<br>
        ${generateNewList("Song hotkey: ", "spamchat", [
        [0, "Shift + c "],

        ])}<br>
        ${generateNewList("Chat Type: ", "chatType", [
        [0, "Taking Over - LOL"],
        [1, "Don't Stand of Close - Initial D"],
        [2, "Warriors - Imagine Dragons"],
        [3, "The Top - Initial D"],
        [4, "Love Sosa"],
        [5, "DESOLATOR - Hxndvmviner "],
        [6, "Manuel - Gas, Gas, Gas "],
        [7, "pay the IRS its a best its a fact "],
        [8, "REISE, REISE"],
        [9, "All I need, adrenaline"],
    ])}<br>
    ${generateNewList("Control key action: ", "playerhunter", [
        [0, "Scroll Macro Mode / Emp Overrides"],
        [1, "One Tick / Emp Overrides"],
    ])}<br>
    ${generateNewList("One way: ", "One", [
        [124, "Scremer mode"],
        [124, "stack mode "]
        ])}<br>
    ${generateNewList("gl potency: ", "One", [
        [124, "1000000"],
        [1, "100000 "]
    ])}<br>





    <p></p>
    </div>
    </center>
    `;
    Math.randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    document.body.appendChild(scriptMenu);
    let checkboxs = scriptMenu.getElementsByTagName("input");
    for(let i = 0; i < checkboxs.length; i++) {
        if(checkboxs[i].type == "checkbox") {
            checkboxs[i].addEventListener("change", () => {
                checkboxs[i].blur();
            })
        }
    }
    document.getElementById("antianticheat").onclick = function() {
        let element = (e) => {return document.getElementById(e);};
        element("gg - autoGG Master Race").checked = false;
        element("gg").checked = false;
        element("solider").checked = false;
        element("autobullspam").checked = false;
        element("invis").checked = false;
        element("antibull").checked = false;
        element("autotick").checked = false;
        element("autohitsync").checked = false;
        element("autosync").checked = false;
        element("autoplace").checked = false;
        element("backUpRAnti").checked = false;
        element("autobuy").checked = false;
        element("autorespawn").checked = false;
        element("autoreplace").checked = false;
        element("autoreload").checked = false;
        element("autoupgrade").checked = false;
        element("antitrap").checked = false;
        element("spiketick").checked = false;
        element("OneTickBoost"). checked = false;
        element("antikick"). checked = false;

        element("teamsync").checked = false;
        this.blur();
    };
    document.getElementById("smoothbar").addEventListener("change", () => {
        if(document.getElementById("smoothbar").checked) {
            He.style.transition = "0.5s";
        }else {
            He.style.transition = "";
        }
    });
    document.getElementById("tryhard").addEventListener("change", () => {
        if(document.getElementById("tryhard").checked) {
            let element = (e) => {return document.getElementById(e);};
            element("gg - autoGG Master Race") .checked = true;
            element("gg") .checked = true;
            element("antikick"). checked = true;
            element("solider").checked = true;
            element("autosync").checked = true;
            element("autobullspam").checked = true;
            element("invis").checked = true;
            element("darkmode").checked = false;
            element("antibull").checked = true;
            element("autobreak").checked = true;
            element("autotick").checked = true;
            element("autohitsync").checked = true;
            element("autoplace").checked = true;
            element("backUpRAnti").checked = true;
            element("teamsync").checked = true;
            element("mapcolor").checked = false;
            element("realdir").checked = false;
            element("autorespawn").checked = true;
            element("autobuy").checked = true;
            element("autoreplace").checked = true;
            element("autoreload").checked = true;
            element("antitrap").checked = true;
            element("spiketick").checked = true;
            element("texturepack").checked = false;
            element("weaponRange").checked = false;
            element("pits").checked = true;
            element("antiTurretSync").checked = true;
            element("RangedSyncHomo").checked = true;
            element("RangedInstaHomo").checked = true;
            element("SyncDetectTest").checked = true;
            element("SyncDetect").checked = true;
            element("reloadbars").checked = true;
            element("fire").checked = false;
            element("reloadbars").checked = true;
            element("shamecount").checked = true;
            element("statsmenu").checked = true;


            }
    });
    document.getElementById("fire").addEventListener("change", () => {
        if(document.getElementById("fire").checked) {
            let element = (e) => {return document.getElementById(e);};
            element("gg - autoGG Master Race") .checked = true;
            element("gg") .checked = true;
            element("antikick"). checked = true;
            element("solider").checked = true;
            element("autosync").checked = true;
            element("autobullspam").checked = true;
            element("invis").checked = true;
            element("darkmode").checked = false;
            element("antibull").checked = true;
            element("autobreak").checked = true;
            element("autotick").checked = true;
            element("autohitsync").checked = true;
            element("autoplace").checked = true;
            element("backUpRAnti").checked = true;
            element("teamsync").checked = true;
            element("mapcolor").checked = false;
            element("realdir").checked = false;
            element("autorespawn").checked = true;
            element("autobuy").checked = true;
            element("autoreplace").checked = true;
            element("autoreload").checked = true;
            element("antitrap").checked = true;
            element("spiketick").checked = true;
            element("texturepack").checked = false;
            element("weaponRange").checked = false;
            element("pits").checked = true;
            element("antiTurretSync").checked = true;
            element("RangedSyncHomo").checked = true;
            element("RangedInstaHomo").checked = true;
            element("SyncDetectTest").checked = true;
            element("SyncDetect").checked = true;
            element("tryhard").checked = false;
            element("realdir").checked = true;
            element("reloadbars").checked = false;
            element("shamecount").checked = false;
            element("statsmenu").checked = false;




            }
    });
    document.getElementById("One").addEventListener("change", () => {
        if(document.getElementById("One").checked) {
            let element = (e) => {return document.getElementById(e);};
            element("autotick") .checked = true;
            element("OneTickBoost") .checked = true;
            element("autobullspam").checked = false;



        }
    });
    document.getElementById("autogrind").addEventListener("change", () => {
        if(document.getElementById("autogrind").checked) {
            for(let i = 0; i < 4; i++) {
                place(R.items[5] ? R.items[5] : R.items[3], i * Math.PI / 2);
            }
        }
    });
    document.getElementById("topInfoHolder").style.left = "20px";
    document.getElementById("resDisplay").appendChild(document.getElementById("killCounter"));
    document.getElementById("killCounter").style.bottom = "185px";
    document.getElementById("killCounter").style.right = "20px";
    document.getElementById("killCounter").style.top = "660px";
    ye.style.left = "330px";
    ke.style.left = "270px";
    document.getElementById("chatButton").style.right = "140px";
    document.getElementById("chatButton").style.display = "none";
    document.getElementById("topInfoHolder").style.display = "none";
    ye.style.display = "none";
    ke.style.display = "none";
    Oe.style.right = "20px";
    Oe.style.bottom = "240px";
    Oe.style.top = "613px";
    Ne.style.backgroundImage = "url('')";
    Oe.style.backgroundPosition = "right 4px center";
    Oe.style.backgroundImage = "url('../img/resources/gold_ico.png')";
    Oe.removeAttribute("id");
    ye.removeAttribute("id");
    ke.removeAttribute("id");
    let statusMenu = document.createElement("div");
    statusMenu.style = `
    position: absolute;
    color: white;
    text-align: left;
    font-size: 14px;
    width: 180px;
    height: 326px;
    top: 60px;
    right: 15px;
    `;
document.getElementById('enterGame').innerHTML = 'Enter Game';
$("#adCard").hide();
$(".menuHeader").hide();
$(".menuText").hide();
$(".downloadBadge").remove();
$("div[style='inline-block']").css('display', 'block');
$("div[style*='inline-block']").css('display', 'block');
$("div#menuCard.adCard").remove();
document.getElementById('adCard').remove();
$("ins.adsbygoogle").remove();
$("#div.menuCard").remove();
$("#mobileInstructions").remove();
$("#promoImgHolder").hide();
$("#downloadButtonContainer").hide();
$("#mobileDownloadButtonContainer").hide();
    document.getElementById("gameUI").appendChild(statusMenu);
    document.getElementById("gameName").style.color = "";
    document.getElementById("gameName").innerHTML = "";
    document.getElementById("partyButton").style.color = "";
    document.getElementById("enterGame").style.color = "";
    document.getElementById("mainMenu").style.backgroundColor = "Revival v3";
    var mills = {
        w: false,
        a: false,
        s: false,
        d: false,
        y: 0,
        x: 0,
        aim: 0,
        status: location.hostname == "moomoo.io" ? false : true,
        space: false
    };
    function repeater(e, t, o) {
        let a = !1, i;
        return {start(r) {
            r == e && "chatbox" !== document.activeElement.id.toLowerCase() && R && (a = !0, void 0 === i && (i = setInterval(() => {
                t(), a || (clearInterval(i), i = void 0);
            }, o)));
        }, stop(t) {
            t == e && "chatbox" !== document.activeElement.id.toLowerCase() && (a = !1);
        }};
    }
    var qHolding = false;
    const foodPlacer = repeater(81, () => {
        place(R.items[0]);
        qHolding = true;
    }, 60);
    const spikePlacer = repeater(86, () => {
        cplace(R.items[2]);
    }, 60);
    const trapPlacer = repeater(70, () => {
        cplace(R.items[4]);
    }, 60);
    const millPlacer = repeater(78, () => {
        cplace(R.items[3]);
    }, 60);
    const tpPlacer = repeater(72, () => {
        if(toggles.quadTurret()) {
            for(let i = 0; i < Math.PI * 2; i+=Math.PI/4) {
                cplace(R.items[5], i);
            }
        }else {
            cplace(R.items[5]);
        }
    }, 60);
    document.getElementById("gameCanvas").addEventListener("wheel", function(e) {
        if(e.deltaY > 0) {
            oe *= 0.95;
            ce *= 0.95;
        }else {
            oe /= 0.95;
            ce /= 0.95;
        }
        un();
    })
    var spamchat = false, chatQueue = [], endChatQueue = null;
    var freeCam = {
        status: false,
        x: 0,
        y: 0,
    }
    var audios = [
        new Audio("https://cdn.discordapp.com/attachments/967213871267971072/1027416621318414406/8mb.video-Vf9-wfenD0dA.m4a"),
        new Audio("https://cdn.discordapp.com/attachments/967213871267971072/1027001423034065006/DR._LOVE___DONT_STAND_SO_CLOSED_INITIAL_D.mp3"),
        new Audio("https://cdn.discordapp.com/attachments/967213871267971072/1027051825871990845/YT2mp3.info_-_Imagine_Dragons_-_Warriors_Lyrics_320kbps.mp3"),
        new Audio("https://cdn.discordapp.com/attachments/967213871267971072/1027003301465706537/Ken_Blast_-_The_Top_Lyrics_Video_Eurobeat_Initial_D_REUPLOAD.mp3"),
        new Audio("https://cdn.discordapp.com/attachments/1052272022639620168/1078016672209842186/y2mate.com_-_Chief_Keef_Love_Sosa_v144P.mp4"),
        new Audio("https://cdn.discordapp.com/attachments/1082944025037905981/1085477994056929320/hxndvmviner-f99-desolator.mp3"),
        new Audio(""),
        new Audio(""),
        new Audio(""),
        new Audio(""),
    ];
    function sendChat(e) {
        let chats = [];
        audios[e].play();
        if(e == 0) {
            chats=[{chat:"We at the top again, now what?",delay:16e3},{chat:"Heavy lay the crown, but",delay:18e3},{chat:"Count us",delay:2e4},{chat:"Higher than the mountain",delay:21e3},{chat:"And we be up here",delay:23e3},{chat:"for the long run",delay:24e3},{chat:"Strap in for a long one",delay:25e3},{chat:"We got everybody on one",delay:27e3},{chat:"Now you're coming at the king",delay:29e3},{chat:"so you better not miss",delay:31e3},{chat:"And we only get stronger",delay:33e3},{chat:"With everthing I carry",delay:36e3},{chat:"up on my back",delay:37e3},{chat:"you should paint it up",delay:39e3},{chat:"you should paint it up",delay:39e3},{chat:"with a target",delay:41e3},{chat:"Why would you dare me to",delay:46e3},{chat:"do it again?",delay:47e3},{chat:"Come get your spoiler up ahead",delay:5e4},{chat:"We're taking over,",delay:53e3},{chat:"We're taking over",delay:56e3},{chat:"Look at you come at my name,",delay:61e3},{chat:"you 'oughta know by now,",delay:63e3},{chat:"That We're Taking Over,",delay:66e3},{chat:"We're Taking Over",delay:69e3},{chat:"Maybe you wonder what",delay:74e3},{chat:"you're futures gonna be, but",delay:75e3},{chat:"I got it all locked up",delay:77e3},{chat:"Take a lap, now",delay:93e3},{chat:"Don't be mad, now",delay:95e3},{chat:"Run it back, run it back,",delay:97e3},{chat:"run it back, now",delay:98e3},{chat:"I got bodies lining up,",delay:1e5},{chat:"think you're dreaming",delay:101e3},{chat:"of greatness",delay:102e3},{chat:"Send you back home,",delay:103e3},{chat:"let you wake up",delay:105e3},{chat:"Why would you dare me to",delay:11e4},{chat:"do it again?",delay:111e3},{chat:"Come get your spoiler up ahead",delay:114e3},{chat:"We're taking over,",delay:117e3},{chat:"We're taking over",delay:12e4},{chat:"Look at you come at my name,",delay:125e3},{chat:"you 'oughta know by now,",delay:127e3},{chat:"That We're Taking Over,",delay:13e4},{chat:"We're Taking Over",delay:133e3},{chat:"Maybe you wonder what",delay:138e3},{chat:"you're futures gonna be, but",delay:14e4},{chat:"I got it all locked up",delay:141e3},{chat:"After all, what still exists",delay:157e3},{chat:"except for fights",delay:158e3},{chat:"Around me,",delay:16e4},{chat:"the keyboard is clicking,",delay:161e3},{chat:"the clock is ticking",delay:162e3},{chat:"Still not enough, let me",delay:164e3},{chat:"protect your persistence",delay:165e3},{chat:"even if itâ€™s too late",delay:167e3},{chat:"Let out the fight,",delay:168e3},{chat:"right at this moment",delay:169e3},{chat:"I got the heart of lion",delay:17e4},{chat:"I know the higher you climbing",delay:171e3},{chat:"the harder you fall",delay:172e3},{chat:"I'm at the top of the mount",delay:173e3},{chat:"Too many bodies to count,",delay:174e3},{chat:"I've been through it all",delay:175e3},{chat:"I had to weather the storm",delay:176e3},{chat:"to get to level I'm on",delay:178e3},{chat:"That's how the legend was born",delay:179e3},{chat:"All of my enemies already dead",delay:18e4},{chat:"I'm bored, I'm ready for more",delay:182e3},{chat:"They know I'm ready for war",delay:183e3},{chat:"I told em",delay:184e3},{chat:"We're Taking Over,",delay:185e3},{chat:"We're Taking Over",delay:186e3},{chat:"Look at you come at my name,",delay:192e3},{chat:"you 'oughta know by now,",delay:194e3},{chat:"That We're Taking Over,",delay:197e3},{chat:"We're Taking Over",delay:2e5},{chat:"Maybe you wonder what",delay:205e3},{chat:"you're futures gonna be, but",delay:206e3},{chat:"I got it all locked up",delay:208e3}];
        }else if(e == 1) {
            chats=[{chat: "We'll be together", delay: 16428}, {chat: "'till the morning light", delay: 17431}, {chat: "Don't stand so", delay: 19430}, {chat: "Don't stand so", delay: 20537}, {chat: "Don't stand so close to me", delay: 22394}, {chat: "Baby you belong to me", delay: 37544}, {chat: "Yes you do, yes you do", delay: 40608}, {chat: "You're my affection", delay: 42118}, {chat: "I can make a woman cry", delay: 43959}, {chat: "Yes I do, yes I do", delay: 46846}, {chat: "I will be good", delay: 48323}, {chat: "You're like a cruel device", delay: 50330}, {chat: "your blood is cold like ice", delay: 51530}, {chat: "Posion for my veins", delay: 53126}, {chat: "I'm breaking my chains", delay: 54520}, {chat: "One look and you can kill", delay: 56534}, {chat: "my pain now is your thrill", delay: 58353}, {chat: "Your love is for me", delay: 60466}, {chat: "I say Try me", delay: 62135}, {chat: "take a chance on emotions", delay: 63844}, {chat: "For now and ever", delay: 65424}, {chat: "close to your heart", delay: 66521}, {chat: "I say Try me", delay: 68012}, {chat: "take a chance on my passion", delay: 69655}, {chat: "We'll be together all the time", delay: 71915}, {chat: "I say Try me", delay: 73862}, {chat: "take a chance on emotions", delay: 76381}, {chat: "For now and ever", delay: 77832}, {chat: "into my heart", delay: 79038}, {chat: "I say Try me", delay: 80568}, {chat: "take a chance on my passion", delay: 81941}, {chat: "We'll be together", delay: 83895}, {chat: "'till the morning light", delay: 85005}, {chat: "Don't stand so", delay: 87068}, {chat: "Don't stand so", delay: 88647}, {chat: "Don't stand so close to me", delay: 90090}, {chat: "Baby let me take control", delay: 106239}, {chat: "Yes I do, yes I do", delay: 108257}, {chat: "You are my target", delay: 110121}, {chat: "No one ever made me cry", delay: 111761}, {chat: "What you do, what you do", delay: 114535}, {chat: "Baby's so bad", delay: 116056}, {chat: "You're like a cruel device", delay: 118376}, {chat: "your blood is cold like ice", delay: 119797}, {chat: "Posion for my veins", delay: 121602}, {chat: "I'm breaking my chains", delay: 123250}, {chat: "One look and you can kill", delay: 124849}, {chat: "my pain now is your thrill", delay: 126381}, {chat: "Your love is for me", delay: 128096}, {chat: "I say Try me", delay: 129310}, {chat: "take a chance on emotions", delay: 131038}, {chat: "For now and ever", delay: 132844}, {chat: "close to your heart", delay: 134255}, {chat: "I say Try me", delay: 135932}, {chat: "take a chance on my passion", delay: 137255}, {chat: "We'll be together all the time", delay: 139257}, {chat: "I say Try me", delay: 141863}, {chat: "take a chance on emotions", delay: 143342}, {chat: "For now and ever into my heart", delay: 145433}, {chat: "I say Try me", delay: 148679}, {chat: "take a chance on my passion", delay: 150190}, {chat: "We'll be together", delay: 151716}, {chat: "'till the morning light", delay: 153966}, {chat: "Don't stand so", delay: 155878}, {chat: "Don't stand so", delay: 156935}, {chat: "Don't stand so close to me", delay: 158061}, {chat: "I say Try me", delay: 185081}, {chat: "take a chance on emotions", delay: 186492}, {chat: "For now and ever", delay: 188577}, {chat: "close to your heart", delay: 189819}, {chat: "I say Try me", delay: 191359}, {chat: "take a chance on my passion", delay: 193068}, {chat: "We'll be together all the time", delay: 194729}, {chat: "I say Try me", delay: 197008}, {chat: "take a chance on emotions", delay: 198865}, {chat: "For now and ever", delay: 200708}, {chat: "into my heart", delay: 201879}, {chat: "I say Try me", delay: 203396}, {chat: "take a chance on my passion", delay: 204804}, {chat: "We'll be together", delay: 206818}, {chat: "'till the morning light", delay: 208209}, {chat: "Don't stand so", delay: 210163}, {chat: "Don't stand so", delay: 211692}, {chat: "Don't stand so close to me", delay: 213290}, {chat: "Try me", delay: 228763}, {chat: "take a chance on emotions", delay: 229917}, {chat: "For now and ever", delay: 232175}, {chat: "close to your heart", delay: 233605}, {chat: "I say Try me", delay: 234494}, {chat: "take a chance on my passion", delay: 235826}, {chat: "We'll be together all the time", delay: 237819}, {chat: "I say Try me", delay: 240095}, {chat: "take a chance on emotions", delay: 241754}, {chat: "For now and ever", delay: 244041}, {chat: "into my heart", delay: 245137}, {chat: "I say Try me", delay: 246804}, {chat: "take a chance on my passion", delay: 248067}, {chat: "We'll be together", delay: 249872}, {chat: "'till the morning light", delay: 251107}, {chat: "Don't stand so", delay: 253246}, {chat: "Don't stand so", delay: 254803}, {chat: "Don't stand so close to me", delay: 256372}, {delay: 259025}, {delay: 260829}, {delay: 261174}];
        }else if(e == 2) {
            chats=[{chat:"As a child you would wait",delay:6e3},{chat:"And watch from far away",delay:9e3},{chat:"But you always knew",delay:12e3},{chat:"that you'd be the one",delay:14e3},{chat:"That work while they all play",delay:15e3},{chat:"In youth you'd lay",delay:18e3},{chat:"Awake at night and scheme",delay:21e3},{chat:"Of all the things",delay:24e3},{chat:"that you would change",delay:26e3},{chat:"But it was just a dream",delay:27e3},{chat:"Here we are,",delay:31e3},{chat:"Don't turn away now",delay:33e3},{chat:"We are the warriors",delay:37e3},{chat:"that built this town",delay:39e3},{chat:"Here we are",delay:43e3},{chat:"Don't turn away now",delay:45e3},{chat:"We are the warriors",delay:49e3},{chat:"that built this town",delay:51e3},{chat:"from dust",delay:55e3},{chat:"The time will come",delay:57e3},{chat:"When you'll have to rise",delay:58e3},{chat:"above the best",delay:61e3},{chat:"and prove yourself",delay:63e3},{chat:"Your spirit never dies",delay:64e3},{chat:"Farewell, I've gone",delay:67e3},{chat:"to take my throne above",delay:71e3},{chat:"But don't weep for me",delay:73e3},{chat:"Cause this will be",delay:75e3},{chat:"The labor of my love",delay:77e3},{chat:"Here we are,",delay:8e4},{chat:"Don't turn away now",delay:82e3},{chat:"We are the warriors",delay:86e3},{chat:"that built this town",delay:89e3},{chat:"Here we are",delay:92e3},{chat:"Don't turn away now",delay:94e3},{chat:"We are the warriors",delay:98e3},{chat:"that built this town",delay:101e3},{chat:"from dust",delay:104e3},{chat:"Here we are,",delay:129e3},{chat:"Don't turn away now",delay:132e3},{chat:"We are the warriors",delay:136e3},{chat:"that built this town",delay:132e3},{chat:"Here we are",delay:142e3},{chat:"Don't turn away now",delay:144e3},{chat:"We are the warriors",delay:148e3},{chat:"that built this town",delay:15e4},{chat:"from dust",delay:154e3}];
        }else if(e == 3) {
            chats=[{chat:"Final lap",delay:39e3},{chat:"I'm on top of the world",delay:4e4},{chat:"And I will never",delay:41e3},{chat:"rest for second again!",delay:42e3},{chat:"One more time",delay:45e3},{chat:"I have beaten them out",delay:46e3},{chat:"The scent of gasoline",delay:47e3},{chat:"announces the end!",delay:49e3},{chat:"They all said",delay:51e3},{chat:"I'd best give it up",delay:52e3},{chat:"What a fool",delay:53e3},{chat:"to believe their lies!",delay:54e3},{chat:"Now they've fallen",delay:57e3},{chat:"and I'm at the top",delay:58e3},{chat:"Are you ready",delay:59e3},{chat:"now to die-ie-ie?!",delay:6e4},{chat:"I came up from the bottom,",delay:63e3},{chat:"and into the top",delay:64e3},{chat:"For the first time",delay:65e3},{chat:"I feel alive!",delay:66e3},{chat:"I can fly like an eagle,",delay:69e3},{chat:"and strike like a hawk!",delay:7e4},{chat:"Do you think you can survive",delay:72e3},{chat:"the top?",delay:75e3},{chat:"One more turn",delay:87e3},{chat:"and I'll settle the score",delay:88e3},{chat:"A rubber fire screams",delay:89e3},{chat:"into the night",delay:91e3},{chat:"Crash and burn is",delay:93e3},{chat:"what you're gonna do",delay:94e3},{chat:"I am a master of",delay:95e3},{chat:"the asphalt fight!",delay:97e3},{chat:"They all said",delay:99e3},{chat:"I'd best give it up",delay:1e5},{chat:"What a fool to",delay:101e3},{chat:"believe their lies!",delay:104e3},{chat:"Now they've fallen",delay:105e3},{chat:"and I'm at the top",delay:106e3},{chat:"Are you ready",delay:107e3},{chat:"now to die-ie-ie?!",delay:108e3},{chat:"I came up from the bottom,",delay:11e4},{chat:"and into the top",delay:112e3},{chat:"For the first time",delay:113e3},{chat:"I feel alive!",delay:114e3},{chat:"I can fly like an eagle,",delay:117e3},{chat:"and strike like a hawk!",delay:118e3},{chat:"Do you think you can survive",delay:12e4},{chat:"I came up from the bottom,",delay:123e3},{chat:"and into the top",delay:124e3},{chat:"For the first time",delay:125e3},{chat:"I feel alive!",delay:126e3},{chat:"I can fly like an eagle,",delay:129e3},{chat:"and strike like a hawk!",delay:13e4},{chat:"Do you think you can survive",delay:131e3},{chat:"the top?",delay:134e3},{chat:"I came up from the bottom,",delay:171e3},{chat:"and into the top",delay:172e3},{chat:"For the first time",delay:173e3},{chat:"I feel alive!",delay:174e3},{chat:"I can fly like an eagle,",delay:177e3},{chat:"and strike like a hawk!",delay:178e3},{chat:"Do you think you can survive",delay:18e4},{chat:"I came up from the bottom,",delay:183e3},{chat:"and into the top",delay:184e3},{chat:"For the first time",delay:185e3},{chat:"I feel alive!",delay:186e3},{chat:"I can fly like an eagle,",delay:189e3},{chat:"and strike like a hawk!",delay:19e4},{chat:"Do you think you can survive",delay:192e3},{chat:"the top?",delay:194e3},{chat:"I came up from the bottom,",delay:23e4},{chat:"and into the top",delay:232e3},{chat:"For the first time",delay:233e3},{chat:"I feel alive!",delay:234e3},{chat:"I can fly like an eagle,",delay:237e3},{chat:"and strike like a hawk!",delay:238e3},{chat:"Do you think you can survive",delay:239e3},{chat:"I came up from the bottom,",delay:243e3},{chat:"and into the top",delay:244e3},{chat:"For the first time",delay:245e3},{chat:"I feel alive!",delay:246e3},{chat:"I can fly like an eagle,",delay:249e3},{chat:"and strike like a hawk!",delay:25e4},{chat:"Do you think you can survive",delay:252e3},{chat:"the top?",delay:255e3}];
        }else if(e == 4) {
            chats=[{chat:"Love Sosa",delay:7e3},{chat:"bitches love Sosa, huh?",delay:10e3},{chat:"O End or no end",delay:14e3},{chat:"Raris and Rovers",delay:16e3},{chat:"Ayy, li'l Cobra, ayy, ayy",delay:18e3},{chat:"Bang, Bang-bang",delay:27e3},{chat:"God, y'all some broke boys",delay:29e3},{chat:"God, y'all some broke boys",delay:30e3},{chat:"These bitches love Sosa",delay:32e3},{chat:"O End or no end",delay:34e3},{chat:"Fuckin' with them O boys",delay:36e3},{chat:"you gon' get fucked over",delay:38e3},{chat:"'Raris and Rovers",delay:40e3},{chat:"these hoes love Chief Sosa",delay:42e3},{chat:"Hit him with that cobra",delay:43e3},{chat:"now that boy slumped over",delay:45e3},{chat:"They do it all for Sosa",delay:47e3},{chat:"you boys ain't making no noise",delay:49e3},{chat:"Y'all know I'm a grown boy",delay:51e3},{chat:"your clique full of broke boys",delay:53e3},{chat:"God, y'all some broke boys",delay:55e3},{chat:"God, y'all some broke boys",delay:56e3},{chat:"We GBE dope boys,",delay:58e3},{chat:"we got lots of dough, boy",delay:60e3},{chat:"These bitches love Sosa",delay:62e3},{chat:"and they love them Glo Boys",delay:64e3},{chat:"Know we from the 'Go boy",delay:65e3},{chat:"but we cannot go, boy",delay:67e3},{chat:"No, I don't know old boy",delay:69e3},{chat:"I know he's a broke boy",delay:71e3},{chat:"'Raris and Rovers,",delay:73e3},{chat:"convertible Lambos, boy",delay:74e3},{chat:"You know I got bands, boy,",delay:76e3},{chat:"and it's in my pants, boy",delay:78e3},{chat:"Disrespect them O Boys,",delay:80e3},{chat:"you won't speak again, boy",delay:82e3},{chat:"Don't think that I'm playin', boy",delay:84e3},{chat:"no, we don't use hands, boy",delay:85e3},{chat:"No, we don't do friends, boy,",delay:87e3},{chat:"collect bands, I'm a landlord",delay:89e3},{chat:"I gets lots of commas,",delay:91e3},{chat:"I can fuck your momma",delay:92e3},{chat:"I ain't with the drama,",delay:94e3},{chat:"you can meet my llama",delay:96e3},{chat:"Ridin' with 3hunna,",delay:98e3},{chat:"with three hundred foreigns",delay:94e3},{chat:"These bitches see Chief Sosa",delay:102e3},{chat:"I swear to God, they honored",delay:104e3},{chat:"These bitches love Sosa",delay:105e3},{chat:"O End or no end",delay:107e3},{chat:"Fuckin' with them O boys",delay:109e3},{chat:"you gon' get fucked over",delay:110e3},{chat:"'Raris and Rovers",delay:112e3},{chat:"these hoes love Chief Sosa",delay:114e3},{chat:"Hit him with that cobra",delay:116e3},{chat:"now that boy slumped over",delay:118e3},{chat:"They do it all for Sosa",delay:120e3},{chat:"you boys ain't making no noise",delay:121e3},{chat:"Y'all know I'm a grown boy",delay:123e3},{chat:"your clique full of broke boys",delay:125e3},{chat:"God, y'all some broke boys",delay:127e3},{chat:"God, y'all some broke boys",delay:128e3},{chat:"We GBE dope boys",delay:130e3},{chat:"we got lots of dough, boy",delay:132e3},{chat:"Don't make me call D. Rose",delay:135e3},{chat:"boy, he six double-O, boy",delay:136e3},{chat:"And he keep that pole, boy",delay:138e3},{chat:"you gon' get fucked over",delay:140e3},{chat:"Bitch, I done sell soda",delay:142e3},{chat:"and I done sell coca",delay:144e3},{chat:"She gon' clap for Sosa",delay:145e3},{chat:"he gon' clap for Sosa",delay:147e3},{chat:"They do it for Sosa, them hoes",delay:149e3},{chat:"they do it for Sosa",delay:150e3},{chat:"Tadoe off the molly water",delay:152e3},{chat:"so nigga be cool like water",delay:154e3},{chat:"Fore you get hit with thislava",delay:156e3},{chat:"bitch, I'm the trending topic",delay:158e3},{chat:"These bitches love Sosa",delay:163e3},{chat:"O End or no end",delay:165e3},{chat:"Fuckin' with them O boys",delay:167e3},{chat:"you gon' get fucked over",delay:169e3},{chat:"'Raris and Rovers",delay:170e3},{chat:"these hoes love Chief Sosa",delay:172e3},{chat:"Hit him with that cobra",delay:174e3},{chat:"now that boy slumped over",delay:176e3},{chat:"They do it all for Sosa",delay:178e3},{chat:"you boys ain't making no noise",delay:180e3},{chat:"Y'all know I'm a grown boy",delay:182e3},{chat:"your clique full of broke boys",delay:184e3},{chat:"God, y'all some broke boys",delay:185e3},{chat:"God, y'all some broke boys",delay:187e3},{chat:"We GBE dope boys",delay:189e3},{chat:"we got lots of dough, boy",delay:191e3}];
        }else if(e == 6) {
            chats=[{chat:"Ah",delay:17e3},{chat:"Ahhh",delay:23e3},{chat:"Do you like my car?",delay:28e3},{chat:"My Car",delay:30e3},{chat:"my car",delay:31e3},{chat:"m y  c a r ",delay:34e3},{chat:"Guess you're ready 'cause I'm waiting for you",delay:3e4},{chat:"it's gonna be so exciting",delay:55e3},{chat:"Got this feeling really deep in my soul",delay:60e3},{chat:"Let's get out, I wanna go, come along, get it on",delay:63e3},{chat:"Gonna take my car, gonna sit in",delay:67e3},{chat:"Gonna take my car, gonna sit in",delay:68e3},{chat:"Gonna drive along 'til I get you",delay:70e3},{chat:"'Cause I'm crazy, hot and ready, but you like it",delay:72e3},{chat:"I wanna race for you (Shall I go now?)",delay:77e3},{chat:"Gas, gas, gas",delay:78e3},{chat:"I'm gonna step on the gas",delay:80e3},{chat:"Tonight, I'll fly (and be your lover)",delay:82e3},{chat:"Yeah, yeah, yeah",delay:84e3},{chat:"I'll be so quick as a flash",delay:86e3},{chat:"And I'll be your hero",delay:88e3},{chat:"Gas, gas, gas",delay:90e3},{chat:"I'm gonna run as a flash",delay:92e3},{chat:"Tonight, I'll fight (to be the winner)",delay:94e3},{chat:"Yeah, yeah, yeah",delay:96e3},{chat:"I'm gonna step on the gas",delay:98e3},{chat:"And you'll see the big show",delay:100e3},{chat:"Don't be lazy 'cause I'm burning for you",delay:115e3},{chat:"It's like a hot sensation",delay:118e3},{chat:"Got this power that is taking me out",delay:120e3},{chat:"Yes, I've got a crush on you, ready, now, ready, go",delay:124e3},{chat:"Gonna take my car!",delay:128e3},{chat:"Do you like my car?",delay:130e3},{chat:"'Cause I'm crazy, hot and ready, but you like it",delay:132e3},{chat:"I wanna race for you (Shall I go now?)",delay:138e3},{chat:"Gas, gas, gas",delay:142e3},{chat:"I'm gonna step on the gas",delay:144e3},{chat:"Tonight, I'll fly (and be your lover)",delay:146e3},{chat:"Yeah, yeah, yeah",delay:148e3},{chat:"I'll be so quick as a flash",delay:150e3},{chat:"And I'll be your hero",delay:152e3},{chat:"Gas, gas, gas",delay:154e3},{chat:"I'm gonna run as a flash",delay:24e3},{chat:"",delay:156e3},{chat:"Tonight, I'll fight (to be the winner)",delay:158e3},{chat:"Yeah, yeah, yeah",delay:160e3},{chat:"I'm gonna step on the gas",delay:162e3},{chat:"And you'll see the big show",delay:164e3},{chat:"Gas, gas, gas",delay:166e3},{chat:"Yeah, yeah, yeah",delay:170e3},{chat:"Gas, gas, gas",delay:172e3},{chat:"And you'll see the big show",delay:176e3},{chat:"Ahhhh",delay:184e3}];
        }else if(e == 7) {
            chats=[{chat:"inspriration of these bears fact",delay:16e3},{chat:"i go cuckoo for the dough, though",delay:18e3},{chat:"Jason mask, that's my logo",delay:2e4},{chat:"He whinin thats my bro though",delay:21e3},{chat:"Pass it off, Tony Romo",delay:23e3},{chat:"Real gangsta, I be solo",delay:24e3},{chat:"I was poppin' for the promo",delay:25e3},{chat:"We no tal yeah thats bro code",delay:27e3},{chat:"Gentleman,I on't do low blows (21, 21)",delay:29e3},{chat:"I don't do low blows (21, 21)",delay:29e3},{chat:"Tel them folk to cut my check",delay:31e3},{chat:"They get my best (straight up",delay:33e3},{chat:"Leave me",delay:36e3},{chat:"Click withe Skrillex,",delay:37e3},{chat:"thise is chess (21)",delay:39e3},{chat:"And you better pay the IRS",delay:39e3},{chat:"Catchin', catchin', fightin'",delay:41e3},{chat:"they know I be fresh (21)",delay:46e3},{chat:"demons, IiI' bruh he posessed",delay:47e3},{chat:"I might run a lap,",delay:5e4},{chat:"Couple swerves over these new rappers",delay:53e3},{chat:"I'm gon run the world over",delay:56e3},{chat:"Okay, oh, cool, at least you",delay:61e3},{chat:"Leave me",delay:63e3},{chat:"Morer on my mind",delay:66e3},{chat:"It's time to pray to God",delay:69e3},{chat:"Nvm, I'm out your circle fact",delay:74e3},{chat:"I'm out of the box,",delay:75e3},{chat:"Yeah I been one, you aint top",delay:77e3},{chat:"Leave now?",delay:93e3},{chat:"'cause I'm the G.O.A.T",delay:95e3},{chat:"pay the IRS is best",delay:97e3},{chat:"Kill rapers,do headshot",delay:98e3},{chat:"Bedside, chains hang, Le' Zip",delay:1e5},{chat:"Broadcasts is best its a fact",delay:101e3},{chat:"Let 'em know dogs out",delay:102e3},{chat:"Let 'em know, let 'em know",delay:103e3},{chat:"Oh whare am I going now,",delay:13e4},{chat:"Just faling over dreams?",delay:133e3},{chat:"Now I'm just so far gone,",delay:138e3},{chat:"This isn't what it seems",delay:14e4},{chat:"it's taking me so damn long,",delay:141e3},{chat:"it's fading from belive",delay:157e3},{chat:"I need to slow thise down",delay:158e3},{chat:"It's burning from beneath",delay:16e4},{chat:"Come break thise light",delay:161e3},{chat:"Before tomorrow dies",delay:162e3},{chat:"Holding on for what is my life",delay:164e3},{chat:"I know in time",delay:165e3},{chat:"l'II make it up the vine",delay:167e3},{chat:"My way to giants in the sky",delay:168e3},{chat:"Tonight it comes to life",delay:169e3},{chat:"Tonight it comes to life",delay:17e4},{chat:"Whare am I going now,",delay:171e3},{chat:"Just falling over dreams?",delay:172e3},{chat:"Now I'm just so far gone,",delay:173e3},{chat:"This isn't what it seems",delay:174e3},{chat:"It's tacking me so damn long,",delay:175e3},{chat:"It's fading from belive",delay:176e3},{chat:"i need to slow thise down",delay:178e3},{chat:"it's burning from beneath",delay:179e3},{chat:"Come break this light",delay:18e4},{chat:"Before tomorrow dies",delay:182e3},{chat:"Holding on for what is my life",delay:183e3},{chat:"I told em",delay:184e3},{chat:"I know in time",delay:185e3},{chat:"l'II make it up the vine",delay:186e3},{chat:"My way to giants in the sky",delay:192e3},{chat:"Tonight it comes to life",delay:193e3},{chat:"Tonight it comes to life",delay:194e3},{chat:"Come break thise light",delay:195e3},{chat:"Before tomorrow dies",delay:201e3},{chat:"Golding on for what is my life",delay:205e3},{chat:"I know in time",delay:206e3},{chat:"I'll make it up the vine",delay:208e3}];
       }else if(e == 8) {
            chats=[{chat:"auf den wellen",delay:16e3},{chat:"wir gefochten",delay:18e3},{chat:"wo fisch und fleisch",delay:2e4},{chat:"zur see geflochten",delay:21e3},{chat:"der eine sticht",delay:23e3},{chat:"die lanz' im heer",delay:24e3},{chat:"der andere wirft sie",delay:25e3},{chat:"in das meer",delay:27e3},{chat:"AH",delay:29e3},{chat:"AHDI",delay:29e3},{chat:"REISE, REISE",delay:31e3},{chat:"SEEMANN REISE",delay:33e3},{chat:"JEDER TUT'S AUF SEINE WEI",delay:36e3},{chat:"DER EINE STOBT DEN",delay:37e3},{chat:"SPEER ZUM MANN",delay:39e3},{chat:"der andere zum fische dan",delay:39e3},{chat:"RIESE, RIESE",delay:41e3},{chat:"SEEMANN REISE",delay:46e3},{chat:"UND DIE WELLEN",delay:47e3},{chat:"WEINEN LEISE",delay:5e4},{chat:"IN IHREM BLUTE",delay:53e3},{chat:"BLUTE LEINSE IN DAS MEER",delay:56e3},{chat:"DIE LANZE MUSS IM",delay:61e3},{chat:"FLEISCH ERTRINKEN",delay:63e3},{chat:"FISCH UND MANN ZUR",delay:66e3},{chat:"RIFIEFE SINKEN",delay:69e3},{chat:"TIEFE SINKEN",delay:74e3},{chat:"WO DIE SCHWARZE",delay:75e3},{chat:"SEELE WOHNT",delay:77e3},{chat:"IST KEIN LICHT AM HORIZONT",delay:93e3},{chat:"AH",delay:95e3},{chat:"AHDI",delay:97e3},{chat:"REISE, REISE",delay:98e3},{chat:"JEDER TUT'S AUF SEINE WEI",delay:1e5},{chat:"REISE, REISE, REISE",delay:101e3},{chat:"AHDIIII",delay:105e3}];
       }else if(e == 9) {
            chats=[{chat:"And my mind turns crazy",delay:16e3},{chat:"It's time to do or die",delay:18e3},{chat:"Fear thunders in",delay:2e4},{chat:"my heart and I, and I",delay:21e3},{chat:"Energy, a heart explosion",delay:23e3},{chat:"All I need, adrenaline",delay:24e3},{chat:"Never stop to is in my mind",delay:25e3},{chat:"Fire away, adrenaline",delay:27e3},{chat:"Rollercoaster of emotion",delay:29e3},{chat:"I just need adrenaline",delay:31e3},{chat:"Setting all the worlds afire",delay:33e3},{chat:"Energy, adrenaline",delay:36e3},{chat:"Boy feels like lava flowin'",delay:37e3},{chat:"Hard adrenaline",delay:39e3},{chat:"Rushin' thtought the",delay:39e3},{chat:"Pain and sqeezing",delay:41e3},{chat:"Power's runnin' in my veins",delay:46e3},{chat:"Fight or flight",delay:47e3},{chat:"And my mind turns crazy",delay:5e4},{chat:"Fear thuners in",delay:53e3},{chat:"my heart and I, and I",delay:56e3},{chat:"",delay:61e3},{chat:"Energy, a heart explosion",delay:63e3},{chat:"All I need, adrenaline",delay:66e3},{chat:"Never stop to is in my mind",delay:69e3},{chat:"Fire away, adrenaline",delay:74e3},{chat:"Rollercoaster of emotin",delay:75e3},{chat:"I just need arenaline",delay:77e3},{chat:"Setting all the worlds afire",delay:93e3},{chat:"Energy, adrenaline",delay:95e3},{chat:"don't care",delay:97e3}];

       }
        chatQueue = [];
        chats.forEach(e => {
            chatQueue.push(setTimeout(() => {
                if(document.activeElement.id.toLowerCase() !== 'chatbox') {
                    r.send("6", e.chat);
                }
            }, e.delay));
        });
        endChatQueue = setTimeout(() => {
            spamchat = false;
        }, chats[chats.length - 1].delay);
    }
    window.addEventListener("keydown", s.checkTrusted((function(e) {
        var t = e.which || e.keyCode || 0;
        if(R) {
            foodPlacer.start(t);
            tpPlacer.start(t);
            trapPlacer.start(t);
            spikePlacer.start(t);
            millPlacer.start(t);
        }
        if(e.keyCode == 27 && R) {
            if(scriptMenu.style.display == "block") {
                scriptMenu.style.display = "none";
                document.getElementById("topInfoHolder").style.display = "block";
                ye.style.display = "block";
                ke.style.display = "block";
            }else {
                scriptMenu.style.display = "block";
                document.getElementById("topInfoHolder").style.display = "none";
                ye.style.display = "none";
                ke.style.display = "none";
            }
        }
        if(e.key == "=" && R && "chatbox" !== document.activeElement.id.toLowerCase()) {
            oe = o.maxScreenWidth;
            ce = o.maxScreenHeight;
            un();
        }
        if(t == 191 && R && "chatbox" !== document.activeElement.id.toLowerCase()) {
            if(freeCam.status == true) {
                freeCam.status = false;
                freeCam.dir = null;
                clearInterval(freeCam.interval);
            }else {
                freeCam.x = R.x;
                freeCam.y = R.y;
                freeCam.interval = setInterval(() => {
                    if(freeCam.dir != null) {
                        freeCam.x += Math.cos(freeCam.dir) * 10;
                        freeCam.y += Math.sin(freeCam.dir) * 10;
                    }
                }, 0);
                freeCam.status = true;
            }
        }
        if(e.keyCode == 106) {
           document.getElementById('gameUI').style.display = document.getElementById('gameUI').style.display == "block" ? "none" : "block";
           };
        if(e.key && e.key == "C" && R && "chatbox" !== document.activeElement.id.toLowerCase()) {
            if(spamchat == false) {
                audios[document.getElementById("chatType").value].currentTime = 0;
                sendChat(document.getElementById("chatType").value);
            }else {
                clearTimeout(endChatQueue);
                for(let i = 0; i < chatQueue.length; i++) {
                    clearTimeout(chatQueue[i]);
                }
                for(let i = 0; i < audios.length; i++) {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
                chatQueue = [];
            }
            spamchat = !spamchat;
        }
        e.key == "z" && R && "chatbox" !== document.activeElement.id.toLowerCase() &&
            (mills.status = !mills.status);
        (t == 87 || t == 38) && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.w = true);
        (t == 65 || t == 37) && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.a = true);
        (t == 83 || t == 40) && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.s = true);
        (t == 68 || t == 39) && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.d = true);
        32 == t && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.space = true);
        if(e.key && e.key == "Z" && "chatbox" !== document.activeElement.id.toLowerCase()) {
            autoPrimary.change(false);
            autoSecondary.change(false);
        }
        if(e.keyCode == 190 && R && autoaim == false && nearestEnemy.length && R.team && "chatbox" !== document.activeElement.id.toLowerCase()) {
            r.send("S", 1);
        }
        27 == t ? Qt() : R && R.alive && kn() && (gn[t] || (gn[t] = 1,
        69 == t ? r.send("K", 1) : 67 == t && e.key != "C" ? (Mt || (Mt = {}),
        Mt.x = R.x,
        Mt.y = R.y) : 143 == t ? (R.lockDir = R.lockDir ? 0 : 1,
        r.send("K", 0)) : null != R.weapons[t - 49] ? Sn(R.weapons[t - 49], !0) : null != R.items[t - 49 - R.weapons.length] ? Sn(R.items[t - 49 - R.weapons.length]) : 81 == t ? Sn(R.items[0]) : 82 == t ? xn() : mn[t] ? bn() : 32 == t && (O = 1)))
    }
    ))),
    window.addEventListener("keyup", s.checkTrusted((function(e) {
        if (R && R.alive) {
            var t = e.which || e.keyCode || 0;
            foodPlacer.stop(t);
            tpPlacer.stop(t);
            trapPlacer.stop(t);
            spikePlacer.stop(t);
            millPlacer.stop(t);
            if(t == 81) {
                qHolding = false;
            }
            (t == 87 || t == 38) && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.w = false);
            (t == 65 || t == 37) && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.a = false);
            (t == 83 || t == 40) && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.s = false);
            (t == 68 || t == 39) && R && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.d = false);
            32 == t && "chatbox" !== document.activeElement.id.toLowerCase() && (mills.space = false);
            13 == t ? rn() : kn() && gn[t] && (gn[t] = 0,
            mn[t] ? bn() : 32 == t && (O = 0))
        }
    }
    )));
    var wn = void 0;
    function bn() {
        var e = function() {
            var e = 0
              , t = 0;
            if (-1 != re.id)
                e += re.currentX - re.startX,
                t += re.currentY - re.startY;
            else
                for (var n in mn) {
                    var i = mn[n];
                    e += !!gn[n] * i[0],
                    t += !!gn[n] * i[1]
                }
            return 0 == e && 0 == t ? void 0 : s.fixTo(Math.atan2(t, e), 2)
        }();
        if((wn == null || e == null || Math.abs(e - wn) > .3) && oneticking == false) {
            if(!freeCam.status) {
                r.send("9", e);
            }
            mills.aim = e;
            freeCam.dir = e;
            wn = e;
        }
    }
    var insta = false;
    function xn() {
        insta = !insta;
    }
    function Sn(e, t) {
        r.send("z", e, t)
    }
    var In = !0;
    function En(e) {
        Pe.style.display = "none",
        Me.style.display = "block",
        he.style.display = "none",
        gn = {},
        j = e,
        O = 0,
        le = !0,
        In && (In = !1,
        N.length = 0)
    }
    function Mn(e, t, n, i) {
        m.showText(e, t, 50, .18, 2000, Math.abs(n), n >= 0 ? "#d90202" : "#a481f0")
    }
    var An = 99999;
    function Pn() {
        le = !1;
        Ge.innerHTML = R.shameCount < 5 ? "OOF" : "OOF";
        Be.style.display = "none",
        Qt(),
        It = {
            x: R.x,
            y: R.y
        },
        Pe.style.display = "none",
        Ge.style.display = "block",
        Ge.style.fontSize = "0px",
        An = 0,
        setTimeout((function() {
            Me.style.display = "block"
            he.style.display = "block"
            Ge.style.display = "none"
            if(toggles.autorespawn() || toggles.streamermode()) {
                setTimeout(() => {
                    Tn();
                }, 250);
            }
        }), o.deathFadeout);
        //gt()
    }
    function Bn(e) {
        R && nt.removeAllItems(e)
    }
    var tempTracers = [], infinteTracers = [];
    function Cn(e) {
        let b = Mi(e);
        let nearestTrap = N.filter(e => e.trap && e.owner.sid != R.sid && !isAlly(e.owner.sid) && e.active && Math.hypot(e.y - R.y2, e.x - R.x2) < 80).sort(
            (e, t) => Math.hypot(e.y - R.y2, e.x - R.x2) - Math.hypot(t.y - R.y2, t.x - R.x2)
        )[0];
        nt.disableBySid(e);
        if(nearestTrap && b == nearestTrap) {
            trapSoldier = true;
            Jt(6);
            if(onlyEMP == true) {
                if(R.shameCount < 5) {
                    //heal();
                }
                onlyEMP = false;
            }
            setTimeout(() => {
                trapSoldier = false;
            }, 200);
        }
        if(toggles.autogrind() == false) {
            if(b && Math.hypot(b.y - R.y2, b.x - R.x2) < 300 && nearestEnemy.length) {
                if(dist(nearestEnemy, R) < 140 && autoaim == false && R.primary.reload == 1 && R.primary.dmg >= 40 && hitting == false && toggles.spiketick()) {
                    place(R.items[2], nearestEnemyAngle);
                    autoaim = true;
                    hitting = true;
                    Jt(7, 0);
                    Jt(R.tails[21] ? 21 : 0, 1);
                    Sn(R.weapons[0], true);
                    autoSecondary.change(false);
                    autoPrimary.change(true);
                    autoheal.change(true);
                    setTimeout(() => {
                        autoheal.change(false);
                        hitting = true;
                        autoPrimary.change(false);
                        autoSecondary.change(false);
                        autoaim = false;
                    }, 240);
                }
                if(toggles.autoreplace()) {
                    if(dist(nearestEnemy, R) < 250) {
                        for(let i = 0; i < Math.PI * 2; i += Math.PI/2) {
                            cplace(R.items[2], i + nearestEnemyAngle);
                        }
                    }//nearestEnemyAngle-Math.PI/3; i < nearestEnemyAngle+Math.PI/3; i+=Math.PI/12
                    if(R.items[4] == 15 && dist(nearestEnemy, R) < 350) {
                        for(let i = 0; i < Math.PI * 2; i += Math.PI/2) {
                            cplace(R.items[4], i + nearestEnemyAngle + Math.PI);
                        }
                    }
                }
            }
        }else {
            if(Math.hypot(b.y - R.y2, b.x - R.x2) < 300) {
                for(let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                    cplace(R.items[5] ? R.items[5] : R.items[3], i);
                }
            }
        }
        if(b && Math.hypot(b.y - R.y2, b.x - R.x2) > 1100 && toggles.infiniterange()) {
            tempTracers.push(b);
            infinteTracers.push({x: b.x, y: b.y, time: Date.now()});
        }
    }
    function On() {
        je.innerText = R.wood;
        _e.innerText = R.stone;
        Oe.innerText = R.points;
        Ue.innerText = R.kills;
        Re.innerText = R.food;
    }
    var Rn = {}
      , jn = ["crown", "skull", "crosshair"]
      , _n = [];
    function Un(e, t) {
        if (R.upgradePoints = e,
        R.upgrAge = t,
        e > 0) {
            _n.length = 0,
            s.removeAllChildren(Ve);
            for (var n = 0; n < l.weapons.length; ++n)
                l.weapons[n].age == t && (null == l.weapons[n].pre || R.weapons.indexOf(l.weapons[n].pre) >= 0) && (s.generateElement({
                    id: "upgradeItem" + n,
                    class: "actionBarItem",
                    onmouseout: function() {
                        Tt()
                    },
                    parent: Ve
                }).style.backgroundImage = document.getElementById("actionBarItem" + n).style.backgroundImage,
                _n.push(n));
            for (n = 0; n < l.list.length; ++n)
                if (l.list[n].age == t) {
                    var i = l.weapons.length + n;
                    s.generateElement({
                        id: "upgradeItem" + i,
                        class: "actionBarItem",
                        onmouseout: function() {
                            Tt()
                        },
                        parent: Ve
                    }).style.backgroundImage = document.getElementById("actionBarItem" + i).style.backgroundImage,
                    _n.push(i)
                }
            for (n = 0; n < _n.length; n++)
                !function(e) {
                    var t = document.getElementById("upgradeItem" + e);
                    t.onmouseover = function() {
                        l.weapons[e] ? Tt(l.weapons[e], !0) : Tt(l.list[e - l.weapons.length])
                    }
                    ,
                    t.onclick = s.checkTrusted((function() {
                        r.send("H", e)
                    }
                    )),
                    s.hookTouchEvents(t)
                }(_n[n]);
            _n.length ? (Ve.style.display = "block",
            qe.style.display = "block",
            qe.innerHTML = "SELECT ITEMS (" + e + ")") : (Ve.style.display = "none",
            qe.style.display = "none",
            Tt())
        } else
            Ve.style.display = "none",
            qe.style.display = "none",
            Tt()
    }
    function Dn(e, t, n) {
        null != e && (R.XP = e),
        null != t && (R.maxXP = t),
        null != n && (R.age = n),
        n == o.maxAge ? (ze.innerHTML = "MAX AGE",
        He.style.width = "100%") : (ze.innerHTML = "AGE " + R.age,
        He.style.width = R.XP / R.maxXP * 100 + "%")
    }
    function Ln(e) {
        s.removeAllChildren(De);
        for (var t = 1, n = 0; n < e.length; n += 3)
            !function(n) {
                s.generateElement({
                    class: "leaderHolder",
                    parent: De,
                    children: [s.generateElement({
                        class: "leaderboardItem",
                        style: "color:" + (e[n] == j ? "#8ecc51" : "rgba(255,255,255,0.6)"),
                        text: t + ". " + ("" != e[n + 1] ? e[n] == R.sid && toggles.streamermode() ? " " : e[n + 1] : " ")
                    }), s.generateElement({
                        class: "leaderScore",
                        text: s.kFormat(e[n + 2]) || "0"
                    })]
                })
            }(n),
            t++
    }
    function Fn(e, t, n, i) {
        be.save(),
        be.setTransform(1, 0, 0, 1, 0, 0),
        be.scale(V, V);
        var r = 50;
        be.beginPath(),
        be.arc(e, t, r, 0, 2 * Math.PI, !1),
        be.closePath(),
        be.fillStyle = "white",
        be.fill(),
        r = 50;
        var s = n - e
          , a = i - t
          , o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2))
          , c = o > r ? o / r : 1;
        s /= c,
        a /= c,
        be.beginPath(),
        be.arc(e + s, t + a, .5 * r, 0, 2 * Math.PI, !1),
        be.closePath(),
        be.fillStyle = "white",
        be.fill(),
        be.restore()
    }
    function zn(e, t, n) {
        for (var i = 0; i < G.length; ++i)
            (_ = G[i]).active && _.layer == e && (_.update(P),
            _.active && ki(_.x - t, _.y - n, _.scale) && (be.save(),
            be.translate(_.x - t, _.y - n),
            be.rotate(_.dir),
            Vn(0, 0, _, be, 1),
            be.restore()))
    }
    var Hn = {};
    function Vn(e, t, n, i, r) {
        if (n.src) {
            var s = l.projectiles[n.indx].src
              , a = Hn[s];
            a || ((a = new Image).onload = function() {
                this.isLoaded = !0
            }
            ,
            a.src = ".././img/weapons/" + s + ".png",
            Hn[s] = a),
            a.isLoaded && i.drawImage(a, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale)
        } else
            1 == n.indx && (i.fillStyle = "#white",
            si(e, t, n.scale, i))
    }
    function qn(e, t, n, i) {
        var r = o.riverWidth + i
          , s = o.mapScale / 2 - t - r / 2;
        s < ce && s + r > 0 && n.fillRect(0, s, oe, r)
    }
    function Yn(e, t, n) {
        for (var i, r, s, a = 0; a < N.length; ++a)
            (_ = N[a]).active && (r = _.x + _.xWiggle - t,
            s = _.y + _.yWiggle - n,
            0 == e && _.update(P),
            _.layer == e && ki(r, s, _.scale + (_.blocker || 0)) && (be.globalAlpha = _.hideFromEnemy ? .6 : 1,
            _.isItem ? (i = ri(_),
            be.save(),
            be.translate(r, s),
            be.rotate(be.rotate(Math.atan2(Math.sin(_.dir), Math.cos(_.dir)))),
            be.drawImage(i, -i.width / 2, -i.height / 2),
            _.blocker && (be.strokeStyle = "#db6e6e",
            be.globalAlpha = .3,
            be.lineWidth = 6,
            si(0, 0, _.blocker, be, !1, !0)),
            be.restore()) : (i = ni(_),
            be.drawImage(i, r - i.width / 2, s - i.height / 2))))
    }
    var allDamages = [];
    function sendHitProcess(a) {
        for (let e = 0; e < allDamages.length; e++) allDamages[e](a);
        allDamages = [];
    }
    function newPromise() {
        return new Promise(function (a, e) {
            allDamages.push(a), setTimeout(function () {
                e();
            }, 50);
        });
    }
    function Wn(e, t, n) {
        let extra = Ii(e).skinIndex == 40 ? 3.3 : 1;
        let totaldmg = l.weapons[n].dmg * (n == 10 ? 7.5 : 1) * extra;
        (_ = Ii(e)) && (
            _.startAnim(t, n),
            sendHitProcess(totaldmg)
        )
    }
    function sendFzDir() {
        if(toggles.realdir()) {
            return R.dir
        }else if(autoaim == true) {
            return nearestEnemyAngle;
        }else if(intrap == true && toggles.autobreak() && mills.space == false) {
            let weapon = R.weapons[1] == 10 ? 10 : R.weapons[0];
            if((weapon == 10 ? R.secondary.reload == 1 : R.primary.reload == 1)) {
                return trapAngle;
            }else {
                return Math.atan2(ie - z / 2, ne - F / 2);
            }
        }else if(scriptStatus == "auto bull spam") {
            if(R.primary.reload == 1) {
                return nearestEnemyAngle;
            }else {
                return Math.atan2(ie - z / 2, ne - F / 2);
            }
        }else {
            return Math.atan2(ie - z / 2, ne - F / 2);
        }
    }
    function Xn(e, t, n) {
        be.globalAlpha = 1;
        for(var i = 0; i < W.length; i++) {
            _ = W[i];
            if(_.zIndex == n) {
                _.animate(P);
                if(_.visible) {
                    _.skinRot += .002 * P;
                    L = (_ == R ? sendFzDir() : _.dir) + _.dirPlus;
                    be.save();
                    be.translate(_.x - e, _.y - t);
                    be.rotate(L);
                    /*if(_ == R) {
                        if(intrap == true && toggles.autobreak()) {
                            let weapon = R.weapons[1] == 10 ? 10 : R.weapons[0];
                            if((weapon == 10 ? R.secondary.reload == 1 : R.primary.reload == 1)) {
                                if(trapAngle != Number.MAX_VALUE) {
                                    Nn(_, be);
                                }
                            }else {
                                Nn(_, be);
                            }
                        }else if(tankSpam == true) {
                            let weapon = R.weapons[1] == 10 ? 10 : R.weapons[0];
                            if((weapon == 10 ? R.secondary.reload == 1 : R.primary.reload == 1)) {
                            }else {
                                Nn(_, be);
                            }
                        }else {
                            Nn(_, be);
                        }
                    }else {*/
                    Nn(_, be);
                    //}
                    be.restore();
                }
            }
        }
    }
    var newHatImgs = {
        7: "https://i.imgur.com/vAOzlyY.png",
        15: "https://i.imgur.com/YRQ8Ybq.png",
        11: "https://i.imgur.com/yfqME8H.png",
        12: "https://i.imgur.com/VSUId2s.png",
        40: "https://i.imgur.com/Xzmg27N.png",
        26: "https://i.imgur.com/I0xGtyZ.png",
        6: "https://i.imgur.com/vM9Ri8g.png",
    };
    var newAccImgs = {
        18: "https://i.imgur.com/0rmN7L9.png",
        21: "https://i.imgur.com/4ddZert.png",
    };
    var newWeaponImgs = {
        "sword_1": "https://o.remove.bg/downloads/94e0f5f3-4701-4876-a61f-90fcc57756c3/image_2_-removebg-preview.png",
        "samurai_1_g": "https://cdn.discordapp.com/attachments/967213871267971072/1030852038948552724/image.png",
        "great_hammer_1": "https://cdn.discordapp.com/attachments/748171769155944448/1048806049924259860/image.png",
        "great_hammer_1_g": "https://cdn.discordapp.com/attachments/748171769155944448/1048806467995713607/image_1.png",
        "great_hammer_1_d": "https://cdn.discordapp.com/attachments/748171769155944448/1048806745910292571/image_2.png",
        "dagger_1": "https://cdn.discordapp.com/attachments/748171769155944448/1048808212129927288/image.png",
        "dagger_1_g": "https://cdn.discordapp.com/attachments/748171769155944448/1048808419932504074/image_1.png",
        "hammer_1": "https://cdn.discordapp.com/attachments/748171769155944448/1048809420806692894/image.png",
        "hammer_1_g": "https://cdn.discordapp.com/attachments/748171769155944448/1048809420437602394/image_1.png",
        "spear_1": "https://cdn.discordapp.com/attachments/748171769155944448/1048810908564066324/image_2.png",
        "spear_1_g": "https://cdn.discordapp.com/attachments/748171769155944448/1048810908207558787/image_3.png",
    };
    function getTexturePackImg(id, type) {
        if(toggles.texturepack()) {
            if(newHatImgs[id] && type == "hat") {
                return newHatImgs[id];
            }else if(newAccImgs[id] && type == "acc") {
                return newAccImgs[id];
            }else if(newWeaponImgs[id] && type == "weapons") {
                return newWeaponImgs[id];
            }else {
                if(type == "acc") {
                    return ".././img/accessories/access_" + id + ".png";
                }else if(type == "hat") {
                    return ".././img/hats/hat_" + id + ".png";
                }else {
                    return ".././img/weapons/" + id + ".png";
                }
            }
        }else {
            if(type == "acc") {
                return ".././img/accessories/access_" + id + ".png";
            }else if(type == "hat") {
                return ".././img/hats/hat_" + id + ".png";
            }else {
                return ".././img/weapons/" + id + ".png";
            }
        }
    }
    function Nn(e, t) {
        (t = t || be).lineWidth = 5.5,
        t.lineJoin = "miter";
        var n = Math.PI / 4 * (l.weapons[e.weaponIndex].armS || 1)
          , i = e.buildIndex < 0 && l.weapons[e.weaponIndex].hndS || 1
          , r = e.buildIndex < 0 && l.weapons[e.weaponIndex].hndD || 1;
        if (e.tailIndex > 0 && function(e, t, n) {
            if (!(Gn = Qn[e + (toggles.texturepack() ? "lol" : 0)])) {
                var i = new Image;
                i.onload = function() {
                    this.isLoaded = !0,
                    this.onload = null
                }
                ,
                i.src = getTexturePackImg(e, "acc"),
                Qn[e + (toggles.texturepack() ? "lol" : 0)] = i,
                Gn = i
            }
            var r = $n[e];
            if (!r) {
                for (var s = 0; s < tt.length; ++s)
                    if (tt[s].id == e) {
                        r = tt[s];
                        break
                    }
                $n[e] = r
            }
            Gn.isLoaded && (t.save(),
            t.translate(-20 - (r.xOff || 0), 0),
            r.spin && t.rotate(n.skinRot),
            t.drawImage(Gn, -r.scale / 2, -r.scale / 2, r.scale, r.scale),
            t.restore())
        }(e.tailIndex, t, e),
        e.buildIndex < 0 && !l.weapons[e.weaponIndex].aboveHand && (ei(l.weapons[e.weaponIndex], o.weaponVariants[e.weaponVariant].src, e.scale, 0, t),
        null == l.weapons[e.weaponIndex].projectile || l.weapons[e.weaponIndex].hideProjectile || Vn(e.scale, 0, l.projectiles[l.weapons[e.weaponIndex].projectile], be)),
        t.fillStyle = o.skinColors[e.skinColor],
        si(e.scale * Math.cos(n), e.scale * Math.sin(n), 14),
        si(e.scale * r * Math.cos(-n * i), e.scale * r * Math.sin(-n * i), 14),
        e.buildIndex < 0 && l.weapons[e.weaponIndex].aboveHand && (ei(l.weapons[e.weaponIndex], o.weaponVariants[e.weaponVariant].src, e.scale, 0, t),
        null == l.weapons[e.weaponIndex].projectile || l.weapons[e.weaponIndex].hideProjectile || Vn(e.scale, 0, l.projectiles[l.weapons[e.weaponIndex].projectile], be)),
        e.buildIndex >= 0) {
            var s = ri(l.list[e.buildIndex]);
            t.drawImage(s, e.scale - l.list[e.buildIndex].holdOffset, -s.width / 2)
        }
        si(0, 0, e.scale, t),
        toggles.weaponRange() && R && e == R && (t.beginPath(),
        t.globalAlpha = 0.15,
        t.fillStyle = "#ff0000",
        t.strokeStyle = "#ff0000",
        t.arc(0, 0, l.weapons[e.weaponIndex].range * 1.5, 0 - L + e.dir - Math.PI/2, Math.PI/2 - L + e.dir),
        t.fill(),
        t.stroke(),
        t.globalAlpha = 1),
        e.skinIndex > 0 && (t.rotate(Math.PI / 2),
        function e(t, n, i, r) {
            if (!(Gn = Jn[t + (toggles.texturepack() ? "lol" : 0)])) {
                var s = new Image;
                s.onload = function() {
                    this.isLoaded = !0,
                    this.onload = null
                }
                ,
                s.src = getTexturePackImg(t, "hat"),
                Jn[t + (toggles.texturepack() ? "lol" : 0)] = s,
                Gn = s
            }
            var a = i || Kn[t];
            if (!a) {
                for (var o = 0; o < et.length; ++o)
                    if (et[o].id == t) {
                        a = et[o];
                        break
                    }
                Kn[t] = a
            }
            Gn.isLoaded && n.drawImage(Gn, -a.scale / 2, -a.scale / 2, a.scale, a.scale),
            !i && a.topSprite && (n.save(),
            n.rotate(r.skinRot),
            e(t + "_top", n, a, r),
            n.restore())
        }(e.skinIndex, t, null, e))
    }
    var Gn, Jn = {}, Kn = {}, Qn = {}, $n = {}, Zn = {};
    function ei(e, t, n, i, r) {
        var s = e.src + (t || "")
          , a = Zn[s + (toggles.texturepack() ? "lol" : 0)];
        a || ((a = new Image).onload = function() {
            this.isLoaded = !0
        }
        ,
        a.src = getTexturePackImg(s, "weapons"),
        Zn[s + (toggles.texturepack() ? "lol" : 0)] = a),
        a.isLoaded && r.drawImage(a, n + e.xOff - e.length / 2, i + e.yOff - e.width / 2, e.length, e.width)
    }
    var ti = {};
    function ni(e) {
        var t = e.y >= o.mapScale - o.snowBiomeTop ? 2 : e.y <= o.snowBiomeTop ? 1 : 0
          , n = e.type + "_" + e.scale + "_" + t
          , i = ti[n];
        if (!i) {
            var r = document.createElement("canvas");
            r.width = r.height = 2.1 * e.scale + 5.5;
            var a = r.getContext("2d");
            if (a.translate(r.width / 2, r.height / 2),
            a.rotate(s.randFloat(0, Math.PI)),
            a.strokeStyle = it,
            a.lineWidth = 5.5,
            0 == e.type)
                for (var c, l = 0; l < 2; ++l)
                    ai(a, 7, c = _.scale * (l ? .5 : 1), .7 * c),
                    a.fillStyle = t ? l ? "#fff" : "#e3f1f4" : l ? "#b4db62" : "#9ebf57",
                    a.fill(),
                    l || a.stroke();
            else if (1 == e.type)
                if (2 == t)
                    a.fillStyle = "white",
                    ai(a, 6, .3 * e.scale, .71 * e.scale),
                    a.fill(),
                    a.stroke(),
                    a.fillStyle = "#89a54c",
                    si(0, 0, .55 * e.scale, a),
                    a.fillStyle = "#a5c65b",
                    si(0, 0, .3 * e.scale, a, !0);
                else {
                    var h;
                    !function(e, t, n, i) {
                        var r, a = Math.PI / 2 * 3, o = Math.PI / 6;
                        e.beginPath(),
                        e.moveTo(0, -i);
                        for (var c = 0; c < 6; c++)
                            r = s.randInt(n + .9, 1.2 * n),
                            e.quadraticCurveTo(Math.cos(a + o) * r, Math.sin(a + o) * r, Math.cos(a + 2 * o) * i, Math.sin(a + 2 * o) * i),
                            a += 2 * o;
                        e.lineTo(0, -i),
                        e.closePath()
                    }(a, 0, _.scale, .7 * _.scale),
                    a.fillStyle = t ? "#e3f1f4" : "#89a54c",
                    a.fill(),
                    a.stroke(),
                    a.fillStyle = t ? "#6a64af" : "#c15555";
                    var u = T / 4;
                    for (l = 0; l < 4; ++l)
                        si((h = s.randInt(_.scale / 3.5, _.scale / 2.3)) * Math.cos(u * l), h * Math.sin(u * l), s.randInt(10, 12), a)
                }
            else
                2 != e.type && 3 != e.type || (a.fillStyle = 2 == e.type ? 2 == t ? "#938d77" : "#939393" : "#e0c655",
                ai(a, 3, e.scale, e.scale),
                a.fill(),
                a.stroke(),
                a.fillStyle = 2 == e.type ? 2 == t ? "#b2ab90" : "#bcbcbc" : "#ebdca3",
                ai(a, 3, .55 * e.scale, .65 * e.scale),
                a.fill());
            i = r,
            ti[n] = i
        }
        return i
    }
    var ii = [];
    function ri(e, t) {
        var n = ii[e.id + (R && e.owner && e.owner.sid == R.sid ? 0 : R && R.team && e.owner && isAlly(e.owner.sid) ? 25 : 50)];
        if (!n || t) {
            var i = document.createElement("canvas");
            i.width = i.height = 2.5 * e.scale + 5.5 + (l.list[e.id].spritePadding || 0);
            var r = i.getContext("2d");
            if (r.translate(i.width / 2, i.height / 2),
            r.rotate(t ? 0 : Math.PI / 2),
            r.strokeStyle = it,
            r.lineWidth = 5.5 * (t ? i.width / 81 : 1),
            "apple" == e.name) {
                r.fillStyle = "#c15555",
                si(0, 0, e.scale, r),
                r.fillStyle = "#89a54c";
                var a = -Math.PI / 2;
                !function(e, t, n, i, r) {
                    var s = e + 25 * Math.cos(i)
                      , a = t + 25 * Math.sin(i);
                    r.moveTo(e, t),
                    r.beginPath(),
                    r.quadraticCurveTo((e + s) / 2 + 10 * Math.cos(i + Math.PI / 2), (t + a) / 2 + 10 * Math.sin(i + Math.PI / 2), s, a),
                    r.quadraticCurveTo((e + s) / 2 - 10 * Math.cos(i + Math.PI / 2), (t + a) / 2 - 10 * Math.sin(i + Math.PI / 2), e, t),
                    r.closePath(),
                    r.fill(),
                    r.stroke()
                }(e.scale * Math.cos(a), e.scale * Math.sin(a), 0, a + Math.PI / 2, r)
            } else if ("cookie" == e.name) {
                r.fillStyle = "#cca861",
                si(0, 0, e.scale, r),
                r.fillStyle = "#937c4b";
                for (var o = T / (h = 4), c = 0; c < h; ++c)
                    si((u = s.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(o * c), u * Math.sin(o * c), s.randInt(4, 5), r, !0)
            } else if ("cheese" == e.name) {
                var h, u;
                for (r.fillStyle = "#f4f3ac",
                si(0, 0, e.scale, r),
                r.fillStyle = "#c3c28b",
                o = T / (h = 4),
                c = 0; c < h; ++c)
                    si((u = s.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(o * c), u * Math.sin(o * c), s.randInt(4, 5), r, !0)
            } else if ("wood wall" == e.name || "stone wall" == e.name || "castle wall" == e.name) {
                r.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ? "#a5974c" : "#939393";
                var f = "castle wall" == e.name ? 4 : 3;
                ai(r, f, 1.1 * e.scale, 1.1 * e.scale),
                r.fill(),
                r.stroke(),
                r.fillStyle = "castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" : "#bcbcbc",
                ai(r, f, .65 * e.scale, .65 * e.scale),
                r.fill()
            } else if ("spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                r.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                var d = .6 * e.scale;
                ai(r, "spikes" == e.name ? 5 : 6, e.scale, d),
                r.fill(),
                r.stroke(),
                r.fillStyle = "#a5974c",
                si(0, 0, d, r),
                r.fillStyle = "#c9b758",
                si(0, 0, d / 2, r, !0)
            } else if ("windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name)
                r.fillStyle = "#a5974c",
                si(0, 0, e.scale, r),
                r.fillStyle = "#c9b758",
                ci(0, 0, 1.5 * e.scale, 29, 4, r),
                r.fillStyle = "#a5974c",
                si(0, 0, .5 * e.scale, r);
            else if ("mine" == e.name)
                r.fillStyle = "#939393",
                ai(r, 3, e.scale, e.scale),
                r.fill(),
                r.stroke(),
                r.fillStyle = "#bcbcbc",
                ai(r, 3, .55 * e.scale, .65 * e.scale),
                r.fill();
            else if ("sapling" == e.name)
                for (c = 0; c < 2; ++c)
                    ai(r, 7, d = e.scale * (c ? .5 : 1), .7 * d),
                    r.fillStyle = c ? "#b4db62" : "#9ebf57",
                    r.fill(),
                    c || r.stroke();
            else if ("pit trap" == e.name)
                r.fillStyle = "#a5974c",
                ai(r, 3, 1.1 * e.scale, 1.1 * e.scale),
                r.fill(),
                r.stroke(),
                r.fillStyle = it,
                ai(r, 3, .65 * e.scale, .65 * e.scale),
                r.fill();
            else if ("boost pad" == e.name)
                r.fillStyle = "#7e7f82",
                oi(0, 0, 2 * e.scale, 2 * e.scale, r),
                r.fill(),
                r.stroke(),
                r.fillStyle = "#dbd97d",
                function(e, t) {
                    t = t || be;
                    var n = e * (Math.sqrt(3) / 2);
                    t.beginPath(),
                    t.moveTo(0, -n / 2),
                    t.lineTo(-e / 2, n / 2),
                    t.lineTo(e / 2, n / 2),
                    t.lineTo(0, -n / 2),
                    t.fill(),
                    t.closePath()
                }(1 * e.scale, r);
            else if ("turret" == e.name)
                r.fillStyle = "#a5974c",
                si(0, 0, e.scale, r),
                r.fill(),
                r.stroke(),
                r.fillStyle = "#939393",
                oi(0, -25, .9 * e.scale, 50, r),
                si(0, 0, .6 * e.scale, r),
                r.fill(),
                r.stroke();
            else if ("platform" == e.name) {
                r.fillStyle = "#cebd5f";
                var p = 2 * e.scale
                  , g = p / 4
                  , m = -e.scale / 2;
                for (c = 0; c < 4; ++c)
                    oi(m - g / 2, 0, g, 2 * e.scale, r),
                    r.fill(),
                    r.stroke(),
                    m += p / 4
            } else
                "healing pad" == e.name ? (r.fillStyle = "#7e7f82",
                oi(0, 0, 2 * e.scale, 2 * e.scale, r),
                r.fill(),
                r.stroke(),
                r.fillStyle = "#db6e6e",
                ci(0, 0, .65 * e.scale, 20, 4, r, !0)) : "spawn pad" == e.name ? (r.fillStyle = "#7e7f82",
                oi(0, 0, 2 * e.scale, 2 * e.scale, r),
                r.fill(),
                r.stroke(),
                r.fillStyle = "#71aad6",
                si(0, 0, .6 * e.scale, r)) : "blocker" == e.name ? (r.fillStyle = "#7e7f82",
                si(0, 0, e.scale, r),
                r.fill(),
                r.stroke(),
                r.rotate(Math.PI / 4),
                r.fillStyle = "#db6e6e",
                ci(0, 0, .65 * e.scale, 20, 4, r, !0)) : "teleporter" == e.name && (r.fillStyle = "#7e7f82",
                si(0, 0, e.scale, r),
                r.fill(),
                r.stroke(),
                r.rotate(Math.PI / 4),
                r.fillStyle = "#d76edb",
                si(0, 0, .5 * e.scale, r, !0));
            if(!t) {
                r.globalAlpha = 0.6;
                r.fillStyle = R && e.owner && e.owner.sid == R.sid ? "" : (e.owner && R && R.team && isAlly(e.owner.sid)) ? "" : "#780c0c";
                if(R && e.owner && e.owner.sid == R.sid) {
                }else if(e.owner && R && R.team && isAlly(e.owner.sid)) {
                }else {
                    if(e.name.includes("spike") || e.name.includes("pit trap")) {
                        if(e.name.includes("spike")) {
                            r.globalAlpha = 0.6;
                        }else {
                            r.globalAlpha = 1;
                        }
                        r.fill();
                    }
                }
            }
            n = i;
            if(!t) {
                ii[e.id + (R && e.owner && e.owner.sid == R.sid ? 0 : R && R.team && e.owner && isAlly(e.owner.sid) ? 25 : 50)] = n;
            }
        }
        return n
    }
    function si(e, t, n, i, r, s) {
        (i = i || be).beginPath(),
        i.arc(e, t, n, 0, 2 * Math.PI),
        s || i.fill(),
        r || i.stroke()
    }
    function ai(e, t, n, i, p) {
        var r, s, a = Math.PI / 2 * 3, o = Math.PI / t;
        e.beginPath(),
        e.moveTo(0, -n);
        if(p) e.rotate(Math.PI/2);
        for (var c = 0; c < t; c++)
            r = Math.cos(a) * n,
            s = Math.sin(a) * n,
            e.lineTo(r, s),
            a += o,
            r = Math.cos(a) * i,
            s = Math.sin(a) * i,
            e.lineTo(r, s),
            a += o;
        e.lineTo(0, -n),
        e.closePath()
    }
    function oi(e, t, n, i, r, s) {
        r.fillRect(e - n / 2, t - i / 2, n, i),
        s || r.strokeRect(e - n / 2, t - i / 2, n, i)
    }
    function ci(e, t, n, i, r, s, a) {
        s.save(),
        s.translate(e, t),
        r = Math.ceil(r / 2);
        for (var o = 0; o < r; o++)
            oi(0, 0, 2 * n, i, s, a),
            s.rotate(Math.PI / r);
        s.restore()
    }
    function doAntiTrap(id, x, y) {
        if(!toggles.antitrap()) return;
        if(id == 15 && Math.hypot(y - R.y2, x - R.x2) <= 80) {
            let angle = Math.atan2(y - R.y2, x - R.x2) + toRad(180);
            for(let i = 0; i < Math.PI * 2; i+=Math.PI/2) {
                cplace(R.items[2], i + angle);
            }
        }
    }
    function li(e) {
        for (var t = 0; t < e.length;) {
            if(e[t + 7] && e[t + 7] != R.sid && !isAlly(e[t + 7])) {
                doAntiTrap(e[t + 6], e[t + 1], e[t + 2]);
            }
            nt.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], l.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
                sid: e[t + 7]
            } : null);
            t += 8;
        }
    }
    function hi(e, t) {
        let _;
        (_ = Mi(t)) && (_.xWiggle += o.gatherWiggle * Math.cos(e),
        _.yWiggle += o.gatherWiggle * Math.sin(e),
        (newPromise().then(function(l){
            _.currentHealth -= l;
            if(_.currentHealth < 0) {
                Cn(_.sid);
            }
        }).catch(function(e){
            allDamages = [];
        })))
    }
    function ui(e, t) {
        if((_ = Mi(e))) {
            _.dir = t;
            _.xWiggle += o.gatherWiggle * Math.cos(t + Math.PI);
            _.yWiggle += o.gatherWiggle * Math.sin(t + Math.PI);
            if(toggles.antiTurretSync()) {
                let distance = Math.hypot(R.y2 - _.y, R.x2 - _.x);
                let x = _.x + Math.cos(t) * distance;
                let y = _.y + Math.sin(t) * distance;
                if(Math.hypot(y - R.y2, x - R.x2) <= 35 && !willBlock(_) && _.owner.sid != R.sid && !isAlly(_.owner.sid)) {
                    turretSync++;
                    setTimeout(() => {
                        turretSync--;
                    }, 250);
                }
            }else if(!toggles.antiTurretSync()) {
                turretSync = 0;
            }
            if(turretSync > 2) {
                sn("sync detect test");
                place(R.items[3], Math.atan2(_.y - R.y2, _.x - R.x2));
                rangedSoldier = true;
                Jt(6);
                setTimeout(() => {
                    rangedSoldier = false;
                }, 600);
            }
        }
    }
    var otSoldier = false, bulletDmgs = [];
    function bulletStuff(sid, damage) {
        if(R.sid != sid && !isAlly(sid)) {
            let index = Ii(sid);
            if(typeof bulletDmgs[sid] == "object") {
                bulletDmgs[sid].push(damage);
            }else {
                bulletDmgs[sid] = [damage];
            }
            if(index && dist2(index, R) < 260 && (index.primary.id == 4 || index.primary.id == 5) && index.primary.variant > 1 && index.primary.reload == 1) {
                otSoldier = true;
                Jt(6);
                setTimeout(() => {
                    otSoldier = false;
                }, 500);
            }
            let dmg = 0;
            for(let i = 0; i < bulletDmgs[sid].length; i++) {
                dmg += bulletDmgs[sid][i];
            }
            if(dmg >= 75 && dist2(index, R) > 300 && R.shameCount < 5 && Date.now() - lastAntiHeal >= 200 && toggles.backUpRAnti()) {
                heal();
                lastAntiHeal = Date.now();
                bulletDmgs[sid] = [];
                rangedSoldier = true;
                Jt(6);
                setTimeout(() => {
                    rangedSoldier = false;
                }, 200);
            }
            setTimeout(() => {
                if(bulletDmgs[sid]) {
                    bulletDmgs[sid].shift();
                }
            }, 500);
        }
    }
    var turretSync = 0, rangedSoldier = false;
    function willBlock(e) {
        let be = Math.hypot(e.y-R.y2, e.x-R.x2)/1.56;
        let fc = {num: 360,scale: 22,range: 700};
        for(let i = 0; i < N.length; i++) {
            let me = Math.hypot(N[i].y-R.y2, N[i].x-R.x2)/1.56;
            if(N[i].sid != e.sid && me < fc.range && me < be) {
                let dg = Math.atan2(N[i].y-R.y2, N[i].x-R.x2)/(Math.PI/180), pj = Math.atan2(e.y-R.y2, e.x-R.x2)/(Math.PI/180);
                if((Math.abs(dg-pj) < (me/fc.scale) || Math.abs(dg-pj) > (fc.num-(me/fc.scale))) &&
                   !["spikes", "wood wall", "stone wall", "castle wall", "greater spikes", "poison spikes", "spinning spikes", "mine", "sapling", "pit trap", "boost pad", "platform", "healing pad", "spawn pad", "teleporter", "blocker"].includes(N[i].name)) {
                    return true;
                }
            }
        }
        return false;
    }
    function fi(e, t, n, i, r, s, a, o) {
        if(lt) {
            J.addProjectile(e, t, n, i, r, s, null, null, a).sid = o;
            let min = Infinity;
            let id = -1;
            for (let i = 0; i < W.length; i++) {
                (_ = W[i]) && _.visible && _.secondary.id && l.weapons[_.secondary.id].projectile !== undefined && l.projectiles[l.weapons[_.secondary.id].projectile].speed == r && min > (_.x2 * 1.5 - _.x1 / 2 - e + Math.cos(n) * 80) ** 2 + (_.y2 * 1.5 - _.y1 / 2 - t + Math.sin(n) * 80) ** 2 && (id = _, min = (_.x2 * 1.5 - _.x1 / 2 - e + Math.cos(n) * 80) ** 2 + (_.y2 * 1.5 - _.y1 / 2 - t + Math.sin(n) * 80) ** 2);
            }
            if (Math.sqrt(min) > 60) {
                if (r == 1.5) {
                    for (let i = 0; i < W.length; i++) {
                        (_ = W[i]) && _.visible && min > (_.x2 * 1.5 - _.x1 / 2 - e + Math.cos(n) * 10) ** 2 + (_.y2 * 1.5 - _.y1 / 2 - t + Math.sin(n) * 10) ** 2 && (id = _, min = (_.x2 * 1.5 - _.x1 / 2 - e + Math.cos(n) * 10) ** 2 + (_.y2 * 1.5 - _.y1 / 2 - t + Math.sin(n) * 10) ** 2);
                    }
                    if (Math.sqrt(min) < 60) {
                        id.turret = -0.0444;
                        bulletStuff(id.sid, 25);
                    }
                } else {
                    for (let i = 0; i < W.length; i++) {
                        (_ = W[i]) && _.visible && _.secondary.id && min > (_.x2 * 1.5 - _.x1 / 2 - e + Math.cos(n) * 80) ** 2 + (_.y2 * 1.5 - _.y1 / 2 - t + Math.sin(n) * 80) ** 2 && (id = _.sid, min = (_.x2 * 1.5 - _.x1 / 2 - e + Math.cos(n) * 80) ** 2 + (_.y2 * 1.5 - _.y1 / 2 - t + Math.sin(n) * 80) ** 2);
                    }
                    bulletStuff(id.sid, id.secondary ? id.secondary.dmg || 35 : 50);
                    setTimeout(() => {
                        id.secondary.reload = 0;
                    });
                }
            } else {
                bulletStuff(id.sid, 50);
                id.secondary.reload = -111 / l.weapons[15].speed;
            }
        }
    }
    function di(e, t) {
        for (var n = 0; n < G.length; ++n)
            G[n].sid == e && (G[n].range = t)
    }
    function pi(e) {
        (_ = Ei(e)) && _.startAnim()
    }
    function gi(e) {
        for (var t = 0; t < Y.length; ++t)
            Y[t].forcePos = !Y[t].visible,
            Y[t].visible = !1;
        if (e) {
            var n = Date.now();
            for (t = 0; t < e.length; )
                (_ = Ei(e[t])) ? (_.index = e[t + 1],
                _.t1 = void 0 === _.t2 ? n : _.t2,
                _.t2 = n,
                _.x1 = _.x,
                _.y1 = _.y,
                _.x2 = e[t + 2],
                _.y2 = e[t + 3],
                _.d1 = void 0 === _.d2 ? e[t + 4] : _.d2,
                _.d2 = e[t + 4],
                _.health = e[t + 5],
                _.dt = 0,
                _.visible = !0) : ((_ = Z.spawn(e[t + 2], e[t + 3], e[t + 4], e[t + 1])).x2 = _.x,
                _.y2 = _.y,
                _.d2 = _.dir,
                _.health = e[t + 5],
                Z.aiTypes[e[t + 1]].name || (_.name = o.cowNames[e[t + 6]]),
                _.forcePos = !0,
                _.sid = e[t],
                _.visible = !0),
                t += 7
        }
    }
    var mi = {};
    function yi(e, t) {
        var n = e.index
          , i = mi[n];
        if (!i) {
            var r = new Image;
            r.onload = function() {
                this.isLoaded = !0,
                this.onload = null
            }
            ,
            r.src = ".././img/animals/" + e.src + ".png",
            i = r,
            mi[n] = i
        }
        if (i.isLoaded) {
            var s = 1.2 * e.scale * (e.spriteMlt || 1);
            t.drawImage(i, -s, -s, 2 * s, 2 * s)
        }
    }
    function ki(e, t, n) {
        return e + n >= 0 && e - n <= oe && t + n >= 0 && t - n <= ce
    }
    function vi(e, t) {
        var n = function(e) {
            for (var t = 0; t < W.length; ++t)
                if (W[t].id == e)
                    return W[t];
            return null
        }(e[0]);
        n || (n = new u(e[0],e[1],o,s,J,nt,W,Y,l,et,tt),
        W.push(n)),
        n.spawn(t ? H : null),
        n.visible = !1,
        n.x2 = void 0,
        n.y2 = void 0,
        n.setData(e),
        t && (U = (R = n).x,
        D = R.y,
        $t(),
        On(),
        Dn(),
        Un(0),
        Be.style.display = "block")
    }
    function wi(e) {
        for (var t = 0; t < W.length; t++)
            if (W[t].id == e) {
                if(document.getElementById("enemyradar" + W[t].sid)) {
                    document.getElementById("enemyradar" + W[t].sid).remove();
                }
                W.splice(t, 1);
                break
            }
    }
    function bi(e, t) {
        if(R) {
            R.itemCounts[e] = t;
            /*if(e == 1) {
                for (let ee = 19; ee < 22; ee++) document.getElementById("itemCounts" + ee.toString()).innerHTML = t;
            }else if(e == 2) {
                for (let ee = 22; ee < 26; ee++) document.getElementById("itemCounts" + ee.toString()).innerHTML = t;
            }else if(e == 3) {
                for (let ee = 26; ee < 29; ee++) document.getElementById("itemCounts" + ee.toString()).innerHTML = t;
            }else if(e == 4) {
                document.getElementById("itemCounts29").innerHTML = t;
            }else if(e == 5) {
                document.getElementById("itemCounts31").innerHTML = t;
            }else if(e == 6) {
                document.getElementById("itemCounts32").innerHTML = t;
            }else if(e == 7) {
                document.getElementById("itemCounts33").innerHTML = t;
            }else if(e == 8) {
                document.getElementById("itemCounts34").innerHTML = t;
            }else if(e == 9) {
                document.getElementById("itemCounts35").innerHTML = t;
            }else if(e == 10) {
                document.getElementById("itemCounts36").innerHTML = t;
            }else if(e == 11) {
                document.getElementById("itemCounts30").innerHTML = t;
            }else if(e == 12) {
                document.getElementById("itemCounts37").innerHTML = t;
            }else if(e == 13) {
                document.getElementById("itemCounts38").innerHTML = t;
            }*/
        }
    }
    function xi(e, t, n) {
        R && (R[e] = t,
        n && On())
    }
    function place(id, angle = Math.atan2(ie - z / 2, ne - F / 2)) {
        Sn(id);
        r.send("F", 1, angle);
        r.send("F", 0, angle);
        Sn(autoSecondary.status == true ? R.weapons[1] : autoPrimary.status == true ? R.weapons[0] : R.weaponIndex, true);
    }
    window.place = place;
    function heal(d) {
        let heal = R.items[0] == 0 ? 20 : R.items[0] == 1 ? 40 : 30;
        let amount = d / heal;
        for(let i = 0; i < amount; i++) {
            place(R.items[0]);
        }
    }
    window.secondaryDmg = function(id) {
        if(id == 15) {
            return 50;
        }else if(id == 9) {
            return 25;
        }else if(id == 12) {
            return 35;
        }else if(id == 13) {
            return 30;
        }else {
            return 0;
        }
    };
    window.variantMulti = function(id) {
        if(id == 1) {
            return 1.1;
        }else if(id == 2 || id == 3) {
            return 1.18;
        }else {
            return 1;
        }
    };
    var enemiesNear = [];
    var needTick = 0;
    function sr(e) {
        if(R.skinIndex == 6) {
            if(e == 75) {
                return 57;
            }else {
                return Math.round(e * .75);
            }
        }else {
            return Math.round(e);
        }
    }
    function identifyDamage(source, damage) {
        damage = (damage / .75 == 75 ? 57 : damage == 49 || damage == 49.5 ? 50 : Math.round(damage));
        source = source.sort((a, b) => b.total - a.total)[0];
        if(source && source.length) {
            let _ = Ii(source[i].sid);
            if(damage == sr(_.primary.dmg * 1.5) || damage == sr(_.primary.dmg) || damage == sr(_.primary.dmg * 1.2)) {
                return [Math.round(_.primary.dmg * 1.5), (_.turret > .7 ? true : false), _];
            }
            if(damage == sr(_.secondary.dmg)) {
                return [([12, 10, 11].includes(damage) ? _.secondary.dmg + 25 : _.secondary.dmg), false, _];
            }else if(damage == sr(_.secondary.dmg + 25)) {
                return [_.secondary.dmg + 25, false, _];
            }else if(damage == sr(_.secondary.dmg * 1.5)) {
                return [_.secondary.dmg, false, _];
            }else if(damage == sr(25)) {
                return [25, false, _];
            }
        }
        return "unknown";
    }
    function addAllDamage() {
        let info = [], totalDamage = 0;
        for(let i = 0; i < enemiesNear.length; i++) {
            let _ = enemiesNear[i], dmg = 0;
            if(_.primary.reload > 0.7) {
                dmg += Math.round(_.primary.dmg * 1.5);
            }
            if(_.secondary.reload > 0.7) {
                dmg += _.secondary.dmg;
            }
            if(_.turret > 0.7) {
                dmg += 25;
            }
            if(_.primary.variant == 3) {
                dmg += 5;
            }
            if(_.secondary.variant == 3) {
                dmg += 5;
            }
            if(_.skinIndex == 11) {
                dmg += Math.round((R.weaponIndex < 9 ? _.primary.dmg : R.weapons[1] == 10 ? _.secondary.dmg : 0) * .45 * (R.skinIndex == 7 ? 1.5 : 1));
            }
            if(_.tailIndex == 21) {
                dmg += Math.round((R.weaponIndex < 9 ? _.primary.dmg : R.weapons[1] == 10 ? _.secondary.dmg : 0) * .25 * (R.skinIndex == 7 ? 1.5 : 1));
            }
            totalDamage += dmg;
            info.push({sid: _.sid, total: dmg});
        }
        if(R.skinIndex == 7) {
            totalDamage += 5;
        }
        return [info, totalDamage];
    }
    function backUpAnti(d) {
        let healSpeed = parseInt(document.getElementById("healSpeed").value);
        if((Ii(nearestEnemy[0]).primary.id == 4 || Ii(nearestEnemy[0]).primary.id == 5) && dist(nearestEnemy, R) < 300 && [38, 19, 50, 25].includes(d) && Date.now() - lastAntiHeal > 200 && R.shameCount < 5) {
            lastAntiHeal = Date.now();
            heal(d);
            needTick++;
            bulletDmgs = [];
        }else if(Ii(nearestEnemy[0]).secondary.id == 10 && Date.now() - lastAntiHeal > 200 && dist(nearestEnemy, R) < 300 && R.shameCount < 5 && [12, 10, 11, 60, 66, 71, 68, 74, 80].includes(d) && onlyEMP == false && Ii(nearestEnemy[0]).secondary.id) {
            lastAntiHeal = Date.now();
            onlySoldier = true;
            Jt(6);
            setTimeout(() => {
                heal(d);
                onlySoldier = false;
            }, 200);
        }else if([Math.round(R.primary.dmg * 1.5 * .45), Math.round(R.primary.dmg * 1.5 * .25)].includes(d) && Date.now() - lastAntiHeal > 200) {
            lastAntiHeal = Date.now();
            let _ = Ii(nearestEnemy[0]);
            if(_ && _.primary.id == 5 && _.primary.variant == 2 && R.shameCount < 5) {
                heal(d);
            }else {
                onlySoldier = true;
                Jt(6);
                setTimeout(() => {
                    heal(d);
                    onlySoldier = false;
                }, 200);
            }
        }else if(Ii(nearestEnemy[0]).primary.id == 7 && Date.now() - lastAntiHeal >= 200) {
            let _ = Ii(nearestEnemy[0]);
            let canEmpAnti = ((_.skinIndex == 11 || _.tailIndex == 21));
            if(R.skinIndex == 6 && (d == 30 || d == 45) && !canEmpAnti && onlySoldier == false && otSoldier == false && trapSoldier == false && rangedSoldier == false) {
                lastAntiHeal = Date.now();
                onlyEMP = true;
                Jt(22);
                setTimeout(() => {
                    heal(d);
                    onlyEMP = false;
                }, 200);
            }else if(d == 60 && R.shameCount < 5) {
                lastAntiHeal = Date.now();
                heal(d);
            }else {
                setTimeout(() => {
                    heal(d);
                }, healSpeed);
            }
        }else {
            setTimeout(() => {
                heal(d);
            }, healSpeed);
        }
    }
    var trapSoldier = false, lastAntiHeal = 0;
    function healing(d) {
        let allDamage = addAllDamage();
        let healSpeed = parseInt(document.getElementById("healSpeed").value);
        if([Math.round(R.primary.dmg * 1.5 * .45), Math.round(R.primary.dmg * 1.5 * .25)].includes(d) && Date.now() - lastAntiHeal >= 200) {
            lastAntiHeal = Date.now();
            let _ = Ii(nearestEnemy[0]);
            if(_ && _.primary.id == 5 && _.primary.variant == 2 && R.shameCount < 5) {
                heal(d);
            }else {
                onlySoldier = true;
                Jt(6);
                setTimeout(() => {
                    heal(d);
                    onlySoldier = false;
                }, 200);
            }
        }else if(nearestEnemy.length && Ii(nearestEnemy[0]).primary.id == 7 && Date.now() - lastAntiHeal >= 200) {
            let _ = Ii(nearestEnemy[0]);
            let canEmpAnti = ((_.skinIndex == 11 || _.tailIndex == 21));
            if(R.skinIndex == 6 && (d == 30 || d == 45) && !canEmpAnti && onlySoldier == false && otSoldier == false && trapSoldier == false && rangedSoldier == false) {
                lastAntiHeal = Date.now();
                onlyEMP = true;
                Jt(22);
                setTimeout(() => {
                    heal();
                    onlyEMP = false;
                }, 200);
            }else if(d == 60 && R.shameCount < 5) {
                lastAntiHeal = Date.now();
                heal(d);
            }else {
                setTimeout(() => {
                    heal(d);
                }, healSpeed);
            }
        }else if(nearestEnemy.length && dist(nearestEnemy, R) < 300 && [50, 38, 25, 19].includes(d) && Date.now() - lastAntiHeal >= 200) {
            lastAntiHeal = Date.now();
            if(R.shameCount < 5) {
                heal(d);
            }else {
                setTimeout(() => {
                    heal(d);
                }, healSpeed);
            }
        }else if(allDamage[1] >= 100) {
            let remove = identifyDamage(allDamage[0], d);
            if(remove == "unknown") {
                if(R.shameCount < 5 && Date.now() - lastAntiHeal >= 200 && d >= 19) {
                    heal(d);
                }else {
                    setTimeout(() => {
                        heal(d);
                    }, healSpeed);
                }
            }else {
                d = d == 49 ? 50 : d;
                let dmg = R.health - Math.abs(d), damage = allDamage[1] - remove[0];
                let canEmpAnti = ((remove[2].skinIndex == 11 || remove[2].tailIndex == 21));
                bulletDmgs = [];
                lastAntiHeal = Date.now();
                if(remove[1] && !canEmpAnti && ((dmg - damage) + 25 > 0) && onlySoldier == false && otSoldier == false && trapSoldier == false && rangedSoldier == false && R.skins[22]) {
                    onlyEMP = true;
                    Jt(22);
                    setTimeout(() => {
                        heal(d);
                        onlyEMP = false;
                    }, 200);
                }else if(dmg - Math.round(damage * 0.75) > 0 && R.skins[6]) {
                    onlySoldier = true;
                    Jt(6);
                    setTimeout(() => {
                        heal(d);
                        onlySoldier = false;
                    }, 200);
                }else {
                    if(R.shameCount < 5) {
                        heal(d);
                    }else {
                        setTimeout(() => {
                            heal(d);
                        }, healSpeed);
                    }
                }
            }
        }else if(nearestEnemy.length) {
            backUpAnti(d);
        }else {
            setTimeout(() => {
                heal(d);
            }, healSpeed);
        }
        if(nearestEnemy.length && canAB == true && autoaim == false && R.primary.reload == 1 && (d == 60 || d == 68) && hitting == false) {
            autoaim = true;
            Jt(7);
            Jt(R.tails[21] ? 21 : 0, 1);
            Sn(R.weapons[0], true);
            autoSecondary.change(false);
            autoPrimary.change(true);
            hitting = true;
            autoheal.change(true);
            setTimeout(() => {
                autoheal.change(false);
                hitting = false;
                autoaim = false;
                autoPrimary.change(false);
                autoSecondary.change(false);
            }, 100);
        }
    }
    function Si(e, t) {
        if((_ = Ii(e))) {
            let d = t - _.health;
            if(d >= 0) {
                if(d == 3 && _.tailIndex == 13) {
                    _.bullTick = tick;
                }else if(d == 6 && _.tailIndex == 13 && _.skinIndex == 13) {
                    _.bullTick = tick;
                }else if(d == 1 && _.tailIndex == 17) {
                    _.bullTick = tick;
                }else {
                    _.buildItem();
                }
            }else {
                _.hitTime = tick;
                if(d == -2 && _.skinIndex == 7 && _.tailIndex == 13) {
                    _.bullTick = tick;
                    if(_ == R) {
                        needTick = 0;
                    }
                }else if(d == -5) {
                    _.bullTick = tick;
                    if(_ == R) {
                        needTick = 0;
                    }
                }
                if(_ == R) {
                    healing(Math.abs(d));
                }
            }
            _.health = t;
        }
    }
    var autoaim = false;
    setInterval(() => {
        /*if(autoaim == true && R.dir != nearestEnemyAngle) {
            r.send("D", nearestEnemyAngle);
        }*/
        if(turretSync < 0) {
            turretSync = 0;
        }
    }, 7.5);
    function isAlly(id) {
        return Pt.includes(id);
    }
    window.isAlly = isAlly;
    var trapinfo = {last: false, health: 700, location: {x: 0, y: 0}}, intrap = false;
    function doinsta(e) {
        insta = false;
        if(e == 2) {
            autoaim = true;
            Jt(R.tails[21] ? 21 : 0, 1);
            Sn(R.weapons[1], true);
            autoSecondary.change(true);
            autoPrimary.change(false);
            Jt(53);
            autoheal.change(true);
            setTimeout(() => {
                Jt(R.tails[21] ? 21 : 0, 1);
                autoSecondary.change(false);
                Sn(R.weapons[0], true);
                Jt(7);
                autoPrimary.change(true);
                setTimeout(() => {
                    autoaim = false;
                    autoheal.change(false);
                    autoPrimary.change(false);
                    autoSecondary.change(false);
                }, 160);
            }, 90);
        }else if(e == 1) {
            autoaim = true;
            Jt(R.tails[21] ? 21 : 0, 1);
            Jt(11);
            Sn(R.weapons[0], true);
            autoPrimary.change(true);
            autoSecondary.change(false);
            autoheal.change(true);
            setTimeout(() => {
                Jt((nearestEnemy[9] == 6 || nearestEnemy[9] == 22) ? 20 : 53);
                Jt(11, 1);
                Sn(R.weapons[1], true);
                autoSecondary.change(true);
                autoPrimary.change(false);
                setTimeout(() => {
                    autoaim = false;
                    autoheal.change(false);
                    autoPrimary.change(false);
                    autoSecondary.change(false);
                }, 160);
            }, 90);
        }else {
            autoaim = true;
            Jt(R.tails[21] ? 21 : 0, 1);
            Jt(7);
            Sn(R.weapons[0], true);
            autoPrimary.change(true);
            autoSecondary.change(false);
            autoheal.change(true);
            setTimeout(() => {
                Jt((nearestEnemy[9] == 22) ? 20 : 53);
                Jt(11, 1);
                Sn(R.weapons[1], true);
                autoSecondary.change(true);
                autoPrimary.change(false);
                setTimeout(() => {
                    autoaim = false;
                    autoheal.change(false);
                    autoPrimary.change(false);
                    autoSecondary.change(false);
                }, 160);
            }, 90);
        }
    }
    var allEnemy = [], nearestEnemyAngle = 0, trapAngle = 0, scriptStatus = "none", nearestEnemy = [];
    function toRad(angle) {
        return angle / 180 * Math.PI;
    }
    var shopList = [
        [11, false],
        [15, true],
        [6, true],
        [7, true],
        [22, true],
        [40, true],
        [53, true],
        [31, true],
        [12, true],
        [11, true],
        [26, true],
        [21, false],
        [20, true],
        [18, false],
        [13, false],
    ];
    var autobuy = setInterval(() => {
        if(!toggles.autobuy()) return;
        if(shopList[0][1] == true) {
            et.filter(e => e.id == shopList[0][0]).forEach(t => {
                if(R && R.points >= t.price) {
                    Kt(t.id, 0);
                    shopList.shift();
                }
            });
        }else if(shopList[0][1] == false) {
            tt.filter(e => e.id == shopList[0][0]).forEach(t => {
                if(R && R.points >= t.price) {
                    Kt(t.id, 1);
                    shopList.shift();
                }
            });
        }
        if(shopList.length == 0 || !shopList.length) {
            clearInterval(autobuy);
            document.getElementById("autobuy").checked = false;
            document.getElementById("autobuy").disabled = true;
        }
    }, 500);
    function cplace(id, angle = Math.atan2(ie - z / 2, ne - F / 2)) {
        let item = l.list[id];
        let scale = 35 + item.scale + (item.placeOffset || 0);
        if(nt.checkItemLocation(R.x2 + Math.cos(angle) * scale,
                                R.y2 + Math.sin(angle) * scale,
                                item.scale,
                                0.6,
                                n.id,
                                false)) {
            place(id, angle);
        }
    }
    var canAB = false, lastNearestDist = 0, nearestDist = 0, preHit = {
        amount: [],
        info: [],
    }, turrets = [];
    function autoplace() {
        if(!nearestEnemy.length || mills.status) return;
        let trap = N.find(e => e.trap && (e.owner.sid == R.sid || isAlly(e.owner.sid)) && Math.hypot(e.y - nearestEnemy[2], e.x - nearestEnemy[1]) < 70);
        if(trap && dist(nearestEnemy, R) < 150) {
            /*let spikes = N.filter(e => e.dmg && (e.owner.sid == R.sid || isAlly(e.owner.sid)) && Math.hypot(e.y - nearestEnemy[2], e.x - nearestEnemy[1]) <= 130);
            if(dist(nearestEnemy, R) < 200 && spikes.length) {
                cplace(R.items[4], nearestEnemyAngle);
            }else {
                if(dist(nearestEnemy, R) <= 120) {
                    let fromEdge = 50 - Math.hypot(nearestEnemy[1] - trap.x, nearestEnemy[2] - trap.y),
                        cosY = Math.cos(Math.atan2(nearestEnemy[2] - trap.y, nearestEnemy[1] - trap.x)) * fromEdge + 10,
                        cosX = Math.sin(Math.atan2(nearestEnemy[2] - trap.y, nearestEnemy[1] - trap.x)) * fromEdge + 10,
                        rad = Math.atan2(cosY - R.y2, cosX - R.x2);
                    for(let i = 0; i < 18; i++){
                        cplace(R.items[2], i * 3 * Math.cos(i + rad) / 180 * Math.PI + nearestEnemyAngle);
                        cplace(R.items[2], i * 3 * Math.sin(i + rad) / 180 * Math.PI + nearestEnemyAngle);
                    }
                }
            }*/
            //cplace(R.items[2], nearestEnemyAngle);
            for(let i = 0; i < Math.PI * 2; i+=Math.PI/1.5) {
                cplace(R.items[2], i+nearestEnemyAngle);
            }
        }else if(dist(nearestEnemy, R) < 200) {
            for(let i = 0; i < Math.PI * 2; i+=Math.PI/1.5) {
                cplace(R.items[4], i);
            }
        }/*else {
            cplace(R.items[4], nearestEnemyAngle);
        }*/
        /*if(dist(nearestEnemy, R) < 250) {
            cplace(R.items[2], nearestEnemyAngle);
            //let i = nearestEnemyAngle-Math.PI/3; i < nearestEnemyAngle+Math.PI/3; i+=Math.PI/18
            for(let i = 0; i < Math.PI * 2; i+=Math.PI/2) {
                cplace(R.items[4], i);
            }
        }else {*/
    }
    var lastAllEnemies = [];
    var hitting = false;
    function drawTracer(_) {
        if (!document.getElementById("enemyradar" + _.sid)) {
            let newE = document.createElement("div");
            newE.id = `enemyradar${_.sid}`;
            newE.style = `
            display: none;
            position: absolute;
            left: 0;
            top: 0;
            color: #fff;
            width: 0;
            height: 0;
            border: solid;
            border-color: transparent transparent transparent #000000;
            `;
            document.body.appendChild(newE);
        }
        let center_x = window.innerWidth / 2, center_y = window.innerHeight / 2;
		let rad = Math.atan2(_.y2 - R.y2, _.x2 - R.x2), alpha = Math.sqrt(Math.pow(0 - (R.x2 - _.x2), 2) + Math.pow(0 - (R.y2 - _.y2) * (16 / 9), 2)) * 100 / (ce / 2) / center_y;
		if (alpha > 1.0) alpha = 1.0;
		let tx = center_x + (center_y * alpha) * Math.cos(rad) - 20 / 2, ty = center_y + (center_y * alpha) * Math.sin(rad) - 20 / 2;
        document.getElementById("enemyradar" + _.sid).style.borderWidth = "10px 0px 10px 20px";
        document.getElementById("enemyradar" + _.sid).style.pointerEvents = "none";
        document.getElementById("enemyradar" + _.sid).style.left = tx + "px";
        document.getElementById("enemyradar" + _.sid).style.top = ty + "px";
        document.getElementById("enemyradar" + _.sid).style.opacity = alpha;
        document.getElementById("enemyradar" + _.sid).style.transform = `rotate(${((rad * 180) / Math.PI)}deg)`;
        document.getElementById("enemyradar" + _.sid).style.display = (R.team === null || R.team !== _.team) ? "block" : "none";
    }
    function canOT(distance, type) {
        if("chatbox" == document.activeElement.id.toLowerCase()) return false;
        if(type == "polearm") {
            let calDist = Math.abs(distance - 239);
            if(calDist <= 40 && R.primary.reload == 1 && R.turret == 1 && nearestEnemy[9] != 6 && nearestEnemy[9] != 22 && !N.some(e => dist2(e, R) < dist(nearestEnemy, R) && (Math.abs(Math.atan2(e.y-R.y, e.x-R.x) - nearestEnemyAngle) <= (e.scale+10)/dist2(e, R)) && e.active && !e.ignoreCollision)) {
                if(calDist < 5) {
                    otHatting = true;
                    r.send("9", nearestEnemyAngle);
                    return true;
                }else {
                    Jt(40);
                    Jt(calDist < 20 ? 0 : 11, 1);
                    otHatting = true;
                    r.send("9", distance > 239 ? nearestEnemyAngle : nearestEnemyAngle + Math.PI);
                    return false;
                }
            }else {
                otHatting = false;
                return false;
            }
        }
    }
    var oneticking = false, otHatting = false;
    function canSyncHit() {
        let _ = Ii(nearestEnemy[0]);
        let distance = Math.hypot(_.y1 - _.y2, _.x1 - _.x2) * 2;
        if(R.primary.reload < 1) return false;
        if(dist(nearestEnemy, R)/1.56 > l.weapons[R.weapons[0]].range) return false;
        let isEnemyTraped = false;
        for(let i = 0; i < N.length; i++) {
            if(N[i] && N[i].name == "pit trap" && N[i].active && (N[i].owner.sid == R.sid || isAlly(N[i].owner.sid)) && Math.hypot(N[i].y - _.y2, N[i].x - _.x2)) {
                isEnemyTraped = true;
            }
            if(N[i] && ("spikes" == N[i].name || "greater spikes" == N[i].name || "poison spikes" == N[i].name || "spinning spikes" == N[i].name) && N[i].active && isEnemyTraped == false) {
                if((Math.hypot(N[i].y - _.y2, N[i].x - _.x2) + distance) <= (_.scale + N[i].scale + 20) && (N[i].owner.sid == R.sid || isAlly(N[i].owner.sid))) {
                    return true;
                }
            }
        }
        if(_.health - Math.round(R.primary.dmg * 1.5) <= 0) {
            return true;
        }
        return false;
    }
    function Ti(e) {
        tick++;
        lastAllEnemies = allEnemy;
        allEnemy = [];
        nearestEnemy = [];
        nearestEnemyAngle = 0;
        enemiesNear = [];
        var t = Date.now();
        for (var n = 0; n < W.length; n++) {
            if(document.getElementById("enemyradar" + W[n].sid)) {
                document.getElementById("enemyradar" + W[n].sid).style.display = "none";
            }
            W[n].forcePos = !W[n].visible;
            W[n].visible = false;
        }
        for (n = 0; n < e.length;) {
            _ = Ii(e[n])
            if(_) {
                _.t1 = void 0 === _.t2 ? t : _.t2;
                _.t2 = t;
                _.x1 = _.x;
                _.y1 = _.y;
                _.x2 = e[n + 1];
                _.y2 = e[n + 2];
                _.d1 = void 0 === _.d2 ? e[n + 3] : _.d2;
                _.d2 = e[n + 3];
                _.dt = 0;
                _.buildIndex = e[n + 4];
                _.weaponIndex = e[n + 5];
                _.weaponVariant = e[n + 6];
                _.team = e[n + 7];
                _.isLeader = e[n + 8];
                _.skinIndex = e[n + 9];
                _.tailIndex = e[n + 10];
                _.iconIndex = e[n + 11];
                _.zIndex = e[n + 12];
                _.visible = !0;
                _.update();
                if(!(_ == R || _.team && _.team == R.team)) {
                    drawTracer(_);
                    allEnemy.push(e.slice(n, n + 13));
                }
                if(_ == R) {
                    if(R.weapons[0] && R.primary.id != R.weapons[0]) {
                        R.primary.id = R.primary.id = R.weapons[0];
                    }else if(R.weapons[1] && R.secondary.id != R.weapons[1]) {
                        R.secondary.id = R.secondary.id = R.weapons[1];
                    }
                }
            }
            n+=13;
        }
        if(Math.sqrt(Math.pow((mills.y - R.y), 2) + Math.pow((mills.x - R.x), 2)) > 99) {
            if(mills.status) {
                place(R.items[3], mills.aim + toRad(180));
                place(R.items[3], mills.aim - toRad(69 + 180));
                place(R.items[3], mills.aim + toRad(69 + 180));
            }
            mills.x = R.x;
            mills.y = R.y;
        }
        if(allEnemy.length) {
            allEnemy = allEnemy.sort((a,b) => dist(a, R) - dist(b, R));
            nearestEnemy = allEnemy[0];
            for(let i = 0; i < allEnemy.length; i++) {
                let _ = Ii(allEnemy[i][0]);
                if(dist2(_, R)/1.7 <= l.weapons[_.primary.id].range + 35) {
                    enemiesNear.push(_);
                }
            }
        }
        allEnemy.forEach(e => {
            let _ = Ii(e[0]);
            if(!lastAllEnemies.length && _) {
                _.primary.reload = 1;
                _.secondary.reload = 1;
                _.turret = 1;
            }
        });
        lastAllEnemies.forEach(index => {
            if(!allEnemy.find(e => e[0] == index[0])) {
                let _ = Ii(index[0]);
                if(_) {
                    _.primary.reload = 1;
                    _.secondary.reload = 1;
                    _.turret = 1;
                }
            }
        });
        if(nearestEnemy.length) {
            nearestEnemyAngle = Math.atan2(nearestEnemy[2] - R.y2, nearestEnemy[1] - R.x2);
        }else {
            bulletDmgs = [];
            nearestEnemyAngle = 0;
        }
        if(nearestEnemy.length) {
            lastNearestDist = nearestDist;
            nearestDist = dist(nearestEnemy, R);
        }
        if((R.skins[11] || R.tails[21]) && nearestEnemy.length && toggles.antibull()) {
            preHit.amount = [];
            for(let i = 0; i < preHit.info.length; i++) {
                if(preHit.info[i] && preHit.info[i].primary.reload == 1) {
                    if(allEnemy.find(e => preHit.info[i].sid == e[0])) {
                        preHit.amount.push(true);
                    }
                }
            }
            preHit.info = [];
            for(let i = 0; i < enemiesNear.length; i++) {
                if(
                    enemiesNear[i].primary.reload + (111/l.weapons[enemiesNear[i].primary.id].speed) >= 1
                    &&
                    Math.round((enemiesNear[i].primary.reload + (111/l.weapons[enemiesNear[i].primary.id].speed))*100)/100 <= (enemiesNear[i].primary.id == 5 ? 1.15 : 1.2)
                ) {
                    preHit.info.push(enemiesNear[i]);
                }
            }
        }
        turrets = N.filter(i => i.name == "turret" && Math.hypot(i.y-R.y2, i.x-R.x2) <= 700 && i.active && i.owner.sid != R.sid && !isAlly(i.owner.sid) && !willBlock(i));
        if(!R.team && Pt.length) {
            Pt = [];
        }
        if(
            nearestEnemy.length && autoaim == false && R.items[4] == 15 &&
            toggles.autogrind() == false &&
            intrap == false && toggles.autoplace()
        ) {
            autoplace();
        }
        doAutoUpgrade();
        trapinfo.last = intrap;
        let nearestTrap = N.filter(e => e.trap && e.owner.sid != R.sid && !isAlly(e.owner.sid) && e.active && Math.hypot(e.y - R.y2, e.x - R.x2) < 80).sort(
            (e, t) => Math.hypot(e.y - R.y2, e.x - R.x2) - Math.hypot(t.y - R.y2, t.x - R.x2)
        )[0];
        if(nearestTrap) {
            intrap = true;
            trapinfo.health = nearestTrap.currentHealth;
            trapinfo.location = {
                x: nearestTrap.x,
                y: nearestTrap.y
            };
        }else {
            intrap = false;
            if(trapinfo.last == true) {
                trapSoldier = true;
                Jt(6);
                if(onlyEMP == true) {
                    if(R.shameCount < 5) {
                        //heal();
                    }
                    onlyEMP = false;
                }
                setTimeout(() => {
                    trapSoldier = false;
                }, 200);
            }
        }
        if(nearestEnemy.length && R.primary.reload == 1 && R.secondary.reload == 1 && R.turret == 1 && R.weapons[1]) {
            let cando = N.some(e => dist2(e, R) < dist(nearestEnemy, R) && (Math.abs(Math.atan2(e.y-R.y, e.x-R.x) - nearestEnemyAngle) <= (e.scale+10)/dist2(e, R)) && e.active && !e.ignoreCollision);
            if(insta == true && hitting == false) {
                let _ = Ii(nearestEnemy[0]), cando2 = true;
                if(_.weaponIndex == 11 && nearestEnemyAngle - _.dir <= Math.PI/3) {
                    cando2 = false;
                }
                if(cando2) {
                    if((dist(nearestEnemy, R) < 179 || nearestDist !== lastNearestDist && lastNearestDist >= 185 && nearestDist < 185)
                       && R.weapons[1] != 10 && !cando) {
                        if(nearestDist !== lastNearestDist && lastNearestDist >= 185 && nearestDist < 180) {
                            if(nearestEnemy[9] != 6 && nearestEnemy[9] != 22 && R.skins[53] && R.weapons[1] != 13) {
                                doinsta(1);
                            }else {
                                doinsta(0);
                            }
                        }else if(
                            (R.shameCount > 3 && (((tick - R.bullTick) % 9) == 8)) ||
                            (nearestEnemy[9] == 11)
                        ) {
                            doinsta(2);
                        }else {
                            if(nearestEnemy[9] != 6 && nearestEnemy[9] != 22 && R.skins[53] && R.weapons[1] != 13) {
                                doinsta(1);
                            }else {
                                doinsta(0);
                            }
                        }
                    }else if(dist(nearestEnemy, R) < 130 && nearestEnemy[9] != 6 && nearestEnemy[9] != 22 && R.weapons[1] == 10) {
                        doinsta(2);
                    }
                }
            }
        }
        if(autoaim == true) {
            scriptStatus = "instaing";
            hitting = true;
        }else if(oneticking == true && R.weapons[0] == 4 && R.weapons[1] == 15 && R.primary.variant == 3) {
            scriptStatus = "doing ot";
            hitting = true;
        }else if(intrap == true && mills.space == false && toggles.autobreak()) {
            scriptStatus = "autobreaking";
            let trap = N.find(e => e.trap && nearestEnemy.length && (e.owner.sid == R.sid || isAlly(e.owner.sid)) && Math.hypot(e.y - nearestEnemy[2], e.x - nearestEnemy[1]) < 70);
            let weapon = (R.weapons[1] == 10 ? R.primary.reload == 1 && trapinfo.health <= 20 ? R.weapons[0] : 10 : R.weapons[0]);
            let spikes = N.filter(e => e.dmg && e.dmg > 0 && e.sid != R.sid && !isAlly(e.sid) && Math.hypot(e.y - R.y, e.x - R.x) < 130 && e.active);
            let buildings = N.filter(e => !e.ignoreCollision && !e.dmg && Math.hypot(e.y - R.y, e.x - R.x) < 200 && e.active && e.health);
            /*if(!trap && (spikes.length > 0 || buildings.length > 2)) {
                trapAngle = Number.MAX_VALUE;
            }else {*/
            trapAngle = Math.atan2(trapinfo.location.y - R.y2, trapinfo.location.x - R.x2);
            if(R.weaponIndex != weapon) Sn(weapon, true);
            if((weapon == 10 ? R.secondary.reload == 1 : R.primary.reload == 1)) {
                Jt(40);
                Jt(R.tails[21] ? 21 : 0, 1);
                r.send("F", 1, trapAngle);
                r.send("F", 0, trapAngle);
                hitting = true;
            }else {
                hitting = false;
                if(canTick()) {
                    needTick++;
                    Jt(7);
                }else if(turrets.length) {
                    Jt(22);
                    Jt(11, 1);
                }else if((spikes.length > 0 || buildings.length > 2) && !trap) {
                    Jt(26);
                    Jt(21, 1);
                }else if(nearestEnemy.length && (lastNearestDist > 180 && nearestDist < 180 || preHit.amount.length)) {
                    canAB = true;
                    Jt(11);
                    Jt(21, 1);
                }else {
                    Jt(6);
                    Jt(13, 1);
                }
            }
            r.send("D", (weapon == 10 ? R.secondary.reload == 1 : R.primary.reload == 1) ? trapAngle : Math.atan2(ie - z / 2, ne - F / 2));
        }else if(nearestEnemy.length && !toggles.autobullspam() && toggles.autohitsync() && canSyncHit() && hitting == false) {
            autoaim = true;
            hitting = true;
            Jt(7);
            Jt(0, 1);
            Sn(R.weapons[0], true);
            autoSecondary.change(false);
            autoPrimary.change(true);
            autoheal.change(true);
            setTimeout(() => {
                autoheal.change(false);
                autoaim = false;
                hitting = false;
                autoSecondary.change(false);
                autoPrimary.change(false);
            }, 100);
        }else if(tankSpam == true) {
            scriptStatus = "tankspam";
            let weapon = R.weapons[1] == 10 ? R.weapons[1] : R.weapons[0];
            Sn(weapon, true);
            if((weapon == R.weapons[1] ? R.secondary.reload == 1 : R.primary.reload == 1)) {
                r.send("F", 1, Math.atan2(ie - z / 2, ne - F / 2));
                r.send("F", 0, Math.atan2(ie - z / 2, ne - F / 2));
                Jt(40);
                hitting = true;
            }else {
                hitting = false;
                if(canTick()) {
                    needTick++;
                    Jt(7);
                }else if(turrets.length) {
                    Jt(22);
                    Jt(11, 1);
                }else {
                    Jt(6);
                    Jt(11, 1);
                }
            }
            r.send("D", Math.atan2(ie - z / 2, ne - F / 2));
        }else if(toggles.autogrind()) {
            scriptStatus = "autogrind";
            if((R.weaponIndex > 9 ? R.secondary.reload == 1 : R.primary.reload == 1)) {
                r.send("F", 1, Math.atan2(ie - z / 2, ne - F / 2));
                r.send("F", 0, Math.atan2(ie - z / 2, ne - F / 2));
                Jt(40);
                hitting = true;
            }else {
                hitting = false;
            }
            r.send("D", Math.atan2(ie - z / 2, ne - F / 2));
        }else if(bowSpam == true) {
            scriptStatus = "bowSpam";
            if(R.weaponIndex != R.weapons[1]) Sn(R.weapons[1], true);
            if(R.secondary.reload == 1) {
                Jt(20);
                Jt(11, 1);
                r.send("F", 1, nearestEnemyAngle);
                r.send("F", 0, nearestEnemyAngle);
                hitting = true;
            }else {
                hitting = false;
                if(canTick() && R.skins[7]) {
                    needTick++;
                    Jt(7);
                }else if(turrets.length && R.skins[22]) {
                    Jt(22);
                    Jt(11, 1);
                }else if(R.y2 > 6850 && R.y2 < 7550 && R.skins[31]) {
                    Jt(31);
                    Jt(11, 1);
                }else if(nearestEnemy.length && dist(nearestEnemy, R) < 250 && R.skins[6]) {
                    Jt(6);
                    Jt(11, 1);
                }else if(R.y2 < 2400 && R.skins[15]) {
                    Jt(15);
                    Jt(11, 1);
                }else {
                    Jt(12);
                    Jt(11, 1);
                }
            }
            r.send("D", nearestEnemyAngle);
        }else if(nearestEnemy.length && toggles.autotick() == true && R.weapons[0] == 5 && toggles.autobullspam() == false && R.primary.variant >= 2 && canOT(dist(nearestEnemy, R), "polearm") && nearestEnemy[9] != 6 && nearestEnemy[9] != 22 && hitting == false) {
            oneticking = true;
            r.send("9", nearestEnemyAngle);
            autoaim = true;
            Jt(53);
            Jt(0, 1);
            Sn(R.weapons[0], true);
            autoSecondary.change(false);
            autoPrimary.change(true);
            hitting = true;
            setTimeout(() => {
                Jt(7);
                Jt(18, 1);
                r.send("F", 1, nearestEnemyAngle);
                r.send("F", 0, nearestEnemyAngle);
                setTimeout(() => {
                    autoaim = false;
                    oneticking = false;
                    autoPrimary.change(false);
                    autoSecondary.change(false);
                }, 100);
            }, 100);
        /*}else if(nearestEnemy.length && toggles.autotick() == true && R.weapons[0] == 4 && R.weapons[1] == 15 && R.primary.variant == 3 && canOT(dist(nearestEnemy, R), "katana") && nearestEnemy[9] != 6 && nearestEnemy[9] != 22 && hitting == false) {
            oneticking = true;
            r.send("33", nearestEnemyAngle);
            hitting = true;
            Jt(53);
            Jt(11, 1);
            Sn(R.weapons[1], true);
            autoPrimary.change(false);
            autoSecondary.change(true);
            r.send("c", 1, nearestEnemyAngle + Math.PI);
            r.send("c", 0, nearestEnemyAngle + Math.PI);
            setTimeout(() => {
                autoaim = true;
                Jt(7);
                Jt(18, 1);
                Sn(R.weapons[0], true);
                autoSecondary.change(false);
                autoPrimary.change(true);
                r.send("c", 1, nearestEnemyAngle);
                r.send("c", 0, nearestEnemyAngle);
                setTimeout(() => {
                    autoaim = false;
                    oneticking = false;
                    autoPrimary.change(false);
                    autoSecondary.change(false);
                }, 100);
            }, 100);*/
        }else if(nearestEnemy.length && R.skins[11] && R.tails[21] && (lastNearestDist > 180 && nearestDist < 180 || preHit.amount.length)) {
            scriptStatus = "pab";
            canAB = true;
            Jt(11);
            Jt(21, 1);
        }else if((nearestEnemy.length && toggles.autobullspam() == true && insta == false && dist(nearestEnemy, R)/1.7 < l.weapons[R.weapons[0]].range && R.secondary.reload == 1) || mills.space == true) {
            scriptStatus = "auto bull spam";
            Sn(R.weapons[0], true);
            if(R.primary.reload == 1) {
                Jt(R.tails[18] ? 18 : 0, 1);
                /*if(R.weaponIndex != R.weapons[0]) {
                    Sn(R.weapons[0], true);
                }else if(dist(nearestEnemy, R) < 150) {
                    cplace(R.items[2], nearestEnemyAngle || pn());
                }*/
                if(nearestEnemy[9] == 11) {
                    Jt(6);
                }else {
                    Jt(7);
                }
                r.send("F", 1, nearestEnemyAngle || pn());
                r.send("F", 0, nearestEnemyAngle || pn());
                hitting = true;
            }else {
                hitting = false;
                if(turrets.length && R.skins[22]) {
                    Jt(22);
                    Jt(11, 1);
                }else if(nearestEnemy.length && nearestEnemy[9] == 11) {
                    Jt(6);
                    Jt(13, 1);
                }else if(nearestEnemy.length && R.skins[11] && R.tails[21] && (lastNearestDist > 180 && nearestDist < 180 || preHit.amount.length)) {
                    canAB = true;
                    Jt(11);
                    Jt(21, 1);
                }else {
                    Jt(6);
                    Jt(13, 1);
                }
            }
        }else {
            hitting = false;
            canAB = false;
            otHatting = false;
            scriptStatus = "none";
            autoreload();
            autohat();
        }
        let type = R.items[0] == 0 ? 20 : R.items[0] == 1 ? 40 : 30;
        //document.getElementById("itemCounts16").innerHTML = Math.round(R.food / type);
        //document.getElementById("itemCounts17").innerHTML = Math.round(R.food / type);
        //document.getElementById("itemCounts18").innerHTML = Math.round(R.food / type);
        tempTracers = [];
    }
    var auorelad = false;
    function doAutoUpgrade() {
        if(toggles.autoupgrade() == true) {
            if(document.getElementById("upgradetype").value == 0) {
                if(R.items[5] != l.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value))) {
                    if(document.getElementById("upgradeItem7")) r.send("H", 7);
                    if(document.getElementById("upgradeItem" + (l.list.findIndex(e => e.name.includes("cookie"))+16))) r.send("H", l.list.findIndex(e => e.name.includes("cookie"))+16);
                    if(document.getElementById("upgradeItem" + (l.list.findIndex(e => e.name.includes("pit"))+16))) r.send("H", l.list.findIndex(e => e.name.includes("pit"))+16);
                    if(document.getElementById("upgradeItem" + (l.list.findIndex(e => e.name.includes("greater"))+16))) r.send("H", l.list.findIndex(e => e.name.includes("greater"))+16);
                    if(document.getElementById("upgradeItem10")) r.send("H", 10);
                    if(document.getElementById("upgradeItem") + (l.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value))+16)) r.send("H", l.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value))+16);
                }
            }else {
                if(R.items[5] != l.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value))) {
                    if(document.getElementById("upgradeItem5")) r.send("H", 5);
                    if(document.getElementById("upgradeItem" + (l.list.findIndex(e => e.name.includes("cookie"))+16))) r.send("H", l.list.findIndex(e => e.name.includes("cookie"))+16);
                    if(document.getElementById("upgradeItem" + (l.list.findIndex(e => e.name.includes("pit"))+16))) r.send("H", l.list.findIndex(e => e.name.includes("pit"))+16);
                    if(document.getElementById("upgradeItem" + (l.list.findIndex(e => e.name.includes("greater"))+16))) r.send("H", l.list.findIndex(e => e.name.includes("greater"))+16);
                    if(document.getElementById("upgradeItem10")) r.send("H", 10);
                    if(document.getElementById("upgradeItem") + (l.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value))+16)) r.send("H", l.list.findIndex(e => e.name.includes(document.getElementById("sixbuilding").value))+16);
                }
            }
        }
    }
    function autohat() {
        if(otHatting == true && nearestEnemy.length) return;
        if(canTick() && R.skins[7]) {
            needTick++;
            Jt(7);
            Jt(11, 1);
        }else if(turrets.length && R.skins[22]) {
            Jt(22);
            Jt(11, 1);
        }else if(R.y2 > 6850 && R.y2 < 7550 && R.skins[31]) {
            Jt(31);
            Jt(11, 1);
        }else if(mills.aim == null && toggles.tryhard()) {
            Jt(22);
            Jt(11, 1);
        }else if(nearestEnemy.length && dist(nearestEnemy, R) < 300 && R.skins[6]) {
            Jt(6);
            Jt(11, 1);
        }else if(R.y2 < 2400 && R.skins[15]) {
            Jt(15);
            Jt(11, 1);
        }else {
            Jt(12);
            Jt(11, 1);
        }
    }
    function autoreload() {
        if(!toggles.autoreload()) return;
        if(R.primary.reload != 1 && [4, 5].includes(R.weapons[0])) {
            auorelad = true;
            if(R.weaponIndex != R.weapons[0]) {
                Sn(R.weapons[0], 1);
            }
        }else if(R.secondary.reload != 1) {
            auorelad = true;
            if(R.weaponIndex != R.weapons[1]) {
                Sn(R.weapons[1], 1);
            }
        }else if(R.primary.reload != 1) {
            auorelad = true;
            if(R.weaponIndex != R.weapons[0]) {
                Sn(R.weapons[0], 1);
            }
        }else if(auorelad) {
            auorelad = false;
            if(R.weapons[1] == 10 && (R.weapons[0] == 4 || R.weapons[0] == 5)) {
                if(R.weaponIndex != R.weapons[1]) {
                    Sn(R.weapons[1], 1);
                }
            }else {
                if(R.weaponIndex != R.weapons[0]) {
                    Sn(R.weapons[0], 1);
                }
            }
        }
    }
    function canTick(e) {
        if(R.skinIndex == 45) return false;
        if(R.shameCount > 0 && ((tick - R.bullTick) % 9 == 0) || (needTick > 1)) {
            return true;
        }
        return false;
    }
    function dist(a, b){
        return Math.sqrt(Math.pow((b.y2 || b.y) - a[2], 2) + Math.pow((b.x2 || b.x) - a[1], 2))
    }
    function dist2(a, b){
        return Math.sqrt(Math.pow((b.y2 || b.y) - (a.y2 || a.y), 2) + Math.pow((b.x2 || b.x) - (a.x2 || a.x), 2))
    }
    function Ii(e) {
        for (var t = 0; t < W.length; ++t)
            if (W[t].sid == e)
                return W[t];
        return null
    }
    function Ei(e) {
        for (var t = 0; t < Y.length; ++t)
            if (Y[t].sid == e)
                return Y[t];
        return null
    }
    function Mi(e) {
        for (var t = 0; t < N.length; ++t)
            if (N[t].sid == e)
                return N[t];
        return null
    }
    scriptStatus = " ms";
    var Ai = -1;
    function Pi() {
        var e = Date.now() - Ai;
        window.pingTime = e,
            Ie.innerText = "Ping: " + e + " ms";
    }
    var _et$ = false, isDark = false;
    setInterval(() => {
        isDark = !isDark;
    }, 39000);
    var _e$fds = setInterval(() => {
        if(document.getElementById("actionBarItem0") != null) {
            for (let i = 0; i <= 38; i++) {
                let doit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].some(a => {return a == i})
                if(!doit) {
                    let thing = document.createElement("div");
                    thing.setAttribute("id", "itemCounts" + (i));
                    thing.style = `
                    position: absolute;
                    top: 0;
                    padding-left: 5px;
                    font-size: 2em;
                    color: #8ecc51;`;
                    thing.innerHTML = "0";
                    document.getElementById("actionBarItem" + JSON.stringify(i)).appendChild(thing);
                    document.getElementById("actionBarItem" + i).appendChild(thing);
                }
            }
            clearInterval(_e$fds);
        }
    }, 100);
    function pingSocket() {
        if(_et$ == false) {
            _et$ = true;
        }
        Ai = Date.now(),
        r.send("0")
    }
    function Ci(e) {
        if (!(e < 0)) {
            var t = Math.floor(e / 60)
              , n = e % 60;
            n = ("0" + n).slice(-2),
            Ee.innerText = "Server restarting in " + t + ":" + n,
            Ee.hidden = !1
        }
    }
    function Oi(e) {
        window.open(e, "_blank")
    }
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    ,
    function() {
        var e = o.mapScale / 2;
        nt.add(0, e, e + 200, 0, o.treeScales[3], 0),
        nt.add(1, e, e - 480, 0, o.treeScales[3], 0),
        nt.add(2, e + 300, e + 450, 0, o.treeScales[3], 0),
        nt.add(3, e - 950, e - 130, 0, o.treeScales[2], 0),
        nt.add(4, e - 750, e - 400, 0, o.treeScales[3], 0),
        nt.add(5, e - 700, e + 400, 0, o.treeScales[2], 0),
        nt.add(6, e + 800, e - 200, 0, o.treeScales[3], 0),
        nt.add(7, e - 260, e + 340, 0, o.bushScales[3], 1),
        nt.add(8, e + 760, e + 310, 0, o.bushScales[3], 1),
        nt.add(9, e - 800, e + 100, 0, o.bushScales[3], 1),
        nt.add(10, e - 800, e + 300, 0, l.list[4].scale, l.list[4].id, l.list[10]),
        nt.add(11, e + 650, e - 390, 0, l.list[4].scale, l.list[4].id, l.list[10]),
        nt.add(12, e - 400, e - 450, 0, o.rockScales[2], 2)
    }(),
    function e() {
        B = Date.now(),
        P = B - q,
        q = B,
        function() {
            if (R && (!C || B - C >= 1e3 / o.clientSendRate) && (C = B,
            r.send("D", pn())),
            An < 120 && (An += .1 * P,
            Ge.style.fontSize = Math.min(Math.round(An), 120) + "px"),
            R) {
                var e = s.getDistance(U, D, R.x, R.y)
                  , t = s.getDirection(R.x, R.y, U, D)
                  , n = Math.min(.01 * e * P, e);
                e > .05 ? (U += n * Math.cos(t),
                D += n * Math.sin(t)) : (U = R.x,
                D = R.y)
            } else
                U = o.mapScale / 2,
                D = o.mapScale / 2;
            for (var i = B - 1e3 / o.serverUpdateRate, a = 0; a < W.length + Y.length; ++a)
                if ((_ = W[a] || Y[a - W.length]) && _.visible)
                    if (_.forcePos)
                        _.x = _.x2,
                        _.y = _.y2,
                        _.dir = _.d2;
                    else {
                        var c = _.t2 - _.t1
                          , l = (i - _.t1) / c;
                        _.dt += P;
                        var h = Math.min(1.7, _.dt / 170)
                          , u = _.x2 - _.x1;
                        _.x = _.x1 + u * h,
                        u = _.y2 - _.y1,
                        _.y = _.y1 + u * h,
                        _.dir = Math.lerpAngle(_.d2, _.d1, Math.min(1.2, l))
                    }
            var f = (freeCam.status ? freeCam.x : U) - oe / 2
              , d = (freeCam.status ? freeCam.y : D) - ce / 2;
            let color = {snow: "", grass: "", des: "", river: ""};
            if(toggles.mapcolor()) {
                if(isDark) {
                    color = {snow: "#e6e6e6",grass: "#8dba2c",des: "#d3b945",river: "#78a1d3"};
                }else {
                    color = {snow: "#fff",grass: "#b6db66",des: "#dbc666",river: "#91b2db"};
                }
            }else {
                color = {snow: "#fff",grass: "#b6db66",des: "#dbc666",river: "#91b2db"};
            }
            o.snowBiomeTop - d <= 0 && o.mapScale - o.snowBiomeTop - d >= ce ? (be.fillStyle = color.grass,
            be.fillRect(0, 0, oe, ce)) : o.mapScale - o.snowBiomeTop - d <= 0 ? (be.fillStyle = color.des,
            be.fillRect(0, 0, oe, ce)) : o.snowBiomeTop - d >= ce ? (be.fillStyle = color.snow,
            be.fillRect(0, 0, oe, ce)) : o.snowBiomeTop - d >= 0 ? (be.fillStyle = color.snow,
            be.fillRect(0, 0, oe, o.snowBiomeTop - d),
            be.fillStyle = color.grass,
            be.fillRect(0, o.snowBiomeTop - d, oe, ce - (o.snowBiomeTop - d))) : (be.fillStyle = color.grass,
            be.fillRect(0, 0, oe, o.mapScale - o.snowBiomeTop - d),
            be.fillStyle = color.des,
            be.fillRect(0, o.mapScale - o.snowBiomeTop - d, oe, ce - (o.mapScale - o.snowBiomeTop - d))),
            In || ((ee += te * o.waveSpeed * P) >= o.waveMax ? (ee = o.waveMax,
            te = -1) : ee <= 1 && (ee = te = 1),
            be.globalAlpha = 1,
            be.fillStyle = color.des,
            qn(f, d, be, o.riverPadding),
            be.fillStyle = color.river,
            qn(f, d, be, 250 * (ee - 1)));
            be.lineWidth = 8;
            /*be.strokeStyle = "clear",
            be.globalAlpha = .0,
            be.beginPath();
            for (var p = ((14400-f) % 1440); p < oe; p += 1440)
                p > 0 && (be.moveTo(p, 0),
                be.lineTo(p, ce));
            for (var g = ((14400-d) % 1440); g < ce; g += 1440)
                p > 0 && (be.moveTo(0, g),
                be.lineTo(oe, g));*/
            for (/*be.stroke(),*/
            be.globalAlpha = 1,
            be.strokeStyle = it,
            Yn(-1, f, d),
            be.globalAlpha = 1,
            be.lineWidth = 5.5,
            zn(0, f, d),
            Xn(f, d, 0),
            be.globalAlpha = 1,
            a = 0; a < Y.length; ++a)
                (_ = Y[a]).active && _.visible && (_.animate(P),
                be.save(),
                be.translate(_.x - f, _.y - d),
                be.rotate(_.dir + _.dirPlus - Math.PI / 2),
                yi(_, be),
                be.restore());
            if (Yn(0, f, d),
            zn(1, f, d),
            Yn(1, f, d),
            Xn(f, d, 1),
            Yn(2, f, d),
            Yn(3, f, d),
            be.fillStyle = "#000",
            be.globalAlpha = .09,
            f <= 0 && be.fillRect(0, 0, -f, ce),
            o.mapScale - f <= oe) {
                var y = Math.max(0, -d);
                be.fillRect(o.mapScale - f, y, oe - (o.mapScale - f), ce - y)
            }
            if (d <= 0 && be.fillRect(-f, 0, oe + f, -d),
            o.mapScale - d <= ce) {
                var k = Math.max(0, -f)
                  , v = 0;
                o.mapScale - f <= oe && (v = oe - (o.mapScale - f)),
                be.fillRect(k, o.mapScale - d, oe - k - v, ce - (o.mapScale - d))
            }
            for (be.globalAlpha = 1,
            be.fillStyle = "rgba(0, 0, 70, 0.35)",
            be.fillRect(0, 0, oe, ce),
            be.strokeStyle = rt,
            a = 0; a < W.length + Y.length; ++a)
                if ((_ = W[a] || Y[a - W.length]).visible && (10 != _.skinIndex || _ == R || _.team && _.team == R.team)) {
                    var w = (_.team ? "[" + _.team + "] " : "") + (_.isPlayer && _ != R ? "["+_.primary.id+"/"+_.secondary.id+"/"+(_.turret==1?1:0)+"] " : "") + ((_ == R && toggles.streamermode() ? "" : _.name) || "");
                    if ("" != w) {
                        if (be.font = (_.nameScale || 30) + "px Hammersmith One",
                        be.fillStyle = "white",
                        be.textBaseline = "middle",
                        be.textAlign = "center",
                        be.lineWidth = _.nameScale ? 11 : 8,
                        be.lineJoin = "round",
                        be.strokeText(w, _.x - f, _.y - d - _.scale - o.nameY),
                        be.fillText(w, _.x - f, _.y - d - _.scale - o.nameY),
                        _.isLeader && Rn.crown.isLoaded) {
                            var b = o.crownIconScale;
                            k = _.x - f - b / 2 - be.measureText(w).width / 2 - o.crownPad,
                            be.drawImage(Rn.crown, k, _.y - d - _.scale - o.nameY - b / 2 - 5, b, b)
                        }
                        1 == _.iconIndex && Rn.skull.isLoaded && (b = o.crownIconScale,
                        k = _.x - f - b / 2 + be.measureText(w).width / 2 + o.crownPad,
                        be.drawImage(Rn.skull, k, _.y - d - _.scale - o.nameY - b / 2 - 5, b, b))
                        Rn.crosshair.isLoaded && insta && nearestEnemy.length && _.sid == nearestEnemy[0] && _.isPlayer &&
                            (b = 2 * o.playerScale -10,
                             be.drawImage(Rn.crosshair, _.x - f - b / 2, _.y - d - b / 2, b, b))
                    }
                    if(_ == R) {
                        let text = "["+mills.status+"/"+insta+"/"+66+","+window.pingTime+","+(R.turret==1?1:0)+"]";
                        be.textAlign = "center";
                        be.fillStyle = "white";
                        be.lineJoin = "round";
                        be.font = "20px Hammersmith One";
                        be.strokeStyle = "clear";
                        be.lineWidth = 6;
                        be.strokeText(text, _.x - f, _.y - d + _.scale + o.nameY + (30));
                        be.fillText(text, _.x - f, _.y - d + _.scale + o.nameY + (30));
                        if(toggles.statsmenu()) {
                            statusMenu.innerHTML = `
                            Auto-Insta: ${insta?"ON":"OFF"}<br>
                            Domage Prediction: ${turrets.length}<br>

                            EAB: ${"{hit:83,miss:1}"}<br>

                            AdPlacer: ${spamchat?"OFF":"RECON"}<br>
                            Music: ${spamchat?"ON":"OFF"}<br>
                            `;
                        }else {
                            statusMenu.innerHTML = "";
                        }
                        for(let i = 0; i < tempTracers.length; i++) {
                            if(tempTracers[i]) {
                                be.beginPath();
                                be.moveTo(R.x2 - f, R.y2 - d);
                                be.lineTo(tempTracers[i].x - f, tempTracers[i].y - d);
                                be.stroke();
                            }
                        }
                    }
                    if(_.isPlayer) {
                        if(toggles.shamecount()) {
                            be.font = (_.nameScale || 30) + "px Hammersmith One";
                            be.fillStyle = _.shameCount < 4 ? "#8ecc51" : "#cc5151"
                            be.textBaseline = "middle";
                            be.textAlign = "center";
                            be.lineWidth = _.nameScale ? 11 : 8;
                            be.lineJoin = "round";
                            be.strokeText(_.shameCount, (_.iconIndex == 1 ? (_.x - f - 30 + be.measureText(w).width / 2 + o.crownPad * 3.5 + 5) : (_.x - f + be.measureText(w).width / 2 + o.crownPad)), _.y - d - _.scale - o.nameY);
                            be.fillText(_.shameCount, (_.iconIndex == 1 ? (_.x - f - 30 + be.measureText(w).width / 2 + o.crownPad * 3.5 + 5) : (_.x - f + be.measureText(w).width / 2 + o.crownPad)), _.y - d - _.scale - o.nameY);
                        }
                        if(toggles.reloadbars()) {
                            be.fillStyle = rt;
                            be.roundRect(_.x - f + 2 - o.healthBarPad, _.y - d + _.scale + o.nameY - 13, 2 * 23.5 + 2 * o.healthBarPad, 17, 10);
                            be.fill();
                            be.fillStyle = _.secondary.reload == 1 ? "#8ecc51" : "hsl(" + 360 * _.secondary.reload+ ", 50%, 60%)";
                            be.roundRect(_.x - f + 2, _.y - d + _.scale + o.nameY - 13 + o.healthBarPad, 2 * 23.5 * (_.secondary.reload), 16 - 2 * o.healthBarPad, 10);
                            be.fill();
                            be.fillStyle = rt;
                            be.roundRect(_.x - f - 50 - o.healthBarPad, _.y - d + _.scale + o.nameY - 13, 2 * 25.5 + 2 * o.healthBarPad, 17, 10);
                            be.fill();
                            be.fillStyle = _.primary.reload == 1 ? "#8ecc51" : "hsl(" + 360 * _.primary.reload+ ", 50%, 60%)";
                            be.roundRect(_.x - f - 50, _.y - d + _.scale + o.nameY - 13 + o.healthBarPad, 2 * 25.5 * (_.primary.reload), 16 - 2 * o.healthBarPad, 10);
                            be.fill();
                        }
                    }
                    if(toggles.healbar()) {
                    _.health > 0 && (o.healthBarWidth,
                    be.fillStyle = _ == R || _.team && _.team == R.team ? "#a481f0" : "#cc5151",
                    be.roundRect(_.x - f - o.healthBarWidth, _.y - d + _.scale + o.nameY + o.healthBarPad, 1 * o.healthBarWidth * (_.health / _.maxHealth), 17 - 2 * o.healthBarPad, 7),
                    be.fill())
                        }
                    }
            for (m.update(P, be, f, d),
            a = 0; a < W.length; ++a)
                if ((_ = W[a]).visible && _.chatCountdown > 0) {
                    _.chatCountdown -= P,
                    _.chatCountdown <= 0 && (_.chatCountdown = 0),
                    be.font = "32px Hammersmith One";
                    var x = be.measureText(_.chatMessage);
                    be.textBaseline = "middle",
                    be.textAlign = "center",
                    k = _.x - f,
                    y = _.y - _.scale - d - 90;
                    var S = x.width + 17;
                    be.fillStyle = "rgba(0,0,0,0.2)",
                    be.roundRect(k - S / 2, y - 23.5, S, 47, 6),
                    be.fill(),
                    be.fillStyle = "#fff",
                    be.fillText(_.chatMessage, k, y)
                }
            !function(e) {
                if (R && R.alive) {
                    Ke.clearRect(0, 0, Ne.width, Ne.height),
                    Ke.strokeStyle = "#fff",
                    Ke.lineWidth = 4;
                    for (var t = 0; t < qt.length; ++t)
                        (Vt = qt[t]).update(Ke, e);
                    if (Ke.globalAlpha = 1,
                    Ke.fillStyle = "#fff",
                    si(R.x / o.mapScale * Ne.width, R.y / o.mapScale * Ne.height, 7, Ke, !0),
                    Ke.fillStyle = "rgba(255, 255, 255, 0.35)",
                    R.team && Et) {
                        for (t = 0; t < Et.length; t += 2) {
                            si(Et[t] / o.mapScale * Ne.width, Et[t + 1] / o.mapScale * Ne.height, 7, Ke, !0);
                        }
                    }
                    It && (Ke.fillStyle = "#fc5553",
                    Ke.font = "34px Hammersmith One",
                    Ke.textBaseline = "middle",
                    Ke.textAlign = "center",
                    Ke.fillText("x", It.x / o.mapScale * Ne.width, It.y / o.mapScale * Ne.height)),
                    Mt && (Ke.fillStyle = "#fff",
                    Ke.font = "34px Hammersmith One",
                    Ke.textBaseline = "middle",
                    Ke.textAlign = "center",
                    Ke.fillText("x", Mt.x / o.mapScale * Ne.width, Mt.y / o.mapScale * Ne.height))
                    for(let i = 0; i < infinteTracers.length; i++) {
                        if(infinteTracers[i] && Date.now() - infinteTracers[i].time <= 30000 && toggles.infiniterange() && Math.hypot(infinteTracers[i].y - R.y2, infinteTracers[i].x - R.x2) > 600) {
                            Ke.fillStyle = "#fff";
                            Ke.font = "34px Hammersmith One";
                            Ke.textBaseline = "middle";
                            Ke.textAlign = "center";
                            Ke.fillText("", infinteTracers[i].x / o.mapScale * Ne.width, infinteTracers[i].y / o.mapScale * Ne.height);
                        }else if(infinteTracers[i] && Date.now() - infinteTracers[i].time > 30000) {
                            infinteTracers.splice(i, 1);
                        }else if(Math.hypot(infinteTracers[i].y - R.y2, infinteTracers[i].x - R.x2) <= 600) {
                            infinteTracers.splice(i, 1);
                        }
                    }
                }
            }(P),
            -1 !== re.id && Fn(re.startX, re.startY, re.currentX, re.currentY),
            -1 !== se.id && Fn(se.startX, se.startY, se.currentX, se.currentY)
        }()
        if(R && toggles.darkmode()) {
            let eb = be.getTransform();
            let grd = be.createRadialGradient(oe/2, ce/2, 100, oe/2, ce/2, 1000);
            grd.addColorStop(0, "rgb(0, 0, 0, 0)"), grd.addColorStop(0.4, "rgb(0, 0, 0, 0.3)"), grd.addColorStop(1, "rgb(0, 0, 0, 0.6)");
            be.fillStyle = grd;
            be.fillRect(0, 0, oe, ce);
            be.setTransform(eb);
        }
        requestAnimFrame(e)
    }(),
    window.openLink = Oi,
    window.aJoinReq = Dt,
    window.follmoo = function() {
        H || (H = !0,
        I("moofoll", 1))
    }
    ,
    window.kickFromClan = Lt,
    window.sendJoin = Ft,
    window.leaveAlliance = Ht,
    window.createAlliance = zt,
    window.storeBuy = Kt,
    window.storeEquip = Jt,
    window.showItemInfo = Tt,
    window.selectSkinColor = function(e) {
        ae = e,
        en()
    }
    ,
    window.changeStoreIndex = function(e) {
        Xt != e && (Xt = e,
        Gt())
    }
    ,
    window.config = o
}
, function(e, t) {
    !function(e, t, n) {
        function i(e, t) {
            return typeof e === t
        }
        var r = []
          , s = []
          , a = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout((function() {
                    t(n[e])
                }
                ), 0)
            },
            addTest: function(e, t, n) {
                s.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                s.push({
                    name: null,
                    fn: e
                })
            }
        }
          , o = function() {};
        o.prototype = a,
        o = new o;
        var c = t.documentElement
          , l = "svg" === c.nodeName.toLowerCase();
        o.addTest("passiveeventlisteners", (function() {
            var t = !1;
            try {
                var n = Object.defineProperty({}, "passive", {
                    get: function() {
                        t = !0
                    }
                });
                e.addEventListener("test", null, n)
            } catch (e) {}
            return t
        }
        )),
        function() {
            var e, t, n, a, c, l;
            for (var h in s)
                if (s.hasOwnProperty(h)) {
                    if (e = [],
                    (t = s[h]).name && (e.push(t.name.toLowerCase()),
                    t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++)
                            e.push(t.options.aliases[n].toLowerCase());
                    for (a = i(t.fn, "function") ? t.fn() : t.fn,
                    c = 0; c < e.length; c++)
                        1 === (l = e[c].split(".")).length ? o[l[0]] = a : (!o[l[0]] || o[l[0]]instanceof Boolean || (o[l[0]] = new Boolean(o[l[0]])),
                        o[l[0]][l[1]] = a),
                        r.push((a ? "" : "no-") + l.join("-"))
                }
        }(),
        function(e) {
            var t = c.className
              , n = o._config.classPrefix || "";
            if (l && (t = t.baseVal),
            o._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(i, "$1" + n + "js$2")
            }
            o._config.enableClasses && (t += " " + n + e.join(" " + n),
            l ? c.className.baseVal = t : c.className = t)
        }(r),
        delete a.addTest,
        delete a.addAsyncTest;
        for (var h = 0; h < o._q.length; h++)
            o._q[h]();
        e.Modernizr = o
    }(window, document)
}
, function(e, t, n) {
    var i = n(24);
    n(19),
    e.exports = {
        socket: null,
        connected: !1,
        socketId: -1,
        connect: function(e, t, n) {
            if (!this.socket) {
                var r = this;
                try {
                    var s = !1
                      , a = e;
                    this.socket = new OriginalWebSocket(a),
                    this.socket.binaryType = "arraybuffer",
                    this.socket.onmessage = function(e) {
                        var t = new Uint8Array(e.data)
                          , s = i.decode(t)
                          , a = s[0];
                        t = s[1],
                        "io-init" == a ? r.socketId = t[0] : n[a].apply(void 0, t)
                    }
                    ,
                    this.socket.onopen = function() {
                        r.connected = !0,
                        t()
                    }
                    ,
                    this.socket.onclose = function(e) {
                        r.connected = !1,
                        4001 == e.code ? t("Invalid Connection") : s || t("disconnected")
                    }
                    ,
                    this.socket.onerror = function(e) {
                        this.socket && this.socket.readyState != WebSocket.OPEN && (s = !0,
                        console.error("Socket error", arguments),
                        t("Socket error"))
                    }
                } catch (e) {
                    console.warn("Socket connection error:", e),
                    t(e)
                }
            }
        },
        send: function(e) {
            var t = Array.prototype.slice.call(arguments, 1)
            , n = i.encode([e, t]);
            this.socket.send(n);
        },
        socketReady: function() {
            return this.socket && this.connected
        },
        close: function() {
            if(false) {
                this.socket && this.socket.close()
            }
        }
    }
}
, function(e, t, n) {
    t.encode = n(9).encode,
    t.decode = n(15).decode,
    t.Encoder = n(37).Encoder,
    t.Decoder = n(38).Decoder,
    t.createCodec = n(39).createCodec,
    t.codec = n(40).codec
}
, function(e, t, n) {
    (function(t) {
        function n(e) {
            return e && e.isBuffer && e
        }
        e.exports = n(void 0 !== t && t) || n(this.Buffer) || n("undefined" != typeof window && window.Buffer) || this.Buffer
    }
    ).call(this, n(11).Buffer)
}
, function(e, t, n) {
    "use strict";
    t.byteLength = function(e) {
        var t = l(e)
          , n = t[0]
          , i = t[1];
        return 3 * (n + i) / 4 - i
    }
    ,
    t.toByteArray = function(e) {
        var t, n, i = l(e), a = i[0], o = i[1], c = new s(function(e, t, n) {
            return 3 * (t + n) / 4 - n
        }(0, a, o)), h = 0, u = o > 0 ? a - 4 : a;
        for (n = 0; n < u; n += 4)
            t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)],
            c[h++] = t >> 16 & 255,
            c[h++] = t >> 8 & 255,
            c[h++] = 255 & t;
        return 2 === o && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4,
        c[h++] = 255 & t),
        1 === o && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2,
        c[h++] = t >> 8 & 255,
        c[h++] = 255 & t),
        c
    }
    ,
    t.fromByteArray = function(e) {
        for (var t, n = e.length, r = n % 3, s = [], a = 0, o = n - r; a < o; a += 16383)
            s.push(u(e, a, a + 16383 > o ? o : a + 16383));
        return 1 === r ? (t = e[n - 1],
        s.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1],
        s.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "=")),
        s.join("")
    }
    ;
    for (var i = [], r = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, c = a.length; o < c; ++o)
        i[o] = a[o],
        r[a.charCodeAt(o)] = o;
    function l(e) {
        var t = e.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t),
        [n, n === t ? 0 : 4 - n % 4]
    }
    function h(e) {
        return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e]
    }
    function u(e, t, n) {
        for (var i, r = [], s = t; s < n; s += 3)
            i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
            r.push(h(i));
        return r.join("")
    }
    r["-".charCodeAt(0)] = 62,
    r["_".charCodeAt(0)] = 63
}
, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}
, function(e, t, n) {
    var i = n(0);
    function r(e) {
        return new Array(e)
    }
    (t = e.exports = r(0)).alloc = r,
    t.concat = i.concat,
    t.from = function(e) {
        if (!i.isBuffer(e) && i.isView(e))
            e = i.Uint8Array.from(e);
        else if (i.isArrayBuffer(e))
            e = new Uint8Array(e);
        else {
            if ("string" == typeof e)
                return i.from.call(t, e);
            if ("number" == typeof e)
                throw new TypeError('"value" argument must not be a number')
        }
        return Array.prototype.slice.call(e)
    }
}
, function(e, t, n) {
    var i = n(0)
      , r = i.global;
    function s(e) {
        return new r(e)
    }
    (t = e.exports = i.hasBuffer ? s(0) : []).alloc = i.hasBuffer && r.alloc || s,
    t.concat = i.concat,
    t.from = function(e) {
        if (!i.isBuffer(e) && i.isView(e))
            e = i.Uint8Array.from(e);
        else if (i.isArrayBuffer(e))
            e = new Uint8Array(e);
        else {
            if ("string" == typeof e)
                return i.from.call(t, e);
            if ("number" == typeof e)
                throw new TypeError('"value" argument must not be a number')
        }
        return r.from && 1 !== r.from.length ? r.from(e) : new r(e)
    }
}
, function(e, t, n) {
    var i = n(0);
    function r(e) {
        return new Uint8Array(e)
    }
    (t = e.exports = i.hasArrayBuffer ? r(0) : []).alloc = r,
    t.concat = i.concat,
    t.from = function(e) {
        if (i.isView(e)) {
            var n = e.byteOffset
              , r = e.byteLength;
            (e = e.buffer).byteLength !== r && (e.slice ? e = e.slice(n, n + r) : (e = new Uint8Array(e)).byteLength !== r && (e = Array.prototype.slice.call(e, n, n + r)))
        } else {
            if ("string" == typeof e)
                return i.from.call(t, e);
            if ("number" == typeof e)
                throw new TypeError('"value" argument must not be a number')
        }
        return new Uint8Array(e)
    }
}
, function(e, t) {
    t.copy = function(e, t, n, i) {
        var r;
        n || (n = 0),
        i || 0 === i || (i = this.length),
        t || (t = 0);
        var s = i - n;
        if (e === this && n < t && t < i)
            for (r = s - 1; r >= 0; r--)
                e[r + t] = this[r + n];
        else
            for (r = 0; r < s; r++)
                e[r + t] = this[r + n];
        return s
    }
    ,
    t.toString = function(e, t, n) {
        var i = 0 | t;
        n || (n = this.length);
        for (var r = "", s = 0; i < n; )
            (s = this[i++]) < 128 ? r += String.fromCharCode(s) : (192 == (224 & s) ? s = (31 & s) << 6 | 63 & this[i++] : 224 == (240 & s) ? s = (15 & s) << 12 | (63 & this[i++]) << 6 | 63 & this[i++] : 240 == (248 & s) && (s = (7 & s) << 18 | (63 & this[i++]) << 12 | (63 & this[i++]) << 6 | 63 & this[i++]),
            s >= 65536 ? (s -= 65536,
            r += String.fromCharCode(55296 + (s >>> 10), 56320 + (1023 & s))) : r += String.fromCharCode(s));
        return r
    }
    ,
    t.write = function(e, t) {
        for (var n = t || (t |= 0), i = e.length, r = 0, s = 0; s < i; )
            (r = e.charCodeAt(s++)) < 128 ? this[n++] = r : r < 2048 ? (this[n++] = 192 | r >>> 6,
            this[n++] = 128 | 63 & r) : r < 55296 || r > 57343 ? (this[n++] = 224 | r >>> 12,
            this[n++] = 128 | r >>> 6 & 63,
            this[n++] = 128 | 63 & r) : (r = 65536 + (r - 55296 << 10 | e.charCodeAt(s++) - 56320),
            this[n++] = 240 | r >>> 18,
            this[n++] = 128 | r >>> 12 & 63,
            this[n++] = 128 | r >>> 6 & 63,
            this[n++] = 128 | 63 & r);
        return n - t
    }
}
, function(e, t, n) {
    t.setExtPackers = function(e) {
        e.addExtPacker(14, Error, [u, c]),
        e.addExtPacker(1, EvalError, [u, c]),
        e.addExtPacker(2, RangeError, [u, c]),
        e.addExtPacker(3, ReferenceError, [u, c]),
        e.addExtPacker(4, SyntaxError, [u, c]),
        e.addExtPacker(5, TypeError, [u, c]),
        e.addExtPacker(6, URIError, [u, c]),
        e.addExtPacker(10, RegExp, [h, c]),
        e.addExtPacker(11, Boolean, [l, c]),
        e.addExtPacker(12, String, [l, c]),
        e.addExtPacker(13, Date, [Number, c]),
        e.addExtPacker(15, Number, [l, c]),
        "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, a),
        e.addExtPacker(18, Uint8Array, a),
        e.addExtPacker(19, Int16Array, a),
        e.addExtPacker(20, Uint16Array, a),
        e.addExtPacker(21, Int32Array, a),
        e.addExtPacker(22, Uint32Array, a),
        e.addExtPacker(23, Float32Array, a),
        "undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, a),
        "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, a),
        e.addExtPacker(26, ArrayBuffer, a),
        e.addExtPacker(29, DataView, a)),
        r.hasBuffer && e.addExtPacker(27, s, r.from)
    }
    ;
    var i, r = n(0), s = r.global, a = r.Uint8Array.from, o = {
        name: 1,
        message: 1,
        stack: 1,
        columnNumber: 1,
        fileName: 1,
        lineNumber: 1
    };
    function c(e) {
        return i || (i = n(9).encode),
        i(e)
    }
    function l(e) {
        return e.valueOf()
    }
    function h(e) {
        (e = RegExp.prototype.toString.call(e).split("/")).shift();
        var t = [e.pop()];
        return t.unshift(e.join("/")),
        t
    }
    function u(e) {
        var t = {};
        for (var n in o)
            t[n] = e[n];
        return t
    }
}
, function(e, t, n) {
    var i = n(5)
      , r = n(7)
      , s = r.Uint64BE
      , a = r.Int64BE
      , o = n(0)
      , c = n(6)
      , l = n(34)
      , h = n(13).uint8
      , u = n(3).ExtBuffer
      , f = "undefined" != typeof Uint8Array
      , d = "undefined" != typeof Map
      , p = [];
    p[1] = 212,
    p[2] = 213,
    p[4] = 214,
    p[8] = 215,
    p[16] = 216,
    t.getWriteType = function(e) {
        var t = l.getWriteToken(e)
          , n = e && e.useraw
          , r = f && e && e.binarraybuffer
          , g = r ? o.isArrayBuffer : o.isBuffer
          , m = r ? function(e, t) {
            w(e, new Uint8Array(t))
        }
        : w
          , y = d && e && e.usemap ? function(e, n) {
            if (!(n instanceof Map))
                return b(e, n);
            var i = n.size;
            t[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](e, i);
            var r = e.codec.encode;
            n.forEach((function(t, n, i) {
                r(e, n),
                r(e, t)
            }
            ))
        }
        : b;
        return {
            boolean: function(e, n) {
                t[n ? 195 : 194](e, n)
            },
            function: v,
            number: function(e, n) {
                var i = 0 | n;
                n === i ? t[-32 <= i && i <= 127 ? 255 & i : 0 <= i ? i <= 255 ? 204 : i <= 65535 ? 205 : 206 : -128 <= i ? 208 : -32768 <= i ? 209 : 210](e, i) : t[203](e, n)
            },
            object: n ? function(e, n) {
                if (g(n))
                    return function(e, n) {
                        var i = n.length;
                        t[i < 32 ? 160 + i : i <= 65535 ? 218 : 219](e, i),
                        e.send(n)
                    }(e, n);
                k(e, n)
            }
            : k,
            string: function(e) {
                return function(n, i) {
                    var r = i.length
                      , s = 5 + 3 * r;
                    n.offset = n.reserve(s);
                    var a = n.buffer
                      , o = e(r)
                      , l = n.offset + o;
                    r = c.write.call(a, i, l);
                    var h = e(r);
                    if (o !== h) {
                        var u = l + h - o
                          , f = l + r;
                        c.copy.call(a, a, u, l, f)
                    }
                    t[1 === h ? 160 + r : h <= 3 ? 215 + h : 219](n, r),
                    n.offset += r
                }
            }(n ? function(e) {
                return e < 32 ? 1 : e <= 65535 ? 3 : 5
            }
            : function(e) {
                return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
            }
            ),
            symbol: v,
            undefined: v
        };
        function k(e, n) {
            if (null === n)
                return v(e, n);
            if (g(n))
                return m(e, n);
            if (i(n))
                return function(e, n) {
                    var i = n.length;
                    t[i < 16 ? 144 + i : i <= 65535 ? 220 : 221](e, i);
                    for (var r = e.codec.encode, s = 0; s < i; s++)
                        r(e, n[s])
                }(e, n);
            if (s.isUint64BE(n))
                return function(e, n) {
                    t[207](e, n.toArray())
                }(e, n);
            if (a.isInt64BE(n))
                return function(e, n) {
                    t[211](e, n.toArray())
                }(e, n);
            var r = e.codec.getExtPacker(n);
            if (r && (n = r(n)),
            n instanceof u)
                return function(e, n) {
                    var i = n.buffer
                      , r = i.length
                      , s = p[r] || (r < 255 ? 199 : r <= 65535 ? 200 : 201);
                    t[s](e, r),
                    h[n.type](e),
                    e.send(i)
                }(e, n);
            y(e, n)
        }
        function v(e, n) {
            t[192](e, n)
        }
        function w(e, n) {
            var i = n.length;
            t[i < 255 ? 196 : i <= 65535 ? 197 : 198](e, i),
            e.send(n)
        }
        function b(e, n) {
            var i = Object.keys(n)
              , r = i.length;
            t[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](e, r);
            var s = e.codec.encode;
            i.forEach((function(t) {
                s(e, t),
                s(e, n[t])
            }
            ))
        }
    }
}
, function(e, t, n) {
    var i = n(4)
      , r = n(7)
      , s = r.Uint64BE
      , a = r.Int64BE
      , o = n(13).uint8
      , c = n(0)
      , l = c.global
      , h = c.hasBuffer && "TYPED_ARRAY_SUPPORT"in l && !l.TYPED_ARRAY_SUPPORT
      , u = c.hasBuffer && l.prototype || {};
    function f() {
        var e = o.slice();
        return e[196] = d(196),
        e[197] = p(197),
        e[198] = g(198),
        e[199] = d(199),
        e[200] = p(200),
        e[201] = g(201),
        e[202] = m(202, 4, u.writeFloatBE || v, !0),
        e[203] = m(203, 8, u.writeDoubleBE || w, !0),
        e[204] = d(204),
        e[205] = p(205),
        e[206] = g(206),
        e[207] = m(207, 8, y),
        e[208] = d(208),
        e[209] = p(209),
        e[210] = g(210),
        e[211] = m(211, 8, k),
        e[217] = d(217),
        e[218] = p(218),
        e[219] = g(219),
        e[220] = p(220),
        e[221] = g(221),
        e[222] = p(222),
        e[223] = g(223),
        e
    }
    function d(e) {
        return function(t, n) {
            var i = t.reserve(2)
              , r = t.buffer;
            r[i++] = e,
            r[i] = n
        }
    }
    function p(e) {
        return function(t, n) {
            var i = t.reserve(3)
              , r = t.buffer;
            r[i++] = e,
            r[i++] = n >>> 8,
            r[i] = n
        }
    }
    function g(e) {
        return function(t, n) {
            var i = t.reserve(5)
              , r = t.buffer;
            r[i++] = e,
            r[i++] = n >>> 24,
            r[i++] = n >>> 16,
            r[i++] = n >>> 8,
            r[i] = n
        }
    }
    function m(e, t, n, i) {
        return function(r, s) {
            var a = r.reserve(t + 1);
            r.buffer[a++] = e,
            n.call(r.buffer, s, a, i)
        }
    }
    function y(e, t) {
        new s(this,t,e)
    }
    function k(e, t) {
        new a(this,t,e)
    }
    function v(e, t) {
        i.write(this, e, t, !1, 23, 4)
    }
    function w(e, t) {
        i.write(this, e, t, !1, 52, 8)
    }
    t.getWriteToken = function(e) {
        return e && e.uint8array ? function() {
            var e = f();
            return e[202] = m(202, 4, v),
            e[203] = m(203, 8, w),
            e
        }() : h || c.hasBuffer && e && e.safe ? function() {
            var e = o.slice();
            return e[196] = m(196, 1, l.prototype.writeUInt8),
            e[197] = m(197, 2, l.prototype.writeUInt16BE),
            e[198] = m(198, 4, l.prototype.writeUInt32BE),
            e[199] = m(199, 1, l.prototype.writeUInt8),
            e[200] = m(200, 2, l.prototype.writeUInt16BE),
            e[201] = m(201, 4, l.prototype.writeUInt32BE),
            e[202] = m(202, 4, l.prototype.writeFloatBE),
            e[203] = m(203, 8, l.prototype.writeDoubleBE),
            e[204] = m(204, 1, l.prototype.writeUInt8),
            e[205] = m(205, 2, l.prototype.writeUInt16BE),
            e[206] = m(206, 4, l.prototype.writeUInt32BE),
            e[207] = m(207, 8, y),
            e[208] = m(208, 1, l.prototype.writeInt8),
            e[209] = m(209, 2, l.prototype.writeInt16BE),
            e[210] = m(210, 4, l.prototype.writeInt32BE),
            e[211] = m(211, 8, k),
            e[217] = m(217, 1, l.prototype.writeUInt8),
            e[218] = m(218, 2, l.prototype.writeUInt16BE),
            e[219] = m(219, 4, l.prototype.writeUInt32BE),
            e[220] = m(220, 2, l.prototype.writeUInt16BE),
            e[221] = m(221, 4, l.prototype.writeUInt32BE),
            e[222] = m(222, 2, l.prototype.writeUInt16BE),
            e[223] = m(223, 4, l.prototype.writeUInt32BE),
            e
        }() : f()
    }
}
, function(e, t, n) {
    t.setExtUnpackers = function(e) {
        e.addExtUnpacker(14, [o, l(Error)]),
        e.addExtUnpacker(1, [o, l(EvalError)]),
        e.addExtUnpacker(2, [o, l(RangeError)]),
        e.addExtUnpacker(3, [o, l(ReferenceError)]),
        e.addExtUnpacker(4, [o, l(SyntaxError)]),
        e.addExtUnpacker(5, [o, l(TypeError)]),
        e.addExtUnpacker(6, [o, l(URIError)]),
        e.addExtUnpacker(10, [o, c]),
        e.addExtUnpacker(11, [o, h(Boolean)]),
        e.addExtUnpacker(12, [o, h(String)]),
        e.addExtUnpacker(13, [o, h(Date)]),
        e.addExtUnpacker(15, [o, h(Number)]),
        "undefined" != typeof Uint8Array && (e.addExtUnpacker(17, h(Int8Array)),
        e.addExtUnpacker(18, h(Uint8Array)),
        e.addExtUnpacker(19, [u, h(Int16Array)]),
        e.addExtUnpacker(20, [u, h(Uint16Array)]),
        e.addExtUnpacker(21, [u, h(Int32Array)]),
        e.addExtUnpacker(22, [u, h(Uint32Array)]),
        e.addExtUnpacker(23, [u, h(Float32Array)]),
        "undefined" != typeof Float64Array && e.addExtUnpacker(24, [u, h(Float64Array)]),
        "undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, h(Uint8ClampedArray)),
        e.addExtUnpacker(26, u),
        e.addExtUnpacker(29, [u, h(DataView)])),
        r.hasBuffer && e.addExtUnpacker(27, h(s))
    }
    ;
    var i, r = n(0), s = r.global, a = {
        name: 1,
        message: 1,
        stack: 1,
        columnNumber: 1,
        fileName: 1,
        lineNumber: 1
    };
    function o(e) {
        return i || (i = n(15).decode),
        i(e)
    }
    function c(e) {
        return RegExp.apply(null, e)
    }
    function l(e) {
        return function(t) {
            var n = new e;
            for (var i in a)
                n[i] = t[i];
            return n
        }
    }
    function h(e) {
        return function(t) {
            return new e(t)
        }
    }
    function u(e) {
        return new Uint8Array(e).buffer
    }
}
, function(e, t, n) {
    var i = n(17);
    function r(e) {
        var t, n = new Array(256);
        for (t = 0; t <= 127; t++)
            n[t] = s(t);
        for (t = 128; t <= 143; t++)
            n[t] = o(t - 128, e.map);
        for (t = 144; t <= 159; t++)
            n[t] = o(t - 144, e.array);
        for (t = 160; t <= 191; t++)
            n[t] = o(t - 160, e.str);
        for (n[192] = s(null),
        n[193] = null,
        n[194] = s(!1),
        n[195] = s(!0),
        n[196] = a(e.uint8, e.bin),
        n[197] = a(e.uint16, e.bin),
        n[198] = a(e.uint32, e.bin),
        n[199] = a(e.uint8, e.ext),
        n[200] = a(e.uint16, e.ext),
        n[201] = a(e.uint32, e.ext),
        n[202] = e.float32,
        n[203] = e.float64,
        n[204] = e.uint8,
        n[205] = e.uint16,
        n[206] = e.uint32,
        n[207] = e.uint64,
        n[208] = e.int8,
        n[209] = e.int16,
        n[210] = e.int32,
        n[211] = e.int64,
        n[212] = o(1, e.ext),
        n[213] = o(2, e.ext),
        n[214] = o(4, e.ext),
        n[215] = o(8, e.ext),
        n[216] = o(16, e.ext),
        n[217] = a(e.uint8, e.str),
        n[218] = a(e.uint16, e.str),
        n[219] = a(e.uint32, e.str),
        n[220] = a(e.uint16, e.array),
        n[221] = a(e.uint32, e.array),
        n[222] = a(e.uint16, e.map),
        n[223] = a(e.uint32, e.map),
        t = 224; t <= 255; t++)
            n[t] = s(t - 256);
        return n
    }
    function s(e) {
        return function() {
            return e
        }
    }
    function a(e, t) {
        return function(n) {
            var i = e(n);
            return t(n, i)
        }
    }
    function o(e, t) {
        return function(n) {
            return t(n, e)
        }
    }
    t.getReadToken = function(e) {
        var t = i.getReadFormat(e);
        return e && e.useraw ? function(e) {
            var t, n = r(e).slice();
            for (n[217] = n[196],
            n[218] = n[197],
            n[219] = n[198],
            t = 160; t <= 191; t++)
                n[t] = o(t - 160, e.bin);
            return n
        }(t) : r(t)
    }
}
, function(e, t, n) {
    t.Encoder = s;
    var i = n(18)
      , r = n(10).EncodeBuffer;
    function s(e) {
        if (!(this instanceof s))
            return new s(e);
        r.call(this, e)
    }
    s.prototype = new r,
    i.mixin(s.prototype),
    s.prototype.encode = function(e) {
        this.write(e),
        this.emit("data", this.read())
    }
    ,
    s.prototype.end = function(e) {
        arguments.length && this.encode(e),
        this.flush(),
        this.emit("end")
    }
}
, function(e, t, n) {
    t.Decoder = s;
    var i = n(18)
      , r = n(16).DecodeBuffer;
    function s(e) {
        if (!(this instanceof s))
            return new s(e);
        r.call(this, e)
    }
    s.prototype = new r,
    i.mixin(s.prototype),
    s.prototype.decode = function(e) {
        arguments.length && this.write(e),
        this.flush()
    }
    ,
    s.prototype.push = function(e) {
        this.emit("data", e)
    }
    ,
    s.prototype.end = function(e) {
        this.decode(e),
        this.emit("end")
    }
}
, function(e, t, n) {
    n(8),
    n(2),
    t.createCodec = n(1).createCodec
}
, function(e, t, n) {
    n(8),
    n(2),
    t.codec = {
        preset: n(1).preset
    }
}
, function(e, t) {
    var n, i, r = e.exports = {};
    function s() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === s || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
            n = s
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            i = a
        }
    }();
    var c, l = [], h = !1, u = -1;
    function f() {
        h && c && (h = !1,
        c.length ? l = c.concat(l) : u = -1,
        l.length && d())
    }
    function d() {
        if (!h) {
            var e = o(f);
            h = !0;
            for (var t = l.length; t; ) {
                for (c = l,
                l = []; ++u < t; )
                    c && c[u].run();
                u = -1,
                t = l.length
            }
            c = null,
            h = !1,
            function(e) {
                if (i === clearTimeout)
                    return clearTimeout(e);
                if ((i === a || !i) && clearTimeout)
                    return i = clearTimeout,
                    clearTimeout(e);
                try {
                    i(e)
                } catch (t) {
                    try {
                        return i.call(null, e)
                    } catch (t) {
                        return i.call(this, e)
                    }
                }
            }(e)
        }
    }
    function p(e, t) {
        this.fun = e,
        this.array = t
    }
    function g() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        l.push(new p(e,t)),
        1 !== l.length || h || o(d)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    r.title = "browser",
    r.browser = !0,
    r.env = {},
    r.argv = [],
    r.version = "",
    r.versions = {},
    r.on = g,
    r.addListener = g,
    r.once = g,
    r.off = g,
    r.removeListener = g,
    r.removeAllListeners = g,
    r.emit = g,
    r.prependListener = g,
    r.prependOnceListener = g,
    r.listeners = function(e) {
        return []
    }
    ,
    r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    r.cwd = function() {
        return "/"
    }
    ,
    r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    r.umask = function() {
        return 0
    }
}
, function(e, t) {
    var n = Math.abs
      , i = (Math.cos,
    Math.sin,
    Math.pow,
    Math.sqrt)
      , r = (n = Math.abs,
    Math.atan2)
      , s = Math.PI;
    e.exports.randInt = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }
    ,
    e.exports.randFloat = function(e, t) {
        return Math.random() * (t - e + 1) + e
    }
    ,
    e.exports.lerp = function(e, t, n) {
        return e + (t - e) * n
    }
    ,
    e.exports.decel = function(e, t) {
        return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)),
        e
    }
    ,
    e.exports.getDistance = function(e, t, n, r) {
        return i((n -= e) * n + (r -= t) * r)
    }
    ,
    e.exports.getDirection = function(e, t, n, i) {
        return r(t - i, e - n)
    }
    ,
    e.exports.getAngleDist = function(e, t) {
        var i = n(t - e) % (2 * s);
        return i > s ? 2 * s - i : i
    }
    ,
    e.exports.isNumber = function(e) {
        return "number" == typeof e && !isNaN(e) && isFinite(e)
    }
    ,
    e.exports.isString = function(e) {
        return e && "string" == typeof e
    }
    ,
    e.exports.kFormat = function(e) {
        return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
    }
    ,
    e.exports.capitalizeFirst = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    ,
    e.exports.fixTo = function(e, t) {
        return parseFloat(e.toFixed(t))
    }
    ,
    e.exports.sortByPoints = function(e, t) {
        return parseFloat(t.points) - parseFloat(e.points)
    }
    ,
    e.exports.lineInRect = function(e, t, n, i, r, s, a, o) {
        var c = r
          , l = a;
        if (r > a && (c = a,
        l = r),
        l > n && (l = n),
        c < e && (c = e),
        c > l)
            return !1;
        var h = s
          , u = o
          , f = a - r;
        if (Math.abs(f) > 1e-7) {
            var d = (o - s) / f
              , p = s - d * r;
            h = d * c + p,
            u = d * l + p
        }
        if (h > u) {
            var g = u;
            u = h,
            h = g
        }
        return u > i && (u = i),
        h < t && (h = t),
        !(h > u)
    }
    ,
    e.exports.containsPoint = function(e, t, n) {
        var i = e.getBoundingClientRect()
          , r = i.left + window.scrollX
          , s = i.top + window.scrollY
          , a = i.width
          , o = i.height;
        return t > r && t < r + a && n > s && n < s + o
    }
    ,
    e.exports.mousifyTouchEvent = function(e) {
        var t = e.changedTouches[0];
        e.screenX = t.screenX,
        e.screenY = t.screenY,
        e.clientX = t.clientX,
        e.clientY = t.clientY,
        e.pageX = t.pageX,
        e.pageY = t.pageY
    }
    ,
    e.exports.hookTouchEvents = function(t, n) {
        var i = !n
          , r = !1;
        function s(n) {
            e.exports.mousifyTouchEvent(n),
            window.setUsingTouch(!0),
            i && (n.preventDefault(),
            n.stopPropagation()),
            r && (t.onclick && t.onclick(n),
            t.onmouseout && t.onmouseout(n),
            r = !1)
        }
        t.addEventListener("touchstart", e.exports.checkTrusted((function(n) {
            e.exports.mousifyTouchEvent(n),
            window.setUsingTouch(!0),
            i && (n.preventDefault(),
            n.stopPropagation()),
            t.onmouseover && t.onmouseover(n),
            r = !0
        }
        )), !1),
        t.addEventListener("touchmove", e.exports.checkTrusted((function(n) {
            e.exports.mousifyTouchEvent(n),
            window.setUsingTouch(!0),
            i && (n.preventDefault(),
            n.stopPropagation()),
            e.exports.containsPoint(t, n.pageX, n.pageY) ? r || (t.onmouseover && t.onmouseover(n),
            r = !0) : r && (t.onmouseout && t.onmouseout(n),
            r = !1)
        }
        )), !1),
        t.addEventListener("touchend", e.exports.checkTrusted(s), !1),
        t.addEventListener("touchcancel", e.exports.checkTrusted(s), !1),
        t.addEventListener("touchleave", e.exports.checkTrusted(s), !1)
    }
    ,
    e.exports.removeAllChildren = function(e) {
        for (; e.hasChildNodes(); )
            e.removeChild(e.lastChild)
    }
    ,
    e.exports.generateElement = function(t) {
        var n = document.createElement(t.tag || "div");
        function i(e, i) {
            t[e] && (n[i] = t[e])
        }
        for (var r in i("text", "textContent"),
        i("html", "innerHTML"),
        i("class", "className"),
        t) {
            switch (r) {
            case "tag":
            case "text":
            case "html":
            case "class":
            case "style":
            case "hookTouch":
            case "parent":
            case "children":
                continue
            }
            n[r] = t[r]
        }
        if (n.onclick && (n.onclick = e.exports.checkTrusted(n.onclick)),
        n.onmouseover && (n.onmouseover = e.exports.checkTrusted(n.onmouseover)),
        n.onmouseout && (n.onmouseout = e.exports.checkTrusted(n.onmouseout)),
        t.style && (n.style.cssText = t.style),
        t.hookTouch && e.exports.hookTouchEvents(n),
        t.parent && t.parent.appendChild(n),
        t.children)
            for (var s = 0; s < t.children.length; s++)
                n.appendChild(t.children[s]);
        return n
    }
    ,
    e.exports.eventIsTrusted = function(e) {
        return !e || "boolean" != typeof e.isTrusted || e.isTrusted
    }
    ,
    e.exports.checkTrusted = function(t) {
        return function(n) {
            n && n instanceof Event && e.exports.eventIsTrusted(n) && t(n)
        }
    }
    ,
    e.exports.randomString = function(e) {
        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++)
            t += n.charAt(Math.floor(Math.random() * n.length));
        return t
    }
    ,
    e.exports.countInArray = function(e, t) {
        for (var n = 0, i = 0; i < e.length; i++)
            e[i] === t && n++;
        return n
    }
}
, function(e, t) {
    e.exports.AnimText = function() {
        this.init = function(e, t, n, i, r, s, a) {
            this.x = e,
            this.y = t,
            this.color = a,
            this.scale = n,
            this.startScale = this.scale,
            this.maxScale = 1.5 * n,
            this.scaleSpeed = .7,
            this.speed = i,
            this.life = r,
            this.text = s
        }
        ,
        this.update = function(e) {
            this.life && (this.life -= e,
            this.y -= this.speed * e,
            this.scale += this.scaleSpeed * e,
            this.scale >= this.maxScale ? (this.scale = this.maxScale,
            this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale,
            this.scaleSpeed = 0),
            this.life <= 0 && (this.life = 0))
        }
        ,
        this.render = function(e, t, n) {
            e.fillStyle = this.color;
            e.font = this.scale + "px Hammersmith One";
            e.fillText(this.text, this.x - t, this.y - n);
        }
    }
    ,
    e.exports.TextManager = function() {
        this.texts = [],
        this.update = function(e, t, n, i) {
            t.textBaseline = "middle",
            t.textAlign = "center";
            for (var r = 0; r < this.texts.length; ++r)
                this.texts[r].life && (this.texts[r].update(e),
                this.texts[r].render(t, n, i))
        }
        ,
        this.showText = function(t, n, i, r, s, a, o) {
            for (var c, l = 0; l < this.texts.length; ++l)
                if (!this.texts[l].life) {
                    c = this.texts[l];
                    break
                }
            c || (c = new e.exports.AnimText,
            this.texts.push(c)),
            c.init(t, n, i, r, s, a, o)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        this.sid = e,
        this.init = function(e, t, n, i, r, s, a) {
            s = s || {},
            this.sentTo = {},
            this.gridLocations = [],
            this.active = !0,
            this.doUpdate = s.doUpdate,
            this.x = e,
            this.y = t,
            this.dir = n,
            this.xWiggle = 0,
            this.yWiggle = 0,
            this.scale = i,
            this.type = r,
            this.id = s.id,
            this.owner = a,
            this.name = s.name,
            this.isItem = null != this.id,
            this.group = s.group,
            this.health = s.health,
            this.currentHealth = this.health,
            this.layer = 2,
            null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1),
            this.colDiv = s.colDiv || 1,
            this.blocker = s.blocker,
            this.ignoreCollision = s.ignoreCollision,
            this.dontGather = s.dontGather,
            this.hideFromEnemy = s.hideFromEnemy,
            this.friction = s.friction,
            this.projDmg = s.projDmg,
            this.dmg = s.dmg,
            this.pDmg = s.pDmg,
            this.pps = s.pps,
            this.zIndex = s.zIndex || 0,
            this.turnSpeed = s.turnSpeed,
            this.req = s.req,
            this.trap = s.trap,
            this.healCol = s.healCol,
            this.teleport = s.teleport,
            this.boostSpeed = s.boostSpeed,
            this.projectile = s.projectile,
            this.shootRange = s.shootRange,
            this.shootRate = s.shootRate,
            this.shootCount = this.shootRate,
            this.spawnPoint = s.spawnPoint
        }
        ,
        this.changeHealth = function(e, t) {
            return this.health += e,
            this.health <= 0
        }
        ,
        this.getScale = function(e, t) {
            return e = e || 1,
            this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
        }
        ,
        this.visibleToPlayer = function(e) {
            return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner.team && e.team == this.owner.team)
        }
        ,
        this.update = function(e) {
            this.active && (this.xWiggle && (this.xWiggle *= Math.pow(.99, e)),
            this.yWiggle && (this.yWiggle *= Math.pow(.99, e)),
            this.turnSpeed && (this.dir += this.turnSpeed * e))
        }
    }
}
, function(e, t) {
    e.exports.groups = [{
        id: 0,
        name: "food",
        layer: 0
    }, {
        id: 1,
        name: "walls",
        place: !0,
        limit: 30,
        layer: 0
    }, {
        id: 2,
        name: "spikes",
        place: !0,
        limit: 15,
        layer: 0
    }, {
        id: 3,
        name: "mill",
        place: !0,
        limit: 7,
        layer: 1
    }, {
        id: 4,
        name: "mine",
        place: !0,
        limit: 1,
        layer: 0
    }, {
        id: 5,
        name: "trap",
        place: !0,
        limit: 6,
        layer: -1
    }, {
        id: 6,
        name: "booster",
        place: !0,
        limit: 12,
        layer: -1
    }, {
        id: 7,
        name: "turret",
        place: !0,
        limit: 2,
        layer: 1
    }, {
        id: 8,
        name: "watchtower",
        place: !0,
        limit: 12,
        layer: 1
    }, {
        id: 9,
        name: "buff",
        place: !0,
        limit: 4,
        layer: -1
    }, {
        id: 10,
        name: "spawn",
        place: !0,
        limit: 1,
        layer: -1
    }, {
        id: 11,
        name: "sapling",
        place: !0,
        limit: 2,
        layer: 0
    }, {
        id: 12,
        name: "blocker",
        place: !0,
        limit: 3,
        layer: -1
    }, {
        id: 13,
        name: "teleporter",
        place: !0,
        limit: 2,
        layer: -1
    }],
    t.projectiles = [{
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 25,
        speed: 1.6,
        scale: 103,
        range: 1e3
    }, {
        indx: 1,
        layer: 1,
        dmg: 25,
        scale: 20
    }, {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 35,
        speed: 2.5,
        scale: 103,
        range: 1200
    }, {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 30,
        speed: 2,
        scale: 103,
        range: 1200
    }, {
        indx: 1,
        layer: 1,
        dmg: 16,
        scale: 20
    }, {
        indx: 0,
        layer: 0,
        src: "bullet_1",
        dmg: 50,
        speed: 3.6,
        scale: 160,
        range: 1400
    }],
    t.weapons = window.weapons = [{
        id: 0,
        type: 0,
        name: "tool hammer",
        desc: "tool for gathering all resources",
        src: "hammer_1",
        length: 140,
        width: 140,
        xOff: -3,
        yOff: 18,
        dmg: 25,
        range: 65,
        gather: 1,
        speed: 300
    }, {
        id: 1,
        type: 0,
        age: 2,
        name: "hand axe",
        desc: "gathers resources at a higher rate",
        src: "axe_1",
        length: 140,
        width: 140,
        xOff: 3,
        yOff: 24,
        dmg: 30,
        spdMult: 1,
        range: 70,
        gather: 2,
        speed: 400
    }, {
        id: 2,
        type: 0,
        age: 8,
        pre: 1,
        name: "great axe",
        desc: "deal more damage and gather more resources",
        src: "great_axe_1",
        length: 140,
        width: 140,
        xOff: -8,
        yOff: 25,
        dmg: 35,
        spdMult: 1,
        range: 75,
        gather: 4,
        speed: 400
    }, {
        id: 3,
        type: 0,
        age: 2,
        name: "katana",
        desc: "greater range and damage",
        src: "sword_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 59,
        dmg: 40,
        spdMult: .8,
        range: 118,
        gather: 1,
        speed: 300
    }, {
        id: 4,
        type: 0,
        age: 8,
        pre: 3,
        name: "katana",
        desc: "greater range and damage",
        src: "samurai_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 59,
        dmg: 40,
        spdMult: .8,
        range: 118,
        gather: 1,
        speed: 300
    }, {
        id: 5,
        type: 0,
        age: 2,
        name: "polearm",
        desc: "long range melee weapon",
        src: "spear_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 53,
        dmg: 45,
        knock: .2,
        spdMult: .82,
        range: 142,
        gather: 1,
        speed: 700
    }, {
        id: 6,
        type: 0,
        age: 2,
        name: "bat",
        desc: "fast long range melee weapon",
        src: "bat_1",
        iPad: 1.3,
        length: 110,
        width: 180,
        xOff: -8,
        yOff: 53,
        dmg: 20,
        knock: .7,
        range: 110,
        gather: 1,
        speed: 300
    }, {
        id: 7,
        type: 0,
        age: 2,
        name: "daggers",
        desc: "really fast short range weapon",
        src: "dagger_1",
        iPad: .8,
        length: 110,
        width: 110,
        xOff: 18,
        yOff: 0,
        dmg: 20,
        knock: .1,
        range: 65,
        gather: 1,
        hitSlow: .1,
        spdMult: 1.13,
        speed: 100
    }, {
        id: 8,
        type: 0,
        age: 2,
        name: "stick",
        desc: "great for gathering but very weak",
        src: "stick_1",
        length: 140,
        width: 140,
        xOff: 3,
        yOff: 24,
        dmg: 1,
        spdMult: 1,
        range: 70,
        gather: 7,
        speed: 400
    }, {
        id: 9,
        type: 1,
        age: 6,
        name: "hunting bow",
        desc: "bow used for ranged combat and hunting",
        src: "bow_1",
        req: ["wood", 4],
        length: 120,
        width: 120,
        xOff: -6,
        yOff: 0,
        projectile: 0,
        spdMult: .75,
        speed: 600
    }, {
        id: 10,
        type: 1,
        age: 6,
        name: "great hammer",
        desc: "hammer used for destroying structures",
        src: "great_hammer_1",
        length: 140,
        width: 140,
        xOff: -9,
        yOff: 25,
        dmg: 10,
        spdMult: .88,
        range: 75,
        sDmg: 7.5,
        gather: 1,
        speed: 400
    }, {
        id: 11,
        type: 1,
        age: 6,
        name: "wooden shield",
        desc: "blocks projectiles and reduces melee damage",
        src: "shield_1",
        length: 120,
        width: 120,
        shield: .2,
        speed: 111,
        xOff: 6,
        yOff: 0,
        spdMult: .7
    }, {
        id: 12,
        type: 1,
        age: 8,
        pre: 9,
        name: "crossbow",
        desc: "deals more damage and has greater range",
        src: "crossbow_1",
        req: ["wood", 5],
        aboveHand: !0,
        armS: .75,
        length: 120,
        width: 120,
        xOff: -4,
        yOff: 0,
        projectile: 2,
        spdMult: .7,
        speed: 700
    }, {
        id: 13,
        type: 1,
        age: 9,
        pre: 12,
        name: "repeater crossbow",
        desc: "high firerate crossbow with reduced damage",
        src: "crossbow_2",
        req: ["wood", 10],
        aboveHand: !0,
        armS: .75,
        length: 120,
        width: 120,
        xOff: -4,
        yOff: 0,
        projectile: 3,
        spdMult: .7,
        speed: 230
    }, {
        id: 14,
        type: 1,
        age: 6,
        name: "mc grabby",
        desc: "steals resources from enemies",
        src: "grab_1",
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 53,
        dmg: 0,
        steal: 250,
        knock: .2,
        spdMult: 1.05,
        range: 125,
        gather: 0,
        speed: 700
    }, {
        id: 15,
        type: 1,
        age: 9,
        pre: 12,
        name: "musket",
        desc: "slow firerate but high damage and range",
        src: "musket_1",
        req: ["stone", 10],
        aboveHand: !0,
        rec: .35,
        armS: .6,
        hndS: .3,
        hndD: 1.6,
        length: 205,
        width: 205,
        xOff: 25,
        yOff: 0,
        projectile: 5,
        hideProjectile: !0,
        spdMult: .6,
        speed: 1500
    }],
    e.exports.list = [{
        group: e.exports.groups[0],
        name: "apple",
        desc: "restores 20 health when consumed",
        req: ["food", 10],
        consume: function(e) {
            return e.changeHealth(20, e)
        },
        scale: 22,
        holdOffset: 15
    }, {
        age: 3,
        group: e.exports.groups[0],
        name: "cookie",
        desc: "restores 40 health when consumed",
        req: ["food", 15],
        consume: function(e) {
            return e.changeHealth(40, e)
        },
        scale: 27,
        holdOffset: 15
    }, {
        age: 7,
        group: e.exports.groups[0],
        name: "cheese",
        desc: "restores 30 health and another 50 over 5 seconds",
        req: ["food", 25],
        consume: function(e) {
            return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10,
            e.dmgOverTime.doer = e,
            e.dmgOverTime.time = 5,
            !0)
        },
        scale: 27,
        holdOffset: 15
    }, {
        group: e.exports.groups[1],
        name: "wood wall",
        desc: "provides protection for your village",
        req: ["wood", 10],
        projDmg: !0,
        health: 380,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 3,
        group: e.exports.groups[1],
        name: "stone wall",
        desc: "provides improved protection for your village",
        req: ["stone", 25],
        health: 900,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        pre: 1,
        group: e.exports.groups[1],
        name: "castle wall",
        desc: "provides powerful protection for your village",
        req: ["stone", 35],
        health: 1500,
        scale: 52,
        holdOffset: 20,
        placeOffset: -5
    }, {
        group: e.exports.groups[2],
        name: "spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 20, "stone", 5],
        health: 400,
        dmg: 20,
        scale: 49,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 5,
        group: e.exports.groups[2],
        name: "greater spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 10],
        health: 500,
        dmg: 35,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 9,
        pre: 1,
        group: e.exports.groups[2],
        name: "poison spikes",
        desc: "poisons enemies when they touch them",
        req: ["wood", 35, "stone", 15],
        health: 600,
        dmg: 30,
        pDmg: 5,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 9,
        pre: 2,
        group: e.exports.groups[2],
        name: "spinning spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 20],
        health: 500,
        dmg: 45,
        turnSpeed: .003,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        group: e.exports.groups[3],
        name: "windmill",
        desc: "generates gold over time",
        req: ["wood", 50, "stone", 10],
        health: 400,
        pps: 1,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 45,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 5,
        pre: 1,
        group: e.exports.groups[3],
        name: "faster windmill",
        desc: "generates more gold over time",
        req: ["wood", 60, "stone", 20],
        health: 500,
        pps: 1.5,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 8,
        pre: 1,
        group: e.exports.groups[3],
        name: "power mill",
        desc: "generates more gold over time",
        req: ["wood", 100, "stone", 50],
        health: 800,
        pps: 2,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 5,
        group: e.exports.groups[4],
        type: 2,
        name: "mine",
        desc: "allows you to mine stone",
        req: ["wood", 20, "stone", 100],
        iconLineMult: 12,
        scale: 65,
        holdOffset: 20,
        placeOffset: 0
    }, {
        age: 5,
        group: e.exports.groups[11],
        type: 0,
        name: "sapling",
        desc: "allows you to farm wood",
        req: ["wood", 150],
        iconLineMult: 12,
        colDiv: .5,
        scale: 110,
        holdOffset: 50,
        placeOffset: -15
    }, {
        age: 4,
        group: e.exports.groups[5],
        name: "pit trap",
        desc: "pit that traps enemies if they walk over it",
        req: ["wood", 30, "stone", 30],
        trap: !0,
        ignoreCollision: !0,
        hideFromEnemy: !0,
        health: 500,
        colDiv: .2,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 4,
        group: e.exports.groups[6],
        name: "boost pad",
        desc: "provides boost when stepped on",
        req: ["stone", 20, "wood", 5],
        ignoreCollision: !0,
        boostSpeed: 1.5,
        health: 150,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[7],
        doUpdate: !0,
        name: "turret",
        desc: "defensive structure that shoots at enemies",
        req: ["wood", 200, "stone", 150],
        health: 800,
        projectile: 1,
        shootRange: 700,
        shootRate: 2200,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[8],
        name: "platform",
        desc: "platform to shoot over walls and cross over water",
        req: ["wood", 20],
        ignoreCollision: !0,
        zIndex: 1,
        health: 300,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[9],
        name: "healing pad",
        desc: "standing on it will slowly heal you",
        req: ["wood", 30, "food", 10],
        ignoreCollision: !0,
        healCol: 15,
        health: 400,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 9,
        group: e.exports.groups[10],
        name: "spawn pad",
        desc: "you will spawn here when you die but it will dissapear",
        req: ["wood", 100, "stone", 100],
        health: 400,
        ignoreCollision: !0,
        spawnPoint: !0,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[12],
        name: "blocker",
        desc: "blocks building in radius",
        req: ["wood", 30, "stone", 25],
        ignoreCollision: !0,
        blocker: 300,
        health: 400,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[13],
        name: "teleporter",
        desc: "teleports you to a random point on the map",
        req: ["wood", 60, "stone", 60],
        ignoreCollision: !0,
        teleport: !0,
        health: 200,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }];
    for (var n = 0; n < e.exports.list.length; ++n)
        e.exports.list[n].id = n,
        e.exports.list[n].pre && (e.exports.list[n].pre = n - e.exports.list[n].pre)
}
, function(e, t) {
    e.exports = {}
}
, function(e, t) {
    var n = Math.floor
      , i = Math.abs
      , r = Math.cos
      , s = Math.sin
      , a = (Math.pow,
    Math.sqrt);
    e.exports = function(e, t, o, c, l, h) {
        var u, f;
        this.objects = t,
        this.grids = {},
        this.updateObjects = [];
        var d = c.mapScale / c.colGrid;
        this.setObjectGrids = function(e) {
            for (var t = Math.min(c.mapScale, Math.max(0, e.x)), n = Math.min(c.mapScale, Math.max(0, e.y)), i = 0; i < c.colGrid; ++i) {
                u = i * d;
                for (var r = 0; r < c.colGrid; ++r)
                    f = r * d,
                    t + e.scale >= u && t - e.scale <= u + d && n + e.scale >= f && n - e.scale <= f + d && (this.grids[i + "_" + r] || (this.grids[i + "_" + r] = []),
                    this.grids[i + "_" + r].push(e),
                    e.gridLocations.push(i + "_" + r))
            }
        }
        ,
        this.removeObjGrid = function(e) {
            for (var t, n = 0; n < e.gridLocations.length; ++n)
                (t = this.grids[e.gridLocations[n]].indexOf(e)) >= 0 && this.grids[e.gridLocations[n]].splice(t, 1)
        }
        ,
        this.disableObj = function(e) {
            if (e.active = !1,
            h) {
                e.owner && e.pps && (e.owner.pps -= e.pps),
                this.removeObjGrid(e);
                var t = this.updateObjects.indexOf(e);
                t >= 0 && this.updateObjects.splice(t, 1)
            }
        }
        ,
        this.hitObj = function(e, t) {
            for (var n = 0; n < l.length; ++n)
                l[n].active && (e.sentTo[l[n].id] && (e.active ? l[n].canSee(e) && h.send(l[n].id, "8", o.fixTo(t, 1), e.sid) : h.send(l[n].id, "12", e.sid)),
                e.active || e.owner != l[n] || l[n].changeItemCount(e.group.id, -1))
        }
        ;
        var p, g, m = [];
        this.getGridArrays = function(e, t, i) {
            u = n(e / d),
            f = n(t / d),
            m.length = 0;
            try {
                this.grids[u + "_" + f] && m.push(this.grids[u + "_" + f]),
                e + i >= (u + 1) * d && ((p = this.grids[u + 1 + "_" + f]) && m.push(p),
                f && t - i <= f * d ? (p = this.grids[u + 1 + "_" + (f - 1)]) && m.push(p) : t + i >= (f + 1) * d && (p = this.grids[u + 1 + "_" + (f + 1)]) && m.push(p)),
                u && e - i <= u * d && ((p = this.grids[u - 1 + "_" + f]) && m.push(p),
                f && t - i <= f * d ? (p = this.grids[u - 1 + "_" + (f - 1)]) && m.push(p) : t + i >= (f + 1) * d && (p = this.grids[u - 1 + "_" + (f + 1)]) && m.push(p)),
                t + i >= (f + 1) * d && (p = this.grids[u + "_" + (f + 1)]) && m.push(p),
                f && t - i <= f * d && (p = this.grids[u + "_" + (f - 1)]) && m.push(p)
            } catch (e) {}
            return m
        }
        ,
        this.add = function(n, i, r, s, a, o, c, l, u) {
            g = null;
            for (var f = 0; f < t.length; ++f)
                if (t[f].sid == n) {
                    g = t[f];
                    break
                }
            if (!g)
                for (f = 0; f < t.length; ++f)
                    if (!t[f].active) {
                        g = t[f];
                        break
                    }
            g || (g = new e(n),
            t.push(g)),
            l && (g.sid = n),
            g.init(i, r, s, a, o, c, u),
            h && (this.setObjectGrids(g),
            g.doUpdate && this.updateObjects.push(g))
        }
        ,
        this.disableBySid = function(e) {
            for (var n = 0; n < t.length; ++n)
                if (t[n].sid == e) {
                    this.disableObj(t[n]);
                    break
                }
        }
        ,
        this.removeAllItems = function(e, n) {
            for (var i = 0; i < t.length; ++i)
                t[i].active && t[i].owner && t[i].owner.sid == e && this.disableObj(t[i]);
            n && n.broadcast("13", e)
        }
        ,
        this.fetchSpawnObj = function(e) {
            for (var n = null, i = 0; i < t.length; ++i)
                if ((g = t[i]).active && g.owner && g.owner.sid == e && g.spawnPoint) {
                    n = [g.x, g.y],
                    this.disableObj(g),
                    h.broadcast("12", g.sid),
                    g.owner && g.owner.changeItemCount(g.group.id, -1);
                    break
                }
            return n
        }
        ,
        this.checkItemLocation = function(e, n, i, r, s, a, l) {
            for (var h = 0; h < t.length; ++h) {
                var u = t[h].blocker ? t[h].blocker : t[h].getScale(r, t[h].isItem);
                if (t[h].active && o.getDistance(e, n, t[h].x, t[h].y) < i + u)
                    return !1
            }
            return !(!a && 18 != s && n >= c.mapScale / 2 - c.riverWidth / 2 && n <= c.mapScale / 2 + c.riverWidth / 2)
        }
        ,
        this.addProjectile = function(e, t, n, i, r) {
            for (var s, a = items.projectiles[r], c = 0; c < projectiles.length; ++c)
                if (!projectiles[c].active) {
                    s = projectiles[c];
                    break
                }
            s || (s = new Projectile(l,o),
            projectiles.push(s)),
            s.init(r, e, t, n, a.speed, i, a.scale)
        }
        ,
        this.checkCollision = function(e, t, n) {
            n = n || 1;
            var l = e.x - t.x
              , h = e.y - t.y
              , u = e.scale + t.scale;
            if (i(l) <= u || i(h) <= u) {
                u = e.scale + (t.getScale ? t.getScale() : t.scale);
                var f = a(l * l + h * h) - u;
                if (f <= 0) {
                    if (t.ignoreCollision)
                        !t.trap || e.noTrap || t.owner == e || t.owner && t.owner.team && t.owner.team == e.team ? t.boostSpeed ? (e.xVel += n * t.boostSpeed * (t.weightM || 1) * r(t.dir),
                        e.yVel += n * t.boostSpeed * (t.weightM || 1) * s(t.dir)) : t.healCol ? e.healCol = t.healCol : t.teleport && (e.x = o.randInt(0, c.mapScale),
                        e.y = o.randInt(0, c.mapScale)) : (e.lockMove = !0,
                        t.hideFromEnemy = !1);
                    else {
                        var d = o.getDirection(e.x, e.y, t.x, t.y);
                        if (o.getDistance(e.x, e.y, t.x, t.y),
                        t.isPlayer ? (f = -1 * f / 2,
                        e.x += f * r(d),
                        e.y += f * s(d),
                        t.x -= f * r(d),
                        t.y -= f * s(d)) : (e.x = t.x + u * r(d),
                        e.y = t.y + u * s(d),
                        e.xVel *= .75,
                        e.yVel *= .75),
                        t.dmg && t.owner != e && (!t.owner || !t.owner.team || t.owner.team != e.team)) {
                            e.changeHealth(-t.dmg, t.owner, t);
                            var p = 1.5 * (t.weightM || 1);
                            e.xVel += p * r(d),
                            e.yVel += p * s(d),
                            !t.pDmg || e.skin && e.skin.poisonRes || (e.dmgOverTime.dmg = t.pDmg,
                            e.dmgOverTime.time = 5,
                            e.dmgOverTime.doer = t.owner),
                            e.colDmg && t.health && (t.changeHealth(-e.colDmg) && this.disableObj(t),
                            this.hitObj(t, o.getDirection(e.x, e.y, t.x, t.y)))
                        }
                    }
                    return t.zIndex > e.zIndex && (e.zIndex = t.zIndex),
                    !0
                }
            }
            return !1
        }
    }
}
, function(e, t, n) {
    var i = new (n(49));
    i.addWords("jew", "black", "baby", "child", "white", "porn", "pedo", "trump", "clinton", "hitler", "nazi", "gay", "pride", "sex", "pleasure", "touch", "poo", "kids", "rape", "white power", "nigga", "nig nog", "doggy", "rapist", "boner", "nigger", "nigg", "finger", "nogger", "nagger", "nig", "fag", "gai", "pole", "stripper", "penis", "vagina", "pussy", "nazi", "hitler", "stalin", "burn", "chamber", "cock", "peen", "dick", "spick", "nieger", "die", "satan", "n|ig", "nlg", "cunt", "c0ck", "fag", "lick", "condom", "anal", "shit", "phile", "little", "kids", "free KR", "tiny", "sidney", "ass", "kill", ".io", "(dot)", "[dot]", "mini", "whiore", "whore", "faggot", "github", "1337", "666", "satan", "senpa", "discord", "d1scord", "mistik", ".io", "senpa.io", "sidney", "sid", "senpaio", "vries", "asa");
    var r = Math.abs
      , s = Math.cos
      , a = Math.sin
      , o = Math.pow
      , c = Math.sqrt;
    e.exports = function(e, t, n, l, h, u, f, d, p, g, m, y, k, v) {
        this.id = e,
        this.sid = t,
        this.tmpScore = 0,
        this.team = null,
        this.skinIndex = 0,
        this.tailIndex = 0,
        this.hitTime = 0,
        this.tails = {};
        for (var w = 0; w < m.length; ++w)
            m[w].price <= 0 && (this.tails[m[w].id] = 1);
        for (this.skins = {},
        w = 0; w < g.length; ++w)
            g[w].price <= 0 && (this.skins[g[w].id] = 1);
        this.points = 0,
        this.dt = 0,
        this.hidden = !1,
        this.itemCounts = {},
        this.isPlayer = !0,
        this.pps = 0,
        this.moveDir = void 0,
        this.skinRot = 0,
        this.lastPing = 0,
        this.iconIndex = 0,
        this.skinColor = 0,
        this.spawn = function(e) {
            this.active = !0,
            this.alive = !0,
            this.lockMove = !1,
            this.lockDir = !1,
            this.minimapCounter = 0,
            this.chatCountdown = 0,
            this.shameCount = 0,
            this.shameTimer = 0,
            this.sentTo = {},
            this.gathering = 0,
            this.autoGather = 0,
            this.animTime = 0,
            this.animSpeed = 0,
            this.mouseState = 0,
            this.buildIndex = -1,
            this.weaponIndex = 0,
            this.dmgOverTime = {},
            this.noMovTimer = 0,
            this.maxXP = 300,
            this.XP = 0,
            this.age = 1,
            this.kills = 0,
            this.upgrAge = 2,
            this.upgradePoints = 0,
            this.x = 0,
            this.y = 0,
            this.zIndex = 0,
            this.xVel = 0,
            this.yVel = 0,
            this.slowMult = 1,
            this.dir = 0,
            this.dirPlus = 0,
            this.targetDir = 0,
            this.targetAngle = 0,
            this.maxHealth = 100,
            this.health = this.maxHealth,
            this.scale = n.playerScale,
            this.speed = n.playerSpeed,
            this.resetMoveDir(),
            this.resetResources(e),
            this.items = [0, 3, 6, 10],
            this.weapons = [0],
            this.shootCount = 0,
            this.weaponXP = [],
            this.reloads = {},
            this.primary = {reload: 1, id: 0, variant: 0, dmg: 25},
            this.secondary = {reload: 1, id: null, variant: 0, dmg: 50},
            this.turret = 1,
            this.bullTick = 0;
        }
        ,
        this.resetMoveDir = function() {
            this.moveDir = void 0
        }
        ,
        this.resetResources = function(e) {
            for (var t = 0; t < n.resourceTypes.length; ++t)
                this[n.resourceTypes[t]] = e ? 100 : 0
        }
        ,
        this.addItem = function(e) {
            var t = p.list[e];
            if (t) {
                for (var n = 0; n < this.items.length; ++n)
                    if (p.list[this.items[n]].group == t.group)
                        return this.buildIndex == this.items[n] && (this.buildIndex = e),
                        this.items[n] = e,
                        !0;
                return this.items.push(e),
                !0
            }
            return !1
        }
        ,
        this.setUserData = function(e) {
            if (e) {
                this.name = "unknown";
                var t = e.name + ""
                  , r = !1
                  , s = (t = (t = (t = (t = t.slice(0, n.maxNameLength)).replace(/[^\w:\(\)\/? -]+/gim, " ")).replace(/[^\x00-\x7F]/g, " ")).trim()).toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
                for (var a of i.list)
                    if (-1 != s.indexOf(a)) {
                        r = !0;
                        break
                    }
                t.length > 0 && !r && (this.name = t),
                this.skinColor = 0,
                n.skinColors[e.skin] && (this.skinColor = e.skin)
            }
        }
        ,
        this.getData = function() {
            return [this.id, this.sid, this.name, l.fixTo(this.x, 2), l.fixTo(this.y, 2), l.fixTo(this.dir, 3), this.health, this.maxHealth, this.scale, this.skinColor]
        }
        ,
        this.setData = function(e) {
            this.id = e[0],
            this.sid = e[1],
            this.name = e[2],
            this.x = e[3],
            this.y = e[4],
            this.dir = e[5],
            this.health = e[6],
            this.maxHealth = e[7],
            this.scale = e[8],
            this.skinColor = e[9]
        }
        ;
        var b = 0;
        this.update = function(e) {
            if (this.alive) {
                if(this.buildIndex == -1) {
                    if(this.weaponIndex < 9) {
                        if(this.primary.id == this.weaponIndex) {
                            this.primary.variant = this.weaponVariant;
                            this.primary.dmg = Math.round(window.weapons[this.weaponIndex].dmg * window.variantMulti(this.weaponVariant));
                            this.primary.reload = Math.min(this.primary.reload + 111/(window.weapons[this.weaponIndex].speed * (this.primary.fastReload == true ? .78 : 1)), 1);
                            if(this.primary.fastReload == true && this.primary.reload == 1) {
                                this.primary.fastReload = false;
                            }
                        }else {
                            this.primary.id = this.weaponIndex;
                            this.secondary.reload = 1;
                            this.secondary.id = 15;
                            this.secondary.variant = 0;
                            this.secondary.dmg = 50;
                        }
                    }else {
                        if(this.secondary.id == this.weaponIndex) {
                            this.secondary.variant = this.weaponVariant;
                            if(this.weaponIndex == 10) {
                                this.secondary.dmg = Math.round(window.weapons[this.weaponIndex].dmg * window.variantMulti(this.weaponVariant));
                            }else this.secondary.dmg = window.secondaryDmg(this.weaponIndex);
                            this.secondary.reload = Math.min(this.secondary.reload + 111/(window.weapons[this.weaponIndex].speed * (this.secondary.fastReload == true ? .78 : 1)), 1);
                            if(this.secondary.fastReload == true && this.secondary.reload == 1) {
                                this.secondary.fastReload = false;
                            }
                        }else {
                            this.secondary.id = this.weaponIndex;
                            if(!this.primary.id) {
                                this.primary.id = 5;
                                this.primary.variant = 3;
                                this.primary.reload = 1;
                                this.primary.dmg = 53;
                            }
                        }
                    }
                }
                this.turret = Math.min(this.turret + 0.0444, 1);
            }
        }
        ,
        this.addWeaponXP = function(e) {
            this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0),
            this.weaponXP[this.weaponIndex] += e
        }
        ,
        this.earnXP = function(e) {
            this.age < n.maxAge && (this.XP += e,
            this.XP >= this.maxXP ? (this.age < n.maxAge ? (this.age++,
            this.XP = 0,
            this.maxXP *= 1.2) : this.XP = this.maxXP,
            this.upgradePoints++,
            y.send(this.id, "16", this.upgradePoints, this.upgrAge),
            y.send(this.id, "15", this.XP, l.fixTo(this.maxXP, 1), this.age)) : y.send(this.id, "15", this.XP))
        }
        ,
        this.changeHealth = function(e, t) {
            if (e > 0 && this.health >= this.maxHealth)
                return !1;
            e < 0 && this.skin && (e *= this.skin.dmgMult || 1),
            e < 0 && this.tail && (e *= this.tail.dmgMult || 1),
            e < 0 && (this.hitTime = Date.now()),
            this.health += e,
            this.health > this.maxHealth && (e -= this.health - this.maxHealth,
            this.health = this.maxHealth),
            this.health <= 0 && this.kill(t);
            for (var n = 0; n < f.length; ++n)
                this.sentTo[f[n].id] && y.send(f[n].id, "h", this.sid, Math.round(this.health));
            return !t || !t.canSee(this) || t == this && e < 0 || y.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1),
            !0
        }
        ,
        this.kill = function(e) {
            e && e.alive && (e.kills++,
            e.skin && e.skin.goldSteal ? k(e, Math.round(this.points / 2)) : k(e, Math.round(100 * this.age * (e.skin && e.skin.kScrM ? e.skin.kScrM : 1))),
            y.send(e.id, "9", "kills", e.kills, 1)),
            this.alive = !1,
            y.send(this.id, "11"),
            v()
        }
        ,
        this.addResource = function(e, t, i) {
            !i && t > 0 && this.addWeaponXP(t),
            3 == e ? k(this, t, !0) : (this[n.resourceTypes[e]] += t,
            y.send(this.id, "9", n.resourceTypes[e], this[n.resourceTypes[e]], 1))
        }
        ,
        this.changeItemCount = function(e, t) {
            this.itemCounts[e] = this.itemCounts[e] || 0,
            this.itemCounts[e] += t,
            y.send(this.id, "14", e, this.itemCounts[e])
        }
        ,
        this.buildItem = function() {
            if(this.hitTime) {
                let e = tick - this.hitTime;
                this.hitTime = 0;
                if(e < 2) {
                    this.shameCount++;
                }else {
                    this.shameCount = Math.max(0, this.shameCount - 2);
                }
            }
        }
        ,
        this.hasRes = function(e, t) {
            for (var n = 0; n < e.req.length; ) {
                if (this[e.req[n]] < Math.round(e.req[n + 1] * (t || 1)))
                    return !1;
                n += 2
            }
            return !0
        }
        ,
        this.useRes = function(e, t) {
            if (!n.inSandbox)
                for (var i = 0; i < e.req.length; )
                    this.addResource(n.resourceTypes.indexOf(e.req[i]), -Math.round(e.req[i + 1] * (t || 1))),
                    i += 2
        }
        ,
        this.canBuild = function(e) {
            return !!n.inSandbox || !(e.group.limit && this.itemCounts[e.group.id] >= e.group.limit) && this.hasRes(e)
        }
        ,
        this.gather = function() {
            this.noMovTimer = 0,
            this.slowMult -= p.weapons[this.weaponIndex].hitSlow || .3,
            this.slowMult < 0 && (this.slowMult = 0);
            for (var e, t, i, r = n.fetchVariant(this), o = r.poison, c = r.val, h = {}, g = u.getGridArrays(this.x, this.y, p.weapons[this.weaponIndex].range), m = 0; m < g.length; ++m)
                for (var y = 0; y < g[m].length; ++y)
                    if ((t = g[m][y]).active && !t.dontGather && !h[t.sid] && t.visibleToPlayer(this) && l.getDistance(this.x, this.y, t.x, t.y) - t.scale <= p.weapons[this.weaponIndex].range && (e = l.getDirection(t.x, t.y, this.x, this.y),
                    l.getAngleDist(e, this.dir) <= n.gatherAngle)) {
                        if (h[t.sid] = 1,
                        t.health) {
                            if (t.changeHealth(-p.weapons[this.weaponIndex].dmg * c * (p.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
                                for (var k = 0; k < t.req.length; )
                                    this.addResource(n.resourceTypes.indexOf(t.req[k]), t.req[k + 1]),
                                    k += 2;
                                u.disableObj(t)
                            }
                        } else {
                            this.earnXP(4 * p.weapons[this.weaponIndex].gather);
                            var v = p.weapons[this.weaponIndex].gather + (3 == t.type ? 4 : 0);
                            this.skin && this.skin.extraGold && this.addResource(3, 1),
                            this.addResource(t.type, v)
                        }
                        i = !0,
                        u.hitObj(t, e)
                    }
            for (y = 0; y < f.length + d.length; ++y)
                if ((t = f[y] || d[y - f.length]) != this && t.alive && (!t.team || t.team != this.team) && l.getDistance(this.x, this.y, t.x, t.y) - 1.8 * t.scale <= p.weapons[this.weaponIndex].range && (e = l.getDirection(t.x, t.y, this.x, this.y),
                l.getAngleDist(e, this.dir) <= n.gatherAngle)) {
                    var w = p.weapons[this.weaponIndex].steal;
                    w && t.addResource && (w = Math.min(t.points || 0, w),
                    this.addResource(3, w),
                    t.addResource(3, -w));
                    var b = c;
                    null != t.weaponIndex && p.weapons[t.weaponIndex].shield && l.getAngleDist(e + Math.PI, t.dir) <= n.shieldAngle && (b = p.weapons[t.weaponIndex].shield);
                    var x = p.weapons[this.weaponIndex].dmg * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1)
                      , S = .3 * (t.weightM || 1) + (p.weapons[this.weaponIndex].knock || 0);
                    t.xVel += S * s(e),
                    t.yVel += S * a(e),
                    this.skin && this.skin.healD && this.changeHealth(x * b * this.skin.healD, this),
                    this.tail && this.tail.healD && this.changeHealth(x * b * this.tail.healD, this),
                    t.skin && t.skin.dmg && 1 == b && this.changeHealth(-x * t.skin.dmg, t),
                    t.tail && t.tail.dmg && 1 == b && this.changeHealth(-x * t.tail.dmg, t),
                    !(t.dmgOverTime && this.skin && this.skin.poisonDmg) || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = this.skin.poisonDmg,
                    t.dmgOverTime.time = this.skin.poisonTime || 1,
                    t.dmgOverTime.doer = this),
                    !t.dmgOverTime || !o || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = 5,
                    t.dmgOverTime.time = 5,
                    t.dmgOverTime.doer = this),
                    t.skin && t.skin.dmgK && (this.xVel -= t.skin.dmgK * s(e),
                    this.yVel -= t.skin.dmgK * a(e)),
                    t.changeHealth(-x * b, this, this)
                }
            this.sendAnimation(i ? 1 : 0)
        }
        ,
        this.sendAnimation = function(e) {
            for (var t = 0; t < f.length; ++t)
                this.sentTo[f[t].id] && this.canSee(f[t]) && y.send(f[t].id, "7", this.sid, e ? 1 : 0, this.weaponIndex)
        }
        ;
        var x = 0
          , S = 0;
        this.animate = function(e) {
            this.animTime > 0 && (this.animTime -= e,
            this.animTime <= 0 ? (this.animTime = 0,
            this.dirPlus = 0,
            x = 0,
            S = 0) : 0 == S ? (x += e / (this.animSpeed * n.hitReturnRatio),
            this.dirPlus = l.lerp(0, this.targetAngle, Math.min(1, x)),
            x >= 1 && (x = 1,
            S = 1)) : (x -= e / (this.animSpeed * (1 - n.hitReturnRatio)),
            this.dirPlus = l.lerp(0, this.targetAngle, Math.max(0, x))))
        }
        ,
        this.startAnim = function(e, t) {
            this.animTime = this.animSpeed = p.weapons[t].speed,
            this.targetAngle = e ? -n.hitAngle : -Math.PI,
            x = 0,
            S = 0
            if(t > 9) {
                setTimeout(() => {
                    this.secondary.reload = 0;
                    if(this.skinIndex == 20) {
                        this.secondary.fastReload = true;
                    }
                })
            }else {
                setTimeout(() => {
                    this.primary.reload = 0;
                    if(this.skinIndex == 20) {
                        this.primary.fastReload = false;
                    }
                })
            }
        }
        ,
        this.canSee = function(e) {
            if (!e)
                return !1;
            if (e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer)
                return !1;
            var t = r(e.x - this.x) - e.scale
              , i = r(e.y - this.y) - e.scale;
            return t <= n.maxScreenWidth / 2 * 1.3 && i <= n.maxScreenHeight / 2 * 1.3
        }
    }
}
, function(e, t, n) {
    const i = n(50).words
      , r = n(51).array;
    e.exports = class {
        constructor(e={}) {
            Object.assign(this, {
                list: e.emptyList && [] || Array.prototype.concat.apply(i, [r, e.list || []]),
                exclude: e.exclude || [],
                placeHolder: e.placeHolder || "*",
                regex: e.regex || /[^a-zA-Z0-9|\$|\@]|\^/g,
                replaceRegex: e.replaceRegex || /\w/g
            })
        }
        isProfane(e) {
            return this.list.filter(t=>{
                const n = new RegExp(`\\b${t.replace(/(\W)/g, "\\$1")}\\b`,"gi");
                return !this.exclude.includes(t.toLowerCase()) && n.test(e)
            }
            ).length > 0 || !1
        }
        replaceWord(e) {
            return e.replace(this.regex, "").replace(this.replaceRegex, this.placeHolder)
        }
        clean(e) {
            return e.split(/\b/).map(e=>this.isProfane(e) ? this.replaceWord(e) : e).join("")
        }
        addWords() {
            let e = Array.from(arguments);
            this.list.push(...e),
            e.map(e=>e.toLowerCase()).forEach(e=>{
                this.exclude.includes(e) && this.exclude.splice(this.exclude.indexOf(e), 1)
            }
            )
        }
        removeWords() {
            this.exclude.push(...Array.from(arguments).map(e=>e.toLowerCase()))
        }
    }
}
, function(e) {
    e.exports = {
        words: ["ahole", "anus", "ash0le", "ash0les", "asholes", "ass", "Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes", "assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards", "bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches", "Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k", "Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock", "cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap", "cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo", "dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics", "dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz", "faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin", "fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker", "Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k", "God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore", "jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz", "knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian", "Lipshits", "Lipshitz", "masochist", "masokist", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates", "Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker", "Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah", "Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah", "Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt", "nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm", "orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy", "paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak", "Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke", "puuker", "queer", "queers", "queerz", "qweers", "qweerz", "qweir", "recktum", "rectum", "potDmg", "sadist", "scank", "schlong", "screwing", "semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt", "Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey", "skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz", "son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re", "whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit", "arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch", "bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa", "clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass", "fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch", "l3i+ch", "lesbian", "masturbate", "masterbat*", "masterbat3", "motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack", "phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale", "shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs", "teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank", "whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik", "andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*", "breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*", "cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka", "ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo", "fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker", "foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena", "h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui", "injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk", "kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon", "masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie", "mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*", "perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda", "poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule", "puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*", "schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute", "shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic", "spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah"]
    }
}
, function(e, t, n) {
    e.exports = {
        object: n(52),
        array: n(53),
        regex: n(54)
    }
}
, function(e, t) {
    e.exports = {
        "4r5e": 1,
        "5h1t": 1,
        "5hit": 1,
        a55: 1,
        anal: 1,
        anus: 1,
        ar5e: 1,
        arrse: 1,
        arse: 1,
        ass: 1,
        "ass-fucker": 1,
        asses: 1,
        assfucker: 1,
        assfukka: 1,
        asshole: 1,
        assholes: 1,
        asswhole: 1,
        a_s_s: 1,
        "b!tch": 1,
        b00bs: 1,
        b17ch: 1,
        b1tch: 1,
        ballbag: 1,
        balls: 1,
        ballsack: 1,
        bastard: 1,
        beastial: 1,
        beastiality: 1,
        bellend: 1,
        bestial: 1,
        bestiality: 1,
        "bi+ch": 1,
        biatch: 1,
        bitch: 1,
        bitcher: 1,
        bitchers: 1,
        bitches: 1,
        bitchin: 1,
        bitching: 1,
        bloody: 1,
        "blow job": 1,
        blowjob: 1,
        blowjobs: 1,
        boiolas: 1,
        bollock: 1,
        bollok: 1,
        boner: 1,
        boob: 1,
        boobs: 1,
        booobs: 1,
        boooobs: 1,
        booooobs: 1,
        booooooobs: 1,
        breasts: 1,
        buceta: 1,
        bugger: 1,
        bum: 1,
        "bunny fucker": 1,
        butt: 1,
        butthole: 1,
        buttmuch: 1,
        buttplug: 1,
        c0ck: 1,
        c0cksucker: 1,
        "carpet muncher": 1,
        cawk: 1,
        chink: 1,
        cipa: 1,
        cl1t: 1,
        clit: 1,
        clitoris: 1,
        clits: 1,
        cnut: 1,
        cock: 1,
        "cock-sucker": 1,
        cockface: 1,
        cockhead: 1,
        cockmunch: 1,
        cockmuncher: 1,
        cocks: 1,
        cocksuck: 1,
        cocksucked: 1,
        cocksucker: 1,
        cocksucking: 1,
        cocksucks: 1,
        cocksuka: 1,
        cocksukka: 1,
        cok: 1,
        cokmuncher: 1,
        coksucka: 1,
        coon: 1,
        cox: 1,
        crap: 1,
        cum: 1,
        cummer: 1,
        cumming: 1,
        cums: 1,
        cumshot: 1,
        cunilingus: 1,
        cunillingus: 1,
        cunnilingus: 1,
        cunt: 1,
        cuntlick: 1,
        cuntlicker: 1,
        cuntlicking: 1,
        cunts: 1,
        cyalis: 1,
        cyberfuc: 1,
        cyberfuck: 1,
        cyberfucked: 1,
        cyberfucker: 1,
        cyberfuckers: 1,
        cyberfucking: 1,
        d1ck: 1,
        damn: 1,
        dick: 1,
        dickhead: 1,
        dildo: 1,
        dildos: 1,
        dink: 1,
        dinks: 1,
        dirsa: 1,
        dlck: 1,
        "dog-fucker": 1,
        doggin: 1,
        dogging: 1,
        donkeyribber: 1,
        doosh: 1,
        duche: 1,
        dyke: 1,
        ejaculate: 1,
        ejaculated: 1,
        ejaculates: 1,
        ejaculating: 1,
        ejaculatings: 1,
        ejaculation: 1,
        ejakulate: 1,
        "f u c k": 1,
        "f u c k e r": 1,
        f4nny: 1,
        fag: 1,
        fagging: 1,
        faggitt: 1,
        faggot: 1,
        faggs: 1,
        fagot: 1,
        fagots: 1,
        fags: 1,
        fanny: 1,
        fannyflaps: 1,
        fannyfucker: 1,
        fanyy: 1,
        fatass: 1,
        fcuk: 1,
        fcuker: 1,
        fcuking: 1,
        feck: 1,
        fecker: 1,
        felching: 1,
        fellate: 1,
        fellatio: 1,
        fingerfuck: 1,
        fingerfucked: 1,
        fingerfucker: 1,
        fingerfuckers: 1,
        fingerfucking: 1,
        fingerfucks: 1,
        fistfuck: 1,
        fistfucked: 1,
        fistfucker: 1,
        fistfuckers: 1,
        fistfucking: 1,
        fistfuckings: 1,
        fistfucks: 1,
        flange: 1,
        fook: 1,
        fooker: 1,
        fuck: 1,
        fucka: 1,
        fucked: 1,
        fucker: 1,
        fuckers: 1,
        fuckhead: 1,
        fuckheads: 1,
        fuckin: 1,
        fucking: 1,
        fuckings: 1,
        fuckingshitmotherfucker: 1,
        fuckme: 1,
        fucks: 1,
        fuckwhit: 1,
        fuckwit: 1,
        "fudge packer": 1,
        fudgepacker: 1,
        fuk: 1,
        fuker: 1,
        fukker: 1,
        fukkin: 1,
        fuks: 1,
        fukwhit: 1,
        fukwit: 1,
        fux: 1,
        fux0r: 1,
        f_u_c_k: 1,
        gangbang: 1,
        gangbanged: 1,
        gangbangs: 1,
        gaylord: 1,
        gaysex: 1,
        goatse: 1,
        God: 1,
        "god-dam": 1,
        "god-damned": 1,
        goddamn: 1,
        goddamned: 1,
        hardcoresex: 1,
        hell: 1,
        heshe: 1,
        hoar: 1,
        hoare: 1,
        hoer: 1,
        homo: 1,
        hore: 1,
        horniest: 1,
        horny: 1,
        hotsex: 1,
        "jack-off": 1,
        jackoff: 1,
        jap: 1,
        "jerk-off": 1,
        jism: 1,
        jiz: 1,
        jizm: 1,
        jizz: 1,
        kawk: 1,
        knob: 1,
        knobead: 1,
        knobed: 1,
        knobend: 1,
        knobhead: 1,
        knobjocky: 1,
        knobjokey: 1,
        kock: 1,
        kondum: 1,
        kondums: 1,
        kum: 1,
        kummer: 1,
        kumming: 1,
        kums: 1,
        kunilingus: 1,
        "l3i+ch": 1,
        l3itch: 1,
        labia: 1,
        lust: 1,
        lusting: 1,
        m0f0: 1,
        m0fo: 1,
        m45terbate: 1,
        ma5terb8: 1,
        ma5terbate: 1,
        masochist: 1,
        "master-bate": 1,
        masterb8: 1,
        "masterbat*": 1,
        masterbat3: 1,
        masterbate: 1,
        masterbation: 1,
        masterbations: 1,
        masturbate: 1,
        "mo-fo": 1,
        mof0: 1,
        mofo: 1,
        mothafuck: 1,
        mothafucka: 1,
        mothafuckas: 1,
        mothafuckaz: 1,
        mothafucked: 1,
        mothafucker: 1,
        mothafuckers: 1,
        mothafuckin: 1,
        mothafucking: 1,
        mothafuckings: 1,
        mothafucks: 1,
        "mother fucker": 1,
        motherfuck: 1,
        motherfucked: 1,
        motherfucker: 1,
        motherfuckers: 1,
        motherfuckin: 1,
        motherfucking: 1,
        motherfuckings: 1,
        motherfuckka: 1,
        motherfucks: 1,
        muff: 1,
        mutha: 1,
        muthafecker: 1,
        muthafuckker: 1,
        muther: 1,
        mutherfucker: 1,
        n1gga: 1,
        n1gger: 1,
        nazi: 1,
        nigg3r: 1,
        nigg4h: 1,
        nigga: 1,
        niggah: 1,
        niggas: 1,
        niggaz: 1,
        nigger: 1,
        niggers: 1,
        nob: 1,
        "nob jokey": 1,
        nobhead: 1,
        nobjocky: 1,
        nobjokey: 1,
        numbnuts: 1,
        nutsack: 1,
        orgasim: 1,
        orgasims: 1,
        orgasm: 1,
        orgasms: 1,
        p0rn: 1,
        pawn: 1,
        pecker: 1,
        penis: 1,
        penisfucker: 1,
        phonesex: 1,
        phuck: 1,
        phuk: 1,
        phuked: 1,
        phuking: 1,
        phukked: 1,
        phukking: 1,
        phuks: 1,
        phuq: 1,
        pigfucker: 1,
        pimpis: 1,
        piss: 1,
        pissed: 1,
        pisser: 1,
        pissers: 1,
        pisses: 1,
        pissflaps: 1,
        pissin: 1,
        pissing: 1,
        pissoff: 1,
        poop: 1,
        porn: 1,
        porno: 1,
        pornography: 1,
        pornos: 1,
        prick: 1,
        pricks: 1,
        pron: 1,
        pube: 1,
        pusse: 1,
        pussi: 1,
        pussies: 1,
        pussy: 1,
        pussys: 1,
        rectum: 1,
        potDmg: 1,
        rimjaw: 1,
        rimming: 1,
        "s hit": 1,
        "s.o.b.": 1,
        sadist: 1,
        schlong: 1,
        screwing: 1,
        scroat: 1,
        scrote: 1,
        scrotum: 1,
        semen: 1,
        sex: 1,
        "sh!+": 1,
        "sh!t": 1,
        sh1t: 1,
        shag: 1,
        shagger: 1,
        shaggin: 1,
        shagging: 1,
        shemale: 1,
        "shi+": 1,
        shit: 1,
        shitdick: 1,
        shite: 1,
        shited: 1,
        shitey: 1,
        shitfuck: 1,
        shitfull: 1,
        shithead: 1,
        shiting: 1,
        shitings: 1,
        shits: 1,
        shitted: 1,
        shitter: 1,
        shitters: 1,
        shitting: 1,
        shittings: 1,
        shitty: 1,
        skank: 1,
        slut: 1,
        sluts: 1,
        smegma: 1,
        smut: 1,
        snatch: 1,
        "son-of-a-bitch": 1,
        spac: 1,
        spunk: 1,
        s_h_i_t: 1,
        t1tt1e5: 1,
        t1tties: 1,
        teets: 1,
        teez: 1,
        testical: 1,
        testicle: 1,
        tit: 1,
        titfuck: 1,
        tits: 1,
        titt: 1,
        tittie5: 1,
        tittiefucker: 1,
        titties: 1,
        tittyfuck: 1,
        tittywank: 1,
        titwank: 1,
        tosser: 1,
        turd: 1,
        tw4t: 1,
        twat: 1,
        twathead: 1,
        twatty: 1,
        twunt: 1,
        twunter: 1,
        v14gra: 1,
        v1gra: 1,
        vagina: 1,
        viagra: 1,
        vulva: 1,
        w00se: 1,
        wang: 1,
        wank: 1,
        wanker: 1,
        wanky: 1,
        whoar: 1,
        whore: 1,
        willies: 1,
        willy: 1,
        xrated: 1,
        xxx: 1
    }
}
, function(e, t) {
    e.exports = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "potDmg", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"]
}
, function(e, t) {
    e.exports = /\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|potDmg|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi
}
, function(e, t) {
    e.exports.hats = [{
        id: 45,
        name: "Shame!",
        price: 0,
        scale: 120,
        desc: "hacks are for losers"
    }, {
        id: 51,
        name: "Moo Cap",
        price: 0,
        scale: 120,
        desc: "coolest mooer around"
    }, {
        id: 50,
        name: "Apple Cap",
        price: 0,
        scale: 120,
        desc: "apple farms remembers"
    }, {
        id: 28,
        name: "Moo Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 29,
        name: "Pig Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 30,
        name: "Fluff Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 36,
        name: "Pandou Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 37,
        name: "Bear Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 38,
        name: "Monkey Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 44,
        name: "Polar Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 35,
        name: "Fez Hat",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 42,
        name: "Enigma Hat",
        price: 0,
        scale: 120,
        desc: "join the enigma army"
    }, {
        id: 43,
        name: "Blitz Hat",
        price: 0,
        scale: 120,
        desc: "hey everybody i'm blitz"
    }, {
        id: 49,
        name: "Bob XIII Hat",
        price: 0,
        scale: 120,
        desc: "like and subscribe"
    }, {
        id: 57,
        name: "Pumpkin",
        price: 50,
        scale: 120,
        desc: "Spooooky"
    }, {
        id: 8,
        name: "Bummle Hat",
        price: 100,
        scale: 120,
        desc: "no effect"
    }, {
        id: 2,
        name: "Straw Hat",
        price: 500,
        scale: 120,
        desc: "no effect"
    }, {
        id: 15,
        name: "Winter Cap",
        price: 600,
        scale: 120,
        desc: "allows you to move at normal speed in snow",
        coldM: 1
    }, {
        id: 5,
        name: "Cowboy Hat",
        price: 1e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 4,
        name: "Ranger Hat",
        price: 2e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 18,
        name: "Explorer Hat",
        price: 2e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 31,
        name: "Flipper Hat",
        price: 2500,
        scale: 120,
        desc: "have more control while in water",
        watrImm: !0
    }, {
        id: 1,
        name: "Marksman Cap",
        price: 3e3,
        scale: 120,
        desc: "increases arrow speed and range",
        aMlt: 1.3
    }, {
        id: 10,
        name: "Bush Gear",
        price: 3e3,
        scale: 160,
        desc: "allows you to disguise yourself as a bush"
    }, {
        id: 48,
        name: "Halo",
        price: 3e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 6,
        name: "Soldier Helmet",
        price: 4e3,
        scale: 120,
        desc: "reduces damage taken but slows movement",
        spdMult: .94,
        dmgMult: .75
    }, {
        id: 23,
        name: "Anti Venom Gear",
        price: 4e3,
        scale: 120,
        desc: "makes you immune to poison",
        poisonRes: 1
    }, {
        id: 13,
        name: "Medic Gear",
        price: 5e3,
        scale: 110,
        desc: "slowly regenerates health over time",
        healthRegen: 3
    }, {
        id: 9,
        name: "Miners Helmet",
        price: 5e3,
        scale: 120,
        desc: "earn 1 extra gold per resource",
        extraGold: 1
    }, {
        id: 32,
        name: "Musketeer Hat",
        price: 5e3,
        scale: 120,
        desc: "reduces cost of projectiles",
        projCost: .5
    }, {
        id: 7,
        name: "Bull Helmet",
        price: 6e3,
        scale: 120,
        desc: "increases damage done but drains health",
        healthRegen: -5,
        dmgMultO: 1.5,
        spdMult: .96
    }, {
        id: 22,
        name: "Emp Helmet",
        price: 6e3,
        scale: 120,
        desc: "Turrets won't attack but you move slower",
        antiTurret: 1,
        spdMult: .7
    }, {
        id: 12,
        name: "Booster Hat",
        price: 6e3,
        scale: 120,
        desc: "increases your movement speed",
        spdMult: 1.16
    }, {
        id: 26,
        name: "Barbarian Armor",
        price: 8e3,
        scale: 120,
        desc: "knocks back enemies that attack you",
        dmgK: .6
    }, {
        id: 21,
        name: "Plague Mask",
        price: 1e4,
        scale: 120,
        desc: "melee heals deal poison damage",
        poisonDmg: 5,
        poisonTime: 6
    }, {
        id: 46,
        name: "Bull Mask",
        price: 1e4,
        scale: 120,
        desc: "bulls won't target you unless you attack them",
        bullRepel: 1
    }, {
        id: 14,
        name: "Windmill Hat",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "generates points while worn",
        pps: 1.5
    }, {
        id: 11,
        name: "Spike Gear",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "deal damage to players that damage you",
        dmg: .45
    }, {
        id: 53,
        name: "Turret Gear",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "you become a walking turret",
        turret: {
            proj: 1,
            range: 700,
            rate: 2500
        },
        spdMult: .7
    }, {
        id: 20,
        name: "Samurai Armor",
        price: 12e3,
        scale: 120,
        desc: "increased attack speed and fire rate",
        atkSpd: .78
    }, {
        id: 58,
        name: "Dark Knight",
        price: 12e3,
        scale: 120,
        desc: "restores health when you deal damage",
        healD: .4
    }, {
        id: 27,
        name: "Scavenger Gear",
        price: 15e3,
        scale: 120,
        desc: "earn double points for each kill",
        kScrM: 2
    }, {
        id: 40,
        name: "Tank Gear",
        price: 15e3,
        scale: 120,
        desc: "increased damage to buildings but slower movement",
        spdMult: .3,
        bDmg: 3.3
    }, {
        id: 52,
        name: "Thief Gear",
        price: 15e3,
        scale: 120,
        desc: "steal half of a players gold when you kill them",
        goldSteal: .5
    }, {
        id: 55,
        name: "Bloodthirster",
        price: 2e4,
        scale: 120,
        desc: "Restore Health when dealing damage. And increased damage",
        healD: .25,
        dmgMultO: 1.2
    }, {
        id: 56,
        name: "Assassin Gear",
        price: 2e4,
        scale: 120,
        desc: "Go invisible when not moving. Can't eat. Increased speed",
        noEat: !0,
        spdMult: 1.1,
        invisTimer: 1e3
    }],
    e.exports.accessories = [{
        id: 12,
        name: "Snowball",
        price: 1e3,
        scale: 105,
        xOff: 18,
        desc: "no effect"
    }, {
        id: 9,
        name: "Tree Cape",
        price: 1e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 10,
        name: "Stone Cape",
        price: 1e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 3,
        name: "Cookie Cape",
        price: 1500,
        scale: 90,
        desc: "no effect"
    }, {
        id: 8,
        name: "Cow Cape",
        price: 2e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 11,
        name: "Monkey Tail",
        price: 2e3,
        scale: 97,
        xOff: 25,
        desc: "Super speed but reduced damage",
        spdMult: 1.35,
        dmgMultO: .2
    }, {
        id: 17,
        name: "Apple Basket",
        price: 3e3,
        scale: 80,
        xOff: 12,
        desc: "slowly regenerates health over time",
        healthRegen: 1
    }, {
        id: 6,
        name: "Winter Cape",
        price: 3e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 4,
        name: "Skull Cape",
        price: 4e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 5,
        name: "Dash Cape",
        price: 5e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 2,
        name: "Dragon Cape",
        price: 6e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 1,
        name: "Super Cape",
        price: 8e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 7,
        name: "Troll Cape",
        price: 8e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 14,
        name: "Thorns",
        price: 1e4,
        scale: 115,
        xOff: 20,
        desc: "no effect"
    }, {
        id: 15,
        name: "Blockades",
        price: 1e4,
        scale: 95,
        xOff: 15,
        desc: "no effect"
    }, {
        id: 20,
        name: "Devils Tail",
        price: 1e4,
        scale: 95,
        xOff: 20,
        desc: "no effect"
    }, {
        id: 16,
        name: "Sawblade",
        price: 12e3,
        scale: 90,
        spin: !0,
        xOff: 0,
        desc: "deal damage to players that damage you",
        dmg: .15
    }, {
        id: 13,
        name: "Angel Wings",
        price: 15e3,
        scale: 138,
        xOff: 22,
        desc: "slowly regenerates health over time",
        healthRegen: 3
    }, {
        id: 19,
        name: "Shadow Wings",
        price: 15e3,
        scale: 138,
        xOff: 22,
        desc: "increased movement speed",
        spdMult: 1.1
    }, {
        id: 18,
        name: "Blood Wings",
        price: 2e4,
        scale: 178,
        xOff: 26,
        desc: "restores health when you deal damage",
        healD: .2
    }, {
        id: 21,
        name: "Corrupt X Wings",
        price: 2e4,
        scale: 178,
        xOff: 26,
        desc: "deal damage to players that damage you",
        dmg: .25
    }]
}
, function(e, t) {
    e.exports = function(e, t, n, i, r, s, a) {
        this.init = function(e, t, n, i, r, s, o, c, l) {
            this.active = !0,
            this.indx = e,
            this.x = t,
            this.y = n,
            this.dir = i,
            this.skipMov = !0,
            this.speed = r,
            this.dmg = s,
            this.scale = c,
            this.range = o,
            this.owner = l,
            a && (this.sentTo = {})
        }
        ;
        var o, c = [];
        this.update = function(l) {
            if (this.active) {
                var h, u = this.speed * l;
                if (this.skipMov ? this.skipMov = !1 : (this.x += u * Math.cos(this.dir),
                this.y += u * Math.sin(this.dir),
                this.range -= u,
                this.range <= 0 && (this.x += this.range * Math.cos(this.dir),
                this.y += this.range * Math.sin(this.dir),
                u = 1,
                this.range = 0,
                this.active = !1)),
                a) {
                    for (var f = 0; f < e.length; ++f)
                        !this.sentTo[e[f].id] && e[f].canSee(this) && (this.sentTo[e[f].id] = 1,
                        a.send(e[f].id, "18", s.fixTo(this.x, 1), s.fixTo(this.y, 1), s.fixTo(this.dir, 2), s.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
                    for (c.length = 0,
                    f = 0; f < e.length + t.length; ++f)
                        !(o = e[f] || t[f - e.length]).alive || o == this.owner || this.owner.team && o.team == this.owner.team || s.lineInRect(o.x - o.scale, o.y - o.scale, o.x + o.scale, o.y + o.scale, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && c.push(o);
                    for (var d = n.getGridArrays(this.x, this.y, this.scale), p = 0; p < d.length; ++p)
                        for (var g = 0; g < d[p].length; ++g)
                            h = (o = d[p][g]).getScale(),
                            o.active && this.ignoreObj != o.sid && this.layer <= o.layer && c.indexOf(o) < 0 && !o.ignoreCollision && s.lineInRect(o.x - h, o.y - h, o.x + h, o.y + h, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && c.push(o);
                    if (c.length > 0) {
                        var m = null
                          , y = null
                          , k = null;
                        for (f = 0; f < c.length; ++f)
                            k = s.getDistance(this.x, this.y, c[f].x, c[f].y),
                            (null == y || k < y) && (y = k,
                            m = c[f]);
                        if (m.isPlayer || m.isAI) {
                            var v = .3 * (m.weightM || 1);
                            m.xVel += v * Math.cos(this.dir),
                            m.yVel += v * Math.sin(this.dir),
                            null != m.weaponIndex && i.weapons[m.weaponIndex].shield && s.getAngleDist(this.dir + Math.PI, m.dir) <= r.shieldAngle || m.changeHealth(-this.dmg, this.owner, this.owner)
                        } else
                            for (m.projDmg && m.health && m.changeHealth(-this.dmg) && n.disableObj(m),
                            f = 0; f < e.length; ++f)
                                e[f].active && (m.sentTo[e[f].id] && (m.active ? e[f].canSee(m) && a.send(e[f].id, "8", s.fixTo(this.dir, 2), m.sid) : a.send(e[f].id, "12", m.sid)),
                                m.active || m.owner != e[f] || e[f].changeItemCount(m.group.id, -1));
                        for (this.active = !1,
                        f = 0; f < e.length; ++f)
                            this.sentTo[e[f].id] && a.send(e[f].id, "19", this.sid, s.fixTo(y, 1))
                    }
                }
            }
        }
    }
}
, function(e, t) {
    e.exports = function(e, t, n, i, r, s, a, o, c) {
        this.addProjectile = function(l, h, u, f, d, p, g, m, y) {
            for (var k, v = s.projectiles[p], w = 0; w < t.length; ++w)
                if (!t[w].active) {
                    k = t[w];
                    break
                }
            return k || ((k = new e(n,i,r,s,a,o,c)).sid = t.length,
            t.push(k)),
            k.init(p, l, h, u, d, v.dmg, f, v.scale, g),
            k.ignoreObj = m,
            k.layer = y || v.layer,
            k.src = v.src,
            k
        }
    }
}
, function(e, t) {
    e.exports.obj = function(e, t) {
        var n;
        this.sounds = [],
        this.active = !0,
        this.play = function(t, i, r) {
            i && this.active && ((n = this.sounds[t]) || (n = new Howl({
                src: ".././sound/" + t + ".mp3"
            }),
            this.sounds[t] = n),
            r && n.isPlaying || (n.isPlaying = !0,
            n.play(),
            n.volume((i || 1) * e.volumeMult),
            n.loop(r)))
        }
        ,
        this.toggleMute = function(e, t) {
            (n = this.sounds[e]) && n.mute(t)
        }
        ,
        this.stop = function(e) {
            (n = this.sounds[e]) && (n.stop(),
            n.isPlaying = !1)
        }
    }
}
, function(e, t, n) {
    var i = n(60)
      , r = n(67);
    function s(e, t, n, i, r) {
        "localhost" == location.hostname && (window.location.hostname = "127.0.0.1"),
        this.debugLog = !1,
        this.baseUrl = e,
        this.lobbySize = n,
        this.devPort = t,
        this.lobbySpread = i,
        this.rawIPs = !!r,
        this.server = void 0,
        this.gameIndex = void 0,
        this.callback = void 0,
        this.errorCallback = void 0,
        this.processServers(vultr.servers)
    }
    s.prototype.regionInfo = {
        0: {
            name: "Local",
            latitude: 0,
            longitude: 0
        },
        "vultr:1": {
            name: "New Jersey",
            latitude: 40.1393329,
            longitude: -75.8521818
        },
        "vultr:2": {
            name: "Chicago",
            latitude: 41.8339037,
            longitude: -87.872238
        },
        "vultr:3": {
            name: "Dallas",
            latitude: 32.8208751,
            longitude: -96.8714229
        },
        "vultr:4": {
            name: "Seattle",
            latitude: 47.6149942,
            longitude: -122.4759879
        },
        "vultr:5": {
            name: "Los Angeles",
            latitude: 34.0207504,
            longitude: -118.691914
        },
        "vultr:6": {
            name: "Atlanta",
            latitude: 33.7676334,
            longitude: -84.5610332
        },
        "vultr:7": {
            name: "Amsterdam",
            latitude: 52.3745287,
            longitude: 4.7581878
        },
        "vultr:8": {
            name: "London",
            latitude: 51.5283063,
            longitude: -.382486
        },
        "vultr:9": {
            name: "Frankfurt",
            latitude: 50.1211273,
            longitude: 8.496137
        },
        "vultr:12": {
            name: "Silicon Valley",
            latitude: 37.4024714,
            longitude: -122.3219752
        },
        "vultr:19": {
            name: "Sydney",
            latitude: -33.8479715,
            longitude: 150.651084
        },
        "vultr:24": {
            name: "Paris",
            latitude: 48.8588376,
            longitude: 2.2773454
        },
        "vultr:25": {
            name: "Tokyo",
            latitude: 35.6732615,
            longitude: 139.569959
        },
        "vultr:39": {
            name: "Miami",
            latitude: 25.7823071,
            longitude: -80.3012156
        },
        "vultr:40": {
            name: "Singapore",
            latitude: 1.3147268,
            longitude: 103.7065876
        }
    },
    s.prototype.start = function(e, t) {
        this.callback = e,
        this.errorCallback = t;
        var n = this.parseServerQuery();
        n ? (this.log("Found server in query."),
        this.password = n[3],
        this.connect(n[0], n[1], n[2])) : (this.log("Pinging servers..."),
        this.pingServers())
    }
    ,
    s.prototype.parseServerQuery = function() {
        var e = i.parse(location.href, !0)
          , t = e.query.server;
        if ("string" == typeof t) {
            var n = t.split(":");
            if (3 == n.length) {
                var r = n[0]
                  , s = parseInt(n[1])
                  , a = parseInt(n[2]);
                return "0" == r || r.startsWith("vultr:") || (r = "vultr:" + r),
                [r, s, a, e.query.password]
            }
            this.errorCallback("Invalid number of server parameters in " + t)
        }
    }
    ,
    s.prototype.findServer = function(e, t) {
        var n = this.servers[e];
        if (Array.isArray(n)) {
            for (var i = 0; i < n.length; i++) {
                var r = n[i];
                if (r.index == t)
                    return r
            }
            console.warn("Could not find server in region " + e + " with index " + t + ".")
        } else
            this.errorCallback("No server list for region " + e)
    }
    ,
    s.prototype.pingServers = function() {
        var e = this
          , t = [];
        for (var n in this.servers)
            if (this.servers.hasOwnProperty(n)) {
                var i = this.servers[n]
                  , r = i[Math.floor(Math.random() * i.length)];
                null != r ? function(i, r) {
                    var s = new XMLHttpRequest;
                    s.onreadystatechange = function(i) {
                        var s = i.target;
                        if (4 == s.readyState)
                            if (200 == s.status) {
                                for (var a = 0; a < t.length; a++)
                                    t[a].abort();
                                e.log("Connecting to region", r.region);
                                var o = e.seekServer(r.region);
                                e.connect(o[0], o[1], o[2])
                            } else
                                console.warn("Error pinging " + r.ip + " in region " + n)
                    }
                    ;
                    var a = "//" + e.serverAddress(r.ip, !0) + ":" + e.serverPort(r) + "/ping";
                    s.open("GET", a, !0),
                    s.send(null),
                    e.log("Pinging", a),
                    t.push(s)
                }(0, r) : console.log("No target server for region " + n)
            }
    }
    ,
    s.prototype.seekServer = function(e, t, n) {
        null == n && (n = "random"),
        null == t && (t = !1);
        const i = ["random"];
        var r = this.lobbySize
          , s = this.lobbySpread
          , a = this.servers[e].flatMap((function(e) {
            var t = 0;
            return e.games.map((function(n) {
                var i = t++;
                return {
                    region: e.region,
                    index: e.index * e.games.length + i,
                    gameIndex: i,
                    gameCount: e.games.length,
                    playerCount: n.playerCount,
                    isPrivate: n.isPrivate
                }
            }
            ))
        }
        )).filter((function(e) {
            return !e.isPrivate
        }
        )).filter((function(e) {
            return !t || 0 == e.playerCount && e.gameIndex >= e.gameCount / 2
        }
        )).filter((function(e) {
            return "random" == n || i[e.index % i.length].key == n
        }
        )).sort((function(e, t) {
            return t.playerCount - e.playerCount
        }
        )).filter((function(e) {
            return e.playerCount < r
        }
        ));
        if (t && a.reverse(),
        0 != a.length) {
            var o = Math.min(s, a.length)
              , c = Math.floor(Math.random() * o)
              , l = a[c = Math.min(c, a.length - 1)]
              , h = l.region
              , u = (c = Math.floor(l.index / l.gameCount),
            l.index % l.gameCount);
            return this.log("Found server."),
            [h, c, u]
        }
        this.errorCallback("No open servers.")
    }
    ,
    s.prototype.connect = function(e, t, n) {
        if (!this.connected) {
            var i = this.findServer(e, t);
            null != i ? (this.log("Connecting to server", i, "with game index", n),
            i.games[n].playerCount >= this.lobbySize ? this.errorCallback("Server is already full.") : (window.history.replaceState(document.title, document.title, this.generateHref(e, t, n, this.password)),
            this.server = i,
            this.gameIndex = n,
            this.log("Calling callback with address", this.serverAddress(i.ip), "on port", this.serverPort(i), "with game index", n),
            this.callback(this.serverAddress(i.ip), this.serverPort(i), n))) : this.errorCallback("Failed to find server for region " + e + " and index " + t)
        }
    }
    ,
    s.prototype.switchServer = function(e, t, n, i) {
        this.switchingServers = !0,
        window.location.href = this.generateHref(e, t, n, i)
    }
    ,
    s.prototype.generateHref = function(e, t, n, i) {
        var r = "/?server=" + (e = this.stripRegion(e)) + ":" + t + ":" + n;
        return i && (r += "&password=" + encodeURIComponent(i)),
        r
    }
    ,
    s.prototype.serverAddress = function(e, t) {
        return "127.0.0.1" == e || "7f000001" == e || "903d62ef5d1c2fecdcaeb5e7dd485eff" == e ? window.location.hostname : this.rawIPs ? t ? "ip_" + this.hashIP(e) + "." + this.baseUrl : e : "ip_" + e + "." + this.baseUrl
    }
    ,
    s.prototype.serverPort = function(e) {
        return 0 == e.region ? this.devPort : location.protocol.startsWith("https") ? 443 : 80
    }
    ,
    s.prototype.processServers = function(e) {
        for (var t = {}, n = 0; n < e.length; n++) {
            var i = e[n]
              , r = t[i.region];
            null == r && (r = [],
            t[i.region] = r),
            r.push(i)
        }
        for (var s in t)
            t[s] = t[s].sort((function(e, t) {
                return e.index - t.index
            }
            ));
        this.servers = t
    }
    ,
    s.prototype.ipToHex = function(e) {
        return e.split(".").map(e=>("00" + parseInt(e).toString(16)).substr(-2)).join("").toLowerCase()
    }
    ,
    s.prototype.hashIP = function(e) {
        return r(this.ipToHex(e))
    }
    ,
    s.prototype.log = function() {
        return this.debugLog ? console.log.apply(void 0, arguments) : console.verbose ? console.verbose.apply(void 0, arguments) : void 0
    }
    ,
    s.prototype.stripRegion = function(e) {
        return e.startsWith("vultr:") ? e = e.slice(6) : e.startsWith("do:") && (e = e.slice(3)),
        e
    }
    ,
    window.testVultrClient = function() {
        var e = 1;
        function t(t, n) {
            (t = "" + t) == (n = "" + n) ? console.log(`Assert ${e} passed.`) : console.warn(`Assert ${e} failed. Expected ${n}, got ${t}.`),
            e++
        }
        var n = new s("test.io",-1,5,1,!1);
        n.errorCallback = function(e) {}
        ,
        n.processServers(function(e) {
            var t = [];
            for (var n in e)
                for (var i = e[n], r = 0; r < i.length; r++)
                    t.push({
                        ip: n + ":" + r,
                        scheme: "testing",
                        region: n,
                        index: r,
                        games: i[r].map(e=>({
                            playerCount: e,
                            isPrivate: !1
                        }))
                    });
            return t
        }({
            1: [[0, 0, 0, 0], [0, 0, 0, 0]],
            2: [[5, 1, 0, 0], [0, 0, 0, 0]],
            3: [[5, 0, 1, 5], [0, 0, 0, 0]],
            4: [[5, 1, 1, 5], [1, 0, 0, 0]],
            5: [[5, 1, 1, 5], [1, 0, 4, 0]],
            6: [[5, 5, 5, 5], [2, 3, 1, 4]],
            7: [[5, 5, 5, 5], [5, 5, 5, 5]]
        })),
        t(n.seekServer(1, !1), [1, 0, 0]),
        t(n.seekServer(1, !0), [1, 1, 3]),
        t(n.seekServer(2, !1), [2, 0, 1]),
        t(n.seekServer(2, !0), [2, 1, 3]),
        t(n.seekServer(3, !1), [3, 0, 2]),
        t(n.seekServer(3, !0), [3, 1, 3]),
        t(n.seekServer(4, !1), [4, 0, 1]),
        t(n.seekServer(4, !0), [4, 1, 3]),
        t(n.seekServer(5, !1), [5, 1, 2]),
        t(n.seekServer(5, !0), [5, 1, 3]),
        t(n.seekServer(6, !1), [6, 1, 3]),
        t(n.seekServer(6, !0), void 0),
        t(n.seekServer(7, !1), void 0),
        t(n.seekServer(7, !0), void 0),
        console.log("Tests passed.")
    }
    ;
    var a = function(e, t) {
        return e.concat(t)
    };
    Array.prototype.flatMap = function(e) {
        return function(e, t) {
            return t.map(e).reduce(a, [])
        }(e, this)
    }
    ,
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    var i = n(61)
      , r = n(63);
    function s() {
        this.protocol = null,
        this.slashes = null,
        this.auth = null,
        this.host = null,
        this.port = null,
        this.hostname = null,
        this.hash = null,
        this.search = null,
        this.query = null,
        this.pathname = null,
        this.path = null,
        this.href = null
    }
    t.parse = v,
    t.resolve = function(e, t) {
        return v(e, !1, !0).resolve(t)
    }
    ,
    t.resolveObject = function(e, t) {
        return e ? v(e, !1, !0).resolveObject(t) : t
    }
    ,
    t.format = function(e) {
        return r.isString(e) && (e = v(e)),
        e instanceof s ? e.format() : s.prototype.format.call(e)
    }
    ,
    t.Url = s;
    var a = /^([a-z0-9.+-]+:)/i
      , o = /:[0-9]*$/
      , c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
      , l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"])
      , h = ["'"].concat(l)
      , u = ["%", "/", "?", ";", "#"].concat(h)
      , f = ["/", "?", "#"]
      , d = /^[+a-z0-9A-Z_-]{0,63}$/
      , p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
      , g = {
        javascript: !0,
        "javascript:": !0
    }
      , m = {
        javascript: !0,
        "javascript:": !0
    }
      , y = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    }
      , k = n(64);
    function v(e, t, n) {
        if (e && r.isObject(e) && e instanceof s)
            return e;
        var i = new s;
        return i.parse(e, t, n),
        i
    }
    s.prototype.parse = function(e, t, n) {
        if (!r.isString(e))
            throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var s = e.indexOf("?")
          , o = -1 !== s && s < e.indexOf("#") ? "?" : "#"
          , l = e.split(o);
        l[0] = l[0].replace(/\\/g, "/");
        var v = e = l.join(o);
        if (v = v.trim(),
        !n && 1 === e.split("#").length) {
            var w = c.exec(v);
            if (w)
                return this.path = v,
                this.href = v,
                this.pathname = w[1],
                w[2] ? (this.search = w[2],
                this.query = t ? k.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "",
                this.query = {}),
                this
        }
        var b = a.exec(v);
        if (b) {
            var x = (b = b[0]).toLowerCase();
            this.protocol = x,
            v = v.substr(b.length)
        }
        if (n || b || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var S = "//" === v.substr(0, 2);
            !S || b && m[b] || (v = v.substr(2),
            this.slashes = !0)
        }
        if (!m[b] && (S || b && !y[b])) {
            for (var T, I, E = -1, M = 0; M < f.length; M++)
                -1 !== (A = v.indexOf(f[M])) && (-1 === E || A < E) && (E = A);
            for (-1 !== (I = -1 === E ? v.lastIndexOf("@") : v.lastIndexOf("@", E)) && (T = v.slice(0, I),
            v = v.slice(I + 1),
            this.auth = decodeURIComponent(T)),
            E = -1,
            M = 0; M < u.length; M++) {
                var A;
                -1 !== (A = v.indexOf(u[M])) && (-1 === E || A < E) && (E = A)
            }
            -1 === E && (E = v.length),
            this.host = v.slice(0, E),
            v = v.slice(E),
            this.parseHost(),
            this.hostname = this.hostname || "";
            var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!P)
                for (var B = this.hostname.split(/\./), C = (M = 0,
                B.length); M < C; M++) {
                    var O = B[M];
                    if (O && !O.match(d)) {
                        for (var R = "", j = 0, _ = O.length; j < _; j++)
                            O.charCodeAt(j) > 127 ? R += "x" : R += O[j];
                        if (!R.match(d)) {
                            var U = B.slice(0, M)
                              , D = B.slice(M + 1)
                              , L = O.match(p);
                            L && (U.push(L[1]),
                            D.unshift(L[2])),
                            D.length && (v = "/" + D.join(".") + v),
                            this.hostname = U.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
            P || (this.hostname = i.toASCII(this.hostname));
            var F = this.port ? ":" + this.port : ""
              , z = this.hostname || "";
            this.host = z + F,
            this.href += this.host,
            P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
            "/" !== v[0] && (v = "/" + v))
        }
        if (!g[x])
            for (M = 0,
            C = h.length; M < C; M++) {
                var H = h[M];
                if (-1 !== v.indexOf(H)) {
                    var V = encodeURIComponent(H);
                    V === H && (V = escape(H)),
                    v = v.split(H).join(V)
                }
            }
        var q = v.indexOf("#");
        -1 !== q && (this.hash = v.substr(q),
        v = v.slice(0, q));
        var Y = v.indexOf("?");
        if (-1 !== Y ? (this.search = v.substr(Y),
        this.query = v.substr(Y + 1),
        t && (this.query = k.parse(this.query)),
        v = v.slice(0, Y)) : t && (this.search = "",
        this.query = {}),
        v && (this.pathname = v),
        y[x] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search) {
            F = this.pathname || "";
            var W = this.search || "";
            this.path = F + W
        }
        return this.href = this.format(),
        this
    }
    ,
    s.prototype.format = function() {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"),
        e += "@");
        var t = this.protocol || ""
          , n = this.pathname || ""
          , i = this.hash || ""
          , s = !1
          , a = "";
        this.host ? s = e + this.host : this.hostname && (s = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
        this.port && (s += ":" + this.port)),
        this.query && r.isObject(this.query) && Object.keys(this.query).length && (a = k.stringify(this.query));
        var o = this.search || a && "?" + a || "";
        return t && ":" !== t.substr(-1) && (t += ":"),
        this.slashes || (!t || y[t]) && !1 !== s ? (s = "//" + (s || ""),
        n && "/" !== n.charAt(0) && (n = "/" + n)) : s || (s = ""),
        i && "#" !== i.charAt(0) && (i = "#" + i),
        o && "?" !== o.charAt(0) && (o = "?" + o),
        t + s + (n = n.replace(/[?#]/g, (function(e) {
            return encodeURIComponent(e)
        }
        ))) + (o = o.replace("#", "%23")) + i
    }
    ,
    s.prototype.resolve = function(e) {
        return this.resolveObject(v(e, !1, !0)).format()
    }
    ,
    s.prototype.resolveObject = function(e) {
        if (r.isString(e)) {
            var t = new s;
            t.parse(e, !1, !0),
            e = t
        }
        for (var n = new s, i = Object.keys(this), a = 0; a < i.length; a++) {
            var o = i[a];
            n[o] = this[o]
        }
        if (n.hash = e.hash,
        "" === e.href)
            return n.href = n.format(),
            n;
        if (e.slashes && !e.protocol) {
            for (var c = Object.keys(e), l = 0; l < c.length; l++) {
                var h = c[l];
                "protocol" !== h && (n[h] = e[h])
            }
            return y[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
            n.href = n.format(),
            n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!y[e.protocol]) {
                for (var u = Object.keys(e), f = 0; f < u.length; f++) {
                    var d = u[f];
                    n[d] = e[d]
                }
                return n.href = n.format(),
                n
            }
            if (n.protocol = e.protocol,
            e.host || m[e.protocol])
                n.pathname = e.pathname;
            else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()); )
                    ;
                e.host || (e.host = ""),
                e.hostname || (e.hostname = ""),
                "" !== p[0] && p.unshift(""),
                p.length < 2 && p.unshift(""),
                n.pathname = p.join("/")
            }
            if (n.search = e.search,
            n.query = e.query,
            n.host = e.host || "",
            n.auth = e.auth,
            n.hostname = e.hostname || e.host,
            n.port = e.port,
            n.pathname || n.search) {
                var g = n.pathname || ""
                  , k = n.search || "";
                n.path = g + k
            }
            return n.slashes = n.slashes || e.slashes,
            n.href = n.format(),
            n
        }
        var v = n.pathname && "/" === n.pathname.charAt(0)
          , w = e.host || e.pathname && "/" === e.pathname.charAt(0)
          , b = w || v || n.host && e.pathname
          , x = b
          , S = n.pathname && n.pathname.split("/") || []
          , T = (p = e.pathname && e.pathname.split("/") || [],
        n.protocol && !y[n.protocol]);
        if (T && (n.hostname = "",
        n.port = null,
        n.host && ("" === S[0] ? S[0] = n.host : S.unshift(n.host)),
        n.host = "",
        e.protocol && (e.hostname = null,
        e.port = null,
        e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)),
        e.host = null),
        b = b && ("" === p[0] || "" === S[0])),
        w)
            n.host = e.host || "" === e.host ? e.host : n.host,
            n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname,
            n.search = e.search,
            n.query = e.query,
            S = p;
        else if (p.length)
            S || (S = []),
            S.pop(),
            S = S.concat(p),
            n.search = e.search,
            n.query = e.query;
        else if (!r.isNullOrUndefined(e.search))
            return T && (n.hostname = n.host = S.shift(),
            (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(),
            n.host = n.hostname = P.shift())),
            n.search = e.search,
            n.query = e.query,
            r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            n.href = n.format(),
            n;
        if (!S.length)
            return n.pathname = null,
            n.search ? n.path = "/" + n.search : n.path = null,
            n.href = n.format(),
            n;
        for (var I = S.slice(-1)[0], E = (n.host || e.host || S.length > 1) && ("." === I || ".." === I) || "" === I, M = 0, A = S.length; A >= 0; A--)
            "." === (I = S[A]) ? S.splice(A, 1) : ".." === I ? (S.splice(A, 1),
            M++) : M && (S.splice(A, 1),
            M--);
        if (!b && !x)
            for (; M--; M)
                S.unshift("..");
        !b || "" === S[0] || S[0] && "/" === S[0].charAt(0) || S.unshift(""),
        E && "/" !== S.join("/").substr(-1) && S.push("");
        var P, B = "" === S[0] || S[0] && "/" === S[0].charAt(0);
        return T && (n.hostname = n.host = B ? "" : S.length ? S.shift() : "",
        (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(),
        n.host = n.hostname = P.shift())),
        (b = b || n.host && S.length) && !B && S.unshift(""),
        S.length ? n.pathname = S.join("/") : (n.pathname = null,
        n.path = null),
        r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
        n.auth = e.auth || n.auth,
        n.slashes = n.slashes || e.slashes,
        n.href = n.format(),
        n
    }
    ,
    s.prototype.parseHost = function() {
        var e = this.host
          , t = o.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)),
        e = e.substr(0, e.length - t.length)),
        e && (this.hostname = e)
    }
}
, function(e, t, n) {
    (function(e, i) {
        var r;
        /*! https://mths.be/punycode v1 by @mathias */
        !function(s) {
            t && t.nodeType,
            e && e.nodeType;
            var a = "object" == typeof i && i;
            a.global !== a && a.window !== a && a.self;
            var o, c = 2147483647, l = 36, h = /^xn--/, u = /[^\x20-\x7E]/, f = /[\x2E\u3002\uFF0E\uFF61]/g, d = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            }, p = Math.floor, g = String.fromCharCode;
            function m(e) {
                throw new RangeError(d[e])
            }
            function y(e, t) {
                for (var n = e.length, i = []; n--; )
                    i[n] = t(e[n]);
                return i
            }
            function k(e, t) {
                var n = e.split("@")
                  , i = "";
                return n.length > 1 && (i = n[0] + "@",
                e = n[1]),
                i + y((e = e.replace(f, ".")).split("."), t).join(".")
            }
            function v(e) {
                for (var t, n, i = [], r = 0, s = e.length; r < s; )
                    (t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < s ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t),
                    r--) : i.push(t);
                return i
            }
            function w(e) {
                return y(e, (function(e) {
                    var t = "";
                    return e > 65535 && (t += g((e -= 65536) >>> 10 & 1023 | 55296),
                    e = 56320 | 1023 & e),
                    t + g(e)
                }
                )).join("")
            }
            function b(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : l
            }
            function x(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }
            function S(e, t, n) {
                var i = 0;
                for (e = n ? p(e / 700) : e >> 1,
                e += p(e / t); e > 455; i += l)
                    e = p(e / 35);
                return p(i + 36 * e / (e + 38))
            }
            function T(e) {
                var t, n, i, r, s, a, o, h, u, f, d = [], g = e.length, y = 0, k = 128, v = 72;
                for ((n = e.lastIndexOf("-")) < 0 && (n = 0),
                i = 0; i < n; ++i)
                    e.charCodeAt(i) >= 128 && m("not-basic"),
                    d.push(e.charCodeAt(i));
                for (r = n > 0 ? n + 1 : 0; r < g; ) {
                    for (s = y,
                    a = 1,
                    o = l; r >= g && m("invalid-input"),
                    ((h = b(e.charCodeAt(r++))) >= l || h > p((c - y) / a)) && m("overflow"),
                    y += h * a,
                    !(h < (u = o <= v ? 1 : o >= v + 26 ? 26 : o - v)); o += l)
                        a > p(c / (f = l - u)) && m("overflow"),
                        a *= f;
                    v = S(y - s, t = d.length + 1, 0 == s),
                    p(y / t) > c - k && m("overflow"),
                    k += p(y / t),
                    y %= t,
                    d.splice(y++, 0, k)
                }
                return w(d)
            }
            function I(e) {
                var t, n, i, r, s, a, o, h, u, f, d, y, k, w, b, T = [];
                for (y = (e = v(e)).length,
                t = 128,
                n = 0,
                s = 72,
                a = 0; a < y; ++a)
                    (d = e[a]) < 128 && T.push(g(d));
                for (i = r = T.length,
                r && T.push("-"); i < y; ) {
                    for (o = c,
                    a = 0; a < y; ++a)
                        (d = e[a]) >= t && d < o && (o = d);
                    for (o - t > p((c - n) / (k = i + 1)) && m("overflow"),
                    n += (o - t) * k,
                    t = o,
                    a = 0; a < y; ++a)
                        if ((d = e[a]) < t && ++n > c && m("overflow"),
                        d == t) {
                            for (h = n,
                            u = l; !(h < (f = u <= s ? 1 : u >= s + 26 ? 26 : u - s)); u += l)
                                b = h - f,
                                w = l - f,
                                T.push(g(x(f + b % w, 0))),
                                h = p(b / w);
                            T.push(g(x(h, 0))),
                            s = S(n, k, i == r),
                            n = 0,
                            ++i
                        }
                    ++n,
                    ++t
                }
                return T.join("")
            }
            o = {
                version: "1.4.1",
                ucs2: {
                    decode: v,
                    encode: w
                },
                decode: T,
                encode: I,
                toASCII: function(e) {
                    return k(e, (function(e) {
                        return u.test(e) ? "xn--" + I(e) : e
                    }
                    ))
                },
                toUnicode: function(e) {
                    return k(e, (function(e) {
                        return h.test(e) ? T(e.slice(4).toLowerCase()) : e
                    }
                    ))
                }
            },
            void 0 === (r = function() {
                return o
            }
            .call(t, n, t, e)) || (e.exports = r)
        }()
    }
    ).call(this, n(62)(e), n(12))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}
, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(65),
    t.encode = t.stringify = n(66)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, s) {
        t = t || "&",
        n = n || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length)
            return a;
        var o = /\+/g;
        e = e.split(t);
        var c = 1e3;
        s && "number" == typeof s.maxKeys && (c = s.maxKeys);
        var l = e.length;
        c > 0 && l > c && (l = c);
        for (var h = 0; h < l; ++h) {
            var u, f, d, p, g = e[h].replace(o, "%20"), m = g.indexOf(n);
            m >= 0 ? (u = g.substr(0, m),
            f = g.substr(m + 1)) : (u = g,
            f = ""),
            d = decodeURIComponent(u),
            p = decodeURIComponent(f),
            i(a, d) ? r(a[d]) ? a[d].push(p) : a[d] = [a[d], p] : a[d] = p
        }
        return a
    }
    ;
    var r = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}
, function(e, t, n) {
    "use strict";
    var i = function(e) {
        switch (typeof e) {
        case "string":
            return e;
        case "boolean":
            return e ? "true" : "false";
        case "number":
            return isFinite(e) ? e : "";
        default:
            return ""
        }
    };
    e.exports = function(e, t, n, o) {
        return t = t || "&",
        n = n || "=",
        null === e && (e = void 0),
        "object" == typeof e ? s(a(e), (function(a) {
            var o = encodeURIComponent(i(a)) + n;
            return r(e[a]) ? s(e[a], (function(e) {
                return o + encodeURIComponent(i(e))
            }
            )).join(t) : o + encodeURIComponent(i(e[a]))
        }
        )).join(t) : o ? encodeURIComponent(i(o)) + n + encodeURIComponent(i(e)) : ""
    }
    ;
    var r = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    ;
    function s(e, t) {
        if (e.map)
            return e.map(t);
        for (var n = [], i = 0; i < e.length; i++)
            n.push(t(e[i], i));
        return n
    }
    var a = Object.keys || function(e) {
        var t = [];
        for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
}
, function(e, t, n) {
    !function() {
        var t = n(68)
          , i = n(20).utf8
          , r = n(69)
          , s = n(20).bin
          , a = function(e, n) {
            e.constructor == String ? e = n && "binary" === n.encoding ? s.stringToBytes(e) : i.stringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
            for (var o = t.bytesToWords(e), c = 8 * e.length, l = 1732584193, h = -271733879, u = -1732584194, f = 271733878, d = 0; d < o.length; d++)
                o[d] = 16711935 & (o[d] << 8 | o[d] >>> 24) | 4278255360 & (o[d] << 24 | o[d] >>> 8);
            o[c >>> 5] |= 128 << c % 32,
            o[14 + (c + 64 >>> 9 << 4)] = c;
            var p = a._ff
              , g = a._gg
              , m = a._hh
              , y = a._ii;
            for (d = 0; d < o.length; d += 16) {
                var k = l
                  , v = h
                  , w = u
                  , b = f;
                h = y(h = y(h = y(h = y(h = m(h = m(h = m(h = m(h = g(h = g(h = g(h = g(h = p(h = p(h = p(h = p(h, u = p(u, f = p(f, l = p(l, h, u, f, o[d + 0], 7, -680876936), h, u, o[d + 1], 12, -389564586), l, h, o[d + 2], 17, 606105819), f, l, o[d + 3], 22, -1044525330), u = p(u, f = p(f, l = p(l, h, u, f, o[d + 4], 7, -176418897), h, u, o[d + 5], 12, 1200080426), l, h, o[d + 6], 17, -1473231341), f, l, o[d + 7], 22, -45705983), u = p(u, f = p(f, l = p(l, h, u, f, o[d + 8], 7, 1770035416), h, u, o[d + 9], 12, -1958414417), l, h, o[d + 10], 17, -42063), f, l, o[d + 11], 22, -1990404162), u = p(u, f = p(f, l = p(l, h, u, f, o[d + 12], 7, 1804603682), h, u, o[d + 13], 12, -40341101), l, h, o[d + 14], 17, -1502002290), f, l, o[d + 15], 22, 1236535329), u = g(u, f = g(f, l = g(l, h, u, f, o[d + 1], 5, -165796510), h, u, o[d + 6], 9, -1069501632), l, h, o[d + 11], 14, 643717713), f, l, o[d + 0], 20, -373897302), u = g(u, f = g(f, l = g(l, h, u, f, o[d + 5], 5, -701558691), h, u, o[d + 10], 9, 38016083), l, h, o[d + 15], 14, -660478335), f, l, o[d + 4], 20, -405537848), u = g(u, f = g(f, l = g(l, h, u, f, o[d + 9], 5, 568446438), h, u, o[d + 14], 9, -1019803690), l, h, o[d + 3], 14, -187363961), f, l, o[d + 8], 20, 1163531501), u = g(u, f = g(f, l = g(l, h, u, f, o[d + 13], 5, -1444681467), h, u, o[d + 2], 9, -51403784), l, h, o[d + 7], 14, 1735328473), f, l, o[d + 12], 20, -1926607734), u = m(u, f = m(f, l = m(l, h, u, f, o[d + 5], 4, -378558), h, u, o[d + 8], 11, -2022574463), l, h, o[d + 11], 16, 1839030562), f, l, o[d + 14], 23, -35309556), u = m(u, f = m(f, l = m(l, h, u, f, o[d + 1], 4, -1530992060), h, u, o[d + 4], 11, 1272893353), l, h, o[d + 7], 16, -155497632), f, l, o[d + 10], 23, -1094730640), u = m(u, f = m(f, l = m(l, h, u, f, o[d + 13], 4, 681279174), h, u, o[d + 0], 11, -358537222), l, h, o[d + 3], 16, -722521979), f, l, o[d + 6], 23, 76029189), u = m(u, f = m(f, l = m(l, h, u, f, o[d + 9], 4, -640364487), h, u, o[d + 12], 11, -421815835), l, h, o[d + 15], 16, 530742520), f, l, o[d + 2], 23, -995338651), u = y(u, f = y(f, l = y(l, h, u, f, o[d + 0], 6, -198630844), h, u, o[d + 7], 10, 1126891415), l, h, o[d + 14], 15, -1416354905), f, l, o[d + 5], 21, -57434055), u = y(u, f = y(f, l = y(l, h, u, f, o[d + 12], 6, 1700485571), h, u, o[d + 3], 10, -1894986606), l, h, o[d + 10], 15, -1051523), f, l, o[d + 1], 21, -2054922799), u = y(u, f = y(f, l = y(l, h, u, f, o[d + 8], 6, 1873313359), h, u, o[d + 15], 10, -30611744), l, h, o[d + 6], 15, -1560198380), f, l, o[d + 13], 21, 1309151649), u = y(u, f = y(f, l = y(l, h, u, f, o[d + 4], 6, -145523070), h, u, o[d + 11], 10, -1120210379), l, h, o[d + 2], 15, 718787259), f, l, o[d + 9], 21, -343485551),
                l = l + k >>> 0,
                h = h + v >>> 0,
                u = u + w >>> 0,
                f = f + b >>> 0
            }
            return t.endian([l, h, u, f])
        };
        a._ff = function(e, t, n, i, r, s, a) {
            var o = e + (t & n | ~t & i) + (r >>> 0) + a;
            return (o << s | o >>> 32 - s) + t
        }
        ,
        a._gg = function(e, t, n, i, r, s, a) {
            var o = e + (t & i | n & ~i) + (r >>> 0) + a;
            return (o << s | o >>> 32 - s) + t
        }
        ,
        a._hh = function(e, t, n, i, r, s, a) {
            var o = e + (t ^ n ^ i) + (r >>> 0) + a;
            return (o << s | o >>> 32 - s) + t
        }
        ,
        a._ii = function(e, t, n, i, r, s, a) {
            var o = e + (n ^ (t | ~i)) + (r >>> 0) + a;
            return (o << s | o >>> 32 - s) + t
        }
        ,
        a._blocksize = 16,
        a._digestsize = 16,
        e.exports = function(e, n) {
            if (null == e)
                throw new Error("Illegal argument " + e);
            var i = t.wordsToBytes(a(e, n));
            return n && n.asBytes ? i : n && n.asString ? s.bytesToString(i) : t.bytesToHex(i)
        }
    }()
}
, function(e, t) {
    !function() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          , n = {
            rotl: function(e, t) {
                return e << t | e >>> 32 - t
            },
            rotr: function(e, t) {
                return e << 32 - t | e >>> t
            },
            endian: function(e) {
                if (e.constructor == Number)
                    return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                for (var t = 0; t < e.length; t++)
                    e[t] = n.endian(e[t]);
                return e
            },
            randomBytes: function(e) {
                for (var t = []; e > 0; e--)
                    t.push(Math.floor(256 * Math.random()));
                return t
            },
            bytesToWords: function(e) {
                for (var t = [], n = 0, i = 0; n < e.length; n++,
                i += 8)
                    t[i >>> 5] |= e[n] << 24 - i % 32;
                return t
            },
            wordsToBytes: function(e) {
                for (var t = [], n = 0; n < 32 * e.length; n += 8)
                    t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                return t
            },
            bytesToHex: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push((e[n] >>> 4).toString(16)),
                    t.push((15 & e[n]).toString(16));
                return t.join("")
            },
            hexToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n += 2)
                    t.push(parseInt(e.substr(n, 2), 16));
                return t
            },
            bytesToBase64: function(e) {
                for (var n = [], i = 0; i < e.length; i += 3)
                    for (var r = e[i] << 16 | e[i + 1] << 8 | e[i + 2], s = 0; s < 4; s++)
                        8 * i + 6 * s <= 8 * e.length ? n.push(t.charAt(r >>> 6 * (3 - s) & 63)) : n.push("=");
                return n.join("")
            },
            base64ToBytes: function(e) {
                e = e.replace(/[^A-Z0-9+\/]/gi, "");
                for (var n = [], i = 0, r = 0; i < e.length; r = ++i % 4)
                    0 != r && n.push((t.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | t.indexOf(e.charAt(i)) >>> 6 - 2 * r);
                return n
            }
        };
        e.exports = n
    }()
}
, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Ruin A Day <https://feross.org>
 * @license  MIT
 */
    e.exports = function(e) {
        return null != e && (n(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}
, function(e, t) {
    e.exports = function(e, t, n, i, r, s, a, o, c) {
        this.aiTypes = [{
            id: 0,
            name: "cow",
            src: "cow_1",
            killScore: 150,
            health: 500,
            weightM: .8,
            speed: 95e-5,
            turnSpeed: .001,
            scale: 72,
            drop: ["food", 50]
        }, {
            id: 1,
            name: "pig",
            src: "pig_1",
            killScore: 200,
            health: 800,
            weightM: .6,
            speed: 85e-5,
            turnSpeed: .001,
            scale: 72,
            drop: ["food", 80]
        }, {
            id: 2,
            name: "Bull",
            src: "bull_2",
            hostile: !0,
            dmg: 20,
            killScore: 1e3,
            health: 1800,
            weightM: .5,
            speed: 94e-5,
            turnSpeed: 74e-5,
            scale: 78,
            viewRange: 800,
            chargePlayer: !0,
            drop: ["food", 100]
        }, {
            id: 3,
            name: "Bully",
            src: "Bull_1",
            hostile: !0,
            dmg: 20,
            killScore: 2e3,
            health: 2800,
            weightM: .45,
            speed: .001,
            turnSpeed: 8e-4,
            scale: 90,
            viewRange: 900,
            chargePlayer: !0,
            drop: ["food", 400]
        }, {
            id: 4,
            name: "Wolf",
            src: "wolf_1",
            hostile: !0,
            dmg: 8,
            killScore: 500,
            health: 300,
            weightM: .45,
            speed: .001,
            turnSpeed: .002,
            scale: 84,
            viewRange: 800,
            chargePlayer: !0,
            drop: ["food", 200]
        }, {
            id: 5,
            name: "Quack",
            src: "duck",
            dmg: 8,
            killScore: 2e3,
            noTrap: !0,
            health: 300,
            weightM: .2,
            speed: .0018,
            turnSpeed: .006,
            scale: 70,
            drop: ["food", 100]
        }, {
            id: 6,
            name: "MOOSTAFE",
            nameScale: 50,
            src: "enemy",
            hostile: !0,
            dontRun: !0,
            fixedSpawn: !0,
            spawnDelay: 6e4,
            noTrap: !0,
            colDmg: 100,
            dmg: 40,
            killScore: 8e3,
            health: 18e3,
            weightM: .4,
            speed: 7e-4,
            turnSpeed: .01,
            scale: 80,
            spriteMlt: 1.8,
            leapForce: .9,
            viewRange: 1e3,
            hitRange: 210,
            hitDelay: 1e3,
            chargePlayer: !0,
            drop: ["food", 100]
        }, {
            id: 7,
            name: "Treasure",
            hostile: !0,
            nameScale: 35,
            src: "crate_1",
            fixedSpawn: !0,
            spawnDelay: 12e4,
            colDmg: 200,
            killScore: 5e3,
            health: 2e4,
            weightM: .1,
            speed: 0,
            turnSpeed: 0,
            scale: 70,
            spriteMlt: 1
        }, {
            id: 8,
            name: "MOOFIE",
            src: "wolf_2",
            hostile: !0,
            fixedSpawn: !0,
            dontRun: !0,
            hitScare: 4,
            spawnDelay: 3e4,
            noTrap: !0,
            nameScale: 45,
            dmg: 10,
            colDmg: 100,
            killScore: 3e3,
            health: 7e3,
            weightM: .45,
            speed: .0015,
            turnSpeed: .002,
            scale: 90,
            viewRange: 800,
            chargePlayer: !0,
            drop: ["food", 1e3]
        }],
        this.spawn = function(l, h, u, f) {
            for (var d, p = 0; p < e.length; ++p)
                if (!e[p].active) {
                    d = e[p];
                    break
                }
            return d || (d = new t(e.length,r,n,i,a,s,o,c),
            e.push(d)),
            d.init(l, h, u, f, this.aiTypes[f]),
            d
        }
    }
}
, function(e, t) {
    var n = 2 * Math.PI;
    e.exports = function(e, t, i, r, s, a, o, c) {
        this.sid = e,
        this.isAI = !0,
        this.nameIndex = s.randInt(0, a.cowNames.length - 1),
        this.init = function(e, t, n, i, r) {
            this.x = e,
            this.y = t,
            this.startX = r.fixedSpawn ? e : null,
            this.startY = r.fixedSpawn ? t : null,
            this.xVel = 0,
            this.yVel = 0,
            this.zIndex = 0,
            this.dir = n,
            this.dirPlus = 0,
            this.index = i,
            this.src = r.src,
            r.name && (this.name = r.name),
            this.weightM = r.weightM,
            this.speed = r.speed,
            this.killScore = r.killScore,
            this.turnSpeed = r.turnSpeed,
            this.scale = r.scale,
            this.maxHealth = r.health,
            this.leapForce = r.leapForce,
            this.health = this.maxHealth,
            this.chargePlayer = r.chargePlayer,
            this.viewRange = r.viewRange,
            this.drop = r.drop,
            this.dmg = r.dmg,
            this.hostile = r.hostile,
            this.dontRun = r.dontRun,
            this.hitRange = r.hitRange,
            this.hitDelay = r.hitDelay,
            this.hitScare = r.hitScare,
            this.spriteMlt = r.spriteMlt,
            this.nameScale = r.nameScale,
            this.colDmg = r.colDmg,
            this.noTrap = r.noTrap,
            this.spawnDelay = r.spawnDelay,
            this.hitWait = 0,
            this.waitCount = 1e3,
            this.moveCount = 0,
            this.targetDir = 0,
            this.active = !0,
            this.alive = !0,
            this.runFrom = null,
            this.chargeTarget = null,
            this.dmgOverTime = {}
        }
        ;
        var l = 0;
        this.update = function(e) {
            if (this.active) {
                if (this.spawnCounter)
                    return this.spawnCounter -= e,
                    void (this.spawnCounter <= 0 && (this.spawnCounter = 0,
                    this.x = this.startX || s.randInt(0, a.mapScale),
                    this.y = this.startY || s.randInt(0, a.mapScale)));
                (l -= e) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer),
                this.dmgOverTime.time -= 1,
                this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)),
                l = 1e3);
                var r = !1
                  , o = 1;
                if (!this.zIndex && !this.lockMove && this.y >= a.mapScale / 2 - a.riverWidth / 2 && this.y <= a.mapScale / 2 + a.riverWidth / 2 && (o = .33,
                this.xVel += a.waterCurrent * e),
                this.lockMove)
                    this.xVel = 0,
                    this.yVel = 0;
                else if (this.waitCount > 0) {
                    if (this.waitCount -= e,
                    this.waitCount <= 0)
                        if (this.chargePlayer) {
                            for (var h, u, f, d = 0; d < i.length; ++d)
                                !i[d].alive || i[d].skin && i[d].skin.bullRepel || (f = s.getDistance(this.x, this.y, i[d].x, i[d].y)) <= this.viewRange && (!h || f < u) && (u = f,
                                h = i[d]);
                            h ? (this.chargeTarget = h,
                            this.moveCount = s.randInt(8e3, 12e3)) : (this.moveCount = s.randInt(1e3, 2e3),
                            this.targetDir = s.randFloat(-Math.PI, Math.PI))
                        } else
                            this.moveCount = s.randInt(4e3, 1e4),
                            this.targetDir = s.randFloat(-Math.PI, Math.PI)
                } else if (this.moveCount > 0) {
                    var p = this.speed * o;
                    if (this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer || this.runFrom.alive) ? (this.targetDir = s.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y),
                    p *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = s.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y),
                    p *= 1.75,
                    r = !0),
                    this.hitWait && (p *= .3),
                    this.dir != this.targetDir) {
                        this.dir %= n;
                        var g = (this.dir - this.targetDir + n) % n
                          , m = Math.min(Math.abs(g - n), g, this.turnSpeed * e)
                          , y = g - Math.PI >= 0 ? 1 : -1;
                        this.dir += y * m + n
                    }
                    this.dir %= n,
                    this.xVel += p * e * Math.cos(this.dir),
                    this.yVel += p * e * Math.sin(this.dir),
                    this.moveCount -= e,
                    this.moveCount <= 0 && (this.runFrom = null,
                    this.chargeTarget = null,
                    this.waitCount = this.hostile ? 1500 : s.randInt(1500, 6e3))
                }
                this.zIndex = 0,
                this.lockMove = !1;
                var k = s.getDistance(0, 0, this.xVel * e, this.yVel * e)
                  , v = Math.min(4, Math.max(1, Math.round(k / 40)))
                  , w = 1 / v;
                for (d = 0; d < v; ++d) {
                    this.xVel && (this.x += this.xVel * e * w),
                    this.yVel && (this.y += this.yVel * e * w),
                    M = t.getGridArrays(this.x, this.y, this.scale);
                    for (var b = 0; b < M.length; ++b)
                        for (var x = 0; x < M[b].length; ++x)
                            M[b][x].active && t.checkCollision(this, M[b][x], w)
                }
                var S, T, I, E = !1;
                if (this.hitWait > 0 && (this.hitWait -= e,
                this.hitWait <= 0)) {
                    E = !0,
                    this.hitWait = 0,
                    this.leapForce && !s.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir),
                    this.yVel += this.leapForce * Math.sin(this.dir));
                    for (var M = t.getGridArrays(this.x, this.y, this.hitRange), A = 0; A < M.length; ++A)
                        for (b = 0; b < M[A].length; ++b)
                            (S = M[A][b]).health && (T = s.getDistance(this.x, this.y, S.x, S.y)) < S.scale + this.hitRange && (S.changeHealth(5 * -this.dmg) && t.disableObj(S),
                            t.hitObj(S, s.getDirection(this.x, this.y, S.x, S.y)));
                    for (b = 0; b < i.length; ++b)
                        i[b].canSee(this) && c.send(i[b].id, "aa", this.sid)
                }
                if (r || E)
                    for (d = 0; d < i.length; ++d)
                        (S = i[d]) && S.alive && (T = s.getDistance(this.x, this.y, S.x, S.y),
                        this.hitRange ? !this.hitWait && T <= this.hitRange + S.scale && (E ? (I = s.getDirection(S.x, S.y, this.x, this.y),
                        S.changeHealth(-this.dmg),
                        S.xVel += .6 * Math.cos(I),
                        S.yVel += .6 * Math.sin(I),
                        this.runFrom = null,
                        this.chargeTarget = null,
                        this.waitCount = 3e3,
                        this.hitWait = s.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : T <= this.scale + S.scale && (I = s.getDirection(S.x, S.y, this.x, this.y),
                        S.changeHealth(-this.dmg),
                        S.xVel += .55 * Math.cos(I),
                        S.yVel += .55 * Math.sin(I)));
                this.xVel && (this.xVel *= Math.pow(a.playerDecel, e)),
                this.yVel && (this.yVel *= Math.pow(a.playerDecel, e));
                var P = this.scale;
                this.x - P < 0 ? (this.x = P,
                this.xVel = 0) : this.x + P > a.mapScale && (this.x = a.mapScale - P,
                this.xVel = 0),
                this.y - P < 0 ? (this.y = P,
                this.yVel = 0) : this.y + P > a.mapScale && (this.y = a.mapScale - P,
                this.yVel = 0)
            }
        }
        ,
        this.canSee = function(e) {
            if (!e)
                return !1;
            if (e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer)
                return !1;
            var t = Math.abs(e.x - this.x) - e.scale
              , n = Math.abs(e.y - this.y) - e.scale;
            return t <= a.maxScreenWidth / 2 * 1.3 && n <= a.maxScreenHeight / 2 * 1.3
        }
        ;
        var h = 0
          , u = 0;
        this.animate = function(e) {
            this.animTime > 0 && (this.animTime -= e,
            this.animTime <= 0 ? (this.animTime = 0,
            this.dirPlus = 0,
            h = 0,
            u = 0) : 0 == u ? (h += e / (this.animSpeed * a.hitReturnRatio),
            this.dirPlus = s.lerp(0, this.targetAngle, Math.min(1, h)),
            h >= 1 && (h = 1,
            u = 1)) : (h -= e / (this.animSpeed * (1 - a.hitReturnRatio)),
            this.dirPlus = s.lerp(0, this.targetAngle, Math.max(0, h))))
        }
        ,
        this.startAnim = function() {
            this.animTime = this.animSpeed = 600,
            this.targetAngle = .8 * Math.PI,
            h = 0,
            u = 0
        }
        ,
        this.changeHealth = function(e, t, n) {
            if (this.active && (this.health += e,
            n && (this.hitScare && !s.randInt(0, this.hitScare) ? (this.runFrom = n,
            this.waitCount = 0,
            this.moveCount = 2e3) : this.hostile && this.chargePlayer && n.isPlayer ? (this.chargeTarget = n,
            this.waitCount = 0,
            this.moveCount = 8e3) : this.dontRun || (this.runFrom = n,
            this.waitCount = 0,
            this.moveCount = 2e3)),
            e < 0 && this.hitRange && s.randInt(0, 1) && (this.hitWait = 500),
            t && t.canSee(this) && e < 0 && c.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1),
            this.health <= 0 && (this.spawnDelay ? (this.spawnCounter = this.spawnDelay,
            this.x = -1e6,
            this.y = -1e6) : (this.x = this.startX || s.randInt(0, a.mapScale),
            this.y = this.startY || s.randInt(0, a.mapScale)),
            this.health = this.maxHealth,
            this.runFrom = null,
            t && (o(t, this.killScore),
            this.drop))))
                for (var i = 0; i < this.drop.length; )
                    t.addResource(a.resourceTypes.indexOf(this.drop[i]), this.drop[i + 1]),
                    i += 2
        }
    }
 const stycross = [
    "Default (Cursor)","Default (Crosshair)",
];

var stylerSelect = document.createElement("select");
stylerSelect.style.backgroundColor = "white";
stylerSelect.style.color = "red";
stylerSelect.id = "cursor-game";
stylerSelect.style.marginBottom = "0px";
for (var mn = 0; mn < stycross.length; mn++) {
    var optioner = document.createElement("option");
    optioner.text = stycross[mn];
    if(stycross[mn] == "Default (Cursor)") { optioner.value="auto"; }
    if(stycross[mn] == "Default (Crosshair)") { optioner.value="url('http://cur.cursors-4u.net/user/use-1/use153.cur'), auto"; }
    stylerSelect.add(optioner);
}

document.getElementById("setupCard").appendChild(stylerSelect);

stylerSelect.onchange = function() {

    document.body.style.cursor = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value;
}
}
]);

/*///Lag Insta
(function() {
    'use strict';
    let mouseX;
    let mouseY;
    let width;
    let height;
    var ws;
    var msgpack5 = msgpack;
    let user = {
        id: null,
        x: null,
        y: null,
        dir: null,
        weapon: null
    };
    var primaryWeapon, secondaryWeapon;
    WebSocket.prototype.oldSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function(m){
        if (!ws){
            document.ws = this;
            ws = this;
            socketFound(this);
        }
        this.oldSend(m);
    };
    function socketFound(socket){
        socket.addEventListener('message', function(message){
            handleMessage(message);
        });
    }
    function handleMessage(m){
        let temp = msgpack5.decode(new Uint8Array(m.data));
        let data;
        if(temp.length > 1) {
            data = [temp[0], ...temp[1]];
            if (data[1] instanceof Array){
                data = data;
            }
        } else {
            data = temp;
        }
        let item = data[0];
        if(!data) {return};
        if(item === "io-init") {
            let cvs = document.getElementById("gameCanvas");
            width = cvs.clientWidth;
            height = cvs.clientHeight;
            $(window).resize(function() {
                width = cvs.clientWidth;
                height = cvs.clientHeight;
            });
            cvs.addEventListener("mousemove", e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
        }
        if (item == "1" && user.id == null){
            user.id = data[1];
        }
        if(item == "2"){
        r.send(["ch", [data[1].slice(2, 3) + " is dumb"]]);
    }
        if (item == "33") {
            for(let i = 0; i < data[1].length / 13; i++) {
                let playerInfo = data[1].slice(13*i, 13*i+13);
                if(playerInfo[0] == user.id) {
                    user.x = playerInfo[1];
                    user.y = playerInfo[2];
                    user.dir = playerInfo[3];
                    user.weapon = playerInfo[5];
                    user.clan = playerInfo[7];
                }
            }
        }
        update();
    }
    function send(sender){
        ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
    }

    function isElementVisible(e) {
        return (e.offsetParent !== null);
    }
    document.addEventListener('keydown', (e)=>{
        if(e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox'){
            send(["5", [primaryWeapon, true]]);
            send(["13c", [0, 7, 0]]);
            send(["7", [1]]);
            setTimeout( () => {
                var sck = "";
                send(["13c", [0, 53, 0]]);
                send(["5", [secondaryWeapon, true]]);
                for(let i = 0; i < 500; i++){
                    let caas = new Uint8Array(490);
                    for(let i = 0; i <caas.length;i++){
                        caas[i] = Math.floor(Math.random()*5);
                        sck += caas[i]
                    }
                }
                ws.send(caas);
            }, 50);
            setTimeout( () => {
                send(["5", [primaryWeapon, true]]);
                send(["7", [1]]);
                send(["13c", [0, 0, 1]]);
                send(["13c", [0, 0, 0]]);
            }, 250);
        }
    })
    function update() {
        for (let i=0;i<9;i++){
            if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
                primaryWeapon = i;
            }
        }
        for (let i=9;i<16;i++){
            if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
                secondaryWeapon = i;
            }
        }
    }
window.addEventListener("mousedown", (e)=>{
    if (e.which == 3) {
                        doNewSend(["7", [1]]);
    doNewSend(["13c", [0, 40, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
    }
}, false);
window.addEventListener("mouseup", (e)=>{
    if (e.which == 3) {
                doNewSend(["7", [2]]);
            doNewSend(["13c", [0, 0, 1]]);
                    doNewSend(["13c", [0, 0, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
            if (myPlayer.y < 2400 && isEnemyNear == false) {
                doNewSend(["13c", [0, 15, 0]]);
                doNewSend(["13c", [0, 11, 1]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550 && isEnemyNear == false) {
                doNewSend(["13c", [0, 31, 0]]);
                doNewSend(["13c", [0, 11, 1]]);
            } else {
	            doNewSend(["13c", [0, 12, 0]]);
                doNewSend(["13c", [0, 11, 1]]);
            }
    }
}, false);
window.addEventListener("context", (e)=>{
    e.preventDefault();
}, false);


})();*/
