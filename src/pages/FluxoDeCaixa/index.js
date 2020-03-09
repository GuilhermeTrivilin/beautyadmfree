import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'
import ButtonReceita from '../../components/ButtonReceita'
import ButtonDespesa from '../../components/ButtonDespesa'

import { DrawerActions } from '@react-navigation/native'
import HeaderDefault from '../../components/Header'

import {
    Card,
    CardHeader,
} from '@ui-kitten/components';

function FluxoDeCaixa({ navigation }) {

    console.disableYellowBox = true; //LEMBRAR DE REMOVER PARA CONSERTAR WARNINGS

    const HeaderReceitas = () => (
        <CardHeader title='Receitas do Mês' style={styles.headerCard} />
    );

    const HeaderDespesas = () => (
        <CardHeader title='Despesas do Mês' style={styles.headerCard} />
    );

    return (
        <View style={styles.container}>

            <HeaderDefault headerText="FLUXO DE CAIXA" navigation={navigation} />

            <View style={styles.buttonsArea}>

                <ButtonReceita />
                <ButtonDespesa />

            </View>

            <Card style={styles.card} header={HeaderReceitas} status='success'>
                <Text>
                    RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - 
                    RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - 
                    RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - RECEITAS DO MÊS - 
                </Text>
            </Card>

            <Card style={styles.card} header={HeaderDespesas} status='danger'>
                <Text>
                    DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - 
                    DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - 
                    DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - DESPESAS DO MÊS - 
                </Text>
            </Card>


        </View>
    )
}

export default FluxoDeCaixa