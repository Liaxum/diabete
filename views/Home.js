import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';

const styles = StyleSheet.create(({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 100,
        marginBottom: 20
    },
    button: {
        padding: 10,
        borderRadius: 50,
        margin: 5,
        backgroundColor: '#68B0AB'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#68B0AB',
        marginBottom: 20
    },
    box: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        margin: 20,
        title: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#8FC0A9',
            marginBottom: 10
        }
    }
}))

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    style={styles.image}
                    source={require('../assets/pictureHome.webp')}
                />
                <Text style={styles.title}>Bonjour, Michel</Text>
                <View style={styles.box}>
                    <Text style={styles.box.title}>Mes derniers rappels</Text>
                    <Text style={{ marginBottom: 10 }}>Vérifiez le taux d'insuline de Julie</Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Mois de Novembre</Text> :
                        découvrez le rapport du mois de votre enfant.
                    </Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <CustomButton styles={{ button: styles.button, title: {color: 'white'} }} title="Voir tous mes rappels" onPress={() => navigation.navigate('Notification')} />
                    </View>
                </View>
                <View>
                    <Text style={styles.box.title}>La courbe du taux de glycémie de Julie</Text>
                    <Image 
                        style={{ width: 300, height: 200, margin: 20 }}
                        source={require('../assets/graph.png')}
                    />
                    <View style={{alignItems: 'flex-end' }}>
                        <CustomButton styles={{ button: styles.button, title: {color: 'white'} }} title="Voir le détail" onPress={() => navigation.navigate('Profile')} />
                    </View>
                </View>
                <CustomButton styles={{ button: styles.button, title: {color: 'white'} }} title="Partager la fiche profile de Julie" onPress={() => navigation.navigate('Partage')} />
            </View>
        </ScrollView>
    );
}