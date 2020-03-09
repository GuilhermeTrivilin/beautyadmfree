import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import firebase from '../../services/firebaseConnection'

export default function Logout() {

    useEffect(() => {
        firebase.auth().signOut()
    }, [])

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="black" />
        </View>
    )
}