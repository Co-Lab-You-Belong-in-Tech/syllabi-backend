module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.DATABASE_PORT || 3001,
    env: process.env.DATABASE_ENV || 'development'
};