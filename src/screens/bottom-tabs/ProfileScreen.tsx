import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../assets/theme';

interface ProfileScreenProps {}

const ProfileScreen: FC<ProfileScreenProps> = props => {
  return (
    <View style={styles.screenContainer}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.FFFFFF,
  },
});

export default ProfileScreen;
