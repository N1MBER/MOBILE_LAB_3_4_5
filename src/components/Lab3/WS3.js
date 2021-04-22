import React from 'react'
import {
    SafeAreaView, StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';

const WS3 = () => {
    const navigator = useNavigation();
    const lab = useSelector((store) => store.lab)

    return(
        <SafeAreaView style={{...styles.ws3, backgroundColor: lab.color}}>
            <Text style={styles.text}>Second Fragment</Text>
            <Text style={styles.value}>{lab.count}</Text>
            <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigator.navigate('ws3')}
            >
                <Text style={styles.buttons__text}>Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    ws3:{
        width: '100%',
        height: '100%',
        backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    value: {
      marginTop: 100,
      backgroundColor: '#FFF',
      color: '#000',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30
    },
    items: {
        marginTop: 30
    },
    item: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    item__text: {
        color: '#FF0',
        fontSize: 30
    },
    buttons:{
        width: '70%',
        height: 40,
        backgroundColor: '#5503b7',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    buttons__text: {
        color: '#FFF'
    },
    fragment:{
        width: 150,
        height: 150,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fragment__text:{
        color: '#FFF',
        fontSize: 30
    },
    text:{
        marginVertical: 30,
        fontSize: 30
    }
})

export default WS3;
