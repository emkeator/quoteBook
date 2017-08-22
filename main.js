const express=require('express'),
	  bodyParser=require('body-parser'),
	  cors=require('cors'),
	  quotesCtrl=require('./server/quotesCtrl'),
	  { port }=require('./server/config.json'),
	  app=express()

app.use(bodyParser.json())
app.use(cors())

//GET
app.get('/api/quote', quotesCtrl.getQuote)
//PUT

//POST

//DELETE


app.listen(port, _=>{console.log('(I)...(I) '+port)})