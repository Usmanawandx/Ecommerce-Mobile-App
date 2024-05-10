// import React from 'react';
import {Container, NavBar, TextField,Checkbox} from 'components'; 
import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters';
import NextButton from '../../../components/Touchable/NextButton';
import CancelButton from '../../../components/Touchable/CancelButton';

const MoneyTransfer = ({ navigation }) => {
   return (
    <Container>
      <NavBar
        title="MoneyTransfer"
        onLeftIconPress={() => navigation.goBack()}
      />
       <ScrollView>
        <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={styles.Form}>
          <View style={styles.chechview}>
            <Checkbox />
             <Text style={styles.Formhead}>MoneyTransfer</Text>
           </View>
                <View>
                  <Text>Card Number</Text>  
                  <TextField placeholder="#### #### #### ####"/>
                </View>
                  <Text>Name On Card</Text>  
                <View style={{flexDirection:'row'}}>
                  <View style={{flex:0.5}}>
                  <TextField label="Name On Card"/>
                  </View>
                  <View style={{flex:0.3}}>
                  <TextField label="MM/YY" />
                  </View>
                  <View style={{flex:0.3}}>
                  <TextField label="CVV" />
                  </View>
                </View>
           
                <View style={styles.btnview}>
                    <CancelButton label='Cancel'/>
                    <NextButton label='Next' onPress={() => navigation.navigate('SaleSummary')}/>
                </View>

          </View>
        </View>
      </ScrollView>
    </Container>
  );
};


export default MoneyTransfer;


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
        fontSize:22,
        marginVertical: scale(20),
        marginHorizontal: scale(10),
    },
    btnview:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical: scale(25),
      },
      chechview:{
        flexDirection:'row',
        alignItems:'center',
      }
})

