import React from 'react'
import Nav from './Nav'
import firebase from 'firebase'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list:[{
        bacon:{
          quantity:0,
          price:0.7,
        }
      },
      {
        cheese:{
          quantity:0,
          price:0.6,
        }
      },
      {
        meat:{
          quantity:0,
          price:1.0,
        }
      },
      {
        salad:{
          quantity:0,
          price:0.3,
        }
      }],
      totalPrice:4.5,
      showDiv:[],
      showCell:[],
      msg:false
    }
  }

  addItem = (e)=>{
    let { list,totalPrice,showDiv,showCell } = this.state 
    let sum = parseFloat(e.target.value)
    switch(e.target.name){
      case 'bacon':
        if(list[0].bacon.quantity < 4){
          list[0].bacon.quantity = list[0].bacon.quantity+1
          totalPrice = totalPrice + sum
          showDiv = showDiv.push( this.divisonBacon())
        }
        
        showCell = showCell.push(this.cellsBacon())  
        break;
      case 'cheese':
        if(list[1].cheese.quantity < 4){
        list[1].cheese.quantity = list[1].cheese.quantity+1        
        totalPrice = totalPrice + sum
        showDiv = showDiv.push( this.divisonCheese())
        }
        break;
      case 'meat':
        if(list[2].meat.quantity < 4){
        list[2].meat.quantity = list[2].meat.quantity+1
        totalPrice = totalPrice + sum
        showDiv = showDiv.push( this.divisonMeat())
        }
        break;
      case 'salad':
        if(list[3].salad.quantity < 4){
        list[3].salad.quantity = list[3].salad.quantity+1
        totalPrice = totalPrice + sum
        showDiv = showDiv.push( this.divisonSalad())
        }
        break;
      default :
        break;
    }
    
      this.setState(prevState=>({
        ...prevState,
        list,
        totalPrice,
        msg:true,
      }))
  }

  removeItem = (e)=>{
    let { list, totalPrice,showDiv,msg } = this.state
    let sub = parseFloat(e.target.value)
    switch (e.target.name){
      case 'bacon':
        list[0].bacon.quantity = list[0].bacon.quantity-1
        totalPrice = totalPrice - sub 
        showDiv = showDiv.pop()
        break;
      case 'cheese':
        list[1].cheese.quantity = list[1].cheese.quantity-1
        totalPrice = totalPrice - sub
        showDiv = showDiv.pop()
        break;
      case 'meat':
        list[2].meat.quantity = list[2].meat.quantity-1
        totalPrice = totalPrice - sub
        showDiv = showDiv.pop()
        break;
      case 'salad':
        list[3].salad.quantity = list[3].salad.quantity-1
        totalPrice = totalPrice - sub
        showDiv = showDiv.pop()
        break;
      default :
        break;
    }
    if(totalPrice >= 4.5){
      this.setState(prevState=>({
        ...prevState,
        list,
        totalPrice,
        msg,
      }))  
    }else {
      this.setState({
        totalPrice:4.5
      })
    }
   
  }

  divisonBacon = () =>{
      return (<div className="bacon_layer"></div>)
  }
  divisonCheese = () =>{
    return (<div className="cheese_layer"></div>)
  }
  divisonMeat = () =>{
    return (<div className="meat_layer"></div>)
  }
  divisonSalad = () =>{
    return (<div className="salad_layer"></div>) 
  }

  cellsBacon = () =>{
    return(1)
  }


  componentDidMount(){
    firebase
    .auth()
    .onAuthStateChanged((user)=>{
      if(!user){
        this.props.history.push('/logIn')
        console.log('user redirected');
      }
    })
  }

  logout = ()=>{
    firebase
    .auth()
    .signOut()
    console.log('logged out');
  }
  
  render(){
    
    return(
      <div className="home_container">
        <Nav />
        <div className="home_content">
          <div className="bill">
          <p>Total price:{(this.state.totalPrice).toFixed(1)} &#8364;</p>
            <button type="button" className="logout_btn" onClick={this.logout}>LOG OUT</button>
          </div>
          <div className="menu">
            <div className="menu_content">
            <div className="outer_layer_top"></div>
              <div className="hamburger_menu">
                {this.state.msg ? this.state.showDiv : (<p className="line">Please start adding ingredients!</p>)  }
              </div>
              <div className="outer_layer_bottom"></div>
            </div>
          </div>
          <div className="calc">
            <div className="calc_content">
              <div className="calc_list">
                <p className="price">0.7 &#8364;</p>
                <p className="item_name" >Bacon</p>
                <button type="button" className="btn" value={this.state.list[0].bacon.price} name="bacon" onClick={this.removeItem}>-</button>
                <button type="button" className="btn" value={this.state.list[0].bacon.price} name="bacon" onClick={this.addItem} >+</button>
                
              </div>
              <div className="calc_list">
                <p className="price">0.6 &#8364;</p>
                <p className="item_name">Cheese</p>
                <button type="button" className="btn" value={this.state.list[1].cheese.price} name="cheese" onClick={this.removeItem}>-</button>
                <button type="button" className="btn" value={this.state.list[1].cheese.price} name="cheese" onClick={this.addItem}>+</button>
              </div>
              <div className="calc_list">
                <p className="price"  name="meat">1.0 &#8364;</p>
                <p className="item_name">Meat</p>
                <button type="button" className="btn" value={this.state.list[2].meat.price} name="meat" onClick={this.removeItem}>-</button>
                <button type="button" className="btn" value={this.state.list[2].meat.price} name="meat" onClick={this.addItem}>+</button>
              </div>
              <div className="calc_list">
                <p className="price"  name="salad">0.3 &#8364;</p>
                <p className="item_name">Salad</p>
                <button type="button" className="btn" value={this.state.list[3].salad.price} name="salad" onClick={this.removeItem}>-</button>
                <button type="button" className="btn" value={this.state.list[3].salad.price} name="salad" onClick={this.addItem}>+</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home