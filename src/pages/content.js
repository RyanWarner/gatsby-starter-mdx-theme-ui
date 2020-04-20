import { graphql } from 'gatsby'

import Content from '../components/Content/Content'

export const pageQuery = graphql`
  query ContentIndex {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/content/**"}}
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
export default Content
