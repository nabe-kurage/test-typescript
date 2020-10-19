function returnUndefined(): undefined {
    return undefined;
}

function returnVoid(): void {
}

const u1: undefined = returnUndefined();
const u2: void = returnUndefined();

// これはだめ　void型の変数をundefined型の変数に入れることはできない
// cont v1: undefined = returnVoid();
const v2: void = returnUndefined();

function doNothsing2(arg: void): any {
};
function doNothsing3(arg: any): any {
};

//voidは引数なくてもよい
doNothsing2();
// anyは引数は必要
// doNothsing3();
