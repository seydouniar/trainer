import { FAB} from "@rneui/base";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MyBackground from "../components/backgroung";
import { ModalView } from "../components/common";


import * as actions from "../actions";
import {connect} from "react-redux";
import SeanceForm from "../components/seanceForm";
import ListGrid from "../components/listGrid";

class ProgDetailsScreen extends Component{
    state = {visible:false};
    async componentDidMount(){
        const {id} = this.props.route.params;
        this.props.getSeances({id});
        this.props.navigation.setOptions({
            title:this.props.route.params.name
        })
       
    }
    onItemPressed (item) {
        const {id} = this.props.route.params;
        item = {...item.item,prog_id:id}
        this.props.navigation.push("seances",{item});
       
        
    }
    render(){
        const {id} = this.props.route.params;
        const {programmes} = this.props;
        const prog = programmes.find(p=>p.id===id);
        
      
        return <MyBackground>
            
            <ListGrid data={prog.seances} 
                numColumns={2}
                onPressedItem={(item)=>{
                    this.onItemPressed(item);
                    }}/>
             
            <ModalView
                closeModal={()=>this.setState({visible:false})}
                visible={this.state.visible}
               >
                <SeanceForm prog={prog} onPressButton={()=>this.setState({visible:false})}/>
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
