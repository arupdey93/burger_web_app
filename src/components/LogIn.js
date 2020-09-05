import React from 'react'
import Nav from './Nav'
import firebase from 'firebase'
import { Link } from 'react-router-dom'

class LogIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      oldUserEmail:'',
      oldUserPassword:'',
      errorMessage:''
    }
  }

  componentDidMount(){
    firebase
    .auth()
    .onAuthStateChanged((user)=>{
      if(user){
        this.props.history.push('/')
        console.log('user still active')
      }
    })
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value,
      [e.target.name]:e.target.value
    })
  }

  onLogIn = (e)=>{
    e.preventDefault()
    console.log(this.state.oldUserEmail)
    console.log(this.state.oldUserPassword) 
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.oldUserEmail,this.state.oldUserPassword)
    .then((response)=>{
      this.props.history.push('/')
      console.log(response);
    })
    .catch((error)=>{
      console.log(error.message);
      this.setState({
        errorMessage:error.message
      })
    })
  }
  
  render(){
    return(
      <div className="logIn_container">
        <Nav />
        <div className="log_content">
          <div className="log_sub_content">
            <div className="log_heading">
              <h2>LOG IN</h2>
            </div>
            <form className="form_content" onSubmit={this.onLogIn}>
              <div className="form_sub_content">
                <label htmlFor="email_field">Email Address</label>
                <input type="text" id="email_field" value={this.state.oldUserEmail} name="oldUserEmail" onChange={this.handleChange}></input>
              </div>
              <div className="form_sub_content">
                <label htmlFor="password_field">Password</label>
                <input type="text" id="password_field" value={this.state.oldUserPassword} name="oldUserPassword" onChange={this.handleChange}></input>
              </div>
              <div className="form_sub_btn">
                <div className="btn_content">
                  <button type="submit" className="log_reg_btn">LOG IN</button>
                </div>
                <div className="btn_content">
                  <Link to="/signIn"><button type="button" className="log_reg_btn">BACK</button></Link>
                </div>
              </div>
              {this.errorMessage !== '' ? (<div className="log_error_msg">{this.state.errorMessage}</div>):null }
            </form>
          </div>
        </div>
          
      </div>
    )
  }
}

export default LogIn