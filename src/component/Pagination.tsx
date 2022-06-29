import { noop } from '@/util/noop'
import isNil from 'lodash/isNil'

const DEFAULT_MAX_PAGES = Number.MAX_SAFE_INTEGER

type PaginationProps = {
  page: number
  maxPages?: number | null
  onChange?: (newNumber: number) => void
}

export const Pagination = ({ page, maxPages = null, onChange = noop }: PaginationProps) => {
  const handleLeft = () => {
    const result = page - 1
    if (result < 0) return

    onChange(result)
  }
  const handleRight = () => {
    const result = page + 1
    if (result > (maxPages ?? DEFAULT_MAX_PAGES)) return

    onChange(result)
  }

  const disableLeft = page <= 0
  const disableRight = page >= (maxPages ?? DEFAULT_MAX_PAGES)
  const maxPagesSpecified = !isNil(maxPages)

  return (
    <div>
      <button disabled={disableLeft} onClick={handleLeft}>
        {'<'}
      </button>
      <span> {maxPagesSpecified ? `${page + 1} / ${maxPages}` : page + 1} </span>
      <button disabled={disableRight} onClick={handleRight}>
        {'>'}
      </button>
    </div>
  )
}
