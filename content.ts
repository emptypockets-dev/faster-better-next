export const home = {
  draft: {
    hero: {
      title: 'Hmm, need something clever here',
      body: 'blah blah blah, our product is the best!',
    },
    features: [
      { title: 'Feature 1', body: 'something dope about feature 1 here soon.' },
      { title: 'Feature 2', body: 'something dope about feature 2 here soon.' },
    ],
  },
  published: {
    hero: {
      title: 'Sharing makes the web better + faster.',
      body: "Happy Saturday! Today's post is about adding Webpack to the Hubspot boilerplate so that you can optimize your javascript, css, and images.",
    },
    features: [
      {
        title: 'Webpack config in Hubspot (32% version)',
        body: 'An up-to-date webpack config that works in Hubspot',
      },
      {
        title: 'Build a smart Thumbnail component in React',
        body: 'Use tags in each post to generate a "garden" thumbnail. Each color represents a different tool, language, or framework.',
      },
    ],
  },
}

export const posts = {
  draft: [
    `---
title: "We're hiring"
summary: 'Will come up with summary later'
slug: 'we-are-hiring'
publsihedOn: ''
---

## nice post, who dis
`,
    `---
title: Why you should write down everything
summary: Will come up with summary later
slug: why-you-should-write-down-everything
publsihedOn: ''
---
## Writing is fun`,
  ],
  published: [
    `---
title: "We're hiring"
summary: Come work at a really nice company.
slug: we-are-hiring
publsihedOn: '12-03-2020'
---
## Come with with us
`,
    `---
title: Why you should write down everything
summary: If you write it down, you won't forget.
slug: why-you-should-write-down-everything
publsihedOn: '3-20-2020'
---
## Elon musk writes`,
  ],
}
