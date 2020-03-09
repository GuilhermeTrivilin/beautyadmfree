import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { DrawerActions } from '@react-navigation/native'

import ButtonAddAgendamento from '../../components/ButtonAddAgedamento'
import styles from './styles'
import HeaderDefault from '../../components/Header'
import {
    Card,
    CardHeader,
} from '@ui-kitten/components';

const HeaderAgendamento = () => (
    <CardHeader title='Agendamentos próximos' style={styles.headerCard} />
);

const listaTempHorarios = [
    {
        key: 1,
        cliente: 'Maria dos Anjos',
        celular: '27 999255252',
        descricao: 'selagem e blablablabla',
        valorPrevisto: '150',
        data: '',
        horario: '',
    },
    {
        key: 2,
        cliente: 'Angelica Silva',
        celular: '27 312312312312',
        descricao: 'mechas e blablablabla',
        valorPrevisto: '450',
        data: '',
        horario: '',
    },
    {
        key: 3,
        cliente: 'Keylla Araujo',
        celular: '27 87912245',
        descricao: 'selagem e mechas',
        valorPrevisto: '600',
        data: '',
        horario: '',
    },
]

export default function Agendamento({ navigation }) {
    return (
        <View style={styles.container}>
            <HeaderDefault headerText="AGENDAMENTO" navigation={navigation} />

            <ButtonAddAgendamento />

            <Card style={styles.card} header={HeaderAgendamento} status="info" >
                <FlatList 
                
                />
            </Card>
        </View>
    )
}