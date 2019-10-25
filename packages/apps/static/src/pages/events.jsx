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
          Upcoming Events
        </A.Heading>
        <A.Heading lg>Find in-person events near you!</A.Heading>
      </A.Box>
    </A.Box>
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
