import React, { useState, Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class ReasonForContact extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  saveAndContinue = (e) => {

    e.preventDefault();

    if (this.state.reason == 'checkifregistered') {
      this.props.nextStep2();
    }
    else {
      this.props.nextStep();
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (

      <Container>


        <p class="font-weight-bold">Reason for contact</p>

        <div class="form-check">
          <input class="form-check-input" type="radio" value="checkifregistered" name="reason" onChange={this.handleChange} id="checkifregistered" />
          <label class="form-check-label" for="checkifregistered"> Check if you are registered to vote </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" value="otherenquiry" name="reason" onChange={this.handleChange} id="otherenquiry" />
          <label class="form-check-label" for="otherenquiry"> Other enquiry </label>
        </div>

        <Button variant="secondary" onClick={this.back}>Back</Button>{' '}

        <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>


      </Container>
    );
  }

}

export default ReasonForContact;