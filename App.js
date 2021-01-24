import React, { useState } from 'react'
import { enableScreens } from 'react-native-screens'
import { View, StatusBar } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MealsNavigator from './navigation/MealsNavigator'
import mealsRedcuers from './store/reducers/mealReducers'

// enableScreens()

const rootReducer = combineReducers({
  meals: mealsRedcuers,
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  console.ignoreLogs = ['Warning: Each', 'Warning: Failed']
  console.disableYellowBox = true

  if (!fontLoaded) {
    return (
      <View>
        <StatusBar barStyle='light-content' />
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
          onError={(err) => console.log(err)}
        />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}
