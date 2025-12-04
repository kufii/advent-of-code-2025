export const range = (start: number, end: number) => {
  const arr = []
  for (let n = start; n <= end; n++) {
    arr.push(n)
  }
  return arr
}

export const mod = (n: number, m: number) => ((n % m) + m) % m

export const sum = (a: number, b: number) => a + b

export const isEven = (n: number) => mod(n, 2) === 0

export const output2dArray = (grid: any[][]) =>
  grid.map((line) => line.join('')).join('\n')

export const setIntervalFast = (fn: () => any, interval: number) => {
  fn()
  return setInterval(fn, interval)
}
