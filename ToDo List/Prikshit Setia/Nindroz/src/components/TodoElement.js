import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class TodoElement extends Component {
    render() {
        return (
            <div key={this.props.index} className="row" >
                <h1 style={textStyle} >{this.props.tasks.name}</h1>
                <Button onClick={() => this.props.deleteTodo(this.props.tasks.id)} style={buttonStyle} className="ml-auto">Delete</Button>
            </div>
        )
    }
    
}

const buttonStyle = { 
    display: 'float-right',
    verticalAlign: 'middle',
    margin:'10px',
    marginRight:'150px',
    background:"#50fa7b",
    color:"#282a36",
    border:"#50fa7b"
}

const textStyle = {
    marginLeft:"150px",
    color:"#50fa7b"
}

