import { Site } from "templates"
import { SEO } from "core"
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

    <Atom.Flex alignCenter between color='white' gradient='blueDark' p={4} my={3} m={5} borderRadius={30}>
      <Atom.Heading noMargin>200,230 Active Developers</Atom.Heading>
      <Atom.Button>Sign Pledge</Atom.Button>
    </Atom.Flex>

    <Container mt={5}>
      <Flex center column>
        <Heading xxl heavy>
          The Next Internet Revolution
        </Heading>
        <Atom.Span fontWeight={300} tag='white' my={3}>Web3 - Built with Ethereum Ideas & Technology</Atom.Span>
      </Flex>
    </Container>

    <Atom.Container maxWidth={780}>
      <MainFeature/>
    </Atom.Container>

    

    <A.Box color="white" gradient="blueDark" py={4}>

      <A.Container my={4}>

        <Atom.Box textCenter>
          <Atom.Heading xxl heavy center>Developer Resource Network</Atom.Heading>
          <Atom.Paragraph>
            Discover the Tool that is Perfect For You.
          </Atom.Paragraph>
          <Atom.Span xxs tag='white'>Click here to learn <strong>why</strong> and <strong>how</strong> we promote community tools.</Atom.Span>
        </Atom.Box>

        <Atom.Flex gutter3 my={4} flex={1}>

          <PlatformCard
            title='Gitcoin Quests'
            tagline='Battle the Baddies and Learn about Etheruem'
            summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
            imageCover='https://i.imgur.com/cHtxC04.png'
          />
          {/* <PlatformCard
            title='3Box Developer Profile'
            tagline='Conquer Decentraland in Style'
            summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
            imageCover='https://i.imgur.com/DpyjcVt.png'
          /> */}
          <PlatformCard
            title='EthQuest'
            tagline='Challenge Yourself To Complete All Tasks'
            summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
            imageCover='https://i.imgur.com/vaTcwti.png'
          />
          <PlatformCard
            title='Add Application'
            tagline='Create A New Application to Share'
            summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
            imageCover='https://s3.envato.com/files/f209c8a8-c7fc-49be-a948-6aa185b7fb4b/inline_image_preview.jpg'
          />

        </Atom.Flex>

      </A.Container>
    </A.Box>

    <A.Flex gradient="gray" flex={1}>
      <A.Flex center column flex={3} py={50} minHeight="600px" order={2}>
        <FormUpdates />
      </A.Flex>
    </A.Flex>
  </Site>

)
const PlatformCard = props => {
  return (
    <Atom.Flex column >
      <A.Flex center column flex={1}>
        <A.Image src={props.imageCover} />
      </A.Flex>
      <Atom.Box bg='white' color='charcoal' p={3}>
        <Atom.Heading md heavy>{props.title}</Atom.Heading>
        <Atom.Heading sm thin>{props.tagline}</Atom.Heading>
        <Atom.Paragraph xs>
          {props.summary}
        </Atom.Paragraph>
        <Atom.Flex justifyEnd flex={1}>
          <Atom.Button xs>Go</Atom.Button>
        </Atom.Flex>
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
 return(
  <Atom.Box>
    <Atom.Heading lg heavy>What is a Web 2.0 Developer?</Atom.Heading>
    <Atom.Paragraph>
      That’s you. The first iteration of the web was basic landing pages, tools, and protocols with limited functionality. Web 2.0 saw the addition of more interactive content, such as web apps, social media networking, and cloud storage. People are the product and data is the price.
    </Atom.Paragraph>
    <Atom.Heading lg heavy>What is a Web 3.0 Developer?</Atom.Heading>
    <Atom.Paragraph>
      Web 3.0 is an Internet that can handle data, and rules for changing the state of that data, in the way that the Internet handles messaging today — more or less decentralized. an internet where your data is your own, your identity is self-sovereign, and walled gardens are dissolved. an internet where value can be exchanged as easily as data, and your assets are inarguably yours.
    </Atom.Paragraph>

    <Atom.Heading>You already have most of the skills:</Atom.Heading>
      <ul>
        <li>The skills you have gained building products in Web 2.0 are directly transferable to  Web 3.0. </li>
      </ul>
    <Atom.Heading>We’ve already done the hard work for you.</Atom.Heading>
      <ul>
        <li>In the first few years of blockchain development, we laid the scaffolding to make building on Ethereum easy </li>
      </ul>

    <Atom.Heading lg heavy>Why you, why now, and why Ethereum?</Atom.Heading>
    <Atom.Paragraph>
      You already have the skills necessary to be a great asset to the “history of the future.” Many of the coding skills you use daily are transferable to what we do. You also get to play with a whole new set of developer tools and write smart contracts (aka programmable money). 
    </Atom.Paragraph>

    <Atom.Paragraph>
      There’s an old Chinese proverb that was adapted to the blockchain space: “The best time to plant a tree was 20 years ago, the second best time is now.” The protocols are aligned, the dev tools are built, and teams are ramping up hiring. When we look back on today, you’ll still be able to say you planted one of the first trees in the landscape.
    </Atom.Paragraph>

    <Atom.Paragraph>
      You understand why Web 3.0 is important, but you might not be sold on why Ethereum is the right place for you. There are other projects competing to be “The World Computer,” but Ethereum remains the gold standard for smart contracts and decentralized apps (dApps). With the largest developer community, the largest user base, and the most amount of tools at your disposal, Ethereum is the logical choice for contributing to the Web3 movement.
    </Atom.Paragraph>


  </Atom.Box>
)}