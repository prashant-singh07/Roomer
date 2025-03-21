import React, {FC, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../../assets/theme';
import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import {CustomSelectableChip} from '../../../components/custom-selectable-chip';
import DatePicker from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';
import {CustomButton, CustomModal, CustomTextInput} from '../../../components';
import {IMAGES} from '../../../assets/images';
import {CustomModalRef} from '../../../components/CustomModal';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {SCREEN_WIDTH} from '../../../utilities';

const TIME_OF_STAY = [
  {
    id: 0,
    title: 'Short term (less than 6 months)',
  },
  {
    id: 1,
    title: 'Long term (more than 6 months)',
  },
  {
    id: 2,
    title: 'Not sure yet',
  },
];

const GENDER = [
  {
    id: 0,
    title: 'Male',
  },
  {
    id: 1,
    title: 'Female',
  },
  {
    id: 2,
    title: 'Other?',
  },
];

const WHAT_DO_YO_DO = [
  {
    id: 0,
    title: 'Employed',
  },
  {
    id: 1,
    title: 'Student',
  },
  {
    id: 2,
    title: 'Unemployed',
  },
];

const DIETARY_HABITS = [
  {
    id: 0,
    title: 'Vegan',
  },
  {
    id: 1,
    title: 'Vegetarian',
  },
  {
    id: 2,
    title: 'Non-Vegetarian',
  },
];

const SLEEPING_HABIT = [
  {
    id: 0,
    title: 'Early Bird',
  },
  {
    id: 1,
    title: 'Night Owl',
  },
];

const DO_YOU_HAVE_VEHICLE = [
  {
    id: 0,
    title: 'Two Wheeler',
  },
  {
    id: 1,
    title: 'Four Wheeler',
  },
  {
    id: 2,
    title: "I don't have a vehicle",
  },
];

interface CompleteYourProfileScreenProps {
  route: any;
}

const CompleteYourProfileScreen: FC<CompleteYourProfileScreenProps> = props => {
  const UPLOAD_PROFILE_PICTURE = [
    {
      id: 0,
      title: 'Click a Picture',
      action: handleClickPicturePressed,
    },
    {
      id: 1,
      title: 'Upload from Gallery',
      action: handleUploadFromGallery,
    },
  ];
  const navigation = useNavigation();
  const route = useRoute();
  // const {userId} = route?.params; //userId->0-> looking for flat + flatmates; userId->1-> looking for flatmate;

  const doesUserHasFlat = false; //!!userId;

  const timeOfStayIdRef = useRef<number | null>(null);
  const genderIdRef = useRef<number | null>(null);
  const whatDoYouDoIdRef = useRef<number | null>(null);
  const dietaryHabitIdRef = useRef<number | null>(null);
  const sleepingHabitIdRef = useRef<number | null>(null);
  const doYouHaveVehicleIdRef = useRef<number | null>(null);
  const profileCompleteModalRef = useRef<CustomModalRef>(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([14000, 20000]);

  function handleTimeOfStayPressed(id: number | null) {
    console.log('id handleTimeOfStayPressed', id);
    timeOfStayIdRef.current = id;
  }

  function handleGenderPressed(id: number | null) {
    console.log('id handleGenderPressed', id);
    genderIdRef.current = id;
  }

  function handleWhatDoYouDoPressed(id: number | null) {
    console.log('id handleWhatDoYouDoPressed', id);
    whatDoYouDoIdRef.current = id;
  }

  function handleDietaryHabitsPressed(id: number | null) {
    console.log('id handleWhatDoYouDoPressed', id);
    dietaryHabitIdRef.current = id;
  }

  function handleSleepingHabitPressed(id: number | null) {
    console.log('id handleWhatDoYouDoPressed', id);
    sleepingHabitIdRef.current = id;
  }

  function handleDoYouHaveVehiclePressed(id: number | null) {
    console.log('id handleWhatDoYouDoPressed', id);
    doYouHaveVehicleIdRef.current = id;
  }

  function handleUploadProfilePicturePressed(id: number | null) {
    console.log('id handleUploadProfilePicturePressed', id);
    const selectedItem = UPLOAD_PROFILE_PICTURE.filter(item => item.id == id);
    const isActionAvailable = Array.isArray(selectedItem);
    if (isActionAvailable) {
      selectedItem[0].action();
      return;
    }
    return;
  }

  function handleClickPicturePressed() {}

  function handleUploadFromGallery() {}

  function handleContinuePressed() {
    //call server to save the data and on completion update the redux state, -> useEffect will help in displaying modal
    profileCompleteModalRef.current?.open();
  }

  function handleNavigation() {
    doesUserHasFlat ? navigateToAddFlatDetailsScreen() : navigateToHomeScreen();
  }

  function navigateToHomeScreen() {
    const navigateToHomeScreenAction = StackActions.push('BottomTabs');
    navigation.dispatch(navigateToHomeScreenAction);
  }

  function navigateToAddFlatDetailsScreen() {
    const navigateToAddFlatDetailsScreenAction = StackActions.push(
      'AddFlatDetailsScreen',
    );
    navigation.dispatch(navigateToAddFlatDetailsScreenAction);
  }
  const [leftValue, setLeftValue] = useState(20);
  const [rightValue, setRightValue] = useState(80);
  return (
    <View style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {doesUserHasFlat ? null : (
          <>
            <Text style={styles.titleStyle}>Select Your Rent Range</Text>
            <MultiSlider
              values={values}
              min={10000}
              max={30000}
              step={1}
              onValuesChange={val => setValues(val)}
              selectedStyle={{backgroundColor: COLORS['7F30FF']}}
              unselectedStyle={{backgroundColor: COLORS['E0E0E0']}}
              containerStyle={{
                borderWidth: 1,
                borderColor: COLORS['E0E0E0'],
                paddingHorizontal: 20,
                paddingTop: 20,
                // paddingBottom: 30,
                justifyContent: 'flex-start',
                height: 60,
                borderRadius: 12,
                marginBottom: 20,
              }}
              markerStyle={{
                backgroundColor: COLORS['7F30FF'],
                height: 12,
                width: 12,
                borderRadius: 6,
                borderWidth: 0,
              }}
              customLabel={({oneMarkerValue, twoMarkerValue}) => {
                return <Text>{oneMarkerValue}</Text>;
              }}
              minMarkerOverlapDistance={20}
              trackStyle={{height: 2}}
              sliderLength={SCREEN_WIDTH - 80}
            />
            <CustomSelectableChip
              containerStyle={styles.marginB20}
              title="Time of Stay"
              data={TIME_OF_STAY}
              onChipPress={handleTimeOfStayPressed}
            />

            <Text style={styles.titleStyle}>
              Move in Date
              <Text style={styles.colorB1B1B1}>{' (Tentative)'}</Text>
            </Text>
          </>
        )}

        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="Gender"
          data={GENDER}
          onChipPress={handleGenderPressed}
        />

        <Text style={styles.titleStyle}>Age</Text>
        <View style={[styles.flexRowCenter, styles.marginB20]}>
          <CustomTextInput
            containerStyle={[styles.flex1, styles.marginR12]}
            showAnimation={false}
            placeholder="Rent"
            keyboardType="number-pad"
          />
          <Text style={styles.f16MedB1B1B1}>Years Old</Text>
        </View>

        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="What do you do?"
          data={WHAT_DO_YO_DO}
          onChipPress={handleWhatDoYouDoPressed}
        />

        <Text style={styles.titleStyle}>
          College/University{' '}
          <Text style={styles.colorB1B1B1}>{' (Optional)'}</Text>
        </Text>
        <CustomTextInput containerStyle={styles.marginB20} />
        {/* <Dropdown /> */}

        <Text style={styles.titleStyle}>
          Workplace/Company{' '}
          <Text style={styles.colorB1B1B1}>{' (Optional)'}</Text>
        </Text>
        <CustomTextInput
          showAnimation={false}
          containerStyle={styles.marginB20}
          placeholder="Enter your Workplace/Company"
        />

        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="Dietary Habits"
          data={DIETARY_HABITS}
          onChipPress={handleDietaryHabitsPressed}
        />

        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="Sleeping Habit"
          data={SLEEPING_HABIT}
          onChipPress={handleSleepingHabitPressed}
        />

        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="Do you have a vehicle?"
          data={DO_YOU_HAVE_VEHICLE}
          onChipPress={handleDoYouHaveVehiclePressed}
        />

        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="Upload a Profile Picture"
          data={UPLOAD_PROFILE_PICTURE}
          onChipPress={handleUploadProfilePicturePressed}
        />

        <CustomTextInput
          label="Add a little bio"
          labelStyle={styles.marginB12}
          showAnimation={false}
          placeholder="Add a little bio"
        />
      </ScrollView>
      <CustomButton
        title="Continue"
        style={styles.buttonStyle}
        onPress={handleContinuePressed}
      />
      <CustomModal
        ref={profileCompleteModalRef}
        title="Profile Completed !!"
        icon={IMAGES.ICON_CHECK_CIRCLE}
        onModalHide={() => handleNavigation()}
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
  flex1: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS['FFFFFF'],
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  slider: {
    width: 300,
    height: 40,
  },
  marginR12: {
    marginRight: 12,
  },
  marginB12: {
    marginBottom: 12,
  },
  marginB20: {
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    color: COLORS['272727'],
    marginBottom: 12,
  },
  colorB1B1B1: {
    color: COLORS['B1B1B1'],
  },
  buttonStyle: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  f16MedB1B1B1: {
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    color: COLORS['B1B1B1'],
  },
});

export default CompleteYourProfileScreen;
