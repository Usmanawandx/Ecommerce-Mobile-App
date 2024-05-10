import React, { useContext } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Drawer } from 'react-native-paper';
import { AuthContext } from 'contexts/AuthContext';
import colors from '../../themes/colors'
import { scale } from 'react-native-size-matters';


const CustomDrawer = ({ navigation, props }) => {
  const { auth: { isLoggedIn } } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  return (
    <View style={{ flex: 1,backgroundColor:colors.primaryAlt }}>
      <DrawerContentScrollView
        {...props}
        style={{borderBottomRightRadius:50}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginHorizontal:scale(10) }}>
          <TouchableOpacity>
            <Ionicons name="information-circle-outline" size={30} color='#fff' />
          </TouchableOpacity>
          <Image
            source={require('../../../assets/images/users/kjh.png')}
            style={{ height: 50, width: 50, borderRadius: 40,backgroundColor:'#fff' }}
          />
        </View>
        <View style={{ flex: 1,paddingTop: 10 }}>
          {isLoggedIn ?
            <Drawer.Section style={{marginLeft:scale(10)}}>
              <Drawer.Item
              cco
                label="Buying"
                onPress={() => { navigation.navigate('Buying') }}
              
              />

              <Drawer.Item
                label="Selling"
                onPress={() => { navigation.navigate('Selling') }}
              />

              <Drawer.Item
                label="Storage"
                onPress={() => { navigation.navigate('Storage') }}
              />

              <Drawer.Item
                label="Following"
                onPress={() => { navigation.navigate('Following') }}

              />

              <Drawer.Item
                label="Bids"
                onPress={() => {navigation.navigate('Bids')}}
              />

              <Drawer.Item
                label="Setting"
                onPress={() => {navigation.navigate('Setting')}}

              />

              <Drawer.Item
                label="Logout"
            onPress={() => dispatch({ type: 'SIGN_OUT' })}
              />
            </Drawer.Section>
            :
            <Drawer.Section>
              <Drawer.Item
                label="Login"
                onPress={() => { navigation.navigate('SignIn') }}
              />

              <Drawer.Item
                label="Signup"
                onPress={() => { navigation.navigate('SignUp') }}

              />
            </Drawer.Section>
          }
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;