const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')
const Admin = require('../models/admin.model')

module.exports.loginAdmin = async (req, res) => {
  const candidate = await Admin.findOne({login: req.body.login})

  if (candidate) {
    const isPassportCorrect = bcrypt.compareSync(req.body.password, candidate.password)
    if (isPassportCorrect) {
      const token = jwt.sign({
        login: candidate.login,
        adminId: candidate._id
      }, keys.JWT,  {expiresIn: 60 * 60})
      res.json({token})
    } else {
      res.status(401).json({message: 'Пароль не верный'})
    }
  } else {
    res.status(404).json({message: 'Пользователь не найден'})
  }
}

module.exports.createAdmin = async (req, res) => {
  const candidate = await Admin.findOne({login: req.body.login})

  if (candidate) {
    res.status(409).json({message: 'такой login уже занят'})
  } else {

    const salt = bcrypt.genSaltSync(10)
    const admin = new Admin({
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    })

    await admin.save()
    res.status(201).json(admin)
  }

}

