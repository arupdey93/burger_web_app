import React from 'react'
import HAMBURGER_IMAGE from '../Ham.jpg'


class Logo extends React.Component{
  
  render(){
    return(
      <div className="logo_container">
        <img src={HAMBURGER_IMAGE} alt="logo" className="main_ham_img"/>
      </div>
    )
  }
}

export default Logo