import { Site } from "templates"

export default props => (
  <Site>
    <A.Box>
      <A.Box fullWidth color="white" gradient="blueOcean" py={7} textCenter>
        <A.BackgroundImage
          opacity={0.3}
          ratio={0.5}
          src="https://cdn.dribbble.com/users/1314508/screenshots/6437101/cryptocurrency_hero_landing_page_illustration_4x.jpg"
        />
        <A.Heading xl heavy>
          Contribute to 1 Million Ethereum Developers
        </A.Heading>
        <A.Heading md>
          Invite Developers - Become a Guide - Launch a Community
        </A.Heading>
        <A.Heading md>Join the Fellowship</A.Heading>
      </A.Box>
    </A.Box>

    <A.Flex flex={1} mt={6}>
      <A.Flex center column flex={1} py={50} minHeight="600px">
        <A.Box px={100}>
          <A.Heading xl heavy>
            Invite Developers
          </A.Heading>
          <A.Heading md>Refer your friends and earn special rewards</A.Heading>
          <A.Paragraph>
            Have friends that are interested in Ethereum, but haven't yet had
            their "holy shit" moment? Have friends that have had their "holy
            shit" moment and want to become more active members in the
            community? Refer them to OneMillionDevs.com and earn special rewards
            as they contribute to the ecosystem!
          </A.Paragraph>
        </A.Box>
      </A.Flex>

      <A.Flex
        boxShadow="insetLeftHeavy"
        gradient="blue"
        borderRadius="40px 0 0 40px"
        flex={1}
        py={50}
      ></A.Flex>
    </A.Flex>

    <A.Flex flex={1} mt={6}>
      <A.Flex center column order={2} flex={1} py={50} minHeight="600px">
        <A.Box px={100}>
          <A.Heading xl heavy>
            Become a Guide
          </A.Heading>
          <A.Heading md>Teach Others About Ethereum</A.Heading>
          <A.Paragraph>
            Enjoy acting as a mentor, teaching others, or publishing educational
            content? Get rewarded for doing so! Become an official Ethereum
            Guide by subscribing yourself to produce educational content on a
            periodic basis, and earn special rewards and reputation for your
            efforts!
          </A.Paragraph>
        </A.Box>
      </A.Flex>

      <A.Flex
        boxShadow="insetLeftHeavy"
        gradient="blue"
        borderRadius="0 40px 40px 0"
        flex={1}
        py={50}
      ></A.Flex>
    </A.Flex>

    <A.Flex flex={1} my={6}>
      <A.Flex center column flex={1} py={50} minHeight="600px">
        <A.Box px={100}>
          <A.Heading xl heavy>
            Launch a Community
          </A.Heading>
          <A.Heading md>Get Support Growing an Etheruem Community</A.Heading>
          <A.Paragraph>
            We hope to expand the Ethereum developer family - and to bring that
            family closer together - by providing an interactive and immersive
            space for newbies and veterans alike, to learn, collaborate, share,
            and buidl in a fun and easy manner.
          </A.Paragraph>
        </A.Box>
      </A.Flex>

      <A.Flex
        boxShadow="insetLeftHeavy"
        gradient="blue"
        borderRadius="40px 0 0 40px"
        flex={1}
        py={50}
      ></A.Flex>
    </A.Flex>

    <A.Flex flex={1} mt={6}>
      <A.Flex center column order={2} flex={1} py={50} minHeight="600px">
        <A.Box px={100}>
          <A.Heading xl heavy>
            Join the Fellowship
          </A.Heading>
          <A.Heading md>Become a OneMillionDevelopers Steward</A.Heading>
          <A.Paragraph>
            REALLY excited about this initiative and want to get hands-on with
            its persistence and evolution? Become a OneMillionDevelopers
            Steward! Help us shape the future of the 1MD initiative, in whatever
            role you prefer - developer, advisor, editor, philanthropist, etc. -
            you name it, we need it!
          </A.Paragraph>
        </A.Box>
      </A.Flex>

      <A.Flex
        boxShadow="insetLeftHeavy"
        gradient="blue"
        borderRadius="0 40px 40px 0"
        flex={1}
        py={50}
      ></A.Flex>
    </A.Flex>
  </Site>
)
