// Title: Routes
// Decription: Application routes
// Author: Imtiajul Islam
// Date: 02/10/2023

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler');


//module scaffolding

const routes = {
   'sample': sampleHandler,
}

module.exports = routes;