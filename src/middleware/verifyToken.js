import Jwt from 'jsonwebtoken'
import User from '../models/user'

export default async(ctx, next) => {
try {
    //if "auth" path
    if (ctx.url == '/auth') await next()

    let token = ctx.header.token  
    if (!token) throw new Error('No token.')

    const verified = Jwt.verify(token, process.env.AUTH_TOKEN)

    const user = await User.findOne({_id: verified._id})
    if(!user) throw new Error('User not found')

    //check timeout token
    if(verified.iat < Math.floor(Date.now() / 1000) - (60 * 15)) throw new Error('Token timeout')

    //create new token
    const newToken = Jwt.sign({ _id: user._id}, process.env.AUTH_TOKEN)
    user.token = newToken
    user.save((err)=>{if (err) throw new Error('DB error')})
    ctx.body.token = newToken
}    
catch (err) {
    ctx.status = 500
    ctx.body.answer = {
        status: 500,
        message: 'Auth user access Denied. ' + err.message
        }
        ctx.body.token = null
    }    
}
