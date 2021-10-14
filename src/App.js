import React from "react";
import "./styles/output.css";

import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/counter/counter.actions";

import Footer from "./components/footer/footer";

function App(props) {
  return (
    <div className="App">
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
