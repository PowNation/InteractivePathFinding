import Node from "./Node"
import React from "react"
import ReactDOM from "react-dom"
import "./Board.css"

class Board extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            start: this.props.start,
            end: this.props.end
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.start !== props.start) {
            return {
                start: props.start
            }
        }
        if (current_state.end !== props.end) {
            return {
                end: props.end
            }
        }
        return null
    }

    createNodes = () => {
        let tableRow = []
        for (let i = 0; i < 20; i++) {
            let nodes = []
            for (let j = 0; j < 20; j++) {
                if (this.state.start) {
                    if (i === this.state.start[0] && j === this.state.start[1]){
                        nodes.push(<Node isStart={true}></Node>)
                        continue
                    }
                }
                if (this.state.end) {
                    if (i === this.state.end[0] && j === this.state.end[1]){
                        nodes.push(<Node isEnd={true}></Node>)
                        continue
                    }
                }
                nodes.push(<Node/>)
            }
            console.log(nodes)
            tableRow.push(<tr className={i}>{nodes}</tr>)
        }
        return tableRow
    }

    render() {
        return (
            <table className="board">
                {this.createNodes()}
            </table>
        );
    }
}

export default Board;
