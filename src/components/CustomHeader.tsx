import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from '../assets/theme';
import {CustomTouchable} from '.';
import {IMAGES} from '../assets/images';

interface CustomHeaderProps {
  headerContainer?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  onBackPress?: () => void;
  onRightPress?: () => void;
}

const CustomHeader: FC<CustomHeaderProps> = props => {
  const {headerContainer, title, titleStyle, onBackPress, onRightPress} = props;

  const handleBackPressed = () => {
    onBackPress?.();
  };

  const handleRightIconPressed = () => {
    onRightPress?.();
  };

  return (
    <View style={[styles.headerContainer, headerContainer]}>
      <View style={styles.leftContainer}>
        {onBackPress && (
          <CustomTouchable
            style={styles.iconContainer}
            onPress={handleBackPressed}>
            <Image style={styles.iconStyle} source={{}} />
          </CustomTouchable>
        )}
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </View>
      {onRightPress && (
        <CustomTouchable
          style={styles.iconContainer}
          onPress={handleRightIconPressed}>
          <Image source={IMAGES.CLOSE_ICON} style={styles.iconStyle} />
        </CustomTouchable>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS['FFFFFF'],
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  leftContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  iconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS['0C0C0C'],
    flex: 1,
  },
});

export default CustomHeader;
