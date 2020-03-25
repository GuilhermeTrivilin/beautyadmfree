import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, FlatList, Dimensions, Alert } from 'react-native'

import styles from './styles'

import Icon from 'react-native-vector-icons/AntDesign'
import Select from 'react-native-select-plus';

import {
    Button,
    Input,
} from '@ui-kitten/components';

import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
    format,
} from 'date-fns';

import { ptBR } from 'date-fns/locale';

export default function FormReceita({ modalVisible, controleModal, adicionarReceita }) {

    // States para controle dos modais de DatePicker

    const [pickerDate, setPickerDate] = useState(false)

    // --------------------------------------



    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState(null)
    const [nomeCliente, setNomeCliente] = useState('')
    const [tipoEntrada, setTipoEntrada] = useState('')
    const [funcionarioResp, setFuncionarioResp] = useState(null)
    const [formaPagamento, setFormaPagamento] = useState('')
    const [desconto, setDesconto] = useState('')

    const [listaProdutosSelecionados, setListaProdutosSelecionados] = useState([])
    const [listaFuncionariosComissionados, setListaFuncionariosComissionados] = useState([])

    function validaInfos() {
        if (valor != '' && descricao != '' && data != null && nomeCliente != '' && tipoEntrada != '' && funcionarioResp != null && formaPagamento != '') {
            return true
        } else {
            Alert.alert(
                'ERRO NO CADASTRO',
                'VOCÊ PRECISA PREENCHER TODOS OS CAMPOS'
            )
        }
    }

    function geraKey() {
        let valorKey = parseFloat(valor)
        let nomeKey = nomeCliente.split(' ')[0]
        let dataKey = data.split('/').join("_")

        return `${valorKey}_${nomeKey}_${dataKey}`
    }

    const listaTempProdutos = [
        {
            key: "prod1", label: 'Produto 1'
        },
        {
            key: 'prod2', label: 'Produto 2'
        },
        {
            key: 'prod3', label: 'Produto 3'
        },
    ]

    const listaTempFuncionarios = [
        {
            key: 1, label: 'Patricia Pimentel', cargo: 'CEO', cpfCnpj: '12312312', rg: '1231231231'
        },
        {
            key: 2, label: 'Pathisy Pimentel', cargo: 'Auxiliar Chefe', cpfCnpj: '12312312', rg: '1231231231'
        },
        {
            key: 3, label: 'Kelly Amaral', cargo: 'Auxiliar', cpfCnpj: '12312312', rg: '1231231231'
        },
    ]

    const listaTempPagamentos = [
        {
            key: 1, label: 'A vista'
        },
        {
            key: 2, label: 'Cartão de Crédito'
        },
        {
            key: 3, label: 'Picpay'
        },
    ]

    function fecharModal() {
        controleModal()
        limparModal()
    }

    function limparModal(){
        setValor('')
        setDescricao('')
        setData('')
        setNomeCliente('')
        setTipoEntrada('')
        setFuncionarioResp(null)
        setFormaPagamento('')
        setListaProdutosSelecionados([])
        setListaFuncionariosComissionados([])
        setDesconto('')
    }

    function renderPicker() {
        return <>
            <Text style={styles.modalLabel}>
                Selecione o produto
            </Text>

            <Select
                data={listaTempProdutos}
                width={Dimensions.get('window').width / 1.28}
                searchPlaceholder="Selecione um produto"
                placeholder="Selecione um produto"
                onSelect={(key, value) => adicionaProduto(key, value)}
                search={false}
                style={{ marginBottom: 15 }}
            />

            <FlatList
                data={listaProdutosSelecionados}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) =>
                    <>
                        <View style={styles.flatListProdutos}>
                            <View style={styles.flatListNomeArea}>
                                <Text style={styles.flatListNome}> {item.nome}</Text>
                            </View>

                            <TextInput
                                style={styles.inputFlatList}
                                keyboardType='numeric'
                                value={item.qntd}
                                onChangeText={(value) => alteraQntdProduto(value, item)}
                                placeholder='Qntd.'
                            />

                            <TouchableOpacity
                                style={styles.delButton}
                                onPress={() => removeProduto(item)}
                            >
                                <Text style={styles.delButtonText}>
                                    <Icon
                                        name="delete"
                                        size={20}
                                    />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            />
        </>
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

    function adicionaProduto(key, value) {

        let prodSelecionado = false

        listaProdutosSelecionados.forEach(i => {
            if (i.key == key) {
                prodSelecionado = true
                return
            }
        })

        if (!prodSelecionado) {
            setListaProdutosSelecionados([...listaProdutosSelecionados, {
                key: key,
                nome: value,
                qntd: 1
            }])
        } else {
            alert("Produto já selecionado.")
        }
    }

    function adicionarFuncionarioComissionado(key, value) {

        let funcionarioSelecionado = false

        listaFuncionariosComissionados.forEach(i => {
            if (i.key == key) {
                funcionarioSelecionado = true
                return
            }
        })

        if (!funcionarioSelecionado) {
            setListaFuncionariosComissionados([...listaFuncionariosComissionados, {
                key: key,
                nome: value,
                porcentagem: 10
            }])
        } else {
            alert("Funcionário já selecionado.")
        }
    }

    function removeProduto(item) {
        listaProdutosSelecionados.splice(listaProdutosSelecionados.indexOf(item), 1)
        setListaProdutosSelecionados([...listaProdutosSelecionados])
    }

    function removeFuncionario(item) {
        listaFuncionariosComissionados.splice(listaFuncionariosComissionados.indexOf(item), 1)
        setListaFuncionariosComissionados([...listaFuncionariosComissionados])
    }

    function alteraQntdProduto(value, item) {
        listaProdutosSelecionados.forEach(i => {
            if (i.key == item.key) {
                i.qntd = value
            }
        })
    }

    function alteraQntdFuncionario(key, value) {
        listaFuncionariosComissionados.forEach(i => {
            if (i.key == key) {
                i.porcentagem = value
            }
        })
    }

    return (
        <Modal
            animationType={'slide'}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => fecharModal()}
        >
            <ScrollView>
                <View style={styles.modalArea}>

                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeaderText}>CADASTRO DE RECEITA</Text>

                        <Input
                            label="Nome do(a) cliente"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={nomeCliente}
                            onChangeText={(text) => setNomeCliente(text)}
                            autoFocus={true}
                        />

                        <Text style={styles.modalLabel}>
                            Funcionário(a) responsável
                        </Text>
                        <Select
                            data={listaTempFuncionarios}
                            width={Dimensions.get('window').width / 1.28}
                            searchPlaceholder="Selecione o funcionário"
                            placeholder="Selecione o funcionário"
                            onSelect={(key, value) => setFuncionarioResp(value)}
                            search={false}
                            style={{ marginBottom: 15 }}
                        />

                        <Text style={styles.modalLabel}>
                            Funcionários(as) comissionados(as)
                        </Text>
                        <Select
                            data={listaTempFuncionarios}
                            width={Dimensions.get('window').width / 1.28}
                            searchPlaceholder="Selecione um funcionário"
                            placeholder="Selecione um funcionário"
                            onSelect={(key, value) => adicionarFuncionarioComissionado(key, value)}
                            search={false}
                            style={{ marginBottom: 15 }}
                        />
                        <FlatList
                            data={listaFuncionariosComissionados}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) =>
                                <>
                                    <View style={styles.flatListProdutos}>
                                        <View style={styles.flatListNomeArea}>
                                            <Text style={styles.flatListNome}> {item.nome}</Text>
                                        </View>

                                        <TextInput
                                            style={styles.inputFlatList}
                                            keyboardType='numeric'
                                            value={item.porcentagem}
                                            onChangeText={(value) => alteraQntdFuncionario(item.key, value)}
                                            placeholder='COMIS. %'
                                        />

                                        <TouchableOpacity
                                            style={styles.delButton}
                                            onPress={() => removeFuncionario(item)}
                                        >
                                            <Text style={styles.delButtonText}>
                                                <Icon
                                                    name="delete"
                                                    size={20}
                                                />
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            }
                        />

                        <Input
                            label="Receita (R$)"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={valor}
                            onChangeText={(value) => setValor(value)}
                            keyboardType="numeric"
                        />

                        <Input
                            label="Descrição da Receita"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={descricao}
                            onChangeText={(value) => setDescricao(value)}
                            multiline={true}
                        />

                        <Text style={styles.modalLabel}>
                            Forma de pagamento
                        </Text>
                        <Select
                            data={listaTempPagamentos}
                            width={Dimensions.get('window').width / 1.28}
                            searchPlaceholder="Selecione a forma de pagamento"
                            placeholder="Selecione a forma de pagamento"
                            onSelect={(key, value) => setFormaPagamento(value)}
                            search={false}
                            style={{ marginBottom: 15 }}
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

                        <Text style={styles.modalLabel}>
                            Tipo de entrada
                        </Text>
                        <Select
                            data={[{ label: "Serviço" }, { label: "Produto" }]}
                            width={Dimensions.get('window').width / 1.28}
                            searchPlaceholder="Selecione o tipo de entrada"
                            placeholder="Selecione o tipo de entrada"
                            onSelect={(key, value) => setTipoEntrada(value)}
                            search={false}
                            style={{ marginBottom: 15 }}
                        />

                        {(tipoEntrada == "Produto") ? renderPicker() : false}

                        <Input
                            label="Desconto (R$)"
                            labelStyle={styles.modalLabel}
                            style={styles.modalInput}
                            value={desconto}
                            onChangeText={(value) => setDesconto(value)}
                            keyboardType='numeric'
                        />

                        <View style={styles.buttonsArea}>
                            <Button
                                style={styles.addButton}
                                icon={saveIcon}
                                onPress={() => {
                                    if (validaInfos()) {
                                        let compilaDados = {
                                            key: geraKey(),
                                            nomeCliente: nomeCliente,
                                            funcionarioResp: funcionarioResp,
                                            valor: valor,
                                            descricao: descricao,
                                            formaPagamento: formaPagamento,
                                            data: data,
                                            tipoEntrada: tipoEntrada,
                                            produtosSelecionados: listaProdutosSelecionados,
                                            funcionariosComissionados: listaFuncionariosComissionados,
                                            desconto: desconto
                                        }
                                        limparModal()
                                        adicionarReceita(compilaDados)
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
            </ScrollView>
        </Modal>
    )
}