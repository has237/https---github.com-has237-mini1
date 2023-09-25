const jwt = require('jsonwebtoken');
const passport = require('passport');

// JWT token generation function
function generateToken(user) {
  const payload = { sub: user.id };
  return jwt.sign(payload, 'secret-key', { expiresIn: '1h' });
}

// Local Passport.js strategy for user login
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username })
    .then(user => {
      if (!user) return done(null, false, { message: 'User not found' });
      if (!user.validatePassword(password)) return done(null, false, { message: 'Incorrect password' });
      return done(null, user);
    })
    .catch(err => done(err));
}));

module.exports = {
  generateToken,
  passport,
};