import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Mea Screen</Text>
      <Button
        title='Go to Details!'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CategoryMealScreen
