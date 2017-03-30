import React, { Component } from 'react';
import Quote from '../components/Quote';
import FormContainer from './FormContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomQuote: "",
      name: ""
    }

    this.onFormChange = this.onFormChange.bind(this);
  }


  onFormChange(newName) {
    this.setState({ name: newName });
    let fetchTarget;
    if(newName !== ''){
      fetchTarget = `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${newName}`
      fetch(fetchTarget)
        .then(response => {
          if(response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({ randomQuote: body.message })
        })
        .catch(error => console.error(`Error in Fetch: ${error.message}`));
    }
  }

  componentDidMount() {
    let fetchTarget;
    if(this.state.name !== ""){
      fetchTarget = `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${this.state.name}`
    } else {
      fetchTarget = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
    }
    fetch(fetchTarget)
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ randomQuote: body.message })
      })
      .catch(error => console.error(`Error in Fetch: ${error.message}`));
  }

  render() {
    return(
      <div className="row">
        <Quote quote={this.state.randomQuote} />
        <FormContainer updateName={this.onFormChange}/>
      </div>
    )
  }
}

export default App;
