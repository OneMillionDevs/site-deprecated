import { Site } from "templates"
import { FormJoinCoalition } from "core/actions"

export default props => (
  <Site>

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

    <Atom.Container>
      <BecomeAGuide />
      <CommunityDevelopment />
    </Atom.Container>


  </Site>
)

const CardLarge = props => {
  return (
    <Atom.Flex card p={0} minHeight={300} my={4}>
      <Atom.Flex flex={2}>
        <A.Flex
          center
          column
          gradient="blueDark"
          flex={1}
          minHeight={150}
          py={3}
        >
          <A.BackgroundImage src={props.imageCover} opacity={0.2} />
          <Atom.Flex
            mb={3}
            circle
            column
            center
            card
            boxShadow={1}
            overflow="hidden"
            p={4}
          >
            <Atom.Span>
              <A.Image maxWidth={80} src={props.image} />
            </Atom.Span>
          </Atom.Flex>
        </A.Flex>
      </Atom.Flex>
      <Atom.Flex alignCenter flex={5}>
        <Atom.Box p={3}>
          <Atom.Heading xl heavy>
            {props.title}
          </Atom.Heading>
          <Atom.Heading md thin>
            {props.tagline}
          </Atom.Heading>
          <Atom.Paragraph sm>{props.summary}</Atom.Paragraph>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  )
}

const Feature = props => {
  return (
    <A.Flex card center column textCenter p={2}>
      <Atom.Flex
        mb={3}
        mt={-40}
        circle
        card
        overflow="hidden"
        height={80}
        width={80}
      >
        <A.BackgroundImage
          src={
            props.image ||
            "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          }
        />
      </Atom.Flex>
      <A.Heading md heavy>
        {props.title}
      </A.Heading>
      <A.Heading sm thin>
        {props.tagline}
      </A.Heading>
      {/* <A.Heading md thin >{props.tagline}</A.Heading> */}
      {/* <A.HorizontalRule dash center my={3} /> */}
      <A.Paragraph sm px={3}>
        {props.content}
      </A.Paragraph>
    </A.Flex>
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
