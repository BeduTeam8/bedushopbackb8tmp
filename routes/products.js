const router=require('express').Router();

const {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}=require('../controllers/products');

router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',createProduct);
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports=router;