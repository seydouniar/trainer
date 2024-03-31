import React, {Component} from "react";
import {StyleSheet,ActivityIndicator,Text,View} from 'react-native';
import MyBackground from "../components/backgroung";
import * as actions from "../actions";
import {connect} from "react-redux";
import { CommonActions } from '@react-navigation/native';

class LoadingPage extends Component{
    componentDidMount(){
        this.onCompleteLogin();
    }
    onCompleteLogin(){
        this.props.authStateChanged(
            ()=>{
                this.props.navigation
                    .dispatch(
                        CommonActions.reset({
                            index:1,
                            routes:[{name:'main'}]
                        })
                    )
            },
            ()=>{
                this.props.navigation
                    .dispatch(
                        CommonActions.reset({
                            index:1,
                            routes:[{name:'signin'}]
                        })
                    )
            }
        )
    }
    render(){
        return (<MyBackground>
            <View style={styles.content}>
                <Text style={styles.text}>Chargement...</Text>
                <ActivityIndicator size="large" color="white"/>
            </View>
            
        </MyBackground>)
    }
}
const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
       fontSize:24,
       color:'white',
    }
})

const mapStateToProps = (state)=>{
    return state.auth;
}
export default connect(mapStateToProps,actions)(LoadingPage);