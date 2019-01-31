import React,{Component}from 'react';
import {StyleSheet,View} from 'react-native';
import Video from 'react-native-video';

const exurl ='https://ugcws.video.gtimg.com/uwMRJfz-r5jAYaQXGdGnCtD0ZkRh8BgOUQePMGh65cs/m0682ssvvdm.p712.1.mp4?sdtfrom=v1010&guid=753bc5401a9ec1d21455b3345e425f15&vkey=F7DE53D7D0C66D616D74C62C1676182A9EC406C8E62295915C15F2375B3B500E2C1967AF21B2A582ED31A796FF636C0281CC210658215F10D1104023C5C2127957AEA7E7F100D221B9593091531727FED7ED3A7B2761D5CBC85B0AFC490E02994EA6208A7D077849541963EC317DDFC5CC80AEA08788252F';

export default class VideoView extends Component{
    player
    constructor(props){
        super(props);
        this.state={
            volume:1.0,
            rate:1,
            muted: false,
            paused:false,
            resizeMode:'contain',
        }
    }

    componentDidMount(){
        console.log('VideoView componentDidMount')
    }

    render(){
        return(
            <View style={styles.container}>
                <Video 
                    source={{uri: exurl}}   // Can be a URL or a local file.
                    // source={require('./movie.mp4')}  // Can be a URL or a local file.
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
            </View>
        )
    }


    _onload=()=>{
        console.log('onLoad')
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
    backgroundVideo: {
      position: 'absolute',
    //   height:200,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });