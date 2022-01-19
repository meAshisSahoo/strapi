'use strict';

/**
 *  employee controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::employee.employee');

// module.exports={
//     index: async ctx=>{
//         ctx.send("hello")
//     }
// }
