import React from 'react';
import {
  TouchableOpacity, Image, View, StyleSheet,Text
} from 'react-native';
import PropTypes from 'prop-types';
import { getScreenWidth } from 'utils/size';
import { scale, verticalScale } from 'react-native-size-matters';
import {GradientBlock} from 'components';
import Colors from '../../../themes/colors';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(10),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(5),
    marginHorizontal: verticalScale(12),
    justifyContent:'center',
    paddingVertical: verticalScale(8)
  },
  image: {
    width: scale(30),
    height: scale(30),
    marginRight: verticalScale(15),
  },
  txt:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'
  }
});

const Categories = ({ categories, navigation }) => (
  <View style={styles.container}>
    {categories.map((category) => (
      <TouchableOpacity
        key={category.id}
        onPress={() => navigation.navigate('Category', { title: category.name })}>
          <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.tertiary, Colors.primaryAlt, Colors.primary]}
                style={{borderRadius: scale(10),margin:scale(8)}}
              >
          <View style={styles.button}>
              <Image
                source={category.image}
                resizeMode="contain"
                style={styles.image}
              />
              <Text
              style={styles.txt}
              >
                {category.name}
              </Text>
          </View>
              </LinearGradient>
       </TouchableOpacity>
    ))}
  </View>
);

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Categories;
