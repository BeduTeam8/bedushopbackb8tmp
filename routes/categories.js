const router=require('express').Router();
const {
    createCategory,
    getCategory,
    getCategories,
    updateCategory,
    deleteCategory
}=require('../controllers/categories');

router.get('/',getCategories);
router.get('/:id',getCategory);
router.post('/',createCategory);
router.patch('/:id',updateCategory);
router.delete('/:id',deleteCategory);

module.exports=router;