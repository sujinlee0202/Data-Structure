class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
}

class Node {
  children = [];
  constructor(value) {
    this.value = value;
  }

  push(value) {
    // new Node(value)를 push해야 추가하는 노드도 자식 노드를 가질 수 있다.
    this.children.push(new Node(value));
  }
}

const tree = new Tree(50); // root를 50으로 설정
tree.root.push(25);
tree.root.push(75);
tree.root.children[0].push(12);
tree.root.children[0].push(37);
tree.root.children[1].push(62);
tree.root.children[1].push(87);
