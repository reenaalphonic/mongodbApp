const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
/** 
 * @module Course_Schema 
 */

const Coursechema = new Schema({
    courseName: {
		type: String
	},
	courseId: {
		type: String
	}	,
    courseDuration: {
		type: String
	},
    courseFee: {
		type: Number
	}
  
	
	
}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
});

module.exports = mongoose.model('Course', Coursechema);
