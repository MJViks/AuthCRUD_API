import Router from 'koa-router'
import errorHandler from './errorHandler'
import {putUser} from '../controllers/put'

const router = new Router()

router.put('/user', async(ctx, next) =>{
	try {
		ctx.body.answer = await putUser({...ctx.request.body})
		await next()
	} catch (error) {
		errorHandler(ctx, error)
		await next()
	}
})

export default router