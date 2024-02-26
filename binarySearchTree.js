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

  #search(node, value) {
    if (node.value > value) {
      // 루트 노드보다 작은 값 찾을 경우
      if (!node.left) return null;

      if (node.left.value === value) {
        // 찾는 값일경우 return
        return node.left;
      } else {
        // 찾는 값이 아닐경우 다시 서브트리로 이동
        return this.#search(node.left, value);
      }
    } else {
      // 루트 노드보다 큰 값 찾을 경우
      if (!node.right) return null;

      if (node.right.value === value) {
        return node.right;
      } else {
        return this.#search(node.right, value);
      }
    }
  }

  // insert와 마찬가지로 서브트리에 위임하는식으로 구현
  // 찾았을 경우 값 return, 못찾았을 경우 null return
  search(value) {
    // 초기값이 없는 경우
    if (!this.root) return null;

    if (this.root.value === value) {
      // 첫 노드에서 찾을 경우
      return this.root;
    } else {
      // 첫 노드에 없을 경우
      return this.#search(this.root, value);
    }
  }

  #remove(node, value) {
    // 제거할 값이 bst에 존재하지 않는 경우
    if (!node) {
      return false;
    }

    // 지울 값을 찾은 경우
    if (node.value === value) {
      // 자식 입장
      if (!node.left && !node.right) {
        // leaf인 경우
        return null;
      } else if (!node.left) {
        // 왼쪽이 없는 경우
        return node.right;
      } else if (!node.right) {
        // 오른쪽이 없는 경우
        return node.left;
      } else {
        // 양쪽 다 자식이 있는 경우
        let exchange = node.left;
        // 오른쪽이 더이상 나오지 않을 때까지 이동
        while (exchange.right) {
          exchange = exchange.right;
        }

        // 바꾸기
        let temp = node.value;
        node.value = exchange.value;
        exchange.value = temp;

        node.left = this.#remove(node.left, temp);

        return node;
      }
    } else {
      // 부모 입장 (값을 못찾은 경우)
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.#remove(node.right, value);
        return node;
      }
    }
  }

  remove(value) {
    // 1. leaf -> 그냥 제거
    // 2. leaf x, 자식 node가 한쪽에 있는 경우 -> 노드가 끌어올려지게된다.
    // 3. leaf x, 자식 node가 양쪽에 있는 경우 -> 왼쪽에서 가장 큰 수와 바꾼 후 leaf 제거
    const node = this.#remove(this.root, value);
    if (node) {
      this.root = node;
    }
  }
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

console.log(bst.search(10));

bst.remove(8);
console.log(bst.root);

/*

Binary Search Tree 기본 원리 => 나보다 작으면 왼쪽, 크면 오른쪽
- 예를들어, Root Node가 8일 때 8보다 큰 숫자가 들어오면 오른쪽 자식 트리로 보내서 판단
- 전체가 하나의 트리이고 부분도 트리이므로 전체 트리에 대한 알고리즘과 서브 트리에 대한 알고리즘이 동일하다.
  => 재귀 활용 가능

*/
