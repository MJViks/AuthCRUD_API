import User from '../models/user'

export const deleteUser = async({id}) =>  {
            let user = await User.findOne({_id: id})
            if (!user) throw new Error('User not found')
            User.deleteOne(user, (err)=>{if (err) throw new Error(err.message)})
            return user
        	
}