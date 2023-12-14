import React from 'react';
import { View, Text } from 'react-native-animatable';
import  * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


export default function Prontuario () {
    const navigation = useNavigation();
   return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <ScrollView style={{padding:12}}>
        <View>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Nome Usuário</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
                <Animatable.View animation="zoomIn" delay={650}>
                    <Image source={require('../../assets/perfil1.png')} style={{ height:100, width: 100, alignSelf:'center'}}></Image>
                </Animatable.View>

                <View style={styles.containerText}>
                    <Text style={styles.textInfos}>
                    Data De Cadastro: 00/00/0000
                    </Text>

                    <Text style={styles.textInfos}>
                    Data De Nascimento: 00/00/0000
                    </Text>

                    <Text style={styles.textInfos}>
                        CPF: 123.456.789-10
                    </Text>

                    <Text style={styles.textInfos}>
                        RG: 1.234.567
                    </Text>

                    <Text style={styles.textInfos}>
                    Telefone: (11) 9 1234-1234
                    </Text>

                    <Text style={styles.textInfos}>
                    Convênio: Particular
                    </Text>
                    
                </View>

            </Animatable.View>
            <FlatList>

            </FlatList>
        </View>
        </ScrollView>
    </SafeAreaView>

   );
}

const styles = StyleSheet.create({
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        alignSelf:'center'
    },
    containerForm:{
        backgroundColor: "#fff",
        flex: 3,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '14%',
        paddingEnd: '14%',
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#000',
        alignSelf:'center'
    },
    textInfos:{
        paddingTop:10,
        fontWeight:'bold',
        color:"#000",
    },
    containerText:{
        flexDirection:"column",
        alignSelf:'flex-start',
    }
   

})