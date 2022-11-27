import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './views/Home';
import Profile from './views/Profile';
import Share from './views/Share';
import Notification from './views/Notification';
import SharePro from './views/SharePro';
import { Image } from 'react-native';
import CustomButton from './components/CustomButton';

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
                        case 'Profil':
                            return <Icon name="user" size={size} color={color} />;
                        case 'Notification':
                            return <Icon name="bell" size={size} color={color} />;
                        case 'Partage':
                            return <Icon name="share-alt" size={size} color={color} />;
                    }
                },
                headerRight: (_) => (
                    <CustomButton title={<Icon name="gear" size={24} color="#7D7D7D"/>} styles={{button: {
                        marginRight: 20,
                    }}}/>
                ),
                headerTitle: '',
                headerLeft: (_) => (
                    <Image source={require('./assets/graph.png')} style={{width: 125, height: 24, marginLeft: 20}}/>
                )
            })}>
                <Tab.Group>
                    <Tab.Screen name="Accueil" component={Home} />
                    <Tab.Screen name="Profil" component={Profile} />
                    <Tab.Screen name="Notification" component={Notification} />
                    <Tab.Screen name="Partage" component={Share} />
                </Tab.Group>
            </Tab.Navigator>
        </NavigationContainer>
    )
}