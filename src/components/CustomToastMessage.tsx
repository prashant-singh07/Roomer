import {TypedUseLazyQuerySubscription} from '@reduxjs/toolkit/query/react';
import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  Platform,
} from 'react-native';
import {COLORS} from '../assets/theme';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CustomToastMessageProps {
  message?: string | undefined;
  description?: string | undefined;
  autoClose?: number;
}

const CustomToastMessage: FC<CustomToastMessageProps> = forwardRef(
  (props, ref) => {
    const {message, description, autoClose} = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const {top} = useSafeAreaInsets();

    useImperativeHandle(ref, () => {
      return {
        open: openModal,
        close: closeModal,
      };
    });

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;
      if (isVisible && autoClose)
        timer = setTimeout(() => closeModal, autoClose);

      return () => clearTimeout(timer);
    }, [isVisible, autoClose]);

    function openModal() {
      setIsVisible(true);
    }

    function closeModal() {
      setIsVisible(false);
    }
    return (
      <ReactNativeModal
        isVisible={isVisible}
        style={styles.modalStyle}
        animationIn={'slideInDown'}
        animationOut={'slideOutUp'}
        onBackdropPress={closeModal}
        swipeDirection={'up'}
        onBackButtonPress={closeModal}>
        <View
          style={[
            styles.modalContainer,
            {paddingTop: Platform.OS == 'ios' ? top + 20 : top},
          ]}>
          {message ? <Text>{message}</Text> : null}
          {description ? <Text>{description}</Text> : null}
        </View>
      </ReactNativeModal>
    );
  },
);

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-start',
  },
  modalContainer: {
    backgroundColor: COLORS['FFFFFF'],
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default CustomToastMessage;
