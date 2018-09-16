import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Routes from './routes';

export default class App extends Component {
  render() {
    const Layout = Routes();
    return <Layout />;
  }
}
