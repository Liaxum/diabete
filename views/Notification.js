import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
    newNotification: {
        date: {
            backgroundColor: "#F3DE9A",
            padding: 5,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            width: "47%",
        },
        message: {
            backgroundColor: "#F3DE9A",
            width: "100%",
            padding: 5,
        }
    }
});

function Item({ item }) {
    return (
        <View>
            <View style={styles.newNotification.date}><Text >{item.date}</Text></View>
            <Text style={styles.newNotification.message}>{item.message}</Text>
        </View>
    );
}

export default function Notification() {
    const newNotification = [
        {
            date: new Date().toDateString(),
            message: "Glycémie faible, donner du sucre à Julie"
        }
    ];

    const renderItem = ({ item }) => (<Item item={item} />)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notification Screen</Text>
            <Text>Les rappels non-lus :</Text>
            <FlatList data={newNotification} renderItem={renderItem} />
        </View>
    );
}