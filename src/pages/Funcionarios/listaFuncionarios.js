import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

import firebase from '../../services/firebaseConnection'

import {
    Button,
    ButtonGroup,
    Input,
} from '@ui-kitten/components';

export default function ListaFuncionarios({ data }) {

    const [modalStatus, setModalStatus] = useState(false)
    const [editModeStatus, setEditModeStatus] = useState(false)

    // Estados do Modo Edição

    const [nomeEdit, setNomeEdit] = useState(data.nomeFuncionario)
    const [cargoEdit, setCargoEdit] = useState(data.cargo)
    const [cpfCnpjEdit, setCpfCnpjEdit] = useState(data.cpfCnpj)
    const [rgEdit, setRgEdit] = useState(data.rg)


    //-------------------------

    function clearFields() {
        setNomeEdit(data.nomeFuncionario)
        setCargoEdit(data.cargo)
        setCpfCnpjEdit(data.cpfCnpj)
        setRgEdit(data.rg)
    }

    async function salvarEdit() {
        let uid = firebase.auth().currentUser.uid
        await firebase.database().ref(`users`).child(`${uid}/funcionarios/${data.key}`).set({
            key: data.key,
            nomeFuncionario: nomeEdit,
            cargo: cargoEdit,
            cpfCnpj: cpfCnpjEdit,
            rg: rgEdit
        })
    }

    async function delFuncionario() {
        let uid = firebase.auth().currentUser.uid

        await firebase.database().ref(`users/${uid}/funcionarios/${data.key}`).remove(alert("Deletado com sucesso."))
    }

    function relFuncionario() {
        //MOSTRAR TODAS AS COMISSÕES DO FUNCIONÁRIO
        alert('teste relatorio individual')
    }

    function closeModal() {
        clearFields()
        setEditModeStatus(false)
        setModalStatus(false)
    }

    // ICONES BOTÕES - UI KITTEN

    const delIcon = () => (
        <Icon
            name="trash-2"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )

    const editIcon = () => (
        <Icon
            name="edit"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )

    const relIcon = () => (
        <Icon
            name="file-text"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )

    const saveIcon = () => (
        <Icon
            name="save"
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

    // ------------------------------------


    return (
        <>
            <TouchableOpacity
                onPress={() => setModalStatus(true)}
            >
                <View style={styles.containerCelula}>

                    <Image
                        style={styles.containerImg}
                        source={data.foto}
                    />

                    <View style={styles.containerName}>
                        <Text style={styles.headerCelula}> {data.nomeFuncionario} </Text>
                    </View>

                    <View style={styles.containerQntd}>
                        <Text>
                            {data.cargo}
                        </Text>
                    </View>

                    <View style={styles.containerIcon}>
                        <Icon
                            name="chevron-right"
                            size={28}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <Modal
                animationType={'slide'}
                transparent={true}
                visible={modalStatus}
                onRequestClose={() => closeModal()}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.modalArea}>
                        <View style={styles.modalContent}>

                            {!editModeStatus &&
                                <>
                                    <Text style={styles.modalHeaderText}>DADOS FUNCIONÁRIOS(A)</Text>
                                    <Image
                                        style={styles.modalImg}
                                        source={data.foto}
                                    />

                                    <Text style={styles.modalLabel}>
                                        Nome: <Text style={styles.modalSimpleText}>{data.nomeFuncionario}</Text>
                                    </Text>

                                    <Text style={styles.modalLabel}>
                                        Cargo: <Text style={styles.modalSimpleText}>{data.cargo}</Text>
                                    </Text>

                                    <Text style={styles.modalLabel}>
                                        CPF / CNPJ: <Text style={styles.modalSimpleText}>{data.cpfCnpj}</Text>
                                    </Text>

                                    <Text style={styles.modalLabel}>
                                        RG: <Text style={styles.modalSimpleText}>{data.rg}</Text>
                                    </Text>
                                </>
                            }
                            {editModeStatus &&
                                <>
                                    <Text style={styles.modalHeaderText}>DADOS FUNCIONÁRIOS(A)</Text>
                                    <Image
                                        style={styles.modalImg}
                                        source={data.foto}
                                    />

                                    <Input
                                        label="Nome do funcionário(a)"
                                        labelStyle={styles.modalLabel}
                                        style={styles.modalInput}
                                        value={nomeEdit}
                                        onChangeText={(value) => setNomeEdit(value)}
                                    />

                                    <Input
                                        label="Cargo"
                                        labelStyle={styles.modalLabel}
                                        style={styles.modalInput}
                                        value={cargoEdit}
                                        onChangeText={(value) => setCargoEdit(value)}
                                    />

                                    <Input
                                        label="CPF / CNPJ"
                                        labelStyle={styles.modalLabel}
                                        style={styles.modalInput}
                                        keyboardType='numeric'
                                        value={cpfCnpjEdit}
                                        onChangeText={(value) => setCpfCnpjEdit(value)}
                                    />

                                    <Input
                                        label="RG"
                                        labelStyle={styles.modalLabel}
                                        style={styles.modalInput}
                                        keyboardType='numeric'
                                        value={rgEdit}
                                        onChangeText={(value) => setRgEdit(value)}
                                    />
                                </>

                            }


                            <ButtonGroup style={styles.buttonGroup} appearance='filled' >
                                <Button icon={delIcon} onPress={() => delFuncionario()} />
                                <Button icon={editIcon} onPress={() => setEditModeStatus(!editModeStatus)} />
                                <Button icon={relIcon} onPress={() => relFuncionario()} />
                            </ButtonGroup>

                            <View style={styles.buttonsArea}>
                                <Button
                                    style={styles.saveButton}
                                    status='success'
                                    icon={saveIcon}
                                    onPress={() => salvarEdit()}
                                >
                                    SALVAR
                                </Button>

                                <Button
                                    style={styles.cancelButton}
                                    icon={cancelIcon}
                                    onPress={() => closeModal()}
                                >
                                    CANCELAR
                                </Button>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </>
    )
}