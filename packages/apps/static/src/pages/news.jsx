import React from "react"
import { Site } from "templates"

import { Link, graphql } from "gatsby"
const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Site>
      <A.Box color="white" gradient="blueDark" py={4} textCenter>
        <A.Flex between px={4}>
          <A.Heading lg heavy>
            News
          </A.Heading>
          <A.Button xs variant="green">
            Add Article
          </A.Button>
        </A.Flex>
      </A.Box>

      <A.Container py={0}>
        <A.Box textCenter py={5}>
          <A.Heading xl heavy>
            In The Media
          </A.Heading>
          <A.Heading as="h4">
            Mentions of the One Million Developers initiative in the media
          </A.Heading>
        </A.Box>
        <A.HorizontalRule />
      </A.Container>

      <A.Container py={0}>
        <A.Box textCenter py={5}>
          <A.Heading xl heavy>
            One Million Developers Blog
          </A.Heading>
          <A.Heading as="h4">
            Articles written by the One Million Developers team
          </A.Heading>
          <A.Heading xxl heavy mt={5}>
            COMING SOON
          </A.Heading>
        </A.Box>
        <A.HorizontalRule />
      </A.Container>

      <A.Container py={0}>
        <A.Box textCenter py={5}>
          <A.Heading xl heavy>
            Other Media
          </A.Heading>
          <A.Heading as="h4">Other pertinent videos and articles</A.Heading>
        </A.Box>
      </A.Container>

      <A.Container maxWidth={780} py={4}>
        {posts
          .filter(({ node: post }) => post.frontmatter.template === "news")
          .map(({ node: post }) => (
            <>
              <A.Flex
                alignEnd
                color="white"
                gradient="blueDark"
                p={3}
                mb={3}
                mt={5}
                minHeight={250}
              >
                <A.BackgroundImage
                  ratio={0.2}
                  src={post.frontmatter.imageCover}
                  opacity={0.3}
                />
                <Link to={post.fields.slug}>
                  <A.Heading as="h2" noMargin xl heavy>
                    {post.frontmatter.title}
                  </A.Heading>
                  <A.Heading as="h5" md>
                    {post.frontmatter.tagline}
                  </A.Heading>
                </Link>
              </A.Flex>
              <A.Box card my={2} key={post.id}>
                <A.Paragraph sm>
                  {post.frontmatter.summary || post.excerpt}
                </A.Paragraph>
                <A.Flex between flex={1} mt={3}>
                  <Link to={post.fields.slug}>
                    <A.Button sm variant="white">
                      Read Coverage
                    </A.Button>
                  </Link>
                </A.Flex>
              </A.Box>
            </>
          ))}
      </A.Container>
    </Site>
  )
}
export const pageQuery = graphql`
  query newsIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            tagline
            template
            summary
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default BlogIndex
