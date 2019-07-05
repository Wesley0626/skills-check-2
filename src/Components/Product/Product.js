import React, {Component} from 'react'


class Product extends Component{




  render(){
return(
  <div>
    <img src={this.props.product.imgurl} />
    <p>{this.props.product.product_name}</p>
    <p>{this.props.product.price}</p>
    <button onClick={this.props.deleteItem}>Delete</button>
    <button >Edit</button>
  </div>
    )
  }
}

export default Product