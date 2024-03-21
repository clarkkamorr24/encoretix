This is the Encoretrix app.

To execute this app, follow these steps:

Clone the app by running the following command in your terminal: git clone https://github.com/clarkkamorr24/encoretix.git

Install the dependencies using the command: npm install

Finally, run the app on an Android device with the command: npm run android, or on an iOS device with the command: npm run ios

Please note: The upcoming events feature relies on static data due to the format of the returned data from the API. It cannot be made dynamic due to the structure of the returned values.

here is the sample response/image returned from the API

{
  "name": "Dave Matthews Band",
  "type": "attraction",
  "id": "K8vZ91713NV",
  "test": false,
  "url": "https://www.ticketmaster.com/dave-matthews-band-tickets/artist/746531",
  "locale": "en-us",
  "externalLinks": {},
  "aliases": [],
  "images": [],
  "classifications": [],
  "upcomingEvents": {
    "mfx-cz": 1,
    "mfx-dk": 1,
    "ticketnet": 1,
    "mfx-se": 1,
    "mfx-be": 1,
    "tmr": 2,
    "mfx-nl": 1,
    "mfx-es": 1,
    "ticketmaster": 43,
    "mfx-no": 1,
    "mfx-de": 3,
    "_total": 56,
    "_filtered": 0
  },
  "_links": {
  "self": {
  "href": "/discovery/v2/attractions/K8vZ91713NV?locale=en-us"
  }
  }
},

![Uploading image.png…]()
