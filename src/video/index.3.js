import React,{Component}from 'react';
import {StyleSheet,View,TouchableOpacity,Platform,TouchableWithoutFeedback,Button,Text,Dimensions} from 'react-native';
import Video from 'react-native-video';
import {Icon,Slider,Progress} from '@ant-design/react-native';
const exurl ='https://ugcws.video.gtimg.com/uwMRJfz-r5jAYaQXGdGnCtD0ZkRh8BgOUQePMGh65cs/m0682ssvvdm.p712.1.mp4?sdtfrom=v1010&guid=753bc5401a9ec1d21455b3345e425f15&vkey=F7DE53D7D0C66D616D74C62C1676182A9EC406C8E62295915C15F2375B3B500E2C1967AF21B2A582ED31A796FF636C0281CC210658215F10D1104023C5C2127957AEA7E7F100D221B9593091531727FED7ED3A7B2761D5CBC85B0AFC490E02994EA6208A7D077849541963EC317DDFC5CC80AEA08788252F';

const screenW = Dimensions.get('window').width;

export default class VideoView extends Component{
    player
    constructor(props){
        super(props);
        this.state={
            volume:1.0,
            rate:1,
            muted: false,
            paused:true,
            resizeMode:'contain',
        }
    }

    componentDidMount(){
        console.log('VideoView componentDidMount')
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.videoView}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name="arrow-left" color="#b5b5b5"/>
                        </TouchableOpacity>
                        <Text>title</Text>
                        <Icon name="sound" color="#b5b5b5"/>
                    </View>
                    <TouchableOpacity onPress={this._onSreenPress}>
                        <Video 
                            source={{uri: exurl}}   // Can be a URL or a local file.
                            // source={require('./movie.mp4')}  // local file.
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
                            style={styles.backgroundVideo} 
                            repeat={false}/>
                    </TouchableOpacity>
                    <View style={styles.bottom}>
                       <View style={styles.progress}>
                            {/* <Text style={styles.time}></Text> */}
                            <Slider min={0} max={10} onAfterChange={(value)=>{console.log(value)}}/>
                            {/* <Text style={styles.time}></Text> */}
                            {/* <Progress percent={90}  /> */}
                        </View>
                        <View style={styles.control}>
                        {
                            this.state.paused ?
                            <Icon name="play-circle"/>
                            :
                            <Icon name="pause-circle"/>
                        }
                            <Icon name="fullscreen"/>
                        </View>      
                    </View>
                </View>
                <Button title="fullscreen" onPress={()=>this.player.presentFullscreenPlayer()}></Button>
            </View>
        )
    }

    //播放/暂停
    _onSreenPress=()=>{
        this.setState({
            paused:!this.state.paused
        })
    }


    _onload=(Payload)=>{
        console.log('onLoad** ',Payload)
    }

    onBuffer=()=>{

    }

    videoError=()=>{
        console.log('videoError')
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },  
    videoView:{
        // height:300
        // position:'absolute',
    },
    header:{
        position:'relative',
        height:36,
        backgroundColor:'#F4F5F7',
        opacity:0.4,
        paddingLeft:5,
        paddingRight:5,
        width:screenW,
        zIndex:999,
        top:80,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    bottom:{
        flexDirection:'column',
        position:'relative',
        backgroundColor:'#F4F5F7',
        opacity:0.4,
        height:50,
        top:-80,
        width:screenW,
        zIndex:999,
    },
    progress:{
        flexDirection:'row',
        alignItems:'center'
    },
    time:{

    },
    control:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    backgroundVideo: {
        // width:screenW,
        height:300
    //  flex:1,
    },
  });