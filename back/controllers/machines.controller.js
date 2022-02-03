const Machine = require('../models/machines.model')

module.exports.create = async (req, res) => {
  const machine = new Machine({
      title: req.body.title,
      imageUrl: `/${req.file.filename}`
  })

  try {
    await machine.save()
    res.status(201).json( machine)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const  machines = await Machine.find().sort({date: -1})
    res.json( machines)
  } catch (e) { 
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Machine.findById(req.params.id).populate('comments').exec((error,  machine) => {
      res.json( machine)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    text: req.body.text
  }
  try {
    const  machine = await Machine.findOneAndUpdate({
      _id: req.params.id
    }, {$set}, {new: true})
    res.json( machine)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Machine.deleteOne({_id: req.params.id})
    res.json({message: 'Продукт удален'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Machine.findOneAndUpdate({_id: req.params.id}, {$set})
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}