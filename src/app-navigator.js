import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './home';
import DetailScreen from './detail';

const AppNavigator = createStackNavigator({
    Home:{
        screen:HomeScreen
    },
    Detail:DetailScreen
},
{
    initialRouteName:'Home'
})

export default createAppContainer(AppNavigator);
