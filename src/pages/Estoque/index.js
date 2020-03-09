import React, { useState, useEffect } from 'react'
import { View,  FlatList, ActivityIndicator } from 'react-native'
import { DrawerActions } from '@react-navigation/native'

import styles from './styles'
import HeaderDefault from '../../components/Header'
import ListaEstoque from './listaEstoque'
import ButtonAddProduto from '../../components/ButtonAddProduto'
import ButtonRelatorio from '../../components/ButtonRelatorio'
import { SearchBar } from 'react-native-elements';

import firebase from '../../services/firebaseConnection'


function Estoque({ navigation }) {

    // Estados da SearchBar

    const [dataSearchBar, setDataSearchBar] = useState([]) //alterado quando se digita algo na barra de pesquisa
    const [error, setError] = useState(null) //trabalhar nisso quando linkar com o firebase

    const [arrayHolder, setArrayHolder] = useState([]) //array que armazena os dados e não é alterado

    //-------------------------

    const [listaProdutos, setListaProdutos] = useState([])

    useEffect(()=>{
        /*
         Função para pegar a lista de produtos do firebase e atribuir 
         ao "arrayHolder" e ao "dataSearchBar"
         link https://www.freecodecamp.org/news/how-to-build-a-react-native-flatlist-with-realtime-searching-ability-81ad100f6699/
        
         OBS: LEMBRAR DE USAR O STATE 'LOADING'
         */

        async function loadingList(){

            let uid = firebase.auth().currentUser.uid

            
            await firebase.database().ref(`users`).child(`${uid}/estoque`).on('value', (snapshot) => {
                
                setListaProdutos([])

                snapshot.forEach((childItem)=>{
                    let list = {
                        key: parseFloat(childItem.val().key),
                        nomeProduto: childItem.val().nomeProduto,
                        qntd: childItem.val().qntd,
                        estoqueLimite: childItem.val().estoqueLimite,
                        valor: parseFloat(childItem.val().valor),   
                    }

                    setListaProdutos(oldArray => [...oldArray, list])
                })

            })

        }

        loadingList()
    }, [])

    useEffect(()=>{
        setArrayHolder(listaProdutos)
        setDataSearchBar(listaProdutos)
    }, [listaProdutos])

    function filtroDePesquisa(text) {

        const newData = arrayHolder.filter(item => {
            const itemData = `${item.nomeProduto.toUpperCase()}`;

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });

        setDataSearchBar(newData)
    }


    return (

        <View style={styles.container}>

            <HeaderDefault headerText="ESTOQUE" navigation={navigation} />

            <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
                <ButtonAddProduto />
                <ButtonRelatorio />
            </View>

            <SearchBar
                placeholder="Digite aqui para pesquisar algo"
                lightTheme
                containerStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
                inputContainerStyle={{ borderRadius: 50, width: 350, alignSelf: 'center' }}
                autoCorrect={false}
                round
                onChangeText={(text) => filtroDePesquisa(text)}
                value={null}
            />

            <FlatList
                keyExtractor={(item, index) => item.key}
                data={dataSearchBar}
                renderItem={({ item }) => <ListaEstoque data={item} />}
            />

        </View>


    )
}

export default Estoque