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
            Join the Etheruem Developer Commuity
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

      <Atom.Container maxWidth={680} my={5}>
        <Atom.Flex column card between my={4}>
          <Atom.Heading lg heavy>
            The Growing Etheruem Community
          </Atom.Heading>
          <Atom.Paragraph sm>
            Proin placerat, nibh vel porta fermentum, justo felis elementum
            odio, sed porttitor purus massa eu eros. Nam mollis lorem eget
            pretium interdum. Fusce consequat, lacus nec imperdiet posuere,
            ligula tortor vulputate felis, quis sodales arcu nibh vel nibh.
            Curabitur sit amet metus eleifend.
          </Atom.Paragraph>
          <Atom.Heading sm heavy>
            Tap into What's Possible
          </Atom.Heading>
          <Atom.Paragraph sm>
            Praesent ut cursus neque. Proin viverra luctus velit nec pharetra.
            Praesent at dui non justo egestas laoreet. Quisque et euismod augue.
            Phasellus luctus, libero et malesuada mollis, mi libero pretium
            nibh, in varius orci enim quis purus. Pellentesque tincidunt eros
            quis est ultricies, et efficitur mauris tempor. Donec mollis rhoncus
            tortor sit amet finibus.
          </Atom.Paragraph>
          <Atom.Heading sm heavy>
            The Growing Etheruem Community
          </Atom.Heading>
          <Atom.Paragraph sm>
            Praesent ut cursus neque. Proin viverra luctus velit nec pharetra.
            Praesent at dui non justo egestas laoreet. Quisque et euismod augue.
            Phasellus luctus, libero et malesuada mollis, mi libero pretium
            nibh, in varius orci enim quis purus. Pellentesque tincidunt eros
            quis est ultricies, et efficitur mauris tempor. Donec mollis rhoncus
            tortor sit amet finibus.
          </Atom.Paragraph>
        </Atom.Flex>
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

      <Atom.Container maxWidth={980} py={4}>
        <Atom.Flex alignCenter card betweenp={5}>
          <Atom.Box pr={5}>
            <Atom.Box my={4}>
              <Atom.Heading>Help Grow the Ethereum Community</Atom.Heading>
              <Atom.Paragraph>
                <em>
                  Donec auctor vehicula turpis. In nulla elit, interdum vel dui
                  at, venenatis fermentum mi. Aenean pretium nulla ac faucibus
                  facilisis. Fusce sit amet felis in turpis pretium congue.
                  Etiam non volutpat nibh, dictum facilisis nulla. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Mauris venenatis nisi nibh, accumsan tempor
                  nibh cursus id.
                </em>
              </Atom.Paragraph>
            </Atom.Box>
            <cite>
              Kames Geraghty - FullStack Javascript Developer @ ConsenSys
            </cite>
          </Atom.Box>
          <Atom.Image
            circle
            card
            p={1}
            maxWidth={200}
            src="https://imgur.com/AQJxQdX.png"
          />
        </Atom.Flex>
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
  return (
    <A.Box card>
      <Atom.Heading lg heavy>
        The Growing Etheruem Community
      </Atom.Heading>
      <Atom.Paragraph sm>
        Proin placerat, nibh vel porta fermentum, justo felis elementum odio,
        sed porttitor purus massa eu eros. Nam mollis lorem eget pretium
        interdum. Fusce consequat, lacus nec imperdiet posuere, ligula tortor
        vulputate felis, quis sodales arcu nibh vel nibh. Curabitur sit amet
        metus eleifend.
      </Atom.Paragraph>
    </A.Box>
  )
}
