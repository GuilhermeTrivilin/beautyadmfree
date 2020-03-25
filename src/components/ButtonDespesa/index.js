import React, { useState } from 'react'

import styles from './styles'
import FormDespesa from './form'
import Icon from 'react-native-vector-icons/MaterialIcons'

import firebase from '../../services/firebaseConnection'

import {
    Button,
} from '@ui-kitten/components';

export default function ButtonDespesa() {

    const [modalVisible, setModalVisible] = useState(false)

    async function adicionarDespesa(valores){

        let dados = valores

        let uid = firebase.auth().currentUser.uid
        let key = dados["key"]

        await firebase.database().ref(`users`).child(`${uid}/caixa/despesas/${key}`).set({
            key: dados["key"],
            valor: dados["valor"],
            descricao: dados["descricao"],
            data: dados["data"],
            parcelado: dados["parcelado"],
            qntdParcelas: dados["qntdParcelas"]
        })

       setModalVisible(false)
    }

    function controleModal(){
        setModalVisible(!modalVisible)
    }

    // ICONE BOTÃO - UI KITTEN

    const moneyIcon = () => (
        <Icon
            name="money-off"
            size={22}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )
    // ------------------------------------

    return (
        <>
            <Button
                style={styles.cancelButton}
                icon={moneyIcon}
                onPress={() => controleModal()}
            >
                ADICIONAR {'\n'}DESPESA
            </Button>

            <FormDespesa
                modalVisible={modalVisible} 
                controleModal={controleModal.bind(this)}
                adicionarDespesa={adicionarDespesa.bind(this)}
            />

            
        </>
    )
}