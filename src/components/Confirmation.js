import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

class Confirmation extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render(){
        const {inputValues: { firstName, lastName, email, address, city, county, postcode }} = this.props;

        return(
            <Container>             
                <h1>Confirm your Details</h1>
                <p>Confirm if the following details are correct.</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Adress: {address}</p>
                <p>City: {city}</p>
                <p>County: {county}</p>
                <p>Postcode: {postcode}</p>
                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary">Confirm</Button>

            </Container>

        )
    }
}

export default Confirmation;