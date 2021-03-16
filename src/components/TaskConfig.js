import { React } from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';


import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function TaskConfig() {

    return (
        <div>
            <Row>
                <Col xs={5}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Task"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Col>
                <Col xs={3}>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>High</option>
                    </Form.Control>
                </Col>
                <Col xs={2}>
                    <Button variant="primary">Submit</Button>
                </Col>
                <Col xs={2}>
                    <Button variant="secondary">Cancel</Button>
                </Col>
            </Row>
        </div>
    )
}