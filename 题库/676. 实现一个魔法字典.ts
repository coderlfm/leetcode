export {};

class MagicDictionary {
  dictionary: string[];
  minLen: number;
  maxLen: number;

  constructor() {}

  buildDict(dictionary: string[]): void {
    this.dictionary = dictionary;
    this.minLen = this.maxLen = 1; // 记录最长长度和最短长度
    dictionary.forEach((item) => {
      if (item.length > this.maxLen) this.maxLen = item.length;
      else if (item.length < this.minLen) this.minLen = item.length;
    });
  }

  search(searchWord: string): boolean {
    if (searchWord.length > this.maxLen || searchWord.length < this.minLen) return false;

    // 遍历字典
    for (let i = 0; i < this.dictionary.length; i++) {
      if (this.dictionary[i].length !== searchWord.length) continue;
     
      let count = 0; // 用来标记是否匹配的个数，每次匹配成功+1
      for (let j = 0; j < searchWord.length; j++) {
        if (searchWord[j] === this.dictionary[i][j]) count++;
      }

      // 只有相差一位则表示成功
      if (count === searchWord.length - 1) return true;
    }

    return false;
  }
}


const res = new MagicDictionary();
res.buildDict(['hello','world'])

res.search('hhllo')