import React, {useEffect, useState} from "react";
import { ListItem } from '@rneui/themed';
import { ScrollView, View } from "react-native";

const ExpandableListView = ({data,onPressedItem})=> {
    
    return (<ScrollView>
            {
                data.map((list,i)=>{
                    return (
                        <MyAccordion key={i} title={list.label} item={list.values} itemPressed={onPressedItem}/>
                            
                    )
                }) 
            }
        
        </ScrollView>)
    
}
const MyAccordion = ({title,item,itemPressed})=>{
    
    const [expanded, setExpanded] = useState(false);

    const list = item.map((it)=>{
        return {...it,cat:title}
    })
    return <ListItem.Accordion containerStyle={{backgroundColor:"grey"}}
        content={
            <>
             <ListItem.Content >
                <ListItem.Title style={{fontSize:24,fontWeight:'bold'}}>{title}</ListItem.Title>
            </ListItem.Content>
            </>
        }
        isExpanded={expanded}
        onPress={()=>setExpanded(!expanded)}
        bottomDivider>
            {
                
                list.map((it)=>{
                   
                    return <ListItem key={it.id} onPress={()=>itemPressed(it)} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{it.label}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                })
            }

    </ListItem.Accordion>

}
export default ExpandableListView;


