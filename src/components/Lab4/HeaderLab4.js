import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import {useNavigation} from '@react-navigation/core';

const HeaderLab4 = () => {

    const navigator = useNavigation();


    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigator.navigate('lab4')}
            >
                <Text style={styles.button__text}>
                    Android Versions
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        backgroundColor: '#842eef',
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    button: {
        marginLeft: 20
    },
    button__text: {
        color: '#FFF',
        fontSize: 20
    }
})

export default HeaderLab4;
