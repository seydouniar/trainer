import { Input, Text,Icon } from "@rneui/themed";
import React,{Component} from "react";
import { View,StyleSheet, TouchableWithoutFeedback} from "react-native";
import { Select, TimePicker } from "./common";
import { format, set } from "date-fns";

class ExerciceForm extends Component{
    render(){
        return (
            <Serie index={1}/>    
        )
    }
}

const Serie= ({index})=>{
    const data  = [
            {label:'Repétition',value:'rep'},
            {label:'Durée', value:'duree'},
            {label:'Distance',value:'dist'}
        ]
    let tempR=new Date();
    tempR.setHours(0);
    tempR.setMinutes(1);
    tempR.setSeconds(30);
    tempR.setMilliseconds(0)
    const [date,setDate] = React.useState(tempR);
    const [isShow,setIsShow]= React.useState(false);
    
    return(
        <View style={styles.container}>
            <View style={styles.GroupInput}>
                <Text style={styles.label}>Série {index}</Text>
                <View style={styles.selectView}>
                    <Select data={data} maxWidth={120}/>    
                </View>
            </View>
            <View style={styles.GroupInput}>
                <Text style={styles.label}>Objectif</Text>
                <Input 
                    inputContainerStyle={styles.input} 
                    inputMode="numeric"/>
                <Icon 
                    name="sync-outline" 
                    type="ionicon"
                    containerStyle={styles.iconStyle}/>

            </View>
            <View style={styles.GroupInput}>
                <Text style={styles.label}>Masse</Text>
                <Input 
                    inputContainerStyle={styles.input} 
                    inputMode="decimal"
                 />
            </View>
            <View style={styles.GroupInput}>
                <Text style={styles.label}>Repos</Text>
                <TouchableWithoutFeedback onPress={()=>{setIsShow(true)}}>
                   <View>
                    <TimePicker />
                   </View>
                </TouchableWithoutFeedback>
                
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width: 50,
        borderRadius:6,
        alignSelf:'flex-end',
    },
    GroupInput:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:20,
        marginHorizontal:5
        
    },
    label: 
    {
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        alignContent:'center'
    },
    selectView:{
        minWidth:200,
        alignSelf:'flex-end'
    },
    container:{
        borderWidth:1,
        borderColor:"#444",
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:12,
        paddingHorizontal:5,
        paddingVertical:5,
        shadowOffset: {width:2,height:2},
        shadowColor:'#222',
        shadowOpacity: 0.1,

    },
    iconStyle:{
        alignSelf:'center',
        paddingHorizontal:5,
        paddingVertical:5,
        marginVertical:10,
        marginLeft:40
    }
})
export default ExerciceForm;