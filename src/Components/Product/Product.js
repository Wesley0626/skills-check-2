import React, {Component} from 'react'
import axios from 'axios'


class Product extends Component{




  render(){
    console.log(this.props)
let product = this.props.product.imgurl ?  (
  <div>
    <img src={this.props.product.imgurl} />
    <p>{this.props.product.product_name}</p>
    <p>{this.props.product.price}</p>
  </div>
) :  <div>...loading</div>
    
   return (<div>{product}</div>)
  }
}

export default Product