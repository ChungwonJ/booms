import React from 'react'
import Form from 'react-bootstrap/Form';

function UserInput() {
    return (
        <>
            <Form.Control
                type="text"
                placeholder="유저를 입력해주세요"
            />
        </>
    )
}

export default UserInput