import { Site } from "templates"

export default props =>
<Site>
  <A.Box>
  <A.Box fullWidth color='white' gradient='blueOcean' py={7} textCenter>
    <A.BackgroundImage opacity={.3} ratio={.5} src='https://cdn.dribbble.com/users/1314508/screenshots/6437101/cryptocurrency_hero_landing_page_illustration_4x.jpg' />
    <A.Heading xl heavy>Contribute to 1 Million Ethereum Developers</A.Heading>
    <A.Heading md>Invite Developers - Become a Guide - Launch a Community</A.Heading>
  </A.Box>
  </A.Box>
  
  <A.Flex flex={1} mt={6} >
  <A.Flex center column flex={1} py={50} minHeight='600px' >
    <A.Box px={100}>
      <A.Heading xl heavy>
        Invite Developers
      </A.Heading>
      <A.Heading md>
        Share with Your Friends the benefits of Ethereum
      </A.Heading>
      <A.Paragraph>
        We hope to expand the Ethereum developer family - and to bring that family closer together - by providing an interactive and immersive space for newbies and veterans alike, to learn, collaborate, share, and buidl in a fun and easy manner.
      </A.Paragraph>

    </A.Box>
  </A.Flex>

  <A.Flex boxShadow='insetLeftHeavy' gradient='blue'  borderRadius='40px 0 0 40px' flex={1} py={50}  >

  </A.Flex>
</A.Flex>


<A.Flex flex={1} mt={6} >
  <A.Flex center column order={2} flex={1} py={50} minHeight='600px' >
  <A.Box px={100}>
  <A.Heading xl heavy>
    Become Guide
  </A.Heading>
  <A.Heading md>
    Teach Others About Ethereum
  </A.Heading>
    <A.Paragraph>
      We hope to expand the Ethereum developer family - and to bring that family closer together - by providing an interactive and immersive space for newbies and veterans alike, to learn, collaborate, share, and buidl in a fun and easy manner.
    </A.Paragraph>

  </A.Box>
  </A.Flex>

  <A.Flex boxShadow='insetLeftHeavy' gradient='blue'  borderRadius='0 40px 40px 0' flex={1} py={50}  >

  </A.Flex>
</A.Flex>

<A.Flex flex={1} my={6} >
  <A.Flex center column flex={1} py={50} minHeight='600px' >
  <A.Box px={100}>
  <A.Heading xl heavy>
    Launch a Community
  </A.Heading>
  <A.Heading md>
    Get Support Growing an Etheruem Community
  </A.Heading>
  <A.Paragraph>
    We hope to expand the Ethereum developer family - and to bring that family closer together - by providing an interactive and immersive space for newbies and veterans alike, to learn, collaborate, share, and buidl in a fun and easy manner.
  </A.Paragraph>

  </A.Box>
  </A.Flex>

  <A.Flex boxShadow='insetLeftHeavy' gradient='blue'  borderRadius='40px 0 0 40px' flex={1} py={50}  >

  </A.Flex>
</A.Flex>
</Site>