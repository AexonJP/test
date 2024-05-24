const modal = require('./inference.js');

async function jalan(){

//const ok = await modal.loadModel();
//modal.predict(ok. buffer);
//console.log(ok);
const request = require('request');

let url = 'https://storage.googleapis.com/aexon/non-cancer-2.png';
request({ url, encoding: null }, async function(err, resp, buffer) {
     // Use the buffer
     // buffer contains the image data
     // typeof buffer === 'object'
     console.log('disini');
     const model = await modal.loadModel();
     //console.log(typeof(model));
     const oke = await modal.predict(model, buffer);
     console.log(oke);
});


};

jalan();

