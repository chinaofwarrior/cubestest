/**
 *
 * Metacubes is an metaverse social App
 * 
 * 
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux'
import {legacy_createStore, applyMiddleware} from 'redux'
import AppReducer from './src/reducers'
import AppNavigator from './src/navigators/AppNavigator';
import thunk from 'redux-thunk';


const getStore = legacy_createStore(
  AppReducer,
  applyMiddleware(thunk)
)

class App extends React.Component {

  // static isConnected() {
  //   return new Promise((resolve, reject) => {
  //     let isConnected = getStore.getState().auth.isConnected;
  //     if (isConnected) {
  //       resolve(isConnected)
  //     } else {
  //       reject(isConnected)
  //     }
  //   })
  // }

  render() {
    return (
        <Provider store={getStore}>
          <AppNavigator />
        </Provider>
    );
  }
}

export default App