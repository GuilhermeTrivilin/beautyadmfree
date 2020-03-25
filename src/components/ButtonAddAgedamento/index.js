import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import FormAddAgendamento from './form'

import firebase from '../../services/firebaseConnection'

import {
    Button,
} from '@ui-kitten/components';

export default function ButtonAddAgendamento({ homeButton }) {

    const [modalVisible, setModalVisible] = useState(false)

    function controleModal() {
        setModalVisible(!modalVisible)
    }

    async function adicionarAgendamento(valores) {

        let dados = valores

        let uid = firebase.auth().currentUser.uid
        let key = dados["key"]

        await firebase.database().ref(`users`).child(`${uid}/agendamentos/${key}`).set({
            key: dados["key"],
            nome: dados["nome"],
            celular: dados["celular"],
            descricao: dados["descricao"],
            valorPrevisto: dados["valorPrevisto"],
            date: dados["date"],
            hora: dados["hora"],
        })

        setModalVisible(false)
    }

    // ICONE BOTÃO - UI KITTEN

    const addIcon = () => (
        <Icon
            name="schedule"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )
    // ------------------------------------

    if(!homeButton){
        return (
            <>
                <Button
                    style={styles.addAgendaButton}
                    icon={addIcon}
                    onPress={() => controleModal()}
                >
                    ADICIONAR {'\n'}AGENDAMENTO
                </Button>
    
                <FormAddAgendamento
                    modalVisible={modalVisible}
                    controleModal={controleModal.bind(this)}
                    adicionarAgendamento={adicionarAgendamento.bind(this)}
                />
            </>
        )
    } else{
        return (
            <>
                {() => controleModal()}
    
                <FormAddAgendamento
                    modalVisible={modalVisible}
                    controleModal={controleModal.bind(this)}
                    adicionarAgendamento={adicionarAgendamento.bind(this)}
                />
            </>
        )
    }
}