module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d802f1b09857b5a6dc7672dd665193c'),
  },
});
