import React, { Component } from 'react';
import {
  FormControl,
  InputLabel, 
  Input, 
  TextField,
  Button, 
  TextArea
} from "@material-ui/core";

export class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
            id="outlined-name"
            label="Name"
            margin="normal"
            variant="outlined"
          />
          <br/ >
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <br/ >
          <TextField
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            fullWidth
            rowsMax="10"
            margin="normal"
            variant="outlined"
          />
        
          <br />
          <br />
          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
      // <form>
      //   <input
      //   name='name'
      //   placeholder='Name'
      //   value={this.state.name}
      //   onChange={e => this.change(e)}
      //   />
      //   <br/ >
      //   <input
      //   name='email'
      //   placeholder='Email'
      //   value={this.state.email}
      //   onChange={e => this.change(e)}
      //   />
        
      //   <input
      //   name='message'
      //   placeholder='Message'
      //   value={this.state.message}
      //   onChange={e => this.change(e)}
      //   />
      // </form>
    )
  }
}
export default ContactForm