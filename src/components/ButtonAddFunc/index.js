import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import styles from './styles'
import FormAddFuncionario from './form'

import {
    Button,
} from '@ui-kitten/components';

import firebase from '../../services/firebaseConnection'


function ButtonAddFunc() {

    const [modalVisible, setModalVisible] = useState(false)

    function controleModal() {
        setModalVisible(!modalVisible)
    }

    async function adicionarFuncionario(valores) {

        let dados = valores

        let uid = firebase.auth().currentUser.uid
        let key = dados["cpfCnpj"]

        await firebase.database().ref(`users`).child(`${uid}/funcionarios/${key}`).set({
            nomeFuncionario: dados["nomeFuncionario"],
            cargo: dados["cargo"],
            cpfCnpj: dados["cpfCnpj"],
            rg: dados["rg"]
        })

        setModalVisible(false)
    }

    // ICONE BOTÃO - UI KITTEN

    const addIcon = () => (
        <Icon
            name="user-plus"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )
    // ------------------------------------

    return (
        <>
            <Button
                style={styles.addButton}
                icon={addIcon}
                onPress={() => controleModal()}
            >
                ADICIONAR {'\n'}FUNCIONÁRIO
            </Button>

            <FormAddFuncionario
                modalVisible={modalVisible}
                controleModal={controleModal.bind(this)}
                adicionarFuncionario={adicionarFuncionario.bind(this)}
            />
        </>
    )
}

export default ButtonAddFunc