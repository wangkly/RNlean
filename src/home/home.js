import React,{Component} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import msg from '../msg'
export default class HomeScreen extends React.Component {
    render() {
      let {count,onIncreasePress,onDecreasePress} = this.props;
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>count：{count}</Text>
          <View style={styles.btns}>
              <Button
                title="increase"
                onPress={() => onIncreasePress()}
              /> 
              <Button
                title="decrease"
                onPress={() => onDecreasePress()}
              />
          </View>
          <Button
            title="show toast"
            onPress={() => msg.emit('app:toast',{type:'info'})}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Detail')}
          />
          <Button
            title="Go to User"
            onPress={() => this.props.navigation.navigate('User')}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    btns:{
      flexDirection:'row'
    }
  })

