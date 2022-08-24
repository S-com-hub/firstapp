import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ProductDetails } from "../components/ProductDetails";
import TabRoutes from './TabRoutes';
                                                                                      
const Drawer = createDrawerNavigator();


function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen component={TabRoutes} name={home} />
                <Drawer.Screen component={ProductDetails} name={ProductDetails} />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes;