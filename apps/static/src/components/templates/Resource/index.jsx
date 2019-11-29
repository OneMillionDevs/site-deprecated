import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
/* --- Local --- */
import { RegionTop, RegionFooter } from 'core'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <A.Flex between column flex={1} minHeight='100vh'>
        <RegionTop bg='#1e1e2d' color='white' borderBottom='3px solid #dc448d' p={2} />
        {
          mdx.frontmatter.imageShowcase &&
          <A.Flex center column gradient='blueDark' py={6} textCenter>
            <A.BackgroundImage ratio={.5} opacity={.1} src={mdx.frontmatter.imageShowcase} />
            <Atom.Box>
              <Atom.Box card p={5}>
                <A.Heading xxl heavy>{mdx.frontmatter.title}</A.Heading>
                <A.Heading md>{mdx.frontmatter.tagline}</A.Heading>
                <a target="_blank" href={mdx.frontmatter.url}>
                  <A.Span xs mt={4} tag='blue'>Go to Resource</A.Span>
                </a>
              </Atom.Box>
  
            </Atom.Box>
            <A.Link to='/resources'>
              <A.Span xs mt={4} tag='white'>Back to Resources</A.Span>
            </A.Link>
          </A.Flex>
        }
        <A.Box as='main' flex={1} py={3}>
            <Atom.Flex center>
              <A.Image card mt={-80} maxWidth={650} mb={5} src={mdx.frontmatter.image} />
            </Atom.Flex>
          <A.Container maxWidth={1020}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </A.Container>
        </A.Box>
        <RegionFooter  bg='#1e1e2d' color='white' borderTop='3px solid #dc448d' py={5}/>
      </A.Flex>
    </>
  )
}

export const pageQuery = graphql`
  query ResourcePostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tagline
        image
        imageShowcase
        url
      }
    }
  }
`