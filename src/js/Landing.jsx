import React, { Component } from 'react'
import { login } from '../utils/api.js'
 
export default class Landing extends Component {
    constructor(){
        super()

        this.state={
            showLogin: false
        }
        this.login=this.login.bind(this) 
    }

    login(){
        login()
    }

    render(){
        console.log(this.state)
        return (
            <main className="Landing">
                <h1>quoteBook.</h1>
                <button className="login" onClick={this.login}>Login</button>
            </main>
        )
    }
}