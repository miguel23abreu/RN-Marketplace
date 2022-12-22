import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Approutes } from "../routes/app.routes";
import { StyleSheet, View } from "react-native";

const { Navigator, Screen } = createDrawerNavigator();

function Header(){
    return(
        <View >
            <Text>Exemplo</Text>
        </View>
    )
}

export function PrincipalScreen(){
    return(
        <Navigator>
            <Screen name="a" component={Approutes} options={{headerStyle:{backgroundColor: "#87CEFA"}}}/>
        </Navigator>
    )
}
