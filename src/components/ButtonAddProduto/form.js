import React, { useState } from 'react'
import { View, Text, Alert, Modal, Image, ScrollView } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'

import {
    Button,
    Input,
} from '@ui-kitten/components';


export default function FormAddProduto({ modalVisible, controleModal, adicionarProduto }) {

    // States para registro do produto

    const [nomeProduto, setNomeProduto] = useState('')
    const [qntd, setQntd] = useState('')
    const [estoqueLimite, setEstoqueLimite] = useState('')
    const [valor, setValor] = useState('')

    //---------------------------

    function fecharModal() {
        controleModal()
        setNomeProduto('')
        setQntd('')
        setEstoqueLimite('')
        setValor('')
    }

    // ICONES BOTÕES - UI KITTEN

    const saveIcon = () => (
        <Icon
            name="check"
            size={22}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )

    const cancelIcon = () => (
        <Icon
            name="closecircleo"
            size={19}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )

    // ------------------------------------

    function validaInfos(){

        if(nomeProduto !== "" && qntd !== "" && estoqueLimite !== ""){
            return true
        } else{
            Alert.alert(
                "ERRO NO CADASTRO", 
                "Você precisa preencher todos os campos."
            )
            return false
        }
    }

    function clearFields(){
        setNomeProduto('')
        setQntd('')
        setEstoqueLimite('')
        setValor('')
    }

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

                        <Text style={styles.modalHeaderText}>ADICIONAR PRODUTO</Text>

                        <Image
                            style={styles.img}
                            source={require('./SD-default-image.png')}
                        />

                        <Input
                            label="Nome do produto"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={nomeProduto}
                            onChangeText={(text) => setNomeProduto(text)}
                            autoFocus={true}
                        />

                        <Input
                            label="Quantidade em estoque"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={qntd}
                            onChangeText={(text) => setQntd(text)}
                            keyboardType='numeric'
                        />

                        <Input
                            label="Estoque limite (para emissão de alertas)"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={estoqueLimite}
                            onChangeText={(text) => setEstoqueLimite(text)}
                            keyboardType='numeric'
                        />

                        <Input
                            label="Valor do produto (R$)"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={valor}
                            onChangeText={(text) => setValor(text)}
                            keyboardType='numeric'
                        />

                        <View style={styles.buttonsArea}>

                            <Button
                                style={styles.addButton}
                                icon={saveIcon}
                                onPress={() => {
                                    if (validaInfos()) {
                                        let compilaDados = {
                                            key: Math.floor (Math.random () * (9999999999 - 1000000000 + 1) + 1000000000),
                                            nomeProduto: nomeProduto,
                                            qntd: qntd,
                                            estoqueLimite: estoqueLimite,
                                            valor: valor
                                        }

                                        clearFields()
                                        adicionarProduto(compilaDados)
                                    }
                                }
                                }
                            >
                                ADICIONAR
                            </Button>

                            <Button
                                style={styles.cancelButton}
                                icon={cancelIcon}
                                onPress={() => fecharModal()}
                            >
                                FECHAR
                            </Button>

                        </View>

                    </ScrollView>

                </View>
            </View>
        </Modal>
    )
}