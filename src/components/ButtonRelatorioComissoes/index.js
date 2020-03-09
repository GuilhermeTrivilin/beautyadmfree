import React from 'react'

import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

import {
    Button,
} from '@ui-kitten/components';

// ICONE BOTÃO - UI KITTEN

const relIcon = () => (
    <Icon
        name="file-text"
        size={20}
        style={{ textAlignVertical: 'center' }}
        color='white'
    />
)
// ------------------------------------

function ButtonRelatorio() {

    return (
        <>
            <Button
                style={styles.relButton}
                icon={relIcon}
                onPress={() => alert('Teste Relatorio')}
            >
                RELATÓRIO{'\n'}COMISSÕES
            </Button>
        </>
    )
}

export default ButtonRelatorio