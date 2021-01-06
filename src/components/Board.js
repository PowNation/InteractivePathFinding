import Node from "./Node"
import React from "react"
import ReactDOM from "react-dom"
import "./Board.css"

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            start:this.props.start,
            end:this.props.end
        }
    }
    createNodes = () => {
        let tableRow = []
        for (let i = 0; i < 20; i++) {
            let nodes = []
            for (let j = 0; j < 20; j++) {
                if(i === this.state.start[0] && j === this.state.start[1]){
                    nodes.push(<Node isstart={true}></Node>)
                }
                else if(i === this.state.end[0] && j === this.state.end[1]){
                    nodes.push(<Node isend={true}></Node>)
                }
                else nodes.push(<Node/>)
            }
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
