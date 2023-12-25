import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { COLORS } from '../COLORS'
import { TextInput } from 'react-native-gesture-handler'

interface Account {
  seed: string,
  accountIndex: number
  wallet: {
    address: string,
    privateKey: string
  }
}
const BackupWallet = () => {
  const [selectedAccount, setselectedAccount] = useState<Account>({
    seed: '',
    accountIndex: 1,
    wallet: {
      address: '',
      privateKey: ''
    }
  })

  return (
    <View style={styles.backupWalletContainer}>
      <View style={{ minHeight: 109, minWidth: 231, backgroundColor: '#F5F5F5', marginLeft: 66, marginRight: 66 }}>
        <View>
          <Text style={{color: '#AAAAAA', paddingLeft: 50, paddingRight: 23, marginTop: 13}}>
            Reveal Private Key for
            Account {selectedAccount.accountIndex}
          </Text>
          <TextInput/>
        </View>

      </View>
    </View>
  )
}

export default BackupWallet

const styles = StyleSheet.create({
  backupWalletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  }
})