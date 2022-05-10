import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class FindPostcode extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <Container>
                <Form>

                    <Form.Group as={Col} controlId="formPostcode">
                        <Form.Label className="label">Postcode</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={this.props.inputValues.postcode}
                            name="postcode"
                            required
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>


                    <Button variant="secondary" onClick={this.back}>Back</Button>{' '}

                    <Button variant="primary" onClick={this.saveAndContinue}>Find address</Button>
                </Form>
            </Container>
        );
    }
}

export default FindPostcode;