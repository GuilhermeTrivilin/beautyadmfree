import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        alignItems: 'center',
        right: 70,
        bottom: 70
    },
    button:{
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50/2,

        justifyContent: 'center',
        alignItems: 'center',
    },
    menu:{
        backgroundColor: "#3D6DCC" 
    },
    subMenu:{
        left: 5,
        width: 40,
        height: 40,
        borderRadius: 40/2,
        backgroundColor: "#3D6DCC",
    },
    subMenuReceita:{
        left: 5,
        width: 40,
        height: 40,
        borderRadius: 40/2,
        backgroundColor: "#00b100",
    },
    subMenuDespesa:{
        left: 5,
        width: 40,
        height: 40,
        borderRadius: 40/2,
        backgroundColor: "red",
    }
})

export default styles