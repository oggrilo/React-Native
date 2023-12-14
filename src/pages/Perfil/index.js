import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

import  * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';



export default function Perfil () {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Nome Usuário</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
            <Animatable.View animation="zoomIn" delay={650}>
                <Image source={require('../../assets/perfil1.png')} style={{ height:80, width: 80, alignSelf:'center'}}></Image>
                    <TouchableOpacity style={styles.buttonAlterarFoto}>
                        <Text style={styles.buttonTextAlterarFoto}>Alterar Foto de Perfil</Text>
                    </TouchableOpacity>

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite seu novo email aqui...'
                    style={styles.input}
                />
                
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua nova senha aqui...'
                    style={styles.input}
                />
                <TouchableOpacity style={styles.buttonAlterarFoto}>
                        <Text style={styles.buttonTextAlterarFoto}>Atualizar Informações</Text>
                </TouchableOpacity>
                
            </Animatable.View>
        </Animatable.View>

    </View>

    
    
    );
}


const styles = StyleSheet.create({
    container:{
        flex:4,
        backgroundColor:'#38a69d'
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff',
        alignSelf:'center'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        alignSelf:'center'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        
    },
    titleNome:{
        fontSize: 20,
        marginBottom:28,
        marginTop: 24,
    },
    titleImagem:{
        fontSize: 20,
        marginTop: 28,
        textAlign:'center'
    },
    containerForm:{
        backgroundColor: "#fff",
        flex: 3,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '14%',
        paddingEnd: '14%',
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buttonAlterarFoto:{
        backgroundColor:'#38a69d',
        width:'100%',
        borderRadius: 20,        
        paddingVertical: 8,
        marginTop: 14,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextAlterarFoto:{
        color: '#fff',
        fontSize:18,
        fontWeight:'bold',
    },
    buttonVoltar:{
        marginTop:'4%',
        alignSelf:'center'
    },
    buttonTextVoltar:{
        color: '#000'
    }
})