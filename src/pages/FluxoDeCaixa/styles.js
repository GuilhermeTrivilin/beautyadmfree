import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({

    // Container Principal

    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    // --------------------------------

    // Área dos botões de ação

    buttonsArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },

    // --------------------------------

    // Card Style - UI Kitten

    card: {
        marginVertical: 8,
        margin: 10,
        borderColor: '#B4B4B4',
    },
    headerCard: {
        borderBottomWidth: 1, 
        borderColor: '#B4B4B4'
    }

    // --------------------------------
});

export default styles