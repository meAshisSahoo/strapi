'use strict';

/**
 *  company controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::company.company',({strapi})=>({
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
      console.log(query)
        const entity = await strapi.service('api::company.company').findOne(id, query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    
        return this.transformResponse(sanitizedEntity);
      }
}));
