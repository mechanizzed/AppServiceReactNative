import { StyleSheet } from 'react-native';
import { colors } from '../../../../generals';

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorText: {
    color: colors.warning,
    fontSize: 14,
    fontWeight: '700'
  }
});

export default styles;
