const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
/** 
 * @module Course_Schema 
 */

const Studentsechema = new Schema({
    name: {
		type: String
	},
	email: {
		type: String
	}	,
    phone: {
		type: String
	}
	
}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
});

module.exports = mongoose.model('Student', Studentsechema);
