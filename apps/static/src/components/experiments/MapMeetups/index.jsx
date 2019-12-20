import {MeetupMap} from '@components/maps';

const Component = props => {
  return (
    <MeetupMap
      markers={events}
      zoom={props.zoom}
      center={{lat: 40.015, lng: -105.2705}}
    />
  );
};

export default Component;

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
