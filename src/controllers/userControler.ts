import { USER, userInfo } from '../models/user'
import { Request, Response } from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import {dateFormat}  from "../servieces/loger";
import { LoggerService } from '../servieces/loger'
import {prepareAudit}  from '../audit/auditService'
import {actionList}  from '../audit/auditAction'

const logger = new LoggerService('user.controller');

const info = new userInfo()
export const index = async (req: Request, res: Response) => {
  try {
    const users = await info.index()

    if (!users) {
      logger.info("Error return users List",users)

      return res.status(404).json({
        status: 'error',
        message: 'not found any users ,yet,please create users first'
      })
    }
    logger.info("return users List",users)
    prepareAudit(actionList.GET_USER_LIST,users,new Error,"postman",dateFormat())
    return res.json({
      status: 'success',
      message: 'users show successed',
      data: { users }
    })
  } catch (error) {
    logger.info("Error return users List",error)

    res.status(500)
    res.json((error as Error).message)
  }
}

//show by id
export const show = async (req: Request, res: Response) => {
  try {
    const user = await info.show(req.body.id)
    

    if (!user) {
      logger.error("Error show user",`${req.body.id}`)

      return res.status(404).json({
        status: 'error',
        message: 'can not find this id'
      })
    }
    logger.info("return user by id",user)
    return res.json({
      status: 'success',
      message: 'user show successed',
      data: { user }
    })
  } catch (error) {
    logger.info("Error return user By Id",error)

    res.status(500)
    res.json((error as Error).message)
  }
}
export const create = async (req: Request, res: Response) => {
  try {
    const user: USER = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email:req.body.email,
      password_digest: req.body.password_digest,
      roles:"BASIC"
    }
   
    const newUser = await info.create(user)

    const tokenSecret = jwt.sign(newUser, process.env.TOKEN_SECRET as Secret)
    logger.info("create user ",newUser)

    return res.json({
      status: 'success',
      message: 'user created success',
      data: { ...newUser, tokenSecret }
    })
    //res.json(newUser)
  } catch (error) {
    logger.info("Error create user",error)

    res.status(500)
    res.json((error as Error).message)
  }
}
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await info.deleteUser(req.body.id)
    if (!deleted) {
      logger.error("Error delete user ",`${req.body.id}`)

      return res.status(404).json({
        status: 'error',
        message: 'can not find this id'
      })
    }
    logger.info("delete user ",deleted)

    return res.json({
      status: 'success',
      message: 'user delete successed',
      data: { deleted }
    })
  } catch (error) {
    logger.info("Error delete user",error)

    res.status(500)
    res.json((error as Error).message)
  }
}
export const cheak = async (req: Request, res: Response) => {
  try {
    const user = await info.athuntication(req.body.email, req.body.password_digest)

    if (!user) {
      logger.error("Error signIN user",`${req.body.email},${req.body.password_digest}`)

      return res.status(404).json({
        status: 'error',
        message: 'password is unvalid'
      })
    }

    const tokenSecret = jwt.sign({ user }, process.env.TOKEN_SECRET as Secret)
    logger.info("signIN user ",user)

    return res.json({
      status: 'success',
      message: 'user authenticated success',
      data: { ...user, tokenSecret }
    })
  } catch (error) {
    logger.error("Error signIN user",error)

    res.status(500)
    res.json((error as Error).message)
  }
}
/*{
     "id": 12,
    "firstName": "maged",
    "password_digest":"12345",
    "lastNAME":"sayed"
} */
