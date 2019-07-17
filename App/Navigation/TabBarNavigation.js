import React from "react";
import { SafeAreaView } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar
} from "react-navigation";
import { Colors } from "Themes";
import HomeStack from "./HomeStackNavigation";
import ProfileStack from "./ProfileStackNavigation";
import SearchStack from "./SearchStackNavigation";

function SafeAreaMaterialTopTabBar(props) {
  return (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
}

const TabNav = createMaterialTopTabNavigator(
  {
    Home: { screen: HomeStack },
    Search: { screen: SearchStack },
    Profile: { screen: ProfileStack }
  },
  {
    initialRouteName: "Search",
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarComponent: SafeAreaMaterialTopTabBar,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.primary_20,
      indicatorStyle: {
        backgroundColor: "transparent"
      },
      style: {
        borderTopWidth: 1,
        borderTopColor: Colors.dark_2_opacity_5,
        backgroundColor: Colors.white
      }
    }
  }
);

TabNav.navigationOptions = ({ navigation }) => ({
  header: null, // Hide the header from PrimaryNav stack, thus no stacked header should appeared
  gesturesEnabled: false
});

export default TabNav;
