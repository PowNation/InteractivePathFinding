import React from "react"
import TextField from "@material-ui/core/TextField"
import Board from "./Board"

class Location extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            start: this.props.start,
            end: this.props.end
        }
        this.changeLocation = this.changeLocation.bind(this)
    }
    changeLocation(event){
        var locationCheck = /\[\d\,\d\]/
        if(locationCheck.test(event.target.value)){
            this.setState({
                [event.target.name] : event.target.value
            }) 
        }  
    }
    
    render(){
        console.log(this.props.start)
        if(this.props.start){
            return (
                <div>
                    <form>
                        <TextField name="start" label="Start:" value={this.state.start} onChange={this.changeLocation}/>
                        <TextField name="end" label="End:" value={this.state.end} onChange={this.changeLocation}/>
                    </form>
                    <Board start={this.state.start} end={this.state.end}/>
                </div>
            )
        }
    }
}
export default Location