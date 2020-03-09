import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

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
        flex: 1,
        width: '85%',
        backgroundColor: '#F9F9F9',
        padding: 12,
        paddingTop: 10
    },
    modalLabel:{
        color: '#9ba5ba',
        fontSize: 17,
        margin: 5,
    },
    modalInput:{
        backgroundColor: '#EEE',
        marginBottom: 10,
        width: '100%',
        borderRadius: 5
    },
    pickerInput:{
        backgroundColor: '#EEE',
        width: '100%',
        height: 45,
        marginBottom: 10,
        color: 'black'
    },
    buttonsArea:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,

        marginTop: 5,
        borderTopColor: '#c3c3c3',
        borderTopWidth: 1,
        paddingTop: 15,
        borderRadius: 20
    },
    btnProduto:{
        backgroundColor: '#EEE',
        marginBottom: 10,
        width: '100%',
        borderRadius: 5,
        height: 45,
        justifyContent: 'center'
    },
    textProduto:{
        fontSize: 17,
    },

    // Modal - Flatlist de produtos do Modal

    flatListProdutos:{
        flexDirection: 'row'
    },
    delButton:{
        backgroundColor: '#f40000',
        width: '15%',
        justifyContent: 'center'
    },
    delButtonText:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputFlatList:{
        backgroundColor: '#EEE',
        borderRadius: 5,
        width: '25%'
    },
    flatListNomeArea:{
        width: "55%",
        marginRight: 15,
        justifyContent: 'center'
    },
    flatListNome:{
        fontSize: 16,
        fontWeight: 'bold'
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