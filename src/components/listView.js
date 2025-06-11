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

        const options = {
            
            year: "numeric",
            month: "numeric",
            day: "numeric",
          };

        if(programmes===undefined){
            return null
        }

        return programmes.map((item)=>{
           
            
            return <Card key={item.id}>
                <ListItem.Swipeable style={styles.itemStyle}
                    onSwipeEnd={()=>{}}
                    leftContent={()=>(
                    <Icon 
                        name="delete" 
                        color="red" 
                        onPress={()=>this.props.delete(item.id)} 
                        size={80}/>
                    )}
                    rightContent={(reset)=>{reset()}}
                    onPress={()=>this.props.itemPressed(item)}
                >
                    <ListItem.Content>
                        <ListItem.Title right style={styles.title}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{(new Date(item.createAt)).toLocaleDateString("fr-FR",options)}</ListItem.Subtitle>
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
   itemStyle:{
    backgroundColor:"white"
   },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
       
    },
    


})
export default ListView;