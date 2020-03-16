import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import RenderHomeButton from '../../components/RenderHomeButton'

import ButtonAddAgendamento from '../../components/ButtonAddAgedamento'

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
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -150]
                    })
                }
            ]
        }

        const receita = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -100]
                    })
                }
            ]
        }

        const agenda = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
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

                <RenderHomeButton
                    animation={despesa}
                    onPress={() => alert('oi')}
                    styles={[styles.button, styles.subMenuDespesa]}
                    icon={<Icon name={"dollar-sign"} size={19} color="white" />}
                />

                <RenderHomeButton
                    animation={receita}
                    onPress={() => alert('oi')}
                    styles={[styles.button, styles.subMenuReceita]}
                    icon={<Icon name="dollar-sign" size={19} color="white" />}
                />


                <RenderHomeButton
                    animation={agenda}
                    onPress={() => this.modalController('agenda')}
                    styles={[styles.button, styles.subMenu]}
                    icon={<Icon name="calendar" size={19} color="white" />}
                />

                <RenderHomeButton
                    animation={rotation}
                    onPress={this.toggleMenu.bind(this)}
                    styles={[styles.button, styles.menu]}
                    icon={<Icon name="plus" size={25} color="white" />}
                />
            </View>
        )
    }
}