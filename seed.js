const Airport = require('./models/airport')

require('dotenv').config();
require('./config/database');

let airports = [

    {   lat: 40.6413111, 
        lng: -73.77813909999999,
        code: 'JFK (lat: 40.64 lng:-73.77)'
      },
  
      { lat: 28.4418, 
        lng: -81.3115,
        code: 'MCO (lat: 28.44 lng: -81.31)'
      },
  
      { lat: 41.7875,
        lng: -87.7416,
        code: 'MDW (lat: 41.75 lng: -87.74)'
      },
  
      { lat: 25.7953, 
        lng: -80.2727,
        code: 'MIA (lat: 25.78 lng: -80.27)'
      },
  
      { lat: 35.047,
        lng: -89.9823,
        code: 'MEM (lat: 35.04 lng: -89.98)'
      },
  
      { lat: 40.6514, 
        lng: -84.4333,
        code: 'ATL (lat: 40.65 lng: -84.43)'
      },
  
      { lat: 61.1767,
        lng: -149.961,
        code: 'ANC (lat: 61.17 lng: -149.96)'
  
      },
  
      { lat: 30.2027,
        lng: -97.6653,
        code: 'AUS (lat: 30.20 lng: -97.66)'
      },
  
      { lat: 42.3717,
        lng: -71.0281,
        code: 'BOS (lat: 42.37 lng: -71.02)'
      },
  
      { lat: 39.8396,
        lng: -104.672,
        code: 'DEN (lat: 39.83 lng: -104.67)'
      },
  
      { lat: 29.9784,
        lng: -95.3424,
        code: 'IAH (lat: 29.97 lng: -95.34)'
      },
  
      { lat: 36.0806,
        lng: -115.143,
        code: 'LAS (lat: 36.97 lng: -115.143)'
      },
  
      { lat: 33.9456,
        lng: -118.391,
        code: 'LAX (lat: 33.94 lng: -118.39)'
      },

      { lat: 40.0799,
        lng: 116.6031,
        code: 'PEK (lat: 40.79 lng: 116)'
      },

      { lat: 25.2532,
        lng: 55.3657,
        code: 'DXB (lat: 25.25 lng: 55.36)'
      },

      { lat: 35.7719,
        lng: 140.392,
        code: 'NRT (lat: 35.77 lng: 140.39)'
      },

      { lat: 22.3080,
        lng: 113.9185,
        code: 'HKG (lat: 22.30 lng: 113.91)'
      },

      { lat: 51.470020,
        lng: -0.454295,
        code: 'LHR (lat: 51.47 lng: -0.45)'
      },

      { lat: 49.0097,
        lng: 2.5479,
        code: 'CDG (lat: 49.00 lng: 2.54)'
      },

      { lat: 52.3105,
        lng: 4.7683,
        code: 'AMS (lat: 52.31 lng: 4.76)'
      },

      { lat: 52.5588,
        lng: 13.2884,
        code: 'TXL (lat: 52.55 lng: 13.28)'
      },

      { lat: 40.9830,
        lng: 28.8104,
        code: 'IST (lat: 40.98 lng: 28.81)'
      },

      { lat: 1.3644,
        lng: 103.9915,
        code: 'SIN (lat: 1.36 lng: 103.99)'
      },

      { lat: 13.6900,
        lng: 100.7501,
        code: 'BBK (lat: 13.69 lng: 100.75)'
      },

      { lat: 40.4839,
        lng: -3.5680,
        code: 'MAD (lat: 40.48 lng: -3.56)'
      },

      { lat: 19.0896,
        lng: 72.8656,
        code: 'BOM (lat: 19.08 lng: 72.86)'
      },

      { lat: 43.3499,
        lng: 77.0253,
        code: 'ALA (lat:43.34 lng:77.02)'
      }
]

Airport.create(airports)
  .then(function(airport) {
    console.log(airport);
    process.exit();
  })