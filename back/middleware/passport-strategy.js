const {Strategy, ExtractJwt} = require('passport-jwt')
const keys = require('../keys')
const Admin = require('../models/admin.model')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    const candidate = await Admin.findById(payload.adminId).select('id')
    if (candidate){
      done(null, candidate)
    } else {
      done(null, false)
    }
  } catch (e) {
    console.error(e)
  }
})
