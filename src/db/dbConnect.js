import Mongoose from 'mongoose'

export default async(ctx, next) => {
    try{
        Mongoose.connect('mongodb://localhost:' + process.env.MONGODB_PORT + '/' + process.env.MONGODB_BASE, () => console.log('Connected to DB!'))
        await next()
    }
    catch(err){
        ctx.status = 500
        ctx.body = {
        status: 500,
        message: 'DB Error'
        }
    }
}