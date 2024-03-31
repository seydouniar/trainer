import React, {Component} from "react";
import MyBackground from "../components/backgroung";
import LoginForm from "../components/loginForm";
import { Button } from "@rneui/base";
import {connect} from "react-redux";
import * as actions from "../actions";

class SignupPage extends Component{
    async onSubscribe(e){
        e.preventDefault();
        const {email,password,error} = this.props;
        this.props.signUpFirebase({email,password},
            ()=>{
                this.props.navigation.navigate("loading");
            },
            ()=>{
                console.log(error);
            })
    }
    render (){
        return (
            <MyBackground>
                <LoginForm 
                    title="Créer un compte sur Trainer"
                    type="signup" 
                    button="S'enrégistrer"
                    onButtonPressed={this.onSubscribe.bind(this)}/>
                <Button 
                type="clear" 
                title="J'ai déjà un compte"
                onPress={()=>this.props.navigation.goBack()}
                 />
            </MyBackground>
        );
    }
}

const mapStateToProps = (state)=>{
    return state.auth;
}
export default connect(mapStateToProps,actions)(SignupPage);