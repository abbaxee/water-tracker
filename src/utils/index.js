import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';

const CustomHeight = 812;
const CustomWidth = 375;

export const hp = value => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = value => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};

export const convertToLiter = value => +(Number(value) / 1000).toFixed(2);

export const calculatedHeightToFill = (totalConsumed, target) => {
  const consumedPercentage = (totalConsumed / target) * 100;
  const heightToFill = (consumedPercentage / 100) * 344;

  return 344 - heightToFill;
};
