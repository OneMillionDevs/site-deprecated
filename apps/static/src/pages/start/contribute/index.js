import {ResourceCard} from '@components/experiments';
import {Tab, Tabs} from '@blueprintjs/core';
import styles from './styles';

import {FormJoinIndividual} from '@forms';
/* --- Component --- */
const Page = props => {
  return (
    <Atom.Flex column>
      <Showcase />
      <FormPlacholders />
    </Atom.Flex>
  );
};
export default Page;

const Showcase = props => {
  return (
    <Atom.Flex flex={1} sx={styles.showcase.container}>
      <Atom.Flex center column sx={{flex: 1}}>
        <Atom.Heading giga heavy sx={{mt: 0}}>
          <Atom.Span heavy>Contribute</Atom.Span>
        </Atom.Heading>
        <Atom.Paragraph>Contribute to 1 Million Developers</Atom.Paragraph>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const FormPlacholders = props => {
  return (
    <Atom.Container sx={{py: 5}}>
      <Atom.Box>
        <FormJoinIndividual />
      </Atom.Box>
    </Atom.Container>
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
    title: 'Ethereum Developer Portal',
    subtitle: 'Insert Learning Resource Tagline',
    summary:
      'Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus.',
    link: 'https://consensys.net/developers/',
    image: 'https://imgur.com/Krhvd4u.png',
  },
];
const listIntermediate = [
  {
    title: 'Ethereum Developer Portal',
    subtitle: 'Insert Learning Resource Tagline',
    summary:
      'Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus.',
    link: 'https://consensys.net/developers/',
    image: 'https://imgur.com/Krhvd4u.png',
  },
];
const listAdvanced = [
  {
    title: 'Ethereum Developer Portal',
    subtitle: 'Insert Learning Resource Tagline',
    summary:
      'Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus.',
    link: 'https://consensys.net/developers/',
    image: 'https://imgur.com/Krhvd4u.png',
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
