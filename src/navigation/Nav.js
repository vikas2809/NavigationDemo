import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HOME_SCREEN from 'App/src/screens/home/Home';
import DASHBOARD_SCREEN from 'App/src/screens/dashboard/Dashboard'
import PRODUCT_SCREEN from 'App/src/screens/product/Product';
import SHOPPING_SCREEN from 'App/src/screens/shopping/Shopping'
import WISHLIST_SCREEN from 'App/src/screens/wishlist/Wishlist';
import DRAFTS_SCREEN from 'App/src/screens/drafts/Drafts';
import SideMenu from './SideMenu';

const TabNavigator = createBottomTabNavigator({
  Dashboard: { screen: DASHBOARD_SCREEN },
  Product: { screen: PRODUCT_SCREEN },
  Shopping: { screen: SHOPPING_SCREEN },
});

const drawerNav = createStackNavigator({
  Home: { screen: HOME_SCREEN },
  Wishlist:{ screen: WISHLIST_SCREEN },
  Drafts: { screen: DRAFTS_SCREEN },
  
})

const DrawerNavigator = createDrawerNavigator({
  drawer: { screen: drawerNav }
}, {
    contentComponent: props => <SideMenu {...props} />
});

const AppNavigator = createStackNavigator({
  Home: { screen: HOME_SCREEN },
  Tabs: { screen: TabNavigator },
  },
  {
    initialRouteName: 'Home',
  },
)

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: AppNavigator },
  Dashboard: { screen: DrawerNavigator },
});


const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;