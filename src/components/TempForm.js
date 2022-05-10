import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row, Form, Button } from "react-bootstrap";

class TempForm extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (<Container>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label className="label">First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            required
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
            </Form>
        </Container>
        );
    }
}

export default TempForm;