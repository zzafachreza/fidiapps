import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text, ImageBackground } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function ({ navigation, route }) {
    const [playing, setPlaying] = useState(true);



    let myUrl = route.params.url;



    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            navigation.goBack();

        }
    }, []);



    return (
        <ImageBackground source={require('../../assets/back.png')} style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={myUrl}

            />
        </ImageBackground>
    );
}