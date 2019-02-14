import React,{Component}from 'react';
import {StyleSheet,View,
    TouchableOpacity,Platform,
    TouchableWithoutFeedback,Button,
    Text,Dimensions,
    Animated,
    Easing
} from 'react-native';
import Video from 'react-native-video';
import {Icon,Slider,Progress} from '@ant-design/react-native';
import {formatSeconds} from '../util';
const exurl ='https://camo.githubusercontent.com/6e39997f79038055aff7479361bc8560d0ad5b28/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f6e756269782e63612f6769746875622f6578616d706c652e676966';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height

export default class VideoView extends Component{
    constructor(props){
        super(props);
        this.state={
            volume:1.0,
            rate:1,
            muted: false,
            paused:true,
            duration:0,
            currentTime:0,
            resizeMode:'contain',
            AnimatedRotate:new Animated.Value(0),
            viewW:0,
            viewH:0
        }
    }

    componentDidMount(){
        console.log('VideoView componentDidMount')
    }

    render(){
        let {AnimatedRotate} =this.state;
        return(
            <Animated.View  
            onLayout={this._onLayout} 
            style={[styles.container,{ 
                        // width:this.state.viewW,
                        // height:this.state.viewH,
                        transform: [{ rotate:  AnimatedRotate.interpolate({
                                    inputRange:[0,1],
                                    outputRange: ['0deg', '90deg']
                                    })  }] }]}>
                <Video 
                    // source={{uri: exurl}}   // Can be a URL or a local file.
                    source={require('./movie.mp4')}  // local file.
                    ref={(ref) => {
                        this.player = ref
                    }}
                    rate={this.state.rate}
                    paused={this.state.paused}
                    volume={this.state.volume}
                    muted={this.state.muted}
                    onLoad={this._onload}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    onProgress={this.onProgress}
                    style={styles.backgroundVideo} 
                    repeat={false}/>

                    <View style={styles.bottom}>
                       <View style={styles.progress}>
                            <Text style={styles.time}>{formatSeconds(this.state.currentTime||0)}</Text>
                                <View style={styles.slider}>
                                    <Slider min={0} max={this.state.duration} 
                                            value ={this.state.currentTime} 
                                            onAfterChange={(value)=>{this.changeProgress(value)}}/>
                                </View>
                            <Text style={styles.time2}>{formatSeconds(this.state.duration||0)}</Text>
                        </View>
                        <View style={styles.control}>
                        {
                            this.state.paused ?
                            <TouchableOpacity onPress={this._onSreenPress}><Icon size={24} name="play-circle"/></TouchableOpacity>
                            :
                            <TouchableOpacity onPress={this._onSreenPress}><Icon size={24} name="pause-circle"/></TouchableOpacity>
                        }
                            <TouchableOpacity onPress={this._toFullScreen}><Icon size={24} name="fullscreen"/></TouchableOpacity>
                        </View>      
                    </View>
            </Animated.View >
        )
    }

    _onLayout=({nativeEvent: { layout: {x, y, width, height}}})=>{
        console.log('通过onLayout得到的宽度：' + width);
        console.log('通过onLayout得到的高度：' + height);
        // this.setState({
        //     viewW:width,
        //     viewH:height
        // })
    }

    //播放/暂停
    _onSreenPress=()=>{
        this.setState({
            paused:!this.state.paused
        })
    }

    _onload=(Payload)=>{
        let {duration} = Payload;
        console.log('onLoad** ',Payload)
        this.setState({
            duration:duration
        })
    }

    onProgress=(Payload)=>{
        let {currentTime} = Payload;
        console.log('onProgress** ',Payload)
        this.setState({
            currentTime:currentTime
        })
    }


    changeProgress=(value)=>{
        this.player.seek(value);
    }

    onBuffer=()=>{

    }

    videoError=()=>{
        console.log('videoError')
    }

    _toFullScreen=()=>{
        if(Platform.OS == 'ios'){
            this.player.presentFullscreenPlayer()
        }else{
            // this._rotateAnime();
        }
    }

    _rotateAnime=()=>{
        Animated.spring(this.state.AnimatedRotate,{
            toValue:1,
            duration: 15000,  //从0到1的时间
            easing: Easing.out(Easing.linear),//线性变化，匀速旋转
            }).start()

        // let {viewW,viewH} = this.state;
        // let temp = viewW;
        // this.setState({
        //     viewW:viewH,
        //     viewH:temp
        // })
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },  
    bottom:{
        flexDirection:'column',
        position:'absolute',
        backgroundColor:'#F4F5F7',
        height:100,
        bottom:0,
        width:screenW,
        zIndex:999,
    },
    progress:{
        height:50,
    },
    slider:{
        marginTop:10,
        marginLeft:20,
        marginRight:20
    },  
    time:{
        width:60,
        position:'absolute',
        left:0
    },
    time2:{
        width:60,
        position:'absolute',
        right:0
    },
    control:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        height:50,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        },
  });