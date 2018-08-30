import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/projects'

let token = null

const config = () => {
  return {
    headers: { 'Authorization': token }
  }
}

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const req = await axios.get(baseUrl)
  return req.data
}

const create = async (newObject) => {
  console.log(config())
  const res = await axios.post(baseUrl, newObject, config())
  return res.data
}

const remove = async (id) => {
  const req = await axios.delete(`${baseUrl}/${id}`, config())
  return req.data
}

export default {
  getAll,
  create,
  setToken,
  remove
}
