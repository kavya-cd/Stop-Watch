import React from 'react'
import ReactDOM from 'react-dom'
import  StopWatchLife from './Components/StopWatchLife'
ReactDOM.render(<StopWatchLife />,document.getElementById('root'))
setInterval(() => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}, 25000);
// import StopWatch from './Components/StopWatch'

// ReactDOM.render(<StopWatch/>,document.getElementById('root'))
