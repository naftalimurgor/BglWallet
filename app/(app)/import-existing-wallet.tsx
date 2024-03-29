import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from 'app/COLORS'
import { useFonts } from '@expo-google-fonts/poppins/useFonts'
import { Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { StatusBar } from 'expo-status-bar'

const ImportExistingWallet = () => {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  return (
    <View style={styles.createWalletContainer}>
      <StatusBar backgroundColor='#824FF4' />
      <View style={styles.walletTextContainer}>
        <Text style={styles.walletContainerHeading}>
          Import
          Existing Wallet
        </Text>
        <Text style={styles.walletText}>
          Seamlessly transition to Bitgesell Wallet by pasting your mnemonic phrase – effortlessly import your existing wallet and dive into decentralized convenience.
        </Text>
      </View>
      <View style={styles.createWalletForm}>
        <Text style={styles.inputLabel}>
          Seedphrase/Mnemonic
        </Text>
        <TextInput style={styles.passwordInput} placeholder='Paste wallet seed phrase' placeholderTextColor={COLORS.WHITE003} />
        <Text style={styles.inputLabel}>
          Password
        </Text>
        <TextInput style={styles.passwordInput} placeholder='Password' placeholderTextColor={COLORS.WHITE003} />

        <Text style={styles.walletText}>
          🔒 Keep this password safe as it will be used to keep your wallet safe on this device.
        </Text>
        <View>
          <Pressable style={styles.submitButton} onPress={() => alert('Im in!')}>
            <Text style={styles.submitButtonText}>Create a A New Wallet</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ImportExistingWallet

const styles = StyleSheet.create({
  createWalletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20
  },
  walletTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 144
  },
  walletContainerHeading: {
    color: COLORS.BLACK_ACCENT,
    fontSize: 30,
    fontWeight: '700', // Semibold in figma is kinda "bold" in code 
    fontFamily: 'Poppins_600SemiBold', // @todo: load async
    marginBottom: 22
  },
  walletText: {
    color: COLORS.WHITE003,
    fontSize: 16,
    marginBottom: 24
  },

  createWalletForm: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'

  },
  inputLabel: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Poppins_700Bold'

  },
  passwordInput: {
    width: 335,
    height: 81,
    marginLeft: 12,
    marginRight: 28,
    borderBottomColor: COLORS.WHITE004,
    borderStyle: 'solid',
    borderWidth: 2,
    borderTopColor: COLORS.WHITE,
    borderEndColor: COLORS.WHITE,
    borderLeftColor: COLORS.WHITE,
    borderRightColor: COLORS.WHITE,
    marginBottom: 40


  },

  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 335,
    height: 50,
    borderRadius: 11,
    backgroundColor: COLORS.BLACK_ACCENT,
  },
  submitButtonText: {
    color: COLORS.WHITE,
    fontSize: 16
  },
  // submitButtonContainer: {
  //     marginTop: 158
  // }
})