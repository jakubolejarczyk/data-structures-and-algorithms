const addNodeButton = document.getElementById("add-node-button");
const showNodesButton = document.getElementById("show-nodes-button");
const nodes = document.getElementById("nodes");

let i = 0;

addNodeButton.addEventListener("click", async () => {
  await fetch("https://localhost:7197/api/LinkedList/" + i, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      console.log(body);
      i++;
    });
});

showNodesButton.addEventListener("click", async () => {
  await fetch("https://localhost:7197/api/LinkedList")
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      console.log(body);
    });
});

// ----

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
    nodes.innerText = output;
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
