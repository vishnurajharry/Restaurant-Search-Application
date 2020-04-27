import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultOnTap from './src/screens/ResultOnTap';

const navigator = createStackNavigator({
  Search : SearchScreen,
  result : ResultOnTap
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }

}) ;

export default createAppContainer(navigator);

