var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function returnUndefined() {
    return undefined;
}
function returnVoid() {
}
var u1 = returnUndefined();
var u2 = returnUndefined();
// これはだめ　void型の変数をundefined型の変数に入れることはできない
// cont v1: undefined = returnVoid();
var v2 = returnUndefined();
function doNothsing2(arg) {
}
;
function doNothsing3(arg) {
}
;
//voidは引数なくてもよい
doNothsing2();
// anyは引数は必要
// doNothsing3();
// Type predicate 戻り値がtrueの時の型を指定できる
// function isDuck(animal: Animal): animal is Duck {
//     ...
// }
var newArray = ["foge", undefined, "huga", "foga", undefined, "fuge"].filter(function (e) { return e; });
console.log(newArray);
var newArray2 = ["foge", undefined, "huga", "foga", undefined, "fuge"].filter(function (e) { return Boolean(e); });
console.log(newArray2);
var Operator = /** @class */ (function () {
    function Operator(value) {
        this.value = value;
    }
    Operator.prototype.sum = function (value) {
        this.value += value;
        return this;
    };
    Operator.prototype.subtract = function (value) {
        this.value -= value;
        return this;
    };
    Operator.prototype.multiply = function (value) {
        this.value *= value;
        return this;
    };
    Operator.prototype.devide = function (value) {
        this.value /= value;
        return this;
    };
    return Operator;
}());
var op = new Operator(0);
//戻り値をOperatorにしたのでめチェインが可能に
console.log(op.sum(5).subtract(3).multiply(6).devide(3));
// thisを戻り値に設定すると他のメソッドと組み合わせが可能に
var Operator2 = /** @class */ (function () {
    function Operator2(value) {
        this.value = value;
    }
    Operator2.prototype.sum = function (value) {
        this.value += value;
        return this;
    };
    Operator2.prototype.subtract = function (value) {
        this.value -= value;
        return this;
    };
    Operator2.prototype.multiply = function (value) {
        this.value *= value;
        return this;
    };
    Operator2.prototype.devide = function (value) {
        this.value /= value;
        return this;
    };
    return Operator2;
}());
var NewOperator = /** @class */ (function (_super) {
    __extends(NewOperator, _super);
    function NewOperator(value) {
        return _super.call(this, value) || this;
    }
    NewOperator.prototype.power = function (value) {
        var _a;
        (_a = this).value = Math.pow(_a.value, value);
        return this;
    };
    return NewOperator;
}(Operator2));
var op2 = new NewOperator(2);
console.log(op2.power(3).multiply(2).power(3));
