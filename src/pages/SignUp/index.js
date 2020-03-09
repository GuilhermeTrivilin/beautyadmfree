import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, Image, Alert } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from '../../services/firebaseConnection'

import { Input, Button } from '@ui-kitten/components'

export default function SignUp({ navigation }) {

    // STATES PARA LOGIN

    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

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

    async function registrar(){
        if(verifyFields()){
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error)=>{
                alert(error.code)
            })
            clearFields()
        }
    }

    function clearFields(){
        setEmail('')
        setEmailConfirm('')
        setPassword('')
        setPasswordConfirm('')
    }

    function verifyFields(){

        let controleEstado = true

        if(email == "" && emailConfirm == "" && password == "" && passwordConfirm == ""){
            Alert.alert(
                "ERRO NO CADASTRO", 
                "Você precisa preencher todos os campos para se cadastrar."
            )
            controleEstado = false
        }
        
        if(email != emailConfirm){
            Alert.alert(
                "ERRO NO CADASTRO", 
                "O e-mail digitado não confere com o e-mail de verificação."
            )
            controleEstado = false
        }

        if(password != passwordConfirm){
            Alert.alert(
                "ERRO NO CADASTRO", 
                "A senha digitada não confere com a senha de verificação."
            )
            controleEstado = false
        }

        return controleEstado;
    }


    return (

        <View style={styles.container}>

            <Image
                style={{ width: 300, height: 300, margin: -90 }}
                source={require('../../assets/img/logo.png')}
            />

            <KeyboardAvoidingView style={styles.areaRegistro} >

                <Text style={styles.header}>REGISTRO</Text>

                <Input
                    style={styles.input}
                    value={email}
                    placeholder='Digita seu email'
                    icon={emailIcon}
                    onChangeText={(value) => setEmail(value)}
                />

                <Input
                    style={styles.input}
                    value={emailConfirm}
                    placeholder='Digite novamente seu email'
                    icon={emailIcon}
                    onChangeText={(value) => setEmailConfirm(value)}
                />

                <Input
                    style={styles.input}
                    value={password}
                    placeholder='Digite sua senha'
                    icon={passwordIcon}
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                />

                <Input
                    style={styles.input}
                    value={passwordConfirm}
                    placeholder='Digite novamente sua senha'
                    icon={passwordIcon}
                    secureTextEntry={true}
                    onChangeText={(value) => setPasswordConfirm(value)}
                />

                <Button
                    style={styles.signUpButton}
                    onPress={() => registrar()}
                >
                    REGISTRAR
                </Button>

                <Button
                    style={styles.bottomButtons}
                    onPress={() => navigation.goBack()}
                    textStyle={{ color: '#2067af', textDecorationLine: 'underline' }}
                >
                    Já possuo uma conta
                </Button>

            </KeyboardAvoidingView>
        </View>


    )
}