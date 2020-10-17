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
