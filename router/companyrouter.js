const express=require('express')
const { HomePage, AbouPage, ServicePage, PortfolioPage, PricingPage, BlogPage, ContactPage } = require('../controler/companycontroler')
const router=express.Router()

router.get('/',HomePage)
router.get('/about',AbouPage)
router.get('/service',ServicePage)
router.get('/portfolio',PortfolioPage)
router.get('/pricing',PricingPage)
router.get('/blog',BlogPage)
router.get('/contact',ContactPage)


module.exports=router