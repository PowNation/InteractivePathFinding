import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
