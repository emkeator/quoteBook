const express=require('express'),
	  session=require('express-session'),
	  bodyParser=require('body-parser'),
	  cors=require('cors'),
	  quotes=require('./server/quotes'),
	  auth=require('./server/auth'),
	  { port }=require('./server/config.json'),
	  app=express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('./build'))

auth(app)
quotes(app)

app.listen(port, _=>{console.log('(I)...(I) '+port)})