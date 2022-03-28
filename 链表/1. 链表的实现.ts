interface NodeType {
  val: any;
  next: NodeType | null;
}

abstract class LinkedListType {
  head: NodeType | null;
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

class LinkNode implements NodeType {
  val: any;
  next: null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList implements LinkedListType {
  head: NodeType | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 插入一个节点
  append(newNode: NodeType) {
    // 如果有头节点，则需要遍历找到尾节点，然后将新节点插入
    if (this.head) {
      let p = this.head;
      while (p.next) {
        p = p.next;
      }
      p.next = newNode;

      // 如果头节点为空，则表示头节点为空，则将这个新节点设置为头节点
    } else {
      this.head = newNode;
    }

    this.length++;
  }

  // 插入
  insert(index: number, newNode: NodeType) {
    // 越界情况
    if (index < 0 || index > this.length) return false;

    // 向 head 插入
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode; // 将头指向新节点
      this.length++;
      return true;
    }

    let current = this.head!;
    let i = 0;
    // 遍历到指定位置的索引
    // 会少遍历一次，拿到需要操作的前一个节点，然后修改前一个节点的next
    while (i++ < index - 1) {
      current = current.next!;
    }

    // 将新节点插入
    const next = current.next;
    newNode.next = next;
    current.next = newNode;

    this.length++;
    return true;
  }

  removeAt(index: number) {
    // 越界情况
    if (index < 0 || index > this.length - 1) return false;

    // 删除第 0 个
    if (index === 0) {
      this.head = this.head!.next;
      this.length--;
      return true;
    }

    let current = this.head;
    let i = 0;
    // 少遍历一次，拿到需要操作的前一个节点，然后修改前一个节点的next
    while (i++ < index - 1) {
      current = current!.next;
    }

    // 删除指定的元素
    current!.next = current!.next!.next;

    return true;
  }

  // 更新指定位置链表
  update(index: number, newNode: NodeType) {
    if (index < 0 || index >= this.length) return false;
    this.removeAt(index);
    return this.insert(index, newNode);
  }

  // 获取指定位置的索引
  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.head;

    let current = this.head,
      i = 0;

    while (i++ < index) {
      current = current!.next;
    }

    return current;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  indexOf(node: NodeType) {
    let index = 0,
      current = this.head;

    if (current === node) return index;

    while (current) {
      current = current!.next;
      index++;
      if (current === node) return index;
    }

    return current === null ? -1 : index;
  }

  remove(node: NodeType) {
    const index = this.indexOf(node);
    if (index !== -1) return this.removeAt(index);

    return false;
  }

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

const linkList = new LinkNodeList();
linkList.append(new LinkNode('aaa'));
linkList.append(new LinkNode('bbb'));
linkList.append(new LinkNode('ccc'));
linkList.append(new LinkNode('ddd'));

linkList.insert(0, new LinkNode('newVal_head'));
linkList.insert(2, new LinkNode('newVal'));
linkList.removeAt(2);
linkList.update(0, new LinkNode('kkkkkk'));

console.log(linkList.toString());

console.log(linkList.get(2)); // bbb

const newNode = new LinkNode('pppppp');

linkList.insert(0, newNode);
console.log(linkList.toString());

console.log(linkList.indexOf(newNode));

linkList.remove(newNode);
console.log(linkList.toString());
