import React, { Component } from 'react'
import ContactForm  from './components/ContactForm'
import Container from '@material-ui/core/Container';

class App extends Component {
onSubmit = fields => {
  console.log("App comp got: ", fields)
}

  render() {
    return (
      <Container>
      <ContactForm onSubmit={fields => this.onSubmit(fields)} />
      </Container>
    )
  }
}

export default App;
