import React from 'react';
import {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import AppNavigator from './app-navigator';

export default class Entrance extends Component{

    render(){
        return(
            <View style={styles.container}>
                <AppNavigator />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})