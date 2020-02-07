import React from 'react'
import MiddleBar from './common/MiddleBar';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const WriteComponent = () => {
    const body = {
        padding:'50px',
    }

    return(
        <div>
            <MiddleBar>Write Notice</MiddleBar>
            <Form style={body}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="title" name="title" id="title" placeholder="title here!" />
                </FormGroup>
                <FormGroup>
                    <Label for="TextBody">Text Body</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    );
}

export default WriteComponent;