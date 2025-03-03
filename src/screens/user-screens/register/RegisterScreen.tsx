import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../assets/theme';

interface RegisterScreenProps {}

const RegisterScreen: FC<RegisterScreenProps> = props => {
  return (
    <View style={styles.screenContainer}>
      <Text>RegisterScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.FFFFFF,
  },
});

export default RegisterScreen;
