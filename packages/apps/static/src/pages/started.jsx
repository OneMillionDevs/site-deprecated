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
            Down the Ethereum Rabbit-Hole
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
          <A.Heading xxl heavy>
            Path:
          </A.Heading>
          <A.Heading giga heavy>
            Web2 Developer
          </A.Heading>
          <A.Heading md>
            Discover your "Ah-Ha" moment & become a Web3 developer
          </A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            So, you’ve made it this far. You’re interested, but not yet sold on
            the whole “Ethereum” thing. Don’t worry, everyone was in your
            position at one point - until they began to truly understand it.
            Until they had their “ah-ha” Ethereum moment. We’re here to help
            give you those moments.
          </A.Paragraph>
          <A.Paragraph>
            Select a platform from the list below to discover your Ethereum
            “ah-ha” moment(s):
          </A.Paragraph>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <Atom.Box color="white" gradient="blueDark" py={4}>
      <Atom.Heading xl heavy center my={3}>
        Featured Platforms
      </Atom.Heading>
      <Atom.Flex gutter3 my={4} mx={5} flex={1}>
        <PlatformCard
          title="Gitcoin Quests"
          tagline="Battle the Baddies and Learn about Etheruem"
          summary="Gitcoin Quests is a fun, gamified way to learn about the web3 ecosystem, compete with your friends, earn rewards, and level up your decentralization-fu!"
          imageCover="https://i.imgur.com/cHtxC04.png"
        />
        {/* <PlatformCard
            title='3Box Developer Profile'
            tagline='Conquer Decentraland in Style'
            summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
            imageCover='https://i.imgur.com/DpyjcVt.png'
          /> */}
        <PlatformCard
          title="RAPID Adventures"
          tagline="Earn Rewards for Interacting With Ethereum"
          summary="RAPID Adventures provides a gamified way to interact with the Ethereum ecosystem itself. Whether its learning about how to set up a wallet, deploying your first contract, or interacting with some of the amazing dApps that have already been built, RAPID Adventures introduces you to Ethereum in an immersive and rewarding way."
          imageCover="https://i.imgur.com/vaTcwti.png"
        />
        <PlatformCard
          title="Add Application"
          tagline="Create A New Application to Share"
          summary="This site is meant to be an open, communal hub of resources! Want your platform featured on One Million Devs? Submit a request here!"
          imageCover="https://s3.envato.com/files/f209c8a8-c7fc-49be-a948-6aa185b7fb4b/inline_image_preview.jpg"
        />
      </Atom.Flex>
      <A.Container align="center">
        <A.Link to="platforms">
          <A.Button center>View More</A.Button>
        </A.Link>
      </A.Container>
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
          <A.Heading xxl heavy>
            Path:
          </A.Heading>
          <A.Heading giga heavy>
            Beginner Web3 Dev
          </A.Heading>
          <A.Heading md>Begin your Ethereum developer journey</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Paragraph>
            Welcome to the Web3 family. We're happy you took the time to
            understand what we are all ranting and raving about, and are happy
            to have you on-board. To get you started with developing on
            Ethereum, we've provided two distinct paths for you to follow:
          </A.Paragraph>
        </A.Flex>
      </A.Flex>
    </Atom.Container>

    <Atom.Box color="white" gradient="blueDark" py={4}>
      <Atom.Heading xl heavy center>
        Guided Learning Experiences
      </Atom.Heading>
      <Atom.Container madWidth={650}>
        <A.Paragraph center>
          Diving head first into all of this can feel overwhelming. Luckily, the
          Ethereum community has built some platforms to help guide you through
          the beginnings of your Ethereum developer journey. Below are a few
          tools to not only teach you the basics, but also allow you to realize
          how familiar the territory actually is, and how transferable your
          skills already are!
        </A.Paragraph>
      </Atom.Container>
      <Atom.Flex gutter3 my={4} mx={5} flex={1}>
        <ToolCard
          title="Crypto Zombies"
          createdBy="Loom Network"
          tagline="solidity"
          summary="CryptoZombies is an interactive code school that teaches you to write smart contracts in Solidity through building your own crypto-collectables game."
          image="https://cryptozombies.io/course/static/image/preview-zombie.png"
          imageCover="https://i.imgur.com/L6jfpUz.jpg"
          imageCreatedBy="https://cdn-images-1.medium.com/max/1200/1*K76UVoLq-FOL7l-_Fag-Qw@2x.png"
        />
        <ToolCard
          title="Ethereum Studio"
          createdBy="SuperBlocks"
          tagline="full-stack dApps"
          summary="Ethereum Studio is an integrated development environment (IDE) to learn, code, build and deploy Ethereum-based decentralized apps (DApps). Ethereum Studio provides a full browser experience which requires no installations to run, and offers sample starter dApps to help get you up and running quickly with your first project."
          image="https://superblocks.com/static/img/lab/icon-blockchain-black.png"
          imageCover="https://i.imgur.com/E3bkmPX.png"
          imageCreatedBy="https://avatars1.githubusercontent.com/u/37122442?s=280&v=4"
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
      <A.Container align="center">
        <A.Link to="platforms">
          <A.Button center>View More</A.Button>
        </A.Link>
      </A.Container>
    </Atom.Box>

    <Atom.Box color="white" gradient="blue" py={4}>
      <Atom.Heading xl heavy center>
        Developer Resources
      </Atom.Heading>
      <Atom.Container madWidth={650}>
        <A.Paragraph center>
          Your feet are wet, and the water’s warm. You’re ready to escape
          tutorial-land, and dive head-first into Ethereum development. Check
          out some of our featured platforms, or head over to the Resource page
          to see an extended list of tools our ecosystem has to offer.
        </A.Paragraph>
      </Atom.Container>
      <Atom.Flex gutter3 my={4} mx={5} flex={1}>
        <ToolCard
          title="Ethereum Developer Portal"
          createdBy="ConsenSys"
          tagline="dev tools"
          summary="This developer portal is a place to get started and find the tools you need to develop and build applications on the Ethereum blockchain. Here you’ll find the most popular knowledge bases, infrastructure tools, programming libraries, and more that will teach you how to build software on Ethereum. "
          image="https://i.imgur.com/VCw60DN.png"
          imageCover="https://i.imgur.com/UeuyLD2.png"
          imageCreatedBy="https://i.imgur.com/akQZCgw.png"
        />
        <ToolCard
          title="ConsenSys Academy"
          createdBy="ConsenSys"
          tagline="education"
          summary="ConsenSys Academy’s mission is to develop the global blockchain ecosystem by bridging the Ethereum knowledge gap and being a beacon for Ethereum education. They offer a suite of offerings, both free and paid, to educate web 2 and web 3 developers about Ethereum and related technologies. They have offerings for non-developers as well."
          image="https://i.imgur.com/94G4REa.png"
          imageCover="https://consensys.net/academy/wp-content/themes/philosophie_consensys/assets/consensys_academy_02.jpg"
          imageCreatedBy="https://i.imgur.com/akQZCgw.png"
        />
        <ToolCard
          title="Kauri"
          createdBy="ConsenSys"
          tagline="education"
          summary="Kauri is a portal where project teams and individuals can engage, generate, and curate high quality and up-to-date technical resources, committed to enabling the community to curate the decentralized knowledge base and support network that the Ethereum ecosystem needs to reach its full potential. Kauri provides both new and experienced developers with completely free access to a curated, high-quality, and continuously expanding Ethereum knowledge base"
          image="https://miro.medium.com/fit/c/256/256/1*vxAe934PUE00NMflnJzX3g.png"
          imageCover="https://miro.medium.com/max/2084/0*OOXE6y6nBaZRMG5f."
          imageCreatedBy="https://i.imgur.com/akQZCgw.png"
        />
      </Atom.Flex>
      <A.Container align="center">
        <A.Link to="resources">
          <A.Button center>Full Resource List</A.Button>
        </A.Link>
      </A.Container>
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
          <A.Heading xxl heavy>
            Path:
          </A.Heading>
          <A.Heading giga heavy>
            Expert Web3 Dev
          </A.Heading>
          <A.Heading md>
            Help foster the community and lead others through their Ethereum
            development journies
          </A.Heading>
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
        <Atom.Flex justifyEnd flex={1}>
          <Atom.Button xs>Go</Atom.Button>
        </Atom.Flex>
      </Atom.Box>
    </Atom.Flex>
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
