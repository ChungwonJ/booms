import React from 'react'
import Form from 'react-bootstrap/Form';

function UserInput(props) {
    return (
        <>
            <Form.Control
                type="text"
                placeholder={props.placeholder}
                style={{marginBottom : '10px'}}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    )
}

export default UserInput