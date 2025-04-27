import { Input, Text, } from "@rneui/themed";
import React,{Component} from "react";
Image
import { View,StyleSheet, TouchableWithoutFeedback, Image} from "react-native";
import { Dropdown } from "./common";
import { exercices } from "../utils/exercices";
class ExerciceForm extends Component{
    render(){
        const reps = [1,2,3,4,5,6,7,8,9,10,11,12];
        const reps1= reps.map((x)=>{
            return {label:x,value:x}
        });
        console.log(reps1);
        
        return (
            <View style={styles.viewContent}>
                <View style={styles.viewExerxice}>
                    <Text>Exercice</Text>
                    <Dropdown
                    data={exercices}
                    onChange={(item)=>console.log(item.label)}
                    placeholder="choisir l'exercice"
                />
                </View>
                <View>
                    <Text>Repétition</Text>
                    <Dropdown
                    data={reps1}
                    onChange={(item)=>console.log(item.label)}
                    placeholder="nombre de repétition"
                />
                </View>
                <View>
                    <Text>Poids</Text>
                    <Input />
                </View>
            </View>
          
        )
    }
}

const styles = StyleSheet.create(
    {
        viewContent:{
           
        },
        viewExerxice:{
              
        }
    }
)
export default ExerciceForm;