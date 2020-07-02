import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Main />
      </HashRouter>
    );
  }
}

export default App;
