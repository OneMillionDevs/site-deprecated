/**
 * @name RegionTop
 * @description Default top region for application.
 */
/* --- Global --- */
import {Icon, Intent} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {ColorMode} from '@components/common';
import {Popover} from '@horizin/design-system-molecules';
export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Molecule.Link to="/">
          <Atom.Heading sx={{mr: 3, mb: 0}}>{GLOBAL.siteName}</Atom.Heading>
        </Molecule.Link>
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <AnalyticsPopoverButton />
        <CommunityPopoverButton />
        <PartnershipsPopoverButton />
        <GettingStartedPopoverButton />
      </Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <LanguageSelection />
      <Atom.Box sx={{mx: 3}}>
        <ColorMode />
      </Atom.Box>
    </Atom.Flex>
  </Atom.Flex>
);

const AnalyticsPopoverButton = props => {
  return (
    <Atom.Box m1>
      <Molecule.Link to="/analytics">
        <Atom.Span>Analytics</Atom.Span>
      </Molecule.Link>
      <Popover content={<AnalyticsPopover />}>
        <PopoverArrow />
      </Popover>
    </Atom.Box>
  );
};
const CommunityPopoverButton = props => {
  return (
    <Atom.Flex alignCenter m2>
      <Molecule.Link to="/community">
        <Atom.Span>Community</Atom.Span>
      </Molecule.Link>
      <Popover content={<CommunityPopover />}>
        <PopoverArrow />
      </Popover>
    </Atom.Flex>
  );
};
const PartnershipsPopoverButton = props => {
  return (
    <>
      <Molecule.Link to="/partnerships">
        <Atom.Span>Partnerships</Atom.Span>
      </Molecule.Link>
      <Popover content={<PartnershipsPopover />}>
        <PopoverArrow />
      </Popover>
    </>
  );
};
const GettingStartedPopoverButton = props => {
  return (
    <Atom.Span sx={{ml: 3}}>
      <Popover content={<GettingStartedPopover />}>
        <Atom.Button m1 sm green>
          Get Started
        </Atom.Button>
      </Popover>
    </Atom.Span>
  );
};
const PopoverArrow = props => {
  return (
    <Atom.Span
      pointer
      sx={{
        bg: 'white',
        boxShadow: 0,
        borderRadius: 6,
        mx: 2,
        p: '3px',
        display: 'inline',
      }}>
      <Icon icon="symbol-triangle-down" iconSize={12} />
    </Atom.Span>
  );
};

/* --- Popover Components --- */

const AnalyticsPopover = props => {
  return (
    <Atom.Box sx={{width: 500, p: 4}}>
      <Atom.Heading xl m0>
        Analytics
      </Atom.Heading>
      <Atom.HorizontalRule sx={{my: 2}} />
      <Atom.Heading>The Blockchain Report</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/reports/blockchain">
        <Atom.Button md sx={{mb: 4}}>
          View Report
        </Atom.Button>
      </Molecule.Link>
      <Atom.Heading>The Developer Report</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/reports/developer">
        <Atom.Button md sx={{mb: 4}}>
          View Report
        </Atom.Button>
      </Molecule.Link>
      <Atom.Heading>The Holistic Report</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/reports/developer">
        <Atom.Button md sx={{mb: 4}}>
          View Report
        </Atom.Button>
      </Molecule.Link>
    </Atom.Box>
  );
};
const CommunityPopover = props => {
  return (
    <Atom.Box sx={{width: 500, p: 4}}>
      <Atom.Heading xl m0>
        Community
      </Atom.Heading>
      <Atom.HorizontalRule sx={{my: 2}} />
      <Atom.Heading>Local Meetups</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/community/meetups">
        <Atom.Button md sx={{mb: 4}}>
          Find Meetups
        </Atom.Button>
      </Molecule.Link>
      <Atom.Heading>Hackathons</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/community/hackathons">
        <Atom.Button md sx={{mb: 4}}>
          Find Hackathons
        </Atom.Button>
      </Molecule.Link>
      <Atom.Heading>Grant Opportunities</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/community/grants">
        <Atom.Button md sx={{mb: 4}}>
          Find Grants
        </Atom.Button>
      </Molecule.Link>
    </Atom.Box>
  );
};
const PartnershipsPopover = props => {
  return (
    <Atom.Box sx={{width: 500, p: 4}}>
      <Atom.Heading xl m0>
        Partnerships
      </Atom.Heading>
      <Atom.HorizontalRule sx={{my: 2}} />
      <Atom.Heading>Community Organizers</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/partnerships/community">
        <Atom.Button md sx={{mb: 4}}>
          Get Free Training
        </Atom.Button>
      </Molecule.Link>
      <Atom.Heading>Coalition</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/partnerships/coalition">
        <Atom.Button md sx={{mb: 4}}>
          Join Coalition
        </Atom.Button>
      </Molecule.Link>
      <Atom.Heading>Stewards</Atom.Heading>
      <Atom.Paragraph>
        Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
        nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
      </Atom.Paragraph>
      <Molecule.Link to="/partnerships/stewards">
        <Atom.Button md sx={{mb: 4}}>
          Learn More
        </Atom.Button>
      </Molecule.Link>
    </Atom.Box>
  );
};
const GettingStartedPopover = props => {
  return (
    <Atom.Box sx={{width: 500, p: 4}}>
      <Atom.Flex alignCenter between>
        <Atom.Heading xl m0>
          Get Started
        </Atom.Heading>
        <Molecule.Link to="/start/contribute">
          <Atom.Span tag sm sx={{}}>
            Contribute
          </Atom.Span>
        </Molecule.Link>
      </Atom.Flex>
      <Atom.HorizontalRule sx={{my: 2, mb: 4}} />
      <Atom.Flex column>
        <Atom.Heading>Learn </Atom.Heading>
        <Atom.Paragraph>
          Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
          nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
        </Atom.Paragraph>
        <Molecule.Link to="/start/learn">
          <Atom.Button md sx={{mb: 4}}>
            Learn
          </Atom.Button>
        </Molecule.Link>
        <Atom.Heading>Experience </Atom.Heading>
        <Atom.Paragraph>
          Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
          nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
        </Atom.Paragraph>
        <Molecule.Link to="/start/experience">
          <Atom.Button md sx={{mb: 4}}>
            Experience
          </Atom.Button>
        </Molecule.Link>

        <Atom.Heading>Build</Atom.Heading>
        <Atom.Paragraph>
          Nunc vel orci a ex blandit vulputate gravida a ligula. Donec posuere,
          nunc eget ullamcorper hendrerit, orci lacus efficitur elit.
        </Atom.Paragraph>
        <Molecule.Link to="/start/build">
          <Atom.Button md sx={{mb: 4}}>
            Build
          </Atom.Button>
        </Molecule.Link>
      </Atom.Flex>
    </Atom.Box>
  );
};

const LanguageSelection = props => {
  return (
    <Atom.Flex>
      <Atom.Span sm heavy m1>
        <strong>English</strong>
      </Atom.Span>
      <Atom.Span sm m1>
        Spanish
      </Atom.Span>
      <Atom.Span sm m1>
        Chinese
      </Atom.Span>
    </Atom.Flex>
  );
};
