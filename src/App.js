import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "en"
    };
  }

  handleLanguageChange = newLanguage => {
    const { i18n } = this.props;
    if (newLanguage !== this.state.language) {
      this.setState(
        {
          language: newLanguage
        },
        () => {
          i18n.changeLanguage(newLanguage);
        }
      );
    }
  };

  render() {
    const { t } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{t("welcome.toReact", { name: "Test" })}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.handleLanguageChange("en")}>
            Language: EN
          </button>
          <button onClick={() => this.handleLanguageChange("fr")}>
            Language: FR
          </button>
        </header>
      </div>
    );
  }
}

export default App;
