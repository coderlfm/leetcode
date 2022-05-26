export {};
// 将 空格 替换成 %20

// 方式一，正则
{
  function replaceSpace(s: string): string {
    return s.replace(/ /g, '%20');
  }
}

// 方式二，用一个数组存放每一个字符串
{
  function replaceSpace(s: string): string {
    let size = 0,
      ans = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        ans[size++] = '%';
        ans[size++] = '2';
        ans[size++] = '0';
      } else {
        ans[size++] = s[i];
      }
    }
    return ans.join();
  }
}
