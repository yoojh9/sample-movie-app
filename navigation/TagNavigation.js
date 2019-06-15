import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/Tv";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Color";

const TabNavigation = createBottomTabNavigator(
  {
    MoviesScreen,
    TVScreen,
    SearchScreen
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
