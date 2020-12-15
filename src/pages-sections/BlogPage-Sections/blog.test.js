import { getBlogData } from './blogPostCard'
import { assert } from 'chai'

test('getBlogData', async () => {
  const blogData = await getBlogData(
    'src/pages-sections/BlogPage-Sections/blogTestFiles/'
  )
  assert.lengthOf(blogData, 2, 'Found two files in blogTestFiles')
})
