class Deque {
  arr = [];

  push(value) {
    this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  shift() {
    return this.arr.shift();
  }

  unshift(value) {
    return this.arr.unshift(value);
  }

  peek() {
    return this.arr.at(0);
  }

  get length() {
    return this.arr.length;
  }
}

const deque = new Deque();

deque.push(1);
deque.push(3);
deque.push(5);
deque.unshift(2);
deque.unshift(4);
// 4, 2, 1, 3, 5
console.log(deque.length); // 5
console.log(deque.peek()); // 4
console.log(deque);
