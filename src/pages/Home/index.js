import React from 'react'
import {View, Text, Button} from 'react-native'

import { DrawerActions } from '@react-navigation/native'
import HeaderDefault from '../../components/Header'

import HomeButton from '../../components/HomeButton'

function Home ({navigation}) {
    return(
        <View>
            <HeaderDefault headerText="HOME" navigation={navigation} />

            <HomeButton />
        </View>
    )
}

export default Home