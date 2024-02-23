// authorization.js
const { roles } = require('../config/jwtConfig');

function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
    }
  };
}

module.exports = authorizeRole;
