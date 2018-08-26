const skillsRouter = require('express').Router()
const mongoose = require('mongoose')
const Skill = require('../models/skill')

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
  res.json(skills.map(formatSkill))
})

skillsRouter.post('/', async (res,req) => {
  try {
  const skill = req.body
  if(blog.title === undefined,
    blog.imageSrc === undefined,
    blog.content === undefined,
    gitLink === undefined,
    gitText === undefined){
    return response.status(400).json({error: 'Skills info missing'})
  }
  const savedSkill = await skill.save()
  response.json(savedSkill)
  } catch(ex){
    response.status(500).json({error: 'something went wrong'})
  }
})

module.exports = skillsRouter
