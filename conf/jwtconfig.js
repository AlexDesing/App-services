module.exports = {
    // Configuración de JWT
    secretKey: process.env.JWT_SECRET || 'tu-secreto-jwt',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  };
  