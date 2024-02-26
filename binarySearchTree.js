class BinarySearchTree {
  root = null;

  #insert(node, value) {
    // TODO : 같은 값을 넣을 경우 Error 처리
    if (node.value === value) {
      throw new Error("중복된 값 삽입!!");
    }

    if (node.value > value) {
      // 루트 노드보다 작은 값인 경우
      if (node.left) {
        // 왼쪽 노드가 있을 때 해당 서브트리에서 처리
        this.#insert(node.left, value);
      } else {
        // 왼쪽 노드가 없을 때 새 노드 생성
        node.left = new Node(value);
      }
    } else {
      // 루트 노드보다 큰 값인 경우
      if (node.right) {
        // 오른쪽 노드가 있을 때 해당 서브트리에서 처리
        this.#insert(node.right, value);
      } else {
        // 오른쪽 노드가 없을 때 새 노드 생성
        node.right = new Node(value);
      }
    }
  }

  insert(value) {
    // 첫 노드일 경우
    if (!this.root) {
      this.root = new Node(value);
    } else {
      // 첫 노드가 아닐 경우
      this.#insert(this.root, value);
    }
  }

  search(value) {}
  remove(value) {}
  // update => search를 활용해서 구현할 수 있다.
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(10);
bst.insert(3);
bst.insert(1);
bst.insert(14);
bst.insert(6);
bst.insert(7);
bst.insert(4);
bst.insert(13);

console.log(bst);

/*

Binary Search Tree 기본 원리 => 나보다 작으면 왼쪽, 크면 오른쪽
- 예를들어, Root Node가 8일 때 8보다 큰 숫자가 들어오면 오른쪽 자식 트리로 보내서 판단
- 전체가 하나의 트리이고 부분도 트리이므로 전체 트리에 대한 알고리즘과 서브 트리에 대한 알고리즘이 동일하다.
  => 재귀 활용 가능

*/
