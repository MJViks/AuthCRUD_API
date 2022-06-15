import Koa from 'koa'
import koaBody from 'koa-body'
import chToken from './middleware/verifyToken'
import dbConnect from './db/dbConnect'
import getRouter from './router/getRouter'
import postRouter from './router/postRouter'
import deleteRouter from './router/deleteRouter'
import putRouter from './router/putRouter'
import env from 'dotenv'
env.config()

const app = new Koa()

//select zero answer
app.use(async(ctx, next) => {
	ctx.status = 404
	ctx.body = {
		answer:{
			status: 404,
			message: 'Page not found'
		},
		token: null
	}
	await next()
})

app.use(dbConnect)
app.use(koaBody())

app.use(getRouter.routes())
app.use(getRouter.allowedMethods())

app.use(postRouter.routes())
app.use(postRouter.allowedMethods())

app.use(putRouter.routes())
app.use(putRouter.allowedMethods())

app.use(deleteRouter.routes())
app.use(deleteRouter.allowedMethods())
app.use(chToken)

app.listen(process.env.APP_PORT, ()=> console.log('Server has been started!'))