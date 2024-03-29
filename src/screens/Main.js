/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import {calculatedHeightToFill, convertToLiter, hp} from '../utils';
import HeaderText from '../components/HeaderText';
import {AddIcon, SubtractIcon, HumanIcon, EditIcon} from '../../assets/Svgs';
import Quantity from '../components/Quantity';
import TargetModal from '../components/TargetModal';
import {mainStyles as styles} from './styles';

const Main = () => {
  const quantities = [150, 250, 350, 450];

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [dailyTarget, setDailyTarget] = useState(3500);
  const [totalWaterDrunk, setTotalWaterDrunk] = useState(0);
  const [totalDaysAchieved, setTotalDaysAchieved] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('@stored_target').then(value => {
      if (value) {
        setDailyTarget(value);
      }
    });
  }, []);

  const handleChangeQuantity = value => {
    setActiveIndex(value);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSetTarget = value => {
    if (totalWaterDrunk > Number(value)) {
      setTotalWaterDrunk(value);
    }
    setDailyTarget(value);
  };

  const addToTotalWaterDrunk = () => {
    const quantity = quantities[activeIndex];

    if (totalWaterDrunk + quantity >= dailyTarget) {
      setTotalWaterDrunk(Number(dailyTarget));
      Alert.alert('Cheers!!! 💃🏽🥂', 'Daily target reached', [
        {
          text: 'Reset',
          onPress: () => setTotalWaterDrunk(0),
          style: 'cancel',
        },
        {
          text: 'Done',
          onPress: () => {
            setTotalDaysAchieved(d => d + 1);
            setTotalWaterDrunk(0);
          },
        },
      ]);
      return;
    }

    setTotalWaterDrunk(total => total + quantity);
  };

  const subtractFromWaterDrunkTotal = () => {
    const quantity = quantities[activeIndex];

    if (totalWaterDrunk - quantity < 0) {
      setTotalWaterDrunk(0);
      return;
    }
    setTotalWaterDrunk(total => total - quantities[activeIndex]);
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.contentContainer}>
          <View style={styles.headerContent}>
            <HeaderText
              quantity={`${convertToLiter(totalWaterDrunk)} L`}
              description="TOTAL WATER DRUNK"
            />
            <HeaderText
              quantity={totalDaysAchieved}
              description="ACHIEVED GOAL DAYS"
            />
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.targetContainer}>
              <View style={styles.targetInnerContainer}>
                <Text style={styles.targetText}>
                  {convertToLiter(dailyTarget)} L
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setModalVisible(true)}
                >
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <HumanIcon
              heighToFill={calculatedHeightToFill(totalWaterDrunk, dailyTarget)}
            />
            <Text style={styles.imageSubtitle}>Nice work! Keep it up!</Text>
          </View>

          <View>
            <HorizontalPicker
              data={quantities}
              renderItem={(item, index) => (
                <Quantity item={item} selected={index === activeIndex} />
              )}
              itemWidth={hp(110)}
              defaultIndex={0}
              onChange={handleChangeQuantity}
            />
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.buttonStyle}
                onPress={subtractFromWaterDrunkTotal}
              >
                <SubtractIcon />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.buttonStyle}
                onPress={addToTotalWaterDrunk}
              >
                <AddIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TargetModal
          modalVisible={modalVisible}
          closeModal={handleCloseModal}
          handleSetTarget={handleSetTarget}
        />
      </SafeAreaView>
    </>
  );
};

export default Main;
