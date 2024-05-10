import React from 'react'
import {View,StyleSheet,TextInput} from 'react-native';
import {Text} from 'components'
import { verticalScale,scale } from 'react-native-size-matters';
import colors from 'themes/colors';
import IconButton from '../../../components/Touchable//IconButton'
import { getNavBarHeight,getScreenWidth } from 'utils/size';

const Current = () => {
  return (
    <View style={{flex:1,marginHorizontal:scale(15)}}>
    <View style={styles.container}>
     <TextInput
       placeholder="Search for anything..."
       style={styles.input}
       underlineColorAndroid="transparent"
     />
     <IconButton
       color="gray25"
       icon="search"
       size={18}
     />

   </View>  
      <View style={{flexDirection:'row',marginTop:scale(10)}}>
        <View style={styles.table}>
          <Text font='h5' weight='medium' style={styles.txt}>Name</Text>
          <Text font='h5'  weight='medium' style={styles.txt}>Ali jordan 1</Text>
        </View>
        <View style={styles.table}>
          <Text font='h5' weight='medium' style={styles.txt}>List</Text>
          <Text font='h5' weight='medium' style={styles.txt}>14</Text>
        </View>
        <View style={styles.table}>
          <Text font='h5'  weight='medium' style={styles.txt}>offer</Text>
          <Text font='h5'  weight='medium' color='red' style={styles.txt}>G$$230</Text>
        </View>
        <View style={styles.table}>
          <Text font='h5'  weight='medium' style={styles.txt}>Expiry</Text>
          <Text font='h5'  weight='medium' style={styles.txt}>2 Days</Text>
        </View>
        <View style={styles.table}>
          <Text font='h5'  weight='medium' style={styles.txt}>Spread</Text>
          <Text font='h5' weight='medium'   color='primary'  style={styles.txt}>+26.44%</Text>
        </View>
      </View>
</View>
  )
}

export default Current;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: getNavBarHeight() - verticalScale(12),
    paddingHorizontal: scale(14),
    borderColor:colors.gray25,
    justifyContent:'space-between',
    borderWidth:1,
    height:40,
    marginTop:10
  },
  input: {
    color: colors.gray75,
  },
  table:{
    width: '20%',
  },
  txt:{
    lineHeight:20,
    textAlign:'center'
  }
});
