import Router from 'express'
import userRouter from './api/user'
import adminRouter from './api/admin'

import Tools from './api/tools'

const routes = Router()
routes.use('/Tools', Tools)
routes.use('/users', userRouter)
routes.use('/admin', adminRouter)

export default routes
