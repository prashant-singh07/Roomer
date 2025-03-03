import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../assets/theme';

interface LoginScreenProps {}

const LoginScreen: FC<LoginScreenProps> = props => {
  return (
    <View style={styles.screenContainer}>
      <Text>LoginScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.FFFFFF,
  },
});

export default LoginScreen;
