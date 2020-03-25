import React, { useState } from 'react'
import { View, Text, Modal, KeyboardAvoidingView, Alert } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

import {
    Button,
    Input,
} from '@ui-kitten/components';

import {
    format,
} from 'date-fns';

import { ptBR } from 'date-fns/locale';
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default function FormAddAgendamento({ modalVisible, controleModal, adicionarAgendamento }) {

    // States para registro do agendamento

    const [nome, setNome] = useState('')
    const [celular, setCelular] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valorPrevisto, setValorPrevisto] = useState('')
    const [date, setDate] = useState(null)
    const [hora, setHora] = useState(null)

    // --------------------------------------

    // States para controle dos modais de DatePicker

    const [pickerDate, setPickerDate] = useState(false)
    const [pickerHora, setPickerHora] = useState(false)

    // --------------------------------------

    function fecharModal() {
        controleModal()
        setNome('')
        setCelular('')
        setDescricao('')
        setValorPrevisto('')
        setPickerDate(false)
        setPickerHora(false)
        setDate(null)
        setHora(null)
    }

    function formataDate(date) {

        setPickerDate(!pickerDate)

        let dateFormatado = format(date, 'dd/MM/yyyy', { locale: ptBR })

        setDate(dateFormatado)

    }

    function formataHora(hora) {

        setPickerHora(!pickerHora)

        let horaFormatada = format(hora, 'HH:mm', { locale: ptBR })

        setHora(horaFormatada)

    }

    function validaInfos() {
        if (nome != "" && celular != "" && descricao != "" && date != null && hora != null) {
            return true
        } else {
            Alert.alert(
                "ERRO NO CADASTRO",
                'Você precisa preencher todos os campos'
            )
        }
    }

    function geraKey(){
        let nomeKey = nome.split(" ")[0]
        let dataKey = date.split('/')[0]
        let horaKey = hora.split(':')[0]

        return `agendamento_${nomeKey}_${dataKey}_${horaKey}`
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

    const calendarIcon = () => (
        <Icon
            name="calendar"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )

    const clockIcon = () => (
        <Icon
            name="clock"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='white'
        />
    )
    // ----------------------------------------

    return (
        <Modal
            animationType={'slide'}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalArea}>
                <KeyboardAvoidingView style={styles.modalContent} behavior='height' >

                    <Text style={styles.modalHeaderText}>ADICIONAR AGENDAMENTO</Text>

                    <Input
                        label="Nome do(a) cliente"
                        labelStyle={styles.modalLabel}
                        style={styles.modalInput}
                        value={nome}
                        onChangeText={(value) => setNome(value)}
                    />

                    <Input
                        label="Celular"
                        labelStyle={styles.modalLabel}
                        style={styles.modalInput}
                        value={celular}
                        onChangeText={(value) => setCelular(value)}
                        keyboardType='numeric'
                    />

                    <Input
                        label="Descrição do serviço"
                        labelStyle={styles.modalLabel}
                        style={styles.modalInput}
                        value={descricao}
                        onChangeText={(value) => setDescricao(value)}
                        multiline
                    />

                    <Input
                        label="Valor previsto (R$)"
                        labelStyle={styles.modalLabel}
                        style={styles.modalInput}
                        value={valorPrevisto}
                        onChangeText={(value) => setValorPrevisto(value)}
                        keyboardType="numeric"
                    />

                    {/* BOTÃO E DATEPICKER-MODAL DA DATA */}

                    <Button
                        style={styles.datePickerButton}
                        icon={calendarIcon}
                        onPress={() => setPickerDate(!pickerDate)}
                    >
                        {date || "Selecione uma data"}
                    </Button>

                    <DateTimePickerModal
                        isVisible={pickerDate}
                        mode="date"
                        onConfirm={(value) => formataDate(value)}
                        onCancel={() => setPickerDate(!pickerDate)}
                    />

                    {/* ---------------------------------- */}

                    {/* BOTÃO E DATEPICKER-MODAL DA HORA */}

                    <Button
                        icon={clockIcon}
                        style={styles.datePickerButton}
                        onPress={() => setPickerHora(!pickerHora)}
                    >
                        {hora || "Selecione um horário"}
                    </Button>

                    <DateTimePickerModal
                        isVisible={pickerHora}
                        mode="time"
                        is24Hour={true}
                        onConfirm={(value) => formataHora(value)}
                        onCancel={() => setPickerHora(!pickerHora)}
                    />

                    {/* ---------------------------------- */}



                    <View style={styles.buttonsArea}>
                        <Button
                            style={styles.addButton}
                            status='success'
                            icon={addIcon}
                            onPress={() => {
                                if (validaInfos()) {
                                    let compilaDados = {
                                        key: geraKey(),
                                        nome: nome,
                                        celular: celular,
                                        descricao: descricao,
                                        valorPrevisto: valorPrevisto,
                                        date: date,
                                        hora: hora
                                    }

                                    fecharModal()
                                    adicionarAgendamento(compilaDados)
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

                </KeyboardAvoidingView>
            </View>
        </Modal>
    )
}