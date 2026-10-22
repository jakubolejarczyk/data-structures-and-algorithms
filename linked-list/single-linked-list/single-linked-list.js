const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    alert('Hello');
});

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    head = null;

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

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    find(value) {
        let tmpNode = this.head;
        while (tmpNode !== null) {
            if (tmpNode.value === value) {
                return tmpNode;
            }
            tmpNode = tmpNode.next;
        }
        return null;
    }

    remove(value) {
        if (this.head === null) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let tmpNode = this.head;
        while (tmpNode.next !== null) {
            if (tmpNode.next.value === value) {
                tmpNode.next = tmpNode.next.next;
                return;
            }
            tmpNode = tmpNode.next;
        }
    }

    print() {
        let tmpNode = this.head;
        let output = "";
        while (tmpNode !== null) {
            output += `${tmpNode.value} -> `;
            tmpNode = tmpNode.next;
        }
        output += "null";
        console.log(output);
    }

    toArray() {
        const array = [];
        let tmpNode = this.head;
        while (tmpNode !== null) {
            array.push(tmpNode.value);
            tmpNode = tmpNode.next;
        }
        return array;
    }

    get(index) {
        let tmpNode = this.head;
        let currentIndex = 0;
        while (tmpNode !== null) {
            if (currentIndex === index) {
                return tmpNode;
            }
            tmpNode = tmpNode.next;
            currentIndex++;
        }
        return null;
    }

    insertAt(value) {}

    removeAt() {}

    getLength() {
        let tmpNode = this.head;
        let length = 0;
        while (tmpNode !== null) {
            length++;
            tmpNode = tmpNode.next;
        }
        return length;
    }

    isEmpty() {
        return this.head === null;
    }

    clear() {
        this.head = null;
    }
}

const linkedList = new SingleLinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(1);
linkedList.prepend(2);
linkedList.prepend(3);

linkedList.print();

console.log('Find by value 20', linkedList.find(20));
console.log('Find by value 40', linkedList.find(40));

const array = linkedList.toArray();
console.log(array);

linkedList.remove(3);
linkedList.print();

linkedList.remove(30);
linkedList.print();

linkedList.remove(20);
linkedList.print();

linkedList.remove(1);
linkedList.print();

console.log("Length", linkedList.getLength());

console.log("Node by index 1", linkedList.get(1));

console.log("Is empty", linkedList.isEmpty());

linkedList.clear();

console.log("Is empty", linkedList.isEmpty());