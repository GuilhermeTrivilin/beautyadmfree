import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({

    // Botão

    btnAddDespesa:{
        margin: 10,
        backgroundColor: '#f40000',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 7,
        width: 150,
    },
    btnAddDespesaText:{
        borderLeftWidth: 1,
        borderLeftColor: '#e3e3e3',
        paddingLeft: 12,

        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },

    // --------------------------------

    // Modal

    modalArea:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalHeaderText:{
        fontWeight: 'bold',
        margin: 15,
        textAlign: 'center',
        fontSize: 17,

        paddingBottom: 10,

        borderBottomWidth: 1,
        borderRadius: 20,
        borderColor: '#c3c3c3',
    },
    modalContent:{
        width: '85%',
        backgroundColor: '#F9F9F9',
        padding: 12,
        paddingTop: 10
    },
    modalLabel:{
        color: '#9BA5BA',
        fontSize: 17,
        margin: 5,
    },
    modalInput:{
        backgroundColor: '#EEE',
        marginBottom: 10,
        width: '100%',
        borderRadius: 5
    },
    parcelasDisabled:{
        backgroundColor: '#c3c3c3',
        marginBottom: 10,
        width: 100,
        height: 45,
        borderRadius: 5
    },
    modalInputParcelas:{
        backgroundColor: '#EEE',
        marginBottom: 10,
        width: 100,
        height: 45,
        borderRadius: 5
    },
    buttonsArea:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        marginTop: 5,
        borderTopColor: '#c3c3c3',
        borderTopWidth: 1,
        paddingTop: 15,
        borderRadius: 20
    },
    datePickerButton:{
        margin: 5
    },

    // --------------------------------

    // BOTÕES - UI KITTEN

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
});

export default styles