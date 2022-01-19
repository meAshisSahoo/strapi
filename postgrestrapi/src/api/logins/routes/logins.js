module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/login',
     handler: 'logins.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
 