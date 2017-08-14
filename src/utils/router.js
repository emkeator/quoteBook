import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../js/Landing.jsx'
import Quotes from '../js/Quotes.jsx'
import QuoteBook from '../js/QuoteBook.jsx'

export default (
    <Switch>
        <Route component={Landing} exact path='/'/>
        <Route component={Quotes} path='/quotes' />
        <Route component={QuoteBook} path='/quotebook' />
    </Switch>
)


//{route='/' ? <Landing /> : <QuoteBook />}