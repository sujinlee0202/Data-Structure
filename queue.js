export class Queue {
  arr = [];

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    // first, 맨 앞에 값
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(3);
// queue.enqueue(5);
// queue.enqueue(2);
// queue.enqueue(4);

// console.log(queue.length); // 5 출력
// console.log(queue.peek()); // 1 출력

// queue.dequeue();

// console.log(queue.peek()); // 3 출력
