import axios from 'axios'

const quoteURL = 'http://localhost:3001/api/quote'

export async function getNewQuote(){
    try {
        return await axios.get(quoteURL)
    }
    catch(err){
        console.log(err)
    }
}