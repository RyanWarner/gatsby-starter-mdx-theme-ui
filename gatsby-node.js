const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = (args) => {
  const { node, actions, getNode } = args
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
