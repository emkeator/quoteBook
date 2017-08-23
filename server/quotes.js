const axios=require('axios')

async function getQuote(req, res, next){
    const quoteURL='https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    let response, status=200
    try{
        response = await axios.get(quoteURL)
        res.status(status).send(response.data)
    }
    catch(err){
        response=err
        status=(500)
        res.status(status).send(response)
    }
}

module.exports=function(app){
    app.get('/api/quote', getQuote)
}