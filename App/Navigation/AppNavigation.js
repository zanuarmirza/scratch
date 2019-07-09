import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Auth from "../Containers/Auth";
import TabNav from "./TabBarNavigation";

import styles from "./Styles/NavigationStyles";

const SwitchNavigation = createSwitchNavigator(
  {
    Auth,
    TabNav
  },
  {
    initialRouteName: "Auth"
  }
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Welcome: { screen: SwitchNavigation }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "Welcome"
  }
);

export default createAppContainer(PrimaryNav);
