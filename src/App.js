import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from './Components/Dasboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'



class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
    }    
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/product')
    .then(res => {
      this.setState({list: res.data})
    })
    .catch(err=> {
      console.log("Lordy please")
    })
  }
  
  render(){
    return (
      <div className="App">
        <Dashboard 
        list={this.state.list} 
        update={this.componentDidMount}
         />
        <Form
         update={this.componentDidMount}        
        />
        <Header />
      </div>
    );

  }
}


export default App;
