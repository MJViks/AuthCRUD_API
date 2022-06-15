import Mongoose from 'mongoose'

const userSchema = Mongoose.Schema({
    name: String,
    password: {
        type: String,
        unique: true,
        required: true

    },
    token: {
        type: String,
        unique: true
    }
})

export default Mongoose.model('users', userSchema)