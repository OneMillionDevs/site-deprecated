import { Site } from "templates"
import { FormBecomeGuide, FormBecomeGuideFull } from 'forms'

const GuideRegistration = props => { 
 return(
  <Atom.Flex card center column>
    <Atom.Heading lg heavy>Learning & Experience Platforms</Atom.Heading>
    <Atom.Heading sm normal>Experience Ethereum and Have Fun.</Atom.Heading>
    <Atom.HorizontalRule dash center />
    <Atom.Flex flex={1} p={3} width='100%'>
      <Atom.Flex flex={1}>
        <FormBecomeGuide/>
      </Atom.Flex>
      <Atom.Flex center column flex={1}>
        <Atom.Box>
          <Atom.Image card p={1} src='https://imgur.com/9hqmKMZ.png' maxWidth={180}/>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  </Atom.Flex>
)}


export default props => (
  <Site>
    <Atom.Box gradient='gray' pb={4}>
      <A.Box >
        <A.Box fullWidth color="white" gradient="blueOcean" py={150} textCenter>
          <A.BackgroundImage
            opacity={0.3}
            ratio={0.5}
            src="https://images.ui8.net/uploads/13_1533753358953.jpg"
          />
          <Atom.Flex center column>
            <A.Heading giga heavy>
              Developer Learning Platforms
            </A.Heading>
            <A.Heading lg thin>
              Experience Ethereum and Have Fun
            </A.Heading>
          </Atom.Flex>
        </A.Box>
      </A.Box>
  
      
       
      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Gitcoin Quests
              </A.Heading>
              <A.Heading lg thin>Building Blocks to Construct Networks</A.Heading>
              <A.Paragraph>
                Gitcoin Quests is a fun, gamified way to learn about the web3 ecosystem, compete with your friends, earn rewards, and level up your decentralization-fu!
              </A.Paragraph>
                <a href='https://gitcoin.co/quests/#available_quests'>
                  <A.Button sm>Play Gitcoin Quests</A.Button>
                </a>
            </A.Box>
          </A.Flex>
    
          <Atom.Flex center column flex={2}>
            <Atom.Image p={1} card src='https://imgur.com/n7dwOfr.png'/>
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>
      
      <Atom.Container my={6}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3} order={2}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Rapid Adventures
              </A.Heading>
              <A.Paragraph>
              RAPID Adventures provides a gamified way to interact with the Ethereum ecosystem itself. Whether its learning about how to set up a wallet, deploying your first contract, or interacting with some of the amazing dApps that have already been built, RAPID Adventures introduces you to Ethereum in an immersive and rewarding way.
              </A.Paragraph>
              <A.Button sm>Coming Soon</A.Button>
            </A.Box>
          </A.Flex>
    
          <Atom.Flex center column flex={2} order={1}>
            <Atom.Image p={1} card src='https://imgur.com/iPc1siu.png'/>
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>
      
      <Atom.Container my={6}>
        <A.Flex center column flex={1}>
              <A.Heading xl heavy>
                Your Platform Here!
              </A.Heading>
              <A.Paragraph>
                This site is meant to be an open, communal hub of resources! Want your platform featured on One Million Devs? Submit a request here!
              </A.Paragraph>
              <Atom.Button xxl>Create Platform</Atom.Button>
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
