import React, { Component } from 'react'
import ContactForm  from './components/ContactForm'
import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
      <Container>
      <ContactForm />
      </Container>
    )
  }
}

export default App;
