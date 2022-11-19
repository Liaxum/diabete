import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './views/Home';
import Profile from './views/Profile';
import Contact from './views/Contact';
import Notification from './views/Notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({_, color, size}) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            return <Icon name="home" size={size} color={color} />;
                        case 'Profile':
                            return <Icon name="user" size={size} color={color} />;
                        case 'Contact':
                            return <Icon name="bell" size={size} color={color} />;
                        case 'Notification':
                            return <MaterialCommunityIcons name="message" size={size} color={color} />;
                    }
                }
            })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Contact" component={Contact} />
                <Tab.Screen name="Notification" component={Notification} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}