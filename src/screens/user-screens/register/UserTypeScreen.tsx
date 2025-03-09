import React, {FC, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, BackHandler} from 'react-native';
import {COLORS} from '../../../assets/theme';
import {CustomSelectableChip} from '../../../components/custom-selectable-chip';
import {CustomButton} from '../../../components';
import {StackActions, useNavigation} from '@react-navigation/native';
// import usePreventBack from '../../../utilities';

interface UserTypeScreenProps {}

const USER_TYPE = [
  {
    id: 0,
    title: 'a flat',
    description: 'along with flatmate(s)',
  },
  {
    id: 1,
    title: 'a flatmate',
    description: 'I have a spare room in my flat',
  },
];

const UserTypeScreen: FC<UserTypeScreenProps> = props => {
  const navigation = useNavigation();
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const userTypeIdRef = useRef<number | null>(null);

  // usePreventBack();

  function handleUserTypePressed(id: number | null) {
    userTypeIdRef.current = id;
    if (id != null) setIsButtonEnabled(true);
    else setIsButtonEnabled(false);
  }

  function handleContinuePressed() {
    const params = {
      userId: userTypeIdRef.current,
    };
    const navigationAction = StackActions.push(
      'CompleteYourProfileScreen',
      params,
    );
    navigation.dispatch(navigationAction);
  }

  return (
    <View style={styles.screenContainer}>
      <CustomSelectableChip
        containerStyle={styles.marginB20}
        title="I'm looking for"
        data={USER_TYPE}
        onChipPress={handleUserTypePressed}
      />
      <CustomButton
        disabled={!isButtonEnabled}
        title="Continue"
        onPress={handleContinuePressed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS['FFFFFF'],
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  marginB20: {
    marginBottom: 20,
  },
});

export default UserTypeScreen;
