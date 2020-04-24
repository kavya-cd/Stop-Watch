import React from "react";

class ParaCountUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    clickHandler = () => {
        this.setState({ counter: this.state.counter + 1 })
        let newCounter = this.state.counter
        this.props.counterHandler(newCounter)
    }
    shouldComponentUpdate(newProps, newState) {
        if (this.state.counter <= 3) {
            console.log("should Component Update", newProps)
            return false
        }
        else {
            return true
        }
    }
componentDidUpdate(prevProps,prevState,snapshot){
console.log("prev value is destroyed",prevProps)
console.log("component updated")
}

render() {
    return (
        <React.Fragment>
            <p onClick={this.clickHandler}>this is my paragraph</p>
        </React.Fragment>
    )
}

};
export default ParaCountUpdate;