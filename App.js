import React, { Component } from 'react';  
import {createStackNavigator, createAppContainer} from 'react-navigation';  
import Home from './src/Home';
import RenderData from './src/RenderData';

const AppNavigator = createStackNavigator(  
    {
      Home,
      RenderData:{
        screen: RenderData,
          navigationOptions: () => ({
            header :null
          })
      },
    },
    {
      initialRouteName: 'Home'
    }
  );

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {  
  render() {
    return <AppContainer />;
  }
}