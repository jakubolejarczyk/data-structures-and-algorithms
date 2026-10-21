class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head = null;

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let tmpNode = this.head;
            while (tmpNode.next !== null) {
                tmpNode = tmpNode.next;
            }
            tmpNode.next = newNode;
        }
    }

    log() {
        let tmpNode = this.head;
        while (tmpNode !== null) {
            console.log(tmpNode.value);
            tmpNode = tmpNode.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.prepend(10);
linkedList.append(2);
linkedList.prepend(20);
linkedList.append(3);
linkedList.prepend(30);
linkedList.log();