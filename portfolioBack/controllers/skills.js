const skillsRouter = require('express').Router()
const mongoose = require('mongoose')
const Skill = require('../models/skill')
const jwt = require('jsonwebtoken')

const formatSkill = (skill) => {
  return {
    id: skill._id,
    title: skill.title,
    imageSrc: skill.imageSrc,
    content: skill.content,
    gitLink: skill.gitLink,
    gitText: skill.gitText
  }
}

skillsRouter.get('/', async (req, res) => {
  const skills = await Skill.find({})
  return res.json(skills.map(formatSkill))
})

skillsRouter.post('/', async (req, res) => {
  try {
    const skill = new Skill(req.body)
    const token = req.token
    const decoded = jwt.verify(token, process.env.SECRET)

    console.log(decoded) 
    if(!token || !decoded.id) {
      return res.status(401).json({ error: 'bad token'})
    }

    if(skill.title === undefined,
      skill.imageSrc === undefined,
      skill.content === undefined,
      skill.gitLink === undefined,
      skill.gitText === undefined){
      return res.status(400).json({error: 'Skills info missing'})
    }
    const savedSkill = await skill.save()
    return res.json(formatSkill(savedSkill))
  } catch(ex){
    res.status(500).json({error: 'something went wrong'})
  }
})

skillsRouter.delete('/:id', async (req, res) => {
  try {
    const skill = await Skill.find({_id: req.params.id})
    console.log(skill) 
    const token = req.token
    const decoded = jwt.verify(token, process.env.SECRET)

    if(!token || !decoded.id) {
      return res.status(401).json({ error: 'bad token'})
    }
    await skill[0].remove()

    res.status(204).end()
  } catch (e) {
    res.status(500).json({ error: 'something went wrong'})
  }
})

module.exports = skillsRouter
