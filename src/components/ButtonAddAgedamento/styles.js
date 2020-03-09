import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    // Container principal do botão

    container:{
        flex: 1,
    },

    //------------------------------

    // MODAL - Configuração

    modalArea: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#F9F9F9',
        padding: 12,
        paddingTop: 10
    },
    modalHeaderText: {
        fontWeight: 'bold',
        margin: 15,
        textAlign: 'center',
        fontSize: 17,

        paddingBottom: 10,

        borderBottomWidth: 1,
        borderRadius: 20,
        borderColor: '#c3c3c3',
    },
    buttonsArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        marginTop: 5,
        borderTopColor: '#c3c3c3',
        borderTopWidth: 1,
        paddingTop: 15,
        borderRadius: 20
    },
    modalLabel: {
        fontSize: 17,
        margin: 5,
    },
    modalInput: {
        backgroundColor: '#EEE',
        margin: 10,
        borderRadius: 5,
    },
    datePicker: {
        margin: 5,
        width: '100%'
    },
    datePickerButton:{
        margin: 5
    },

    //------------------------

    // BOTÕES - UI KITTEN

    addAgendaButton:{
        margin: 5
    },
    addButton: {
        backgroundColor: '#00b100',
        borderColor: '#00b100',
        flex: 1,
        margin: 5
    },
    cancelButton:{
        backgroundColor: 'red',
        borderColor: 'red',
        flex: 1,
        margin: 5
    },
})

export default styles