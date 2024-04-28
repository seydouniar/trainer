import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker'
import {View} from 'react-native';


const DatePicker = ({value,onChangeDate,show,mode}) => {
    
    let maxMin = new Date();
    maxMin.setHours(0);
    maxMin.setMinutes(10);
    maxMin.setSeconds(60);
    maxMin.setMilliseconds(0);
    let minMin = new Date();
    minMin.setHours(0);
    minMin.setMinutes(0);
    minMin.setSeconds(30);
    minMin.setMilliseconds(0);

    
    return(
        <View>
            {show?<DateTimePicker
                locale='fr_FR'
                is24Hour
                value={value}
                mode={mode}
                maximumDate={maxMin}
                minimumDate={minMin}
                display="spinner"
                onChange={onChangeDate} />:null}
        </View>
    )
}

const styles = {
    textStyle : {
        fontSize: 20,
        right: 10
    }
}

export {DatePicker};