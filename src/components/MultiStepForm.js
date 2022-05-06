import React, { Component } from 'react';
import Intro from "./Intro";
import ReasonForContact from "./ReasonForContact";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";
import FindPostcode from "./FindPostcode";

class MultiStepForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        county: '',
        postcode:'',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    nextStep2 = () => {
        const { step } = this.state
        this.setState({
            step : 99
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const { step, firstName, lastName, email, address, city, county, postcode } = this.state;
        const inputValues = { firstName, lastName, email, address, city, county, postcode };
        switch(step) {
        case 1:
            return <Intro
                nextStep={this.nextStep}
                handleChange = {this.handleChange}
                inputValues={inputValues}
                />

        case 2:
            return <ReasonForContact
                nextStep={this.nextStep}
                nextStep2={this.nextStep2}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                inputValues={inputValues}
                />
case 99:
    return <FindPostcode
        nextStep={this.nextStep}
        nextStep2={this.nextStep2}
        prevStep={this.prevStep}
        handleChange = {this.handleChange}
        inputValues={inputValues}
        />

        case 3:
            return <UserDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                inputValues={inputValues}
                />

        case 4:
            return <AddressDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                inputValues={inputValues}
                />
        case 5:
            return <Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                inputValues={inputValues}
                />
        case 5:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />
        }
    }
}

export default MultiStepForm;