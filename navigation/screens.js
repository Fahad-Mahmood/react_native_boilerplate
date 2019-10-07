import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MainScreen from '../screens/Main';
import HomeScreen from '../screens/Home';
import BackScreen from '../screens/Back';

let MyDrawerApp = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Back: BackScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    Main: MainScreen,
    Home: MyDrawerApp,
  },
  {
    initialRouteName: 'Main',
  },
);
const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
