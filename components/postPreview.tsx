import React, { FC } from 'react'
import Link from 'next/link'
import { Pane, Heading, Text, Button, Card, majorScale } from 'evergreen-ui'

const PostPreview: FC<{ post: { title: string; summary: string; slug: string } }> = ({ post }) => {
  return (
    <Card border padding={majorScale(2)}>
      <Heading size={800} marginBottom={8}>
        {post.title}
      </Heading>
      <Text size={500} marginBottom={24} display="block">
        {post.summary}
      </Text>
      <div>
        <Link href={`/blog/${post.slug}`}>
          <a>
            <Button appearance="primary">Read</Button>
          </a>
        </Link>
      </div>
    </Card>
  )
}
export default PostPreview
