const jwt = require('jsonwebtoken');

const generateAdminToken = () => {
  const token = jwt.sign(
    { role: 'admin' }, // payload
    'your_jwt_secret', // secret
    { expiresIn: '1d' } // token validity
  );
  return token;
};

console.log('Admin Token:', generateAdminToken());
