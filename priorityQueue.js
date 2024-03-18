class priorityQueue {
  arr = [];

  #reheapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.arr[index]?.priority > this.arr[parentIndex]?.priority) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;

        this.#reheapUp(parentIndex);
      }
    }
  }

  insert(priority, value) {
    const index = this.arr.length;
    this.arr[index] = {
      priority,
      value,
    };

    this.#reheapUp(index);
  }

  #reheapDown(index) {
    const leftIndex = index * 2 + 1;

    if (leftIndex < this.arr.length) {
      const rightIndex = index * 2 + 2;
      const bigger =
        this.arr[leftIndex].priority > this.arr[rightIndex]?.priority
          ? leftIndex
          : rightIndex;

      if (this.arr[index]?.priority < this.arr[bigger]?.priority) {
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

    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);

    return root;
  }

  search(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].value === value) {
        return i;
      }
    }

    return null;
  }

  sort() {
    const sortedArray = [];
    while (this.arr.length > 0) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  }

  update(value, newValue) {
    const index = this.search(value);
    if (index === null) return false;

    this.arr[index].value = newValue;
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify();
    }
  }

  removeValue(value) {
    const index = this.search(value);
    if (index === null) return false;

    this.arr.splice(index, 1);
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify();
    }
  }

  #heapify() {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const bigger =
      (this.arr[leftIndex]?.priority || 0) >
      (this.arr[rightIndex]?.priority || 0)
        ? leftIndex
        : rightIndex;

    if (this.arr[index].priority < this.arr[bigger].priority) {
      const temp = this.arr[index];
      this.arr[index] = this.arr[bigger];
      this.arr[bigger] = temp;
    }
  }
}

const pq = new priorityQueue();

pq.insert(3, "one");
pq.insert(7, "two");
pq.insert(2, "three");
pq.insert(8, "four");
pq.insert(5, "five");
pq.insert(6, "six");
pq.insert(1000, "king");

console.log(pq.remove()); // king
pq;
