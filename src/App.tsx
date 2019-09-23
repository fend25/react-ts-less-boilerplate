import React, {Component} from 'react'
import {hot} from 'react-hot-loader/root'
import HelloWorld from './components/hello-world'

class App extends Component<any, {input: string}> {
  constructor(props: any) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    return <div>
      <div>
        <input onChange={e => this.setState({input: e.target.value})} value={this.state.input}/>
      </div>
      <p>{this.state.input}</p>
      <HelloWorld title="Hello from React webpack"/>
    </div>

  }
}

export default hot(App)
