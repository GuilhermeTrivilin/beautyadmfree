import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput, } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

import firebase from '../../services/firebaseConnection'

import {
    Button,
    ButtonGroup,
    Input,
} from '@ui-kitten/components';

function ListaEstoque({ data }) {

    const [modalStatus, setModalStatus] = useState(false)
    const [editModeStatus, setEditModeStatus] = useState(false)
    const [qntd, setQntd] = useState(data.qntd)

    // Estados do Modo Edição

    const [nomeEdit, setNomeEdit] = useState(data.nomeProduto)
    const [limiteEdit, setLimiteEdit] = useState(data.estoqueLimite)
    const [valorEdit, setValorEdit] = useState( data.valor.toString() )

    //-------------------------

    async function salvarEdit() {

        let uid = firebase.auth().currentUser.uid
        await firebase.database().ref(`users`).child(`${uid}/estoque/${data.key}`).set({
            key: data.key,
            nomeProduto: nomeEdit,
            qntd: data.qntd,
            valor: valorEdit,
            limiteEstoque: limiteEdit
        })
    }

    async function delProduto() {
        let uid = firebase.auth().currentUser.uid

        await firebase.database().ref(`users/${uid}/estoque/${data.key}`).remove(alert("Deletado com sucesso."))
    }

    function closeModal() {
        clearFields()
        setEditModeStatus(false)
        setModalStatus(false)
    }

    function clearFields() {
        setNomeEdit(data.nomeProduto)
        setLimiteEdit(data.estoqueLimite)
        setValorEdit(data.valor.toString())
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

                    <View style={styles.containerImg}>

                    </View>

                    <View style={styles.containerName}>
                        <Text style={styles.headerCelula}> {data.nomeProduto} </Text>
                    </View>

                    <View style={styles.containerQntd}>
                        <Text>
                            <Text style={{ fontWeight: 'bold' }}>Qntd.:</Text> {data.qntd}
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
                onRequestClose={() => setModalStatus(false)}
            >
                <View style={styles.modalArea}>
                    <View style={styles.modalContent}>

                        {!editModeStatus &&
                            <>
                                <Text style={styles.modalHeaderText}>DADOS ESTOQUE</Text>
                                <View style={styles.modalImg}>
                                    {/* TEMPORÁRIO ATÉ ADICIONAR SISTEMA DE IMAGENS EM BANCO DE DADOS */}
                                </View>

                                <Text style={styles.modalLabel}>
                                    Nome: <Text style={styles.modalSimpleText}>{data.nomeProduto}</Text>
                                </Text>

                                <Text style={styles.modalLabel}>
                                    Quantidade em estoque: <Text style={styles.modalSimpleText}>{data.qntd} un.</Text>
                                </Text>

                                <Text style={styles.modalLabel}>
                                    Quantidade limite: <Text style={styles.modalSimpleText}>{data.estoqueLimite} un.</Text>
                                </Text>

                                <Text style={styles.modalLabel}>
                                    Valor: <Text style={styles.modalSimpleText}>R$ {data.valor.toFixed(2)}</Text>
                                </Text>
                            </>
                        }

                        {editModeStatus &&
                            <>
                                <Text style={styles.modalHeaderText}>DADOS ESTOQUE</Text>
                                <View style={styles.modalImg}>
                                    {/* TEMPORÁRIO ATÉ ADICIONAR SISTEMA DE IMAGENS EM BANCO DE DADOS */}
                                </View>

                                <Input
                                    label="Nome do produto"
                                    labelStyle={styles.modalLabel}
                                    style={styles.modalInput}
                                    value={nomeEdit}
                                    onChangeText={(value) => setNomeEdit(value)}
                                />

                                <Input
                                    label="Quantidade limite"
                                    labelStyle={styles.modalLabel}
                                    style={styles.modalInput}
                                    value={limiteEdit}
                                    onChangeText={(value) => setLimiteEdit(value)}
                                    keyboardType='numeric'
                                />

                                <Input
                                    label="Valor (R$)"
                                    labelStyle={styles.modalLabel}
                                    style={styles.modalInput}
                                    value={valorEdit}
                                    onChangeText={(value) => setValorEdit(value)}
                                    keyboardType='numeric'
                                />
                            </>
                        }

                        <ButtonGroup style={styles.buttonGroup} appearance='filled' >
                            <Button icon={delIcon} onPress={() => delProduto()} />
                            <Button icon={editIcon} onPress={() => setEditModeStatus(!editModeStatus)} />
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
            </Modal>
        </>
    )
}

export default ListaEstoque