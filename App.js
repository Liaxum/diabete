import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './views/Home';
import Profile from './views/Profile';
import Share from './views/Share';
import Notification from './views/Notification';
import SharePro from './views/SharePro';


const Tab = createBottomTabNavigator();


export default function App() {
    DefaultTheme.colors.background = 'white';
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({_, color, size}) => {
                    switch (route.name) {
                        case 'Accueil':
                            return <Icon name="home" size={size} color={color} />;
                        case 'Profile':
                            return <Icon name="user" size={size} color={color} />;
                        case 'Notification':
                            return <Icon name="bell" size={size} color={color} />;
                        case 'Partage':
                            return <Icon name="share-alt" size={size} color={color} />;
                    }
                },
                contentStyle: {
                    backgroundColor: 'white',
                }
            })}>
                <Tab.Group>
                    <Tab.Screen name="Accueil" component={Home} />
                    <Tab.Screen name="Profile" component={Profile} />
                    <Tab.Screen name="Notification" component={Notification} />
                    <Tab.Screen name="Partage" component={Share} />
                </Tab.Group>
                <Tab.Group screenOptions={{presentation: 'modal'}}>
                    <Tab.Screen name="SharePro" component={SharePro} />
                </Tab.Group>
            </Tab.Navigator>
        </NavigationContainer>
    )
}