import loginValidation from './func/valid'
import User from '../models/user'

export const putUser = async({userId, userName, userPass, userToken}) =>  {
            const {error} = loginValidation({userName, userPass})
            if (error) throw new Error(error.message)
            const isUnUnique = await User.findOne({token: userToken}) || await User.findOne({password: userPass})
            if (isUnUnique) throw new Error('Data is not Unique')

            let user = await User.findOne({_id: userId})
            if (!user) throw new Error('User not found')
            user = new User({
                name: userName,
                password: userPass,
                token: userToken
            })
            user.save((err)=>{if (err) throw new Error(err.message)})
            return user
        	
}