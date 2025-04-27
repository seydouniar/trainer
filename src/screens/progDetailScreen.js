import { FAB, Button} from "@rneui/base";
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import MyBackground from "../components/backgroung";
import { ModalView } from "../components/common";
import ExpandableListView from "../components/expandableListView";
import { exercices } from "../utils/exercices";

import * as actions from "../actions";
import {connect} from "react-redux";

class ProgDetailsScreen extends Component{
    state = {visible:false};
    componentDidMount(){
        this.props.navigation.setOptions({
            title:this.props.route.params.name
        })
    }
    onItemPressed (item) {
        const{id}=this.props.route.params;
        
        
        const exercice = {
            pro_id:id,
            cat:item.cat,
            id:item.id,
            name : item.label,
            repetition: 3,
            serie: 3,
            poids: 10
        }

        this.props.addExerciceToProgramme(exercice,()=>console.log("success") );
        
        
        
    }
    render(){
        const{name,id}=this.props.route.params;
        
        return <MyBackground>
            <ModalView
                closeModal={()=>this.setState({visible:false})}
                visible={this.state.visible}
               >
                <ExpandableListView onPressedItem={(item)=>{
                    this.setState({visible:false})
                    this.onItemPressed(item)
                }} data={exercices}/>
                
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
const mapStateToProps =(state)=>{
    const {programmes} = state.prog;
    return {programmes};
}
export default connect(mapStateToProps,actions)(ProgDetailsScreen);
