import React from 'react'
import { View, Text, Dimensions } from 'react-native'

import { DrawerActions } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';
import { Header } from 'react-native-elements'

function HeaderDefault({ headerText, navigation }) {

    return (
        <Header
            centerComponent={
                {
                    text: `${headerText}`,
                    style: { fontSize: 20, fontWeight: 'bold', color: '#FFF', textAlign: 'center'}
                }
            }

            leftComponent={<Icon.Button
                name="menu"
                size={30}
                color="white"
                backgroundColor='rgba(0,0,0,0)'
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />}

            containerStyle={
                {
                    backgroundColor: '#3D6DCC',
                    height: Dimensions.get('window').height / 10,
                    paddingBottom: Dimensions.get('window').height / 25,
                    marginBottom: 15
                }
            }

            statusBarProps={{ barStyle: 'light-content', backgroundColor: '#3D6DCC' }}
            barStyle="light-content"
        />
    )
}

export default HeaderDefault