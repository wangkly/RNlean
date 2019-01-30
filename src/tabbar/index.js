import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {TabBar,Icon}from '@ant-design/react-native';

export default class TabBarIndex extends Component{

    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'redTab',
        };
      }

    render(){
        return(
            <View style={styles.container}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="#f5f5f5">

                    <TabBar.Item
                        title="home"
                        icon={<Icon name="home"/>}
                        selected={this.state.selectedTab == 'homeTab'}
                        onPress={()=>this.onChangeTab('homeTab')}>

                        {this.renderContent('homeTab')}
                    </TabBar.Item>

                    <TabBar.Item
                        title="list"
                        icon={<Icon name="ordered-list"/>}
                        selected={this.state.selectedTab == 'listTab'}
                        onPress={()=>this.onChangeTab('listTab')}>

                        {this.renderContent('listTab')}
                    </TabBar.Item>
                    <TabBar.Item
                        title="me"
                        icon={<Icon name="user"/>}
                        selected={this.state.selectedTab == 'userTab'}
                        onPress={()=>this.onChangeTab('userTab')}>

                        {this.renderContent('userTab')}
                    </TabBar.Item>
                    
                </TabBar>    
            </View>
        )
    }


    onChangeTab=(tab)=>{
        this.setState({
            selectedTab:tab
        })
    }

    renderContent=(text)=>{
        return (
            <View style={styles.content}>
                <Text>{text}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})