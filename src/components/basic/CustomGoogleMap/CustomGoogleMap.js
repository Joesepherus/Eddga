import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import CustomIcon from '../CustomIcon/CustomIcon'
import { mdiMapMarker } from '@mdi/js'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: this.props.location.lat ? this.props.location.lat : 48.11568,
      lng: this.props.location.lng ? this.props.location.lng : 17.11631,
      zoom: this.props.zoom ? this.props.zoom : 15
    }
  }

  componentDidUpdate(nextProps) {
    console.log(nextProps.location.lat)
    if (
      nextProps.location !== false &&
      (nextProps.location.lat !== this.state.lat ||
        nextProps.location.lng !== this.state.lng)
    ) {
      this.setState({
        lat: nextProps.location.lat,
        lng: nextProps.location.lng
      })
    }
    console.log(this.state)
  }

  render() {
    console.log(this.props.location)
    console.log(this.state)
    let center = {
      lat: parseFloat(this.state.lat),
      lng: parseFloat(this.state.lng)
    }
    console.log(center)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%', marginBottom: 40 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCVQSe4ccRMG2Xr-8xHJlrdhXwzavLYRpY' }}
          center={center}
          defaultZoom={this.state.zoom}
        >
          {/* <AnyReactComponent lat={48.11586} lng={17.11631} text="My Marker" /> */}
          <CustomIcon icon={mdiMapMarker} color="red" size={2} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
