import React, {useState,useEffect} from "react";
import { TextInput,StyleSheet,Button,View} from "react-native";

const NumberInput = ({value})=>{
    
    
    const [number, setNumber] = useState('')
    useEffect(()=>{
        if(value!==undefined)
        setNumber(value.toString())
    },[number]);
    const onNumberChange = (text)=>{
        const cleanedValue = text.replace(/[^0-9]/g,'');
        const parseValue = parseInt(cleanedValue,10)
        if(!isNaN(parseValue)){
            setNumber(parseValue.toString())

        }else{
            setNumber('');
        }
    }

    const onIncrement = ()=>{
        const inc = parseInt(number,10)+1;
        setNumber(inc.toString())
    }

    const onDecrement=()=>{
        if(parseInt(number,10)>0){
            const dec = parseInt(number,10)-1;
            setNumber(dec.toString())
        }
    }

    return (
        <View style={styles.viewContent} >
            <Button title="-" color="grey" onPress={onDecrement}/>
            <TextInput style={styles.inputStyles} keyboardType="numeric" value={number} onChangeText={onNumberChange}/>
            <Button title="+" color="grey" onPress={onIncrement}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContent:{
        flexDirection:"row"
    },
    inputStyles : {
        justifyContent:'center',   
        textAlign:'center', 
        backgroundColor:'white',
        fontWeight:'bold'
    }
})
export {NumberInput}