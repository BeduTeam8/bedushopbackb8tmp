const router=require('express').Router();

const {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    logIn,
    signUp
}=require('../controllers/users');

router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/',createUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);
router.get('/logIn',logIn);
router.get('/signUp',signUp);

module.exports=router;