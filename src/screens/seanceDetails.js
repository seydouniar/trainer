import React,{Component} from "react";
import { Text ,FAB} from "@rneui/base";
import {  StyleSheet} from "react-native";
import MyBackground from "../components/backgroung";
import { ModalView } from "../components/common";
import ExpandableListView from "../components/expandableListView";
import { exercices as allExos} from "../utils/exercices";

import * as actions from "../actions";
import { connect } from "react-redux";
import ListGrid from "../components/listGrid";

class SeanceDetails extends Component{
    state = {visible:false};

    async componentDidMount(){
        const{id,prog_id}=this.props.route.params.item;
        await this.props.getExercicesSeance(prog_id,id)
    }
    onItemPressed (it) {
        
        const {id}=this.props.route.params.item;
        const exercice = {
            name:it.label,
            cat:it.cat,
            seance_id: id,

        }
        this.props.addExercicieToSeance(exercice)
        
    }
    render(){
        const{id,prog_id}=this.props.route.params.item;
        const {programmes}=this.props
        const prog = programmes.find(p=>p.id===prog_id);
        const {seances} = prog
        const seance = seances.find(s=>s.id===id)
        
      
        return(
            <MyBackground>
                <ListGrid data={seance.exercices} 
                    numColumns={1}
                    onPressedItem={it=>console.log(it)
                    }/>
                <ModalView
                    visible={this.state.visible}
                    closeModal={()=>this.setState({visible:false})}
                    transparent={true}
                    >
                    <ExpandableListView onPressedItem={(item)=>{
                        this.setState({visible:false})
                        this.onItemPressed(item)
                    }} data={allExos}/>
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
        )
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

export default connect(mapStateToProps,actions)(SeanceDetails);