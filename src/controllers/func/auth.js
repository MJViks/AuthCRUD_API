import Jwt from 'jsonwebtoken'
import User from '../../models/user'

const auth = async(userName, userPass) =>  {
    try{
    const user = await User.findOne({name: userName, password: userPass})
    if(!user) throw new Error('User not found')

    const token = Jwt.sign({ _id: user._id}, process.env.AUTH_TOKEN)
    user.token = token
    user.save((err)=>{if (err) throw new Error(err.message)})
    
    return({
        status: 200,
        sucses: 'ok',
        token: token
    })
}
catch(err){
    return({
        status: 500,
        sucses: 'error',
        message: err.message
    })
}
    
} 

export default auth

