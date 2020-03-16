import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, Image, Alert } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

import firebase from '../../services/firebaseConnection'

import { Input, Button } from '@ui-kitten/components'

export default function SignIn({ navigation }) {

    // STATES PARA LOGIN

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // ------------------

    // ÍCONES UI KITTEN

    const emailIcon = () => (
        <Icon
            name="user"
            size={25}
            style={{ textAlignVertical: 'center' }}
            color='#c3c3c3'
        />
    )

    const passwordIcon = () => (
        <Icon
            name="lock"
            size={25}
            style={{ textAlignVertical: 'center' }}
            color='#c3c3c3'
        />
    )

    // ------------------

    function recuperarSenha() {
        alert("Indisponível no momento, contate trivilin.dev@hotmail.com")
    }

    async function login(){
        if(verifyFields()){
            await firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) =>{
                alert(error.code)
            })
        }
    }

    function verifyFields(){
        if(email != '' && password != ''){
            return true
        } else{
            Alert.alert(
                "ERRO NO LOGIN", 
                "Você precisa preencher todos os campos."
            )
            return false
        }
    }

    return (

        <KeyboardAvoidingView style={styles.container}>

            <Image
                style={{width: 300, height: 300, margin: -90}}
                source={require('../../assets/img/logo.png')}
            />

            <View style={styles.areaLogin} >

                <Text style={styles.header}>LOGIN</Text>

                <Input
                    style={styles.input}
                    value={email}
                    placeholder='Digite seu email'
                    icon={emailIcon}
                    autoCapitalize="none"
                    onChangeText={(value) => setEmail(value)}
                />

                <Input
                    style={styles.input}
                    value={password}
                    placeholder='Digite sua senha'
                    icon={passwordIcon}
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                />

                <Button
                    style={styles.signInButton}
                    onPress={() => login()}
                >
                    ENTRAR
                </Button>

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        style={styles.bottomButtons}
                        onPress={() => recuperarSenha()}
                        textStyle={{ color: '#2067af', textDecorationLine: 'underline' }}
                    >
                        Recuperar senha
                    </Button>

                    <Button
                        style={styles.bottomButtons}
                        onPress={() => navigation.push('SignUp')}
                        textStyle={{ color: '#2067af', textDecorationLine: 'underline' }}
                    >
                        Registrar-se
                    </Button>
                </View>
            </View>
        </KeyboardAvoidingView>


    )
}