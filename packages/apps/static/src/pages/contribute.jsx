import { Site } from "templates"
import FormBecomeGuide from "../components/core/actions/FormBecomeGuide"

export default props => (
  <Site>
    <Atom.Box gradient="gray">
      <A.Box>
        <A.Box fullWidth color="white" gradient="blueOcean" py={6} textCenter>
          <A.BackgroundImage
            opacity={0.3}
            ratio={0.5}
            src="https://cdn.dribbble.com/users/1314508/screenshots/6437101/cryptocurrency_hero_landing_page_illustration_4x.jpg"
          />
          <A.Heading xxl heavy>
            Join the Etheruem Developer Community
          </A.Heading>
          <A.Heading lg thin>
            Invite Developers - Become a Mentor - Kickstart a Community
          </A.Heading>
        </A.Box>
      </A.Box>

      <Atom.Container maxWidth={980}>
        <Atom.Flex alignCenter card between mt={-50} p={4} mt={-50}>
          <Atom.Box>
            <Atom.Heading>Are You a Ethereum Contributor?</Atom.Heading>
            <Atom.Paragraph xs mb={0}>
              Share your project with the community. Help guide new developers.
            </Atom.Paragraph>
          </Atom.Box>
          <Atom.Button variant="green">Submit Project</Atom.Button>
        </Atom.Flex>
      </Atom.Container>

      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Invite Developers
              </A.Heading>
              <A.Heading lg thin>
                Tell Other Developers About Ethereum
              </A.Heading>
              <A.Paragraph>
                Have friends that are interested in Ethereum, but haven't yet
                had their "holy shit" moment? Have friends that have had their
                "holy shit" moment and want to become more active members in the
                community? Refer them to OneMillionDevs.com and earn special
                rewards as they contribute to the ecosystem.
              </A.Paragraph>
              <A.Modal content={<ReferAFriend />}>
                <A.Button>Refer a Friend</A.Button>
              </A.Modal>
            </A.Box>
          </A.Flex>

          <Atom.Flex center column flex={2}>
            <Atom.Image
              circle
              card
              src="https://images.ui8.net/uploads/exchange_cryptocurrency_2_1526963073323.jpg"
            />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3} order={2}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Become a Mentor
              </A.Heading>
              <A.Heading md>Teach Others About Ethereum</A.Heading>
              <A.Paragraph>
                Enjoy acting as a mentor, teaching others, or publishing
                educational content? Get rewarded for doing so! Become an
                official Ethereum Mentor by subscribing yourself to produce
                educational content, and earn special rewards and reputation for
                your efforts.
              </A.Paragraph>
              <A.Button>Refer a Friend</A.Button>
            </A.Box>
          </A.Flex>

          <Atom.Flex center card column flex={2}>
            <FormBecomeGuide />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

      <Atom.Container py={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3} order={1}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Kickstart a Community
              </A.Heading>
              <A.Heading md>
                Get Support Growing the Etheruem Community
              </A.Heading>
              <A.Paragraph>
                Are you a developer with an idea for a new and creative way to
                onboard new developers to the ecosystem? Are you an active
                Ethereum user and/or community member with ideas for ways to
                introduce other community members to cool products, features,
                theories, or technologies? Kickstart a community by building
                your own platform, or by leveraging the tools built by others
                (i.e. EthQuest) - and have your community featured here.
              </A.Paragraph>
            </A.Box>
          </A.Flex>

          <Atom.Flex card center column flex={2} order={2}>
            <FormBecomeGuide />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

    </Atom.Box>
    

  </Site>
)


const ReferAFriend = props => { 
 return(
  <A.Box card>
    <Atom.Heading lg heavy>The Growing Etheruem Community</Atom.Heading>
    <Atom.Paragraph sm>
      Proin placerat, nibh vel porta fermentum, justo felis elementum odio, sed porttitor purus massa eu eros. Nam mollis lorem eget pretium interdum. Fusce consequat, lacus nec imperdiet posuere, ligula tortor vulputate felis, quis sodales arcu nibh vel nibh. Curabitur sit amet metus eleifend.
    </Atom.Paragraph>
  </A.Box>
)}

const GuideRegistration = props => {
  return (
    <Atom.Flex card center column flex={1}>
      <Atom.Heading lg heavy>
        Ethereum Community Guide
      </Atom.Heading>
      <Atom.Heading sm normal>
        Help Etheruem Reach it's Full Potential
      </Atom.Heading>
      <Atom.HorizontalRule dash center />
      <Atom.Flex flex={2} p={3} width="100%">
        <Atom.Flex flex={1}>
          <FormBecomeGuide />
        </Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box card p={1} display="inline-block">
            <Atom.Image
              src="https://imgur.com/bXAJm7B.png"
              maxWidth={180}
              display="inline-block"
            />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  )
}


const BecomeAGuide = props => {
  return (
    <Atom.Container maxWidth={1080} my={5}>
      <Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box p={4}>
            <Atom.Image
              card
              p={1}
              boxShadow={4}
              src="https://i.imgur.com/9hqmKMZ.png"
              maxWidth={320}
            />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex column card between p={4} my={4} flex={1}>
          <Atom.Box>
            <Atom.Heading lg heavy>
              Become A Guide
            </Atom.Heading>
            <Atom.Paragraph>
              Invite new people to ecosystem, regularily publish content or help
              maintain an Open Source project. As you contribute more and more
              to the community, you will earn Kudos and other "stunning" flair
              for your developer profile.
            </Atom.Paragraph>

            <Atom.Heading>Earn DEV Tokens. Get rewarded. </Atom.Heading>
            <Atom.Paragraph>
              Earn DEV tokens. Collect kudos. Become a star in the Ethereum
              developer ecosystem.
            </Atom.Paragraph>
            <Atom.Flex my={3}>
              <Atom.Span p={3} mx={2}>
                <Atom.Image
                  maxWidth={50}
                  src="https://gitcoin.co/dynamic/kudos/1921/the_alchemist"
                />
              </Atom.Span>
              <Atom.Span p={3} mx={2}>
                <Atom.Image
                  maxWidth={50}
                  src="https://gitcoin.co/dynamic/kudos/430/resilience"
                />
              </Atom.Span>
              <Atom.Span p={3} mx={2}>
                <Atom.Image
                  maxWidth={50}
                  src="https://gitcoin.co/dynamic/kudos/388/ipfs"
                />
              </Atom.Span>
            </Atom.Flex>
            <Atom.Flex>
              <Atom.Modal content={<GuideRegistration />}>
                <Atom.Button variant="primary">Guide Program</Atom.Button>
              </Atom.Modal>
              <Atom.Button variant="green" ml={3}>
                View Kudos
              </Atom.Button>
            </Atom.Flex>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const CommunityDevelopment = props => {
  return (
    <Atom.Container maxWidth={1080} my={5}>
      <Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box p={4}>
            <Atom.Image
              card
              p={1}
              boxShadow={4}
              src="https://imgur.com/bXAJm7B.png"
              maxWidth={320}
            />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex column card between p={4} my={4} flex={1}>
          <Atom.Box>
            <Atom.Heading kg heavy>
              Community Growth Managers
            </Atom.Heading>
            <Atom.Paragraph>
              Connect the dots. Organize the people. And help shape the
              foundation for Ethereum to blossom.{" "}
              <strong>People are the heart of a project.</strong> It's essential
              we teach new developers best practices. Get users familiar with
              best practices
            </Atom.Paragraph>

            <Atom.Heading>Experience the Roots of ETH</Atom.Heading>
            <Atom.Paragraph>
              Help others stay connected with meetups, local hackthons, event
              sponsors, coding parties, and other interesting events happening
              in your area.{" "}
              <strong>
                The world is a big place and there is lots to do, so we need as
                much help as possible!
              </strong>
            </Atom.Paragraph>
            <Atom.Modal content={<GuideRegistration />}>
              <Atom.Button variant="green">
                Download Community Guide Kit
              </Atom.Button>
            </Atom.Modal>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}
