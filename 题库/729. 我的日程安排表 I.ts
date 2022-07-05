export {}

class MyCalendar {
  bookList: [number, number][];
  constructor() {
      this.bookList = [];
  }

  // 结束区间大于之前的开始区间，同时开始区间小于之前的结束区间
  book(start: number, end: number): boolean {
      for (let i = 0; i < this.bookList.length; i++) {
          if (this.bookList[i][0] < end && this.bookList[i][1] > start) return false;
      }
      this.bookList.push([start, end]);
      return true;
  }
}
