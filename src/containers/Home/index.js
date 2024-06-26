import React from 'react';
import {
  Container, NavBar, Text, GradientBlock, IconButton, Carousel,
} from 'components';
import { StyleSheet, View, ScrollView } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { getCategories } from 'mocks/categories';
import PropTypes from 'prop-types';
import DailyDiscover from './Section/DailyDiscover';
import Categories from './Section/Categories';
import FlashSale from './Section/FlashSale';
import SearchBar from './Section/SearchBar';
import Popular from './Section/Popular';

const styles = StyleSheet.create({
  card: {
    height: verticalScale(80),
    marginTop: verticalScale(-40),
    marginHorizontal: scale(20),
  },
  block: {
    paddingHorizontal: scale(14),
    paddingVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Home = ({ navigation }) => (
  <Container>
    <NavBar
      variant="gradient"
      renderLeftComponent={() => (
       <View>
        <IconButton
          color="white"
          icon="align-justify"
          size={40}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      )}
      renderRightComponent={() => (
        <View style={{flex:6,height:45}}>
          <SearchBar navigation={navigation} />  
        </View>
      )}
    />
    <ScrollView bounces={false}>
      {/* <GradientBlock style={styles.block}>
        <Text weight="medium" color="white">Popular: </Text>
        <Popular navigation={navigation} />
      </GradientBlock> */}
      <Carousel
        images={[
          require('images/banners/2.jpg'),
          require('images/banners/3.jpg'),
          require('images/banners/7.jpg'),
          require('images/banners/5.jpg'),
        ]}
      />
      <Categories
        categories={getCategories()}
        navigation={navigation}
      />
      <FlashSale
        navigation={navigation}
      />
      <DailyDiscover
        navigation={navigation}
      />
    </ScrollView>
  </Container>
);

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
