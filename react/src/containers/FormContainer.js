import React, { Component } from 'react'
import TextField from '../components/TextField'

class FormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.updateName(this.state.name);
  }

  render() {
    return (
      <div className="small-4 small-centered columns">
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            label="Name"
            name="name"
            type="input"
            handlerFunction={this.handleFieldChange}
            value={this.state.name}
          />
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    )
  }
}

export default FormContainer;
