import React from "react"
import ReactDOM from "react-dom"
import "./Node.css"

class Node extends React.Component {
<<<<<<< HEAD
    constructor() {
        super()
        this.state = {
            clicked: false
        }
        
=======
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
>>>>>>> af6f3d12818fa9f5aacd51fe9c186510468c56e7
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
<<<<<<< HEAD
                    backgroundColor: this.props.isstart ? "green" 
                    : this.props.isend ? "red" 
=======
                    backgroundColor: this.props.isStart ? "green" 
                    : this.props.isEnd ? "red" 
>>>>>>> af6f3d12818fa9f5aacd51fe9c186510468c56e7
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