import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type propsNavigationStack = {
    SignIn: undefined,
    Welcome: undefined,
    TelaInicial: undefined,
    Cadastro: undefined,
    Perfil: undefined,
    Agendamento: undefined,
    Prontuario: undefined,
    Remedios: undefined,
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>