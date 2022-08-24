import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import home from './homeone';
import category from '../components/category';
import brandinfo from '../components/brandinfo';
import createe from '../components/createe'

const Tab = createBottomTabNavigator();

function TabRoutes() {


    return (
        <Tab.Navigator
            initialRouteName={home}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position: 'absolute',
                    backgroundColor: '#ADD8E6',
                    // borderRadius: 50,
                    // bottom: 20,
                    // marginHorizontal: 16

                }
            }}
        >
            <Tab.Screen
                name={home} component={home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? 'red' : 'gray'
                                }}
                                source={imagePath.icHome} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name={category}
                component={category}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                            <Image
                                style={{
                                    tintColor: focused ? 'red' : 'gray'
                                }}
                                source={imagePath.icExplore}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name={brandinfo}
                component={brandinfo}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? 'red' : 'gray'
                                }}
                                source={imagePath.icProfile}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name={createe}
                component={createe}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    tintColor: focused ? 'red' : 'gray'
                                }}
                                source={imagePath.icProfile}
                            />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default TabRoutes