import client from '../database'

export type PRODCUT = {
  product_id?:string
  order_approved_at_start?:string
  order_approved_at_End?:string
  price?: string
  review_score?: string
  product_category_name?: string
}
export class prodcutInfo {
  
  async BlackBox(product: PRODCUT): Promise<PRODCUT> {
    try {
      const {  price, review_score, product_category_name } = product
        console.log('price='+price);
        console.log('review_score='+review_score);
        console.log('product_category_name='+product_category_name);

        
      const connect = await client.connect()
      const sql = `select m.product_id,product_category_name,review_score,price,counts
      from(select product_id,count( product_id) as counts 
      from products
      where product_category_name=$3
      and price between 1 and $1
      and review_score= $2
      and order_approved_at between '2017-10-2' and '2018-08-6'
      group by product_id )m
       , (select  product_id,product_category_name,price,review_score,order_approved_at
      from(select row_number() over(PARTITION BY product_id order by order_approved_at desc)as ranks,product_id,product_category_name,price,review_score,order_approved_at
      from products
      where product_category_name=$3
      and price between 1 and $1
      and review_score= $2
      and order_approved_at between '2017-10-2' and '2018-08-6')s
      where ranks=1 )u
      where m.product_id=u.product_id 
       order by counts desc`
      const res = await connect.query(sql, [ price, review_score,product_category_name])
      connect.release()
      return res.rows[0]
    } catch (error) {
      console.log('error=>>'+error);
      
      throw new Error(`can not predict prodcut${error}`)
    }
  }
  async Trend(product: PRODCUT): Promise<PRODCUT> {
    try {
      const {  price, review_score, product_category_name } = product
        console.log('price='+price);
        console.log('review_score='+review_score);
        console.log('product_category_name='+product_category_name);

        
      const connect = await client.connect()
      const sql = ``
      const res = await connect.query(sql, [ price, review_score,product_category_name])
      //console.log(res);

      connect.release()
      return res.rows[0]
    } catch (error) {
      console.log('error=>>'+error);
      
      throw new Error(`can not predict prodcut${error}`)
    }
  }
  async Expect(product: PRODCUT): Promise<PRODCUT> {
    try {
      const {  price, review_score, product_category_name } = product
        console.log('price='+price);
        console.log('review_score='+review_score);
        console.log('product_category_name='+product_category_name);

        
      const connect = await client.connect()
      const sql = ``
      const res = await connect.query(sql, [ price, review_score,product_category_name])
      //console.log(res);

      connect.release()
      return res.rows[0]
    } catch (error) {
      console.log('error=>>'+error);
      
      throw new Error(`can not predict prodcut${error}`)
    }
  }
  async FuzzyTrend1(product: PRODCUT): Promise<PRODCUT[]> {
    try {
      const {  order_approved_at_start,order_approved_at_End } = product
        console.log('order_approved_at='+order_approved_at_start);
        console.log('order_approved_at='+order_approved_at_End);

      const connect = await client.connect()
      const sql = `select  product_category_name,count(product_id) as counts
      from products 
       where order_approved_at between $1 and $2
        group by product_category_name 	
        order by counts desc`
      const res = await connect.query(sql, [ order_approved_at_start,order_approved_at_End])
      //console.log(res);

      connect.release()
      return res.rows
    } catch (error) {
      console.log('error=>>'+error);
      
      throw new Error(`can not predict prodcut${error}`)
    }
  }

  async FuzzyTrend2(product: PRODCUT): Promise<PRODCUT[]> {
    try {
      const { order_approved_at_start ,order_approved_at_End} = product
        console.log('order_approved_at_start='+order_approved_at_start);
        console.log('order_approved_at_End='+order_approved_at_End);
        

        
      const connect = await client.connect()
      const sql = `select product_id,count(product_id) as counts
      from products 
       where order_approved_at between $1 and $2
        group by product_id	
        order by counts desc`
      const res = await connect.query(sql, [ order_approved_at_start, order_approved_at_End])
      //console.log(res);

      connect.release()
      return res.rows
    } catch (error) {
      console.log('error=>>'+error);
      
      throw new Error(`can not predict prodcut${error}`)
    }
  }

  async FuzzyTrend3(product: PRODCUT): Promise<PRODCUT> {
    try {
      const { order_approved_at_start ,order_approved_at_End,product_category_name} = product
        console.log('order_approved_at_start='+order_approved_at_start);
        console.log('order_approved_at_End='+order_approved_at_End);

        
      const connect = await client.connect()
      const sql = `select  product_id,count(product_id) as counts
      from products 
       where order_approved_at between $1 and $2
       and product_category_name =$3
        group by product_id	
        order by counts desc`
      const res = await connect.query(sql, [ order_approved_at_start, order_approved_at_End,product_category_name])
      //console.log(res);

      connect.release()
      return res.rows[0]
    } catch (error) {
      console.log('error=>>'+error);
      
      throw new Error(`can not predict prodcut${error}`)
    }
  }
  async GoldenPattern(product: PRODCUT): Promise<PRODCUT> {
    try {
      const {  price, review_score, product_category_name } = product
        console.log('price='+price);
        console.log('review_score='+review_score);
        console.log('product_category_name='+product_category_name);

        
      const connect = await client.connect()
      const sql = ``
      const res = await connect.query(sql, [ price, review_score,product_category_name])
      //console.log(res);

      connect.release()
      return res.rows[0]
    } catch (error) {
      console.log('error=>>'+error);
      
      throw new Error(`can not predict prodcut${error}`)
    }
  }
}


