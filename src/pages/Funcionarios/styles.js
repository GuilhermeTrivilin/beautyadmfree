import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    
    // Container Principal

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    // --------------------------------

    // FlatList - ListaEstoque

    containerCelula:{
        flex: 1,
        backgroundColor: '#FFFF',
        width: '100%',
        margin: 2,
        padding: 10,
        flexDirection: 'row',

        borderBottomWidth: 1,
        borderBottomColor: "#C3C3C3",
        borderRadius: 100
    },
    headerCelula:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerImg:{
        width: 50,
        height: 50,
        marginRight: 5,
        borderRadius: 50
    },
    containerName:{
        justifyContent: 'center',
        flex: 0.8,
    },
    containerQntd:{
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        flex: 0.3,
    },
    containerIcon:{
        width: 50,
        height: 50,
        justifyContent: 'center'
    },

    // --------------------------------

    // Modal - FlatList

    modalArea:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent:{
        width: '85%',
        backgroundColor: '#F9F9F9',
        padding: 12,
        paddingTop: 10,
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
    modalHeaderText:{
        fontWeight: 'bold',
        margin: 15,
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 17,
                
        paddingBottom: 10,

        borderBottomWidth: 1,
        borderRadius: 20,
        borderColor: '#c3c3c3',
    },
    modalImg:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        margin: 15
    },
    pickerInput:{
        backgroundColor: '#EEE',
        width: '100%',
        height: 45,
        marginBottom: 10,
        color: 'black'
    },
    modalLabel: {
        fontSize: 17,
        margin: 5,
        fontWeight: 'bold'
    },
    modalSimpleText:{
        fontSize: 17,
        margin: 5,
        fontWeight: 'normal'
    },
    modalInput: {
        backgroundColor: '#EEE',
        marginVertical: 5,
        width: '100%',
        borderRadius: 5,
    },


    // --------------------------------

    // Buttons - UI Kitten

    headerCard: {
        borderBottomWidth: 1, 
        borderColor: '#B4B4B4'
    },
    buttonGroup:{
        margin: 8,
        justifyContent: 'center',
    },
    saveButton:{
        backgroundColor: '#00b100',
        borderColor: '#00b100',
    },
    cancelButton:{
        backgroundColor: 'red',
        borderColor: 'red'
    },

    // --------------------------------


})

export default styles