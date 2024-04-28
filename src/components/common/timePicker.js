import React, { Component } from "react";
import {Picker} from '@react-native-picker/picker';
import { View,Text,StyleSheet, ScrollView } from "react-native";

class TimePicker extends Component{
    state={data:[],selected:{}};
    UNSAFE_componentWillMount(){
        this.ini_data();
    }

  
    ini_data(){
        let temp_data=[]
        for(i=0;i<60;i++){
            temp_data.push({key:i,value:i});
        }
        return this.setState({data:temp_data})
    }
    renderNumberItem(){
       const {data,selected} = this.state;
       console.log(data);
        if(data==undefined) return;
        if(data.length<1) return;
        return <Picker
        selectedValue={selected}
        onValueChange={(itemValue,itemIndex)=>{
            this.setState({selected:itemValue})
        }}
    >
      
      <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
    
    </Picker>
    }
    
    render(){
        return this.renderNumberItem();
    }
}
const styles = StyleSheet.create({
    itemView:{

        borderBottomWidth: StyleSheet.hairlineWidth,

        margin: StyleSheet.hairlineWidth,
    },
    listView:{
        height:80,   
        paddingHorizontal:20,
        
    },
    text:{
        fontSize:22
    }
})
export {TimePicker}