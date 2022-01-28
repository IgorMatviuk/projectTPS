const {Router} = require('express')
const passport = require('passport')
const { loginAdmin, createAdmin, } = require('../controllers/auth.controller')
const router = Router()

router.post('/admin/login', loginAdmin)

router.post('/admin/create', 
  createAdmin
)

module.exports = router