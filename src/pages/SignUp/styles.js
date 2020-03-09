import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9A9A9A'
    },
    areaRegistro:{
        backgroundColor: 'white',
        padding: 15
    },
    header: {
        fontSize: 30,
        color: '#676767',
        textAlign: 'center',
        margin: 10,
        marginBottom: 50,
        paddingBottom: 10,
        
        borderBottomWidth: 1,
        borderBottomColor: '#676767',
        borderRadius: 50
    },
    logo: {
        fontSize: 30,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        color: '#2067af',
        marginBottom: 35
    },
    logo2: {
        fontSize: 30,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        width: Dimensions.get('window').width / 1.5,
        margin: 5,
    },
    signUpButton:{
        marginTop: 10
    },
    bottomButtons:{
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        marginTop: 10,
    },
})

export default styles