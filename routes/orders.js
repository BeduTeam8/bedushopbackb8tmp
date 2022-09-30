const router=require('express').Router();
const {
    createOrder,
    getOrder,
    getOrders,
    updateOrder,
    deleteOrder
}=require('../controllers/orders');

router.get('/',getOrders);
router.get('/:id',getOrder);
router.post('/',createOrder);
router.patch('/:id',updateOrder);
router.delete('/:id',deleteOrder);

module.exports=router;