import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../COLORS'

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: COLORS.WHITE
    }
})