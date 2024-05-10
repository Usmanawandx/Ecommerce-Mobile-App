import React from 'react'
import { View, Text,StyleSheet,TextInput,ScrollView } from 'react-native'
import Colors from 'themes/colors';
import { scale } from 'react-native-size-matters';
import CancelButton from '../../../../components/Touchable/CancelButton';
import NextButton from '../../../../components/Touchable/NextButton';
import {useNavigation} from '@react-navigation/native';


const SellNow = () => {
    const navigation = useNavigation();

  return (
       <View style={styles.container}>
        <ScrollView>
         <View style={styles.inputview}>
            <Text style={{fontSize:36}}>$</Text>
        
            <TextInput
                placeholder='No Ask Available' 
                style={styles.input}
                keyboardType='number-pad'
                editable={false}
         />
        </View>

        <View style={{marginTop:scale(20)}}>
            <View style={styles.formfields}>
                <Text style={styles.formtxt}>Total </Text>
                <Text style={[styles.formtxt,{color:'#000',fontWeight:'bold'}]}>$1955.00</Text>
            </View>
        </View>
         
           <View style={styles.btnview}>
              <CancelButton label='Cancel'/>
              <NextButton label='Next' onPress={() => navigation.navigate('SubmitForm')}/>
           </View>
        </ScrollView>
    </View>
  )
}

export default SellNow;

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
        paddingVertical: scale(20),      
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

