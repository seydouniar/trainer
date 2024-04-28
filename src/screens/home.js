import React, {Component} from "react";
import {FAB} from "@rneui/themed";
import MyBackground from "../components/backgroung";
import * as actions from "../actions";
import {connect} from "react-redux";
import ListView from "../components/listView";
import { ModalView } from "../components/common";
import ProgForm from "../components/proForm";
import { StyleSheet } from "react-native";
class HomePage extends Component{
    state={visible:false,prog_id:""};
  
     async componentDidMount(){
        await this.props.getProgrammes();
    }
    onDisconnectPressed(){
        this.props.disconnect();
    }

    onDelete(prog_id){
        this.props.deleteProgramme(prog_id);
    }

    onItemPressed(item){
        this.props.navigation.navigate("details",item);
    }
    render (){
        const {programmes} = this.props
        return (
            <MyBackground>
                <ListView 
                    programmes={programmes} 
                    delete={this.onDelete.bind(this)}
                    itemPressed={this.onItemPressed.bind(this)}/>
                <FAB
                    visible={true}
                    icon={{ name: 'add', color: 'white' }}
                    color="red"
                    style={styles.fab}
                    onPress={()=>{
                        this.setState({visible:true})
                    }}
                />
                <ModalView 
                    title="Nouvel entrainement"
                    visible={this.state.visible}
                    closeModal={()=>this.setState({visible:false})}
                >
                    <ProgForm onPressButton={()=>this.setState({visible:false})}/>
                </ModalView>
            </MyBackground>
        );
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
export default connect(mapStateToProps,actions)(HomePage);