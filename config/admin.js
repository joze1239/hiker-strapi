module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f49746083fe990e2f3a1919f2a2861f0'),
  },
});
