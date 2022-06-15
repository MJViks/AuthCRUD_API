import Router from 'koa-router'
import errorHandler from './errorHandler'
import {getAuth, getUsers} from '../controllers/get'

const router = new Router()

router.get('/', async(ctx) =>{
	ctx.body = 'Hello World!'
})
router.get('/auth', async(ctx) =>{
	try {
		ctx.body = await getAuth({...ctx.header})
	} catch (error) {
		errorHandler(ctx, error)
	}
})

router.get('/users', async(ctx, next) =>{
	try {
		ctx.body.answer = await getUsers({...ctx.header})
		await next()
	} catch (error) {
		errorHandler(ctx, error)
	}
})

export default router