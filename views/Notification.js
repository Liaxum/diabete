import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#68B0AB",
        margin: 20,
    },  
    header: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 15,
    },
    notif: {
        margin: 10,
    },
    date: {
        padding: 10,
        fontSize: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: 95
    },
    message: {
        width: "100%",
        fontSize: 16,
        padding: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    newNotification: {
        date: {
            backgroundColor: "#F3DE9A",
        },
        message: {
            backgroundColor: "#FAF3DD",
        }
    },
    oldNotification: {
        date: {
            backgroundColor: '#8FC0A9'
        },
        message: {
            backgroundColor: '#C8D5B9'
        }
    }
});

function Item({ item, title }) {
    if (title === "Les rappels non-lus") {
        return (
            <View style={styles.notif}>
                <View style={[styles.date, styles.newNotification.date]}><Text >{item.date}</Text></View>
                <View style={[styles.message, styles.newNotification.message]}><Text>{item.message}</Text></View>
            </View>
        );
    } else {
        return (
            <View style={styles.notif}>
                <View style={[styles.date, styles.oldNotification.date]}><Text >{item.date}</Text></View>
                <View style={[styles.message, styles.oldNotification.message]}><Text>{item.message}</Text></View>
            </View>
        )
    }
}

export default function Notification() {
    const notification = [
        {
            title: "Les rappels non-lus",
            data: [
                {date: new Date().toLocaleDateString(), message: "Glycémie faible, donner du sucre à Julie"},
            ]
        },
        {
            title: "Les rappels lus",
            data: [
                {date: "12/12/2020", message: "Glycémie faible, donner du sucre à Julie"},
            ]
        }
    ]


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Journalier</Text>
            <SectionList 
            sections={notification}
            keyExtractor={({item, index}) => item + index}
            renderItem={({item, section: {title}}) => <Item item={item} title={title} />} 
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
            )} />
        </View>
    );
}