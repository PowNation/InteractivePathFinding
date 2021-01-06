// import logo from './logo.svg';
import React from 'react';
// import 'reset-css'
import './App.css'
import Board from "./components/Board"
import Location from "./components/Location"

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Location start={[2,2]} end={[10,10]}/>
                <Board />
            </div>
        )
    }
}

