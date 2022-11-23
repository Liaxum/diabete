import React from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import generalStyle from '../Styles';
import CustomButton from '../components/CustomButton';
import SharePro from './SharePro';

const styles= StyleSheet.create({
    title: {
        ...generalStyle.title,
        marginBottom: 100
    },
    btnFamily: {
        backgroundColor: '#8FC0A9',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        height: 60,
        width: 278,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'semibold',
        fontSize: 20,
    },
    btnPro: {
        backgroundColor: '#4A7C59',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        height: 60,
        width: 278,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default function Share({navigation}) {
    const showToast = () => {
        ToastAndroid.showWithGravity('Share profile to member family', ToastAndroid.LONG, ToastAndroid.CENTER)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Partager le profile</Text>
            <CustomButton styles={{button: styles.btnFamily, title: styles.btnText}} onPress={showToast} title="A un proche"/>
            <CustomButton styles={{button: styles.btnPro, title: styles.btnText}} onPress={() => navigation.navigate('SharePro')} title="A un Professionel" />
        </View>
    );
}