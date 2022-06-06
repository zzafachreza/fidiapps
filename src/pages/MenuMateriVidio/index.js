import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text } from "react-native";
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
        <View style={{
            flex: 1,
        }}>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={myUrl}

            />
        </View>
    );
}