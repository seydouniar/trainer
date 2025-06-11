import React, {Component} from "react";
import MyBackground from "../components/backgroung";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import { Button, Image, Input } from "@rneui/base";
import {connect} from 'react-redux';
import * as actions from "../actions";

class EditProfile extends Component {
   
    
    async onSave(){
        const {name,taille,poids,image,age} = this.props.user;
        const userData = {name,taille,poids,age,image};
                
        await this.props.setUserProfile(userData,()=>this.props.onPressButton())
    }

    onNameChanged(text){
        this.props.nameChanged(text)    
    }
    onTailleChanged(text){
        this.props.tailleChanged(text)
    }
    onPoidsChanged(text){
        this.props.poidsChanged(text)
    }
    onAgeChanged(text){
        this.props.ageChanged(text)
    }
   
    render(){

        const {name,taille,poids,image,age} = this.props.user;
        const defaultImage = require('../../assets/no_profile.jpg') 
        
        return (
            <MyBackground>
                <View>
                    
                    
                    <Image source={defaultImage}/>
                    

                    <View>
                        <Text>Nom</Text>
                        <Input 
                            value={name} 
                            onChangeText={this.onNameChanged.bind(this)}
                            placeholder="Entrer votre nom"/>
                    </View>

                    <View>
                        <Text>Taille</Text>
                        <Input 
                            value={taille} 
                            onChangeText={this.onTailleChanged.bind(this)}
                            placeholder="Entrer votre taille"/>
                    </View>

                    <View>
                        <Text>Poids</Text>
                        <Input 
                        value={poids} 
                        onChangeText={this.onPoidsChanged.bind(this)}
                        placeholder="Entrer votre taille"/>

                    </View>
                    <View>
                        <Text>Age</Text>
                        <Input 
                        value={age} 
                        onChangeText={this.onAgeChanged.bind(this)}
                        placeholder="Entrer votre taille"/>

                    </View>

                    <Button title="Enrégistrer" onPress={this.onSave.bind(this)}/>

                </View>
            </MyBackground>
        )
    }
}

const mapStateToProps = (state)=>{
   
    return state.auth; ;
}

export default connect(mapStateToProps,actions)(EditProfile);
