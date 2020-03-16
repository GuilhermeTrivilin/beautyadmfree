import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import FormAddAgendamento from './form'

import {
    Button,
} from '@ui-kitten/components';

export default function ButtonAddAgendamento({ homeButton }) {

    const [modalVisible, setModalVisible] = useState(false)

    function controleModal() {
        setModalVisible(!modalVisible)
    }

    function adicionarAgendamento(valores) {
        let dados = JSON.stringify(valores)
        alert(dados)

        /*
            - Fazer validação dos campos no 'form.js' antes de mandar para cá (lembrar de zerar campos),
            - Linkar com banco de dados,
            - Gerar uma key única,
            - Adicionar à lista de agendamentos,
            - Usar o 'date-fns' para formatação de horários e datas
        */

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