import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS} from '../../../assets/theme';
import {IMAGES} from '../../../assets/images';

interface InvoiceScreenProps {}

const INVOICE_LIST = [
  {
    id: 129741,
    name: 'Tarak Mehta',
    date: '04/03/25',
    price: '12,000',
  },
  {
    id: 129742,
    name: 'Bhide',
    date: '04/03/25',
    price: '12,000',
  },
  {
    id: 129743,
    name: 'Popatal',
    date: '04/03/25',
    price: '12,000',
  },
];

const InvoiceScreen: FC<InvoiceScreenProps> = props => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.wishingText}>Good Evening!</Text>
          <Text style={styles.nameText}>Prabal Gondane</Text>
        </View>
        <Image style={styles.profileIcon} source={IMAGES.PROFILE_PIC} />
      </View>
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.yourBillsText}>YOUR BILLS</Text>
          <View style={styles.separatorStyle}></View>
          {INVOICE_LIST.map(item => {
            const {id, date, name, price} = item;
            return (
              <>
                <View key={id} style={styles.rowCenter}>
                  <View style={styles.userAndIdContainer}>
                    <Text>{name}</Text>
                    <Text>{`#${id} - ${date}`}</Text>
                  </View>
                  <Text>{`${price}`}</Text>
                </View>
                <View style={styles.separatorStyle}></View>
              </>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS['F5F5F5'],
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS['FFFFFF'],
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  wishingText: {
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    color: COLORS['787878'],
  },
  nameText: {
    fontSize: 18,
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS['0C0C0C'],
  },
  profileIcon: {
    height: 46,
    width: 46,
    resizeMode: 'contain',
    borderRadius: 23,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  yourBillsText: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: COLORS['787878'],
  },
  separatorStyle: {
    height: 1,
    backgroundColor: COLORS['EBEBEB'],
    marginVertical: 16,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAndIdContainer: {
    flex: 1,
  },
});

export default InvoiceScreen;
