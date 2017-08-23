import axios from 'axios'

const URL = 'http://localhost:3001/api/'

export async function getNewQuote(){
    try {
        return await axios.get(`${URL}quote`)
    }
    catch(err){
        throw err
    }
}

export async function login(){
    try {
        axios.get(`${URL}auth/login`)
    }
    catch(err){
        throw err
    }
}