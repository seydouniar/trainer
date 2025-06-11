import { Icon, Text, } from "@rneui/themed";
import React,{Component} from "react";
Image
import { View,StyleSheet, TouchableWithoutFeedback, Image} from "react-native";
import { Card, Dropdown, NumberInput } from "./common";
import { exercices } from "../utils/exercices";
class ExerciceForm extends Component{
    render(){
        const {name,repetition,poids,cat} = this.props;
        console.log(this.props);
        
        return (
            <Card>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.viewpart}>
                    <Text style={styles.text}>Repétition</Text>
                    <NumberInput value={repetition}/>
                </View>
                <View style={styles.viewpart}>
                    <Text style={styles.text}>Poids(kg)</Text>
                    <NumberInput value={poids}/>
                </View>
                <View style={styles.viewpart}>
                    <Text style={styles.text}>catégorie</Text>
                    <Text>{cat}</Text>
                </View>
                <View style={styles.viewpart}>
                    <Icon name="edit" onPress={this.props.onPressEdit}/>
                    <Icon name="delete" onPress={this.props.onPressDelete}/>
                </View>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    viewpart : {
        flexDirection:'row',
        alignItems:'center',

        paddingBottom:5,
        paddingTop:5,
        justifyContent:'space-between'
    },
    title:{
        alignItems:'center',
        fontSize: 30,
        fontWeight:'bold'    
    },
    text:{
        fontSize:20,
        fontWeight:'400'
    }

})

export default ExerciceForm;