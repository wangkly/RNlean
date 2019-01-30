import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './home';
import DetailScreen from './detail';
import UserScreen from './users';
import TabsScreen from './tabs';
import TabBarScreen from './tabbar';

const AppNavigator = createStackNavigator({
    Home:{
        screen:HomeScreen
    },
    Detail:DetailScreen,
    User:UserScreen,
    Tabs:TabsScreen,
    Tabbar:TabBarScreen
},
{
    initialRouteName:'Home'
})

export default createAppContainer(AppNavigator);
