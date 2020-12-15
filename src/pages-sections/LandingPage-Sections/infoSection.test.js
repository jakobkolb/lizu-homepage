import { truncateText } from './InfoSection'
import { assert } from 'chai'

test('truncateText', () => {
  const CHARS_TRUNCATE = 2
  const text = 'test'
  assert.lengthOf(truncateText(text, CHARS_TRUNCATE, true), CHARS_TRUNCATE)
  assert.lengthOf(truncateText(text, CHARS_TRUNCATE, false), text.length)
})
