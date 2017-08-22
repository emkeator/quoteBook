import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import menu from '../img/hamburger_for_brennan.png'

class Nav extends Component {
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
            showLogin: !this.state.showLogin,
            dropdown: false 
        })        
    }

    handleDropdown(){
        this.setState({
            dropdown: !this.state.dropdown 
            
        })
    }

    render() {
        
        return (
            <nav className="Nav" style={{display: this.props.location.pathname==='/' ? 'none' : 'inherit'}}>
                <ul className='desktop-nav'>   
                    <li className="desktop-nav-opt new-quotes"><NavLink to='quotes'>New Quotes</NavLink></li>
                    <li className="desktop-nav-opt login-logout" onClick={this.handleShowLogin}>{this.state.user ? 'Logout' : 'Login'}</li> 
                    <li className="desktop-nav-opt my-quotes"><NavLink to='quotebook'>My Quotes</NavLink></li>
                </ul>

                <img src={menu} alt="menu" onClick={this.handleDropdown}/>

                <NavLink className='logo' to='/quotes'>qB</NavLink>

                {this.state.dropdown && 
                <ul className='mobile-nav'>
                    <li className="mobile-nav-opt login-logout" onClick={this.handleShowLogin}>{this.state.user ? 'Logout' : 'Login'}</li>
                    <li className="mobile-nav-opt new-quotes" onClick={this.handleDropdown}><NavLink to='quotes'>New Quotes</NavLink></li>
                    <li className="mobile-nav-opt my-quotes" onClick={this.handleDropdown}><NavLink to='quotebook'>My Quotes</NavLink></li>
                </ul>}
            </nav>
        )
    }
}

export default withRouter(Nav)

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