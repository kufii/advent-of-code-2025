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
