interface NodeType {
  val: any;
  next: NodeType | null; // 指向后面的指针
  perv: NodeType | null; // 指向前面的指针
}

abstract class LinkedListType {
  head: NodeType | null; // 头部
  tail: NodeType | null; // 尾部

  length: number;

  append: (newNode: NodeType) => void;

  insert: (index: number, newNode: NodeType) => boolean;

  removeAt: (index: number) => boolean;

  update: (index: number, newNode: NodeType) => boolean;

  get: (index: number) => NodeType | null;

  isEmpty: () => boolean;

  indexOf: (node: NodeType) => number | null;

  remove: (node: NodeType) => boolean;
}

class Node implements NodeType {
  val: string;
  next: NodeType | null;
  perv: NodeType | null;

  constructor(value: string) {
    this.val = value;
  }
}

class LinkedList implements LinkedListType {
  head: NodeType | null;
  tail: NodeType | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get: (index: number) => NodeType | null;
  indexOf: (node: NodeType) => number | null;
  remove: (node: NodeType) => boolean;

  append(newNode: NodeType) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;

      return;
    }

    let current: NodeType | null = this.head;

    while (current.next) {
      current = current.next;
    }

    newNode.perv = current;
    current.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  insert(index: number, newNode: NodeType) {
    if (index < 0 || index > this.length) return false;

    // 向头部插入
    if (index === 0) {
      // 如果头部为空
      if (!this.head) {
        this.append(newNode);
        return true;

        // 如果头部不为空，则更新头部节点
      } else {
        newNode.next = this.head;
        this.head.perv = newNode;
        this.head = newNode;

        this.length++;
        return true;
      }
    }

    let current = this.head,
      i = 0;

    // 找到需要更新的前一个节点
    while (i++ < index - 1) {
      current = current!.next;
    }
    /**
     * 1. 将下一个节点的prev更新为新节点
     * 2. 将新节点的next 更新为下一个节点
     * 3. 将新节点的prev 更新为前一个节点
     * 4. 将前一个节点的next 更新为新节点(完成新节点插入)
     */

    current!.next!.perv = newNode;
    newNode.next = current!.next;
    newNode.perv = current;
    current!.next = newNode;
    this.length++;

    // 如果插入的位置是尾部，则需要更新tail指针
    if (newNode.next === this.tail) this.tail = newNode;

    return true;
  }

  removeAt(index: number) {
    if (index < 0 || index > this.length - 1) return false;

    // 如果删除的是头部
    if (index === 0) {
      this.head = this.head!.next;
      this.head!.perv = null;
      this.length--;
      return true;

      // 如果删除的是尾部
    } else if (index === this.length - 1) {
      this.tail = this.tail!.perv;
      this.tail!.next = null;
      this.length--;
      return true;
    }

    let current = this.head,
      i = 0;

    while (i++ < index - 1) {
      current = current!.next;
    }

    // 跳过中间的节点
    current!.next!.next!.perv = current;
    current!.next = current!.next!.next;

    return true;
  }

  update(index: number, newNode: NodeType) {
    if (index < 0 || index > this.length - 1) return false;

    this.removeAt(index);
    this.insert(index, newNode);

    return true;
  }

  // get(index: number) {}

  isEmpty() {
    return this.length === 0;
  }

  // indexOf(node: NodeType) {}

  // remove(node: NodeType) {}

  // 打印
  toString() {
    if (!this.head) return '';

    let p: NodeType | null = this.head;
    let str = '';

    do {
      str += p!.val + '->';
      p = p!.next;
    } while (p?.next);
    str += p!.val;

    return str;
  }
}

export {};

const linkList = new LinkedList();

linkList.append(new Node('aaa'));
linkList.append(new Node('bbb'));
linkList.append(new Node('ccc'));
linkList.append(new Node('ddd'));

linkList.insert(1, new Node('abc'));

console.log(linkList.length);
console.log(linkList.toString());

linkList.removeAt(1);
linkList.update(0, new Node('uuuu'));

console.log(linkList.toString());
