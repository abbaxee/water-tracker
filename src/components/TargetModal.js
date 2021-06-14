import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import {hp, wp} from '../utils';
import {PRIMARY, WHITE_COLOR} from '../utils/Colors';
import {CloseIcon} from '../../assets/Svgs';

const TargetModal = ({modalVisible, closeModal, handleSetTarget}) => {
  const [text, setText] = useState('');

  const setTarget = async () => {
    if (!text) {
      Alert.alert('Error', 'Enter a number');
      return;
    }
    if (Number(text) < 0) {
      Alert.alert('Error', 'Target can not be a negative number');
      return;
    }
    handleSetTarget(text);

    await AsyncStorage.setItem('@stored_target', text);
    setText('');
    closeModal();
  };
  return (
    <Modal isVisible={modalVisible} animationIn="zoomIn" animationOut="zoomOut">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled
      >
        <View style={styles.centeredView}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.closeButton}
            onPress={closeModal}
          >
            <CloseIcon />
          </TouchableOpacity>
          <Text style={styles.headerText}>Update Target Water</Text>
          <Text style={styles.subHeaderText}>
            Please enter your new water target below:
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              testID="text-input"
              value={text}
              onChangeText={setText}
              style={styles.inputStyle}
              selectionColor={PRIMARY}
              keyboardType="number-pad"
            />
            <Text style={styles.inputRightText}>ml</Text>
          </View>
          <TouchableOpacity
            testID="update-button"
            activeOpacity={0.8}
            style={styles.buttonStyle}
            onPress={setTarget}
          >
            <Text style={styles.buttonTextStyle}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
    width: wp(264),
    borderRadius: hp(10),
    paddingVertical: hp(32),
    paddingHorizontal: wp(25),
    marginBottom: Platform.OS === 'ios' ? hp(100) : 0,
  },
  closeButton: {
    position: 'absolute',
    right: 3,
    top: 3,
    paddingHorizontal: wp(5),
    paddingVertical: hp(5),
  },
  headerText: {
    fontSize: hp(22),
    color: PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: hp(14),
    color: PRIMARY,
    textAlign: 'center',
    marginTop: hp(32),
    marginBottom: hp(22),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: hp(10),
    borderColor: PRIMARY,
    paddingRight: wp(54),
    marginBottom: hp(13),
  },
  inputStyle: {
    flex: 1,
    height: hp(39),
    textAlign: 'right',
    fontSize: hp(18),
    color: PRIMARY,
    paddingVertical: 0,
    paddingHorizontal: wp(5),
  },
  inputRightText: {
    fontSize: hp(18),
    color: PRIMARY,
  },
  buttonStyle: {
    backgroundColor: PRIMARY,
    height: hp(39),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(10),
  },
  buttonTextStyle: {
    fontSize: hp(18),
    fontWeight: '600',
    color: WHITE_COLOR,
  },
});

export default TargetModal;
