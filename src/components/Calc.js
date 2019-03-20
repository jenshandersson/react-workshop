import React from "react";

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

class Calc extends React.Component {
  state = {
    total: 0
  };
  _digitClicked = digit => {
    const total = this.state.total;
    this.setState({ total: total + digit });
  };
  render() {
    return (
      <div>
        <h2>Total: {this.state.total}</h2>
        <div className="digits">
          <button onClick={() => this._digitClicked(1)}>1</button>
          <button onClick={() => this._digitClicked(2)}>2</button>
          <button onClick={() => this._digitClicked(3)}>3</button>
        </div>
      </div>
    );
  }
}

export default Calc;
