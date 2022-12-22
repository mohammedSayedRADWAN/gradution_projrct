import { PRODCUT, prodcutInfo } from '../../models/product'
import { Request, Response } from 'express'

const info = new prodcutInfo()

export const Expect = async (req: Request, res: Response) => {
    try {
      const product: PRODCUT = {
        price: req.body.price,
        review_score:req.body.review_score,
        product_category_name: req.body.product_category_name
      }
      
      const Expect = await info.Expect(product)
      
      return res.json({
        status: 'success',
        message: 'Expecting successed',
        data: { ...Expect }
      })
    } catch (err) {
      res.status(500)
      res.json(err)
    }
  }