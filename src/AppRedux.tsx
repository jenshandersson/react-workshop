import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Root from "./components/Root";
import { store, persistor } from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
            <Root />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
