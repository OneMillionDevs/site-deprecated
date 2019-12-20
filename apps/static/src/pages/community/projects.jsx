import {Card, CardLarge} from '@components/experiments';
import {MeetupMap} from '@components/maps';
import FormMeetupSearch from '@forms/FormMeetupSearch';
/* --- Component --- */
const Page = props => {
  return (
    <Atom.Flex column>
      <Showcase />
      <DeveloperOpportunities />
      <DeveloperJobs />
      <Featured />
    </Atom.Flex>
  );
};
export default Page;

const styles = {
  // Section 1
  showcase: {
    container: {
      bg: 'blue',
      color: 'white',
      minHeight: '50vh',
    },
    left: {
      flex: 5,
      p: 4,
      py: 6,
    },
    right: {
      // boxShadow: 'insetLeftHeavy',
      gradient: 'blue',
      borderRadius: '0 0 0 40px',
      py: 50,
      flex: 3,
      p: 4,
      zIndex: 1000,
    },
  },

  // Components
  featureCard: {
    container: {
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
      <Atom.BackgroundImage
        opacity={0.86}
        ratio={0.35}
        sx={{
          zIndex: 0,
          opacity: 0.4,
          overflow: 'hidden',
        }}
        src="https://images.squarespace-cdn.com/content/v1/5ce6c5ea16bcf700010cf4eb/1569085618224-15UT48EN1VTSFWXOHFA0/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/ethereal-ny-home-kevin-owocki.jpg?format=2500w"
      />
      <Atom.Flex center column sx={styles.showcase.left}></Atom.Flex>
      <Atom.Flex center column sx={styles.showcase.right}>
        <Atom.Box card>
          <Atom.Span md thin>
            Connect with the Blockchain Ecosytem
          </Atom.Span>
          <Atom.Heading giga heavy sx={{mt: 0}}>
            <Atom.Span heavy>Community</Atom.Span>
          </Atom.Heading>
          <Atom.Paragraph xs>
            Morbi ut ante tincidunt, dignissim mi at, tempor sapien. Proin
            pharetra nisi est. Mauris pulvinar molestie justo, in suscipit velit
            sollicitudin vitae. Donec nisi tortor, egestas et metus in, ultrices
            convallis dolor. Cras id libero ac velit viverra feugiat. Duis vitae
            diam laoreet, molestie ligula in, elementum libero. Cras ullamcorper
            nec mi vel malesuada.
          </Atom.Paragraph>
          <Atom.Paragraph xs>
            Curabitur quis imperdiet mi. Nam eu mattis mi. Pellentesque ut
            laoreet nibh, fringilla efficitur ex. Vivamus pellentesque, magna ut
            tristique faucibus, nunc leo bibendum sem, ut varius magna velit ut
            risus. Proin pharetra elementum libero vel fermentum. Vivamus et dui
            eget magna auctor viverra. Suspendisse et ligula commodo, aliquet
            tortor vitae, finibus dui. Fusce consequat facilisis gravida.
          </Atom.Paragraph>
          <Atom.Flex>
            <Atom.Span tag m1>
              Join The Developers
            </Atom.Span>
            <Atom.Span tag m1>
              Become A Mentor
            </Atom.Span>
            <Atom.Span tag m1>
              Join Partnership
            </Atom.Span>
          </Atom.Flex>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const meetupStyles = {
  search: {
    bg: 'blue',
    color: 'white',
    p: 3,
  },
  eventListContainer: {
    maxHeight: 500,
    p: 3,
    overflow: 'auto',
  },
};
const MeetupMapView = props => {
  return (
    <>
      <Atom.Flex sx={meetupStyles.search}>
        <Atom.Flex alignCenter between sx={{flex: 1}}>
          <Atom.Box sx={{flex: 2}}>
            <Atom.Heading xxl>Event Search</Atom.Heading>
          </Atom.Box>
          <Atom.Flex
            sx={{
              flex: 5,
              justifyContent: 'flex-end',
              // alignContent: 'flex-end',
              // alignItems: 'flex-end',
              textAlign: 'right',
            }}>
            <FormMeetupSearch />
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Flex>
      <Atom.Flex>
        <Atom.Flex sx={{flex: 7}}>
          <Atom.Box sx={{p: 4, flex: 1}}>
            <Atom.Heading m0 xxl>
              Local Meetups
            </Atom.Heading>
            <Atom.HorizontalRule sx={{my: 2}} />
            <Atom.Box sx={meetupStyles.eventListContainer}>
              {events.map(evt => (
                <EventMeetup {...evt} />
              ))}
            </Atom.Box>
          </Atom.Box>
        </Atom.Flex>
        <Atom.Box sx={{flex: 4}}>
          <MeetupMap markers={events} />
        </Atom.Box>
      </Atom.Flex>
    </>
  );
};

const EventMeetup = props => {
  return (
    <Atom.Flex card sx={{my: 3}}>
      <Atom.Box>
        <Atom.Heading md heavy>
          {props.title}
        </Atom.Heading>
        <Atom.Heading sm thin>
          {props.subtitle}
        </Atom.Heading>
      </Atom.Box>
    </Atom.Flex>
  );
};

const events = [
  {
    title: 'Open Source Bounties/Jobs',
    subtitle: 'Ethereum Developers',
    location: {
      lat: 40.73061,
      lng: -73.935242,
    },
  },
  {
    title: 'Ethereum/Hyperledger Meetup',
    subtitle: 'Hyperledger Developers',
    location: {
      lat: 40.63061,
      lng: -73.935242,
    },
  },
  {
    title: 'Building Web3 Applicaitons',
    subtitle: 'Hyperledger Developers',
    location: {
      lat: 40.67061,
      lng: -73.835242,
    },
  },
  {
    title: 'Ethereum/Hyperledger Meetup',
    subtitle: 'Hyperledger Developers',
    location: {
      lat: 40.63061,
      lng: -73.935242,
    },
  },
  {
    title: 'Building Web3 Applicaitons',
    subtitle: 'Hyperledger Developers',
    location: {
      lat: 40.67061,
      lng: -73.835242,
    },
  },
  {
    title: 'Ethereum/Hyperledger Meetup',
    subtitle: 'Hyperledger Developers',
    location: {
      lat: 40.63061,
      lng: -73.935242,
    },
  },
  {
    title: 'Building Web3 Applicaitons',
    subtitle: 'Hyperledger Developers',
    location: {
      lat: 40.67061,
      lng: -73.835242,
    },
  },
];

const Featured = props => {
  return (
    <Atom.Box sx={{my: 5}}>
      <Atom.Container>
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading giga heavy>
            Find Your Perfect Niche
          </Atom.Heading>
          <Atom.Paragraph lg>
            Explore the many opportunities for contribution to the Ethereum
            ecosystem.
          </Atom.Paragraph>
        </Atom.Box>
        <EthereumFeatures />
      </Atom.Container>
    </Atom.Box>
  );
};

const EthereumFeatures = props => {
  return (
    <Atom.Flex column sx={{flexWrap: 'wrap'}}>
      <CardLarge
        sx={styles.featureCard.container}
        title="Developer Resources"
        subtitle="Get Guidance and Education"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
        to="decentralized/finance"
      />
      <CardLarge
        sx={styles.featureCard.container}
        title="Community Growth"
        subtitle="Plan Outreach and Coordination (Grants Available)"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
      />
      <CardLarge
        sx={styles.featureCard.container}
        title="Partnership Alliance"
        subtitle="Blockchain Growth for Everyone"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
      />
    </Atom.Flex>
  );
};

const DeveloperPitch = props => {
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

const DeveloperOpportunities = props => {
  return (
    <Atom.Container>
      <Atom.Flex alignCenter sx={styles.featured.container}>
        <Atom.Flex sx={styles.featured.left}>
          <Atom.Box
            sx={{
              ml: ['-50%'],
              width: ['150%'],
            }}>
            <Atom.Image src="https://imgur.com/2p26zqU.png" />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex column sx={styles.featured.right}>
          <Atom.Heading xxl>Developer Opportunities</Atom.Heading>
          <Atom.Paragraph>
            New developers. New teams experimenting. New companies that
            understand what the benefit of public/private blockchains are. All
            of this will be critical for the next wave of adoption for everyone.
          </Atom.Paragraph>
          <Atom.Paragraph>
            New developers. New teams experimenting. New companies that
            understand what the benefit of public/private blockchains are. All
            of this will be critical for the next wave of adoption for everyone.
          </Atom.Paragraph>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  );
};

const DeveloperJobs = props => {
  return (
    <Atom.Container>
      <Atom.Flex alignCenter sx={styles.featured.container}>
        <Atom.Flex sx={styles.featured.right}>
          <Atom.Box
            sx={{
              maxWidth: ['150%'],
              width: ['150%'],
            }}>
            <Atom.Image src="https://imgur.com/2p26zqU.png" />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex column sx={styles.featured.left}>
          <Atom.Heading xxl>Open Source Jobs</Atom.Heading>
          <Atom.Paragraph>
            New developers. New teams experimenting. New companies that
            understand what the benefit of public/private blockchains are. All
            of this will be critical for the next wave of adoption for everyone.
          </Atom.Paragraph>
          <Atom.Paragraph>
            New developers. New teams experimenting. New companies that
            understand what the benefit of public/private blockchains are. All
            of this will be critical for the next wave of adoption for everyone.
          </Atom.Paragraph>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
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
