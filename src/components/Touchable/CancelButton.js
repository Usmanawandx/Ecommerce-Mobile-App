import { StyleSheet, Text, View,TouchableOpacity,onPress } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'themes/colors';

export default function CancelButton({label,  onPress}) {
  return (
    <View style={styles.btnview}>
    <LinearGradient
      start={{ x: 2, y: 0 }}
      end={{ x: 0, y: 0 }}
      colors={[Colors.tertiary, Colors.primaryAlt, Colors.primary]}
      style={{borderRadius: scale(10)}}
   >
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.txt}>{label}</Text>
    </TouchableOpacity>
    </LinearGradient>
     </View>
  )
}

const styles = StyleSheet.create({
    btn:{paddingTop: scale(10),paddingBottom: scale(10),paddingLeft: scale(34),paddingRight:scale(34)},
    btnview:{flexDirection:'row',justifyContent:'space-around',marginBottom: scale(10)},
    txt:{fontSize:20,color:'#fff'}
})