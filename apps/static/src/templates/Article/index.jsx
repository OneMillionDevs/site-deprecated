import React from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
/* --- Local --- */
import {RegionTop, RegionFooter} from '@regions';

export default function PageTemplate({data: {mdx}}) {
  return (
    <>
      <Atom.Flex between column flex={1} minHeight="100vh">
        <RegionTop
          bg="#1e1e2d"
          color="white"
          borderBottom="3px solid #dc448d"
          p={2}
        />
        {mdx.frontmatter.imageCover && (
          <Atom.Box color="white" gradient="blueDark" py={6} textCenter>
            <Atom.BackgroundImage
              ratio={0.5}
              opacity={0.3}
              src={mdx.frontmatter.imageCover}
            />
            <Atom.Heading xxl heavy>
              {mdx.frontmatter.title}
            </Atom.Heading>
            <Atom.Heading md>{mdx.frontmatter.tagline}</Atom.Heading>

            <Atom.Link to="/articles">
              <Atom.Span xs mt={4} tag="white">
                Back to Articles
              </Atom.Span>
            </Atom.Link>
          </Atom.Box>
        )}
        <Atom.Box as="main" flex={1} py={3}>
          <Atom.Container maxWidth={1020}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Atom.Container>
        </Atom.Box>
        <RegionFooter
          bg="#1e1e2d"
          color="white"
          borderTop="3px solid #dc448d"
          p={2}
        />
      </Atom.Flex>
    </>
  );
}

export const pageQuery = graphql`
  query ArticlePostQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
