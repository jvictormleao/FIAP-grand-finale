import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://6668f3022e964a6dfed35861.mockapi.io/grandfinale/v1/'
})
