import React from "react";
import "./styles/output.css";
import "antd/dist/antd.css";

import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/counter/counter.actions";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slider from "./components/slider";

function App(props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Slider />
        <div>Count: {props.count}</div>

        <button onClick={() => props.increaseCounter()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </main>
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
