import React, {Component} from "react";
import MyBackground from "../components/backgroung";
import { Text,Button } from "@rneui/themed";
import {connect} from 'react-redux';
import * as actions from "../actions";
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, View } from "react-native";
import EditProfile from "../components/editProfile";
import { FAB } from "@rneui/base";
import { ModalView } from "../components/common";


class ProfilePage extends Component {
    state = {visible:false}
    

    async onDisconnect(e){
        e.preventDefault();
        await this.props.disconnect(()=>{
            this.props.navigation.dispatch(CommonActions.reset({
                index:1,
                routes:[{name:'start'}]
            }));
        })
    }
    render(){
        const {name, poids, taille, age} = this.props.user;
        
           
        return (
            <MyBackground>
               
                <View style={styles.viewTxt}>
                    <Text style={styles.textName}>Nom</Text>
                    <Text style={styles.textValue}>{name}</Text>
                </View>

                <View style={styles.viewTxt}>
                    <Text style={styles.textName}>Taille</Text>
                    <Text style={styles.textValue}>{taille}</Text>
                    <Text style={styles.textValue}>cm</Text>
                </View>

                <View style={styles.viewTxt}>
                    <Text style={styles.textName}>Poids</Text>
                    <Text style={styles.textValue}>{poids}</Text>
                    <Text style={styles.textValue}>kg</Text>
                </View>

                <View style={styles.viewTxt}>
                    <Text style={styles.textName}>Age</Text>
                    <Text style={styles.textValue}>{age}</Text>
                    <Text style={styles.textValue}>ans</Text>
                </View>
               
                
                <Button title={'Se deconnecter'} onPress={this.onDisconnect.bind(this) } />
                <FAB
                    visible={true}
                    icon={{ name: 'edit', color: 'white' }}
                    color="red"
                    style={styles.fab}
                    onPress={()=>{
                        this.setState({visible:true})
                    }}
                />
                <ModalView 
                    title="Modifier le profil"
                    visible={this.state.visible}
                    closeModal={()=>this.setState({visible:false})}
                >
                    <EditProfile onPressButton={()=>this.setState({visible:false})}/>
                </ModalView>
            </MyBackground>
        )
    }
}

const styles = StyleSheet.create({
    viewTxt:{
        flexDirection:'row',
        justifyContent: 'flex-start'
    },
    textName:{
        fontWeight:'bold',
        fontSize: 24,
        margin:10
    },
    textValue:{
        fontSize : 24,
        margin:10,
        color: 'white',
        fontWeight:'900'
    },
    fab:{
        position:'absolute',
        bottom:10,
        right:10
    }
    
})
const mapStateToProps = (state)=>{
   
    return state.auth ;
}
export default connect(mapStateToProps,actions)(ProfilePage);