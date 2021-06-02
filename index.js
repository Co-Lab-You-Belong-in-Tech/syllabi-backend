const server = require('./server.js');
const {PORT} = require('./secrets.js');

// server.listen(PORT, () => {
//     console.log(`listening on Port:${PORT}`)
// })

var server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;
    console.log(`Express is working on port ${port}`)
})