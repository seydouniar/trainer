import React, {Component} from "react";
import ExerciceForm from "./exerciceForm";

class ListExercices extends Component{
    render(){
        const {exercices} = this.props
        if(exercices===undefined){
            return null
        }
       
       
        return exercices.map(
            exercice=>{
                
                return <ExerciceForm 
                    key={exercice.exo_id} 
                    name={exercice.name}
                    repetition={exercice.repetition}
                    poids= {exercice.poids}
                    cat={exercice.cat}
                    onPressEdit={this.props.itemEditPressed(exercice)}
                    onPressDelete={this.props.itemDeletePressed(exercice)}
                    />
            }
        )
        
    }
}

export default ListExercices;