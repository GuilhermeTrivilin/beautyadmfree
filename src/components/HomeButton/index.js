import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import RenderFabButton from '../../components/RenderFabButton'

import styles from './style'

export default class HomeButton extends React.Component {

    animation = new Animated.Value(0)

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 6
        }).start()

        this.open = !this.open
    }

    render() {

        const despesa = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: [0, -150]
                    })
                }
            ]
        }

        const receita = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: [0, -100]
                    })
                }
            ]
        }

        const agenda = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: [0, -50]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '45deg']
                    })
                }
            ]
        }

        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback onPress={() => alert('oi')}>
                    <Animated.View style={[styles.button, styles.subMenuDespesa, despesa]} >
                        <Icon name={"dollar-sign"}  size={19} color="white" />
                    </Animated.View> 
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => alert('oi')}>
                    <Animated.View style={[styles.button, styles.subMenuReceita, receita]} >
                        <Icon name="dollar-sign" size={19} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => alert('oi')}>
                    <Animated.View style={[styles.button, styles.subMenu, agenda]} >
                        <Icon name="calendar" size={19} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]} >
                        <Icon name="plus" size={25} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}