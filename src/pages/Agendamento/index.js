import React, { useState } from 'react';
import { View } from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { agendamentosAnteriores, freeGames, paidGames, proximosAgendamentos } from '../../model/data';
import CustomSwitch from '../../components/CustomSwitch';
import ListaDeAgendamentos from '../../components/ListaDeItens';


export default function Agendamento () {
    const [agendamentoTab, setAgendamentos] = useState (1);

    const onSelectSwitch = (value) => {
        setAgendamentos(value);
    }

    const navigation = useNavigation();
   return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <ScrollView style={{padding:12}}>
            <View style={{marginVertical:20, paddingTop:'10%'}}>
                <CustomSwitch 
                    selectionMode={1} 
                    option1='Próximos Agendamentos'
                    option2='Agendamentos Anteriores'
                    onSelectSwitch={onSelectSwitch}
                />
            </View>
            
            {agendamentoTab == 1 && 
                proximosAgendamentos.map(item => (
                    <ListaDeAgendamentos 
                        key={item.id}
                        photo={item.poster}
                        nome={item.nome}
                        data={item.data}
                        isFree={item.isFree}
                        situacao={item.situacao}
                    />
                ))
            }
            {agendamentoTab == 2 && 
                agendamentosAnteriores.map(item => (
                    <ListaDeAgendamentos 
                        key={item.id}
                        photo={item.poster}
                        nome={item.nome}
                        data={item.data}
                        isFree={item.isFree}
                        situacao={item.situacao}
                        onPress={() => navigation.navigate('Prontuario')}
                    />
                ))
            }
        </ScrollView>
    </SafeAreaView>
   );
}