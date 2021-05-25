const mongoose = require('mongoose');

const syllabiSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
} , {collection: 'syllabi'});

syllabiSchema.virtual('id').get(function() {
    return this._id.toHexString()
});


syllabiSchema.set('toJSON', {virtuals: true});

exports.Syllabi = mongoose.model('Syllabi', syllabiSchema)