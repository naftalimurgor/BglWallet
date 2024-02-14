import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native'

import React, { useEffect, useState } from 'react'
import { COLORS } from 'app/COLORS'
import { useFonts } from '@expo-google-fonts/poppins/useFonts'
import {
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

import { API_URL, emailRegex } from '@/features/api/User'
import { useStorageState } from '@/app/hooks/useStorageState'
import { useDispatch, useSelector } from 'react-redux'
import { createAccount, createWallet } from '@/features/wallet/walletSlice'
import Toast from 'react-native-toast-message'

type User = {
  token: string
  auth: boolean
  uid: string
}

const CreateNewWallet = () => {
  const [item, setStorage] = useStorageState('user')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [seedphrase, setSeedphrase] = useState<string | null>(null)

  // 1. dispatch(action(payload))
  const dispatch = useDispatch()

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  const displayToast = (message: string, type: string) => {
    Toast.show({
      text1: message,
      type: type
    })
  }

  const handleSubmit = async () => {
    setIsSubmitting(submitting => !submitting)
    console.log('submitting..');

    const headers = {
      'Content-Type': 'application/json'
    }

    try {
      const res = await fetch(`${API_URL}/sign-up`, {
        body: JSON.stringify({ password, email }),
        method: 'POST',
        headers
      })
      const authObj = await res.json()

      if (authObj.uid && authObj.auth) {
        const user = { ...authObj, email }
        console.log(user)
        setStorage(JSON.stringify(user))

        dispatch(createAccount(user))
        await initWallet(authObj.uid, email).then(() => {
          // setStorage(authObj)
          dispatch(createWallet({ wallets: [], seedphrase: 'place holder seedphrase!' }))
          router.push('/save-wallet-phrase')
        })
      }
      if (!authObj.auth) {
        displayToast('Email address already in use, Use another email address', 'error')
        setIsSubmitting(submitting => !submitting)

      }

    } catch (error) {
      setIsSubmitting(submitting => !submitting)
    }
  }

  async function initWallet(uid: string, email: string) {
    const headers = {
      'Content-Type': 'application/json'
      // authorization headers here:
    }

    try {
      const res = await fetch(`${API_URL}/create-wallet`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ uid, email, token: null })
      })
      const wallet = await res.json()

      if (wallet.success) {
        setSeedphrase(wallet.seedphrase)
        dispatch(createWallet(wallet))
      }

    } catch (error) {
      console.log(error)
    }
  }
  const [secure, setSecure] = useState<boolean>(true)

  return (
    <View style={styles.createWalletContainer}>
      <StatusBar backgroundColor={COLORS.ACCENT} />
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
            onPress={async () => await handleSubmit()}>
            {/* {isSubmitting ? (<Image source={require('@/assets/accountLoader.gif')} style={{height: 15}} />): (<Text style={styles.submitButtonText}>Create A New Wallet</Text>)  } */}
            <Text style={styles.submitButtonText}>Create A New Wallet</Text>
          </Pressable>
        </View>
      </View>
      <Toast />
    </View>
  )
}

export default CreateNewWallet

const styles = StyleSheet.create({
  createWalletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20,
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