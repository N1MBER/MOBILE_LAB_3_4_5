import React, {useState} from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

const Input = ({value, placeholder, setValue}) => {
    const [active, setActive] = useState(false);

    return <TextInput
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        style={{...styles.input,borderBottomColor: active ? '#000': '#b7b7b7'}}
        value={value}
        onChangeText={(val) => setValue(val)}
        placeholder={placeholder}
    />
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 25,
        borderBottomWidth: 1,
        marginBottom: 15
    },
    text: {

    }
})

export default Input;
