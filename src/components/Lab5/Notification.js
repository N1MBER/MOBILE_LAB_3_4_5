import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const Notification = ({data}) => {
    return (
        <View style={styles.notification}>
            <View style={styles.notification__data}>
                {data.image &&
                   <View style={styles.imageContainer}>
                       <Image style={styles.imageContainer__image} source={data.image}/>
                   </View>
                }
                <View style={styles.text}>
                    <Text style={styles.text__title}>{data.title}</Text>
                    <Text style={styles.text__description}>{data.description}</Text>
                </View>
            </View>
            {data.isImportant &&
                <Text style={styles.notification__flag}>!</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    notification: {
        width: '100%',
        height: 80,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    notification__flag: {
        color: '#F30000',
        fontSize: 27,
        fontWeight: "700",
    },
    notification__data: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        overflow: 'hidden',
        marginRight: 10
    },
    imageContainer__image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    text: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text__title: {
        fontSize: 19,
        fontWeight: "600",
    },
    text__description: {
        fontSize: 14,
        fontWeight: "300",
    },

})

export default Notification;
