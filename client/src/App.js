import React, { Component } from "react";
import "./App.css";
import Images from "./components/Images";
import { animateScroll as scroll } from "react-scroll";
// import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
// import ScrollUpButton from "react-scroll-up-button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading-primary">Infinity Scroll Application</h1>
        <hr></hr>

        <Images />

        <button
          type="button"
          className="btn-scrollup"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          Scroll up
        </button>
      </div>
    );
  }
}

export default App;
