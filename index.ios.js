

// Import a lib to create a component

import React from 'react';

// Import destructuring
import {
  AppRegistry,
  Text,
  View
} from 'react-native'; 

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create component
// Component is a JS function that returns some amount JSX code

const App = () => {

  return (

    <View> 
     <Header headerText={'Albums'}/>

        <AlbumList />

    </View>
   
  );
};

// Render it, to show on screen

AppRegistry.registerComponent('albums', () => App);