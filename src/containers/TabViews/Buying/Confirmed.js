import React from 'react'
import {SafeAreaView,View,StyleSheet,Image, ScrollView,TouchableOpacity,TextInput} from 'react-native';
import {Text} from 'components'
import { verticalScale,scale } from 'react-native-size-matters';
import colors from '../../../themes/colors';
import IconButton from '../../../components/Touchable//IconButton'
import { getNavBarHeight } from 'utils/size';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

  const Card = () => {
    return(
      <View style={{flexDirection:'row',height:90,paddingTop:scale(10),paddingHorizontal:scale(10)}}>
      <View style={{flex:0.2,alignItems:'center'}}>
        <Image
          source={require('images/products/6/6_1.jpg')}
            style={{ width: 55, height: 50 }}
          />
      </View>
      
      <View style={{flex:0.8,paddingHorizontal:scale(5),flexDirection:'row'}}>
          
          <View style={{justifyContent:'center',width:130,paddingHorizontal:scale(10),justifyContent:'flex-start',}}>
             <Text font='h5' color='gray100' weight='medium'>US 8M /Air Jordan </Text>   
             <Text font='h5' color='gray100' weight='medium'>US 8M /Air Jordan </Text>   
             <Text font='h5' color='gray50'>553558-612</Text>   
          </View>

          <View style={{justifyContent:'center',alignItems:'center',width:100,justifyContent:'flex-start'}}>
             <Text font='h5' color='primaryAlt' weight='medium'>US 8M /Air Jordan</Text>   
             <Text font='h5' color='primaryAlt' weight='medium'>Ship</Text>   
             <Text font='h5' color='gray50'>553558-612</Text>   
          </View>


          <View style={{paddingTop:scale(10)}}>
             <SimpleLineIcons
                name="arrow-right"
                color={colors.gray100}
                size={18}
              />
          </View>
        </View>            
    </View> 
    )
  }


const Confirmed = () => {
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
          <Card/>
          <Card/>
          <Card/>
          <Card/>
    </View>
  )
}

export default Confirmed


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
});
