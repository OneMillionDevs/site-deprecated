import {CardLarge} from '@components/experiments';
import {FormRegistration, FormRegistrationFull} from '@components/forms';
/* --- Component --- */
const Page = props => {
  return (
    <Atom.Flex column>
      <Showcase />
      <ReportingCategories />
      <PartnershipCallToAction />
      <CommunityOrganizers />
      {/* <Featured /> */}
    </Atom.Flex>
  );
};
export default Page;

const styles = {
  // Section 1
  showcase: {
    container: {
      // bg: 'blue',
      // color: 'white',
      // minHeight: '40vh',
      py: 6,
    },
    left: {
      flex: 5,
      p: 4,
      py: 5,
    },
    right: {
      boxShadow: 'insetLeftHeavy',
      gradient: 'blue',
      borderRadius: '0 0 0 40px',
      py: 50,
      flex: 3,
      p: 4,
      zIndex: 1000,
    },
  },

  reportCategory: {
    flex: 1,
    // minHeight: '50vh',
    py: 6,
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
        // src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      />
      <Atom.Flex column sx={{flex: 1}}>
        <Atom.Container>
          <Atom.Flex>
            <Atom.Box sx={{flex: 1}}>
              <Atom.Heading giga heavy sx={{mt: 0}}>
                <Atom.Span heavy>Partnerships</Atom.Span>
              </Atom.Heading>
              <Atom.Paragraph lg>
                An Ecosystem Wide Initiative to Parabolic Developer Growth
              </Atom.Paragraph>
              <Atom.Paragraph>
                Praesent id rhoncus metus, mattis auctor neque. Quisque molestie
                euismod tortor, quis consequat quam faucibus sit amet. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                pellentesque augue sed augue elementum, at aliquam sapien
                pulvinar.
              </Atom.Paragraph>
            </Atom.Box>
            <Atom.Box sx={{flex: 1}}></Atom.Box>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const splitStyles = {
  left: {
    flex: 1,
    color: 'white',
    flexDirection: ['column', 'column', 'row'],
  },
  right: {
    mx: 4,
    px: 5,
    top: -100,
    ...styles.reportCategory,
  },
  bgImage: {
    zIndex: 0,
    opacity: 0.5,
    overflow: 'hidden',
  },
  bgImageContainer: {
    bg: 'blue',
    borderRadius: 50,
    m: 3,
  },
  bgImageSecond: {
    borderRadius: 50,
    bg: 'blue',
    zIndex: 0,
    opacity: 0.21,
    overflow: 'hidden',
  },
  bgImageContainerSecond: {
    bg: 'blue',
    boxShadow: 2,
    borderRadius: 50,
  },
};

const ReportingCategories = props => {
  return (
    <Atom.Box sx={{px: 6}}>
      <Atom.Flex sx={splitStyles.left}>
        <Atom.Flex center column sx={styles.reportCategory}>
          <Atom.BackgroundImage
            opacity={0.86}
            ratio={0.35}
            sx={splitStyles.bgImage}
            sxContainer={splitStyles.bgImageContainer}
            src="https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <Atom.Flex center column sx={{flex: 1}}>
            <Atom.Heading giga heavy sx={{mt: 0}}>
              <Atom.Span heavy>Stewards</Atom.Span>
            </Atom.Heading>
            <Atom.Heading sm>
              Helping usher in the next wave of blockchain developers.
            </Atom.Heading>
          </Atom.Flex>
        </Atom.Flex>

        <Atom.Flex center column sx={splitStyles.right}>
          <Atom.BackgroundImage
            opacity={0.86}
            ratio={0.35}
            sx={splitStyles.bgImageSecond}
            sxContainer={splitStyles.bgImageContainerSecond}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <Atom.Box card sx={{width: '80%', p: 4}}>
            <Atom.Heading xxl>Powering Developer Growth</Atom.Heading>
            <Atom.Paragraph>
              Stewards manage the day-to-day operations of ensuring the Ethereum
              blockchain reaches important targets.
            </Atom.Paragraph>
            <FormRegistrationFull />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
  );
};

const PartnershipCallToAction = props => {
  return (
    <Atom.Box sx={{px: 6}}>
      <Atom.Flex
        sx={{
          flex: 1,
          color: 'white',
          flexDirection: ['column', 'column', 'row'],
        }}>
        <Atom.Flex center column sx={styles.reportCategory}>
          <Atom.BackgroundImage
            opacity={0.86}
            ratio={0.35}
            sx={{
              borderRadius: 50,
              m: 3,
              bg: 'blue',
              zIndex: 0,
              opacity: 1,
              overflow: 'hidden',
            }}
            // src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80"
          />
          <Atom.Flex center column sx={{flex: 1}}>
            <FormRegistrationFull />
          </Atom.Flex>
        </Atom.Flex>

        <Atom.Flex center column sx={{top: -100, ...styles.reportCategory}}>
          <Atom.BackgroundImage
            opacity={0.86}
            ratio={0.35}
            sx={{
              zIndex: 0,
              opacity: 0.5,
              overflow: 'hidden',
            }}
            sxContainer={{
              bg: 'blue',
              borderRadius: 50,
              m: 3,
            }}
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1416&q=80"
          />
          <Atom.Flex center column sx={{flex: 1}}>
            <Atom.Heading giga heavy sx={{mt: 0}}>
              <Atom.Span heavy>Coalition</Atom.Span>
            </Atom.Heading>
            <Atom.Heading sm>Bringing Ethereum to Life</Atom.Heading>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
  );
};

const CommunityOrganizers = props => {
  return (
    <Atom.Box sx={{px: 6}}>
      <Atom.Flex
        sx={{
          flex: 1,
          color: 'white',
          flexDirection: ['column', 'column', 'row'],
        }}>
        <Atom.Flex center column sx={{...styles.reportCategory}}>
          <Atom.BackgroundImage
            opacity={0.86}
            ratio={0.35}
            sx={{
              zIndex: 0,
              opacity: 0.5,
              overflow: 'hidden',
            }}
            sxContainer={{
              bg: 'blue',
              borderRadius: 50,
              m: 3,
            }}
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          />
          <Atom.Flex center column sx={{flex: 1}}>
            <Atom.Heading giga heavy sx={{mt: 0}}>
              <Atom.Span heavy>Organizers</Atom.Span>
            </Atom.Heading>
            <Atom.Heading sm>
              Building the real world connections and relationships.
            </Atom.Heading>
          </Atom.Flex>
        </Atom.Flex>

        <Atom.Flex center column sx={{top: -100, ...styles.reportCategory}}>
          <Atom.BackgroundImage
            opacity={0.86}
            ratio={0.35}
            sx={{
              borderRadius: 50,
              m: 3,
              bg: 'blue',
              zIndex: 0,
              opacity: 1,
              overflow: 'hidden',
            }}
            // src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <Atom.Flex center column sx={{flex: 1}}>
            <Atom.Box sx={{width: '100%'}}>
              <FormRegistrationFull />
            </Atom.Box>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
  );
};

const Featured = props => {
  return (
    <Atom.Box sx={{my: 5}}>
      <Atom.Container>
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading giga heavy>
            Ethereum Reports
          </Atom.Heading>
          <Atom.Paragraph lg>
            Find the reports that interest you!
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
        title="Altheio Report"
        subtitle="Blockchain Data and Analytics"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
        to="decentralized/finance"
      />
      <CardLarge
        sx={styles.featureCard.container}
        title="Community Growth"
        subtitle="Tracking Meetups and IRL Events"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
      />
      <CardLarge
        sx={styles.featureCard.container}
        title="Developer Research Report"
        subtitle="Github Repo Growth and Developer Onboarding"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
      />
      <CardLarge
        sx={styles.featureCard.container}
        title="Job Availability and Growth"
        subtitle="Number of Ecosystem Jobs and Opporunities"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
      />
    </Atom.Flex>
  );
};
