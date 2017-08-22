import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../js/Landing'
import Quotes from '../js/Quotes'
import QuoteBook from '../js/QuoteBook'

export default(
    <Switch>
        <Route component={Landing} exact path='/'/>
        <Route component={Quotes} path='/quotes' />
        <Route component={QuoteBook} path='/quotebook' />
    </Switch>
)

