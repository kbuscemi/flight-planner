import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './GoogleMaps.css'

let airports = [ 

    { lat: 40.6413111, //JFK
      lng: -73.77813909999999,
      code: 'JFK'
    },

    { lat: 28.4418, //MCO
      lng: -81.3115
    },

    { lat: 41.7875, //MDW
      lng: -87.7416
    },

    { lat: 25.7953, //mia
      lng: -80.2727
    },

    { lat: 35.047, //MEM
      lng: -89.9823
    },

    { lat: 40.6514, //ATL
      lng: -84.4333
    },

    { lat: 61.1767, //ANC
      lng: -149.961

    },

    { lat: 30.2027, //AUS
      lng: -97.6653
    },

    { lat: 42.3717, //BOS
      lng: -71.0281
    },

    { lat: 39.8396, //DEN
      lng: -104.672
    },

    { lat: 29.9784, //IAH
      lng: -95.3424
    },

    { lat: 36.0806, //LAS
      lng: -115.143
    },

    { lat: 33.9456, //LAX
      lng: -118.391
    },
    
]


class Maps extends Component {
    componentDidMount() {
        
        var infowindow = new window.google.maps.InfoWindow();
        var content = airports.code
        
        
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
            // console.log(airports)
            window.google.maps.event.addListener(marker, 'mouseover', function() {
                infowindow.setContent(content)
                infowindow.open(this.map, marker)
            })

            
    })


          // marker.setMap(this.map);
    }
    
    render() {
        return (
            <div>
                <div>
                    <Link to="/homepage">Back</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="planner">Flight Planner</Link>
                </div>
                <div className='map' ref={map => this.mapDiv = map}></div>
            </div>
        );
    }
}

export default Maps;