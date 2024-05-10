import React, { useState } from 'react'
import { View,StyleSheet,SafeAreaView } from 'react-native'
import SwitchSelector from "react-native-switch-selector";
import Colors from '../../../themes/colors';
import { scale } from 'react-native-size-matters';
import {NavBar} from 'components'; 
import SellNow from './SellFormInner/SellNow';
import PlaceAsk from './SellFormInner/PlaceAsk';


const SellForm = ({navigation}) => {
  const [sell,setSell] = useState('Place')

  return (
    <SafeAreaView style={styles.container}>
    <NavBar
        title="SellForm"
        onLeftIconPress={() => navigation.goBack()}
      />
        <View style={styles.Formcontainer}>
          <View style={{marginVertical:20}}>
            <SwitchSelector
              initial={0}
              onPress={value => setSell(value)}
              textColor={'#585b58'} //'#7a44cf'
              selectedColor={'#fff'}
              buttonColor={Colors.primaryAlt}
              style={{ transform: [{ scaleX: 1 }, { scaleY: 1.2 }] }}
              borderColor={'#aea6a6'}
              hasPadding

              options={[
                { label: "Place Ask", value: "Place" }, //images.feminino = require('./path_to/assets/img/feminino.png')
                { label: "Sell Now", value: "sell" } //images.masculino = require('./path_to/assets/img/masculino.png')
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />

            </View>
       </View>
       <View style={{marginHorizontal:20,flex:1}}>
        {sell === 'Place' ?
            <PlaceAsk /> :
            <SellNow /> 
         }
       </View>
    </SafeAreaView>
  )
}

export default SellForm;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Formcontainer: {
        marginHorizontal: scale(15),
      }
  })

