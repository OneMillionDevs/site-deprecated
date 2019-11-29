import { Site } from "templates"
import FormBecomeGuide from "../components/core/actions/FormBecomeGuide";

export default props => (
  <Site>
    <Atom.Box gradient='gray' pb={4}>
      <A.Box >
        <A.Box fullWidth color="white" gradient="blueOcean" py={200} textCenter>
          <A.BackgroundImage
            opacity={0.3}
            ratio={0.5}
            src="https://cdn.dribbble.com/users/1314508/screenshots/6437101/cryptocurrency_hero_landing_page_illustration_4x.jpg"
          />
          <A.Heading xxl heavy>
            Just Getting Started
          </A.Heading>
          <A.Heading lg thin>
            Start with these Popular Community Tools
          </A.Heading>
        </A.Box>
      </A.Box>
  
      <Atom.Container maxWidth={980}>
        <Atom.Flex alignCenter card between mt={-50} p={4} mt={-50}>
          <Atom.Box>
            <Atom.Heading>Want to track your progress?</Atom.Heading>
            <Atom.Paragraph xs mb={0}>Find the perfect tool in the Learning Network section.</Atom.Paragraph>
          </Atom.Box>
          <Atom.Button variant='green'>Learning Network</Atom.Button>  
        </Atom.Flex>
      </Atom.Container>
  
      <Atom.Container maxWidth={680} my={5}>
        <Atom.Flex column card between my={4}>
            <Atom.Heading lg heavy>Starting with Baby Steps</Atom.Heading>
            <Atom.Paragraph sm>
              Tapping into a global, decentralized, permissionless blockchain can be a little complicated at times. If you're a existing developer, but brand new to Web3 technology we recommend getting started with some of the popular guides and latest developer tools.
            </Atom.Paragraph>
            <Atom.Heading sm heavy>Advanced Guides & Tutorials</Atom.Heading>
            <Atom.Paragraph sm>
              Are you ready to reading more advanced materials and guides? Want to experiment with off-the-shelf decentralized applications and examples? We recommend reviewing the Truffle Box catalog. You will find number of different applications you can run locally to test different blockchain technology
            </Atom.Paragraph>
            <Atom.Heading sm heavy>Contribut to List</Atom.Heading>
            <Atom.Paragraph sm>
              We are on a mission to make getting started with Ethereum as easy possible. If you think we should add a resource to the list please make a pull request or add a ticket to the public <a target='_blank' href='https://github.com/OneMillionDevs'>1MD Github repo.</a>
            </Atom.Paragraph>
            <Atom.Button xs><a target='_blank' href='https://github.com/OneMillionDevs/site/tree/master/packages/apps/static/src/pages'>Edit this Page.</a></Atom.Button>
        </Atom.Flex>
      </Atom.Container>


       
      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Crypto Zombies
              </A.Heading>
              <A.Heading lg thin>Tell Other Developers About Ethereum</A.Heading>
              <A.Paragraph>
                  Description: CryptoZombies is an interactive code school that teaches you to write smart contracts in Solidity through building your own crypto-collectables game.
              </A.Paragraph>
              <A.Modal content={<ReferAFriend/>} >
                <A.Button sm>Checkout the 🧠Crpyto Zombies🧟 Guides </A.Button>
              </A.Modal>
            </A.Box>
          </A.Flex>
    
          <Atom.Flex center column flex={2}>
            <Atom.Image p={1} card src='https://github.com/Robbiekruszynski/MillDev-images/blob/master/Images/ZombieImages/zombie_code.png?raw=true'/>
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>
      
      <Atom.Container my={5}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3} order={2}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Ethereum Studio
              </A.Heading>
              <A.Paragraph>
                Description: Ethereum Studio is an integrated development environment (IDE) to learn, code, build and deploy Ethereum-based decentralized apps (DApps). Ethereum Studio provides a full browser experience which requires no installations to run, and offers sample starter dApps to help get you up and running quickly with your first project.
              </A.Paragraph>
              <a href='https://studio.ethereum.org'>
                <A.Button sm>Browser Contract Editor</A.Button>
              </a>
            </A.Box>
          </A.Flex>
    
          <Atom.Flex center column flex={2} order={1}>
            <Atom.Image p={1} card src='https://github.com/Robbiekruszynski/MillDev-images/blob/master/Images/ZombieImages/zombie_code.png?raw=true'/>
          </Atom.Flex>
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
