import React, {useState} from 'react';
import {
    TextInput,
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Header from './Header';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Input from './Input';
import image from '../../../assets/images/oreo.png';
import {useDispatch} from 'react-redux';
import {addTask} from '../../store/actions/labActions';
import {useNavigation} from '@react-navigation/core';

const Form = () => {
    const [data, setData] = useState({
        image: undefined,
        title: '',
        description: '',
        isImportant: false
    })

    const dispatch = useDispatch();
    const navigator = useNavigation();

    const setValue = (key, value) => {
        setData({...data,[key]:value})
    }

    const  add = () => {
        dispatch(addTask(data))
        navigator.navigate('tasks')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                setImage={(val) => setValue('image', val)}
            />
            <View style={styles.form}>
                <Input
                    placeholder={'Title'}
                    value={data.title}
                    setValue={(val) => setValue('title', val)}
                />
                <Input
                    placeholder={'Description'}
                    value={data.description}
                    setValue={(val) => setValue('description', val)}
                />
                <Text style={styles.text}>Priority</Text>
                <BouncyCheckbox
                    size={20}
                    fillColor="#842eef"
                    unfillColor="#FFFFFF"
                    text="Important"
                    iconStyle={{...styles.input,
                        borderColor: data.isImportant ?
                            '#842eef':'#b7b7b7'
                    }}
                    textStyle={{textDecorationLine:'none'}}
                    isChecked={data.isImportant}
                    // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    onPress={(val) =>
                        setValue('isImportant', val)}
                />
                <TouchableOpacity style={styles.button}
                    onPress={() => add()}
                >
                    <Text style={styles.button__text}>Add task</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    form: {
        padding: 20
    },
    input: {
        borderRadius: 1,
        borderWidth: 2
    },
    text: {
        marginTop: 5,
        marginBottom: 20,
        fontSize: 19
    },
    button:{
        marginTop: 60,
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#842eef'
    },
    button__text: {
        color: '#FFF',
        fontSize: 20
    }
})

export default Form;
