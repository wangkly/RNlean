import React,{Component}from 'react';
import {StyleSheet,View} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

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
                <VideoPlayer 
                    // source={{uri: exurl}}   // Can be a URL or a local file.
                    source={require('./movie.mp4')}  // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}
                    onBack={()=>this.props.navigation.goBack()}
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