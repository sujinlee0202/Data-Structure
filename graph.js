class Graph {
  matrix = [];
  vertices = [];

  insertVertex(name) {
    this.vertices.push(new Vertex(name));
    this.matrix.push([]);
  }

  #searchVertex(name) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].name === name) {
        return i;
      }
    }

    return null;
  }

  insertArc(from, to, value, capacity) {
    const fromVertex = this.#searchVertex(from);
    const toVertex = this.#searchVertex(to);

    if (fromVertex === null || toVertex === null) {
      throw "찾는 VERTEX가 없습니다.";
    }
    this.matrix[fromVertex][toVertex] = new Arc(value, capacity);
  }
}

class Vertex {
  constructor(name) {
    this.name = name;
  }
}

class Arc {
  constructor(value, capacity) {
    this.value = value;
    this.capacity = capacity;
  }
}

const g = new Graph();

g.insertVertex("a");
g.insertVertex("b");
g.insertVertex("c");

g.insertArc("a", "b", 3);
g.insertArc("a", "c", 2);
g.insertArc("b", "c", 1);
g.insertArc("c", "a", 4);

g;
