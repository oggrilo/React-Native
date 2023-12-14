import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Pressable, Platform } from 'react-native';

import  * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Cadastro () {
    const navigation = useNavigation();
    
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = ({type}, selectedDate) => {
        if (type == 'set'){
            const currentDate = selectedDate;
            setDate(currentDate);

            if (Platform.OS === 'android'){
                toggleDatepicker();
                setDateOfBirth(currentDate.toDateString());
            }
        }else{
            toggleDatepicker();
        }
    };

    const confirmIOSDate = () => {
        setDateOfBirth(date.toDateString());
        toggleDatepicker();
    };


    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#38a69d'}}>
            <ScrollView >
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Cadastre-se</Text>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
                        
                        <Text style={styles.title}>Nome Completo</Text>
                        <TextInput
                            placeholder='Digite seu nome aqui...'
                            style={styles.input}
                        />

                        <Text style={styles.title} >CPF</Text>
                        <TextInput
                            placeholder='Digite seu CPF...'
                            style={styles.input}
                        />

                        <Text style={styles.title} >Telefone</Text>
                        <TextInput
                            placeholder='Digite seu Telefone...'
                            style={styles.input}
                        />

                        <Text style={styles.title} >Data de Nascimento</Text>

                            {showPicker && (
                                <DateTimePicker
                                    mode='date'
                                    display='spinner'
                                    value={date}
                                    onChange={onChange}
                                    style={styles.datePicker}
                                />
                            )}  

                            {showPicker && Platform.OS === 'ios' &&
                            (
                                <View style={styles.viewButtonDatePicker}>

                                    <TouchableOpacity style={[styles.buttonDatePicker]}
                                        onPress={toggleDatepicker}
                                    >
                                      <Text style={[styles.textDatePicker]}>Cancelar</Text>  
                                    </TouchableOpacity> 

                                    <TouchableOpacity style={[styles.buttonConfirmDatePicker]}
                                        onPress={confirmIOSDate}
                                    >
                                      <Text style={[styles.textDatePicker]}>Confirmar</Text>  
                                    </TouchableOpacity>                                   

                                </View>
                            )}

                            {!showPicker && (
                                <Pressable
                                    onPress={toggleDatepicker}
                                >
                                    <TextInput
                                        placeholder='20/10/2023...'
                                        onPressIn={toggleDatepicker}
                                        editable={false}
                                        style={styles.input}
                                    />
                                </Pressable>  
                            )}            
                        

                        <Text style={styles.title}>Email</Text>
                        <TextInput
                            placeholder='Digite seu email aqui...'
                            style={styles.input}
                        />

                        

                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder='Digite sua senha aqui...'
                            style={styles.input}
                        />

                        <TouchableOpacity style={styles.buttonCadastrar} onPress={() => navigation.navigate('TelaInicial')}>
                            <Text style={styles.buttonTextCadastrar}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.buttonTextVoltar}>Voltar</Text>
                        </TouchableOpacity>

                        


                    </Animatable.View>

                </View>
            </ScrollView>
        </SafeAreaView>
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
    buttonCadastrar:{
        backgroundColor:'#38a69d',
        width:'100%',
        borderRadius: 20,        
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextCadastrar:{
        color: '#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    buttonVoltar:{
        paddingTop:'10%',
        alignSelf:'center',
        paddingBottom:'14%'
    },
    buttonTextVoltar:{
        color: '#000'
    },
    datePicker:{
        height: 120,
        marginTop: '4%'
    },
    viewButtonDatePicker:{
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    buttonDatePicker:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#a0a0a0",
        paddingHorizontal: 10,
        borderRadius: 20,  
        width:'40%',
        height: 40,
        
    },
    buttonConfirmDatePicker:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#38a69d",
        paddingHorizontal: 10,
        borderRadius: 20,        
        width:'40%',
        height: 40,
    },
    textDatePicker:{
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Roboto-Medium'
    }
})