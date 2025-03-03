import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../assets/theme';

interface SortedScreenProps {}

const SortedScreen: FC<SortedScreenProps> = props => {
  return (
    <View style={styles.screenContainer}>
      <Text>SortedScreenProps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.FFFFFF,
  },
});

export default SortedScreen;
