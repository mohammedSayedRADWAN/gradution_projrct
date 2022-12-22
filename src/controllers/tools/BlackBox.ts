import { PRODCUT, prodcutInfo } from '../../models/product'
import { Request, Response } from 'express'
import { LoggerService } from '../../servieces/loger'
const logger = new LoggerService('user.controller');
const info = new prodcutInfo()


export const BlackBox = async (req: Request, res: Response) => {
  try {
    const product: PRODCUT = {
      price: req.body.price,
      review_score:req.body.review_score,
      product_category_name: req.body.product_category_name
    }
    
    const BlackBox = await info.BlackBox(product)
    if (!BlackBox) {
      logger.error("can't apply BlackBox Tool for this product",`${product}`)

      return res.status(404).json({
        status: 'error',
        message: 'can not apply BlackBox Tool for this product'
      })
    }
    logger.info("Apply Black Box TOol",BlackBox)
    return res.json({
      status: 'success',
      message: 'prediction successed',
      data: { ...BlackBox }
    })
  } catch (err) {
    logger.info("Error Applying BlackBox TOol",err)

    res.status(500)
    res.json(err)
  }
}
