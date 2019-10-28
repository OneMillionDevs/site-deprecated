import { Site } from "templates"
import { SEO } from "core"
import { FormUpdates } from "core"
import { Helmet } from "react-helmet"
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

import { QuotesFull } from 'views'


const IndexPage = () => (
  <Site>
    {/* <SEO title="Home" /> */}
    <Flex flex={1}>
      <Flex center column flex={3} py={50} minHeight="600px">
        <Box px={200}>
          <Heading xl heavy>
            <Span md thin>
              OUR MISSION
            </Span>
            <br />
            <Span heavy>1 Million Developers</Span>{" "}
          </Heading>
          <Paragraph mt={3}>
            <strong>
              Around the world, Ethereum developers are ushering in radical
              change one keystroke at a time.
            </strong>
          </Paragraph>

          <Paragraph>
            We hope to expand the Ethereum developer family - and to bring that
            family closer together - by providing an interactive and immersive
            space for newbies and veterans alike, to learn, collaborate, share,
            and buidl in a fun and easy manner.
          </Paragraph>

          {/* <EmailSubmit /> */}
        </Box>
      </Flex>

      <Flex
        boxShadow="insetLeftHeavy"
        gradient="blue"
        borderRadius="0 0 0 40px"
        flex={2}
        py={50}
      >
        <BackgroundImage
          borderRadius="0 0 0 40px"
          opacity={0.86}
          ratio={0.35}
          src="https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg"
        />
        <Flex center column mt={50} ml={-160} p={30}>
          {/* <BoxLoginCardPledge /> */}
        </Flex>
      </Flex>
    </Flex>

    {/* <Atom.Flex
      alignCenter
      between
      color="white"
      gradient="blueDark"
      p={4}
      my={3}
      m={5}
      borderRadius={30}
    >
      <Atom.Heading noMargin>200,230 Active Developers</Atom.Heading>
      <Atom.Button>Sign Pledge</Atom.Button>
    </Atom.Flex> */}
    <A.Box color="white" gradient="blueDark" py={4}>
      <Container mt={5}>
        <Flex center column>
          <Heading xl heavy italic>
            Take Part In <br />
          </Heading>
          <Heading xxl heavy>
            The Next Internet Revolution
          </Heading>
          <Atom.Span fontWeight={300} tag="white" my={3}>
            Web3 - Built with Ethereum Ideas & Technology
          </Atom.Span>
        </Flex>
      </Container>

      <Atom.Container left>
        <MainFeature />
      </Atom.Container>
    </A.Box>

    <Atom.Container left>
      <Atom.Heading lg heavy center mt={4} p={3}>
        Why you, why now, and why Ethereum?
      </Atom.Heading>
      <Atom.Paragraph>
        You already have the skills necessary to be a great asset to the
        “history of the future.” Many of the coding skills you use daily are
        directly transferable to what we do. Web3 merely puts a whole new
        arsenal of developer tools at your disposal.
      </Atom.Paragraph>

      <Atom.Paragraph>
        The best time to plant a tree was 20 years ago, the second best time is
        now. The protocols are aligned, the dev tools are built, and teams are
        ramping up hiring. When we look back on today, you’ll still be able to
        say you planted one of the first trees in the new landscape of Web 3.0.
      </Atom.Paragraph>

      <Atom.Paragraph>
        There are other platforms floating around in the blockchain ecosystem
        competing for your attention; but let’s be real. Ethereum remains the
        gold standard for smart contracts and decentralized apps. With a vast
        and engaged developer community, the largest user base, and the most
        exciting tools and applications at your disposal, Ethereum is the
        logical choice for contributing to the Web 3.0 movement.
      </Atom.Paragraph>
    </Atom.Container>

    <Atom.Box bg="gray" mt={5}>
      <QuotesFull />
    </Atom.Box>

    <A.Box color="white" gradient="blueDark" py={4}>
      <A.Container my={4}>
        <Atom.Box textCenter>
          <Atom.Heading xxl heavy center>
            Discover Your "A-Ha" Moment
          </Atom.Heading>
          <Atom.Paragraph>
            If you’re not sold yet, don’t worry - in the world of Ethereum,
            moving from a state of “intrigued” to “sold” typically takes the
            discovery of an “ah-ha” moment - a moment when things finally click,
            and the user understands why so many people believe an economic and
            digital [r]evolution is taking place. <br />
            In the past, discovering that “ah-ha” moment could take months.
            Maybe years. Luckily, the Ethereum community has since built some
            tools to help.
          </Atom.Paragraph>
          <Atom.Span xxs tag="white">
            Click here to learn <strong>why</strong> and <strong>how</strong> we
            promote community tools.
          </Atom.Span>
        </Atom.Box>

        <Atom.Flex gutter3 my={4} flex={1}>
          <PlatformCard
            title="Gitcoin Quests"
            tagline="Battle the Baddies and Learn about Etheruem"
            summary="Gitcoin Quests is a fun, gamified way to learn about the web3 ecosystem, compete with your friends, earn rewards, and level up your decentralization-fu!"
            imageCover="https://i.imgur.com/cHtxC04.png"
            url="https://gitcoin.co/quests"
          />
          {/* <PlatformCard
            title='3Box Developer Profile'
            tagline='Conquer Decentraland in Style'
            summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
            imageCover='https://i.imgur.com/DpyjcVt.png'
          /> */}
          <PlatformCard
            title="Add Application"
            tagline="Create A New Application to Share"
            summary="This site is meant to be an open, communal hub of resources! Want your platform featured on One Million Devs? Submit a request here!"
            imageCover="https://s3.envato.com/files/f209c8a8-c7fc-49be-a948-6aa185b7fb4b/inline_image_preview.jpg"
            url="/community"
          />
          <PlatformCard
            title="RAPID Adventures"
            tagline="Earn Rewards for Interacting With Ethereum"
            summary="RAPID Adventures provides a gamified way to interact with the Ethereum ecosystem itself. Whether its learning about how to set up a wallet, deploying your first contract, or interacting with some of the amazing dApps that have already been built, RAPID Adventures introduces you to Ethereum in an immersive and rewarding way."
            imageCover="https://i.imgur.com/vaTcwti.png"
            url="/adventures"
          />
        </Atom.Flex>
      </A.Container>
    </A.Box>

    <Container mt={5}>
      <Flex center column>
        <Heading xxl heavy>
          Start Buidling
        </Heading>
        <Atom.Paragraph>
          What are you waiting for? Dive head-first into the action by
          journeying down the path of your choice:
        </Atom.Paragraph>
      </Flex>
    </Container>

    <Atom.Container>
      <A.Flex flex={1} mt={5}>
        <A.Flex column flex={1} mr={5}>
          <A.Heading xxl heavy center>
            Embark On Your Web3 Journey
          </A.Heading>
          <A.Heading md center>
            Learn about Ethereum and how to develop decentralized applications
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            Kickstart your Ethereum developer journey by getting hands on with
            buidling dApps. Leverage easy-to-use educational platforms to build
            a solid foundation, or hop right in by exploring and installing the
            basic tools required to operate effectively in the Ethereum space.
          </A.Paragraph>
          <A.Container align="center">
            <A.Link to="/started">
              <Atom.Button variant="green">Get Started</Atom.Button>
            </A.Link>
          </A.Container>
        </A.Flex>
        <A.Flex center column flex={1}>
          <A.Heading xxl heavy center>
            Contribute
          </A.Heading>
          <A.Heading md center>
            Help the Ethereum community grow and connect
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            Are you already an Ethereum veteran and want to contribute to the
            One Million Developers movement? Whether you’re a developer,
            journalist, economist, or armchair philosopher, no matter your
            background or skillset, you can contribute to Ethereum’s growth by
            supporting the One Million Developers initiative. Whether it is
            referring friends, publishing content, curating experiences,
            developing platforms, or showing off the work you've done, check out
            the “Contribute” page to learn more about the different ways you can
            help the cause.
          </A.Paragraph>
          <A.Link to="/contribute" mb={3}>
            <Atom.Button variant="blue" center>
              Contribute
            </Atom.Button>
          </A.Link>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <A.Flex gradient="gray" flex={1}>
      <A.Flex center column flex={3} py={50} minHeight="600px" order={2}>
        <FormUpdates />
      </A.Flex>
    </A.Flex>
  </Site>
)
const PlatformCard = props => {
  return (
    <Atom.Flex column>
      <A.Flex center column flex={1}>
        <A.Image src={props.imageCover} />
      </A.Flex>
      <Atom.Box bg="white" color="charcoal" p={3}>
        <Atom.Heading md heavy>
          {props.title}
        </Atom.Heading>
        <Atom.Heading sm thin>
          {props.tagline}
        </Atom.Heading>
        <Atom.Paragraph xs>{props.summary}</Atom.Paragraph>
        {
          props.url &&
          <Atom.Flex justifyEnd flex={1}>
            <a href={props.url}>
              <Atom.Button xs>Go</Atom.Button>
            </a>
          </Atom.Flex>

        }
      </Atom.Box>
    </Atom.Flex>
  )
}

const QuestPlaform = props => {
  return (
    <>
      <Container mt={6}>
        <Flex center column>
          <Heading xxl heavy>
            EthQuest Platform
          </Heading>
          <Heading lg thin>
            Publish to the Open Quest Network with any Ethereum Account
          </Heading>
        </Flex>
      </Container>

      <A.Container>
        <A.Flex alignCenter flex={1} minHeight={370}>
          <A.Flex column flex={1} textRight>
            <A.Heading xl>Reach New Developers</A.Heading>
            <A.Heading md thin>
              Teach New Users about Your Smart Contract Application
            </A.Heading>
            <A.Paragraph>
              Do you want an interesting way to teach developers how to
              integrate with your smart contract application? The Open Quest
              Network let's you easily publish new developer adventures in just
              a couple of minutes.
            </A.Paragraph>
            <A.Link to="/features/developer-identity">
              <A.Button>Learn More</A.Button>
            </A.Link>
          </A.Flex>
          <A.Flex center column flex={1} p={5}>
            <A.Image
              card
              borderRadius={30}
              p={1}
              src="https://i.imgur.com/ec6dbqa.png"
            />
          </A.Flex>
        </A.Flex>
      </A.Container>

      <A.Container>
        <A.Flex alignCenter flex={1} minHeight={370}>
          <A.Flex column flex={1} order={2}>
            <A.Heading xl>Grow Your Application</A.Heading>
            <A.Heading md thin>
              Get Developers Started with Best Practices
            </A.Heading>
            <A.Paragraph>
              Teach new developers how to properly interact with your smart
              contracts. An easy step-by-step process exposes developers to the
              right information at the right time.{" "}
              <strong>
                Just add your content. Plugin the smart contract addresses and
                that's it.
              </strong>
            </A.Paragraph>
            <A.Link to="/features/learning-network">
              <A.Button>Learn More</A.Button>
            </A.Link>
          </A.Flex>

          <A.Flex center column flex={1} p={5} order={1}>
            <A.Image
              card
              borderRadius={30}
              p={1}
              src="https://i.imgur.com/1KPhWNe.png"
            />
          </A.Flex>
        </A.Flex>
      </A.Container>

      <A.Container>
        <A.Flex alignCenter flex={1} minHeight={370}>
          <A.Flex column flex={1} textRight>
            <A.Heading xl>Activity & Reputation</A.Heading>
            <A.Heading md thin>
              Showcase Your Development Activity - Get Found and Hired
            </A.Heading>
            <A.Paragraph>
              Earn bragging rights or land your next job the Ethereum blockchain
              space. Let your developer activity feed do the talking. Plus share
              your industry knolwedge and reputation with others.
            </A.Paragraph>
            <A.Link to="/features/learning-network">
              <A.Button>Learn More</A.Button>
            </A.Link>
          </A.Flex>
          <A.Flex center column flex={1} p={5}>
            <A.Image
              card
              borderRadius={30}
              p={1}
              src="https://i.imgur.com/6EIoF56.png"
            />
          </A.Flex>
        </A.Flex>
      </A.Container>
    </>
  )
}

export default IndexPage

const MainFeature = props => {
  return (
    <Atom.Container>
      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1} mr={5}>
          <Atom.Heading lg heavy left>
            What is a Web 2.0 Developer?
          </Atom.Heading>
          <Atom.Paragraph>
            If you're visiting this site, you may be a Web 2.0 Developer! Prior
            to the advent of Web 2.0, the internet was comprised of static
            landing pages, basic tools, and protocols with limited
            functionality. Web 2.0 saw the addition of more interactive content,
            such as web apps, user-generated content, social media networking,
            and cloud storage. Under this domain, people are the product and
            data is the price. Most developers today are fluent in the language
            of Web 2.0.
          </Atom.Paragraph>
        </A.Flex>
        <A.Flex center column flex={1}>
          <Atom.Heading lg heavy>
            What is a Web 3.0 Developer?
          </Atom.Heading>
          <Atom.Paragraph>
            A Web 3.0 developer is a Web 2.0 developer with an arsenal of
            additional tools at his/her disposal. Web 3.0 is an internet where
            devices are connected in decentralized networks rather than
            depending on server-based data. In Web 3.0, you own your own data,
            your own digital identity, and your own digital assets. You are not
            reliant on single servers or institutions to tell you about the
            truth of the world or the current state of the system. In Web 3.0,
            Digital assets can be scarce, have value, and be transferred as
            easily as data.
          </Atom.Paragraph>
        </A.Flex>
      </A.Flex>
      <A.Container align="center">
        <A.Heading xxl>Take the Leap!</A.Heading>
        <Atom.Heading>You already have most of the skills:</Atom.Heading>
          <A.Paragraph>
            The skills you have gained building products in Web 2.0 are directly
            transferable to Web 3.0.{" "}
          </A.Paragraph>
        <Atom.Heading>We’ve already done the hard work for you.</Atom.Heading>
          <A.Paragraph>
            In the first few years of blockchain development, we laid the
            scaffolding to make building on Ethereum easy{" "}
          </A.Paragraph>
      </A.Container>
    </Atom.Container>
    // <Atom.Box>
    //   <Atom.Heading lg heavy left>
    //     What is a Web 2.0 Developer?
    //   </Atom.Heading>
    //   <Atom.Paragraph>
    //     That’s you. The first iteration of the web was basic landing pages,
    //     tools, and protocols with limited functionality. Web 2.0 saw the
    //     addition of more interactive content, such as web apps, social media
    //     networking, and cloud storage. People are the product and data is the
    //     price.
    //   </Atom.Paragraph>
    // <Atom.Heading lg heavy>
    //   What is a Web 3.0 Developer?
    // </Atom.Heading>
    // <Atom.Paragraph>
    //   Web 3.0 is an Internet that can handle data, and rules for changing the
    //   state of that data, in the way that the Internet handles messaging today
    //   — more or less decentralized. an internet where your data is your own,
    //   your identity is self-sovereign, and walled gardens are dissolved. an
    //   internet where value can be exchanged as easily as data, and your assets
    //   are inarguably yours.
    // </Atom.Paragraph>

    // <Atom.Heading>You already have most of the skills:</Atom.Heading>
    // <ul>
    //   <li>
    //     The skills you have gained building products in Web 2.0 are directly
    //     transferable to Web 3.0.{" "}
    //   </li>
    // </ul>
    // <Atom.Heading>We’ve already done the hard work for you.</Atom.Heading>
    // <ul>
    //   <li>
    //     In the first few years of blockchain development, we laid the
    //     scaffolding to make building on Ethereum easy{" "}
    //   </li>
    // </ul>

    //   <Atom.Heading lg heavy>
    //     Why you, why now, and why Ethereum?
    //   </Atom.Heading>
    //   <Atom.Paragraph>
    //     You already have the skills necessary to be a great asset to the
    //     “history of the future.” Many of the coding skills you use daily are
    //     transferable to what we do. You also get to play with a whole new set of
    //     developer tools and write smart contracts (aka programmable money).
    //   </Atom.Paragraph>

    //   <Atom.Paragraph>
    //     There’s an old Chinese proverb that was adapted to the blockchain space:
    //     “The best time to plant a tree was 20 years ago, the second best time is
    //     now.” The protocols are aligned, the dev tools are built, and teams are
    //     ramping up hiring. When we look back on today, you’ll still be able to
    //     say you planted one of the first trees in the landscape.
    //   </Atom.Paragraph>

    //   <Atom.Paragraph>
    //     You understand why Web 3.0 is important, but you might not be sold on
    //     why Ethereum is the right place for you. There are other projects
    //     competing to be “The World Computer,” but Ethereum remains the gold
    //     standard for smart contracts and decentralized apps (dApps). With the
    //     largest developer community, the largest user base, and the most amount
    //     of tools at your disposal, Ethereum is the logical choice for
    //     contributing to the Web3 movement.
    //   </Atom.Paragraph>
    // </Atom.Box>
  )
}
