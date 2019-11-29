import {ResourceCard} from '@components/experiments';
import {Tab, Tabs} from '@blueprintjs/core';

/* --- Component --- */
const Page = props => {
  return (
    <Atom.Flex column>
      <Showcase />
      <LearningLevels />
    </Atom.Flex>
  );
};
export default Page;

const styles = {
  // Section 1
  showcase: {
    container: {
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
    minHeight: '50vh',
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
      <Atom.Flex center column sx={{flex: 1}}>
        {/* <GraphAxis width={500} height={500} margin={20} /> */}
        <Atom.Heading giga heavy sx={{mt: 0}}>
          <Atom.Span heavy>Learn</Atom.Span>
        </Atom.Heading>
        <Atom.Paragraph>
          Get started with Ethereum. Learn all of the basics and where to start.
        </Atom.Paragraph>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const LearningLevels = props => {
  return (
    <Atom.Container>
      <Tabs id="TabsExample" selectedTabId="ng">
        <Tab id="ng" title="Beginner" panel={<BeginnerInformation />} />
        <Tab id="rx" title="Intermediate" panel={<IntermediateInformation />} />
        <Tab id="bb" title="Advanced" panel={<AdvancedInformation />} />
        <Tabs.Expander />
        <input className="bp3-input" type="text" placeholder="Search..." />
      </Tabs>
    </Atom.Container>
  );
};

const listBeginner = [
  {
    title: 'Ethereum Foundation',
    subtitle: 'Insert Learning Resource Tagline',
    summary:
      'Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus.',
    label: 'Learn',
    link: 'decentralized/finance',
    image: 'https://imgur.com/7a9ussp.png',
  },
];
const listIntermediate = [
  {
    title: 'Ethereum Foundation',
    subtitle: 'Insert Learning Resource Tagline',
    summary:
      'Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus.',
    label: 'Learn',
    link: 'decentralized/finance',
    image: 'https://imgur.com/7a9ussp.png',
  },
];
const listAdvanced = [
  {
    title: 'Ethereum Foundation',
    subtitle: 'Insert Learning Resource Tagline',
    summary:
      'Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus.',
    label: 'Learn',
    link: 'decentralized/finance',
    image: 'https://imgur.com/7a9ussp.png',
  },
];

const BeginnerInformation = () => (
  <Atom.Container sx={{my: 3}}>
    {listBeginner.map(i => (
      <ResourceCard {...i} sx={{my: 3}} />
    ))}
  </Atom.Container>
);
const IntermediateInformation = () => (
  <Atom.Container sx={{my: 3}}>
    {listIntermediate.map(i => (
      <ResourceCard {...i} sx={{my: 3}} />
    ))}
  </Atom.Container>
);
const AdvancedInformation = () => (
  <Atom.Container sx={{my: 3}}>
    {listAdvanced.map(i => (
      <ResourceCard {...i} sx={{my: 3}} />
    ))}
  </Atom.Container>
);
