"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
function expo2(amount) {
    return Math.pow(amount, 2);
}
function logger(msg) {
    console.log(msg);
}
console.log(expo2(1000));
// console.log(expo2('1000')) // Error
var flag = false;
var decimal = 123;
var hex = 0xfff;
var bin = 0;
var octal = 83;
var str = 'aaa';
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var list3 = [1, 'hoge', {}];
var unko = ['1'];
var kimera;
// Union Type 複数の型を許容
var val;
val = false;
val = 1;
val = 'hoge';
var nullableString;
nullableString = null;
nullableString = 'notNull';
// Literal Type
var myName;
myName = 'Taro';
// myName = 'Jiro' // Error
// typeof 他のオブジェクトの型を使える
var myObject = { foo: 'foo' };
var anotherObject = { foo: 'bar' };
anotherObject['foo'] = 'foofoo';
// anotherObject['bar'] = 'barbar' // Error
// assertion
var someValue = 'this is a string';
var strLen = someValue.length;
var strLen2 = someValue.length;
// Class
var Creature = /** @class */ (function () {
    function Creature(hands, feet) {
        this.numberOfHands = hands;
        this.numberOfFeet = feet;
    }
    return Creature;
}());
var creature = new Creature(0, 4);
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(mew) {
        var _this = _super.call(this, 0, 4) || this;
        _this.mew = mew;
        return _this;
    }
    return Cat;
}(Creature));
var cat = new Cat('mewmew');
// Promiseの型推論
// 暗黙的に書かれている場合は Promise<{}> という推論になる
// アノテーションで指定する
function wait(duration) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(duration + " ms passed"); }, duration);
    });
}
wait(1000).then(function (res) {
    console.log(res);
});
function queue() {
    return __awaiter(this, void 0, void 0, function () {
        var msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wait(1000)];
                case 1:
                    msg = _a.sent();
                    return [2 /*return*/, msg];
            }
        });
    });
}
queue();
// 関数の引数をオプションにする、デフォルト値を入れる
function greet(name, gender) {
    if (gender === void 0) { gender = 'Mr.'; }
    if (name === undefined)
        return 'Hello';
    return "Hello " + gender + " " + name.toUpperCase();
}
console.log(greet());
console.log(greet('Taro'));
var userA = {
    name: 'Taro',
    age: 26,
    height: 170
};
var x = userA.name;
var y = userA.age;
var clientA = {
    name: 'Jiro',
    enquete: {
        exercise_habits: 'entirely',
        time_of_sleeping: 'few'
    }
};
// type guards
/// typeof
function reset(value) {
    var v = value;
    if (typeof v === 'number') {
        var v1 = v;
        return 0;
    }
    if (typeof v === 'string') {
        var v1 = v;
        return '';
    }
    if (typeof v === 'boolean') {
        var v1 = v;
        return false;
    }
}
reset(1);
reset('str');
reset(true);
function judgeUserType(user) {
    if ('gender' in user) {
        var u0 = user;
        console.log('user type is B | C');
    }
    if ('name' in user) {
        var u1 = user;
        console.log('user type is B');
        return;
    }
    var u2 = user;
    console.log('user type is C');
}
var box1 = { value: 'test' };
var box2 = { value: 123 };
var boxStr1 = { value: 'string' };
var boxStr2 = { value: 123 };
/// 指定可能な型を制約
