import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from 'app/COLORS'
import { useFonts } from '@expo-google-fonts/poppins/useFonts'
import { Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import { emailRegex } from '@/features/api/User'
import { useStorageState } from '../hooks/useStorageState'
import { useDispatch, useSelector } from 'react-redux'


const CreateNewWallet = () => {

  // 1. dispatch(action(payload))
  const dispatch = useDispatch()
  // 2. sample state access
  // @ts-ignore 
  const wallet = useSelector(state=> state.wallet)

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  const [session, setSession] = useStorageState('session')

  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleSubmit = async () => {
    // use a thunk to perform create wallet with the appropriate error states
    router.replace('/(home)/')
  }

  const [secure, setSecure] = useState<boolean>(true)

  return (
    <View style={styles.createWalletContainer}>
      <StatusBar backgroundColor='#824FF4' />
      <View style={styles.walletTextContainer}>
        <Text style={[styles.walletContainerHeading, { fontFamily: fontsLoaded ? 'Poppins_600SemiBold' : '' }]}>
          Create New Wallet
        </Text>
        <Text style={styles.walletText}>
          Create a new  Bitgesell Wallet to  manage all your
          BGL and other assets
        </Text>
      </View>
      <View style={styles.createWalletForm}>
        <Text style={[styles.inputLabel, { fontFamily: fontsLoaded ? 'Poppins_700Bold' : '' }]}>
          Enter Email
        </Text>
        <TextInput
          style={styles.passwordInput}
          autoCorrect={false}
          onChangeText={(text) => {
            setEmail(text)
          }}
          autoComplete='email'
        />

        <Text style={[styles.inputLabel, { fontFamily: fontsLoaded ? 'Poppins_700Bold' : '' }]}>
          Enter Password
        </Text>

        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            textContentType='password'
            secureTextEntry={secure}
            autoCorrect={false}
            onChangeText={(text) => {
              setPassword(text)
            }}
          />
          <Feather
            name={secure ? "eye" : "eye-off"}
            size={24}
            onPress={() => {
              setSecure((secure) => !secure)
            }}
            color="black"
            style={{ marginLeft: -32, marginBottom: 40, }}
          />

        </View>
        <Text style={styles.walletText}>
          🔒 Keep this password safe as it will be used to keep your wallet safe on this device.
        </Text>
        <View style={styles.submitButtonContainer}>
          <Pressable style={[styles.submitButton, { opacity: password !== '' && emailRegex(email) ? 1 : 0.5 }]}
            disabled={password === '' && !emailRegex(email)}
            onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Create A New Wallet</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default CreateNewWallet

const styles = StyleSheet.create({
  createWalletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20,
    paddingLeft: 20,
  },
  walletTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 144
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
    fontSize: 16,
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
    justifyContent: 'center'
  },

  inputLabel: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: '700',
  },
  passwordInput: {
    width: 300,
    fontSize: 16,
    height: 81,
    marginLeft: 12,
    // marginRight: 28,
    borderBottomColor: COLORS.WHITE004,
    borderStyle: 'solid',
    borderWidth: 1,
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
    fontSize: 16,
    fontWeight: '600'
  },
  submitButtonContainer: {
    // marginTop: 158
  }
})