import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BannerSlider from '../../components/BannerSlider';
import { windowWidth } from '../../utils/Dimensions';
import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../../model/data';


export default function TelaInicial () {
    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item} />
    }
    const navigation = useNavigation();
    return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <ScrollView style={{padding:12}}>
            <View style={styles.header}>
                    <Text style={styles.messageNomeUsuario}>Olá Nome do Usuário</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>                    
                    <ImageBackground 
                        source={require('../../assets/perfil1.png')} 
                        style={{ height:40, width: 40}}
                    />
                    </TouchableOpacity>
                
            </View>
            <View style={styles.containerBusca}>
                <Ionicons name="search-outline" size={20} color="#c6c6c6" style={{marginRight: 6}}/>
                
                <TextInput placeholder='Procurar'/>
            </View>

            <View style={styles.viewAgendamentos}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>Próximos Agendamentos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Agendamento')}>
                    <Text style={styles.textVerTodos}>Ver Todos</Text>
                </TouchableOpacity>
            </View>

            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40}
              itemWidth={300}
              loop={true}
            />

            <View style={styles.viewIcones}>
                <Ionicons name="calendar-outline" size={40} color="#000"  onPress={() => navigation.navigate('Agendamento')}/>
                <Text style={styles.TextIcones}>Agendamentos</Text>

                <Ionicons name="receipt-outline" size={40} color="#000" onPress={() => navigation.navigate('Prontuario')}/>
                <Text style={styles.TextIcones}>Prontuário</Text>

                <Ionicons name="medical-outline" size={40} color="#000" onPress={() => navigation.navigate('Remedios')}/>
                <Text style={styles.TextIcones}>Remédios</Text>

            </View>
        </ScrollView>
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
    },
    messageNomeUsuario:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        paddingLeft:50
    },
    containerBusca:{
    flexDirection:'row',
    borderColor:'#000',
    borderWidth:1,
    borderRadius: 20,
    paddingHorizontal:10,
    paddingVertical:10,

    },
    textVerTodos:{
        color:'#38a69d',
        fontWeight:'bold',
        fontSize:14
    },
    viewAgendamentos:{
        marginVertical: 16,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    viewIcones:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingTop:20,

    },
    TextIcones:{
        alignSelf:'center',
        textAlignVertical:'bottom'
    }
    
})