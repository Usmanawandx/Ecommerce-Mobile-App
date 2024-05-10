import React from 'react';
import { StyleSheet, SafeAreaView, View, useWindowDimensions,TextInput ,Image} from 'react-native';
import {Text} from 'components';
import { scale,verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../themes/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { getNavBarHeight } from 'utils/size';
import IconButton from '../../components/Touchable/IconButton'

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
              color={Colors.gray100}
              size={18}
            />
        </View>
      </View>            
  </View> 
  )
}



const Storage = ({ navigation, route }) => {
  const layout = useWindowDimensions();
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
            <Text style={styles.txt}>STORAGE</Text>
          </View>
       </View>
        </LinearGradient>
        <View style={styles.body}>
          <View style={styles.Search}>
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

        </View>
        <Card/>
          <Card/>
          <Card/>
          <Card/>
    </SafeAreaView>
  );
};

export default Storage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
  },
  firstrow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a70b8',
    borderBottomRightRadius: 40

  },
  txt: {
    color: '#fff',
    marginLeft: 30,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginLeft:scale(100)
  },
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: getNavBarHeight() - verticalScale(12),
    paddingHorizontal: scale(14),
    borderColor:Colors.gray25,
    justifyContent:'space-between',
    borderWidth:1,
    height:40,
    marginTop:10
  },
  input: {
    color: Colors.gray75,
  },
  body:{
    marginHorizontal: scale(14),
  }
});
