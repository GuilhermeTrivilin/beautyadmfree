import React, { useState } from 'react'
import { View, Text, Modal, Alert, Switch } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'

import {
    Button,
    Input,
} from '@ui-kitten/components';

import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
    format,
} from 'date-fns';

import { ptBR } from 'date-fns/locale';

export default function FormDespesa({ modalVisible, controleModal, adicionarDespesa }) {

    // States para controle dos modais de DatePicker

    const [pickerDate, setPickerDate] = useState(false)

    // --------------------------------------

    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState(null)
    const [parcelado, setParcelado] = useState(false)
    const [qntdParcelas, setQntdParcelas] = useState(0)

    function fecharModal() {
        controleModal()
        setValor('')
        setDescricao('')
        setData('')
        setParcelado(false)
        setQntdParcelas(0)
    }

    function validaInfos() {
        if (valor != '' && descricao != '' && data != null) {
            if (parcelado == true && qntdParcelas != 0 || parcelado == false) {
                return true
            } else {
                Alert.alert(
                    'ERRO NO CADASTRO',
                    'PREENCHA A QUANTIDADE DE PARCELAS'
                )
            }
        } else {
            Alert.alert(
                'ERRO NO CADASTRO',
                'PREENCHA TODOS OS CAMPOS'
            )
        }
    }

    function geraKey(){
        let dataKey = data.split('/').join('_')
        let valorKey = parseFloat(valor)

        return `${dataKey}_${valorKey}`
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

    const calendarIcon = () => (
        <Icon
            name="calendar"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )
    // ------------------------------------

    // AJUSTES DE DATA

    function formataDate(date) {

        setPickerDate(!pickerDate)

        let dateFormatado = format(date, 'dd/MM/yyyy', { locale: ptBR })

        setData(dateFormatado)

    }

    // ------------------------------------

    return (
        <Modal
            animationType={'slide'}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => controleModal()}

        >
            <View style={styles.modalArea}>

                <View style={styles.modalContent}>
                    <Text style={styles.modalHeaderText}>CADASTRO DE DESPESA</Text>

                    <Input
                        label="Despesa (R$)"
                        labelStyle={styles.modalLabel}
                        style={styles.modalInput}
                        value={valor}
                        onChangeText={(value) => setValor(value)}
                        keyboardType="numeric"
                    />

                    <Input
                        label="Descrição da Despesa"
                        labelStyle={styles.modalLabel}
                        style={styles.modalInput}
                        value={descricao}
                        onChangeText={(value) => setDescricao(value)}
                        multiline={true}
                    />


                    {/* BOTÃO E DATEPICKER-MODAL DA DATA */}

                    <Button
                        style={styles.datePickerButton}
                        icon={calendarIcon}
                        onPress={() => setPickerDate(!pickerDate)}
                    >
                        {data || "Selecione uma data"}
                    </Button>

                    <DateTimePickerModal
                        isVisible={pickerDate}
                        mode="date"
                        onConfirm={(value) => formataDate(value)}
                        onCancel={() => setPickerDate(!pickerDate)}
                    />

                    {/* ---------------------------------- */}

                    <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                        <Text style={[styles.modalLabel, { marginRight: 100, color: 'black' }]}>
                            Pagamento Parcelado?
                        </Text>
                        <Switch
                            value={parcelado}
                            onValueChange={(valSwitch) => setParcelado(valSwitch)}
                        />
                    </View>

                    {parcelado && <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                        <Input
                            label="Quantidade de parcelas"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={qntdParcelas}
                            onChangeText={(value) => setQntdParcelas(value)}
                            keyboardType="numeric"
                        />
                    </View>}

                    <View style={styles.buttonsArea}>

                        <Button
                            style={styles.addButton}
                            icon={saveIcon}
                            onPress={() => {
                                if (validaInfos()) {
                                    let compilaDados = {
                                        key: geraKey(),
                                        valor: valor,
                                        descricao: descricao,
                                        data: data,
                                        parcelado: parcelado,
                                        qntdParcelas: qntdParcelas
                                    }

                                    adicionarDespesa(compilaDados)
                                }

                            }
                            }
                        >
                            CADASTRAR
                        </Button>

                        <Button
                            style={styles.cancelButton}
                            icon={cancelIcon}
                            onPress={() => fecharModal()}
                        >
                            FECHAR
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}