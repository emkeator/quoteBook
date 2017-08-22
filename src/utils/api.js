import axios from 'axios'

const URL = '/api/'

export async function getNewQuote(){
    try {
        return await axios.get(`${URL}quote`)
    }
    catch(err){
        console.log(err)
    }
}