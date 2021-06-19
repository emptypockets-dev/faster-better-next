import React from 'react'
import { Pane, majorScale, GridIcon } from 'evergreen-ui'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import orderby from 'lodash.orderby'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import PostPreview from '../../components/postPreview'

const Blog = ({ posts }) => {
  return (
    <Pane>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: majorScale(4), marginTop: '100px' }}
        >
          {posts.map((post) => (
            <Pane key={post.title}>
              <PostPreview post={post} />
            </Pane>
          ))}
        </Container>
      </main>
    </Pane>
  )
}

Blog.defaultProps = {
  posts: [],
}

/**
 * Need to get the posts from the
 * fs and our CMS
 */

// at the bottom
// export async function getStaticPaths() {
//   const postsPath = path.join(process.cwd(), 'posts')
//   const filenames = fs.readdirSync(postsPath)
//   const paths = filenames.map((name) => ({ params: { slug: name.replace('.mdx', '') } }))
//   // don't get paths for cms posts, instead, let fallback handle it
//   return { paths, fallback: false }
// }

export async function getStaticProps(ctx) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)
  // check that preview boolean
  const filePosts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    return fs.readFileSync(filePath, 'utf8')
  })

  const posts = orderby(
    [...filePosts].map((content) => {
      const { data } = matter(content)
      return data
    }),
    ['publishedOn'],
    ['desc'],
  )

  return { props: { posts } }
}

export default Blog
