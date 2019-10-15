// Google Maps Component ------
// Wraps the google maps API

import React, {Component} from 'react';

class GoogleMaps extends Component {
    constructor() {
        super();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        this._setOptions(
            nextProps.lat,
            nextProps.lng,
            nextProps.zoom
        );
    }

    componentDidMount() {
        this._renderMap();
    }

    _setOptions(lat, lng, zoom) {
        let mapOptions = {
            center: { lat, lng },
            zoom
        };
        console.log(mapOptions);

        this._map.setOptions(mapOptions);
    }

    _renderMap() {
        let mapOptions= {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: this.props.zoom
        };
        this._map = new google.maps.Map(this._map, mapOptions);
    }

    render() {
        return (
            <div id="map" ref={m => this._map = m} />
        );
    }
}

// Application component ----

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            lat: -34.397,
            lng: 150.644,
            zoom: 8
        };
        this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _handleFormSubmit(e) {
        e.preventDefault();
        if (this._lat.value.length > 0)
            this.setState({ lat: parseFloat(this._lat.value) });
        if (this._lng.value.length > 0)
            this.setState({ lng: parseFloat(this._lng.value) });
        if (this._zoom.value.length > 0)
            this.setState({ zoom: parseInt(this._zoom.value) });
    }

    render() {
        return (
            <div>
                <h1>Google Maps in React JS</h1>
                <form>
                    <div>
                        <label>Lat</label>
                        <input type="number"
                               name="lat"
                               defaultValue={this.state.lat}
                               ref={i => this._lat = i} />
                        <label>Lng</label>
                        <input type="number"
                               name="lng"
                               defaultValue={this.state.lng}
                               ref={i => this._lng = i} />
                        <label>Zoom</label>
                        <input type="number"
                               name="zoom"
                               defaultValue={this.state.zoom}
                               ref={i => this._zoom = i} />
                    </div>
                    <button onClick={this._handleFormSubmit}>Submit</button>
                </form>
                <GoogleMaps
                    lat={this.state.lat}
                    lng={this.state.lng}
                    zoom={this.state.zoom} />
            </div>
        );
    }
}

export default Map;