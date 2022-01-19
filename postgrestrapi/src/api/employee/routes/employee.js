'use strict';

/**
 * employee router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::employee.employee');

// module.exports = {
//     routes: [
//         { // Path defined with a URL parameter
//           method: 'GET',
//           path: '/api/employees',
//           handler: 'employees.index',
//           config:{
//               "policies":[]
//           }
//         }, 
      
//       ]
//     }
    