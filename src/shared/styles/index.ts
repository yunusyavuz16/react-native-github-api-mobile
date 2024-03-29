import {StyleSheet} from 'react-native';

export const COLORS = {
  primary: 'rgb(85,124,230)',
  secondary: 'rgb(200,200,200)',
  white: '#FFFFFF',
  black: '#000000',
  gray: 'rgb(200,200,200)',
  danger: '#F8285A',
  light: '#f9f9f9',
};

export const flexStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
  alignBaseline: {
    alignItems: 'baseline',
  },
});

export const paddingStyles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  padding15: {
    padding: 15,
  },
  padding20: {
    padding: 20,
  },
});

export const marginStyles = StyleSheet.create({
  marginStart5: {
    marginStart: 5,
  },
  margin: {
    margin: 10,
  },
  margin15: {
    margin: 15,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginHorizontal20: {
    marginHorizontal: 20,
  },
});

export const backgroundColorStyles = StyleSheet.create({
  opacity: {
    opacity: 0.5,
  },
  backgroundColor: {
    backgroundColor: COLORS.white,
  },
  backgroundPrimary: {
    backgroundColor: COLORS.primary,
  },
  backgroundSecondary: {
    backgroundColor: COLORS.secondary,
  },
  backgroundDanger: {
    backgroundColor: COLORS.danger,
  },
});

export const textColorStyles = StyleSheet.create({
  textColor: {
    color: COLORS.black,
  },
  textColorPrimary: {
    color: COLORS.primary,
  },
  textWhite: {
    color: COLORS.white,
  },
  textDanger: {
    color: COLORS.danger,
  },
});

export const textAlignStyles = StyleSheet.create({
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
});

export const widthStyles = StyleSheet.create({
  wFull: {
    width: '100%',
  },
  minW200: {
    minWidth: 200,
  },
  w200: {
    width: 200,
  },
  w80: {
    width: '80%',
  },
  width50px: {
    width: 50,
  },
});

export const heightStyles = StyleSheet.create({
  h50: {
    height: 50,
  },
  minH50: {
    minHeight: 50,
  },

  hFull: {
    height: '100%',
  },
  hAuto: {
    height: 'auto',
  },
  h50px: {
    height: 50,
  },
});

export const borderStyles = StyleSheet.create({
  borderSecondary: {
    borderColor: 'gray',
    borderWidth: 0.75,
  },
  borderPrimary: {
    borderColor: COLORS.primary,
    borderWidth: 0.75,
  },
  borderBottomSecondary: {
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.75,
  },
  borderWhite: {
    borderColor: COLORS.white,
    borderWidth: 0.75,
  },
});

export const shadowStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export const borderRadiusStyles = StyleSheet.create({
  borderRadius: {
    borderRadius: 15,
  },
  borderRadius25: {
    borderRadius: 25,
  },
});

export const fontStyles = StyleSheet.create({
  fontBold: {
    fontWeight: 'bold',
  },
  fontNormal: {
    fontWeight: 'normal',
  },
  font18: {
    fontSize: 18,
  },
  font24: {
    fontSize: 24,
  },
});

export const elevationStyles = StyleSheet.create({
  elevation1: {
    elevation: 1,
  },
  elevation2: {
    elevation: 2,
  },
  elevation3: {
    elevation: 3,
  },
  elevation4: {
    elevation: 4,
  },
  elevation10: {
    elevation: 10,
  },
});
