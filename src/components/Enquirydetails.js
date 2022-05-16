import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class Enquirydetails extends Component {

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
                <Form.Group controlId="enquirydetails">
                    <Form.Label>Enquiry details</Form.Label>
                    <Form.Control  as="textarea" rows={3}
                        //type="text"
                        defaultValue={this.props.inputValues.enquirydetails}
                        name="enquirydetails"
                        required
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
            </Form>
        </Container>
        );
    }
}

export default Enquirydetails;