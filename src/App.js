import React from "react";
import Container from "./container/index";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

const InitialState = {
  output: 0
};

function reducer(state = InitialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        output: state.output + 1
      };
    case "DECREMENT":
      return {
        output: state.output - 1
      };
    default:
      return state;
  }
}
const store = createStore(reducer);

store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "DECREMENT"
});

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
