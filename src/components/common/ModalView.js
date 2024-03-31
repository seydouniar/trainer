import React from 'react';
import {View, Modal, Text, StyleSheet} from 'react-native';

const ModalView = ({children, title, visible,closeModal,transparent}) =>{
    return (
        <Modal
            animated
            animationType="slide"
            transparent={transparent}
            visible={visible}
            onRequestClose={closeModal}>
            <View style= {styles.container}>
                {title&&<Text style={styles.text}>{title}</Text>}
                {children}
                
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
    },
    text:{
        alignSelf:'center',
        fontSize:30
    }
    
})

export {ModalView};