import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBKnYOCbSABcHh-dilT0vPykacDvs08yqw",
      authDomain: "apuhvz-test.firebaseapp.com",
      databaseURL: "https://apuhvz-test.firebaseio.com",
      projectId: "apuhvz-test",
      storageBucket: "",
      messagingSenderId: "295324303884"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;