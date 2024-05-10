import React, { useState } from 'react';
import {
  Text, NavBar, Container, Carousel, Rating, Discount, IconButton
} from 'components';
import { ScrollView, StyleSheet, View,Dimensions,Image } from 'react-native';
import PropTypes from 'prop-types';
import { getScreenHeight } from 'utils/size';
import { scale } from 'react-native-size-matters';
// import LinearGradient from 'react-native-linear-gradient';
import Colors from 'themes/colors';
import { getRandomShop } from 'mocks/shops';
// import Footer from './Footer';
// import Details from './Details';
// import Shop from './Shop';
import Option from './Option';
// import ReviewList from './Review/ReviewList';
// import Image360Viewer from '@hauvo/react-native-360-image-viewer'
import _ from 'lodash'
import CancelButton from '../../components/Touchable/CancelButton';
import NextButton from '../../components/Touchable/NextButton';

const styles = StyleSheet.create({
  container: {flex: 1},
  carousel: {height: getScreenHeight() / 2},
  discount: {textDecorationLine: 'line-through',textDecorationStyle: 'solid'},
  priceContainer: {flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',},
  price: {marginTop: scale(14)},
  card: {padding: scale(14),marginBottom: scale(14),backgroundColor: Colors.white,},
  rating: {marginTop: scale(14),flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',},
  control: {flexDirection: 'row',},
  icon: {paddingLeft: scale(14),},
  navbar: {position: 'absolute',top: 0,left: 0,right: 0,},
  btnview:{flexDirection:'row',justifyContent:'space-around',marginBottom: scale(10)},
});

const shop = getRandomShop();

const Product = ({ navigation, route }) => {
  const { product } = route.params;
  const [variant, setVariant] = useState('ghost');
  const onScroll = (y) => {
    setVariant(y > getScreenHeight() / 2 ? 'gradient' : 'ghost');
  };
  
const { width, height } = Dimensions.get('window')

// const images = _.reverse([
//   require('../../../assets/images/products/1/shoes1.png'),
//   require('../../../assets/images/products/1/shoes2.png'),
//   require('../../../assets/images/products/1/shoes3.png'),
//   require('../../../assets/images/products/1/shoes4.png'),
//   require('../../../assets/images/products/1/shoes5.png'),
//   require('../../../assets/images/products/1/shoes6.png'),
//   require('../../../assets/images/products/1/shoes7.png'),
//   require('../../../assets/images/products/1/shoes8.png'),
//   require('../../../assets/images/products/1/shoes9.png'),
//   require('../../../assets/images/products/1/shoes10.png'),
//   require('../../../assets/images/products/1/shoes11.png'),
//   require('../../../assets/images/products/1/shoes12.png'),
//   require('../../../assets/images/products/1/shoes13.png'),
//   require('../../../assets/images/products/1/shoes14.png'),
//   require('../../../assets/images/products/1/shoes15.png'),
//   require('../../../assets/images/products/1/shoes16.png'),
//   require('../../../assets/images/products/1/shoes17.png'),
//   require('../../../assets/images/products/1/shoes18.png'),
//   require('../../../assets/images/products/1/shoes19.png'),
//   require('../../../assets/images/products/1/shoes20.png'),
// ])

  return (
    <Container>
      <ScrollView
        onScroll={({ nativeEvent: { contentOffset: { y } } }) => onScroll(y)}
        scrollEventThrottle={16}
      >
        {/* <Image360Viewer srcset={images} width={width} height={height/2} /> */}
        <Carousel
          style={styles.carousel}
          images={product.images}
          resiz
          autoplay={false}
        />
        <View style={styles.card}>
          <Text font="p1" weight="medium">{product.name}</Text>
          <View style={styles.priceContainer}>
            <View style={styles.price}>
              <Text font='h4' weight="medium" color="tertiary" style={{width:200}}>Condition: New | SKU: 101 | 100% Authentic</Text>
              {product.beforeDiscount && <Text font="p1" style={styles.discount} color="gray50">{product.beforeDiscount}</Text>}
            </View>
            <Discount discount="10%" />
          </View>
          <View style={styles.rating}>
            {/* <Rating rating={product.rating} /> */}
            <Text font="h2" weight="medium" color="tertiary">{product.price}</Text>
            <Text>{`${product.sold} sold`}</Text>
          </View>
        </View>
        <Option product={product} />

        <View style={styles.btnview}>
          <CancelButton label='Buy'  onPress={() => navigation.navigate('BuyForm')}/>
          <NextButton label='Sell' onPress={() => navigation.navigate('SellForm')}/>
        </View>

      </ScrollView>
      <NavBar
        onLeftIconPress={() => navigation.goBack()}
        containerStyle={styles.navbar}
        title={variant !== 'ghost' ? product.name : null}
        variant={variant}
        renderRightComponent={() => (
          <View style={styles.control}>
            <IconButton
              icon="heart"
              color="white"
              style={styles.icon}
            />
            <IconButton
              icon="more-horizontal"
              color="white"
              style={styles.icon}
            />
          </View>
        )}
      />
      {/* <Footer
        navigation={navigation}
        shop={shop}
      /> */}
    </Container>
  );
};

Product.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default Product;
