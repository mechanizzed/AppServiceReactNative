import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="key" style={styles.icon} />
          <Icon name="sign-out" style={styles.icon} />
        </View>
      </View>
    );
  }
}

export default Header;
