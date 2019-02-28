class SuffixTrie{
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }


  // Time Complexity is O(n2), nested for loops n(n - 1) => n2
  // space is O(n2) , worst case is repeated string such as 'ttttt'
  populateSuffixTrieFrom(string) {
      // i = 0 builds on first letteter, then next iteration builds on second letter and if there are any overlaps
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    //node = { }
    // if that letter doesnt exist then node['a'] = {}
    // then node is now {a: {}}, we keep going inside to create the object, if it exists then it keys into it, else it creates a new object
    for (let j = i; j < string.length; j ++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }


  //Time complexity is O(m), where m is the length of desired string
  // Space complexity is O(1), no extra space
  contains(string) {
    let node = this.root;
    // if you can't find the letter or any letters after the initial, then it doesnt exist, node is reassign to see any nested letters
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    //to make sure its not a sub string of a suffix, we need to make sure suffix is complete.
    // suffix is different start but still same ending
    return this.endSymbol in node;
  }
}