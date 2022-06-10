export function pageToOffset(page: number, size: number) {
  return page * size
}

export function countToPagesCount(itemsCount: number, pageSize: number) {
  return Math.ceil(itemsCount / pageSize)
}
