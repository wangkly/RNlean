import React from 'react';
import {Component} from 'react';
import {Provider} from 'react-redux';

import {View,Text,StyleSheet} from 'react-native';
import AppNavigator from './app-navigator';

import {store} from './store';
import msg from './msg';

export default class Entrance extends Component{

    componentDidMount(){
        msg.on('app:toast',this._showToast)
    }

    componentWillUnmount(){
        msg.on('app:toast',this._showToast)
    }

    render(){
        return(
            <Provider store={store}>
                <View style={styles.container}>
                    <AppNavigator />
                </View>
            </Provider>
        )
    }

    _showToast(param){
        console.log('showToast ==>',param)
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})