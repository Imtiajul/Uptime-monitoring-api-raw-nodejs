// Title: Handle Request Response
// Decription: Handle Request Response
// Author: Imtiajul Islam
// Date: 02/10/2023

//dependencies
const { StringDecoder } = require('string_decoder');
const url = require('url');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler');


// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
   // request handling
   // get the url and parse it
   const parsedUrl = url.parse(req.url, true);
   const path = parsedUrl.pathname;
   const trimmedPath = path.replace(/^\/+|\/+$/g, '');
   const queryStringObject = parsedUrl.query;
   const headerObject = req.headers;
   const method = req.method.toLowerCase();

   const requestProperties = {
      parsedUrl,
      path,
      trimmedPath,
      method,
      queryStringObject,
      headerObject,
   };

   const decoder = new StringDecoder('utf-8');
   let realdata = '';

   const choosenRoutes = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

   choosenRoutes(requestProperties, (statusCode, payload) =>{
      statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
      payload = typeof(payload) === 'object' ? payload : {};

      const payLoadString = JSON.stringify(payload);

      //return the final payload

      res.writeHead(statusCode);
      res.end(payLoadString);
   });

   req.on('data', (buffer) => {
      realdata += decoder.write(buffer);
   })

   req.on('end', () => {
      realdata += decoder.end();

      console.log(realdata);
      console.log('Hello Devs');
   })
}

module.exports = handler;