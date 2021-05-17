const server = require('./server.js');
const {PORT} = require('./secret.js');

server.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`)
})