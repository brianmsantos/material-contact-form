import React, { Component } from 'react';
import {
  Button, 
} from "@material-ui/core";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isName', (name) => {
      if (name.length < 2) {
          return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule('isMessage', (message) => {
      if (message.length < 10) {
          return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule('isName');
    ValidatorForm.removeValidationRule('isMessage');
  }

  handleChangeName = (event) => {
    const name = event.target.value;
    this.setState({ name });
  }

  handleChangeEmail = (event) => {
    const email = event.target.value;
    this.setState({ email });
  }

  handleChangeMessage = (event) => {
    const message = event.target.value;
    this.setState({ message });
  }

  onSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state)
      this.setState({
        name: "",
        email: "",
        message: "",
    });
    } 
  
  render() {
    const { 
      name,
      email,
      message
    } = this.state;

    
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
      <ValidatorForm style={{ width: "50%" }} ref="form"
      onSubmit={this.handleSubmit}
      onError={errors => console.log(errors)}>
          <h1>Contact Form</h1>

          <TextValidator
            label="Name"
            
            onChange={this.handleChangeName}
            name="name"
            value={name}
            validators={['required', 'isName']}
            errorMessages={['this field is required', 'Please enter your name.']}
            variant="filled"
          />
          <br/>
          <br/ >
          <TextValidator
            label="Email"
            onChange={this.handleChangeEmail}
            name="email"
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'Email is not valid']}
            variant="filled"
          />
          <br/ >
          <br/ >
          <TextValidator
            label="Message"
            multiline
            rowsMax="4"
            onChange={this.handleChangeMessage}
            name="Message"
            value={message}
            validators={['required', 'isMessage']}
            errorMessages={['this field is required', 'Please enter a message.']}
            variant="filled"
            fullWidth
            
          />
          <br/>
          <br/>
          
          <Button onClick={e => this.onSubmit(e)} variant="contained" color="primary" size="medium">
            Submit
          </Button>
        </ValidatorForm>
      </div>

    
    )
  }
}
export default ContactForm