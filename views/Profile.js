import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import generalStyle from '../Styles';

const styles = StyleSheet.create({
    title: {
        ...generalStyle.title,
        margin: 30,
    },
    image: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginRight: 30,
    },
    button: {
        padding: 10,
        borderRadius: 50,
        margin: 5,
        borderWidth: 1,
        borderColor: '#68B0AB'
    }
})

export default function Profile({navigation}) {
    return (
        <View style={{ flex: 1}}>
            <Text style={styles.title}>Fiche enfant</Text>
            <View style={{flexDirection: 'row', marginLeft: 30}}>
                <Image 
                    style={styles.image}
                    source={require('../assets/pictureHome.webp')} 
                />
                <View>
                    <Text style={generalStyle.subTitle}>Julie Martin</Text>
                    <Text style={{marginBottom: 30}}>9 ans</Text>
                    <CustomButton styles={{button: styles.button}} title="Partager la fiche" onPress={() => navigation.navigate('Partage')}/>
                </View>
            </View>
        </View>
    );
}