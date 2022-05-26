export {};

function reverseLeftWords(s: string, n: number): string {
  return s.slice(n) + s.slice(0, n);
}

// 官解有一种取余的解法