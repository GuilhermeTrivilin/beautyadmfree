import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import firebase from './services/firebaseConnection'

import Home from './pages/Home'
import FluxoDeCaixa from './pages/FluxoDeCaixa'
import Estoque from './pages/Estoque'
import Funcionarios from './pages/Funcionarios'
import Agendamento from './pages/Agendamento'
import Logout from './components/Logout'

import DrawerContent from './drawerContent'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();

function Routes() {

    const [usuarioLogado, setUsuarioLogado] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUsuarioLogado(true)
            } else {
                setUsuarioLogado(false)
            }
        }
        )
    }, [])

    if (usuarioLogado) {
        return <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Agendamento" component={Agendamento} />
                <Drawer.Screen name="Estoque" component={Estoque} />
                <Drawer.Screen name="Fluxo de Caixa" component={FluxoDeCaixa} />
                <Drawer.Screen name="Funcionários" component={Funcionarios} />
                <Drawer.Screen name="Logout" component={Logout} teste={SignIn} />
            </Drawer.Navigator>
        </NavigationContainer >
    } else {
        return <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    }
}



export default Routes