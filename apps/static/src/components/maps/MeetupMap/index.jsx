import React, {Component, useState} from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.73061,
      lng: -73.935242,
    },
    zoom: 10,
  };

  render() {
    const MarkersList = this.props.markers.map(mrk => (
      <Marker lat={mrk.location.lat} lng={mrk.location.lng} {...mrk} />
    ));

    return (
      <div style={{height: '100%', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyCmPPu3zURkTCzcc7RBhKo7nuaPRjK5nVA'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {MarkersList}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

const styles = {
  marker: {
    maxWidth: 100,
  },
  markerImage: {
    maxWidth: 50,
    width: 50,
  },
};
/* --- Component --- */
const Marker = props => {
  const [open, setOpen] = useState(false);
  return (
    <div lat={40.73061} lng={-73.935242}>
      {!open ? (
        <Atom.Image
          src="https://image.flaticon.com/icons/svg/1574/1574014.svg"
          sx={styles.markerImage}
        />
      ) : (
        <Atom.Box card sx={styles.marker}>
          <Atom.Heading md heavy>
            {props.title}
          </Atom.Heading>
          <Atom.Heading sm>{props.subtitle}</Atom.Heading>
        </Atom.Box>
      )}
    </div>
  );
};
