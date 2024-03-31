import React from "react";
import { View,StyleSheet } from "react-native";

const Card = (props)=>{
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card:{
        borderRadius:2,
        elevation:2,
        backgroundColor:'#fff',
        shadowOffset: {width:1,height:1},
        shadowColor:'#222',
        shadowOpacity: 0.2,
        marginHorizontal:5,
        marginVertical: 5,
        opacity: 0.8
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10
    }

});

export {Card};