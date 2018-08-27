import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/skills'

const getAll = async () => {
  const req = await axios.get(baseUrl)
  return req.data
}

const create = async (newObject) => {
  const res = await axios.post(baseUrl, newObject)
  return res.data
}

export default {
  getAll,
  create
}
