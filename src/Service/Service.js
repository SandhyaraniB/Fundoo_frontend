import axios from 'axios';
const BASE_URL = 'http://localhost:8080';

export function postServiceToken(url,data,token) {
    // console.log(`${BASE_URL}/${url}`)
    // console.log(data)
    return axios.post(`${BASE_URL}/${url}`, data,{ headers: {token:`${token}`}})
}

export function getServiceToken(url,token) {
    // console.log(`${BASE_URL}/${url}`)
    // console.log(data)
    return axios.get(`${BASE_URL}/${url}`,{ headers: {token:`${token}`}})
}