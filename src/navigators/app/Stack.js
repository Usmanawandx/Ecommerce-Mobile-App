import React, { useContext } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from 'containers/Home';
import { enableScreens } from 'react-native-screens';
import Product from 'containers/Product';
import Review from 'containers/Product/Review';
import Checkout from 'containers/Cart/Checkout';
import PaymentResult from 'containers/Cart/Checkout/PaymentResult';
import AddressBook from 'containers/AddressBook';
import NewAddress from 'containers/AddressBook/NewAddress';
import EditAddress from 'containers/AddressBook/EditAddress';
import PaymentMethod from 'containers/PaymentMethod';
import NewCard from 'containers/PaymentMethod/NewCard';
import EditCard from 'containers/PaymentMethod/EditCard';
import Search from 'containers/Search';
import Category from 'containers/Category';
import Shop from 'containers/Shop';
import Orders from 'containers/Orders';
import OrderDetails from 'containers/Orders/Details';
import Notification from 'containers/Notification';
import Pay from 'containers/Pay';
import Chat from 'containers/Chat';
import ChatRoom from 'containers/Chat/ChatRoom';
import Social from 'containers/Social';
import Buying from '../../containers/Buying';
import Selling from '../../containers/Selling';
import Following from '../../containers/Following';
import AddReview from 'containers/Review';
import { AuthContext } from 'contexts/AuthContext';
import Auth from '../auth';
import BuyFrom from '../../containers/Product/AllForm/BuyFrom';
import SellForm from '../../containers/Product/AllForm/SellForm';
import SubmitForm from '../../containers/Product/AllForm/SubmitForm';
import MoneyTransfer from '../../containers/Product/AllForm/MoneyTransfer';
import SaleSummary from '../../containers/Product/AllForm/SaleSummary'
import Storage from '../../containers/DrawerScreen/Storage';
import Bids from '../../containers/DrawerScreen/Bids'
import Setting from '../../containers/DrawerScreen/Setting'

enableScreens();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { auth: { isLoggedIn } } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn && (
        <>
          <Stack.Navigator
            mode="modal"
            screenOptions={{
              headerShown: false,
            }}
          >
         <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="PaymentResult" component={PaymentResult} />
            <Stack.Screen name="AddressBook" component={AddressBook} />
            <Stack.Screen name="NewAddress" component={NewAddress} />
            <Stack.Screen name="EditAddress" component={EditAddress} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="NewCard" component={NewCard} />
            <Stack.Screen name="EditCard" component={EditCard} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Shop" component={Shop} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="Pay" component={Pay} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="Social" component={Social} />
            <Stack.Screen name="AddReview" component={AddReview} />
            <Stack.Screen name="BuyForm" component={BuyFrom} />
            <Stack.Screen name="SellForm" component={SellForm} />
            <Stack.Screen name="SubmitForm" component={SubmitForm} />
            <Stack.Screen name="MoneyTransfer" component={MoneyTransfer} />
            <Stack.Screen name="SaleSummary" component={SaleSummary} />
            <Stack.Screen name="Buying" component={Buying} />
            <Stack.Screen name="Selling" component={Selling} />
            <Stack.Screen name="Following" component={Following} />
            <Stack.Screen name="Storage" component={Storage} />
            <Stack.Screen name="Bids" component={Bids} />
            <Stack.Screen name="Setting" component={Setting} />
          </Stack.Navigator>
        </>
      )}
      {!isLoggedIn && <Auth />}
    </>
  );
};

export default StackNavigator;
