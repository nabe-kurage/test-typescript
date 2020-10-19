function increment(num) {
    return num + 1;
}
// console.log(increment('1'));
console.log(increment(1));
// tsc src/increment.ts でコンパイル
// node src/increment.jsで確認
var str = 90;
console.log(str.length);
// undefined
console.log(typeof null);
//これはオブジェクトになるのね
var thisisnull = null;
console.log(thisisnull === null);
//これでnullは判定可能（true）
// リテラル型
// 決まった値を入れるもの
var person = 1;
person = 2;
// person = 6; はエラーになる
// 以下はすべて同じ
function increment2(num) {
    return num + 1;
}
var increment3 = function (num) {
    return num + 1;
};
var increment4 = function (num) {
    return num + 1;
};
var increment5 = function (num) { return num + 1; };
// ？つけると省略できる
function distance(p1, p2) {
    var p0 = p2;
    if (p0 === undefined) {
        p0 = {
            x: 0,
            y: 0
        };
    }
    return Math.pow((Math.pow((p1.x - p0.x), 2) + Math.pow((p1.y - p0.y), 2)), (1 / 2));
}
function inverse(p) {
    return {
        x: p.y,
        y: p.x
    };
}
function distance2(p1, p2) {
    if (p2 === void 0) { p2 = inverse(p1); }
    return Math.pow((Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2)), (1 / 2));
}
function bmi(_a) {
    var _b = _a.height, height = _b === void 0 ? 165 : _b, _c = _a.weight, weight = _c === void 0 ? 60 : _c;
    var mHeight = height / 100.0;
    return weight / (Math.pow(mHeight, 2));
}
console.log(bmi({ height: 170, weight: 65 }));
// 順番が変わっても問題ない
console.log(bmi({ weight: 40, height: 150 }));
console.log(bmi({ weight: 80 }));
var Male = /** @class */ (function () {
    function Male(name) {
        this.name = name;
    }
    Male.prototype.toString = function () {
        return "Monsieur " + this.name;
    };
    return Male;
}());
var Female = /** @class */ (function () {
    function Female(name) {
        this.name = name;
    }
    Female.prototype.toString = function () {
        return "Madame " + this.name;
    };
    return Female;
}());
var male = new Male('Frederic');
var female = new Female('Frederique');
console.log(male.toString());
console.log(female.toString());
var maleToStr = male.toString;
console.log(maleToStr());
function doNothisng1() {
}
function doNothinh2() {
    return;
}
function doNodoNothinh3() {
    return;
}
// これはだめ　returnのない関数はvoid
// function doNodoNothinh4(): undefined {
// }
