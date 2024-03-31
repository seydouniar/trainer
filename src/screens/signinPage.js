import React, {Component} from "react";
import MyBackground from "../components/backgroung";
import LoginForm from "../components/loginForm";
import {connect} from 'react-redux';
import * as actions from "../actions";
import { Button } from "@rneui/themed";
class SigninPage extends Component{

    async onButtonPressed(e){
        e.preventDefault();
        const {email,password,error} = this.props;
        console.log(email,password);
        await this.props.signInFirebase({email,password},
            ()=>{
                this.props.navigation.navigate("loading");
            },
            ()=>{console.log(error);}
            )
    }

    goToSubscribe(e){
        e.preventDefault();
        this.props.navigation.navigate("signup");
    }

    render (){
        
        return (
            <MyBackground>
                <LoginForm 
                title="Connexion sur Trainer"
                type="signin"
                button="Se connecter"
                onButtonPressed={this.onButtonPressed.bind(this)}
                />   
                <Button 
                type="clear" 
                title="Créer un compte"
                onPress={this.goToSubscribe.bind(this)}
                 />
            </MyBackground>
        );
    }
}



const mapStateToProps = (state)=>{
    const {email,password,error,user} = state.auth;
    return {email,password,user,error} ;
}
export default connect(mapStateToProps,actions)(SigninPage);