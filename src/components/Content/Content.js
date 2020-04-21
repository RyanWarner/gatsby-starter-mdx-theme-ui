import React from 'react'
import { Link } from 'gatsby'

export default ({ data }) => {
  const { edges } = data.allMdx

  return (
    <div>
      <h1>Content</h1>
      {edges.map(item => (
        <div>
          <Link to={item.node.fields.slug}>{item.node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
  )
}
