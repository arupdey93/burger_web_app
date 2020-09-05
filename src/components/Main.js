import React from 'react'
import Home from './Home'
import LogIn from './LogIn'
import SignIn from './SignIn'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

class Main extends React.Component{

  render(){
    return(
      <div className="main_container">          
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/logIn" component={LogIn}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Main