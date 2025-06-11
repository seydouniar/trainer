import React, {Component} from "react";
import { Text, View, StyleSheet, FlatList, TouchableWithoutFeedback } from "react-native";

class ListGrid extends Component {
    renderItem (item) {
            return (
                <TouchableWithoutFeedback key={item.id} onPress={()=>this.props.onPressedItem(item)}>
                    <View   style={styles.itemStyle}>
                        <Text style={styles.textStyle}>{item.item.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
            
        }
    
    render() {
        if(this.props.data===undefined) return null
        return (
            <View style={styles.containerList}>
               <FlatList data={this.props.data} keyExtractor={it=>it.id}
               numColumns={this.props.numColumns}
                renderItem={(item)=>this.renderItem(item)}
                removeClippedSubviews={true}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerList:{
        flex:1,
    },
    itemStyle:{
        flex:1,
        alignItems:'center',
       
        height : 150,
        backgroundColor: 'white',
        margin:5
    },
    textStyle:{
        fontSize:24,
        fontWeight: 'bold',
        color:'black'

    }
})

export default ListGrid;