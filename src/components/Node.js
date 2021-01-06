import React from "react"
import ReactDOM from "react-dom"
import "./Node.css"

class Node extends React.Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
        
    }

    clickNode = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }))
    }

    render() {
        return (
            <button 
                className="node" 
                style={{
                    backgroundColor: this.props.isStart ? "green" 
                    : this.props.isEnd ? "red" 
                    : this.state.clicked ? "black" : "white"
                }} 
                onClick={() => 
                    this.clickNode()
                }>
            </button>
        )
    }
}

export default Node;