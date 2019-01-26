import React,{Component} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

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
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Detail')}
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

