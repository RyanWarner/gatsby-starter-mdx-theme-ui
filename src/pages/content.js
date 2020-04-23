import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  console.log('data', data)
  const { edges } = data.allMdx

  return (
    <>
      <h1>Content</h1>
      <ul>
        {edges.map(item => (
          <li>{item.node.frontmatter.title}</li>
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
        }
      }
    }
  }
`
