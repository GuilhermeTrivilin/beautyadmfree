import React, { useState } from 'react'
import { View, Text, Modal, Image, ScrollView, Alert } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

import {
    Button,
    Input
} from '@ui-kitten/components';

export default function FormAddFuncionario({ modalVisible, controleModal, adicionarFuncionario }) {

    // States para registro do produto

    const [nomeFuncionario, setNomeFuncionario] = useState('')
    const [cargo, setCargo] = useState('')
    const [cpfCnpj, setCpfCnpj] = useState('')
    const [rg, setRg] = useState('')

    //---------------------------

    function fecharModal() {
        controleModal()
        setNomeFuncionario('')
        setCargo('')
        setCpfCnpj('')
        setRg('')
    }

    function clearFields() {
        setNomeFuncionario('')
        setCargo('')
        setCpfCnpj('')
        setRg('')
    }

    function validaInfos() {

        if (nomeFuncionario !== "" && cargo !== "" && cpfCnpj !== "" && rg !== "") {
            return true
        } else {
            Alert.alert(
                "ERRO NO CADASTRO",
                "Você precisa preencher todos os campos."
            )
            return false
        }
    }

    // ÍCONES - UI KITTEN

    const addIcon = () => (
        <Icon
            name="user-plus"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )

    const cancelIcon = () => (
        <Icon
            name="x-square"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )

    // -----------------------------

    return (
        <Modal
            animationType={'slide'}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalArea}>
                <View style={styles.modalContent}>
                    <ScrollView>

                        <Text style={styles.modalHeaderText}>ADICIONAR FUNCIONÁRIO(A)</Text>

                        <Image
                            style={styles.img}
                            source={require('./SD-default-image.png')}
                        />

                        <Input
                            label="Nome do funcionário(a)"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={nomeFuncionario}
                            onChangeText={(value) => setNomeFuncionario(value)}
                        />

                        <Input
                            label="Cargo"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={cargo}
                            onChangeText={(value) => setCargo(value)}
                        />

                        <Input
                            label="CPF / CPNJ"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={cpfCnpj}
                            onChangeText={(value) => setCpfCnpj(value)}
                            keyboardType="numeric"
                        />

                        <Input
                            label="RG"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={rg}
                            onChangeText={(value) => setRg(value)}
                            keyboardType="numeric"
                        />

                        <View style={styles.buttonsArea}>
                            <Button
                                style={styles.addButton}
                                status='success'
                                icon={addIcon}
                                onPress={() => {
                                    if (validaInfos()) {
                                        let compilaDados = {
                                            key: Math.floor(Math.random() * (9999999999 - 1000000000 + 1) + 1000000000),
                                            nomeFuncionario: nomeFuncionario,
                                            cargo: cargo,
                                            cpfCnpj: cpfCnpj,
                                            rg: rg
                                        }

                                        clearFields()
                                        adicionarFuncionario(compilaDados)
                                    }
                                }}
                            >
                                ADICIONAR
                            </Button>

                            <Button
                                style={styles.cancelButton}
                                icon={cancelIcon}
                                onPress={() => fecharModal()}
                            >
                                CANCELAR
                            </Button>
                        </View>

                    </ScrollView>

                </View>
            </View>
        </Modal>
    )
}