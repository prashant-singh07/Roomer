import React, {FC, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../../assets/theme';
import {CustomSelectableChip} from '../../../components/custom-selectable-chip';
import {CustomTextInput} from '../../../components';
// import usePreventBack from '../../../utilities';

const YOUR_TIME_OF_STAY = [
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
    title: 'Long term (more than 6 months)',
  },
  {
    id: 3,
    title: 'I own this flat',
  },
];

const LIVING_MEMEBERS = [
  {
    id: 0,
    title: 'All Male',
  },
  {
    id: 1,
    title: 'All Female',
  },
  {
    id: 2,
    title: 'All Transgender',
  },
  {
    id: 3,
    title: 'Mix',
  },
];

const PARKING_SPACE = [
  {
    id: 0,
    title: 'Two-Wheeler',
  },
  {
    id: 1,
    title: 'Four-Wheeler',
  },
  {
    id: 2,
    title: 'No space for parking',
  },
];

const TYPE_OF_BUILDING = [
  {
    id: 0,
    title: 'House',
  },
  {
    id: 1,
    title: 'Apartment',
  },
  {
    id: 2,
    title: 'Room/Hall',
  },
  {
    id: 3,
    title: 'Duplex',
  },
];

const FOOD_PREFERENCE = [
  {
    id: 0,
    title: 'Mess/PG',
  },
  {
    id: 1,
    title: 'Tiffin',
  },
  {
    id: 2,
    title: 'In house cooking',
  },
];

interface AddFlatDetailsScreenProps {}

const AddFlatDetailsScreen: FC<AddFlatDetailsScreenProps> = props => {
  const timeOfStayIdRef = useRef<number | null>(null);
  const livingMemeberTypeIdRef = useRef<number | null>(null);
  const parkingSpaceIdRef = useRef<number | null>(null);
  const typeOfBuildingIdRef = useRef<number | null>(null);
  const foodPreferenceIdRef = useRef<number | null>(null);

  // usePreventBack();

  function handleTimeOfStaySelected(id: number | null) {
    timeOfStayIdRef.current = id;
  }

  function handleLivingMemeberTypeSelected(id: number | null) {
    livingMemeberTypeIdRef.current = id;
  }

  function handleParkingSpaceSelected(id: number | null) {
    parkingSpaceIdRef.current = id;
  }

  function handleTypeOfBuildingSelected(id: number | null) {
    typeOfBuildingIdRef.current = id;
  }

  function handleFoodPreferenceSelected(id: number | null) {
    foodPreferenceIdRef.current = id;
  }

  return (
    <View style={styles.screnContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.fillDetailsHeader}>Please Add Flat Details</Text>
        <Text style={[styles.titleTextStyle, styles.marginB12]}>Address</Text>
        <CustomTextInput containerStyle={styles.marginB12} label="Line 1" />
        <CustomTextInput containerStyle={styles.marginB12} label="Line 2" />
        <CustomTextInput containerStyle={styles.marginB20} label="Line 3" />
        <Text style={[styles.titleTextStyle, styles.marginB12]}>
          Please mark your address on the map
        </Text>
        <View style={{height: 200, marginBottom: 20}} />
        <Text style={[styles.titleTextStyle, styles.marginB12]}>Rent</Text>
        <View style={[styles.flexRowCenter, styles.marginB20]}>
          <CustomTextInput
            containerStyle={[styles.flex1, styles.marginR12]}
            showAnimation={false}
            placeholder="Rent"
            rightComponent={() => <Text style={styles.titleTextStyle}>₹</Text>}
          />
          <Text style={styles.f16MedB1B1B1}>Per month</Text>
        </View>
        <CustomSelectableChip
          containerStyle={styles.marginB20}
          data={YOUR_TIME_OF_STAY}
          title="Your Time of Stay"
          onChipPress={handleTimeOfStaySelected}
        />
        <Text style={[styles.titleTextStyle, styles.marginB12]}>
          Currently Living Members
        </Text>
        <CustomSelectableChip
          containerStyle={styles.marginB20}
          data={LIVING_MEMEBERS}
          onChipPress={handleLivingMemeberTypeSelected}
        />
        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="Parking Space"
          data={PARKING_SPACE}
          onChipPress={handleParkingSpaceSelected}
        />
        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="Type of Building"
          data={TYPE_OF_BUILDING}
          onChipPress={handleTypeOfBuildingSelected}
        />
        <CustomSelectableChip
          containerStyle={styles.marginB20}
          title="Food Preference"
          data={FOOD_PREFERENCE}
          onChipPress={handleFoodPreferenceSelected}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screnContainer: {
    flex: 1,
    backgroundColor: COLORS['FFFFFF'],
    paddingHorizontal: 20,
  },
  flex1: {
    flex: 1,
  },
  fillDetailsHeader: {
    marginVertical: 40,
    fontSize: 20,
    fontFamily: FONTS.BOLD,
    color: COLORS['7F30FF'],
  },
  titleTextStyle: {
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    color: COLORS['272727'],
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

export default AddFlatDetailsScreen;
