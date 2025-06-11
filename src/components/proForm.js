import React,{Component} from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "@rneui/base";
import { connect } from "react-redux";
import * as actions from '../actions'


class ProgForm extends Component{

    state = { name:""};
    onPressButton(e){
        e.preventDefault();
        
        const {name} = this.state;
        this.props.createProgramme({name},()=>{
            this.props.onPressButton();
        })
    }
   
    
    render(){
        return(
            <View style={styles.viewStyle}> 
                <Input 
                    placeholder="Nom de Programme"
                    value={this.state.name}
                    onChangeText={(text)=>this.setState({name:text})}
                />
                
                <Button 
                    title="Enrégistrer"
                    onPress={this.onPressButton.bind(this)}
                    containerStyle={{
                        alignSelf:'center',
                        alignContent:'center',
                        borderRadius:5,
                        margin:5,
                        padding:10,
                        
                    }}
                    />
            </View>
        )
    }
}

class SeanceForm extends Component {
    state = { name:""};
    onPressButton(e){
        e.preventDefault();
        
        const {name} = this.state;
        this.props.ajouterSeance({prog_id:this.props.prog_id,name})
    }
    render () {
        return (<View style={styles.viewStyle}> 
        <Input 
            placeholder="Nom de Séance"
            value={this.state.name}
            onChangeText={(text)=>this.setState({name:text})}
        />
        
        <Button 
            title="Enrégistrer"
            onPress={this.onPressButton.bind(this)}
            containerStyle={{
                alignSelf:'center',
                alignContent:'center',
                borderRadius:5,
                margin:5,
                padding:10,
                
            }}
            />
    </View>)

    }
}

const styles =StyleSheet.create({
    viewStyle : {
        justifyContent: 'center',
        alignContent:'center',
        flex:1
    }
})
const mapStateToProps = (state)=>{
    return state.prog;
}

export default connect(mapStateToProps,actions)(ProgForm);
