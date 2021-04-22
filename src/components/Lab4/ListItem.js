import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import {useNavigation} from '@react-navigation/core';
const ListItem = ({item}) => {
    const navigator = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={item.image}/>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {`${item.name} \nversion: ${item.version}`}
                </Text>
                <Text style={styles.text}>{item.released}</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigator.navigate('lab4item', item)}
                >
                    <Text style={styles.button__text}>Check Version</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    info: {
        marginLeft: 20
    },
    title: {
        fontSize: 21,
        fontWeight: "700",
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        color: '#414141'
    },
    button:{
        marginTop: 20,
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#650096'
    },
    button__text: {
        color: '#FFF',
        fontSize: 20
    }
})

export default ListItem;
