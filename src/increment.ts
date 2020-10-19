function increment(num: number) {
    return num + 1;
}

// console.log(increment('1'));
console.log(increment(1));
// tsc src/increment.ts でコンパイル
// node src/increment.jsで確認

const str: any = 90;
console.log(str.length);
// undefined

console.log(typeof null);
//これはオブジェクトになるのね
const thisisnull = null;
console.log(thisisnull === null)
//これでnullは判定可能（true）

// リテラル型
// 決まった値を入れるもの
let person: 1 | 2 | 3 | 4 = 1;
person = 2;
// person = 6; はエラーになる

// 以下はすべて同じ
function increment2(num: number): number {
    return num + 1;
}

const increment3 = function(num: number): number {
    return num + 1;
}

const increment4 = (num: number): number => {
    return num + 1;
}

const increment5 = (num: number): number => num + 1;


// typeの定義をできる
type Point = {
    x: number;
    y: number
}
// ？つけると省略できる
function distance(p1: Point, p2?: Point): number {
    let p0: Point | undefined = p2;

    if (p0 === undefined) {
        p0 = {
            x: 0,
            y: 0
        };
    }

    return ((p1.x - p0.x) ** 2 + (p1.y - p0.y) ** 2) ** (1 / 2);
}

function inverse(p: Point): Point {
    return {
        x: p.y,
        y: p.x
    };
}

function distance2(p1: Point, p2: Point = inverse(p1)): number {
    return ((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2) ** (1 / 2);
}

type TopSecret = {
    height?: number;
    weight?: number;
}

function bmi({height = 165, weight = 60}: TopSecret): number {
    const mHeight: number = height / 100.0;
    return weight / (mHeight ** 2);
}

console.log(bmi({ height: 170, weight: 65 }));
// 順番が変わっても問題ない
console.log(bmi({ weight: 40, height: 150 }));
console.log(bmi({ weight: 80 }));


class Male {
    private name: string;

    public constructor(name: string) {
        this.name = name
    }

    public toString(): string {
        return `Monsieur ${this.name}`
    }
}

class Female {
    private name: string;

    public constructor(name: string) {
        this.name = name
    }

    public toString(): string {
        return `Madame ${this.name}`;
    }
}

const male: Male = new Male('Frederic');
const female: Female = new Female('Frederique');

console.log(male.toString());
console.log(female.toString());

const maleToStr: () => string = male.toString;
console.log(maleToStr());

function doNothisng1(): void {

}

function doNothinh2(): void {
    return;
}

function doNodoNothinh3(): undefined {
    return;
}
// これはだめ　returnのない関数はvoid
// function doNodoNothinh4(): undefined {
// }