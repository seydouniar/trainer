import React, {Component} from "react";
import MyBackground from "../components/backgroung";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import { Button, Input } from "@rneui/base";
import {connect} from 'react-redux';
import * as actions from "../actions";

class CreateProfile extends Component {
    state = {name:'',taille:'',poids:'',age:'',image:''}
    async componentDidMount(){
        await this.props.getUserProfile();
    }
    async onSave(){
        const userData = this.state;
                
        await this.props.setUserProfile(userData)
    }

    onNameChanged(text){
        this.setState({name:text})
        
    }
    onTailleChanged(text){
        this.setState({taille:text})
    }
    onPoidsChanged(text){
        this.setState({poids:text})
    }
    onAgeChanged(text){
        this.setState({age:text})
    }
   
    render(){

        
        const {name,taille,poids,image,age} = this.state
        
        return (
            <MyBackground>
                <View>
                    <View>
                        <Text>Photo</Text>
                    </View>

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

export default connect(mapStateToProps,actions)(CreateProfile);