import loginValidation from './func/valid'
import auth from './func/auth'
import User from '../models/user'

export const getAuth = async({['user-name']: userName, ['user-pass']: userPass}) =>  {
        const {error} = loginValidation({userName, userPass})
        if (error) throw new Error(error.message)
        return auth(userName, userPass)		
}

export const getUsers = async() =>  {
        try{
                const users = await User.find()
                return users
        }
        catch(err){
                return error.message 
        }	
}