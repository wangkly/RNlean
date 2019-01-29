import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './home';
import DetailScreen from './detail';
import UserScreen from './users';

const AppNavigator = createStackNavigator({
    Home:{
        screen:HomeScreen
    },
    Detail:DetailScreen,
    User:UserScreen
},
{
    initialRouteName:'Home'
})

export default createAppContainer(AppNavigator);
