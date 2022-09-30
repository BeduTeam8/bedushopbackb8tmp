const router=require('express').Router();
const {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}=require('../controllers/users');

router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/',createUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports=router;
//Comentado en Controllers
// const {
//     signUp,
//     logIn
// } = require('../controllers/users');

// router.post('/signUp',signUp);
// router.post('/logIn',logIn);

