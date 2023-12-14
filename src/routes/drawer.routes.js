import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaInicial from '../pages/TelaInicial';
import Perfil from "../pages/Perfil";
import CustomDrawer from '../components/CustomDrawer';
import Agendamento from "../pages/Agendamento";
import Prontuario from "../pages/Prontuario";
import Remedios from "../pages/Remedios";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{headerTitle:'',headerTransparent:true, headerTintColor:'#000', drawerActiveBackgroundColor:'#38a69d', drawerActiveTintColor: '#fff', drawerInactiveTintColor: '#000', drawerLabelStyle: {marginLeft:-10, fontSize:18}, DrawerTogleButton:{backgroundColor:'#000'} }} drawerContent={props => <CustomDrawer {...props} /> }>
            <Drawer.Screen
                name="Inicial"
                component={TelaInicial}
                options={{
                    drawerIcon: ({color}) =>(
                        <Ionicons name="home-outline" size={22} color={color}  />
                    )
                }}
            />
            <Drawer.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    drawerIcon: ({color}) =>(
                        <Ionicons name="person-outline" size={22} color={color}/>
                    )
                }}
            />
            <Drawer.Screen
                name="Agendamento"
                component={Agendamento}
                options={{
                    drawerIcon: ({color}) =>(
                        <Ionicons name="calendar-outline" size={22} color={color}  />
                    )
                }}
            />
            <Drawer.Screen
                name="Prontuário"
                component={Prontuario}
                options={{
                    drawerIcon: ({color}) =>(
                        <Ionicons name="receipt-outline" size={22} color={color}  />
                    )
                }}
            />
            <Drawer.Screen
                name="Remédios"
                component={Remedios}
                options={{
                    drawerIcon: ({color}) =>(
                        <Ionicons name="medical-outline" size={22} color={color}  />
                    )
                }}
            />
        </Drawer.Navigator>
    );
};

