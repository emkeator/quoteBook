import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    constructor(){
        super()

        this.state={
            user: null,
            showLogin: false,
            dropdown: false
        }
        this.handleShowLogin=this.handleShowLogin.bind(this)
        this.handleDropdown=this.handleDropdown.bind(this)
        
    }

    handleShowLogin(){
        this.setState({
            showLogin: !this.state.showLogin 
        })        
    }

    handleDropdown(){
        this.setState({
            dropdown: !this.state.dropdown 
            
        })
    }

    render() {
        return (
            <nav className="Nav">
                <ul className='desktop-nav'>   
                    <li className="desktop-nav-opt new-quotes"><Link to='quotes'>New Quotes</Link></li>
                    <li className="desktop-nav-opt login-logout" onClick={this.handleShowLogin}>{this.state.user ? 'Logout' : 'Login'}</li> 
                    <li className="desktop-nav-opt my-quotes"><Link to='quotebook'>My Quotes</Link></li>
                </ul>

                <i onClick={this.handleDropdown}className="fa fa-bars" aria-hidden="true"></i>

                {this.state.dropdown && 
                <ul className='mobile-nav'>
                    <li className="mobile-nav-opt new-quotes"><Link to='quotes'>New Quotes</Link></li>
                    <li className="mobile-nav-opt login-logout" onClick={this.handleShowLogin}>{this.state.user ? 'Logout' : 'Login'}</li>
                    <li className="mobile-nav-opt my-quotes"><Link to='quotebook'>My Quotes</Link></li>
                </ul>}
            </nav>
        )
    }
}

//FUNCTIONAL COMPS

// const Login=(props)=>(
//     <section className="Login">
//         <div className="input username">
//             <input type="text" className="username"/>
//         </div>
//         <div className="input password">
//             <input type="text" className="password"/>
//         </div>
//     </section>
// )