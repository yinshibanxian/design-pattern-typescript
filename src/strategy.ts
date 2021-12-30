// 抽象算法类
abstract class Strategy {
    public abstract AlgorithmInterface(): void;
}

// 具体算法A
class ConcreteStrategyA extends Strategy {
    public AlgorithmInterface() {
        console.log('算法A实现');
    }
}

// 具体算法B
class ConcreteStrategyB extends Strategy {
    public AlgorithmInterface() {
        console.log('算法B实现');
    }
}

// 具体算法C
class ConcreteStrategyC extends Strategy {
    public AlgorithmInterface() {
        console.log('算法C实现');
    }
}

// Context,用一个ConcreteStrategy来配置，维护一个对Strategy对象的引用
class Context {
    private strategy: Strategy = null as unknown as Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public ContextInterface() {
        this.strategy.AlgorithmInterface();
    }
}

/**
 * 由于实例化不同的策略，所以在最终调用 context.ContextInterface();时，所获得的结果就不尽相同
 */
let context: Context;

context = new Context(new ConcreteStrategyA());
context.ContextInterface();

context = new Context(new ConcreteStrategyB());
context.ContextInterface();

context = new Context(new ConcreteStrategyC());
context.ContextInterface();


