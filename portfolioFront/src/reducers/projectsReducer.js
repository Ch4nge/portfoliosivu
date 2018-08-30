import projectsService from '../services/projects'

const projectsReducer = (state = [], action) => {
  switch(action.type){
  case 'INITPROJETS':
    return action.projects
  case 'CREATEPROJECT':
    return state.concat(action.project)
  case 'DELETPROJECT':
    return state.filter(p => p.id !== action.id)
  default:
    return state
  }
}

export const addProject = (newObject) => {
  return async (dispatch) => {
    const newProject = await projectsService.create(newObject)
    console.log(newProject)
    dispatch({
      type: 'CREATEPROJECT',
      project: newProject
    })
  }
}

export const initProjects = () => {
  return async (dispatch) => {
    const projects = await projectsService.getAll()
    dispatch({
      type: 'INITPROJETS',
      projects
    })
  }
}
export const deleteProject = (id) => {
  return async (dispatch) => {
    await projectsService.remove(id)
    dispatch({
      type: 'DELETEPROJECT',
      id: id
    })
  }
}

export default projectsReducer
