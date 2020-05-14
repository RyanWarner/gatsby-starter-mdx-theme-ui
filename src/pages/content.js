import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  const { edges } = data.allMdx

  return (
    <>
      <h1>Content</h1>
      <ul>
        {edges.map(item => (
          <Link to={item.node.fields.slug}>
            <li>{item.node.frontmatter.title}</li>
          </Link>
        ))}
      </ul>
    </>
  )
}

export const pageQuery = graphql`
  query ContentIndex {
    allMdx(
      filter: {
        fileAbsolutePath: {glob: "**/content/**"}
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
