import Node from "./Node"
import React from "react"
import ReactDOM from "react-dom"
import "./Board.css"

class Board extends React.Component {
    constructor(props){
        super(props)
<<<<<<< HEAD
        this.state ={
            start:this.props.start,
            end:this.props.end
        }
    }
=======

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

>>>>>>> af6f3d12818fa9f5aacd51fe9c186510468c56e7
    createNodes = () => {
        let tableRow = []
        for (let i = 0; i < 20; i++) {
            let nodes = []
            for (let j = 0; j < 20; j++) {
<<<<<<< HEAD
                if(i === this.state.start[0] && j === this.state.start[1]){
                    nodes.push(<Node isstart={true}></Node>)
                }
                else if(i === this.state.end[0] && j === this.state.end[1]){
                    nodes.push(<Node isend={true}></Node>)
                }
                else nodes.push(<Node/>)
            }
=======
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
>>>>>>> af6f3d12818fa9f5aacd51fe9c186510468c56e7
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
