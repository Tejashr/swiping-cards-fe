import axios from "axios";

export function Postregister(data) {
    return axios.post(`https://swiping-cards-be.herokuapp.com/register`, data)
}

export function Postlogin(data) {
    return axios.post(`https://swiping-cards-be.herokuapp.com/login`, data)
}

export function GetuserbyId(id) {
    return axios.get(`https://swiping-cards-be.herokuapp.com/users/${id}`)
}

export function GetuserbyPhone(id) {
    return axios.get(`https://swiping-cards-be.herokuapp.com/user/${id}`)
}

export function Posthistory(data) {
    return axios.post(`https://swiping-cards-be.herokuapp.com/history`, data)
}

export function Getuserhistory(id) {
    return axios.get(`https://swiping-cards-be.herokuapp.com/history/${id}`)
}
