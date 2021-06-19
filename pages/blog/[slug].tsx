import React, { FC } from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import { majorScale, Pane, Heading, Spinner } from 'evergreen-ui'
import path from 'path'
import fs from 'fs'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Post } from '../../types'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  const content = hydrate(source)
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    )
  }

  return (
    <Pane>
      <Head>
        <title>{`Andrey's Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginY={majorScale(3)}>
            {frontMatter.title}
          </Heading>
          <Pane>{content}</Pane>
        </Container>
      </main>
    </Pane>
  )
}

// notifies nextjs of all the dynamic paths that need to be built at build time
export async function getStaticPaths() {
  const postsPath = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsPath)
  const paths = filenames.map((name) => ({ params: { slug: name.replace('.mdx', '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params, preview }) {
  let postFile
  const postPath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`)
  postFile = fs.readFileSync(postPath, 'utf-8')

  if (!postFile) {
    throw new Error('no post')
  }

  const { content, data } = matter(postFile)
  const mdxSource = await renderToString(content, { scope: data })

  return { props: { source: mdxSource, frontMatter: data }, revalidate: 30 }
}

export default BlogPost
