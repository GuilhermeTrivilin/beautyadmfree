import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, Image, Switch } from 'react-native'

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
    const [data, setData] = useState('')
    const [switchParcelado, setSwitchParcelado] = useState(false)
    const [qntdParcelas, setQntdParcelas] = useState(0)

    function fecharModal() {
        controleModal()
        setValor('')
        setDescricao('')
        setData('')
        setSwitchParcelado(false)
        setQntdParcelas(0)
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
                            value={switchParcelado}
                            onValueChange={(valSwitch) => setSwitchParcelado(valSwitch)}
                        />
                    </View>

                    {switchParcelado && <View style={{ flexDirection: 'row', marginVertical: 10, }}>
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
                                let compilaDados = {
                                    despesa: valor,
                                    descricaoDespesa: descricao,
                                    data: data,
                                    parcelado: switchParcelado,
                                    qntdParcelas: qntdParcelas
                                }

                                adicionarDespesa(compilaDados)
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