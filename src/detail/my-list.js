import React,{Component} from 'react';
import {View,FlatList,StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native';

const screenW = Dimensions.get('window').width;

const cols = 3;

const h_spacing =10 ;//水平间距

const v_spacing =10;//垂直间距

const imgWH = (screenW-(cols + 1) * h_spacing) / cols;

export default class MyList extends Component{

    constructor(props){
        super(props)
        this.state={
            data:[
                {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850063217&di=1c4962aad6a64fd2f4a381de8d05d595&imgtype=0&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Ff2%2F8%2Fd%2F96.jpg'},
                {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850063216&di=0f4f9bbaaee6bafe24fab3e5f472c481&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201512%2F12%2F20151212120309_BduTC.jpeg'},
                {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850063214&di=f73de557becc9667bb105fdfecd39426&imgtype=0&src=http%3A%2F%2Fimgq.duitang.com%2Fuploads%2Fitem%2F201503%2F22%2F20150322171820_UtwMk.thumb.700_0.jpeg'},
                {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850063212&di=8db8ff9787b8bd7224908126d5419e41&imgtype=0&src=http%3A%2F%2Fwww.qqwangming.org%2Fuploads%2F71f459727f5055a0%2F8.jpg'},
                {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850063210&di=b936ead7972601ea0c12e8648a8f1df0&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140403%2F0020033029624335_b.jpg'},
                {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850155795&di=72f9878782ad4b80ea320111effe0b71&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130420%2F0005018421916914_b.jpg'},
                {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850155794&di=4efaecca3f367346ff49c42f8f89d9f2&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201206%2F26%2F20120626190359_MjB3s.thumb.700_0.jpeg'}
            ]
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.state.data}
                    renderItem={this._renderRow} 
                    numColumns={cols}
                    horizontal={false}
                />
            </View>
        )
    }


    _renderRow=({item,index})=>{
        return(
            <TouchableOpacity
                activeOpacity={0.8} 
                onPress={()=>{}}
                key={index}>
                <View style={styles.imgWrap}>
                    <Image
                      source={{
                        uri: item.uri,
                        cache: 'force-cache',
                      }} 
                      style={styles.img}
                      onError={(error)=>{
                          console.log("error **",error)
                      }}
                    />
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imgWrap:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:5,
        width:imgWH ,
        height:imgWH *2,
        marginLeft:10,
        marginTop:10,
        borderWidth:1 ,
        borderColor:'#999999'
        
    },
    img:{
        width: imgWH * 0.8,
        height: imgWH ,
    }

})