import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Node extends React.Component {
    constructor(props) {
        super(props)

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
            <button className="node" style={{backgroundColor: this.state.clicked ? "black" : "white"}} onClick={() => this.clickNode()}></button>
        )
    }
}

class Board extends React.Component {
    createNodes = () => {
        let tableRow = []
        for (let i = 0; i < 20; i++) {
            let nodes = []
            for (let j = 0; j < 20; j++) {
                nodes.push(<Node/>)
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

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
)