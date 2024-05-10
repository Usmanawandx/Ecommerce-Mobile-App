import React from 'react';
import { StyleSheet, SafeAreaView,View, useWindowDimensions, } from 'react-native';
import {Text} from 'components';
import Current from '../TabViews/Bids/Current';
import Pending from '../TabViews/Bids/Pending';
import Expired from '../TabViews/Bids/Expired';
import History from '../TabViews/Bids/History';
import { scale, verticalScale } from 'react-native-size-matters';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'themes/colors'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const renderScene = SceneMap({
  Current: Current,
  Pending: Pending,
  Expired: Expired,
  History: History,
});

const Bids = ({ navigation, route }) => {
  const layout = useWindowDimensions();
  const renderTabBar = props => (
    <TabBar
      {...props}
      labelStyle={{fontSize:12,fontWeight:'bold'}}
      scrollEnabled={true}
      indicatorStyle={{ backgroundColor: '#3a70b8'}}
      style={{ backgroundColor: '#fcfbfb'}}
      tabStyle={{width: 90}}
      activeColor="#000"
      inactiveColor="gray"
    />
  );
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Current',title: 'Current'},
    { key: 'Pending', title: 'Pending'},
    { key: 'Expired', title: 'Expired'},
    { key: 'History', title: 'History' },
  ]);
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
            <Text style={styles.txt}>Bids</Text>
          </View>
       </View>
        </LinearGradient>

      <View style={{flex: 8 }}>
        <TabView
          swipeEnabled={true}
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          style={{ backgroundColor: '#fff', }}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Bids;

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
  }

});
