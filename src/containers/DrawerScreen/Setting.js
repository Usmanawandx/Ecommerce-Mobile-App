import React from 'react';
import { StyleSheet, SafeAreaView, View} from 'react-native';
import {Text,Checkbox,Switch} from 'components';
import { scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'themes/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';

const Setting = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Colors.tertiary, Colors.primaryAlt, Colors.primary]}
        style={{borderBottomRightRadius:50}}
        >
       <View style={{marginLeft:scale(15),flexDirection:'row',height:60,alignItems:'center',borderBottomLeftRadius:50}}>
        <SimpleLineIcons name="arrow-left-circle" size={22} color='#fff' onPress={() => navigation.goBack()}/>
         <View>
           <Text style={styles.txt}>SETTING</Text>
         </View>
       </View>
        </LinearGradient>
    
        <View>
         <ScrollView>
         <View style={{marginTop:scale(20),marginHorizontal:scale(20)}}>
            <Text font='h2'>Account Settings</Text>
            <View style={styles.formfields}>
              <Text style={styles.formtxt}>Buying Info</Text>
              <Text style={[styles.formtxt,{color:Colors.primary}]}>Edit</Text>
            </View>
            <View style={styles.formfields}>
              <Text style={styles.formtxt}>Shipping Info</Text>
              <Text style={[styles.formtxt,{color:Colors.primary}]}>Edit</Text>
            </View>
            <Text font="h5">You do not have any shipping information on file.</Text>
            <View style={styles.formfields}>
              <Text style={styles.formtxt}>Seller Info</Text>
              <Text style={[styles.formtxt,{color:Colors.primary}]}>Edit</Text>
            </View>
            <Text font="h5">You do not have any shipping information on file.</Text>
            <View style={styles.formfields}>
              <Text style={styles.formtxt}>Payout Info</Text>
              <Text style={[styles.formtxt,{color:Colors.primary}]}>Edit</Text>
            </View>
            <Text font="h5">You do not have any shipping information on file.</Text>
        </View>

        <View style={{marginVertical:scale(80),marginHorizontal:scale(20)}}>
            <Text font='h2'>Notifications</Text>

            <View style={styles.formfields2}>
              <Text style={styles.formtxt}>Bid</Text>
              <Text style={styles.line}>_____________________________</Text>
               <Switch />
            </View>
            <Text font="h5">Notify for new bid confirmation</Text>
            <View style={styles.formfields2}>
              <Text style={styles.formtxt}>Buy</Text>
              <Text style={styles.line}>_____________________________</Text>
              <Switch />
            </View>
            <Text font="h5">Notify for new bid confirmation</Text>
            <View style={styles.formfields2}>
              <Text style={styles.formtxt}>Ask</Text>
              <Text style={styles.line}>_____________________________</Text>
              <Switch />
            </View>
            <Text font="h5">Notify for new bid confirmation.</Text>
            <View style={styles.formfields2}>
              <Text style={styles.formtxt}>Sell</Text>
              <Text style={styles.line}>_____________________________</Text>
              <Switch />
            </View>
            <Text font="h5">Notify for new bid confirmation.</Text>
           </View>
          </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Setting;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    txt: {
      color: '#fff',
      marginLeft: 30,
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
      marginLeft:scale(100)
    },
    formfields:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        paddingVertical: scale(20),
        borderColor:'gray'        
    },
    formfields2:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: scale(10),     
    },
    formtxt:{
        fontSize:18,
        color:Colors.gray75
    },
  });