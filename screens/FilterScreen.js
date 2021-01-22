import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton.js'
import Colors from '../constants/Colors'

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor, false: '#767577' }}
        thumbColor={props.state ? Colors.primaryColor : '#f4f3f4'}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  )
}

const FilterScreen = (props) => {
  const { navigation } = props
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegatarian: isVegetarian,
    }

    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filter / Restrictions</Text>
      <FilterSwitch
        label='Gluten-Free'
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-Free'
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegatarian'
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  )
}

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meal',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-save'
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
})

export default FilterScreen
