var VEmojiPicker=(function(exports,vuePropertyDecorator){'use strict';/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}var langDefault = {
    search: 'Search ...',
    categories: {
        Activity: "Activity",
        Flags: "Flags",
        Foods: "Foods",
        Frequently: "Frequently",
        Objects: "Objects",
        Nature: "Nature",
        Peoples: "Peoples",
        Symbols: "Symbols",
        Places: "Places"
    }
};var lang = langDefault;
var i18n = function (translations) {
    lang = __assign(__assign({}, langDefault), translations);
};
// Sample parse translation
var t = function (term) {
    var properties = term.split(".");
    var text = lang;
    properties.forEach(function (p) {
        text = text[p];
    });
    return text;
};
var locale = { i18n: i18n, t: t };var Category = /** @class */ (function () {
    function Category(name, icon) {
        this.name = name;
        this.icon = icon;
    }
    Object.defineProperty(Category.prototype, "label", {
        get: function () {
            return t("categories." + this.name);
        },
        enumerable: false,
        configurable: true
    });
    return Category;
}());var icons = {
    activity: "\n    <svg style=\"max-height:18px\" width=\"14\" height=\"14\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 303.6 303.6\" fill=\"gray\">\n      <path d=\"M291.503 11.6c-10.4-10.4-37.2-11.6-48.4-11.6-50.4 0-122.4 18.4-173.6 69.6-77.2 76.8-78.4 201.6-58.4 222 10.8 10.4 35.6 12 49.2 12 49.6 0 121.2-18.4 173.2-70 76.4-76.4 80.4-199.6 58-222zm-231.2 277.2c-24.4 0-36-4.8-38.8-7.6-5.2-5.2-8.4-24.4-6.8-49.6l57.2 56.8c-4 .4-8 .4-11.6.4zm162.8-66c-38.8 38.8-90.4 57.2-132.4 63.6l-74-73.6c6-42 24-94 63.2-133.2 38-38 88-56.4 130.8-62.8l75.6 75.6c-6 40.8-24.4 91.6-63.2 130.4zm65.2-148.8l-58.8-59.2c4.8-.4 9.2-.4 13.6-.4 24.4 0 35.6 4.8 38 7.2 5.6 5.6 9.2 25.6 7.2 52.4z\"/>\n      <path d=\"M215.103 139.6l-20.8-20.8 13.2-13.2c2.8-2.8 2.8-7.6 0-10.4s-7.6-2.8-10.4 0l-13.2 13.6-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0-2.8 2.8-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-13.2 13.2c-2.8 2.8-2.8 7.6 0 10.4 1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2l13.2-13.2 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-21.2 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-20.8 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4zM169.103 47.6c-1.2-4-5.2-6-9.2-4.8-3.2 1.2-80.8 25.6-110.4 98-1.6 4 0 8.4 4 9.6.8.4 2 .4 2.8.4 2.8 0 5.6-1.6 6.8-4.4 27.2-66 100.4-89.6 101.2-89.6 4-1.2 6-5.2 4.8-9.2z\"/>\n    </svg>\n    ",
    flags: "\n    <svg style=\"max-height:18px\" width=\"14\" height=\"14\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" fill=\"gray\">\n      <path d=\"M472.928 34.72c-4.384-2.944-9.984-3.52-14.912-1.568-1.088.448-106.528 42.176-195.168.384C186.752-2.4 102.944 14.4 64 25.76V16c0-8.832-7.168-16-16-16S32 7.168 32 16v480c0 8.832 7.168 16 16 16s16-7.168 16-16V315.296c28.352-9.248 112.384-31.232 185.184 3.168 34.592 16.352 70.784 21.792 103.648 21.792 63.2 0 114.016-20.128 117.184-21.408 6.016-2.464 9.984-8.32 9.984-14.848V48c0-5.312-2.656-10.272-7.072-13.28zM448 292.672c-28.512 9.248-112.512 31.136-185.184-3.168C186.752 253.6 102.944 270.4 64 281.76V59.328c28.352-9.248 112.384-31.232 185.184 3.168 76 35.872 159.872 19.104 198.816 7.712v222.464z\"/>\n    </svg>\n    ",
    foods: "\n    <svg style=\"max-height:18px\" width=\"14\" height=\"14\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511.999 511.999\" fill=\"gray\">\n      <path d=\"M413.949 155.583a10.153 10.153 0 0 0-3.24-2.16c-.61-.25-1.24-.44-1.87-.57-3.25-.66-6.701.41-9.03 2.73a10.093 10.093 0 0 0-2.93 7.07 10.098 10.098 0 0 0 1.69 5.56c.36.54.779 1.05 1.24 1.52 1.86 1.86 4.44 2.93 7.07 2.93.65 0 1.31-.07 1.96-.2.63-.13 1.26-.32 1.87-.57a10.146 10.146 0 0 0 3.24-2.16c.47-.47.88-.98 1.25-1.52a10.098 10.098 0 0 0 1.49-3.6 10.038 10.038 0 0 0-2.74-9.03zM115.289 385.873c-.12-.64-.32-1.27-.57-1.87-.25-.6-.55-1.18-.91-1.73-.37-.54-.79-1.06-1.25-1.52a9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.88-.57a9.847 9.847 0 0 0-3.9 0c-.64.13-1.27.32-1.87.57-.61.25-1.19.56-1.73.92-.55.36-1.06.78-1.52 1.24-.46.46-.88.98-1.24 1.52-.36.55-.67 1.13-.92 1.73-.25.6-.45 1.23-.57 1.87-.13.651-.2 1.3-.2 1.96 0 .65.07 1.3.2 1.95.12.64.32 1.27.57 1.87.25.6.56 1.18.92 1.73.36.54.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92.6.25 1.23.44 1.87.57s1.3.2 1.95.2c.65 0 1.31-.07 1.95-.2.64-.13 1.27-.32 1.88-.57.6-.25 1.18-.56 1.72-.92.55-.36 1.059-.78 1.52-1.24.46-.46.88-.98 1.25-1.52.36-.55.66-1.13.91-1.73.25-.6.45-1.23.57-1.87.13-.65.2-1.3.2-1.95 0-.66-.07-1.31-.2-1.96z\"/>\n      <path d=\"M511.999 222.726c0-14.215-9.228-26.315-22.007-30.624-1.628-74.155-62.456-133.978-136.994-133.978H159.002c-74.538 0-135.366 59.823-136.994 133.978C9.228 196.411 0 208.51 0 222.726a32.076 32.076 0 0 0 3.847 15.203 44.931 44.931 0 0 0-.795 8.427v.708c0 14.06 6.519 26.625 16.693 34.833-10.178 8.275-16.693 20.891-16.693 35.001 0 15.114 7.475 28.515 18.921 36.702v26.668c0 40.588 33.021 73.608 73.608 73.608h320.836c40.588 0 73.608-33.021 73.608-73.608V353.6c11.446-8.186 18.921-21.587 18.921-36.702 0-13.852-6.354-26.385-16.361-34.702 9.983-8.212 16.361-20.656 16.361-34.562v-.708c0-2.985-.294-5.944-.877-8.845a32.082 32.082 0 0 0 3.93-15.355zM44.033 173.229h322.441c5.523 0 10-4.477 10-10s-4.477-10-10-10H49.737c16.896-43.883 59.503-75.106 109.265-75.106h193.996c62.942 0 114.438 49.953 116.934 112.295H42.068c.234-5.848.9-11.588 1.965-17.189zM23.052 316.896c0-13.837 11.257-25.094 25.094-25.094h117.298l55.346 50.188H48.146c-13.837 0-25.094-11.256-25.094-25.094zm.976-62.945c.422.111.847.215 1.275.309 7.421 1.634 14.68 8.002 22.365 14.744a576.29 576.29 0 0 0 3.206 2.799h-3.081c-11.253-.001-20.774-7.551-23.765-17.852zm308.727 89.752l57.233-51.899 49.904.57-81.871 74.24-25.266-22.911zm7.861 34.126H295.12l17.467-15.839h10.563l17.466 15.839zm19.599-86.027l-82.499 74.811-82.499-74.811h164.998zm-59.529-20c.849-.842 1.677-1.675 2.49-2.493 9.531-9.587 17.059-17.16 32.89-17.16 15.832 0 23.359 7.573 32.89 17.162.812.817 1.64 1.65 2.489 2.491h-70.759zm-160.13 0a485.82 485.82 0 0 0 2.489-2.492c9.531-9.588 17.059-17.161 32.89-17.161 15.83 0 23.358 7.573 32.888 17.16.813.818 1.641 1.651 2.49 2.493h-70.757zm275.862 162.073H95.582c-29.56 0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467 15.839H145.897c-5.523 0-10 4.477-10 10s4.477 10 10 10H467.07c-7.288 20.958-27.242 36.044-50.652 36.044zm53.608-56.046h-94.6l17.467-15.839h77.133v15.839zm-6.174-35.837h-48.906l54.624-49.533c11.135 2.604 19.376 12.665 19.376 24.439 0 13.836-11.257 25.094-25.094 25.094zm-2.728-70.19l.262-.227.101-.087.342-.298c.848-.738 1.682-1.469 2.501-2.187 4.105-3.601 8.089-7.095 12.04-9.819 3.446-2.375 6.868-4.164 10.326-4.925l.359-.081.04-.01.317-.076.065-.016a22.897 22.897 0 0 0 .42-.107l.196-.052a.374.374 0 0 0 .048-.012c-2.433 9.276-10.129 16.443-19.691 18.102a9.984 9.984 0 0 0-2.016-.205h-5.31zm21.271-37.073a40.746 40.746 0 0 0-4.536 1.281c-10.109 3.489-18.327 10.602-26.283 17.58l-.434.381c-9.178 8.052-17.923 15.723-29.033 17.834h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591-10.213-10.275-22.923-23.062-47.074-23.062-24.15 0-36.86 12.786-47.074 23.06-7.992 8.04-14.576 14.663-25.829 16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593-10.213-10.274-22.923-23.06-47.072-23.06-24.151 0-36.861 12.787-47.074 23.062-7.991 8.039-14.574 14.661-25.824 16.591h-7.065c-14.134 0-24.325-8.939-35.113-18.404-9.248-8.112-18.81-16.501-31.252-19.241a12.237 12.237 0 0 1-7.025-4.453 10.027 10.027 0 0 0-1.153-1.252 12.234 12.234 0 0 1-1.428-5.727c-.001-6.788 5.52-12.309 12.307-12.309h447.384c6.787 0 12.308 5.521 12.308 12.308 0 5.729-4.039 10.776-9.605 12.002z\"/>\n    </svg>\n    ",
    frequently: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.15 219.15\" width=\"14\" height=\"14\" fill=\"gray\">\n      <path d=\"M109.575 0C49.156 0 .001 49.155.001 109.574c0 60.42 49.154 109.576 109.573 109.576 60.42 0 109.574-49.156 109.574-109.576C219.149 49.155 169.995 0 109.575 0zm0 204.15c-52.148 0-94.573-42.427-94.573-94.576C15.001 57.426 57.427 15 109.575 15c52.148 0 94.574 42.426 94.574 94.574 0 52.15-42.426 94.576-94.574 94.576z\"/>\n      <path d=\"M166.112 108.111h-52.051V51.249a7.5 7.5 0 0 0-15 0v64.362a7.5 7.5 0 0 0 7.5 7.5h59.551a7.5 7.5 0 0 0 0-15z\"/>\n    </svg>\n    ",
    nature: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"14\" height=\"14\" fill=\"gray\">\n      <path d=\"M490.815 3.784C480.082 5.7 227.049 51.632 148.477 130.203c-39.153 39.153-64.259 87.884-70.694 137.218-5.881 45.081 4.347 85.929 28.878 116.708L.001 490.789 21.212 512l106.657-106.657c33.094 26.378 75.092 34.302 116.711 28.874 49.334-6.435 98.065-31.541 137.218-70.695C460.368 284.951 506.3 31.918 508.216 21.185L511.999 0l-21.184 3.784zm-43.303 39.493L309.407 181.383l-7.544-98.076c46.386-15.873 97.819-29.415 145.649-40.03zm-174.919 50.64l8.877 115.402-78.119 78.119-11.816-153.606c19.947-13.468 47.183-26.875 81.058-39.915zm-109.281 64.119l12.103 157.338-47.36 47.36c-39.246-52.892-24.821-139.885 35.257-204.698zm57.113 247.849c-26.548-.001-51.267-7.176-71.161-21.938l47.363-47.363 157.32 12.102c-40.432 37.475-89.488 57.201-133.522 57.199zm157.743-85.421l-153.605-11.816 78.118-78.118 115.403 8.877c-13.04 33.876-26.448 61.111-39.916 81.057zm50.526-110.326l-98.076-7.544L468.725 64.485c-10.589 47.717-24.147 99.232-40.031 145.653z\"/>\n    </svg>\n    ",
    objects: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 792 792\" fill=\"gray\">\n      <path d=\"M425.512 741.214H365.58c-14.183 0-25.164 11.439-25.164 25.622S351.397 792 365.58 792h59.932c15.101 0 26.54-10.981 26.54-25.164s-11.44-25.622-26.54-25.622zM472.638 671.209H319.821c-14.183 0-26.081 10.98-26.081 25.163s11.898 25.164 26.081 25.164h152.817c14.183 0 25.164-10.981 25.164-25.164s-10.982-25.163-25.164-25.163zM639.188 138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526 12.621 446.566 0 395.771 0 320.28 0 247.19 31.684 197.205 81.445c-49.761 49.527-81.904 121.24-81.904 196.282 0 33.861 7.779 68.629 22.879 103.866 15.1 35.228 38.565 78.614 70.005 130.396 7.448 12.269 15.764 31.205 25.623 56.271 12.104 30.757 22.87 51.713 31.566 63.602 5.027 6.872 11.899 10.063 20.596 10.063h228.766c9.605 0 16.359-4.188 21.504-11.898 6.754-10.132 13.987-27.516 22.42-51.693 8.951-25.691 16.838-43.982 23.329-55.364 30.571-53.587 54.446-99.747 70.464-137.717 16.018-37.979 24.246-74.124 24.246-107.526 0-49.878-12.347-96.545-37.511-139.093zm-35.696 232.437c-15.012 34.348-36.398 76.974-65.427 126.736-9.41 16.125-18.458 37.003-26.989 63.592-3.367 10.474-7.32 20.596-11.439 30.2H300.153c-6.862-11.439-12.26-25.837-18.761-42.089-12.718-31.801-23.338-52.621-30.2-64.061-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718 106.13-228.991 229.674-226.941 41.631.693 80.527 10.063 115.765 30.659 35.227 20.586 63.134 48.043 83.729 82.812 20.586 34.768 31.108 72.748 31.108 113.47-.001 27.449-7.692 58.596-22.881 93.345z\"/>\n    </svg>\n    ",
    peoples: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 106.059 106.059\" fill=\"gray\">\n      <path d=\"M90.544 90.542c20.687-20.684 20.685-54.341.002-75.024-20.688-20.689-54.347-20.689-75.031-.006-20.688 20.687-20.686 54.346.002 75.034 20.682 20.684 54.341 20.684 75.027-.004zM21.302 21.3c17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.455-17.494 17.494-45.96 17.496-63.455.003-17.498-17.498-17.496-45.966 0-63.46zM27 69.865s-2.958-11.438 6.705-8.874c0 0 17.144 9.295 38.651 0 9.662-2.563 6.705 8.874 6.705 8.874C73.539 86.824 53.03 85.444 53.03 85.444S32.521 86.824 27 69.865zm6.24-31.194a6.202 6.202 0 1 1 12.399.001 6.202 6.202 0 0 1-12.399-.001zm28.117 0a6.202 6.202 0 1 1 12.403.001 6.202 6.202 0 0 1-12.403-.001z\"/>\n    </svg>\n    ",
    places: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 611.999 611.998\" fill=\"gray\">\n      <path d=\"M596.583 15.454C586.226 5.224 573.354.523 558.423.523c-15.597 0-31.901 4.906-49.452 14.599-17.296 9.551-32.851 20.574-46.458 32.524h-.665c-2.655 2.322-10.953 10.287-25.219 24.553-14.272 14.272-26.217 26.223-35.845 36.51L112.401 26.406c-6.896-1.968-12.928.014-17.593 4.645L46.687 78.839c-4.326 4.297-5.805 9.268-4.977 15.597.829 6.287 3.979 10.627 9.629 13.607L280.32 228.839 161.514 347.978l-95.91 3.32c-4.645.164-8.637 1.643-12.276 5.311L5.872 404.397c-4.312 4.34-6.641 9.289-5.643 16.262 1.657 6.967 5.31 11.611 11.618 13.602l117.142 48.787 48.787 117.148c2.421 5.812 6.634 9.621 13.607 11.279h3.313c4.977 0 9.296-1.658 12.942-5.311l47.456-47.457c3.653-3.645 5.494-7.965 5.643-12.275l3.32-95.91 118.807-118.807 121.128 228.99c2.988 5.643 7.32 8.793 13.607 9.621 6.329.836 11.271-1.316 15.597-5.643l47.456-47.457c4.978-4.977 6.945-10.697 4.978-17.586l-82.296-288.389 59.732-59.739c10.287-10.287 21.699-24.149 33.183-45.134 5.777-10.542 10.032-20.886 12.942-31.194 5.722-20.218 3.258-44.07-12.608-59.73zm-59.4 110.176l-67.039 67.372c-5.628 5.657-6.811 11.122-4.977 17.586l81.637 288.388-22.563 22.238L403.438 292.89c-2.98-5.643-7.299-8.963-12.941-9.621-6.301-1.331-11.611.325-16.263 4.977l-141.37 141.37c-2.987 2.986-4.644 6.973-5.643 11.949l-3.32 95.904-22.896 23.236-41.48-98.566c-1.331-4.645-4.553-8.184-9.629-10.287L51.338 411.03l23.229-22.895 95.578-3.654c5.643-.99 9.622-2.654 12.276-5.309l141.37-141.371c4.651-4.645 6.308-9.954 4.984-16.262-.666-5.643-3.986-9.954-9.629-12.942L90.829 87.47l22.231-22.238 288.389 81.637c6.464 1.833 11.951.666 17.587-4.977l28.545-28.539 26.217-25.884 11.278-11.285 1.331-.666c27.873-23.895 55.088-38.16 72.016-38.16 5.969 0 9.954 1.324 11.611 3.979 18.917 18.585-21.099 72.484-32.851 84.293z\"/>\n    </svg>\n    ",
    symbols: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 511.626 511.626\" fill=\"gray\">\n      <path d=\"M475.366 71.949c-24.175-23.606-57.575-35.404-100.215-35.404-11.8 0-23.843 2.046-36.117 6.136-12.279 4.093-23.702 9.615-34.256 16.562-10.568 6.945-19.65 13.467-27.269 19.556a263.828 263.828 0 0 0-21.696 19.414 264.184 264.184 0 0 0-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556-10.564-6.95-21.985-12.468-34.261-16.562-12.275-4.089-24.316-6.136-36.116-6.136-42.637 0-76.039 11.801-100.211 35.404C12.087 95.55 0 128.286 0 170.16c0 12.753 2.24 25.891 6.711 39.398 4.471 13.514 9.566 25.031 15.275 34.546 5.708 9.514 12.181 18.792 19.414 27.834 7.233 9.041 12.519 15.272 15.846 18.698 3.33 3.426 5.948 5.903 7.851 7.427L243.25 469.938c3.427 3.426 7.614 5.144 12.562 5.144s9.138-1.718 12.563-5.144l177.87-171.31c43.588-43.58 65.38-86.406 65.38-128.472.001-41.877-12.085-74.61-36.259-98.207zm-53.961 199.846L255.813 431.391 89.938 271.507C54.344 235.922 36.55 202.133 36.55 170.156c0-15.415 2.046-29.026 6.136-40.824 4.093-11.8 9.327-21.177 15.703-28.124 6.377-6.949 14.132-12.607 23.268-16.988 9.141-4.377 18.086-7.328 26.84-8.85 8.754-1.52 18.079-2.281 27.978-2.281 9.896 0 20.557 2.424 31.977 7.279 11.418 4.853 21.934 10.944 31.545 18.271 9.613 7.332 17.845 14.183 24.7 20.557 6.851 6.38 12.559 12.229 17.128 17.559 3.424 4.189 8.091 6.283 13.989 6.283 5.9 0 10.562-2.094 13.99-6.283 4.568-5.33 10.28-11.182 17.131-17.559 6.852-6.374 15.085-13.222 24.694-20.557 9.613-7.327 20.129-13.418 31.553-18.271 11.416-4.854 22.08-7.279 31.977-7.279s19.219.761 27.977 2.281c8.757 1.521 17.702 4.473 26.84 8.85 9.137 4.38 16.892 10.042 23.267 16.988 6.376 6.947 11.612 16.324 15.705 28.124 4.086 11.798 6.132 25.409 6.132 40.824-.002 31.977-17.89 65.86-53.675 101.639z\"/>\n    </svg>\n    "
};
var categoriesDefault = [
    new Category("Frequently", icons["frequently"]),
    new Category("Peoples", icons["peoples"]),
    new Category("Nature", icons["nature"]),
    new Category("Foods", icons["foods"]),
    new Category("Activity", icons["activity"]),
    new Category("Objects", icons["objects"]),
    new Category("Places", icons["places"]),
    new Category("Symbols", icons["symbols"]),
    new Category("Flags", icons["flags"])
];var Emoji = /** @class */ (function () {
    function Emoji(data, category, aliases) {
        this.data = data;
        this.category = category;
        this.aliases = aliases;
    }
    return Emoji;
}());var emojisDefault = [
    new Emoji("😀", "Peoples", ['grinning', 'grinning_face']),
    new Emoji("😃", "Peoples", ['grinning_face_with_big_eyes', 'smiley']),
    new Emoji("😄", "Peoples", ['grinning_face_with_closed_eyes', 'smile']),
    new Emoji("😁", "Peoples", ['beaming_face', 'grin']),
    new Emoji("😆", "Peoples", ['laughing', 'lol', 'satisfied', 'squinting_face']),
    new Emoji("😅", "Peoples", ['grinning_face_with_sweat', 'sweat_smile']),
    new Emoji("🤣", "Peoples", ['rofl']),
    new Emoji("😂", "Peoples", ['joy', 'lmao', 'tears_of_joy']),
    new Emoji("🙂", "Peoples", ['slightly_smiling_face']),
    new Emoji("🙃", "Peoples", ['upside_down_face']),
    new Emoji("🫠", "Peoples", ['melt', 'melting_face']),
    new Emoji("😉", "Peoples", ['wink', 'winking_face']),
    new Emoji("😊", "Peoples", ['blush', 'smiling_face_with_closed_eyes']),
    new Emoji("😇", "Peoples", ['halo', 'innocent']),
    new Emoji("🥰", "Peoples", ['smiling_face_with_3_hearts']),
    new Emoji("😍", "Peoples", ['heart_eyes', 'smiling_face_with_heart_eyes']),
    new Emoji("🤩", "Peoples", ['star_struck']),
    new Emoji("😘", "Peoples", ['blowing_a_kiss', 'kissing_heart']),
    new Emoji("😗", "Peoples", ['kissing', 'kissing_face']),
    new Emoji("☺️", "Peoples", ['relaxed', 'smiling_face']),
    new Emoji("😚", "Peoples", ['kissing_closed_eyes', 'kissing_face_with_closed_eyes']),
    new Emoji("😙", "Peoples", ['kissing_face_with_smiling_eyes', 'kissing_smiling_eyes']),
    new Emoji("🥲", "Peoples", ['smiling_face_with_tear']),
    new Emoji("😋", "Peoples", ['savoring_food', 'yum']),
    new Emoji("😛", "Peoples", ['face_with_tongue', 'stuck_out_tongue']),
    new Emoji("😜", "Peoples", ['stuck_out_tongue_winking_eye']),
    new Emoji("🤪", "Peoples", ['zany', 'zany_face']),
    new Emoji("😝", "Peoples", ['stuck_out_tongue_closed_eyes']),
    new Emoji("🤑", "Peoples", ['money_mouth_face']),
    new Emoji("🤗", "Peoples", ['hug', 'hugging', 'hugging_face']),
    new Emoji("🤭", "Peoples", ['face_with_hand_over_mouth', 'hand_over_mouth']),
    new Emoji("🫢", "Peoples", ['face_with_open_eyes_hand_over_mouth', 'gasp']),
    new Emoji("🫣", "Peoples", ['face_with_peeking_eye', 'peek']),
    new Emoji("🤫", "Peoples", ['shush', 'shushing_face']),
    new Emoji("🤔", "Peoples", ['thinking', 'thinking_face', 'wtf']),
    new Emoji("🫡", "Peoples", ['salute', 'saluting_face']),
    new Emoji("🤐", "Peoples", ['zipper_mouth', 'zipper_mouth_face']),
    new Emoji("🤨", "Peoples", ['face_with_raised_eyebrow', 'raised_eyebrow']),
    new Emoji("😐️", "Peoples", ['neutral', 'neutral_face']),
    new Emoji("😑", "Peoples", ['expressionless', 'expressionless_face']),
    new Emoji("😶", "Peoples", ['no_mouth']),
    new Emoji("🫥", "Peoples", ['dotted_line_face']),
    new Emoji("😶‍🌫️", "Peoples", ['in_clouds']),
    new Emoji("😏", "Peoples", ['smirk', 'smirking', 'smirking_face']),
    new Emoji("😒", "Peoples", ['unamused', 'unamused_face']),
    new Emoji("🙄", "Peoples", ['rolling_eyes']),
    new Emoji("😬", "Peoples", ['grimacing', 'grimacing_face']),
    new Emoji("😮‍💨", "Peoples", ['exhale', 'exhaling']),
    new Emoji("🤥", "Peoples", ['lying', 'lying_face']),
    new Emoji("😌", "Peoples", ['relieved', 'relieved_face']),
    new Emoji("😔", "Peoples", ['pensive', 'pensive_face']),
    new Emoji("😪", "Peoples", ['sleepy', 'sleepy_face']),
    new Emoji("🤤", "Peoples", ['drooling', 'drooling_face']),
    new Emoji("😴", "Peoples", ['sleeping', 'sleeping_face']),
    new Emoji("😷", "Peoples", ['mask', 'medical_mask']),
    new Emoji("🤒", "Peoples", ['face_with_thermometer']),
    new Emoji("🤕", "Peoples", ['face_with_head_bandage']),
    new Emoji("🤢", "Peoples", ['nauseated', 'nauseated_face']),
    new Emoji("🤮", "Peoples", ['face_vomiting', 'vomiting']),
    new Emoji("🤧", "Peoples", ['sneezing', 'sneezing_face']),
    new Emoji("🥵", "Peoples", ['hot', 'hot_face']),
    new Emoji("🥶", "Peoples", ['cold', 'cold_face']),
    new Emoji("🥴", "Peoples", ['woozy', 'woozy_face']),
    new Emoji("😵", "Peoples", ['dizzy_face', 'knocked_out']),
    new Emoji("😵‍💫", "Peoples", ['dizzy_eyes']),
    new Emoji("🤯", "Peoples", ['exploding_head']),
    new Emoji("🤠", "Peoples", ['cowboy', 'cowboy_face']),
    new Emoji("🥳", "Peoples", ['hooray', 'partying', 'partying_face']),
    new Emoji("🥸", "Peoples", ['disguised', 'disguised_face']),
    new Emoji("😎", "Peoples", ['smiling_face_with_sunglasses', 'sunglasses_cool', 'too_cool']),
    new Emoji("🤓", "Peoples", ['nerd', 'nerd_face']),
    new Emoji("🧐", "Peoples", ['face_with_monocle']),
    new Emoji("😕", "Peoples", ['confused', 'confused_face']),
    new Emoji("🫤", "Peoples", ['face_with_diagonal_mouth']),
    new Emoji("😟", "Peoples", ['worried', 'worried_face']),
    new Emoji("🙁", "Peoples", ['slightly_frowning_face']),
    new Emoji("☹️", "Peoples", ['white_frowning_face']),
    new Emoji("😮", "Peoples", ['face_with_open_mouth', 'open_mouth']),
    new Emoji("😯", "Peoples", ['hushed', 'hushed_face']),
    new Emoji("😲", "Peoples", ['astonished', 'astonished_face']),
    new Emoji("😳", "Peoples", ['flushed', 'flushed_face']),
    new Emoji("🥺", "Peoples", ['pleading', 'pleading_face']),
    new Emoji("🥹", "Peoples", ['face_holding_back_tears', 'watery_eyes']),
    new Emoji("😦", "Peoples", ['frowning', 'frowning_face']),
    new Emoji("😧", "Peoples", ['anguished', 'anguished_face']),
    new Emoji("😨", "Peoples", ['fearful', 'fearful_face']),
    new Emoji("😰", "Peoples", ['anxious', 'anxious_face', 'cold_sweat']),
    new Emoji("😥", "Peoples", ['disappointed_relieved', 'sad_relieved_face']),
    new Emoji("😢", "Peoples", ['cry', 'crying_face']),
    new Emoji("😭", "Peoples", ['loudly_crying_face', 'sob']),
    new Emoji("😱", "Peoples", ['scream', 'screaming_in_fear']),
    new Emoji("😖", "Peoples", ['confounded', 'confounded_face']),
    new Emoji("😣", "Peoples", ['persevere', 'persevering_face']),
    new Emoji("😞", "Peoples", ['disappointed', 'disappointed_face']),
    new Emoji("😓", "Peoples", ['downcast_face', 'sweat']),
    new Emoji("😩", "Peoples", ['weary', 'weary_face']),
    new Emoji("😫", "Peoples", ['tired', 'tired_face']),
    new Emoji("🥱", "Peoples", ['yawn', 'yawning', 'yawning_face']),
    new Emoji("😤", "Peoples", ['nose_steam', 'triumph']),
    new Emoji("😡", "Peoples", ['pout', 'pouting_face', 'rage']),
    new Emoji("😠", "Peoples", ['angry', 'angry_face']),
    new Emoji("🤬", "Peoples", ['censored', 'face_with_symbols_on_mouth']),
    new Emoji("😈", "Peoples", ['smiling_imp']),
    new Emoji("👿", "Peoples", ['angry_imp', 'imp']),
    new Emoji("💀", "Peoples", ['skull']),
    new Emoji("☠️", "Peoples", ['skull_and_crossbones']),
    new Emoji("💩", "Peoples", ['poop', 'shit']),
    new Emoji("🤡", "Peoples", ['clown', 'clown_face']),
    new Emoji("👹", "Peoples", ['japanese_ogre', 'ogre']),
    new Emoji("👺", "Peoples", ['goblin', 'japanese_goblin']),
    new Emoji("👻", "Peoples", ['ghost']),
    new Emoji("👽️", "Peoples", ['alien']),
    new Emoji("👾", "Peoples", ['alien_monster', 'space_invader']),
    new Emoji("🤖", "Peoples", ['robot', 'robot_face']),
    new Emoji("😺", "Peoples", ['grinning_cat', 'smiley_cat']),
    new Emoji("😸", "Peoples", ['grinning_cat_with_closed_eyes', 'smile_cat']),
    new Emoji("😹", "Peoples", ['joy_cat', 'tears_of_joy_cat']),
    new Emoji("😻", "Peoples", ['heart_eyes_cat', 'smiling_cat_with_heart_eyes']),
    new Emoji("😼", "Peoples", ['smirk_cat', 'wry_smile_cat']),
    new Emoji("😽", "Peoples", ['kissing_cat']),
    new Emoji("🙀", "Peoples", ['scream_cat', 'weary_cat']),
    new Emoji("😿", "Peoples", ['crying_cat']),
    new Emoji("😾", "Peoples", ['pouting_cat']),
    new Emoji("🙈", "Peoples", ['see_no_evil']),
    new Emoji("🙉", "Peoples", ['hear_no_evil']),
    new Emoji("🙊", "Peoples", ['speak_no_evil']),
    new Emoji("💋", "Peoples", ['kiss']),
    new Emoji("💌", "Peoples", ['love_letter']),
    new Emoji("💘", "Peoples", ['cupid', 'heart_with_arrow']),
    new Emoji("💝", "Peoples", ['gift_heart', 'heart_with_ribbon']),
    new Emoji("💖", "Peoples", ['sparkling_heart']),
    new Emoji("💗", "Peoples", ['growing_heart', 'heartpulse']),
    new Emoji("💓", "Peoples", ['beating_heart', 'heartbeat']),
    new Emoji("💞", "Peoples", ['revolving_hearts']),
    new Emoji("💕", "Peoples", ['two_hearts']),
    new Emoji("💟", "Peoples", ['heart_decoration']),
    new Emoji("❣️", "Peoples", ['heart_exclamation']),
    new Emoji("💔", "Peoples", ['broken_heart']),
    new Emoji("❤️‍🔥", "Peoples", ['heart_on_fire']),
    new Emoji("❤️‍🩹", "Peoples", ['mending_heart']),
    new Emoji("❤️", "Peoples", ['heart', 'red_heart']),
    new Emoji("🧡", "Peoples", ['orange_heart']),
    new Emoji("💛", "Peoples", ['yellow_heart']),
    new Emoji("💚", "Peoples", ['green_heart']),
    new Emoji("💙", "Peoples", ['blue_heart']),
    new Emoji("💜", "Peoples", ['purple_heart']),
    new Emoji("🤎", "Peoples", ['brown_heart']),
    new Emoji("🖤", "Peoples", ['black_heart']),
    new Emoji("🤍", "Peoples", ['white_heart']),
    new Emoji("💯", "Peoples", ['100']),
    new Emoji("💢", "Peoples", ['anger']),
    new Emoji("💥", "Peoples", ['boom', 'collision']),
    new Emoji("💫", "Peoples", ['dizzy']),
    new Emoji("💦", "Peoples", ['sweat_drops']),
    new Emoji("💨", "Peoples", ['dash', 'dashing_away']),
    new Emoji("🕳️", "Peoples", ['hole']),
    new Emoji("💣️", "Peoples", ['bomb']),
    new Emoji("💬", "Peoples", ['speech_balloon']),
    new Emoji("👁️‍🗨️", "Peoples", ['eye_in_speech_bubble']),
    new Emoji("🗨️", "Peoples", ['left_speech_bubble']),
    new Emoji("🗯️", "Peoples", ['right_anger_bubble']),
    new Emoji("💭", "Peoples", ['thought_balloon']),
    new Emoji("💤", "Peoples", ['zzz']),
    new Emoji("👋", "Peoples", ['wave', 'waving_hand']),
    new Emoji("🤚", "Peoples", ['raised_back_of_hand']),
    new Emoji("🖐️", "Peoples", ['raised_hand_with_fingers_splayed']),
    new Emoji("✋", "Peoples", ['high_five', 'raised_hand']),
    new Emoji("🖖", "Peoples", ['vulcan']),
    new Emoji("🫱", "Peoples", ['rightwards_hand']),
    new Emoji("🫲", "Peoples", ['leftwards_hand']),
    new Emoji("🫳", "Peoples", ['palm_down']),
    new Emoji("🫴", "Peoples", ['palm_up']),
    new Emoji("👌", "Peoples", ['ok_hand']),
    new Emoji("🤌", "Peoples", ['pinch', 'pinched_fingers']),
    new Emoji("🤏", "Peoples", ['pinching_hand']),
    new Emoji("✌️", "Peoples", ['v', 'victory']),
    new Emoji("🤞", "Peoples", ['fingers_crossed']),
    new Emoji("🫰", "Peoples", ['hand_with_index_finger_and_thumb_crossed']),
    new Emoji("🤟", "Peoples", ['love_you_gesture']),
    new Emoji("🤘", "Peoples", ['metal', 'sign_of_the_horns']),
    new Emoji("🤙", "Peoples", ['call_me_hand']),
    new Emoji("👈️", "Peoples", ['point_left']),
    new Emoji("👉️", "Peoples", ['point_right']),
    new Emoji("👆️", "Peoples", ['point_up']),
    new Emoji("🖕", "Peoples", ['middle_finger']),
    new Emoji("👇️", "Peoples", ['point_down']),
    new Emoji("☝️", "Peoples", ['point_up_2']),
    new Emoji("🫵", "Peoples", ['point_forward']),
    new Emoji("👍️", "Peoples", ['+1', 'thumbsup', 'yes']),
    new Emoji("👎️", "Peoples", ['-1', 'no', 'thumbsdown']),
    new Emoji("✊", "Peoples", ['fist']),
    new Emoji("👊", "Peoples", ['punch']),
    new Emoji("🤛", "Peoples", ['left_facing_fist']),
    new Emoji("🤜", "Peoples", ['right_facing_fist']),
    new Emoji("👏", "Peoples", ['clap', 'clapping_hands']),
    new Emoji("🙌", "Peoples", ['raised_hands']),
    new Emoji("🫶", "Peoples", ['heart_hands']),
    new Emoji("👐", "Peoples", ['open_hands']),
    new Emoji("🤲", "Peoples", ['palms_up_together']),
    new Emoji("🤝", "Peoples", ['handshake']),
    new Emoji("🙏", "Peoples", ['folded_hands', 'pray']),
    new Emoji("✍️", "Peoples", ['writing_hand']),
    new Emoji("💅", "Peoples", ['nail_care', 'nail_polish']),
    new Emoji("🤳", "Peoples", ['selfie']),
    new Emoji("💪", "Peoples", ['muscle', 'right_bicep']),
    new Emoji("🦾", "Peoples", ['mechanical_arm']),
    new Emoji("🦿", "Peoples", ['mechanical_leg']),
    new Emoji("🦵", "Peoples", ['leg']),
    new Emoji("🦶", "Peoples", ['foot']),
    new Emoji("👂️", "Peoples", ['ear']),
    new Emoji("🦻", "Peoples", ['ear_with_hearing_aid', 'hearing_aid']),
    new Emoji("👃", "Peoples", ['nose']),
    new Emoji("🧠", "Peoples", ['brain']),
    new Emoji("🫀", "Peoples", ['anatomical_heart']),
    new Emoji("🫁", "Peoples", ['lungs']),
    new Emoji("🦷", "Peoples", ['tooth']),
    new Emoji("🦴", "Peoples", ['bone']),
    new Emoji("👀", "Peoples", ['eyes']),
    new Emoji("👁️", "Peoples", ['eye']),
    new Emoji("👅", "Peoples", ['tongue']),
    new Emoji("👄", "Peoples", ['lips', 'mouth']),
    new Emoji("🫦", "Peoples", ['biting_lip']),
    new Emoji("👶", "Peoples", ['baby']),
    new Emoji("🧒", "Peoples", ['child']),
    new Emoji("👦", "Peoples", ['boy']),
    new Emoji("👧", "Peoples", ['girl']),
    new Emoji("🧑", "Peoples", ['adult']),
    new Emoji("👱", "Peoples", ['blond_haired']),
    new Emoji("👨", "Peoples", ['man']),
    new Emoji("🧔", "Peoples", ['person_bearded']),
    new Emoji("🧔‍♂️", "Peoples", ['man_bearded']),
    new Emoji("🧔‍♀️", "Peoples", ['woman_bearded']),
    new Emoji("👨‍🦰", "Peoples", ['man_red_haired']),
    new Emoji("👨‍🦱", "Peoples", ['man_curly_haired']),
    new Emoji("👨‍🦳", "Peoples", ['man_white_haired']),
    new Emoji("👨‍🦲", "Peoples", ['man_bald']),
    new Emoji("👩", "Peoples", ['woman']),
    new Emoji("👩‍🦰", "Peoples", ['woman_red_haired']),
    new Emoji("🧑‍🦰", "Peoples", ['red_haired']),
    new Emoji("👩‍🦱", "Peoples", ['woman_curly_haired']),
    new Emoji("🧑‍🦱", "Peoples", ['curly_haired']),
    new Emoji("👩‍🦳", "Peoples", ['woman_white_haired']),
    new Emoji("🧑‍🦳", "Peoples", ['white_haired']),
    new Emoji("👩‍🦲", "Peoples", ['woman_bald']),
    new Emoji("🧑‍🦲", "Peoples", ['bald']),
    new Emoji("👱‍♀️", "Peoples", ['woman_blond_haired']),
    new Emoji("👱‍♂️", "Peoples", ['man_blond_haired']),
    new Emoji("🧓", "Peoples", ['older_adult']),
    new Emoji("👴", "Peoples", ['older_man']),
    new Emoji("👵", "Peoples", ['older_woman']),
    new Emoji("🙍", "Peoples", ['person_frowning']),
    new Emoji("🙍‍♂️", "Peoples", ['man_frowning']),
    new Emoji("🙍‍♀️", "Peoples", ['woman_frowning']),
    new Emoji("🙎", "Peoples", ['person_pouting', 'pouting']),
    new Emoji("🙎‍♂️", "Peoples", ['man_pouting']),
    new Emoji("🙎‍♀️", "Peoples", ['woman_pouting']),
    new Emoji("🙅", "Peoples", ['no_good', 'person_gesturing_no']),
    new Emoji("🙅‍♂️", "Peoples", ['man_gesturing_no']),
    new Emoji("🙅‍♀️", "Peoples", ['woman_gesturing_no']),
    new Emoji("🙆", "Peoples", ['all_good', 'person_gesturing_ok']),
    new Emoji("🙆‍♂️", "Peoples", ['man_gesturing_ok']),
    new Emoji("🙆‍♀️", "Peoples", ['woman_gesturing_ok']),
    new Emoji("💁", "Peoples", ['person_tipping_hand']),
    new Emoji("💁‍♂️", "Peoples", ['man_tipping_hand']),
    new Emoji("💁‍♀️", "Peoples", ['woman_tipping_hand']),
    new Emoji("🙋", "Peoples", ['person_raising_hand']),
    new Emoji("🙋‍♂️", "Peoples", ['man_raising_hand']),
    new Emoji("🙋‍♀️", "Peoples", ['woman_raising_hand']),
    new Emoji("🧏", "Peoples", ['deaf_person']),
    new Emoji("🧏‍♂️", "Peoples", ['deaf_man']),
    new Emoji("🧏‍♀️", "Peoples", ['deaf_woman']),
    new Emoji("🙇", "Peoples", ['bow', 'person_bowing']),
    new Emoji("🙇‍♂️", "Peoples", ['man_bowing']),
    new Emoji("🙇‍♀️", "Peoples", ['woman_bowing']),
    new Emoji("🤦", "Peoples", ['facepalm', 'person_facepalming']),
    new Emoji("🤦‍♂️", "Peoples", ['man_facepalming']),
    new Emoji("🤦‍♀️", "Peoples", ['woman_facepalming']),
    new Emoji("🤷", "Peoples", ['person_shrugging', 'shrug']),
    new Emoji("🤷‍♂️", "Peoples", ['man_shrugging']),
    new Emoji("🤷‍♀️", "Peoples", ['woman_shrugging']),
    new Emoji("🧑‍⚕️", "Peoples", ['health_worker']),
    new Emoji("👨‍⚕️", "Peoples", ['man_health_worker']),
    new Emoji("👩‍⚕️", "Peoples", ['woman_health_worker']),
    new Emoji("🧑‍🎓", "Peoples", ['student']),
    new Emoji("👨‍🎓", "Peoples", ['man_student']),
    new Emoji("👩‍🎓", "Peoples", ['woman_student']),
    new Emoji("🧑‍🏫", "Peoples", ['teacher']),
    new Emoji("👨‍🏫", "Peoples", ['man_teacher']),
    new Emoji("👩‍🏫", "Peoples", ['woman_teacher']),
    new Emoji("🧑‍⚖️", "Peoples", ['judge']),
    new Emoji("👨‍⚖️", "Peoples", ['man_judge']),
    new Emoji("👩‍⚖️", "Peoples", ['woman_judge']),
    new Emoji("🧑‍🌾", "Peoples", ['farmer']),
    new Emoji("👨‍🌾", "Peoples", ['man_farmer']),
    new Emoji("👩‍🌾", "Peoples", ['woman_farmer']),
    new Emoji("🧑‍🍳", "Peoples", ['cook']),
    new Emoji("👨‍🍳", "Peoples", ['man_cook']),
    new Emoji("👩‍🍳", "Peoples", ['woman_cook']),
    new Emoji("🧑‍🔧", "Peoples", ['mechanic']),
    new Emoji("👨‍🔧", "Peoples", ['man_mechanic']),
    new Emoji("👩‍🔧", "Peoples", ['woman_mechanic']),
    new Emoji("🧑‍🏭", "Peoples", ['factory_worker']),
    new Emoji("👨‍🏭", "Peoples", ['man_factory_worker']),
    new Emoji("👩‍🏭", "Peoples", ['woman_factory_worker']),
    new Emoji("🧑‍💼", "Peoples", ['office_worker']),
    new Emoji("👨‍💼", "Peoples", ['man_office_worker']),
    new Emoji("👩‍💼", "Peoples", ['woman_office_worker']),
    new Emoji("🧑‍🔬", "Peoples", ['scientist']),
    new Emoji("👨‍🔬", "Peoples", ['man_scientist']),
    new Emoji("👩‍🔬", "Peoples", ['woman_scientist']),
    new Emoji("🧑‍💻", "Peoples", ['technologist']),
    new Emoji("👨‍💻", "Peoples", ['man_technologist']),
    new Emoji("👩‍💻", "Peoples", ['woman_technologist']),
    new Emoji("🧑‍🎤", "Peoples", ['singer']),
    new Emoji("👨‍🎤", "Peoples", ['man_singer']),
    new Emoji("👩‍🎤", "Peoples", ['woman_singer']),
    new Emoji("🧑‍🎨", "Peoples", ['artist']),
    new Emoji("👨‍🎨", "Peoples", ['man_artist']),
    new Emoji("👩‍🎨", "Peoples", ['woman_artist']),
    new Emoji("🧑‍✈️", "Peoples", ['pilot']),
    new Emoji("👨‍✈️", "Peoples", ['man_pilot']),
    new Emoji("👩‍✈️", "Peoples", ['woman_pilot']),
    new Emoji("🧑‍🚀", "Peoples", ['astronaut']),
    new Emoji("👨‍🚀", "Peoples", ['man_astronaut']),
    new Emoji("👩‍🚀", "Peoples", ['woman_astronaut']),
    new Emoji("🧑‍🚒", "Peoples", ['firefighter']),
    new Emoji("👨‍🚒", "Peoples", ['man_firefighter']),
    new Emoji("👩‍🚒", "Peoples", ['woman_firefighter']),
    new Emoji("👮", "Peoples", ['cop', 'police_officer']),
    new Emoji("👮‍♂️", "Peoples", ['man_police_officer']),
    new Emoji("👮‍♀️", "Peoples", ['woman_police_officer']),
    new Emoji("🕵️", "Peoples", ['detective']),
    new Emoji("🕵️‍♂️", "Peoples", ['man_detective']),
    new Emoji("🕵️‍♀️", "Peoples", ['woman_detective']),
    new Emoji("💂", "Peoples", ['guard']),
    new Emoji("💂‍♂️", "Peoples", ['man_guard']),
    new Emoji("💂‍♀️", "Peoples", ['woman_guard']),
    new Emoji("🥷", "Peoples", ['ninja']),
    new Emoji("👷", "Peoples", ['construction_worker']),
    new Emoji("👷‍♂️", "Peoples", ['man_construction_worker']),
    new Emoji("👷‍♀️", "Peoples", ['woman_construction_worker']),
    new Emoji("🫅", "Peoples", ['person_with_crown', 'royalty']),
    new Emoji("🤴", "Peoples", ['prince']),
    new Emoji("👸", "Peoples", ['princess']),
    new Emoji("👳", "Peoples", ['person_wearing_turban']),
    new Emoji("👳‍♂️", "Peoples", ['man_wearing_turban']),
    new Emoji("👳‍♀️", "Peoples", ['woman_wearing_turban']),
    new Emoji("👲", "Peoples", ['person_with_skullcap']),
    new Emoji("🧕", "Peoples", ['woman_with_headscarf']),
    new Emoji("🤵", "Peoples", ['person_in_tuxedo']),
    new Emoji("🤵‍♂️", "Peoples", ['man_in_tuxedo']),
    new Emoji("🤵‍♀️", "Peoples", ['woman_in_tuxedo']),
    new Emoji("👰", "Peoples", ['person_with_veil']),
    new Emoji("👰‍♂️", "Peoples", ['man_with_veil']),
    new Emoji("👰‍♀️", "Peoples", ['woman_with_veil']),
    new Emoji("🤰", "Peoples", ['pregnant_woman']),
    new Emoji("🫃", "Peoples", ['pregnant_man']),
    new Emoji("🫄", "Peoples", ['pregnant_person']),
    new Emoji("🤱", "Peoples", ['breast_feeding']),
    new Emoji("👩‍🍼", "Peoples", ['woman_feeding_baby']),
    new Emoji("👨‍🍼", "Peoples", ['man_feeding_baby']),
    new Emoji("🧑‍🍼", "Peoples", ['person_feeding_baby']),
    new Emoji("👼", "Peoples", ['angel']),
    new Emoji("🎅", "Peoples", ['santa']),
    new Emoji("🤶", "Peoples", ['mrs_claus']),
    new Emoji("🧑‍🎄", "Peoples", ['mx_claus']),
    new Emoji("🦸", "Peoples", ['superhero']),
    new Emoji("🦸‍♂️", "Peoples", ['man_superhero']),
    new Emoji("🦸‍♀️", "Peoples", ['woman_superhero']),
    new Emoji("🦹", "Peoples", ['supervillain']),
    new Emoji("🦹‍♂️", "Peoples", ['man_supervillain']),
    new Emoji("🦹‍♀️", "Peoples", ['woman_supervillain']),
    new Emoji("🧙", "Peoples", ['mage']),
    new Emoji("🧙‍♂️", "Peoples", ['man_mage']),
    new Emoji("🧙‍♀️", "Peoples", ['woman_mage']),
    new Emoji("🧚", "Peoples", ['fairy']),
    new Emoji("🧚‍♂️", "Peoples", ['man_fairy']),
    new Emoji("🧚‍♀️", "Peoples", ['woman_fairy']),
    new Emoji("🧛", "Peoples", ['vampire']),
    new Emoji("🧛‍♂️", "Peoples", ['man_vampire']),
    new Emoji("🧛‍♀️", "Peoples", ['woman_vampire']),
    new Emoji("🧜", "Peoples", ['merperson']),
    new Emoji("🧜‍♂️", "Peoples", ['merman']),
    new Emoji("🧜‍♀️", "Peoples", ['mermaid']),
    new Emoji("🧝", "Peoples", ['elf']),
    new Emoji("🧝‍♂️", "Peoples", ['man_elf']),
    new Emoji("🧝‍♀️", "Peoples", ['woman_elf']),
    new Emoji("🧞", "Peoples", ['genie']),
    new Emoji("🧞‍♂️", "Peoples", ['man_genie']),
    new Emoji("🧞‍♀️", "Peoples", ['woman_genie']),
    new Emoji("🧟", "Peoples", ['zombie']),
    new Emoji("🧟‍♂️", "Peoples", ['man_zombie']),
    new Emoji("🧟‍♀️", "Peoples", ['woman_zombie']),
    new Emoji("🧌", "Peoples", ['troll']),
    new Emoji("💆", "Peoples", ['massage', 'person_getting_massage']),
    new Emoji("💆‍♂️", "Peoples", ['man_getting_massage']),
    new Emoji("💆‍♀️", "Peoples", ['woman_getting_massage']),
    new Emoji("💇", "Peoples", ['haircut', 'person_getting_haircut']),
    new Emoji("💇‍♂️", "Peoples", ['man_getting_haircut']),
    new Emoji("💇‍♀️", "Peoples", ['woman_getting_haircut']),
    new Emoji("🚶", "Peoples", ['person_walking', 'walking']),
    new Emoji("🚶‍♂️", "Peoples", ['man_walking']),
    new Emoji("🚶‍♀️", "Peoples", ['woman_walking']),
    new Emoji("🧍", "Peoples", ['person_standing', 'standing']),
    new Emoji("🧍‍♂️", "Peoples", ['man_standing']),
    new Emoji("🧍‍♀️", "Peoples", ['woman_standing']),
    new Emoji("🧎", "Peoples", ['kneeling', 'person_kneeling']),
    new Emoji("🧎‍♂️", "Peoples", ['man_kneeling']),
    new Emoji("🧎‍♀️", "Peoples", ['woman_kneeling']),
    new Emoji("🧑‍🦯", "Peoples", ['person_with_probing_cane', 'person_with_white_cane']),
    new Emoji("👨‍🦯", "Peoples", ['man_with_probing_cane', 'man_with_white_cane']),
    new Emoji("👩‍🦯", "Peoples", ['woman_with_probing_cane', 'woman_with_white_cane']),
    new Emoji("🧑‍🦼", "Peoples", ['person_in_motorized_wheelchair']),
    new Emoji("👨‍🦼", "Peoples", ['man_in_motorized_wheelchair']),
    new Emoji("👩‍🦼", "Peoples", ['woman_in_motorized_wheelchair']),
    new Emoji("🧑‍🦽", "Peoples", ['person_in_manual_wheelchair']),
    new Emoji("👨‍🦽", "Peoples", ['man_in_manual_wheelchair']),
    new Emoji("👩‍🦽", "Peoples", ['woman_in_manual_wheelchair']),
    new Emoji("🏃", "Peoples", ['person_running', 'running']),
    new Emoji("🏃‍♂️", "Peoples", ['man_running']),
    new Emoji("🏃‍♀️", "Peoples", ['woman_running']),
    new Emoji("💃", "Peoples", ['dancer', 'woman_dancing']),
    new Emoji("🕺", "Peoples", ['man_dancing']),
    new Emoji("🕴️", "Peoples", ['levitate', 'levitating', 'person_in_suit_levitating']),
    new Emoji("👯", "Peoples", ['dancers', 'people_with_bunny_ears_partying']),
    new Emoji("👯‍♂️", "Peoples", ['men_with_bunny_ears_partying']),
    new Emoji("👯‍♀️", "Peoples", ['women_with_bunny_ears_partying']),
    new Emoji("🧖", "Peoples", ['person_in_steamy_room']),
    new Emoji("🧖‍♂️", "Peoples", ['man_in_steamy_room']),
    new Emoji("🧖‍♀️", "Peoples", ['woman_in_steamy_room']),
    new Emoji("🧗", "Peoples", ['climbing', 'person_climbing']),
    new Emoji("🧗‍♂️", "Peoples", ['man_climbing']),
    new Emoji("🧗‍♀️", "Peoples", ['woman_climbing']),
    new Emoji("🤺", "Peoples", ['fencer', 'fencing', 'person_fencing']),
    new Emoji("🏇", "Peoples", ['horse_racing']),
    new Emoji("⛷️", "Peoples", ['person_skiing', 'skier', 'skiing']),
    new Emoji("🏂️", "Peoples", ['person_snowboarding', 'snowboarder', 'snowboarding']),
    new Emoji("🏌️", "Peoples", ['golfer', 'golfing', 'person_golfing']),
    new Emoji("🏌️‍♂️", "Peoples", ['man_golfing']),
    new Emoji("🏌️‍♀️", "Peoples", ['woman_golfing']),
    new Emoji("🏄️", "Peoples", ['person_surfing', 'surfer', 'surfing']),
    new Emoji("🏄‍♂️", "Peoples", ['man_surfing']),
    new Emoji("🏄‍♀️", "Peoples", ['woman_surfing']),
    new Emoji("🚣", "Peoples", ['person_rowing_boat', 'rowboat']),
    new Emoji("🚣‍♂️", "Peoples", ['man_rowing_boat']),
    new Emoji("🚣‍♀️", "Peoples", ['woman_rowing_boat']),
    new Emoji("🏊️", "Peoples", ['person_swimming', 'swimmer', 'swimming']),
    new Emoji("🏊‍♂️", "Peoples", ['man_swimming']),
    new Emoji("🏊‍♀️", "Peoples", ['woman_swimming']),
    new Emoji("⛹️", "Peoples", ['person_bouncing_ball']),
    new Emoji("⛹️‍♂️", "Peoples", ['man_bouncing_ball']),
    new Emoji("⛹️‍♀️", "Peoples", ['woman_bouncing_ball']),
    new Emoji("🏋️", "Peoples", ['person_lifting_weights', 'weight_lifter', 'weight_lifting']),
    new Emoji("🏋️‍♂️", "Peoples", ['man_lifting_weights']),
    new Emoji("🏋️‍♀️", "Peoples", ['woman_lifting_weights']),
    new Emoji("🚴", "Peoples", ['bicyclist', 'biking', 'person_biking']),
    new Emoji("🚴‍♂️", "Peoples", ['man_biking']),
    new Emoji("🚴‍♀️", "Peoples", ['woman_biking']),
    new Emoji("🚵", "Peoples", ['mountain_bicyclist', 'mountain_biking', 'person_mountain_biking']),
    new Emoji("🚵‍♂️", "Peoples", ['man_mountain_biking']),
    new Emoji("🚵‍♀️", "Peoples", ['woman_mountain_biking']),
    new Emoji("🤸", "Peoples", ['cartwheeling', 'person_cartwheel']),
    new Emoji("🤸‍♂️", "Peoples", ['man_cartwheeling']),
    new Emoji("🤸‍♀️", "Peoples", ['woman_cartwheeling']),
    new Emoji("🤼", "Peoples", ['people_wrestling', 'wrestlers', 'wrestling']),
    new Emoji("🤼‍♂️", "Peoples", ['men_wrestling']),
    new Emoji("🤼‍♀️", "Peoples", ['women_wrestling']),
    new Emoji("🤽", "Peoples", ['person_playing_water_polo', 'water_polo']),
    new Emoji("🤽‍♂️", "Peoples", ['man_playing_water_polo']),
    new Emoji("🤽‍♀️", "Peoples", ['woman_playing_water_polo']),
    new Emoji("🤾", "Peoples", ['handball', 'person_playing_handball']),
    new Emoji("🤾‍♂️", "Peoples", ['man_playing_handball']),
    new Emoji("🤾‍♀️", "Peoples", ['woman_playing_handball']),
    new Emoji("🤹", "Peoples", ['juggler', 'juggling', 'person_juggling']),
    new Emoji("🤹‍♂️", "Peoples", ['man_juggling']),
    new Emoji("🤹‍♀️", "Peoples", ['woman_juggling']),
    new Emoji("🧘", "Peoples", ['person_in_lotus_position']),
    new Emoji("🧘‍♂️", "Peoples", ['man_in_lotus_position']),
    new Emoji("🧘‍♀️", "Peoples", ['woman_in_lotus_position']),
    new Emoji("🛀", "Peoples", ['bath', 'person_taking_bath']),
    new Emoji("🛌", "Peoples", ['person_in_bed', 'sleeping_accommodation']),
    new Emoji("🧑‍🤝‍🧑", "Peoples", ['people_holding_hands']),
    new Emoji("👭", "Peoples", ['two_women_holding_hands']),
    new Emoji("👫", "Peoples", ['couple']),
    new Emoji("👬", "Peoples", ['two_men_holding_hands']),
    new Emoji("💏", "Peoples", ['couple_kiss', 'couplekiss']),
    new Emoji("👩‍❤️‍💋‍👨", "Peoples", ['kiss_mw', 'kiss_wm']),
    new Emoji("👨‍❤️‍💋‍👨", "Peoples", ['kiss_mm']),
    new Emoji("👩‍❤️‍💋‍👩", "Peoples", ['kiss_ww']),
    new Emoji("💑", "Peoples", ['couple_with_heart']),
    new Emoji("👩‍❤️‍👨", "Peoples", ['couple_with_heart_mw', 'couple_with_heart_wm']),
    new Emoji("👨‍❤️‍👨", "Peoples", ['couple_with_heart_mm']),
    new Emoji("👩‍❤️‍👩", "Peoples", ['couple_with_heart_ww']),
    new Emoji("👪️", "Peoples", ['family']),
    new Emoji("👨‍👩‍👦", "Peoples", ['family_mwb']),
    new Emoji("👨‍👩‍👧", "Peoples", ['family_mwg']),
    new Emoji("👨‍👩‍👧‍👦", "Peoples", ['family_mwgb']),
    new Emoji("👨‍👩‍👦‍👦", "Peoples", ['family_mwbb']),
    new Emoji("👨‍👩‍👧‍👧", "Peoples", ['family_mwgg']),
    new Emoji("👨‍👨‍👦", "Peoples", ['family_mmb']),
    new Emoji("👨‍👨‍👧", "Peoples", ['family_mmg']),
    new Emoji("👨‍👨‍👧‍👦", "Peoples", ['family_mmgb']),
    new Emoji("👨‍👨‍👦‍👦", "Peoples", ['family_mmbb']),
    new Emoji("👨‍👨‍👧‍👧", "Peoples", ['family_mmgg']),
    new Emoji("👩‍👩‍👦", "Peoples", ['family_wwb']),
    new Emoji("👩‍👩‍👧", "Peoples", ['family_wwg']),
    new Emoji("👩‍👩‍👧‍👦", "Peoples", ['family_wwgb']),
    new Emoji("👩‍👩‍👦‍👦", "Peoples", ['family_wwbb']),
    new Emoji("👩‍👩‍👧‍👧", "Peoples", ['family_wwgg']),
    new Emoji("👨‍👦", "Peoples", ['family_mb']),
    new Emoji("👨‍👦‍👦", "Peoples", ['family_mbb']),
    new Emoji("👨‍👧", "Peoples", ['family_mg']),
    new Emoji("👨‍👧‍👦", "Peoples", ['family_mgb']),
    new Emoji("👨‍👧‍👧", "Peoples", ['family_mgg']),
    new Emoji("👩‍👦", "Peoples", ['family_wb']),
    new Emoji("👩‍👦‍👦", "Peoples", ['family_wbb']),
    new Emoji("👩‍👧", "Peoples", ['family_wg']),
    new Emoji("👩‍👧‍👦", "Peoples", ['family_wgb']),
    new Emoji("👩‍👧‍👧", "Peoples", ['family_wgg']),
    new Emoji("🗣️", "Peoples", ['speaking_head']),
    new Emoji("👤", "Peoples", ['bust_in_silhouette']),
    new Emoji("👥", "Peoples", ['busts_in_silhouette']),
    new Emoji("🫂", "Peoples", ['people_hugging']),
    new Emoji("👣", "Peoples", ['footprints']),
    new Emoji("🏻", "Peoples", ['tone1', 'tone_light']),
    new Emoji("🏼", "Peoples", ['tone2', 'tone_medium_light']),
    new Emoji("🏽", "Peoples", ['tone3', 'tone_medium']),
    new Emoji("🏾", "Peoples", ['tone4', 'tone_medium_dark']),
    new Emoji("🏿", "Peoples", ['tone5', 'tone_dark']),
    new Emoji("🦰", "Peoples", ['red_hair']),
    new Emoji("🦱", "Peoples", ['curly_hair']),
    new Emoji("🦳", "Peoples", ['white_hair']),
    new Emoji("🦲", "Peoples", ['no_hair']),
    new Emoji("🐵", "Nature", ['monkey_face']),
    new Emoji("🐒", "Nature", ['monkey']),
    new Emoji("🦍", "Nature", ['gorilla']),
    new Emoji("🦧", "Nature", ['orangutan']),
    new Emoji("🐶", "Nature", ['dog_face']),
    new Emoji("🐕️", "Nature", ['dog']),
    new Emoji("🦮", "Nature", ['guide_dog']),
    new Emoji("🐕‍🦺", "Nature", ['service_dog']),
    new Emoji("🐩", "Nature", ['poodle']),
    new Emoji("🐺", "Nature", ['wolf', 'wolf_face']),
    new Emoji("🦊", "Nature", ['fox', 'fox_face']),
    new Emoji("🦝", "Nature", ['raccoon']),
    new Emoji("🐱", "Nature", ['cat_face']),
    new Emoji("🐈️", "Nature", ['cat']),
    new Emoji("🐈‍⬛", "Nature", ['black_cat']),
    new Emoji("🦁", "Nature", ['lion', 'lion_face']),
    new Emoji("🐯", "Nature", ['tiger_face']),
    new Emoji("🐅", "Nature", ['tiger']),
    new Emoji("🐆", "Nature", ['leopard']),
    new Emoji("🐴", "Nature", ['horse_face']),
    new Emoji("🐎", "Nature", ['horse', 'racehorse']),
    new Emoji("🦄", "Nature", ['unicorn', 'unicorn_face']),
    new Emoji("🦓", "Nature", ['zebra']),
    new Emoji("🦌", "Nature", ['deer']),
    new Emoji("🦬", "Nature", ['bison']),
    new Emoji("🐮", "Nature", ['cow_face']),
    new Emoji("🐂", "Nature", ['ox']),
    new Emoji("🐃", "Nature", ['water_buffalo']),
    new Emoji("🐄", "Nature", ['cow']),
    new Emoji("🐷", "Nature", ['pig_face']),
    new Emoji("🐖", "Nature", ['pig']),
    new Emoji("🐗", "Nature", ['boar']),
    new Emoji("🐽", "Nature", ['pig_nose']),
    new Emoji("🐏", "Nature", ['ram']),
    new Emoji("🐑", "Nature", ['ewe', 'sheep']),
    new Emoji("🐐", "Nature", ['goat']),
    new Emoji("🐪", "Nature", ['dromedary_camel']),
    new Emoji("🐫", "Nature", ['camel']),
    new Emoji("🦙", "Nature", ['llama']),
    new Emoji("🦒", "Nature", ['giraffe']),
    new Emoji("🐘", "Nature", ['elephant']),
    new Emoji("🦣", "Nature", ['mammoth']),
    new Emoji("🦏", "Nature", ['rhino', 'rhinoceros']),
    new Emoji("🦛", "Nature", ['hippo']),
    new Emoji("🐭", "Nature", ['mouse_face']),
    new Emoji("🐁", "Nature", ['mouse']),
    new Emoji("🐀", "Nature", ['rat']),
    new Emoji("🐹", "Nature", ['hamster', 'hamster_face']),
    new Emoji("🐰", "Nature", ['rabbit_face']),
    new Emoji("🐇", "Nature", ['rabbit']),
    new Emoji("🐿️", "Nature", ['chipmunk']),
    new Emoji("🦫", "Nature", ['beaver']),
    new Emoji("🦔", "Nature", ['hedgehog']),
    new Emoji("🦇", "Nature", ['bat']),
    new Emoji("🐻", "Nature", ['bear', 'bear_face']),
    new Emoji("🐻‍❄️", "Nature", ['polar_bear', 'polar_bear_face']),
    new Emoji("🐨", "Nature", ['koala', 'koala_face']),
    new Emoji("🐼", "Nature", ['panda', 'panda_face']),
    new Emoji("🦥", "Nature", ['sloth']),
    new Emoji("🦦", "Nature", ['otter']),
    new Emoji("🦨", "Nature", ['skunk']),
    new Emoji("🦘", "Nature", ['kangaroo']),
    new Emoji("🦡", "Nature", ['badger']),
    new Emoji("🐾", "Nature", ['paw_prints']),
    new Emoji("🦃", "Nature", ['turkey']),
    new Emoji("🐔", "Nature", ['chicken', 'chicken_face']),
    new Emoji("🐓", "Nature", ['rooster']),
    new Emoji("🐣", "Nature", ['hatching_chick']),
    new Emoji("🐤", "Nature", ['baby_chick']),
    new Emoji("🐥", "Nature", ['hatched_chick']),
    new Emoji("🐦️", "Nature", ['bird', 'bird_face']),
    new Emoji("🐧", "Nature", ['penguin', 'penguin_face']),
    new Emoji("🕊️", "Nature", ['dove']),
    new Emoji("🦅", "Nature", ['eagle']),
    new Emoji("🦆", "Nature", ['duck']),
    new Emoji("🦢", "Nature", ['swan']),
    new Emoji("🦉", "Nature", ['owl']),
    new Emoji("🦤", "Nature", ['dodo']),
    new Emoji("🪶", "Nature", ['feather']),
    new Emoji("🦩", "Nature", ['flamingo']),
    new Emoji("🦚", "Nature", ['peacock']),
    new Emoji("🦜", "Nature", ['parrot']),
    new Emoji("🐸", "Nature", ['frog', 'frog_face']),
    new Emoji("🐊", "Nature", ['crocodile']),
    new Emoji("🐢", "Nature", ['turtle']),
    new Emoji("🦎", "Nature", ['lizard']),
    new Emoji("🐍", "Nature", ['snake']),
    new Emoji("🐲", "Nature", ['dragon_face']),
    new Emoji("🐉", "Nature", ['dragon']),
    new Emoji("🦕", "Nature", ['sauropod']),
    new Emoji("🦖", "Nature", ['t-rex', 'trex']),
    new Emoji("🐳", "Nature", ['spouting_whale']),
    new Emoji("🐋", "Nature", ['whale']),
    new Emoji("🐬", "Nature", ['dolphin']),
    new Emoji("🦭", "Nature", ['seal']),
    new Emoji("🐟️", "Nature", ['fish']),
    new Emoji("🐠", "Nature", ['tropical_fish']),
    new Emoji("🐡", "Nature", ['blowfish']),
    new Emoji("🦈", "Nature", ['shark']),
    new Emoji("🐙", "Nature", ['octopus']),
    new Emoji("🐚", "Nature", ['shell']),
    new Emoji("🪸", "Nature", ['coral']),
    new Emoji("🐌", "Nature", ['snail']),
    new Emoji("🦋", "Nature", ['butterfly']),
    new Emoji("🐛", "Nature", ['bug']),
    new Emoji("🐜", "Nature", ['ant']),
    new Emoji("🐝", "Nature", ['bee']),
    new Emoji("🪲", "Nature", ['beetle']),
    new Emoji("🐞", "Nature", ['lady_beetle']),
    new Emoji("🦗", "Nature", ['cricket']),
    new Emoji("🪳", "Nature", ['cockroach']),
    new Emoji("🕷️", "Nature", ['spider']),
    new Emoji("🕸️", "Nature", ['spider_web']),
    new Emoji("🦂", "Nature", ['scorpion']),
    new Emoji("🦟", "Nature", ['mosquito']),
    new Emoji("🪰", "Nature", ['fly']),
    new Emoji("🪱", "Nature", ['worm']),
    new Emoji("🦠", "Nature", ['microbe']),
    new Emoji("💐", "Nature", ['bouquet']),
    new Emoji("🌸", "Nature", ['cherry_blossom']),
    new Emoji("💮", "Nature", ['white_flower']),
    new Emoji("🪷", "Nature", ['lotus']),
    new Emoji("🏵️", "Nature", ['rosette']),
    new Emoji("🌹", "Nature", ['rose']),
    new Emoji("🥀", "Nature", ['wilted_flower']),
    new Emoji("🌺", "Nature", ['hibiscus']),
    new Emoji("🌻", "Nature", ['sunflower']),
    new Emoji("🌼", "Nature", ['blossom']),
    new Emoji("🌷", "Nature", ['tulip']),
    new Emoji("🌱", "Nature", ['seedling']),
    new Emoji("🪴", "Nature", ['potted_plant']),
    new Emoji("🌲", "Nature", ['evergreen_tree']),
    new Emoji("🌳", "Nature", ['deciduous_tree']),
    new Emoji("🌴", "Nature", ['palm_tree']),
    new Emoji("🌵", "Nature", ['cactus']),
    new Emoji("🌾", "Nature", ['ear_of_rice', 'sheaf_of_rice']),
    new Emoji("🌿", "Nature", ['herb']),
    new Emoji("☘️", "Nature", ['shamrock']),
    new Emoji("🍀", "Nature", ['four_leaf_clover']),
    new Emoji("🍁", "Nature", ['maple_leaf']),
    new Emoji("🍂", "Nature", ['fallen_leaf']),
    new Emoji("🍃", "Nature", ['leaves']),
    new Emoji("🪹", "Nature", ['empty_nest', 'nest']),
    new Emoji("🪺", "Nature", ['nest_with_eggs']),
    new Emoji("🍇", "Foods", ['grapes']),
    new Emoji("🍈", "Foods", ['melon']),
    new Emoji("🍉", "Foods", ['watermelon']),
    new Emoji("🍊", "Foods", ['orange', 'tangerine']),
    new Emoji("🍋", "Foods", ['lemon']),
    new Emoji("🍌", "Foods", ['banana']),
    new Emoji("🍍", "Foods", ['pineapple']),
    new Emoji("🥭", "Foods", ['mango']),
    new Emoji("🍎", "Foods", ['apple', 'red_apple']),
    new Emoji("🍏", "Foods", ['green_apple']),
    new Emoji("🍐", "Foods", ['pear']),
    new Emoji("🍑", "Foods", ['peach']),
    new Emoji("🍒", "Foods", ['cherries']),
    new Emoji("🍓", "Foods", ['strawberry']),
    new Emoji("🫐", "Foods", ['blueberries']),
    new Emoji("🥝", "Foods", ['kiwi']),
    new Emoji("🍅", "Foods", ['tomato']),
    new Emoji("🫒", "Foods", ['olive']),
    new Emoji("🥥", "Foods", ['coconut']),
    new Emoji("🥑", "Foods", ['avocado']),
    new Emoji("🍆", "Foods", ['eggplant']),
    new Emoji("🥔", "Foods", ['potato']),
    new Emoji("🥕", "Foods", ['carrot']),
    new Emoji("🌽", "Foods", ['corn', 'ear_of_corn']),
    new Emoji("🌶️", "Foods", ['hot_pepper']),
    new Emoji("🫑", "Foods", ['bell_pepper']),
    new Emoji("🥒", "Foods", ['cucumber']),
    new Emoji("🥬", "Foods", ['leafy_green']),
    new Emoji("🥦", "Foods", ['broccoli']),
    new Emoji("🧄", "Foods", ['garlic']),
    new Emoji("🧅", "Foods", ['onion']),
    new Emoji("🍄", "Foods", ['mushroom']),
    new Emoji("🥜", "Foods", ['peanuts']),
    new Emoji("🫘", "Foods", ['beans']),
    new Emoji("🌰", "Foods", ['chestnut']),
    new Emoji("🍞", "Foods", ['bread']),
    new Emoji("🥐", "Foods", ['croissant']),
    new Emoji("🥖", "Foods", ['baguette_bread']),
    new Emoji("🫓", "Foods", ['flatbread']),
    new Emoji("🥨", "Foods", ['pretzel']),
    new Emoji("🥯", "Foods", ['bagel']),
    new Emoji("🥞", "Foods", ['pancakes']),
    new Emoji("🧇", "Foods", ['waffle']),
    new Emoji("🧀", "Foods", ['cheese']),
    new Emoji("🍖", "Foods", ['meat_on_bone']),
    new Emoji("🍗", "Foods", ['poultry_leg']),
    new Emoji("🥩", "Foods", ['cut_of_meat']),
    new Emoji("🥓", "Foods", ['bacon']),
    new Emoji("🍔", "Foods", ['hamburger']),
    new Emoji("🍟", "Foods", ['french_fries', 'fries']),
    new Emoji("🍕", "Foods", ['pizza']),
    new Emoji("🌭", "Foods", ['hotdog']),
    new Emoji("🥪", "Foods", ['sandwich']),
    new Emoji("🌮", "Foods", ['taco']),
    new Emoji("🌯", "Foods", ['burrito']),
    new Emoji("🫔", "Foods", ['tamale']),
    new Emoji("🥙", "Foods", ['stuffed_flatbread']),
    new Emoji("🧆", "Foods", ['falafel']),
    new Emoji("🥚", "Foods", ['egg']),
    new Emoji("🍳", "Foods", ['cooking', 'fried_egg']),
    new Emoji("🥘", "Foods", ['shallow_pan_of_food']),
    new Emoji("🍲", "Foods", ['pot_of_food', 'stew']),
    new Emoji("🫕", "Foods", ['fondue']),
    new Emoji("🥣", "Foods", ['bowl_with_spoon']),
    new Emoji("🥗", "Foods", ['green_salad', 'salad']),
    new Emoji("🍿", "Foods", ['popcorn']),
    new Emoji("🧈", "Foods", ['butter']),
    new Emoji("🧂", "Foods", ['salt']),
    new Emoji("🥫", "Foods", ['canned_food']),
    new Emoji("🍱", "Foods", ['bento', 'bento_box']),
    new Emoji("🍘", "Foods", ['rice_cracker']),
    new Emoji("🍙", "Foods", ['rice_ball']),
    new Emoji("🍚", "Foods", ['cooked_rice', 'rice']),
    new Emoji("🍛", "Foods", ['curry', 'curry_rice']),
    new Emoji("🍜", "Foods", ['ramen', 'steaming_bowl']),
    new Emoji("🍝", "Foods", ['spaghetti']),
    new Emoji("🍠", "Foods", ['sweet_potato']),
    new Emoji("🍢", "Foods", ['oden']),
    new Emoji("🍣", "Foods", ['sushi']),
    new Emoji("🍤", "Foods", ['fried_shrimp']),
    new Emoji("🍥", "Foods", ['fish_cake']),
    new Emoji("🥮", "Foods", ['moon_cake']),
    new Emoji("🍡", "Foods", ['dango']),
    new Emoji("🥟", "Foods", ['dumpling']),
    new Emoji("🥠", "Foods", ['fortune_cookie']),
    new Emoji("🥡", "Foods", ['takeout_box']),
    new Emoji("🦀", "Foods", ['crab']),
    new Emoji("🦞", "Foods", ['lobster']),
    new Emoji("🦐", "Foods", ['shrimp']),
    new Emoji("🦑", "Foods", ['squid']),
    new Emoji("🦪", "Foods", ['oyster']),
    new Emoji("🍦", "Foods", ['icecream', 'soft_serve']),
    new Emoji("🍧", "Foods", ['shaved_ice']),
    new Emoji("🍨", "Foods", ['ice_cream']),
    new Emoji("🍩", "Foods", ['doughnut']),
    new Emoji("🍪", "Foods", ['cookie']),
    new Emoji("🎂", "Foods", ['birthday', 'birthday_cake']),
    new Emoji("🍰", "Foods", ['cake', 'shortcake']),
    new Emoji("🧁", "Foods", ['cupcake']),
    new Emoji("🥧", "Foods", ['pie']),
    new Emoji("🍫", "Foods", ['chocolate_bar']),
    new Emoji("🍬", "Foods", ['candy']),
    new Emoji("🍭", "Foods", ['lollipop']),
    new Emoji("🍮", "Foods", ['custard']),
    new Emoji("🍯", "Foods", ['honey_pot']),
    new Emoji("🍼", "Foods", ['baby_bottle']),
    new Emoji("🥛", "Foods", ['glass_of_milk', 'milk']),
    new Emoji("☕️", "Foods", ['coffee']),
    new Emoji("🫖", "Foods", ['teapot']),
    new Emoji("🍵", "Foods", ['tea']),
    new Emoji("🍶", "Foods", ['sake']),
    new Emoji("🍾", "Foods", ['champagne']),
    new Emoji("🍷", "Foods", ['wine_glass']),
    new Emoji("🍸️", "Foods", ['cocktail']),
    new Emoji("🍹", "Foods", ['tropical_drink']),
    new Emoji("🍺", "Foods", ['beer']),
    new Emoji("🍻", "Foods", ['beers']),
    new Emoji("🥂", "Foods", ['clinking_glasses']),
    new Emoji("🥃", "Foods", ['tumbler_glass', 'whisky']),
    new Emoji("🫗", "Foods", ['pour', 'pouring_liquid']),
    new Emoji("🥤", "Foods", ['cup_with_straw']),
    new Emoji("🧋", "Foods", ['boba_drink', 'bubble_tea']),
    new Emoji("🧃", "Foods", ['beverage_box', 'juice_box']),
    new Emoji("🧉", "Foods", ['mate']),
    new Emoji("🧊", "Foods", ['ice', 'ice_cube']),
    new Emoji("🥢", "Foods", ['chopsticks']),
    new Emoji("🍽️", "Foods", ['fork_knife_plate']),
    new Emoji("🍴", "Foods", ['fork_and_knife']),
    new Emoji("🥄", "Foods", ['spoon']),
    new Emoji("🔪", "Foods", ['knife']),
    new Emoji("🫙", "Foods", ['jar']),
    new Emoji("🏺", "Foods", ['amphora']),
    new Emoji("🌍️", "Places", ['earth_africa', 'earth_europe']),
    new Emoji("🌎️", "Places", ['earth_americas']),
    new Emoji("🌏️", "Places", ['earth_asia']),
    new Emoji("🌐", "Places", ['globe_with_meridians']),
    new Emoji("🗺️", "Places", ['world_map']),
    new Emoji("🗾", "Places", ['japan_map']),
    new Emoji("🧭", "Places", ['compass']),
    new Emoji("🏔️", "Places", ['mountain_snow']),
    new Emoji("⛰️", "Places", ['mountain']),
    new Emoji("🌋", "Places", ['volcano']),
    new Emoji("🗻", "Places", ['mount_fuji']),
    new Emoji("🏕️", "Places", ['camping']),
    new Emoji("🏖️", "Places", ['beach', 'beach_with_umbrella']),
    new Emoji("🏜️", "Places", ['desert']),
    new Emoji("🏝️", "Places", ['desert_island', 'island']),
    new Emoji("🏞️", "Places", ['national_park']),
    new Emoji("🏟️", "Places", ['stadium']),
    new Emoji("🏛️", "Places", ['classical_building']),
    new Emoji("🏗️", "Places", ['building_construction', 'construction_site']),
    new Emoji("🧱", "Places", ['bricks']),
    new Emoji("🪨", "Places", ['rock']),
    new Emoji("🪵", "Places", ['wood']),
    new Emoji("🛖", "Places", ['hut']),
    new Emoji("🏘️", "Places", ['homes', 'houses']),
    new Emoji("🏚️", "Places", ['derelict_house', 'house_abandoned']),
    new Emoji("🏠️", "Places", ['house']),
    new Emoji("🏡", "Places", ['house_with_garden']),
    new Emoji("🏢", "Places", ['office']),
    new Emoji("🏣", "Places", ['post_office']),
    new Emoji("🏤", "Places", ['european_post_office']),
    new Emoji("🏥", "Places", ['hospital']),
    new Emoji("🏦", "Places", ['bank']),
    new Emoji("🏨", "Places", ['hotel']),
    new Emoji("🏩", "Places", ['love_hotel']),
    new Emoji("🏪", "Places", ['convenience_store']),
    new Emoji("🏫", "Places", ['school']),
    new Emoji("🏬", "Places", ['department_store']),
    new Emoji("🏭️", "Places", ['factory']),
    new Emoji("🏯", "Places", ['japanese_castle']),
    new Emoji("🏰", "Places", ['castle', 'european_castle']),
    new Emoji("💒", "Places", ['wedding']),
    new Emoji("🗼", "Places", ['tokyo_tower']),
    new Emoji("🗽", "Places", ['statue_of_liberty']),
    new Emoji("⛪️", "Places", ['church']),
    new Emoji("🕌", "Places", ['mosque']),
    new Emoji("🛕", "Places", ['hindu_temple']),
    new Emoji("🕍", "Places", ['synagogue']),
    new Emoji("⛩️", "Places", ['shinto_shrine']),
    new Emoji("🕋", "Places", ['kaaba']),
    new Emoji("⛲️", "Places", ['fountain']),
    new Emoji("⛺️", "Places", ['tent']),
    new Emoji("🌁", "Places", ['foggy']),
    new Emoji("🌃", "Places", ['night_with_stars']),
    new Emoji("🏙️", "Places", ['cityscape']),
    new Emoji("🌄", "Places", ['sunrise_over_mountains']),
    new Emoji("🌅", "Places", ['sunrise']),
    new Emoji("🌆", "Places", ['city_dusk']),
    new Emoji("🌇", "Places", ['city_sunrise', 'city_sunset']),
    new Emoji("🌉", "Places", ['bridge_at_night']),
    new Emoji("♨️", "Places", ['hotsprings']),
    new Emoji("🎠", "Places", ['carousel_horse']),
    new Emoji("🛝", "Places", ['playground_slide', 'slide']),
    new Emoji("🎡", "Places", ['ferris_wheel']),
    new Emoji("🎢", "Places", ['roller_coaster']),
    new Emoji("💈", "Places", ['barber', 'barber_pole']),
    new Emoji("🎪", "Places", ['circus_tent']),
    new Emoji("🚂", "Places", ['steam_locomotive']),
    new Emoji("🚃", "Places", ['railway_car']),
    new Emoji("🚄", "Places", ['bullettrain_side']),
    new Emoji("🚅", "Places", ['bullettrain_front']),
    new Emoji("🚆", "Places", ['train']),
    new Emoji("🚇️", "Places", ['metro']),
    new Emoji("🚈", "Places", ['light_rail']),
    new Emoji("🚉", "Places", ['station']),
    new Emoji("🚊", "Places", ['tram']),
    new Emoji("🚝", "Places", ['monorail']),
    new Emoji("🚞", "Places", ['mountain_railway']),
    new Emoji("🚋", "Places", ['tram_car']),
    new Emoji("🚌", "Places", ['bus']),
    new Emoji("🚍️", "Places", ['oncoming_bus']),
    new Emoji("🚎", "Places", ['trolleybus']),
    new Emoji("🚐", "Places", ['minibus']),
    new Emoji("🚑️", "Places", ['ambulance']),
    new Emoji("🚒", "Places", ['fire_engine']),
    new Emoji("🚓", "Places", ['police_car']),
    new Emoji("🚔️", "Places", ['oncoming_police_car']),
    new Emoji("🚕", "Places", ['taxi']),
    new Emoji("🚖", "Places", ['oncoming_taxi']),
    new Emoji("🚗", "Places", ['car', 'red_car']),
    new Emoji("🚘️", "Places", ['oncoming_automobile']),
    new Emoji("🚙", "Places", ['blue_car', 'suv']),
    new Emoji("🛻", "Places", ['pickup_truck']),
    new Emoji("🚚", "Places", ['delivery_truck', 'truck']),
    new Emoji("🚛", "Places", ['articulated_lorry']),
    new Emoji("🚜", "Places", ['tractor']),
    new Emoji("🏎️", "Places", ['racing_car']),
    new Emoji("🏍️", "Places", ['motorcycle']),
    new Emoji("🛵", "Places", ['motor_scooter']),
    new Emoji("🦽", "Places", ['manual_wheelchair']),
    new Emoji("🦼", "Places", ['motorized_wheelchair']),
    new Emoji("🛺", "Places", ['auto_rickshaw']),
    new Emoji("🚲️", "Places", ['bicycle', 'bike']),
    new Emoji("🛴", "Places", ['scooter']),
    new Emoji("🛹", "Places", ['skateboard']),
    new Emoji("🛼", "Places", ['roller_skate']),
    new Emoji("🚏", "Places", ['busstop']),
    new Emoji("🛣️", "Places", ['motorway']),
    new Emoji("🛤️", "Places", ['railway_track']),
    new Emoji("🛢️", "Places", ['oil_drum']),
    new Emoji("⛽️", "Places", ['fuelpump']),
    new Emoji("🛞", "Places", ['wheel']),
    new Emoji("🚨", "Places", ['rotating_light']),
    new Emoji("🚥", "Places", ['traffic_light']),
    new Emoji("🚦", "Places", ['vertical_traffic_light']),
    new Emoji("🛑", "Places", ['octagonal_sign', 'stop_sign']),
    new Emoji("🚧", "Places", ['construction']),
    new Emoji("⚓️", "Places", ['anchor']),
    new Emoji("🛟", "Places", ['lifebuoy', 'ring_buoy']),
    new Emoji("⛵️", "Places", ['sailboat']),
    new Emoji("🛶", "Places", ['canoe']),
    new Emoji("🚤", "Places", ['speedboat']),
    new Emoji("🛳️", "Places", ['cruise_ship', 'passenger_ship']),
    new Emoji("⛴️", "Places", ['ferry']),
    new Emoji("🛥️", "Places", ['motorboat']),
    new Emoji("🚢", "Places", ['ship']),
    new Emoji("✈️", "Places", ['airplane']),
    new Emoji("🛩️", "Places", ['small_airplane']),
    new Emoji("🛫", "Places", ['airplane_departure']),
    new Emoji("🛬", "Places", ['airplane_arriving']),
    new Emoji("🪂", "Places", ['parachute']),
    new Emoji("💺", "Places", ['seat']),
    new Emoji("🚁", "Places", ['helicopter']),
    new Emoji("🚟", "Places", ['suspension_railway']),
    new Emoji("🚠", "Places", ['mountain_cableway']),
    new Emoji("🚡", "Places", ['aerial_tramway']),
    new Emoji("🛰️", "Places", ['satellite']),
    new Emoji("🚀", "Places", ['rocket']),
    new Emoji("🛸", "Places", ['flying_saucer']),
    new Emoji("🛎️", "Places", ['bellhop']),
    new Emoji("🧳", "Places", ['luggage']),
    new Emoji("⌛️", "Places", ['hourglass']),
    new Emoji("⏳️", "Places", ['hourglass_flowing_sand']),
    new Emoji("⌚️", "Places", ['watch']),
    new Emoji("⏰", "Places", ['alarm_clock']),
    new Emoji("⏱️", "Places", ['stopwatch']),
    new Emoji("⏲️", "Places", ['timer_clock']),
    new Emoji("🕰️", "Places", ['clock']),
    new Emoji("🕛️", "Places", ['clock12']),
    new Emoji("🕧️", "Places", ['clock1230']),
    new Emoji("🕐️", "Places", ['clock1']),
    new Emoji("🕜️", "Places", ['clock130']),
    new Emoji("🕑️", "Places", ['clock2']),
    new Emoji("🕝️", "Places", ['clock230']),
    new Emoji("🕒️", "Places", ['clock3']),
    new Emoji("🕞️", "Places", ['clock330']),
    new Emoji("🕓️", "Places", ['clock4']),
    new Emoji("🕟️", "Places", ['clock430']),
    new Emoji("🕔️", "Places", ['clock5']),
    new Emoji("🕠️", "Places", ['clock530']),
    new Emoji("🕕️", "Places", ['clock6']),
    new Emoji("🕡️", "Places", ['clock630']),
    new Emoji("🕖️", "Places", ['clock7']),
    new Emoji("🕢️", "Places", ['clock730']),
    new Emoji("🕗️", "Places", ['clock8']),
    new Emoji("🕣️", "Places", ['clock830']),
    new Emoji("🕘️", "Places", ['clock9']),
    new Emoji("🕤️", "Places", ['clock930']),
    new Emoji("🕙️", "Places", ['clock10']),
    new Emoji("🕥️", "Places", ['clock1030']),
    new Emoji("🕚️", "Places", ['clock11']),
    new Emoji("🕦️", "Places", ['clock1130']),
    new Emoji("🌑", "Places", ['new_moon']),
    new Emoji("🌒", "Places", ['waxing_crescent_moon']),
    new Emoji("🌓", "Places", ['first_quarter_moon']),
    new Emoji("🌔", "Places", ['waxing_gibbous_moon']),
    new Emoji("🌕️", "Places", ['full_moon']),
    new Emoji("🌖", "Places", ['waning_gibbous_moon']),
    new Emoji("🌗", "Places", ['last_quarter_moon']),
    new Emoji("🌘", "Places", ['waning_crescent_moon']),
    new Emoji("🌙", "Places", ['crescent_moon']),
    new Emoji("🌚", "Places", ['new_moon_with_face']),
    new Emoji("🌛", "Places", ['first_quarter_moon_with_face']),
    new Emoji("🌜️", "Places", ['last_quarter_moon_with_face']),
    new Emoji("🌡️", "Places", ['thermometer']),
    new Emoji("☀️", "Places", ['sun']),
    new Emoji("🌝", "Places", ['full_moon_with_face']),
    new Emoji("🌞", "Places", ['sun_with_face']),
    new Emoji("🪐", "Places", ['ringed_planet', 'saturn']),
    new Emoji("⭐️", "Places", ['star']),
    new Emoji("🌟", "Places", ['glowing_star', 'star2']),
    new Emoji("🌠", "Places", ['shooting_star', 'stars']),
    new Emoji("🌌", "Places", ['milky_way']),
    new Emoji("☁️", "Places", ['cloud']),
    new Emoji("⛅️", "Places", ['partly_sunny', 'sun_behind_cloud']),
    new Emoji("⛈️", "Places", ['stormy', 'thunder_cloud_and_rain']),
    new Emoji("🌤️", "Places", ['sun_behind_small_cloud', 'sunny']),
    new Emoji("🌥️", "Places", ['cloudy', 'sun_behind_large_cloud']),
    new Emoji("🌦️", "Places", ['sun_and_rain', 'sun_behind_rain_cloud']),
    new Emoji("🌧️", "Places", ['cloud_with_rain', 'rainy']),
    new Emoji("🌨️", "Places", ['cloud_with_snow', 'snowy']),
    new Emoji("🌩️", "Places", ['cloud_with_lightning', 'lightning']),
    new Emoji("🌪️", "Places", ['tornado']),
    new Emoji("🌫️", "Places", ['fog']),
    new Emoji("🌬️", "Places", ['wind_blowing_face']),
    new Emoji("🌀", "Places", ['cyclone']),
    new Emoji("🌈", "Places", ['rainbow']),
    new Emoji("🌂", "Places", ['closed_umbrella']),
    new Emoji("☂️", "Places", ['umbrella']),
    new Emoji("☔️", "Places", ['umbrella_with_rain']),
    new Emoji("⛱️", "Places", ['beach_umbrella', 'umbrella_on_ground']),
    new Emoji("⚡️", "Places", ['high_voltage', 'zap']),
    new Emoji("❄️", "Places", ['snowflake']),
    new Emoji("☃️", "Places", ['snowman2']),
    new Emoji("⛄️", "Places", ['snowman']),
    new Emoji("☄️", "Places", ['comet']),
    new Emoji("🔥", "Places", ['fire']),
    new Emoji("💧", "Places", ['droplet']),
    new Emoji("🌊", "Places", ['ocean', 'water_wave']),
    new Emoji("🎃", "Activity", ['jack_o_lantern']),
    new Emoji("🎄", "Activity", ['christmas_tree']),
    new Emoji("🎆", "Activity", ['fireworks']),
    new Emoji("🎇", "Activity", ['sparkler']),
    new Emoji("🧨", "Activity", ['firecracker']),
    new Emoji("✨", "Activity", ['sparkles']),
    new Emoji("🎈", "Activity", ['balloon']),
    new Emoji("🎉", "Activity", ['party', 'party_popper', 'tada']),
    new Emoji("🎊", "Activity", ['confetti_ball']),
    new Emoji("🎋", "Activity", ['tanabata_tree']),
    new Emoji("🎍", "Activity", ['bamboo']),
    new Emoji("🎎", "Activity", ['dolls']),
    new Emoji("🎏", "Activity", ['carp_streamer', 'flags']),
    new Emoji("🎐", "Activity", ['wind_chime']),
    new Emoji("🎑", "Activity", ['moon_ceremony', 'rice_scene']),
    new Emoji("🧧", "Activity", ['red_envelope']),
    new Emoji("🎀", "Activity", ['ribbon']),
    new Emoji("🎁", "Activity", ['gift']),
    new Emoji("🎗️", "Activity", ['reminder_ribbon']),
    new Emoji("🎟️", "Activity", ['admission_tickets', 'tickets']),
    new Emoji("🎫", "Activity", ['ticket']),
    new Emoji("🎖️", "Activity", ['military_medal']),
    new Emoji("🏆️", "Activity", ['trophy']),
    new Emoji("🏅", "Activity", ['sports_medal']),
    new Emoji("🥇", "Activity", ['1st', 'first_place_medal']),
    new Emoji("🥈", "Activity", ['2nd', 'second_place_medal']),
    new Emoji("🥉", "Activity", ['3rd', 'third_place_medal']),
    new Emoji("⚽️", "Activity", ['soccer']),
    new Emoji("⚾️", "Activity", ['baseball']),
    new Emoji("🥎", "Activity", ['softball']),
    new Emoji("🏀", "Activity", ['basketball']),
    new Emoji("🏐", "Activity", ['volleyball']),
    new Emoji("🏈", "Activity", ['football']),
    new Emoji("🏉", "Activity", ['rugby_football']),
    new Emoji("🎾", "Activity", ['tennis']),
    new Emoji("🥏", "Activity", ['flying_disc']),
    new Emoji("🎳", "Activity", ['bowling']),
    new Emoji("🏏", "Activity", ['cricket_game']),
    new Emoji("🏑", "Activity", ['field_hockey']),
    new Emoji("🏒", "Activity", ['hockey']),
    new Emoji("🥍", "Activity", ['lacrosse']),
    new Emoji("🏓", "Activity", ['ping_pong']),
    new Emoji("🏸", "Activity", ['badminton']),
    new Emoji("🥊", "Activity", ['boxing_glove']),
    new Emoji("🥋", "Activity", ['martial_arts_uniform']),
    new Emoji("🥅", "Activity", ['goal_net']),
    new Emoji("⛳️", "Activity", ['golf']),
    new Emoji("⛸️", "Activity", ['ice_skate']),
    new Emoji("🎣", "Activity", ['fishing_pole', 'fishing_pole_and_fish']),
    new Emoji("🤿", "Activity", ['diving_mask']),
    new Emoji("🎽", "Activity", ['running_shirt', 'running_shirt_with_sash']),
    new Emoji("🎿", "Activity", ['ski']),
    new Emoji("🛷", "Activity", ['sled']),
    new Emoji("🥌", "Activity", ['curling_stone']),
    new Emoji("🎯", "Activity", ['bullseye', 'dart', 'direct_hit']),
    new Emoji("🪀", "Activity", ['yo_yo']),
    new Emoji("🪁", "Activity", ['kite']),
    new Emoji("🎱", "Activity", ['8ball', 'billiards']),
    new Emoji("🔮", "Activity", ['crystal_ball']),
    new Emoji("🪄", "Activity", ['magic_wand']),
    new Emoji("🧿", "Activity", ['nazar_amulet']),
    new Emoji("🪬", "Activity", ['hamsa']),
    new Emoji("🎮️", "Activity", ['controller', 'video_game']),
    new Emoji("🕹️", "Activity", ['joystick']),
    new Emoji("🎰", "Activity", ['slot_machine']),
    new Emoji("🎲", "Activity", ['game_die']),
    new Emoji("🧩", "Activity", ['jigsaw', 'puzzle_piece']),
    new Emoji("🧸", "Activity", ['teddy_bear']),
    new Emoji("🪅", "Activity", ['pinata']),
    new Emoji("🪩", "Activity", ['disco', 'disco_ball', 'mirror_ball']),
    new Emoji("🪆", "Activity", ['nesting_dolls']),
    new Emoji("♠️", "Activity", ['spades']),
    new Emoji("♥️", "Activity", ['hearts']),
    new Emoji("♦️", "Activity", ['diamonds']),
    new Emoji("♣️", "Activity", ['clubs']),
    new Emoji("♟️", "Activity", ['chess_pawn']),
    new Emoji("🃏", "Activity", ['black_joker']),
    new Emoji("🀄️", "Activity", ['mahjong']),
    new Emoji("🎴", "Activity", ['flower_playing_cards']),
    new Emoji("🎭️", "Activity", ['performing_arts']),
    new Emoji("🖼️", "Activity", ['frame_with_picture', 'framed_picture']),
    new Emoji("🎨", "Activity", ['art', 'palette']),
    new Emoji("🧵", "Activity", ['thread']),
    new Emoji("🪡", "Activity", ['sewing_needle']),
    new Emoji("🧶", "Activity", ['yarn']),
    new Emoji("🪢", "Activity", ['knot']),
    new Emoji("👓️", "Objects", ['eyeglasses', 'glasses']),
    new Emoji("🕶️", "Objects", ['sunglasses']),
    new Emoji("🥽", "Objects", ['goggles']),
    new Emoji("🥼", "Objects", ['lab_coat']),
    new Emoji("🦺", "Objects", ['safety_vest']),
    new Emoji("👔", "Objects", ['necktie']),
    new Emoji("👕", "Objects", ['shirt']),
    new Emoji("👖", "Objects", ['jeans']),
    new Emoji("🧣", "Objects", ['scarf']),
    new Emoji("🧤", "Objects", ['gloves']),
    new Emoji("🧥", "Objects", ['coat']),
    new Emoji("🧦", "Objects", ['socks']),
    new Emoji("👗", "Objects", ['dress']),
    new Emoji("👘", "Objects", ['kimono']),
    new Emoji("🥻", "Objects", ['sari']),
    new Emoji("🩱", "Objects", ['one_piece_swimsuit']),
    new Emoji("🩲", "Objects", ['briefs']),
    new Emoji("🩳", "Objects", ['shorts']),
    new Emoji("👙", "Objects", ['bikini']),
    new Emoji("👚", "Objects", ['womans_clothes']),
    new Emoji("👛", "Objects", ['purse']),
    new Emoji("👜", "Objects", ['handbag']),
    new Emoji("👝", "Objects", ['clutch_bag', 'pouch']),
    new Emoji("🛍️", "Objects", ['shopping_bags']),
    new Emoji("🎒", "Objects", ['backpack', 'school_satchel']),
    new Emoji("🩴", "Objects", ['thong_sandal']),
    new Emoji("👞", "Objects", ['mans_shoe']),
    new Emoji("👟", "Objects", ['athletic_shoe', 'sneaker']),
    new Emoji("🥾", "Objects", ['hiking_boot']),
    new Emoji("🥿", "Objects", ['flat_shoe', 'womans_flat_shoe']),
    new Emoji("👠", "Objects", ['high_heel']),
    new Emoji("👡", "Objects", ['sandal']),
    new Emoji("🩰", "Objects", ['ballet_shoes']),
    new Emoji("👢", "Objects", ['boot']),
    new Emoji("👑", "Objects", ['crown']),
    new Emoji("👒", "Objects", ['womans_hat']),
    new Emoji("🎩", "Objects", ['top_hat', 'tophat']),
    new Emoji("🎓️", "Objects", ['graduation_cap', 'mortar_board']),
    new Emoji("🧢", "Objects", ['billed_cap']),
    new Emoji("🪖", "Objects", ['military_helmet']),
    new Emoji("⛑️", "Objects", ['helmet_with_cross', 'rescue_worker_helmet']),
    new Emoji("📿", "Objects", ['prayer_beads']),
    new Emoji("💄", "Objects", ['lipstick']),
    new Emoji("💍", "Objects", ['ring']),
    new Emoji("💎", "Objects", ['gem']),
    new Emoji("🔇", "Objects", ['mute', 'no_sound']),
    new Emoji("🔈️", "Objects", ['low_volume', 'quiet_sound', 'speaker']),
    new Emoji("🔉", "Objects", ['medium_volumne', 'sound']),
    new Emoji("🔊", "Objects", ['high_volume', 'loud_sound']),
    new Emoji("📢", "Objects", ['loudspeaker']),
    new Emoji("📣", "Objects", ['mega', 'megaphone']),
    new Emoji("📯", "Objects", ['postal_horn']),
    new Emoji("🔔", "Objects", ['bell']),
    new Emoji("🔕", "Objects", ['no_bell']),
    new Emoji("🎼", "Objects", ['musical_score']),
    new Emoji("🎵", "Objects", ['musical_note']),
    new Emoji("🎶", "Objects", ['musical_notes', 'notes']),
    new Emoji("🎙️", "Objects", ['studio_microphone']),
    new Emoji("🎚️", "Objects", ['level_slider']),
    new Emoji("🎛️", "Objects", ['control_knobs']),
    new Emoji("🎤", "Objects", ['microphone']),
    new Emoji("🎧️", "Objects", ['headphones']),
    new Emoji("📻️", "Objects", ['radio']),
    new Emoji("🎷", "Objects", ['saxophone']),
    new Emoji("🪗", "Objects", ['accordion']),
    new Emoji("🎸", "Objects", ['guitar']),
    new Emoji("🎹", "Objects", ['musical_keyboard']),
    new Emoji("🎺", "Objects", ['trumpet']),
    new Emoji("🎻", "Objects", ['violin']),
    new Emoji("🪕", "Objects", ['banjo']),
    new Emoji("🥁", "Objects", ['drum']),
    new Emoji("🪘", "Objects", ['long_drum']),
    new Emoji("📱", "Objects", ['android', 'iphone', 'mobile_phone']),
    new Emoji("📲", "Objects", ['calling', 'mobile_phone_arrow']),
    new Emoji("☎️", "Objects", ['telephone']),
    new Emoji("📞", "Objects", ['telephone_receiver']),
    new Emoji("📟️", "Objects", ['pager']),
    new Emoji("📠", "Objects", ['fax', 'fax_machine']),
    new Emoji("🔋", "Objects", ['battery']),
    new Emoji("🪫", "Objects", ['low_battery']),
    new Emoji("🔌", "Objects", ['electric_plug']),
    new Emoji("💻️", "Objects", ['laptop']),
    new Emoji("🖥️", "Objects", ['computer', 'desktop_computer']),
    new Emoji("🖨️", "Objects", ['printer']),
    new Emoji("⌨️", "Objects", ['keyboard']),
    new Emoji("🖱️", "Objects", ['computer_mouse']),
    new Emoji("🖲️", "Objects", ['trackball']),
    new Emoji("💽", "Objects", ['computer_disk', 'minidisc']),
    new Emoji("💾", "Objects", ['floppy_disk']),
    new Emoji("💿️", "Objects", ['cd', 'optical_disk']),
    new Emoji("📀", "Objects", ['dvd']),
    new Emoji("🧮", "Objects", ['abacus']),
    new Emoji("🎥", "Objects", ['movie_camera']),
    new Emoji("🎞️", "Objects", ['film_frames']),
    new Emoji("📽️", "Objects", ['film_projector']),
    new Emoji("🎬️", "Objects", ['clapper']),
    new Emoji("📺️", "Objects", ['tv']),
    new Emoji("📷️", "Objects", ['camera']),
    new Emoji("📸", "Objects", ['camera_with_flash']),
    new Emoji("📹️", "Objects", ['video_camera']),
    new Emoji("📼", "Objects", ['vhs', 'videocassette']),
    new Emoji("🔍️", "Objects", ['mag']),
    new Emoji("🔎", "Objects", ['mag_right']),
    new Emoji("🕯️", "Objects", ['candle']),
    new Emoji("💡", "Objects", ['bulb', 'light_bulb']),
    new Emoji("🔦", "Objects", ['flashlight']),
    new Emoji("🏮", "Objects", ['izakaya_lantern', 'red_paper_lantern']),
    new Emoji("🪔", "Objects", ['diya_lamp']),
    new Emoji("📔", "Objects", ['notebook_with_decorative_cover']),
    new Emoji("📕", "Objects", ['closed_book']),
    new Emoji("📖", "Objects", ['book', 'open_book']),
    new Emoji("📗", "Objects", ['green_book']),
    new Emoji("📘", "Objects", ['blue_book']),
    new Emoji("📙", "Objects", ['orange_book']),
    new Emoji("📚️", "Objects", ['books']),
    new Emoji("📓", "Objects", ['notebook']),
    new Emoji("📒", "Objects", ['ledger']),
    new Emoji("📃", "Objects", ['page_with_curl']),
    new Emoji("📜", "Objects", ['scroll']),
    new Emoji("📄", "Objects", ['page_facing_up']),
    new Emoji("📰", "Objects", ['newspaper']),
    new Emoji("🗞️", "Objects", ['rolled_up_newspaper']),
    new Emoji("📑", "Objects", ['bookmark_tabs']),
    new Emoji("🔖", "Objects", ['bookmark']),
    new Emoji("🏷️", "Objects", ['label']),
    new Emoji("💰️", "Objects", ['moneybag']),
    new Emoji("🪙", "Objects", ['coin']),
    new Emoji("💴", "Objects", ['yen']),
    new Emoji("💵", "Objects", ['dollar']),
    new Emoji("💶", "Objects", ['euro']),
    new Emoji("💷", "Objects", ['pound']),
    new Emoji("💸", "Objects", ['money_with_wings']),
    new Emoji("💳️", "Objects", ['credit_card']),
    new Emoji("🧾", "Objects", ['receipt']),
    new Emoji("💹", "Objects", ['chart']),
    new Emoji("✉️", "Objects", ['envelope']),
    new Emoji("📧", "Objects", ['e-mail', 'email']),
    new Emoji("📨", "Objects", ['incoming_envelope']),
    new Emoji("📩", "Objects", ['envelope_with_arrow']),
    new Emoji("📤️", "Objects", ['outbox_tray']),
    new Emoji("📥️", "Objects", ['inbox_tray']),
    new Emoji("📦️", "Objects", ['package']),
    new Emoji("📫️", "Objects", ['mailbox']),
    new Emoji("📪️", "Objects", ['mailbox_closed']),
    new Emoji("📬️", "Objects", ['mailbox_with_mail']),
    new Emoji("📭️", "Objects", ['mailbox_with_no_mail']),
    new Emoji("📮", "Objects", ['postbox']),
    new Emoji("🗳️", "Objects", ['ballot_box']),
    new Emoji("✏️", "Objects", ['pencil']),
    new Emoji("✒️", "Objects", ['black_nib']),
    new Emoji("🖋️", "Objects", ['fountain_pen']),
    new Emoji("🖊️", "Objects", ['pen']),
    new Emoji("🖌️", "Objects", ['paintbrush']),
    new Emoji("🖍️", "Objects", ['crayon']),
    new Emoji("📝", "Objects", ['memo']),
    new Emoji("💼", "Objects", ['briefcase']),
    new Emoji("📁", "Objects", ['file_folder']),
    new Emoji("📂", "Objects", ['open_file_folder']),
    new Emoji("🗂️", "Objects", ['card_index_dividers']),
    new Emoji("📅", "Objects", ['date']),
    new Emoji("📆", "Objects", ['calendar']),
    new Emoji("🗒️", "Objects", ['notepad_spiral']),
    new Emoji("🗓️", "Objects", ['calendar_spiral']),
    new Emoji("📇", "Objects", ['card_index']),
    new Emoji("📈", "Objects", ['chart_increasing', 'chart_with_upwards_trend']),
    new Emoji("📉", "Objects", ['chart_decreasing', 'chart_with_downwards_trend']),
    new Emoji("📊", "Objects", ['bar_chart']),
    new Emoji("📋️", "Objects", ['clipboard']),
    new Emoji("📌", "Objects", ['pushpin']),
    new Emoji("📍", "Objects", ['round_pushpin']),
    new Emoji("📎", "Objects", ['paperclip']),
    new Emoji("🖇️", "Objects", ['paperclips']),
    new Emoji("📏", "Objects", ['straight_ruler']),
    new Emoji("📐", "Objects", ['triangular_ruler']),
    new Emoji("✂️", "Objects", ['scissors']),
    new Emoji("🗃️", "Objects", ['card_file_box']),
    new Emoji("🗄️", "Objects", ['file_cabinet']),
    new Emoji("🗑️", "Objects", ['trashcan', 'wastebasket']),
    new Emoji("🔒️", "Objects", ['lock', 'locked']),
    new Emoji("🔓️", "Objects", ['unlock', 'unlocked']),
    new Emoji("🔏", "Objects", ['lock_with_ink_pen', 'locked_with_pen']),
    new Emoji("🔐", "Objects", ['closed_lock_with_key', 'locked_with_key']),
    new Emoji("🔑", "Objects", ['key']),
    new Emoji("🗝️", "Objects", ['old_key']),
    new Emoji("🔨", "Objects", ['hammer']),
    new Emoji("🪓", "Objects", ['axe']),
    new Emoji("⛏️", "Objects", ['pick']),
    new Emoji("⚒️", "Objects", ['hammer_and_pick']),
    new Emoji("🛠️", "Objects", ['hammer_and_wrench']),
    new Emoji("🗡️", "Objects", ['dagger']),
    new Emoji("⚔️", "Objects", ['crossed_swords']),
    new Emoji("🔫", "Objects", ['gun', 'pistol']),
    new Emoji("🪃", "Objects", ['boomerang']),
    new Emoji("🏹", "Objects", ['bow_and_arrow']),
    new Emoji("🛡️", "Objects", ['shield']),
    new Emoji("🪚", "Objects", ['carpentry_saw']),
    new Emoji("🔧", "Objects", ['wrench']),
    new Emoji("🪛", "Objects", ['screwdriver']),
    new Emoji("🔩", "Objects", ['nut_and_bolt']),
    new Emoji("⚙️", "Objects", ['gear']),
    new Emoji("🗜️", "Objects", ['clamp', 'compression']),
    new Emoji("⚖️", "Objects", ['scales']),
    new Emoji("🦯", "Objects", ['probing_cane', 'white_cane']),
    new Emoji("🔗", "Objects", ['link']),
    new Emoji("⛓️", "Objects", ['chains']),
    new Emoji("🪝", "Objects", ['hook']),
    new Emoji("🧰", "Objects", ['toolbox']),
    new Emoji("🧲", "Objects", ['magnet']),
    new Emoji("🪜", "Objects", ['ladder']),
    new Emoji("⚗️", "Objects", ['alembic']),
    new Emoji("🧪", "Objects", ['test_tube']),
    new Emoji("🧫", "Objects", ['petri_dish']),
    new Emoji("🧬", "Objects", ['dna', 'double_helix']),
    new Emoji("🔬", "Objects", ['microscope']),
    new Emoji("🔭", "Objects", ['telescope']),
    new Emoji("📡", "Objects", ['satellite_antenna']),
    new Emoji("💉", "Objects", ['syringe']),
    new Emoji("🩸", "Objects", ['drop_of_blood']),
    new Emoji("💊", "Objects", ['pill']),
    new Emoji("🩹", "Objects", ['adhesive_bandage', 'bandaid']),
    new Emoji("🩼", "Objects", ['crutch']),
    new Emoji("🩺", "Objects", ['stethoscope']),
    new Emoji("🩻", "Objects", ['x-ray', 'xray']),
    new Emoji("🚪", "Objects", ['door']),
    new Emoji("🛗", "Objects", ['elevator']),
    new Emoji("🪞", "Objects", ['mirror']),
    new Emoji("🪟", "Objects", ['window']),
    new Emoji("🛏️", "Objects", ['bed']),
    new Emoji("🛋️", "Objects", ['couch_and_lamp']),
    new Emoji("🪑", "Objects", ['chair']),
    new Emoji("🚽", "Objects", ['toilet']),
    new Emoji("🪠", "Objects", ['plunger']),
    new Emoji("🚿", "Objects", ['shower']),
    new Emoji("🛁", "Objects", ['bathtub']),
    new Emoji("🪤", "Objects", ['mouse_trap']),
    new Emoji("🪒", "Objects", ['razor']),
    new Emoji("🧴", "Objects", ['lotion_bottle']),
    new Emoji("🧷", "Objects", ['safety_pin']),
    new Emoji("🧹", "Objects", ['broom']),
    new Emoji("🧺", "Objects", ['basket']),
    new Emoji("🧻", "Objects", ['roll_of_paper', 'toilet_paper']),
    new Emoji("🪣", "Objects", ['bucket']),
    new Emoji("🧼", "Objects", ['soap']),
    new Emoji("🫧", "Objects", ['bubbles']),
    new Emoji("🪥", "Objects", ['toothbrush']),
    new Emoji("🧽", "Objects", ['sponge']),
    new Emoji("🧯", "Objects", ['fire_extinguisher']),
    new Emoji("🛒", "Objects", ['shopping_cart']),
    new Emoji("🚬", "Objects", ['cigarette', 'smoking']),
    new Emoji("⚰️", "Objects", ['coffin']),
    new Emoji("🪦", "Objects", ['headstone']),
    new Emoji("⚱️", "Objects", ['funeral_urn']),
    new Emoji("🗿", "Objects", ['moai', 'moyai']),
    new Emoji("🪧", "Objects", ['placard']),
    new Emoji("🪪", "Objects", ['id_card']),
    new Emoji("🏧", "Symbols", ['atm']),
    new Emoji("🚮", "Symbols", ['litter_bin', 'put_litter_in_its_place']),
    new Emoji("🚰", "Symbols", ['potable_water']),
    new Emoji("♿️", "Symbols", ['handicapped', 'wheelchair']),
    new Emoji("🚹️", "Symbols", ['mens']),
    new Emoji("🚺️", "Symbols", ['womens']),
    new Emoji("🚻", "Symbols", ['bathroom', 'restroom']),
    new Emoji("🚼️", "Symbols", ['baby_symbol']),
    new Emoji("🚾", "Symbols", ['water_closet', 'wc']),
    new Emoji("🛂", "Symbols", ['passport_control']),
    new Emoji("🛃", "Symbols", ['customs']),
    new Emoji("🛄", "Symbols", ['baggage_claim']),
    new Emoji("🛅", "Symbols", ['left_luggage']),
    new Emoji("⚠️", "Symbols", ['warning']),
    new Emoji("🚸", "Symbols", ['children_crossing']),
    new Emoji("⛔️", "Symbols", ['no_entry']),
    new Emoji("🚫", "Symbols", ['no_entry_sign']),
    new Emoji("🚳", "Symbols", ['no_bicycles']),
    new Emoji("🚭️", "Symbols", ['no_smoking']),
    new Emoji("🚯", "Symbols", ['do_not_litter', 'no_littering']),
    new Emoji("🚱", "Symbols", ['non-potable_water']),
    new Emoji("🚷", "Symbols", ['no_pedestrians']),
    new Emoji("📵", "Symbols", ['no_mobile_phones']),
    new Emoji("🔞", "Symbols", ['no_one_under_18', 'underage']),
    new Emoji("☢️", "Symbols", ['radioactive']),
    new Emoji("☣️", "Symbols", ['biohazard']),
    new Emoji("⬆️", "Symbols", ['arrow_up']),
    new Emoji("↗️", "Symbols", ['arrow_upper_right']),
    new Emoji("➡️", "Symbols", ['arrow_right']),
    new Emoji("↘️", "Symbols", ['arrow_lower_right']),
    new Emoji("⬇️", "Symbols", ['arrow_down']),
    new Emoji("↙️", "Symbols", ['arrow_lower_left']),
    new Emoji("⬅️", "Symbols", ['arrow_left']),
    new Emoji("↖️", "Symbols", ['arrow_upper_left']),
    new Emoji("↕️", "Symbols", ['arrow_up_down']),
    new Emoji("↔️", "Symbols", ['left_right_arrow']),
    new Emoji("↩️", "Symbols", ['arrow_left_hook', 'leftwards_arrow_with_hook']),
    new Emoji("↪️", "Symbols", ['arrow_right_hook', 'rightwards_arrow_with_hook']),
    new Emoji("⤴️", "Symbols", ['arrow_heading_up']),
    new Emoji("⤵️", "Symbols", ['arrow_heading_down']),
    new Emoji("🔃", "Symbols", ['arrows_clockwise', 'clockwise']),
    new Emoji("🔄", "Symbols", ['arrows_counterclockwise', 'counterclockwise']),
    new Emoji("🔙", "Symbols", ['back']),
    new Emoji("🔚", "Symbols", ['end']),
    new Emoji("🔛", "Symbols", ['on']),
    new Emoji("🔜", "Symbols", ['soon']),
    new Emoji("🔝", "Symbols", ['top']),
    new Emoji("🛐", "Symbols", ['place_of_worship']),
    new Emoji("⚛️", "Symbols", ['atom', 'atom_symbol']),
    new Emoji("🕉️", "Symbols", ['om']),
    new Emoji("✡️", "Symbols", ['star_of_david']),
    new Emoji("☸️", "Symbols", ['wheel_of_dharma']),
    new Emoji("☯️", "Symbols", ['yin_yang']),
    new Emoji("✝️", "Symbols", ['latin_cross']),
    new Emoji("☦️", "Symbols", ['orthodox_cross']),
    new Emoji("☪️", "Symbols", ['star_and_crescent']),
    new Emoji("☮️", "Symbols", ['peace', 'peace_symbol']),
    new Emoji("🕎", "Symbols", ['menorah']),
    new Emoji("🔯", "Symbols", ['six_pointed_star']),
    new Emoji("♈️", "Symbols", ['aries']),
    new Emoji("♉️", "Symbols", ['taurus']),
    new Emoji("♊️", "Symbols", ['gemini']),
    new Emoji("♋️", "Symbols", ['cancer']),
    new Emoji("♌️", "Symbols", ['leo']),
    new Emoji("♍️", "Symbols", ['virgo']),
    new Emoji("♎️", "Symbols", ['libra']),
    new Emoji("♏️", "Symbols", ['scorpius']),
    new Emoji("♐️", "Symbols", ['sagittarius']),
    new Emoji("♑️", "Symbols", ['capricorn']),
    new Emoji("♒️", "Symbols", ['aquarius']),
    new Emoji("♓️", "Symbols", ['pisces']),
    new Emoji("⛎", "Symbols", ['ophiuchus']),
    new Emoji("🔀", "Symbols", ['shuffle', 'twisted_rightwards_arrows']),
    new Emoji("🔁", "Symbols", ['repeat']),
    new Emoji("🔂", "Symbols", ['repeat_one']),
    new Emoji("▶️", "Symbols", ['arrow_forward', 'play']),
    new Emoji("⏩️", "Symbols", ['fast_forward']),
    new Emoji("⏭️", "Symbols", ['next_track']),
    new Emoji("⏯️", "Symbols", ['play_pause']),
    new Emoji("◀️", "Symbols", ['arrow_backward', 'reverse']),
    new Emoji("⏪️", "Symbols", ['fast_reverse', 'rewind']),
    new Emoji("⏮️", "Symbols", ['previous_track']),
    new Emoji("🔼", "Symbols", ['arrow_up_small', 'up']),
    new Emoji("⏫", "Symbols", ['arrow_double_up', 'fast_up']),
    new Emoji("🔽", "Symbols", ['arrow_down_small', 'down']),
    new Emoji("⏬", "Symbols", ['arrow_double_down', 'fast_down']),
    new Emoji("⏸️", "Symbols", ['pause']),
    new Emoji("⏹️", "Symbols", ['stop']),
    new Emoji("⏺️", "Symbols", ['record']),
    new Emoji("⏏️", "Symbols", ['eject']),
    new Emoji("🎦", "Symbols", ['cinema']),
    new Emoji("🔅", "Symbols", ['dim_button', 'low_brightness']),
    new Emoji("🔆", "Symbols", ['bright_button', 'high_brightness']),
    new Emoji("📶", "Symbols", ['antenna_bars', 'signal_strength']),
    new Emoji("📳", "Symbols", ['vibration_mode']),
    new Emoji("📴", "Symbols", ['mobile_phone_off']),
    new Emoji("♀️", "Symbols", ['female', 'female_sign']),
    new Emoji("♂️", "Symbols", ['male', 'male_sign']),
    new Emoji("⚧️", "Symbols", ['transgender_symbol']),
    new Emoji("✖️", "Symbols", ['multiplication', 'multiply']),
    new Emoji("➕", "Symbols", ['plus']),
    new Emoji("➖", "Symbols", ['minus']),
    new Emoji("➗", "Symbols", ['divide', 'division']),
    new Emoji("🟰", "Symbols", ['heavy_equals_sign']),
    new Emoji("♾️", "Symbols", ['infinity']),
    new Emoji("‼️", "Symbols", ['bangbang', 'double_exclamation']),
    new Emoji("⁉️", "Symbols", ['exclamation_question', 'interrobang']),
    new Emoji("❓️", "Symbols", ['question']),
    new Emoji("❔", "Symbols", ['white_question']),
    new Emoji("❕", "Symbols", ['white_exclamation']),
    new Emoji("❗️", "Symbols", ['exclamation']),
    new Emoji("〰️", "Symbols", ['wavy_dash']),
    new Emoji("💱", "Symbols", ['currency_exchange']),
    new Emoji("💲", "Symbols", ['heavy_dollar_sign']),
    new Emoji("⚕️", "Symbols", ['medical', 'medical_symbol']),
    new Emoji("♻️", "Symbols", ['recycle', 'recycling_symbol']),
    new Emoji("⚜️", "Symbols", ['fleur-de-lis']),
    new Emoji("🔱", "Symbols", ['trident']),
    new Emoji("📛", "Symbols", ['name_badge']),
    new Emoji("🔰", "Symbols", ['beginner']),
    new Emoji("⭕️", "Symbols", ['hollow_red_circle', 'red_o']),
    new Emoji("✅", "Symbols", ['check_mark_button', 'white_check_mark']),
    new Emoji("☑️", "Symbols", ['ballot_box_with_check']),
    new Emoji("✔️", "Symbols", ['check_mark', 'heavy_check_mark']),
    new Emoji("❌", "Symbols", ['cross_mark', 'x']),
    new Emoji("❎", "Symbols", ['cross_mark_button', 'negative_squared_cross_mark']),
    new Emoji("➰", "Symbols", ['curly_loop']),
    new Emoji("➿", "Symbols", ['double_curly_loop', 'loop']),
    new Emoji("〽️", "Symbols", ['part_alternation_mark']),
    new Emoji("✳️", "Symbols", ['eight_spoked_asterisk']),
    new Emoji("✴️", "Symbols", ['eight_pointed_black_star']),
    new Emoji("❇️", "Symbols", ['sparkle']),
    new Emoji("©️", "Symbols", ['copyright']),
    new Emoji("®️", "Symbols", ['registered']),
    new Emoji("™️", "Symbols", ['tm', 'trade_mark']),
    new Emoji("#️⃣", "Symbols", ['hash', 'number_sign']),
    new Emoji("*️⃣", "Symbols", ['asterisk']),
    new Emoji("0️⃣", "Symbols", ['zero']),
    new Emoji("1️⃣", "Symbols", ['one']),
    new Emoji("2️⃣", "Symbols", ['two']),
    new Emoji("3️⃣", "Symbols", ['three']),
    new Emoji("4️⃣", "Symbols", ['four']),
    new Emoji("5️⃣", "Symbols", ['five']),
    new Emoji("6️⃣", "Symbols", ['six']),
    new Emoji("7️⃣", "Symbols", ['seven']),
    new Emoji("8️⃣", "Symbols", ['eight']),
    new Emoji("9️⃣", "Symbols", ['nine']),
    new Emoji("🔟", "Symbols", ['ten']),
    new Emoji("🔠", "Symbols", ['capital_abcd']),
    new Emoji("🔡", "Symbols", ['abcd']),
    new Emoji("🔢", "Symbols", ['1234']),
    new Emoji("🔣", "Symbols", ['symbols']),
    new Emoji("🔤", "Symbols", ['abc']),
    new Emoji("🅰️", "Symbols", ['a', 'a_blood']),
    new Emoji("🆎", "Symbols", ['ab', 'ab_blood']),
    new Emoji("🅱️", "Symbols", ['b', 'b_blood']),
    new Emoji("🆑", "Symbols", ['cl']),
    new Emoji("🆒", "Symbols", ['cool']),
    new Emoji("🆓", "Symbols", ['free']),
    new Emoji("ℹ️", "Symbols", ['info', 'information_source']),
    new Emoji("🆔", "Symbols", ['id']),
    new Emoji("Ⓜ️", "Symbols", ['m']),
    new Emoji("🆕", "Symbols", ['new']),
    new Emoji("🆖", "Symbols", ['ng']),
    new Emoji("🅾️", "Symbols", ['o', 'o_blood']),
    new Emoji("🆗", "Symbols", ['ok']),
    new Emoji("🅿️", "Symbols", ['parking']),
    new Emoji("🆘", "Symbols", ['sos']),
    new Emoji("🆙", "Symbols", ['up2']),
    new Emoji("🆚", "Symbols", ['vs']),
    new Emoji("🈁", "Symbols", ['ja_here', 'koko']),
    new Emoji("🈂️", "Symbols", ['ja_service_charge']),
    new Emoji("🈷️", "Symbols", ['ja_monthly_amount']),
    new Emoji("🈶", "Symbols", ['ja_not_free_of_carge']),
    new Emoji("🈯️", "Symbols", ['ja_reserved']),
    new Emoji("🉐", "Symbols", ['ideograph_advantage', 'ja_bargain']),
    new Emoji("🈹", "Symbols", ['ja_discount']),
    new Emoji("🈚️", "Symbols", ['ja_free_of_charge']),
    new Emoji("🈲", "Symbols", ['ja_prohibited']),
    new Emoji("🉑", "Symbols", ['accept', 'ja_acceptable']),
    new Emoji("🈸", "Symbols", ['ja_application']),
    new Emoji("🈴", "Symbols", ['ja_passing_grade']),
    new Emoji("🈳", "Symbols", ['ja_vacancy']),
    new Emoji("㊗️", "Symbols", ['congratulations', 'ja_congratulations']),
    new Emoji("㊙️", "Symbols", ['ja_secret', 'secret']),
    new Emoji("🈺", "Symbols", ['ja_open_for_business']),
    new Emoji("🈵", "Symbols", ['ja_no_vacancy']),
    new Emoji("🔴", "Symbols", ['red_circle']),
    new Emoji("🟠", "Symbols", ['orange_circle']),
    new Emoji("🟡", "Symbols", ['yellow_circle']),
    new Emoji("🟢", "Symbols", ['green_circle']),
    new Emoji("🔵", "Symbols", ['blue_circle']),
    new Emoji("🟣", "Symbols", ['purple_circle']),
    new Emoji("🟤", "Symbols", ['brown_circle']),
    new Emoji("⚫️", "Symbols", ['black_circle']),
    new Emoji("⚪️", "Symbols", ['white_circle']),
    new Emoji("🟥", "Symbols", ['red_square']),
    new Emoji("🟧", "Symbols", ['orange_square']),
    new Emoji("🟨", "Symbols", ['yellow_square']),
    new Emoji("🟩", "Symbols", ['green_square']),
    new Emoji("🟦", "Symbols", ['blue_square']),
    new Emoji("🟪", "Symbols", ['purple_square']),
    new Emoji("🟫", "Symbols", ['brown_square']),
    new Emoji("⬛️", "Symbols", ['black_large_square']),
    new Emoji("⬜️", "Symbols", ['white_large_square']),
    new Emoji("◼️", "Symbols", ['black_medium_square']),
    new Emoji("◻️", "Symbols", ['white_medium_square']),
    new Emoji("◾️", "Symbols", ['black_medium_small_square']),
    new Emoji("◽️", "Symbols", ['white_medium_small_square']),
    new Emoji("▪️", "Symbols", ['black_small_square']),
    new Emoji("▫️", "Symbols", ['white_small_square']),
    new Emoji("🔶", "Symbols", ['large_orange_diamond']),
    new Emoji("🔷", "Symbols", ['large_blue_diamond']),
    new Emoji("🔸", "Symbols", ['small_orange_diamond']),
    new Emoji("🔹", "Symbols", ['small_blue_diamond']),
    new Emoji("🔺", "Symbols", ['small_red_triangle']),
    new Emoji("🔻", "Symbols", ['small_red_triangle_down']),
    new Emoji("💠", "Symbols", ['diamond_shape_with_a_dot_inside', 'diamond_with_a_dot']),
    new Emoji("🔘", "Symbols", ['radio_button']),
    new Emoji("🔳", "Symbols", ['white_square_button']),
    new Emoji("🔲", "Symbols", ['black_square_button']),
    new Emoji("🏁", "Flags", ['checkered_flag']),
    new Emoji("🚩", "Flags", ['triangular_flag', 'triangular_flag_on_post']),
    new Emoji("🎌", "Flags", ['crossed_flags']),
    new Emoji("🏴", "Flags", ['black_flag']),
    new Emoji("🏳️", "Flags", ['white_flag']),
    new Emoji("🏳️‍🌈", "Flags", ['rainbow_flag']),
    new Emoji("🏳️‍⚧️", "Flags", ['transgender_flag']),
    new Emoji("🏴‍☠️", "Flags", ['jolly_roger', 'pirate_flag']),
    new Emoji("🇦🇨", "Flags", ['ascension_island', 'flag_ac']),
    new Emoji("🇦🇩", "Flags", ['andorra', 'flag_ad']),
    new Emoji("🇦🇪", "Flags", ['flag_ae', 'united_arab_emirates']),
    new Emoji("🇦🇫", "Flags", ['afghanistan', 'flag_af']),
    new Emoji("🇦🇬", "Flags", ['antigua_barbuda', 'flag_ag']),
    new Emoji("🇦🇮", "Flags", ['anguilla', 'flag_ai']),
    new Emoji("🇦🇱", "Flags", ['albania', 'flag_al']),
    new Emoji("🇦🇲", "Flags", ['armenia', 'flag_am']),
    new Emoji("🇦🇴", "Flags", ['angola', 'flag_ao']),
    new Emoji("🇦🇶", "Flags", ['antarctica', 'flag_aq']),
    new Emoji("🇦🇷", "Flags", ['argentina', 'flag_ar']),
    new Emoji("🇦🇸", "Flags", ['american_samoa', 'flag_as']),
    new Emoji("🇦🇹", "Flags", ['austria', 'flag_at']),
    new Emoji("🇦🇺", "Flags", ['australia', 'flag_au']),
    new Emoji("🇦🇼", "Flags", ['aruba', 'flag_aw']),
    new Emoji("🇦🇽", "Flags", ['aland_islands', 'flag_ax']),
    new Emoji("🇦🇿", "Flags", ['azerbaijan', 'flag_az']),
    new Emoji("🇧🇦", "Flags", ['bosnia_herzegovina', 'flag_ba']),
    new Emoji("🇧🇧", "Flags", ['barbados', 'flag_bb']),
    new Emoji("🇧🇩", "Flags", ['bangladesh', 'flag_bd']),
    new Emoji("🇧🇪", "Flags", ['belgium', 'flag_be']),
    new Emoji("🇧🇫", "Flags", ['burkina_faso', 'flag_bf']),
    new Emoji("🇧🇬", "Flags", ['bulgaria', 'flag_bg']),
    new Emoji("🇧🇭", "Flags", ['bahrain', 'flag_bh']),
    new Emoji("🇧🇮", "Flags", ['burundi', 'flag_bi']),
    new Emoji("🇧🇯", "Flags", ['benin', 'flag_bj']),
    new Emoji("🇧🇱", "Flags", ['flag_bl', 'st_barthelemy']),
    new Emoji("🇧🇲", "Flags", ['bermuda', 'flag_bm']),
    new Emoji("🇧🇳", "Flags", ['brunei', 'flag_bn']),
    new Emoji("🇧🇴", "Flags", ['bolivia', 'flag_bo']),
    new Emoji("🇧🇶", "Flags", ['caribbean_netherlands', 'flag_bq']),
    new Emoji("🇧🇷", "Flags", ['brazil', 'flag_br']),
    new Emoji("🇧🇸", "Flags", ['bahamas', 'flag_bs']),
    new Emoji("🇧🇹", "Flags", ['bhutan', 'flag_bt']),
    new Emoji("🇧🇻", "Flags", ['bouvet_island', 'flag_bv']),
    new Emoji("🇧🇼", "Flags", ['botswana', 'flag_bw']),
    new Emoji("🇧🇾", "Flags", ['belarus', 'flag_by']),
    new Emoji("🇧🇿", "Flags", ['belize', 'flag_bz']),
    new Emoji("🇨🇦", "Flags", ['canada', 'flag_ca']),
    new Emoji("🇨🇨", "Flags", ['cocos_islands', 'flag_cc']),
    new Emoji("🇨🇩", "Flags", ['congo_kinshasa', 'flag_cd']),
    new Emoji("🇨🇫", "Flags", ['central_african_republic', 'flag_cf']),
    new Emoji("🇨🇬", "Flags", ['congo_brazzaville', 'flag_cg']),
    new Emoji("🇨🇭", "Flags", ['flag_ch', 'switzerland']),
    new Emoji("🇨🇮", "Flags", ['cote_divoire', 'flag_ci']),
    new Emoji("🇨🇰", "Flags", ['cook_islands', 'flag_ck']),
    new Emoji("🇨🇱", "Flags", ['chile', 'flag_cl']),
    new Emoji("🇨🇲", "Flags", ['cameroon', 'flag_cm']),
    new Emoji("🇨🇳", "Flags", ['china', 'flag_cn']),
    new Emoji("🇨🇴", "Flags", ['colombia', 'flag_co']),
    new Emoji("🇨🇵", "Flags", ['clipperton_island', 'flag_cp']),
    new Emoji("🇨🇷", "Flags", ['costa_rica', 'flag_cr']),
    new Emoji("🇨🇺", "Flags", ['cuba', 'flag_cu']),
    new Emoji("🇨🇻", "Flags", ['cape_verde', 'flag_cv']),
    new Emoji("🇨🇼", "Flags", ['curacao', 'flag_cw']),
    new Emoji("🇨🇽", "Flags", ['christmas_island', 'flag_cx']),
    new Emoji("🇨🇾", "Flags", ['cyprus', 'flag_cy']),
    new Emoji("🇨🇿", "Flags", ['czech_republic', 'czechia', 'flag_cz']),
    new Emoji("🇩🇪", "Flags", ['flag_de', 'germany']),
    new Emoji("🇩🇬", "Flags", ['diego_garcia', 'flag_dg']),
    new Emoji("🇩🇯", "Flags", ['djibouti', 'flag_dj']),
    new Emoji("🇩🇰", "Flags", ['denmark', 'flag_dk']),
    new Emoji("🇩🇲", "Flags", ['dominica', 'flag_dm']),
    new Emoji("🇩🇴", "Flags", ['dominican_republic', 'flag_do']),
    new Emoji("🇩🇿", "Flags", ['algeria', 'flag_dz']),
    new Emoji("🇪🇦", "Flags", ['ceuta_melilla', 'flag_ea']),
    new Emoji("🇪🇨", "Flags", ['ecuador', 'flag_ec']),
    new Emoji("🇪🇪", "Flags", ['estonia', 'flag_ee']),
    new Emoji("🇪🇬", "Flags", ['egypt', 'flag_eg']),
    new Emoji("🇪🇭", "Flags", ['flag_eh', 'western_sahara']),
    new Emoji("🇪🇷", "Flags", ['eritrea', 'flag_er']),
    new Emoji("🇪🇸", "Flags", ['flag_es', 'spain']),
    new Emoji("🇪🇹", "Flags", ['ethiopia', 'flag_et']),
    new Emoji("🇪🇺", "Flags", ['european_union', 'flag_eu']),
    new Emoji("🇫🇮", "Flags", ['finland', 'flag_fi']),
    new Emoji("🇫🇯", "Flags", ['fiji', 'flag_fj']),
    new Emoji("🇫🇰", "Flags", ['falkland_islands', 'flag_fk']),
    new Emoji("🇫🇲", "Flags", ['flag_fm', 'micronesia']),
    new Emoji("🇫🇴", "Flags", ['faroe_islands', 'flag_fo']),
    new Emoji("🇫🇷", "Flags", ['flag_fr', 'france']),
    new Emoji("🇬🇦", "Flags", ['flag_ga', 'gabon']),
    new Emoji("🇬🇧", "Flags", ['flag_gb', 'uk', 'united_kingdom']),
    new Emoji("🇬🇩", "Flags", ['flag_gd', 'grenada']),
    new Emoji("🇬🇪", "Flags", ['flag_ge', 'georgia']),
    new Emoji("🇬🇫", "Flags", ['flag_gf', 'french_guiana']),
    new Emoji("🇬🇬", "Flags", ['flag_gg', 'guernsey']),
    new Emoji("🇬🇭", "Flags", ['flag_gh', 'ghana']),
    new Emoji("🇬🇮", "Flags", ['flag_gi', 'gibraltar']),
    new Emoji("🇬🇱", "Flags", ['flag_gl', 'greenland']),
    new Emoji("🇬🇲", "Flags", ['flag_gm', 'gambia']),
    new Emoji("🇬🇳", "Flags", ['flag_gn', 'guinea']),
    new Emoji("🇬🇵", "Flags", ['flag_gp', 'guadeloupe']),
    new Emoji("🇬🇶", "Flags", ['equatorial_guinea', 'flag_gq']),
    new Emoji("🇬🇷", "Flags", ['flag_gr', 'greece']),
    new Emoji("🇬🇸", "Flags", ['flag_gs', 'south_georgia_south_sandwich_islands']),
    new Emoji("🇬🇹", "Flags", ['flag_gt', 'guatemala']),
    new Emoji("🇬🇺", "Flags", ['flag_gu', 'guam']),
    new Emoji("🇬🇼", "Flags", ['flag_gw', 'guinea_bissau']),
    new Emoji("🇬🇾", "Flags", ['flag_gy', 'guyana']),
    new Emoji("🇭🇰", "Flags", ['flag_hk', 'hong_kong']),
    new Emoji("🇭🇲", "Flags", ['flag_hm', 'heard_mcdonald_islands']),
    new Emoji("🇭🇳", "Flags", ['flag_hn', 'honduras']),
    new Emoji("🇭🇷", "Flags", ['croatia', 'flag_hr']),
    new Emoji("🇭🇹", "Flags", ['flag_ht', 'haiti']),
    new Emoji("🇭🇺", "Flags", ['flag_hu', 'hungary']),
    new Emoji("🇮🇨", "Flags", ['canary_islands', 'flag_ic']),
    new Emoji("🇮🇩", "Flags", ['flag_id', 'indonesia']),
    new Emoji("🇮🇪", "Flags", ['flag_ie', 'ireland']),
    new Emoji("🇮🇱", "Flags", ['flag_il', 'israel']),
    new Emoji("🇮🇲", "Flags", ['flag_im', 'isle_of_man']),
    new Emoji("🇮🇳", "Flags", ['flag_in', 'india']),
    new Emoji("🇮🇴", "Flags", ['british_indian_ocean_territory', 'flag_io']),
    new Emoji("🇮🇶", "Flags", ['flag_iq', 'iraq']),
    new Emoji("🇮🇷", "Flags", ['flag_ir', 'iran']),
    new Emoji("🇮🇸", "Flags", ['flag_is', 'iceland']),
    new Emoji("🇮🇹", "Flags", ['flag_it', 'italy']),
    new Emoji("🇯🇪", "Flags", ['flag_je', 'jersey']),
    new Emoji("🇯🇲", "Flags", ['flag_jm', 'jamaica']),
    new Emoji("🇯🇴", "Flags", ['flag_jo', 'jordan']),
    new Emoji("🇯🇵", "Flags", ['flag_jp', 'japan']),
    new Emoji("🇰🇪", "Flags", ['flag_ke', 'kenya']),
    new Emoji("🇰🇬", "Flags", ['flag_kg', 'kyrgyzstan']),
    new Emoji("🇰🇭", "Flags", ['cambodia', 'flag_kh']),
    new Emoji("🇰🇮", "Flags", ['flag_ki', 'kiribati']),
    new Emoji("🇰🇲", "Flags", ['comoros', 'flag_km']),
    new Emoji("🇰🇳", "Flags", ['flag_kn', 'st_kitts_nevis']),
    new Emoji("🇰🇵", "Flags", ['flag_kp', 'north_korea']),
    new Emoji("🇰🇷", "Flags", ['flag_kr', 'south_korea']),
    new Emoji("🇰🇼", "Flags", ['flag_kw', 'kuwait']),
    new Emoji("🇰🇾", "Flags", ['cayman_islands', 'flag_ky']),
    new Emoji("🇰🇿", "Flags", ['flag_kz', 'kazakhstan']),
    new Emoji("🇱🇦", "Flags", ['flag_la', 'laos']),
    new Emoji("🇱🇧", "Flags", ['flag_lb', 'lebanon']),
    new Emoji("🇱🇨", "Flags", ['flag_lc', 'st_lucia']),
    new Emoji("🇱🇮", "Flags", ['flag_li', 'liechtenstein']),
    new Emoji("🇱🇰", "Flags", ['flag_lk', 'sri_lanka']),
    new Emoji("🇱🇷", "Flags", ['flag_lr', 'liberia']),
    new Emoji("🇱🇸", "Flags", ['flag_ls', 'lesotho']),
    new Emoji("🇱🇹", "Flags", ['flag_lt', 'lithuania']),
    new Emoji("🇱🇺", "Flags", ['flag_lu', 'luxembourg']),
    new Emoji("🇱🇻", "Flags", ['flag_lv', 'latvia']),
    new Emoji("🇱🇾", "Flags", ['flag_ly', 'libya']),
    new Emoji("🇲🇦", "Flags", ['flag_ma', 'morocco']),
    new Emoji("🇲🇨", "Flags", ['flag_mc', 'monaco']),
    new Emoji("🇲🇩", "Flags", ['flag_md', 'moldova']),
    new Emoji("🇲🇪", "Flags", ['flag_me', 'montenegro']),
    new Emoji("🇲🇫", "Flags", ['flag_mf', 'st_martin']),
    new Emoji("🇲🇬", "Flags", ['flag_mg', 'madagascar']),
    new Emoji("🇲🇭", "Flags", ['flag_mh', 'marshall_islands']),
    new Emoji("🇲🇰", "Flags", ['flag_mk', 'macedonia']),
    new Emoji("🇲🇱", "Flags", ['flag_ml', 'mali']),
    new Emoji("🇲🇲", "Flags", ['burma', 'flag_mm', 'myanmar']),
    new Emoji("🇲🇳", "Flags", ['flag_mn', 'mongolia']),
    new Emoji("🇲🇴", "Flags", ['flag_mo', 'macao', 'macau']),
    new Emoji("🇲🇵", "Flags", ['flag_mp', 'northern_mariana_islands']),
    new Emoji("🇲🇶", "Flags", ['flag_mq', 'martinique']),
    new Emoji("🇲🇷", "Flags", ['flag_mr', 'mauritania']),
    new Emoji("🇲🇸", "Flags", ['flag_ms', 'montserrat']),
    new Emoji("🇲🇹", "Flags", ['flag_mt', 'malta']),
    new Emoji("🇲🇺", "Flags", ['flag_mu', 'mauritius']),
    new Emoji("🇲🇻", "Flags", ['flag_mv', 'maldives']),
    new Emoji("🇲🇼", "Flags", ['flag_mw', 'malawi']),
    new Emoji("🇲🇽", "Flags", ['flag_mx', 'mexico']),
    new Emoji("🇲🇾", "Flags", ['flag_my', 'malaysia']),
    new Emoji("🇲🇿", "Flags", ['flag_mz', 'mozambique']),
    new Emoji("🇳🇦", "Flags", ['flag_na', 'namibia']),
    new Emoji("🇳🇨", "Flags", ['flag_nc', 'new_caledonia']),
    new Emoji("🇳🇪", "Flags", ['flag_ne', 'niger']),
    new Emoji("🇳🇫", "Flags", ['flag_nf', 'norfolk_island']),
    new Emoji("🇳🇬", "Flags", ['flag_ng', 'nigeria']),
    new Emoji("🇳🇮", "Flags", ['flag_ni', 'nicaragua']),
    new Emoji("🇳🇱", "Flags", ['flag_nl', 'netherlands']),
    new Emoji("🇳🇴", "Flags", ['flag_no', 'norway']),
    new Emoji("🇳🇵", "Flags", ['flag_np', 'nepal']),
    new Emoji("🇳🇷", "Flags", ['flag_nr', 'nauru']),
    new Emoji("🇳🇺", "Flags", ['flag_nu', 'niue']),
    new Emoji("🇳🇿", "Flags", ['flag_nz', 'new_zealand']),
    new Emoji("🇴🇲", "Flags", ['flag_om', 'oman']),
    new Emoji("🇵🇦", "Flags", ['flag_pa', 'panama']),
    new Emoji("🇵🇪", "Flags", ['flag_pe', 'peru']),
    new Emoji("🇵🇫", "Flags", ['flag_pf', 'french_polynesia']),
    new Emoji("🇵🇬", "Flags", ['flag_pg', 'papua_new_guinea']),
    new Emoji("🇵🇭", "Flags", ['flag_ph', 'philippines']),
    new Emoji("🇵🇰", "Flags", ['flag_pk', 'pakistan']),
    new Emoji("🇵🇱", "Flags", ['flag_pl', 'poland']),
    new Emoji("🇵🇲", "Flags", ['flag_pm', 'st_pierre_miquelon']),
    new Emoji("🇵🇳", "Flags", ['flag_pn', 'pitcairn_islands']),
    new Emoji("🇵🇷", "Flags", ['flag_pr', 'puerto_rico']),
    new Emoji("🇵🇸", "Flags", ['flag_ps', 'palestinian_territories']),
    new Emoji("🇵🇹", "Flags", ['flag_pt', 'portugal']),
    new Emoji("🇵🇼", "Flags", ['flag_pw', 'palau']),
    new Emoji("🇵🇾", "Flags", ['flag_py', 'paraguay']),
    new Emoji("🇶🇦", "Flags", ['flag_qa', 'qatar']),
    new Emoji("🇷🇪", "Flags", ['flag_re', 'reunion']),
    new Emoji("🇷🇴", "Flags", ['flag_ro', 'romania']),
    new Emoji("🇷🇸", "Flags", ['flag_rs', 'serbia']),
    new Emoji("🇷🇺", "Flags", ['flag_ru', 'russia']),
    new Emoji("🇷🇼", "Flags", ['flag_rw', 'rwanda']),
    new Emoji("🇸🇦", "Flags", ['flag_sa', 'saudi_arabia']),
    new Emoji("🇸🇧", "Flags", ['flag_sb', 'solomon_islands']),
    new Emoji("🇸🇨", "Flags", ['flag_sc', 'seychelles']),
    new Emoji("🇸🇩", "Flags", ['flag_sd', 'sudan']),
    new Emoji("🇸🇪", "Flags", ['flag_se', 'sweden']),
    new Emoji("🇸🇬", "Flags", ['flag_sg', 'singapore']),
    new Emoji("🇸🇭", "Flags", ['flag_sh', 'st_helena']),
    new Emoji("🇸🇮", "Flags", ['flag_si', 'slovenia']),
    new Emoji("🇸🇯", "Flags", ['flag_sj', 'svalbard_jan_mayen']),
    new Emoji("🇸🇰", "Flags", ['flag_sk', 'slovakia']),
    new Emoji("🇸🇱", "Flags", ['flag_sl', 'sierra_leone']),
    new Emoji("🇸🇲", "Flags", ['flag_sm', 'san_marino']),
    new Emoji("🇸🇳", "Flags", ['flag_sn', 'senegal']),
    new Emoji("🇸🇴", "Flags", ['flag_so', 'somalia']),
    new Emoji("🇸🇷", "Flags", ['flag_sr', 'suriname']),
    new Emoji("🇸🇸", "Flags", ['flag_ss', 'south_sudan']),
    new Emoji("🇸🇹", "Flags", ['flag_st', 'sao_tome_principe']),
    new Emoji("🇸🇻", "Flags", ['el_salvador', 'flag_sv']),
    new Emoji("🇸🇽", "Flags", ['flag_sx', 'sint_maarten']),
    new Emoji("🇸🇾", "Flags", ['flag_sy', 'syria']),
    new Emoji("🇸🇿", "Flags", ['eswatini', 'flag_sz', 'swaziland']),
    new Emoji("🇹🇦", "Flags", ['flag_ta', 'tristan_da_cunha']),
    new Emoji("🇹🇨", "Flags", ['flag_tc', 'turks_caicos_islands']),
    new Emoji("🇹🇩", "Flags", ['chad', 'flag_td']),
    new Emoji("🇹🇫", "Flags", ['flag_tf', 'french_southern_territories']),
    new Emoji("🇹🇬", "Flags", ['flag_tg', 'togo']),
    new Emoji("🇹🇭", "Flags", ['flag_th', 'thailand']),
    new Emoji("🇹🇯", "Flags", ['flag_tj', 'tajikistan']),
    new Emoji("🇹🇰", "Flags", ['flag_tk', 'tokelau']),
    new Emoji("🇹🇱", "Flags", ['flag_tl', 'timor_leste']),
    new Emoji("🇹🇲", "Flags", ['flag_tm', 'turkmenistan']),
    new Emoji("🇹🇳", "Flags", ['flag_tn', 'tunisia']),
    new Emoji("🇹🇴", "Flags", ['flag_to', 'tonga']),
    new Emoji("🇹🇷", "Flags", ['flag_tr', 'turkey_tr']),
    new Emoji("🇹🇹", "Flags", ['flag_tt', 'trinidad_tobago']),
    new Emoji("🇹🇻", "Flags", ['flag_tv', 'tuvalu']),
    new Emoji("🇹🇼", "Flags", ['flag_tw', 'taiwan']),
    new Emoji("🇹🇿", "Flags", ['flag_tz', 'tanzania']),
    new Emoji("🇺🇦", "Flags", ['flag_ua', 'ukraine']),
    new Emoji("🇺🇬", "Flags", ['flag_ug', 'uganda']),
    new Emoji("🇺🇲", "Flags", ['flag_um', 'us_outlying_islands']),
    new Emoji("🇺🇳", "Flags", ['flag_un', 'un', 'united_nations']),
    new Emoji("🇺🇸", "Flags", ['flag_us', 'united_states', 'usa']),
    new Emoji("🇺🇾", "Flags", ['flag_uy', 'uruguay']),
    new Emoji("🇺🇿", "Flags", ['flag_uz', 'uzbekistan']),
    new Emoji("🇻🇦", "Flags", ['flag_va', 'vatican_city']),
    new Emoji("🇻🇨", "Flags", ['flag_vc', 'st_vincent_grenadines']),
    new Emoji("🇻🇪", "Flags", ['flag_ve', 'venezuela']),
    new Emoji("🇻🇬", "Flags", ['british_virgin_islands', 'flag_vg']),
    new Emoji("🇻🇮", "Flags", ['flag_vi', 'us_virgin_islands']),
    new Emoji("🇻🇳", "Flags", ['flag_vn', 'vietnam']),
    new Emoji("🇻🇺", "Flags", ['flag_vu', 'vanuatu']),
    new Emoji("🇼🇫", "Flags", ['flag_wf', 'wallis_futuna']),
    new Emoji("🇼🇸", "Flags", ['flag_ws', 'samoa']),
    new Emoji("🇽🇰", "Flags", ['flag_xk', 'kosovo']),
    new Emoji("🇾🇪", "Flags", ['flag_ye', 'yemen']),
    new Emoji("🇾🇹", "Flags", ['flag_yt', 'mayotte']),
    new Emoji("🇿🇦", "Flags", ['flag_za', 'south_africa']),
    new Emoji("🇿🇲", "Flags", ['flag_zm', 'zambia']),
    new Emoji("🇿🇼", "Flags", ['flag_zw', 'zimbabwe']),
    new Emoji("🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Flags", ['england', 'flag_gbeng']),
    new Emoji("🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Flags", ['flag_gbsct', 'scotland']),
    new Emoji("🏴󠁧󠁢󠁷󠁬󠁳󠁿", "Flags", ['flag_gbwls', 'wales']),
];var CategoryItem = /** @class */ (function (_super) {
    __extends(CategoryItem, _super);
    function CategoryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CategoryItem.prototype, "styleSVG", {
        get: function () {
            return __assign({}, this.styles);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        vuePropertyDecorator.Prop({ required: true })
    ], CategoryItem.prototype, "label", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ required: true })
    ], CategoryItem.prototype, "icon", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], CategoryItem.prototype, "styles", void 0);
    CategoryItem = __decorate([
        vuePropertyDecorator.Component({})
    ], CategoryItem);
    return CategoryItem;
}(vuePropertyDecorator.Vue));function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}/* script */
const __vue_script__ = CategoryItem;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"svg",style:(_vm.styleSVG),attrs:{"title":_vm.label},domProps:{"innerHTML":_vm._s(_vm.icon)}})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-3d397e3a_0", { source: ".svg[data-v-3d397e3a]{display:inline-block;vertical-align:middle}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-3d397e3a";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );var Categories = /** @class */ (function (_super) {
    __extends(Categories, _super);
    function Categories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Categories.prototype.onSelect = function (category) {
        return category;
    };
    __decorate([
        vuePropertyDecorator.Prop({})
    ], Categories.prototype, "categories", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], Categories.prototype, "current", void 0);
    __decorate([
        vuePropertyDecorator.Emit("select")
    ], Categories.prototype, "onSelect", null);
    Categories = __decorate([
        vuePropertyDecorator.Component({
            components: {
                CategoryItem: __vue_component__
            }
        })
    ], Categories);
    return Categories;
}(vuePropertyDecorator.Vue));/* script */
const __vue_script__$1 = Categories;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Categories"}},_vm._l((_vm.categories),function(category,index){return _c('div',{key:index,class:['category', { active: category.name === _vm.current }],on:{"click":function($event){return _vm.onSelect(category)}}},[_c('CategoryItem',{attrs:{"label":category.label,"icon":category.icon}})],1)}),0)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-1c907075_0", { source: "#Categories[data-v-1c907075]{display:flex;width:100%;flex-direction:row;align-items:center;border-bottom:1px solid var(--ep-color-border);background:0 0;overflow-x:auto}.category[data-v-1c907075]{flex:1;padding:2px;text-align:center;cursor:pointer}.category.active[data-v-1c907075]{border-bottom:2px solid var(--ep-color-active);padding-bottom:0}.category>img[data-v-1c907075]{width:14px;height:14px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-1c907075";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );var EmojiItem = /** @class */ (function (_super) {
    __extends(EmojiItem, _super);
    function EmojiItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EmojiItem.prototype, "styleSize", {
        get: function () {
            return {
                fontSize: this.size - 5 + "px",
                lineHeight: this.size + "px",
                height: this.size + "px",
                width: this.size + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiItem.prototype, "emoji", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiItem.prototype, "size", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiItem.prototype, "withBorder", void 0);
    EmojiItem = __decorate([
        vuePropertyDecorator.Component({})
    ], EmojiItem);
    return EmojiItem;
}(vuePropertyDecorator.Vue));/* script */
const __vue_script__$2 = EmojiItem;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['emoji', { 'border': _vm.withBorder } ],style:(_vm.styleSize),domProps:{"innerHTML":_vm._s(_vm.emoji.data)}})};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-5e75d234_0", { source: ".emoji[data-v-5e75d234]{display:inline-block;text-align:center;padding:3px;box-sizing:content-box;overflow:hidden;transition:transform .2s;cursor:default}.emoji[data-v-5e75d234]:hover{background:rgba(208,213,220,.13);box-shadow:0 4px 12px rgba(0,0,0,.06),0 12px 50px rgba(0,0,0,.05),inset 0 0 0 1px rgba(241,241,241,.02)}.border[data-v-5e75d234]:hover{background:#00000010;border-radius:8px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-5e75d234";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );var CategoryLabel = /** @class */ (function (_super) {
    __extends(CategoryLabel, _super);
    function CategoryLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        vuePropertyDecorator.Prop({ required: true })
    ], CategoryLabel.prototype, "name", void 0);
    CategoryLabel = __decorate([
        vuePropertyDecorator.Component({})
    ], CategoryLabel);
    return CategoryLabel;
}(vuePropertyDecorator.Vue));/* script */
const __vue_script__$3 = CategoryLabel;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category-title"},[_vm._v(_vm._s(_vm.name))])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-5d1ec8c0_0", { source: ".category-title[data-v-5d1ec8c0]{text-transform:uppercase;font-size:.8em;padding:5px 0 0 2px;color:#4a4a4a}.category-title[data-v-5d1ec8c0]:not(:first-of-type){padding:10px 0 0 2px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-5d1ec8c0";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    createInjector,
    undefined,
    undefined
  );var EmojiList = /** @class */ (function (_super) {
    __extends(EmojiList, _super);
    function EmojiList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    EmojiList.prototype.searchByAlias = function (term, emoji) {
        var isRelevant = function (alias) { return alias.toLowerCase().includes(term); };
        return emoji.aliases.some(function (alias) { return isRelevant(alias); });
    };
    EmojiList.prototype.calcScrollTop = function () {
        return this.hasSearch ? 88 : 44;
    };
    EmojiList.prototype.scrollTo = function (top) {
        var _a;
        // @ts-ignore
        (_a = this.$refs['container-emoji'].firstElementChild) === null || _a === void 0 ? void 0 : _a.scrollTo({
            top: top,
            behavior: 'instant',
        });
    };
    EmojiList.prototype.getRelevantEmojis = function (category) {
        var _this = this;
        var searchValue = this.filter.trim().toLowerCase();
        if (searchValue) {
            return this.data[category].filter(function (emoji) {
                return _this.searchByAlias(searchValue, emoji);
            });
        }
        else {
            return this.data[category];
        }
    };
    Object.defineProperty(EmojiList.prototype, "emojis", {
        get: function () {
            var _this = this;
            var index = 0;
            var offsetTop = 0;
            var categoryIndex = 0;
            var flattenedList = [];
            this.categories.forEach(function (category) {
                index = 0;
                if (_this.getRelevantEmojis(category).length) {
                    flattenedList.push({
                        data: {
                            id: category,
                            label: category,
                            category: true,
                            index: categoryIndex,
                            x: 0,
                            y: offsetTop
                        }
                    });
                    offsetTop++;
                    _this.getRelevantEmojis(category).forEach(function (emoji) {
                        flattenedList.push({
                            data: {
                                emoji: emoji,
                                emojiCategory: emoji.category,
                                id: emoji.data,
                                x: (index % _this.emojisByRow),
                                y: offsetTop + Math.floor(index / _this.emojisByRow)
                            }
                        });
                        index++;
                    });
                    offsetTop = offsetTop + Math.ceil(index / _this.emojisByRow);
                }
            });
            return flattenedList;
        },
        enumerable: false,
        configurable: true
    });
    EmojiList.prototype.cellSizeAndPositionGetterList = function (item, index) {
        return {
            width: this.emojiSize,
            height: this.emojiSize,
            x: item.data.x * (this.emojiSize + 11),
            y: item.data.y * (this.emojiSize + 11),
        };
    };
    Object.defineProperty(EmojiList.prototype, "categories", {
        get: function () {
            return Object.keys(this.data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "containerEmoji", {
        get: function () {
            return this.$refs["container-emoji"];
        },
        enumerable: false,
        configurable: true
    });
    EmojiList.prototype.onSelect = function (emoji) {
        return emoji;
    };
    EmojiList.prototype.onDataChanged = function () {
        this.containerEmoji.scrollTop = 0;
    };
    EmojiList.prototype.onCategoryChanged = function (newValue) {
        var element = this.emojis.find(function (element) { return element.data.category && element.data.id === newValue; });
        this.scrollTo(element.data.y * (this.emojiSize + 11));
    };
    EmojiList.prototype.mounted = function () {
        var _a, _b;
        // @ts-ignore
        this.width = (_a = this.$refs['container-emoji']) === null || _a === void 0 ? void 0 : _a.offsetWidth;
        // @ts-ignore
        this.height = (_b = this.$refs['container-emoji']) === null || _b === void 0 ? void 0 : _b.offsetHeight;
    };
    __decorate([
        vuePropertyDecorator.Prop({ required: true })
    ], EmojiList.prototype, "data", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ required: true })
    ], EmojiList.prototype, "emojisByRow", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "emojiWithBorder", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "emojiSize", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "filter", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "continuousList", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "category", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "hasSearch", void 0);
    __decorate([
        vuePropertyDecorator.Emit("select")
    ], EmojiList.prototype, "onSelect", null);
    __decorate([
        vuePropertyDecorator.Watch("data")
    ], EmojiList.prototype, "onDataChanged", null);
    __decorate([
        vuePropertyDecorator.Watch("category")
    ], EmojiList.prototype, "onCategoryChanged", null);
    EmojiList = __decorate([
        vuePropertyDecorator.Component({
            components: {
                EmojiItem: __vue_component__$2,
                CategoryLabel: __vue_component__$3,
            }
        })
    ], EmojiList);
    return EmojiList;
}(vuePropertyDecorator.Vue));/* script */
const __vue_script__$4 = EmojiList;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Emojis"}},[_c('div',{ref:"container-emoji",staticClass:"container-emoji"},[_c('VirtualCollection',{ref:"virtualCollection",attrs:{"cell-size-and-position-getter":_vm.cellSizeAndPositionGetterList,"collection":_vm.emojis,"width":_vm.width,"height":_vm.height,"header-slot-height":0},scopedSlots:_vm._u([{key:"cell",fn:function(props){return _c('div',{ref:("" + (props.data.id))},[(props.data.category)?_c('CategoryLabel',{attrs:{"name":props.data.label}}):_vm._e(),_vm._v(" "),(props.data.emoji)?_c('EmojiItem',{key:((props.data.category) + "-" + (props.data.index)),attrs:{"emoji":props.data.emoji,"size":_vm.emojiSize,"withBorder":_vm.emojiWithBorder},nativeOn:{"click":function($event){return _vm.onSelect(props.data.emoji)}}}):_vm._e()],1)}}])})],1)])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-df5cb2ee_0", { source: "#Emojis[data-v-df5cb2ee]{font-family:Twemoji,NotomojiColor,Notomoji,EmojiOne Color,Symbola,Noto,Segoe UI Emoji,OpenSansEmoji,monospace;display:block;width:100%;max-width:100%;color:var(--ep-color-text)}#Emojis[data-v-df5cb2ee] ::-webkit-scrollbar{border-radius:4px;width:4px;overflow:hidden}.container-emoji[data-v-df5cb2ee]{overflow-x:hidden;overflow-y:scroll;height:220px}.grid-emojis[data-v-df5cb2ee]{display:grid;margin:5px 0;justify-items:center}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = "data-v-df5cb2ee";
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    createInjector,
    undefined,
    undefined
  );var timemout = 500;
var listenInput;
var InputSearch = /** @class */ (function (_super) {
    __extends(InputSearch, _super);
    function InputSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputSearch = "";
        return _this;
    }
    InputSearch.prototype.onInputChanged = function (newValue, old) {
        var _this = this;
        clearTimeout(listenInput);
        listenInput = setTimeout(function () { return _this.$emit("update", newValue); }, timemout);
    };
    Object.defineProperty(InputSearch.prototype, "placeholder", {
        get: function () {
            return t("search");
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        vuePropertyDecorator.Watch("inputSearch")
    ], InputSearch.prototype, "onInputChanged", null);
    InputSearch = __decorate([
        vuePropertyDecorator.Component({})
    ], InputSearch);
    return InputSearch;
}(vuePropertyDecorator.Vue));/* script */
const __vue_script__$5 = InputSearch;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"InputSearch"}},[_c('div',{staticClass:"container-search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputSearch),expression:"inputSearch"}],attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.inputSearch)},on:{"input":function($event){if($event.target.composing){ return; }_vm.inputSearch=$event.target.value;}}})])])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-25c5738e_0", { source: "#InputSearch[data-v-25c5738e]{display:block;width:100%;max-width:100%}.container-search[data-v-25c5738e]{display:block;justify-content:center;box-sizing:border-box;width:100%;margin:5px 0}.container-search input[data-v-25c5738e]{font-style:normal;font-weight:500;font-size:12.37px;line-height:18px;letter-spacing:-.01em;width:100%;padding:6px 8px;box-sizing:border-box;border-radius:8px;border:1px solid #3e4856;background:rgba(30,35,45,.83);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 4px 12px rgba(0,0,0,.06),0 12px 50px rgba(0,0,0,.05),inset 0 0 0 1px rgba(241,241,241,.02);color:#fff;outline:0}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-25c5738e";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    createInjector,
    undefined,
    undefined
  );var VEmojiPicker = /** @class */ (function (_super) {
    __extends(VEmojiPicker, _super);
    function VEmojiPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapEmojis = {};
        _this.currentCategory = _this.initialCategory;
        _this.filterEmoji = "";
        return _this;
    }
    VEmojiPicker.prototype.created = function () {
        var categoriesNames = this.customCategories.map(function (c) { return c.name; });
        if (!categoriesNames.includes(this.initialCategory)) {
            this.initialCategory = categoriesNames[0];
        }
        // Create map
        this.mapperEmojisCategory(this.customEmojis);
        this.restoreFrequentlyEmojis();
        // Configure i18n
        if (this.i18n) {
            locale.i18n(this.i18n);
        }
    };
    VEmojiPicker.prototype.beforeDestroy = function () {
        this.mapEmojis = {};
    };
    VEmojiPicker.prototype.onSearch = function (term) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.filterEmoji = term;
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.changeCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var hasEmojis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasEmojis = this.mapEmojis[category.name].length;
                        this.currentCategory = category.name;
                        if (!hasEmojis) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onChangeCategory(category)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    VEmojiPicker.prototype.updateFrequently = function (emoji) {
        return __awaiter(this, void 0, void 0, function () {
            var oldEmojis, emojis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldEmojis = this.mapEmojis["Frequently"];
                        emojis = __spread(new Set(__spread([emoji], oldEmojis)));
                        this.mapEmojis["Frequently"] = emojis.slice(0, this.limitFrequently);
                        return [4 /*yield*/, this.saveFrequentlyEmojis(emojis)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VEmojiPicker.prototype.mapperEmojisCategory = function (emojis) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.$set(this.mapEmojis, "Frequently", []);
                emojis
                    .filter(function (emoji) { return !_this.exceptEmojis.includes(emoji); })
                    .forEach(function (emoji) {
                    var _category = emoji.category;
                    if (!_this.mapEmojis[_category]) {
                        _this.$set(_this.mapEmojis, _category, []);
                    }
                    _this.mapEmojis[_category].push(emoji);
                });
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.restoreFrequentlyEmojis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jsonMapIndexEmojis, mapIndexEmojis;
            var _this = this;
            return __generator(this, function (_a) {
                jsonMapIndexEmojis = localStorage.getItem("frequentlyEmojis");
                mapIndexEmojis = JSON.parse(jsonMapIndexEmojis) || [];
                this.mapEmojis["Frequently"] = mapIndexEmojis.map(function (index) { return _this.customEmojis[index]; });
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.saveFrequentlyEmojis = function (emojis) {
        return __awaiter(this, void 0, void 0, function () {
            var mapIndexEmojis;
            var _this = this;
            return __generator(this, function (_a) {
                mapIndexEmojis = emojis.map(function (emoji) {
                    return _this.customEmojis.indexOf(emoji);
                });
                localStorage.setItem("frequentlyEmojis", JSON.stringify(mapIndexEmojis));
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(VEmojiPicker.prototype, "categoriesFiltered", {
        get: function () {
            var _this = this;
            return this.customCategories.filter(function (category) { return !_this.exceptCategories.includes(category); });
        },
        enumerable: false,
        configurable: true
    });
    VEmojiPicker.prototype.onSelectEmoji = function (emoji) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateFrequently(emoji)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, emoji];
                }
            });
        });
    };
    VEmojiPicker.prototype.onChangeCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, category];
            });
        });
    };
    VEmojiPicker.prototype.onChangeCustomEmojis = function (newEmojis) {
        if (newEmojis && newEmojis.length) {
            this.mapEmojis = {};
            this.mapperEmojisCategory(newEmojis);
        }
    };
    __decorate([
        vuePropertyDecorator.Prop({ default: function () { return emojisDefault; } })
    ], VEmojiPicker.prototype, "customEmojis", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: function () { return categoriesDefault; } })
    ], VEmojiPicker.prototype, "customCategories", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: 15 })
    ], VEmojiPicker.prototype, "limitFrequently", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: 8 })
    ], VEmojiPicker.prototype, "emojisByRow", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: 20 })
    ], VEmojiPicker.prototype, "emojiSize", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: true })
    ], VEmojiPicker.prototype, "emojiWithBorder", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: true })
    ], VEmojiPicker.prototype, "showSearch", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: true })
    ], VEmojiPicker.prototype, "showCategories", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: false })
    ], VEmojiPicker.prototype, "dark", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: "Peoples" })
    ], VEmojiPicker.prototype, "initialCategory", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: function () { return []; } })
    ], VEmojiPicker.prototype, "exceptCategories", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: function () { return []; } })
    ], VEmojiPicker.prototype, "exceptEmojis", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], VEmojiPicker.prototype, "i18n", void 0);
    __decorate([
        vuePropertyDecorator.Emit("select")
    ], VEmojiPicker.prototype, "onSelectEmoji", null);
    __decorate([
        vuePropertyDecorator.Emit("changeCategory")
    ], VEmojiPicker.prototype, "onChangeCategory", null);
    __decorate([
        vuePropertyDecorator.Watch("customEmojis")
    ], VEmojiPicker.prototype, "onChangeCustomEmojis", null);
    VEmojiPicker = __decorate([
        vuePropertyDecorator.Component({
            components: {
                Categories: __vue_component__$1,
                EmojiList: __vue_component__$4,
                InputSearch: __vue_component__$5
            }
        })
    ], VEmojiPicker);
    return VEmojiPicker;
}(vuePropertyDecorator.Vue));/* script */
const __vue_script__$6 = VEmojiPicker;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['emoji-picker', {dark: _vm.dark}],attrs:{"id":"EmojiPicker"}},[(_vm.showCategories)?_c('Categories',{attrs:{"categories":_vm.categoriesFiltered,"current":_vm.currentCategory},on:{"select":_vm.changeCategory}}):_vm._e(),_vm._v(" "),(_vm.showSearch)?_c('InputSearch',{on:{"update":_vm.onSearch}}):_vm._e(),_vm._v(" "),_c('EmojiList',{attrs:{"data":_vm.mapEmojis,"category":_vm.currentCategory,"filter":_vm.filterEmoji,"emojiWithBorder":_vm.emojiWithBorder,"emojiSize":_vm.emojiSize,"emojisByRow":_vm.emojisByRow,"hasSearch":_vm.showSearch},on:{"select":_vm.onSelectEmoji}})],1)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-1693fe84_0", { source: ".emoji-picker[data-v-1693fe84]{--ep-color-bg:#f0f0f0;--ep-color-sbg:#f6f6f6;--ep-color-border:#3e4856;--ep-color-text:#4a4a4a;--ep-color-active:#64D7DE;display:inline-flex;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeSpeed;flex-direction:column;align-items:center;background:0 0;border-radius:4px;border:none;overflow:hidden;width:250px;user-select:none}.dark[data-v-1693fe84]{--ep-color-bg:#f0f0f0;--ep-color-sbg:#f6f6f6;--ep-color-border:#3e4856;--ep-color-text:#4a4a4a;--ep-color-active:#64D7DE}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-1693fe84";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    createInjector,
    undefined,
    undefined
  );var defaultOptions = {
    i18n: {}
};
var plugin = {
    VEmojiPicker: __vue_component__$6,
    install: function (Vue, opts) {
        if (opts === void 0) { opts = defaultOptions; }
        locale.i18n(opts.i18n);
        Vue.component("VEmojiPicker", __vue_component__$6);
    }
};exports.VEmojiPicker=__vue_component__$6;exports.categoriesDefault=categoriesDefault;exports.default=plugin;exports.emojisDefault=emojisDefault;Object.defineProperty(exports,'__esModule',{value:true});return exports;}({},vuePropertyDecorator));