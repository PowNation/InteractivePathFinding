import React from "react"
import TextField from "@material-ui/core/TextField"
import Board from "./Board"

class Location extends React.Component{
    constructor(props){
        super(props)
<<<<<<< HEAD
=======

>>>>>>> af6f3d12818fa9f5aacd51fe9c186510468c56e7
        this.state = {
            start: this.props.start,
            end: this.props.end
        }
<<<<<<< HEAD
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
=======
        
        this.changeLocation = this.changeLocation.bind(this)
    }
    changeLocation(event){
        var locationCheck = /\d+,\d+/
        if(locationCheck.test(event.target.value)){
            var thing = event.target.value.split(",")
            thing[0] = parseInt(thing[0])
            thing[1] = parseInt(thing[1])
        }
        this.setState({
            [event.target.name] : thing
        })
    }
    
    render(){
        return (
            <div>
                <TextField name="start" label="Start:" value={this.state.start} onChange={this.changeLocation}/>
                <TextField name="end" label="End:" value={this.state.end} onChange={this.changeLocation}/>
                <Board start={this.state.start} end={this.state.end}/>
            </div>
        )
>>>>>>> af6f3d12818fa9f5aacd51fe9c186510468c56e7
    }
}
export default Location