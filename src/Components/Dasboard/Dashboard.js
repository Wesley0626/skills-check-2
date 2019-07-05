import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios';



class Dashboard extends Component{

  
  deleteItem = id => {
    axios.delete(`/api/product/${id}`).then(
      res=> {
        this.props.update()
      }
    )
    .catch(err => {
      console.log("You idiot", err)
    })
  }
  
  render(){
    return(
      <div>
        {this.props.list.map( product => {
         return(
           <Product 
           update={this.props.update}
           key={product.id}
           product={product}
           deleteItem={this.deleteItem}
           />  
           )
        })}
      </div>
    )
  }
}

export default Dashboard