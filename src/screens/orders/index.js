import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

// header
import Header from '../../components/header';

class Orders extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Header navigation={navigation} />
  });
  render() {
    return (
      <View>
        <Text>Order first screen</Text>
      </View>
    );
  }
}

export default Orders;
