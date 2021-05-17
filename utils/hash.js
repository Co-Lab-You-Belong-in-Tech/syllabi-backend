const bcrypt = require('bcryptjs');

module.exports = hasher = password => {
    return bcrypt.hashSync(password, 12);
    
}