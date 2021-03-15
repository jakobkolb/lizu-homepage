import { assert } from 'chai'
import { truncateText } from './truncateText'

test('truncateText', () => {
  const CHARS_TRUNCATE = 2
  const text = 'test'
  assert.lengthOf(
    truncateText(text, CHARS_TRUNCATE, true),
    CHARS_TRUNCATE,
    'Truncate text if when truncate is true'
  )
  assert.equal(
    truncateText(text, CHARS_TRUNCATE, false),
    text,
    'Return entire text if truncate is false'
  )
})
