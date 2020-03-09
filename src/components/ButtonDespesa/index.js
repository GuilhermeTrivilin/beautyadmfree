import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import styles from './styles'
import FormDespesa from './form'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
    Button,
} from '@ui-kitten/components';

export default function ButtonDespesa() {

    const [modalVisible, setModalVisible] = useState(false)

    function adicionarDespesa(valores){
        let dados = JSON.stringify(valores)
        alert(dados)

        /* Implementar:

        IMPORTANTE: LEMBRAR DE CRIAR UMA KEY ÚNICA PARA CADA REGISTRO DE DESPESA, PARA QUE FACILITE A PROCURA

        - Fazer validação dos campos no 'form.js' antes de mandar para cá (lembrar de zerar campos),
        - Validação dos campos;
        - Validação do envio (adicionar alert confirmando valores);
        - Linkar com o Firebase;
        - Limpar campos após o envio.
        */

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