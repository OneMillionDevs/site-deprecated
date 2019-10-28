import { Site } from "templates"
import { FormJoinCoalition } from "core/actions"

export default props => (
  <Site>
    <A.Box>
      <A.Box fullWidth color="white" gradient="blueOcean" py={6} textCenter>
        <A.BackgroundImage
          opacity={0.3}
          ratio={0.3}
          src="https://images.ui8.net/uploads/preview_6_1569070974155.png"
        />
        <A.Heading giga heavy>
          RAPID Adventures
        </A.Heading>
        <A.Heading lg>
          Coming Soon
        </A.Heading>
      </A.Box>
    </A.Box>

    <A.Container>
    <A.Heading xxl center mt={5}>The Ethereum Gamification Portal</A.Heading>
    <A.Heading center>And Ethereum Growth Tool</A.Heading>
      <A.Flex alignCenter p={4}>
        <A.Flex flex={2}>
          <A.Box width='150%' ml='-45%'>
            <A.Image
              boxShadow='sunset'
              maxWidth={600} borderRadius='0 70px 70px 0' p={1}
              src={'https://i.imgur.com/9gtMCVU.png'} />
          </A.Box>
        </A.Flex>
        <A.Box flex={3} p={5}>
          <A.Heading xxl>Decentralized Developer Profiles</A.Heading>
          <A.Heading lg>Building the Ethereum Community</A.Heading>

          <A.Paragraph>
            Share your projects. Show off your actions. Build your reputation. Connect with friends.
          </A.Paragraph>

          <A.Paragraph>
            Discover what Ethereum truly has to offer.
          </A.Paragraph>

          <A.Paragraph>
            Join the Ethereum community in a central hub for Ethereum developers, where your digital identity is self-sovereign, your data is your own, and the rewards you earn are provably scarce and unique!
          </A.Paragraph>
        </A.Box>

      </A.Flex>
    </A.Container>


    <A.Container>
      <A.Flex alignCenter p={4}>
        <A.Box flex={3} p={5}>
          <A.Heading xxl>Interactive Quests & Adventures</A.Heading>
          <A.Heading lg>Discover your ‘ah-ha’ moment</A.Heading>

          <A.Paragraph>
            A common thread amongst Ethereum ecosystem participants seems to be their experience of a revelation - an 'ah-ha' moment when they finally grasped the potential of Ethereum and dropped everything to participate in the Web3 movement.
          </A.Paragraph>

          <A.Paragraph>
            Find your Ethereum 'ah-ha' moment by completing interactive Adventures and Quests which introduce you to amazing tools and concepts around our equally amazing ecosystem.
          </A.Paragraph>

          <A.Paragraph>
            And earn rewards for doing so! We’ve built functionality which allows you to automatically be rewarded for completing specific on-chain actions.
          </A.Paragraph>
        </A.Box>

        <A.Flex flex={2}>
          <A.Box width='150%' mr='-50%'>
            <A.Image
              boxShadow='sunset'
              maxWidth={600} borderRadius='100px 0 0 100px' p={1}
              src={'https://i.imgur.com/vaTcwti.png'} />
          </A.Box>
        </A.Flex>

      </A.Flex>
    </A.Container>

    <A.Container>
      <A.Flex alignCenter p={4}>
        <A.Flex flex={2}>
          <A.Box width='150%' ml='-45%'>
            <A.Image
              boxShadow='sunset'
              maxWidth={600} borderRadius='0 70px 70px 0' p={1}
              src='https://i.imgur.com/Xx9tjc4.png' />
          </A.Box>
        </A.Flex>
        <A.Box flex={3} p={5}>
          <A.Heading xxl>Community-Curated Adventures</A.Heading>
          <A.Heading lg>Share your ‘ah-ha’ moment</A.Heading>

          <A.Paragraph>
            Have you had an ‘ah-ha’ Ethereum moment yourself? Create your own Adventures and Quests to introduce others to that moment, or to introduce others to the platforms, tools, or projects you’ve been working on or obsessed with.
          </A.Paragraph>

          <A.Paragraph>
            Using our extensible 3box-enabled platform, easily curate an interactive, immersive, and rewarding experience for users to guide them through an experience you believe is valuable.
          </A.Paragraph>

        </A.Box>

      </A.Flex>
    </A.Container>
  </Site>
)
