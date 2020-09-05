import React from 'react'
import Nav from './Nav'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
import { saveData } from "../api/users";

class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newUserEmail:'',
      newUserPassword:'',
      errorMessage:''
    }
    this.onSignUp = this.onSignUp.bind(this)
  }

  componentDidMount(){
    firebase
    .auth()
    .onAuthStateChanged((user)=>{
      if(user){
        this.props.history.push('/')
        console.log('user still active');
      }
    })
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value,
      [e.target.name]:e.target.value
    })
  }

  onSignUp(e){
    e.preventDefault()
    console.log(this.state.newUserEmail)
    console.log(this.state.newUserPassword)
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.newUserEmail,this.state.newUserPassword)
    .then((response)=>{
      this.props.history.push("/")
      saveData(this.state.newUserEmail, this.state.newUserPassword)
      console.log(response)
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
      <div className="signIn_container">
        <Nav />
        <div className="sign_content">
          <div className="sign_sub_content">
            <div className="sign_heading">
              <h2>REGISTER</h2>
            </div>  
            <form className="form_content" onSubmit={this.onSignUp}>
              <div className="form_sub_content">
                <label htmlFor="email_field">Email Address</label>
                <input type="text" id="email_field" value={this.state.newUserEmail} name="newUserEmail" onChange={this.handleChange}></input>
              </div>
              <div className="form_sub_content">
                <label htmlFor="password_field">Password</label>
                <input type="text" id="password_field" value={this.state.newUserPassword} name="newUserPassword" onChange={this.handleChange}></input>
              </div>
              <div className="form_sub_content">
                <button type="submit" className="sign_reg_btn" >REGISTER</button>
              </div>
            </form>
            {this.state.errorMessage !== '' ? (<div className="sign_error_msg">{this.state.errorMessage}</div>) : null}
            <div className="form_sub_content">
              <p>Already an user? <Link to="/logIn"><button type="button" className="sign_reg_btn">Click Here</button></Link></p>
            </div>
          </div>
        </div>
          
      </div>
    )
  }
}

export default SignIn