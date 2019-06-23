import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TagNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
  {
    Tabs: { screen: TabNavigation, navigationOptions: { title: "title" } },
    Detail: DetailScreen
  },
  {
    mode: "screen"
  }
);

export default createAppContainer(MainNavigation);
