import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DrawerRouter } from '@react-navigation/native'

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Cadastro from "../pages/Cadastro";
import DrawerRoutes from "./drawer.routes";
import { propsNavigationStack } from "./Models";
import Prontuario from "../pages/Prontuario";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){//função para renderizar as rotas(telas)
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                options={{
                title: 'Login'
                }}
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                options={{
                title: 'Cadastro'
                }}
                name="Cadastro"
                component={Cadastro}
            />
            <Stack.Screen
                options={{
                    title:''
                }}
                name="TelaInicial"
                component={DrawerRoutes}
            />
        </Stack.Navigator>    
    )
}