
import { Site } from "templates"
import { SEO } from "core"

import { Heading, Flex, Box, Absolute, Span, BackgroundImage, Loading, Image, Paragraph, Container } from '@horizin/design-system'

const IndexPage = () => (
  <Site>
    {/* <SEO title="Home" /> */}
    <Flex flex={1} >

      <Flex center column flex={3} py={50} minHeight='600px' >
        <Box px={200}>
          <Heading xl heavy><Span md thin>OUR MISSION</Span><br /><Span heavy>1 Million Developers</Span> </Heading>
          <Paragraph mt={3}>
            <strong>Around the world, Ethereum developers are ushering in radical change one keystroke at a time.</strong>
          </Paragraph>

          <Paragraph>
            We hope to expand the Ethereum developer family - and to bring that family closer together - by providing an interactive and immersive space for newbies and veterans alike, to learn, collaborate, share, and buidl in a fun and easy manner.
          </Paragraph>

          {/* <EmailSubmit /> */}

        </Box>
      </Flex>

      <Flex boxShadow='insetLeftHeavy' gradient='blue'  borderRadius='0 0 0 40px' flex={2} py={50}  >
        <BackgroundImage borderRadius='0 0 0 40px' opacity={.86} ratio={.35} src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' />
        <Flex center column mt={50} ml={-160} p={30}>
          {/* <BoxLoginCardPledge /> */}
        </Flex>
        <Absolute layout='topRight' mr={155} mt={220} ><Loading type='ripple' /></Absolute>
        <Absolute layout='topRight' mr={200} mt={420} ><Loading type='ripple' /></Absolute>
        <Absolute layout='topRight' mr={30} mt={190} ><Loading type='ripple' /></Absolute>
      </Flex>
    </Flex>

    
    <Container mt={5}>
      <Flex center column>
        <Heading xxl heavy>The Ethereum Developer's Network</Heading>
        <Heading lg thin>Connect to the network of Ethereum community curated adventures.</Heading>
      </Flex> 
    </Container>

    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>
        <A.Flex column flex={1} textRight>
          <A.Heading xl>Developer Profile</A.Heading>
          <A.Heading md thin>Build an Online Developer Identity - Login Anywhere</A.Heading>
          <A.Paragraph>
            Join the community be building a decentralized developer profile. Share current projects. Ask for guidance. And earn collectibles and an online reputation.
          </A.Paragraph>
          <A.Link to='/features/developer-identity'>
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>
        <A.Flex center column flex={1} p={5}>
          <A.Image card borderRadius={30} p={1} src='https://imgur.com/0m2yY82.png' />
        </A.Flex>
      </A.Flex>
    </A.Container>
    
    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>

        <A.Flex column flex={1} order={2} >
          <A.Heading xl>Learning Network</A.Heading>
          <A.Heading md thin>Tap Into a Network of Adventures and Quests</A.Heading>
          <A.Paragraph>
            Adventures, Quests and Resources and directly hosted on on IPFS and easily curated by the community. New content can easily be added or existing adventures can be forked and upgraded. The adventures grows as the community does. 
          </A.Paragraph>
          <A.Link to='/features/learning-network'>
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>

        <A.Flex center column flex={1} p={5} order={1}>
          <A.Image card borderRadius={30} p={1} src='https://i.imgur.com/sVfZX9l.png' />
        </A.Flex>
      </A.Flex>
    </A.Container>

    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>
        <A.Flex column flex={1} textRight>
          <A.Heading xl>Activity & Reputation</A.Heading>
          <A.Heading md thin>Showcase Your Development Activity - Get Found and Hired</A.Heading>
          <A.Paragraph>
            Earn bragging rights or land your next job the Ethereum blockchain space. Let your developer activity feed do the talking. Plus share your industry knolwedge and reputation with others.
          </A.Paragraph>
          <A.Link to='/features/learning-network'>
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>
        <A.Flex center column flex={1} p={5}>
          <A.Image card borderRadius={30} p={1} src='https://i.imgur.com/HsdO37W.png' />
        </A.Flex>
      </A.Flex>
    </A.Container>


    <A.Box color='white' gradient='blueDark' py={4} >
      <A.Container>
        <A.Flex alignCenter flex={1} minHeight={370}>
          <A.Flex center column flex={1} p={5}>
            <A.Box width='130%' left='-30%'>
              <A.Image card boxShadow='blueBottom' borderRadius={10} p={1} src='https://i.imgur.com/XmLfVL6.png' />
            </A.Box>
          </A.Flex>
          <A.Flex column flex={1}>
            <A.Heading md>Featured Platform</A.Heading>
            <A.Heading xxl heavy>Gitcoin Quests</A.Heading>
            <A.Paragraph>
              Gitcoin Quests is a fun, gamified way to learn about the web3 ecosystem, compete with your friends, earn rewards, and level up your decentralization-fu!
            </A.Paragraph>
            <A.Link to='/features/learning-network'>
              <A.Button>Start Questing</A.Button>
            </A.Link>
          </A.Flex>
        </A.Flex>
      </A.Container>
    </A.Box>


    <QuestPlaform />


  </Site>
)


const QuestPlaform = props => { 
 return(
  <>
    <Container mt={6}>
      <Flex center column>
        <Heading xxl heavy>EthQuest Platform</Heading>
        <Heading lg thin>Publish to the Open Quest Network with any Ethereum Account</Heading>
      </Flex> 
    </Container>

    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>
        <A.Flex column flex={1} textRight>
          <A.Heading xl>Reach New Developers</A.Heading>
          <A.Heading md thin>Teach New Users about Your Smart Contract Application</A.Heading>
          <A.Paragraph>
            Do you want an interesting way to teach developers how to integrate with your smart contract application? The Open Quest Network let's you easily publish new developer adventures in just a couple of minutes.
          </A.Paragraph>
          <A.Link to='/features/developer-identity'>
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>
        <A.Flex center column flex={1} p={5}>
          <A.Image card borderRadius={30} p={1} src='https://i.imgur.com/ec6dbqa.png' />
        </A.Flex>
      </A.Flex>
    </A.Container>
    
    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>

        <A.Flex column flex={1} order={2} >
          <A.Heading xl>Grow Your Application</A.Heading>
          <A.Heading md thin>Get Developers Started with Best Practices</A.Heading>
          <A.Paragraph>
            Teach new developers how to properly interact with your smart contracts. An easy step-by-step process exposes developers to the right information at the right time. <strong>Just add your content. Plugin the smart contract addresses and that's it.</strong>
          </A.Paragraph>
          <A.Link to='/features/learning-network'>
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>

        <A.Flex center column flex={1} p={5} order={1}>
          <A.Image card borderRadius={30} p={1} src='https://i.imgur.com/1KPhWNe.png' />
        </A.Flex>
      </A.Flex>
    </A.Container>

    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>
        <A.Flex column flex={1} textRight>
          <A.Heading xl>Activity & Reputation</A.Heading>
          <A.Heading md thin>Showcase Your Development Activity - Get Found and Hired</A.Heading>
          <A.Paragraph>
            Earn bragging rights or land your next job the Ethereum blockchain space. Let your developer activity feed do the talking. Plus share your industry knolwedge and reputation with others.
          </A.Paragraph>
          <A.Link to='/features/learning-network'>
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>
        <A.Flex center column flex={1} p={5}>
          <A.Image card borderRadius={30} p={1} src='https://i.imgur.com/6EIoF56.png' />
        </A.Flex>
      </A.Flex>
    </A.Container>
  </>
)}

export default IndexPage
