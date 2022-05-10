import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class Confirmation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            email: '',
            teleNumber: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    async handleSubmit(event) {
        event.preventDefault();
        const { inputValues: { fullName, email, housenumber, addressline1, addressline2, town, county, postcode, enquirydetails } } = this.props;
        await axios.post(
            'https://d1ueju2or9.execute-api.eu-west-2.amazonaws.com/default/PostToElectionEnquiries2022',
            {
                customerfullname: `${fullName}`,
                customeremail: `${email}`,
                customerhousenumber: `${housenumber}`,
                customeraddressline1: `${addressline1}`,
                customeraddressline2: `${addressline2}`,
                customertown: `${town}`,
                customercounty: `${county}`,
                customerpostcode: `${postcode}`,
                customerenquiry: `${enquirydetails}`
            }
        );
    }

    render() {
        const { inputValues: { fullName, email, housenumber, addressline1, addressline2, town, county, postcode, enquirydetails } } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <Container>
                    <h1>Check your answers before submitting your form</h1>
                    <p>If your details are correct, select 'Submit' to send the form. If you need to change anything, select the 'Back' link to go back through the form.</p>
                    <p>Name: {fullName}</p>
                    <p>Email: {email}</p>
                    <p>House number: {housenumber}</p>
                    <p>Address line 1: {addressline1}</p>
                    <p>Address line 2: {addressline2}</p>
                    <p>Town: {town}</p>
                    <p>County: {county}</p>
                    <p>Postcode: {postcode}</p>
                    <p>Enquiry details: {enquirydetails}</p>
                    <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                    <Button type="submit" variant="primary">Confirm</Button>

                </Container>
            </form>
        )
    }
}

export default Confirmation;