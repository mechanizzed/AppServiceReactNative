import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Erros extends Component {
  render() {
    return (
      <View>
        {this.props.error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Preencha todos os campos corretamente
            </Text>
          </View>
        ) : (
          <Text />
        )}

        {this.props.errorLogin ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Invalid email or password</Text>
          </View>
        ) : (
          <Text />
        )}
      </View>
    );
  }
}

export default Erros;
