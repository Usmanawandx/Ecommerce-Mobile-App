import { StyleSheet, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {Text,NavBar} from 'components'
import { scale } from 'react-native-size-matters';
import Toast from 'react-native-tiny-toast';
import CancelButton from '../../../components/Touchable/CancelButton';
import NextButton from '../../../components/Touchable/NextButton';


const SaleSummary = ({navigation}) => {

  const Toastmsg = ()=>{
    Toast.showSuccess('Thank You')
    setTimeout(()=>{
      navigation.navigate('Home')
    },1000)
  }
    
// const toast = Toast.showLoading('Loading...')
//     setTimeout(() => {
//     Toast.hide(toast) 
//     }, 3000)
    
  return (
    <View style={styles.container}>
     <NavBar
        title="Sale Summary"
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.form}>
       <Text font='h2' color='gray100' weight='medium' style={styles.Formhead}>Sale Summary</Text>
       <Text font='h2' color='gray75'>items</Text>
       <View style={styles.box}>
         <View style={styles.boximg}>
          <Image
            style={styles.img}
            source={require('images/products/7/7_1.jpg')}
            resizeMode='cover'
            />
            </View>
          <View style={styles.boxtxt}>
                <Text font='h4' color='gray50' >Nike Shoes</Text>
                <Text font='h4' color='gray50' >$33,333.00</Text>
                <Text font='h4' color='gray50' >1 (Quantity)</Text>
                <Text font='h4' color='gray50' >$33,333.00</Text>
          </View>    
       </View>
       <View style={{paddingTop:scale(15)}}>
        <Text font='h2' color='gray75' style={styles.txt}>Money Transfer</Text>
        <Text font='h2' color='gray50' style={styles.txt}>Payment Method</Text>
        <Text font='h2' color='gray75' style={styles.txt}>Processing Fees</Text>
        <Text font='h2' color='gray50' style={styles.txt}>-3999.9600</Text>
        <Text font='h2' color='gray75' style={styles.txt}>Transaction Fees</Text>
        <Text font='h2' color='gray50' style={styles.txt}>-0.0000</Text>
       </View>
      
       <View style={styles.btnview}>
             <CancelButton label='Cancel'/>
            <NextButton label='Submit' onPress={() =>Toastmsg() }/>
       </View>


      </View>
    </View>
  )
}

export default SaleSummary

const styles = StyleSheet.create({
    container:{flex:1,},
    form:{marginHorizontal: scale(15),flex:8},
    img: {width: 86,height: 78,},
    box:{flexDirection:'row',height:120,backgroundColor:'#fff'},
    boximg:{flex:0.6,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'},
    boxtxt:{alignItems:'center',justifyContent:'center'},
    Formhead:{marginVertical: scale(20)},
    txt:{lineHeight:40},
    btnview:{flexDirection:'row',justifyContent:'space-between',marginVertical: scale(25),},
})
