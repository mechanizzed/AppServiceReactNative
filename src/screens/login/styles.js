import { StyleSheet } from 'react-native';

import { colors } from '../../generals';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  formContainer: {
    alignSelf: 'stretch'
  },
  textInput: {
    height: 44,
    paddingHorizontal: 15,
    backgroundColor: colors.whiteTransparent,
    borderRadius: 20,
    color: colors.white,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10
  },
  buttonSignIn: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: colors.green,
    padding: 10,
    borderRadius: 20
  },
  textSignIn: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700'
  },
  icon: {
    marginRight: 10,
    fontSize: 18,
    color: colors.white
  }
});

export default styles;
