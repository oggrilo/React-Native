import React, {useContext} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import  * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Models';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn () {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-Vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
        
            <Text style={styles.title}><Ionicons name="mail-outline" size={18}/>   Email</Text>
            <TextInput
                placeholder='Digite seu email aqui...'
                style={styles.input}
            />

            
            <Text style={styles.title}><Ionicons name="lock-closed-outline" size={18}/>   Senha</Text>
                
                <TextInput
                    placeholder='Digite sua senha aqui...'
                    style={styles.input}
                    
                />

            <TouchableOpacity style={styles.buttonAcessar} onPress={() => navigation.navigate('TelaInicial')}>
                <Text style={styles.buttonTextAcessar}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.buttonTextCadastro}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>


        </Animatable.View>

    </View>

    
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a69d'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff'
    },
    containerForm:{
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buttonAcessar:{
        backgroundColor:'#38a69d',
        width:'100%',
        borderRadius: 20,        
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextAcessar:{
        color: '#fff',
        fontSize:18,
        fontWeight:'bold'
        
    },
    buttonCadastro:{
        marginTop:14,
        alignSelf:'center',
        
    },
    buttonTextCadastro:{
        color: '#000'
    },
})