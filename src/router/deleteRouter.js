import Router from 'koa-router'
import errorHandler from './errorHandler'
import {deleteUser} from '../controllers/delete'

const router = new Router()

router.delete('/user', async(ctx, next) =>{
	try {
		ctx.body.answer = await deleteUser({...ctx.request.query})
		await next()
	} catch (error) {
		errorHandler(ctx, error)
		await next()
	}
})

export default router