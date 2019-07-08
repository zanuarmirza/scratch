import { createStackNavigator, createAppContainer } from "react-navigation";
import Auth from "../Containers/Auth";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Welcome: { screen: Auth }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "Welcome",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
