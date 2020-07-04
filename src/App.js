import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import {Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore'
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const store=ConfigureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
