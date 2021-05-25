const mongoose = require('mongoose');

const syllabiSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    data: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

syllabiSchema.virtual('id').get(function() {
    return this._id.toHexString()
});


syllabiSchema.set('toJSON', {virtuals: true});

exports.Syllabi = mongoose.model('Syllabi', syllabiSchema)