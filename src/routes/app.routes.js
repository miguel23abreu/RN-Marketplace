import React from "react"

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { ProductScreen } from "../screens/Product/ProductScreen"
import { CategoryScreen } from "../screens/Product/Category/CategoryScreen"

const { Navigator, Screen} = createMaterialTopTabNavigator();

export function Approutes(){
    return(
        <Navigator>
            <Screen name="Produtos" component={ProductScreen}/>
            <Screen name="Categorias" component={CategoryScreen}/>
        </Navigator>
    )
}