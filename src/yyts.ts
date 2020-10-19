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

// Type predicate 戻り値がtrueの時の型を指定できる
// function isDuck(animal: Animal): animal is Duck {
//     ...
// }

const newArray = ["foge", undefined, "huga", "foga", undefined, "fuge"].filter(e => e);
console.log(newArray);
const newArray2 = ["foge", undefined, "huga", "foga", undefined, "fuge"].filter((e): e is string => Boolean(e));
console.log(newArray2);

class Operator {
    protected value: number;

    public constructor(value: number) {
        this.value = value;
    }

    public sum(value: number): Operator {
        this.value += value;
        return this;
    }

  public subtract(value: number): Operator {
    this.value -= value;
    return this;
  }

  public multiply(value: number): Operator {
    this.value *= value;
    return this;
  }

  public devide(value: number): Operator {
    this.value /= value;
    return this;
  }
}

const op: Operator = new Operator(0);
//戻り値をOperatorにしたのでめチェインが可能に
console.log(op.sum(5).subtract(3).multiply(6).devide(3));

// thisを戻り値に設定すると他のメソッドと組み合わせが可能に
class Operator2 {
    protected value: number;

    public constructor(value: number) {
        this.value = value;
    }

    public sum(value: number): this {
        this.value += value;
        return this;
    }

  public subtract(value: number): this {
    this.value -= value;
    return this;
  }

  public multiply(value: number): this {
    this.value *= value;
    return this;
  }

  public devide(value: number): this {
    this.value /= value;
    return this;
  }
}

class NewOperator extends Operator2 {
    public constructor(value: number) {
        super(value);
    }

    public power(value: number): this {
        this.value **= value;
        return this;
    }
}
const op2: NewOperator = new NewOperator(2);
console.log(op2.power(3).multiply(2).power(3));
