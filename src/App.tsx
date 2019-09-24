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

  async method() {
    return new Promise(r => setTimeout(() => {this.setState({input: 'delayed'}) ; r()}, 1000))
  }

  render() {
    return <div>
      <div>
        <input onChange={e => this.setState({input: e.target.value})} value={this.state.input}/>
        &nbsp;{this.state.input}<br/>
        <button onClick={() => this.method()}>set delayed</button>
      </div>
      <HelloWorld title="Hello from React webpack"/>
    </div>

  }
}

export default hot(App)
