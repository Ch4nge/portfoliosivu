const projectsRouter = require('express').Router()
const mongoose = require('mongoose')
const Project = require('../models/project')

const formatProject = (project) => {
  return {
    id: project._id,
    title: project.title,
    imageSrc: project.imageSrc,
    content: project.content,
    moreInfo: project.moreInfo
  }
}

projectsRouter.get('/', async (req, res) => {
  const projects = await Project.find({})
  res.json(projects.map(formatProject))
})

projectsRouter.post('/', async (req, res) => {
  try {
  const project = new Project(req.body)
  if(project.title === undefined,
    project.imageSrc === undefined,
    project.content === undefined,
    project.moreInfo === undefined){
    return res.status(400).json({error: 'Projects info missing'})
  }
  const savedProject = await project.save()
  return res.json(savedProject)
  } catch(ex){
    res.status(500).json({error: 'something went wrong'})
  }
})

module.exports = projectsRouter
