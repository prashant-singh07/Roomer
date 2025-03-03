import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../assets/theme';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = props => {
  return (
    <View style={styles.screenContainer}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.FFFFFF,
  },
});

export default HomeScreen;
