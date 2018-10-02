const LinkedList = require('./linked_list');

class Cache {
  constructor(max) {
    this.map = {};
    this.store = new LinkedList();
    this.max = max;
  }


  count() {
    this.map.length;
  }

  updateNode(node) {
    node.remove();
    this.store.append(node.value);
  }

  get(key) {
    if (this.map.key) {
      const node = this.map.key;
      this.updateNode(key);
      return this.map.key.value;
    } else {
      console.log('Not in Cache, need to set(key, value) with key with value');
    }
  }

  set(key, value) {
    this.store.append(value);
    this.map.key = this.store.last;
    return value;
  }

  eject() {
    const node = this.store.first;
    node.remove();
    delete this.map.node.key;
  }

}