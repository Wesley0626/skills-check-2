import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios';

class Form extends Component{
  constructor(){
    super()
    this.state = {
      list:[],
      name: '',
      price: 0, 
      imgurl: '',
      editing: false
    }
  }

  // componentDidMount(){
  //   axios.get('/api/product')
  //   .then(res => {
  //     this.setState({list: res.data})
  //   })
  //   .catch(err => {
  //     console.log("Lets do this", err)
  //   })
  // }

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleCancel = () =>{
    this.setState({name: ''})
    this.setState({price: 0})
    this.setState({imgurl: ''})
  }

  addProduct= () => {
    axios.post('/api/product', {
      name: this.state.name,
      price: this.state.price, 
      imgurl:this.state.imgurl
    })
    .then(res => {
      this.setState({list: res.data, name: '', price: 0, imgurl: ''})
      console.log(this.state.list)
    })
    .catch(err => console.log('Error', err))
    this.props.update()
  }



  render(){
    let editing = this.state.editing
    return(
        <div>
          <img src={this.state.imgurl || 'https://www.how-to-draw-funny-cartoons.com/images/cartoon-camera-001.jpg'} />
          <p>Image URL:</p>
          <input placeholder="Image URL" value = {this.state.imgurl} name = "imgurl" onChange = {this.handleChange}></input>
          <p>Product Name:</p>
          <input placeholder="Product Name" value = {this.state.name} name = "name" onChange = {this.handleChange}></input>
          <p>Price:</p>
          <input placeholder = "Price" value = {this.state.price} name = "price" onChange = {this.handleChange}></input>
          <div>
            <button onClick={this.handleCancel}>Cancel</button>
            {editing?(
              <button>Save</button>
            ) : (
              <button onClick={() => this.addProduct()} >Add to Inventory</button>
            )
            }
          </div>
        </div>
    )
  }
}

export default Form