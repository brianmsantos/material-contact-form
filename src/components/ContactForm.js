import React, { Component } from 'react';
import {
  FormControl,
  InputLabel, 
  Input, 
  Button, 
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

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input id="email" multiline rows={10} />
          </FormControl>

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