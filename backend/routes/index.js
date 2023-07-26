const express = require ('express')
const authController = require('../controller/authcontroller')
const router = express.Router()
const auth = require('../middleware/auth')
const blogController = require('../controller/blogController')
const commentController = require('../controller/commentController')

//testing

// router.get('/test', (req,res) =>{

//     res.send('test')
// })

//user
//register
router.post('/register', authController.register);

//login
router.post('/login', authController.login);
//logout
router.post('/logout', auth, authController.logout)
//refresh
router.post('/refresh', authController.refresh)

//blog
//CRUD
//create
router.post('/blog', auth, blogController.create)
//read all blogs
router.get('/blog/all', auth, blogController.getAll)
//read blog by id
router.get('/blog:id', auth, blogController.getById)
//update
router.put('/blog', auth, blogController.update)
//delete
router.delete('/blog:id', auth, blogController.delete)



//comment
router.post('/comment', auth, commentController.create)

//create comment
//read comments by blog id
router.get('/comment:id', auth, commentController.getById)



module.exports = router