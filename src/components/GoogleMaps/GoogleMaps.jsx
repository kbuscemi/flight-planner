import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {SideNav} from 'react-materialize';
import './GoogleMaps.css';

class Maps extends Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     airports: []
    //   }
    // }

    // airportCode = () => {
    //   this.setState({
    //     airports: airports.code
    //   })
    // }

    componentDidMount() {
      //need to define airports array so can access code inside. info in seed.js
        // let airports = airports
        var infowindow = new window.google.maps.InfoWindow({
          content: airports.code
        });
        
        var mapOptions = {
            zoom: 4,
            center: new window.google.maps.LatLng(37.168444, -34.048549)
        };
        
        this.map = new window.google.maps.Map(this.mapDiv, mapOptions);
        
        airports.forEach(airport => {
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(airport.lat, airport.lng),
                map: this.map,
                title: airport.code

            })
            window.google.maps.event.addListener(marker, 'mouseover', function() {
              infowindow.setContent(airport.code)
              infowindow.open(this.map, marker)
            })
        })
      }
    render() {
        return (
            <div>
                <div>
                <Link to='/homepage'>Back</Link>
                </div>
                <div className='map' ref={map => this.mapDiv = map} ></div>
            </div>
        );
    }
}

export default Maps;