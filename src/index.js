import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logo from './images/logo.png'

const App = () => {
  console.log('....', process.env.NODE_ENV)
  return (
    <div>
      <p>hello react121</p>
      <img src={logo} alt="" />
      <div className="img"></div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
