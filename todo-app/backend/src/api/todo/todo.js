const restful = require('node-restful');
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema(
    {
        description: { type: String, required: true },
        done: { type: Boolean, required: true, default: false },
        createdAt: { type: Date, required: true, default: Date.now },
        doneAt: { type: Date, required: false },
    }
);

module.exports = restful.model('Todo', todoSchema);
