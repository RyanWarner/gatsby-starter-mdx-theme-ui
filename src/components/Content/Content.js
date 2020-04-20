import React from 'react'

export default ({ data }) => {
  const { edges } = data.allMdx
  console.log('data', data)

  return (
    <div>
      <h1>Content</h1>
      {edges.map(item => <div>{item.node.frontmatter.title}</div>)}
    </div>
  )
}
