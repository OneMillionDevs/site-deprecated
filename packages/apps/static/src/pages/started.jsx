import { Site } from "templates"
import { FormUpdates } from "core"
import {
  FormBecomeGuide,
  FormBecomeGuideFull,
  FormBecomeCommunityManager,
} from "forms"

const GuideRegistration = props => {
  return (
    <Atom.Flex card center column flex={1}>
      <Atom.Heading lg heavy>
        Ethereum Community Guide
      </Atom.Heading>
      <Atom.Heading sm normal>
        Help Etheruem Reach it's Full Potential
      </Atom.Heading>
      <Atom.HorizontalRule dash center />
      <Atom.Flex flex={2} p={3} width="100%">
        <Atom.Flex flex={1}>
          <FormBecomeGuide />
        </Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box card p={1} display="inline-block">
            <Atom.Image
              src="https://imgur.com/bXAJm7B.png"
              maxWidth={180}
              display="inline-block"
            />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  )
}

export default props => (
  <Site>
    <A.Flex gradient="bluePurple" flex={1}>
      <A.BackgroundImage
        backgroundSize="110%"
        opacity={0.46}
        ratio={0.35}
        src="https://wallpaperaccess.com/full/1267681.jpg"
      />

      <A.Flex
        center
        column
        flex={3}
        py={50}
        order={2}
        p={5}
        py={7}
        ml={4}
        my={5}
      >
        <A.Box card flex={1} boxShadow={7} maxWidth={620} p={4}>
          <A.Heading xl heavy center>
            Begin Your Adventure
          </A.Heading>
          <A.Heading md thin center>
            Start Interacting With Ethereum Today
          </A.Heading>
          <Atom.Paragraph sm center>
            No matter your level of involvement or expertise, we've provided a
            few methods for you to start your Ethereum developer journey.
          </Atom.Paragraph>
        </A.Box>
      </A.Flex>
    </A.Flex>

    <Atom.Container>
      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1}>
          <A.Image
            circle
            maxWidth={370}
            src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading giga heavy>
            Path: <br />
            Web2 Developer
          </A.Heading>
          <A.Heading md>Discover your "Ah-Ha" moment</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            So, you’ve made it this far. You’re interested, but not yet sold on
            the whole “Ethereum” thing. Don’t worry, everyone was in your
            position at one point - until they began to truly understand it.
            Until they had their “ah-ha” Ethereum moment. We’re here to help
            give you those moments. <br />
            <br />
            Select a platform from the list below to discover your Ethereum
            “ah-ha” moment(s):
          </A.Paragraph>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <Atom.Box {...props.styled}>
      <Atom.Heading lg heavy>
        Featured Platforms
      </Atom.Heading>
      <Atom.Flex gutter3>
        <ToolCard
          title="Gitcoin Quests"
          createdBy="Kevin Owocki"
          tagline="knowledge"
          summary="Gitcoin Quests is a fun, gamified way to learn about the web3 ecosystem, compete with your friends, earn rewards, and level up your decentralization-fu!"
          image="https://c.gitcoin.co/grants/7f2bdd3cbd59dcaaa1c4b54c5b73a952/ethers-gitcoin.png"
          imageCover="https://miro.medium.com/max/1200/0*52_QQpw7YGDelBvo."
          imageCreatedBy="https://d2ygwrecguqg66.cloudfront.net/data/presentations/38911794/slideslive_richard-moore_ethersjs-a-complete-and-compact-ethereum-library.jpg?1542125158"
        />
        <ToolCard
          title="RAPID Adventures"
          createdBy="RAPID"
          tagline="hands-on interactions"
          summary="RAPID Adventures provides a gamified way to interact with the Ethereum ecosystem itself. Whether its learning about how to set up a wallet, deploying your first contract, or interacting with some of the amazing dApps that have already been built, RAPID Adventures introduces you to Ethereum in an immersive and rewarding way."
          image="https://ludu-assets.s3.amazonaws.com/lesson-icons/26/i0fLErLtaPoc8J67WzIC"
          imageCover="https://i.ytimg.com/vi/6A5b-BhrYWk/maxresdefault.jpg"
          imageCreatedBy="https://i.ytimg.com/vi/6A5b-BhrYWk/maxresdefault.jpg"
        />
        <ToolCard
          title="Your Platform Here"
          createdBy="You"
          tagline="coming soon"
          summary="This site is meant to be an open, communal hub of resources! Want your platform featured on One Million Devs? Submit a request here!"
          image="https://avatars0.githubusercontent.com/u/16297473?s=280&v=4"
          imageCover="https://pbs.twimg.com/profile_images/3440615952/a385bce25fc4862ddf34adcddc434929_400x400.jpeg"
          imageCreatedBy="https://pbs.twimg.com/profile_images/3440615952/a385bce25fc4862ddf34adcddc434929_400x400.jpeg"
        />
      </Atom.Flex>
    </Atom.Box>

    <Atom.Container>
      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1}>
          <A.Image
            circle
            maxWidth={370}
            src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading giga heavy>
            Path: <br />
            Beginner Web3 Developer
          </A.Heading>
          <A.Heading md>Get started with building on Ethereum</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            You've made it far enough to consider yourself a Web3 citizen!
            Congratulations! Welcome to the future. We're glad to have you
            onboard. To get you started developing on Ethereum, we've provided
            two distinct paths for you to follow:
          </A.Paragraph>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <Atom.Box {...props.styled}>
      <Atom.Heading lg heavy>
        Guided Learning Adventures
      </Atom.Heading>
      <A.Paragraph>
        Diving head first into all of this can feel overwhelming. Luckily, the
        Ethereum community has built some platforms to help guide you through
        the beginnings of your Ethereum developer journey. Below are a few tools
        to not only teach you the basics, but also allow you to realize how
        familiar the territory actually is, and how transferable your skills
        already are!
      </A.Paragraph>
      <Atom.Flex gutter3>
        <ToolCard
          title="Crypto Zombies"
          createdBy="LOOM"
          tagline="solidity"
          summary="CryptoZombies is an interactive code school that teaches you to write smart contracts in Solidity through building your own crypto-collectables game."
          image="https://c.gitcoin.co/grants/7f2bdd3cbd59dcaaa1c4b54c5b73a952/ethers-gitcoin.png"
          imageCover="https://miro.medium.com/max/1200/0*52_QQpw7YGDelBvo."
          imageCreatedBy="https://d2ygwrecguqg66.cloudfront.net/data/presentations/38911794/slideslive_richard-moore_ethersjs-a-complete-and-compact-ethereum-library.jpg?1542125158"
        />
        <ToolCard
          title="Ethereum Studio"
          createdBy="SuperBlocks"
          tagline="full-stack dApps"
          summary="Ethereum Studio is an integrated development environment (IDE) to learn, code, build and deploy Ethereum-based decentralized apps (DApps). Ethereum Studio provides a full browser experience which requires no installations to run, and offers sample starter dApps to help get you up and running quickly with your first project."
          image="https://ludu-assets.s3.amazonaws.com/lesson-icons/26/i0fLErLtaPoc8J67WzIC"
          imageCover="https://i.ytimg.com/vi/6A5b-BhrYWk/maxresdefault.jpg"
          imageCreatedBy="https://i.ytimg.com/vi/6A5b-BhrYWk/maxresdefault.jpg"
        />
        <ToolCard
          title="Your Platform Here"
          createdBy="You"
          tagline="coming soon"
          summary="This site is meant to be an open, communal hub of resources! Want your platform featured on One Million Devs? Submit a request here!"
          image="https://avatars0.githubusercontent.com/u/16297473?s=280&v=4"
          imageCover="https://pbs.twimg.com/profile_images/3440615952/a385bce25fc4862ddf34adcddc434929_400x400.jpeg"
          imageCreatedBy="https://pbs.twimg.com/profile_images/3440615952/a385bce25fc4862ddf34adcddc434929_400x400.jpeg"
        />
      </Atom.Flex>
    </Atom.Box>

    <Atom.Box {...props.styled}>
      <Atom.Heading lg heavy>
        Developer Resources
      </Atom.Heading>
      <Atom.Paragraph>
        Your feet are wet, and the water’s warm. You’re ready to escape
        tutorial-land, and dive head-first into Ethereum development. Head over
        to the Resource page to check out the tools our ecosystem has to offer
      </Atom.Paragraph>
      <Atom.Flex gutter3>
        <ToolCard
          title="Developer Tools"
          createdBy="ConsenSys"
          tagline="solidity"
          summary="CryptoZombies is an interactive code school that teaches you to write smart contracts in Solidity through building your own crypto-collectables game."
          image="https://c.gitcoin.co/grants/7f2bdd3cbd59dcaaa1c4b54c5b73a952/ethers-gitcoin.png"
          imageCover="https://miro.medium.com/max/1200/0*52_QQpw7YGDelBvo."
          imageCreatedBy="https://d2ygwrecguqg66.cloudfront.net/data/presentations/38911794/slideslive_richard-moore_ethersjs-a-complete-and-compact-ethereum-library.jpg?1542125158"
        />
        <ToolCard
          title="ConsenSys Academy"
          createdBy="ConsenSys Academy"
          tagline="full-stack dApps"
          summary="ConsenSys Academy’s mission is to develop the global blockchain ecosystem by bridging the Ethereum knowledge gap and being a beacon for Ethereum education. They offer a suite of offerings, both free and paid, to educate web 2 and web 3 developers about Ethereum and related technologies. They have offerings for non-developers as well."
          image="https://ludu-assets.s3.amazonaws.com/lesson-icons/26/i0fLErLtaPoc8J67WzIC"
          imageCover="https://i.ytimg.com/vi/6A5b-BhrYWk/maxresdefault.jpg"
          imageCreatedBy="https://i.ytimg.com/vi/6A5b-BhrYWk/maxresdefault.jpg"
        />
        <ToolCard
          title="Kauri"
          createdBy="ConsenSys"
          tagline="coming soon"
          summary="Kauri is a portal where project teams and individuals can engage, generate, and curate high quality and up-to-date technical resources, committed to enabling the community to curate the decentralized knowledge base and support network that the Ethereum ecosystem needs to reach its full potential. Kauri provides both new and experienced developers with completely free access to a curated, high-quality, and continuously expanding Ethereum knowledge base"
          image="https://avatars0.githubusercontent.com/u/16297473?s=280&v=4"
          imageCover="https://pbs.twimg.com/profile_images/3440615952/a385bce25fc4862ddf34adcddc434929_400x400.jpeg"
          imageCreatedBy="https://pbs.twimg.com/profile_images/3440615952/a385bce25fc4862ddf34adcddc434929_400x400.jpeg"
        />
      </Atom.Flex>
    </Atom.Box>

    <Atom.Container>
      <A.Flex alignCenter flex={1} mt={5}>
        <A.Flex center column flex={1}>
          <A.Image
            circle
            maxWidth={370}
            src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
          />
        </A.Flex>
        <A.Flex column flex={1}>
          <A.Heading giga heavy>
            Path: <br />
            Expert Web3 Developer
          </A.Heading>
          <A.Heading md>Get started with building on Ethereum</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            You've made it far enough to consider yourself a Web3 citizen!
            Congratulations! Welcome to the future. We're glad to have you
            onboard. To get you started developing on Ethereum, we've provided
            two distinct paths for you to follow:
          </A.Paragraph>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <Atom.Box>
      <MonthlyAnalytics />
      <BecomeAGuide />
      <CommunityDevelopment />
    </Atom.Box>
  </Site>
)

const ToolCard = props => {
  return (
    <Atom.Flex card p={0} column>
      <A.Flex center column gradient="blueDark" flex={1} minHeight={150} py={3}>
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
            <A.Image maxWidth={80} borderRadius={10} src={props.image} />
          </Atom.Span>
        </Atom.Flex>
      </A.Flex>
      <Atom.Box bg="white" color="charcoal" p={3}>
        <Atom.Heading md heavy>
          {props.title}
        </Atom.Heading>
        <Atom.Heading sm thin>
          {props.tagline}
        </Atom.Heading>
        <Atom.Paragraph xs>{props.summary}</Atom.Paragraph>
        <Atom.Flex alignCenter>
          <Atom.Flex
            mb={3}
            circle
            card
            overflow="hidden"
            height={40}
            width={40}
          >
            <A.BackgroundImage src={props.imageCreatedBy} />
          </Atom.Flex>

          <Atom.Heading sm heavy ml={3}>
            {props.createdBy}
          </Atom.Heading>
        </Atom.Flex>
        {/* <Atom.Span xxs>Created By</Atom.Span> */}
        <Atom.Flex justifyEnd flex={1}>
          <Atom.Button xs>Go</Atom.Button>
        </Atom.Flex>
      </Atom.Box>
    </Atom.Flex>
  )
}

const MonthlyAnalytics = props => {
  return (
    <Atom.Container maxWidth={1080} my={5}>
      <Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box p={4}>
            <Atom.Image
              card
              p={1}
              boxShadow={4}
              src="https://imgur.com/IE9oe2y.png"
              maxWidth={320}
            />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex column card between p={4} my={4} flex={1}>
          <Atom.Box>
            <Atom.Heading lg heavy>
              Monthly Analytics Reports
            </Atom.Heading>
            <Atom.Paragraph>
              Want to get the latst analytics and news about the Ethereum
              ecosystem? Register for regular ecosystem updates. Updates will be
              curated from multiple sources: Alethio, EthGlobal, Developer
              Surveys, Package Downloads, Network Requests, and more. Tracking
              public chain data and community growth is a large task, but we
              would <strong>love to make it simple just for you.</strong>
            </Atom.Paragraph>

            <Atom.Heading>A Curated Experience</Atom.Heading>
            <Atom.Paragraph>
              The Ethereum ecosystem is constantly adapting. The monthly report
              will do it's best to pinpoint important metrics and distill top
              data points, so you can can quickly and easily consume the data.
            </Atom.Paragraph>
            <Atom.Modal content={<GuideRegistration />}>
              <Atom.Button variant="blue">
                Register for Monthly Repots
              </Atom.Button>
            </Atom.Modal>
            <Atom.Paragraph xs mt={3} mb={0}>
              <strong>Are you a journalist or reporter?</strong> Want detailed
              quarterly data?
            </Atom.Paragraph>
            <Atom.Span xxs tag="white">
              Register for Quarterly Report
            </Atom.Span>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}
const BecomeAGuide = props => {
  return (
    <Atom.Container maxWidth={1080} my={5}>
      <Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box p={4}>
            <Atom.Image
              card
              p={1}
              boxShadow={4}
              src="https://i.imgur.com/9hqmKMZ.png"
              maxWidth={320}
            />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex column card between p={4} my={4} flex={1}>
          <Atom.Box>
            <Atom.Heading lg heavy>
              Become A Guide
            </Atom.Heading>
            <Atom.Paragraph>
              Invite new people to ecosystem, regularily publish content or help
              maintain an Open Source project. As you contribute more and more
              to the community, you will earn Kudos and other "stunning" flair
              for your developer profile.
            </Atom.Paragraph>

            <Atom.Heading>Earn DEV Tokens. Get rewarded. </Atom.Heading>
            <Atom.Paragraph>
              Earn DEV tokens. Collect kudos. Become a star in the Ethereum
              developer ecosystem.
            </Atom.Paragraph>
            <Atom.Flex my={3}>
              <Atom.Span p={3} mx={2}>
                <Atom.Image
                  maxWidth={50}
                  src="https://gitcoin.co/dynamic/kudos/1921/the_alchemist"
                />
              </Atom.Span>
              <Atom.Span p={3} mx={2}>
                <Atom.Image
                  maxWidth={50}
                  src="https://gitcoin.co/dynamic/kudos/430/resilience"
                />
              </Atom.Span>
              <Atom.Span p={3} mx={2}>
                <Atom.Image
                  maxWidth={50}
                  src="https://gitcoin.co/dynamic/kudos/388/ipfs"
                />
              </Atom.Span>
            </Atom.Flex>
            <Atom.Flex>
              <Atom.Modal content={<GuideRegistration />}>
                <Atom.Button variant="primary">Guide Program</Atom.Button>
              </Atom.Modal>
              <Atom.Button variant="green" ml={3}>
                View Kudos
              </Atom.Button>
            </Atom.Flex>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const CommunityDevelopment = props => {
  return (
    <Atom.Container maxWidth={1080} my={5}>
      <Atom.Flex>
        <Atom.Flex center column flex={1}>
          <Atom.Box p={4}>
            <Atom.Image
              card
              p={1}
              boxShadow={4}
              src="https://imgur.com/bXAJm7B.png"
              maxWidth={320}
            />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex column card between p={4} my={4} flex={1}>
          <Atom.Box>
            <Atom.Heading kg heavy>
              Community Growth Managers
            </Atom.Heading>
            <Atom.Paragraph>
              Connect the dots. Organize the people. And help shape the
              foundation for Ethereum to blossom.{" "}
              <strong>People are the heart of a project.</strong> It's essential
              we teach new developers best practices. Get users familiar with
              best practices
            </Atom.Paragraph>

            <Atom.Heading>Experience the Roots of ETH</Atom.Heading>
            <Atom.Paragraph>
              Help others stay connected with meetups, local hackthons, event
              sponsors, coding parties, and other interesting events happening
              in your area.{" "}
              <strong>
                The world is a big place and there is lots to do, so we need as
                much help as possible!
              </strong>
            </Atom.Paragraph>
            <Atom.Modal content={<GuideRegistration />}>
              <Atom.Button variant="green">
                Download Community Guide Kit
              </Atom.Button>
            </Atom.Modal>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}
