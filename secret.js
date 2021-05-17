module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    env: process.env.DATABASE_ENV || 'development'
};