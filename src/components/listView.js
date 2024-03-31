import React,{Component} from "react";
import { View,TouchableOpacity,Text, StyleSheet} from "react-native";
import {Card} from './common';
import {ListItem , Icon} from '@rneui/themed'


class ListView extends Component{
    
    renderDays(data){
        return <View style={styles.daysView}>
            <Icon name="calendar" type="antdesign" size={15}/>
            {data.map((day)=>{
                return day.checked&&<Text key={day.id} style={styles.dayText}>{day.day}</Text>;
            })}
        </View>
    }
    renderItem(){
        const {programmes} = this.props;
        if(programmes===undefined){
            return null
        }

        return programmes.map((item)=>{
            return <Card key={item.id}>
                <ListItem.Swipeable
                    onSwipeEnd={()=>{this.props.delete(item.id)}}
                    leftContent={(reset)=>{reset()}}
                    rightContent={(reset)=>{reset()}}
                    onPress={()=>this.props.itemPressed(item)}
                >
                    <ListItem.Content>
                        <ListItem.Title right style={styles.title}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>
                            {this.renderDays(item.days)}
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            <Icon name="dribbble" type="font-awesome" size={12}/>
                            {item.set} 
                            <Icon name="time-outline" type="ionicon" size={12}/>
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <TouchableOpacity>
                        <Icon name="play-circle" type="ionicon" size={40}/>
                    </TouchableOpacity>
                    <ListItem.Chevron />
                </ListItem.Swipeable>
            </Card>
        })
    }
    render(){
        return (
            <View>
                {this.renderItem()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    daysView:{
        flexDirection:'row',
        alignContent:'space-between',
        marpginVertical:12,
        alignItems:'flex-end'
    },
    dayText:{
        marginLeft:5,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'black'
    }


})
export default ListView;