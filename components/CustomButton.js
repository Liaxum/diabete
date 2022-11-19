import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CustomButton({styles, title, onPress}) {
    return (
        <TouchableOpacity style={styles?.button} onPress={onPress}>
            <Text style={styles?.title}>{title}</Text>
        </TouchableOpacity>
    );
}