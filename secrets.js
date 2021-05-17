module.exports = {
    jwtSecret: process.env.SECRET,
    PORT: process.env.PORT,
    env: process.env.DATABASE_ENV || 'development'
};