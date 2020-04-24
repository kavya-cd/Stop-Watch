import React from 'react';
import ParaCountUpdate from  './ParaCountUpdate'
class ParaCount extends React.Component{
constructor(){
    super()
    this.state={
    parentCounter:0
    }
}
handler=(value)=>{
let Counter = value
this.setState({parentCounter:Counter})
}
  componentDidMount(){
      this.timer=setInterval(this.handler,2000)
  } 
  componentWillUnmount(){
    clearInterval(this.timer)
  }
render(){
    return(
        <React.Fragment>
            <h3>Counter value  is  {this.state.parentCounter}</h3>
            <ParaCountUpdate  counterHandler={this.handler}/>
             
        </React.Fragment>
    )
}

};
export default ParaCount;