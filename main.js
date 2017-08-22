const express=require('express'),
	  session=require('express-session'),
	  bodyParser=require('body-parser'),
	  cors=require('cors'),
	  path=require('path'),
	  quotesCtrl=require('./server/quotesCtrl'),
	  auth=require('./server/auth'),
	  { port }=require('./server/config.json'),
	  app=express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('./build'))

auth(app)

app.get('/api/quote', quotesCtrl.getQuote)
//PUT

//POST

//DELETE

// app.get('/*',(req, res)=>{res.sendFile(path.join(__dirname, 'build', 'index.html'))})
app.listen(port, _=>{console.log('(I)...(I) '+port)})