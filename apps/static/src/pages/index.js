/* --- Local --- */
import {Card, CardLarge} from '@components/experiments';
import {FormRegistration, FormRegistrationFull} from '@components/forms';

/* --- Component --- */
const Page = props => {
  return (
    <Atom.Flex column>
      <Showcase />
      <InternetRevolution />
      <DeveloperPitch />
    </Atom.Flex>
  );
};
export default Page;

const styles = {
  // Section 1
  showcase: {
    container: {
      bg: 'paper',
      color: 'text',
      minHeight: '80vh',
      flexDirection: ['column', 'column', 'row'],
    },
    bgImage: {
      borderRadius: [0, 0, '0 0 0 40px'],
      zIndex: 0,
      overflow: 'hidden',
    },
    left: {
      flex: 4,
      p: 3,
      py: 6,
    },
    right: {
      boxShadow: 'insetLeftHeavy',
      gradient: 'blue',
      borderRadius: [0, 0, '0 0 0 40px'],
      py: 50,
      flex: 4,
      p: 4,
      zIndex: 1000,
    },
  },
  // Section 2
  pitch: {
    container: {
      flexDirection: ['column', 'column', 'row'],
      my: 4,
      maxWidth: ['100%', '100%', 780, 780],
    },
  },
  // Section 3
  revolution: {
    container: {
      bg: 'paper',
      color: 'text',
      py: 5,
    },
  },

  // Components
  opportunityList: {
    flexDirection: ['column', 'column', 'row'],
    my: 4,
  },
  opportunityItem: {
    my: [3, 3, 1],
  },
  imageContainer: {
    bg: 'white',
    borderRadius: 9999,
    boxShadow: 0,
    maxWidth: 140,
    mb: 3,
    p: 1,
  },
  featureCardList: {
    flexDirection: ['column', 'column', 'row'],
    flexWrap: 'wrap',
  },
  featureCard: {
    container: {
      width: ['100%', '100%', '33.3333333%'],
      p: 3,
    },
  },
  featuredAdventure: {
    container: {
      p: 3,
    },
  },
  featured: {
    container: {
      flexDirection: ['column', 'column', 'row'],
      py: 4,
      px: [2, 2, 4],
    },
    left: {
      flex: 1,
      order: 1,
    },
    right: {
      flex: 1,
      order: 2,
    },
  },
};

const Showcase = props => {
  return (
    <Atom.Flex flex={1} sx={styles.showcase.container}>
      <Atom.Flex center column sx={styles.showcase.left}>
        <Atom.Box sx={{p: [3, 3, 6]}}>
          <Atom.Span sm thin>
            OUR MISSION
          </Atom.Span>
          <Atom.Heading xxl heavy sx={{mt: 0}}>
            <Atom.Span heavy>1 Million Developers</Atom.Span>{' '}
          </Atom.Heading>
          <Atom.Paragraph>
            Around the world, Ethereum developers are ushering in radical change
            one keystroke at a time.
          </Atom.Paragraph>
          <Atom.Span tag>Join The Developers</Atom.Span>
        </Atom.Box>
      </Atom.Flex>

      <Atom.Flex center column sx={styles.showcase.right}>
        <Atom.BackgroundImage
          opacity={0.86}
          ratio={0.35}
          sx={styles.bgImage}
          src="https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg"
        />

        <Atom.Box card sx={{textAlign: 'center'}}>
          <Atom.Heading xxl>Monthly Newsletter</Atom.Heading>
          <Atom.Paragraph>
            Get the latest on Ethereum health and updates.
          </Atom.Paragraph>
          <FormRegistration />
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const DeveloperPitch = props => {
  return (
    <>
      <Atom.Box sx={{bg: 'blue', p: [4, 4, 6], color: 'white'}}>
        <Atom.Container sx={styles.pitch.container}>
          <Atom.Box textCenter>
            <Atom.Heading xxl heavy center>
              Discover Your "A-Ha" Moment
            </Atom.Heading>
            <Atom.Paragraph>
              You already have the skills necessary to be a great asset to the
              “history of the future.” Many of the coding skills you use daily
              are directly transferable to what we do. Web3 merely puts a whole
              new arsenal of developer tools at your disposal.
            </Atom.Paragraph>

            <Atom.Paragraph>
              The best time to plant a tree was 20 years ago, the second best
              time is now. The protocols are aligned, the dev tools are built,
              and teams are ramping up hiring. When we look back on today,
              you’ll still be able to say you planted one of the first trees in
              the new landscape of Web 3.0.
            </Atom.Paragraph>

            <Atom.Paragraph>
              There are other platforms floating around in the blockchain
              ecosystem competing for your attention; but let’s be real.
              Ethereum remains the gold standard for smart contracts and
              decentralized apps. With a vast and engaged developer community,
              the largest user base, and the most exciting tools and
              applications at your disposal, Ethereum is the logical choice for
              contributing to the Web 3.0 movement.
            </Atom.Paragraph>
          </Atom.Box>
        </Atom.Container>
      </Atom.Box>

      <DeveloperOpportunity />

      {/* <PlatformList /> */}
    </>
  );
};

const PlatformList = props => {
  return (
    <Atom.Container>
      <Atom.Flex column sx={{flex: 1, py: 4}}>
        <CardLarge
          sx={styles.featuredAdventure.container}
          title="Qitcoin Quests"
          image="https://everipedia-storage.s3.amazonaws.com/ProfilePics/gitcoin__26162.jpeg"
          subtitle="Learn about the Blockchain"
          summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
          label="Learn"
        />
        <CardLarge
          sx={styles.featuredAdventure.container}
          title="Rapid Adventure"
          image="https://pbs.twimg.com/profile_images/1195184664190709761/XOy6nDiE_400x400.jpg"
          subtitle="Experience the Blockchain"
          summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
          label="Learn"
        />
        <CardLarge
          sx={styles.featuredAdventure.container}
          title="Ethereum Studio"
          image="https://pbs.twimg.com/profile_images/1141255736984555520/ugyT8HP-.png"
          subtitle="Build with the Blockchain"
          summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
          label="Learn"
        />
      </Atom.Flex>
    </Atom.Container>
  );
};

/* --- Component --- */
const DeveloperOpportunity = props => {
  return (
    <Atom.Box sx={{py: 4}}>
      <Atom.Container>
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading mega>
            Tremendous
            <br /> Growth Opportunity
          </Atom.Heading>
          <Atom.Paragraph md>
            Find your perfect place to start and make an impact today on the
            future of Web3.0 tomorrow.
          </Atom.Paragraph>
        </Atom.Box>

        <Atom.Flex between sx={styles.opportunityList}>
          <DeveloperOpportunityItem
            title="Learn"
            subtitle="Get to know what makes blockchain special"
            image="https://image.flaticon.com/icons/svg/1574/1574033.svg"
            to="/build"
          />
          <DeveloperOpportunityItem
            title="Experience"
            subtitle="Start interacting with the blockchain."
            image="https://image.flaticon.com/icons/svg/1574/1574033.svg"
            to="/build"
          />
          <DeveloperOpportunityItem
            title="Build"
            subtitle="Contribute to the growth of blockchain."
            image="https://image.flaticon.com/icons/svg/1574/1574033.svg"
            to="/build"
          />
        </Atom.Flex>
      </Atom.Container>
      <Atom.Container>
        <Atom.Flex alignCenter>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Heading mega>
              Become Part
              <br />
              of the Story
            </Atom.Heading>
            <Atom.Paragraph>
              Aliquam malesuada tortor libero, laoreet fermentum nunc cursus
              quis. Sed non ex tellus. Cras ullamcorper aliquam turpis sit amet
              ultrices. Aliquam consequat, ligula eget consequat posuere, augue
              tellus aliquam purus, quis volutpat dolor lorem sit amet magna.
              Etiam ut blandit augue. Pellentesque laoreet mollis purus, id
              dapibus ex semper sed. Quisque facilisis et nunc id laoreet.
            </Atom.Paragraph>
            <Atom.Paragraph>
              Quis volutpat dolor lorem sit amet magna. Etiam ut blandit augue.
              Pellentesque laoreet mollis purus, id dapibus ex semper sed.
              Quisque facilisis et nunc id laoreet.
            </Atom.Paragraph>
          </Atom.Box>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <FormRegistrationFull />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const DeveloperOpportunityItem = props => {
  return (
    <Atom.Flex center column sx={styles.opportunityItem}>
      <Atom.Span sx={styles.imageContainer}>
        <Atom.Image src={props.image} />
      </Atom.Span>
      <Atom.Heading xl md>
        {props.title}
      </Atom.Heading>
      <Atom.Span>{props.subtitle}</Atom.Span>
      <Molecule.Link to={props.to}>
        <Atom.Span tag>Start</Atom.Span>
      </Molecule.Link>
    </Atom.Flex>
  );
};

const InternetRevolution = props => {
  return (
    <Atom.Flex column sx={styles.revolution.container}>
      <Atom.Container>
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading xxl thin>
            Take Part In
          </Atom.Heading>
          <Atom.Heading giga>The Next Internet Revolution</Atom.Heading>
        </Atom.Box>
        <EthereumFeatures />
      </Atom.Container>
      <Atom.Container sx={{mt: 5}}>
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading xxl>Getting Started</Atom.Heading>
          <Atom.Span tag>
            Ethereum is Powering the Decentralized Future
          </Atom.Span>
        </Atom.Box>
        <Web2Developers />
        <Web3Developers />
      </Atom.Container>
    </Atom.Flex>
  );
};

const EthereumFeatures = props => {
  return (
    <Atom.Flex sx={styles.featureCardList}>
      <Card
        sx={styles.featureCard.container}
        title="Finance"
        subtitle="Peer-to-Peer Transactions"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
        to="decentralized/finance"
      />
      <Card
        sx={styles.featureCard.container}
        title="Identity"
        subtitle="Control Your Digital Self"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
        to="decentralized/identity"
      />
      <Card
        sx={styles.featureCard.container}
        title="Computing"
        subtitle="Global API Utilies"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
        to="decentralized/computing"
      />
      <Card
        sx={styles.featureCard.container}
        title="Banking"
        subtitle="Decentralized Finance Tools"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
        to="decentralized/banking"
      />
      <Card
        sx={styles.featureCard.container}
        title="Jobs"
        subtitle="Connect to the Gig/Bounty Network"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
        to="decentralized/jobs"
      />
    </Atom.Flex>
  );
};

const Web2Developers = props => {
  return (
    <Atom.Flex alignCenter sx={styles.featured.container}>
      <Atom.Flex sx={styles.featured.left}>
        <Atom.Image src="https://imgur.com/2p26zqU.png" />
      </Atom.Flex>
      <Atom.Flex column sx={styles.featured.right}>
        <Atom.Heading xxl>What Is a Web 2 Developer?</Atom.Heading>
        <Atom.Paragraph>
          If you're visiting this site, you may be a Web 2.0 Developer! Prior to
          the advent of Web 2.0, the internet was comprised of static landing
          pages, basic tools, and protocols with limited functionality.
        </Atom.Paragraph>
        <Atom.Paragraph>
          Web 2.0 saw the addition of more interactive content, such as web
          apps, user-generated content, social media networking, and cloud
          storage. Under this domain, people are the product and data is the
          price. Most developers today are fluent in the language of Web 2.0.
        </Atom.Paragraph>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const Web3Developers = props => {
  return (
    <Atom.Flex alignCenter sx={styles.featured.container}>
      <Atom.Flex sx={styles.featured.right}>
        <Atom.Image src="https://imgur.com/2p26zqU.png" />
      </Atom.Flex>
      <Atom.Flex column sx={styles.featured.left}>
        <Atom.Heading xxl>What Is a Web 3 Developer?</Atom.Heading>
        <Atom.Paragraph>
          A Web 3.0 developer is a Web 2.0 developer with an arsenal of
          additional tools at his/her disposal. Web 3.0 is an internet where
          devices are connected in decentralized networks rather than depending
          on server-based data. In Web 3.0, you own your own data, your own
          digital identity, and your own digital assets.
        </Atom.Paragraph>
        <Atom.Paragraph>
          You are not reliant on single servers or institutions to tell you
          about the truth of the world or the current state of the system. In
          Web 3.0, Digital assets can be scarce, have value, and be transferred
          as easily as data.
        </Atom.Paragraph>
      </Atom.Flex>
    </Atom.Flex>
  );
};
