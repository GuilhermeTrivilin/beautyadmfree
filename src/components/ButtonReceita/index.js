import React, { useState } from 'react'

import styles from './styles'
import FormReceita from './form'
import Icon from 'react-native-vector-icons/MaterialIcons'

import firebase from '../../services/firebaseConnection'

import {
    Button,
} from '@ui-kitten/components';

export default function ButtonReceita() {

    const [modalVisible, setModalVisible] = useState(false)

    function controleModal() {
        setModalVisible(!modalVisible)
    }

    async function adicionarReceita(valores) {
        let dados = valores

        let uid = firebase.auth().currentUser.uid
        let key = dados["key"]

        await firebase.database().ref(`users`).child(`${uid}/caixa/receitas/${key}`).set({
            key: dados["key"],
            nomeCliente: dados["nomeCliente"],
            funcionarioResp: dados["funcionarioResp"],
            valor: dados["valor"],
            descricao: dados["descricao"],
            formaPagamento: dados["formaPagamento"],
            data: dados["data"],
            formaPagamento: dados["formaPagamento"],
            tipoEntrada: dados["tipoEntrada"],
            produtosSelecionados: dados["produtosSelecionados"],
            funcionariosComissionados: dados["funcionariosComissionados"],
            desconto: dados["desconto"],
        })

        setModalVisible(false)
    }

    // ICONE BOTÃO - UI KITTEN

    const moneyIcon = () => (
        <Icon
            name="attach-money"
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
                icon={moneyIcon}
                onPress={() => controleModal()}
            >
                ADICIONAR {'\n'}RECEITA
            </Button>

            <FormReceita
                modalVisible={modalVisible}
                controleModal={controleModal.bind(this)}
                adicionarReceita={adicionarReceita.bind(this)}
            />
        </>
    )
}