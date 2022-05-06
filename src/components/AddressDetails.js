import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class AddressDetails extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        return( <Container>
                    <Form>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={this.props.inputValues.address}
                                name="address"
                                required
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>

                   {/*     <Form.Row>     */}
                            <Form.Group as={Col} controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                type="text"
                                defaultValue={this.props.inputValues.city}
                                name="city"
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
                        {/*     </Form.Row>     */}

                        <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                        <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
                    </Form>
                </Container>
        );
    }
}

export default AddressDetails;