import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class Submit extends Component {

    render() {
        return (
            <div className="container">
                <div className='col-xs-4'>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter Todo" value={this.props.makeTodo} onChange={this.props.handleTodoChange} style={{background:'#44475a', border:"#44475a", color:"#50fa7b"}} />
                        </Form.Group>
                        <Button variant="primary" style={buttonStyle} type="submit" onClick={this.props.createTodo}>Make Todo</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

const buttonStyle = {
    background:"#50fa7b",
    color:"#282a36",
    border:"#50fa7b"
}