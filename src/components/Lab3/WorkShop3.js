import React from 'react'
import {
    SafeAreaView, StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {setColor, setCount} from '../../store/actions/labActions';
import {useNavigation} from '@react-navigation/core';

export const COLORS = [
    '#000',
    '#00f',
    '#0f0',
    '#f00',
    '#0ff',
    '#ff0',
    '#f0f',
    '#fff',
    '#009',
    '#090',
    '#900',
    '#099',
    '#990',
    '#909',
    '#999',
]

const WorkShop3 = () => {
    const lab = useSelector((store) => store.lab)
    const dispatch = useDispatch();
    const navigator = useNavigation();


    const changeColor = () => {
        let index = COLORS.indexOf(lab.color);
        let color;
        if (index >= COLORS.length -1)
            color = COLORS[0];
        else
            color = COLORS[index +1];
        dispatch(setColor(color));
    }

    const increment = () => {
        dispatch(setCount(lab.count + 1))
    }

    return(
        <SafeAreaView style={styles.ws3}>
            <Header/>
            <Text style={styles.text}>Root fragment</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttons}
                    onPress={() => increment()}
                >
                    <Text style={styles.buttons__text}>
                        Increment value
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}
                                  onPress={() => changeColor()}
                >
                    <Text  style={styles.buttons__text}>
                        Change Background
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.fragment, backgroundColor: lab.color}}
                    onPress={() => navigator.navigate('ws')}
                >
                    <Text style={styles.fragment__text}>
                        {lab.count}
                    </Text>
                </TouchableOpacity>
            </View>
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

export default WorkShop3;
