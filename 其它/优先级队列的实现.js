// 队列中的每个子元素
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  // 入队
  enqueue(element, priority) {
    const newElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      this.items.push(newElement);
    } else {
      const index = this.items.findIndex((item) => priority < item.priority);
      if (index > -1) this.items.splice(index, 0, newElement);
      else this.items.push(newElement);
    }
  }

  // 出队
  dequeue() {
    this.items.shift();
  }

  // 查看最前面的元素
  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    let str = '';

    this.items.forEach((item) => {
      str += `
      val: ${item.element} priority: ${item.priority}`;
    });

    return str;
  }
}

const queue = new Queue();
queue.enqueue('aaa', 10);
queue.enqueue('bbb', 20);
queue.enqueue('ccc', 30);
queue.enqueue('ddd', 40);
queue.enqueue('fff', 14);

// queue.dequeue();

console.log(queue.front());
console.log(queue.size());
console.log(queue.toString());
