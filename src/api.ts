import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://mock-mapfre-dev.s3.amazonaws.com',
})
