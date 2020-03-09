import React from 'react'
import { View, Text } from 'react-native'
import { Drawer as UIKittenDrawer, DrawerHeaderFooter } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign'

const DrawerContent = ({ navigation, state }) => {

    const onSelect = (index) => {
        navigation.navigate(state.routeNames[index]);
    };

    // UI KITTEN DRAWER - Ícones

    const homeIcon = (style) => (
        <Icon
            {...style}
            name="home"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='black'
        />
    )

    const agendamentoIcon = (style) => (
        <Icon
            {...style}
            name="calendar"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='black'
        />
    )

    const estoqueIcon = (style) => (
        <Icon
            {...style}
            name="form"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='black'
        />
    )

    const fluxoIcon = (style) => (
        <Icon
            {...style}
            name="creditcard"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='black'
        />
    )

    const funcionariosIcon = (style) => (
        <Icon
            {...style}
            name="addusergroup"
            size={20}
            style={{ textAlignVertical: 'center' }}
            color='black'
        />
    )

    const logoutIcon = (style) => (
        <Icon
            {...style}
            name="logout"
            size={16}
            style={{ textAlignVertical: 'center' }}
            color='black'
        />
    )

    //----------------------------

    const Footer = () => (
        <DrawerHeaderFooter description='Desenvolvido por Guilherme Trivilin' />
    );

    return (
        <UIKittenDrawer
            data={
                [
                    { title: 'Home', icon: homeIcon },
                    { title: 'Agendamento', icon: agendamentoIcon },
                    { title: 'Estoque', icon: estoqueIcon },
                    { title: 'Fluxo de Caixa', icon: fluxoIcon },
                    { title: 'Funcionários', icon: funcionariosIcon },
                    { title: 'Logout', icon: logoutIcon },
                ]
            }
            selectedIndex={state.index}
            footer={Footer}
            onSelect={onSelect}
        />
    );
};

export default DrawerContent