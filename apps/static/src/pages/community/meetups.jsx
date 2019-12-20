import {MeetupMap} from '@components/maps';
import FormMeetupSearch from '@forms/FormMeetupSearch';
/* --- Component --- */
const Page = props => {
  return (
    <Atom.Flex column>
      <MeetupMapView />
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
