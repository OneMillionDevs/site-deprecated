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

    <Atom.Container maxWidth={780} mt={5}>

      <Atom.Paragraph>
        What if...
      </Atom.Paragraph>
      <Atom.Paragraph>
        <em>What if the Internet was built differently?</em>
      </Atom.Paragraph>

      <Atom.Heading lg heavy>Ethereum</Atom.Heading>
      <Atom.Paragraph >
        <strong>Ethereum is a public blockchain. </strong> You might have heard about it in recent news. As a public and global blockchain it provides unique features to both users and developers. Users can achieve true digital ownership. And developers can compose and craft applications in new and interesting ways.
      </Atom.Paragraph>

      <ul>
        <li>
          Global Computer (Decentralized Software)
        </li>
        <li>
          Accessible to Everyone (Permissionless Authentication)
        </li>
        <li>
          Decentralized Infrastructure (Cryptocurrency Enabled)
        </li>

      </ul>


      <A.Heading lg heavy>
        Blockchain - A New Layer of the Internet
      </A.Heading>
      <Atom.Paragraph sm>
        Blockchain technology provides the opportunity to re-think and re-imagine how we connect the Internet. Everything from finance, identity, communications, social networks, data discovery, and more are waiting to be rebuilt.
      </Atom.Paragraph>
      <Atom.Heading md>Internet Composability</Atom.Heading>
      <Atom.Paragraph sm>
        What makes blockchain technology like Ethereum compelling for developers is the unique ability to build applications built using a public infrastructure. The public infrastructure provides an assortment of blockchain primitives, in addition to public smart contract API endpoints. Blockchain primitives transaction signing, and other decentralized account management facilitate the infrastructure. Public smart contract API endpoints is the software layer of the public infrastructure.
      </Atom.Paragraph>
      <Atom.Heading md>Digital Owernship</Atom.Heading>
      <Atom.Paragraph sm>
        What makes blockchain technology like Ethereum compelling for developers is the unique ability to build applications built using a public infrastructure. The public infrastructure provides an assortment of blockchain primitives...
      </Atom.Paragraph>
      <Atom.Heading md>Scaling Public Internet</Atom.Heading>
      <Atom.Paragraph sm>
        What makes blockchain technology like Ethereum compelling for developers is the unique ability to build applications built using a public infrastructure. The public infrastructure provides an assortment of blockchain primitives...
      </Atom.Paragraph>
      <Atom.Flex my={4}>
        <Atom.Link to='/resource/smart-contract-tools'>
          <Atom.Button xs variant='blue' mr={3}>Smart Contract Tools</Atom.Button>
        </Atom.Link>
        <Atom.Link to='/resource/ethereum-roadmap'>
          <Atom.Button xs variant='green'>The Ethereum Roadmap</Atom.Button>
        </Atom.Link>
      </Atom.Flex>
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
