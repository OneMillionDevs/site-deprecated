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

      <A.Flex center column flex={3} py={50} minHeight="600px" order={2}>
        <A.Span sm tag="blue" boxShadow="sunset" mb={3}>
          Guide
        </A.Span>
        <A.Box card boxShadow={7} maxWidth={620} textCenter p={4}>
          <A.Heading xl heavy>
            Become an Ethereum Guide
          </A.Heading>
          <A.Heading md>1 Million Active Developers</A.Heading>
          {/* <A.HorizontalRule dash center /> */}
          <A.Flex center my={4}>
            <A.Span xs tag="green" mx={3}>
              Mentor Newbies
            </A.Span>
            <A.Span xs tag="blue" mx={3}>
              Publish Content
            </A.Span>
            <A.Span xs tag="primary" mx={3}>
              Spread the Word
            </A.Span>
          </A.Flex>
          <A.HorizontalRule dash center my={3} />
          <A.Paragraph sm>
            The amount of knowledge, content, and new developments in the
            Ethereum ecosystem is overwhelming. The community needs Guides to
            help curate digestible distillations of this data.
          </A.Paragraph>
          <A.Paragraph sm>
            Become a <u>Guide</u> today.
          </A.Paragraph>
        </A.Box>
      </A.Flex>
    </A.Flex>

    <A.Container>
      <A.Box textCenter py={5}>
        <A.Heading xl heavy>
          What is is a Guide?
        </A.Heading>
        <A.Heading as="h4">A beacon on knowledge in a sea of data</A.Heading>
      </A.Box>
      <A.Flex gutter3 my={3}>
        <Feature
          title="Mentor Newbies"
          tagline="Give Web2 Developers their 'Holy Shit' Ethereum Moments"
          content="We've all had them. Those 'holy shit' moments when you realize the  unbelievable potential of Ethereum. 1MD aims to be a place for discovering, or sharing, these 'Holy Shit' Ethereum moments."
        />
        <Feature
          title="Publish Content"
          tagline="Community of Resources and Opportunities"
          content="One of Ethereum's distinct advantages over the competition is its treasure trove of developer resources. 1MD aims to supplement Ethereum.org's efforts in coalescing these resources into a manageable state."
        />
        <Feature
          title="Spread the Word"
          tagline="Get Hired By Top Companies"
          content="The Ethereum community is by far the largest in the blockchain ecosystem. 1MD aims to foster cooperation, and focus attention, to bring that community closer together - and help it buidl faster and better than ever."
        />
      </A.Flex>

      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1}>
          <A.Image
            circle
            maxWidth={270}
            src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading xl heavy>
            Lead the Community
          </A.Heading>
          <A.Heading md>
            Helping the Ethereum Community Grow and Connect
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            We are Ethereum - the community. As a platform, Ethereum would not
            exist in its current form if it weren't for the thousands of
            buidlers, developers, visionaries, entrepreneurs, philosophers,
            economists, mathematicians, and leaders (and anyone we left out!)
            who have gotten us to where we are today.
          </A.Paragraph>
          <A.Paragraph sm>
            Every new member of our community is another unique perspective,
            another source of potential talent and tools and ideas, another
            teammate, and another friend. Our goal is to grow and foster this
            community. To attract the best and the brightest. And to make sure
            they stick around.
          </A.Paragraph>
        </A.Flex>
      </A.Flex>

      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1} order={2}>
          <A.Image
            circle
            maxWidth={270}
            src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading xl heavy>
            Earn Rewards
          </A.Heading>
          <A.Heading md>
            Contribute in whatever way best suits your level of involvement and
            skillset
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph sm>
            Are you a developer? A journalist? An economist? No matter your
            background, level of involvement, or skillset, you can contribute to
            Ethereum's growth. 1MD aims to assist you in this process by linking
            you to, and encouraging the development of, the tools necessary to
            kickstart community contribution.
          </A.Paragraph>
          <A.Paragraph sm>
            Whether it is referring friends, publishing content, curating
            experiences, developing platforms, or showing off the work you've
            done, 1MD aims to act as the foundation for fostering a space in
            which contributions are easy, welcomed, recognized, and rewarded.
          </A.Paragraph>
          <A.Link to="/contribute">
            <A.Button>Make An Impact</A.Button>
          </A.Link>
        </A.Flex>
      </A.Flex>

      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1}>
          <A.Image
            circle
            maxWidth={270}
            src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading xl heavy>
            Build Your Reputation
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
        </A.Flex>
      </A.Flex>
    </A.Container>
    <A.Flex gradient="blueDark" flex={1}>
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
