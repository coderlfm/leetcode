export {};

class CQueue {
  stack_in: number[];
  stack_out: number[];

  constructor() {
      this.stack_in = [];
      this.stack_out = [];
  }

  appendTail(value: number): void {
      this.stack_in.push(value);
  }

  deleteHead(): number {
      if (this.stack_out.length || this.stack_in.length) {
          if (this.stack_out.length) return this.stack_out.pop();
          while (this.stack_in.length) {
              this.stack_out.push(this.stack_in.pop());
          }
          return this.deleteHead();
      }

      return -1;

  }
}