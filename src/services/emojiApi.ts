import axios from "axios";

export const client  = axios.create({
  baseURL: 'https://emojihub.herokuapp.com/api/'
})
