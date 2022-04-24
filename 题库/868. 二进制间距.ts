function binaryGap(n: number): number {
  const binary = Number(n).toString(2);
  
  // preIndex: 用一个指针记录前一个 '1' 的索引 stepIndex: 记录中间的间隔位数 
  let preIndex = 0,
    stepIndex = 0; 
  for (let index = 0; index < binary.length; index++) {

    // 遍历到了 '1'
    if (binary[index] === '1') {
      // 计算当前的 '1' 和 上一个 '1' 中间的间隔间距
      const step = index - preIndex;
      preIndex = index; // 更新preIndex 的位置

      // 如果这次的间距超过了之前间距，则将这次的间距设为最大间距
      if (step > stepIndex) stepIndex = step;
    }
  }

  return stepIndex;
}

console.log(binaryGap(8));
