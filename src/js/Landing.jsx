import React, { Component } from 'react'
 
export default class Landing extends Component {
    constructor(){
        super()

        this.state={
            showLogin: false
        }
        this.showLogin=this.showLogin.bind(this) 
    }

    showLogin(){
        this.setState({
            showLogin: !this.state.showLogin 
        })
    }

    render(){
        console.log(this.state)
        return (
            <main className="Landing">
                <h1>quoteBook.</h1>
                <button className="login" onClick={this.showLogin}>Login</button>
            </main>
        )
    }
}