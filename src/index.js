import React from 'react';
import {Component} from 'react';
import {Provider} from 'react-redux';

import {View,Text,StyleSheet} from 'react-native';
import AppNavigator from './app-navigator';

import {store} from './store';

export default class Entrance extends Component{

    render(){
        return(
            <Provider store={store}>
                <View style={styles.container}>
                    <AppNavigator />
                </View>
            </Provider>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})