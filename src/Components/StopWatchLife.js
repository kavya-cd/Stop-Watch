import React from 'react';
import './StopWatch.css'
class StopWatchUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            minutes: 0,
            timer:0

        }
    }
    componentDidMount(){
       this.interval= setInterval(() => {
            this.setState({
                status:true,
                seconds: this.state.seconds === 59 ? 0 : this.state.seconds + 1,
                minutes: this.state.seconds === 59 ? this.state.minutes + 1 : this.state.minutes,
                timer:`${this.state.minutes}:${this.state.seconds}`
            })
    
        },2000);
    }
    componentWillUnmount(){
     clearInterval(this.interval)
     console.log("Component is unmounted")
    }
    shouldComponentUpdate(newProps,newState){
        if(this.state.seconds<=7){
            console.log(" should component",newState)
            return false
        }
        else{
            return true
        }
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("prev value is destroyed",prevState)
        console.log("component updated")
    }
    render() {
        return (
            <React.Fragment>
                <div className="stop-watch">
                    <h2>Stop watch</h2>
                    <div className="timer">
                    <h3>Time:{this.state.timer}</h3>
                    </div>
                
                </div>
              
            </React.Fragment>
        )
    }
}
export default StopWatchUpdate;