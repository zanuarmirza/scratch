import { createBottomTabNavigator } from "react-navigation";
import HomeStack from "./HomeStackNavigation";
import CookingStack from "./CookingStackNavigation";
import SearchStack from "./SearchStackNavigation";

const TabNav = createBottomTabNavigator(
  {
    Search: { screen: SearchStack },
    Home: { screen: HomeStack },
    Cooking: { screen: CookingStack }
  },
  {
    initialRouteName: "Home"
  }
);

TabNav.navigationOptions = ({ navigation }) => ({
  header: null, // Hide the header from PrimaryNav stack, thus no stacked header should appeared
  gesturesEnabled: false
});

export default TabNav;
