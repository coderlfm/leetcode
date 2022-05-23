export {};

/**
思路，用一个变量来维护最小值，每次push和pop的时候更新最小值
官解：用一个模拟栈来维护每次push后的最小值，只需要每次push 的时候把最小值push进去就ok，获取min的时候从模拟栈中获取最后一位元素

 */
{
  class MinStack {
    stack: number[];
    minNumber: number;

    constructor() {
      this.stack = [];
    }

    push(x: number): void {
      this.stack.push(x);
      if (x < this.minNumber) this.minNumber = x; // 如果新插入个更小，则需要更新min
      if (this.minNumber === null || this.minNumber === undefined) this.setMin(); // 初始化
    }

    pop(): void {
      if (this.stack.length) {
        if (this.stack.pop() === this.minNumber) this.setMin();
      }
    }

    top(): number {
      if (this.stack.length) return this.stack[this.stack.length - 1];
      return -1;
    }

    min(): number {
      return this.minNumber;
    }

    setMin() {
      this.minNumber = Math.min(...this.stack);
    }
  }
}

// 官解思路
{
  class MinStack {
    stack: number[];
    minStack: number[];

    constructor() {
      this.stack = [];
      this.minStack = [];
    }

    push(x: number): void {
      this.stack.push(x);

      if (this.minStack.length) this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x));
      else this.minStack.push(x);
    }

    pop(): void {
      this.stack.pop();
      this.minStack.pop();
    }

    top(): number {
      if (this.stack.length) return this.stack[this.stack.length - 1];
      return -1;
    }

    min(): number {
      if (this.minStack.length) return this.minStack[this.minStack.length - 1];
      return -1;
    }
  }
}
