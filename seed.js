const Airport = require('./models/airport')

require('dotenv').config();
require('./config/database');

  let airports = [

        {   lat: 40.6413111, //JFK
            lng: -73.77813909999999,
            code: 'JFK (lat: 40.64 lng:-73.77)'
          },
      
          { lat: 28.4418, //MCO
            lng: -81.3115,
            code: 'MCO (lat: 28.44 lng: -81.31)'
          },
      
          { lat: 41.7875, //MDW
            lng: -87.7416,
            code: 'MDW (lat: 41.75 lng: -87.74)'
          },
      
          { lat: 25.7953, //mia
            lng: -80.2727,
            code: 'MIA (lat: 25.78 lng: -80.27)'
          },
      
          { lat: 35.047, //MEM
            lng: -89.9823,
            code: 'MEM (lat: 35.04 lng: -89.98)'
          },
      
          { lat: 40.6514, //ATL
            lng: -84.4333,
            code: 'ATL (lat: 40.65 lng: -84.43)'
          },
      
          { lat: 61.1767, //ANC
            lng: -149.961,
            code: 'ANC (lat: 61.17 lng: -149.96)'
      
          },
      
          { lat: 30.2027, //AUS
            lng: -97.6653,
            code: 'AUS (lat: 30.20 lng: -97.66)'
          },
      
          { lat: 42.3717, //BOS
            lng: -71.0281,
            code: 'BOS (lat: 42.37 lng: -71.02)'
          },
      
          { lat: 39.8396, //DEN
            lng: -104.672,
            code: 'DEN (lat: 39.83 lng: -104.67)'
          },
      
          { lat: 29.9784, //IAH
            lng: -95.3424,
            code: 'IAH (lat: 29.97 lng: -95.34)'
          },
      
          { lat: 36.0806, //LAS
            lng: -115.143,
            code: 'LAS (lat: 36.97 lng: -115.143)'
          },
      
          { lat: 33.9456, //LAX
            lng: -118.391,
            code: 'LAX (lat: 33.94 lng: -118.39)'
          },
    ]
