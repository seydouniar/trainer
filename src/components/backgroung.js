import React from "react";
import {View,ImageBackground,StyleSheet} from "react-native"

const image = require('../../assets/background.png');
const MyBackground = ({children})=>{
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
      flex: 1,
      width: "100%",
    },
    
  });
  
export default MyBackground;