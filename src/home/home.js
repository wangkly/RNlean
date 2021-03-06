import React,{Component} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import {Icon,Slider,Progress} from '@ant-design/react-native';
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

          <Button
            title="Go to Tabs"
            onPress={() => this.props.navigation.navigate('Tabs')}
          />
          <Button
            title="Go to Tabbar"
            onPress={() => this.props.navigation.navigate('Tabbar')}
          />
          <Button
            title="Go to Video"
            onPress={() => this.props.navigation.navigate('Video')}
          />
           <View>
              <Text>Default settings</Text>
              <Slider />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    btns:{
      flexDirection:'row'
    }
  })

