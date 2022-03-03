const {Schema, model} = require('mongoose')

const course = Schema({
    title: {
        type: String,
        required: true,
        
    }
})

module.exports = model('Course', course)

