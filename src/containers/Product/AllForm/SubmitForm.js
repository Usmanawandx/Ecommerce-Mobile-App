// import React from 'react';
import {Container, NavBar, TextField,Checkbox} from 'components'; 
import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters';
import CancelButton from '../../../components/Touchable/CancelButton';
import NextButton from '../../../components/Touchable/NextButton';

const SubmitForm = ({ navigation }) => {
  return (
    <Container>
      <NavBar
        title="Billing Address"
        onLeftIconPress={() => navigation.goBack()}
      />
       <ScrollView>
        <View style={{backgroundColor:'#fff'}}>
          <View style={styles.Form}>
              <Text style={styles.Formhead}>Billing Address</Text>
                  <TextField label="Company Name"/>
                  <TextField label="First Name" />
                  <TextField label="Last Name" />
                  <TextField label="Email" />
                  <TextField label="Street Address" />
                  <TextField label="City" />
                  <TextField label="Country" />
                  <TextField label="State" />
                  <TextField label="Zip/Postcode" />
                  <TextField label="Telephone" />
             <View style={styles.chechview}>
              <Checkbox/>
             <Text> Save this address</Text>
           </View>
                      
            <View style={styles.btnview}>
                <CancelButton label='Cancel'/>
                <NextButton label='Next' onPress={() => navigation.navigate('MoneyTransfer')}/>
            </View>
           
        </View>
        </View>
      </ScrollView>
    </Container>
  );
};


export default SubmitForm;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    Form:{
        marginHorizontal: scale(15),
        backgroundColor:'#fff'
    },
    Formhead:{
        fontSize:20,
        marginVertical: scale(20),
    },
    btnview:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical: scale(25),
      },
      chechview:{
        flexDirection:'row',
        alignItems:'center'
      }
})