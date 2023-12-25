
import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const wallet = () => {
  return (
    <ScrollView style={styles.walletContainer}>
      <View style={styles.balanceContainer}>
        <View style={styles.headerContainer}>

        </View>
      </View>
    </ScrollView>
  )
}

export default wallet

const styles = StyleSheet.create({
  walletContainer: {
    flex: 1,
  },
  balanceContainer: {
    backgroundColor: '#A179FC',
    minHeight: 300,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  headerContainer: {

  }

})