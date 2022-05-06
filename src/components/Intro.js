import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class Intro extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
    return (

    <Container>


  <p class="font-weight-bold">Election enquiries</p>



  <p>This form will allow you to:</p>

  <ul>
    <li>Check if you are registered to vote at a specific address in Leeds</li>
    <li>Submit any other enquiry to electoral services in Leeds</li>
  </ul>

<p>We will respond to you within two working days or in time for any deadlines where possible.
</p>
  
  <p>
This form will take about 5 minutes to complete.
</p>

<Button type="button" variant="primary" class="btn btn-success" onClick={this.saveAndContinue}>Start now</Button>

    </Container>
    );
  }
       
}

export default Intro;