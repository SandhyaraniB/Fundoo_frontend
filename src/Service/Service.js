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
export function getServiceTokenforlabel(url) {
    // console.log(`${BASE_URL}/${url}`)
    // console.log(data)
    return axios.get(`${BASE_URL}/${url}`)
}
export function postServiceTokenfor(url,token) {
    // console.log(`${BASE_URL}/${url}`)
    // console.log(token)
    return axios.post(`${BASE_URL}/${url}`,{},{ headers: {token:`${token}`}})
}


export function deleteServiceToken(url,token) {
    // console.log(`${BASE_URL}/${url}`)
    // console.log(token)
    return axios.delete(`${BASE_URL}/${url}`,{ headers: {token:`${token}`}})
}
export function deleteServiceforlabel(url) {
    // console.log(`${BASE_URL}/${url}`)
    // console.log(token)
    return axios.delete(`${BASE_URL}/${url}`)
}