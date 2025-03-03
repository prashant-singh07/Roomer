import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../assets/theme';

interface MessagesScreenProps {}

const MessagesScreen: FC<MessagesScreenProps> = props => {
  return (
    <View style={styles.screenContainer}>
      <Text>MessagesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.FFFFFF,
  },
});

export default MessagesScreen;
