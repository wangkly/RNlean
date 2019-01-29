import React,{Component} from 'react';
import {View,FlatList,StyleSheet,Text} from 'react-native';

export default class UserList extends Component{

    constructor(props){
        super(props);
        this.state={
            refreshing:false,
            page:0

        }
    }

    componentDidMount(){
        this._initLoading()
    }

    render(){
        let {users} = this.props;
        console.log('users **',users.length)
        return(
            <View style={styles.constainer}>
                <FlatList 
                    data={users}
                    renderItem={this._renderRow}
                    onEndReached={
                       this._reachEnd
                    }
                    onEndReachedThreshold={0.9}
                    onRefresh={()=>{
                        this.setState({
                            refreshing:true
                        })
                        this._initLoading()
                    }}
                    refreshing={this.state.refreshing}
                />

            </View>
        )
    }

    _renderRow=({item})=>{
        return (
            <View style={styles.user}>
                <Text>{item.name}</Text>
            </View>
        )
    }

    //loading第一页
    _initLoading=()=>{
        let {initUser} = this.props;
        initUser({pageSize:10,pageNo:0});
    }

    _reachEnd=()=>{
        console.log('_reachEnd')
        let {initUser} = this.props;
        this.setState({
            page:this.state.page+1  
        },()=>{
            initUser({pageSize:10,pageNo:this.state.page})
        });
    }
}

const styles = StyleSheet.create({
    constainer:{
        flex:1
    },
    user:{
        flexDirection:'row',
        height:30,
    }
})