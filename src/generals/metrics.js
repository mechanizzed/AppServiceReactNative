import { Platform, StatusBar, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  marginTopPlatform: Platform.OS === 'android' ? 30 : null,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
};
