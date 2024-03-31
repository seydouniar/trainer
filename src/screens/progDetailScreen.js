import { Text ,FAB, Button} from "@rneui/base";
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import MyBackground from "../components/backgroung";
import { ActionSheet } from "../components/common";


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
            <Text>{name}</Text>
            <FAB
                    visible={true}
                    icon={{ name: 'add', color: 'white' }}
                    color="red"
                    style={styles.fab}
                    onPress={()=>{
                        this.setState({visible:true})
                    }}
                />
                <ActionSheet visible={this.state.visible}
                onDismiss={()=>this.setState({visible:false})}>
                    <Button title="Exercies 0"/>
                    <Button title="Exercies 1"/>
                    <Button title="Exercies 2" />
                </ActionSheet>
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