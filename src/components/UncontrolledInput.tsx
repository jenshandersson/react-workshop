import React from "react";

export default class UncontrolledInput extends React.Component<{}, {}> {
  private input: any;

  constructor(props: any) {
    super(props);
    this.input = React.createRef();
  }

  _handleSubmit = (event: React.FormEvent) => {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
