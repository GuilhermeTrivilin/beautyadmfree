import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import styles from './styles'
import FormAddProduto from './form'

import firebase from '../../services/firebaseConnection'

import {
    Button,
} from '@ui-kitten/components';

function ButtonAddProduto() {

    const [modalVisible, setModalVisible] = useState(false)

    function controleModal() {
        setModalVisible(!modalVisible)
    }

    async function adicionarProduto(valores) {
        let dados = valores

        let uid = firebase.auth().currentUser.uid
        let key = dados["key"]

        await firebase.database().ref(`users`).child(`${uid}/estoque/${key}`).set({
            key: dados["key"],
            nomeProduto: dados["nomeProduto"],
            qntd: dados["qntd"],
            estoqueLimite: dados["estoqueLimite"],
            valor: dados["valor"]
        })
        setModalVisible(false)
    }

    // ICONE BOTÃO - UI KITTEN

    const addIcon = () => (
        <Icon
            name="plus"
            size={22}
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
                ADICIONAR {'\n'}PRODUTO
            </Button>

            <FormAddProduto
                modalVisible={modalVisible}
                controleModal={controleModal.bind(this)}
                adicionarProduto={adicionarProduto.bind(this)}
            />
        </>
    )
}

export default ButtonAddProduto