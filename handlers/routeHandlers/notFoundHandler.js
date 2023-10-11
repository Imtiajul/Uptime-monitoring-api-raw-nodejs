// Title: Not Found Handler
// Decription: Not Found Handler
// Author: Imtiajul Islam
// Date: 02/10/2023

// module scafolding
const routeHandler = {};

routeHandler.notFoundHandler = (requestProperties, callback) => {
   callback(500, {
      message: 'Your requested url does not exist'
   })
   console.log('Not Found Handler');
}

module.exports = routeHandler;