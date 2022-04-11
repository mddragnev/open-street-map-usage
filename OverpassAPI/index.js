const overpass = require('query-overpass');


// Information about Sofia, Bulgaria
overpass('area[name="София"];(node[place="city"](area););out;', (error, data) => {
    console.log(data.features[0]);
});

// Information about bars in Sofia
// overpass('area[name="София"];(node[amenity="bar"](area););out;', (error, data) => {
//     console.log(data.features[0]);
// });