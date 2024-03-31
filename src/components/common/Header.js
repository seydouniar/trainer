import React from 'react';
import {Text, View,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import { Icon } from '@rneui/base';

const Header = ({onPress,title}) => {
  const {iconStyle, viewStyle} = styles;
  return (
   
    <View style={viewStyle}>
       <Text style={styles.titleStyle}>{title}</Text>
       <TouchableWithoutFeedback onPress={onPress}>
          <View>
            <Icon name="user" type="entypo" color="white" style={iconStyle}/> 
          </View>
       </TouchableWithoutFeedback>
    </View>
    
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf:'center',
    justifyContent:'center',
    marginVertical:10,
  },
  viewStyle: {
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor: '#000',
    height: 70,
    paddingTop: 10,
    shadowColor: '#222',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity:0.5,
    elevation: 3,
    
  },
  titleStyle:{
    alignSelf:'center',
    justifyContent:'center',
    fontSize:30,
    color:'#fff'
  }
});

export {Header};
