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

skillsRouter.post('/', async (req, res) => {
  try {
  const skill = new Skill(req.body)
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

module.exports = skillsRouter
