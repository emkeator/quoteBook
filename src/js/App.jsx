import React, { Component } from 'react'
import router from '../utils/router.jsx'

import Nav from './Nav'

import '../css/reset.css'
import '../css/pallette.css'
import '../css/main.css'
import '../css/Nav.css'
import '../css/Landing.css'
import '../css/QuoteBook.css'

export default class App extends Component {
	render(){
		return (
			<div className='App'>
				<Nav />        
				{router}
			</div>
		)
	}
}