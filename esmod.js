// ==UserScript==
// @name        MooMoo.io E.S. Mod [AutoHeal][Insta-Kill][BoostPad+Spikes][Hotkeys][Katana-Musket][And MORE]
// @namespace    -
// @version     v3.5
// @description MooMoo.io brand new unstoppable hack! Hotkeys in description...
// @author      HaThu [Fixed]
// @match       *://moomoo.io/*
// @match       *://sandbox.moomoo.io/*
// @grant       none
// @require     http://code.jquery.com/jquery-3.3.1.min.js
// @require     https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==
/*
AutoHeal, AutoHat, Map, insta-kill, hotkeys and more

Hotkeys:
V for spike
F for trap
R for insta-kill
F1 for age 1 instakill (tool hammer + polearm (bull helmet))
F2 for bow instakill (bow + crossbow + musket)
P for autobull + attack
G for 2 spikes and boost pad
H for 2 turrets
L for 4 spikes around you
N for 1 windmill
T to turn on/off AutoHeal
M to turn on/off AutoHat
U to turn on/off AutoTank
HOME to get Katana-Musket
PGUP to change insta-kill speed
PGDN to change autoheal speed
*/

// version 3
//added Heal, Insta speed changer (PGUP/PGDN)
//added autobull attack (P)
//added autotank (auto switches to tank gear when you press E if there is no enemy near)
//added autotank ON/OFF toggle (U)
//changed some colors
//fixed a bug

// version 3.5
//added server crasher (probably doesn't work)
//fixed a bug
//added age 1 insta (tool hammer + polearm (bull helmet))(F1)

// msgpack module
(function() {
    'use strict';

    function serialize(data) {
        const pow32 = 0x100000000;
        let floatBuffer, floatView;
        let array = new Uint8Array(128);
        let length = 0;
        append(data);
        return array.subarray(0, length);

        function append(data) {
            switch (typeof data) {
                case "undefined":
                    appendNull(data);
                    break;
                case "boolean":
                    appendBoolean(data);
                    break;
                case "number":
                    appendNumber(data);
                    break;
                case "string":
                    appendString(data);
                    break;
                case "object":
                    if (data === null) {
                        appendNull(data);
                    } else if (data instanceof Date) {
                        appendDate(data);
                    } else if (Array.isArray(data)) {
                        appendArray(data);
                    } else if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
                        appendBinArray(data);
                    } else if (data instanceof Int8Array || data instanceof Int16Array || data instanceof Uint16Array ||
                               data instanceof Int32Array || data instanceof Uint32Array ||
                               data instanceof Float32Array || data instanceof Float64Array) {
                        appendArray(data);
                    } else {
                        appendObject(data);
                    }
                    break;
            }
        }

        function appendNull(data) {
            appendByte(0xc0);
        }

        function appendBoolean(data) {
            appendByte(data ? 0xc3 : 0xc2);
        }

        function appendNumber(data) {
            if (isFinite(data) && Math.floor(data) === data) {
                if (data >= 0 && data <= 0x7f) {
                    appendByte(data);
                } else if (data < 0 && data >= -0x20) {
                    appendByte(data);
                } else if (data > 0 && data <= 0xff) { // uint8
                    appendBytes([0xcc, data]);
                } else if (data >= -0x80 && data <= 0x7f) { // int8
                    appendBytes([0xd0, data]);
                } else if (data > 0 && data <= 0xffff) { // uint16
                    appendBytes([0xcd, data >>> 8, data]);
                } else if (data >= -0x8000 && data <= 0x7fff) { // int16
                    appendBytes([0xd1, data >>> 8, data]);
                } else if (data > 0 && data <= 0xffffffff) { // uint32
                    appendBytes([0xce, data >>> 24, data >>> 16, data >>> 8, data]);
                } else if (data >= -0x80000000 && data <= 0x7fffffff) { // int32
                    appendBytes([0xd2, data >>> 24, data >>> 16, data >>> 8, data]);
                } else if (data > 0 && data <= 0xffffffffffffffff) { // uint64
                    let hi = data / pow32;
                    let lo = data % pow32;
                    appendBytes([0xd3, hi >>> 24, hi >>> 16, hi >>> 8, hi, lo >>> 24, lo >>> 16, lo >>> 8, lo]);
                } else if (data >= -0x8000000000000000 && data <= 0x7fffffffffffffff) { // int64
                    appendByte(0xd3);
                    appendInt64(data);
                } else if (data < 0) { // below int64
                    appendBytes([0xd3, 0x80, 0, 0, 0, 0, 0, 0, 0]);
                } else { // above uint64
                    appendBytes([0xcf, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);
                }
            } else {
                if (!floatView) {
                    floatBuffer = new ArrayBuffer(8);
                    floatView = new DataView(floatBuffer);
                }
                floatView.setFloat64(0, data);
                appendByte(0xcb);
                appendBytes(new Uint8Array(floatBuffer));
            }
        }

        function appendString(data) {
            let bytes = encodeUtf8(data);
            let length = bytes.length;

            if (length <= 0x1f) {
                appendByte(0xa0 + length);
            } else if (length <= 0xff) {
                appendBytes([0xd9, length]);
            } else if (length <= 0xffff) {
                appendBytes([0xda, length >>> 8, length]);
            } else {
                appendBytes([0xdb, length >>> 24, length >>> 16, length >>> 8, length]);
            }

            appendBytes(bytes);
        }

        function appendArray(data) {
            let length = data.length;

            if (length <= 0xf) {
                appendByte(0x90 + length);
            } else if (length <= 0xffff) {
                appendBytes([0xdc, length >>> 8, length]);
            } else {
                appendBytes([0xdd, length >>> 24, length >>> 16, length >>> 8, length]);
            }

            for (let index = 0; index < length; index++) {
                append(data[index]);
            }
        }

        function appendBinArray(data) {
            let length = data.length;

            if (length <= 0xf) {
                appendBytes([0xc4, length]);
            } else if (length <= 0xffff) {
                appendBytes([0xc5, length >>> 8, length]);
            } else {
                appendBytes([0xc6, length >>> 24, length >>> 16, length >>> 8, length]);
            }

            appendBytes(data);
        }

        function appendObject(data) {
            let length = 0;
            for (let key in data) length++;

            if (length <= 0xf) {
                appendByte(0x80 + length);
            } else if (length <= 0xffff) {
                appendBytes([0xde, length >>> 8, length]);
            } else {
                appendBytes([0xdf, length >>> 24, length >>> 16, length >>> 8, length]);
            }

            for (let key in data) {
                append(key);
                append(data[key]);
            }
        }

        function appendDate(data) {
            let sec = data.getTime() / 1000;
            if (data.getMilliseconds() === 0 && sec >= 0 && sec < 0x100000000) { // 32 bit seconds
                appendBytes([0xd6, 0xff, sec >>> 24, sec >>> 16, sec >>> 8, sec]);
            }
            else if (sec >= 0 && sec < 0x400000000) { // 30 bit nanoseconds, 34 bit seconds
                let ns = data.getMilliseconds() * 1000000;
                appendBytes([0xd7, 0xff, ns >>> 22, ns >>> 14, ns >>> 6, ((ns << 2) >>> 0) | (sec / pow32), sec >>> 24, sec >>> 16, sec >>> 8, sec]);
            }
            else { // 32 bit nanoseconds, 64 bit seconds, negative values allowed
                let ns = data.getMilliseconds() * 1000000;
                appendBytes([0xc7, 12, 0xff, ns >>> 24, ns >>> 16, ns >>> 8, ns]);
                appendInt64(sec);
            }
        }

        function appendByte(byte) {
            if (array.length < length + 1) {
                let newLength = array.length * 2;
                while (newLength < length + 1)
                    newLength *= 2;
                let newArray = new Uint8Array(newLength);
                newArray.set(array);
                array = newArray;
            }
            array[length] = byte;
            length++;
        }

        function appendBytes(bytes) {
            if (array.length < length + bytes.length) {
                let newLength = array.length * 2;
                while (newLength < length + bytes.length)
                    newLength *= 2;
                let newArray = new Uint8Array(newLength);
                newArray.set(array);
                array = newArray;
            }
            array.set(bytes, length);
            length += bytes.length;
        }

        function appendInt64(value) {
            let hi, lo;
            if (value >= 0) {
                hi = value / pow32;
                lo = value % pow32;
            }
            else {
                value++;
                hi = Math.abs(value) / pow32;
                lo = Math.abs(value) % pow32;
                hi = ~hi;
                lo = ~lo;
            }
            appendBytes([hi >>> 24, hi >>> 16, hi >>> 8, hi, lo >>> 24, lo >>> 16, lo >>> 8, lo]);
        }
    }

    function deserialize(array) {
        const pow32 = 0x100000000; // 2^32
        let pos = 0;
        if (array instanceof ArrayBuffer) {
            array = new Uint8Array(array);
        }
        if (typeof array !== "object" || typeof array.length === "undefined") {
            throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");
        }
        if (!array.length) {
            throw new Error("Invalid argument: The byte array to deserialize is empty.");
        }
        if (!(array instanceof Uint8Array)) {
            array = new Uint8Array(array);
        }
        let data = read();
        if (pos < array.length) {
        }
        return data;

        function read() {
            const byte = array[pos++];
            if (byte >= 0x00 && byte <= 0x7f) return byte; // positive fixint
            if (byte >= 0x80 && byte <= 0x8f) return readMap(byte - 0x80); // fixmap
            if (byte >= 0x90 && byte <= 0x9f) return readArray(byte - 0x90); // fixarray
            if (byte >= 0xa0 && byte <= 0xbf) return readStr(byte - 0xa0); // fixstr
            if (byte === 0xc0) return null; // nil
            if (byte === 0xc1) throw new Error("Invalid byte code 0xc1 found."); // never used
            if (byte === 0xc2) return false // false
            if (byte === 0xc3) return true; // true
            if (byte === 0xc4) return readBin(-1, 1); // bin 8
            if (byte === 0xc5) return readBin(-1, 2); // bin 16
            if (byte === 0xc6) return readBin(-1, 4); // bin 32
            if (byte === 0xc7) return readExt(-1, 1); // ext 8
            if (byte === 0xc8) return readExt(-1, 2); // ext 16
            if (byte === 0xc9) return readExt(-1, 4) // ext 32
            if (byte === 0xca) return readFloat(4); // float 32
            if (byte === 0xcb) return readFloat(8); // float 64
            if (byte === 0xcc) return readUInt(1); // uint 8
            if (byte === 0xcd) return readUInt(2); // uint 16
            if (byte === 0xce) return readUInt(4); // uint 32
            if (byte === 0xcf) return readUInt(8) // uint 64
            if (byte === 0xd0) return readInt(1); // int 8
            if (byte === 0xd1) return readInt(2); // int 16
            if (byte === 0xd2) return readInt(4); // int 32
            if (byte === 0xd3) return readInt(8); // int 64
            if (byte === 0xd4) return readExt(1); // fixext 1
            if (byte === 0xd5) return readExt(2); // fixext 2
            if (byte === 0xd6) return readExt(4); // fixext 4
            if (byte === 0xd7) return readExt(8); // fixext 8
            if (byte === 0xd8) return readExt(16); // fixext 16
            if (byte === 0xd9) return readStr(-1, 1); // str 8
            if (byte === 0xda) return readStr(-1, 2); // str 16
            if (byte === 0xdb) return readStr(-1, 4); // str 32
            if (byte === 0xdc) return readArray(-1, 2); // array 16
            if (byte === 0xdd) return readArray(-1, 4); // array 32
            if (byte === 0xde) return readMap(-1, 2); // map 16
            if (byte === 0xdf) return readMap(-1, 4); // map 32
            if (byte >= 0xe0 && byte <= 0xff) return byte - 256; // negative fixint
            console.debug("msgpack array:", array);
            throw new Error("Invalid byte value '" + byte + "' at index " + (pos - 1) + " in the MessagePack binary data (length " + array.length + "): Expecting a range of 0 to 255. This is not a byte array.");
        }

        function readInt(size) {
            let value = 0;
            let first = true;
            while (size-- > 0) {
                if (first) {
                    let byte = array[pos++];
                    value += byte & 0x7f;
                    if (byte & 0x80) {
                        value -= 0x80;
                    }
                    first = false;
                }
                else {
                    value *= 256;
                    value += array[pos++];
                }
            }
            return value;
        }

        function readUInt(size) {
            let value = 0;
            while (size-- > 0) {
                value *= 256;
                value += array[pos++];
            }
            return value;
        }

        function readFloat(size) {
            let view = new DataView(array.buffer, pos, size);
            pos += size;
            if (size === 4) {
                return view.getFloat32(0, false);
            }
            if (size === 8) {
                return view.getFloat64(0, false);
            }
        }

        function readBin(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let data = array.subarray(pos, pos + size);
            pos += size;
            return data;
        }

        function readMap(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let data = {};
            while (size-- > 0) {
                let key = read();
                data[key] = read();
            }
            return data;
        }

        function readArray(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let data = [];
            while (size-- > 0) {
                data.push(read());
            }
            return data;
        }

        function readStr(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let start = pos;
            pos += size;
            return decodeUtf8(array, start, size);
        }

        function readExt(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let type = readUInt(1);
            let data = readBin(size);
            switch (type) {
                case 255:
                    return readExtDate(data);
            }
            return { type: type, data: data };
        }

        function readExtDate(data) {
            if (data.length === 4) {
                let sec = ((data[0] << 24) >>> 0) +
                    ((data[1] << 16) >>> 0) +
                    ((data[2] << 8) >>> 0) +
                    data[3];
                return new Date(sec * 1000);
            }
            if (data.length === 8) {
                let ns = ((data[0] << 22) >>> 0) +
                    ((data[1] << 14) >>> 0) +
                    ((data[2] << 6) >>> 0) +
                    (data[3] >>> 2);
                let sec = ((data[3] & 0x3) * pow32) +
                    ((data[4] << 24) >>> 0) +
                    ((data[5] << 16) >>> 0) +
                    ((data[6] << 8) >>> 0) +
                    data[7];
                return new Date(sec * 1000 + ns / 1000000);
            }
            if (data.length === 12) {
                let ns = ((data[0] << 24) >>> 0) +
                    ((data[1] << 16) >>> 0) +
                    ((data[2] << 8) >>> 0) +
                    data[3];
                pos -= 8;
                let sec = readInt(8);
                return new Date(sec * 1000 + ns / 1000000);
            }
            throw new Error("Invalid data length for a date value.");
        }
    }

    function encodeUtf8(str) {
        let ascii = true, length = str.length;
        for (let x = 0; x < length; x++) {
            if (str.charCodeAt(x) > 127) {
                ascii = false;
                break;
            }
        }

        let i = 0, bytes = new Uint8Array(str.length * (ascii ? 1 : 4));
        for (let ci = 0; ci !== length; ci++) {
            let c = str.charCodeAt(ci);
            if (c < 128) {
                bytes[i++] = c;
                continue;
            }
            if (c < 2048) {
                bytes[i++] = c >> 6 | 192;
            }
            else {
                if (c > 0xd7ff && c < 0xdc00) {
                    if (++ci >= length)
                        throw new Error("UTF-8 encode: incomplete surrogate pair");
                    let c2 = str.charCodeAt(ci);
                    if (c2 < 0xdc00 || c2 > 0xdfff)
                        throw new Error("UTF-8 encode: second surrogate character 0x" + c2.toString(16) + " at index " + ci + " out of range");
                    c = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
                    bytes[i++] = c >> 18 | 240;
                    bytes[i++] = c >> 12 & 63 | 128;
                }
                else bytes[i++] = c >> 12 | 224;
                bytes[i++] = c >> 6 & 63 | 128;
            }
            bytes[i++] = c & 63 | 128;
        }
        return ascii ? bytes : bytes.subarray(0, i);
    }

    function decodeUtf8(bytes, start, length) {
        let i = start, str = "";
        length += start;
        while (i < length) {
            let c = bytes[i++];
            if (c > 127) {
                if (c > 191 && c < 224) {
                    if (i >= length)
                        throw new Error("UTF-8 decode: incomplete 2-byte sequence");
                    c = (c & 31) << 6 | bytes[i++] & 63;
                }
                else if (c > 223 && c < 240) {
                    if (i + 1 >= length)
                        throw new Error("UTF-8 decode: incomplete 3-byte sequence");
                    c = (c & 15) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
                }
                else if (c > 239 && c < 248) {
                    if (i + 2 >= length)
                        throw new Error("UTF-8 decode: incomplete 4-byte sequence");
                    c = (c & 7) << 18 | (bytes[i++] & 63) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
                }
                else throw new Error("UTF-8 decode: unknown multibyte start 0x" + c.toString(16) + " at index " + (i - 1));
            }
            if (c <= 0xffff) str += String.fromCharCode(c);
            else if (c <= 0x10ffff) {
                c -= 0x10000;
                str += String.fromCharCode(c >> 10 | 0xd800)
                str += String.fromCharCode(c & 0x3FF | 0xdc00)
            }
            else throw new Error("UTF-8 decode: code point 0x" + c.toString(16) + " exceeds UTF-16 reach");
        }
        return str;
    }

    let msgpack = {
        serialize: serialize,
        deserialize: deserialize,

        encode: serialize,
        decode: deserialize
    };

    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = msgpack;
    }
    else {
        window[window.msgpackJsName || "msgpack"] = msgpack;
    }

})();


$("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
document.title = "E.S. MOD | Heal: + ; Hat: +";

document.getElementById("gameName").innerHTML = ">>☠️🌀E.S. Mod🌀☠️<<";
document.getElementById("leaderboard").append('🌀E.S. Mod🌀');
document.getElementById("diedText").innerHTML = "☠️ R.I.P ☠️";
document.getElementById("gameName").style.color = "#0080FF";
document.getElementById('nameInput').style.color = "#0080FF";
document.getElementById("loadingText").style.color = "#99ccff";
document.getElementById("scoreDisplay").style.color = "#ffff99";
document.getElementById("woodDisplay").style.color = "#99ff99";
document.getElementById("stoneDisplay").style.color = "#c0c0c0";
document.getElementById("killCounter").style.color = "#e0e0e0";
document.getElementById("foodDisplay").style.color = "#ff9999";
document.getElementById("allianceButton").style.color = "#99ccFF";
document.getElementById("chatButton").style.color = "#99ff99";
document.getElementById("storeButton").style.color = "#99ffcc";
document.getElementById("desktopInstructions").style.color = "#0080FF";
document.getElementById("leaderboardData").style.color = "#99ccff";
document.getElementById("ageText").style.color = "#99ffcc";
document.getElementById("leaderboard").style.color = "#0080ff";
document.getElementById("diedText").style.color = "#101010";
document.getElementById("ageBar").style.color = "#99ccff";
document.getElementById('enterGame').style.color = "#0000ff";
document.getElementById('enterGame').innerHTML = '🌀EnTeR GaMe🌀';
document.getElementById('nameInput').placeholder = "What is your name?";
document.getElementById("loadingText").innerHTML = "[Subscribe Zpace]";
$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'center',
                    'background-color': 'rgba(20, 20, 30, 2)',
                    '-moz-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px'});
$('.ytLink').css({'color': '#144db4',
                  'padding': '8px',
                  'background-color': 'rgba(0, 0, 0, 0)'});
$('#ageBar').css({'-webkit-border-radius': '0px',
                  '-moz-border-radius': '0px',
                  'border-radius': '0px',
                  'background-color': 'rgba(0, 50, ff, 0.4)'});
$('#enterGame').css({'background-color': 'rgba(0, 50, ff, 0.4)'});
var myElement = document.querySelector('#nameInput');
myElement.style.backgroundColor = "000033";
myElement.style.color = "#0099ff";
var getElement = document.querySelector('#enterGame');
getElement.style.backgroundColor = "#000099";
getElement.style.color = "#000000";
$('#gameName').css({'color': '#000000',
                    'text-shadow': '0 1px 0 rgba(255, 255, 255, 0)',
                    'text-align': 'center',
                    'font-size': '100px',
                    'margin-bottom': '-30px'});
document.getElementById("gameName").style.color = "#0090FF";

let mouseX;
let mouseY;

let width;
let height;

setInterval(() => {
    if(messageToggle == 1) {
        doNewSend(["6", [animate(true, 5)]])
    }
}, 200);

setInterval(() => {
    if(autoaim == true) {
        doNewSend(["D", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
            console.log("Tried. - Hat")
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
            console.log("Tried. - Acc")
        }
        oldHat = normalHat;
        oldAcc = normalAcc
    }
}, 25);

function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = 'Attack me & die';
    } else {
        characters = 'NooBs';
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
           result += "_";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}

function normal() {
    hat(normalHat);
    acc(normalAcc);
}


let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");

var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var instaSpeed = 230;
var instaSpeedd = 5;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var autoaim = false;
var tick = 1;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;
var msgpack5 = window.msgpack;
var boostDir;
var woodLeft;
var stoneLeft;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};

let healSpeed = 100;
let healSpeedd = 5;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let hatToggle = 1;
let hitToggle = 0;
let hitTToggle = 1;

document.msgpack = msgpack5;
function n(){
     this.buffer = new Uint8Array([0]);
     this.buffer.__proto__ = new Uint8Array;
     this.type = 0;
}

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
            var touchscreen = document.getElementById('touch-controls-fullscreen');
            width = touchscreen.clientWidth;
            height = touchscreen.clientHeight;
            $(window).resize(function() {
                width = touchscreen.clientWidth;
                height = touchscreen.clientHeight;
            });
            touchscreen.addEventListener("mousemove", e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
        }

    if (item == "C" && myPlayer.id == null){
        myPlayer.id = data[1];
    }

    if (item == "a") {
        enemiesNear = [];
        for(let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null) {
                enemiesNear.push(playerInfo);
            }
        }
    }

    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }

    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 19
                }
            };
        }
    }
    if(isEnemyNear == false && autoaim == false) {
        normalAcc = 11;
        if (myPlayer.y < 2400){
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            normalHat = 31;
        } else {
	        normalHat = 12;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
    if (item == "V") {
        if (data[2]) {
            primary = data[1][0];
            secondary = data[1][1] || null;
        } else {
            for (let i = 0; i < data[1].length; i++) {
                for (let i2 = 0; i2 < 3; i2++) {
                    if (i2 == data[1][i]) {
                        foodType = data[1][i];
                    }
                }
                for (let i2 = 3; i2 < 6; i2++) {
                    if (i2 == data[1][i]) {
                        wallType = data[1][i];
                    }
                }
                for (let i2 = 6; i2 < 10; i2++) {
                    if (i2 == data[1][i]) {
                        spikeType = data[1][i];
                    }
                }
                for (let i2 = 10; i2 < 13; i2++) {
                    if (i2 == data[1][i]) {
                        millType = data[1][i];
                    }
                }
                for (let i2 = 13; i2 < 15; i2++) {
                    if (i2 == data[1][i]) {
                        mineType = data[1][i];
                    }
                }
                for (let i2 = 15; i2 < 17; i2++) {
                    if (i2 == data[1][i]) {
                        boostType = data[1][i];
                    }
                }
                for (let i2 = 17; i2 < 23; i2++) {
                    if (i2 == data[1][i] && i2 !== 20) {
                        turretType = data[1][i];
                    }
                }
                spawnpadType = 20;
            }
        }
    }
    if(item == "O" && data[1] == myPlayer.id) {
        if(data[2] < 100 && data[2] > 0 && healToggle == 1) {
            setTimeout( () => {
                place(foodType, null);
            }, healSpeed);

        }
    }
}


function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}

function acc(id) {
    doNewSend(["c", [0, 0, 1]]);
    doNewSend(["c", [0, id, 1]]);
}

function hat(id) {
    doNewSend(["c", [0, id, 0]]);
}


function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["z", [id, null]]);
    doNewSend(["F", [1, angle]]);
    doNewSend(["F", [0, angle]]);
    doNewSend(["z", [myPlayer.weapon, true]]);
}




var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;

    return {
        start(keycode) {
            if (keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                if (!_isKeyDown) { // Only start if key wasn't already down
                    _isKeyDown = true;
                    _intervalId = setInterval(() => {
                        action();
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if (keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                if (_isKeyDown) { // Only stop if the key was pressed
                    _isKeyDown = false;
                    clearInterval(_intervalId);
                    _intervalId = undefined;
                }
            }
        }
    };
};

function getitem(item){
    doNewSend(["H", [item]]);
}

function chat(say){
    doNewSend(["6", [say]])
}

function aim(x, y){
     var touchscreen = document.getElementById('touch-controls-fullscreen');
     touchscreen.dispatchEvent(new MouseEvent("mousemove", {
         clientX: x,
         clientY: y

     }));
}
document.addEventListener('keydown', (e)=>{
if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }
})
const healer = repeater(81, () => {place(foodType)}, 50);
const boostPlacer = repeater(70, () => {place(boostType)}, 50);
const spikePlacer = repeater(86, () => {place(spikeType)}, 50);
const millPlacer = repeater(78, () => {place(millType)}, 50);
const turretPlacer = repeater(72, () => {place(turretType)}, 50);
const boostSpiker = repeater(71, boostSpike, 50);
function boostSpike() {
    if(boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["a", [boostDir]]);
}
document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);

    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
             let angle = myPlayer.dir + toRad(i * 72);
             place(millType, angle)
        }
    }
    if (e.keyCode == 73 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }
    }
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }
    if (e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        woodLeft = document.getElementById("woodDisplay").innerHTML;
        stoneLeft = document.getElementById("stoneDisplay").innerHTML;
        if(woodLeft > 100 && stoneLeft > 75){
            place(spikeType, myPlayer.dir);
            place(spikeType, myPlayer.dir - toRad(90));
            place(spikeType, myPlayer.dir + toRad(90));
            place(spikeType, myPlayer.dir - toRad(180));
        }else{
            place(spikeType, myPlayer.dir);
            place(spikeType, myPlayer.dir - toRad(120));
            place(spikeType, myPlayer.dir + toRad(120));
        }
        doNewSend(["6",["Sorry Noob! - E.S. Mod"]])
        setTimeout( () => {
            document.getElementById("woodDisplay").innerHTML = "E.S. MOD";
            document.getElementById("stoneDisplay").innerHTML = "IS OP";
        }, 75);
    }
    if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(20);
    }

    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["6", ["Bye Noob! - E.S. Mod"]]);
        doNewSend(["z", [primary, true]]);
        doNewSend(["c", [0, 7, 0]]);
        doNewSend(["c", [0, 0, 1]]);
        doNewSend(["c", [0, 19, 1]]);
        doNewSend(["F", [1]]);
        setTimeout( () => {
            doNewSend(["c", [0, 53, 0]]);
            doNewSend(["z", [secondary, true]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["z", [primary, true]]);
            doNewSend(["F", [0, null]]);
            doNewSend(["c", [0, 6, 0]]);
            autoaim = false;
        }, instaSpeed);
    }
    if (e.keyCode == 69 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hitToggle = (hitToggle + 1) % 2;
        if(hitTToggle == 1){
            if(hitToggle == 1) {
                if(!isEnemyNear){
                    doNewSend(["c", [0, 40, 0]]);
                }
            }else{
                doNewSend(["c", [0, 0, 0]]);
                doNewSend(["c", [0, 12, 0]]);
                doNewSend(["c", [0, 6, 0]]);
            }
        }
    }
   /* if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
        place(spikeType);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
        }, 100);

        setTimeout( () => {
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);
            autoaim = false;
        }, 200);
    }*/


    if(e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "E.S. MOD | Heal: - ; Hat: -"
                doNewSend(["6", ["E.S. MOD | Heal: - ; Hat: -"]]);
            } else {
                document.title = "E.S. MOD | Heal: - ; Hat: +"
                doNewSend(["6", ["E.S. MOD | Heal: - ; Hat: +"]]);
            }
        } else {
            if(hatToggle == 0) {
                document.title = "E.S. MOD | Heal: + ; Hat: -"
                doNewSend(["6", ["E.S. MOD | Heal: + ; Hat: -"]]);
            } else {
                document.title = "E.S. MOD | Heal: + ; Hat: +"
                doNewSend(["6", ["E.S. MOD | Heal: + ; Hat: +"]]);
            }
        }
    }
    if(e.keyCode == 113 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["z", [secondary, true]]);
        doNewSend(["c", [0, 53, 0]]);
        doNewSend(["F", [1]]);

        setTimeout( () => {
            doNewSend(["H", [12]]);
        }, 300);

        setTimeout( () => {
            doNewSend(["H", [15]]);
        }, 300);

        setTimeout( () => {
            doNewSend(["F", [0]]);
            doNewSend(["c", [0, 6, 0]]);
            doNewSend(["z", [primary, true]]);
            autoaim = false;
        }, 300);
    }
    if(e.keyCode == 112 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["z", [primary, true]]);
        doNewSend(["c", [0, 7, 0]]);
        doNewSend(["F", [1]]);

        setTimeout( () => {
            doNewSend(["H", [5]]);
            doNewSend(["F", [1]]);
        }, 90);


        setTimeout( () => {
            autoaim = false;
        }, 50);
    }

    if(e.keyCode == 36 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["H", [4]]);
        doNewSend(["H", [15]]);
    }
    if(e.keyCode == 33 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(instaSpeedd != 10){
            instaSpeedd += 1;
        }else{
            instaSpeedd = 1;
        }
            doNewSend(["6",["Insta-kill Speed: "+ instaSpeedd + "/10"]]);
        instaSpeed = (10 - instaSpeedd) * 10 + 170;
    }
    if(e.keyCode == 34 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(healSpeedd != 10){
            healSpeedd += 1;
        }else{
            healSpeedd = 1;
        }
            doNewSend(["6",["AutoHeal Speed: " + healSpeedd + "/10"]]);
        healSpeed = (10 - healSpeedd) * 10 + 40;
    }
    if(e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["z", [primary, true]]);
        doNewSend(["c", [0, 7, 0]]);
        doNewSend(["c", [0, 0, 1]]);
        doNewSend(["F", [1]]);
        setTimeout( () => {
            doNewSend(["F", [0, null]]);
            doNewSend(["c", [0, 11, 1]]);
            doNewSend(["c", [0, 0, 0]]);
            doNewSend(["c", [0, 12, 0]]);
            doNewSend(["c", [0, 6, 0]]);
        }, 200);
    }
    if(e.keyCode == 35 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["H", [5]]);
    }
    if(e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["H", [28]]);
    }
    if(e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["H", [28]]);
        doNewSend(["H", [25]]);
    }
    if(e.keyCode == 77 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "E.S. MOD | Heal: - ; Hat: -"
                doNewSend(["6", ["E.S. MOD | Heal: - ; Hat: -"]]);
            } else {
                document.title = "E.S. MOD | Heal: - ; Hat: +"
                doNewSend(["6", ["E.S. MOD | Heal: - ; Hat: +"]]);
            }
        } else {
            if(hatToggle == 0) {
                document.title = "E.S MOD | Heal: + ; Hat: -"
                doNewSend(["6", ["E.S. MOD | Heal: + ; Hat: -"]]);
            } else {
                document.title = "E.S. MOD | Heal: + ; Hat: +"
                doNewSend(["6", ["E.S. MOD | Heal: + ; Hat: +"]]);
            }
        }
    }
})

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout( () => {
            doNewSend(["9", [null]]);
            boostDir = null;
        }, 10);
    }
})


function isElementVisible(e) {
    return (e.offsetParent !== null);
}


function toRad(angle) {
    return angle * 0.01745329251;
}

function dist(a, b){
    return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) );
}
