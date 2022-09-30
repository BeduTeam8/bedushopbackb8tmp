const router=require('express').Router();
const categories=require('./categories');
const orders=require('./orders');
const ordersDetails=require('./ordersDetails');
const products=require('./products');
const reviews=require('./reviews');
const users=require('./users');
const userTypes=require('./userTypes');

router.get('/',(req,res)=>{
    res.json({'info':'Welcome to Gods Api!'})
});

router.use('/categories',categories);
router.use('/orders',orders);
router.use('/ordersDetails',ordersDetails);
router.use('/products',products);
router.use('/reviews',reviews);
router.use('/users',users);
router.use('/userTypes',userTypes);


module.exports=router;