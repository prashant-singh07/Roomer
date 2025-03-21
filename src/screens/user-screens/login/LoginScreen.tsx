import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS} from '../../../assets/theme';
import {
  CustomButton,
  CustomTextInput,
  CustomToastMessage,
  CustomTouchable,
} from '../../../components';
import {StackActions, useNavigation} from '@react-navigation/native';
import {performEmailPhoneValidation, SCREEN_WIDTH} from '../../../utilities';
import {IMAGES} from '../../../assets/images';
import {CustomToastMessageRef} from '../../../components/CustomToastMessage';
import {useDispatch, useSelector} from 'react-redux';
import {getSampleData} from '../../../store/sampleSlice';
import type {AppDispatch, RootState} from '../../../store/store'; // Import types

interface LoginScreenProps {}

const LoginScreen: FC<LoginScreenProps> = props => {
  const navigation = useNavigation();

  const emailPhoneValueRef = useRef('');
  const passwordValueRef = useRef('');
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const refModal = useRef<CustomToastMessageRef>(null);

  const dispatch = useDispatch<AppDispatch>();
  const {sampleData, sampleDataFailure, sampleDataLoading, sampleDataSuccess} =
    useSelector((state: RootState) => state.sample);

  useEffect(() => {
    dispatch(getSampleData());

    return () => {
      refModal.current = null;
    };
  }, []);

  function validateInputs() {
    const isEmailPhoneValid = performEmailPhoneValidation(
      emailPhoneValueRef.current,
    );
    const isPasswordValid = passwordValueRef.current.length > 0;
    return isEmailPhoneValid && isPasswordValid;
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
    console.log(
      'LOG:-->\nemail/phone:',
      emailPhoneValueRef.current,
      '\npassword:',
      passwordValueRef.current,
    );

    refModal.current?.open();

    // make the apii call to perform credential validation
    // if true -> save login creds -> navigate to home
    // else show error
  }

  function navigateToHomeScreens() {
    const replaceAction = StackActions.replace('BottomTabs');
    navigation.dispatch(replaceAction);
  }

  function handleGoogleLogin() {}

  function handleRegisterPressed() {
    const navigationAction = StackActions.push('RegisterScreen');
    navigation.dispatch(navigationAction);
  }

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text
          style={{
            fontSize: 40,
            marginBottom: 40,
            textAlign: 'center',
            color: COLORS['7F30FF'],
          }}>
          Roomer
        </Text>
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
        <View style={styles.orContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <CustomButton
          style={styles.googleButton}
          leftImage={IMAGES.GOOGLE_ICON}
          title="Login with Google"
          titleStyle={styles.googleButtonTitle}
          onPress={handleGoogleLogin}
        />
        <View style={styles.registerContainer}>
          <Text style={styles.registerDescriptionText}>
            Don't have an account?{' '}
          </Text>
          <CustomTouchable onPress={handleRegisterPressed}>
            <Text style={styles.registerText}>Register</Text>
          </CustomTouchable>
        </View>
      </ScrollView>
      <CustomToastMessage
        ref={refModal}
        isSuccess={true}
        message="Login Success"
        description=""
        onModalHide={() => navigateToHomeScreens()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS['FFFFFF'],
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: COLORS['FFFFFF'],
    paddingHorizontal: 20,
  },
  marginB20: {
    marginBottom: 20,
  },
  marginB30: {
    marginBottom: 30,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS['B1B1B1'],
  },
  orText: {
    fontSize: 18,
    fontFamily: FONTS.MEDIUM,
    color: COLORS['272727'],
    marginHorizontal: 20,
  },
  googleButton: {
    backgroundColor: COLORS['FFFFFF'],
    borderWidth: 1,
    borderColor: COLORS['E0E0E0'],
    // marginBottom: 40,
  },
  googleButtonTitle: {
    color: COLORS['272727'],
  },
  registerContainer: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerDescriptionText: {
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
    color: COLORS['272727'],
  },
  registerText: {
    fontSize: 18,
    fontFamily: FONTS.MEDIUM,
    color: COLORS['7F30FF'],
  },
});

export default LoginScreen;
