import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import CutsomTouchable, {CutsomTouchableProps} from './CustomTouchable';
import {COLORS, FONTS} from '../assets/theme';

export interface CustomButtonProps extends CutsomTouchableProps {
  leftImage?: ImageSourcePropType | undefined;
  leftImageStyle?: StyleProp<ImageStyle> | undefined;
  title: string | undefined;
  titleStyle?: StyleProp<TextStyle> | undefined;
  rightImage?: ImageSourcePropType | undefined;
  rightImageStyle?: StyleProp<ImageStyle> | undefined;
}

const CustomButton: FC<CustomButtonProps> = function (props) {
  const {
    leftImage,
    leftImageStyle,
    title,
    titleStyle,
    rightImage,
    rightImageStyle,
  } = props;
  const {style, disabled, ...rest} = props;

  return (
    <CutsomTouchable
      activeOpacity={0.6}
      style={[
        styles.containerStyle,
        style,
        disabled && styles.disabledContainerStyle,
      ]}
      disabled={disabled}
      {...rest}>
      {leftImage ? (
        <Image
          source={leftImage}
          style={[styles.leftImageStyle, leftImageStyle]}
        />
      ) : null}
      {title ? (
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      ) : null}
      {rightImage ? (
        <Image
          source={rightImage}
          style={[styles.rightImageStyle, rightImageStyle]}
        />
      ) : null}
    </CutsomTouchable>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS['7F30FF'],
  },
  disabledContainerStyle: {
    backgroundColor: COLORS['7F30FF'] + '4D',
  },
  leftImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: COLORS['FFFFFF'],
    textAlign: 'center',
  },
  rightImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default CustomButton;
