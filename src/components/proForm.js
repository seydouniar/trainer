import React,{Component} from "react";
import { StyleSheet, View } from "react-native";
import { Input, CheckBox, Button } from "@rneui/base";
import { Text } from "@rneui/themed";
import { connect } from "react-redux";
import * as actions from '../actions'

class ProgForm extends Component{

    state = {days: [
        {id:1,day:'Lundi',checked:false},
        {id:2,day:'Mardi',checked:false},
        {id:3,day:'Mercredi',checked:false},
        {id:4,day:'Jeudi',checked:false},
        {id:5,day:'Vendredi',checked:false},
        {id:6,day:'Samedi',checked:false},
        {id:7,day:'Dimanche',checked:false}
    ],
    name:""
};
    onPressButton(e){
        e.preventDefault();
        console.log(this.props);
        const {name,days} = this.state;
        this.props.createProgramme({name,days},()=>{
            this.props.onPressButton();
        })
    }
    toggleCheckbox(id,index){
        const checkboxData = [...this.state.days];
        checkboxData[index].checked = !checkboxData[index].checked;
        this.setState({days:checkboxData});
    }

    daysRender(){
        return this.state.days.map((cb,index)=>{
            return (<View key={cb.id} >
                <CheckBox 
                    title={cb.day}
                    checked={cb.checked}
                    onPress={()=>this.toggleCheckbox(cb.id,index)}
                />
            </View>)
        });

    }
    render(){
        return(
            <View> 
                <Input 
                    placeholder="Nom de l'entraînement"
                    value={this.state.name}
                    onChangeText={(text)=>this.setState({name:text})}
                />
                <Text>Fréquence</Text>
                {this.daysRender()}
                <Button 
                    title="Créer"
                    onPress={this.onPressButton.bind(this)}
                    containerStyle={{
                        width:100,
                        alignSelf:'center'
                    }}
                    />
            </View>
        )
    }
}

const styles =StyleSheet.create({

})
const mapStateToProps = (state)=>{
    return state.auth;
}
export default connect(mapStateToProps,actions)(ProgForm);