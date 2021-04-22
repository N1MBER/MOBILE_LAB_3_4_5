import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/core';
import load from '../../../assets/images/download.png';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const Header = ({setImage}) => {


    const requestToPhotoLibraryIOS = () => {
        const RequestObject = {
            title: 'Разрешить доступ приложению',
            buttonPositive: 'Разрешить',
            buttonNegative: 'Запретить'
        }
        console.log(123)
        check(PERMISSIONS.IOS.PHOTO_LIBRARY,RequestObject)
            .then((result) => {
                if (result !== RESULTS.GRANTED){
                    request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
                        loadImage()
                    }).catch(e => {})
                }
                else loadImage()
            })
            .catch((error) => {

            });
    }

    const navigator = useNavigation();
    const route = useRoute();

    const loadImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            cropping: true,
            width: 1000,
            cropperCircleOverlay: true,
            height: 1000,
            maxHeight: 1200,
            maxWidth: 1200,
        },(response => {
            if(response && response.uri){
                setImage(response)
            }
        }))
    }


    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.button}
                              onPress={() => navigator.navigate('tasks')}
            >
                <Text style={styles.button__text}>
                    Tasks
                </Text>
            </TouchableOpacity>
            {route.name === 'form' &&
            <TouchableOpacity style={styles.load}
                onPress={() => loadImage()}
            >
                <Image style={styles.load__image} source={load}/>
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        backgroundColor: '#842eef',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal: 20
    },
    button: {
        // marginLeft: 20
    },
    button__text: {
        color: '#FFF',
        fontSize: 20
    },
    load: {
        width: 30,
        height: 30,
    },
    load__image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default Header;
