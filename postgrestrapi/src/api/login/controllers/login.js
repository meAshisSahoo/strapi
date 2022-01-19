'use strict';

/**
 *  login controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::login.login',({strapie})=>({

    async find(ctx) {
        const cdata=ctx.query.C_Code
        const edata=ctx.query.E_Code
        console.log(cdata,edata)
        const { id } = ctx.params;
     

  if(cdata && edata){
    const entity = await strapi.service('api::company.company').find(cdata)
  


    return entity
    // const entity1 = await strapi.service('api::employee.employee').find(edata)

  }else{
      return "data doesnot exist"

  }
        
     
        // console.log(entity)
        // some custom logic here
        // ctx.query = { ...ctx.query, local: 'en' }
        
        // // Calling the default core action
        // const { data, meta } = await super.find(ctx);
    
        // // some more custom logic
        // // meta.date = Date.now()
    
        // return { data, meta };
      },
    //   async create(ctx) {
    //     // some logic here
    //     const response = await super.create(ctx);
    //     // some more logic
  
    //     console.log(ctx.request.body) 
    //     const data = ctx.request.body
    // try {
    //     const entity = await strapi.service('api::company.company').find(id, query)
      
        
    // } catch (error) {
        
    // }
    // if(data){

    // }
      
    //     return response;
    //   }
      
}));


