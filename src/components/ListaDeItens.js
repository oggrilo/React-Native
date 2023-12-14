import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { windowWidth } from '../utils/Dimensions';

export default function ListaDeAgendamentos({photo, nome, data, isFree, situacao, onPress}) {

  return (
    <View style={styles.container}>
        <View style={styles.listaAgendamentos}>
            <Image style={styles.imagem} 
            source={photo}
            />
            <View style={styles.viewTexto}>

                <Text style={styles.nomeDr}>Agendamento</Text>

                <Text style={styles.infoAgendamento}>
                {nome}
                </Text>

                <Text style={styles.textData}>
                {data}
                </Text>

            </View>
        </View>

        <TouchableOpacity onPress={onPress} 
        style={styles.buttonAgendamento}
        
        >
            
            <Text 
            style={styles.textButtonAgendamento}>
            {isFree == 'Yes' && 'Ver Informações'}
            {isFree == 'No' && situacao }
            
            </Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create ({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,

    },
    listaAgendamentos:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagem:{
        width: '26%',
        height: 60,
        borderRadius: 24,
        marginRight: 8,
        borderColor: '#38a69d',
        borderWidth:2
    },
    viewTexto:{
        gap: '10%',
        marginLeft: '4%',
        width: windowWidth - 220
    },
    nomeDr:{
        fontSize: 14,
        fontFamily: 'Roboto-Medium',

    },
    infoAgendamento:{
        fontFamily: 'Roboto-Medium',
        textTransform: 'uppercase',

    },
    textData:{
        fontFamily: 'Roboto-Medium',

    },
    buttonAgendamento:{
        backgroundColor: '#38a69d',
        padding: 10,
        borderRadius: 20,
        width: '100%',

    },
    textButtonAgendamento:{
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    }
})



