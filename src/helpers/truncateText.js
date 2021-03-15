import * as R from 'ramda'

export const truncateText = R.curry((text, truncateAt, truncate) => {
  if (truncate) {
    return R.pipe(
      R.splitAt(truncateAt),
      R.head,
      (t) => t.substr(0, t.lastIndexOf(' ')),
      (t) => t.concat('...')
    )(text)
  } else {
    return text
  }
})
