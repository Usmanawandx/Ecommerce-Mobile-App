const colors = {
  primary: '#479cd5',
  primaryAlt: '#3662ad',
  primaryBg: '#FCEACE',
  secondary: '#2A234E',
  tertiary: '#3662ad',
  green: '#4FCE82',
  white: '#FFFFFF',
  transparant: 'transparent',
  blue: '#0073D8',
  blueAlt: '#ECF6FF',
  red:'#ee1010',

  // shades of gray
  gray5: '#F2f2f2',
  gray10: '#E6E6E6',
  gray25: '#BFBFBF',
  gray50: '#808080',
  gray75: '#404040',
  gray100: '#191919',
};

export default colors;

export const colorProps = Object.keys(colors).map((color) => color);
