module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a99a1d771800185fb1d922e4a6328340'),
  },
});
