import {ResourceCard} from '@components/experiments';
import {Tab, Tabs} from '@blueprintjs/core';
import styles from './styles';
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

const Showcase = props => {
  return (
    <Atom.Flex flex={1} sx={styles.showcase.container}>
      <Atom.Flex center column sx={{flex: 1}}>
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
      <Tabs id="TabsExample" selectedTabId="beginner">
        <Tab id="beginner" title="Beginner" panel={<BeginnerInformation />} />
        <Tab
          id="intermediate"
          title="Intermediate"
          panel={<IntermediateInformation />}
        />
        <Tab id="advanced" title="Advanced" panel={<AdvancedInformation />} />
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
    link: 'https://ethereum.org/beginners/',
    image: 'https://imgur.com/7a9ussp.png',
  },
];
const listIntermediate = [
  {
    title: 'Ethereum Foundation',
    subtitle: 'Insert Learning Resource Tagline',
    summary:
      'Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus.',
    link: 'https://ethereum.org/beginners/',
    image: 'https://imgur.com/7a9ussp.png',
  },
];
const listAdvanced = [
  {
    title: 'Ethereum Foundation',
    subtitle: 'Insert Learning Resource Tagline',
    summary:
      'Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus.',
    link: 'https://ethereum.org/beginners/',
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
