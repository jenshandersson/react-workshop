/* eslint-disable */

import React from "react";

// PureComponents only rerender if at least one state or prop value changes.
// Change is determined by doing a shallow comparison of state and prop keys.
class Example extends PureComponent {
  state = {
    filterText: ""
  };

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    // The render method on this PureComponent is called only if
    // props.list or state.filterText has changed.
    const filteredList = this.props.list.filter(item =>
      item.text.includes(this.state.filterText)
    );

    return (
      <>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>
          {filteredList.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </>
    );
  }
}

import memoize from "memoize-one";

class Example extends Component {
  state = { filterText: "" };

  // Re-run the filter whenever the list array or filter text changes:
  filter = memoize((list, filterText) =>
    list.filter(item => item.text.includes(filterText))
  );

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    // Calculate the latest filtered list. If these arguments haven't changed
    // since the last render, `memoize-one` will reuse the last return value.
    const filteredList = this.filter(this.props.list, this.state.filterText);

    return (
      <Fragment>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>
          {filteredList.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
