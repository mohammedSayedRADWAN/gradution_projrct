import { PRODCUT, prodcutInfo } from '../../models/product'
import { Request, Response } from 'express'

const info = new prodcutInfo()
export const FuzzyTrend1 = async (req: Request, res: Response) => {
    try {
      const product: PRODCUT = {
        order_approved_at_start: req.body.order_approved_at_start,
        order_approved_at_End:req.body.order_approved_at_End
      }
      
      const FuzzyTrend = await info.FuzzyTrend1(product)
      console.log(FuzzyTrend);
      
      
      return res.json({
        status: 'success',
        message: 'FuzzyTrend successed',
        data: { ...FuzzyTrend }
      })
    } catch (err) {
      res.status(500)
      res.json(err)
    }
  }
  export const FuzzyTrend2 = async (req: Request, res: Response) => {
    try {
      const product: PRODCUT = {
        order_approved_at_start: req.body.order_approved_at_start,
        order_approved_at_End:req.body.order_approved_at_End
      }
      
      const FuzzyTrend = await info.FuzzyTrend2(product)
      
      return res.json({
        status: 'success',
        message: 'FuzzyTrend successed',
        data: { ...FuzzyTrend }
      })
    } catch (err) {
      res.status(500)
      res.json(err)
    }
  }
  export const FuzzyTrend3 = async (req: Request, res: Response) => {
    try {
      const product: PRODCUT = {
        order_approved_at_start: req.body.order_approved_at_start,
        order_approved_at_End:req.body.order_approved_at_End,
        product_category_name: req.body.product_category_name
      }
      
      const FuzzyTrend = await info.FuzzyTrend3(product)
      
      return res.json({
        status: 'success',
        message: 'FuzzyTrend successed',
        data: { ...FuzzyTrend }
      })
    } catch (err) {
      res.status(500)
      res.json(err)
    }
  }