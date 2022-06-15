import Router from 'koa-router'
import errorHandler from './errorHandler'
import {postUser} from '../controllers/post'

const router = new Router()

router.post('/user', async(ctx, next) =>{
	try {
		ctx.body.answer = await postUser({...ctx.request.body})
		await next()
	} catch (error) {
		errorHandler(ctx, error)
		await next()
	}
})

export default router