export class Stack {
  arr = [];

  push(value) {
    this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  // stack에서 가장 위의 데이터
  top() {
    return this.arr.at(-1); // this.arr[this.arr.length-1]
  }

  get length() {
    return this.arr.length;
  }
}

// const stack = new Stack();

// stack.push(1);
// stack.push(3);
// stack.push(5);
// stack.push(2);
// stack.push(4);

// console.log(stack.length); // 5 출력
// console.log(stack.top()); // 4 출력

// stack.pop();

// console.log(stack.top()); // 2 출력
