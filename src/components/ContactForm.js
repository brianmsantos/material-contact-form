import React, { Component } from 'react';
import {
  TextField,
  Button, 
} from "@material-ui/core";

export class ContactForm extends Component {
  state = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    message: "",
    messageError: "",
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
   let isError = false;
   const errors ={};

    if(this.state.name.length < 1){
      isError = true;
      errors.name = "Please enter your name";
    }

    if(this.state.email.indexOf("@") === -1){
      isError = true;
      errors.email = "Please enter a valid email";
    }

    if(this.state.message.length < 10){
      isError = true;
      errors.message = "Message must be at least 10 characters long";
    }
    
    if(isError) {
      this.setState({
        ...this.state,
        ...errors
      })
    }
    return isError;
  }

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if(!err){
      this.props.onSubmit(this.state)
      //clears form 
      this.setState({
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        message: "",
        messageError: "",
    });
    } 
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
      <form style={{ width: "50%" }}>
          <h1>Contact Form</h1>

          <TextField
            required
            id="filled-uncontrolled"
            label="Name"
            name="name"
            margin="normal"
            variant="filled"
            value={this.state.name}
            onChange={e => this.change(e)}
            errorText={this.state.nameError}
          />
          <br/ >
          <TextField
            required
            id="filled-uncontrolled"
            label="Email"
            name="email"
            margin="normal"
            variant="filled"
            value={this.state.email}
            onChange={e => this.change(e)}
            errorText={this.state.emailError}
          />
          <br/ >
          <TextField
            required
            id="filled-uncontrolled"
            label="Message"
            name="message"
            margin="normal"
            variant="filled"
            multiline
            rows='10'
            fullWidth
            value={this.state.message}
            onChange={e => this.change(e)}
            errorText={this.state.messageError}
          />
        
          <br />
          <br />
          <Button onClick={e => this.onSubmit(e)} variant="contained" color="primary" size="medium">
            Submit
          </Button>
        </form>
      </div>

    
    )
  }
}
export default ContactForm