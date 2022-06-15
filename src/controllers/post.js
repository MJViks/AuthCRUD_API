import loginValidation from './func/valid'
import User from '../models/user'

export const postUser = async({userName, userPass, userToken}) =>  {
            const {error} = loginValidation({userName, userPass})
            if (error) throw new Error(error.message)

            const isUnUnique = await User.findOne({token: userToken}) || await User.findOne({password: userPass})
            if (isUnUnique) throw new Error('User is not Unique')

            const user = new User({
                name: userName,
                password: userPass,
                token: userToken
            })
            user.save((err)=>{if (err) throw new Error(err.message)})
            return user
        	
}