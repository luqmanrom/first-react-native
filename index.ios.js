

// Import a lib to create a component

import React from 'react';

// Import destructuring
import {
  AppRegistry,
  Text
} from 'react-native'; 

import Header from './src/components/header';

// Create component
// Component is a JS function that returns some amount JSX code

const App = () => {

  return (
    <Header headerText={'Albums'}/>
  );
};

// Render it, to show on screen

AppRegistry.registerComponent('albums', () => App);