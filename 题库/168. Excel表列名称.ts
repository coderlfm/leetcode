function convertToTitle(columnNumber: number): string {
  let str = '';
  while (columnNumber !== 0) {
    columnNumber--;
    str = String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt(0)) + str;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return str;
}

console.log(convertToTitle(52));
console.log(convertToTitle(701));
