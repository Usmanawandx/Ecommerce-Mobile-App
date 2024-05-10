import React from 'react'
import {SafeAreaView,View,StyleSheet,Image, ScrollView,TouchableOpacity,TextInput} from 'react-native';
import {Text} from 'components'
import { verticalScale,scale } from 'react-native-size-matters';
import colors from '../../../themes/colors';
import {SearchBar} from 'components';
import IconButton from '../../../components/Touchable/IconButton'
import { getNavBarHeight } from 'utils/size';

const Card = () => {
  return(
    <View style={{flexDirection:'row',flex:1,height:120,paddingTop:scale(10),paddingHorizontal:scale(10)}}>
    <View style={{flex:0.2,alignItems:'center',}}>
      <Image
         source={require('images/products/6/6_1.jpg')}
          style={{ width: 55, height: 50 }}
        />
    </View>

    
    <View style={{flex:0.5,paddingHorizontal:scale(5)}}>
       <Text font='h5' color='gray100' weight='medium'>US 8M /Air Jordan 1 Low 'Bred</Text>   
       <Text font='h5' color='gray50'>553558-612</Text>   
      <View style={{flexDirection:'row'}}>
        <View style={{justifyContent:'center',alignItems:'center',borderColor:colors.gray25,borderWidth:1,width:80,height:30,borderRadius:5}}>
            <Text font='h6' color='gray75'>Highest Offer</Text>
            <Text font='h5' color='gray100' weight='medium'>US$ 105</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',borderColor:colors.gray25,borderWidth:1,width:80,height:30,borderRadius:5}}>
            <Text font='h6' color='gray75'>Lowest Offer</Text>
            <Text font='h5' color='gray100' weight='medium'>US$ 105</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',paddingTop:scale(5)}}>
        <View style={{justifyContent:'center',alignItems:'center',borderColor:colors.gray25,borderWidth:1,width:80,height:30,borderRadius:5}}>
            <Text font='h6' color='gray75'>Last Scale</Text>
            <Text font='h5' color='primaryAlt' weight='medium'>US$ 105</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',borderColor:colors.gray25,borderWidth:1,width:80,height:30,borderRadius:5}}>
            <Text font='h6' color='gray75'>Instead Delivery</Text>
            <Text font='h5' color='primaryAlt' weight='medium'>US$ 105</Text>
        </View>
      </View>
    
    </View>
    
    <View style={{flex:0.3,paddingTop:scale(5)}}>
        <TouchableOpacity style={{backgroundColor:'#000',alignItems:'center',borderRadius:5,padding:3,marginTop:scale(5),paddingRight:scale(10)}}>
          <Text color='white'>BUY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:'#000',borderWidth:1,alignItems:'center',borderRadius:5,padding:3,marginTop:scale(5)}}>
          <Text color='gray100'>MAKE OFFER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:'#000',borderWidth:1,alignItems:'center',borderRadius:5,padding:3,marginTop:scale(5)}}>
          <Text color='gray100'>MAKE LIST</Text>
        </TouchableOpacity>
    </View>
  </View>    
  )
}


const List = () => {

  return (
    <SafeAreaView style={{flex:1,}}>
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
      <ScrollView>
      <Card/>    
      <Card/>    
      <Card/>    
      <Card/>    
      <Card/>    
      <Card/>    
      <Card/>    
      <Card/>    
      <Card/>    
      <Card/>    
     </ScrollView>
    </SafeAreaView>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: getNavBarHeight() - verticalScale(12),
    marginHorizontal: scale(14),
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
