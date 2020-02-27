import React, { Component } from 'react'
import { addAction, minusAction, addAsyncAction, minusAsyncAction } from './redux/actions'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1
    }
    this.num = React.createRef()
  }

  add = () => this.props.store.dispatch(addAction(+this.num.current.value))

  minus = () => this.props.store.dispatch(minusAction(+this.num.current.value))

  asyncAdd = () => {
    this.props.store.dispatch(addAsyncAction(+this.num.current.value, 1))
  }

  asyncMinus = () => {
    this.props.store.dispatch(minusAsyncAction(+this.num.current.value, 1))
  }

  handleNumberChange = () => {
    const { value } = this.num.current
    if (value.length < 4) {
      this.setState({ number: value })
    }
  }

  render() {
    return (
      <div className='container'>
        <h1>Counter Case</h1>
        <h2>{this.props.store.getState()}</h2>
        变化梯度：
        <input type='number'
          value={this.state.number}
          onChange={this.handleNumberChange}
          ref={this.num} />
        <div className='btn-groups'>
          <button onClick={this.add}>增加</button>
          <button onClick={this.minus}>减少</button>
        </div>
        <div className='btn-groups'>
          <button onClick={this.asyncAdd}>异步增加</button>
          <button onClick={this.asyncMinus}>异步减少</button>
        </div>
      </div>
    )
  }
}
