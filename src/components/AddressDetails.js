import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class AddressDetails extends Component {

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

                <Form.Group controlId="formHousenumber">
                    <Form.Label>House number or building name</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={this.props.inputValues.housenumber}
                        name="housenumber"
                        required
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formAddressLine1">
                    <Form.Label>Address line 1</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={this.props.inputValues.addressline1}
                        name="addressline1"
                        required
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formAddressLine2">
                    <Form.Label>Address line 2</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={this.props.inputValues.addressline2}
                        name="addressline2"
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formTown">
                    <Form.Label>Town</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={this.props.inputValues.town}
                        name="town"
                        required
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formState">
                    <Form.Label>County</Form.Label>
                    <Form.Control as="select" name="county" defaultValue={this.props.inputValues.county} onChange={this.props.handleChange}>
                        <option value="AN">Antrim</option>
                        <option value="AR">Armagh</option>
                        <option value="DE">Derry</option>
                        <option value="DO">Down</option>
                        <option value="FE">Fermanagh</option>
                        <option value="TY">Tyrone</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formPostcode">
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={this.props.inputValues.postcode}
                        name="postcode"
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

export default AddressDetails;