const request = require('request');

var geocodeAddress = (address) =>{
   return new Promise( (resolve, reject) =>{
    var encodedAddress = encodeURIComponent(address);     
    console.log(encodedAddress);   

    request({url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true },
        (error, response, body)=>{

        console.log(body.status); 
        if(error){
            reject('Unable to connect to Google servers.');
        }else if (body.status === 'ZERO_RESULTS'){
            reject('Unable to find that address.');
        }else if (body.status === 'OVER_QUERY_LIMIT'){
            reject('You exceeded query allowed query limit.');
        }else if (body.status === 'OK'){       
            resolve( {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            });
        } 
    });

   });
};


geocodeAddress('19146').then((location)=>{
   console.log(JSON.stringify(location, undefined, 2));
}).catch(e =>{
    console.log(e);
});