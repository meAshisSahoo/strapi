'use strict';

/**
 * login router.
 */


 
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::login.login');
// module.exports ={ 
//     routes: [
//         { // Path defined with a URL parameter
//           method: 'GET',
//           path: '/logins',
//           handler: 'login.exampleAction',
//         },
//         // { // Path defined with a regular expression
//         //   method: 'GET',
//         //   path: '/restaurants/:region(\\d{2}|\\d{3})/:id', // Only match when the first parameter contains 2 or 3 digits.
//         //   handler: 'Restaurant.findOneByRegion',
//         // }
//       ]
//     }

