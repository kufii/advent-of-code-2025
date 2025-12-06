export const range = (start: number, end: number) => {
  const arr = []
  for (let n = start; n <= end; n++) {
    arr.push(n)
  }
  return arr
}

export const mod = (n: number, m: number) => ((n % m) + m) % m

export const sum = (a: number, b: number) => a + b

export const product = (a: number, b: number) => a * b

export const isEven = (n: number) => n % 2 === 0

export const output2dArray = (grid: any[][]) =>
  grid.map((line) => line.join('')).join('\n')

export const setIntervalFast = (fn: () => any, interval: number) => {
  fn()
  return setInterval(fn, interval)
}

export const alphaSort = (a: string, b: string) => a.localeCompare(b)

export const alphaSortDesc = (a: string, b: string) => b.localeCompare(a)

export const sortStr = (str: string) => [...str].sort(alphaSort).join('')

export const sortNum = (a: number, b: number) => a - b

export const sortNumDesc = (a: number, b: number) => b - a

export const sortBy =
  <T>(
    ...cbs: (
      | ((item: T) => string | number)
      | { desc: boolean; cb: (item: T) => string | number }
    )[]
  ) =>
  (a: T, b: T) => {
    for (const cb of cbs) {
      const [fn, desc] = cb instanceof Function ? [cb, false] : [cb.cb, cb.desc]
      const aa = fn(a)
      const bb = fn(b)
      const isNumber = typeof aa === 'number' && typeof bb === 'number'
      const diff = desc
        ? isNumber
          ? sortNumDesc(aa, bb)
          : alphaSortDesc(aa.toString(), bb.toString())
        : isNumber
          ? sortNum(aa, bb)
          : alphaSort(aa.toString(), bb.toString())
      if (diff !== 0) return diff
    }
    return 0
  }

export const desc = <T>(cb: (item: T) => string | number) => ({
  desc: true,
  cb,
})
