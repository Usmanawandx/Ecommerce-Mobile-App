import React from 'react'
import { View, Text,StyleSheet,TextInput,SafeAreaView,ScrollView } from 'react-native'
import SwitchSelector from "react-native-switch-selector";
import Colors from '../../../themes/colors';
import { scale } from 'react-native-size-matters';
import {NavBar} from 'components'; 
import CancelButton from '../../../components/Touchable/CancelButton';
import NextButton from '../../../components/Touchable/NextButton';


const BuyFrom = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <NavBar
        title="BuyForm"
        onLeftIconPress={() => navigation.goBack()}
      />
    <View style={styles.Formcontainer}>
        <ScrollView>
      <View style={{marginVertical:20}}>
        <SwitchSelector
          initial={0}
          // onPress={value => this.setState({ gender: value })}
          textColor={'#585b58'} //'#7a44cf'
          selectedColor={'#fff'}
          buttonColor={Colors.primaryAlt}
          style={{ transform: [{ scaleX: 1 }, { scaleY: 1.2 }] }}
          borderColor={'#aea6a6'}
          hasPadding

          options={[
            { label: "Place Bid", value: "f" }, //images.feminino = require('./path_to/assets/img/feminino.png')
            { label: "Buy Now", value: "m" } //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        />
        </View>

        <View style={styles.inputview}>
            <Text style={{fontSize:36}}>$</Text>
        
            <TextInput
                placeholder='Enter Bid'
                style={styles.input}
                keyboardType='number-pad'
         />
        </View>
        <Text style={{textAlign:'center'}}>You are about to be the highest bidder</Text>
        <View style={{marginTop:scale(20)}}>
            <View style={styles.formfields}>
            <Text style={styles.formtxt}>Transaction Fees</Text>
            <Text style={styles.formtxt}>$266.64</Text>
            </View>
            <View style={styles.formfields}>
            <Text style={styles.formtxt}>Payment Proc</Text>
            <Text style={styles.formtxt}>$266.64</Text>
            </View>
            <View style={styles.formfields}>
            <Text style={styles.formtxt}>Ask Expiration:</Text>
            <Text style={styles.formtxt}>3Days</Text>
            </View>
            <View style={styles.formfields}>
            <Text style={styles.formtxt}>Total</Text>
            <Text style={[styles.formtxt ,{fontWeight:'bold',color:'#000'}]}>$293518.00</Text>
            </View>
        </View>

                
           <View style={styles.btnview}>
              <CancelButton label='Cancel'/>
              <NextButton label='Next' onPress={() => navigation.navigate('SubmitForm')}/>
           </View>

        </ScrollView>
       </View>
    </SafeAreaView>
  )
}

export default BuyFrom;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Formcontainer: {
        marginHorizontal: scale(15),
      },
    input: {
        borderWidth: 1,
        padding: 10,
        flex:1,
        borderColor:Colors.gray50,
        marginLeft: scale(5),
        fontSize:17
      },
      inputview:{
        flexDirection:'row',
        alignItems:'center',
    },
     formfields:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        paddingVertical: scale(20),
        borderColor:'gray'        
    },
    formtxt:{
        fontSize:18,
        color:Colors.gray50
    },
    btnview:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical: scale(30),
    },
  })
