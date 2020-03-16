import React from 'react'
import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native'

export default function RederHomeButton({ onPress, styles, animation, icon }) {
    return (
        <View>
            <TouchableWithoutFeedback onPress={onPress}>
                <Animated.View style={[styles, animation]} >
                    {icon}
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}