import React from "react";
import Homes from "../NewProject/android/app/src/Components/Home"
import Signup from "../NewProject/android/app/src/Components/Signup"
import Login from "../NewProject/android/app/src/Components/Login"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
    
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={Homes} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}