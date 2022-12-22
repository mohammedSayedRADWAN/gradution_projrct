import { PRODCUT, prodcutInfo } from '../../models/product'
import { Request, Response } from 'express'
import { LoggerService } from '../../servieces/loger'
const logger = new LoggerService('user.controller');
const info = new prodcutInfo()
export const FuzzyTrend1 = async (req: Request, res: Response) => {
    try {
      const product: PRODCUT = {
        order_approved_at_start: req.body.order_approved_at_start,
        order_approved_at_End:req.body.order_approved_at_End
      }
      
      const FuzzyTrend = await info.FuzzyTrend1(product)
      if (!FuzzyTrend) {
        logger.error("can't apply FuzzyTrend1 Tool for this product",`${product}`)
  
        return res.status(404).json({
          status: 'error',
          message: 'can not apply FuzzyTrend1 Tool for this product'
        })
      }      
      logger.info("Apply FuzzyTrend1 TOol",FuzzyTrend)

      return res.json({
        status: 'success',
        message: 'FuzzyTrend successed',
        data: { ...FuzzyTrend }
      })
    } catch (err) {
      logger.error("Error Applying FuzzyTrend1 TOol",err)

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
      if (!FuzzyTrend2) {
        logger.error("can't apply FuzzyTrend2 Tool for this product",`${product}`)
  
        return res.status(404).json({
          status: 'error',
          message: 'can not apply FuzzyTrend2 Tool for this product'
        })
      }  
      
      const FuzzyTrend = await info.FuzzyTrend2(product)

      logger.info("Apply FuzzyTrend2 TOol",FuzzyTrend)

      return res.json({
        status: 'success',
        message: 'FuzzyTrend successed',
        data: { ...FuzzyTrend }
      })
    } catch (err) {
      logger.info("Error Applying FuzzyTrend2 TOol",err)

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
      if (!FuzzyTrend3) {
        logger.error("can't apply FuzzyTrend3 Tool for this product",`${product}`)
  
        return res.status(404).json({
          status: 'error',
          message: 'can not apply FuzzyTrend3 Tool for this product'
        })
      }  
      const FuzzyTrend = await info.FuzzyTrend3(product)
      logger.info("Apply FuzzyTrend3 TOol",FuzzyTrend)

      return res.json({
        status: 'success',
        message: 'FuzzyTrend successed',
        data: { ...FuzzyTrend }
      })
    } catch (err) {
      logger.info("Error Applying FuzzyTrend3 TOol",err)

      res.status(500)
      res.json(err)
    }
  }