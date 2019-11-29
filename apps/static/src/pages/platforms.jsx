import { Site } from "templates"
import { FormBecomeGuide, FormBecomeGuideFull } from "forms"

const GuideRegistration = props => {
  return (
    <Atom.Flex card center column>
      <Atom.Heading lg heavy>
        Learning & Experience Platforms
      </Atom.Heading>
      <Atom.Heading sm normal>
        Experience Ethereum and Have Fun.
      </Atom.Heading>
      <Atom.HorizontalRule dash center />
      <Atom.Flex flex={1} p={3} width="100%">
        <Atom.Flex flex={1}>
          <FormBecomeGuide />
        </Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box>
            <Atom.Image
              card
              p={1}
              src="https://imgur.com/9hqmKMZ.png"
              maxWidth={180}
            />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  )
}

export default props => (
  <Site>
    <Atom.Box gradient="gray" pb={4}>
      <A.Box>
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
        <A.Heading xxl heavy center mb={5}>
          Discover Your "Ah-Ha" Moment
        </A.Heading>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Gitcoin Quests
              </A.Heading>
              <A.Heading md thin>
                Battle the Baddies and Skill-Up Your Knowledge
              </A.Heading>
              <A.Paragraph>
                Gitcoin Quests is a fun, gamified way to learn about the web3
                ecosystem, compete with your friends, earn rewards, and level up
                your decentralization-fu!
              </A.Paragraph>
              <a href="https://gitcoin.co/quests/">
                <A.Button sm>Play Gitcoin Quests</A.Button>
              </a>
            </A.Box>
          </A.Flex>

          <Atom.Flex center column flex={2}>
            <Atom.Image p={1} card src="https://imgur.com/n7dwOfr.png" />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

      <Atom.Container mt={6}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3} order={2}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Rapid Adventures
              </A.Heading>
              <A.Heading md thin>
                Earn Rewards for Interacting With Ethereum
              </A.Heading>
              <A.Paragraph>
                RAPID Adventures provides a gamified way to interact with the
                Ethereum ecosystem itself. Whether its learning about how to set
                up a wallet, deploying your first contract, or interacting with
                some of the amazing dApps that have already been built, RAPID
                Adventures introduces you to Ethereum in an immersive and
                rewarding way.
              </A.Paragraph>
              <A.Button sm>Coming Soon</A.Button>
            </A.Box>
          </A.Flex>

          <Atom.Flex center column flex={2} order={1}>
            <Atom.Image p={1} card src="https://imgur.com/iPc1siu.png" />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

      <Atom.Container mt={5}>
        <A.Heading xxl heavy center mb={5}>
          Start Buidling
        </A.Heading>
        <A.Flex flex={1}>
          <A.Flex center column flex={3}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Crypto Zombies
              </A.Heading>
              <A.Heading md thin>
                Learn to Code Ethereum DApps By Building Your Own Game
              </A.Heading>
              <A.Paragraph>
                CryptoZombies is an interactive code school that teaches you to
                write smart contracts in Solidity through building your own
                crypto-collectables game.
              </A.Paragraph>
              <a href="https://cryptozombies.io/">
                <A.Button sm>Play Crypto Zombies</A.Button>
              </a>
            </A.Box>
          </A.Flex>

          <Atom.Flex center column flex={2}>
            <Atom.Image p={1} card src="https://i.imgur.com/L6jfpUz.jpg" />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

      <Atom.Container mt={6}>
        <A.Flex flex={1}>
          <A.Flex center column flex={3} order={2}>
            <A.Box px={100}>
              <A.Heading xl heavy>
                Ethereum Studio
              </A.Heading>
              <A.Heading md thin>
                Build your first dApp without installing anything!
              </A.Heading>
              <A.Paragraph>
                Ethereum Studio is an integrated development environment (IDE)
                to learn, code, build and deploy Ethereum-based decentralized
                apps (DApps). Ethereum Studio provides a full browser experience
                which requires no installations to run, and offers sample
                starter dApps to help get you up and running quickly with your
                first project.
              </A.Paragraph>
              <a href="https://studio.ethereum.org/">
                <A.Button sm>Build a dApp</A.Button>
              </a>
            </A.Box>
          </A.Flex>

          <Atom.Flex center column flex={2} order={1}>
            <Atom.Image p={1} card src="https://i.imgur.com/M6tfwP7.png" />
          </Atom.Flex>
        </A.Flex>
      </Atom.Container>

      <Atom.Container my={6}>
        <A.Flex center column flex={1}>
          <A.Heading xl heavy>
            Your Platform Here!
          </A.Heading>
          <A.Paragraph>
            This site is meant to be an open, communal hub of resources! Want
            your platform featured on One Million Devs? Submit a request here!
          </A.Paragraph>
          <Atom.Button xxl>Create Platform</Atom.Button>
        </A.Flex>
      </Atom.Container>
    </Atom.Box>
  </Site>
)

const ReferAFriend = props => {
  return (
    <A.Box card>
      <Atom.Heading lg heavy>
        The Growing Etheruem Community
      </Atom.Heading>
      <Atom.Paragraph sm>
        Proin placerat, nibh vel porta fermentum, justo felis elementum odio,
        sed porttitor purus massa eu eros. Nam mollis lorem eget pretium
        interdum. Fusce consequat, lacus nec imperdiet posuere, ligula tortor
        vulputate felis, quis sodales arcu nibh vel nibh. Curabitur sit amet
        metus eleifend.
      </Atom.Paragraph>
    </A.Box>
  )
}
