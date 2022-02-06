import {Component} from 'react';


export default class App extends Component{
  constructor() {
    super();

    this.state = {
      name: "Aysel"
    }
  }

updateData(){
  this.setState({name: "Nurlana"})
}

render() {
  return(
    <div>
      <h1>Hello {this.state.name}</h1>
      <button onClick={() => this.updateData()}>Click</button>
    </div>
  )
}
}


