class Hashtable {
  data = [];

  constructor(capa) {
    this.capa = capa;
  }

  // capa가 제한된 경우
  insert(key, value) {
    const hash = funcHash(key, this.capa); // key를 hash로 변경
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push({ key, value });
  }

  search(key) {
    const hash = funcHash(key, this.capa);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          return this.data[hash][i].value;
        }
      }
    }
    return null;
  }

  update(key, value) {
    const hash = funcHash(key, this.capa);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          this.data[hash][i].value = value;
        }
      }
    }
  }

  delete(key) {
    const hash = funcHash(key, this.capa);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          this.data[hash].splice(i, 1);
        }
      }
    }
  }

  // capa가 제한되지 않았을 경우
  #insert(key, value) {
    this.data[key] = value;
  }
  #search(key) {
    return this.data[key] || null;
  }
  #update(key, value) {
    this.data[key] = value;
  }
  #delete(key) {
    this.data[key] = undefined;
  }
}

// hash function : key의 분포를 따라 적절하게 만들어야 한다.
function funcHash(key, mod) {
  // key가 문자인 경우
  if (typeof key === "string") {
    return key.split("").reduce((a, c) => a + c.charCodeAt(), 0) % mod;
  }

  // key가 숫자인 경우
  if (typeof key === "number") {
    return key % mod;
  }
}

const ht = new Hashtable(30);

ht.insert(31, "hello");
ht.insert(61, "bye");
ht.insert(83, true);
ht.insert(115, 335);
console.log(ht.search(61));
console.log(ht.search(99));
ht.update(83, false);
ht.delete(31);
ht;
