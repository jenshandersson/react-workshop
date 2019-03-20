import React from "react";

export default class ControlledInput extends React.Component {
  state = {
    text: ""
  };

  _handleSubmit = (event: any) => {
    alert("A name was submitted: " + this.state.text);
    event.preventDefault();
  };

  _onChange = (event: any) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this._handleSubmit}>
        <label>
          Name:
          <input type="text" value={text} onChange={this._onChange} />
        </label>
        <input type="submit" value="Submit" />
        {text && <h2>Hi {text}</h2>}
      </form>
    );
  }
}
