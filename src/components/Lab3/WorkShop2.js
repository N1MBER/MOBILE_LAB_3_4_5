import React, {useState} from 'react';
import {
    SafeAreaView, StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Header from './Header';

const WorkShop2 = () => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);

    const addItem = (type) => {
        let arr = [...items];
        if (type === 1){
            arr.push({
                color: '#F00',
                count: count
            })
        }else{
            arr.push({
                color: '#00F',
                count: count
            })
        }
        setCount(count+1)
        setItems(arr);
    }

    const deleteItem = () => {
        let arr = [...items];
        arr.splice(0,1);
        setItems(arr)
    }

    const replace =() => {
        let arr = [...items];
        arr[0].color = '#0F0';
        setItems(arr)
    }

    return(
        <SafeAreaView style={styles.ws2}>
            <Header/>
            <Text style={styles.text}>Root fragment</Text>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttons} onPress={() => addItem(1)}>
                        <Text style={styles.buttons__text}>Add Red Fragment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => addItem(2)}>
                        <Text style={styles.buttons__text}>Add Blue Fragment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => deleteItem()}>
                        <Text style={styles.buttons__text}>Remove Last Fragment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => replace()}>
                        <Text style={styles.buttons__text}>Replace With Green Fragment</Text>
                    </TouchableOpacity>
                    <View style={styles.items}>
                        {items.map((item, index) => {
                            return(
                                <View  style={{...styles.item, backgroundColor: item.color}}>
                                    <Text style={styles.item__text}>
                                        {item.count}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    ws2:{
        width: '100%',
        height: '100%',
        backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    scroll: {
        width: '100%',
        height: '100%',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
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
        color: '#FFF',
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
    text:{
        marginVertical: 30,
        fontSize: 30
    }
})

export default WorkShop2
