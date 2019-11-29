import {Site} from '@templates';
import {
  Heading,
  Flex,
  Box,
  Span,
  Paragraph,
} from '@horizin/design-system-atoms';

const IndexPage = () => (
  <Site>
    {/* <SEO title="Home" /> */}
    <Flex flex={1}>
      <Flex center column flex={3} py={50} minHeight="600px">
        <Box px={200}>
          <Heading xl heavy>
            <Span md thin>
              OUR MISSION
            </Span>
            <br />
            <Span heavy>1 Million Developers</Span>{' '}
          </Heading>
          <Paragraph mt={3}>
            <strong>
              Around the world, Ethereum developers are ushering in radical
              change one keystroke at a time.
            </strong>
          </Paragraph>

          <Paragraph>
            We hope to expand the Ethereum developer family - and to bring that
            family closer together - by providing an interactive and immersive
            space for newbies and veterans alike, to learn, collaborate, share,
            and buidl in a fun and easy manner.
          </Paragraph>

          {/* <EmailSubmit /> */}
        </Box>
      </Flex>
    </Flex>
  </Site>
);

export default IndexPage;
