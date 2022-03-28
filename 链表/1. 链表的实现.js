// interface LinkedListType {
//   head: Node | null;
//   length: number;
//   append: (newNode: Node) => void;
// }
var LinkedListType = /** @class */ (function () {
    function LinkedListType() {
    }
    return LinkedListType;
}());
var LinkNode = /** @class */ (function () {
    function LinkNode(val) {
        this.val = val;
        this.next = null;
    }
    return LinkNode;
}());
var LinkNodeList = /** @class */ (function () {
    function LinkNodeList() {
        this.head = null;
        this.length = 0;
    }
    // 插入一个节点
    LinkNodeList.prototype.append = function (newNode) {
        // 如果有头节点，则需要遍历找到尾节点，然后将新节点插入
        if (this.head) {
            var p = this.head;
            while (p.next) {
                p = p.next;
            }
            p.next = newNode;
            // 如果头节点为空，则表示头节点为空，则将这个新节点设置为头节点
        }
        else {
            this.head = newNode;
        }
        this.length++;
    };
    LinkNodeList.prototype.insert = function (index, newNode) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return true;
        }
        var current = this.head;
        var i = 0;
        while (i++ < index) {
            current = current.next;
        }
        var next = current.next;
        newNode.next = next;
        current.next = newNode;
        this.length++;
        return true;
    };
    // 打印
    LinkNodeList.prototype.toString = function () {
        if (!this.head)
            return '';
        var p = this.head;
        var str = '';
        do {
            str += p.val + '->';
            p = p.next;
        } while (p.next);
        str += p.val;
        return str;
    };
    return LinkNodeList;
}());
var linkList = new LinkNodeList();
linkList.append(new LinkNode('aaa'));
linkList.append(new LinkNode('bbb'));
linkList.append(new LinkNode('ccc'));
linkList.append(new LinkNode('ddd'));
linkList.insert(3, new LinkNode('newVal'));
console.log(linkList.toString());
