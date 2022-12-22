import { Router } from 'express'
import {BlackBox}  from '../../controllers/tools/BlackBox'
import {Expect}  from '../../controllers/tools/Expect'
import {FuzzyTrend1,FuzzyTrend2,FuzzyTrend3}  from '../../controllers/tools/FuzzyTrend'
import {GoldenPattern}  from '../../controllers/tools/GoldenPattern'
import {Trend}  from '../../controllers/tools/Trend'
import { verifyUser } from '../../midellware/authintication'

const routes = Router()

routes.post('/BlackBox',verifyUser, BlackBox)
routes.post('/Expect', verifyUser,Expect)
routes.post('/FuzzyTrend1',verifyUser,FuzzyTrend1)
routes.post('/FuzzyTrend2',verifyUser,FuzzyTrend2)
routes.post('/FuzzyTrend3',verifyUser,FuzzyTrend3)
routes.post('/GoldenPattern',verifyUser,GoldenPattern)
routes.post('/Trend',verifyUser,Trend)
routes.use('/', (req,res)=>{
    res.send('<a href="/BlackBox">BlackBox link</a><br><a href="/Expect">expect link</a><br><a href="/FuzzyTrend1">fuzzyTrend1 link</a><br><a href="/FuzzyTrend2">fuzzyTrend2 link</a><br><a href="/FuzzyTrend3">fuzzyTrend3 link</a><br><a href="/GoldenPattern">goldenPattren link</a><br><a href="/Trend">trend link</a>')
    })

export default routes
