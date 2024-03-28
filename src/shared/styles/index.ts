import {StyleSheet} from 'react-native';

export const COLORS = {
  primary: 'rgb(85,124,230)',
  secondary: '#FFD700',
  white: '#FFFFFF',
  black: '#000000',
  gray: 'rgb(200,200,200)',
  danger: '#FF0000',
  light: '#f9f9f9',
};

export const flexStyles = StyleSheet.create({
  flex: {
    flex: 1,
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

  padding15: {
    padding: 15,
  },
  padding20: {
    padding: 20,
  },
});

export const marginStyles = StyleSheet.create({
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
  marginHorizontal20: {
    marginHorizontal: 20,
  },
});

export const backgroundColorStyles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'white',
  },
  backgroundPrimary: {
    backgroundColor: COLORS.primary,
  },
});

export const textColorStyles = StyleSheet.create({
  textColor: {
    color: 'black',
  },
  textColorPrimary: {
    color: COLORS.primary,
  },
  textWhite: {
    color: COLORS.white,
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
    borderColor: 'white',
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
});

export const fontStyles = StyleSheet.create({
  fontBold: {
    fontWeight: 'bold',
  },
  fontNormal: {
    fontWeight: 'normal',
  },
});
