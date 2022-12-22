import { Router } from 'express'
import * as controllers from '../../controllers/admin'
import { verifyAdmin } from '../../midellware/authintication'

const routes = Router()
// admin routes
routes.post('/create',verifyAdmin,controllers.create)
routes.post('/logIN',controllers.cheak)
routes.get('/showall',verifyAdmin,controllers.index)
routes.get('/showById',verifyAdmin,controllers.show)
routes.delete('/delete',verifyAdmin,controllers.deleteUser)


export default routes