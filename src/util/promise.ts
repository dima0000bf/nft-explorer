export type Unpromise<T> = T extends PromiseLike<infer V> ? V : never

export type UnpromiseFunc<T> = T extends (...args: any[]) => Promise<any>
  ? Unpromise<ReturnType<T>>
  : never
