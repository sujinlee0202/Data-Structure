class Heap {
  arr = [];

  // 부모랑 비교하는 알고리즘
  #reheapUp(index) {
    // 부모가 아닐 때 계속 비교
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      // 부모가 작을 때
      if (this.arr[index] > this.arr[parentIndex]) {
        // 값 바꾸기
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;

        this.#reheapUp(parentIndex); // 재귀
      }
    }
  }

  insert(value) {
    const index = this.arr.length;
    this.arr[index] = value; // 배열의 가장 마지막에 데이터 입력

    // 부모랑 비교하는 알고리즘
    this.#reheapUp(index);
  }

  #reheapDown(index) {
    const leftIndex = index * 2 + 1;

    if (leftIndex < this.arr.length) {
      const rightIndex = index * 2 + 2;
      const bigger =
        this.arr[leftIndex] > this.arr[rightIndex] ? leftIndex : rightIndex;

      // 자식이 있을 경우에만 수행
      if (this.arr[index] < this.arr[bigger]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[bigger];
        this.arr[bigger] = temp;

        this.#reheapDown(bigger);
      }
    }
  }

  remove() {
    if (this.arr.length === 0) return false;
    if (this.arr.length === 1) return this.arr.pop();

    // root만 remove
    const root = this.arr[0];
    // 배열의 root를 pop한 뒤 자식들과 비교해 교체 (더 큰 자식과 교환)
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);

    return root;
  }

  search(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === value) {
        return i;
      }
    }

    return null;
  }

  // heap 정렬 : heap에서 root를 계속 삭제하면 정렬된다.
  sort() {
    const sortedArray = [];
    while (this.arr.length > 0) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  }

  update(value, newValue) {
    const index = this.search(value); // 특정 값 찿기
    if (index === null) return false; // 못찾은 경우

    // 찾은 경우
    this.arr[index] = newValue;
    // 값을 찾았지만 heap이 깨진 경우를 대비해 heapify 실행
    // leaf가 아닌 첫번째 노드부터 시작해 root까지 가서 heapify 실행
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify();
    }
  }

  // 루트가 아닌 특정 값 삭제
  remove(value) {
    const index = this.search(value); // 특정 값 찿기
    if (index === null) return false; // 못찾은 경우

    // 찾은 경우 => 해당 값 삭제
    this.arr.splice(index, 1);
    // 값을 삭제했을 때 heap이 깨진 경우를 대비해 heapify 실행
    // leaf가 아닌 첫번째 노드부터 시작해 root까지 가서 heapify 실행
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify();
    }
  }

  #heapify() {
    // 특정 값(더 큰 값) 찾아서 자리 바꿔주기
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const bigger =
      (this.arr[leftIndex] || 0) > (this.arr[rightIndex] || 0)
        ? leftIndex
        : rightIndex;

    if (this.arr[index] < this.arr[bigger]) {
      const temp = this.arr[index];
      this.arr[index] = this.arr[bigger];
      this.arr[bigger] = temp;
    }
  }
}

const heap = new Heap();

heap.insert(8);
heap.insert(19);
heap.insert(23);
heap.insert(32);
heap.insert(45);
heap.insert(56);
heap.insert(78);

console.log(heap.sort());

// TODO : 최소 힙 만들기
class Heap2 {
  arr = [];
  #reheapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.arr[index] < this.arr[parentIndex]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;

        this.#reheapUp(parentIndex);
      }
    }
  }

  insert(value) {
    const index = this.arr.length;
    this.arr[index] = value;

    this.#reheapUp(index);
  }

  #reheapDown(index) {
    const leftIndex = index * 2 + 1;

    if (leftIndex < this.arr.length) {
      const rightIndex = index * 2 + 2;
      const smaller =
        this.arr[leftIndex] < this.arr[rightIndex] ? leftIndex : rightIndex;

      // 자식이 있을 경우에만 수행
      if (this.arr[index] > this.arr[smaller]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[smaller];
        this.arr[smaller] = temp;

        this.#reheapDown(smaller);
      }
    }
  }

  remove() {
    if (this.arr.length === 0) return false;
    if (this.arr.length === 1) return this.arr.pop();

    // root만 remove
    const root = this.arr[0];
    // 배열의 root를 pop한 뒤 자식들과 비교해 교체 (더 큰 자식과 교환)
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);

    return root;
  }

  sort() {
    const sortedArray = [];
    while (this.arr.length > 0) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  }
}

const heap2 = new Heap2();

heap2.insert(78);
heap2.insert(56);
heap2.insert(45);
heap2.insert(32);
heap2.insert(23);
heap2.insert(19);
heap2.insert(8);

console.log(heap2.sort());
