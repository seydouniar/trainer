import { Text ,FAB, Button} from "@rneui/base";
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import MyBackground from "../components/backgroung";
import { ModalView } from "../components/common";
import ExerciceForm from "../components/exerciceForm";


class ProgDetailsScreen extends Component{
    state = {visible:false};
    componentDidMount(){
        this.props.navigation.setOptions({
            title:this.props.route.params.name
        })
    }
    render(){
        const{name}=this.props.route.params;
        return <MyBackground>
            <ModalView
                closeModal={()=>this.setState({visible:false})}
                visible={this.state.visible}>
                <ExerciceForm onButtonPressed={()=>this.setState({visible:false})}/>
            </ModalView>
            <FAB
                    visible={true}
                    icon={{ name: 'add', color: 'white' }}
                    color="red"
                    style={styles.fab}
                    onPress={()=>{
                        this.setState({visible:true})
                    }}
                />
                
        </MyBackground>
    }
}

const styles = StyleSheet.create({
    fab:{
        position:'absolute',
        bottom:10,
        right:10
    }
})

export default ProgDetailsScreen;