import { BinarySearchTree } from "./binarySearchTree.js";
import { Queue } from "./queue.js";
import { Stack } from "./stack.js";

console.log("# bfs");

function fncBfs(tree) {
  const queue = new Queue();

  // 1. tree의 root를 enqueue
  queue.enqueue(tree.root);

  // 2. queue에 요소가 없을 때까지 반복
  while (queue.length > 0) {
    // 3. 먼저 들어온 값을 dequeue한다.
    const node = queue.dequeue();
    console.log(node.value);

    // 4. dequeue한 value의 자식을 enqueue한다.
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

fncBfs(bst);

console.log("# dfs");

// preorder
function fncDfs(tree) {
  const stack = new Stack();

  // 1. tree의 root를 push한다.
  stack.push(tree.root);

  // 2. stack에 요소가 없을 때까지 반복
  while (stack.length > 0) {
    // 3. 가장 위에 있는 값을 pop한다.
    const node = stack.pop();
    console.log(node.value);

    // 4. pop한 value의 자식들을 push한다.
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

fncDfs(bst);

console.log("# preorder");

// preorder
function preOrder(node) {
  if (!node) return;

  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

preOrder(bst.root);

console.log("# inorder");

// inorder
function inOrder(node) {
  if (!node) return;

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

inOrder(bst.root);

console.log("# postorder");

// postorder
function postOrder(node) {
  if (!node) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

postOrder(bst.root);
