import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import image from '../../../assets/images/droid600.jpg';
import HeaderLab4 from './HeaderLab4';
import {useNavigation, useRoute} from '@react-navigation/core';

const VersionPage = ({...props}) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        setInfo(route.params)
    }, [route])

    const navigator = useNavigation();
    const route = useRoute();

    return (
        <SafeAreaView style={styles.container}>
            <HeaderLab4/>
            {info &&
                <ScrollView style={styles.scroll}>
                    <View style={styles.info}>
                        <View style={styles.info__container}>
                            <Image style={styles.info__image} source={image}/>
                        </View>
                        <View style={styles.info__data}>
                            <Image style={styles.icon} source={info.image}/>
                            <View style={styles.data}>
                                <Text style={styles.data__title}>{info.name}</Text>
                                <View style={styles.date}>
                                    <Text style={styles.date__title}>Released: </Text>
                                    <Text style={styles.date__value}>
                                        {info.released}
                                    </Text>
                                </View>
                                <View style={styles.button}>
                                    <Text style={styles.button__text}>Version Trailer</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.text__title}>Overview</Text>
                        <Text style={styles.text__description}>{info.description}</Text>
                    </View>
                </ScrollView>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%'
    },
    scroll: {
        width: '100%'
    },
    info: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info__image: {
        width: '100%',
        resizeMode: 'cover'
    },
    info__container: {
        overflow: 'hidden',
        width: '100%',
        height: 200,
        backgroundColor: '#000'
    },
    info__data: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    icon: {
        width: 150,
        resizeMode: 'contain'
    },
    data: {
        marginLeft: 20,
    },
    data__title: {
        fontSize: 30,
        fontWeight: "700",
        color: '#00d0a1',
        marginBottom: 10
    },
    date:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    date__title:{
        fontSize: 16,
        fontWeight: "600"
    },
    date__value:{
        fontSize: 14,
        fontWeight: "500",
        color: '#6b6969'
    },
    button: {
        marginTop: 30,
        marginLeft: 30,
        marginHorizontal: "auto",
        width: 150,
        height: 40,
        backgroundColor: '#6b6969',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button__text: {
        fontSize: 16,
        fontWeight: "600",
        color: '#FFF',
        textTransform: 'uppercase'
    },
    text: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text__title: {
        width: '90%',
        fontWeight: "700",
        fontSize: 16,
        marginBottom: 10
    },
    text__description: {
        width: '90%',
        textAlign: 'justify'
    },
})

export default VersionPage;
