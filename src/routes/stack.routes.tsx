import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Signup } from '../screens/Signup';

const { Navigator, Screen} = createStackNavigator();


export function StackRoutes() {
    return (
        <Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
                // tabBarActiveTintColor: theme.colors.secondary,
                // tabBarInactiveTintColor: theme.colors.text,
                // tabBarLabelPosition: 'beside-icon',
                // tabBarStyle: {
                //     height: 55,
                //     paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                // }
            }}
        >
            <Screen
                name="Signup"
                component={Signup}
            />
        </Navigator>
    );
}

