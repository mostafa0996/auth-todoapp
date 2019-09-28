const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId , ref: 'User'
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
