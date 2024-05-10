import React from 'react';
import { StyleSheet, SafeAreaView, View, useWindowDimensions, } from 'react-native';
import {Text} from 'components';
import Offer from '../containers/TabViews/Selling/Offer';
import Confirmed from '../containers/TabViews/Selling/Confirmed';1
import History from '../containers/TabViews/Selling/History';
import { scale} from 'react-native-size-matters';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../themes/colors'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const renderScene = SceneMap({
  Offer: Offer,
  Confirmed: Confirmed,
  History: History,
});

const Selling = ({ navigation, route }) => {
  const layout = useWindowDimensions();
  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled={true}
      indicatorStyle={{ backgroundColor: '#3a70b8'}}
      style={{ backgroundColor: '#fcfbfb' }}
      tabStyle={{width: 120}}
      activeColor="#000"
      inactiveColor="gray"
    />
  );
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Offer',title: 'LIST'},
    { key: 'Confirmed', title: 'Confirmed'},
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
            <Text style={styles.txt}>SELLING</Text>
          </View>
       </View>
        </LinearGradient>

      <View style={{flex: 8 }}>
        <TabView
          swipeEnabled={true}
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          style={{ backgroundColor: '#fff' }}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Selling;

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
