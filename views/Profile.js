import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import ButtonGroup from '../components/ButtonGroup';
import CustomButton from '../components/CustomButton';
import generalStyle from '../Styles';

const styles = StyleSheet.create({
    title: {
        ...generalStyle.title,
        margin: 30,
    },
    imageProfile: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginRight: 30,
    },
    imageGraph: {
        margin: 20,
        width: '85%',
        height: 200
    },
    button: {
        padding: 10,
        borderRadius: 50,
        margin: 5,
        borderWidth: 1,
        borderColor: '#68B0AB'
    },
    globalButtonGroup: {
        marginTop: 50,
        padding: 15,
    },
    btnButtonGroup: {
        height: 34,
        width: 105,
    },
    box: {
        borderColor: '#C8D5B9',
        borderWidth: 1,
        borderRadius: 20,
        margin: 20,
        padding: 15,
    }
});

export default function Profile({navigation}) {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={styles.title}>Fiche enfant</Text>
            <View style={{flexDirection: 'row', marginLeft: 30}}>
                <Image 
                    style={styles.imageProfile}
                    source={require('../assets/pictureHome.webp')} 
                />
                <View>
                    <Text style={generalStyle.subTitle}>Julie Martin</Text>
                    <Text style={{marginBottom: 30}}>9 ans</Text>
                    <CustomButton styles={{button: styles.button}} title="Partager la fiche" onPress={() => navigation.navigate('Partage')}/>
                </View>
            </View>
            <ButtonGroup selectColor="#C8D5B9" defaultColor="#F3F3F3" selectTextColor="#18201A" defaultTextColor="#B5B5B5" borderRadius={100} globalStyles={styles.globalButtonGroup} btnStyle={styles.btnButtonGroup} btns={['Jour', 'Mois', 'Année']}/>
            <Text style={{...generalStyle.subTitle, margin: 20}}>Données pour le {new Date().toDateString()}</Text>
            <Image style={styles.imageGraph} source={require('../assets/graph.png')} />
            <View style={styles.box}>
                <Text style={{...generalStyle.subTitle, marginBottom: 5}}>Dose d'insuline par Jour</Text>
                <Text>Données avec chiffre et unité de mesure</Text>
            </View>
            <View style={styles.box}>
                <Text style={{...generalStyle.subTitle, marginBottom: 5}}>Crise d'hypoglycémie</Text>
                <Text>Données avec chiffre et unité de mesure</Text>
            </View>
        </ScrollView>
    );
}