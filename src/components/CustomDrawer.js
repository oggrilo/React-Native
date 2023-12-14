import React, {useContext} from "react";

import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { View, Text, ImageBackground, Image, requireNativeComponent, Touchable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';/*library para icones  */
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'


export const CustomDrawer = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
        
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#38a69d'}}>
                <ImageBackground source={require('../assets/backgroundWhite.jpg')} style={{padding:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Image source={require('../assets/perfil1.png')} style={{ height:80, width: 80, borderRadius: 40, marginBottom:10}}/>

                        <Text style={{ color:'#38a69d', fontSize: 18, fontWeight:'bold', paddingBottom:6}}>Usuário</Text> 
                        

                        <View style={{flexDirection:'row'}}>
                            <Text style={{ color:'#38a69d', fontWeight:'bold', paddingStart:'auto', marginRight:6}}>Plano''</Text>   
                            <FontAwesome5 name="heartbeat" size={16} color="#38a69d"/>
                        </View>
                    </TouchableOpacity> 

                </ImageBackground>
                <View style={{flex:1,backgroundColor:'#fff', paddingTop:12}}>

                    <DrawerItemList {...props}/>

                </View>
            </DrawerContentScrollView>
            
            <View style={{padding:20, borderTopWidth:1, borderTopColor:'#38a69d'}}>
                <TouchableOpacity  style={{paddingVertical:16}}>
                    <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="settings-outline" size={22}/>
                        
                        <Text style={{ fontSize:18, marginLeft:6}}>Configurações</Text>
                    </View>
                </TouchableOpacity>  

                <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={{paddingVertical:16}}>
                    <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="exit-outline" size={22} style={{transform: [{rotateY: '180deg'}]}} /* função para rotacionar icone */ />
                        
                        <Text style={{ fontSize:18, marginLeft:6}}>Sair</Text>
                    </View>
                </TouchableOpacity> 
                
            </View>
        
        </View>
    )
}

export default CustomDrawer