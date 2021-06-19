import React, { FC } from 'react'
import Link from 'next/link'
import { Pane } from 'evergreen-ui'

const PostPreview: FC<{ post: { title: string; summary: string; slug: string } }> = ({ post }) => {
  return (
    <Pane>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
      <div>
        <Link href={`/blog/${post.slug}`}>
          <a>
            <a>Read</a>
          </a>
        </Link>
      </div>
    </Pane>
  )
}
export default PostPreview
