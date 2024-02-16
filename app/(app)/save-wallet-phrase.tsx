// @ts-nocheck
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from 'app/COLORS'
import { useFonts } from '@expo-google-fonts/poppins/useFonts'
import {
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { API_URL } from '@/features/api/User'
import { createWallet } from '@/features/wallet/walletSlice'
import Toast from 'react-native-toast-message'
import { createNewWallet } from '../utils'

const SaveSeedPhrase = () => {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  const dispatch = useDispatch()

  // @ts-ignore
  const wallet = useSelector(state => state.wallet.wallet)
  console.log('state auth object:', wallet)


  return (
    <View style={styles.createWalletContainer}>
      <StatusBar backgroundColor={COLORS.ACCENT} />
      <View style={styles.walletTextContainer}>
        <Text style={[styles.walletContainerHeading, { fontFamily: fontsLoaded ? 'Poppins_600SemiBold' : '' }]}>
          Back up
          Seed Phrase
        </Text>
        <Text style={styles.walletText}>
          Create a new  Bitgesell Wallet to  manage all your
          BGL and other assets
        </Text>
      </View>
      <View style={styles.createWalletForm}>
        <Text style={[styles.inputLabel, { fontFamily: fontsLoaded ? 'Poppins_400Regular' : '' }]}>
          Secret Phrase/Mnemonic
        </Text>
        <TextInput
          editable={false}
          value={wallet.mnemonic}
          style={styles.passwordInput}
          multiline={true}
          autoCorrect={false}
        />

        <Text style={[styles.walletText, { fontFamily: fontsLoaded ? 'Poppins_400Regular' : '' }]}>
          🔒 Important: Backup Your Seed Phrase!
          Secure your account:
          Write down and store your seed phrase in a safe place. It's your key to account recovery.
        </Text>
        <View style={styles.submitButtonContainer}>
          <Pressable style={[styles.submitButton]}
            onPress={() => {
              router.push('/(home)/')
            }}>
            <Text style={styles.submitButtonText}>Save Seed Phrase</Text>
          </Pressable>
        </View>
      </View>
      <Toast />
    </View>
  )
}

export default SaveSeedPhrase

const styles = StyleSheet.create({
  createWalletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20
  },
  walletTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 70
  },
  walletContainerHeading: {
    color: COLORS.BLACK_ACCENT,
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 22
  },
  walletText: {
    color: COLORS.WHITE003,
    fontSize: 14,
    marginBottom: 24
  },

  createWalletForm: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'

  },
  passwordInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 10,
    color: COLORS.BLACK
  },

  inputLabel: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: '700',
  },
  passwordInput: {
    width: 300,
    fontSize: 16,
    height: 150,
    // marginRight: 28,
    borderColor: COLORS.WHITE004,
    borderStyle: 'solid',
    borderWidth: 2,
    borderTopColor: COLORS.WHITE,
    borderEndColor: COLORS.WHITE,
    borderLeftColor: COLORS.WHITE,
    borderRightColor: COLORS.WHITE,
    marginBottom: 40,
    marginTop: 20
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
    fontSize: 14,
    fontWeight: '600'
  },
  submitButtonContainer: {
    // marginTop: 158
  }
})