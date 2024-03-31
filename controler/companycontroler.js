const HomePage=(req,res)=>{
    res.render('company/home')

}
const AbouPage=(req,res)=>{
    res.render('company/about')

}
const ServicePage=(req,res)=>{
    res.render('company/service')

}
const PortfolioPage=(req,res)=>{
    res.render('company/portfolio')

}
const PricingPage=(req,res)=>{
    res.render('company/pricing')

}
const BlogPage=(req,res)=>{
    res.render('company/blog')

}
const ContactPage=(req,res)=>{
    res.render('company/contact')

}

module.exports={
    HomePage,
    AbouPage,
    ServicePage,
    PortfolioPage,
    PricingPage,
    BlogPage,
    ContactPage
}