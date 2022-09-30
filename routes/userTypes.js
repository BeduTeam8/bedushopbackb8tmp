const router=require('express').Router();
const {
    createUserType,
    getUserType,
    getUserTypes,
    updateUserType,
    deleteUserType
}=require('../controllers/userTypes');

router.get('/',getUserTypes);
router.get('/:id',getUserType);
router.post('/',createUserType);
router.patch('/:id',updateUserType);
router.delete('/:id',deleteUserType);

module.exports=router;