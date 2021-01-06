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
<<<<<<< HEAD
                <Board />
=======
>>>>>>> af6f3d12818fa9f5aacd51fe9c186510468c56e7
            </div>
        )
    }
}

