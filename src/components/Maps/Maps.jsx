import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Maps.css';

class Maps extends Component {

    updateMap = () => {
        var infowindow = new window.google.maps.InfoWindow({
        });
        this.props.airports.forEach(airport => {
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(airport.lat, airport.lng),
                map: this.map,
            });
            window.google.maps.event.addListener(marker, 'mouseover', function() {
                infowindow.setContent(airport.code)
                infowindow.open(this.map, marker)
            })
        })
    }
    
    componentDidUpdate() {
        this.updateMap();
    }
    
    componentDidMount() {
        var mapOptions = {
            zoom: 4,
            center: new window.google.maps.LatLng(37.168444, -34.048549)
        };
        this.map = new window.google.maps.Map(this.mapDiv, mapOptions);
        this.updateMap();
    }

    render() {
        return (
            <div>
                <div>
                    <Link to='/homepage' className='backLink'>Back</Link>
                </div>
                <div className='map' ref={map => this.mapDiv = map} ></div>
            </div>
        );
    }
}

export default Maps;