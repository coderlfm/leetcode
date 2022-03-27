class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
  }

  // 插入一个节点
  append(val) {
    const linkNode = new LinkNode(val);

    // 如果有头节点，则需要遍历找到尾节点，然后将新节点插入
    if (this.head) {
      let p = this.head;
      while (p.next) {
        p = p.next;
      }
      p.next = linkNode;

      // 如果头节点为空，则表示头节点为空，则将这个新节点设置为头节点
    } else {
      this.head = linkNode;
    }
  }

  // 打印
  toString() {
    let p = this.head;
    let str = '';

    do {
      str += p.val + '->';
      p = p.next;
    } while (p.next);
    str += p.val;

    return str;
  }
}

const linkList = new LinkNodeList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);

console.log(linkList.toString());
