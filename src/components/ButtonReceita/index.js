import React, { useState } from 'react'

import styles from './styles'
import FormReceita from './form'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
    Button,
} from '@ui-kitten/components';

export default function ButtonReceita() {

    const [modalVisible, setModalVisible] = useState(false)

    function controleModal() {
        setModalVisible(!modalVisible)
    }

    function adicionarReceita(valores) {
        let dados = JSON.stringify(valores)
        alert(dados)

        /*

            IMPORTANTE: LEMBRAR DE CRIAR UMA KEY ÚNICA PARA CADA REGISTRO DE DESPESA, PARA QUE FACILITE A PROCURA

            - Fazer validação dos campos no 'form.js' antes de mandar para cá (lembrar de zerar campos),
            - Linkar com banco de dados,
            - Validação do envio (adicionar alert confirmando valores);
            - Adicionar lista de funcionários; (linkado com o firebase)
            - Adicionar lista de estoque; (linkado com o firebase)
            - Verificar se os itens estão disponíveis em estoque;
            - Remover itens do estoque;
        */

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