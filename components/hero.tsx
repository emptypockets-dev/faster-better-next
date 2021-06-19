import React, { FC } from 'react'
import { Pane, Heading, Paragraph, majorScale } from 'evergreen-ui'

const Hero: FC<{ content: { title: string; body: string } }> = ({ content }) => {
  return (
    <Pane width="100%" display="flex" alignItems="center" paddingTop={majorScale(18)} paddingBottom={majorScale(10)}>
      <Pane>
        <Heading fontSize="clamp(4rem, 8vw, 10rem)" lineHeight="clamp(6rem, 8vw, 10rem)" marginBottom={majorScale(4)}>
          {content.title}
        </Heading>
        <Paragraph fontSize="clamp(1.2rem, 4vw, 1.5rem)" lineHeight="clamp(1.2rem, 4vw, 2.2rem)">
          {content.body}
        </Paragraph>
      </Pane>
    </Pane>
  )
}

export default Hero
