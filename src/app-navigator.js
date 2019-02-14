import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './home';
import DetailScreen from './detail';
import UserScreen from './users';
import TabsScreen from './tabs';
import TabBarScreen from './tabbar';
import VideoScreen from './video';

const AppNavigator = createStackNavigator({
    Home:{
        screen:HomeScreen
    },
    Detail:DetailScreen,
    User:UserScreen,
    Tabs:TabsScreen,
    Tabbar:TabBarScreen,
    Video:{
        navigationOptions:({})=>({
            // title:'video',
            header:null
        }),
        screen:VideoScreen
    },
},
{
    initialRouteName:'Home'
})

export default createAppContainer(AppNavigator);
