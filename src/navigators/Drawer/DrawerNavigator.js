import React from "react";
import CustomDrawer from "../../components/Drawer/CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "../app/Stack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <CustomDrawer {...props}/>}>
      <Drawer.Screen name="Stack" component={StackNavigator}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;