import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS } from './styles/colors';

import { 
    Welcome,
    SignIn,
    Login,
    Search,
    Discover,
    Following,   
} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator
            tabBarOptions={{  
                activeTintColor: COLORS.light.primary,
                inactiveTintColor: COLORS.light.textDark,
            }}>
            <Tab.Screen 
                name="Seguindo"
                component={Following}
                options={{ tabBarIcon: ({ focused, color, size }) => focused
                                                                    ? <Ionicons name="heart-sharp" size={size} color={color}/>
                                                                    : <Ionicons name="heart-outline" size={size} color={color}/>}} />
            <Tab.Screen
                name="Descubra"
                component={Discover}
                options={{ tabBarIcon: ({ focused, color, size }) => focused
                                                                    ? <Ionicons name="compass" size={size} color={color}/>
                                                                    : <Ionicons name="compass-outline" size={size} color={color}/>}} />
            <Tab.Screen
                name="Procurar"
                component={Search}
                options={{ tabBarIcon: ({ focused, color, size }) => focused
                                                                    ? <Ionicons name="md-copy" size={size} color={color}/>
                                                                    : <Ionicons name="md-copy-outline" size={size} color={color}/>}} />
        </Tab.Navigator>
    );
}

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;