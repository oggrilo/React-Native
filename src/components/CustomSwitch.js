import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity 
            activeOpacity={1}
            onPress={() => updateSwitchData(1)}
            style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? '#38a69d' : '#e4e4e4',
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '2%',
        }}>
            <Text style={{
            color: getSelectionMode == 1 ? 'white' : '#38a69d',
            fontSize: 16,
            fontFamily: 'Roboto-Medium'
            }}
            >{option1}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={1}
            onPress={() => updateSwitchData(2)}
            style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? '#38a69d' : '#e4e4e4',
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '2%',

        }}>
            <Text style={{
            color: getSelectionMode == 2 ? 'white' : '#38a69d',
            fontSize: 16,
            fontFamily: 'Roboto-Medium'
            }}
            >{option2}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
    container:{
        height: 50,
        width: '96%',
        backgroundColor: '#e4e4e4',
        borderRadius: 20,
        borderColor: '#38a69d',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-around',
        

    },
})

