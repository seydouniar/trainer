import React, {Component} from "react";
import MyBackground from "../components/backgroung";
import { Text } from "@rneui/themed";
import ExpandableListView from "../components/expandableListView";
import { exercices } from "../utils/exercices";
import ExerciceForm from "../components/exerciceForm";

class Exercices extends Component {
    render(){
        return (
            <MyBackground>
                <ExerciceForm name="Arraché" repetition={5} poids={20} cat="technique"/>
            </MyBackground>
        )
    }
}

export default Exercices;