import React from "react";
import {Image, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {Home} from "./screens/";
import {icons, COLORS, FONTS, SIZES} from "./constants/"
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: "transparent",
  }
}


const Stack = createStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Home} 
        options={{
          title: "LOGROCKET STORE", 
          headerTintColor: COLORS.lightGray, 
          headerTitleStyle: {...FONTS.navTitle},
          headerLeft: ({onPress}) => (
            <TouchableOpacity
            style= {{marginLeft: SIZES.padding}}
            onPress = {onPress}
            >
              <Image 
              source={icons.menu} 
              resizeMode = "contain"
              style = {{
                width: 25,
                height: 25
              }}
              />
            </TouchableOpacity>
          ),
          headerRight: ({onPress}) => (
            <TouchableOpacity
            style={{
              marginRight: SIZES.padding,
            }}
            onPress = {() => console.log("search pressed")}
            >
              <Image source={icons.search} resizeMode="contain" style={{
                width: 25,
                height: 25
              }} />

            </TouchableOpacity>
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />
}