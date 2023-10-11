// Title: Sample Hanlder
// Decription: Sample Hanlder
// Author: Imtiajul Islam
// Date: 02/10/2023

// module scaffolding
const routeHandlerSample ={};

routeHandlerSample.sampleHandler = (requestProperties, callback) => {
   console.log(requestProperties);
   callback(200, {
      message: 'This is sample url.'
   })
   console.log('Sample Handler');
}

module.exports = routeHandlerSample;