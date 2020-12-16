import * as R from 'ramda'

export const truncateText = R.curry((text, truncateAt, truncate) => {
  if (truncate) {
    return R.pipe(R.splitAt(truncateAt), R.head)(text)
  } else {
    return text
  }
})
