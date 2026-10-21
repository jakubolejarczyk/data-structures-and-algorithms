class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}

class LinkedList {
    head = undefined;

    append(value) {
        const node = new Node(value);
        if (this.head === undefined) {
            this.head = node;
        } else {
            let tmp = this.head;
            while (tmp.next !== undefined) {
                tmp = tmp.next;
            }
            tmp.next = node;
        }
    }

    log() {
        let tmp = this.head;
        while (tmp !== undefined) {
            console.log(tmp.value);
            tmp = tmp.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
linkedList.log();