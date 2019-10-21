import { Site } from "templates"
import { FormUpdates } from "core"

import {
  Heading,
  Flex,
  Box,
  Absolute,
  Span,
  BackgroundImage,
  Loading,
  Image,
  Paragraph,
  Container,
} from "@horizin/design-system"

export default props => (
  <Site>
    <A.Flex gradient="bluePurple" flex={1}>
      <A.BackgroundImage
        backgroundSize="110%"
        opacity={0.46}
        ratio={0.35}
        src="https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg"
      />

    </A.Flex>

    <A.Container py={5}>
      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          What is OneMillionDevs.com?
        </A.Heading>
        <A.Heading as="h4">
          An open-source hub for tools, platforms, and content focused on
          Ethereum ecosystem growth
        </A.Heading>
      </A.Box>
      <A.Flex gutter3 my={3}>
        <Feature
          title="'Holy Shit' Moments"
          tagline="Give Web2 Developers their 'Holy Shit' Ethereum Moments"
          content="We've all had them. Those 'holy shit' moments when you realize the  unbelievable potential of Ethereum. 1MD aims to be a place for discovering, or sharing, these 'Holy Shit' Ethereum moments."
        />
        <Feature
          title="Developer Resources"
          tagline="Community of Resources and Opportunities"
          content="One of Ethereum's distinct advantages over the competition is its treasure trove of developer resources. 1MD aims to supplement Ethereum.org's efforts in coalescing these resources into a manageable state."
        />
        <Feature
          title="Cooperation Catalyst"
          tagline="Get Hired By Top Companies"
          content="The Ethereum community is by far the largest in the blockchain ecosystem. 1MD aims to foster cooperation, and focus attention, to bring that community closer together - and help it buidl faster and better than ever."
        />
      </A.Flex>

    

      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1}>
          <A.Image
            circle
            maxWidth={270}
            src="https://image.flaticon.com/icons/svg/2111/2111425.svg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading xl heavy>
            Open Source Project
          </A.Heading>
          <A.Heading md> A Blank Canvas and an Open End </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            The OneMillionDevs site is meant to be an open-source,
            community-owned tool. Although initially developed by ConsenSys and
            stewarded by both ConsenSys and the Ethereum Foundation, we hope to
            find active and willing community members to carry this platform
            forward into its next stages of evolution.
          </A.Paragraph>
          <A.Paragraph sm>
            Not only is the 1MD site itself open-source, but the tools,
            platforms, and resources included here are meant to be developed by
            the community! We must work together if we want to achieve our goal
            of 1 million developers.
          </A.Paragraph>
          <A.Paragraph sm>
            Do you have a platform, resource, or article you think should be
            featured? That's what we've built this site for - so let us know!
          </A.Paragraph>
          <A.Link to="/">
            <A.Button>Github</A.Button>
          </A.Link>
          <A.Link to="/">
            <A.Button>Contact Us</A.Button>
          </A.Link>
        </A.Flex>
      </A.Flex>
    </A.Container>
    <A.Flex gradient="gray" flex={1}>
      <A.Flex center column flex={3} py={50} minHeight="600px" order={2}>
        <FormUpdates />
      </A.Flex>
    </A.Flex>
  </Site>
)

const Feature = props => {
  return (
    <A.Box card textCenter p={2}>
      <A.Image
        mt={-40}
        circle
        maxWidth={80}
        src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
      />
      <A.Heading md heavy>
        {props.title}
      </A.Heading>
      {/* <A.Heading md thin >{props.tagline}</A.Heading> */}
      {/* <A.HorizontalRule dash center my={3} /> */}
      <A.Paragraph sm px={3}>
        {props.content}
      </A.Paragraph>
    </A.Box>
  )
}
