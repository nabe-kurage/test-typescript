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