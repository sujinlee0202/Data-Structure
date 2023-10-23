class LinkedList {
  length = 0; // linked list의 길이
  head = null; // linked list의 제일 앞 부분 head

  // 삽입
  add(value) {
    if (this.head) {
      // head에 값이 있을 때
      let current = this.head; // 현재값

      // 현재의 다음 값이 없을 때까지 반복
      while (current.next) {
        current = current.next;
      }
      // head 다음 값에 새 노드 추가
      current.next = new Node(value);
    } else {
      // 연결 리스트에 처음으로 데이터를 넣는 경우
      this.head = new Node(value); // 헤드에 새 노드 추가
    }
    this.length++;
    return this.length;
  }

  // 삭제
  remove(value) {}

  // 검색
  // 검색 위치(index)까지 넘긴 횟수만큼 반복문을 이용해 다음 node를 찾는다.
  /*
  ex) index : 3 일 때,
  1. 0 < 3 -> current = current.next -> ll 의 1번 값 : 2
  2. 1 < 3 -> current = current.next -> ll 의 2번 값 : 3
  3. 2 < 3 -> current = current.next -> ll 의 3번 값 : 4
  4. 3 < 3 -> X => 4 출력
  */
  search(index) {
    let count = 0; // 검색 위치(index)까지 넘긴 횟수
    let current = this.head; // 현재 위치

    while (count < index) {
      current = current?.next;
      count++;
    }

    return current?.value;
  }
}

// 연결리스트는 각각 요소를 '노드'라고 칭한다.
// 각 노드는 해당 노드의 값과 다음 요소를 저장하고있다.
class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();

ll.length;

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);

console.log("ll add", ll.add(7));

console.log("ll search", ll.search(3)); // 4 출력
console.log("ll search", ll.search(5)); // 6 출력
console.log("ll search", ll.search(7)); // undefined 출력

ll.remove(4);
console.log(ll.search(4)); // 6 출력

ll.remove(4);
console.log(ll.search(4)); // undefined 출력

console.log(ll.remove(4)); // undefined 출력
