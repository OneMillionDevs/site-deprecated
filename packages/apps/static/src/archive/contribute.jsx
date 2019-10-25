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
          Invite Developers - Become a Mentor - Kickstart a Community
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
            as they contribute to the ecosystem.
          </A.Paragraph>
          <A.Button>Refer a Friend</A.Button>
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
            Become a Mentor
          </A.Heading>
          <A.Heading md>Teach Others About Ethereum</A.Heading>
          <A.Paragraph>
            Enjoy acting as a mentor, teaching others, or publishing educational
            content? Get rewarded for doing so! Become an official Ethereum
            Mentor by subscribing yourself to produce educational content, and
            earn special rewards and reputation for your efforts.
          </A.Paragraph>
          <A.Link to="/mentor">
            <A.Button>Become a Mentor</A.Button>
          </A.Link>
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
            Kickstart a Community
          </A.Heading>
          <A.Heading md>Get Support Growing the Etheruem Community</A.Heading>
          <A.Paragraph>
            Are you a developer with an idea for a new and creative way to
            onboard new developers to the ecosystem? Are you an active Ethereum
            user and/or community member with ideas for ways to introduce other
            community members to cool products, features, theories, or
            technologies? Kickstart a community by building your own platform,
            or by leveraging the tools built by others (i.e. EthQuest) - and
            have your community featured here.
          </A.Paragraph>
          <A.Button>Learn More</A.Button>
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
            Extremely passionate about this initiative and want to get hands-on
            with its persistence and evolution? Become a OneMillionDevelopers
            Steward! Help us shape the future of the 1MD initiative, in whatever
            role you prefer - developer, advisor, editor, philanthropist, etc. -
            you name it, we need it!
          </A.Paragraph>
          <A.Button>Become a Steward</A.Button>
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
