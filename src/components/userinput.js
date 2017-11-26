import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Userinput extends Component {
  constructor(props) {
    super(props)
    this.state = {value: 'Type of Food'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      alert('Searching for: ' + this.state.value);
      event.preventDefault();
  }

  render() {
    return (
      <div className="Userinput">
        <form onSubmit={this.handleSubmit}>

            <input type="text" value={this.state.value} onChange={this.handleChange} />

            <input type="submit" value="Submit" />
        </form>

      </div>

    )
  }
}

Userinput.propTypes = {}

Userinput.defaultProps = {}

export default Userinput
