import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native';
import HeaderLab4 from './HeaderLab4';
import {ANDROID_VERSIONS} from '../../utils';
import ListItem from './ListItem';

const ListComponent = () => {
    return(
        <SafeAreaView style={styles.container}>
            <HeaderLab4/>
            <ScrollView style={styles.scroll}>
                {ANDROID_VERSIONS.map(item => {
                    return (
                        <ListItem item={item}/>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: '100%',
    },
    scroll: {
        width: '100%',
        paddingBottom: 100
    }
})

export default ListComponent;
