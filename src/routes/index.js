import React, { Component } from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

// Screens
import Login from '../screens/login';
import Orders from '../screens/orders';

// Login stack screen
const LoginScreen = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

// Orders tab screen
const OrdersTabs = createStackNavigator({
  Orders: {
    screen: Orders
  }
});

const TabScreen = createBottomTabNavigator({
  Order: {
    screen: OrdersTabs,
    navigationOptions: {
      tabBarLabel: 'NOVO PEDIDO'
    }
  }
});

const Routes = () =>
  createSwitchNavigator(
    {
      LoginScreen,
      TabScreen
    },
    {
      initialRouteName: 'TabScreen'
    }
  );

export default Routes;
