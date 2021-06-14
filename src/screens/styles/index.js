import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';
import {PRIMARY, WHITE_COLOR} from '../../utils/Colors';

export const mainStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: PRIMARY,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    height: hp(344),
    width: wp(146),
  },
  imageSubtitle: {
    fontSize: hp(20),
    color: WHITE_COLOR,
    fontWeight: '600',
    textAlign: 'center',
    maxWidth: wp(149),
    marginTop: hp(28),
  },
  targetContainer: {
    position: 'absolute',
    right: wp(10),
    top: hp(-7),
  },
  targetInnerContainer: {
    flexDirection: 'row',
  },
  targetText: {
    fontSize: hp(20),
    color: WHITE_COLOR,
    fontWeight: '600',
    marginRight: wp(8),
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(24),
  },
  buttonStyle: {
    marginHorizontal: wp(11),
  },
});
