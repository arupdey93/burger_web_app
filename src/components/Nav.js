import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

class Nav extends React.Component{
  
  render(){
    return(
      <div className="nav_container">
          <Head />
          <Link to="/" className="nav_list">
            <p>Home</p>
          </Link>
          <Link to="/logIn" className="nav_list">
            <p>Log in</p>
          </Link>
          <Link to="/signIn" className="nav_list">
            <p>Sign in</p>
          </Link>
      </div>
    )
  }
}

export default Nav