import React, {FC, useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../../assets/theme';
import {
  CustomButton,
  CustomTextInput,
  CustomToastMessage,
  CustomTouchable,
} from '../../../components';
import {StackActions, useNavigation} from '@react-navigation/native';
import {
  performEmailPhoneValidation,
  performNameValidation,
} from '../../../utilities';
import {IMAGES} from '../../../assets/images';
import {CustomToastMessageRef} from '../../../components/CustomToastMessage';

interface RegisterScreenProps {}

const RegisterScreen: FC<RegisterScreenProps> = props => {
  const navigation = useNavigation();
  const nameValueRef = useRef('');
  const emailPhoneValueRef = useRef('');
  const passwordValueRef = useRef('');
  const registerMessageModalRef = useRef<CustomToastMessageRef>(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  //   useEffect(() => {
  //     if(registerSuccess) {
  // modal content -> success
  //     }
  //     if(registerFailure) {
  //       modal content -> failure
  //     }
  //     show modal
  //   }, [
  //     //dependecy-> success/failure of server call for registration
  //   ]);

  function validateInputs() {
    const isNameValid = performNameValidation(nameValueRef.current);
    const isEmailPhoneValid = performEmailPhoneValidation(
      emailPhoneValueRef.current,
    );
    const isPasswordValid = passwordValueRef.current.length > 0;
    return isNameValid && isEmailPhoneValid && isPasswordValid;
  }

  function handleNameChanged(inputText: string) {
    nameValueRef.current = inputText;
    setIsButtonEnabled(validateInputs());
  }

  function handleEmailPhoneChanged(inputText: string) {
    emailPhoneValueRef.current = inputText;
    setIsButtonEnabled(validateInputs());
  }

  function handlePasswordChanged(inputText: string) {
    passwordValueRef.current = inputText;
    setIsButtonEnabled(validateInputs());
  }

  function handleContinuePressed() {
    // call server to store the data

    registerMessageModalRef.current?.open();
  }

  function handleLoginPressed() {
    navigation.goBack();
    // const navigationAction = StackActions.pop();
    // navigation.dispatch(navigationAction);
  }

  function navigateToBottomTabs() {
    const replaceAction = StackActions.replace('BottomTabs');
    navigation.dispatch(replaceAction);
  }

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.fillDetailsHeader}>Please fill the details</Text>
        <CustomTextInput
          label="Name"
          onChangeText={handleNameChanged}
          containerStyle={styles.marginB20}
        />
        <CustomTextInput
          label="Email/Phone"
          onChangeText={handleEmailPhoneChanged}
          containerStyle={styles.marginB20}
        />
        <CustomTextInput
          label="Password"
          onChangeText={handlePasswordChanged}
          containerStyle={styles.marginB30}
        />
        <CustomButton
          disabled={!isButtonEnabled}
          title="Continue"
          onPress={handleContinuePressed}
        />
        <View style={styles.loginContainer}>
          <Text style={styles.loginDescriptionText}>
            Already have an account?{' '}
          </Text>
          <CustomTouchable onPress={handleLoginPressed}>
            <Text style={styles.loginText}>Login</Text>
          </CustomTouchable>
        </View>
      </ScrollView>
      <CustomToastMessage
        ref={registerMessageModalRef}
        onModalHide={navigateToBottomTabs}
        isSuccess={true}
        message="Sign up Complete !!"
        description="Complete your profile to explore Roomer"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS['FFFFFF'],
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS['FFFFFF'],
    paddingHorizontal: 20,
  },
  fillDetailsHeader: {
    marginVertical: 40,
    fontSize: 20,
    fontFamily: FONTS.BOLD,
    color: COLORS['7F30FF'],
  },
  marginB20: {
    marginBottom: 20,
  },
  marginB30: {
    marginBottom: 30,
  },
  loginContainer: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginDescriptionText: {
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
    color: COLORS['272727'],
  },
  loginText: {
    fontSize: 18,
    fontFamily: FONTS.MEDIUM,
    color: COLORS['7F30FF'],
  },
});

export default RegisterScreen;
