import React from "react";

type Props = {
  initialCount: number;
};

type State = {
  counter: {
    count: number;
  };
  clicks: Date[];
};

class Counter extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: {
        count: 0
      },
      clicks: []
    };
  }

  _increment = () => {
    this.setState(prevState => ({
      counter: { count: prevState.counter.count + 1 },
    }));
  };

  render() {
    return (
      <div>
        <h3>Count: {this.state.counter.count}</h3>
        <ul>
          {this.state.clicks.map(l => (
            <li key={l.toISOString()}>{l.toISOString()}</li>
          ))}
        </ul>
        <br />
        <button onClick={this._increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
