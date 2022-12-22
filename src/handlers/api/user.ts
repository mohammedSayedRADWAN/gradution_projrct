import { Router } from 'express'
import * as controllers from '../../controllers/userControler'
import { verifyUser } from '../../midellware/authintication'
import { verifyAdmin } from '../../midellware/authintication'

const routes = Router()
// admin routes
routes.get('/showall',verifyAdmin, controllers.index)
routes.get('/showById', verifyAdmin,controllers.show)
routes.delete('/delete', verifyAdmin,controllers.deleteUser)
//user routes
routes.post('/SignUp',controllers.create)
routes.post('/login', controllers.cheak)

export default routes
