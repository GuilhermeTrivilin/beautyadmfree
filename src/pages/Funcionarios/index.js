import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { DrawerActions } from '@react-navigation/native'
import HeaderDefault from '../../components/Header'
import ListaFuncionarios from './listaFuncionarios'
import styles from './styles'
import ButtonAddFunc from '../../components/ButtonAddFunc'
import ButtonRelatorioComissoes from '../../components/ButtonRelatorioComissoes'

import firebase from '../../services/firebaseConnection'

export default function Funcionarios({ navigation }) {

    const [listaFunc, setListaFunc] = useState([])

    useEffect(() => {

        async function loadingList() {

            let uid = firebase.auth().currentUser.uid


            await firebase.database().ref(`users`).child(`${uid}/funcionarios`).on('value', (snapshot) => {

                setListaFunc([])

                snapshot.forEach((childItem) => {
                    let list = {
                        key: parseFloat(childItem.val().key),
                        nomeFuncionario: childItem.val().nomeFuncionario,
                        cargo: childItem.val().cargo,
                        cpfCnpj: childItem.val().cpfCnpj,
                        rg: childItem.val().rg,
                    }

                    setListaFunc(oldArray => [...oldArray, list])
                })

            })

        }

        loadingList()
    }, [])

    return (
        <View style={styles.container}>
            <HeaderDefault headerText="FUNCIONÁRIOS" navigation={navigation} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 }}>
                <ButtonAddFunc />
                <ButtonRelatorioComissoes />
            </View>

            <FlatList
                data={listaFunc}
                renderItem={({ item }) => <ListaFuncionarios data={item} />}
            />
        </View>

    )
}