const {Router}=require('express')

const router = Router()

router.get('/',(req,res) =>{
    res.render('index')
})

router.get('/portfolio',(req,res) =>{
    res.render('portfolio')
})




module.exports =router