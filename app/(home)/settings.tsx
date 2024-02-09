import React from 'react'
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native'
import { COLORS } from '../COLORS'
import { TextInput } from 'react-native-gesture-handler'
const Settings = () => {
  return (
    <ScrollView style={styles.settingsContainer}>
      <View>
        <Text style={styles.headingText}>Change password</Text>
        <Text style={styles.text}>
          Set a new password for your wallet. Provide old password to set new one.
        </Text>
      </View>
      <View>
        <Text style={styles.textLabel}>Old Password</Text>
        <TextInput
          style={{ maxWidth: 293, minHeight: 50, borderColor: COLORS.BLACK, borderWidth: 1, borderRadius: 11 }}
          secureTextEntry={true}
        />
      </View>
      <View style={{ marginTop: 22 }}>
        <Text style={styles.textLabel}>New Password</Text>
        <TextInput
          style={{ maxWidth: 293, minHeight: 50, borderColor: COLORS.BLACK, borderWidth: 1, borderRadius: 11 }}
          secureTextEntry={true}
        />
        <Pressable style={styles.changePasswordButton}>
          <Text style={styles.buttonText}>
            Change
          </Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 77 }}>
        <Text style={styles.headingText}>
          Reset Wallet
        </Text>
        <Text style={styles.text}>
          Delete wallet and create an new account
        </Text>
        <Pressable style={{ backgroundColor: '#FF0707', height: 42, width: 174, alignItems: 'center', justifyContent: 'center', borderRadius: 11 }}>
          <Text style={styles.buttonText}>
            Delete Wallet
          </Text>
        </Pressable>
        <Text style={{ opacity: 0.66, color: '#FF0707', marginTop: 15 }}>
          Note: this removes the current account and may only restored throught the backed up seedphrase
        </Text>
      </View>
    </ScrollView>
  )
}

export default Settings

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 49
  },
  textLabel: {
    marginBottom: 2,
    color: COLORS.BLACK,
    fontWeight: '500',
    fontSize: 16
  },
  headingText: {
    color: COLORS.BLACK,
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 15
  },
  changePasswordButton: {
    height: 42,
    marginTop: 29, maxWidth: 110,
    backgroundColor: COLORS.BLACK_ACCENT,
    borderRadius: 11, alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: '400',
    color: '#AAAAAA'
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: '600',
    fontSize: 16
  }
})