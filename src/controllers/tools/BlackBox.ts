import { PRODCUT, prodcutInfo } from '../../models/product'
import { Request, Response } from 'express'

const info = new prodcutInfo()


export const BlackBox = async (req: Request, res: Response) => {
  try {
    const product: PRODCUT = {
      price: req.body.price,
      review_score:req.body.review_score,
      product_category_name: req.body.product_category_name
    }
    
    const BlackBox = await info.BlackBox(product)
    
    return res.json({
      status: 'success',
      message: 'prediction successed',
      data: { ...BlackBox }
    })
  } catch (err) {
    res.status(500)
    res.json(err)
  }
}
