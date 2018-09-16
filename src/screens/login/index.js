import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import Errors from './components/errors';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: null,
    error: null,
    errorLogin: false
  };

  checkSaveUser = async () => {};

  signIn = async () => {
    const { email, password } = this.state;
    if (email.length === 0 || password.length === 0)
      return this.setState({ error: true, errorLogin: false, loading: false });
    this.setState({ loading: true, error: false });
    this.props.navigation.navigate('TabScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/bg-login.jpg')}
        >
          <View style={styles.formContainer}>
            <Errors
              error={this.state.error}
              errorLogin={this.state.errorLogin}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#bccfd6"
              onChangeText={email => {
                this.setState({ email });
              }}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#bccfd6"
              secureTextEntry={true}
              onChangeText={password => {
                this.setState({ password });
              }}
            />

            <TouchableOpacity style={styles.buttonSignIn} onPress={this.signIn}>
              {this.state.loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={styles.textSignIn}>
                  <Icon name="sign-in" style={styles.icon} /> Entrar
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;
