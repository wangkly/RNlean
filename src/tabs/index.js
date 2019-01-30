import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { Tabs } from '@ant-design/react-native';

const tabs = [
    { title: 'categories' },
    { title: 'collections' },
    { title: 'videos' },
  ];

export default class TabIndex extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Tabs tabs={tabs}>
                    <View style={styles.content}>
                        <Text>Content of First Tab</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>Content of Third Tab</Text>
                    </View>
                </Tabs>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    content:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#fff',
      }
})
