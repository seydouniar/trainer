import React, {Component} from "react";
import {Input,Button} from "@rneui/themed"
import { View ,Text, StyleSheet} from "react-native";
import {emailValidator,passwordValidator} from "./validators"
import { connect } from "react-redux";
import * as actions from '../actions';

class LoginForm extends Component {
    state = {
        confirmer:"",
        confirmErrorMessage:"",
        confirmerError:false,
        emailError:false,
        passwordError:false
    };

   
    onChangeEmail(text){
        this.props.emailChanged(text);
        if(emailValidator(text)===""){
            this.setState({emailError:true})
        }else{
            this.setState({emailError:false});
        }
    }

    onChangePassword(text){
        this.props.passwordChanged(text);
        if(passwordValidator(text)===""){
            this.setState({passwordError:true})
        }else{
            this.setState({passwordError:false})

        }
    }

    onErrorChanged(text){
        this.props.errorChanged(text);
    }

    onChangeConfirmer(text){
        this.setState({confirmer:text});
        const {password} = this.props;
        const {confirmer} = this.state;
        if(password===confirmer){
            this.setState({confirmerError:true});
            this.setState({confirmErrorMessage:""});
        }else{
            this.setState({confirmerError:false});
            this.setState({confirmErrorMessage:"Les mot de passes sont différents."})
        }
    }



    render() {
        const {email,password,error} = this.props;
        const {emailError,passwordError,confirmerError}=this.state;
        
        return (
            <View>
                <Text style={styles.text}>{this.props.title}</Text>
                <Input  
                    value={email}
                    placeholder="votre adresse email" 
                    onChangeText={this.onChangeEmail.bind(this)}
                    inputContainerStyle={styles.input}
                    inputStyle={styles.inputText}
                    errorMessage={emailValidator(email)}
                    />
                <Input  
                    value={password}
                    onChangeText={this.onChangePassword.bind(this)}
                    placeholder="mot de passe" 
                    secureTextEntry={true}
                    inputContainerStyle={styles.input}
                    inputStyle={styles.inputText}
                    errorMessage={passwordValidator(password)}
                    />
                {this.props.type=="signup"&&<Input  
                    value={this.state.confirmer}
                    onChangeText={this.onChangeConfirmer.bind(this)}
                    placeholder="Confirmer" 
                    secureTextEntry={true}
                    inputContainerStyle={styles.input}
                    inputStyle={styles.inputText}
                    errorMessage={this.state.confirmErrorMessage}
                    />}
                {error&&<Text style={styles.error}>{error}</Text>}
                {this.props.type=="signup"&&<Button buttonStyle={styles.button} 
                title={this.props.button}
                onPress={this.props.onButtonPressed}
                disabled={!(emailError&&passwordError&&confirmerError)}/>}  

                {this.props.type=="signin"&&<Button buttonStyle={styles.button} 
                title={this.props.button}
                onPress={this.props.onButtonPressed}
                disabled={!(emailError&&passwordError)}/>}  
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button:{
        borderRadius:22,
        margin:10,
        padding:10
    },
    input:{
        borderRadius: 22,
        backgroundColor:'white',
        margin:5,
        paddingLeft:22,
        paddingRight:22
    },
    inputText:{
        fontSize:25
    },
    text:{
        paddingBottom:30,
        fontSize:30,
        alignSelf:'center',
        color:"white"
    },
    error:{
        color:"red",
        alignSelf:"center"
    }
})

const mapStateToProps = (state)=>{
    const {email,password,user,error} = state.auth
    return {email, password, user,error};
}
export default connect(mapStateToProps,actions)(LoginForm);