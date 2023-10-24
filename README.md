### 개요

제로초 자료구조 강의를 듣고 공부한 내용 작성

### 1. 연결 리스트

```
linked-list.js
```

- 데이터 요소들을 순서대로 저장
- 각 요소에는 다음 요소의 위치에 대한 힌트도 포함되어있다.
- 삽입, 수정, 삭제, 조회 등을 수행할 때 최악의 경우 마지막 요소를 고려해야 하므로 O(n)의 시간 복잡도를 갖는다.

1. 삽입 add() 구현하기

   - 연결 리스트 각 요소를 나타내는 Node 클래스 구현
   - Node 클래스에는 값과 다음 노드를 포함한다.
     ```
     class Node {
       next = null;
       constructor(value) {
         this.value = value;
       }
     }
     ```
   - 연결 리스트에 값이 있을 경우, 없을 경우를 처리해준다.
   - 값을 추가하려면 마지막 노드를 찾아야 하는데 마지막 노드는 다음값이 null인 노드이다. 따라서 다음값이 null일 경우까지 반복해 마지막 값을 찾아 해당 부분에 노드를 추가한다.
     ```
     let current = this.head;
     // 다음 값이 없을 때까지 반복
     while (current.next) {
       current = current.next;
     }
     current.next = new Node(value);
     ```

2. 검색 search() 구현하기

   - 검색 위치(index)까지 넘긴 횟수(count)만큼 반복문을 통해 다음 node를 찾는다.

     ```
     search(index) {
       let count = 0;
       let current = this.head;

       while (count < index) {
         current = current?.next;
         count++;
       }

       return current?.value;
     }
     ```

   - ex. index : 3 일 때,
     1. 0 < 3 -> current = current.next -> ll 의 1번 값 : 2
     2. 1 < 3 -> current = current.next -> ll 의 2번 값 : 3
     3. 2 < 3 -> current = current.next -> ll 의 3번 값 : 4
     4. 3 < 3 -> X => 4 출력

3. 삭제 remove() 구현하기
   - search를 활용해 구현 (remove또한 search와 같이 찾아야 할 대상(삭제할 대상)까지 순차적으로 접근해야 하기 때문)
   - 삭제한 노드의 이전 노드(prev)에 있는 다음을 가리키는 next를 삭제한 노드의 다음 노드(current.next)로 교체해야 한다.
     ```
     while(count < index) {
       prev = current;
       current = current?.next;
       count++
     }
     prev.next = current.next
     ```
   - remove 구현 시 고려할 점 (예외처리)
     1. add에서 첫 데이터를 넣었을 때 예외처리를 해주었듯이 remove에도 첫 데이터 삭제 시 예외처리를 해주어야 한다. (prev가 undefined이기 때문)
     2. 존재하지 않는 index 삭제 시에도 예외처리가 필요하다.
        ```
        if (prev && current) {
          prev.next = current.next;
          this.length--;
          return this.length;
        } else if (current) {
          // 예외사항 1. 첫 데이터 삭제 시 prev가 undefined일 경우
          this.head = current.next;
          this.length--;
          return this.length;
        } else {
          // 예외사항 2. 삭제하고자 하는 대상이 없을 때
          return undefined;
        }
        ```

### 2. 스택

```
stack.js
```

- LIFO (후입선출) : 나중에 들어온 것이 먼저 나간다
- 스택 오버플로우 ?
  - 스택에는 보통 용량(크기)가 정해져 있는데 이보다 더 데이터를 넣을 경우 발생하는 현상
  - 무한 재귀 현상 등이 발생했을 경우 목격할 수 있다. 함수가 stack에 쌓이게 되는데 함수 내부에서 다른 함수를 호출할 경우 함수가 위에 쌓이게 된다. 이렇게 함수가 무한히 쌓이다가 stack의 용량보다 많아지게 되면 에러가 발생한다.
- 시간복잡도 : O(1)
- JavaScript 배열의 push, pop 으로 구현 가능

### 3. 큐

```
queue.js
```

- FIFO (선입선출) : 먼저 들어온 것이 먼저 나간다 (ex. 대기열)
- 시간복잡도 : O(1)
- JavaScript 배열의 push, shift 로 구현 가능 (push -> enqueue, shift -> dequeue)
