abstract class Operation {
    private _numberA = 0;
    private _numberB = 0;

    public setNumberA(num: number) {
        this._numberA = num;
    }

    public getNumberA() {
        return this._numberA;
    }

    public setNumberB(num: number) {
        this._numberB = num;
    }

    public getNumberB() {
        return this._numberB;
    }

    abstract getResult(): number;
}

class AddOperation extends Operation {
    getResult(): number {
        let result = 0;
        result = this.getNumberA() + this.getNumberB();
        return result;
    }
}

class MinusOperation extends Operation {
    getResult(): number {
        let result = 0;
        result = this.getNumberA() - this.getNumberB();
        return result;
    }
}

class MulOperation extends Operation {
    getResult(): number {
        let result = 0;
        result = this.getNumberA() * this.getNumberB();
        return result;
    }
}

class DivOperation extends Operation {
    getResult(): number {
        if (this.getNumberA() === 0) {
            throw new Error('除数不能为0');
        }

        let result = 0;
        result = this.getNumberA() / this.getNumberB();
        return result;
    }
}

/**
 * 简单工厂模式
 * 工厂模式，一句话概括，就是用一个单独的类来做这个创造实例的过程
 */

class OperationFactory {
    static createOperation(operator: string): Operation {
        let oper = null;

        switch(operator) {
            case "+":
                oper = new AddOperation();
                break;
            case "-":
                oper = new MinusOperation();
                break;
            case "*":
                oper = new MulOperation();
                break;
            case "/":
                oper = new DivOperation();
                break;
        }

        return oper;
    }
}

/**
 * 实战
 */
const oper = OperationFactory.createOperation('+');
oper.setNumberA(1);
oper.setNumberB(2);
const result = oper.getResult();
console.log(result, 'result');

